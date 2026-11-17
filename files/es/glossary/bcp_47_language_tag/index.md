---
title: Etiqueta de idioma BCP 47
slug: Glossary/BCP_47_language_tag
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Una **etiqueta de idioma BCP 47** es una cadena de caracteres que especifica con precisión un idioma humano mediante el idioma básico y, opcionalmente, el sistema de escritura y el dialecto. Por ejemplo, `en` indica el inglés, mientras que `en-GB` y `en-US` indican con más precisión el inglés británico y el inglés estadounidense, respectivamente.

Las etiquetas de idioma BCP 47 se usan en cualquier parte de la plataforma web donde una funcionalidad se haya diseñado para producir resultados distintos según el idioma especificado, lo que permite admitir la {{glossary("internationalization", "internacionalización")}}.

Algunos ejemplos son:

- El atributo HTML [`lang`](/es/docs/Web/HTML/Reference/Global_attributes/lang)
- El elemento HTML {{htmlelement("track")}}
- El objeto {{jsxref("Temporal")}}
- La propiedad {{domxref("CanvasRenderingContext2D.lang")}}
- Las [Translator and Language Detector APIs](/es/docs/Web/API/Translator_and_Language_Detector_APIs)

## Sintaxis de BCP 47

La sintaxis completa de BCP 47 se especifica en {{rfc("5646")}}. Permite identificar dialectos extremadamente específicos, pero la mayoría de los usos son mucho más sencillos.

Una etiqueta de idioma se compone de _subetiquetas_ separadas por guiones, y cada subetiqueta indica una propiedad determinada del idioma. Las tres subetiquetas más comunes son:

- Subetiqueta de idioma
  - : Un código de 2 o 3 caracteres que define el idioma básico y que suele escribirse íntegramente en minúsculas. Por ejemplo, el código del inglés es `en` y el del badeshi es `bdz`.
- Subetiqueta de escritura {{optional_inline}}
  - : Esta subetiqueta define el sistema de escritura que se usa para el idioma y siempre tiene 4 caracteres, con la primera letra en mayúscula. Por ejemplo, el francés en braille es `fr-Brai` y el japonés escrito en katakana es `ja-Kana`.

    > [!NOTE]
    > Si el idioma se escribe de la forma más habitual, como el inglés en alfabeto latino, no es necesario usar esta subetiqueta.

- Subetiqueta de región {{optional_inline}}
  - : Esta subetiqueta define un dialecto del idioma base propio de un lugar concreto y puede estar formada por dos letras mayúsculas, que coinciden con un código de país, o por tres números, que coinciden con una zona que no es un país. Por ejemplo, `es-ES` es el español hablado en España y `es-013` es el español hablado en Centroamérica. El "español internacional" sería simplemente `es`.

Si están presentes ambas, la subetiqueta de escritura precede a la de región: `ru-Cyrl-BY` es el ruso escrito en alfabeto cirílico, tal como se habla en Bielorrusia.

## Véase también

- [Lista de subetiquetas de idioma primarias comunes](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags)
- [RFC 5646: etiquetas para identificar idiomas](https://datatracker.ietf.org/doc/html/rfc5646): donde se especifican las etiquetas de idioma BCP 47.
- [Elegir una etiqueta de idioma](https://www.w3.org/International/questions/qa-choosing-language-tags): guía del W3C sobre cómo elegir la etiqueta de idioma adecuada.
- [Búsqueda de subetiquetas de idioma BCP 47](https://r12a.github.io/app-subtags/): busca los códigos de subetiqueta de un idioma.
