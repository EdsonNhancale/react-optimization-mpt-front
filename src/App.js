import RoutesComponent from "./routes/Routes";
import CookBookProvider from "./services/provider/CookBookProvider";

const App = () => {
    return (
        <div style={{ margin: 10 }}>
            <CookBookProvider>
                <RoutesComponent />
            </CookBookProvider>
        </div>
    );
}

export default App;
