import nav from "./nav";
// import * as GSAP from 'gsap';
// import { footer } from "./footer";
const getGSAP = () => import("gsap");
const getFooter = () => import(
    /* webpackChunkName: "footer" */
    "./footer");
const getLodashUniq = () => import("lodash-es/uniq");

import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";
import css from "./footer.css";
import buttonStyles from "./button.css";

if (process.env.NODE_ENV === "development") {
const setButtonStyle = (color) => import(/* webpackMode: "lazy-once" */`./button-styles/${color}`)
} else {
    const setButtonStyle = (color) => import(`./button-styles/${color}`)
}

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);

button.addEventListener("click", e => {
    getFooter().then(({footer}) => {
        document.body.appendChild(footer);
    });
    getGSAP().then(gsap => {
        console.log(gsap)
    });
    setButtonStyle('red').then(styleStr => {
        button.style = styleStr.default;
    })

});


document.body.appendChild(image);

