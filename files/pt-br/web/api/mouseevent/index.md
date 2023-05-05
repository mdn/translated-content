---
title: MouseEvent
slug: Web/API/MouseEvent
---

A interface **`MouseEvent`** representa eventos que ocorrem devido à interação do usuário com um dispositivo apontador (como um mouse). Eventos comuns usando esta interface incluem [`click`](/pt-BR/docs/Web/API/Element/click_event), [`dblclick`](/pt-BR/docs/Web/API/Element/dblclick_event), [`mouseup`](/pt-BR/docs/Web/API/Element/mouseup_event), [`mousedown`](/pt-BR/docs/Web/API/Element/mousedown_event).

**`MouseEvent`** deriva de [`UIEvent`](/pt-BR/docs/Web/API/UIEvent), que por sua vez deriva de [`Event`](/pt-BR/docs/Web/API/Event). Embora o método [`MouseEvent.initMouseEvent()`](/pt-BR/docs/Web/API/MouseEvent/initMouseEvent) seja mantido para compatibilidade com versões anteriores, a criação de um objeto **`MouseEvent`** deve ser feita usando o construtor `MouseEvent()`.

Vários eventos mais específicos derivam de **`MouseEvent`** como: [`WheelEvent`](/pt-BR/docs/Web/API/WheelEvent) e [`DragEvent`](/pt-BR/docs/Web/API/DragEvent).

{{InheritanceDiagram}}

## Construtor

- **[`MouseEvent()`](/pt-BR/docs/Web/API/MouseEvent/MouseEvent)**
  - : Cria um objeto **`MouseEvent`**.

## Propriedades

_Essa interface também herda propriedades de seus pais, [`UIEvent`](/pt-BR/docs/Web/API/UIEvent) e [`Event`](/pt-BR/docs/Web/API/Event)._

- **[`MouseEvent.altKey`](/pt-BR/docs/Web/API/MouseEvent/altKey)** Read only

  - : Retorna `true`se a tecla

    <kbd>alt</kbd>

    estava pressionada quando o evento do mouse foi disparado.

- [`MouseEvent.button`](/pt-BR/docs/Web/API/MouseEvent/altKey) Read only
  - : O número do botão que foi pressionado (se aplicável) quando o evento do mouse foi disparado.
- [`MouseEvent.buttons`](/pt-BR/docs/Web/API/MouseEvent/button)Read only
  - : Os botões sendo pressionados (se houver) quando o evento do mouse foi disparado.
- [`MouseEvent.clientX`](/pt-BR/docs/Web/API/MouseEvent/clientX) _Read only_
  - : A coordenada X do ponteiro do mouse em coordenadas locais (conteúdo **DOM**).
- [`MouseEvent.clientY`](/pt-BR/docs/Web/API/MouseEvent/clientY)Read only
  - : A coordenada Y do ponteiro do mouse em coordenadas locais (conteúdo **DOM**).
- [`MouseEvent.ctrlKey`](/pt-BR/docs/Web/API/MouseEvent/ctrlKey) Read only

  - : Retorna `true` se a tecla

    <kbd>control</kbd>

    estava pressionada quando o evento do mouse foi disparado.

- [`MouseEvent.metaKey`](/pt-BR/docs/Web/API/MouseEvent/metaKey) Read only

  - : Retorna `true` se a tecla

    <kbd>meta</kbd>

    estava pressionada quando o evento do mouse foi disparado.

- [MouseEvent.movementX](/pt-BR/docs/Web/API/MouseEvent/movementX)Read only
  - : A coordenada X do ponteiro do mouse em relação à posição do último evento [`mousemove`](/pt-BR/docs/Web/API/Element/mousemove_event) .
- [`MouseEvent.movementY`](/pt-BR/docs/Web/API/MouseEvent/movementY) Read only
  - : A coordenada Y do ponteiro do mouse em relação à posição do último evento [mousemove](/pt-BR/docs/Web/API/Element/mousemove_event).
- [`MouseEvent.offsetX`](/pt-BR/docs/Web/API/MouseEvent/offsetX) Read only
  - : A coordenada X do ponteiro do mouse em relação à posição da borda de preenchimento do nó de destino.
- [`MouseEvent.offsetY`](/pt-BR/docs/Web/API/MouseEvent/offsetY) Read only
  - : A coordenada Y do ponteiro do mouse em relação à posição da borda de preenchimento do nó de destino.
- [`MouseEvent.pageX`](/pt-BR/docs/Web/API/MouseEvent/pageX) Read only
  - : A coordenada X do ponteiro do mouse em relação a todo o documento.
- [`MouseEvent.pageY`](/pt-BR/docs/Web/API/MouseEvent/pageY) Read only
  - : A coordenada Y do ponteiro do mouse em relação a todo o documento.
- [`MouseEvent.region`](/pt-BR/docs/Web/API/MouseEvent/region) Read only
  - : Retorna o id da região afetada pelo evento. Se nenhuma região atingida for afetada, **`null`** será retornado.
- [`MouseEvent.relatedTarget`](/pt-BR/docs/Web/API/MouseEvent/relatedTarget)Read only
  - : O destino secundário do evento, se houver.
- [MouseEvent.screenX](/pt-BR/docs/Web/API/MouseEvent/screenX)Read only
  - : A coordenada X do ponteiro do mouse em coordenadas globais (tela).
- [`MouseEvent.screenY`](/pt-BR/docs/Web/API/MouseEvent/screenY) Read only
  - : A coordenada Y do ponteiro do mouse em coordenadas globais (tela).
- [MouseEvent.shiftKey](/pt-BR/docs/Web/API/MouseEvent/shiftKey) Read only

  - : Retorna `true` se a tecla

    <kbd>shift</kbd>

    estava pressionada quando o evento do mouse foi disparado.

