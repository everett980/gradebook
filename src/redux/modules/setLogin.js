const SIGNIN = 'signin';
const SIGNOUT = 'signout';

const initialState = {
	uid: undefined
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case SIGNIN:
			return {
				uid: action.uid
			}
		case SIGNOUT: 
			return initialState;
		default:
			return state;
	}
}

export function signin(uid) {
	return {
		type: SIGNIN,
		uid: uid
	}
}

export function signout() {
	return {
		type: SIGNOUT
	}
}
