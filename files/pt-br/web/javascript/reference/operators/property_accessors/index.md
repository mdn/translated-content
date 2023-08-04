---
title: Assessores de propriedade
slug: Web/JavaScript/Reference/Operators/Property_accessors
---

{{jsSidebar("Operators")}}

Os assessores de propriedade fornecem acesso as propriedades de um objeto usando a notação de ponto ou a notação de colchetes.

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html")}}

## Sintaxe

```
object.property
object["property"]
```

## Descrição

Pode-se pensar em um objeto como uma matriz associativa (a.k.a. _map_, _dictionary_, _hash_, _lookup table_). As chaves nesta matriz são os nomes das propriedades dos objetos. É típico quando se fala de propriedades de um objeto para fazer uma distinção entre propriedades e métodos. No entanto, a distinção entre propriedade/método é um pouco mais do que convenção. Um método é simplesmente uma propriedade que pode ser chamada, por exemplo, se tiver uma referência a uma instância de [Function](/pt-BR/docs/Web/JavaScript/Reference/Functions) como seu valor.

Há duas maneira de acessar propriedades: notação de ponto ou a notação de colchetes.

### Notação de ponto

```js
get = object.property;
object.property = set;
```

Neste código, a propriedade deve ser um identificador válido, i.e. uma sequência de carácteres alfanuméricos, incluíndo também o underline ("`_`") e o cifrão ("`$`"), não pode começar com um número. Por exemplo, `object.$1` é valido, enquanto `object.1` não é.

```js
document.createElement("pre");
```

Aqui, o método chamado "createElement" é recuperado do documento e é chamado.

Se você usar um método para um literal numérico e o literal numérico não tem expoente e nenhum ponto decimal, deixar de espaço em branco antes do ponto que precede a chamada de método para evitar que o ponto seja interpretado como um ponto decimal.

```js
(77).toExponential();
// ou
(77).toExponential();
// ou
(77).toExponential();
// ou
(77).toExponential();
// ou
(77.0).toExponential();
// porque 77. === 77.0, sem ambiguidade :p
```

### Notação de colchete

```js
get = object[property_name];
object[property_name] = set;
```

`property_name` é uma string. A string não precisa ser um identificador válido; pode ser qualquer valor, e.g. "1foo", "!bar!", ou até " " (um espaço).

```js
document["createElement"]("pre");
```

Isto faz exatamente a mesma coisa que o exemplo anterior.

Um espaço antes da notação de colchete é permitido.

```js
document["createElement"]("pre");
```

### Nomes de propriedades

Nomes de propriedades devem ser strings. Isto significa que objetos não-string não podem ser usados como chave em um objeto. Qualquer objeto não-string, incluindo um número, é estereotipado como uma string pelo método [toString](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).

```js
var object = {};
object["1"] = "value";
console.log(object[1]);
```

A saída é "value", desde 1 é estereotipado como '1'.

```js
var foo = { unique_prop: 1 },
  bar = { unique_prop: 2 },
  object = {};
object[foo] = "value";
console.log(object[bar]);
```

A saída também é "value", já que ambos foo e bar são convertidos para a mesma string. No motor de Javascript [SpiderMonkey](/pt-BR/docs/Mozilla/Projects/SpiderMonkey), esta string poderia ser "\['object Object']".

### Ligação de método

Um método não é limitado ao objeto de quem é metodo. Especificamente, `this` não é fixo em um método, i.e., `this` não se referece necessariamente ao objeto contendo o método. Ao invés disso, `this` é "passado" pela função call. Veja [method binding](/pt-BR/docs/Web/JavaScript/Reference/Operators/this#Method_binding).

### Nota sobre `eval`

Novatos em JavaScript comentem muitas vezes o erro de usar [eval](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/eval) onde a notação de colchete pode ser usada no lugar. Por exemplo, a sintaxe a seguir é muitas vezes vista em muitos scripts.

```js
x = eval("document.forms.form_name.elements." + strFormControl + ".value");
```

`eval` é lento e deve ser evitado sempre que possível. Também, `strFormControl` would have to hold an identifier, which is not required for names and IDs of form controls. It is better to use bracket notation instead:

```js
x = document.forms["form_name"].elements[strFormControl].value;
```

## Especificações

| Specification                                                            | Status               | Comment                                            |
| ------------------------------------------------------------------------ | -------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-property-accessors', 'Property Accessors')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-property-accessors', 'Property Accessors')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-11.2.1', 'Property Accessors')}}               | {{Spec2('ES5.1')}}   |                                                    |
| {{SpecName('ES1', '#sec-11.2.1', 'Property Accessors')}}                 | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |

## Compatibilidade com navegadores

{{Compat("javascript.operators.property_accessors")}}

## Veja também

- {{jsxref("Object")}}
- {{jsxref("Object/defineProperty")}}
