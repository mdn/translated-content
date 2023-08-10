---
title: URLSearchParams
slug: Web/API/URLSearchParams
---

{{ApiRef("URL API")}}

A interface **`URLSearchParams`** define métodos utilitários para trabalhar com os parâmetros de uma URL.

Um objeto que implementa `URLSearchParams` pode ser usado diretamente em uma estrutura {{jsxref("Statements/for...of", "for...of")}} para iterar sobre pares chave/valor na mesma ordem em que elas aparecem nos parâmetros, por exemplo as linhas a seguir são equivalentes:

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

{{AvailableInWorkers}}

## Construtor

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}

  - : Retorna uma instância do objeto `URLSearchParams`.

## Métodos

- {{domxref("URLSearchParams.append()")}}
  - : Adiciona o par chave/valor especificado como um novo parâmetro de busca.
- {{domxref("URLSearchParams.delete()")}}
  - : Exclui o parâmetro de pesquisa fornecido e seu valor associado da lista de todos os parâmetros de pesquisa.
- {{domxref("URLSearchParams.entries()")}}
  - : Retorna um {{jsxref("Iteration_protocols","iterator")}} permitindo a iteração através de todos os pares de chave/valor contidos neste objeto na mesma ordem em que aparecem na string de consulta.
- {{domxref("URLSearchParams.forEach()")}}
  - : Permite a iteração através de todos os valores contidos neste objeto por meio de uma função de retorno de chamada.
- {{domxref("URLSearchParams.get()")}}
  - : Retorna o primeiro valor associado ao parâmetro de pesquisa fornecido.
- {{domxref("URLSearchParams.getAll()")}}
  - : Retorna todos os valores associados a um determinado parâmetro de pesquisa.
- {{domxref("URLSearchParams.has()")}}
  - : Retorna um valor booleano indicando se tal parâmetro existe.
- {{domxref("URLSearchParams.keys()")}}
  - : Retorna um {{jsxref("Iteration_protocols", "iterator")}} permitindo a iteração através de todas as chaves dos pares chave/valor contidos neste objeto.
- {{domxref("URLSearchParams.set()")}}
  - : Define o valor associado a um determinado parâmetro de pesquisa para o valor fornecido. Se houver vários valores, os demais serão excluídos.
- {{domxref("URLSearchParams.sort()")}}
  - : Ordena todos os pares de chave/valor, se houver, por suas chaves.
- {{domxref("URLSearchParams.toString()")}}
  - : Retorna uma string contendo uma string de consulta adequada para uso em uma URL.
- {{domxref("URLSearchParams.values()")}}
  - : Retorna um {{jsxref("Iteration_protocols", "iterator")}} permitindo a iteração através de todos os valores dos pares chave/valor contidos neste objeto.

## Exemplos

```js
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

// Iterando os parâmetros de pesquisa
for (const p of searchParams) {
  console.log(p);
}

console.log(searchParams.has("topic")); // true
console.log(searchParams.get("topic") === "api"); // true
console.log(searchParams.getAll("topic")); // ["api"]
console.log(searchParams.get("foo") === null); // true
console.log(searchParams.append("topic", "webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(searchParams.set("topic", "More webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
console.log(searchParams.delete("topic"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams"
```

```js
// Os parâmetros de pesquisa também podem ser objetos
const paramsObj = { foo: "bar", baz: "bar" };
const searchParams = new URLSearchParams(paramsObj);

console.log(searchParams.toString()); // "foo=bar&baz=bar"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // "bar"
```

### Parâmetros de pesquisa duplicados

```js
const paramStr = "foo=bar&foo=baz";
const searchParams = new URLSearchParams(paramStr);

console.log(searchParams.toString()); // "foo=bar&foo=baz"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // bar, somente o primeiro valor
console.log(searchParams.getAll("foo")); // ["bar", "baz"]
```

### Sem análise de URL

O construtor `URLSearchParams` _não_ analisa URLs completas. No entanto, ele retirará um `?` inicial inicial de uma string, se presente.

```js
const paramsString1 = "http://example.com/search?query=%40";
const searchParams1 = new URLSearchParams(paramsString1);

console.log(searchParams1.has("query")); // false
console.log(searchParams1.has("http://example.com/search?query")); // true

console.log(searchParams1.get("query")); // null
console.log(searchParams1.get("http://example.com/search?query")); // "@" (equivalente a decodeURIComponent('%40'))

const paramsString2 = "?query=value";
const searchParams2 = new URLSearchParams(paramsString2);
console.log(searchParams2.has("query")); // true

const url = new URL("http://example.com/search?query=%40");
const searchParams3 = new URLSearchParams(url.search);
console.log(searchParams3.has("query")); // true
```

### Preservando os sinais de adição

O construtor `URLSearchParams` interpreta sinais de adição (`+`) como espaços, o que pode causar problemas.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+' são substituídos por espaços

console.log(atob(binQuery) === rawData); // false
```

Você pode evitar isso codificando os dados com o {{jsxref("encodeURIComponent", "encodeURIComponent()")}}.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'
const encodedBase64Data = encodeURIComponent(base64Data); // 'E%2BAXQB%2BA'

const searchParams = new URLSearchParams(`bin=${encodedBase64Data}`); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### Valor vazio vs. nenhum valor

`URLSearchParams` não distingue entre parâmetros com nada após o `=` e um parâmetro que não possui um `=`.

```js
const emptyVal = new URLSearchParams("foo=&bar=baz");
console.log(emptyVal.get("foo")); // retorna ''
const noEquals = new URLSearchParams("foo&bar=baz");
console.log(noEquals.get("foo")); // também retorna ''
console.log(noEquals.toString()); // 'foo=&bar=baz'
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Polyfill de `URLSearchParams` no `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- A interface {{domxref("URL")}}.
- [Google Developers: Manipulação de URL fácil com URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)
