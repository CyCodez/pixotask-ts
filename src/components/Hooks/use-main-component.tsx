import { useNavigate } from "react-router-dom";

function useMainComponent(): { openNewPage: () => void } {
  const navigate = useNavigate();
  const openNewPage = (): void => {
    navigate("/");
  };
  return {
    openNewPage,
  };
}

export default useMainComponent;
