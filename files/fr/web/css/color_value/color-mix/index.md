---
title: color-mix()
slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}{{SeeCompatTable}}

La notation fonctionnelle **`color-mix()`** prend deux couleurs (deux valeurs de type [`<color>`](/fr/docs/Web/CSS/color_value)) et renvoie le résultat de leur mélange selon des proportions données, dans un espace de couleur donné.

## Syntaxe

```css
color-mix(in lch, peru 40%, lightgoldenrod)
color-mix(in srgb, #34c9eb 20%, white)
```

### Valeurs

- `color-mix( in <espace-couleur> , [ <couleur> && <proportion>? ]#{2})`

  - : `<espace-couleur>` est une valeur parmi `srgb`, `srgb-linear`, `lab`, `oklab`, `xyz`, `xyz-d50`, `xyz-d65`, `hsl`, `hwb`, `lch`, `oklch`. Il n'y a pas de valeur par défaut.

    `<couleur>` est n'importe quelle couleur valide (voir [`<color>`](/fr/docs/Web/CSS/color_value)).

    `<proportion>` est un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) indiquant la proportion de la couleur dans le mélange.

## Exemples

### HTML

```html
<ul>
  <li>10% #34c9eb</li>
  <li>40% #34c9eb</li>
  <li>70% #34c9eb</li>
</ul>
```

### CSS

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid #34c9eb;
  padding: 10px;
}

li {
  padding: 10px;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in srgb, #34c9eb 10%, white);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, #34c9eb 40%, white);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, #34c9eb 70%, white);
}
```

### Résultat

Dans un navigateur qui prend en charge cette fonctionnalité, les trois carrés sont de plus en plus bleus, car la proportion de `#34c9eb` dans le mélange augmente.

{{EmbedLiveSample('','100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
