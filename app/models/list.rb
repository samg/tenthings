class List < ActiveRecord::Base
  validates_presence_of :title, :user_id
  has_many :entries
  #belongs_to :user
end
