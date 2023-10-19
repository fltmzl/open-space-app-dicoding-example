import { ActionType } from "./action";

function talksReducer(talks = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_TALKS:
      return action.payload.talks;
    case ActionType.ADD_TALK:
      return [action.payload.talk, ...talks];
    case ActionType.TOGGLE_LIKE_TALK:
      // eslint-disable-next-line no-case-declarations
      const { talkId, userId } = action.payload;

      return talks.map((talk) => {
        if (talk.id === talkId) {
          return {
            ...talk,
            likes: talk.likes.includes(userId)
              ? talk.likes.filter((id) => id !== userId)
              : talk.likes.concat([userId]),
          };
        }

        return talk;
      });
    default:
      return talks;
  }
}

export default talksReducer;
