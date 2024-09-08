import { useState, useEffect, useRef } from 'react'
import styles from './Inicio.module.css'
import { useNavigate } from 'react-router-dom'
import {
  SpeakerHigh,
  Play,
  EnvelopeOpen,
  WhatsappLogo,
  SpotifyLogo,
  SoundcloudLogo,
  InstagramLogo
} from '@phosphor-icons/react'

export default function Inicio() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false) // Estado para controlar a visibilidade
  const musicRef = useRef(null) // Referência à div .music

  function handleDiscografia() {
    navigate('/discografia')
  }

  useEffect(() => {
    const handleScroll = () => {
      if (musicRef.current) {
        const rect = musicRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Verifica se a metade da div .music está visível na janela de visualização
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section>
      <article className={styles.bannerHero}></article>
      <article className={styles.content}>
        <div className={styles.panel}>
          <p>Oficial Website</p>
          <p>©</p>
          <p>2024</p>
          <p>Punk Progressive</p>
          <p>|</p>
          <p>Psy Trance</p>
        </div>

        {/* Adiciona a classe 'visible' condicionalmente */}
        <div
          className={`${styles.music} ${isVisible ? styles.visible : ''}`}
          ref={musicRef}
        >
          <div className={styles.card}>
            <div className={styles.firstColumn}>
              <div className={styles.descriptions}>
                <div className={styles.head}>
                  <h2>Lançamento</h2>
                  <p>Ouça aqui minha prévia!</p>
                  <p>Music</p>
                </div>
                <div className={styles.mid}>
                  <p>Acesse minhas plataformas musicais e encontre muito mais!</p>
                  <div className={styles.images}>
                    <a href="https://soundcloud.com/vvetala/tracks">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725778132/vetala/grapich/lrutstrxtyanksdv6gkq.png" />
                    </a>
                    <a href="#">
                      <img src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1725778115/vetala/grapich/fkuntzixdcovhjipzjuw.png" />
                    </a>
                  </div>
                </div>
              </div>

              <button onClick={handleDiscografia}>Ver discografia</button>
            </div>
            <div className={styles.secondColumn}>
              <div className={styles.boxMusic}></div>

              <audio
                src="https://res.cloudinary.com/dio2dnpmn/video/upload/v1725780514/vetala/sounds/n8lgbk16lofhj8y7inpj.mp3"
                controls
              ></audio>
            </div>
          </div>
        </div>

        <div className={styles.bio}>
          <div className={styles.logoOne}>
            <img src="../src/assets/images/logoVetala.png" />
          </div>
          <div className={styles.bioDescription}>
            <h2>Biografia</h2>
            <p>
              Com o intuito de produzir arte e me expressar, tenho atuado em diversas
              áreas da música há mais de 10 anos, seja como roadie ou músico em bandas de
              metal, punk e pop rock. Meu interesse pela música surgiu muito cedo e sempre
              contei com o apoio dos meus pais, o que me ajudou e incentivou a continuar
              no caminho que, inicialmente, era apenas um hobby, mas hoje se tornou uma
              profissão.
            </p>
            <p>
              Com o intuito de produzir arte e me expressar, tenho atuado em diversas
              áreas da música há mais de 10 anos, seja como roadie ou músico em bandas de
              metal, punk e pop rock. Meu interesse pela música surgiu muito cedo e sempre
              contei com o apoio dos meus pais, o que me ajudou e incentivou a continuar
              no caminho que, inicialmente, era apenas um hobby, mas hoje se tornou uma
              profissão.
            </p>
            <p>
              Atualmente, estou no cenário da produção musical, onde sinto liberdade para
              criar o que minha alma sente, expressar meus pensamentos e transformar meus
              sentimentos em música. Meu sonho daqui para frente é continuar levando minha
              arte para todos os lugares que os ventos do destino me levarem, ensinando e
              compartilhando conhecimento com aqueles que, assim como eu, sonham em tornar
              sua expressão algo tangível e emocional.
            </p>
            <p>O futuro a Deus pertence, e já me encontro em plena paz e felicidade.</p>
          </div>
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <div className={styles.colOne}>
              <h2>Vamos Conversar?</h2>
              <p>
                Se você está pronto para levar seu próximo evento a um novo patamar ou
                deseja discutir uma parceria que vai marcar a cena do Psy Trance, entre em
                contato comigo! Estou ansioso para ouvir suas ideias e colaborar para
                criar algo realmente especial.
              </p>
            </div>

            <div className={styles.colTwo}>
              <div className={styles.contacts}>
                <h2>Contatos</h2>
                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <WhatsappLogo size={24} />
                    <p>WhatsApp</p>
                  </div>
                  <p>(41) 99999-9999</p>
                </div>

                <div className={styles.contact}>
                  <div className={styles.wpp}>
                    <EnvelopeOpen size={24} />
                    <p>E-mail</p>
                  </div>
                  <p>email@vetala.com.br</p>
                </div>
              </div>

              <div className={styles.icons}>
                <p>Redes sociais/Plataformas Musicais</p>
                <div className={styles.icon}>
                  <a
                    href="https://www.instagram.com/dollmakerlive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <InstagramLogo size={32} />
                  </a>
                  <a
                    href="https://soundcloud.com/vvetala/tracks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SoundcloudLogo size={32} />
                  </a>
                  <a
                    href="https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=X-98tm35QhOOQnoXXyuyfw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <SpotifyLogo size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
