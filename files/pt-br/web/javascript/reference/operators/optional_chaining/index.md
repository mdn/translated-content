---
title: Encadeamento opcional
slug: Web/JavaScript/Reference/Operators/Optional_chaining
---

{{JSSidebar("Operators")}}

O operador de **encadeamento opcional** **`?.`** permite a leitura do valor de uma propriedade localizada internamente em uma cadeia de objetos conectados, sem que a validação de cada referência da cadeia seja expressivamente realizada.

O operador **`?.`** funciona de maneira similar ao operador `.` de encadeamento, exceto que, ao invés de causar um erro se a referência é [nullish](/pt-BR/docs/Glossary/nullish) ({{JSxRef("null")}} ou {{JSxRef("undefined")}}), a expressão sofre um "curto-circuito" e retorna com um valor de `undefined`. Quando utilizado com uma chamada de função, retorna `undefined` se a função executada não existir.

Isso resulta em expressões mais curtas e simples ao acessar propriedades encadeadas quando a possibilidade de uma referência ser inexistente. Isso também pode auxiliar ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html", "taller")}}

## Sintaxe

```
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)
```

## Descrição

O operador de encadeamento opcional provê uma forma de simplificar o acesso a valores através de objetos conectados, quando é possível que uma referência ou função possa ser `undefined` ou `null`.

Por exemplo, considere um objeto `obj` que possui uma estrutura aninhada. Sem o encadeamento opcional, verificar proriedades profundamente aninhadas requer uma validação de referências intermediárias, algo como:

```js
let nestedProp = obj.first && obj.first.second;
```

O valor de `obj.first` é confirmadamente não-`null` (e não-`undefined`) antes de acessar o valor de `obj.first.second`. Isso previne o erro que ocorreria se você simplesmente acessasse `obj.first.second` diretamente sem testar `obj.first`.

Com o operador de encadeamento opcional (`?.`), entretanto, você não precisa explicitamente testar e aplicar curto-circuito baseado no estado de `obj.first` antes de tentar acessar `obj.first.second`:

```js
let nestedProp = obj.first?.second;
```

Ao utilizar o operador `?.` ao invés de apenas `.`, o JavaScript sabe que deve implicitamente checar e ter certeza que `obj.first` não é `null` ou `undefined` antes de tentar acessar `obj.first.second`. Se `obj.first` é `null` ou `undefined`, a expressão automaticamente sofrerá curto-circuito, retornando `undefined`.

Isso é equivalente ao seguinte, exceto que a variável temporária, de fato, não é criada:

```js
let temp = obj.first;
let nestedProp = temp === null || temp === undefined ? undefined : temp.second;
```

### Encadeamento opcional com chamadas de funções

Você pode usar o encadeamento opcional ao tentar chamar um método que pode não existir. Isso pode auxiliar, por exemplo, ao utilizar uma API em que o método está indisponível, seja pela época da implementação ou por causa de uma funcionalidade que ainda não está disponível no dispositivo do usuário.

Usar encadeamento opcional com chamadas de função faz com que a expressão automaticamente retorne `undefined` ao invés de lançar uma exceção se o método não é encontrado:

```js
let result = someInterface.customMethod?.();
```

> **Nota:** Se existe uma propriedade com tal nome e que não é uma função, usando `?.` ainda lançará a exceção {{JSxRef("TypeError")}} (`x.y is not a function`).

#### Lidando com callbacks opcionais ou manipuladores de eventos

Se você usa callbacks ou consulta métodos de objetos com [atribuição via desestruturação](/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao#Object_destructuring), você pode ter valores não-existentes que você não conseguirá chamar como funções, a menos que você tenha testado sua existência. Usando `?.`, você pode evitar esse teste extra:

```js
// Escrito como ES2019
function doSomething(onContent, onError) {
  try {
    // ... faz algo com os dados
  } catch (err) {
    if (onError) {
      // teste se onError realmente existe
      onError(err.message);
    }
  }
}
```

```js
// Usando encadeamento opcional com chamadas de função
function doSomething(onContent, onError) {
  try {
    // ... faz algo com os dados
  } catch (err) {
    onError?.(err.message); // Nenhuma exceção se onError for undefined
  }
}
```

### Encadeamento opcional com expressões

Você também pode usar o operador de encadeamento opcional ao acessar propriedades com uma expressão usando [assessores de propriedade](/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_Accessors#Bracket_notation):

```js
let nestedProp = obj?.["prop" + "Name"];
```

### Encadeamento opcional não válido no lado esquerdo de uma atribuição

```js
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### Acesso a item de Array com encadeamento opcional

```js
let arrayItem = arr?.[42];
```

## Exemplos

### Exemplo básico

Esse exemplo busca plo valor da propriedade `name` para o membro `bar` em um map quando não existe tal membro. Portanto, o resultado é `undefined`.

```js
let myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

let nameBar = myMap.get("bar")?.name;
```

### Avaliação com curto-circuito

Ao usar o encadeamento opcional com expressões, se o operador do lado esquerdo é `null` ou `undefined`, a expressão não será avaliada. Por exemplo:

```js
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0 já que x não foi incrementado
```

### Empilhando o operator de encadeamento opcional

Com estruturadas aninhadas, é possível usar encadeamento opcional múltiplas vezes:

```js
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // endereço detalhado é desconhecido
  },
};
let customerCity = customer.details?.address?.city;

// … isso também funcional com encadeamento opcional em chamada de função
let duration = vacations.trip?.getTime?.();
```

### Combinando com o operador de coalescência nula (nullish coalescing)

O {{JSxRef("Operators/Nullish_Coalescing_Operator", "operador de coalescência nula", '', 1)}} pode ser usado após o encadeamento opcional, para construir um valor padrão quando nada é encontrado:

```js
let customer = {
  name: "Carl",
  details: { age: 82 },
};
const customerCity = customer?.city ?? "Cidade desconhecida";
console.log(customerCity); // Cidade desconhecida
```

## Especificações

| Specification                                                                                          | Status  | Comment |
| ------------------------------------------------------------------------------------------------------ | ------- | ------- |
| [Proposal for the "optional chaining" operator](https://tc39.es/proposal-optional-chaining/#sec-scope) | Stage 4 |         |

## Compatibilidade com navegadores

{{Compat("javascript.operators.optional_chaining")}}

## Veja também

- O {{JSxRef("Operators/Nullish_Coalescing_Operator", "Nullish Coalescing Operator", '', 1)}}
- [TC39 proposals](https://github.com/tc39/proposals)
