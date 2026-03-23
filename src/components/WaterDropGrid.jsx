import { animate, stagger } from 'animejs'


export const WaterDropGrid = () => {
    return (
        <div className='grid'>
            <Dots/>
        </div>
    )   
}

const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;

const Dots = () => {
    const handleDotClick = (e) => {
        const index = parseInt(e.currentTarget.dataset.index);
        animate('.dot', {
            scale: [
                {to: 1.35, easing: "easeOutSine", duration: 250},
                {to: 1, easing: "easeInOutQuad", duration: 500},
            ],
            translateY: [
                {to: -16, easing: "easeOutSine", duration: 250},
                {to: 0, easing: "easeInOutQuad", duration: 500},
            ],
            opacity: [
                {to: 1, easing: "easeOutSine", duration: 250},
                {to: 0.5, easing: "easeInOutQuad", duration: 500},
            ],
            delay: stagger(100, {grid: [GRID_WIDTH, GRID_HEIGHT], from: index}),
        });
    };

    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push (
                <div 
                    onClick={handleDotClick}
                    className="dots-group group" 
                    data-index={index} 
                    key={`${i}-${j}`}
                    >
                    <div className="dot" data-index={index}></div>
                </div>
            );
            index++;
        }
    }

    return (
        <div 
            className="dots"
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        >
            {dots}
        </div>
    );
}