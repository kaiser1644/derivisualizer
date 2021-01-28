import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
    width: 100%;
    height: 100%;
`;

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const width = canvas.width;
        const height = canvas.height;
        const space = 10;
        const deltaX = Math.floor(width / space) - 2;
        const deltaY = Math.floor(height / space) - 2;

        const pX = canvas.width - deltaX * space;
        const pY = canvas.height - deltaY * space;
        const pL = Math.ceil(pX / 2) - 0.5;
        const pT = Math.ceil(pY / 2) - 0.5;
        const pR = canvas.width - deltaX * space - pL
        const pB = canvas.height - deltaY * space - pT

        context.strokeStyle = "#b0bec5";

        context.beginPath();
        for (var x = pL; x <= canvas.width - pR; x += space) {
            context.moveTo(x, pT);
            context.lineTo(x, canvas.height - pB);
        }
        for (var y = pT; y <= canvas.height - pB; y += space) {
            context.moveTo(pL, y);
            context.lineTo(canvas.width - pR, y);
        }
        context.stroke();

    }, []);

    return (<StyledCanvas ref={canvasRef}></StyledCanvas>);
};

export default Canvas;
