FactoryGirl.define do
  factory :appointment do
    time {DateTime.now}
    sequence(:title) {|i| "Title #{i}" }
  end
end