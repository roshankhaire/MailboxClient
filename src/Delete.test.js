import GetInboxView from "./components/GetInboxView";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
describe(" GetInbox component",()=>{
    test('renders "id" if the button was  not clicked',()=>{
        render(<GetInboxView/>);
       
       const SignUpElement=  screen.getByText("id",{exact:false})
       expect(SignUpElement).toBeInTheDocument()
    }) 
   
 
   
})