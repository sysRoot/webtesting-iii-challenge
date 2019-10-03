import { SWITCH_ON_OFF, LOCKED_UNLOCKED } from '..actions';
import { initialState } from '..state'

export const reduce = (state = initialState, action) => {
    switch ( action.type ) {
        case SWITCH_ON_OFF: {
            return { ...state, switchOn: !state.switchOn }
        }
        case LOCK_UNLOCK: {
            return { ...state, locked: !state.locked }
        }
        case SEND_ERROR: {
            return { ...state, error: !state.error}
        }
        default:
            return state
    }
}