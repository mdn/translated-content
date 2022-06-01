---
title: Whitespace
slug: Glossary/Whitespace
tags:
  - Glossaire
  - Grammaire lexicale
  - espace blanc
  - whitespace
translation_of: Glossary/Whitespace
original_slug: Glossaire/Whitespace
---
**Whitespace** sont un ensemble de {{Glossary("Character", "characters")}} qui est utilisé pour afficher des espaces horizontaux ou verticaux entre d'autres caractères. Ils sont souvent utilisés pour séparer les jetons dans {{Glossary("HTML")}}, {{Glossary("CSS")}}, {{Glossary("JavaScript")}}, et dans d'autres langages informatiques. Les caractères whitespace et leur utilisation varient selon les langages.

## En HTML

[HTML Living Standard](https://html.spec.whatwg.org/) spécifie 5 caractères comme whitespace ASCII : U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, et U+0020 SPACE. Sous forme de texte, ils sont traités comme des espaces normaux et les espaces séquentiels sont réduits comme un seul espace dans de nombreux cas (ce comportement peut être modifié par la propriété CSS {{cssxref("white-space")}} ). Ils sont également utilisés comme séparateur d'un nom d'élément et de ses paramètres, noms de classe, etc.

## En JavaScript

[ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-white-space) spécifie plusieurs points de code Unicode sous forme de white space: U+0009 CHARACTER TABULATION \<TAB>, U+000B LINE TABULATION \<VT>, U+000C FORM FEED \<FF>, U+0020 SPACE \<SP>, U+00A0 NO-BREAK SPACE \<NBSP>, U+FEFF ZERO WIDTH NO-BREAK SPACE \<ZWNBSP> et autre catégorie “Zs” Tout autre point de code Unicode “Séparateur, esspace” \<USP>. Ces caractères sont généralement inutiles pour la fonctionnalité du code.

## Voir aussi

1.  Spécifications

    1.  [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace)
    2.  [ECMAScript® 2015 Language Specification](https://www.ecma-international.org/ecma-262/6.0/#sec-white-space)

2.  Références

    1.  [How whitespace is handled by HTML, CSS, and in the DOM](/fr/docs/Web/API/Document_Object_Model/Whitespace)
    2.  {{cssxref("white-space")}}

3.  Articles Wikipedia

    1.  {{interwiki("wikipedia", "Whitespace character")}}

4.  [Glossaire](/fr/docs/Glossaire)

    1.  {{Glossary("Character")}}
