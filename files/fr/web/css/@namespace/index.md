---
title: "@namespace"
slug: Web/CSS/@namespace
---

{{CSSRef}}

**`@namespace`** est [une règle @](/fr/docs/Web/CSS/Règles_@) qui définit [les espaces de noms XML](/fr/docs/Glossaire/Namespace) utilisés dans une feuille de style CSS. Les espaces de noms définis sont alors utilisés pour restreindre les sélecteurs [universels](/fr/docs/Web/CSS/Sélecteurs_universels), [de type](/fr/docs/Web/CSS/Sélecteurs_de_type), et [d'attribut](/fr/docs/Web/CSS/Sélecteurs_d_attribut) afin que ceux-ci ne sélectionnent que les éléments contenus dans cet espace de nom. La règle `@namespace` est généralement utilisée lorsqu'on manipule des documents entremêlant différents espaces de noms (par exemple, un document HTML5 qui contient du SVG en ligne ou du MathML ou alors un fichier XML qui est composé de plusieurs vocabulaires).

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* Cela correspond à tous les éléments XHTML <a>
  car XHTML est l'espace de nom par défaut, sans
  préfixe. */
a {
}

/* Cela correspond à tous les éléments SVG <a> */
svg|a {
}

/* Cela correspond aux éléments <a> XHTML et SVG */
*|a {
}
```

Les règles `@namespace` doivent suivre les règles @ {{cssxref("@charset")}} et {{cssxref("@import")}} et précéder les autres règles @ ainsi que les déclarations de style contenus dans la feuille de style.

`@namespace` peut être utilisée afin de définir **l'espace de noms par défaut** de la feuille de style. Lorsqu'un espace de noms par défaut est définit, les sélecteurs universels et les sélecteurs de types (pas les sélecteurs d'attribut, cf. note ci-après) ne s'appliqueront qu'aux éléments de cet espace de noms.

La règle `@namespace` peut également être utilisée afin de définir **un préfixe d'espace de noms**. Lorsqu'un sélecteur universel, de type ou d'attribut est préfixé avec le préfixe de l'espace de noms, ce sélecteur ne ciblera les éléments que si l'espace de nom **et** le nom ou l'attribut de l'élément correspond.

En [HTML5](/fr/docs/Glossaire/HTML5), les [éléments étrangers](https://html.spec.whatwg.org/#foreign-elements) connus seront automatiquement affectés à des espaces de noms. Cela signifie que les éléments HTML se comporteront comme s'ils appartenaient à l'espace de noms XHTML (`http://www.w3.org/1999/xhtml`) même s'il n'y a aucun attribut `xmlns` dans le document. Les éléments [`<svg>`](/fr/docs/Web/SVG/Element/svg) et [`<math>`](/fr/docs/Web/MathML/Element/math) seront affectés à leurs espaces de noms respectifs (`http://www.w3.org/2000/svg` et `http://www.w3.org/1998/Math/MathML`).

> **Note :** En XML, sauf si un préfixe est directement apposé sur l'attribut (ex. `xlink:href`), cet attribut n'est rattaché à aucun espace de noms. Autrement dit, les attributs n'héritent pas de l'espace de noms de l'élément auquel ils sont rattachés. Afin de respecter ce comportement, l'espace de noms par défaut n'est pas appliqué aux sélecteurs d'attributs.

## Syntaxe

```css
/* Espace de noms par défaut */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* Espace de noms préfixé */
@namespace préfixe url(XML-namespace-URL);
@namespace préfixe "XML-namespace-URL";
```

### Syntaxe formelle

{{csssyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
