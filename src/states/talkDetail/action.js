import api from "../../utils/api";

const ActionType = {
  RECEIVE_TALK_DETAIL: "RECEIVE_TALK_DETAIL",
  CLEAR_TALK_DETAIL: "CLEAR_TALK_DETAIL",
  TOGGLE_LIKE_TALK_DETAIL: "TOGGLE_LIKE_TALK_DETAIL",
};

function receiveTalkDetailActionCreator(talkDetail) {
  return {
    type: ActionType.RECEIVE_TALK_DETAIL,
    payload: {
      talkDetail,
    },
  };
}

function clearTalkDetailActionCreator() {
  return {
    type: ActionType.CLEAR_TALK_DETAIL,
  };
}

function toggleLikeTalkDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_TALK_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncReceiveTalkDetail(talkId) {
  return async (dispatch) => {
    try {
      const talkDetail = await api.getTalkDetail(talkId);
      dispatch(receiveTalkDetailActionCreator(talkDetail));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncToggleLikeTalkDetail() {
  return async (dispatch, getState) => {
    const { authUser, talkDetail } = getState();
    dispatch(toggleLikeTalkDetailActionCreator(authUser.id));

    try {
      await api.toggleLikeTalk(talkDetail.id);
    } catch (error) {
      alert(error.message);
      dispatch(toggleLikeTalkDetailActionCreator(authUser.id));
    }
  };
}

export {
  ActionType,
  receiveTalkDetailActionCreator,
  clearTalkDetailActionCreator,
  toggleLikeTalkDetailActionCreator,
  asyncReceiveTalkDetail,
  asyncToggleLikeTalkDetail,
};
