---
title: import
slug: Web/JavaScript/Reference/Statements/import
tags:
  - ECMAScript 2015
  - JavaScript
  - Module
  - Statement
translation_of: Web/JavaScript/Reference/Statements/import
---
{{jsSidebar("Statements")}}

Das **import Statement** wird verwendet um Funktionen, Objekte und Primitives zu importieren die von einem externen Modul, einem anderen Script, etc. exportiert wurden.

{{noteStart}}Zur Zeit wird dieses Feature nicht von jedem Browser nativ unterstützt. Viele Transpiler implementieren es, wie beispielsweise der [Traceur Compiler](https://github.com/google/traceur-compiler), [Babel](http://babeljs.io/), [Rollup](https://github.com/rollup/rollup) oder [Webpack](https://webpack.js.org/).{{noteEnd}}

## Syntax

    import name from "module-name";
    import * as name from "module-name";
    import { member } from "module-name";
    import { member as alias } from "module-name";
    import { member1 , member2 } from "module-name";
    import { member1 , member2 as alias2 , [...] } from "module-name";
    import defaultMember, { member [ , [...] ] } from "module-name";
    import defaultMember, * as alias from "module-name";
    import defaultMember from "module-name";
    import "module-name";

- name
  - : Name des Objekts, das die importierten Daten empfängt

- `member, memberN`
  - : Namen der exportierten Member, die importiert werden
- `defaultMember`
  - : Name des exportierten Defaults, das importiert wird
- `alias, aliasN`
  - : Name des Objekts, das die importierte Property empfängt
- `module-name`
  - : Der Name des Moduls, das importiert wird. Also der Dateiname.

## Beschreibung

Der Parameter _`name`_ ist der Name des Objekts, das die exportierten Member empfängt. Die _`member-`\_Parameter legen einzelne Einheiten fest, während der _`name`_ Parameter alles importiert. _`name`\_ kann auch eine Funktion sein, wenn das Modul nur eine Einheit hat. Es folgen ein paar Beispiele für die Syntax:

Importieren der gesamten Inhalte des Moduls. Folgendes fügt `myModule` in den aktuellen Namensraum ein, mit allen exportierten Verbindungen von "my-module" bzw. "my-module.js".

```js
import * as myModule from "my-module";
```

Einfügen einer einzelnen Einheit eines Moduls. Folgendes fügt `myMember` in den aktuellen Namensraum ein.

```js
import {myMember} from "my-module";
```

Einfügen von mehreren Einheiten eines Moduls. Folgendes fügt `foo` und `bar` in den aktuellen Namensraum ein.

```js
import {foo, bar} from "my-module";
```

Einfügen und Vergeben eines Alias. Folgendes fügt `shortName` in den aktuellen Namensraum ein.

```js
import {reallyReallyLongModuleMemberName as shortName} from "my-module";
```

Einfügen und Vergeben von mehreren Aliasen

```js
import {reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as short} from "my-module";
```

Einfügen eines ganzen Moduls, ohne dessen Namensbindungen zu importieren.

```js
import 'my-module';
```

### Defaults importieren

Ein Standardexport ist möglich (egal, ob es sich um ein Objekt, eine Funktion, eine Klasse oder anderes handelt). Dementsprechend ist es auch möglich einen Standard-`import` zu benutzen, um diese Standards zu importieren.

Die einfachste Version importiert die Standards direkt:

```js
import myModule from "my-module";
```

Man kann diese Syntax auch benutzen, um die oben genannten imports durchzufüren. In diesem Fall müssen die Standards aber wie folgt definiert werden:

```js
import myDefault, * as myModule from "my-module";
// myModule wird als namespace benutzt
```

oder

```js
import myDefault, {foo, bar} from "my-module";
// spezifische Imports nach Namen
```

## Beispiele

Importieren einer weiteren Datei um AJAX JSON-Anfragen zu bearbeiten:

```js
// --file.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

// --main.js--
import { getUsefulContents } from "file";
getUsefulContents("http://www.example.com", data => {
  doSomethingUseful(data);
});
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar           |
| -------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-imports', 'Imports')}}     | {{Spec2('ES2015')}}     | Initiale Definition |
| {{SpecName('ESDraft', '#sec-imports', 'Imports')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat("javascript.statements.import")}}

## Siehe auch

- {{jsxref("Statements/export", "export")}}
- [Vorschau von Modulen und mehr von ES2015, ES2016 und darüber](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks Blog Post vonJason Orendorff
- [Axel Rauschmayer's Buch: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
