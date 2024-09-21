import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';

export default function Guest({ children }) {

    const { props } = usePage();
    const { routeName } = props;

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
               <span className="font-bold text-2xl text-gray-800">
                    { routeName === 'login' && 'Login' }
                    {routeName === 'register' && 'Register'}
                </span>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
