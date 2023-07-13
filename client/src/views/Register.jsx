import { NavLink } from 'react-router-dom'

export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center px-6 pt-0 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
            <NavLink to={'/register'} className="flex items-center justify-center text-2xl font-semibold mb-5 text-white">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-4 h-11" alt="FlowBite Logo" />
                <span>Perkasa - Admin Panel</span>
            </NavLink>
            {/* Card */}
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Register an account
                </h2>
                <form className="mt-8 space-y-6" action="#">
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password Confirmation
                            </label>
                            <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                required
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Your Company Name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Number of Employees
                            </label>
                            <input
                                type="number"
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0"
                                required
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Locations</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Flowbite</option>
                                <option value="RE">React</option>
                                <option value="AN">Angular</option>
                                <option value="VU">Vue JS</option>
                            </select>
                        </div>
                        <div>
                            <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business</label>
                            <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Tech</option>
                                <option value="RE">React</option>
                                <option value="AN">Angular</option>
                                <option value="VU">Vue JS</option>
                            </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Register
                    </button>
                </form>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}

                    <NavLink to={'/login'} className="text-blue-500 hover:underline dark:text-blue-500">
                        Login here
                    </NavLink>
                    !

                </div>
            </div>
        </div>

    )
}