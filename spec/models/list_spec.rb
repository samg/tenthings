require 'spec_helper'

describe List do
  before { @list = List.new }
  describe "validation" do
    it "should require a title" do
      @list.should_not be_valid
      @list.errors[:title].should_not be_empty
    end

    it "should require a user" do
      pending
      @list.should_not be_valid
      @list.errors[:user_id].should_not be_empty
    end
  end

  describe "relationships" do
    it "should have entries" do
      @list.entries.build.should be_a_kind_of Entry
    end

    it "should have a user" do
      pending
      @list.build_user.should be_a_kind_of User
    end
  end
end
