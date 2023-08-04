---
title: Sélecteurs d'ID
slug: Web/CSS/ID_selectors
---

{{CSSRef("Selectors")}}

Un sélecteur d'identifiant (_ID selector_) permet, pour un document HTML, de cibler un élément grâce à la valeur de son attribut [`id`](/fr/docs/Web/HTML/Global_attributes#id). Il faut que la valeur soit exactement la même que celle du sélecteur pour que l'élément soit effectivement ciblé.

```css
/* L'élément avec l'identifiant id="demo" */
#demo {
  border: red 2px solid;
}
```

## Syntaxe

```
#valeur_identifiant { déclarations }
```

> **Note :** Cela est équivalent à la notation suivante qui utilise un {{cssxref("Sélecteurs_d_attribut", "sélecteur d'attribut")}}:
>
> ```
> [id=valeur_identifiant] { déclarations }
> ```

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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
