class CreateEntries < ActiveRecord::Migration
  def self.up
    create_table :entries do |t|
      t.integer :list_id
      t.string :title
      t.string :location
      t.text :body

      t.timestamps
    end
  end

  def self.down
    drop_table :entries
  end
end
