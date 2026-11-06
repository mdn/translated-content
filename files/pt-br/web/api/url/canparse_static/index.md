---
title: "URL: método estático canParse()"
short-title: canParse()
slug: Web/API/URL/canParse_static
l10n:
  sourceCommit: 5c569deab82d7efb49718eb64b2bda5d5b9c8954
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

O método estático **`URL.canParse()`** da interface {{domxref("URL")}} retorna um booleano que indica se uma URL absoluta, ou uma URL relativa combinada com uma URL base, pode ser analisada e é válida.

É uma alternativa rápida e simples a construir um `URL` dentro de um bloco [try...catch](/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch).
Ele retorna `true` para os mesmos valores com os quais o [construtor `URL()`](/pt-BR/docs/Web/API/URL/URL) teria sucesso, e `false` para os valores que fariam o construtor lançar uma exceção.

## Sintaxe

```js-nolint
URL.canParse(url)
URL.canParse(url, base)
```

### Parâmetros

- `url`
  - : Uma string, ou qualquer outro objeto com um {{Glossary("stringifier")}}, como um elemento {{htmlelement("a")}} ou {{htmlelement("area")}}, que represente uma URL absoluta ou relativa.
    Se `url` for relativa, `base` é obrigatório e será usado como URL base.
    Se `url` for absoluta, a `base` informada é ignorada.
- `base` {{optional_inline}}
  - : Uma string com a URL base a usar quando `url` é relativa.
    Se omitida, o valor padrão é `undefined`.

> [!NOTE]
> Os argumentos `url` e `base` são convertidos em string a partir do valor que você passar, como nas outras Web APIs que aceitam uma string.
> Em particular, dá para usar um objeto {{domxref("URL")}} já existente em qualquer um dos argumentos. Ele será convertido na propriedade {{domxref("URL.href", "href")}} desse objeto.

### Valor de retorno

`true` se a URL puder ser analisada e for válida; `false` caso contrário.

## Exemplos

Este exemplo ao vivo mostra o método estático `URL.canParse()` com alguns valores de URL absoluta e relativa.

A primeira parte define um elemento HTML `<pre>` para exibir as mensagens e um método `log()`.

```html
<pre id="log"></pre>
```

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Em seguida, a condição `"canParse" in URL` verifica se o método tem suporte.
Se tiver, o exemplo registra uma URL absoluta, uma URL relativa sem URL base e uma URL relativa com uma URL base válida.
Também registra o caso em que `URL.canParse()` não tem suporte.

```js
if ("canParse" in URL) {
  log("Testar URL absoluta válida");
  let url = "https://developer.mozilla.org/";
  let result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTestar URL relativa sem URL base");
  url = "/pt-BR/docs";
  result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTestar URL relativa com URL base válida");
  let baseUrl = "https://developer.mozilla.org/";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
} else {
  log("URL.canParse() não tem suporte");
}
```

Por fim, o código abaixo mostra que `baseUrl` não precisa ser uma string.
Aqui o valor passado é um objeto `URL`.

```js
if ("canParse" in URL) {
  log("\nTestar URL relativa com URL base passada como objeto URL");
  let baseUrl = new URL("https://developer.mozilla.org/");
  let url = "/pt-BR/docs";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
}
```

O resultado de cada verificação aparece abaixo.

{{EmbedLiveSample("Exemplos", "100%", "200")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("URL.URL", "URL()")}}
- Um [polyfill de `URL.canParse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) está disponível em [`core-js`](https://github.com/zloirock/core-js)
