import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <label> Podaj Login<input type="text" /></label>
      <br />
      <label> Podaj hasło<input type="password" /></label>
      <br />
      <button>Zaloguj</button>
    </div>
  );
}

export default LoginPage;