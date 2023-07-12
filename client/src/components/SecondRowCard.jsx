export default function SecondRowCard() {
    return (
        <>
            <div className="mb-6 flex justify-between gap-4 bg-white border border-gray-200 rounded-lg shadow-md p-6 pt-8 items-center pb-8">
                <div className="flex flex-col w-full mr-2">
                    <div className="flex flex-col w-full">
                        <div className="w-full">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                                </svg>
                                <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Attendance Report
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
                            <div className="w-auto" id="new-products-chart" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col justify-between px-12 gap-4 bg-white border border-gray-200 rounded-lg shadow-md p-6 pt-8 pb-8">
                            <div className="flex justify-between">
                                <div>
                                    <div className="flex gap-1.5">
                                        <div className="bg-blue-200 rounded-sm">
                                            <span className="text-blue-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            Present
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="flex gap-1.5">
                                        <div className="bg-purple-200 rounded-sm">
                                            <span className="text-purple-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>

                                            </span>
                                        </div>
                                        <div>
                                            Late
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="flex gap-1.5">
                                        <div className="bg-red-200 rounded-sm">
                                            <span className="text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                </svg>


                                            </span>
                                        </div>
                                        <div>
                                            Absent
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

                <div className="inline-block h-[450px] min-h-[1em] w-2 self-stretch bg-neutral-100 opacity-100 dark:opacity-50" />

                <div className="w-full flex flex-col ml-2 mt-16">
                    <div className="flex gap-36">
                        <div className="w-[50%] ml-2">
                            <h3 className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                All Users Statistics
                            </h3>
                            <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                                25,260 {" "}
                                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Users
                                </span>
                            </span>
                        </div>

                        <div className="w-[50%] mr-1.5">
                            <h3 className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Average Visit Time
                            </h3>
                            <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                                2 {" "}
                                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Hours {"  "}
                                </span>
                                <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
                                    35 {" "}
                                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        Minutes
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                        <div>
                            <h3 className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Top Visited Area
                            </h3>
                        </div>
                        <div>
                            <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                                <div className="bg-purple-600 h-6 rounded-s-full" style={{ width: "90%" }}>
                                    <div className="bg-orange-500 h-6 rounded-s-full" style={{ width: "80%" }}>
                                        <div className="bg-green-500 h-6 rounded-s-full" style={{ width: "80%" }}>
                                            <div className="bg-blue-500 h-6 rounded-s-full" style={{ width: "80%" }}>
                                                <div className="bg-yellow-300 h-6 rounded-s-full" style={{ width: "60%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex gap-1.5 w-[45%]">
                                <div className="bg-yellow-300 rounded-sm">
                                    <span className="text-yellow-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    Kebayoran
                                </div>
                            </div>
                            <div className="flex gap-1.5 w-[45%]">
                                <div className="bg-orange-500 rounded-sm">
                                    <span className="text-orange-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    Sawangan Lama
                                </div>
                            </div>
                            <div className="flex gap-1.5 w-[45%]">
                                <div className="bg-blue-500 rounded-sm">
                                    <span className="text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    Kelurahan
                                </div>
                            </div>
                            <div className="flex gap-1.5 w-[45%]">
                                <div className="bg-purple-600 rounded-sm">
                                    <span className="text-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    Cakung
                                </div>
                            </div>
                            <div className="flex gap-1.5 w-[45%]">
                                <div className="bg-green-500 rounded-sm">
                                    <span className="text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    Margahayu
                                </div>
                            </div>
                            <div className="flex gap-1.5 w-[45%]">
                                <div className="bg-gray-200 rounded-sm">
                                    <span className="text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mt-0.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    Others
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-20 text-blue-700">
                        <span>Go to attendance</span>
                    </div>
                </div>
            </div>
        </>
    )
}