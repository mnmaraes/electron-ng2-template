// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { bootstrap } from '@angular/platform-browser-dynamic'

import { provideStore } from '@ngrx/store'
import { runEffects } from '@ngrx/effects'

import { NoteComponent }  from "./components/note.component"
import { Counter, counterReducer } from "./components/counter"

import { ElectronSaverEffect, STATE_PROP } from './helpers/hot-reloader'
import { remote } from 'electron'

const storage: any = require('electron-json-storage')

storage.get(STATE_PROP, (err: any, data: any) => {
  console.log(data)

  bootstrap(Counter, [
    provideStore({ counter: counterReducer }, data),
    runEffects(ElectronSaverEffect)
  ])
})
