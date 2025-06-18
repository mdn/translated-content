---
title: Unicode
slug: Glossary/Unicode
---

{{GlossarySidebar}}

Unicode es un {{Glossary("Character set", "conjunto de caracteres")}} estándar que numera y define {{Glossary("Character", "caracteres")}} de diferentes idiomas, sistemas de escritura y símbolos. Al asignar un número a cada caracter, los programadores pueden crear {{Glossary("Character encoding", "codificaciones de caracteres")}}, para permitir que las computadoras almacenen, procesen y transmitan cualquier combinación de idiomas en el mismo archivo o programa.

Antes de Unicode, era difícil y propenso a errores mezclar idiomas en los mismos datos. Por ejemplo, un juego de caracteres almacenaría caracteres japoneses y otro almacenaría el alfabeto árabe. Si no estuviera claramente marcado qué partes de los datos estaban en qué juego de caracteres, otros programas y computadoras mostrarían el texto incorrectamente o lo dañarían durante el procesamiento. Si alguna vez has visto texto en el que caracteres como comillas entrecruzadas (`“”`) fueron reemplazadas por un galimatías como `Ã‚Â£`, entonces has visto este problema, conocido como [Mojibake](https://es.wikipedia.org/wiki/Mojibake).

La codificación de caracteres Unicode más común en la Web es {{Glossary("UTF-8")}}. Existen otras codificaciones, como UTF-16 o la obsoleta UCS-2, pero se recomienda UTF-8.

## Aprende más

- [Unicode](https://es.wikipedia.org/wiki/Unicode) en Wikipedia
- [El estándar Unicode: Introducción técnica](https://www.unicode.org/standard/principles.html)
