import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operator/map'

import { Action } from '@ngrx/store';
import { StateUpdates, StateUpdate, Effect } from '@ngrx/effects'

const storage: any = require('electron-json-storage')

export const STATE_PROP = '__DEV_ES_STATE__'
const SAVER_NO_OP = '__SAVER_NO_OP__'

@Injectable()
export class ElectronSaverEffect {
  @Effect() save$: Observable<Action>

  constructor(private updates$: StateUpdates<any>) {
    this.save$ = this.updates$
      .filter(update => update.action.type !== SAVER_NO_OP )
      .map(update => {
        storage.set(STATE_PROP, update.state)

        return { type: SAVER_NO_OP }
      })
  }
}
