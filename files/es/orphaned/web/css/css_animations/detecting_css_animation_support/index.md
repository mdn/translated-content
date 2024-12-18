---
title: Detectar soporte de animación CSS
slug: orphaned/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
original_slug: Web/CSS/CSS_Animations/Detecting_CSS_animation_support
---

{{CSSRef}}

Las animaciones de CSS permiten realizar animaciones creativas de contenido usando nada más que CSS. Sin embargo, es posible que hayan momentos en que estas funciones no sean compatibles, y puede que desees manejar ese problema usando código JavaScript. Este artículo, basado en [la publicación](https://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/) de Chris Heilmann, demuestra una técnica de como hacer esto.

## Prueba de la compatibilidad de animaciones CSS

Este código comprueba si el soporte de animaciones CSS esta disponible:

```js
var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elm = document.createElement('div');

if( elm.style.animationName !== undefined ) { animation = true; }

if( animation === false ) {
  for( var i = 0; i < domPrefixes.length; i++ ) {
    if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}
```

Para empezar, hemos definido algunas variables. Asumimos que las animaciones no son compatibles al establecer la variable `animation` a `false`. Establecemos `la variable animationstring` a `animation` la cual es la propiedad que queremos establecer mas tarde. Creamos un arreglo (array) sobre los prefijos de navegadores para realizar un bucle, y establecemos la variable `pfx` a una cadena vacía.

Luego verificamos si la propiedad de CSS {{ cssxref("animation-name") }} esta establecida en la colección de estilo para el elemento especificado por la variable `elm`. Esto quiere decir que el navegador soporta animaciones CSS sin ningun prefijo, lo cual, hasta la fecha, ninguno de ellos lo hace.

Si el navegador no soporta animaciones sin prefijos, y `animation` sigue siendo `false`, iteramos todos los posibles prefijos, ya que todos los principales navegadores estan anteponiendo esta propiedad y cambiando su nombre a `AnimationName` en su lugar.

Una vez que el código ha terminado de ejecutarse, el valor de _`animation`_ será  _`false`_ si el soporte de animacion CSS no esta disponible, de otro modo será _`true`_. Si es _`true`_ tanto el nombre de las propiedad de `animation` y el el prefijo keyframe serán los correctos. Así que si utilizas un nuevo Firefox, la propiedad será `MozAnimation` y el prefijo keyframe será `-moz-`, mientras en Chrome será `WebkitAnimation` y `-webkit-`. Tenga en cuenta que los navegadores no facilitan el cambio entre _camelCase_ (Capitalizacion medial) y la _hyphen-ation_ (separación).

## Animaciones utilizando la sintaxis correcta para diferentes navegadores

Ahora que sabes si las animaciones CSS son compatibles o no, podemos animar.

```js
if( animation === false ) {

  // animate in JavaScript fallback

} else {
  elm.style[ animationstring ] = 'rotate 1s linear infinite';

  var keyframes = '@' + keyframeprefix + 'keyframes rotate { '+
                    'from {' + keyframeprefix + 'transform:rotate( 0deg ) }'+
                    'to {' + keyframeprefix + 'transform:rotate( 360deg ) }'+
                  '}';

  if( document.styleSheets && document.styleSheets.length ) {

      document.styleSheets[0].insertRule( keyframes, 0 );

  } else {

    var s = document.createElement( 'style' );
    s.innerHTML = keyframes;
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );

  }

}
```

Este código examina el valor de _`animation`_; si es _`false`_, sabemos que tendremos que recurrir a la alternativa de JavaScript para realizar nuestra animacion. De otra manera, podemos usar JavaScript para crear los efectos de animación CSS deseados.

Establecer las propiedades de animación es fácil; simplemente actualiza su valor en la colección de estilos. Aunque, añadir `keyframes` es más complicado, ya que no están definidas usando la sintaxis tradicional de CSS (lo que los hace mas flexible, pero mas difícil desde script).

Para definir nuestros keyframes usando JavaScript, necesitamos transcribirlos como una cadena CSS. Todo lo que hacemos es crear una variable `keyframes`, anteponiendo cada atributo tal como se construye. Esta variable, una vez construida, contiene la descripción completa de todos los keyframes necesarios por nuestra secuencia de animación.

La siguiente tarea es realmente añadir los keyframes al CSS de la página. Lo primeron que hay que hacer es mirar a ver si existe una hoja de estilo en el documento; si es así, sensillamente insertamos el keyframe descrito dentro de la hoja de estilos; esto se hace en las lineas 13-15.

Si aún no existe una hoja de estilos, se crea un nuevo elemento {{ HTMLElement("style") }} , y su contenido se incorpora al valor de los keyframes. Luego se sinerta el valor {{ HTMLElement("style") }} dentro del{{ HTMLElement("head") }} del documento, añadiendo así la nueva hoja de estilo del document.

[Ver en el JSFiddle](https://jsfiddle.net/codepo8/ATS2S/8/embedded/result)

## Ver tambien

- [Animaciones CSS](/es/docs/Web/CSS/CSS_animations/Using_CSS_animations)
