---
title: MouseEvent.clientY
slug: Web/API/MouseEvent/clientY
---

{{APIRef("DOM Events")}}

A propriedade **`clientY`** da interface {{domxref("MouseEvent")}} fornece a coordenada vertical do cliente dentro da aplicacão em que o evento ocorreu (ao contrário da coordenada que pertence a página).

Por exemplo, clicando no topo da área do cliente sempre resultará num evento de mouse com um valor `0` de `clientY`, independente se a página está "escrollada" verticalmente.

## Sintaxe

```
var y = instanciaDeEventoDoMouse.clientY
```

### Valor de retorno

O valor retornado por essa propriedade é um valor flutuante double como foi redefinida pelo "CSSOM View Module". Originalmente esta propriedade era definida como um inteiro `long`. Veja a seção de compatibilidade de browsers para mais detalhes.

## Exemplo

Este exemplo mostra as coordenadas do mouse quando você ativar o evento {{Event("mousemove")}}.

### HTML

```html
<p>Mova seu mouse para ver sua posicão.</p>
<p id="screen-log"></p>
```

### JavaScript

```js
let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
```

### Resultado

{{EmbedLiveSample("Example")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{ domxref("MouseEvent") }}
- {{domxref("MouseEvent.clientX","clientX")}}
- {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}}
