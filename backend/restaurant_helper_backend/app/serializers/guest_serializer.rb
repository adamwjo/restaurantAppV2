class GuestSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :address, :phone_number
  has_many :reservations
  has_many :tables, through: :reservations
end
