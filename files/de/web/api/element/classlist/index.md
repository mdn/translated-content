---
title: Element.classList
slug: Web/API/Element/classList
translation_of: Web/API/Element/classList
---
{{APIRef("DOM")}}

Das **`Element.classList`** ist eine `read-only` Eigenschaft, welche die aktuelle {{domxref("DOMTokenList")}} Sammlung der Klassen-Attribute des Elements zurückgibt.

Die Benutzung von `classList` ist eine angenehme Alternative zum Ansprechen der Klassen eines Elements als die leerzeichengetrennte Zeichenfolge via {{domxref("element.className")}}.

## Syntax

    const elementClasses = elementNodeReference.classList;

_elementClasses_ ist eine [DOMTokenList](/de/docs/DOM/DOMTokenList), welche die Klassen-Attribute der _elementNodeReference_ repräsentiert. Wenn das Klassen-Attribut nicht gesetzt wurde oder _elementClasses.length_ leer ist, wird 0 zurückgegeben. `Element.classList` selbst ist nur lesbar (read-only), obgleich es modifiziert werden kann, indem die Methoden `add()` und `remove()` angewendet werden.

## Methoden

- add( String \[, String \[, ...]] )
  - : Fügt angegebene Klassenwerte hinzu. Wenn diese Klassen bereits im Attribut des Elements vorhanden sind, werden sie ignoriert.
- remove( String \[, String \[, ...]] )
  - : Ausgewählte Klassenwerte entfernen.
    **Bemerkung:** Entfernen eines nicht vorhandenen Klassenwertes wirft keinen Fehler.
- **item** ( Number )
  - : Rückgabewert nach Index in der Sammlung.
- **toggle** ( String \[, force] )

  - : Wenn nur ein Argument vorhanden ist: Klassenwert umschalten; d.h. wenn die Klasse existiert, dann entfernt es diese und gibt `false` zurück, wenn nicht, dann fügt es diese hinzu und gibt `true` zurück.

    Wenn ein zweites Argument vorhanden ist: Wenn das zweite Argument auf `true` basiert, fügt es den angegebenen Klassenwert hinzu. Wenn es `false` auswertet, entfernt es ihn.

- contains( String )
  - : Überprüft, ob der angegebene Klassenwert im Klassenattribut des Elements vorhanden ist.
- replace( oldClass, newClass )
  - : Ersetzt einen vorhandenen Klassenwert.

## Beispiele

```js
const div = document.createElement('div');
div.className = 'foo';

// Status zum Beginn: <div class="foo"></div>
console.log(div.outerHTML);

// classList-API zum Entfernen und Ergänzen von Klassen nutzen
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// Wenn visible gesetzt ist entferne es, sonst füge es hinzu
div.classList.toggle("visible");

// Hinzufügen/Enfernen von visible, abhängig von der Bedingung, ob i kleiner 10 ist
div.classList.toggle("visible", i < 10 );

console.log(div.classList.contains("foo"));

// Mehrere Klassen hinzufügen / entfernen
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// Mehrere Klassen mittels Spread-Syntax hinzufügen / entfernen
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// Klasse "foo" durch "bar" ersetzen
div.classList.replace("foo", "bar");
```

> **Note:** Firefox-Versionen vor 26 setzen nicht die Nutzung die Nutzung von mehreren Argumenten in den Methoden add/remove/toggle um. Siehe <https://bugzilla.mozilla.org/show_bug.cgi?id=814014>

## Polyfill

```js
// Source: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
/**
 * Element.prototype.classList for IE8/9, Safari.
 * @author    Kerem Güneş <k-gun@mail.com>
 * @copyright Released under the MIT License <https://opensource.org/licenses/MIT>
 * @version   1.2
 * @see       https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 */
;(function() {
    // Helpers.
    var trim = function(s) {
            return s.replace(/^\s+|\s+$/g, '');
        },
        regExp = function(name) {
            return new RegExp('(^|\\s+)'+ name +'(\\s+|$)');
        },
        forEach = function(list, fn, scope) {
            for (var i = 0; i < list.length; i++) {
                fn.call(scope, list[i]);
            }
        };

    // Class list object with basic methods.
    function ClassList(element) {
        this.element = element;
    }

    ClassList.prototype = {
        add: function() {
            forEach(arguments, function(name) {
                if (!this.contains(name)) {
                    this.element.className = trim(this.element.className +' '+ name);
                }
            }, this);
        },
        remove: function() {
            forEach(arguments, function(name) {
                this.element.className = trim(this.element.className.replace(regExp(name), ' '));
            }, this);
        },
        toggle: function(name) {
            return this.contains(name) ? (this.remove(name), false) : (this.add(name), true);
        },
        contains: function(name) {
            return regExp(name).test(this.element.className);
        },
        item: function(i) {
            return this.element.className.split(/\s+/)[i] || null;
        },
        // bonus
        replace: function(oldName, newName) {
            this.remove(oldName), this.add(newName);
        }
    };

    // IE8/9, Safari
    // Remove this if statements to override native classList.
    if (!('classList' in Element.prototype)) {
    // Use this if statement to override native classList that does not have for example replace() method.
    // See browser compatibility: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Browser_compatibility.
    // if (!('classList' in Element.prototype) ||
    //     !('classList' in Element.prototype && Element.prototype.classList.replace)) {
        Object.defineProperty(Element.prototype, 'classList', {
            get: function() {
                return new ClassList(this);
            }
        });
    }

    // For others replace() support.
    if (window.DOMTokenList && !DOMTokenList.prototype.replace) {
        DOMTokenList.prototype.replace = ClassList.prototype.replace;
    }
})();
```

## Spezifikationen

| Spezifikation                                                                                        | Status                           | Kommentar                                                                                     |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "dom.html#dom-classlist", "Element.classList")}} | {{Spec2("HTML WHATWG")}} | Note within the HTML specification related to the {{htmlattrxref("class")}} attribute. |
| {{SpecName("DOM WHATWG", "#dom-element-classlist", "Element.classList")}}     | {{Spec2("DOM WHATWG")}} | Initial definition                                                                            |
| {{SpecName("DOM4", "#dom-element-classlist", "Element.classList")}}             | {{Spec2("DOM4")}}         |                                                                                               |

## Browserkompatibilität

{{Compat}}

\[1] Not supported for SVG elements. See [a report at Microsoft about that](https://connect.microsoft.com/IE/feedback/details/1046039/classlist-not-working-on-svg-elements).
\[2] Internet Explorer never implemented this. See [a report at Microsoft about that](https://connect.microsoft.com/IE/feedback/details/878564/element-classlist-toggle-does-not-support-second-parameter).

## Siehe auch

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}}
