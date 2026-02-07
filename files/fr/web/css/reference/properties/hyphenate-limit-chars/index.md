---
title: hyphenate-limit-chars
slug: Web/CSS/Reference/Properties/hyphenate-limit-chars
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`hyphenate-limit-chars`** définit la longueur minimale d'un mot pour permettre la coupure par trait d'union, ainsi que le nombre minimal de caractères avant et après le trait d'union.

Cette propriété vous offre un contrôle précis sur la coupure des mots dans le texte. Ce contrôle permet d'éviter des coupures maladroites et d'adapter la coupure selon les langues, ce qui améliore la typographie.

## Syntaxe

```css
/* Valeurs numériques */
hyphenate-limit-chars: 10 4 4;
hyphenate-limit-chars: 10 4;
hyphenate-limit-chars: 10;

/* Valeurs avec un mot-clé */
hyphenate-limit-chars: auto auto auto;
hyphenate-limit-chars: auto auto;
hyphenate-limit-chars: auto;

/* Mixte de valeurs numériques et de mots-clés */
hyphenate-limit-chars: 10 auto 4;
hyphenate-limit-chars: 10 auto;
hyphenate-limit-chars: auto 3;

/* Valeurs globales */
hyphenate-limit-chars: inherit;
hyphenate-limit-chars: initial;
hyphenate-limit-chars: revert;
hyphenate-limit-chars: revert-layer;
hyphenate-limit-chars: unset;
```

La propriété `hyphenate-limit-chars` prend 1 à 3 valeurs qui peuvent être numériques ou `auto`, comme expliqué ci-dessous.

### Valeurs

- `<number> <number> <number>`
  - : La première valeur est la longueur minimale d'un mot pour permettre la coupure. La seconde valeur est le nombre minimal de caractères avant le trait d'union. La troisième valeur est le nombre minimal de caractères après le trait d'union.
- `<number> <number>`
  - : La première valeur est la longueur minimale d'un mot pour permettre la coupure. La seconde valeur est le nombre minimal de caractères avant le trait d'union. Le nombre minimal de caractères après le trait d'union sera égal à la seconde valeur.
- `<number>`
  - : La valeur est la longueur minimale d'un mot pour permettre la coupure. Le nombre minimal de caractères avant et après le trait d'union sera défini sur `auto`.

Si `auto` est défini pour l'une des valeurs, l'agent utilisateur choisira une valeur adaptée à la disposition actuelle. Sauf si l'agent utilisateur peut calculer une meilleure valeur, les valeurs par défaut suivantes seront utilisées&nbsp;:

- Longueur minimale d'un mot pour permettre la coupure&nbsp;: 5
- Nombre minimal de caractères avant le trait d'union&nbsp;: 2
- Nombre minimal de caractères après le trait d'union&nbsp;: 2

À noter que si un mot est trop court pour respecter les contraintes données, il ne sera pas coupé. Par exemple, avec une valeur comme `hyphenate-limit-chars: auto 3 4`, les mots de moins de 7 caractères ne seront jamais coupés, puisqu'il est impossible d'avoir 3 caractères avant le trait d'union et 4 caractères après.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les limites de coupure

Dans cet exemple, il y a quatre boîtes contenant chacune le même texte. Pour comparer, la première boîte montre la coupure par défaut appliquée par le navigateur. Les trois suivantes illustrent le résultat de la contrainte du comportement par défaut du navigateur avec différentes valeurs de `hyphenate-limit-chars`.

#### HTML

```html
<div class="container">
  <p id="ex1">juxtaposition et reconnaissance</p>
  <p id="ex2">juxtaposition et reconnaissance</p>
  <p id="ex3">juxtaposition et reconnaissance</p>
  <p id="ex4">juxtaposition et reconnaissance</p>
</div>
```

#### CSS

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

p {
  margin: 1rem;
  width: 120px;
  border: 2px dashed #999999;
  font-size: 1.5rem;
  hyphens: auto;
}

#ex2 {
  hyphenate-limit-chars: 14;
}

#ex3 {
  hyphenate-limit-chars: 5 9 2;
}

#ex4 {
  hyphenate-limit-chars: 5 2 7;
}
```

#### Résultat

{{EmbedLiveSample("Définir les limites de coupure
", "", 200)}}

Dans la première boîte, aucune valeur n'est définie pour `hyphenate-limit-chars`, ce qui permet au navigateur d'appliquer son algorithme par défaut. Par défaut, le navigateur utilise les valeurs `5 2 2` sauf s'il peut trouver de meilleures valeurs.

Dans la deuxième boîte, le navigateur ne coupe les mots que s'ils comportent au moins 14 caractères grâce à `hyphenate-limit-chars: 14`. Ainsi, «&nbsp;juxtaposition&nbsp;» n'est pas coupé dans la deuxième boîte car il ne comporte que 13 caractères.

Dans la troisième boîte, le navigateur doit inclure au moins 9 caractères avant le trait d'union grâce à `hyphenate-limit-chars: 5 9 2`. L'effet est que «&nbsp;acknowledgement&nbsp;» est coupé en «&nbsp;recon-naissance&nbsp;» plutôt que la version par défaut «&nbsp;re-connais-sance&nbsp;», comme dans la première boîte.

À noter que le navigateur n'est pas obligé d'inclure exactement 9 caractères avant le trait d'union. Tant que les contraintes de `hyphenate-limit-chars` sont respectées, il peut couper le mot à l'endroit qu'il juge le meilleur. Dans ce cas, il choisit «&nbsp;reconnais-sance&nbsp;» plutôt que le moins lisible «&nbsp;reconna-issance&nbsp;».

Dans la quatrième boîte, le navigateur doit inclure au moins 7 caractères après le trait d'union grâce à
`hyphenate-limit-chars: 5 2 7`. L'effet est que «&nbsp;juxtaposition&nbsp;» est coupé en «&nbsp;juxta-position&nbsp;» plutôt que la version par défaut «&nbsp;juxtaposi-tion&nbsp;».

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("hyphens")}}
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
