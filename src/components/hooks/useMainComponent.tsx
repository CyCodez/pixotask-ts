import { useNavigate } from "react-router-dom";

function useMainComponent(){
    const navigate = useNavigate();
    const openNewPage = () => {
      navigate("/");
    };
return{
     openNewPage
}
}

export default useMainComponent