import { Link } from "react-router-dom";
const AuthLayout = (props) => {
  const { children, title} = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your detail
        </p>
        {children}

        {/* <p className="py-2 text-center">{title == "Register" ? 'Have an account ? ' : "Dont't have an account ? "}
        {title == "Register" ? <Link to="/login" className="font-bold text-blue-600">Sign in</Link>:<Link to="/register" className="font-bold text-blue-600">Sign up</Link>}
        </p> */}

        {title == "Register" && (
          <p className="py-2 text-center">
            Have an account ?{" "}
            <Link to="/login" className="font-bold text-blue-600">
              Sign in
            </Link>{" "}
          </p>
        )}
        {title == "Login" && (
          <p className="py-2 text-center">
            Dont't have an account ?{" "}
            <Link to="/register" className="font-bold text-blue-600">
              Sign up
            </Link>{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
