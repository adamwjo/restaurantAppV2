class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date, :time
  belongs_to :table
  belongs_to :guest 
end
