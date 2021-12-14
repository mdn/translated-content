---
title: Masque de couleur
slug: Web/API/WebGL_API/By_example/Color_masking
translation_of: Web/API/WebGL_API/By_example/Color_masking
original_slug: Web/API/WebGL_API/By_example/Masque_de_couleur
---
{{IncludeSubnav("/fr/Apprendre")}}

{{PreviousNext("Apprendre/WebGL/Par_exemple/Créer_une_animation_colorée","Apprendre/WebGL/Par_exemple/Appliquer_des_découpes_simples")}}

Dans cet article, on modifie des couleurs aléatoires grâce à un masque de couleur. Cela permet de limiter la plage de couleurs affichées à certains tons.

{{EmbedLiveSample("Appliquer_un_masque_sur_des_couleurs_aléatoires",660,425)}}

### Appliquer un masque sur des couleurs aléatoires

Dans cet exemple, on modifie les couleurs aléatoires utilisées pour une animation grâce à l'opération {{domxref("WebGLRenderingContext.colorMask()","colorMask()")}}. D'une certaine façon, cette opération est analogue à la modification qu'on obtient lorsqu'on regarde à travers du verre teinté ou derrière une filtre coloré. Ainsi, en masquant les canaux vert et bleu, on ne pourra recevoir que les composantes rouges des pixels et cela donnera l'impression de regarder à travers du verre teinté de rouge.

Les masques de couleur nous permettent d'illustrer quelques concepts de base [de la théorie des couleurs](https://en.wikipedia.org/wiki/Color_theory). En masquant certaines composantes, on rapproche les couleurs affichées de la couleur complémentaire. Ainsi, en masquant le bleu et le rouge, on obtiendrait des tons de vert. En masquant uniquement le canal bleu, on obtiendra des tons de jaune (dont orange, marron, olive, etc.) qui est la couleur complémentaire du bleu. De la même façon, en masquant uniquement le vert, on obtiendrait des tons magenta (pourpres, rouges, etc.) et en masquant uniquement le rouge, on obtiendrait des tons cyan.

On voit que les appels à `colorMask()` sont uniquement déclenchés lorsque l'utilisateur clique sur l'un des boutons. En revanche, le rendu est fait chaque seconde grâce au timer. L'état du masque de couleur lié à {{Glossary("WebGL")}} est conservé et il n'est donc pas nécessaire d'appeler `colorMask()` à chaque frame pour régler le masque. Cela illustre la manière dont WebGL est un automate a état. Dans un premier temps, on initialise l'état de WebGL et ensuite, à chaque frame, on déclenche uniquement les opérations de dessin.

Les masques de couleurs permettent d'avoir un contrôle précis pour mettre à jour les pixels à l'écran. En limitant les canaux de couleur qui sont utilisés à chaque commande de dessin, on peut utiliser chaque canal à bon escient et on peut par exemple stocler une image en ton de gris.

Enfin, l'application d'un masque de couleur nous montre que {{Glossary("WebGL")}} n'est pas seulement un automate à états mais aussi un _processus_ graphique. Cela signifie que les opérations graphiques liées à WebGL sont effectuées dans un ordre donné et que le résultat de chaque opération sert de point d'entrée pour l'opération suivante. Ainsi, l'opération d'applique définit la valeur pour chaque pixel. L'application du masque se produit plus tard dans le processus et modifie la couleur. Ainsi, le résultat final affiché à l'écran est teinté par la couleur du masque.

```html
<p>Tinting the displayed colors with color masking.</p>
<canvas>Il semblerait que votre navigateur ne supporte pas
    l'élément HTML5 canvas.</canvas>
<button id="red-toggle">On</button>
<button id="green-toggle">On</button>
<button id="blue-toggle">On</button>
```

```css
body {
  text-align : center;
}
canvas {
  display : block;
  width : 280px;
  height : 210px;
  margin : auto;
  padding : 0;
  border : none;
  background-color : black;
}
button {
  display : inline-block;
  font-family : serif;
  font-size : inherit;
  font-weight : 900;
  color : white;
  margin : auto;
  padding : 0.6em 1.2em;
}
#red-toggle {
  background-color : red;
}
#green-toggle {
  background-color : green;
}
#blue-toggle {
  background-color : blue;
}
```

```js
window.addEventListener("load", function setupAnimation (evt) {
  "use strict"
  window.removeEventListener(evt.type, setupAnimation, false);

  var canvas = document.querySelector("canvas");
  var gl = canvas.getContext("webgl")
      || canvas.getContext("experimental-webgl");
  if (!gl) {
    document.querySelector("p").innerHTML =
      "Échec lors de l'obtention du contexte WebGL."
      + "Votre navigateur ou appareil ne supporte "
      + "peut-être pas WebGL.";
    return;
  }
  gl.viewport(0, 0,
    gl.drawingBufferWidth, gl.drawingBufferHeight);

  var timer = setInterval(drawAnimation, 1000);

  var mask = [true, true, true];
  var redtoggle = document.querySelector("#red-toggle"),
    greentoggle = document.querySelector("#green-toggle"),
    bluetoggle = document.querySelector("#blue-toggle");
  redtoggle.addEventListener("click", setColorMask, false);
  greentoggle.addEventListener("click", setColorMask, false);
  bluetoggle.addEventListener("click", setColorMask, false);

  function setColorMask(evt) {
    var index =
      evt.target === greentoggle && 1
      || evt.target === bluetoggle && 2
      || 0;
    mask[index] = !mask[index];
    if (mask[index] === true)
      evt.target.innerHTML="On";
    else
      evt.target.innerHTML="Off";
    gl.colorMask(mask[0], mask[1], mask[2], true);
    drawAnimation();
  };

  function drawAnimation () {
    var color = getRandomColor();
    gl.clearColor(color[0], color[1], color[2], 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  function getRandomColor() {
    return [Math.random(), Math.random(), Math.random()];
  }
}, false);
```

Le code source de cet exemple est également disponible sur [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/color-masking).

{{PreviousNext("Apprendre/WebGL/Par_exemple/Créer_une_animation_colorée","Apprendre/WebGL/Par_exemple/Appliquer_des_découpes_simples")}}
