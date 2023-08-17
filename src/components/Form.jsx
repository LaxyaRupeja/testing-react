import {
    Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Switch,
} from "@chakra-ui/react";
import React, {  useState } from "react";

const Form = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [title, setTitle] = useState("");
  const postData =async  ()=>{
    const response  = await fetch("https://puce-easy-crocodile.cyclic.cloud/post",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({title,live:isSwitchOn})
    })
    const data = await response.json();
    console.log(data);
}

    
  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <div>
      <FormControl>
        <FormLabel>Title :</FormLabel>
        <Input onChange={(e) => setTitle(e.target.value)} type="text" />
        <FormHelperText>Put the Title of your post</FormHelperText>
        <Switch isChecked={isSwitchOn} onChange={handleSwitchChange} />
        <Button
        onClick={postData}
            mt={4}
            colorScheme='teal'
            type='submit'
          >
            Submit
          </Button>
      </FormControl>
    </div>
  );
};

export default Form;
