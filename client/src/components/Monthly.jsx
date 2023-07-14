export default function Monthly() {
    return (
        <div className="container">
            <div className="wrapper overflow-hidden w-full mx-18 bg-white rounded">
                <div className="header flex justify-between p-2">
                    <span className="text-lg font-bold">2020 July</span>
                    <div className="buttons">
                        <button className="p-1">
                            <svg
                                width="1em"
                                fill="gray"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-arrow-left-circle"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                                />
                            </svg>
                        </button>
                        <button className="p-1">
                            <svg
                                width="1em"
                                fill="gray"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-arrow-right-circle"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <table className="w-full table-fixed">
                    <thead>
                        <tr>
                            <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                <span className="xl:block lg:block md:block sm:block hidden">
                                    Sunday
                                </span>
                                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                                    Sun
                                </span>
                            </th>
                            <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                <span className="xl:block lg:block md:block sm:block hidden">
                                    Monday
                                </span>
                                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                                    Mon
                                </span>
                            </th>
                            <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                <span className="xl:block lg:block md:block sm:block hidden">
                                    Tuesday
                                </span>
                                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                                    Tue
                                </span>
                            </th>
                            <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                <span className="xl:block lg:block md:block sm:block hidden">
                                    Wednesday
                                </span>
                                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                                    Wed
                                </span>
                            </th>
                            <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                <span className="xl:block lg:block md:block sm:block hidden">
                                    Thursday
                                </span>
                                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                                    Thu
                                </span>
                            </th>
                            <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                <span className="xl:block lg:block md:block sm:block hidden">
                                    Friday
                                </span>
                                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                                    Fri
                                </span>
                            </th>
                            <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                                <span className="xl:block lg:block md:block sm:block hidden">
                                    Saturday
                                </span>
                                <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                                    Sat
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center h-20">
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">1</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">2</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">3</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">4</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">6</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">7</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                                    </div>
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500 text-sm">8</span>
                                    </div>
                                    <div className="bottom justify-center flex-grow mt-2 h-30 py-1 w-full cursor-pointer">
                                        <div className="w-auto text-left bg-slate-400 text-white rounded p-1 text-xs mb-1">
                                            <div className="flex gap-0.5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 mt-0.5 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <span>Employee Working</span><br />
                                                </div>
                                            </div>
                                            <span className="font-bold">8</span><br />
                                            <div className="flex gap-0.5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 mt-0.5 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>

                                                </div>
                                                <div>
                                                    <span>Working Hours</span><br />
                                                </div>
                                            </div>
                                            <span className="font-bold">14 Hours 30 Minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {/*         line 1 */}
                        <tr className="text-center h-20">
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">9</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">10</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">12</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">13</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">14</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">15</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500 text-sm">16</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                        {/*         line 1 */}
                        {/*         line 2 */}
                        <tr className="text-center h-20">
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">16</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">17</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">18</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">19</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">20</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">21</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500 text-sm">22</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                        {/*         line 2 */}
                        {/*         line 3 */}
                        <tr className="text-center h-20">
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">23</span>
                                    </div>
                                    <div className="bottom justify-center flex-grow mt-2 h-30 py-1 w-full cursor-pointer">
                                        <div className="w-auto text-left bg-slate-400 text-white rounded p-1 text-xs mb-1">
                                            <div className="flex gap-0.5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 mt-0.5 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <span>Employee Working</span><br />
                                                </div>
                                            </div>
                                            <span className="font-bold">20</span><br />
                                            <div className="flex gap-0.5">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 mt-0.5 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>

                                                </div>
                                                <div>
                                                    <span>Working Hours</span><br />
                                                </div>
                                            </div>
                                            <span className="font-bold">10 Hours 5 Minutes</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">24</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">25</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">26</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">27</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">28</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500 text-sm">29</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                        {/*         line 3 */}
                        {/*         line 4 */}
                        <tr className="text-center h-20">
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">30</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">31</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">1</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">2</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">3</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500">4</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                            <td className="border-t bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                                <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                                    <div className="top h-5 w-full">
                                        <span className="text-gray-500 text-sm">5</span>
                                    </div>
                                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                                </div>
                            </td>
                        </tr>
                        {/*         line 4 */}
                    </tbody>
                </table>
            </div>
        </div>

    )
}