---
title: Parse (análisis sintáctico)
slug: Glossary/Parse
---

{{GlossarySidebar}}

"Parsing" significa analizar y convertir un programa en un formato interno que un entorno de ejecución pueda realmente ejecutar, por ejemplo el motor {{glossary("JavaScript")}} dentro de los navegadores.

El [navegador analiza el HTML](/docs/Web/Guide/HTML/HTML5/HTML5_Parser) en un árbol {{glossary('DOM')}}. El análisis de HTML implica la "[tokenización](/docs/Web/API/DOMTokenList)" (dividir en fragmentos) y en la construcción del árbol. Los "tokens" HTML incluyen etiquetas de inicio y final, así como nombres de atributos y valores. Si el documento está bien formado, el análisis sintáctico es más sencillo y rápido. El "parser" analiza la entrada simbólica en el documento, construyendo el árbol del documento.

Cuando el analizador de HTML encuentra recursos que no bloquean, como una imagen, el navegador solicitará esos recursos y continuará analizando. El análisis puede continuar cuando se encuentra un archivo CSS, pero las etiquetas `<script>` —particularmente aquellas sin un atributo [`async`](/es/docs/Web/JavaScript/Reference/Statements/async_function) o `defer`— bloquean el renderizado, y pausa el análisis de HTML.

Cuando el navegador encuentra estilos CSS, analiza el texto en el Modelo de Objetos CSS (o {{glossary('CSSOM')}}), una estructura de datos que luego utiliza para diseñar la distribución y el pintado. El navegador crea entonces un árbol de "renderizado" (dibujado) a partir de ambas estructuras para poder pintar el contenido en la pantalla. También se descarga el JavaScript, se analiza y luego se ejecuta.

El análisis de JavaScript se hace durante {{glossary("compile time")}} o cuando se invoca el {{glossary("parser")}}, como durante una llamada a un método.

## Aprende más

### Conocimiento general

- [Parse](https://en.wikipedia.org/wiki/Parsing) en Wikipedia (inglés)
- [Analizador sintáctico](https://es.wikipedia.org/wiki/Analizador_sint%C3%A1ctico) en Wikipedia
