
import produce from 'immer'
import createReducer from './reducerUtills'

const intioanalState = {
    users:
        { name: null }
}
const users = {
    addNewUser(state, action) {
        state.users = action.payload;
        console.log('new Login/register');
        console.log(state.users);
    },


}
export default produce((state, action) => createReducer(state, action, users), intioanalState);


