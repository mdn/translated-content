---
title: Modo quirks y modo estándar
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar}}

En los viejos tiempos de la web, las páginas normalmente se escribían en dos versiones: una para Netscape Navigator y otra para Microsoft Internet Explorer. Cuando se crearon los estándares web en el W3C, los navegadores no podían simplemente comenzar a usarlos, ya que hacerlo dañaría la mayoría de los sitios existentes en la web. Por lo tanto, los navegadores introdujeron dos modos para tratar los sitios que cumplen con los nuevos estándares de manera diferente a los sitios antiguos.

Ahora hay tres modos utilizados por los motores de diseño en los navegadores web: _quirks mode_ (modo de peculiaridades), _limited-quirks mode_ (modo de peculiaridades limitadas) y _no-quirks mode_ (modo sin peculiaridades). En **quirks mode**, el diseño emula el comportamiento de Navigator 4 e Internet Explorer 5. Esto es esencial para admitir sitios web creados antes de la adopción generalizada de estándares web. En **no-quirks mode**, el comportamiento es (con suerte) el comportamiento deseado descrito por las especificaciones modernas de HTML y CSS. En **limited-quirks mode**, solo se implementa una cantidad muy pequeña de peculiaridades.

Los modos _limited-quirks_ y _no-quirks_ solían llamarse modo "casi estándar" y modo "estándar completo", respectivamente. Estos nombres se han cambiado ya que el comportamiento ahora está estandarizado.

## ¿Cómo determinan los navegadores qué modo usar?

Para documentos [HTML](/es/docs/Web/HTML), los navegadores usan un DOCTYPE al principio del documento para decidir si manejarlo en _quirks mode_ o en modo estándar. Para asegurarse de que su página utilice el modo estándar completo, asegúrese de que su página tenga un DOCTYPE como en este ejemplo:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>¡Hola mundo!</title>
  </head>
  <body></body>
</html>
```

El DOCTYPE que se muestra en el ejemplo, `<!DOCTYPE html>`, es el más simple posible y el recomendado por los estándares HTML actuales. Las versiones anteriores del estándar HTML recomendaban otras variantes, pero todos los navegadores existentes en la actualidad utilizarán el modo de estándares completos para este DOCTYPE, incluso el antiguo Internet Explorer 6. No hay razones válidas para utilizar un DOCTYPE más complicado. Si usa otro DOCTYPE, puede arriesgarse a elegir uno que active el modo casi estándar o _quirks mode_.

Asegúrese de colocar el DOCTYPE justo al comienzo de su documento HTML. Cualquier cosa antes del DOCTYPE, como un comentario o una declaración XML, activará _quirks mode_ en Internet Explorer 9 y versiones anteriores.

El único propósito de `<!DOCTYPE html>` es activar _no-quirks mode_. Las versiones anteriores de los DOCTYPE estándar de HTML proporcionaban un significado adicional, pero ningún navegador usó nunca el DOCTYPE para otra cosa que no fuera cambiar entre los modos de representación.

Consulte también una descripción detallada de [cuando diferentes navegadores eligen varios modos](https://hsivonen.fi/doctype/).

### XHTML

Si sirve su página como [XHTML](/es/docs/Glossary/XHTML) usando el tipo MIME `application/xhtml+xml` en el encabezado HTTP `Content-Type`, no necesita un DOCTYPE para habilitar el modo estándar, ya que tales documentos siempre utilizan el 'modo de estándares completos'. Tenga en cuenta, sin embargo, que servir sus páginas como `application/xhtml+xml` hará que Internet Explorer 8 muestre un cuadro de diálogo de descarga para un formato desconocido en lugar de mostrar su página, ya que la primera versión de Internet Explorer compatible con XHTML es Internet Explorer 9. .

Si ofrece contenido similar a XHTML usando el tipo MIME `text/html`, los navegadores lo leerán como HTML y necesitará el DOCTYPE para usar el modo estándar.

## ¿Cómo puedo ver qué modo se utiliza?

Si la página se muestra en _quirks_ o _limited-quirks mode_, Firefox registrará una advertencia en la pestaña de la consola en las herramientas para desarrolladores. Si no se muestra esta advertencia, Firefox está usando _no-quirks mode_.

El valor de `document.compatMode` en JavaScript mostrará si el documento está en _quirks mode_ o no. Si su valor es `"BackCompat"`, el documento está en _quirks mode_. Si no es así, tendrá el valor `"CSS1Compat"`.
