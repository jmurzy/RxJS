/**
 * Everything in this file is generated by the 'tools/generate-operator-patches.ts' script.
 * Any manual edits to this file will be lost next time the script is run.
 **/
import {Observable} from '../../Observable';
import {windowToggle} from '../../operator/windowToggle';

Observable.prototype.windowToggle = windowToggle;

export var _void: void;