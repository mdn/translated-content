---
title: <display-internal>
slug: Web/CSS/Reference/Values/display-internal
original_slug: Web/CSS/display-internal
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<display-internal>`** définit les modes de disposition tels que `table` et `ruby` possèdent une structure interne complexe avec différents roles pour les éléments enfants et descendants. Cette page décrit ces valeurs «&nbsp;internes&nbsp;» pour `display` et qui s'appliquent dans un mode donné.

## Syntaxe

Valeurs valides pour `<display-internal>`&nbsp;:

- `table-row-group`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("tbody")}}.
- `table-header-group`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("thead")}}.
- `table-footer-group`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("tfoot")}}.
- `table-row`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("tr")}}.
- `table-cell`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("td")}}.
- `table-column-group`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("colgroup")}}.
- `table-column`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("col")}}.
- `table-caption`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("caption")}}.
- `ruby-base`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("rb")}}.
- `ruby-text`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("rt")}}.
- `ruby-base-container`
  - : Ces éléments sont générés comme des boîtes anonymes.
- `ruby-text-container`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("rtc")}}.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemples de tableaux CSS

L'exemple suivant démontre la mise en page d'un formulaire en utilisant la disposition de tableau CSS.

#### HTML

```html
<main>
  <div>
    <label for="name">Nom</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Âge</label>
    <input type="text" id="age" name="age" />
  </div>
</main>
```

#### CSS

```css
main {
  display: table;
}

div {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin: 5px;
}
```

#### Résultat

{{EmbedLiveSample('Exemples de tableaux CSS', '100%', 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les types de données de la propriété {{CSSxRef("display")}}&nbsp;:
  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
