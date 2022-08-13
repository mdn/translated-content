---
title: Object.create()
slug: Web/JavaScript/Reference/Global_Objects/Object/create
tags:
  - Methode(2)
  - Méthode
  - Objekt
  - Referenz
translation_of: Web/JavaScript/Reference/Global_Objects/Object/create
---
{{JSRef("Global_Objects", "Object")}}

## Summary

Die **`Object.create()`** Methode erstellt ein neues Objekt mit dem angegebenen Prototype object und ggf. zusätzlichen Eigenschaften (properties).

## Syntax

    Object.create(proto[, propertiesObject])

### Parameter

- `proto`
  - : Das Objekt, welches als Prototype object des zu erstellenden Objekts verwendet wird.
- `propertiesObject`
  - : Optional. Falls angegeben und nicht {{jsxref("Global_Objects/undefined", "undefined")}}, ein Objekt dessen aufzählbare eigene Eigenschaften (properties, d.h.: Eigenschaften, die für das Objekt selbst definiert wurden und nicht in der prototype chain) als Eigenschaften dem neu erstellten Objekt hinzugefügt werden. Die Eigenschaften entsprechen dem zweiten Parameter von {{jsxref("Object.defineProperties()")}}.

### Rückgabewert

Ein neu erzeugtes Objekt mit dem angegebenen Prototype object und den angebenenen Eigenschaften (properties).

### Ausnahmen

Eine {{jsxref("Global_Objects/TypeError", "TypeError")}}-Ausnahme wird ausgelöst, wenn der `proto`-Parameter weder {{jsxref("Global_Objects/null", "null")}} noch ein Objekt ist.

## Beispiele

### Beispiel: Klassenbasierte Vererbung mit `Object.create()`

Im folgenden sehen Sie ein Beispiel wie man `Object.create()` verwenden kann, um klassenbasierte Vererbung zu realisieren. JavaScript unterstützt nur einzelne Vererbung.

```js
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle? ' + (rect instanceof Rectangle)); // true
console.log('Is rect an instance of Shape? ' + (rect instanceof Shape)); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

Wenn Sie von mehreren Objekten erben wollen, können mixins verwendet werden.

```js
function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

MyClass.prototype = Object.create(SuperClass.prototype); // inherit
mixin(MyClass.prototype, OtherSuperClass.prototype); // mixin

MyClass.prototype.myMethod = function() {
  // do a thing
};
```

Die `mixin` Funktion kopiert die Funktionen des superclass Prototypen in den subclass Prototyp. Die mixin Funktion muss vom Benutzer bereitgestellt werden. Ein Beispiel für eine mixin-ähnliche Funktion ist [jQuery.extend()](http://api.jquery.com/jQuery.extend/).

### Beispiel: Benutzung des `propertiesObject` Parameters von `Object.create()`

```js
var o;

// create an object with null as prototype
o = Object.create(null);


o = {};
// is equivalent to:
o = Object.create(Object.prototype);


// Example where we create an object with a couple of sample properties.
// (Note that the second parameter maps keys to *property descriptors*.)
o = Object.create(Object.prototype, {
  // foo is a regular 'value property'
  foo: { writable: true, configurable: true, value: 'hello' },
  // bar is a getter-and-setter (accessor) property
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) { console.log('Setting `o.bar` to', value); }
/* with ES5 Accessors our code can look like this
    get function() { return 10; },
    set function(value) { console.log('setting `o.bar` to', value); } */
  }
});


function Constructor() {}
o = new Constructor();
// is equivalent to:
o = Object.create(Constructor.prototype);
// Of course, if there is actual initialization code in the
// Constructor function, the Object.create() cannot reflect it


// create a new object whose prototype is a new, empty object
// and a adding single property 'p', with value 42
o = Object.create({}, { p: { value: 42 } });

// by default properties ARE NOT writable, enumerable or configurable:
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

// to specify an ES3 property
o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});
```

## Polyfill

Dieser Polyfill deckt den Hauptanwendungsfall, die Erzeugung eines neuen Objektes für das ein Prototyp ausgewählt wurde, ab.

Bitte beachten Sie, dass dieses Polyfill im Gegensatz zum echten ES5 `Object.create` den Einsatz von `null` als Prototyp-Parameter aufgrund einer Einschränkung von ECMAScript vor Version 5 nicht unterstützt.

```js
if (typeof Object.create != 'function') {
  Object.create = (function(undefined) {
    var Temp = function() {};
    return function (prototype, propertiesObject) {
      if(prototype !== Object(prototype) && prototype !== null) {
        throw TypeError('Argument must be an object, or null');
      }
      Temp.prototype = prototype || {};
      if (propertiesObject !== undefined) {
        Object.defineProperties(Temp.prototype, propertiesObject);
      }
      var result = new Temp();
      Temp.prototype = null;
      // to imitate the case of Object.create(null)
      if(prototype === null) {
         result.__proto__ = null;
      }
      return result;
    };
  })();
}
```

## Spezifikationen

| Specification                                                                | Status                   | Comment                                              |
| ---------------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.5', 'Object.create')}}     | {{Spec2('ES5.1')}} | Initial definition. Implemented in JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.create', 'Object.create')}} | {{Spec2('ES6')}}     |                                                      |

## Browser Kompatibilität

{{Compat}}

Basierend auf [Kangax's compat table](http://kangax.github.com/es5-compat-table/).

## Zusätzliches Material

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- John Resig's post on [getPrototypeOf()](http://ejohn.org/blog/objectgetprototypeof/)
