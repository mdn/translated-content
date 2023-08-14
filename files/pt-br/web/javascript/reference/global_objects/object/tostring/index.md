---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef("Global_Objects", "Object")}}

## Sumário

O método `toString()` retorna uma string representando o objeto.

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## Sintaxe

```js
obj.toString();
```

## Descrição

Todo objeto possui um método `toString()` que é chamado automaticamente quando o objeto precisa ser representado como um valor em texto ou quando o objeto é referenciado de uma maneira que requeira uma string. Por padrão, o método `toString()` é herdado de todo objeto descendente de `Object`. Se e o método não é sobrescrito em um objeto personalizado, `toString()` retorna "\[object _type_]", onde `type` é o tipo do objeto. O código a seguir ilustra isso:

```js
var o = new Object();
o.toString(); // retorna [object Object]
```

> **Nota:** Starting in JavaScript 1.8.5 `toString()` called on {{jsxref("Global_Objects/null", "null")}} returns `[object Null]`, and {{jsxref("Global_Objects/undefined", "undefined")}} returns `[object Undefined]`, as defined in the 5th Edition of ECMAScript and a subsequent Errata. See [Using toString to detect object type](#example:_using_tostring_to_detect_object_type).

## Examples

### Exemplo: Sobrepondo o método inicial `toString`

Você pode criar uma função para ser chamada no lugar do método `toString()`. O método `toString()` não requer parâmetros e deve retornar uma string. O método `toString()` criado por você pode ter o valor que quiser, mas será mais útil se usar informações do objeto.

O código abaixo define o objeto `Dog` e cria `theDog`, um objeto do tipo `Dog`:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog("Gabby", "Lab", "chocolate", "female");
```

Se você chamar o método `toString()` neste objeto, ele retornará o valor original herdado de {{jsxref("Global_Objects/Object", "Object")}}:

```js
theDog.toString(); // returns [object Object]
```

O código abaixo cria e faz com que `dogToString()` sobrescreva o `toString()` original. Esta função gera uma string contendo **name, breed, color, and sex** do objeto, na forma de "`propriedade = valor;`".

```js
Dog.prototype.toString = function dogToString() {
  var ret =
    "Dog " +
    this.name +
    " is a " +
    this.sex +
    " " +
    this.color +
    " " +
    this.breed;
  return ret;
};
```

Usando este código, toda vez que `theDog` for usado em um texto (string), JavaScript automaticamente chamará a função `dogToString()`, a qual retornará:

```
Dog Gabby is a female chocolate Lab
```

### Exemplo: Usando `toString()` para detectar a classe do objeto

`toString()` pode ser usado com qualquer objeto e permite que você determine sua classe. Para usar `Object.prototype.toString()` com qualquer objeto, deverá chamar {{jsxref("Function.prototype.call()")}} ou {{jsxref("Function.prototype.apply()")}} nele, passando o objeto que quer inspecionar como o primeiro parâmetro, chamado `thisArg`.

```js
var toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
toString.call(Math); // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

## Especificações

{{Specifications}}

## Compatibilidade

{{Compat}}

## Veja também

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
