const Canvas = () => {
  return (
    <div>
      {/* A 500x500 block to display an image */}
      <div className="canvas-container">
        <canvas id="canvas" width="750" height="750" style={{backgroundColor: '#000'}}></canvas>
      </div>
    </div>
    )
}

export default Canvas;
