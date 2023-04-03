---
title: Console.info()
slug: Web/API/console/info
---

{{APIRef("Console API")}}Emite un mensaje informativo a la Consola Web. En Firefox y Chrome, se muestra un pequeño ícono "i" junto a estos elementos en el registro de la Consola Web.

{{AvailableInWorkers}}

## Sintaxis

```
console.info(obj1 [, obj2, ..., objN]);
console.info(msg [, subst1, ..., substN]);
```

## Parametros

- `obj1` ... `objN`
  - : Una lista de objetos JavaScript a la salida. Las representaciones de cadena de cada uno de estos objetos se anexan en el orden y salida.
- `msg`
  - : Un String en JavaScript contiene cero o mas strings de sustitucion
- `subst1` ... `substN`
  - : Objetos en JavaScript con los que reemplazar cadenas de sustitución dentro del mensaje. Esto le da un control adicional sobre el formato de la salida.

Ver [Salida de texto en la consola](/es/docs/Web/API/console#Outputting_text_to_the_console) en la documentacion de {{domxref("console")}} para detalles.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea tambien

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
