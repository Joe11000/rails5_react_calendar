require 'rails_helper'

RSpec.feature "CreateAppointments", type: :feature do
  it 'can ' do
    visit appointments_path

    expect(page).to have_css('.appointments-page')
    expect(page.current_path).to eq '/appointments'
  end

context 'shows existing appointments'
  let!(:appointment) { FactoryGirl.create(:appointment) }

  it 'shows existing appointments', js: true do
    visit appointments_path
    byebug
    within '#appointments-list' do
      expect(all('[data-class=appointment]').length).to eq 1
    end
  end

  it 'can create a new appointment'
end
