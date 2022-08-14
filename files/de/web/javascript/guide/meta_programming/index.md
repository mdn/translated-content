---
title: Meta programming
slug: Web/JavaScript/Guide/Meta_programming
tags:
  - Guide
  - JavaScript
  - Proxy
  - Reflect
  - l10n:priority
translation_of: Web/JavaScript/Guide/Meta_programming
---
{{jsSidebar("JavaScript Guide")}} {{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}

Beginnend mit ECMAScript 2015 hat JavaScript Unterstützung für {{jsxref("Proxy")}} and {{jsxref("Reflect")}} Objekte erhalten, welche das Abfangen und Definieren von benutzerdefinierten Verhaltens für grundlegenden Sprachoperation erlaubt (z. B. Eigenschaftensuche, Zuweisung, Aufzählung, Funktionsaufruf usw.). Mit der Hilfe dieser beiden Objekte ist es möglich auf der Metaebene von JavaScript zu programmieren.

## Proxies

Eingeführt in ECMAScript 6 erlaubt das {{jsxref("Proxy")}} Objekt das Abfangen und Definieren von benutzerdefinierten Verhaltens für bestimmte Operationen. Zum Beispiel um die Eigenschaft eines Objektes zu erhalten:

```js
var handler = {
  get: function(target, name) {
    return name in target ? target[name] : 42;
  }
};

var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

Das `Proxy` Objekt definiert einen _Ziel_ (`target`) (hier ein leeres Objekt) und einen _handler_ (Verhaltens) Objekt in dem ein `get` _Trap_ implementiert ist. In diesem Beispiel wird kein `undefined` zurückgegeben, wenn Eigenschaften nicht definiert sind. Stattdessen wird die Zahl 42 zurückgegeben.

Weitere Beispiele sind auf der {{jsxref("Proxy")}} Referenzseite verfügbar.

### Terminologie

Die folgenden Terme werden im Zusammenhang mit der Funktionalität von Proxies verwendet.

- {{jsxref("Global_Objects/Proxy/handler","Handler","","true")}}
  - : Platzhalterobjekt, welches Traps enthält.
- Traps
  - : Die Methoden, die Zugriff auf Eigenschaften unterstützen. Diese sind analog zu Traps in Betriebssystemen.
- Ziel
  - : Objekt, welches vom Proxy virtualisiert wird. Es wird häufig als Speicher-Backend für den Proxy benutzt. Invarianten (Semantik, die unverändert bleiben) bezüglich nicht erweiterbarer Objekteigenschaften oder nicht konfigurierbarer Eigenschaften werden gegen das Ziel verifiziert.
- Invarianten
  - : Semantiken, die bei der Implementierung von benutzerdefinierten Operationen unverändert bleiben, werden als Invarianten bezeichnet. Wenn Sie gegen die Invarianten eines Handlers verstoßen, wird ein {{jsxref("TypeError")}} erzeugt.

## Handlers und Traps

Die Folgende Tabelle fasst die verfügbaren Traps von `Proxy` Objekten zusammen. Siehe auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler) für detailliertere Erklärungen und Beispiele.

<table class="standard-table">
  <thead>
    <tr>
      <th>Handler / Trap</th>
      <th>Interceptions</th>
      <th>Invarianten</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
      <td>
        <ul>
          <li>
            Die <code>getPrototypeOf</code> Methode muss ein Objekt or
            <code>null</code> zurückgeben.
          </li>
          <li>
            Wenn <code>target</code> nicht erweiterbar ist, muss die
            <code>Object.getPrototypeOf(proxy)</code> Methode das gleiche
            zurückgeben wie <code>Object.getPrototypeOf(target)</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
      <td>
        Wenn <code>target</code> nicht erweiterbar ist, muss der<code>
          prototype</code
        >
        Parameter der gleiche Wert sein wie
        <code>Object.getPrototypeOf(target)</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
      <td>
        <code>Object.isExtensible(proxy)</code> muss den gleichen Wert wie
        <code>Object.isExtensible(target)</code> zurückgeben.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
      <td>
        <code>Object.preventExtensions(proxy)</code> gibt nur
        <code>true</code> zurück, wenn <code>Object.isExtensible(proxy)</code>
        <code>false</code> ist.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getOwnPropertyDescriptor</code> muss ein Objekt oder
            <code>undefined</code> zurückgeben.
          </li>
          <li>
            Eine Eigenschaft kann nicht als nichtexistent erkannt werden, wenn
            sie als nicht konfigurierbare Eigenschaft des Zielobjektes
            existiert.
          </li>
          <li>
            Eine Eigenschaft kann nicht als nichtexistent erkannt werden, wenn
            sie als Eigenschaft des Zielobjektes existiert und das Zielobjekt
            nicht erweiterbar ist.
          </li>
          <li>
            Eine Eigenschaft kann nicht als existent erkannt werden, wenn sie
            nicht als Eigenschaft des Zielobjektes existiert und das Zielobjekt
            nicht erweiterbar ist.
          </li>
          <li>
            Eine Eigenschaft kann nicht als nicht konfigurierbar erkannt werden,
            wenn sie nicht als Eigenschaft des Zielobjektes existiert oder wenn
            sie als konfigurierbare Eigenschaft des Zielobjekt existiert.
          </li>
          <li>
            Das Ergebnis von
            <code>Object.getOwnPropertyDescriptor(target)</code> kann dem
            Zielobjekt mit <code>Object.defineProperty</code> übergeben werden
            ohne, dass ein Fehler erzeugt wird.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
      <td>
        <ul>
          <li>
            Eine Eigenschaft kann nicht hinzugefügt werden, wenn das Zielobjekt
            nicht erweiterbar ist.
          </li>
          <li>
            Eine Eigenschaft kann nicht hinzugefügt werden oder zu nicht
            konfigurierbar geändert werden, wenn es nicht als nicht
            konfigurierbares Eigenschaft im Zielobjekt existiert.
          </li>
          <li>
            Eine Eigenschaft darf nicht nicht konfigurierbar sein, wenn die
            zugehörige konfigurierbare Eigenschaft im Zielobjekt existiert.
          </li>
          <li>
            Wenn eine Eigenschaft eine zugehörige Eigenschaft im Zielobjekt hat,
            so wird
            <code>Object.defineProperty(target, prop, descriptor)</code> keinen
            Fehler erzeugen.
          </li>
          <li>
            Im Strict Mode, wird ein falscher Rückgabewert des
            <code>defineProperty</code> Handler einen
            {{jsxref("TypeError")}} Erzeugen.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}
      </td>
      <td>
        Eigenschaftsabfrage: <code>foo in proxy</code><br />Vererbte
        Eigenschaftsabfrage: <code>foo in Object.create(proxy)</code
        ><br />{{jsxref("Reflect.has()")}}
      </td>
      <td>
        <ul>
          <li>
            Eine Eigenschaft kan nicht als nichtexistent erkannt werden, wenn
            sie als nicht konfigurierbare Eigenschaft im Zielobjekt existiert.
          </li>
          <li>
            Eine Eigenschaft kan nicht als nichtexistent erkannt werden, wenn
            sie als Eigenschaft im Zielobjekt existiert und das Zielobjekt nicht
            erweiterbar ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}
      </td>
      <td>
        Eigenschaftszugriff: <code>proxy[foo]</code>and <code>proxy.bar</code
        ><br />Vererbter Eigenschaftszugriff:
        <code>Object.create(proxy)[foo]</code
        ><br />{{jsxref("Reflect.get()")}}
      </td>
      <td>
        <ul>
          <li>
            Der Wert, der für eine Eigenschaft zurückgegeben wird, muss der
            gleiche sein wie der in der zugehörigen Eigenschaft des Zielobjekts,
            wenn die Eigenschaft im Zielobjekt nicht überschreibbar und nicht
            konfigurierbar ist.
          </li>
          <li>
            Der Wert, der für eine Eigenschaft zurückgegeben wird, muss
            undefined sein, wenn die zugehörige Eigenschaft im Zielobjekt einen
            nicht konfigurierbare Zugriffseigenschaft hat, dessen [[Get]]
            Attribut undefined ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}
      </td>
      <td>
        Eigenschaftszuweisung: <code>proxy[foo] = bar</code> and
        <code>proxy.foo = bar</code><br />Vererbte Eigenschaftszuweisung:
        <code>Object.create(proxy)[foo] = bar</code
        ><br />{{jsxref("Reflect.set()")}}
      </td>
      <td>
        <ul>
          <li>
            Der Wert kann nicht zu einem geändert werden, der anders als dem
            Wert im Zielobjekt ist, wenn die zugehörige Eigenschaft im
            Zielobjekt eine nicht überschreibbare, nicht konfigurierbare
            Dateneigenschaft ist.
          </li>
          <li>
            Der Wert der Eigenschaft kann nicht geändert werden, wenn die
            zugehörige Eigenschaft im Zielobjekt nicht konfigurierbar ist und
            das [[Set]] Attribut den Wert <code>undefined</code> hat.
          </li>
          <li>
            Im Strict Mode, wird ein falscher Rückgabewert des
            <code>set</code> Handlers einen {{jsxref("TypeError")}}
            erzeugen.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        Eigenschaft löschen: <code>delete proxy[foo]</code> und
        <code>delete proxy.foo</code
        ><br />{{jsxref("Reflect.deleteProperty()")}}
      </td>
      <td>
        Eine Eigenschaft kann nicht gelöscht werden, Wenn sie als nicht
        konfigurierbare Eigenschaft im Zielobjekt existiert.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/enumerate", "handler.enumerate()")}}
      </td>
      <td>
        Eigenschaft aufzählen (enumeration) / for...in:
        <code>for (var name in proxy) {...}</code
        ><br />{{jsxref("Reflect.enumerate()")}}
      </td>
      <td>Die <code>enumerate</code> Methode muss ein Objekt zurückgeben.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
      <td>
        <ul>
          <li>Das Ergebnis von <code>ownKeys</code> ist eine Liste.</li>
          <li>
            Der Typ jedes Elements in der Ergebnisliste ist entweder
            {{jsxref("String")}} oder {{jsxref("Symbol")}}.
          </li>
          <li>
            Die Ergebnisliste muss alle Schlüssel von nicht konfigurierbaren
            Eigenschaften des Zielobjektes enthalten.
          </li>
          <li>
            Wenn das Zielobjekt nicht erweiterbar ist, muss die Ergebnisliste
            alle Schlüssel des Zielobjektes enthalten und keine anderen Werte.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} and
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
      <td>
        Es gibt keine Invarianten für die <code>handler.apply</code> Methode.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
      <td>Das Ergebnis muss ein <code>Object</code> sein.</td>
    </tr>
  </tbody>
</table>

## Widerrufbarer `Proxy`

Die {{jsxref("Proxy.revocable()")}} Methode wird benutzt, um ein widerrufbares `Proxy` Objekt zu erstellen. Das bedeutet, dass der Proxy mit der Funktion `revoke` widerrufen werden kann und der Proxy ausgeschaltet wird. Danach wird jede Operation auf dem Proxy zu einem {{jsxref("TypeError")}} führen.

```js
var revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return '[[' + name + ']]';
  }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo);  // TypeError is thrown
