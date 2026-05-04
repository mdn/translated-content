---
title: Propriété CSS `page-break-before`
short-title: page-break-before
slug: Web/CSS/Reference/Properties/page-break-before
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{Deprecated_Header}}

> [!WARNING]
> Cette propriété a été remplacée par la propriété {{CSSxRef("break-before")}}.

La propriété [CSS](/fr/docs/Web/CSS) **`page-break-before`** permet d'ajuster les sauts de page placés _avant_ l'élément courant.

Cette propriété s'applique aux éléments de blocs qui génèrent une boîte. Elle ne s'appliquera pas à un {{HTMLElement("div")}} qui ne génère pas de boîte.

{{InteractiveExample("Démonstration CSS&nbsp;: page-break-before")}}

```css interactive-example-choice
page-break-before: auto;
```

```css interactive-example-choice
page-break-before: always;
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
    <div class="box" id="example-element">Contenu avec 'page-break-before'</div>
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
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Valeurs globales */
page-break-before: inherit;
page-break-before: initial;
page-break-before: revert;
page-break-before: revert-layer;
page-break-before: unset;
```

### Valeurs

- `auto` {{Deprecated_Inline}}
  - : Valeur initiale. Les sauts de page sont automatiques (ni forcés, ni interdits).
- `always` {{Deprecated_Inline}}
  - : Le saut de page est toujours forcé avant l'élément.
- `avoid` {{Deprecated_Inline}}
  - : Les sauts de page sont évités avant l'élément.
- `left` {{Deprecated_Inline}}
  - : Le saut de page est forcé avant l'élément afin que la prochaine page soit mise en forme comme une page gauche. C'est la page placée du côté gauche de la reliure du livre ou du côté arrière de la page en impression recto-verso.
- `right` {{Deprecated_Inline}}
  - : Le saut de page est forcé avant l'élément afin que la prochaine page soit mise en forme comme une page droite. C'est la page placée du côté droit de la reliure du livre ou du côté avant de la page en impression recto-verso.
- `recto` {{Deprecated_Inline}}
  - : Si les pages progressent de gauche à droite, cette valeur agit comme `right`. Si les pages progressent de droite à gauche, elle agit comme `left`.
- `verso` {{Deprecated_Inline}}
  - : Si les pages progressent de gauche à droite, cette valeur agit comme `left`. Si les pages progressent de droite à gauche, elle agit comme `right`.

## Alias des sauts de page

La propriété `page-break-before` est désormais une propriété héritée, remplacée par {{CSSxRef("break-before")}}.

Pour des raisons de compatibilité, `page-break-before` doit être traité par les navigateurs comme un alias de `break-before`. Cela garantit que les sites utilisant `page-break-before` continuent de fonctionner comme prévu. Un sous-ensemble de valeurs doit être aliasé comme suit&nbsp;:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Éviter un saut de page avant un élément

```css
/* Éviter un saut de page avant les éléments div de classe note */
div.note {
  page-break-before: avoid;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("break-before")}}, {{CSSxRef("break-after")}}, {{CSSxRef("break-inside")}}
- Les propriétés {{CSSxRef("page-break-after")}} {{Deprecated_Inline}}, {{CSSxRef("page-break-inside")}} {{Deprecated_Inline}}
- Les propriétés {{CSSxRef("orphans")}}, {{CSSxRef("widows")}}
