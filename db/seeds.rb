3.times do |i|
  Appointment.create(title: "Title #{i + 1}", time: DateTime.now)
end
