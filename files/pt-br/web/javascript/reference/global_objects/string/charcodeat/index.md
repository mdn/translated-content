---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
---

{{JSRef}}

O método **`charCodeAt()`** retorna um número inteiro entre `0` e `65535` que representa a unidade de código UTF-16 no índice fornecido. A unidade de código UTF-16 corresponde ao ponto de código Unicode para pontos de códigos representáveis em uma única unidade de código UTF-16, mas também pode ser a primeira unidade de código de um par substituto não representável em uma única unidade de código UTF-16. Po exemplo: pontos de código Unicode > (0x10000). Se você quer o valor do ponto de código inteiro, use **`codePointAt`**().

## Sintaxe

```
str.charCodeAt(index)
```

### Parâmetros

- `index`
  - : Um inteiro maior ou igual a `0` e menor que o comprimento da string. Se não for um número, o padrão será `0`.

### Valor retornado

Um número representando o valor de unidade de código UTF-16 do caractere no índice fornecido. O valor {{jsxref("Global_Objects/NaN", "NaN")}} é retornado se o índice estiver fora do intervalo aceitável.

## Descrição

Os pontos de código Unicode variam de `0` a `1114111` (`0x10FFFF`). Os primeiros 128 pontos de código Unicode são uma correspondência direta da codificação de caracteres ASCII. (Para informações sobre Unicode, veja o [JavaScript Guide](/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals).)

> **Nota:** o `charCodeAt()` sempre retornará um valor menor do que `65536`. Isso ocorre pois os pontos de código mais altos são representados por um par de pseudo-caracteres "substitutos" (de menor valor) que são usados para compreender o caracter real.
>
> Por isso, para examinar (ou reproduzir) o caractere completo para valores de caracteres individuais de valor `65536` e acima, é necessário recuperar não apenas o `charCodeAt(i)`, mas também o `charCodeAt(i+1)` (como se examinando/reproduzindo a string com duas letras), ou usar o `codePointAt(i)`. Veja o exemplo 2 e 3 (abaixo).

Compatibilidade com versões anteriores: Em versões históricas (como JavaScript 1.2) o método `charCodeAt()` retorna um número indicando o valor de conjunto de códigos ISO-Latin-1 do caractere no dado índice. O conjunto de códigos ISO-Latin-1 varia de `0` a `255`. Os primeiros `128` (do `0` ao `127`) são uma correspondência direta ao conjunto de caracteres ASCII.

## Exemplos

### Usando `charCodeAt()`

O exemplo a seguir retorna `65`, o valor Unicode para A.

```js
"ABC".charCodeAt(0); // retorna 65
```

### Corrigindo o `charCodeAt()` para manipular caracteres de Plano Multilingual não Básico se sua presença na string é desconhecida

Essa versão pode ser usada em loops **for** e afins quando não sabemos se caracteres de Plano Multilingual não Básico existem antes da posição do índice especificado.

```js
function fixedCharCodeAt(str, idx) {
  // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
  // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false
  idx = idx || 0;
  var code = str.charCodeAt(idx);
  var hi, low;

  // Substituto elevado (poderia mudar o último hex para 0xDB7F para tratar
  // substitutos privados elevados como caracteres únicos)
  if (0xd800 <= code && code <= 0xdbff) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) {
      throw "High surrogate not followed by low surrogate in fixedCharCodeAt()";
    }
    return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
  }
  if (0xdc00 <= code && code <= 0xdfff) {
    // Low surrogate
    // Retornamos false para permitir os loops pularem essa iteração já que já deveria
    //ter tratado os substitutos elevados acima, na iteração anterior
    return false;
    /*hi = str.charCodeAt(idx - 1);
    low = code;
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;*/
  }
  return code;
}
```

### Corrigindo o `charCodeAt()` para manipular caracteres de Plano Multilingual não Básico se sua presença na string é desconhecida

```js
function knownCharCodeAt(str, idx) {
  str += "";
  var code,
    end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while (surrogatePairs.exec(str) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return NaN;
  }

  code = str.charCodeAt(idx);

  var hi, low;
  if (0xd800 <= code && code <= 0xdbff) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    // Vá um adiante, já que um dos "characters" é parte de um par substituto
    return (hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000;
  }
  return code;
}
```

## Especificações

| Especificação                                                                              | Status               | Comentário                                         |
| ------------------------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                        | {{Spec2('ES1')}}     | Definição inicial. Implementado no JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.5', 'String.prototype.charCodeAt')}}                      | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.charcodeat', 'String.prototype.charCodeAt')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-string.prototype.charcodeat', 'String.prototype.charCodeAt')}} | {{Spec2('ESDraft')}} |                                                    |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.charCodeAt")}}

## Veja também

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
