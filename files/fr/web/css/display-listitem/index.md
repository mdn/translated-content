---
title: <display-listitem>
slug: Web/CSS/display-listitem
tags:
  - CSS
  - Reference
  - Type de donnée
translation_of: Web/CSS/display-listitem
---
{{CSSRef}}

Le mot-clé `list-item` permet à un élément de générer un pseudo-élément `::marker`  dont le contenu  est défini par les propriétés {{cssxref("list-style")}} (pour afficher une puce par exemple) avec une boîte principale du type indiquée pour organiser le contenu de l'élément.

## Syntaxe

Une valeur `list-item` indiquera à l'élément de se comporter comme un élément d'une liste. Cette valeur peut être utilisée avec les propriétés {{CSSxRef("list-style-type")}} et {{CSSxRef("list-style-position")}}.

> **Note :** Pour les navigateurs qui prennent en charge la syntaxe avec deux valeurs, si aucune valeur pour le mode intérieur n'est indiquée, sa valeur par défaut sera `flow`. Si aucune valeur n'est fournie pour le mode extérieur, la boîte principale aura un mode extérieur `block`.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.fausse-liste {
  display: list-item;
  list-style-position: inside;
}
```

### HTML

```html
<div class="fausse-liste">Je vais m'afficher comme un élément de liste</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 150)}}

## Compatibilité des navigateurs

### Prise en charge de `list-item`

{{Compat("css.properties.display.list-item", 10)}}

## Voir aussi

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
