---
title: "Window: Propiedad console"
slug: Web/API/Window/console
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

La propiedad **`Window.console`** devuelve una referencia al objeto {{domxref("console")}}, el cual proporciona métodos para imprimir información en la consola del navegador. Estos métodos estan destinados únicamente para propósitos de depuración y no para presentar información a los usuarios finales.

## Ejemplos

### Imprimir en consola

El primer ejemplo imprime texto en la consola.

```js
console.log("Ocurrió un error al cargar el contenido");
```

El siguiente ejemplo imprime un objeto en la consola, con los campos del objeto expandibles.

```js
console.dir(someObject);
```

Para obtener mas ejemplos, consulta la sección de [Ejemplos](/es/docs/Web/API/console#examples) en el árticulo de [`console`](/es/docs/Web/API/console).

## Especificaciones

{{Specifications}}

> [!NOTE]
> Actualmente hay muchas diferencias de implementación en los navegadores, pero se esta trabajando para hacerlos mas consistentes entre sí.
