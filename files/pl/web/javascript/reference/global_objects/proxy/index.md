---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy
original_slug: Web/JavaScript/Referencje/Obiekty/Proxy
---
{{JSRef}}

Obiekt **Proxy** jest używany w celu definiowania specyficznego zachowania dla podstawowych operacji (n.p. wyszukiwanie atrybutu, przypisanie, wyliczanie, wywołanie funkcji, etc).

## Terminologia

- [handler](/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler)
  - : Zastępczy obiekt zawierający pułapki (traps).
- traps
  - : Metody zapewniające dostęp do atrybutów. Pojęcie to jest analogiczne do pułapek w systemie operacyjnym.
- target
  - : Obiekt wirtualizowany przez proxy. Często jest używany aby magazyować dane obiektu proxy. Niezmienniki (wartości które pozostają niezmienione) dotyczące nierozszerzalności obiektu lub niekonfigurowalnnych atrybutów są weryfikowane w oparciu o **target**.

## Składnia

    var p = new Proxy(target, handler);

### Parametry

- `target`
  - : Docelowy obiekt (może być obiektem dowolnego typu, włącznie z wbudowanymi tablicami, funkcjami, a nawet innyi obiektami proxy) przeznaczony do opakowania przez `Proxy`.
- `handler`
  - : Obiekt obsługujący którego atrybuty są funkcjami definiującymi zachowanie proxy podczas wykonania na nim operacji.

## Metody

- {{jsxref("Proxy.revocable()")}}
  - : Tworzy odwracalny obiekt `Proxy`.

## Metody obiektu obsługującego

Obiekt obsługujący jest obiektem zastępczym zawierającym pułapki dla obieku `Proxy`.

{{page('/pl/docs/Web/JavaScript/Referencje/Obiekty/Proxy/handler', 'Metody') }}

## Przykłady

### Podstawowy przykład

W tym prostym przykładzie liczba `37` jest zwracana jako domyślna wartość kiedy nazwa atrybutu nie istnieje w obiekcie. W tym celu użyty jest handler [`get`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get).

```js
var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
```

### Puste proxy przekazujące

W tym przykładzie używamy wbudowanego obiektu JavaScript do którego proxy przekaże wszystkie zaaplikowane na nim operacje.

```js
var target = {};
var p = new Proxy(target, {});

p.a = 37; // operacja przekazana do obiektu target

console.log(target.a); // 37. Operacja została prawidłowo przekazana
```

Zwróć uwagę, że ten przykład działa dla obiektów JavaScript jednak nie sprawdzi się w przypadku obiektów przeglądarki takich jak elementy DOM. [Sprawdź jedno rozwiązanie](/pl/docs/).

### Walidacja

Używając `Proxy`, łatwo możesz zwalidować wartości przekazywane do obiektu. Poniższy przykład używa metody obsługującej [`set`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set).

```js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // domyślnym zachowaniem jest zapisanie wartości
    obj[prop] = value;

    // oznacza pomyślne wykonanie
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // rzuca wyjątek
person.age = 300; // rzuca wyjątek
```

### Rozszerzanie konstruktora

Funkcja proxy może w łatwy sposób rozszerzyć konstruktor innym konstruktorem. W tym przykładzie użyto funkcje obsługujące [`construct`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct) oraz [`apply`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply).

```js
function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, 'constructor'
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, 'constructor', descriptor);
  return proxy;
}

var Person = function(name) {
  this.name = name;
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.sex = 'M';

var Peter = new Boy('Peter', 13);
console.log(Peter.sex);  // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age);  // 13
```

### Manipulacja węzłami DOM

Czasami konieczne jest przełączenie atrybutu lub nazwy klasy dwóch innych elementów. Poniższy przykład pokazuje wykonanie funkcją obsługującą [`set`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set).

```js
let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // The default behavior to store the value
    obj[prop] = newval;

    // Indicate success
    return true;
  }
});

let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'
```

### Korekcja wartości i dodatkowych atrybutów

