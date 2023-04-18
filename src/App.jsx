import { Die } from "./components/Die";
function App() {
  return (
    <main className="h-screen bg-[#0B2434] p-5">
      <div className="flex h-[400px] max-w-4xl items-center justify-center rounded bg-[#F5F5F5]">
        <div className="grid grid-cols-5 grid-rows-2 gap-4">
          <Die value="1" />
          <Die value="2" />
          <Die value="3" />
          <Die value="4" />
          <Die value="5" />
          <Die value="6" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
        </div>
      </div>
    </main>
  );
}

export default App;
