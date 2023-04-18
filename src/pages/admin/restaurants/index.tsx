import React, { useState } from "react";
import SectionTitle from "components/section-title";
import Widget from "components/widget";
import { FiSearch } from "react-icons/fi";

const Index: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState("");

    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
        createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
        createData("Eclair", 262, 16.0, 24, 6.0),
        createData("Cupcake", 305, 3.7, 67, 4.3),
        createData("Gingerbread", 356, 16.0, 49, 3.9)
    ];

    const filteredRows = rows.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <SectionTitle title="" subtitle="All Restaurants" />
            <Widget>
                <form className="w-full max-w-xs mr-2">
                    <div className="relative">
                        <input
                            type="search"
                            name="search"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-10 pl-10 pr-5 text-sm rounded-full appearance-none focus:outline-none bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                        />
                        <button type="submit" className="absolute top-0 left-0 mt-3 ml-4">
                            <FiSearch className="w-4 h-4 stroke-current" />
                        </button>
                    </div>
                </form>
                <div className="mb-3"></div>
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead>
                            <tr>

                                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
                                    Calories
                                </th>
                                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
                                    Fat
                                </th>
                                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
                                    Carbs
                                </th>
                                <th className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
                                    Protein
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRows.map((row) => (
                                <tr key={row.name}>
                                    <td className="px-6 py-3 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                                        {row.name}{" "}
                                    </td>
                                    <td className="px-6 py-3 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                                        {row.calories}{" "}
                                    </td>
                                    <td className="px-6 py-3 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                                        {row.fat}
                                    </td>
                                    <td className="px-6 py-3 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                                        {row.carbs}
                                    </td>
                                    <td className="px-6 py-3 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                                        {row.protein}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Widget>
        </>
    );
};

export default Index;