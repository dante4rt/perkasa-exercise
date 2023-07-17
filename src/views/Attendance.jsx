export default function Attendance() {
    return (
        <main className="pt-2 md:ml-64 h-auto bg-[#0f1728]">
            <div className="container bg-white pb-8 rounded-ss-3xl">
                <div className='flex w-auto justify-between p-6'>
                    <div className='flex flex-col pl-3'>
                        <div className='font-bold text-lg text-blue-800'>COMPANY NAME</div>
                        <div className='pt-6'>
                            <div className='text-3xl font-normal pb-2'>Welcome back, John</div>
                            <div className='font-light text-sm text-gray-500'>You're working at ABC Company</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div className="bg-white border border-gray-300 rounded-lg p-2 mb-20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:cursor-pointer w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </div>
                        <div>
                            <div className="flex flex-col gap-7">
                                <div className="relative w-[100%] mr-24">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>

                                    </div>
                                    <input
                                        name="start"
                                        type="text"
                                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Search"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <div className="bg-white border border-gray-300 rounded-lg flex gap-1 px-2 py-1 w-[30%]">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mb-1 hover:cursor-pointer mt-0.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                            </svg>
                                        </div>
                                        <div className="text-sm mt-0.5 ml-1">
                                            Export
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* cards started */}
                <div className="flex gap-6 px-6 pb-6 pt-2 justify-center">
                    <div className="p-4 flex bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 h-48">
                        <div className="w-[100%]">
                            <h3 className="text-base font-semibold">
                                Present Employees
                            </h3>
                            <div className="flex pt-2">
                                <div className=" mt-4">
                                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-5xl dark:text-white">
                                        2,420
                                    </span>
                                    <div
                                        className="inline-flex mt-6 items-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        data-dropdown-toggle="weekly-sales-dropdown"
                                    >
                                        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            450
                                        </div>
                                        <div className="pl-1 text-xs">
                                            {" "}vs last month
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[100%] flex flex-row-reverse">
                                    <img src="./greenChart.png" className="object-cover" width={"60%"} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 flex bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 h-48">
                        <div className="w-[100%]">
                            <h3 className="text-base font-semibold">
                                Late Employees
                            </h3>
                            <div className="flex">
                                <div className="mt-4 pt-2">
                                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-5xl dark:text-white">
                                        1,210
                                    </span>

                                    <div
                                        className="inline-flex mt-6 items-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        data-dropdown-toggle="weekly-sales-dropdown"
                                    >
                                        <div className="flex items-center justify-end flex-1 text-base font-medium text-red-500 dark:text-green-400">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                                />
                                            </svg>
                                            200
                                        </div>
                                        <div className="pl-1 text-xs">
                                            {" "}vs last month
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[100%] flex flex-row-reverse">
                                    <img src="./redChart.png" className="object-cover" width={"60%"} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 flex bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 h-48">
                        <div className="w-[100%]">
                            <h3 className="text-base font-semibold">
                                Employees on Leaves
                            </h3>
                            <div className="flex pt-2">
                                <div className=" mt-4">
                                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-5xl dark:text-white">
                                        316
                                    </span>
                                    <div
                                        className="inline-flex mt-6 items-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        data-dropdown-toggle="weekly-sales-dropdown"
                                    >
                                        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            10
                                        </div>
                                        <div className="pl-1 text-xs">
                                            {" "}vs last month
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[100%] flex flex-row-reverse">
                                    <img src="./greenChart.png" className="object-cover" width={"60%"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cards ended */}

                {/* transactions started */}
                <div className="p-4 mt-4 mx-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="items-center justify-center mt-2 lg:flex">
                    <h3 className="flex justify-center gap-2 items-center mb-4 text-md font-semibold text-gray-900 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                        </svg>

                        Tue, 16 Aug 2021

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>
                    </h3>
                    </div>
                    <div className="flex flex-col mt-6">
                        <div className="overflow-x-auto rounded">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden shadow">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                        <thead className="bg-blue-100 dark:bg-gray-700">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="p-4 text-xs font-medium tracking-wider text-center pt-12 pb-9 text-gray-500 uppercase dark:text-white border-x border-gray-300"
                                                    rowSpan={2}
                                                >
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Employee Name
                                                        </div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                                            </svg>
                                                        </div>
                                                    </div>

                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" text-center text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white border-x border-gray-300"
                                                    colSpan={2}
                                                >
                                                    Check-In
                                                </th>

                                                <th
                                                    scope="col"
                                                    className=" text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-white border-x border-gray-300 text-center"
                                                    colSpan={2}
                                                >
                                                    Check-Out
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="p-4 text-xs font-medium pt-12 pb-9 tracking-wider text-center text-gray-500 uppercase dark:text-white border-x border-gray-300"
                                                    rowSpan={2}
                                                >
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Status
                                                        </div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="p-4 text-xs font-medium pt-12 pb-9 tracking-wider text-center text-gray-500 uppercase dark:text-white border-x border-gray-300"
                                                    rowSpan={2}
                                                >
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Action
                                                        </div>
                                                        <div>
                                                        </div>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr className="border-black-400 h-10  text-white">
                                                <th className="text-center text-xs p-4 border border-gray-300 text-gray-500 uppercase font-medium">Time</th>
                                                <th className="text-center text-xs p-4 border border-gray-300 text-gray-500 uppercase font-medium">Location</th>
                                                <th className="text-center text-xs p-4 border border-gray-300 text-gray-500 uppercase font-medium">Time</th>
                                                <th className="text-center text-xs p-4 border border-gray-300 text-gray-500 uppercase font-medium">Location</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white border text-center border-red-600 dark:bg-gray-800">
                                            <tr>
                                                <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    Tony
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 whitespace-nowrap border">
                                                    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                                                        Early Checkin
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-blue-500 whitespace-nowrap dark:text-white">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Details
                                                        </div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                            </svg>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    Tony
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 whitespace-nowrap border">
                                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 border border-blue-100 dark:border-blue-500">
                                                        On Time
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-blue-500 whitespace-nowrap dark:text-white">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Details
                                                        </div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                            </svg>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    Tony
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 whitespace-nowrap border">
                                                    <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-red-400 border border-red-100 dark:border-red-500">
                                                        Absent
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-blue-500 whitespace-nowrap dark:text-white">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Details
                                                        </div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                            </svg>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    Tony
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 whitespace-nowrap border">
                                                    <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 border border-purple-100 dark:border-purple-500">
                                                        Late Checkin
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-blue-500 whitespace-nowrap dark:text-white">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Details
                                                        </div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                            </svg>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    Tony
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-4 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    Singapore
                                                </td>
                                                <td className="p-4 whitespace-nowrap border">
                                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-500">
                                                        Early Checkout
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-blue-500 whitespace-nowrap dark:text-white">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Details
                                                        </div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                            </svg>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm border font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    Tony
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-2 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex justify-center gap-1 text-blue-500">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                            </svg>

                                                        </div>
                                                        <div className="mt-0.5">View Map</div>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    09:00
                                                </td>
                                                <td className="p-2 text-sm border font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex justify-center gap-1 text-blue-500">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                            </svg>

                                                        </div>
                                                        <div className="mt-0.5">View Map</div>
                                                    </div>
                                                </td>
                                                <td className="p-4 whitespace-nowrap border">
                                                    <span className="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-orange-400 border border-orange-100 dark:border-orange-500">
                                                        Late Checkout
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm border font-normal text-blue-500 whitespace-nowrap dark:text-white">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            Details
                                                        </div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-4 h-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                            </svg>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 sm:pt-6">
                        <div className="flex gap-2">
                            <div>
                                <div className="bg-white border border-gray-300 rounded-lg flex p-2">
                                    <div className="text-sm mt-0.5 ">
                                        Previous
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white border border-gray-300 rounded-lg flex p-2">
                                    <div className="text-sm mt-0.5 ">
                                        Next
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <a
                                href="#"
                                className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
                            >
                                Page 1 of 10
                            </a>
                        </div>
                    </div>
                </div>
                {/* transactions ended */}
            </div>


        </main>
    )
}