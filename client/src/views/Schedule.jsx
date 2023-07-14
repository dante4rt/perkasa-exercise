import BiWeekly from "../components/BiWeekly";
import Daily from "../components/Daily";
import Monthly from "../components/Monthly";
import Weekly from "../components/Weekly";

export default function Schedule() {

    return (
        <main className="pt-2 md:ml-64 h-auto bg-[#0f1728]">
            <div className="container bg-white pt-0 pb-8 rounded-ss-3xl">
                <div className='flex w-auto justify-between p-6'>
                    <div className='flex pl-3'>
                        <div className='font-bold text-lg text-blue-800'>COMPANY NAME</div>
                    </div>
                    <div>
                        <div className="flex gap-1">
                            <div className="bg-white border border-gray-300 rounded-lg p-2 mb-2">
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
                                </div>
                            </div>
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
                                <BiWeekly />
                            </div>

                            <div
                                id="tabs-with-underline-3"
                                className="hidden"
                                role="tabpanel"
                                aria-labelledby="tabs-with-underline-item-3"
                            >
                               <Weekly />
                            </div>
                            <div
                                id="tabs-with-underline-4"
                                className="hidden"
                                role="tabpanel"
                                aria-labelledby="tabs-with-underline-item-4"
                            >
                               <Daily />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}