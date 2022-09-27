---
title: Firefox 61 for developers
slug: Mozilla/Firefox/Releases/61
translation_of: Mozilla/Firefox/Releases/61
---

{{FirefoxSidebar}}

Este artículo muestra información sobre los cambios en Firefox 61 que afectarán a los desarrolladores. Firefox 61 es la versión beta actual de Firefox, y se lanzará el 26 de Junio de 2018.

## Cambios para desarrolladores web

### Herramientas de desarrollador

_No hay cambios._

### HTML

_No hay cambios._

### CSS

_No hay cambios._

### SVG

- Las propiedades `ping`, `rel`, `referrerPolicy`, `relList`, `hreflang`, `type` y `text` han sido añadidas al elemento {{SVGElement("a")}} ({{domxref("SVGAElement")}}) para ser consistente con el elemento HTML {{HTMLElement("a")}} ({{bug("1451823")}}).
- El elemento {{SVGElement("textPath")}}({{domxref("SVGTextPathElement")}}) ahora soporta el `path` SVG2 y los atributos `side` ({{bug("1446617")}} y {{bug("1446650")}}).
- La interfaz {{domxref("SVGGeometryElement")}} ahora es soportada por más elementos y no solo para el elemento {{SVGElement("path")}} ({{bug("1325320")}}).

### JavaScript

- Los metodos {{jsxref("String.prototype.trimStart()")}} y {{jsxref("String.prototype.trimEnd()")}} han sido implementados (mira {{bug(1434007)}}). `trimLeft` y `trimRight` permanecen como alias por razones de compatibilidad web.

### APIs

#### Nueva APIs

_No hay cambios._

#### DOM

_No hay cambios._

#### Eventos DOM

_No hay cambios._

#### Trabajadores del servicio

_No hay cambios._

#### Media y WebRTC

_No hay cambios._

#### Canvas y WebGL

_No hay cambios._

### CSSOM

_No hay cambios._

### HTTP

- La cookie **`SameSite`** ha sido implementada. Mira [Set-Cookie](/es/docs/Web/HTTP/Headers/Set-Cookie) y [HTTP cookies](/es/docs/Web/HTTP/Cookies) ({{bug(795346)}}).

### Seguridad

_No hay cambios._

### Plugins

_No hay cambios._

### Otros

_No hay cambios._

## Eliminaciones de la plataforma web

### HTML

_No hay cambios._

### CSS

_No hay cambios._

### APIs

_No hay cambios._

### SVG

- La obsoleta (y nunca implementada correctamente) propiedad {{domxref("SVGViewElement")}}`.viewTarget` ha sido eliminada ({{bug(1455763)}}).
- Las siguientes propiedades obsoletas han sido eliminadas de {{domxref("SVGSVGElement")}} ({{bug(1133172)}}):

  - `pixelUnitToMillimeterX`
  - `pixelUnitToMillimeterY`
  - `screenPixelToMillimeterX`
  - `screenPixelToMillimeterY`

- El constructor no-estandar `SVGNumber()` ha sido eliminado ({{bug("1455940")}}).

### Otros

_No hay cambios._

## Cambios para modificaciones y desarrolladores de Mozilla

### Extensiones web

_No hay cambios._

## También puedes ver

- Compatibilidad de sitios para Firefox 61

## Versiones anteriores

{{Firefox_for_developers(60)}}
