---
title: JSON.stringify()
slug: Web/JavaScript/Reference/Global_Objects/JSON/stringify
---

{{JSRef("Global_Objects", "JSON")}}

## Resumo

O método **`JSON.stringify()`** converte valores em javascript para uma String JSON. Esses valores podem ser substituidos especificando a função _replacer_, ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.

## Sintaxe

```
JSON.stringify(valor[, replacer[, espaço]])
```

### Parâmetros

- `valor`
  - : O valor a ser convertido para uma string JSON.
- `replacer` {{optional_inline}}
  - : Uma função que altera o comportamento do processo de transformação em string, ou um array de objetos {{jsxref("String")}} e {{jsxref("Number")}} que servem como uma lista branca para selecionar as propriedades do objeto valor a ser incluído na string JSON. Se este valor for nulo ou não fornecido, todas as propriedades do objeto são incluídas na string JSON resultante.
- `espaço` {{optional_inline}}
  - : Um objeto {{jsxref("String")}} ou {{jsxref("Number")}} que é usado para inserir espaço em branco na saída da string JSON para propósito de legibilidade. Se isto for um `Number`, indica o número de caracteres espaço para usar como espaço em branco; este número é limitado em 10 se for maior que isso. Valores menores que 1 indicam que nenhum espaço deve ser usado. Se isto for uma `String`, a string (ou os primeiros 10 caracteres da string, se for maior que isso) é usado como espaço em branco. Se esse parâmetro não for fornecido (ou for null), nenhum espaço em branco é usado.

## Descrição

`JSON.stringify()` converte um valor para uma notação JSON que o representa:

- Se o valor tiver um método `toJSON()`, é responsável por definir quais dados serão serializados.
- {{jsxref("Boolean")}}, {{jsxref("Number")}}, and {{jsxref("String")}} os objetos são convertidos para os valores primitivos correspondentes durante a stringificação, de acordo com a semântica de conversão.
- Se {{jsxref("undefined")}}, uma função, ou um symbol é encontrado durante a conversão é omitido (quando é encontrado em um objeto) ou censurado para {{jsxref("null")}} (quando é encontrado em um Array). `JSON.stringify` pode também somente retornar `undefined` ao passar valores puros como `JSON.stringify(function(){})` ou `JSON.stringify(undefined)`.
- Todas as propriedades com chave de símbolo serão completamente ignoradas, mesmo quando usar a função `replacer`.
- Propriedades não enumeráveis serão ignoradas.

```js
JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify({ x: 5 }); // '{"x":5}'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}' or '{"y":6,"x":5}'
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol("") });
// '{}'
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, [Symbol.for("foo")]);
// '{}'
JSON.stringify({ [Symbol.for("foo")]: "foo" }, function (k, v) {
  if (typeof k === "symbol") {
    return "a symbol";
  }
});
// '{}'
```

### O parâmetro `replacer` parameter

O parâmetro <kbd>replacer</kbd> pode ser uma função ou uma matriz. Como função, são necessários dois parâmetros, a <kbd>chave</kbd> e os valores que estão sendo especificados. O objeto no qual a <kbd>chave</kbd> foi encontrada é fornecido como substituto desse parâmetro. Inicialmente, ele é chamado com uma chave vazia que representa o objeto que está sendo codificado e, em seguida, é chamado para cada propriedade no <kbd>objeto</kbd> ou matriz que está sendo codificada. Ele deve retornar o valor que deve ser adicionado à cadeia JSON, da seguinte maneira:

- Se você retornar um {{jsxref("Number")}}, a string correspondente a esse número é usada como o valor da propriedade quando adicionada à sequência JSON.
- If you return a {{jsxref("String")}}, that string is used as the property's value when adding it to the JSON string.
- If you return a {{jsxref("Boolean")}}, "true" or "false" is used as the property's value, as appropriate, when adding it to the JSON string.
- If you return any other object, the object is recursively stringified into the JSON string, calling the `replacer` function on each property, unless the object is a function, in which case nothing is added to the JSON string.
- If you return `undefined`, the property is not included in the output JSON string.

