import Monthly from "../components/Monthly";

export default function Schedule() {

    return (
        <main className="pt-2 md:ml-64 h-auto bg-[#0f1728]">
            <div className="container bg-white pt-0 pb-8 rounded-ss-3xl">
                <div className='flex w-auto justify-between p-6'>
                    <div className='flex flex-col pl-3'>
                        <div className='font-bold text-lg text-blue-800'>COMPANY NAME</div>
                        <div className='pt-6'>
                            <div className='text-3xl font-normal pb-2'>Welcome, John</div>
                            <div className='font-light text-sm text-gray-500'>You're working at ABC Company</div>
                        </div>
                    </div>
                    <div>
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
                    </div>
                </div>
                
                <div className="mb-6 flex justify-between gap-4 bg-white border border-gray-200 rounded-sm shadow-md mx-6 px-2 items-center pb-8">
                    <div className="flex flex-col justify-center w-full">
                        <div className="border-b border-gray-200 dark:border-gray-700">
                            <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
                                <button
                                    type="button"
                                    className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active"
                                    id="tabs-with-underline-item-1"
                                    data-hs-tab="#tabs-with-underline-1"
                                    aria-controls="tabs-with-underline-1"
                                    role="tab"
                                >
                                    Monthly
                                </button>
                                <button
                                    type="button"
                                    className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
                                    id="tabs-with-underline-item-2"
                                    data-hs-tab="#tabs-with-underline-2"
                                    aria-controls="tabs-with-underline-2"
                                    role="tab"
                                >
                                    BiWeekly
                                </button>
                                <button
                                    type="button"
                                    className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
                                    id="tabs-with-underline-item-3"
                                    data-hs-tab="#tabs-with-underline-3"
                                    aria-controls="tabs-with-underline-3"
                                    role="tab"
                                >
                                    Weekly
                                </button>
                                <button
                                    type="button"
                                    className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
                                    id="tabs-with-underline-item-4"
                                    data-hs-tab="#tabs-with-underline-4"
                                    aria-controls="tabs-with-underline-4"
                                    role="tab"
                                >
                                    Daily
                                </button>
                            </nav>
                        </div>
                        <div className="mt-3">
                            <div
                            className="mx-1"
                                id="tabs-with-underline-1"
                                role="tabpanel"
                                aria-labelledby="tabs-with-underline-item-1"
                            >
                               <Monthly />
                            </div>
                            <div
                                id="tabs-with-underline-2"
                                className="hidden"
                                role="tabpanel"
                                aria-labelledby="tabs-with-underline-item-2"
                            >
                                <p className="text-gray-500 dark:text-gray-400">
                                    This is the{" "}
                                    <em className="font-semibold text-gray-800 dark:text-gray-200">
                                        second
                                    </em>{" "}
                                    item's tab body.
                                </p>
                            </div>
                            <div
                                id="tabs-with-underline-3"
                                className="hidden"
                                role="tabpanel"
                                aria-labelledby="tabs-with-underline-item-3"
                            >
                                <p className="text-gray-500 dark:text-gray-400">
                                    This is the{" "}
                                    <em className="font-semibold text-gray-800 dark:text-gray-200">
                                        third
                                    </em>{" "}
                                    item's tab body.
                                </p>
                            </div>
                            <div
                                id="tabs-with-underline-4"
                                className="hidden"
                                role="tabpanel"
                                aria-labelledby="tabs-with-underline-item-4"
                            >
                                <p className="text-gray-500 dark:text-gray-400">
                                    This is the{" "}
                                    <em className="font-semibold text-gray-800 dark:text-gray-200">
                                        fourth
                                    </em>{" "}
                                    item's tab body.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}