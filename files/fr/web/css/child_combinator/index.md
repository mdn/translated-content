---
title: Sélecteurs enfant
slug: Web/CSS/Child_combinator
tags:
  - CSS
  - Débutant
  - Reference
  - Sélecteur
translation_of: Web/CSS/Child_combinator
original_slug: Web/CSS/Sélecteurs_enfant
---
{{CSSRef("Selectors")}}

Le combinateur `>` sépare deux sélecteurs et cible seulement les éléments correspondant au second sélecteur qui sont des enfants **directs** des éléments ciblés par le premier sélecteur.

```css
/* Les éléments <li> qui sont des enfant d'un */
/* <ul class="mon-truc"> */
ul.mon-truc>li {
  margin: 2em;
}
```

En comparaison, lorsque deux sélecteurs sont combinés à l'aide du sélecteur descendant, l'expression formée par la combinaison des deux sélecteurs cible les éléments correspondant au second sélecteur qui ont un parent de n'importe quel niveau qui correspond au premier sélecteur, quelque soit le nombre de « sauts » dans le DOM.

## Syntaxe

    selecteur1 > selecteur2 { déclarations CSS }

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
  <span>Premier span du div.
    <span>Deuxième span, dans un span dans un div.</span>
  </span>
</div>
<span>Troisième span, en dehors de tout div.</span>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 100)}}

## Spécifications

| Spécification                                                                                        | État                                 | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('CSS4 Selectors', '#child-combinators', 'child combinator')}}     | {{Spec2('CSS4 Selectors')}} |                      |
| {{SpecName('CSS3 Selectors', '#child-combinators', 'child combinators')}}     | {{Spec2('CSS3 Selectors')}} | Aucune modification. |
| {{SpecName('CSS2.1', 'selector.html#child-selectors', 'child selectors')}} | {{Spec2('CSS2.1')}}             | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.child")}}

## Voir aussi

- [Le combinateur de descendant](/fr/docs/Web/CSS/Sélecteurs_descendant)
