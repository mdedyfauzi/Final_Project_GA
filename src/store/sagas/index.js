import { all } from "redux-saga/effects";
import { watchLoginNanny, watchRegisterNanny } from "./auth";
import { watchChangePassword } from "./changePassword";
import { watchDashboarParentChild, watchDashboarChild } from "./childParent";
import { watchGetDataParent, watchDashboarParent } from "./parent";
import { watchGetDataChild } from "./getChild";
import { watchChildActivityParent } from "./childAktivityParent";
import {
  watchGetActiveClients,
  watchGetClientDetail,
  watchGetClients,
  watchGetMainClients,
} from './clients';
import {
  watchGetNannyProfile,
  watchUpdateNannyProfile,
  watchGetActiveNannies,
  watchGetAppointment,
  watchGetChildActivities,
  watchGetChildActivity,
  watchPostChildActivities,
  watchGetNannies,
} from "./nannies";

export default function* rootSaga() {
  yield all([
    watchLoginNanny(),
    watchRegisterNanny(),
    watchChangePassword(),
    watchDashboarParentChild(),
    watchDashboarChild(),
    watchDashboarParent(),
    watchGetDataParent(),
    watchGetDataChild(),
    watchChildActivityParent(),


    watchGetClients(),
    watchGetClientDetail(),
    watchGetActiveClients(),
    watchGetNannyProfile(),
    watchUpdateNannyProfile(),
    watchGetNannies(),
    watchGetActiveNannies(),
    watchGetAppointment(),
    watchGetChildActivity(),
    watchGetChildActivities(),
    watchPostChildActivities(),
  ]);
}