> **Nota:**Você não pode usar a função `replacer` para remover valoeres em uma `array`. Se você retornar `undefined`, `null` será usado no lugar.

#### Exemplo de uma função

```js
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {
  fundação: "Mozilla",
  modelo: "caixa",
  semana: 45,
  transporte: "carro",
  mês: 7,
};
var jsonString = JSON.stringify(foo, replacer);
```

O resultado do JSON é: `{"semana":45,"mês":7}`.

#### Exemplo em uma array

Se `replacer` é usado em uma array, os valores da array indicam os nomes das propriedades no objeto, que devem ser incluídas na sequência JSON resultante.

```js
JSON.stringify(foo, ["semana", "mês"]);
// '{"semana":45,"mês":7}', apenas mantém as propriedades "semana" e "mês"
```

### O argumento `space`

O argumento `space` O argumento pode ser usado para controlar o espaçamento na sequência final. Se for um número, os níveis sucessivos na stringficação serão recuados por esse número de caracteres de espaço (até 10). Se for uma sequência, os níveis sucessivos serão recuados por essa sequência (ou pelos dez primeiros caracteres).

```js
JSON.stringify({ a: 2 }, null, " ");
// '{
//  "a": 2
// }'
```

O uso de um caractere de tabulação imita a aparência padrão de impressão pretty-print.

```js
JSON.stringify({ um: 1, dois: 2 }, null, "\t");
// r:
// '{
//     "um": 1,
//     "dois": 2
// }'
```

### Comportamento de `toJSON()`

Se um objeto sendo stringificado tiver uma propriedade denominada toJSON() cujo valor é uma função, o método `toJSON()` personaliza o comportamento da stringificação JSON, em vez de o objeto ser serializado, o valor retornado pelo método `toJSON()` quando chamado será serializado. Por exemplo:

```js
var obj = {
  foo: "foo",
  toJSON: function () {
    return "bar";
  },
};
JSON.stringify(obj); // '"bar"'
JSON.stringify({ x: obj }); // '{"x":"bar"}'
```

### Exemplo de uso de `JSON.stringify()` com `localStorage`

No caso em que você deseja armazenar um objeto criado por seu usuário e permitir que ele seja restaurado mesmo após o fechamento do navegador, o exemplo a seguir é um modelo para a aplicabilidade de `JSON.stringify()`:

> **Aviso:** As funções não são um tipo de dados JSON válido, portanto, elas não funcionarão. Também alguns objetos como {{jsxref("Date")}} será uma string depois {{jsxref("JSON.parse()")}}.

```js
// Criando um exemplo em JSON
var seção = {
  telas: [],
  estado: true,
};
session.screens.push({ nome: "telaA", largura: 450, altura: 250 });
session.screens.push({ nome: "telaB", largura: 650, altura: 350 });
session.screens.push({ nome: "telaC", largura: 750, altura: 120 });
session.screens.push({ nome: "telaD", largura: 250, altura: 60 });
session.screens.push({ nome: "telaE", largura: 390, altura: 120 });
session.screens.push({ nome: "telaF", largura: 1240, altura: 650 });

// Convertendo a string JSON em JSON.stringify()
// Salvando com localStorage no nome da sessão
localStorage.setItem("seção", JSON.stringify(seção));

// Exemplo de como transformar a String gerada por meio de:
// JSON.stringify() e salva em localStorage no objeto JSON novamente
var seçãoRestaurada = JSON.parse(localStorage.getItem("seção"));

// Agora, a variável seçãoRestaurada contém o objeto que foi salvo
// no localStorage
console.log(seçãoRestaurada);
```

## Especificações

| Especificação                                                | Status             | Comentário                                         |
| ------------------------------------------------------------ | ------------------ | -------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.12.3', 'JSON.stringify')}}      | {{Spec2('ES5.1')}} | Definição inicial. Implementado em JavaScript 1.7. |
| {{SpecName('ES6', '#sec-json.stringify', 'JSON.stringify')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade em navegadores

{{Compat("javascript.builtins.JSON.stringify")}}

## Veja também

- {{jsxref("JSON.parse()")}}
