---
title: Sélecteurs enfant
slug: Web/CSS/Child_combinator
---

{{CSSRef("Selectors")}}

Le combinateur `>` sépare deux sélecteurs et cible seulement les éléments correspondant au second sélecteur qui sont des enfants **directs** des éléments ciblés par le premier sélecteur.

```css
/* Les éléments <li> qui sont des enfant d'un */
/* <ul class="mon-truc"> */
ul.mon-truc > li {
  margin: 2em;
}
```

En comparaison, lorsque deux sélecteurs sont combinés à l'aide du sélecteur descendant, l'expression formée par la combinaison des deux sélecteurs cible les éléments correspondant au second sélecteur qui ont un parent de n'importe quel niveau qui correspond au premier sélecteur, quelque soit le nombre de « sauts » dans le DOM.

## Syntaxe

```
selecteur1 > selecteur2 { déclarations CSS }
```

## Exemples

### CSS

```css
span {
  background-color: white;
}

div > span {
  background-color: blue;
}
```

### HTML

```html
<div>
  <span
    >Premier span du div.
    <span>Deuxième span, dans un span dans un div.</span>
  </span>
</div>
<span>Troisième span, en dehors de tout div.</span>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le combinateur de descendant](/fr/docs/Web/CSS/Sélecteurs_descendant)
