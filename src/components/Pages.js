import People from "./people/People";
import Planets from "./planets/Planets";
import Starships from "./starships/Starships";
import {
    Routes,
    Route
} from 'react-router-dom';

export default function Pages() {

    // function renderPage(){
    //     switch (page) {
    //         case "Planets":
                
    //             return <Planets />;

    //         case "Starships":
            
    //             return <Starships />;

    //         case "People":
                
    //             return <People />;
        
    //         default:
    //             break;
    //     }
    // }

    return <Routes>
        <Route path="planets" element={<Planets />} />
        <Route path="starships" element={<Starships />} />
        <Route path="people" element={<People />} />
    </Routes>;
}
