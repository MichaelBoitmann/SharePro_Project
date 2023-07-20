import React, { useState } from 'react';
import { AiOutlineCloudDownload, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { client } from '../client';
import Spinner from './Spinner';
import { categories } from '../utils/data';


const CreatePin = ({ user }) => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(null);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [wrongImageType, setWrongImageType] = useState(null);

  const navigate = useNavigate();

  const uploadImage = (e) => {
    const { type } = e.target.files[0];

    if(type === 'image/png' || type === 'image/svg' || type ==='image/jpeg' || type === 'image/giff' || type === 'image/tiff') {
      setWrongImageType(false);
      setLoading(true);

      client.assets
        .upload('mage', e.target.files[0], { contentType: type, filename: newFilename})
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log('Image upload error', error);
        })
    } else {
      setWrongImageType(true);
    }
  }

  return (
    <div className="flex flex-col justify-center mt-5 lg:h-4/5">
      {fields && (
        <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in"
        >Please fill in all the fields</p>
      )}
      <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 lg:w-4/5 w-full p-3">
        <div className="bg-secondColor p-3 flex flex-0.7 w-full">
          <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
            {loading && <Spinner />}
            {wrongImageType && <p>Wrong image type</p>}
            {!imageAsset ? (
              <label>
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-2xl">
                      <AiOutlineCloudUpload />
                    </p>
                    <p className="text-lg">Click to upload</p>
                  </div>
                  <p className="mt-32 text-gray-400">
                    Use high-quality jpeg, SVG, PNG, GIF or TIFF less than 20MB.
                  </p>
                </div>
                <input
                  type="file"
                  name="upload-image"
                  onChange={uploadImage}
                  className="w-0 h-0"
                ></input>
              </label>
            ) : (
              <div className="relative h-full">
                <img src={imageAsset?.url} alt="uploaded-pic h-full w-full" />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 rounded-full bg-white text-xl cursor-pointer lutline-non hover:shadow-md transition-all duration-500 ease-in-out"
                  onCanPlay={() => setImageAsset(null)}
                >

                </button>
              </div>                        
            )}
          </div>

        </div>
      </div>
    </div>
  )
};

export default CreatePin;
