import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import icons from '../../assets/icons';
import Video from '../../assets/videos/landing.mp4';
import CustomButton from '../../components/CustomButton';
import { H1 } from '../../components/Typography';
import { pStyles } from '../../components/Typography/constants';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import FolderSection from './FolderSection';
import ToolbarSection from './ToolbarSection';

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef();
  const lastSectionRef = useRef();
  const { scrollYProgress: videoScrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start center", "end start"]
  })

  const { scrollYProgress: lastSectionScrollYProgress } = useScroll({
    target: lastSectionRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(videoScrollYProgress, [0, 0.3, 0.8, 1], [0.6, 1, 1, 0])
  const shadow = useTransform(videoScrollYProgress, [0, 0.5, 1], ["0 0 70px 0 rgba(191,151,255,0.44)", "0 -5px 70px 0 rgba(191,151,255,0.44)", "0 0 100px 0 rgba(191,151,255,1)"])
  const background = useTransform(lastSectionScrollYProgress, [0, 0.5], [
    "radial-gradient(circle, rgba(3,0,20,1) 2%, rgba(191,151,255,0.14) 4%, rgba(3,0,20,1) 10%, rgba(191,151,255,0.14) 20%, rgba(3,0,20,1) 30%, rgba(191,151,255,0.14) 40%, rgba(3,0,20,1) 50%)",
    "radial-gradient(circle, rgba(3,0,20,1) 10%, rgba(191,151,255,0.14) 40%, rgba(3,0,20,1) 50%, rgba(191,151,255,0.14) 50%, rgba(3,0,20,1) 60%, rgba(191,151,255,0.14) 60%, rgba(3,0,20,1) 70%)"
  ])

  return (
    <div
      className="w-full h-[100%] flex flex-col justify-center items-start"
    >
      <div className="z-30 pt-[15vh] min-h-[350px] h-[70vh] flex flex-col items-center gap-4">
        <H1 className="animate-slide text-7xl text-center text-transparent tracking-wide bg-clip-text bg-gradient-to-br from-foreground-dark to-[#F7F8F8]">
          Transform your Programming Notes with Code&Line
        </H1>
        <p className="animate-[slideInFromTop_1.5s_ease-in-out] text-xl font-medium text-foreground-dark">
          Effortless line-by-line note management.
        </p>
        <CustomButton
          onPress={() => navigate('/signup')}
          className="mt-4 animate-[slideInFromTop_1.5s_ease-in-out,gradient_5s_ease_infinite] transition *:hover:translate-x-4 min-h-10 border-primary-dark text-primary-light gradientBackground2"
        >
          Start Now {icons.chevronRight}
        </CustomButton>
      </div>
      <motion.div
        style={{ opacity }}
        ref={videoRef}
        className="z-30 flex flex-col items-center justify-center"
      >
        <motion.div
          style={{ boxShadow: shadow }}
          className="self-center w-[80%] border-1 animate-[slideInFromTop_1.5s_ease-in-out] transition-all duration-1000 delay-300 border-primary-dark rounded-lg *:rounded-lg flex items-center justify-center"
        >
          <VideoPlayer
            src={Video}
            enlargeOnView={true}
            className="w-full h-full"
          />
        </motion.div>
        <motion.p
          className={`${pStyles.big} pt-10`}
        >
          Comprehensive and detailed code documentation
        </motion.p>
      </motion.div>
      <FolderSection />
      <ToolbarSection />
      <motion.div
        ref={lastSectionRef}
        style={{ backgroundImage: background }}
        className="bg-contain h-[1200px] w-full self-center h-screen flex flex-col items-center justify-center gap-4"
      >
        <H1 className="text-6xl text-center text-transparent tracking-wide bg-clip-text bg-gradient-to-br from-foreground-dark to-[#F7F8F8]">
          Line-by-line Clarity
        </H1>
        <p className="text-xl font-medium text-foreground-dark">
          Gain full understanding of your code
        </p>
        <CustomButton
          onPress={() => navigate('/signup')}
          className="mt-4 animate-[gradient_5s_ease_infinite] transition *:hover:translate-x-4 min-h-10 border-primary-dark text-primary-light gradientBackground2"
        >
          Sign up for free{icons.chevronRight}
        </CustomButton>
      </motion.div>
    </div>
  )
};

export default Home;
