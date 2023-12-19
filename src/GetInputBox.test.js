import GetInboxView from "./components/GetInboxView";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
describe("GetInboxView component",()=>{
    test('renders "inbox" if the button was  not clicked',()=>{
        render(<GetInboxView/>);
       
       const SignUpElement=  screen.getByText("inbox",{exact:false})
       expect(SignUpElement).toBeInTheDocument()
    }) 
   
 
  
})