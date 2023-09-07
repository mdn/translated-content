---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
---

{{JSSidebar("Statements")}}

El objeto **`import.meta`** expone el contenido especifico de la metadata al módulo JavaScript. Este contiene informacion sobre el módulo, como por ejemplo, la URL del mismo.

## Syntax

```
import.meta
```

## Descripción

La sintasis consiste de la palabra clave {{JSxRef("Statements/import","import")}},un punto, y un identificador `meta`. Normalmente, la parte a la izquierda del punto es el objeto sobre el cual la accion es realizada, pero aqui `import` no es realmente un objeto.

El objeto `import.meta` es creado por la implementacion ECMAScript , con un prototipo {{JSxRef("null")}} . El objeto es extensible y sus propiedades son grabables, editables y enumerables.

## Ejemplos

### Usando import.meta

Dado un módulo `my-module.js`

```html
<script type="module" src="my-module.js"></script>
```

puedes acceder a la meta información sobre el módulo usando el objeto `import.meta`.

```js
console.log(import.meta); // { url: "file:///home/user/my-module.js" }
```

Este retorna un objeto con una propiedad `url` indicando la URL base del módulo.Esta será la URL de la que el script fue obtenido, por scripts externos, o la URL base del documento que contiene el documento, por scripts inline.

Nota que este incluirá parametros de la consulta y/o el hash (ej: seguido del `?` or `#`).

Por ejemplo, con el siguiente HTML:

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

..El siguiente archivo JavaScript registrará el parámetro `someURLInfo`:

```js
// index.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Lo mismo aplica cuando un archivo importa otro:

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Nota que mientras Node.js pasa en la consulta los parámetros (o el hash ) como en el último ejemplo, a partir de Node 14.1.0, una URL con parametros en la consulta fallará cuando se carguen en el formato `node --experimental-modules index.mjs?someURLInfo=5` (es tratado como un archivo en lugar de una URL en este contexto).

Tal argumento específico del archivo podria ser complementario al usado en toda la aplicacion `location.href` (con consultas strings o hash añadidas despues de la ruta HTML) (o en Node.js, mediante `process.argv`).

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat}}

## Ver también

- {{JSxRef("Statements/import", "import")}}
- {{JSxRef("Statements/export", "export")}}
