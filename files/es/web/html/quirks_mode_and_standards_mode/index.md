---
title: Modo Quirks y Modo Estándar
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
---

En los viejos días de la web, las páginas eran comúnmente escritas de dos formas: Una para navegador Netscape y otra para Microsoft Internet Explorer. Cuando los estándares de la web fueron creador por W3C, los navegadores no sólo empezaron a utilizarlos, tan pronto lo hicieron romperían los más existentes sitios en la Web. Sin embargo los navegadores introdujeron dos modos para tratar los nuevos estándares que cumplan que los sitios diferentemente de los viejos legados de sitios.

Ahora hay tres modos usados por los motores de diseño en los navegadores web: modo quirks (_caprichoso_), modo casi estándar, y modo estándar completo. En el modo quirks, el diseño emula el comportamiento no estandar de Navigator 4 e Internet Explorer 5 para Windows que es lo requerido para no romper contenido ya existente en la Web. En modo estándar completo, el comportamiento es (o debería ser) el descrito en las especificaciones HTML y CSS. En modo casi estándar, hay implementados sólo algunos ajustes (quirks) pero no todos.

## ¿Cómo determinan los navegadores qué modo usar?

Para documentos [HTML](/es/docs/HTML), los navegadores usan un DOCTYPE al principio del documento para decidir cómo manejarlo y si deben hacerl en modo quirks o estándar. Para asegurarse de que las página usa el modo estándar completo, debes poner el DOCTYPE como en este ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset=UTF-8>
    <title>Hello World!</title>
  </head>
  <body>
  </body>
</html>
```

El DOCTYPE mostrado en el ejemplo, `<!DOCTYPE html>`, es el más simple posible y el recomendado para usar en documentos HTML5. Las versiones anteriores del estándar HTML recomendaban otras variantes, pero todos los navegadores modernos usan ese DOCTYPE para el modo estándar completo, incluso las versiones antiguas de Internet Explorer (a partir de la 6). No hay motivos reales para usar un DOCTYPE más complicado, te arriesgas a elegir uno incorrecto o cometer un fallo y pasar al modo quirks en lugar del estándar.

Asegúrate de poner el DOCTYPE justo al principio del documento HTML. Si pones cualquier cosa antes del DOCTYPE, como un comentario o una declaración XML, hará que versiones antiguas de Internet Explorer (9 y anteriores) interpreten la página en modo quirks.

En HTML5, el único objetico del DOCTYPE es activar el modo estándar completo. Las versiones anteriores del estándar HTML daban información adicional en el DOCTYPE, pero ningún navegador usaba dicha información y sólo la usaba para cambiar entre el modo quirks o el estándar.

Más información y detalles en [cuándo eligen los navegadores entre los diferentes modos](http://hsivonen.iki.fi/doctype/).

### XHTML

Si sirves la página como [XHTML](/es/docs/XHTML) usando el MIME `application/xhtml+xml` en el `Content-Type` de la cabecera HTTP, no necesitas especificar un DOCTYPE para habilitar el modo estándar, porque esos documentos siempre usan el modo estándar completo. Aunque hay que aclarar que servir páginas como `application/xhtml+xml` hará que Internet Explorer 8 [muestre el diálogo de descarga](/es/docs/XHTML#Support) para contenido desconocido en lugar de mostrar la página, porque la primera versión de Internet Explorer que soporta XHTML es IE9.

Si sirves contenido XHTML usando el MIME `text/html`, los navegadores lo leeran como HTML, y necesitarás poner un DOCTYPE para que usen el modo estándar.

## ¿Cómo puedo ver qué modo está siendo usado?

En Firefox, selecciona _Ver Información de Página_ en el menú contextual, y selecciona la opción _Modo de Renderizado_ (Render Mode).

En Internet Explorer, pulsa _F12_, y buscar _Modo de Documento_ (Document Mode)
