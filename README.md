# react-default-slider

Hi. The usage is very simple:


      <DefaultSlider
        slides={[
          <img src={img1}/>,
          <img src={img2}/>,
          <img src={img3}/>
        ]}
        type = 'custom'
        className = 'blob'
    />
    
1. Slides = array of images or divs, (if you are using divs - you should write type: custom and define width and heigth in class).
2. Type: 'custom' | 'default' | 'imageSize', custom - your own sizes(define in className). 'default' - 16/9. 'imageSize' - size of your image (be shure that all of your images has similiar proportions.
3. className

Good luck
