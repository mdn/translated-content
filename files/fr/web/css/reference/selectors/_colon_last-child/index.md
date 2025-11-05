---
title: :last-child
slug: Web/CSS/Reference/Selectors/:last-child
original_slug: Web/CSS/:last-child
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:last-child`** permet de cibler un élément qui est le dernier enfant de son parent.

{{InteractiveExample("Démonstration CSS&nbsp;: :last-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:last-child {
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
:last-child {
  /* ... */
}
```

## Exemples

### Exemple simple

#### HTML

```html
<div>
  <p>Ce texte n'est pas vert</p>
  <p>Ce texte est vert !</p>
</div>

<div>
  <p>Ce texte n'est pas vert</p>
  <h2>Ce texte n'est pas vert&nbsp;: ce n'est pas un paragraphe.</h2>
</div>
```

#### CSS

```css
p:last-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

### Résultat

{{EmbedLiveSample('exemple_simple', 500, 200)}}

### Mettre en forme une liste

#### HTML

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>
    Élément 3
    <ul>
      <li>Élément 3.1</li>
      <li>Élément 3.2</li>
      <li>Élément 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('mettre_en_forme_une_liste')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef(":-moz-last-node")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":nth-child")}}
