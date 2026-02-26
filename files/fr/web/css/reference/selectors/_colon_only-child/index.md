---
title: :only-child
slug: Web/CSS/Reference/Selectors/:only-child
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:only-child`** représente n'importe quel élément qui est le seul enfant de son élément parent. Elle permet d'obtenir le même effet que `:first-child:last-child` ou `:nth-child(1):nth-last-child(1)`, mais avec une spécificité inférieure.

{{InteractiveExample("Démonstration CSS&nbsp;: :only-child", "tabbed-shorter")}}

```css interactive-example
li:only-child {
  color: fuchsia;
}

b:only-child {
  text-decoration: underline;
}
```

```html interactive-example
<p>Stars attendues&nbsp;:</p>
<ol>
  <li>Robert Downey, Jr.</li>
</ol>

<p>Stars encore à confirmer&nbsp;:</p>
<ol>
  <li>Scarlett Johansson</li>
  <li>Samuel L. Jackson</li>
  <li>Chris Pratt</li>
</ol>

<p>La cérémonie va se dérouler au <b>Théâtre Dolby</b>.</p>
```

## Syntaxe

```css
:only-child {
  /* ... */
}
```

## Exemples

### Exemple simple

#### HTML

```html
<div>
  <div>Je suis un enfant unique.</div>
</div>

<div>
  <div>Je suis le 1er frère.</div>
  <div>Je suis le 2ème frère.</div>
  <div>
    Je suis le 3ème frère,
    <div>mais ceci est un enfant unique.</div>
  </div>
</div>
```

#### CSS

```css
div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', '100%', 180)}}

### Exemple avec une liste

#### HTML

```html
<ol>
  <li>
    Premier
    <ul>
      <li>Ceci est l'unique élément enfant</li>
    </ul>
  </li>
  <li>
    Deuxième
    <ul>
      <li>Cette liste a deux éléments</li>
      <li>Cette liste a deux éléments</li>
    </ul>
  </li>
  <li>
    Troisième
    <ul>
      <li>Cette liste a trois éléments</li>
      <li>Cette liste a trois éléments</li>
      <li>Cette liste a trois éléments</li>
    </ul>
  </li>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}
```

#### Résultat

{{EmbedLiveSample('Exemple_avec_une_liste', '100%', 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":only-of-type")}}
- La pseudo-classe {{CSSxRef(":first-child")}}
- La pseudo-classe {{CSSxRef(":last-child")}}
- La pseudo-classe {{CSSxRef(":nth-child")}}
