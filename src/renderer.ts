// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import { bootstrap } from 'angular2/platform/browser'

import { Counter } from './components/counter'

bootstrap(Counter)
