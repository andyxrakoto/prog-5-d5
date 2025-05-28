import { machineState } from './models/machineState.js';
import { runMachine } from './controllers/machineController.js';

runMachine(machineState, 3, 'cappuccino');
