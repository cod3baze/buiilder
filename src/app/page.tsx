import { Suspense } from "react";

import { GithubUser } from "./components/GithubUser";
import { DialogProvider } from "./contexts/dialog-context";

export default function Home() {
  return (
    <DialogProvider>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <GithubUser username="eliasalexandre" />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <GithubUser username="diego3g" />
        </Suspense>
      </div>
    </DialogProvider>
  );
}
