import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebaseconfig";
const db = getDatabase(app);

export const AddUser = (Form) => {
  return async (dispatch) => {
    try {
      set(ref(db, "Form/" + Form.id), {
        name: Form.name,
        email: Form.mail,
        company: Form.company,
        tel: Form.tel,
        address: Form.address,
      });
      dispatch({
        type: "ADD_USER",
        payload: Form,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};
