---
title: Acerca de
slug: conflicting/Web/JavaScript/Reference
original_slug: Web/JavaScript/Reference/About
---

{{JsSidebar}}

### Nuevas características en esta versión

JavaScript versión 1.5 provee las siguientes nuevas características y extensiones:

**Errores en tiempo de ejecución**

Los errores en tiempo de ejecución son ahora reportados como [excepciones](/es/Guía_JavaScript_1.5/Sentencias_de_manejo_de_excepciones).

**Extensiones para el formato de números**

El formato de números ha sido extendido para incluir los métodos `Number.prototype.toExponential`, `Number.prototype.toFixed` y `Number.prototype.toPrecision`.

**Extensiones de expresiones regulares**

Las siguientes extensiones para expresiones regulares han sido añadidas:

- Cuantificadores avaros: `— +, *, ? y {}`:ahora pueden seguirse por un `?` para forzarlos ha no ser avaros. Para la entrada **?** Véase la página [Escribir un patrón de expresiones regulares](/es/Guía_JavaScript_1.5/Escribir_un_patrón_de_expresión_regular#Uso_de_caracteres_especiales).
- Paréntesis sin captura: `(?:x)`:pueden ser usados en vez de paréntesis con captura `(x)`. Cuando son utilizados, las sub expresiones de compatibilidad `[match]` no están disponibles como referencias de respaldo `[back-references]`. Para la entrada **(?:x)** Véase la página: [Escribir un patrón de expresiones regulares](/es/Guía_JavaScript_1.5/Escribir_un_patrón_de_expresión_regular#Uso_de_caracteres_especiales).
- Aserciones predictivas `[lookahead assertions]` positivas y negativas son soportadas. Las dos aserguran una comparación dependiente de lo que sigue en la cadena de texto que está siendo cotejada. Ver las entradas para `x(?=y) y x(?!y)` en la página: [Escribir un patrón de expresiónes regulares](/es/Guía_JavaScript_1.5/Escribir_un_patrón_de_expresión_regular#Uso_de_caracteres_especiales).
- La bandera m ha sido añadida para especificar que la expresión regular deberá cotejarse sobre múltiples líneas.

**Declaraciones condicionales de funciones**

Las funciones ahora pueden ser declaradas al interior de una cláusula if.

**Expresiones funcionales**

Las funciones ahora pueden ser declaradas al interior de una expresión.

**Cláusulas Catch múltiples**

Las cláusulas Catch múltiples en una sentencia try...catch son soportadas.

**Constantes**

Constantes nominadas como sólo de lectura son soportadas. Esta característica está disponible únicamente en la implementación C de JavaScript.

**Obtenedores y Modificadores (Getters and Setters)**

Los editores de JavaScript ahora pueden añadir obtenedores `[getters]` y modificadores `[setters]` a sus objetos. Esta característica está disponible únicamente en la implementación C de JavaScript.

### Qué debería saberse ya

Esta referencia asume que usted tiene a su respaldo el siguiente conocimiento básico:

- Un entendimiento general de la Internet y de la World Wide Web (WWW).
- Un conocimiento práctico del lenguaje de marcas para Hipertexto `[HyperText Markup Language]` ([HTML](/es/docs/Web/HTML)).

Es beneficioso alguna experiencia en programación en lenguajes como C o Visual Basic, pero no es requerido.

### Versiones de JavaScript

Cada versión del servidor Netscape Enterprise también soporta una versión diferente de JavaScript. Para ayudarle a escribir sus scripts para que sean compatibles con múltiples versiones de un servidor Enterprise, este manual lista la versión de JavaScript en la cual cada característica fue implementada.

La siguiente tabla lista las veriones de JavaScript soportadas por las diferentes versiones de Navegadores. Versiones de Navegadores anteriores a la 2.0 no soportan JavaScript.

#### JavaScript y Versiones de Navegadores

| Versión de JavaScript | Versión del Navegador                                        |
| --------------------- | ------------------------------------------------------------ |
| JavaScript 1.0        | Navegador 2.0                                                |
| JavaScript 1.1        | Navegador 3.0                                                |
| JavaScript 1.2        | Navegador 4.0-4.05                                           |
| JavaScript 1.3        | Navegador 4.06-4.7x                                          |
| JavaScript 1.4        | n/a                                                          |
| JavaScript 1.5        | Navegador 6.0, Mozilla 0.6x-0.9x (navegador de código abierto) |
| JavaScript 1.6        | Mozilla Firefox 1.5                                          |
| JavaScript 1.7        | Mozilla Firefox 2                                            |

Cada versión del servidor Netscape Enterprise también soporta una versión diferente de JavaScript. Para ayudarle a escribir sus scripts para que sean compatibles con múltiples versiones de un servidor Enterprise, este manual usa una abreviación para indicar la versión del servidor en el cual cada característica fue implementada.

#### JavaScript and Netscape Enterprise Server Versions

| Abbreviation | Enterprise Server Version      |
| ------------ | ------------------------------ |
| NES 2.0      | Netscape Enterprise Server 2.0 |
| NES 3.0      | Netscape Enterprise Server 3.0 |

### Dónde encontrar información de JavaScript

La documentación de JavaScript incluye los siguientes libros:

- [Guía de JavaScript 1.5](/es/Guía_JavaScript_1.5) provee la información sobre el lenguaje JavaScript y sus objetos.
- [Referencia de JavaScript 1.5](/es/Referencia_de_JavaScript_1.5) (éste manual) provee material de referencia para el lenguaje JavaScript.

Si usted es principiante con JavaScript, comience por la [Guía de JavaScript](/es/Guía_JavaScript_1.5) y una vez que haya obtenido firmes entendimientos de sus fundamentos, debe seguir con la [Referencia de JavaScript 1.5](/es/Referencia_de_JavaScript_1.5) para conseguir más detalles individuales acerca de los objetos y las sentencias.

### Convenciones en el documento

Las aplicaciones JavaScript se ejecutan en muchos sistemas operativos; la información en este libro se aplica a todas las versiones. Las rutas `[paths]` para archivos y directorios están dadas en un formato Windows (con backslashes separando los nombres de directorios). Para las versiones Unix, la ruta de los directorios son las mismas, excepto que deben usarse slashes en vez de backslashes para separar los directorios.

Esta guía utiliza los localizadores uniformes de recursos `[uniform resource locators]` (URLs) de la siguiente forma:

`http://servidor.dominio/path/file.html`

En estos URLs, "servidor" representa el nombre del servidor en el cual puede ejecutar su aplicación (p.e., busqueda1, www), "dominio" representa un nombre de dominio de Internet (p.e., netscape.com, uiuc.edu), "path" representa la estructura de directorios en el servidor y "file.html" representa un nombre individual de archivo. En general, los items en italica en un URLs se mantienen en su lugar y los items en un tipo normal de fuente monospace son literales. Si su servidor tiene habilitada la capa de sockets seguros `[Secure Sockets Layer]` (SSL), deberá usar https en lugar de http en el URL.

Esta guía utiliza las siguientes convenciones de tipo de fuente:

- La fuente `monospace font` es usada para listados de código y código de ejemplo, para las API y elementos del lenguaje (tales como nombres de métodos y nombres de propiedades), nombres de archivos, nombres de rutas, nombres de directorios, etiquetas HTML y cualquier texto que deberá ser digitado en la pantalla. (La fuente Monospace italic es usada para fijar lugares embedidos que deben mantenerse en el código.)
- El tipo _Italic type_ es usado para títulos de libros, para enfatizar, para variables y lugares que deben mantenerse y las palabras usadas en sentido literal.
- La negrillas **Boldface type** son utilizadas para términos del glosario.
