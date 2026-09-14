---
title: Fonction CSS `dynamic-range-limit-mix()`
short-title: dynamic-range-limit-mix()
slug: Web/CSS/Reference/Values/dynamic-range-limit-mix
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`dynamic-range-limit-mix()`** crée une limite maximale de luminance personnalisée en mélangeant différents mots-clés {{CSSxRef("dynamic-range-limit")}} dans des proportions définies.

## Syntaxe

```css
dynamic-range-limit-mix(standard 70%, no-limit 30%);
dynamic-range-limit-mix(no-limit 10%, constrained 20%);
dynamic-range-limit-mix(no-limit 30%, constrained 30%, standard 30%);
dynamic-range-limit-mix(
    no-limit 20%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%
)
```

### Paramètres

- {{CSSxRef("dynamic-range-limit")}} {{CSSxRef("&lt;percentage&gt;")}}
  - : Une paire composée d'une valeur `dynamic-range-limit` (qui peut être une autre fonction `dynamic-range-limit-mix()`) et d'un pourcentage (`<percentage>`) compris entre `0%` et `100%` (inclus). Le pourcentage (`<percentage>`) définit la proportion d'une valeur de mot-clé `dynamic-range-limit` dans la limite personnalisée. La fonction `dynamic-range-limit-mix()` peut prendre deux de ces paires ou plus comme paramètres.

### Valeur de retour

Une limite maximale de luminance personnalisée, exprimée en nombre de stops photographiques au-dessus du blanc de référence HDR. Pour des raisons de confidentialité, le résultat calculé réel n'est pas exposé.

## Description

La propriété {{CSSxRef("dynamic-range-limit")}} permet de contrôler la luminosité du contenu à plage dynamique élevée (HDR). La fonction `dynamic-range-limit-mix()` peut être utilisée comme valeur de `dynamic-range-limit`, et permet de créer des limites de luminosité personnalisées en mélangeant des pourcentages des valeurs de mots-clés `dynamic-range-limit`.

### Calculer les pourcentages

Lorsque les pourcentages donnés s'additionnent pour atteindre `100%`, le résultat est évident&nbsp;:

```css
/* standard 70%, no-limit 30% */
dynamic-range-limit-mix(standard 70%, no-limit 30%);
```

Lorsque les pourcentages donnés ne s'additionnent pas pour atteindre `100%`, les pourcentages résultants sont égaux aux pourcentages donnés exprimés proportionnellement les uns par rapport aux autres afin que le total soit égal à `100%`&nbsp;:

```css
/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 20%, constrained 30%);

/* no-limit 20%, constrained 40%, standard 40% */
dynamic-range-limit-mix(no-limit 40%, constrained 80%, standard 80%);
```

Si une valeur de mot-clé `dynamic-range-limit` est utilisée plus d'une fois, les pourcentages pour cette valeur de mot-clé sont additionnés pour obtenir le pourcentage total&nbsp;:

```css
/* constrained 70%, standard 30% */
dynamic-range-limit-mix(constrained 40%, standard 30%, constrained 30%);

/* no-limit 40%, constrained 60% */
dynamic-range-limit-mix(no-limit 10%, constrained 30%, no-limit 10%);
```

Si un pourcentage défini est inférieur à `0%` ou supérieur à `100%`, la fonction `dynamic-range-limit-mix()` — et donc la valeur de propriété `dynamic-range-limit` associée — est invalide. Si un mot-clé est utilisé plus d'une fois et que le pourcentage cumulé est supérieur à `100%`, la valeur est valide, et les règles de proportion décrites ci-dessus entrent en jeu.

### Imbriquer des fonctions `dynamic-range-limit-mix()`

Vous pouvez imbriquer des fonctions `dynamic-range-limit-mix()` les unes dans les autres. Dans ce cas, les mêmes règles expliquées précédemment s'appliquent, et chaque ensemble de pourcentages est calculé séparément puis additionné. Dans l'exemple suivant&nbsp;:

```css
dynamic-range-limit-mix(
    no-limit 10%,
    dynamic-range-limit-mix(standard 25%, constrained 75%) 20%,
    dynamic-range-limit-mix(constrained 10%, no-limit 30%) 20%
)
```

- La première ligne nous donne `no-limit 10%`.
- Comme `25%` et `75%` s'additionnent pour atteindre `100%`, la deuxième ligne nous donne `standard 5%` (`25%` de `20%`) et `constrained 15%` (`75%` de `20%`).
- Dans la troisième ligne, comme `10%` et `30%` ne s'additionnent qu'à `40%`, et non `100%`, nous normalisons les deux en proportions de `40%`&nbsp;: 10/40 = `25%` et 30/40 = `75%`. Cela nous donne `constrained 5%` (`25%` de `20%`) et `no-limit 15%` (`75%` de `20%`).

Additionner ces valeurs pour obtenir les pourcentages bruts nous donne&nbsp;:

```css
dynamic-range-limit-mix(standard 5%, constrained 20%, no-limit 25%)
```

Les pourcentages ci-dessus s'additionnent pour atteindre `50%`, ils doivent donc être doublés pour obtenir les pourcentages finaux. La valeur calculée est donc&nbsp;:

```css
dynamic-range-limit-mix(standard 10%, constrained 40%, no-limit 50%)
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Considérons un élément HTML {{HTMLElement("img")}} utilisé pour intégrer une image HDR sur une page web&nbsp;:

```html
<img src="mon-image-hdr.jpg" alt="my image" />
```

Sur les écrans HDR, les zones les plus lumineuses de l'image peuvent s'avérer éblouissantes et inconfortables à regarder. Pour résoudre ce problème, nous pourrions définir la propriété `dynamic-range-limit` de l'image sur `dynamic-range-limit-mix(standard 70%, no-limit 30%)`, ce qui lui donne une limite de luminance maximale légèrement supérieure à la référence blanche HDR&nbsp;:

```css
img {
  dynamic-range-limit: dynamic-range-limit-mix(standard 70%, no-limit 30%);
}
```

Vous pouvez voir la propriété `dynamic-range-limit` en action dans notre [démonstration de la propriété `dynamic-range-limit` <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/dynamic-range-limit), qui inclut une image HDR pouvant être survolée et sélectionnée pour faire évoluer la valeur de `dynamic-range-limit`. [Voir l'exemple en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/dynamic-range-limit/) sur un écran capable d'afficher des couleurs HDR, et essayez-le.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("dynamic-range-limit")}}
