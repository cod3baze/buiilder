import { Dialog } from "./dialog";

interface GithubUserProps {
  username: string;
}

export async function GithubUser({ username }: GithubUserProps) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <p>{JSON.stringify(user, null, 2)}</p>

      <Dialog />
    </div>
  );
}
