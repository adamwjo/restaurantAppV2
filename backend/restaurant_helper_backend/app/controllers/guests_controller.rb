class GuestsController < ApplicationController

    def index
        render json: Guest.all 
    end

    def show
        render json: Guest.find(params[:id])
    end
end
