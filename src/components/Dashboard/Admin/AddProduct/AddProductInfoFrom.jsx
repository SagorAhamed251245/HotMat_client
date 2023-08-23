import { useForm } from "react-hook-form";
import DropSvg from "./DropSvg";

const AddProductInfoFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/* Product information */}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3>Product information</h3>
        <hr />
        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold  " htmlFor="title">
            Title:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md "
            type="text"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>

        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="description">
            Description:
          </label>
          <textarea
            className="border-black border rounded w-full p-2 h-36 shadow-md"
            id="description"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && <span>This field is required</span>}
        </div>

        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold " htmlFor="packagingDelivery ">
            Packaging & Delivery:
          </label>
          <textarea
            className="border-black border rounded w-full p-2  shadow-md"
            id="packagingDelivery"
            {...register("packagingDelivery", { required: true })}
          ></textarea>
          {errors.packagingDelivery && <span>This field is required</span>}
        </div>

        <div>
          <label className="block text-[#34B701] mb-1 mt-3 font-bold" htmlFor="warnings">
            Warnings:
          </label>
          <textarea
            className="border-black border rounded w-full p-2  shadow-md"
            id="warnings"
            {...register("warnings", { required: true })}
          ></textarea>
          {errors.warnings && <span>This field is required</span>}
        </div>
      </div>
      {/* Media information*/}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl  ">
        {/* Additional :*/}
        <h3>Media</h3>
        <hr />
        <div className="md:flex gap-5">
          <div className="md:w-[60%] ">
            <label className="block text-[#34B701] mb-1 mt-3 font-bold " htmlFor="image">
              Main Image:
            </label>
            <label className="shadow-md flex justify-center w-full h-32 md:h-96 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <DropSvg />
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span className="text-blue-600 underline">browse</span>
                </span>
              </span>
              <input
                type="file"
                id="image"
                {...register("image", { required: true })}
                className="hidden "
              />
            </label>
          </div>

          {/* Additional :*/}
          <div className="md:w-[40%]">
            <label className="block text-[#34B701] mb-1 mt-3 font-bold " htmlFor="images">
              Additional Image URLs:
            </label>

            <label className=" shadow-md flex justify-center w-full h-32 md:h-96  px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <DropSvg />
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or
                  <span className="text-blue-600 underline">browse</span>
                </span>
              </span>
              <input
                type="file"
                id="images"
                {...register("images", { required: true })}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductInfoFrom;
