import  {SessionService} from '../src/services/listsession.service'

export default class Main {
    constructor() {
        console.log('Typescript Webpack starter launched');
    }
}

let start = new Main();
alert('Conférence App démarré !');


let sessions = new SessionService;

sessions.findAllSessions()
.then((resultat) => {
    console.log(resultat)  
}); 