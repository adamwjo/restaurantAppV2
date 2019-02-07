class GuestsController < ApplicationController

    def index
        render json: Guest.all 
    end

    def show
        render json: Guest.find(params[:id])
    end

    def create
        @guest = Guest.new
        @guest.first_name = params([:first_name])
        @guest.last_name = params([:last_name])
        @guest.phone_number = params([:phone_number])
        @guest.email = params([:email])
        @guest.address = params([:address])
        @guest.save
    end
end
