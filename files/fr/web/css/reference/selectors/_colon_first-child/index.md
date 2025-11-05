---
title: :first-child
slug: Web/CSS/Reference/Selectors/:first-child
original_slug: Web/CSS/:first-child
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:first-child`** permet de cibler un élément qui est le premier élément fils par rapport à son élément parent.

{{InteractiveExample("Démonstration CSS&nbsp;: :first-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:first-child {
  border: 2px solid orange;
}
```

```html interactive-example
<p>Champions d'athlétisme&nbsp;:</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

## Syntaxe

```css
:first-child {
  /* ... */
}
```

## Exemples

### Exemple simple

#### HTML

```html
<div>
  <p>
    Ce paragraphe est mis en forme car c'est un élément p ET que c'est le
    premier fils de l'élément div.
  </p>
  <p>
    En revanche, ce paragraphe n'est pas mis en forme car ce n'est pas le
    premier !
  </p>
</div>

<div>
  <h2>Ce titre h2 n'est pas mis en forme car ce n'est pas un paragraphe.</h2>
  <p>
    Et ce paragraphe n'est pas mis en forme car ce n'est pas le premier fils !
  </p>
</div>
```

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', 500, 200)}}

### Utiliser les listes non ordonnées

#### HTML

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
  <ul>
    <li>Élément 3.1</li>
    <li>Élément 3.2</li>
    <li>Élément 3.3</li>
  </ul>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### Résultat

{{EmbedLiveSample('Utiliser_les_listes_non_ordonnées')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
