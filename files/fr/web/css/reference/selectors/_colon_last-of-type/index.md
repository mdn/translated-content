---
title: :last-of-type
slug: Web/CSS/Reference/Selectors/:last-of-type
original_slug: Web/CSS/:last-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:last-of-type`** cible un élément qui est le dernier enfant d'un type donné dans la liste des enfants de l'élément parent.

{{InteractiveExample("Démonstration CSS&nbsp;: :last-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:last-of-type {
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
:last-of-type {
  /* ... */
}
```

## Exemples

### Mise en forme du dernier paragraphe

#### HTML

```html
<h2>En-tête</h2>
<p>Paragraphe 1</p>
<p>Paragraphe 2</p>
```

#### CSS

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

#### Résultat

{{EmbedLiveSample('mise_en_forme_du_dernier_paragraphe', 500)}}

### Éléments imbriqués

Cet exemple montre comment les éléments imbriqués peuvent également être ciblés. Notez que le [sélecteur universel](/fr/docs/Web/CSS/Reference/Selectors/Universal_selectors) (`*`) est implicite lorsqu'aucun sélecteur simple n'est écrit.

#### HTML

```html
<article>
  <div>Je ne suis pas rose car première `div` :(</div>
  <div>
    Je ne suis pas rose :(
    <span
      >Mais moi je suis rose car je suis le dernier `span` de mon groupe !</span
    >
  </div>
  <div>
    Ici <em>je ne suis pas rose :(</em>, mais ici
    <em>je suis rose et dernier !</em>
  </div>
  <p>Je suis un paragraphe rose.</p>
  <div>Je suis rose car dernière `div` !</div>
</article>
```

#### CSS

```css
article :last-of-type {
  background-color: pink;
}
```

### Résultat

{{EmbedLiveSample('éléments_imbriqués', 500)}}

### Éléments avec plusieurs sélecteurs

Cet exemple HTML contient des éléments imbriqués de différents types. Le CSS contient à la fois des sélecteurs de type et des sélecteurs de classe.

#### HTML

```html
<p>Ce `p` n'est pas sélectionné.</p>
<p>Ce `p` n'est pas sélectionné non plus.</p>
<p>
  Ce `p` est le dernier élément `p` de son parent, par exemple `body`,
  sélectionné par le sélecteur de type `p`.
</p>
<div class="container">
  <div class="item">Ce `div` n'est pas sélectionné.</div>
  <div class="item">Ce `div` n'est pas sélectionné non plus.</div>
  <div class="item">
    Ce `div` est le dernier élément `div` de son parent `div`, sélectionné par
    le sélecteur de classe `.container .item`.
  </div>
  <p class="item">
    Ce `p` est le dernier élément `p` de son parent `div`, sélectionné par le
    sélecteur de classe `.container .item`.
  </p>
</div>
```

#### CSS

```css
p:last-of-type {
  background: skyblue;
}

.container .item:last-of-type {
  color: red;
  font-weight: bold;
}
```

#### Résultat

{{EmbedLiveSample('éléments_avec_plusieurs_sélecteurs', 500)}}

Le dernier `<div>` et le dernier `<p>` sont tous deux rouges et en gras, car le sélecteur `.item:last-of-type` sélectionne le dernier de chaque type si cet élément dernier a également la classe `item`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":last-child")}}
- {{cssxref(":nth-last-of-type")}}
