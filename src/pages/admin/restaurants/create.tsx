import {useForm, FormProvider} from "react-hook-form";
import Widget from "components/social-feed/widget";
import SectionTitle from "components/section-title";
import {InputWrapper} from "components/react-hook-form/input-wrapper";
import {Label} from "components/react-hook-form/label";
import {ErrorMessage} from "components/react-hook-form/error-message";
import {Input} from "components/react-hook-form/input";
// import Friends from "components/social-feed/friends";
// import Posts from "components/social-feed/posts";

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
      email: "",
    },
  });
  const {
    handleSubmit,
    formState: {errors},
  } = methods;

  const onSubmit = (data: FormProps) => {
    //eslint-disable-next-line
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <SectionTitle title="" subtitle="Add New Restaurant" />
      <Widget>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-12">

                <InputWrapper outerClassName="sm:col-span-10">
                  <Label id="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    rules={{ required: "Please enter a valid email" }}
                  />
                  {errors?.email?.message && (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}
                </InputWrapper>
                <InputWrapper outerClassName="sm:col-span-2">
                  <div className="pt-6">
                    <button type="submit"
                    className="inline-flex justify-center px-12 py-2 ml-3 text-sm font-medium text-white bg-blue-500 border border-transparent shadow-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Submit
                    </button>
                  </div>
                </InputWrapper>
                
              </div>
            </div>
          </form>
        </FormProvider>
      </Widget>
    </>
  );
};
export default Index;
