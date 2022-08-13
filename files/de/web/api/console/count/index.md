---
title: Console.count()
slug: Web/API/Console/count
translation_of: Web/API/Console/count
---
{{APIRef("Console API")}}

Die Methode `count()` protokolliert, wie oft sie an einer Stelle oder mit einem Bezeichner aufgerufen wurde. Sie nimmt ein optionales Argument `label` entgegen.

{{AvailableInWorkers}}

## Syntax

    console.count([label]);

### Parameter

- `label` {{optional_inline}}
  - : Ein {{jsxref("String")}}. Wenn angegeben, gibt `count()` die Anzahl der Aufrufe mit diesem Label aus, ansonsten mit der Bezeichnung "default".

## Beispiele

Nehmen wir folgenden Code als Beispiel:

```js
let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
```

Sieht die Ausgabe in der Konsole in etwa so aus:

    "default: 1"
    "default: 2"
    "default: 3"
    "default: 4"

Das Label wird als `default` angezeigt, da kein explizites Label angegeben wurde.

Wenn wir die Variable `user` als das Argument `label` an den ersten Aufruf von `count()` übergeben und den String "alice" an den zweiten:

```js
let user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
```

Sieht die Ausgabe so aus:

    "bob: 1"
    "alice: 1"
    "alice: 2"
    "alice: 3"

Wir führen jetzt separate Zählungen ein, die nur auf dem Wert von `label` basieren.

## Spezifikation

| Spezifikation                                                                | Status                           | Kommentar           |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#count", "console.count()")}} | {{Spec2("Console API")}} | Initiale Definition |

## Browserkompatibilität

{{Compat("api.Console.count")}}
