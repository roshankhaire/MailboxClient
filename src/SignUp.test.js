import SignUp from "./components/SignUp";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
describe("SingUp component",()=>{
    test('renders "signUp" if the button was  not clicked',()=>{
        render(<SignUp/>);
       
       const SignUpElement=  screen.getByText("signUp",{exact:false})
       expect(SignUpElement).toBeInTheDocument()
    }) 
    test('Testing for PlaceHolder',()=>{
        render(<SignUp/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("Enter email")
       expect(checkPlaceHolder).toBeInTheDocument()
    })
    test('Testing for PlaceHplder',()=>{
        render(<SignUp/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("Password")
       expect(checkPlaceHolder).toBeInTheDocument()
    })
    test('Testing for PlaceHplder',()=>{
        render(<SignUp/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("confirmPassword")
       expect(checkPlaceHolder).toBeInTheDocument()
    })
    test('Testing for PlaceHolder',()=>{
        render(<SignUp/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("Enter email")
       expect(checkPlaceHolder).toBeInTheDocument()
       expect(checkPlaceHolder).toHaveAttribute("type","email")

    })
})