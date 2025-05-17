import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/thank-you.json';

export default function ThankYou() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
}
