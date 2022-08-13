---
title: Object.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Object/toSource
---
{{JSRef}} {{non-standard_header}}

Die **`toSource()`** Methode liefert einen String der den Quellcode des Objekts representiert.

    Object.toSource();
    obj.toSource();

### Zurückgelieferter Wert

Ein String der den Quellcode des Objekts representiert.

## Beschreibung

Die `toSource()` Methode liefer die folgenden Werte:

Für das eingebaute {{jsxref("Object")}} Objekt, `liefert toSource() den folgenden String, welcher angibt, dass der Quellcode nicht verfügbar ist.`

- ```js
  function Object() {
      [native code]
  }
  ```

- Für instanzen von {{jsxref("Object")}}, liefert `toSource()` einen String der den Sourcecode representiert.

`toSource()` kann während der Entwicklung aufgerufen werden um die Inhalte eines Objekts zu inspizieren.

### Überschreiben der toSource() Methode

Es ist sicher die toSource() Methode zu überschreiben. Zum Beispiel:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.toSource = function Person_toSource() {
  return 'new Person(' + uneval(this.name) + ')';
};

console.log(new Person('Joe').toSource()); // ---> new Person("Joe")
```

### Eingebaute toSource() Methoden

Jeder Kern-JavaScript Typ hat seine eigene t`oSource()` Methode. Diese sind:

- {{jsxref("Array.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Array")}} Objekt.
- {{jsxref("Boolean.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Boolean")}} Objekt.
- {{jsxref("Date.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Date")}} Objekt.
- {{jsxref("Function.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Function")}} Objekt.
- {{jsxref("Number.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Number")}} Objekt.
- {{jsxref("RegExp.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("RegExp")}} Objekt.
- {{jsxref("SIMD.toSource()", "SIMD.%type%.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("SIMD")}} Objekt.
- {{jsxref("String.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("String")}} Objekt.
- {{jsxref("Symbol.prototype.toSource()")}} {{non-standard_inline}} — {{jsxref("Symbol")}} Objekt.
- `Math.toSource()` — Liefert den String "Math".

### Limits bei zyklischen Objekten

Im Falle, dass Objekte auf sich selbst referenzieren, z.B.: eine zyklisch verbundene Liste oder ein Baum der beide wege durchquert, erstellt `toSource()` nicht eine neue Selbst-Referenz. Dies passiert seit Firefox 24. Zum Beispiel:

```js
var obj1 = {};
var obj2 = { a: obj1 };
obj1.b = obj2;

console.log('Cyclical: ' + (obj1.b.a == obj1));

var objSource = obj1.toSource(); // returns "({b:{a:{}}})"

obj1 = eval(objSource);

console.log('Cyclical: ' + (obj1.b.a == obj1));
```

Wenn eine zyklische Struktur existiert und `toSource()` benötigt wird, muss das Objekt eine überschriebene toSource() Methode besitzen. Entweder durch benützen einer Referenz zum Construktor oder einer anonymen Funktion.

## Beispiele

### `Benutzen von toSource()`

Der folgende Code defniert den "Dog" Objekt Typ und kreiert "theDog", welches ein Objekt des Typs "Dog" ist:

```js
function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}

theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
```

Durch aufrufen der `toSource()` Methode von "`theDog"` liefert die JavaScript Quelle, welche das Objekt definiert.

```js
theDog.toSource();
// returns ({name:"Gabby", breed:"Lab", color:"chocolate", sex:"female"})
```

## Spezifikationen

Kein Teil eines Standards. Implementiert seit JavaScript 1.3.

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
