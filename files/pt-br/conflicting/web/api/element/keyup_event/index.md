---
title: GlobalEventHandlers.onkeyup
slug: conflicting/Web/API/Element/keyup_event
---

{{ApiRef("HTML DOM")}}

A propriedade **onkeyup** retorna o código de manipulador de eventos onKeyUp no elemento atual.

## Sintaxe

```
element.onkeyup = código do manipulador do eventos
```

## Exemplo

```js
 <input type="text" onKeyUp="teclaPressionada(event)">
 <script>
    function teclaPressionada(evt) {
       console.log(evt.keyCode)
    }
 </script>
```

## Notas

O evento keyup é iniciado quando o usuário libera a tecla é pressionada.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat("api.GlobalEventHandlers.onkeyup")}}
