---
title: <marquee>
slug: Web/HTML/Element/marquee
---

{{HTMLSidebar}}{{Deprecated_Header}}

## Resumen

La etiqueta html `<marquee>` se utiliza para insertar un area de texto en movimiento. También se la conoce como marquesina.

## Atributos

- `behavior`
  - : Establece cómo se desplazará el texto en la etiqueta marquee. Los valores posibles son scroll, slide, y alternate. Si no hay un valor especificado, el valor por defecto establecido es scroll.
    Scroll: Hara que lo que este en la marquesina se mueva de derecha a izquierda, de manera ininterrumpida.
    Slide: Una vez que completa el recorrido de derecha a izquierda(por defecto) se detiene.
    Alternate: Se movera de una esquina a la otra, dando el efecto de rebote.
- `bgcolor`
  - : Establece el color de fondo, puede utilizarse el nombre, o su valor hexadecimal.
- `direction`
  - : Establece la dirección en la que el texto contenido se desplazará. Los valores posibles son left (para moverse hacia la izquierda), right (para moverse a la derecha), up (hacia arriba) y down (hacia abajo). Si no se especifica un valor, por defecto será left.
- `height`
  - : Establece la altura de la etiqueta en pixeles, o en un valor porcentual.
- `hspace`
  - : Establece el margen horizontal.
- `loop`
  - : Establece el número de veces que la marquesina realizará el desplazamiento. Sino se especifica esta propiedad, por defecto es -1, lo que quiere decir que la marquesina se desplazará continuamente.
- `scrollamount`
  - : Establece el valor de movimiento para cada intervalo en pixeles. Por defecto su valor es 6.
- `scrolldelay`
  - : Establece el intervalo entre cada desplazamiento, en milisegundos. El valor por defecto es 85. Nota: Cualquier valor inferior a 60 será ignorado, (puesto que el valor minimo es 60) y se establecerá 60 en su lugar. Salvo que se especifique `truespeed`.
- `truespeed`
  - : Por defecto, si los valores de `scrolldelay son inferiores a 60 serán ignorados. Pero si truespeed está presente, esos valores inferiores a 60 serán aceptados.`
- `vspace`
  - : Establece el margen vertical en pixeles o en un valor porcentual.
- `width`
  - : Establece el ancho de la etiqueta en pixeles o un valor porcentual.

## Controladores de eventos

- `onbounce`
  - : Este evento se lanza cuando la marquesina llegó al final del desplazamiento. Ésto solo se activa cuando el atributo `behavior` está establecido en `alternate`.
- `onfinish`
  - : Este evento se lanza cuando la marquesina repitió el desplazamiento la cantidad de veces establecidas en el atributo `loop`. El evento se lanza solo si el atributo `loop` tiene un valor mayor a 0.
- `onstart`
  - : Este evento se lanza cuando la marquesina comienza su desplazamiento.

## Métodos

- start
  - : Comienza el desplazamiento de la marquesina.
- stop
  - : Para el desplazamiento de la marquesina

## Ejemplos

```html
<marquee>Este texto se mueve de derecha a izquierda</marquee>

<marquee direction="up">Este texto se mueve de abajo hacia arriba</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">
    Este texto rebotará dentro de la marquesina.
  </marquee>
</marquee>
```

{{EmbedLiveSample("Examples", 600, 450)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
