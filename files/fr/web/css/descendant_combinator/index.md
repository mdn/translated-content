---
title: Sélecteurs descendant
slug: Web/CSS/Descendant_combinator
tags:
  - CSS
  - Débutant
  - Reference
  - Sélecteur
translation_of: Web/CSS/Descendant_combinator
original_slug: Web/CSS/Sélecteurs_descendant
---
{{CSSRef("Selectors")}}

Le **combinateur de descendance**, représenté par un blanc (ou plusieurs blancs à la suite) permet de combiner deux sélecteurs  (sous la forme `sélecteur₁ sélecteur₂`) afin de cibler les éléments qui correspondent au second sélecteur uniquement si ceux-ci ont un élément ancêtre qui correspond au premier sélecteur. Les sélecteurs qui utilisent ce combinateur sont souvent appelés des sélecteurs de descendants.

```css
/* Les éléments <li> qui sont des descendants */
/* d'un <ul class="mon-truc"> */
ul.mon-truc li {
  margin: 2em;
}
```

Techniquement, le combinateur de descendance est représenté par un ou plusieurs blancs (les caractères qui sont des blancs sont : l'espace, le retour chariot, le saut de ligne, la tabulation verticale, la tabulation horizontale) entre deux sélecteurs lorsqu'il n'y a aucun autre combinateur. Les blancs utilisés pour le combinateur peuvent éventuellement contenir des commentaires CSS.

## Syntaxe

    selecteur1 selecteur2 { /* déclarations CSS */ }

## Exemples

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>Élément 1</div>
    <ul>
      <li>Sous-élément A</li>
      <li>Sous-élément B</li>
    </ul>
  </li>
  <li>
    <div>Élément 2</div>
    <ul>
      <li>Sous-élément A</li>
      <li>Sous-élément B</li>
    </ul>
  </li>
</ul>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                                    | État                                 | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName("CSS4 Selectors", "#descendant-combinators", "descendant combinator")}}     | {{Spec2("CSS4 Selectors")}} |                      |
| {{SpecName('CSS3 Selectors', '#descendant-combinators', 'descendant combinator')}}     | {{Spec2('CSS3 Selectors')}} |                      |
| {{SpecName('CSS2.1', 'selector.html#descendant-selectors', 'descendant selectors')}} | {{Spec2('CSS2.1')}}             |                      |
| {{SpecName('CSS1', '#contextual-selectors', 'contextual selectors')}}                     | {{Spec2('CSS1')}}             | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.selectors.descendant")}}

## Voir aussi

- [Sélecteur d'enfant](/fr/docs/Web/CSS/Sélecteurs_enfant)
