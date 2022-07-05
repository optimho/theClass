
class Color {
    constructor(r,g,b, name='') {
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }

    greet(){
        return `hello ${this.name}`
    }
    innerRGB(){
        const {r, g, b} = this;
        return `${r}, ${g},${b}`
    }

    rgb() {
        return `rgb(${this.innerRGB()}`
    }

    hex(){
        const {r, g, b} = this;
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
    }

    rgba(a=1.0){
        return `rgba(${this.innerRGB()}, ${a})`
    }
}

const red = new Color(255,67,89, 'tomatoe')
const white = new Color(255,255,255, 'white')

"hsl(30,50%,60%)"
