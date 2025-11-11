---
title: URL.origin
slug: Web/API/URL/origin
---

{{APIRef("URL API")}}

A propriedade somente de leitura **`origin`** da interface {{domxref("URL")}} retorna uma {{domxref("USVString")}} contendo a serialização Unicode da origem da URL representada.

A estrutura exata tem uma variação dependendo do tipo de URL:

- Para URLs `http` ou `https`, o esquema é seguido por `'://'`, seguido pelo domímio, seguido por `':'`, seguido pela porta (a porta padrão, `80` e `443` respectivamente, se for especificada explicitamente ).
- Para as URls `file:`, o valor é dependente do browser.
- Para as Urls `blob:`, a origem da URl seguido pelo `blob:` será utilizada, e.g `"blob:https://mozilla.org"` o que sera retornado é `"https://mozilla.org".`

{{AvailableInWorkers}}

## Valor

Uma {{domxref("USVString")}}.

## Exemplo

```js
const url = new URL("blob:https://mozilla.org:443/");
console.log(url.origin); // Logs 'https://mozilla.org'
```

## Especificações

{{Specifications}}

## Compatibilidade de browser

{{Compat}}

## Veja também

- A interface {{domxref("URL")}} a quem pertence.
