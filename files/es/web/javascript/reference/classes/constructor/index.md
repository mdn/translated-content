---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
tags:
  - Clases
  - ECMAScript6
  - JavaScript
translation_of: Web/JavaScript/Reference/Classes/constructor
original_slug: Web/JavaScript/Referencia/Classes/constructor
---
{{jsSidebar("Classes")}}

El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

El código fuente para este ejemplo interactivo se encuentra almacenado en un repositorio de Github. Si quieres contribuir al proyecto de ejemplos interactivos, por favor clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud para extraer el código (pull request).

## Sintaxis

```
constructor([argumentos]) { ... }
```

## Descripción

Sólo puede haber un método especial con el nombre de "constructor" en una clase. Un error de sintaxis será lanzado, si la clase contiene más de una ocurrencia de un método constructor.

Un constructor puede utilizar la palabra clave super para llamar al constructor de una clase padre.

Si no especifica un método constructor, se utiliza un constructor predeterminado.

## Ejemplos

### Usando el método constructor

Este fragmento de código se toma de la [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Aquí, llama al constructor de la clase padre con sus longitudes
    // contemplando la anchura y la altura del Polígono
    super(length, length);
    // Nota: En las clases derivadas, super() se debe llamar primero
    // Se puede utilizar "this". Dejando esto causará un error de
    //referencia.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### Constructores por defecto

Si no especifica un método constructor, se utiliza un constructor predeterminado. Para las clases base, el constructor por defecto es:

```js
constructor() {}
```

Para las clases derivadas, el constructor por defecto es:

```js
constructor(...args) {
  super(...args);
}
```

## Especificaciones

| Specification                                                                                                        | Status                       | Comment             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-static-semantics-constructormethod', 'Constructor Method')}}     | {{Spec2('ES6')}}         | Initial definition. |
| {{SpecName('ESDraft', '#sec-static-semantics-constructormethod', 'Constructor Method')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad del navegador

{{Compat("javascript.classes.constructor")}}

La tabla de compatibilidad de esta pagina está generada a partir de data estructurada. Si quieres contribuir a la data, por favor dirígete a <https://github.com/mdn/browser-compat-data> y envíanos una solicitud de extracción

## Ver también

- [super()](/es/docs/Web/JavaScript/Reference/Operators/super)
- [`class` expression](/es/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/es/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/es/docs/Web/JavaScript/Reference/Classes)
