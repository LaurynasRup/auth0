import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

export default function Login() {
  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 max-w-lg mx-auto rounded-lg">
      <h2 className="text-3xl font-medium">Join today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of our providers</h3>
      </div>
      <div className="flex flex-col gap-4">
        <button className="text-white bg-gray-700 p-3 w-full font-medium rounded-lg flex align-middle gap-3">
          <FcGoogle className="text-2xl" />
          Sign in with Google
        </button>
        <button className="text-white bg-gray-700 p-3 w-full font-medium rounded-lg flex align-middle gap-3">
          <AiFillFacebook className="text-2xl" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
