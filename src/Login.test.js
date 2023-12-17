import Login from "./components/Login";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
describe("Login component",()=>{
    test('renders "Login" if the button was  not clicked',()=>{
        render(<Login/>);
       
       const SignUpElement=  screen.getByText("Login",{exact:false})
       expect(SignUpElement).toBeInTheDocument()
    }) 
    test('Testing for PlaceHolder',()=>{
        render(<Login/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("Enter email")
       expect(checkPlaceHolder).toBeInTheDocument()
    })
    test('Testing for PlaceHolder',()=>{
        render(<Login/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("Password")
       expect(checkPlaceHolder).toBeInTheDocument()
    })
    test('Testing for PlaceHolder',()=>{
        render(<Login/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("confirmPassword")
       expect(checkPlaceHolder).toBeInTheDocument()
    })
    test('Testing for PlaceHolder',()=>{
        render(<Login/>);
       
       const checkPlaceHolder= screen.getByPlaceholderText("Enter email")
       expect(checkPlaceHolder).toBeInTheDocument()
       expect(checkPlaceHolder).toHaveAttribute("type","email")

    })
})