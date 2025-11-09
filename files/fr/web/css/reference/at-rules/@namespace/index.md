---
title: "@namespace"
slug: Web/CSS/Reference/At-rules/@namespace
original_slug: Web/CSS/@namespace
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@namespace`** définie [les espaces de noms XML](/fr/docs/Glossary/Namespace) utilisés dans une feuille de style CSS. Les espaces de noms définis sont alors utilisés pour restreindre les sélecteurs [universels](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors), [de type](/fr/docs/Web/CSS/Reference/Selectors/Type_selectors), et [d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) afin que ceux-ci ne sélectionnent que les éléments contenus dans cet espace de nom. La règle `@namespace` est généralement utilisée lorsqu'on manipule des documents entremêlant différents espaces de noms (par exemple, un document HTML5 qui contient du SVG en ligne ou du MathML ou alors un fichier XML qui est composé de plusieurs vocabulaires).

{{InteractiveExample("Démonstration CSS&nbsp;: @namespace", "tabbed-shorter")}}

```css interactive-example
@namespace svg url("http://www.w3.org/2000/svg");

a {
  color: orangered;
  text-decoration: underline dashed;
  font-weight: bold;
}

svg|a {
  fill: blueviolet;
  text-decoration: underline solid;
  text-transform: uppercase;
}
```

```html interactive-example
<p>
  <a href="#">Ceci est un lien HTML ordinaire</a>
</p>

<svg width="250px" viewBox="0 0 250 20" xmlns="http://www.w3.org/2000/svg">
  <a href="#">
    <text x="0" y="15">Ceci est un lien créé en SVG</text>
  </a>
</svg>
```

## Syntaxe

```css
/* Espace de noms par défaut */
@namespace url(XML-namespace-URL);
@namespace "XML-namespace-URL";

/* Espace de noms préfixé */
@namespace préfixe url(XML-namespace-URL);
@namespace préfixe "XML-namespace-URL";
```

## Description

Les règles `@namespace` doivent suivre les règles @ {{cssxref("@charset")}} et {{cssxref("@import")}} et précéder les autres règles @ ainsi que les déclarations de style contenus dans la feuille de style.

`@namespace` peut être utilisée afin de définir **l'espace de noms par défaut** de la feuille de style. Lorsqu'un espace de noms par défaut est définit, les sélecteurs universels et les sélecteurs de types (pas les sélecteurs d'attribut, cf. note ci-après) ne s'appliqueront qu'aux éléments de cet espace de noms.

La règle `@namespace` peut également être utilisée afin de définir **un préfixe d'espace de noms**. Lorsqu'un sélecteur universel, de type ou d'attribut est préfixé avec le préfixe de l'espace de noms, ce sélecteur ne ciblera les éléments que si l'espace de nom **et** le nom ou l'attribut de l'élément correspond.

En HTML, les [éléments étrangers <sup>(angl.)</sup>](https://html.spec.whatwg.org/#foreign-elements) connus seront automatiquement affectés à des espaces de noms. Cela signifie que les éléments HTML se comporteront comme s'ils appartenaient à l'espace de noms XHTML (`http://www.w3.org/1999/xhtml`) même s'il n'y a aucun attribut `xmlns` dans le document. Les éléments [`<svg>`](/fr/docs/Web/SVG/Reference/Element/svg) et [`<math>`](/fr/docs/Web/MathML/Reference/Element/math) seront affectés à leurs espaces de noms respectifs (`http://www.w3.org/2000/svg` et `http://www.w3.org/1998/Math/MathML`).

> [!NOTE]
> En XML, sauf si un préfixe est directement apposé sur l'attribut (ex. `xlink:href`), cet attribut n'est rattaché à aucun espace de noms. Autrement dit, les attributs n'héritent pas de l'espace de noms de l'élément auquel ils sont rattachés. Afin de respecter ce comportement, l'espace de noms par défaut n'est pas appliqué aux sélecteurs d'attributs.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Définition des espaces de noms par défaut et préfixés

```css
@namespace url("http://www.w3.org/1999/xhtml");
@namespace svg url("http://www.w3.org/2000/svg");

/* Ceci correspond à tous les éléments <a> XHTML, car XHTML est l'espace de noms par défaut sans préfixe */
a {
}

/* Ceci correspond à tous les éléments <a> SVG */
svg|a {
}

/* Ceci correspond à tous les éléments <a> XHTML et SVG */
*|a {
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Introduction aux espaces de noms](/fr/docs/Web/SVG/Guides/Namespaces_crash_course)
- [Fonctions des règles @ CSS](/fr/docs/Web/CSS/CSS_syntax/At-rule_functions)
