---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
---

{{JSRef}}

O objeto **Proxy** é usado para definir comportamentos customizados para operações fundamentais (por exemplo, pesquisa de propriedade, atribuição, enumeração, invocação de função, etc.).

## Terminologia

- [handler](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)
  - : Objeto marcador que contém _traps_.
- traps
  - : Métodos que fornecem acesso à propriedade. Isto é análogo ao conceito de _traps_ (armadilhas) em sistemas operacionais
- target
  - : Objeto que o proxy virtualiza. É frequentemente utilizado como back-end de armazenamento para o proxy. Os invariantes (semânticas que permanecem inalterados) em relação à não-extensibilidade do objeto ou propriedades não-configuráveis são verificados em relação ao _target_.

## Sintaxe

```
var p = new Proxy(target, handler);
```

### Parâmetros

- `target`
  - : Um objeto target (pode ser qualquer tipo de objeto, incluindo um array, uma função ou até mesmo outro _Proxy_) a ser envolvido com o `Proxy`.
- `handler`
  - : Um objeto cujas propriedades são funções que definem o comportamento do proxy quando uma operação é realizada sobre ele.

## Métodos

- {{jsxref("Proxy.revocable()")}}
  - : Cria um objeto `Proxy` revogável.

## Métodos para manipular objetos

O objeto manipulado é um objeto reservado que contém traps para `Proxy.`

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler', 'Methods') }}

## Exemplos

### Exemplo básico

Neste exemplo simples, o número `37` é retornado como o valor padrão quando o nome da propriedade não está no objeto. Usa-se o manipulador [`get`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get).

```js
var handler = {
  get: function (target, name) {
    return name in target ? target[name] : 37;
  },
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37
```

### Encaminhamento de Proxy

Neste exemplo, estamos usando um objeto JavaScript nativo ao qual nosso proxy irá encaminhar todas as operações que são aplicadas para ele.

```js
var target = {};
var p = new Proxy(target, {});

p.a = 37; // Operação encaminhada para o alvo

console.log(target.a); // 37. A operação foi devidamente encaminhada
```

### Validação

Com um `Proxy`, você pode validar facilmente o valor passado para um objeto. Este exemplo usa o manipulador [`set`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set).

```js
let validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    //O comportamento padrão para armazenar o valor
    obj[prop] = value;

    // Indique o sucesso
    return true;
  },
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // Lança uma exceção
person.age = 300; // Lança uma exceção
```

### Construtor de extensão

Um proxy de função poderia facilmente estender um construtor com um novo construtor. Este exemplo usa os manipuladores [`construct`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct) e [`apply`](/pt-BR/docs/Web/JavaScript/Referência/Global_Objects/Proxy/handler/apply).

```js
function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,
    "constructor",
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function (target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function (target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    },
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor);
  return proxy;
}

var Person = function (name) {
  this.name = name;
};

var Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.sex); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13
```

### DOM manipulação de nós

Às vezes, você deseja alternar o atributo ou o nome da classe de dois elementos diferentes. Veja como usar o manipulador [`set`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set).

```js
let view = new Proxy(
  {
    selected: null,
  },
  {
    set: function (obj, prop, newval) {
      let oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // O comportamento para armazenar o valor padrão
      obj[prop] = newval;

      // Indica o sucesso
      return true;
    },
  },
);

let i1 = (view.selected = document.getElementById("item-1"));
console.log(i1.getAttribute("aria-selected")); // 'true'

let i2 = (view.selected = document.getElementById("item-2"));
console.log(i1.getAttribute("aria-selected")); // 'false'
console.log(i2.getAttribute("aria-selected")); // 'true'
```

### Correção de valor e uma propriedade extra

O objeto de proxy `produtos` avalia o valor passado e converte-o em uma matriz, se necessário. O objeto também suporta uma propriedade adicional chamada `latestBrowser` tanto em getters como em setters.

```js
let products = new Proxy(
  {
    browsers: ["Internet Explorer", "Netscape"],
  },
  {
    get: function (obj, prop) {
      // An extra property
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      //  O comportamento para armazenar o valor padrão
      return obj[prop];
    },
    set: function (obj, prop, value) {
      // An extra property
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return true;
      }

      // Converta o valor se não for uma matriz
      if (typeof value === "string") {
        value = [value];
      }

      //  O comportamento para armazenar o valor padrão
      obj[prop] = value;

      // Indicate success
      return true;
    },
  },
);

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = "Firefox"; // pass a string (by mistake)
console.log(products.browsers); // ['Firefox'] <- no problem, the value is an array

products.latestBrowser = "Chrome";
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
```

