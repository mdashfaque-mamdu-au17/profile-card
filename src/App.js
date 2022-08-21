import logo from "./logo.svg";
import "./App.css";
import Reena from "./assets/reena.jpg";
import Card from "./components/Card";
function App() {
  return (
    <div className="flex items-center justify-center h-screen font-poppins">
      <div className="">
        <Card
          imageSrc={Reena}
          name="MetaMask"
          nickname="@metamask"
          details="MetaMask brings Ethereum to your web browser"
        />
      </div>
    </div>
  );
}

export default App;
