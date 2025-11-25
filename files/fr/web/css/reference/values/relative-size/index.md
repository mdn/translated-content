---
title: <relative-size>
slug: Web/CSS/Reference/Values/relative-size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<relative-size>`** décrit les mots‑clés de taille relative. Les mots‑clés `<relative-size>` définissent une taille relative à la taille calculée de l'élément parent. Ce type de donnée est utilisé dans les propriétés (raccourcie) {{CSSxRef("font")}} et (longue) {{CSSxRef("font-size")}}.

## Syntaxe

```plain
<relative-size> = smaller | larger
```

### Valeurs

Le type de donnée `<relative-size>` s'exprime avec un mot‑clé choisi parmi la liste ci‑dessous.

- `smaller`
  - : Une taille relative correspondant à une taille inférieure à la taille héritée.

- `larger`
  - : Une taille relative correspondant à une taille supérieure à la taille héritée.

## Description

Les mots‑clés `<relative-size>` sont relatifs à la taille courante de l'élément. Si la taille héritée est définie à l'aide d'un mot‑clé {{CSSxRef("absolute-size")}}, la valeur `<relative-size>` équivaut à la taille adjacente dans le [tableau `<absolute-size>`](/fr/docs/Web/CSS/Reference/Values/absolute-size#description). Sinon, l'augmentation ou la diminution relative de la taille est comprise entre 120&nbsp;% et 150&nbsp;%.

## Exemples

### Comparer les mots‑clés

```html
<ul>
  <li class="smaller">font-size: smaller;</li>
  <li>font-size is not specified</li>
  <li class="larger">font-size: larger;</li>
</ul>
```

```css
li {
  margin-bottom: 0.3em;
}
.smaller {
  font-size: smaller;
}
.larger {
  font-size: larger;
}
```

#### Résultat

{{EmbedLiveSample('Comparer les mots‑clés', '100%', 100)}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le type de données {{CSSxRef("absolute-size")}}
- Les propriétés {{CSSxRef("font")}} et {{CSSxRef("font-size")}}
- Le module [des polices CSS](/fr/docs/Web/CSS/Guides/Fonts)
