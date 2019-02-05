class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :date
      t.string :time
      t.text :description
      t.integer :guest_id
      t.integer :table_id
      t.timestamps
    end
  end
end
