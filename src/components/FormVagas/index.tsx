import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'
import { Formulario, BotaoPesquisa, Campo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        type="search"
        onChange={(e) => setTermo(e.target.value)}
      />
      <BotaoPesquisa type="submit">Pesquisar</BotaoPesquisa>
    </Formulario>
  )
}
export default FormVagas
