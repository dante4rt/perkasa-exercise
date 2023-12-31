export default function Daily() {
    return (
        <div className="container">
            <div className="wrapper overflow-hidden w-full mx-18 bg-white rounded">
                <div className="header flex justify-between py-2">
                    <div className="flex gap-1">
                        <div>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[110%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Department</option>
                                <option value="US">IT</option>
                            </select>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            3 Mar - 9 Mar
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col gap-1">
                        <div className="ml-0 pb-2 w-max">
                            <div className="justify-between w-[81.7%] flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-t-md focus:ring-blue-500 focus:border-blue-500 px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <input type="text" className="bg-gray-50 border-0 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full" placeholder="Add Schedule" />
                                <div className="mt-2">+</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 overflow-y-auto max-h-96">
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>

                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                            <div className="ml-0 flex gap-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xs focus:ring-blue-500 focus:border-blue-500 w-fit px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                7.30 am - 3.25 am
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-4 mt-0.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col">
                            <div className="overflow-auto">
                                <div className="w-[120%] ml-[-50px] pr-0 pl-1">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div>
                                            <table className="max-w-96 ml-4 table-fixed border text-center text-sm font-light dark:border-neutral-500">
                                                <thead className="border-b bg-blue-100 font-medium dark:border-neutral-500">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="border-r sticky left-0 bg-blue-100 w-36border-gray-300 px-3 py-4 dark:border-neutral-500"
                                                        >
                                                            Employees
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            colSpan={20}
                                                            className="border-r border-gray-300 px-3 py-0 text-left dark:border-neutral-500 font-light"
                                                        >
                                                            <div className="flex gap-4 ml-10 my-3">
                                                                <div>6am</div>
                                                                <div>7am</div>
                                                                <div>8am</div>
                                                                <div>9am</div>
                                                                <div>10am</div>
                                                                <div>11am</div>
                                                                <div>12pm</div>
                                                                <div>1pm</div>
                                                                <div>2pm</div>
                                                                <div>3pm</div>
                                                                <div>4pm</div>
                                                                <div>5pm</div>
                                                                <div>6pm</div>
                                                                <div>7pm</div>
                                                                <div>8pm</div>
                                                                <div>9pm</div>
                                                                <div>10pm</div>
                                                                <div>11pm</div>
                                                                <div>12pm</div>
                                                                <div>1am</div>
                                                                <div>2am</div>
                                                                <div>3am</div>
                                                                <div>4am</div>
                                                            </div>
                                                            <th className="border-r border-gray-300 px-6 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                            <th className="border-r border-gray-300 px-7 dark:border-neutral-500 font-light text-blue-100">1</th>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="sticky left-0 bg-white w-48 whitespace-nowrap border-r px-0 py-4 font-medium dark:border-neutral-500">
                                                            <div className="flex items-center space-x-0">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="w-7 h-7 rounded-full ml-3"
                                                                        src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                        alt="Neil image"
                                                                    />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                        Tony
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pt-2 w-[67px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500"
                                                        colSpan={10}>
                                                            <div className="text-left font-bold z-10 bg-white border border-gray-200 rounded-sm shadow-xs mx-0 py-3 px-2 items-center">
                                                                12am - 3pm
                                                            </div>
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="sticky left-0 bg-white w-36 whitespace-nowrap border-r px-0 py-4 font-medium dark:border-neutral-500">
                                                            <div className="flex items-center space-x-0">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="w-7 h-7 rounded-full ml-3"
                                                                        src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                        alt="Neil image"
                                                                    />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                        Tony
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pt-8 w-[67px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td colSpan={5}
                                                        className="pt-2 w-[63px] border-r p0-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                        <div className="text-left font-bold z-10 bg-white border border-gray-200 rounded-sm shadow-xs mx-0 py-3 px-2 items-center">
                                                                12am - 3pm
                                                            </div>
                                                        </td>
                                                        <td className="pt-2 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="sticky left-0 bg-white w-36 whitespace-nowrap border-r px-0 py-4 font-medium dark:border-neutral-500">
                                                            <div className="flex items-center space-x-0">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="w-7 h-7 rounded-full ml-3"
                                                                        src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                        alt="Neil image"
                                                                    />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                        Tony
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pt-8 w-[67px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td colSpan={7}
                                                        className="pt-2 w-[63px] border-r p0-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                        <div className="text-left font-bold z-10 bg-white border border-gray-200 rounded-sm shadow-xs mx-0 py-3 px-2 items-center">
                                                                12am - 3pm
                                                            </div>
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="sticky left-0 bg-white w-36 whitespace-nowrap border-r px-0 py-4 font-medium dark:border-neutral-500">
                                                            <div className="flex items-center space-x-0">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="w-7 h-7 rounded-full ml-3"
                                                                        src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                        alt="Neil image"
                                                                    />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                        Tony
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td colSpan={10}
                                                        className="pt-2 w-[67px] border-r p0-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                        <div className="text-left font-bold z-10 bg-white border border-gray-200 rounded-sm shadow-xs mx-0 py-3 px-2 items-center">
                                                                12am - 3pm
                                                            </div>
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="sticky left-0 bg-white w-36 whitespace-nowrap border-r px-0 py-4 font-medium dark:border-neutral-500">
                                                            <div className="flex items-center space-x-0">
                                                                <div className="flex-shrink-0">
                                                                    <img
                                                                        className="w-7 h-7 rounded-full ml-3"
                                                                        src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                                                                        alt="Neil image"
                                                                    />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                        Tony
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="pt-8 w-[67px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td colSpan={12}
                                                        className="pt-2 w-[63px] border-r p0-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                        <div className="text-left font-bold z-10 bg-white border border-gray-200 rounded-sm shadow-xs mx-0 py-3 px-2 items-center">
                                                                12am - 3pm
                                                            </div>
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                        <td className="pt-8 w-[63px] border-0 px-0 py-2 bg-blue-100 dark:border-neutral-500">
                                                            +
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}