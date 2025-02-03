---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
---

{{JSRef}}

O método `replaceAll()` retorna uma nova string com todas as ocorrências de um padrão substituídas por uma substituição. O padrão pode ser uma string ou uma {{jsxref ("RegExp")}}, e a substituição pode ser uma string ou uma função a ser chamada para cada ocorrência.

A _string_ original é mantida sem modificação.

{{InteractiveExample}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(paragraph.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"

```

## Sintaxe

```
const newStr = str.replaceAll(regexp|substr, newSubstr|function)
```

> [!NOTE]
> Quando usar uma `regexp`, você deve colocar o sinalizador (flag) global "`g`". Do contrário, será retornado um `TypeError`: "_replaceAll must be called with a global RegExp_".

### Parâmetros

- `regexp` (padrão)
  - : Uma {{jsxref ("RegExp")}} ou literal com o sinalizador (flag) global. As ocorrências serão substituídas por _`newSubstr`_ ou pelo valor retornado da _`function`_ (função) especificada.
- `substr` (padrão)
  - : Uma {{jsxref ("String")}} que deve ser substituída por `newSubstr`. É tratada como uma string literal e não é interpretada como uma expressão regular (_`RegExp`_).
- `newSubstr` (substituição)

  - : É a {{jsxref("String")}} que substitui a `substring` especificada pelo parâmetro `regexp` ou `substr`. Um número de padrões especiais para substituição são suportados; veja a seção "

    Especificando uma string como parâmetro

    " abaixo.

- `function` (substituição)
  - : Uma função a ser chamada retornando a nova `substring` a ser usada para substituir as correspondências para a dada `regexp` ou `substr`. Os argumentos passados para esta função são descritos na seção "[Especificando uma função como parâmetro](<#Especificando uma função como parâmetro>)" abaixo.

### Valor de retorno

Um nova _string_, com todas as ocorrências de um padrão substituído por uma substituição.

## Descrição

Este método não muda o objeto {{jsxref("String")}} original. Ele simplesmente retorna uma nova _string_.

### Especificando uma string como parâmetro

A _string_ de substituição pode incluir os seguimentos padrões especiais de substituição:

| Padrão   | Insere                                                                                                                                                                                                                  |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`     | Insere um `"$"`.                                                                                                                                                                                                        |
| `$&`     | Insere a _substring_ correspondente.                                                                                                                                                                                    |
| `` $` `` | Insere a porção da _string_ que precede a _substring_ correspondente.                                                                                                                                                   |
| `$'`     | Insere a porção da _string_ que sucede a _substring_ correspondente.                                                                                                                                                    |
| `$n`     | Onde `n` é um inteiro positivo menor que 100, insere a _`n`_-ésima _string_ submatch entre parênteses, desde que o primeiro argumento seja um objeto {{jsxref("RegExp")}}. Note que isso é indexado começando pelo `1`. |

### Especificando uma função como parâmetro

Você pode especificar uma função como segundo parâmetro. Neste caso, a função será chamada depois da ocorrência ter sido encontrada. O resultado da função (valor de retorno) será usado como uma _string_ para substituição. (**Nota:** Os padrões especiais mencionados acima **não se aplicam** neste caso.)

Note que a função será chamada múltiplas vezes para cada ocorrência a ser substituída se a expressão regular no primeiro parâmetro for global "`g`".

Os argumentos para funções são os seguintes:

| Nome possível | Valor fornecido                                                                                                                                                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `match`       | A _substring_ correspondida. (Corresponde ao `$&` acima.)                                                                                                                                                                                                                                        |
| `p1, p2, ...` | A _n_-ésima string encontrada por um grupo de captura entre parênteses, desde que o primeiro argumento para `replace()` seja uma {{jsxref("RegExp")}}. (Corresponde a `$1`, `$2`, etc. acima.) Por exemplo, se `/(\a+)(\b+)/`, foi dado, `p1` é a correspondência para `\a+`, e `p2` para `\b+`. |
| `offset`      | O deslocamento da substring correspondente em toda a string sendo examinada. (Por exemplo, se toda a string for '`abcd`' e a substring correspondente for '`bc`', este argumento será `1`.)                                                                                                      |
| `string`      | A _string_ inteira será examinada.                                                                                                                                                                                                                                                               |

(O número exato de argumentos depende se o primeiro argumento é um objeto {{jsxref("RegExp")}} — e, se então, quantas _subcorrespondências_ entre parênteses são especificadas.)

## Exemplos

### Usando `replaceAll()`

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### RegExp sem flag "g" retorando erro

Ao usar uma expressão regular para realizar uma pesquisa, a mesma deve conter a flag global "`g`". O código abaixo não irá funcionar:

```js example-bad
'aabbcc'.replaceAll(/b/, '.');
TypeError: replaceAll must be called with a global RegExp
```

Já o código abaixo vai funcionar:

```js example-good
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("String.prototype.replace", "String.prototype.replace()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
