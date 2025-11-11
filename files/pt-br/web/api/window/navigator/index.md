---
title: Window.navigator
slug: Web/API/Window/navigator
---

{{APIRef}}

A propriedade somente leitura `Window.navigator` retorna uma referência para o objeto {{domxref("Navigator")}}, que pode ser consultada para obter informações sobre a aplicação executando o script.

## Sintaxe

```
navigatorObject = window.navigator
```

## Exemplos

### Exemplo #1: Detecta o navegador e retorna uma string

```js
var sBrowser,
  sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome";
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
} else if (sUsrAg.indexOf("Opera") > -1) {
  sBrowser = "Opera";
} else if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("MSIE") > -1) {
  sBrowser = "Microsoft Internet Explorer";
}

alert("Você está utilizando: " + sBrowser);
```

### Exemplo #2: Detecta o navegador e retorna um índice

```js
function getBrowserId() {
  var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
    sUsrAg = navigator.userAgent,
    nIdx = aKeys.length - 1;

  for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

  return nIdx;
}

console.log(getBrowserId());
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
