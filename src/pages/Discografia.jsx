import { motion } from 'framer-motion'
import styles from './Discografia.module.css'

// Define o conteúdo das músicas com URL de áudio
const musicData = [
  {
    title: 'Rafflesia Reverie',
    production: 'Vetala - Trancedencya Records',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725778376/vetala/coverMusic/dbi3xayegxliq25bimdj.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725778115/vetala/grapich/fkuntzixdcovhjipzjuw.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725778132/vetala/grapich/lrutstrxtyanksdv6gkq.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725780514/vetala/sounds/n8lgbk16lofhj8y7inpj.mp3',
    spotify: '#',
    sound: 'https://soundcloud.com/vvetala/tracks'
  },
  {
    title: 'Blurry Emptyness',
    production: 'Vetala',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725778389/vetala/coverMusic/xgzdguwru93tqabsruxp.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725778115/vetala/grapich/fkuntzixdcovhjipzjuw.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725778132/vetala/grapich/lrutstrxtyanksdv6gkq.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725780532/vetala/sounds/vb0xlrk4hicfclb2rwhz.mp3',
    spotify: '#',
    sound: 'https://soundcloud.com/vvetala/tracks'
  }

  // Adicione mais músicas conforme necessário
]

export default function Discografia() {
  // Define a animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <div className={styles.discografia}>
          <div className={styles.spotify}>
            <h2>DISCOGRAFIA</h2>

            <div className={styles.cards}>
              {musicData.map((music, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.3 }} // Define o atraso entre os cards
                >
                  <div
                    className={styles.fotoMusic}
                    style={{ backgroundImage: `url(${music.imageUrl})` }}
                  ></div>

                  <div className={styles.descMusic}>
                    <h2>{music.title}</h2>
                    <p>{music.production}</p>
                  </div>

                  <audio controls>
                    <source
                      src={music.audioUrl}
                      type="audio/mp3"
                    />
                  </audio>

                  <div className={styles.cta}>
                    <a href={music.spotify}>
                      <img
                        src={music.spotifyUrl}
                        alt="Spotify"
                      />
                    </a>
                    <a href={music.sound}>
                      <img
                        src={music.soundcloudUrl}
                        alt="SoundCloud"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
