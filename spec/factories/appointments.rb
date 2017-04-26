FactoryGirl.define do
  factory :appointment do
    time {1.day.from_now}
    sequence(:title) {|i| "Title #{i}" }
  end
end
