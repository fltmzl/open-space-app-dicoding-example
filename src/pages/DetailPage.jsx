import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TalkDetail from "../components/TalkDetail";
import TalkItem from "../components/TalkItem";
import TalkReplyInput from "../components/TalkReplyInput";
import { asyncReceiveTalkDetail, asyncToggleLikeTalkDetail, clearTalkDetailActionCreator } from "../states/talkDetail/action";
import { asyncAddTalk } from "../states/talks/action";

function DetailPage() {
  const { id } = useParams();
  // @TODO: get talkDetail and authUser state from store
  const { talkDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to get talk detail by id
    dispatch(asyncReceiveTalkDetail(id));

    return () => {
      dispatch(clearTalkDetailActionCreator());
    };
  }, [id, dispatch]);

  const onLikeTalk = () => {
    // @TODO: dispatch async action to toggle like talk detail
    dispatch(asyncToggleLikeTalkDetail());
  };

  const onReplyTalk = (text) => {
    // @TODO: dispatch async action to add reply talk
    dispatch(
      asyncAddTalk({
        text,
        replyTo: id,
      })
    );
  };

  if (!talkDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      {talkDetail.parent && (
        <div className="detail-page__parent">
          <h3>Replying To</h3>
          <TalkItem {...talkDetail.parent} authUser={authUser.id} />
        </div>
      )}
      <TalkDetail {...talkDetail} authUser={authUser.id} likeTalk={onLikeTalk} />
      <TalkReplyInput replyTalk={onReplyTalk} />
    </section>
  );
}

export default DetailPage;