Obiekt proxy `products` wylicza przekazaną wartość i konwertuje to tablicy w razie potrzeby. Obiekt dodatkowo obsługuje dodatkowy atrybut `latestBrowser` zarówno jako getter i setter.

```js
let products = new Proxy({
  browsers: ['Internet Explorer', 'Netscape']
},
{
  get: function(obj, prop) {
    // An extra property
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }

    // The default behavior to return the value
    return obj[prop];
  },
  set: function(obj, prop, value) {
    // An extra property
    if (prop === 'latestBrowser') {
      obj.browsers.push(value);
      return true;
    }

    // Convert the value if it is not an array
    if (typeof value === 'string') {
      value = [value];
    }

    // The default behavior to store the value
    obj[prop] = value;

    // Indicate success
    return true;
  }
});

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = 'Firefox'; // przekazano string (przez pomyłkę)
console.log(products.browsers); // ['Firefox'] <- nie ma problemu, wartość jest typu array

products.latestBrowser = 'Chrome';
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'
```

### Wyszukiwanie elementu tablicy po jego właściwości

Poniższe proxy rozszerza tablicę o różne użyteczne funkcjonalności. Jak widać, można elastycznie "definiować" właściwości bez użycia [`Object.defineProperties`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties). Ten przykład może być użyty aby znaleźć wiersz tabeli po jego komórce. W takim przypadku, celem będzie [`table.rows`](/pl/docs/DOM/table.rows).

```js
let products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get: function(obj, prop) {
    // domyślnym zachowaniem jest zwrócenie wartości; prop jest zwykle typu integer
    if (prop in obj) {
      return obj[prop];
    }

    // zwróć liczbę produktów; alias dla products.length
    if (prop === 'number') {
      return obj.length;
    }

    let result, types = {};

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

    // znajdź product po nazwie
    if (result) {
      return result;
    }

    // znajdź produkty po typie
    if (prop in types) {
      return types[prop];
    }

    // zwróć typy produktów
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3
```

### Pełna lista przykładów `pułapek`

W celu stworzenia pełnej listy przykładów `pułapek`, w celach dydaktycznych, spróbujemy zastosować proxy na*nie natywnym obiekcie* który się szczególnie nadaje do tego typu operacji: globalny obiekt `docCookies` stworzony przez ["mały framework" opublikowany na stronie `document.cookie`](/pl/docs/Web/API/Document/cookie/Simple_document.cookie_framework "https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support").

```js
/*
  var docCookies = ... pobranie obiektu "docCookies" tutaj:
  https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
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
    if (oDesc && 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      value: vValue,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  },
});

/* Cookies test */

console.log(docCookies.my_cookie1 = 'First value');
console.log(docCookies.getItem('my_cookie1'));

docCookies.setItem('my_cookie1', 'Changed value');
console.log(docCookies.my_cookie1);
```

## Specyfikacje

| Specification                                                            | Status                       | Comment             |
| ------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ES2016', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ES2016')}}     |                     |
| {{SpecName('ES2017', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ES2017')}}     |                     |
| {{SpecName('ESDraft', '#sec-proxy-objects', 'Proxy')}} | {{Spec2('ESDraft')}} |                     |

## Kompatybilność przeglądarek

{{Compat("javascript.builtins.Proxy", 2)}}

## Zobacz również

- ["Proxies are awesome" Brendan Eich presentation at JSConf](https://www.youtube.com/watch?v=sClk6aB_CPk) ([slides](http://www.slideshare.net/BrendanEich/metaprog-5303821))
- [ECMAScript Harmony Proxy proposal page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies) and [ECMAScript Harmony proxy semantics page](http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics)
- [Tutorial on proxies](http://soft.vub.ac.be/~tvcutsem/proxies/)
- [SpiderMonkey specific Old Proxy API](/pl/docs/JavaScript/Old_Proxy_API)
- {{jsxref("Object.watch()")}} is a non-standard feature but has been supported in Gecko for a long time.

## Licensing note

Some content (text, examples) in this page has been copied or adapted from the [ECMAScript wiki](http://wiki.ecmascript.org/doku.php) which content is licensed [CC 2.0 BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/2.0/).
