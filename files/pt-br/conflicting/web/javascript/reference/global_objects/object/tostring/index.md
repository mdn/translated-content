---
title: Object.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef}}

O método **`toSource()`** retorna uma cadeia de caracteres (_string_) representando o código fonte do objeto.

## Sintaxe

```
Object.toSource();
obj.toSource();
```

### Valor de retorno

Uma _string_ representando o código fonte do objeto.

## Descrição

O método `toSource()` retorna os seguintes valores:

- Para o objeto embutido {{jsxref("Object")}}, `toSource()` retorna a seguinte _string_ indicando que o código fonte não está disponível:

  ```js
  function Object() {
      [native code]
  }
  ```

- Para instâncias de {{jsxref("Object")}}, `toSource()` retorna a _string_ representando o código fonte.

Você pode chamar `toSource()` enquanto debuga para examinar os conteúdos de um objeto.

### Sobrescrevendo o método `toSource()`

É seguro para objetos sobrescreverem o método `toSource()`. Por exemplo:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.toSource = function Person_toSource() {
  return 'new Person(' + uneval(this.name) + ')';
};

console.log(new Person('Joe').toSource()); // ---> new Person("Joe")
```

### Métodos `toSource()` embutidos

Cada tipo principal do JavaScript tem seu próprio método `toSource()`. Esses objetos são:

- {{jsxref("Array.prototype.toSource()")}} — objeto {{jsxref("Array")}}.
- {{jsxref("Boolean.prototype.toSource()")}} — objeto {{jsxref("Boolean")}}.
- {{jsxref("Date.prototype.toSource()")}} — objeto {{jsxref("Date")}}.
- {{jsxref("Function.prototype.toSource()")}} — objeto {{jsxref("Function")}}.
- {{jsxref("Number.prototype.toSource()")}} — objeto {{jsxref("Number")}}.
- {{jsxref("RegExp.prototype.toSource()")}} — objeto {{jsxref("RegExp")}}.
- {{jsxref("String.prototype.toSource()")}} — objeto {{jsxref("String")}}.
- {{jsxref("Symbol.prototype.toSource()")}} — objeto {{jsxref("Symbol")}}.
- `Math.toSource()` — Retorna a _string_ "Math".

### Limitações em objetos cíclicos

Em case de objetos que contém referências para eles mesmos, e.g. uma lista ligada cíclica ou uma árvore que pode ser percorrida pelos dois sentidos, `toSource()` não irá recriar a auto-referência, como no Firefox 24. Por exemplo:

```js
var obj1 = {};
var obj2 = { a: obj1 };
obj1.b = obj2;

console.log('Cyclical: ' + (obj1.b.a == obj1));

var objSource = obj1.toSource(); // retorna "({b:{a:{}}})"

obj1 = eval(objSource);

console.log('Cyclical: ' + (obj1.b.a == obj1));
```

Se uma estrutura cíclica é empregada e `toSource()` é necessário, o objeto deve prover uma sobrescrita para `toSource()`, ou usando a referência para um construtor ou provendo uma função anônima.

## Exemplos

### Usando `toSource()`

O seguinte código define o tipo do objeto `Dog` e cria `theDog`, um objeto do tipo `Dog`:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
```

Chamando o método `toSource()` de `theDog` mostra o código fonte JavaScript que define o objeto:

```js
theDog.toSource();
// returns ({name:"Gabby", breed:"Lab", color:"chocolate", sex:"female"})
```

## Especificações

Não faz parte de nenhum padrão.

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.toSource")}}

## Veja também

- {{jsxref("Object.prototype.toString()")}}
