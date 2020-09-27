import { IsString, IsEmail } from "class-validator";

class InquiryDTO {
    @IsString()
    public name: string;

    @IsEmail()
    public email: string;

    @IsString()
    public inquiry: string;
}

export default InquiryDTO;