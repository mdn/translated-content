---
title: :first-of-type
slug: Web/CSS/Reference/Selectors/:first-of-type
original_slug: Web/CSS/:first-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:first-of-type`** permet de cibler le premier élément d'un type donné parmi ceux d'un même élément parent (et de même niveau).

{{InteractiveExample("Démonstration CSS&nbsp;: :first-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:first-of-type {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>Légumes :</dt>
  <dd>1. Tomates</dd>
  <dd>2. Concombres</dd>
  <dd>3. Champignons</dd>
  <dt>Fruits :</dt>
  <dd>4. Pommes</dd>
  <dd>5. Mangues</dd>
  <dd>6. Poires</dd>
  <dd>7. Oranges</dd>
</dl>
```

## Syntaxe

```css
:first-of-type {
  /* ... */
}
```

## Exemples

### Mise en forme du premier paragraphe

#### HTML

```html
<h2>Un titre</h2>
<p>Le premier paragraphe.</p>
<p>Le deuxième paragraphe.</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

### Résultat

{{EmbedLiveSample('Mise_en_forme_du_premier_paragraphe')}}

### Éléments imbriqués

Cet exemple montre comment les éléments imbriqués peuvent également être ciblés. Notez que le [sélecteur universel](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors) (`*`) est implicite lorsqu'aucun sélecteur de type n'est écrit.

#### HTML

```html
<article>
  <div>Ce bloc est le premier !</div>
  <div>Ce <span>bloc en ligne imbriqué est le premier</span> !</div>
  <div>
    Ce <em>texte en italique imbriqué est le premier</em>, mais ce
    <em>texte en italique imbriqué est le dernier</em> !
  </div>
  <div>Ce <span>bloc en ligne imbriqué est stylisé</span> !</div>
  <p>Ce paragraphe est le premier !</p>
  <div>Ce bloc est le dernier.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### Result

{{EmbedLiveSample('Éléments_imbriqués', 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":nth-of-type")}}
- {{cssxref(":last-of-type")}}
- {{cssxref(":first-child")}}
