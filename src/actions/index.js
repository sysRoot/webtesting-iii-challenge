export const SWITCH_ON_OFF = "SWITCH_ON_OFF";
export const LOCKED_UNLOCKED = "LOCKED_UNLOCKED"
export const SEND_ERROR = "SEND_ERROR"

export const flipSwitch = (isLocked) => {
    if (!isLocked) {
        return {
            type: SWITCH_ON_OFF
        }
    }
    {type: SEND_ERROR}
}

export const lock = () => {type: LOCKED_UNLOCKED}