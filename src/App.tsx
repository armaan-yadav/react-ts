import Person from "./components/Person";

function App() {
  return (
    <div className="h-screen bg-[#1f1b24] text-white">
      <Person
        age={21}
        email="yadavarmaan10@gmail.com"
        gender="m"
        name="Armaan"
        specialization={null}
      />
    </div>
  );
}

export default App;
