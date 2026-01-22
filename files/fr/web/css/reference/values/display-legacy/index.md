---
title: <display-legacy>
slug: Web/CSS/Reference/Values/display-legacy
original_slug: Web/CSS/display-legacy
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<display-legacy>`** décrit les valeurs de la propriété `display` dans CSS 2. Utilisant une syntaxe avec un seul mot-clé comme valeur pour la propriété `display`, il fallait plusieurs mots-clés pour les différentes variantes bloc/en ligne d'un même mode. Cette page décrit ces valeurs.

## Syntaxe

Valeurs valides pour `<display-legacy>`&nbsp;:

- `inline-block`
  - : L'élément s'inscrit dans le contenu environnant comme une boîte en ligne et organise son propre contenu en bloc.

    Ce mot-clé est équivalent à la combinaison `inline flow-root`.

- `inline-table`
  - : La valeur `inline-table` n'a pas de correspondance directe en HTML. Un tel élément se comporte comme un élément HTML {{HTMLElement("table")}} avec une boîte en ligne et pas de bloc. À l'intérieur de la boîte de tableau, on aura un contexte de bloc.

    Ce mot-clé est équivalent à la combinaison `inline table`.

- `inline-flex`
  - : L'élément se comporte comme un élément en ligne et organise son propre contenu selon le modèle des boîtes flexibles.

    Ce mot-clé est équivalent à la combinaison `inline flex`.

- `inline-grid`
  - : L'élément se comporte comme un élément en ligne et organise son propre contenu selon le modèle des grilles CSS.

    Ce mot-clé est équivalent à la combinaison `inline grid`.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans l'exemple qui suit, on définit un conteneur flexible en ligne en utilisant le mot-clé historique `inline-flex`.

### HTML

```html
<div class="container">
  <div>Élément flexible</div>
  <div>Élément flexible</div>
</div>

Pas d'élément flexible
```

### CSS

```css
.container {
  display: inline-flex;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 150)}}

Avec la nouvelle syntaxe, on peut décrire le conteneur avec deux valeurs : la première pour le mode d'affichage extérieure (`inline`) et la seconde pour le mode d'affichage intérieur (`flex`).

```css
.container {
  display: inline flex;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les types de données de la propriété {{CSSxRef("display")}}&nbsp;:
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
