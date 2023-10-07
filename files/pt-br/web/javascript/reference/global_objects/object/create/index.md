---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
---

{{JSRef}}

O método **`Object.create()`** cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.

{{EmbedInteractiveExample("pages/js/object-create.html", "taller")}}

## Sintaxe

```
Object.create(proto[, propertiesObject])
```

### Parâmetros

- `proto`
  - : O objeto que deve ser o protótipo do objeto recém-criado.
- `propertiesObject`
  - : Opcional. Se especificado e não {{jsxref("undefined")}}, um objeto cuja as propriedades próprias enumeráveis (isto é, aquelas propriedades definidas sobre si mesmo, e _não_ propriedades enumeráveis ao longo da sua cadeia protótipa) especificam os nomes das propriedades a serem adicionadas ao objeto recém-criado, com os nomes das propriedades correspondentes. Essas propriedades correspondem ao segundo argumento de {{jsxref("Object.defineProperties()")}}.

### Retorno

Um novo objeto com o protótipo de objeto e propriedades especificadas.

### Exceções

Uma exceção {{jsxref("TypeError")}} se o parâmetro `proto` não for {{jsxref("null")}} ou um objeto.

## Exemplos

### Herança tradicional com `Object.create()`

A seguir, um exemplo de como usar `Object.create()` para realizar uma herança tradicional. Isto é para herança simples, que é a única herança suportada pelo JavaScript.

```js
// Shape - superclasse
function Shape() {
  this.x = 0;
  this.y = 0;
}

// método da superclasse
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - subclasse
function Rectangle() {
  Shape.call(this); // chama construtor-pai.
}

// subclasse extende superclasse
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log("Rect é uma instância de Rectangle?", rect instanceof Rectangle); // true
console.log("Rect é uma instância de Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Saída: 'Shape moved.'
```

Caso queira realizar herança de múltiplos objetos, então mixins ("mistura") são uma possibilidade.

```js
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // herança
mixin(MyClass.prototype, OtherSuperClass.prototype); // mixin

MyClass.prototype.myMethod = function () {
  // faz algo
};
```

A função `mixin` copia as funções do protótipo da superclasse para o protótipo da subclasse, a função mixin precisa ser fornecida pelo usuário. Um exemplo de uma função do tipo mixin seria [jQuery.extend()](https://api.jquery.com/jQuery.extend/).

### Usando argumento `propertiesObject` com `Object.create()`

```js
var o;

// cria um objeto com protótipo null
o = Object.create(null);

o = {};
// equivalente a:
o = Object.create(Object.prototype);

// Exemplo em que criamos um objeto com algumas propriedades
// (Note que o segundo parâmetro mapeia as chaves para *descritores de propriedade*.)
o = Object.create(Object.prototype, {
  // foo é uma 'propriedade de valor' ('value property') normal
  foo: { writable: true, configurable: true, value: "hello" },
  // bar é uma propriedade getter-setter (accessor)
  bar: {
    configurable: false,
    get: function () {
      return 10;
    },
    set: function (value) {
      console.log("Setting `o.bar` to", value);
    },
    /* com os ES5 Accessors nosso código pode ser escrito como:
    get() { return 10; },
    set(value) { console.log('setting `o.bar` to', value); } */
  },
});

function Constructor() {}
o = new Constructor();
// equivalente a:
o = Object.create(Constructor.prototype);
// Claro, se há de fato um código de inicialização na função
// Constructor, o Object.create() não pode refleti-la

// Cria um novo objeto cujo protóptipo é um objeto novo, vazio
// e adiciona a propriedade 'p' com o valor 42.
o = Object.create({}, { p: { value: 42 } });

// por padrão, propriedades NÃO SÃO escritas, enumeradas ou configuráveis:
o.p = 24;
o.p;
// 42

o.q = 12;
for (var prop in o) {
  console.log(prop);
}
// 'q'

delete o.p;
// false

// especificar uma propriedade ES3
o2 = Object.create(
  {},
  {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  },
);
```

## Polyfill

Este polyfill cobre o caso de uso principal que é a crição de um novo objeto em que o protótipo foi escolhido mas não leva em consideração o segundo argumento.

Note que, enquanto a configuração `null` as `[[Prototype]]` é suportada no ES5 `Object.create`, este polyfill não suporta devido à limitação inerente em versões do ECMAScript inferiores a 5.

```js
if (typeof Object.create != "function") {
  Object.create = (function () {
    var Temp = function () {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error("Second argument not supported");
      }
      if (typeof prototype != "object") {
        throw TypeError("Argument must be an object");
      }
      Temp.prototype = prototype;
      var result = new Temp();
      Temp.prototype = null;
      return result;
    };
  })();
}
```

## Especificações

| Especificação                                                  | Status               | Comentários                                          |
| -------------------------------------------------------------- | -------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.5', 'Object.create')}}        | {{Spec2('ES5.1')}}   | Definição inicial. Implementada no JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.create', 'Object.create')}}     | {{Spec2('ES6')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-object.create', 'Object.create')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.create")}}

## Veja também

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- Post de John Resig sobre [getPrototypeOf()](http://ejohn.org/blog/objectgetprototypeof/)