### Encontrando um item de objeto em uma matriz por propriedade

Esta proxy estende uma matriz com alguns recursos de utilidade. Como você vê, você pode "definir" propriedades flexíveis sem usar [`Object.defineProperties`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties). Este exemplo pode ser adaptado para encontrar uma linha de tabela por sua célula. Nesse caso, o alvo será [`table.rows`](/pt-BR/docs/DOM/table.rows)

```js
let products = new Proxy(
  [
    { name: "Firefox", type: "browser" },
    { name: "SeaMonkey", type: "browser" },
    { name: "Thunderbird", type: "mailer" },
  ],
  {
    get: function (obj, prop) {
      // O comportamento para retornar o valor; Prop geralmente é um inteiro
      if (prop in obj) {
        return obj[prop];
      }

      // Obter o número de produtos; Com products.length
      if (prop === "number") {
        return obj.length;
      }

      let result,
        types = {};

      for (let product of obj) {
        if (product.name === prop) {
          result = product;
        }
        if (types[product.type]) {
          types[product.type].push(product);
        } else {
          types[product.type] = [product];
        }
      }

      // Obtém um produto por nome
      if (result) {
        return result;
      }

      // Obtém produtos por tipo
      if (prop in types) {
        return types[prop];
      }

      // Obtém tipos de produto
      if (prop === "types") {
        return Object.keys(types);
      }

      return undefined;
    },
  },
);

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products["Firefox"]); // { name: 'Firefox', type: 'browser' }
console.log(products["Chrome"]); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### Um exemplo completo de lista de `traps`

Agora, para criar uma lista completa de amostra de `traps`, para fins didáticos, tentaremos propor um objeto _não nativo_ que seja particularmente adequado para este tipo de operação: o objeto global `docCookies` criado por [a "little framework" publicada na página`document.cookie`](/pt-BR/docs/Web/API/Document/cookie/Simple_document.cookie_framework).

```js
/*
  var docCookies = ... get the "docCookies" object here:
  https://developer.mozilla.org/pt-BR/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) {
      return false;
    }
    return oTarget.removeItem(sKey);
  },
  enumerate: function (oTarget, sKey) {
    return oTarget.keys();
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc && "value" in oDesc) {
      oTarget.setItem(sKey, oDesc.value);
    }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue
      ? {
          value: vValue,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* Teste Cookies */

console.log((docCookies.my_cookie1 = "First value"));
console.log(docCookies.getItem("my_cookie1"));

docCookies.setItem("my_cookie1", "Changed value");
console.log(docCookies.my_cookie1);
```

## Especificações

| Especificações                                         | Status               | Comentário         |
| ------------------------------------------------------ | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-proxy-objects', 'Proxy')}}  | {{Spec2('ES2015')}}  | Definição Inicial. |
| {{SpecName('ESDraft', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ESDraft')}} | ?                  |

## Navegadores Compatíveis

{{Compat("javascript.builtins.Proxy", 2)}}

## Notas Especificas Gecko

- No momento, `Object.getPrototypeOf(proxy)` retorna incondicionalmente um `Object.getPrototypeOf(target)`, porque a trap ES2015 getPrototypeOf não foi implementada ([Erro do Firefox 795904](https://bugzil.la/795904), [Erro do Firefox 888969](https://bugzil.la/888969)).
- `Array.isArray(proxy)` retorna incondicionalmente um `Array.isArray(target)` ([Erro do Firefox 1096753](https://bugzil.la/1096753), [Erro do Firefox 1111785](https://bugzil.la/1111785)).
- `Object.prototype.toString.call(proxy)` retorna incondicionalmente `Object.prototype.toString.call(target)`, porque ES2015 Symbol.toStringTag não foi implementado ([Erro do Firefox 1114580](https://bugzil.la/1114580)).

## Veja também

- ["Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([slides](http://www.slideshare.net/BrendanEich/metaprog-5303821))
- [ECMAScript Harmony Proxy proposal page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) e [ECMAScript página de semântica de proxy Harmony](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [Tutorial em proxies](http://soft.vub.ac.be/~tvcutsem/proxies/)
- [SpiderMonkey specific Old Proxy API](/pt-BR/docs/JavaScript/Old_Proxy_API)
- {{jsxref("Object.watch()")}} É um recurso não padrão, mas foi suportado no Gecko há muito tempo.

## `Nota de licença`

Alguns conteúdos (texto, exemplos) nesta página foram copiados ou adaptados do [ECMAScript wiki](http://wiki.ecmascript.org/doku.php) que contém à licença de conteúdo [CC 2.0 BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/2.0/).
