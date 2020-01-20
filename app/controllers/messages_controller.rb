class MessagesController < ApplicationController
  
  def create
    @message = Message.new(message_param)
    @message.user = current_user
    @message.save
  end

  private
  def message_param
    params.require(:message).permit(:body)
  end
end
