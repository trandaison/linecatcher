class ChannelController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
  end

  def verify
    ActionCable.server.broadcast params[:id], params
    render json: {success: true}, status: :ok
  end
end
