import Email from "./components/Email";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
describe("Email component",()=>{
    test('renders "Email" if the button was  not clicked',()=>{
        render(<Email/>);
       
       const SignUpElement=  screen.getByText("Email",{exact:false})
       expect(SignUpElement).toBeInTheDocument()
    }) 
    test('Testing for PlaceHolder',()=>{
        render(<Email/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("test mail")
       expect(checkPlaceHolder).toBeInTheDocument()
    })
    test('Testing for PlaceHolder',()=>{
        render(<Email/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("to")
       expect(checkPlaceHolder).toBeInTheDocument()
    })
 
    test('Testing for PlaceHolder',()=>{
        render(<Email/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("test mail")
       expect(checkPlaceHolder).toBeInTheDocument()
       expect(checkPlaceHolder).toHaveAttribute("type","to")

    })
})