---
title: Image()
slug: Web/API/HTMLImageElement/Image
---

{{ APIRef("HTML DOM") }}

### Constructor del elemento de Imagen

Acepta dos parametros opcionales: Image(\[unsigned long _**width**_, unsigned long _**height**_])

Devuelve un [HTMLImageElement](/es/docs/Web/API/HTMLImageElement) instanciado justo como `document.createElement('img')` would.

Ejemplo:

```js
var myImage = new Image(100, 200);
myImage.src = "picture.jpg";
console.log(myImage);
```

Resultado:

```html
<img width="100" height="200" src="picture.jpg" />
```

| Specification                                                                                                                          | Status         | Comment                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [HTML5 La definición del constructor de imagen, en esta especificación.](http://www.w3.org/TR/html5/embedded-content-0.html#dom-image) | Recommendación | Un constructor (con 2 parametros opcionales) han sido agregados. Las siguientes propiedades ahora son obsoletas: `name`, `border`, `align`, `hspace`, `vspace`, and `longdesc`. The following properties are now `unsigned long`, instead of `long`: `height`, and `width`. Las siguientes propiedadeas ahora han sido agrgados: `crossorigin`, |
