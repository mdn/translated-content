---
title: import
slug: Web/JavaScript/Reference/Statements/import
---

{{jsSidebar("Sentencias")}}

La sentencia **`import`** se usa para importar funciones que han sido exportadas desde un módulo externo.

> **Nota:** Por el momento, esta característica sólo está [comenzando a ser implementada](https://jakearchibald.com/2017/es-modules-in-browsers/) de forma nativa en los navegadores. Está implementada en muchos transpiladores, tales como Typescript y [Babel](http://babeljs.io/), y en empaquetadores como [Rollup](https://github.com/rollup/rollup) y [Webpack](https://webpack.js.org/).

## Sintaxis

```
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : Nombre que se referirá al export por defecto del módulo.
- `module-name`
  - : El módulo desde el que importar. Normalmente es una ruta relativa o absoluta al archivo **`.js`** que contiene el módulo, excluyendo la extensión **`.js`**. Algunos empaquetadores pueden permitir o requerir el uso de la extensión; comprueba tu entorno. Sólo se permiten Strings con comillas simples o dobles.
- `name`
  - : Nombre del objeto del módulo que se utilizará como nombre de dominio al hacer referencia a los imports.
- export, exportN
  - : Nombre de los exports a ser importados.
- `alias, aliasN`
  - : Nombre del objeto que recibirá la propiedad importada.

## Descripción

El parámetro `name` es el nombre del objeto que recibirá los miembros exportados. El parámetro `member` especifica miembros individuales, mientras el parámetro `name` importa todos ellos. name puede también ser una función si el módulo exporta un sólo parámetro por defecto en lugar de una serie de miembros. Abajo hay ejemplos que explican la sintaxis.

### Importa el contenido de todo un módulo

Esto inserta `myModule` en el ámbito actual, que contiene todos los elementos exportados en el archivo ubicado en `/modules/my-module.js`.

```js
import * as myModule from "/modules/my-module.js";
```

Aquí, para acceder a los miembros exportados habrá que usar el alias del módulo ("myModule" en este caso) como namespace. Por ejemplo, si el módulo importado arriba incluye un miembre exportado llamado `doAllTheAmazingThings()`, habría que invocarlo de la siguiente manera:

```js
myModule.doAllTheAmazingThings();
```

### Importa un solo miembro de un módulo

Dado un objeto o valor llamado `myExport` que ha sido exportado del módulo `my-module` ya sea implícitamente (porque todo el módulo ha sido exportado) o explícitamente (usando la sentencia {{jsxref("Sentencias/export", "export")}} ), esto inserta `myExport` en el ámbito actual.

```js
import { myExport } from "/modules/my-module.js";
```

### Importa multiples miembros de un módulo

Esto inserta `foo` y `bar` en el ámbito actual.

```js
import { foo, bar } from "my-module.js";
```

### Importa un miembre con un alias mas conveniente

Se puede renombrar un miembro exportado cuando se importa. Por ejemplo, esto inserta `shortName` en el ámbito actual.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

### Renombra multiples miembros durante la importación

Importa múltiples miembros exportados de un módulo con un alias conveniente.

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short,
} from "/modules/my-module.js";
```

### Importa un módulo entero para efectos secundarios sólamente

Importa un módulo entero para efectos secundarios sólamente, sin importar ningun elemento. Esto ejecuta el código global del módulo, pero no importa ningún valor.

```js
import "/modules/my-module.js";
```

### Importación de elementos por defecto

Es posible tener una exportación por defecto (tanto si se trata de un objeto, función, clase, etc.). Recíprocamente, es posible usa la instrucción `import` para importar esos elementos establecidos como por defecto.

La versión más sencilla de importar un elemento por defecto es:

```js
import myDefault from "/modules/my-module.js";
```

También es posible usar la sintaxis por defecto con lo que hemos visto anteriormente (importación de espacios de nombres o importaciones con nombre. En esos casos, la importación por defecto se deberá realizar en primer lugar. Por ejemplo:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule used as a namespace
```

o

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
// specific, named imports
```

## Ejemplos

Importar un archivo secundario para asistir en un procesamiento de una petición JSON AJAX.

### El módulo: file.js

```js
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, (data) => callback(JSON.parse(data)));
}
```

### El programa principal: main.js

```js
import { getUsefulContents } from "/modules/file.js";

getUsefulContents("http://www.example.com", (data) => {
  doSomethingUseful(data);
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Sentencias/export", "export")}}
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
