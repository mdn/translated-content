---
title: ::details-content
slug: Web/CSS/Reference/Selectors/::details-content
original_slug: Web/CSS/::details-content
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::details-content`** représente le contenu extensible/collapsible d'un élément {{HTMLElement("details")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: ::details-content", "tabbed-shorter")}}

```css interactive-example
details[open]::details-content {
  color: dodgerblue;
  padding: 0.5em;
  border: thin solid grey;
}
```

```html interactive-example
<details open>
  <summary>Exemple de résumé</summary>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p>
    Architecto cupiditate ea optio modi quas sequi, esse libero asperiores
    debitis eveniet commodi hic ad.
  </p>
</details>
```

## Syntaxe

```css
selector::details-content {
  /* ... */
}
```

## Exemples

### Exemple simple

Dans cet exemple, le pseudo-élément `::details-content` est utilisé pour définir une {{cssxref("background-color")}} sur le contenu de l'élément {{HTMLElement("details")}}.

#### HTML

```html
<details>
  <summary>Cliquez ici</summary>
  <p>Voici un contenu</p>
</details>
```

#### CSS

```css
details::details-content {
  background-color: #a29bfe;
}
```

#### Résultat

{{EmbedLiveSample("exemple_simple", "100%", 150)}}

### Exemple de transition

Dans cet exemple, le pseudo-élément `::details-content` est utilisé pour définir une {{cssxref("transition")}} sur le contenu de l'élément {{HTMLElement("details")}} afin qu'il s'affiche en douceur lorsqu'il est développé, et disparaisse à nouveau lorsqu'il est réduit. Pour ce faire, deux transitions distinctes sont spécifiées à l'intérieur de la propriété abrégée `transition`&nbsp;:

- La propriété {{cssxref("opacity")}} reçoit une transition de base de `600ms` pour créer l'effet de fondu en entrée/sortie.
- La propriété {{cssxref("content-visibility")}} (qui est basculée entre `hidden` et `visible` lorsque le contenu `<details>` est développé/réduit) reçoit également une transition de base de `600ms`, mais avec la valeur {{cssxref("transition-behavior")}} `allow-discrete` spécifiée. Cela permet au navigateur de démarrer une transition sur `content-visibility`, dont le comportement d'animation est [discret](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète). L'effet est que le contenu est visible pendant toute la durée de la transition, permettant aux autres transitions d'être vues. Si cette transition n'était pas incluse, le contenu disparaîtrait immédiatement lorsque le contenu `<details>` serait réduit — vous ne verriez pas le fondu en douceur.

#### HTML

```html
<details>
  <summary>Cliquez ici</summary>
  <p>Voici un contenu</p>
</details>
```

#### CSS

```css
details::details-content {
  opacity: 0;
  transition:
    opacity 600ms,
    content-visibility 600ms allow-discrete;
}

details[open]::details-content {
  opacity: 1;
}
```

#### Résultat

{{EmbedLiveSample("exemple_de_transition", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTMLElement("details")}}
- {{HTMLElement("summary")}}
