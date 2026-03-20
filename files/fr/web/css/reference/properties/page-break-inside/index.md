---
title: page-break-inside
slug: Web/CSS/Reference/Properties/page-break-inside
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Deprecated_Header}}

> [!WARNING]
> Cette propriété a été remplacée par la propriété {{CSSxRef("break-inside")}}.

La propriété [CSS](/fr/docs/Web/CSS) **`page-break-inside`** permet d'ajuster les sauts de page placés _à l'intérieur_ de l'élément courant.

{{InteractiveExample("Démonstration CSS&nbsp;: page-break-inside")}}

```css interactive-example-choice
page-break-inside: auto;
```

```css interactive-example-choice
page-break-inside: avoid;
```

```html interactive-example
<div>
  <p>
    L'effet de cette propriété peut être remarqué lorsque le document est en
    cours d'impression ou qu'un aperçu avant impression est affiché.
  </p>
  <button id="print-btn">Afficher l'aperçu avant impression</button>
  <div class="box-container">
    <div class="box">Contenu avant la propriété</div>
    <div class="box" id="example-element">Contenu avec 'page-break-inside'</div>
    <div class="box">Contenu après la propriété</div>
  </div>
</div>
```

```css interactive-example
.box {
  border: solid #5b6dcd 5px;
  background-color: #5b6dcd;
  margin: 10px 0;
  padding: 5px;
}

#example-element {
  border: solid 5px #ffc129;
  background-color: #ffc129;
  color: black;
}

@media print {
  #example-element {
    height: 25cm;
  }
}
```

```js interactive-example
const btn = document.getElementById("print-btn");

btn.addEventListener("click", () => {
  window.print();
});
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
page-break-inside: auto;
page-break-inside: avoid;

/* Valeurs globales */
page-break-inside: inherit;
page-break-inside: initial;
page-break-inside: revert;
page-break-inside: revert-layer;
page-break-inside: unset;
```

### Valeurs

- `auto` {{Deprecated_Inline}}
  - : Valeur initiale. Les sauts de page sont automatiques (ni forcés, ni interdits).
- `avoid` {{Deprecated_Inline}}
  - : L'agent utilisateur évite d'insérer un saut de page au sein de l'élément.

## Alias avec `break-inside`

La propriété `page-break-inside` a désormais été remplacée par la propriété {{CSSxRef("break-inside")}}.

Pour des raisons de compatibilité, `page-break-inside` devrait être considérée par les navigateurs comme synonyme de `break-inside`. De cette façon, les sites utilisant `page-break-inside` pourront continuer de fonctionner. Voici un sous-ensemble des valeurs de cette propriété et des correspondances

| `page-break-inside` | `break-inside` |
| ------------------- | -------------- |
| `auto`              | `auto`         |
| `avoid`             | `avoid`        |

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Éviter les sauts de page à l'intérieur des éléments

#### HTML

```html
<div class="page">
  <p>Un premier paragraphe.</p>
  <section class="list">
    <span>Une liste</span>
    <ol>
      <li>Un</li>
      <!-- <li>Deux</li> -->
    </ol>
  </section>
  <ul>
    <li>Un</li>
    <!-- <li>Deux</li> -->
  </ul>
  <p>Un deuxième paragraphe.</p>
  <p>Un troisième paragraphe, un peu plus long.</p>
  <p>
    Un quatrième paragraphe, un peu plus long voire plus long que le troisième.
  </p>
</div>
```

#### CSS

```css
.page {
  background-color: #8cffa0;
  height: 90px;
  width: 200px;
  columns: 1;
  column-width: 100px;
}

.list,
ol,
ul,
p {
  break-inside: avoid;
}

p {
  background-color: #8ca0ff;
}

ol,
ul,
.list {
  margin: 0.5em 0;
  display: block;
  background-color: orange;
}

p:first-child {
  margin-top: 0;
}
```

#### Résultat

{{EmbedLiveSample("Éviter les sauts de page à l'intérieur des éléments", 400, 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("break-before")}}, {{CSSxRef("break-after")}}, {{CSSxRef("break-inside")}}
- Les propriétés {{CSSxRef("page-break-after")}} {{Deprecated_Inline}}, {{CSSxRef("page-break-before")}} {{Deprecated_Inline}}
- Les propriétés {{CSSxRef("orphans")}}, {{CSSxRef("widows")}}
