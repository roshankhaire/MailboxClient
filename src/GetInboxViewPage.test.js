import GetInboxView from "./components/GetInboxView";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
describe("Get Inbox component",()=>{
    test('renders "inbox view page" ',()=>{
        render(<Email/>);
       
       const SignUpElement=  screen.getByText("inbox view page",{exact:false})
       expect(SignUpElement).toBeInTheDocument()
    }) 
 
})