proxy.foo = 1;           // TypeError again
delete proxy.foo;        // still TypeError
typeof proxy;            // "object", typeof doesn't trigger any trap
```

## Reflection

{{jsxref("Reflect")}} ist ein Standardobjekt welches Methoden unterstützt, welche das Abfragen von JavaScript Operationen erlauben. Die Methoden sind die gleichen wie die eines {{jsxref("Global_Objects/Proxy/handler","Proxy Handlers","","true")}}. `Reflect` ist kein Funktionsobjekt.

`Reflect` hilft beim Weiterleiten von Standardoperationen des Handlers zu dem Zielobjekt.

Mit bekommt man {{jsxref("Reflect.has()")}} zum Beispiel den [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) als Funktion:

```js
Reflect.has(Object, 'assign'); // true
```

### Eine bessere `apply` Funktion

In ES5 wird typischerweise die {{jsxref("Function.prototype.apply()")}} Methode genutzt, um eine Funktion mit einem gegebenen `this` Wert und `arguments` als Array (oder ein [Array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#Mit_Array-ähnlichen_Objekten_arbeiten)) benutzt.

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

Mit {{jsxref("Reflect.apply")}} wird dieses weniger Langatmig und leichter verständlich:

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index;
// 4

Reflect.apply(''.charAt, 'ponies', [3]);
// "i"
```

### Prüfen ob Eigenschaftsdefinitionen erfolgreich waren

Mit {{jsxref("Object.defineProperty")}}, welche ein Objekt zurück gibt, wenn es erfolgreich war, oder andernfalls ein {{jsxref("TypeError")}} erzeugt, muss man ein {{jsxref("Statements/try...catch","try...catch")}} Block benutzen, um einen Fehler bei der Definition einer Eigenschaft abzufangen. Weil {{jsxref("Reflect.defineProperty")}} einen Boolean als Status zurück gibt, kann man einfach einen {{jsxref("Statements/if...else","if...else")}} Block benutzen:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

{{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}
