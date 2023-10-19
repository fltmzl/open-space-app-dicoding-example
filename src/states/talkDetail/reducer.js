import { ActionType } from "./action";

function talkDetailReducer(talkDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TALK_DETAIL:
      return action.payload.talkDetail;
    case ActionType.CLEAR_TALK_DETAIL:
      return null;
    case ActionType.TOGGLE_LIKE_TALK_DETAIL:
      // eslint-disable-next-line no-case-declarations
      const { userId } = action.payload;

      return {
        ...talkDetail,
        likes: talkDetail.likes.includes(userId)
          ? talkDetail.likes.filter((id) => id !== userId)
          : talkDetail.likes.concat([userId]),
      };
    default:
      return talkDetail;
  }
}

export default talkDetailReducer;
