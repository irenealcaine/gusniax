import "./App.css"
import Background from "./components/Background/Background"
import Profile from "./components/Profile/Profile"
import SocialLinks from "./components/SocialLinks/SocialLinks"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="page">
      <Background />
      <main className="app">
        <Profile />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  )
}

export default App
