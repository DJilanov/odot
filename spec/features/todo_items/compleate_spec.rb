equire 'spec_helper'

describe "Deleting todo items" do
  let!(:todo_list) { TodoList.create(title: "Grocery list", description: "Groceries") }
  let!(:todo_item) { todo_list.todo_items.create(content: "Milk") }  

  it "is successful when marking a sinle item compleate" do
  	expect(todo_item.compleated_at).to be_nil
  	visit_todo_list todo_list
  	within dom_id_for(todo_item) do
  		click_link "Mark Compleate"
  	end
  	todo_item.reload
  	expect(todo_item.compleated_at).to_not be_nil
  end
  context "With compleated items" do
  		let!(:completed_todo_list) { todo_list.todo_items.create(content: "Grocery list", completed_at: "5.minutes.ago") }
	    it "show completed items as complete" do
		  	visit_todo_list todo_list
		  	within dom_id_for(completed_todo_item) do
		  		expect(page).to have_content(complete_todo_item.compleated_at)
		  	end
	    end
  end
end