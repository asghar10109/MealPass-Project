import {useForm, FormProvider} from "react-hook-form";
import SectionTitle from "components/section-title";
import Widget from "components/widget";
import {InputWrapper} from "components/react-hook-form/input-wrapper";
import {Label} from "components/react-hook-form/label";
import {ErrorMessage} from "components/react-hook-form/error-message";
import {Input} from "components/react-hook-form/input";
import {NumericInput} from "components/react-hook-form/numeric-input";
import {Textarea} from "components/react-hook-form/textarea";
import {ReactSelect} from "components/react-hook-form/react-select";
import Link from "next/link";

export type FormProps = {
  title: string;
  number: string | number;
  description: string;
  reactSelectMulti: string;
  thumbnail: File;
};

const Index: React.FC = () => {
  const methods = useForm<FormProps>({
    defaultValues: {
      title: "",
      number: "",
      description: "",
      reactSelectMulti: "",
      thumbnail: undefined,
    },
  });
  const {
    handleSubmit,
    reset,
    register,
    formState: {errors},
  } = methods;

  const onSubmit = (data: FormProps) => {
    //eslint-disable-next-line
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <SectionTitle title="" subtitle="Add Order" />
      <Widget>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-12">
                <InputWrapper outerClassName="sm:col-span-12">
                  <Label id="title">Order Title</Label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    rules={{required: "Item Title is required"}}
                  />
                  {errors?.title?.message && (
                    <ErrorMessage>{errors.title.message}</ErrorMessage>
                  )}
                </InputWrapper>
                
                {/* <InputWrapper outerClassName="sm:col-span-12">
                  <Label id="description">Order Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rules={{required: "Description is required"}}
                  />
                  {errors?.description?.message && (
                    <ErrorMessage>{errors.description.message}</ErrorMessage>
                  )}
                </InputWrapper> */}

                <InputWrapper outerClassName="sm:col-span-12">
                <Label id="item-image">Order Image</Label>
                <div className="w-full h-12 px-4 border-gray-300 rounded-md border pt-2">
                  <input id="fileInput" type="file"/>
                  <input
                      type="hidden pt-3"
                      {...register("thumbnail", { required: "Item Image is Required" })}
                  />
                </div>
                  {errors.thumbnail?.message && (
                    <ErrorMessage>{errors.thumbnail.message}</ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper outerClassName="sm:col-span-12">
                  <Label id="number">Order Price</Label>
                  <NumericInput
                    id="number"
                    name="number"
                    step={1}
                    rules={{
                      required: "Price is required",
                      min: {
                        value: 1,
                        message: "Price value must be greater than 0",
                      }
                    }}
                  />
                  {errors?.number?.message && (
                    <ErrorMessage>{errors.number.message}</ErrorMessage>
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
              <Link href="/restaurant/orders/details">
              <button
                type="submit"
                className="inline-flex justify-center px-3 py-2 ml-3 text-sm font-medium text-white bg-green-500 border border-transparent shadow-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Submit
              </button>
              </Link>
            </div>
          </form>
        </FormProvider>
      </Widget>
    </>
  );
};
export default Index;
