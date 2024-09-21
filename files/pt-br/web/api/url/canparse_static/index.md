---
title: "URL: método estático canParse()"
short-title: canParse()
slug: Web/API/URL/canParse_static
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{ApiRef("URL API")}}

O método estático **`URL.canParse()`** da interface {{domxref("URL")}} retorna um valor booleano de **`true`** ou **`false`** para indicar se uma URL absoluta ou uma URL relativa combinada com a URL base é analisável e válida.

Esse método é uma alternativa mais fácil e mais rápida em relação a construir uma `URL` dentro de um bloco [try...catch](/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch).

Ela retorna `true` para os mesmos valores que passariam com sucesso no [construtor `URL()`](/pt-BR/docs/Web/API/URL/URL), portanto valores que são válidos e `false` para valores reprovados e que fariam esse construtor lançar uma exceção [TypeError](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypeError), portanto valores que são inválidos.

## Sintaxe

```js-nolint
URL.canParse(url)
URL.canParse(url, base)
```

### Parâmetros

- `url`
  - : Uma string ou outro objeto qualquer com um {{Glossary("stringifier")}} — incluído nisso, como exemplo, um elemento {{htmlelement("a")}} ou {{htmlelement("area")}} — que representa uma URL absoluta ou relativa qualquer.
    Se `url` é uma URL relativa, o pârametro `base` é obrigatório e o que será usado para a URL de base.
    Se `url` é uma URL absoluta, caso o pârametro `base` seja dado ele será ignorado.
- `base` {{optional_inline}}
  - : Uma string que representa a URL base nos casos onde `URL` é uma URL relativa.
    Caso não seja especificada, assume o valor padrão de `undefined`.

> [!NOTE]
> Os argumentos `url` e `base` serão stringificados, cada um a sua vez, a partir de qualquer valor que você passar e isso ocorre da mesma forma como acontece em outras Web APIs que aceitam strings como argumento.
> Particularmente, você pode utilizar um objeto {{domxref("URL")}} existente para qualquer um dos dois argumentos e esse objeto será stringificado (isto é convertido em uma string) para a propriedade {{domxref("URL.href", "href")}} do objeto.

### Valor de retorno

Retorna **`true`** se a URL pode ser analisável e é valida; Do contrário, retorna **`false`**.

## Exemplos

Este exemplo funcional demonstra como utilizar o método estático `URL.canParse()` para alguns valores diferentes de URLs absolutas e relativas.

A primeira parte do exemplo define um elemento HMTL `<pre>` para criar um log de registro, junto com um método `log()` para fazer esses registros.

```html
<pre id="log"></pre>
```

```js
const logElement = document.getElementById("log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

Depois, é preciso checar se o método `URL.canParse()` é suportado no navegador utilizado através da condição `"canParse"` na URL.
Se o método for suportado pelo navegador, nós podemos registrar no log os resultados ao checar uma URL absoluta, uma URL relativa sem URL base e uma URL relativa com uma URL base válida.
Também é possível registrar no log caso o método não seja suportado naquele navegador.

```js
if ("canParse" in URL) {
  log("Testa URL absoluta válida");
  let url = "https://developer.mozilla.org/";
  let result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTesta URL relativa sem URL base");
  url = "/en-US/docs";
  result = URL.canParse(url);
  log(` URL.canParse("${url}"): ${result}`);

  log("\nTesta URL relativa com URL base válida");
  let baseUrl = "https://developer.mozilla.org/";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
} else {
  log("URL.canParse() não suportado nessa versão ou nesse navegador");
}
```

Por último, o código abaixo mostra que o `baseURL` não se restring somente a strings.
Aqui foi passado um objeto `URL`.

```js
if ("canParse" in URL) {
  log("\nTesta URL relativa com a URL base fornecida como um objeto URL");
  let baseUrl = new URL("https://developer.mozilla.org/");
  let url = "/en-US/docs";
  result = URL.canParse(url, baseUrl);
  log(` URL.canParse("${url}","${baseUrl}"): ${result}`);
}
```

Os resultados de cada uma das checagens estão mostrados abaixo.

{{EmbedLiveSample('Examples', '100%', '200')}}

## Especificações

{{Specifications}}

## Compatibilidade com browsers

{{Compat}}

## Veja também

- {{domxref("URL.URL", "URL()")}}
- [Um polyfill do `URL.canParse()`](https://github.com/zloirock/core-js#url-and-urlsearchparams) está disponível em [`core-js`](https://github.com/zloirock/core-js)
