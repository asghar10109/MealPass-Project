import { useForm, FormProvider } from "react-hook-form";
import SectionTitle from "components/section-title";
import Widget from "components/widget";
import { InputWrapper } from "components/react-hook-form/input-wrapper";
import { Label } from "components/react-hook-form/label";
import { ErrorMessage } from "components/react-hook-form/error-message";
import { Textarea } from "components/react-hook-form/textarea";

export type FormProps = {
    terms: string;
};

const Index: React.FC = () => {
    const methods = useForm<FormProps>({
        defaultValues: {
            terms: "",
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
            <SectionTitle title="" subtitle="Terms & Conditions" />
            <Widget>
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-12">

                                <InputWrapper outerClassName="sm:col-span-12">
                                    <Label id="terms">Help Center</Label>
                                    <Textarea
                                        id="terms"
                                        name="terms"
                                        rules={{ required: "terms is required" }}
                                    />
                                    {errors?.terms?.message && (
                                        <ErrorMessage>{errors.terms.message}</ErrorMessage>
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
