---
title: static
slug: Web/JavaScript/Reference/Classes/static
---

{{jsSidebar("Classes")}}

La palabra clave **static** define un método estático para una clase.

## Sintaxis

```
static methodName() { ... }
```

## Descripción

Los métodos estáticos son llamados sin instanciar su clase. Son habitualmente utilizados para crear funciones para una aplicación.

## Ejemplos

El siguiente ejemplo demuestra varias cosas. Una de ellas es cómo un método estático es implementado en una clase, otra es que una clase con un miembro estático puede ser sub-claseada. Finalmente demuestra cómo un método estático puede (y cómo no) ser llamado.

```js
class Tripple {
  static tripple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple());
console.log(Tripple.tripple(6));
console.log(BiggerTripple.tripple(3));
var tp = new Tripple();
console.log(tp.tripple()); //Logs 'tp.tripple is not a function'.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`class` expression](/es/docs/Web/JavaScript/Reference/Operators/class)
- [`class` declaration](/es/docs/Web/JavaScript/Reference/Statements/class)
- [Classes](/es/docs/Web/JavaScript/Reference/Classes)
