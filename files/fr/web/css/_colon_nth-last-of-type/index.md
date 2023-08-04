---
title: ":nth-last-of-type"
slug: Web/CSS/:nth-last-of-type
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/CSS/Pseudo-classes) **`:nth-last-of-type`** permet de cibler des éléments qui possèdent `an+b-1` nœud frères étant les mêmes éléments à partir de la fin de l'arbre et qui ont le même élément parent (l'indice `n` sera incrémenté à partir de 0). Autrement dit, la pseudo-classe parcourra les éléments d'un type donné en partant de la fin de l'élément parent, selon le motif passé en argument.

```css
/* Cible les éléments <div> qui sont les 4e */
/* 8e, 16e, 20e, à partir du dernier élément */
/* <div> d'un élément parent */
div:nth-last-of-type(4n) {
  background-color: lime;
}
```

Pour plus de détails sur les arguments passés à cette pseudo-classe, voir {{cssxref(":nth-child")}}.

## Syntaxe

La pseudo-classe `nth-last-of-type` prend un seul argument qui représente le motif de répétition des éléments correspondants, comptés à partir de la fin.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Ici, on souhaite mettre en avant le deuxième élément {{HTMLElement("span")}} en partant de la fin&nbsp;:

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

### HTML

```html
<div>
  <span>Ce span est le premier !</span>
  <span>Ce span ne l'est pas. :(</span>
  <em>Celui-ci est bizarre.</em>
  <span>Celui-ci l'est !</span>
  <strike>C'est un autre type</strike>
  <span>Malheureusement, celui-ci ne l'est pas.</span>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":last-of-type")}}
- {{cssxref(":nth-of-type")}}
