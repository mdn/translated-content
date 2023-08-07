---
title: range
slug: Web/CSS/@counter-style/range
---

{{CSSRef}}

Le descripteur **`range`**, associé à la règle @ {{cssxref("@counter-style")}}, permet de définir l'intervalle de valeurs pris en compte par le compteur personnalisé. Si la valeur du compteur de la liste est en dehors de cet intervalle, ce sera la mise en forme de secours qui sera utilisée pour représenter le marqueur du compteur. La valeur de `range` peut être `auto` ou une liste de majorants/minorants, séparés par des virgules.

Si `range` vaut `auto` :

- Lorsque le descripteur `system` vaut `cyclic`, `numeric` ou `fixed`, l'intervalle considéré sera entre moins l'infini et plus l'infini.
- Si `system` vaut `alphabetic` ou `symbolic`, l'intervalle considéré s'étendra entre 1 et l'infini.
- Si `system` vaut `additive`, l'intervalle considéré ira de 0 à l'infini.
- Enfin, lorsque `system` vaut `extends`, l'intervalle correspond à ce qui est produit par le système étendu avec cette valeur.

Si `range` est défini par des entiers, on peut utiliser le mot-clé `infinite` pour indiquer l'infini. Lorsque `infinite` est indiqué comme la première valeur d'un intervalle, il est interprété comme l'infini négatif, sinon comme l'infini positif.

{{cssinfo}}

## Syntaxe

```css
/* Valeur avec un mot-clé */
range: auto;

/* Valeurs encadrant un intervalle */
range: 2 5;
range: infinite 10;
range: 6 infinite;
range: infinite infinite;

/* Valeurs indiquant plusieurs intervalles */
range:
  2 5,
  8 10;
range:
  infinite 6,
  10 infinite;
```

### Values

- `auto`
  - : L'intervalle dépend du système choisi pour le compteur comme indiqué ci-avant.
- `[ [ | infinite ]{2} ]#`
  - : Une liste d'intervalles séparées par des virgule. Pour chaque intervalle, la première valeur représente le minorant de l'intervalle inférieure et la deuxième représente le majorant. L'intervalle est un segment et inclue donc le minorant et le majorant. Si le mot-clé `infinite` est utilisé en premier, il indique l'infini négatif comme borne inférieure et s'il est utilisé comme seconde valeur pour l'intervalle, il correspondra à l'infini positif (utilisé alors comme borne supérieure). L'intervalle sur lequel s'applique le compteur défini correspond à l'union des intervalles qui composent cette liste. Si un minorant indiqué est supérieur à un majorant, le descripteur sera considéré comme invalide et sera ignoré.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}

.exemple {
  list-style: range-multi-example;
}
```

### HTML

```html
<ul class="exemple">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
  <li>Sept</li>
  <li>Huit</li>
  <li>Neuf</li>
  <li>Dix</li>
</ul>
```

Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("list-style")}},
- {{cssxref("list-style-image")}},
- {{cssxref("list-style-position")}},
- {{cssxref("symbols", "symbols()")}}, la notation fonctionnelle qui permet de créer des styles de compteur anonymes.
