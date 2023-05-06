import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main>
      <h1>
        😭 WTF? 404! 😭<br />
        {/* <i>{error.statusText || error.message}</i> */}
      </h1>   
    </main>
  );
}