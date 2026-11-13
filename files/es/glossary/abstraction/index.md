---
title: Abstracción
slug: Glossary/Abstraction
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **abstracción** en {{Glossary("computer programming", "programación")}} es una forma de reducir la complejidad y permitir un diseño e implementación eficientes en sistemas de software complejos. Oculta la complejidad técnica de los sistemas tras {{Glossary("API", "APIs")}} más sencillas.

## Ventajas de la abstracción de datos

- Evita que el usuario tenga que escribir código de bajo nivel.
- Evita la duplicación de código y aumenta su reutilización.
- Permite cambiar la implementación interna de una clase de forma independiente, sin afectar al usuario.
- Contribuye a aumentar la seguridad de una aplicación o programa, ya que solo se proporcionan al usuario los detalles importantes.

## Ejemplo

```js
class ImplementAbstraction {
  // método para establecer los valores de los miembros internos
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log(`a = ${this.a}`);
    console.log(`b = ${this.b}`);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

## Véase también

- [Abstracción](<https://es.wikipedia.org/wiki/Abstracci%C3%B3n_(inform%C3%A1tica)>) en Wikipedia
