---
title: Console.log()
slug: Web/API/console/log
---

{{APIRef("Console API")}}Muestra un mensaje en la consola web (o del intérprete JavaScript).

{{AvailableInWorkers}}

## Sintaxis

```
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
```

## Parámetros

- `obj1` ... `objN`
  - : Una lista de objetos JavaScript para mostrar. Las representaciones en texto de cada uno de los objetos se agregan y muestran juntas (al final una tras otra), en el orden listado.
- `msg`
  - : Un texto (mensaje) conteniendo cero o más sustituciones de cadenas (sustituciones de strings).
- `subst1` ... `substN`
  - : Objetos JavaScript con la sustitución a reemplazar dentro del texto (**`msg`**). Esto brinda control adicional en el formato de salida del texto.

Vea "[Mostrando texto en la consola](/es/docs/DOM/console#Outputting_text_to_the_console)" en la documentación de {{domxref("console")}} para mas detalles.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Documentación Opera Dragonfly: Consola](http://www.opera.com/dragonfly/documentation/console/).
- [MSDN: Usando las herramientas F12 de Consola para ver errores y estados](http://msdn.microsoft.com/library/gg589530).
- [Firebug wiki: Console API](http://getfirebug.com/wiki/index.php/Console_API) - Firebug soporta características adicionales en su propia implementación de console.log(), como [consola con estilos](http://www.softwareishard.com/blog/firebug/firebug-tip-styled-logging/).
- [NodeJS: API de consola](http://nodejs.org/docs/latest/api/console.html#console_console_log_data).
