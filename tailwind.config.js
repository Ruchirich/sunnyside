/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'header-desktop': "url('../images/desktop/image-header.jpg')",
        'header-mobile': "url('../images/mobile/image-header.jpg')",
        'tranform-desktop': "url('../images/desktop/image-transform.jpg')",
        'tranform-mobile': "url('../images/mobile/image-transform.jpg')",
        'standout-desktop': "url('../images/desktop/image-stand-out.jpg')",
        'standout-mobile': "url('../images/mobile/image-stand-out.jpg')",
        'graphic-desktop': "url('../images/desktop/image-graphic-design.jpg')",
        'graphic-mobile': "url('../images/mobile/image-graphic-design.jpg')",
        'photography-desktop': "url('../images/desktop/image-photography.jpg')",
        'photography-mobile': "url('../images/mobile/image-photography.jpg')",
        'gallery-1-desktop': "url('../images/desktop/image-gallery-milkbottles.jpg')",
        'gallery-1-mobile': "url('../images/mobile/image-gallery-milkbottles.jpg')",
        'gallery-2-desktop': "url('../images/desktop/image-gallery-orange.jpg')",
        'gallery-2-mobile': "url('../images/mobile/image-gallery-orange.jpg')",
        'gallery-3-desktop': "url('../images/desktop/image-gallery-cone.jpg')",
        'gallery-3-mobile': "url('../images/mobile/image-gallery-cone.jpg')",
        'gallery-4-desktop': "url('../images/desktop/image-gallery-sugarcubes.jpg')",
        'gallery-4-mobile': "url('../images/mobile/image-gallery-sugar-cubes.jpg')",
      }
    },
    colors: {
      red: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      darkCyan: 'hsl(167, 40%, 24%)',
      darkBlue: 'hsl(198, 62%, 26%)',
      cyan: 'hsl(168, 34%, 41%)',
      footer: '#90d4c5',
      veryBlue: 'hsl(212, 27%, 19%)',
      vdarkGrayBlue: 'hsl(213, 9%, 39%)',
      darkGrayBlue: 'hsl(232, 10%, 55%)',
      grayBlue: 'hsl(210, 4%, 67%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      fraunces: ['Fraunces', 'serif']
    },
    letterSpacing: {
      widest: '.2em'
    }
  },
  plugins: [],
}