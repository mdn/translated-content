---
title: click
slug: Web/API/Element/click_event
---

O evento `click` event é disparado quando o botão de um dispositivo apontador (normalmente o botão de um mouse) é pressionado e solto logo em seguida em um mesmo elemento.

## Informações gerais

- Especificação
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click)
- Interface
  - : {{domxref("MouseEvent")}}
- Bubbles
  - : Sim
- Cancelável
  - : Sim
- Target
  - : Element
- Ação padrão
  - : Variável

## Propriedades

| Property                           | Type                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/pt-BR/docs/Web/API/EventTarget) | O alvo do evento (o mais alto na arvore de DOM).                                                                                                                                                                                                                                                                                                                                                                        |
| `type` {{readonlyInline}}          | [`DOMString`](/pt-BR/docs/Web/API/DOMString)     | Tipo do evento.                                                                                                                                                                                                                                                                                                                                                                                                         |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/pt-BR/docs/Web/API/Boolean)         | Se o evento "bubbles" naturalmente ou não.                                                                                                                                                                                                                                                                                                                                                                              |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/pt-BR/docs/Web/API/Boolean)         | Se o evento é cancelável ou não                                                                                                                                                                                                                                                                                                                                                                                         |
| `view` {{readonlyInline}}          | [`WindowProxy`](/pt-BR/docs/Web/API/WindowProxy) | [`document.defaultView`](/pt-BR/docs/Web/API/Document/defaultView) (`window` do documento)                                                                                                                                                                                                                                                                                                                              |
| `detail` {{readonlyInline}}        | `long` (`float`)                                 | Um contador de cliques consecutivos que ocorrem em um curto espaço de tempo, incrementado em 1.                                                                                                                                                                                                                                                                                                                         |
| `currentTarget` {{readonlyInline}} | EventTarget                                      | O node que contem o eventListener.                                                                                                                                                                                                                                                                                                                                                                                      |
| `relatedTarget` {{readonlyInline}} | EventTarget                                      | Para eventos `mouseover`, `mouseout`, `mouseenter` e `mouseleave`: o alvo do evento complementar (o `mouseleave` no caso de um evento `mouseenter` ). `null` , se falso.                                                                                                                                                                                                                                                |
| `screenX` {{readonlyInline}}       | long                                             | A coordenada X do ponteiro do mouse na tela.                                                                                                                                                                                                                                                                                                                                                                            |
| `screenY` {{readonlyInline}}       | long                                             | A coordenada Y do ponteiro do mouse na tela.                                                                                                                                                                                                                                                                                                                                                                            |
| `clientX` {{readonlyInline}}       | long                                             | A coordenada X do ponteiro do mouse no DOM atual.                                                                                                                                                                                                                                                                                                                                                                       |
| `clientY` {{readonlyInline}}       | long                                             | A coordenada Y do ponteiro do mouse no DOM atual.                                                                                                                                                                                                                                                                                                                                                                       |
| `button` {{readonlyInline}}        | unsigned short                                   | The button number that was pressed when the mouse event was fired: Left button=0, middle button=1 (if present), right button=2. For mice configured for left handed use in which the button actions are reversed the values are instead read from right to left.                                                                                                                                                        |
| `buttons` {{readonlyInline}}       | unsigned short                                   | The buttons being pressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are pressed, returns the logical sum of the values. E.g., if Left button and Right button are pressed, returns 3 (=1 \| 2). [More info](/pt-BR/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                            | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                          |
| `ctrlKey` {{readonlyInline}}       | boolean                                          | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                         |
| `shiftKey` {{readonlyInline}}      | boolean                                          | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                           |
| `altKey` {{readonlyInline}}        | boolean                                          | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                             |
| `metaKey` {{readonlyInline}}       | boolean                                          | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                            |

## Exemplo

```js
<div id="test"></div>

<script>
  document.getElementById("test").addEventListener("click", function( event ) {
    // mostra o contador de cliques dentro da div clicada
    event.target.innerHTML = "Total de cliques: " + event.detail;
  }, false);
</script>
```

## Compatibilidade com navegadores

### Internet Explorer

O Internet Explorer 8 e 9 apresentam um bug onde o elemento com a propriedade {{cssxref("background-color")}} é definida como [`transparent`](/pt-BR/docs/Web/CSS/color_value#transparent_keyword) that are overlaid on top of other element(s) won't receive `click` events. Todos os eventos `click` serão disparados no elemento underlying instead. Veja uma demonstração [neste exemplo](http://jsfiddle.net/YUKma/show/).

Soluções de contorno para este bug:

- Somente para o IE9:

  - Defina o `{{cssxref("background-color")}} como: rgba(0,0,0,0)`
  - Defina a `{{cssxref("opacity")}} como: 0` e defina explicitamente {{cssxref("background-color")}} com outro valor diferente de [`transparent`](/pt-BR/docs/Web/CSS/color_value#transparent_keyword)

- Para IE8 e IE9: Defina a propriedade `filter como: alpha(opacity=0);` e o {{cssxref("background-color")}} com outro valor diferente de [`transparent`](/pt-BR/docs/Web/CSS/color_value#transparent_keyword)

### Safari Mobile

Safari Mobile 7.0+ (and likely earlier versions too) [suffers from a bug](https://bugs.webkit.org/show_bug.cgi?id=153887) where `click` events aren't fired on elements that aren't typically interactive (e.g. {{HTMLElement("div")}}) and which also don't have event listeners directly attached to the elements themselves (i.e. [event delegation](http://davidwalsh.name/event-delegate) is being used). See [this live example](http://jsfiddle.net/cvrhulu/k9t0sdnf/show/) for a demonstration. See also [Safari's docs on making elements clickable](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6) and the [definition of "clickable element"](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7).

Known workarounds for this bug:

- Set {{cssxref("cursor")}}`: pointer;` on the element or any of its ancestors.
- Add a dummy `onclick="void(0)"` attribute to the element or any of its ancestors up to but not including {{HTMLElement("body")}}.
- Use a typically interactive element (e.g. {{HTMLElement("a")}}) instead of one that isn't typically interactive (e.g. {{HTMLElement("div")}}).
- Stop using `click` [event delegation](http://davidwalsh.name/event-delegate).

Safari Mobile considers the following elements to be typically interactive (and thus they aren't affected by this bug):

- {{HTMLElement("a")}} (but it must have an `href`)
- {{HTMLElement("area")}} (but it must have an `href`)
- {{HTMLElement("button")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}} (but it must be associated with a form control)
- {{HTMLElement("textarea")}}
- _This list is incomplete; you can help MDN by doing further testing/research and expanding it._

{{Compat("api.Element.click_event")}}

## See also

- {{event("mousedown")}}
- {{event("mouseup")}}
- {{event("mousemove")}}
- {{event("click")}}
- {{event("dblclick")}}
- {{event("mouseover")}}
- {{event("mouseout")}}
- {{event("mouseenter")}}
- {{event("mouseleave")}}
- {{event("contextmenu")}}
