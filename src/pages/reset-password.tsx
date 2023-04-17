import Link from "next/link";
import CenteredForm from "layouts/centered-form";
import ResetPassword from "components/sample-forms/reset-password";

const Index: React.FC = () => {
  return (
    <div className="flex flex-row w-full h-screen overflow-hidden text-gray-900 dark:text-white">
      <div className="items-center justify-center hidden w-1/2 border-r border-gray-100 dark:border-gray-800 lg:flex lg:flex-col bg-gray-50 dark:bg-gray-800">
        <img
          className="object-contain w-full h-full"
          src="/images/illustration.svg"
          alt="svg"
        />
      </div>
      <div className="flex flex-col justify-center w-full p-4 bg-white dark:bg-gray-900 lg:w-1/2 lg:px-24 mt-50">
        <CenteredForm
          title="Reset password"
          subtitle="Please enter your new password to reset your account">
          <ResetPassword />

          <div className="flex flex-row w-full mt-3">
            <span className="mr-1">New user?</span>
            <span>
              <Link href="/create-account">
                <a className="text-blue-500">Sign up here</a>
              </Link>
            </span>
          </div>
          <div className="flex flex-row w-full">
            <span className="mr-1">Already have an account?</span>
            <span>
              <Link href="/login">
                <a className="text-blue-500">Login here</a>
              </Link>
            </span>
          </div>
        </CenteredForm>
      </div>

    </div>
  );
};

export default Index;
