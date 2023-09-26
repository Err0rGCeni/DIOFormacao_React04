import { ErrorText, IconContainer, InputContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";
import { IInput } from "./types";


const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
    return (
        <>
            <InputContainer>
                {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <InputText {...rest} {...field} />}
                />

            </InputContainer>
            {
                errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null
            }
        </>
    )
}

export default Input