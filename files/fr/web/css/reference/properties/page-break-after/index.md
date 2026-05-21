---
title: Propriété CSS `page-break-after`
short-title: page-break-after
slug: Web/CSS/Reference/Properties/page-break-after
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Deprecated_Header}}

> [!WARNING]
> Cette propriété a été remplacée par la propriété {{CSSxRef("break-after")}}.

La propriété [CSS](/fr/docs/Web/CSS) **`page-break-after`** permet d'ajuster les sauts de page placés _après_ l'élément courant.

{{InteractiveExample("Démonstration CSS&nbsp;: page-break-after")}}

```css interactive-example-choice
page-break-after: auto;
```

```css interactive-example-choice
page-break-after: always;
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
    <div class="box" id="example-element">Contenu avec 'page-break-after'</div>
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
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Valeurs globales */
page-break-after: inherit;
page-break-after: initial;
page-break-after: revert;
page-break-after: revert-layer;
page-break-after: unset;
```

Cette propriété s'applique aux éléments de blocs qui génèrent une boîte. Elle ne s'appliquera pas à un {{HTMLElement("div")}} qui ne génère pas de boîte.

### Valeurs

- `auto` {{Deprecated_Inline}}
  - : Valeur initiale. Les sauts de page sont automatiques (ni forcés, ni interdits).
- `always` {{Deprecated_Inline}}
  - : Le saut de page est toujours forcé après l'élément.
- `avoid` {{Deprecated_Inline}}
  - : Les sauts de page sont évités après l'élément.
- `left` {{Deprecated_Inline}}
  - : Le saut de page est forcé après l'élément afin que la prochaine page soit mise en forme comme une page gauche. C'est la page placée du côté gauche de la reliure du livre ou du côté arrière de la page en impression recto-verso.
- `right` {{Deprecated_Inline}}
  - : Le saut de page est forcé après l'élément afin que la prochaine page soit mise en forme comme une page droite. C'est la page placée du côté droit de la reliure du livre ou du côté avant de la page en impression recto-verso.
- `recto` {{Deprecated_Inline}}
  - : Si les pages progressent de gauche à droite, cette valeur agit comme `right`. Si les pages progressent de droite à gauche, elle agit comme `left`.
- `verso` {{Deprecated_Inline}}
  - : Si les pages progressent de gauche à droite, cette valeur agit comme `left`. Si les pages progressent de droite à gauche, elle agit comme `right`.

## Alias des sauts de page

La propriété `page-break-after` est désormais une propriété héritée, remplacée par {{CSSxRef("break-after")}}.

Pour des raisons de compatibilité, `page-break-after` doit être traité par les navigateurs comme un alias de `break-after`. Cela garantit que les sites utilisant `page-break-after` continuent de fonctionner comme prévu. Un sous-ensemble de valeurs doit être aliasé comme suit&nbsp;:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir un saut de page après les notes en bas de page

```css
/* forcer un saut de page après les notes en bas de page */
div.footnotes {
  page-break-after: always;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("break-before")}}, {{CSSxRef("break-after")}}, {{CSSxRef("break-inside")}}
- Les propriétés {{CSSxRef("page-break-before")}} {{Deprecated_Inline}}, {{CSSxRef("page-break-inside")}} {{Deprecated_Inline}}
- Les propriétés {{CSSxRef("orphans")}}, {{CSSxRef("widows")}}
