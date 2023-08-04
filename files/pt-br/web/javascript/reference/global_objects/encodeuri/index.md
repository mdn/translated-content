---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
---

{{jsSidebar("Objects")}}

A função **`encodeURI()`** codifica a [URI](/pt-BR/docs/Glossary/URI) substituindo cada instância de certos caracteres por um, dois, três ou quatro sequências de escape representando a codificação [UTF-8](/pt-BR/docs/Glossary/UTF-8) do caracter (será somente quatro sequências de escape para caracteres compostos de dois caracteres substitutos).

{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}

## Sintaxe

```
encodeURI(URI)
```

### Parâmetros

- `URI`
  - : Uma URI completa.

### Valor de retorno

Uma nova cadeia de caracteres representando a cadeia de caracteres provida, codificada como uma URI.

## Descrição

A função `encodeURI()` não codifica caracteres que possuem significado especial (caracteres reservados) para a URI. O exemplo seguinte mostra todas as partes que o "esquema" da URI pode possivelmente conter. Note como certos caracteres são usados para dar significado especial:

```
http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor
```

Consequentemente, `encodeURI()` **não** codifica caracteres que são necessários para formular uma URI completa. Também, `encodeURI()` **não** codifica alguns caracteres adicionais, conhecidos como "marcas não reservadas (unreserved marks)", que não tem propósito reservado mas são permitidos na URI "como são". (Veja [RFC2396)](https://www.ietf.org/rfc/rfc2396.txt)

`encodeURI()` escapa todos os caracteres **exceto**:

```
Não escapado:

    A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
```

## Exemplos

### encodeURI vs encodeURIComponent

`encodeURI()` se difere de {{jsxref("encodeURIComponent", "encodeURIComponent()")}} como a seguir:

```js
var set1 = ";,/?:@&=+$#"; // Caracteres reservados
var set2 = "-_.!~*'()"; // Marcas não reservadas
var set3 = "ABC abc 123"; // Caracteres alfanuméricos + Espaço

console.log(encodeURI(set1)); // ;,/?:@&=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (o espaço é codificado como %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (o espaço é codificado como %20)
```

Note que `encodeURI()` por si só não pode formar requisições [`GET`](/pt-BR/docs/Web/HTTP/Methods/GET) e [`POST`](/pt-BR/docs/Web/HTTP/Methods/POST), como para [`XMLHttpRequest`](/pt-BR/docs/Web/API/XMLHttpRequest), porque `"&"`, `"+"`, e `"="` não são codificados, que são tratados como caracteres especiais em requisições `GET` e `POST`. `encodeURIComponent()`, entretanto, codifica esses caracteres.

### Codificando um substituto solitário alto joga

Um {{jsxref("URIError")}} será jogado se uma tentativa de codificar um substituto que não é parte de um par alto-baixo, e.g.,

```js
// par alto-baixo ok
console.log(encodeURI("\uD800\uDFFF"));

// substituto alto solitário joga "URIError: malformed URI sequence"
console.log(encodeURI("\uD800"));

// substituto baixo solitário joga "URIError: malformed URI sequence"
console.log(encodeURI("\uDFFF"));
```

### Codificando para IPv6

Se você deseja seguir a [RFC3986](http://tools.ietf.org/html/rfc3986) mais recente para URLs, que faz colchetes ser reservado (para [IPv6](/pt-BR/docs/Glossary/IPv6)) e então não será codificado quando formando algo que possa ser parte da URL (como o host), o seguinte código pode ajudar:

```js
function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, "[").replace(/%5D/g, "]");
}
```

## Especificações

| Especificação                                              |
| ---------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-encodeuri-uri', 'encodeURI')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.encodeURI")}}

## Veja também

- {{jsxref("decodeURI", "decodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}
- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
