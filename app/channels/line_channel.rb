class LineChannel < ApplicationCable::Channel
  def subscribed
    stream_from params[:id]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
