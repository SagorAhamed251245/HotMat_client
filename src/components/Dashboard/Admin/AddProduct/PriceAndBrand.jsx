import { useForm } from "react-hook-form";

const PriceAndBrand = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/* pricing */}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <h3>Pricing</h3>
        <hr />
        <div>
          <label className="block" htmlFor="price">
            Price:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="number"
            id="price"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
        </div>

        <div>
          <label className="block" htmlFor="discount_percent">
            Discount Percent:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="discount_percent"
            id="discount_percent"
            {...register("discount_percent", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>
      </div>

      {/* Organization*/}
      <div className="border rounded-xl w-full p-5 mb-5 shadow-xl">
        <div>
          <label className="block" htmlFor="brand">
            brand:
          </label>
          <input
            placeholder="Product brand name"
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="brand"
            {...register("brand", { required: true })}
          />
          {errors.brand && <span>This field is required</span>}
        </div>
        <div>
          <label className="block" htmlFor="category">
            Category:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="category"
            {...register("category", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>

        <div>
          <label className="block" htmlFor="sub_category">
            Sub Category:
          </label>
          <input
            className="border-black border rounded w-full p-2 shadow-md"
            type="text"
            id="sub_category"
            {...register("sub_category", { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </div>
      </div>
    </>
  );
};

export default PriceAndBrand;