import React, { useEffect, useState } from "react";

interface PropTypes {
  startTime: number;
  endTime: number;
}

const calculateTime = (distance: number) => {
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
const CountDown: React.FC<PropTypes> = ({ startTime, endTime }) => {
  const [duration, setDuration] = useState<number>(endTime - startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration((prev) => prev - 1000); // 1s
    }, 1000);

    // If the count down is finished, write some text
    if (duration < 0) clearInterval(interval);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = calculateTime(duration);

  return (
    <div className="flex items-center">
      <b>{days}</b>&nbsp;
      <small>Days</small>&nbsp;
      <b>{hours}</b>&nbsp;
      <small>Hours</small>&nbsp;
      <b>{minutes}</b>&nbsp;
      <small>Mins</small>&nbsp;
      <b>{seconds}</b>&nbsp;
      <small>Secs</small>&nbsp;
    </div>
  );
};

export default CountDown;
