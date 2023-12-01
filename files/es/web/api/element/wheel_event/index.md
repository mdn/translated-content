---
title: "Element: wheel event"
slug: Web/API/Element/wheel_event
---

{{APIRef}}

El evento `wheel` se activa cuando el usuario gira un botón de rueda en un dispositivo señalador (normalmente un ratón).

Este evento reemplaza el evento obsoleto no estándar {{domxref("Element/mousewheel_event", "mousewheel")}}.

## Propiedades

| Burbujas                             | Sí                                                            |
| ------------------------------------ | ------------------------------------------------------------- |
| Cancelable                           | Sí                                                            |
| Interfaz                             | [`WheelEvent`](/es/docs/Web/API/WheelEvent)                   |
| Propiedades del manejador de eventos | [`onwheel`](/es/docs/conflicting/Web/API/Element/wheel_event) |

> **Nota:** No confundir el evento `wheel` con el evento {{domxref("Element/scroll_event", "scroll")}}. La acción predeterminada de un evento `wheel` es específica de la implementación y no necesariamente envía un evento `scroll`. Incluso cuando lo hace, los valores `delta*` en el evento `wheel` no reflejan necesariamente la dirección de desplazamiento del contenido. Por lo tanto, no confíe en las propiedades `delta*` del evento `wheel` para obtener la dirección de desplazamiento. En su lugar, detecte los cambios de valor de {{domxref("Element.scrollLeft", "scrollLeft")}} y {{domxref("Element.scrollTop", "scrollTop")}} del objetivo en el evento `scroll`.

## Ejemplos

### Escalar un elemento a través de la rueda

Este ejemplo muestra cómo escalar un elemento usando la rueda del mouse (u otro dispositivo señalador).

```html
<div>Escálame con la rueda de tu ratón.</div>
```

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 105px;
  height: 105px;
  background: #cdf;
  padding: 5px;
}
```

```js
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restricción de escala
  scale = Math.min(Math.max(0.125, scale), 4);

  // Aplicar transformación de escala
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("div");
el.onwheel = zoom;
```

{{EmbedLiveSample("Scaling_an_element_via_the_wheel", 700, 300)}}

### Equivalente en addEventListener

El manejador de eventos también se puede configurar mediante el método {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js
el.addEventListener("wheel", zoom);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("WheelEvent")}}
- [Document: `wheel` event](/es/docs/Web/API/Document/wheel_event)
