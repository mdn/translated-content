---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
---

{{APIRef("DOM Events")}}

Remove o event listener anteriormente registrado com {{domxref("EventTarget.addEventListener()")}}.

## Sintaxe

```
target.removeEventListener(type, listener[, useCapture])
```

- `type`
  - : Uma string indicando o tipo de evento a ser removido.
- `listener`
  - : A função {{ domxref("EventListener") }} a ser removida do event target.
- `useCapture` {{ optional_inline() }}

  - : Indica quando o {{ domxref("EventListener") }} a ser removido foi registrado ou não como _capturing listener_. Caso este parâmetro seja omitido, o valor _false_ será assumido por padrão.

    Se um listener foi registrado duas vezes, uma com o parâmetro _capture_ especificado e outra sem, cada um deve ser removido separadamente. A remoção de um _capturing listener_ não afeta a versão _non-capturing_ do mesmo listener, e vice versa.

> **Nota:** `useCapture` era obrigatório em versões mais antigas dos navegadores. Para ampla compatibilidade, sempre informe o parâmetro `useCapture.`

## Notas

Se um {{ domxref("EventListener") }} é removido de um {{ domxref("EventTarget") }} enquanto **_este_** está processando um evento, esse não será disparado pelas _current actions_. Um {{ domxref("EventListener") }} não será invocado para o evento o qual foi registrado depois de ter sido removido, porém pode ser registrado novamente.

Chamar `removeEventListener()` com argumentos que não identifiquem nenhum {{ domxref("EventListener") }} registrado no `EventTarget` não tem qualquer efeito.

## Exemplo

Este é um exemplo de como associar e remover um event listener.

```js
var div = document.getElementById('div');
var listener = function (event) {
  /* faça alguma coisa... */
};
div.addEventListener('click', listener, false);
div.removeEventListener('click', listener, false);
```

## Compatibilidade com navegadores

{{Compat("api.EventTarget.removeEventListener", 3)}}

### Notas para Gecko

- Antes do Firefox 6, o navegador poderia retornar um erro se o parâmetro `useCapture não estive explicitamente cofigurado como` false. Antes do Gecko 9.0, `addEventListener()` retornaria uma exception se o parâmetro do listener fosse `null`; agora o método retorna sem erros, mas sem fazer nada.

### Notas para Opera

- Opera 12.00 fez com que o uso de `useCapture` seja opcional ([source](http://my.opera.com/ODIN/blog/2011/09/29/what-s-new-in-opera-development-snapshots-28-september-2011-edition)).

### Notas para WebKit

- Embora o WebKit tenha adicionado explicitamente "`[optional]`" ao parâmetro `useCapture` para Safari 5.1 e Chrome 13, isto já funcionava antes da mudança.

## Veja também

{{ domxref("EventTarget.addEventListener()") }}.

### Especificação

- [removeEventListener](https://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-EventTarget-removeEventListener)

## Polyfill para oferecer suporte aos navegadores antigos

`addEventListener()` e `removeEventListener()` não estão presentes em navegadores antigos. Isto pode ser contornado se você inserir o código abaixo no início dos seus scripts, permitindo o uso de `addEventListener()` e `removeEventListener()` em implementações as quais não oferecem suporte nativo. Entretanto, este método não funciona para o Internet Explorer 7 ou versões anteriores, uma vez que não era possível extender o Element.prototype até o Internet Explorer 8.

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [ [fListener] ] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}
```
