import { useRef, useState } from 'react'

const BentoTilt = ({ 
    children, 
    className 
} : {
    children: React.ReactNode,
    className: string,
}) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 6;
        const tiltY = (relativeX - 0.5) * -6;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };
  return (
    <div 
        ref={itemRef} 
        className={`${className} transition-all duration-500 ease-out`} 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
    >
        {children}
    </div>
  )
}

export default BentoTilt