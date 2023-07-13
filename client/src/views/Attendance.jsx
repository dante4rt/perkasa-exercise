export default function Attendance() {
    return (
         <main className="pt-2 md:ml-64 h-auto bg-[#0f1728]">
            <div className="container bg-white pt-0 rounded-ss-3xl">
                <div className='flex w-auto justify-between p-6'>
                    <div className='flex flex-col pl-3'>
                        <div className='font-bold text-lg text-blue-800'>COMPANY NAME</div>
                        <div className='pt-6'>
                            <div className='text-3xl font-normal pb-2'>Welcome, John</div>
                            <div className='font-light text-sm text-gray-500'>You're working at ABC Company</div>
                        </div>
                    </div>
                    <div>
                        {/* 2 */}
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
        </main>
    )
}