---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
---

{{JSRef("Global_Objects", "Object")}}

## Resumo

O método **`hasOwnProperty()`** retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).

## Sintaxe

```
obj.hasOwnProperty(prop)
```

### Parâmetros

- `prop`
  - : Uma {{jsxref("String")}} ou [symbol](/pt-BR/docs/Glossary/Symbol) indicando o nome da propriedade a ser verificada.

### Valor de Retorno

Um {{jsxref("Boolean", "booleano")}} indicando se o objeto possui ou não a propriedade especificada como uma propriedade do próprio objeto e que a propriedade não é uma propriedade herdada.

## Descrição

Todo objeto descendente de `Object` herda o método `hasOwnProperty`. Este método pode ser usado para determinar se um objeto possui a propriedade especificada como propriedade direta do objeto.

Diferentemente do operador {{jsxref("Operators/in", "in")}}, este método não checa a cadeia prototípica do objeto.

## Nota

o método `hasOwnProperty` retorna `true` mesmo se o valor da propridade em questão é `null` ou `undefined`

```
o = new Object();
o.propUm = null;
o.hasOwnProperty('propUm'); // retorna true
o.propDois = undefined;
o.hasOwnProperty('propDois'); // retorna true
```

## Exemplos

### Usando `hasOwnProperty` para testar a existência de uma propriedade

O seguinte exemplo determina se o objeto `o` possui uma propriedade com o nome `prop`:

```
o = new Object();
o.hasOwnProperty('prop'); // retorna false
o.prop = 'existe';
o.hasOwnProperty('prop'); // retorna true
```

### Propriedades Diretas vs Propriedades Herdadas

O seguinte exemplo diferencia entre propriedade diretas e propriedade herdadas da cadeia prototípica:

```js
o = new Object();
o.prop = "existe";
o.hasOwnProperty("prop"); // Retorna true
o.hasOwnProperty("toString"); // Retorna false
o.hasOwnProperty("hasOwnProperty"); // Retorna false
```

### Percorrer através das propriedades de um objeto

O seguinte exemplo mostra como percorrer as propriedade de um objeto sem executar as propriedade herdadas.

Vale observar que o loop {{jsxref("Statements/for...in", "for...in")}} percorre somente itens enumeráveis. Entretanto, o método hasOwnProperty também funciona com propriedades não enumeráveis.

```js
var buz = {
  fog: "stack",
};

for (var nome in buz) {
  if (buz.hasOwnProperty(nome)) {
    alert("this is fog (" + nome + ") for sure. Value: " + buz[nome]);
  } else {
    alert(nome); // toString ou qualquer outra coisa
  }
}
```

### Exemplo: `hasOwnProperty` como propriedade

JavaScript não protege o nome `hasOwnProperty`, assim, se existir a possibilidade do objeto possuir uma propriedade com esse nome, é necessário usar externamente `hasOwnProperty` para se ter o resultado correto:

```js
var foo = {
  hasOwnProperty: function () {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // Sempre retorna false

// Usando a propriedade hasOwnProperty de outro objeto e definindo 'this' como foo
({}).hasOwnProperty.call(foo, "bar"); // true

// Também é possível usar hasOwnProperty do objeto
Object.prototype.hasOwnProperty.call(foo, "bar"); // true
```

Observe que neste ultimo caso nenhum novo objeto é criado.

## Especificações

| Especificação                                                                                  | Status             | Comentário         |
| ---------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| ECMAScript 3rd Edition. Implemented in JavaScript 1.5                                          | Standard           | Definição inicial. |
| {{SpecName('ES5.1', '#sec-15.2.4.5', 'Object.prototype.hasOwnProperty')}}                      | {{Spec2('ES5.1')}} |                    |
| {{SpecName('ES6', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}} | {{Spec2('ES6')}}   |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.hasOwnProperty")}}

## Veja Também

- [Enumerability and ownership of properties](/pt-BR/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- [for...in](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in)
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisted](/pt-BR/docs/Web/JavaScript/Guide/Inheritance_Revisited)
