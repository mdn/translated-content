---
title: Console.assert()
slug: Web/API/console/assert_static
---

{{APIRef("Console API")}}{{Non-standard_header}}

Aparece un mensaje de error en la consola si la afirmación es falsa. Si la afirmación es verdadera, no aparecerá nada.

{{AvailableInWorkers}}

> [!NOTE]
> El método `console.assert()` se implementa de diferente manera en Node.js que el mismo método disponible en los navegadores.
>
> En los navegadores, llamando `console.assert()` con una falsa afirmación hará que el `message` se imprima por consola sin interrumpir la ejecución del código posterior. En Node.js, sin embargo, una falsa afirmación lanzará un `AssertionError`.

## Sintaxis

```
console.assert(afirmación, obj1 [, obj2, ..., objN]);
console.assert(afirmación, msg [, subst1, ..., substN]);
```

### Parámetros

- `afirmación`
  - : Cualquier expresión booleana.Si la afirmación es falsa, el mensaje aparecerá en consola.
- `obj1` ... `objN`
  - : Salida de una lista de objetos de JavaScript. Las representaciones de cadena de cada uno de estos objetos se añaden juntos en el orden y salida indicados.
- `msg`
  - : Una cadena de JavaScript que contiene cero o más cadenas de sustitución.
- `subst1` ... `substN`
  - : Objetos de JavaScript con el que reemplaza las cadenas dentro de `msg`. Esto te da más control sobre el formato de salida.

Para más detalles ver [Salida de texto a la consola](/es/docs/Web/API/console#outputting_text_to_the_console) en la documentación de {{domxref("console")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Opera Dragonfly documentación: Consola](https://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Usando F12 Herramientas de Consola para ver Errores y Estados](http://msdn.microsoft.com/library/gg589530)
- [Herramientas de Desarrollo de Chrome: Usando la Consola](https://developer.chrome.com/docs/devtools/console/)
