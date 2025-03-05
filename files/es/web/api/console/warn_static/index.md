---
title: Console.warn()
slug: Web/API/console/warn_static
---

{{APIRef("Console API")}}

Imprime un mensaje de advertencia en la Consola Web.

{{AvailableInWorkers}}

> [!NOTE]
> En Firefox, las advertencias tienen un pequeño icono de signo de exclamación junto a estas en el registro de la Consola Web.

## Sintaxis

```
console.warn(obj1 [, obj2, ..., objN]);
console.warn(msg [, subst1, ..., substN]);
```

## Parámetros

- `obj1` ... `objN`
  - : Una lista de objetos JavaScript para ser emitidos en la Consola Web. Las representaciones como string de cada uno de estos objetos son anexados juntos en el orden listado e impresos.
- `msg`
  - : Un string JavaScript que contiene cero o más strings de sustitución.
- `subst1` ... `substN`
  - : Objetos JavaScript con los cuales se reemplaza los strings de sustitución dentro de `msg`. Esto le proporciona un control adicional sobre el formato de salida.

Vea [Outputting text to the console](/es/docs/Web/API/console#outputting_text_to_the_console) en la documentación de {{domxref("console")}} para mas detalles.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- [Opera Dragonfly documentation: Console](https://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
