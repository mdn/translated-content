---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---

{{jsSidebar("Objects")}}

O método **`encodeURIComponent()`** codifica uma URI (Identificador recurso uniforme) substituindo cada ocorrência de determinados caracteres por um, dois, três, ou quatro seqüências de escape que representam a codificação UTF-8 do caractere (só será quatro seqüências de escape para caracteres compostos por dois caracteres "substituto").

## Syntaxe

```
encodeURIComponent(str);
```

### Parâmetros

- `str`
  - : String. Uma sequência URI.

## Descrição

`encodeURIComponent` escapa todos os caracteres, exceto: alfabeto, dígitos decimais, `- _ . ! ~ * ' ( )`

Note-se que um{{jsxref("URIError")}} será gerada se uma tentativas para codificar um substituto que não faz parte de um par de alta-baixa, por exemplo,

```js
// high-low par ok
console.log(encodeURIComponent("\uD800\uDFFF"));

// lone high surrogate throws "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uD800"));

// lone low surrogate throws "URIError: malformed URI sequence"
console.log(encodeURIComponent("\uDFFF"));
```

Para previnir requisões inesperadas ao servidor, deve-se chamar `encodeURIComponent` ou qualquer parâmetro fornecido pelo usuário que será passado como parte da URI. Por exemplo, um usuário poderia digitar "`Thyme &time=again`" para uma variável `commentario`. Ao não usar `encodeURIComponent` nessa variável irá ser obetido `commentario=Thyme%20&time=again`. Note que o ampersa e o sinal de igual marcam um novo par de chave e valor. Então ao invés de ter um POST com a chave `commentario` igual a "`Thyme &time=again`", tem-se chaves em POST, uma igual a "`Thyme`" e outra (`time`) igual a `again`.

Para [`application/x-www-form-urlencoded`](https://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm), espaços são substituídos por '+', então pode-se querer seguir um `encodeURIComponent` substituição com uma substituição adicional de "%20" com "+".

Para ser mais rigoroso à aderência da [RFC 3986](https://tools.ietf.org/html/rfc3986) (qual reserva !, ', (, ), e \*), mesmo que esses caracteres não tenham usos formalizados de delimitação de URI, o seguinte pode ser usado com segurança:

```js
function ajustadoEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
}
```

## Exemplos

O exemplo seguinte provê o encoding especial requerido pelo UTF-8 nos parâmetros `Content-Disposition` e `Link` no cabeçalho de uma Response (e.g., UTF-8 filenames):

```js
var fileName = "my file(2).txt";
var header =
  "Content-Disposition: attachment; filename*=UTF-8''" +
  encodeRFC5987ValueChars(fileName);

console.log(header);
// logs "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"

function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()]/g, escape) // i.e., %27 %28 %29
      .replace(/\*/g, "%2A")
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("decodeURIComponent")}}
