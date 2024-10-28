import EnclosureId from "./EnclosureId";

class Enclosure {
    _id:EnclosureId;
    _name: string;
    _builtInYear: number;


    constructor(id:EnclosureId, name:string,builtInYear: number){
        this._id = id;
        this._name = name;
        this._builtInYear = builtInYear;
    }
};

export default Enclosure;