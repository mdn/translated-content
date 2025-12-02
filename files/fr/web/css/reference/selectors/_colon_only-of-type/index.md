---
title: :only-of-type
slug: Web/CSS/Reference/Selectors/:only-of-type
original_slug: Web/CSS/:only-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:only-of-type`** permet de cibler un élément qui ne possède aucun nœud frère du même type.

{{InteractiveExample("Démonstration CSS&nbsp;: :only-of-type", "tabbed-shorter")}}

```css interactive-example
a:only-of-type {
  color: fuchsia;
}

dd:only-of-type {
  background-color: bisque;
}
```

```html interactive-example
<p>
  Pour en savoir plus sur <b>QUIC</b>, consultez les <a href="#">RFC 9000</a> et
  <a href="#">RFC 9114</a>.
</p>

<dl>
  <dt>Publication</dt>
  <dd>2021</dd>
  <dd>2022</dd>
</dl>

<p>
  Les détails concernant <b>QPACK</b> se trouvent dans <a href="#">RFC 9204</a>.
</p>

<dl>
  <dt>Publication</dt>
  <dd>2022</dd>
</dl>
```

## Syntaxe

```css
:only-of-type {
  /* ... */
}
```

## Exemples

### Mettre en forme des éléments sans voisins du même type

#### HTML

```html
<main>
  <div>Je suis l'élément `div` n°1.</div>
  <p>Je suis le seul élément `p` parmi mes voisins.</p>
  <div>Je suis l'élément `div` n°2.</div>
  <div>
    Je suis l'élément `div` n°3.
    <i>Je suis le seul enfant `i`.</i>
    <em>Je suis l'élément `em` n°1.</em>
    <em>Je suis l'élément `em` n°2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('mettre_en_forme_des_éléments_sans_voisins_du_même_type', '100%', 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`:only-child`](/fr/docs/Web/CSS/Reference/Selectors/:only-child)
- [`:first-of-type`](/fr/docs/Web/CSS/Reference/Selectors/:first-of-type)
- [`:last-of-type`](/fr/docs/Web/CSS/Reference/Selectors/:last-of-type)
- [`:nth-of-type`](/fr/docs/Web/CSS/Reference/Selectors/:nth-of-type)
