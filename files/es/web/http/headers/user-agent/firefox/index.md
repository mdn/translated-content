---
title: Cadenas del User Agent de Gecko
slug: Web/HTTP/Headers/User-Agent/Firefox
---

### Uso Apropiado

No se recomienda el uso de las cadenas del User Agent como su principal opción para la detección del navegador. Vea [Deteccion Cross browser y Soporte Cross Browser](/es/Deteccion_Cross_browser_y_Soporte_Cross_Browser) para una ojeada mas en profundo a varias técnicas sobre detección de navegadores con recomendaciones.

En particular, recomendamos usar la detección de la cadena del User Agent para detección del navegador del lado del servidor. Si su actual código del lado cliente usa detección de la cadena del User Agent, simplemente puede hacer una búsqueda por la cadena "Gecko" en el User Agent para detectar cualquier navegador basado en Gecko.

Para todos los detalles que lidian con detecciones con Gecko los cuales lidian con bugs especificos o los cuales requieran conocimiento de strings especificos o fechas de la compilación, use el objeto [navigator](/es/DOM_Client_Object_Cross-Reference/navigator).

### Lista de user agents liberados por Netscape y AOL basados en Gecko

Vea [mozilla.org's user-agent strings reference](http://www.mozilla.org/build/revised-user-agent-strings.html) para Plataforma específico,
_Seguridad_
,
_Sistema Operativo_
o
_CPU_
y valores de
_localización_
.

- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.4) Gecko/20030624 Netscape/7.1 (ax)`
- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.0.2) Gecko/20030208 Netscape/7.02`
- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.0.2) Gecko/20021120 Netscape/7.01`
- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.0.1) Gecko/20020823 Netscape/7.0`
- `Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en-US; rv:1.0.1) Gecko/20020730 AOL/7.0`
- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:1.0rc2) Gecko/20020512 Netscape/7.0b1`
- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.4.2) Gecko/20020220 CS 2000 7.0/7.0`

  - `Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.4.2) Gecko/20020502 CS 2000 7.0/7.0`

- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.4.1) Gecko/20020508 Netscape6/6.2.3`
- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.4.1) Gecko/20020314 Netscape6/6.2.2`
- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.4) Gecko/20011128 Netscape6/6.2.1`
- `Mozilla/5.0 (Platform; Security; OS-or-CPU; Localization; rv:0.9.2) Gecko/20010726 Netscape6/6.1`

Para una información más detallada sobre liberaciones de Netscape y Mozilla, por favor vea el [mozilla.org cvstags reference](http://www.mozilla.org/releases/cvstags.html).

### Informacion Del documento Original

- Autor: Bob Clary
- Última Actualización: Junio 30, 2003
- Copyright © 2001-2003 Netscape. Todos los derechos reservados.
