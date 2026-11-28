---
title: BiDi
slug: Glossary/BiDi
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**BiDi** (bidireccional) describe un documento que contiene texto tanto de derecha a izquierda (RTL) como de izquierda a derecha (LTR).

Las interfaces de usuario deberían mostrar correctamente el contenido BiDi, pero muchas fallan. Un ejemplo es la traducción al hebreo del nombre Sarah: שרה, que se escribe (de derecha a izquierda) sin (ש), resh (ר) y heh (ה). Muchos programas mostrarían las letras en el orden inverso.

Se puede cambiar el orden de visualización de izquierda a derecha por uno de derecha a izquierda, pero hacerlo implica renunciar a mostrar correctamente las escrituras BiDi: siempre habrá al menos una que se muestre de forma incorrecta. Gracias a la compatibilidad con las escrituras bidireccionales, se pueden mezclar caracteres de distintas escrituras en la misma página, sin importar la dirección de escritura.

El estándar Unicode proporciona las bases para una compatibilidad completa con BiDi, con reglas detalladas sobre cómo deben codificarse y mostrarse las mezclas de escrituras de izquierda a derecha y de derecha a izquierda.

## Véase también

- Términos relacionados del glosario:
  - {{glossary("Unicode")}}
- [Texto bidireccional](https://es.wikipedia.org/wiki/Texto_bidireccional) en Wikipedia
- [UAX#9: Unicode Bi-directional Algorithm](https://www.unicode.org/reports/tr9)
