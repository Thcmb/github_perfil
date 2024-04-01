import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuError, setDeuError] = useState(false)

    useEffect(() =>{
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Usuário não encontrado');
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson);
            }, 3000);
        }).catch (e => {
            setEstaCarregando(false)
            setDeuError(true)
        }) 
    },[nomeUsuario])

    return (
        <>
        {deuError ? (
            <h1> Usuário não encontrado.</h1>
        ) : (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li className={styles.listItem} key={repositorio.id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {repositorio.name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b>
                                {repositorio.language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no site</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        )}
        </>
    )
}

export default ReposList;