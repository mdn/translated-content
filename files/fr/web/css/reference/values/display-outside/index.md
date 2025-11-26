---
title: <display-outside>
slug: Web/CSS/Reference/Values/display-outside
original_slug: Web/CSS/display-outside
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<display-outside>`** définit le type d'affichage externe ({{CSSxRef("display")}}) d'un élément, c'est-à-dire son rôle dans le flux de mise en page. Ces mots-clés sont utilisés comme valeurs de la propriété `display` et peuvent, pour des raisons historiques, être utilisés seuls ou, comme défini dans la spécification de niveau 3, en combinaison avec une valeur parmi les mots-clés {{CSSxRef("&lt;display-inside&gt;")}}.

## Syntaxe

Valeurs valides pour `<display-outside>`&nbsp;:

- `block`
  - : L'élément génère une boîte de type bloc, ce qui ajoute des retours à la ligne avant et après l'élément dans le flux normal.
- `inline`
  - : L'élément génère une ou plusieurs boîtes en ligne qui n'ajoutent pas de retour à la ligne avant ou après elles-mêmes. Dans un flux normal, l'élément suivant sera sur la même ligne si l'espace le permet.

> [!NOTE]
> Lorsque les navigateurs rencontrent une propriété `display` avec uniquement une valeur **externe** (par exemple, `display: block` ou `display: inline`), la valeur interne par défaut est `flow` (par exemple, `display: block flow` et `display: inline flow`).
> Cela reste compatible avec la syntaxe à un seul mot-clé.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans l'exemple suivant, les éléments {{HTMLElement("span")}}, normalement affichés comme des éléments en ligne, sont paramétrés avec `display: block` et passent à la ligne en étendant leur conteneur selon l'axe en ligne.

### HTML

```html
<span>span 1</span> <span>span 2</span>
```

### CSS

```css
span {
  display: block;
  border: 1px solid rebeccapurple;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les types de données de la propriété {{CSSxRef("display")}}&nbsp;:
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Disposition bloc et en ligne dans le flux normal](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Explication des contextes de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts)
