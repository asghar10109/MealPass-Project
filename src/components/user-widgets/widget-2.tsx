

export type UserProps = {
  name: string;
  img: string;
};

const Widget2: React.FC = () => {
  const user: UserProps = {
    name: "Lucas smith",
    img: "m1.png",
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-64 w-full overflow-hidden user-widget-2">
      <h1 className="absolute top-0 left-0 inline-flex items-center  font-medium">Add New Resturant</h1>
      <input type="text" className="w-full h-20 px-2 mb-8 border-gray-300 rounded-md border" placeholder="Enter your input here" />
      <button
        type="submit"
        className="absolute bottom-0 left-0 inline-flex items-center px-4 py-2 border  border-transparent text-base font-medium hover:rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-600 rounded-md border-radius focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Submit
      </button>
    </div>
  );
};

export default Widget2;
