"use client"
import React, { useState } from 'react';
import { GoogleLogin, GoogleCredentialResponse } from '@react-oauth/google';


const App = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (credentialResponse: GoogleCredentialResponse) => {
    setLoading(true);
    const { credential } = credentialResponse;
    if (!credential) {
      setLoading(false);
      return;
    }
    // Exibe o token recebido na tela
    setToken(credential);
    setLoading(false);
  };

  const handleLoginFailed = () => {
    console.error("Login falhou");
  };

  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <GoogleLogin
          onSuccess={handleLogin}
          onError={handleLoginFailed}
          useOneTap
          text="signin_with"
        />
        {loading && <p>Carregando...</p>}
        {token && (
          <div>
            <h3>Token</h3>
            <p>{token}</p>
          </div>
        )}
      </div>
  );
};

export default App;