- [MouseEvent.which](/pt-BR/docs/Web/API/MouseEvent/which) Read only
  - : O botão sendo pressionado quando o evento do mouse foi disparado.
- `MouseEvent.mozPressure` Read only
  - : A quantidade de pressão aplicada a um dispositivo de toque ou tablet ao gerar o evento; este valor varia entre `0.0` (pressão mínima) e `1.0` (pressão máxima).
- [`MouseEvent.mozInputSource`](/pt-BR/docs/Web/API/MouseEvent/mozInputSource) Read only

  - : O tipo de dispositivo que gerou o evento (uma das constantes `MOZ_SOURCE_*` listadas abaixo). Isso permite, por exemplo, determinar se um evento de mouse foi gerado por um mouse real ou por um evento de toque (o que pode afetar o grau de precisão com que você interpreta as coordenadas associadas ao evento).

- [`MouseEvent.webkitForce`](/pt-BR/docs/Web/API/MouseEvent/webkitForce) Read only
  - : A quantidade de pressão aplicada ao clicar
- [MouseEvent.x](/pt-BR/docs/Web/API/MouseEvent/clientX)Read only
  - : Alias para [`MouseEvent.clientX`](/pt-BR/docs/Web/API/MouseEvent/clientX).
- [`MouseEvent.y`](/pt-BR/docs/Web/API/MouseEvent/clientY) Read only
  - : Alias para [MouseEvent.clientY](/pt-BR/docs/Web/API/MouseEvent/clientY)

## Constantes

- [`MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN`](/pt-BR/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_MOUSE_DOWN) Read only
  - : Força mínima necessária para um clique normal.
- [`MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN`](/pt-BR/docs/Web/API/MouseEvent/WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN) Read only
  - : Força mínima necessária para um clique de força

## Método

_Essa interface também herda métodos de seus pais, [`UIEvent`](/pt-BR/docs/Web/API/UIEvent) e [`Event`](/pt-BR/docs/Web/API/Event)._

- [`MouseEvent.getModifierState()`](/pt-BR/docs/Web/API/MouseEvent/getModifierState)
  - : Retorna o estado tual da tecla modificadora especificada. Consulte [`KeyboardEvent.getModifierState`](/pt-BR/docs/Web/API/KeyboardEvent/getModifierState)[`()`](/pt-BR/docs/Web/API/KeyboardEvent/getModifierState) para obter detalhes.
- [`MouseEvent.initMouseEvent()`](/pt-BR/docs/Web/API/MouseEvent/initMouseEvent)
  - : Inicializa o valor de um **`MouseEvent`** criado. Se o evento já foi despachado, este método não faz nada.

## Exemplo

Este exemplo demonstra a simulação de um clique (que está gerando programaticamente um evento de clique) em uma caixa de seleção usando métodos **DOM**.

```js
function simulateClick() {
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var cb = document.getElementById("checkbox"); //element to click on
  var canceled = !cb.dispatchEvent(evt);
  if(canceled) {
    // A handler called preventDefault
    alert("canceled");
  } else {
    // None of the handlers called preventDefault
    alert("not canceled");
  }
}
document.getElementById("button").addEventListener('click', simulateClick);
```

```html
<p><label><input type="checkbox" id="checkbox"> Checked</label>
<p><button id="button">Click me</button>
```

Clique no botão para ver como funciona a amostra:

{{EmbedLiveSample('Example')}}

## Especificações

| Specification                                                                                                    | Status                           | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSSOM View','#extensions-to-the-mouseevent-interface', 'MouseEvent')}}     | Rascunho de trabalho             | Redefine **`MouseEvent`** de longo para duplo. Isto significa que um **`PointerEvent`** cuja **`pointerType`** é rato será uma de casal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| {{SpecName("HTML WHATWG", "#dom-mouseevent-region", "MouseEvent.region")}}             | {{Spec2('HTML WHATWG')}} | Do [Document Object Model (DOM) Nível 3 Events Specification](https://www.w3.org/TR/2014/WD-DOM-Level-3-Events-20140925/) , adicionado propriedades `movementX` e `movementY`.                                                                                                                                                                                       |
| {{SpecName('Pointer Lock','#extensions-to-the-mouseevent-interface','MouseEvent')}} | {{Spec2('Pointer Lock')}} |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| {{SpecName('CSSOM View', '#extensions-to-the-mouseevent-interface', 'MouseEvent')}} | {{Spec2('CSSOM View')}} | A partir [do documento de modelo de objeto (DOM) Nível 3 Especificação de eventos](https://www.w3.org/TR/2014/WD-DOM-Level-3-Events-20140925/) , adicionados **`offsetX`** e **`offsetY`**, **`pageX`** e **`pageY`**, **`x`**, e **`y`** propriedades. Propriedades redefinidas de tela, página, cliente e coordenadas (x e y) a partir **`double`** de **`long`**. |
| {{SpecName('DOM3 Events','#events-mouseevents','MouseEvent')}}                             | {{Spec2('DOM3 Events')}} | Em Document Object Model (DOM) Nível 2, especificação de eventos, adicionado ao construtor **`MouseEvent ()`**, o método **`getModifierState()`** e a propriedade de **`buttons`**.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| {{SpecName('DOM2 Events','#Events-MouseEvent','MouseEvent')}}                                 | {{Spec2('DOM2 Events')}} | Definição inicial.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

## Compatibilidade do navegador

{{Compat("api.MouseEvent")}}

## Veja também

Seu pai direto, [`UIEvent`](/pt-BR/docs/Web/API/UIEvent).
[`PointerEvent`](/pt-BR/docs/Web/API/PointerEvent): Para eventos de ponteiro avançados, incluindo multitoque
