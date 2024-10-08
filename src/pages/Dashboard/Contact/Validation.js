import { object, string, number, date, InferType } from 'yup';

const required_message="Bu alan zorunludur !!";
const contactShema = object({
    firstName: string().required(required_message),
    lastName: string().required(required_message),
    email: string().email('Geçerli bir email adresi giriniz!!!').required(required_message),
  });


  export default contactShema;