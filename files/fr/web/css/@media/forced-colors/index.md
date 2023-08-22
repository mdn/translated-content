---
title: forced-colors
slug: Web/CSS/@media/forced-colors
---

{{CSSRef}}{{SeeCompatTable}}

La [caractéristique média](</fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries#Caractéristiques_média_(media_features)>) **`forced-colors`** est utilisée afin de détecter si l'utilisateur a choisi une palette de couleur restreinte via le navigateur ou l'agent utilisateur.

> **Note :** Cette fonctionnalité n'est pas encore implémentée par aucun agent utilisateur

## Valeurs

- `none`
  - : La palette de couleur n'est pas restreinte.
- `active`
  - : La palette de couleur est restreinte et c'est l'agent utilisateur qui fournira la palette utilisable via un système de mots-clés de couleurs CSS systèmes. La valeur de `prefers-color-scheme` sera également mise à jour afin que les auteurs puissent adapter la page.

## Préférences utilisateur

À l'heure actuelle, aucun agent utilisateur n'implémente cette fonctionnalité bien que de nombreux systèmes d'exploitation prennent en charge ce type de paramètre.

## Exemples

Dans cet exemple, les couleurs utilisées par défaut sont exotiques voire illisibles. On tire ici parti d'une requête média pour utiliser une palette restreinte de l'agent utilisateur.

### HTML

```html
<div class="colors">quelques couleurs étranges</div>
```

### CSS

```css
.colors {
  background-color: red;
  color: grey;
}

@media (forced-colors: active) {
  .colors {
    background-color: white;
    color: black;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

{{QuickLinksWithSubpages("/fr/docs/Web/CSS/@media/")}}
