---
title: URI
slug: Web/URI
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Los **identificadores uniformes de recursos (URI, por sus siglas en inglés)** se usan para identificar "recursos" en la web.
Los URI se usan con frecuencia como destino de las solicitudes [HTTP](/es/docs/Web/HTTP); en ese caso, el URI representa la ubicación de un recurso, como un documento, una foto o datos binarios.
El tipo de URI más común es el localizador uniforme de recursos ({{Glossary("URL")}}), conocido como _dirección web_.

Los URI también pueden activar comportamientos distintos de obtener un recurso, como abrir un cliente de correo electrónico, enviar mensajes de texto o ejecutar JavaScript, cuando se usan en otros lugares, como el atributo [`href`](/es/docs/Web/HTML/Reference/Elements/a#href) de un enlace `<a>` de HTML.

## Referencia

La [referencia de URI](/es/docs/Web/URI/Reference) ofrece detalles sobre los componentes que forman un URI.

- [Esquemas](/es/docs/Web/URI/Reference/Schemes)
  - : La primera parte del URI, antes del carácter `:`, que indica el protocolo que debe usar el navegador para obtener el recurso.
- [Autoridad](/es/docs/Web/URI/Reference/Authority)
  - : La sección que va después del esquema y antes de la ruta.
    Puede tener hasta tres partes: la información del usuario (`user`), el `host` y el puerto (`port`).
- [Ruta](/es/docs/Web/URI/Reference/Path)
  - : La sección que va después de la autoridad.
    Contiene datos, normalmente organizados de forma jerárquica, que identifican un recurso dentro del ámbito del esquema y de la autoridad del URI.
- [Consulta](/es/docs/Web/URI/Reference/Query)
  - : La sección que va después de la ruta.
    Contiene datos no jerárquicos que, junto con los datos del componente de ruta, identifican un recurso dentro del ámbito del esquema y de la autoridad de nombres del URI.
- [Fragmento](/es/docs/Web/URI/Reference/Fragment)
  - : Una parte opcional al final de un URI que empieza con el carácter `#`.
    Se usa para identificar una parte concreta del recurso, como una sección de un documento o una posición en un video.

## Guías

Las [guías de URI](/es/docs/Web/URI/Guides) te ayudan a trabajar con URI en la web.

- [Elegir entre URL con www y sin www](/es/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : Recomendaciones sobre cuándo deben los sitios usar el prefijo `www.` en las URL (`www.example.com` frente a `example.com`).

## Especificaciones

{{Specifications}}

## Véase también

- [¿Qué es una URL?](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
