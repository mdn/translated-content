---
title: "::marker"
slug: Web/CSS/::marker
---

{{CSSRef}}{{SeeCompatTable}}

Le pseudo-élément **`::marker`** représente le marqueur d'un élément d'une liste (par exemple la puce ou le numéro de l'élément d'un élément {{HTMLElement("li")}}). Ce pseudo-élément ne fonctionne que pour les éléments ou pseudo-éléments pour lesquels {{cssxref("display")}} vaut `list-item` (par défaut c'est le cas des éléments {{htmlelement("li")}} et {{htmlelement("summary")}}).

```css
::marker {
  color: red;
  font-size: 1.5em;
}
```

## Propriétés autorisées

Seul un sous-ensemble de propriétés CSS peuvent être utilisées pour une règle qui utilise `::marker` :

- {{cssxref("color")}},
- {{cssxref("text-combine-upright")}}, {{cssxref("unicode-bidi")}} et {{cssxref("direction")}}
- {{cssxref("content")}}
- [Toutes les propriétés liées aux polices (font).](/fr/docs/Web/CSS/CSS_Fonts)

> **Note :** La spécification indique que d'autres propriétés CSS pourraient être prises en charge à l'avenir.

## Syntaxe

{{CSSSyntax}}

## Exemples

### CSS

```css
li::marker {
  color: red;
}
```

### HTML

```html
<ol>
  <li>Savoir lacer ses chaussures</li>
  <li>Et compter deux par deux.</li>
</ol>
```

### Résultat

{{EmbedLiveSample("Exemples","200","150")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML relatifs aux listes :

  - {{htmlelement("ul")}}
  - {{htmlelement("ol")}}
  - {{htmlelement("li")}}

- {{htmlelement("summary")}}
