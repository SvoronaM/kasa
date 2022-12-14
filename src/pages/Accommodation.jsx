import { useParams } from "react-router-dom"
import Caroussel from '../components/Caroussel';
import Tag from "../components/Tag";
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import Accommodations from '../accommodations.json'
import Error from './Error';

export default function Accommodation () {

    const { id } = useParams();
    const accommodation = Accommodations.find((object) => object.id === id);
    const findLogement = Accommodations.find(
        (theAccomodation) => theAccomodation.id === {id}.id
    );
    if (!findLogement) {
        return <Error />;
    }
    document.title = `Kasa - ${accommodation.title}`

    return (
        <main className="accommodation">
            <Caroussel images={accommodation.pictures}/>
            <div className="accommodation-header">
                <div className="accommodation-header_left">
                    <div className="accommodation-titles">
                        <h1>{accommodation.title}</h1>
                        <h2>{accommodation.location}</h2>
                    </div>
                    <div className="accommodation-tags">
                        <Tag tags={accommodation.tags}/>
                    </div>
                </div>
                <div className="accommodation-header_right">
                    <div className="accommodation-ownerContainer">
                        <div className="accommodation-rating">
                            <Rating rating={accommodation.rating}/>
                        </div>
                        <div className="accommodation-owner">
                            <span>{accommodation.host.name}</span>
                            <img src={`${accommodation.host.picture}`} alt={` de ${accommodation.host.name}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="accommodation-dropdowns">
                    <div className="accommodation-desc">
                        <Dropdown props={accommodation.description} title={"description"}/>
                    </div>
                    <div className="accommodation-equipments">
                        <Dropdown props={accommodation.equipments} title={"??quipements"}/>
                    </div>
            </div>
        </main>
    );
}