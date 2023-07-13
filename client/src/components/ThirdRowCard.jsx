export default function ThirdRowCard() {
    return (
        <>
            <div className="mb-6 flex justify-between gap-4 bg-white border border-gray-200 rounded-lg shadow-md p-6 pt-8 items-center pb-8">
                <div className="flex flex-col w-full mr-2">
                    <div className="flex flex-col w-full">
                        <div className="w-full">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Leave Report
                                </h3>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-end mb-1.5 ml-2">
                                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white mb-2">
                                    2,420
                                </span>
                                <p className="flex mb-5 w-auto items-center text-base font-normal text-gray-500 dark:text-gray-400">
                                    <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
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
                                                d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                            />
                                        </svg>
                                        440
                                    </span>
                                    vs yesterday
                                </p>
                            </div>
                            <div className="w-auto" id="new-products-chart-two" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col justify-between px-12 gap-4 bg-white border border-gray-200 rounded-lg shadow-md p-6 pt-8 pb-8">
                            <div className="row mb-2">
                                <span className="text-xl">Top leave type taken</span>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <div className="flex gap-1.5">
                                        <div className="bg-blue-200 rounded-sm">
                                            <span className="text-blue-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            Annual
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="flex gap-1.5">
                                        <div className="bg-purple-200 rounded-sm">
                                            <span className="text-purple-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            Medical
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="flex gap-1.5">
                                        <div className="bg-orange-200 rounded-sm">
                                            <span className="text-orange-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            Other
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex justify-between mr-8">
                                <div className="text-2xl font-bold mt-8">
                                    2,100
                                </div>
                                <div className="text-2xl font-bold mt-8">
                                    250
                                </div>
                                <div className="text-2xl font-bold mt-8">
                                    100
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                                <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "100%" }}>

                                    <div className="bg-purple-600 h-2.5 rounded-s-full" style={{ width: "80%" }}>

                                        <div className="bg-blue-600 h-2.5 rounded-s-full" style={{ width: "70%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="inline-block h-[550px] min-h-[1em] w-2 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />

                <div className="w-full flex flex-col ml-2 gap-2">
                    <h3 className="flex justify-center gap-2 items-center mb-4 text-md font-semibold text-gray-900 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                        </svg>

                        Tue, 16 Aug 2021

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>
                    </h3>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto rounded-lg">
                            <div className="inline-block min-w-full align-middle">
                                <div className="overflow-hidden shadow sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                        <thead className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                                >
                                                    Employee Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                                >
                                                    Type of Leave
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                                >
                                                    Total Days
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-gray-800">
                                            <tr>
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                        </div></div>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    Apr 23 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    $2300
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                        </div></div>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    Apr 23 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    $2300
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                        </div></div>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    Apr 23 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    $2300
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                        </div></div>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    Apr 23 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    $2300
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                        </div></div>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    Apr 23 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    $2300
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="w-8 h-8 rounded-full"
                                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                alt="Neil image"
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                Neil Sims
                                                            </p>
                                                        </div></div>
                                                </td>
                                                <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                    Apr 23 ,2021
                                                </td>
                                                <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                    $2300
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-10 text-blue-700">
                        <span>Go to leave</span>
                    </div>
                </div>
            </div>
        </>
    )
}