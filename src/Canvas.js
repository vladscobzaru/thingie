import React from 'react'
import useCanvas from './useCanvas'
import * as R from 'ramda';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

const Canvas = props => {

    const { draw, options, ...rest } = props
    const context = R.path(['context'], options);
    const width = R.path(['context'], options) || CANVAS_WIDTH;
    const height = R.path(['context'], options) || CANVAS_HEIGHT;

    const canvasRef = useCanvas(draw, { context, width, height });

    return <canvas ref={canvasRef} width={width} height={height} {...rest} />
}

export default Canvas