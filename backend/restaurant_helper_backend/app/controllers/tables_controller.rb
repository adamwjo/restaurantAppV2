class TablesController < ApplicationController
    def index
        render json: Table.all 
    end
end
