---
title: Sélecteurs universels
slug: Web/CSS/Universal_selectors
tags:
  - CSS
  - Reference
  - Sélecteur
translation_of: Web/CSS/Universal_selectors
original_slug: Web/CSS/Sélecteurs_universels
---
{{CSSRef("Selectors")}}

L'astérisque (\*) est le sélecteur universel en CSS. Il correspond à un élément de n'importe quel type.

```css
* {
  color: green;
}
```

En CSS 3, l'astérisque peut être combinée avec les espaces de nom :

- `ns|*` - correspond à tous les éléments de l'espace de noms `ns`
- `*|*` - correspond à tous les éléments
- `|*` - correspond à tous les éléments sans espace de noms déclaré

## Syntaxe

    * { style properties }

L'astérisque est optionnelle lorsqu'elle est utilisée avec des sélecteurs simples. Par exemple, `*.warning` et `.warning` seront équivalents.

## Exemples

### CSS

```css
* [lang^=fr] {
  color:green;
}

*.warning {
  color:red;
}

*#maincontent {
  border: 1px solid blue;
}

.floating {
  float: left;
}

.floating + * {
  clear: left;
}
```

### HTML

```html
<p class="warning">
  <span lang="fr">Un span vert</span> dans un paragraphe rouge.
</p>
<p id="maincontent" lang="fr">
  <span class="warning">Un span rouge</span> dans un paragraphe vert.
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', 250, 100)}}

## Spécifications

| Spécification                                                                                                | État                                 | Commentaires                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS4 Selectors', '#the-universal-selector', 'universal selector')}}     | {{Spec2('CSS4 Selectors')}} | Aucune modification.                                                                                                           |
| {{SpecName('CSS3 Selectors', '#universal-selector', 'universal selector')}}         | {{Spec2('CSS3 Selectors')}} | Définition du comportement avec les espaces de noms et ajout d'indications pour omettre le sélecteur avec les pseudo-éléments. |
| {{SpecName('CSS2.1', 'selector.html#universal-selector', 'universal selector')}} | {{Spec2('CSS2.1')}}             | Définition initiale.                                                                                                           |

## Compatibilité des navigateurs

{{Compat("css.selectors.universal")}}
