---
title: console.error()
slug: Web/API/Console/error
tags:
  - API
  - DOM
  - Depurando
  - Desarrollo web
  - consola web
  - metodo
translation_of: Web/API/Console/error
---
{{APIRef("Console API")}}

Muestra un mensaje de error en la Consola Web.

{{AvailableInWorkers}}

## Sintaxis

    console.error(obj1 [, obj2, ..., objN]);
    console.error(msg [, subst1, ..., substN]);
    console.exception(obj1 [, obj2, ..., objN]);
    console.exception(msg [, subst1, ..., substN]);

> **Nota:** `console.exception()` es un alias de `console.error()`; son funcionalmente identicas.

### Parametros

- `obj1` ... `objN`
  - : Una lista de objetos JavaScript para mostrar. Las representaciones en texto de cada uno de los objetos se agregan y muestran juntas (al final una tras otra), en el orden listado.
- `msg`
  - : Un texto (mensaje) conteniendo cero o más sustituciones de cadenas (sustituciones de strings).
- `subst1` ... `substN`
  - : Objetos JavaScript con la sustitución a reemplazar dentro del texto (**`msg`**). Esto brinda control adicional en el formato de salida del texto.

Vea "[Mostrando texto en la consola](/es/docs/Web/API/console#Outputting_text_to_the_console)" en la documentacion de {{domxref("console")}} para mas detalles.

## Especificaciones

| Especificación                                                               | Estado                           | Comentario          |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#error", "console.error()")}} | {{Spec2("Console API")}} | Definicion inicial. |

## Compatibilidad con navegadores

{{Compat("api.console.error")}}

## Vea también

- [Documentacion de Opera Dragonfly: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Herramientas de desarrolladores de Chrome: Usando la Consola](https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings)
