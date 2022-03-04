class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
    # Match.create()
    REDIS.set("a", 1)
    ActionCable.server.broadcast "room_channel", {action: "game_start", msg: "cross" , cache: REDIS.get("a")}
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
