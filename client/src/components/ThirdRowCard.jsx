export default function ThirdRowCard() {
    return (
        <>
            <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6 pt-8 pb-8">
            <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Statistics this month
                        <button
                            data-popover-target="popover-description"
                            data-popover-placement="bottom-end"
                            type="button"
                        >
                            <svg
                                className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Show information</span>
                        </button>
                    </h3>
                    <div
                        data-popover=""
                        id="popover-description"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                    >
                        <div className="p-3 space-y-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Statistics
                            </h3>
                            <p>
                                Statistics is a branch of applied mathematics that involves the
                                collection, description, analysis, and inference of conclusions from
                                quantitative data.
                            </p>
                            <a
                                href="#"
                                className="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700"
                            >
                                Read more{" "}
                                <svg
                                    className="w-4 h-4 ml-1"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div data-popper-arrow="" />
                    </div>
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                            Select tab
                        </label>
                        <select
                            id="tabs"
                            className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                            <option>Statistics</option>
                            <option>Services</option>
                            <option>FAQ</option>
                        </select>
                    </div>
                    <ul
                        className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
                        id="fullWidthTab"
                        data-tabs-toggle="#fullWidthTabContent"
                        role="tablist"
                    >
                        <li className="w-full">
                            <button
                                id="about-tab"
                                data-tabs-target="#about"
                                type="button"
                                role="tab"
                                aria-controls="about"
                                aria-selected="false"
                                className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                Top Customers
                            </button>
                        </li>
                    </ul>
                    <div
                        id="fullWidthTabContent"
                        className="border-t border-gray-200 dark:border-gray-600"
                    >
                       
                        <div
                            className="hidden pt-4"
                            id="about"
                            role="tabpanel"
                            aria-labelledby="about-tab"
                        >
                            <ul
                                role="list"
                                className="divide-y divide-gray-200 dark:divide-gray-700"
                            >
                                <li className="py-3 sm:py-4">
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
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3320
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png"
                                                alt="Neil image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                Bonnie Green
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $2467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/michael-gough.png"
                                                alt="Neil image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                Michael Gough
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $2235
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/thomas-lean.png"
                                                alt="Neil image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                Thomes Lean
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $1842
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png"
                                                alt="Neil image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                Lana Byrd
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $1044
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div>
            </div>
        </>
    )
}