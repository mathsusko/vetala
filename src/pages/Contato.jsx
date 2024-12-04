import {
  Envelope,
  WhatsappLogo,
  InstagramLogo,
  SpotifyLogo,
  SoundcloudLogo
} from '@phosphor-icons/react'
import styles from './Contato.module.css'

export default function Contato() {
  return (
    <div className={styles.bg}>
      {/* <div className={styles.content}>
        <div className={styles.colOne}>
          <h2>Olá, Produtores de Eventos e Profissionais da Música!</h2>
          <p>
            Se você está em busca de um DJ que transforma qualquer evento em uma jornada
            psicodélica inesquecível, você veio ao lugar certo. Especializado em
            Progressive Trance ao Techno, minha missão é criar sets hipnóticos e
            energéticos que elevam o público a um estado de êxtase coletivo.
          </p>
        </div>

        <div className={styles.colTwo}>
          <div className={styles.talk}>
            <h2>Vamos Conversar?</h2>
            <p>
              Eleve seu próximo evento a um novo patamar ou se desejar discutir uma
              parceria que vai marcar a cena do Psy Trance, entre em contato comigo! Estou
              ansioso para ouvir suas ideias e colaborar para criar algo realmente
              especial.
            </p>
          </div>

          <div className={styles.contato}>
            <h2>Contatos</h2>

            <div className={styles.row}>
              <div className={styles.info}>
                <div className={styles.title}>
                  <WhatsappLogo size={32} />
                  <h2>WhatsApp</h2>
                </div>
                <p>(41) 99999-9999</p>
              </div>

              <div className={styles.info}>
                <div className={styles.title}>
                  <Envelope size={32} />
                  <h2>E-mail</h2>
                </div>
                <p>email@gmail.com</p>
              </div>
            </div>

            <div className={styles.rowTwo}>
              <p>Redes sociais/Plataformas musicais</p>
              <div className={styles.icons}>
              <a
                    href="https://www.instagram.com/dollmakerlive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                  >
                    <InstagramLogo size={32} />
                  </a>
                  <a
                    href="https://soundcloud.com/dollmakerlive"
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
      </div> */}
      <div
          className={styles.contact}
          >
          <div className={styles.rows}>
            <div className={styles.rowOne}>
              <img
                src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1733325476/Frame_117_cu4k8x.png"
                alt=""
              />
            </div>
            <div className={styles.rowTwo}>
              <div className={styles.colOne}>
                <div className={styles.desc}>
                  <p>
                    Se você está pronto para levar seu próximo evento a um novo patamar ou
                    deseja discutir uma parceria que vai marcar a cena do Psy Trance,
                    entre em contato comigo! Estou ansioso para ouvir suas ideias e
                    colaborar para criar algo realmente especial.
                  </p>
                </div>
                <div className={styles.img}>
                  <img
                    src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1733325476/Vetala_Variac%CC%A7a%CC%83o_completa_-_Branco_secxvx.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.colTwo}>
                <img
                  className={styles.imgDesktop}
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1733325476/card_kxvzwf.png"
                  alt=""
                />
                <img
                  className={styles.imgMobile}
                  src="https://res.cloudinary.com/dio2dnpmn/image/upload/v1733328265/card-mobile_vg4q6c.png"
                  alt=""
                />

                <div className={styles.sociaiss}>
                  <p>Redes sociais/Plataformas músicais</p>
                  <div className={styles.icones}>
                    <a
                      href="https://www.instagram.com/vetalamusic/"
                      target="_blank"
                    >
                      <InstagramLogo size={32} />
                    </a>
                    {/* <a
                      href="https://www.youtube.com/@dollmaker626"
                      target="_blank"
                    >
                      <YoutubeLogo size={32} />
                    </a> */}
                    <a
                      href="https://soundcloud.com/vvetala?ref=clipboard&p=i&c=1&si=92931BB8590640BAB07AFF14E8FFF45F&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                      target="_blank"
                    >
                      <SoundcloudLogo size={32} />
                    </a>
                    {/* <a
                      href="https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=cFlutIm5RQq06ABT4Au6Iw"
                      target="_blank"
                    >
                      <SpotifyLogo size={32} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
