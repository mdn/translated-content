---
title: <resolution>
slug: Web/CSS/Reference/Values/resolution
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<resolution>`**, utilisé pour décrire les [résolutions](/fr/docs/Web/CSS/Reference/At-rules/@media/resolution) dans les [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries), désigne la densité de pixels d'un périphérique de sortie, c'est‑à‑dire sa résolution.

Sur les écrans, les unités se réfèrent aux pouces, centimètres ou pixels _CSS_, et non à des valeurs physiques.

## Syntaxe

Le type de donnée `<resolution>` est composé d'un {{CSSxRef("&lt;number&gt;")}} strictement positif, suivi de l'une des unités listées ci‑dessous. Comme pour toutes les dimensions CSS, il n'y a pas d'espace entre le littéral d'unité et le nombre.

### Unités

- `dpi`
  - : Cette unité représente le nombre de [points par pouce](https://fr.wikipedia.org/wiki/Point_par_pouce). Un écran compte habituellement 72 ou 96 ppi (dpi), tandis qu'un document imprimé en compte généralement un nombre beaucoup plus élevé. Puisque 1 pouce équivaut à 2,54 cm, `1 dpi ≈ 0,39 dpcm`.
- `dpcm`
  - : Cette unité représente le nombre de [points par centimètre](https://fr.wikipedia.org/wiki/Point_par_pouce#Tableau_de_conversion). Puisque 1 pouce équivaut à 2.54 cm, `1dpcm ≈ 2,54 dpi`.
- `dppx`
  - : Cette unité représente le nombre de points par unité CSS `px`. Puisque le ratio entre les unités CSS `in` et CSS `px` vaut 1:96, `1 dppx` est équivalent à `96 dpi`, ce qui correspond à la résolution par défaut des images affichées en CSS tel que défini par {{CSSxRef("image-resolution")}}.
- `x`
  - : Un alias pour `dppx`.

> [!NOTE]
> Bien que le nombre `0` représente la même mesure pour ces différentes unités. Si la valeur est écrite sans unité, elle sera considérée comme invalide. Autrement dit, `0` est invalide et ne représente pas `0dpi`, `0dpcm` ou `0dppx`.

## Exemples

### Utilisation dans une requête média

```css
@media print and (resolution >= 300dpi) {
  /* … */
}

@media (resolution: 120dpcm) {
  /* … */
}

@media (resolution >= 2dppx) {
  /* … */
}

@media (resolution: 1x) {
  /* … */
}
```

### Résolutions valides

```plain example-good
96dpi
50.82dpcm
3dppx
```

### Résolutions invalides

```plain example-bad
72 dpi     Les espaces ne sont pas autorisés entre le nombre et l'unité.
ten dpi    Le nombre doit être composé uniquement de chiffres.
0          L'unité est requise.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La caractéristique média {{CSSxRef("@media/resolution", "resolution")}}
- La propriété {{CSSxRef("image-resolution")}}
- [Utiliser les requêtes `@media`](/fr/docs/Web/CSS/Guides/Media_queries/Using)
