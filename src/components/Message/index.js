import React from 'react'
import { useSelector } from 'react-redux'

export const Message = () => {
  const isShow = useSelector(state => state.layout.showMessage);
  return (
    <>
      {isShow && (
        <div className="container mt-3">
          <div className="alert alert-success" role="alert">
            Cadastro adicionado com sucesso!
          </div>
        </div>
      )}
    </>
  )
}
