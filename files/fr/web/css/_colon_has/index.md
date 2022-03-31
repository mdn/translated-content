---
title: ':has'
slug: Web/CSS/:has
tags:
  - CSS
  - Experimental
  - Pseudo-classe
  - Reference
  - Sélecteur
translation_of: Web/CSS/:has
---
{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:has()`** permet de cibler un élément si au moins un des sélecteurs passés en paramètre correspond à l'élément (selon la portée, {{cssxref(":scope")}}, de l'élément).

Cette pseudo-classe `:has()` prend en paramètre une liste de sélecteurs.

> **Note :** Pour des raisons de performances et dans la spécification actuelle, [`has()` n'est pas classé comme un sélecteur dynamique](https://drafts.csswg.org/selectors/#live-profile) et peut uniquement être utilisé de façon statique (par exemple avec des fonctions comme {{domxref("document.querySelector()")}}.

```js
/* Avec cette ligne de JavaScript, on récupère  */
/* tous les éléments <a> qui ont un fils direct */
/* qui est un élément <img> */
/* Attention, actuellement cette fonction n'est */
/* pas prise en charge par les navigateurs et   */
/* n'est pas conçue pour fonctionner dans les   */
/* feuilles de style */
var test = document.querySelector('a:has(> img)');
```

## Syntaxe

    :has(liste_selecteurs) { proprietes }

## Exemples

Dans l'exemple suivant, le sélecteur permet de cibler uniquement les éléments {{HTMLElement("a")}} qui contiennent un fils direct {{HTMLElement("img")}} :

```css
a:has(> img)
```

Le sélecteur qui suit correspond aux éléments {{HTMLElement("h1")}} qui précèdent directement un élément {{HTMLElement("p")}} :

```css
h1:has(+ p)
```

## Spécifications

| Spécification                                                            | État                                 | Commentaires        |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName("CSS4 Selectors", "#relational", ":has()")}} | {{Spec2("CSS4 Selectors")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("css.selectors.has")}}
