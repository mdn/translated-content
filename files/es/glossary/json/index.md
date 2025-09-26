---
title: JSON
slug: Glossary/JSON
---

{{GlossarySidebar}}

**JSON (notación de objetos javascript)** es un formato de intercambio de datos. Es muy parecido a un subconjunto de sintaxis JavaScript, aunque no es un subconjunto en sentido estricto. (Ver JSON en la Referencia JavaScript para más detalles.) Aunque muchos lenguajes de programación lo soportan, JSON es especialmente útil al escribir cualquier tipo de aplicación basada en JavaScript, incluyendo sitios web y extensiones del navegador. Por ejemplo, es posible almacenar la información del usuario en formato JSON en una cookie o almacenar las preferencias de extensión en JSON en una cadena de valores de preferencias del navegador.

JSON es capaz de representar números, valores lógicos, cadenas, valores nulos, arreglos y matrices (secuencias ordenadas de valores) y objetos (mapas de cadena de valores) compuestos de estos valores (o de otras matrices y objetos). JSON no representa de manera nativa tipos de datos más complejos como funciones, expresiones regulares, fechas, y así sucesivamente (en objetos de fecha serializados por defecto como una cadena que contiene la fecha en formato ISO, al no hacerlo de ida y vuelta, la información no se pierde por completo). Si se necesita que JSON represente tipos de datos adicionales, se puede transformar los valores, ya que son serializados, o antes de su deserialización.

Más similar a XML, JSON tiene la capacidad de almacenar datos jerárquicos a diferencia del formato más tradicional CSV. Muchas herramientas proveen la "traducción" entre esos formatos tales como [JSON to CSV Converter](https://json-csv.com).
