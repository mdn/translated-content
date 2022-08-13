---
title: Console.log()
slug: Web/API/Console/log
tags:
  - API
  - Compatibilidad necesaria con navegadores
  - Consola
  - DOM
  - Desarrollo web
  - Método(2)
  - consola web
  - console.dir()
  - console.log()
  - debuguear
  - depurar
  - diferencia
  - Árbol HTML
  - Árbol JSON
translation_of: Web/API/Console/log
---
{{APIRef("Console API")}}Muestra un mensaje en la consola web (o del intérprete JavaScript).

{{AvailableInWorkers}}

## Sintaxis

    console.log(obj1 [, obj2, ..., objN]);
    console.log(msg [, subst1, ..., substN]);

## Parámetros

- `obj1` ... `objN`
  - : Una lista de objetos JavaScript para mostrar. Las representaciones en texto de cada uno de los objetos se agregan y muestran juntas (al final una tras otra), en el orden listado.
- `msg`
  - : Un texto (mensaje) conteniendo cero o más sustituciones de cadenas (sustituciones de strings).
- `subst1` ... `substN`
  - : Objetos JavaScript con la sustitución a reemplazar dentro del texto (**`msg`**). Esto brinda control adicional en el formato de salida del texto.

Vea "[Mostrando texto en la consola](/es/docs/DOM/console#Outputting_text_to_the_console)" en la documentación de {{domxref("console")}} para mas detalles.

## Especificaciones

| Especificación                                                       | Estado                           | Comentario         |
| -------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("Console API", "#log", "console.log()")}} | {{Spec2("Console API")}} | Definicion inicial |

## Compatibilidad con navegadores

{{Compat("api.console.log")}}

## Diferencia con console.dir()

Te preguntarás cual es la diferencia entre console.dir() y console.log().

Una diferencia útil en Chrome es cuando envías elementos DOM a la consola.

![](http://i.imgur.com/DozDcYR.png)

Importante:

- `console.log` muestra el elemento en un árbol HTML
- `console.dir` muestra el elemento en un árbol JSON

Específicamente, `console.log` brinda un tratamiento especial a los elementos del DOM, mientras que console.dir no. Esto es útil a menudo cuando intentas ver la representación completa del objeto JavaScript del DOM.

Hay mas información en la [referencia de la API Console de Chrome](https://developers.google.com/chrome-developer-tools/docs/console-api#consoledirobject) acerca de esto y otras funciones.

## Ver también

- [Documentación Opera Dragonfly: Consola](http://www.opera.com/dragonfly/documentation/console/).
- [MSDN: Usando las herramientas F12 de Consola para ver errores y estados](http://msdn.microsoft.com/library/gg589530).
- [Firebug wiki: Console API](http://getfirebug.com/wiki/index.php/Console_API) - Firebug soporta características adicionales en su propia implementación de console.log(), como [consola con estilos](http://www.softwareishard.com/blog/firebug/firebug-tip-styled-logging/).
- [NodeJS: API de consola](http://nodejs.org/docs/latest/api/console.html#console_console_log_data).
