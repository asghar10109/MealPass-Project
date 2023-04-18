// import {InputWrapper} from "components/react-hook-form/input-wrapper";
// import {ReactSelect} from "components/react-hook-form/react-select";
// import {Label} from "components/react-hook-form/label";



// export type UserProps = {
//   name: string;
//   img: string;
//   email: string;
//   password: string;
//   number: string | number;
//   custom: string | number;
//   pattern: string;
//   textarea: string;
//   select: string;
//   reactSelect: string;
//   reactSelectMulti: string;
//   switch: boolean;
//   checkbox: boolean;
//   radio: string;

// };

// const Widget2: React.FC = () => {
//   const user: UserProps = {
//     name: "Lucas smith",
//     img: "m1.png",
//     email: "",
//       password: "",
//       number: "",
//       custom: "",
//       pattern: "",
//       textarea: "",
//       select: "",
//       reactSelect: "",
//       reactSelectMulti: "",
//       switch: false,
//       checkbox: false,
//       radio: "",
//   };

//   const {
//     handleSubmit,
//     reset,
//     formState: {errors},
//   } = methods;

//   const onSubmit = (data: UserProps) => {
//     //eslint-disable-next-line
//     console.log(JSON.stringify(data, null, 2));
//   };
//   return (
//     <div className="relative flex flex-col items-center justify-center h-64 w-full overflow-hidden user-widget-2 pro" >
//       <h1 className="absolute top-0 left-0 inline-flex items-center font-medium">Add New Restaurant</h1>
//       <input type="text" className="w-full h-10 px-2 mb-8 border-gray-300 rounded-md border" placeholder="Product Title" />
//       <input type="text" className="w-full h-20 px-2 mb-8 border-gray-300 rounded-md border" placeholder="Product Description" />
//       <input type="file" className="w-full h-20 px-2 border-gray-300 rounded-md border pt-7" placeholder="Product Description" />

//       <button
//         type="submit"
//         className="absolute bottom-0 right-0 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium hover:rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-600 rounded-md border-radius focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//         Submit
//       </button>

//       <InputWrapper outerClassName="sm:col-span-4">
//                   <Label id="react-select">React Select</Label>
//                   <ReactSelect
//                     id="react-select"
//                     name="reactSelect"
//                     rules={{required: "This is required"}}
//                     options={[
//                       {value: "usa", label: "USA"},
//                       {value: "canada", label: "Canada"},
//                       {value: "australia", label: "Australia"},
//                     ]}
//                   />
//                   {/* {errors?.reactSelect?.message && (
//                     <ErrorMessage>{errors.reactSelect.message}</ErrorMessage>
//                   )} */}
//                 </InputWrapper>
//     </div>
//   );
// };

// export default Widget2;





import { useForm, FormProvider } from "react-hook-form";
import SectionTitle from "components/section-title";
import Widget from "components/widget";
import { InputWrapper } from "components/react-hook-form/input-wrapper";
import { Label } from "components/react-hook-form/label";
import { ErrorMessage } from "components/react-hook-form/error-message";
import { Input } from "components/react-hook-form/input";
import { NumericInput } from "components/react-hook-form/numeric-input";
import { Textarea } from "components/react-hook-form/textarea";
import { Select } from "components/react-hook-form/select";
import { Switch } from "components/react-hook-form/switch";
import { Checkbox } from "components/react-hook-form/checkbox";
import { Radio } from "components/react-hook-form/radio";
import { ReactSelect } from "components/react-hook-form/react-select";

export type FormProps = {
  name: string;
  email: string;
  password: string;
  number: string | number;
  custom: string | number;
  pattern: string;
  textarea: string;
  select: string;
  reactSelect: string;
  reactSelectMulti: string;
  switch: boolean;
  checkbox: boolean;
  radio: string;
};

const Index: React.FC = () => {
  const methods = useForm<FormProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      number: "",
      custom: "",
      pattern: "",
      textarea: "",
      select: "",
      reactSelect: "",
      reactSelectMulti: "",
      switch: false,
      checkbox: false,
      radio: "",
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormProps) => {
    //eslint-disable-next-line
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <SectionTitle title="" subtitle="Add Products" />
      <Widget
        title=""
        description={<span>Add New Products</span>}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* <div className="relative flex flex-col items-center justify-center h-64 w-full overflow-hidden user-widget-2 pro" > */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-12">

              <InputWrapper outerClassName="sm:col-span-12">
                <input type="text" className="w-full h-10 px-2 mb-8 border-gray-300 rounded-md border" placeholder="Product Title" />
                <textarea rows={4} className="w-full h-20 px-2 mb-8 border-gray-300 rounded-md border" placeholder="Product Description"></textarea>
                <input type="file" className="w-full h-20 px-2 border-gray-300 rounded-md border pt-7" placeholder="Product Description" />
              </InputWrapper>



              <InputWrapper outerClassName="custom sm:col-span-12 left-0 " >
                <Label id="react-select-multi">Add Validations</Label>
                <ReactSelect
                  id="react-select-multi"
                  name="reactSelectMulti"
                  isMulti={true}
                  rules={{ required: "This is required" }}
                  options={[
                    { value: "usa", label: "USA" },
                    { value: "canada", label: "Canada" },
                    { value: "australia", label: "Australia" },
                  ]}
                />
                {errors?.reactSelectMulti?.message && (
                  <ErrorMessage>
                    {errors.reactSelectMulti.message}
                  </ErrorMessage>
                )}
              </InputWrapper>




                </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  reset();
                }}
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center px-3 py-2 ml-3 text-sm font-medium text-white bg-green-500 border border-transparent shadow-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </Widget>
    </>
  );
};
export default Index;












