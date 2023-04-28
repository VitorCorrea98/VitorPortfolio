import { createRoot } from  "react-dom/client";
import Home from    "./Components/Home/Home"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <div>
        <Home/>
    </div>
)