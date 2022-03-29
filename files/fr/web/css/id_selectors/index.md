---
title: Sélecteurs d'ID
slug: Web/CSS/ID_selectors
tags:
  - CSS
  - Débutant
  - Reference
  - Sélecteur
translation_of: Web/CSS/ID_selectors
original_slug: Web/CSS/Sélecteurs_d_ID
---
{{CSSRef("Selectors")}}

Un sélecteur d'identifiant (_ID selector_) permet, pour un document HTML, de cibler un élément grâce à la valeur de son attribut {{htmlattrxref("ID")}}. Il faut que la valeur soit exactement la même que celle du sélecteur pour que l'élément soit effectivement ciblé.

```css
/* L'élément avec l'identifiant id="demo" */
#demo {
  border: red 2px solid;
}
```

## Syntaxe

    #valeur_identifiant { déclarations }

> **Note :** Cela est équivalent à la notation suivante qui utilise un {{cssxref("Sélecteurs_d_attribut", "sélecteur d'attribut")}}:
>
>     [id=valeur_identifiant] { déclarations }

## Exemples

### CSS

```css
#identifie {
  background-color: blue;
}
```

### HTML

```html
<span id="identifie">Voici un span avec du texte.</span>
<span>Et un autre (mais sans identifiant).</span>
```

### Résultat

{{EmbedLiveSample("Exemples", 200, 50)}}

## Spécifications

| Spécification                                                                                | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS4 Selectors", "#id-selectors", "ID selectors")}}         | {{Spec2("CSS4 Selectors")}} |                      |
| {{SpecName("CSS3 Selectors", "#id-selectors", "ID selectors")}}         | {{Spec2("CSS3 Selectors")}} |                      |
| {{SpecName("CSS2.1", "selector.html#id-selectors", "ID selectors")}} | {{Spec2("CSS2.1")}}             |                      |
| {{SpecName("CSS1", "#id-as-selector", "ID selectors")}}                     | {{Spec2("CSS1")}}             | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.id")}}
