class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
    ActionCable.server.broadcast "room_channel", {action: "game_start", msg: "cross"}
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
