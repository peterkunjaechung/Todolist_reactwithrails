ActiveRecord::Schema.define(version: 2019_06_10_154300) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.boolean "complete"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
