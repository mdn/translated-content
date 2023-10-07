---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
---

{{JSRef}}

O método `matchAll()` retorna um iterador de todos os resultados correspondentes a uma string em relação a uma [expressão regular](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions), incluindo [grupos de captura](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## Sintaxe

```
str.matchAll(regexp)
```

### Parâmetros

- `regexp`

  - : Um objeto de expressão regular.

    Se um objeto _`obj`_ não-RegExp for passado, ele será convertido implicitamente em um {{jsxref("RegExp")}} usando `new RegExp(obj)`.

    O objeto `RegExp` deve ter o sinalizador (flag) `/g`, caso contrário, um `TypeError` será retornado.

### Valor retornado

Um [iterador](/pt-BR/docs/Web/JavaScript/Guide/Iteratores_e_geradores) (que não é um iterável reinicializável).

## Exemplos

### Regexp.exec() e matchAll()

Antes da adição do `matchAll()` ao JavaScript, era possível usar chamadas [regexp.exec](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (e regexes com a sinalização (flag) `/g`) em um loop para obter todas as correspondências:

```js
const regexp = RegExp("foo[a-z]*", "g");
const str = "table football, foosball";
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(
    `Encontrou ${match[0]} início=${match.index} fim=${regexp.lastIndex}.`,
  );
  // retorna "Encontrou football início=6 fim=14."
  // retorna "Encontou foosball início=16 fim=24."
}
```

Com o `matchAll()` disponível, você pode evitar o loop {{jsxref("Statements/while", "while")}} e executar com `g`.

Em vez disso, usando o `matchAll()`, você obtém um iterador para usar com o mais conveniente {{jsxref ("Statements/for ... of", "for...of")}}, {{jsxref ("Operators/Spread_syntax" , "array spread")}} ou construções {{jsxref ("Array.from()")}}:

```js
const regexp = RegExp("foo[a-z]*", "g");
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `Encontrou ${match[0]} início=${match.index} fim=${
      match.index + match[0].length
    }.`,
  );
}
// retorna "Encontrou football início=6 fim=14."
// retorna "Encontrou foosball início=16 fim=24."

// O iterador de correspondências se esgota após a iterção for..of
// Chame matchAll novamente para criar um novo iterador
Array.from(str.matchAll(regexp), (m) => m[0]);
// Array [ "football", "foosball" ]
```

`matchAll()` retornará uma exceção se o sinalizador (flag) `g` estiver ausente.

```js
const regexp = RegExp("[a-c]", "");
const str = "abc";
str.matchAll(regexp);
// retorna TypeError
```

`matchAll()` cria internamente um clone da `regexp` - portanto, ao contrário de {{jsxref("Global_Objects/RegExp/exec", "regexp.exec()")}}, o `lastIndex` não muda conforme a string é verificada.

```js
const regexp = RegExp("[a-c]", "g");
regexp.lastIndex = 1;
const str = "abc";
Array.from(str.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]
```

### Melhor acesso para capturar grupos (do que String.prototype.match())

Outra razão convincente para usar `matchAll()` é o acesso aprimorado para capturar grupos.

Os grupos de captura são ignorados ao usar {{jsxref("Global_Objects/String/match", "match()")}} com o sinalizador global `/g`:

```js
let regexp = /t(e)(st(\d?))/g;
let str = "test1test2";

str.match(regexp);
// Array ['test1', 'test2']
```

Usando o `matchAll()`, você pode acessar os grupos de captura facilmente:

```js
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

## Especificações

| Specification                                                                          |
| -------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-string.prototype.matchall', 'String.prototype.matchAll')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.String.matchAll")}}

## Veja também

- {{jsxref("String.prototype.match()")}}
- [Using regular expressions in JavaScript](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Capturing groups](/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
