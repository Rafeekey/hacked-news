import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { EVENTS } from './mock-events';

@Injectable()
export class EventService {

  constructor() { }

  getEvents() {
    return EVENTS;
  }

  getEventById(eventId: number){
    for(var i = 0; i < EVENTS.length ; i++) {
        if(EVENTS[i].id === eventId) {
          return EVENTS[i];
        }
    }
  }
}
