import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  age: z.number().min(18, "You must be at least 18 years old").max(120, "Age must be less than or equal to 120"),
});
type FormData = z.infer<typeof schema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", {
            valueAsNumber: true,
          })}
          id="age"
          type="number"
          className={`form-control ${errors.age ? "is-invalid" : ""}`}
        />
        {errors.age && (
          <div className="invalid-feedback">{errors.age.message}</div>
        )}
      </div>
      <button disabled={!isValid}type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
