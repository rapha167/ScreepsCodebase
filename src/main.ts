import { clearCache } from './service/cache.service';
import {fetchActions} from "./service/fetch.service";

// This file is ran every game tick

fetchActions();
clearCache();
