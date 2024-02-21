const ErrorPage = ({ status, message }) => {
  return (
    <div className="w-full flex justify-center items-start">
      <div className="w-full max-w-7xl flex justify-center items-center flex-col gap-6">
        <div className="flex justify-center items-center max-w-96">
          {status === "404" && (
            <img src="/assets/images/404-not-found.png" alt="error" />
          )}
        </div>
        <h1 className="text-3xl text-center">{message}</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
