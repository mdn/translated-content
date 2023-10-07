---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
---

{{JSRef}}

O método **`Object.defineProperties()`** define uma nova propriedade ou modifica uma existente no objeto, retornando o objeto.

## Sintaxe

```
Object.defineProperties(obj, props)
```

### Parâmetros

- `obj`
  - : O objeto no qual se cria ou modifica suas propriedades.
- `props`

  - : Um objeto do qual propriedades enumeráveis constitui descritores para as propriedades serem definidas ou modificadas. Descritores de propriedade presente nos objetos provém em dois principais tipos: descritores de dados e de acesso (veja {{jsxref("Object.defineProperty()")}} para mais detalhes). Descritores têm as seguintes chaves:

    - `configurable`
      - : `true` se e somente se o tipo deste descritor de propriedades pode ser modificada e se a propriedade pode ser apagada do objeto correspondente.
        **Valor padrão é `false`.**
    - `enumerable`
      - : `true` se e somente se este propriedade aparece durante enumeração das propriedade sobre o objeto correspondente.
        **Valor padrão é `false`.**
    - `value`
      - : O valor associado com a propriedade. Pode ser qualquer valor válido em JavaScript value (número, objeto, função, etc).
        **Valor padrão é {{jsxref("undefined")}}.**
    - `writable`
      - : `true` se e somente se o valor associado com a propriedade pode ser modificada com um {{jsxref("Operators/Assignment_Operators", "assignment operator", "", 1)}}.
        **Valor padrão é `false`.**
    - `get`
      - : Uma função a qual serve com um getter para a propriedade, ou {{jsxref("undefined")}} se não existe getter. A retorno da função será usado como o valor da propriedade.
        **Valor padrão é {{jsxref("undefined")}}.**
    - `set`
      - : Uma função a qual server com um setter para a propriedade, ou {{jsxref("undefined")}} se não existe setter. A função receberá como argumento somente o novo valor sendo atribuído à propriedade.
        **Valor padrão é {{jsxref("undefined")}}.**

### Valor de retorno

O objeto que foi passado para a função.

## Descrição

`Object.defineProperties`, em essência, define todas as propriedades correspondentes para as propriedades próprias enumeráveis de `props` sobre o objeto `obj`.

## Exemplo

```js
var obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
  // etc. etc.
});
```

## Polyfill

Assumindo uma execução intocada com todos os nomes e propriedades referindo para seus valores iniciais, `Object.defineProperties` é quase completamente equivalente (note o comentário em `isCallable`) para a seguinte reimplementação em JavaScript:

```js
function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB: modify as necessary if other values than functions are callable.
      return typeof v === "function";
    }

    if (typeof desc !== "object" || desc === null)
      throw new TypeError("bad desc");

    var d = {};

    if (hasProperty(desc, "enumerable")) d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, "configurable")) d.configurable = !!desc.configurable;
    if (hasProperty(desc, "value")) d.value = desc.value;
    if (hasProperty(desc, "writable")) d.writable = !!desc.writable;
    if (hasProperty(desc, "get")) {
      var g = desc.get;

      if (!isCallable(g) && typeof g !== "undefined")
        throw new TypeError("bad get");
      d.get = g;
    }
    if (hasProperty(desc, "set")) {
      var s = desc.set;
      if (!isCallable(s) && typeof s !== "undefined")
        throw new TypeError("bad set");
      d.set = s;
    }

    if (("get" in d || "set" in d) && ("value" in d || "writable" in d))
      throw new TypeError("identity-confused descriptor");

    return d;
  }

  if (typeof obj !== "object" || obj === null) throw new TypeError("bad obj");

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i < descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
```

## Especificações

| Especificação                                                                      | Status               | Comentário                                          |
| ---------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.7', 'Object.defineProperties')}}                  | {{Spec2('ES5.1')}}   | Definição inicial. Implementada no JavaScript 1.8.5 |
| {{SpecName('ES6', '#sec-object.defineproperties', 'Object.defineProperties')}}     | {{Spec2('ES6')}}     |                                                     |
| {{SpecName('ESDraft', '#sec-object.defineproperties', 'Object.defineProperties')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Object.defineProperties")}}

## Veja também

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Enumerabilidade e direito de propriedades](/pt-BR/docs/Enumerability_and_ownership_of_properties)
