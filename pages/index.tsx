import Main from "components/Main";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <div>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </div>
  );
}
