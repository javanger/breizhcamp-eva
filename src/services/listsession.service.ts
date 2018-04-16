import * as $ from "jquery";
import { Session } from "../domains/session"

export class SessionService {
  findAllSessions() {
   
    

    return Promise.all([$.getJSON("http://www.breizhcamp.org/json/talks.json"), $.getJSON("http://www.breizhcamp.org/json/others.json")])
    .then((data: any[]) => {
       
      
     return data[0].concat(data[1]).map((s:any) => new Session(s.id, s.name, s.event_type, s.speakers, s.description));
      
    });

    
  }
}
