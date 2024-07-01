---
title: ":first-child"
slug: Web/CSS/:first-child
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:first-child`** permet de cibler un élément qui est le premier élément fils par rapport à son élément parent.

```css
/* Cible n'importe quel élément <p> qui est */
/* le premier fils de son élément parent */
p:first-child {
  color: lime;
  background-color: black;
}
```

> **Note :** Tel que défini initialement, il était nécessaire que l'élément sélectionné ait un élément parent. À partir de la spécification de niveau 4 pour les sélecteurs, cela n'est plus obligatoire.

## Syntaxe

{{csssyntax}}

## Exemples

### Premier exemple

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

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

#### Résultat

{{EmbedLiveSample('Premier_exemple','100%',300)}}

### Utiliser les listes non ordonnées

#### CSS

```css
li {
  color: blue;
}

li:first-child {
  color: green;
}
```

#### HTML

```html
<ul>
  <li>Élément 1 de la liste</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
```

#### Résultat

{{EmbedLiveSample('Utiliser_les_listes_non_ordonnées',300,100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{cssxref(":last-of-type")}}
- {{CSSxRef(":-moz-first-node")}} {{Non-standard_Inline}}
