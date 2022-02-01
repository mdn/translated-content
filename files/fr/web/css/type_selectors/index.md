---
title: Sélecteurs de type
slug: Web/CSS/Type_selectors
tags:
  - CSS
  - Reference
  - Sélecteur
translation_of: Web/CSS/Type_selectors
original_slug: Web/CSS/Sélecteurs_de_type
---
{{CSSRef("Selectors")}}

Les sélecteurs de type CSS ciblent des éléments en fonction du nom de leur nœud. Ainsi, lorsqu'un sélecteur de type est utilisé seul, il ciblera tous les éléments de ce type (autrement dit tous les nœuds avec ce nom) contenus dans le document.

```css
/* Cibler tous les éléments <a>. */
a {
  color: red;
}
```

## Syntaxe

    élément { style propriétés }

## Exemples

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Voici un élément <code>span</code> avec du texte.</span>
<p>Et là un élément <code>p</code>.</p>
<span>Enfin, un autre élément <code>span</code>.</span>
```

### Résultat

{{EmbedLiveSample('Exemples', 200, 150)}}

## Spécifications

| Spécification                                                                                            | État                                 | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS4 Selectors', '#type-selectors', 'Type (tag name) selector')}} | {{Spec2('CSS4 Selectors')}} | Aucune modification. |
| {{SpecName('CSS3 Selectors', '#type-selectors', 'type selectors')}}                 | {{Spec2('CSS3 Selectors')}} | Aucune modification. |
| {{SpecName('CSS2.1', 'selector.html#type-selectors', 'type selectors')}}         | {{Spec2('CSS2.1')}}             |                      |
| {{SpecName('CSS1', '#basic-concepts', 'type selectors')}}                             | {{Spec2('CSS1')}}             | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.type")}}
