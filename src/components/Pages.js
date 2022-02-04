import People from "./people/People";
import Planets from "./planets/Planets";
import Starships from "./starships/Starships";

export default function Pages({page}) {

    function renderPage(){
        switch (page) {
            case "Planets":
                
                return <Planets />;

            case "Starships":
            
                return <Starships />;

            case "People":
                
                return <People />;
        
            default:
                break;
        }
    }

    return <div>{renderPage()}</div>;
}
