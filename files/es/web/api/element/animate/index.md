---
title: Element.animate()
slug: Web/API/Element/animate
---

{{APIRef}}

El método `animate()` de la interfaz {{domxref("Element")}} es un método abreviado el cual crea un nuevo {{domxref("Animation")}}, aplicado al elemento, luego reproduce la animación. Devuelve la instancia creada de un objeto {{domxref("Animation")}}.

> **Nota:** Los elementos pueden tener multiples animaciones aplicadas a ellos. Puedes obtener una
> lista de las animaciones que afectan a un elemento llamando a {{domxref("Element.getAnimations()")}}.

## Síntaxis

```js
animate(keyframes, options);
```

### Parámetros

- `keyframes`
  - : Puede ser un arreglo de objetos de fotogramas clave **o** un objeto de fotogramas clave
    cuyas propiedades son arreglos de valores a iterar. Ver [Keyframe Formats](/es/docs/Web/API/Web_Animations_API/Keyframe_Formats)
    para más detalles.
- `options`

  - : Puede ser un **entero representando la duración de la animación** (en milisegundos), **o** un
    objeto que contiene una o más propiedades acerca del tiempo descritas en los
    [los parametros de opciones del `KeyframeEffect()`](/es/docs/Web/API/KeyframeEffect) y/o las
    siguientes opciones:

    - `id {{optional_inline}}`
      - : Una propiedad única `animate()` para animar: una [`DOMString`](/es/docs/Web/API/DOMString) la cual hace referencia a la animación.

### Valor de retorno

Regresa una {{domxref("Animation")}}.

## Ejemplos

En la demostración [Down the Rabbit Hole (con la API de Animaciones Web)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010),
utilizamos el método conveniente, `animate()` para inmediatamente crear y reproducir una animación en el elemento `#tunnel`
para hacerlo fluir hacia arriba, indefinidamente. Observa el arreglo de los objetos enviados como fotogramas clave y también el bloque de opciones de sincronización.

```js
document.getElementById("tunnel").animate(
  [
    // fotogramas clave
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // opciones de sincronización
    duration: 1000,
    iterations: Infinity,
  },
);
```

### Implicito a/desde fotogramas clave

En versiones más recientes de navegadores, se te permite declarar el estado de inicio o fin únicamente para una animación (por ejemplo: un simple fotograma clave), y el navegador inferirá la otra parte de la animación si está habilitado. Por ejemplo, considera [esta simple animación](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — el objeto de fotograma clave se ve así:

```js
let rotate360 = [{ transform: "rotate(360deg)" }];
```

Solamente hemos especificado el fin del estado de la animación, y el estado inicial está implícito.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [API de Animaciones Web](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Element.getAnimations()")}}
- {{domxref("Animation")}}
