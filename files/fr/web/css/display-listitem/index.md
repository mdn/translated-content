---
title: <display-listitem>
slug: Web/CSS/display-listitem
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le mot-clé `list-item` permet à un élément de générer un pseudo-élément `::marker` dont le contenu est défini par les propriétés {{cssxref("list-style")}} (pour afficher une puce par exemple) avec une boîte principale du type indiquée pour organiser le contenu de l'élément.

## Syntaxe

Une valeur `list-item` indiquera à l'élément de se comporter comme un élément d'une liste. Cette valeur peut être utilisée avec les propriétés {{CSSxRef("list-style-type")}} et {{CSSxRef("list-style-position")}}.

> [!NOTE]
> Pour les navigateurs qui prennent en charge la syntaxe avec deux valeurs, si aucune valeur pour le mode intérieur n'est indiquée, sa valeur par défaut sera `flow`. Si aucune valeur n'est fournie pour le mode extérieur, la boîte principale aura un mode extérieur `block`.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div class="fausse-liste">Je vais m'afficher comme un élément de liste</div>
```

### CSS

```css
.fausse-liste {
  display: list-item;
  list-style-position: inside;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les types de données de la propriété {{CSSxRef("display")}}&nbsp;:
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
