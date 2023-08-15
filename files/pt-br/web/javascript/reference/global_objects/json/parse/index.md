---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
---

{{JSRef}}

O método **`JSON.parse()`** analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. Uma função **reviver** opcional pode ser fornecida para executar uma transformação no objeto que será retornado.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Sintaxe

```
JSON.parse(text[, reviver])
```

### Parâmetros

- `text`
  - : A string para analisar como JSON. Veja o objeto {{jsxref("JSON")}} para uma descrição da sintaxe JSON.
- `reviver` {{optional_inline}}
  - : Se for uma função, prescreve como o valor originalmente produzido pela análise será transformado antes de ser retornado.

### Valor retornado

O {{jsxref("Object")}} correspondente ao `text` JSON fornecido.

### Exceções

Lança uma exceção {{jsxref("SyntaxError")}} se a string a ser analisada não for um JSON válido.

## Exemplos

### Usando `JSON.parse()`

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Usando o parâmetro `reviver`

Se um `reviver` for especificado, o valor calculado pela análise será _transformado_ antes de ser retornado. Especificamente, o valor computado e todas as suas propriedades (começando com as propriedades mais aninhadas e prosseguindo para o próprio valor original) são executadas individualmente através do `reviver`. Em seguida, ele é chamado, com o objeto contendo a propriedade sendo processada como `this`, e com o nome da propriedade como uma string, e o valor da propriedade como argumentos. Se a função `reviver` retornar {{jsxref("undefined")}} (ou não retornar nenhum valor, por exemplo, se a execução cair no final da função), a propriedade será excluída do objeto. Caso contrário, a propriedade é redefinida para ser o valor de retorno.

Se o `reviver` apenas transformar alguns valores e não outros, certifique-se de retornar todos os valores não transformados como estão, caso contrário, eles serão excluídos do objeto resultante.

```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // retorna o valor * 2 para números
      : value, // retorna tudo sem alteração
);

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // mostra o nome da propriedade atual, o último é "".
  return value; // retorna o valor da propriedade inalterada.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `JSON.parse()` não permite vírgulas à direta

```js example-bad example-bad
// ambos retornarão um SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

## Especificações

| Especificações                                           | Status               | Comentário                                         |
| -------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.12.2', 'JSON.parse')}}      | {{Spec2('ES5.1')}}   | Initial definition. Implemented in JavaScript 1.7. |
| {{SpecName('ES6', '#sec-json.parse', 'JSON.parse')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-json.parse', 'JSON.parse')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.JSON.parse")}}

## Veja Também

- {{jsxref("JSON.stringify()")}}
