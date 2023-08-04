---
title: Constructeur Intl.Segmenter()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
---

{{JSRef}}

Le constructeur **`Intl.Segmenter()`** crée un objet [`Intl.Segmenter`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) permettant la segmentation d'un texte selon la locale.

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## Syntaxe

```js
new Intl.Segmenter();
new Intl.Segmenter(locales);
new Intl.Segmenter(locales, options);
```

### Paramètres

- `locales` {{optional_inline}}
  - : Une chaîne qui est une balise de langue BCP 47 ou un tableau de telles chaînes. Pour la forme générale et l'interprétation de cet argument, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).
- `options` {{optional_inline}}
  - : Un objet avec une ou plusieurs des propriétés suivantes&nbsp;:
    - `granularity` {{optional_inline}}
      - : Une chaîne de caractères qui peut valoir&nbsp;:
        - `"grapheme"` (la valeur par défaut)
          - : Découpe la chaîne en groupes de graphèmes (<i lang="en">grapheme cluster</i>) (ce qui correspond aux caractères perçus pour la personne qui lit), comme déterminé par la locale.
        - `"word"`
          - : Découpe la chaîne en segments aux limites de mots, comme déterminé par la locale.
        - `"sentence"`
          - : Découpe la chaîne en segments aux limites de phrases, comme déterminé par la locale.
    - `localeMatcher` {{optional_inline}}
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont&nbsp;:
        - `"best fit"` (la valeur par défaut)
          - : L'environnement d'exécution peut éventuellement choisir une locale plus adaptée que celle fournie par l'algorithme utilisé par `"lookup"`.
        - `"lookup"`
          - : Utilise [l'algorithme de recherche BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4) pour choisir la locale à partir de `locales`. Pour chaque locale contenue dans `locales`, l'environnement d'exécution renvoie la première locale prise en charge (en retirant éventuellement des sous-étiquettes de l'étiquette de locale fournie afin d'en sélectionner une prise en charge&nbsp;; autrement dit, si on fournit `"de-CH"` pour `locales`, cet algorithme pourra fournir `"de"` en résultat si `"de"` est prise en charge mais que `"de-CH"` ne l'est pas).

### Valeur de retour

Une nouvelle instance de [`Intl.Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segments).

## Exemples

### Utilisation simple

Dans l'exemple suivant, on compte les mots d'une chaîne en japonais (où le découpage de la chaîne à l'aide des méthodes de `String` aurait fourni un résultat incorrect).

```js
const text = "吾輩は猫である。名前はたぬき。";
const japaneseSegmenter = new Intl.Segmenter("ja-JP", { granularity: "word" });
console.log(
  [...japaneseSegmenter.segment(text)].filter((segment) => segment.isWordLike)
    .length,
);
// affiche 8 car le texte est segmenté en '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
