---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
---

{{JSRef("Global_Objects", "String")}}

## Resumo

O método `substring()` retorna a parte da string entre os índices inicial e final, ou até o final da string.

## Sintaxe

```
str.substring(indexStart[, indexEnd])
```

### Parâmetros

- `indexStart`
  - : Um inteiro entre `0` e o comprimento da string (`str.length`), especificando a posição na string do primeiro caractere a ser incluído na substring retornada.
- `indexEnd`
  - : Opcional. Um inteiro entre `0` e o comprimento da string (`str.length`), especificando a posição na string do primeiro caractere a **não** ser mais incluído na substring retornada.

### Valor retornado

Uma nova string contendo a parte especificada da string fornecida.

## Descrição

`substring()` extrai caracteres desde `indexStart` até, mas **não** **incluindo**, `indexEnd`. Em particular:

- Se `indexStart` é igual a `indexEnd`, `substring()` retorna uma string vazia.
- Se `indexEnd` for omitido, `substring()` extrai caracteres até o fim da string.
- Se qualquer argumento for menor que `0` ou {{jsxref("NaN")}}, ele será tratado como `0`.
- Se qualquer argumento for maior que `stringName.length`, ele será tratado como se fosse `stringName.length`

Se `indexStart` for maior que `indexEnd`, então o efeito do `substring()` é como se os dois argumentos estivessem trocados, por exemplo, `str.substring(1, 0) == str.substring(0, 1)`.

## Exemplos

### Usando `substring()`

O seguinte exemplo usa `substring()` para mostrar caracteres da palavra 'Mozilla':

```js
var anyString = "Mozilla";

// Mostra "Moz"
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// Mostra "lla"
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Mostra "Mozill"
console.log(anyString.substring(0, 6));

// Mostra "Mozilla"
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

### Usando `substring()` com `length`

O exemplo a seguir usa o método `substring()` e a propriedade {{jsxref ("String.length", "length")}} para extrair os últimos caracteres de uma string específica. Este método pode ser mais fácil de lembrar, visto que você não precisa saber os índices inicial e final como faria nos exemplos acima.

```js
// Mostra 'illa', os últimos 4 caracteres
let anyString = "Mozilla";
let anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Mostra 'zilla', os últimos 5 caracteres
let anyString = "Mozilla";
let anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
```

### A diferença entre `substring()` e `substr()`

Há uma diferença sutil entre os métodos `substring()` e {{jsxref("String.substr", "substr()")}}, então você deve ter cuidado para não confundi-los.

Os argumentos de `substring()` representam os índices inicial e final, enquanto os argumentos de `substr()` representam o índice inicial e o número de caracteres a serem incluídos na string retornada.

Além disso, `substr()` é considerado um **recurso legacy no ECMAScript** e pode ser removido em versões futuras, portanto, é melhor evitar usá-lo, se possível.

```js
let text = "Mozilla";
console.log(text.substring(2, 5)); // retorna "zil"
console.log(text.substr(2, 3)); // retorna "zil"
```

### Diferenças entre `substring()` e `slice()`

Os métodos `substring()` e {{jsxref("String.slice", "slice()")}} são quase idênticos, mas existem algumas diferenças sutis entre os dois, especialmente na forma como os argumentos negativos são tratados.

O método `substring()` troca seus dois argumentos se `indexStart` for maior que `indexEnd`, o que significa que uma string ainda será retornada. O método {{jsxref("String.slice", "slice()")}} retorna uma string vazia caso o mesmo ocorra.

```js
let text = "Mozilla";
console.log(text.substring(5, 2)); // retorna "zil"
console.log(text.slice(5, 2)); // retorna ""
```

Se um ou ambos os argumentos forem negativos ou `NaN`, o método `substring()` os tratará como se fossem `0`.

```js
console.log(text.substring(-5, 2)); // retorna "Mo"
console.log(text.substring(-5, -2)); // retorna ""
```

`slice()` também trata os argumentos `NaN` como `0`, mas quando recebe valores negativos, ele conta regressivamente a partir do final da string para encontrar os índices.

```js
console.log(text.slice(-5, 2)); // retorna ""
console.log(text.slice(-5, -2)); // retorna "zil"
```

Veja a página {{jsxref("String.slice", "slice()")}} para mais exemplos com números negativos.

### Substituindo uma `substring()` com uma string

O seguinte exemplo substitui uma substring dentro de uma string. Ela irá substituir ambos caracteres e substrings individualmente. A função invocada na linha final do exemplo altera a string "`Brave New World`" para "`Brave New Web`".

```js
function replaceString(oldS, newS, fullS) {
  // Substitui oldS por newS na string fullS
  for (var i = 0; i < fullS.length; i++) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS =
        fullS.substring(0, i) +
        newS +
        fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("World", "Web", "Brave New World");
```

Note que isto pode resultar em um loop infinito se `oldS` for um substring de `newS` — por exemplo, se você tentou substituir "`World`" com "`OtherWorld`". O melhor método para substituir strings é o seguinte:

```js
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS);
}
```

O código acima serve como um exemplo para operações com substring. Se você precisa substituir substrings, na maioria das vezes você vai querer usar {{jsxref("String.prototype.replace()")}}.

## Especificações

| Especificação                                                                        | Status             | Comentário                     |
| ------------------------------------------------------------------------------------ | ------------------ | ------------------------------ |
| ECMAScript 1st Edition.                                                              | Standard           | Implementado no JavaScript 1.0 |
| {{SpecName('ES5.1', '#sec-15.5.4.15', 'String.prototype.substring')}}                | {{Spec2('ES5.1')}} |                                |
| {{SpecName('ES6', '#sec-string.prototype.substring', 'String.prototype.substring')}} | {{Spec2('ES6')}}   |                                |

## Navegadores compatíveis

{{Compat("javascript.builtins.String.substring")}}

## Veja também

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
