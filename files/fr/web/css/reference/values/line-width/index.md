---
title: Type CSS `<line-width>`
short-title: <line-width>
slug: Web/CSS/Reference/Values/line-width
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) {{Glossary("enumerated", "énuméré")}} [CSS](/fr/docs/Web/CSS) **`<line-width>`** représente la longueur ou la valeur clé qui définit la largeur d'une ligne, ou l'absence de ligne. Les valeurs clés `<line-width>` sont utilisées dans les propriétés abrégées et longues suivantes&nbsp;:

- {{CSSxRef("border")}}, {{CSSxRef("border-width")}}
- {{CSSxRef("border-block")}}, {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-block-end")}}, {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-start")}}, {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-bottom")}}, {{CSSxRef("border-bottom-width")}}
- {{CSSxRef("border-inline")}}, {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-inline-end")}}, {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-start")}}, {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-left")}}, {{CSSxRef("border-left-width")}}
- {{CSSxRef("border-right")}}, {{CSSxRef("border-right-width")}}
- {{CSSxRef("border-top")}}, {{CSSxRef("border-top-width")}}
- {{CSSxRef("column-rule")}}, {{CSSxRef("column-rule-width")}}
- {{CSSxRef("row-rule")}}, {{CSSxRef("row-rule-width")}}
- {{CSSxRef("rule")}}, {{CSSxRef("rule-width")}}
- {{CSSxRef("outline")}}, {{CSSxRef("outline-width")}}

## Syntaxe

### Valeurs

Le type `<line-width>` est défini en utilisant soit `<length>` ou un mot-clé&nbsp;:

- `<length>`
  - : Une longueur ({{CSSxRef("&lt;length&gt;")}}) positive.
- `hairline`
  - : Représente une ligne «&nbsp;juste visible&nbsp;» qui est inférieure ou égale à `1px`.
- `thin`
  - : Équivaut à `1px`.
- `medium`
  - : Équivaut à `3px`.
- `thick`
  - : Équivaut à `5px`.

## Syntaxe formelle

{{CSSSyntaxRaw(`<line-width> = <length [0,∞]> | hairline | thin | medium | thick`)}}

## Exemples

### Définir une largeur de ligne

Cet exemple montre toutes les valeurs clés `<line-width>`, ainsi qu'une valeur `<length>`.

#### HTML

Nous incluons cinq boîtes à l'intérieur d'un élément HTML {{HTMLElement("section")}}.

```html
<section>
  <div data-width="hairline">hairline</div>
  <div data-width="thin">thin</div>
  <div data-width="medium">medium</div>
  <div data-width="thick">thick</div>
  <div data-width="10px">10px</div>
</section>
```

#### CSS

Nous mettons en forme tous les éléments pour qu'ils soient identiques, puis nous définissons la {{CSSxRef("border-width")}} en fonction de l'attribut `data-width` de l'élément.

```css
section {
  display: flex;
  gap: 10px;
}
div {
  flex: 0 0 15%;
  border-style: solid;
  border-color: purple;
  text-align: center;
}
[data-width="hairline"] {
  border-width: hairline;
}

[data-width="thin"] {
  border-width: thin;
}

[data-width="medium"] {
  border-width: medium;
}

[data-width="thick"] {
  border-width: thick;
}

[data-width="10px"] {
  border-width: 10px;
}
```

```css hidden
@supports not (border-width: hairline) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la valeur 'hairline'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

#### Résultat

{{EmbedLiveSample("Définir une largeur de ligne")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;line-style&gt;")}}
- Le module [des bordures et arrière-plans CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
- Le module [d'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface)
- Le module [d'espacement CSS](/fr/docs/Web/CSS/Guides/Gaps)
