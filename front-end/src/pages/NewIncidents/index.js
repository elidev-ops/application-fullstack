import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Register() {
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const ong_id = localStorage.getItem('ongId')
  async function handlerNewIncidents(e) {
    e.preventDefault()
    const data = {
      title,
      description,
      value,
      ong_id
    }
    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ong_id
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }
  return (
    <div className="new-incidents-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="By The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handlerNewIncidents}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
