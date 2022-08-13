---
title: Eigenschaftszugriff
slug: Web/JavaScript/Reference/Operators/Property_Accessors
tags:
  - JavaScript
  - Operator
translation_of: Web/JavaScript/Reference/Operators/Property_Accessors
---
{{jsSidebar("Operators")}}

Eigenschaftszugriffe erlauben den Zugriff auf Eigenschaften eines Objekts, indem die Punktnotation oder Klammernotation benutzt wird.

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html")}}

## Syntax

    object.property
    object['property']

## Beschreibung

Man kann ein Objekt wie ein assoziatives Array (auch bekannt als Map, Dictionary, Hash, lookup table) vorstellen. Die Schlüssel im Array sind die Namen der Eigenschaften des Objekts. Es ist typisch, wenn man von Eigenschaften eines Objekts spricht, zwischen Eigenschaften und Methoden zu unterscheiden. Die Eigenschaften/Methoden-Unterscheidung ist jedoch nur eine Konvention. Eine Methode ist einfach eine Eigenschaft die aufgerufen werden kann, zum Beispiel wenn sie als Wert eine Referenz auf eine [Funktions](/de/docs/Web/JavaScript/Reference/Functions) Instanz hat.

Es gibt zwei Wege auf Eigenschaften zuzugreifen: Die Punktnotation und die Klammernotation.

### Punktnotation

```js
get = object.property;
object.property = set;
```

In diesem Quelltext muss `property` ein gültiger Bezeichner ein, d. h. eine Sequenz von alphanumerischen Zeichen inklusive Unterstrich (`_`) und Dollarzeichen (`$`) die nicht mit einer Nummer beginnen können. Zum Beispiel ist `object.$1` gültig währenddem `object.1` nicht gültig ist.

```js
document.createElement('pre');
```

Hier wird die Methode namens "createElement" von `document` erfragt und aufgerufen.

Wenn man eine Methode für ein numerisches Literal nutzt, das keinen Exponenten und keine Kommastelle besitzt, können vor dem Punkt, der vor dem Methodenaufruf steht, Whitespaces stehen, um die Interpretation des Punktes als Komma zu verhindern.

```js
77 .toExponential();
// oder
77
.toExponential();
// oder
(77).toExponential();
// oder
77..toExponential();
// oder
77.0.toExponential();
// weil 77. === 77.0, keine Zweideutigkeit
```

### Klammernotation

```js
get = object[property_name];
object[property_name] = set;
```

`property_name` ist ein String. Der String muss kein gültiger Bezeichner sein; er kann einen beliebigen Wert haben, z. B. "1foo", "!bar!" oder sogar " " (ein Leerzeichen).

```js
document['createElement']('pre');
```

Dieses macht genau dasselbe wie das vorherige Beispiel.

Ein Leerzeichen vor der Klammernotation ist erlaubt.

```js
document ['createElement']('pre');
```

### Eigenschaftensnamen

Eigenschaftsnamen müssen Strings sein. Das bedeutet dass Objekte, die kein String sind, nicht als Schlüssel in einem Objekt verwendet werden können. Jedes Objekt das keine String ist, inklusive Zahlen, wird mittels [toString ](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)in einen String umgewandelt.

```js
var object = {};
object['1'] = 'value';
console.log(object[1]);
```

Dies gibt "value" aus, weil 1 in '1' umgewandelt wird.

```js
var foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value';
console.log(object[bar]);
```

Dies gibt auch "value" aus, weil beide Objekte, foo und bar, in den gleiche String umgewandelt werden. In der SpiderMonkey JavaScript Engine ist dieser String "\['object Object']".

### Methodenbindung

Eine Methode ist nicht an ein Objekt gebunden zu dem sie gehört. Vor allem `this` ist nicht an eine Methode gebunden, d. h. `this` muss nicht unbedingt auf das Objekt verweisen das die Methode enthält. `this` wird stattdessen vom Funktionsaufruf gesetzt. Siehe auch [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) dazu.

### Hinweis zu `eval`

JavaScript-Anfänger machen oft den Fehler [eval ](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)zu nutzen wo die Klammernotation verwendet werden kann. Zum Beispiel sieht man folgende Syntax häufig in vielen Skripten.

```js
x = eval('document.forms.form_name.elements.' + strFormControl + '.value');
```

[eval](https://www.nczonline.net/blog/2013/06/25/eval-isnt-evil-just-misunderstood/) ist langsam und sollte wenn möglich vermieden werden. Außerdem würde `strFormControl` auch einen Bezeichner beinhalten müssen der für Namen und IDs von Formularelementen nicht benötigt wird. Es ist besser die Klammernotation zu verwenden.

```js
x = document.forms['form_name'].elements[strFormControl].value;
```

## Spezifikationen

| Spezifikation                                                                                    | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-property-accessors', 'Property Accessors')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-property-accessors', 'Property Accessors')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.2.1', 'Property Accessors')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1', '#sec-11.2.1', 'Property Accessors')}}                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |

## Browserkompatibilität

{{Compat("javascript.operators.property_accessors")}}

## Siehe auch

- {{jsxref("Object")}}
- {{jsxref("Object/defineProperty")}}
