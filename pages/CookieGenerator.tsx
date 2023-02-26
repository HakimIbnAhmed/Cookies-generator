import { useState } from "react";

const CookieGenerator = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleGenerateClick = () => {
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 jours
    const expires = date.toUTCString();

    document.cookie = `${name}=${value};expires=${expires};path=/;domain=localhost`;
    setName("");
    setValue("");
    setErrorMessage("");
    setSuccessMessage("Cookie créé !");
    setTimeout(() => setSuccessMessage(""), 2000);
  };
};

export default CookieGenerator;
