---
title: "@counter-style"
slug: Web/CSS/Reference/At-rules/@counter-style
original_slug: Web/CSS/@counter-style
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@counter-style`** vous permet d'étendre les styles de liste prédéfinis et de définir vos propres styles de compteurs qui ne font pas partie de l'ensemble des styles prédéfinis. La règle `@counter-style` contient des [descripteurs](#descripteurs) définissant comment la valeur du compteur est convertie en une représentation sous forme de chaîne de caractères.

Bien que CSS propose de nombreux styles de compteurs prédéfinis, la règle `@counter-style` offre une méthode ouverte pour créer des compteurs personnalisés. Cette règle répond aux besoins typographiques du monde entier en permettant aux auteur·ice·s de définir leurs propres styles de compteurs lorsque les styles prédéfinis ne conviennent pas.

## Syntaxe

```css
@counter-style thumbs {
  system: cyclic;
  symbols: "\1F44D";
  suffix: " ";
}
```

La règle `@counter-style` est identifiée par un [nom de style de compteur](#nom_du_style_de_compteur), et le style du compteur nommé peut être affiné à l'aide d'une `<declaration-list>` composée d'un ou plusieurs [descripteurs](#descripteurs) et de leurs valeurs.

### Nom du style de compteur

- `<counter-style-name>`
  - : Fournit un nom pour votre style de compteur. Il est spécifié comme un {{cssxref("custom-ident")}} sensible à la casse, sans guillemets. La valeur ne doit pas être égale à `none`. Comme tous les identifiants personnalisés, la valeur de votre style de compteur ne peut pas être un [mot-clé global CSS](/fr/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords). Évitez les autres valeurs énumérées des propriétés CSS, y compris les valeurs des propriétés de [liste](/fr/docs/Web/CSS/Guides/Lists#properties) et de [style de compteur](/fr/docs/Web/CSS/Guides/Counter_styles#properties). Le nom de votre compteur ne peut pas être une valeur insensible à la casse de la propriété {{cssxref("list-style-type")}} comme `decimal`, `disc`, `square`, `circle`, `disclosure-open` et `disclosure-closed`.

    > [!NOTE]
    > Les noms de styles de compteur non surchargés `decimal`, `disc`, `square`, `circle`, `disclosure-open` et `disclosure-closed` ne peuvent pas être utilisés comme nom de compteur personnalisé. Cependant, ils sont valides dans d'autres contextes où le type de donnée `<counter-style-name>` est attendu, comme dans `system: extends <counter-style-name>`.

### Descripteurs

- {{cssxref("@counter-style/system", "system")}}
  - : Indique l'algorithme à utiliser pour convertir la valeur entière du compteur en une représentation sous forme de chaîne de caractères. Si la valeur est `cyclic`, `numeric`, `alphabetic`, `symbolic` ou `fixed`, le descripteur `symbols` doit aussi être spécifié. Si la valeur est `additive`, le descripteur `additive-symbols` doit également être spécifié.

- {{cssxref("@counter-style/symbols", "symbols")}}
  - : Définit les symboles à utiliser pour la représentation du marqueur. Les symboles peuvent contenir des chaînes de caractères, des images ou des identifiants personnalisés. Ce descripteur est requis si le descripteur `system` est défini sur `cyclic`, `numeric`, `alphabetic`, `symbolic` ou `fixed`.

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : Définit les _tuples additifs_ (ensemble d'éléments) pour les systèmes additifs. Alors que les symboles spécifiés dans le descripteur `symbols` sont utilisés pour construire la représentation du marqueur par la plupart des algorithmes, les systèmes de compteur additifs, comme les chiffres romains, consistent en une série de symboles pondérés. Le descripteur est une liste de symboles de compteur avec leurs poids entiers non négatifs, listés par poids décroissant. Ce descripteur est requis si le descripteur `system` est défini sur `additive`.

- {{cssxref("@counter-style/negative", "negative")}}
  - : Indique les symboles à ajouter avant ou après la représentation du compteur si la valeur est négative.

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Indique un symbole à ajouter avant la représentation du marqueur. Les préfixes sont ajoutés à la fin, avant tout caractère ajouté aux valeurs négatives par le descripteur `negative`.

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Indique, comme le descripteur prefix, un symbole à ajouter après la représentation du marqueur. Les suffixes viennent après la représentation, y compris après tout caractère ajouté aux valeurs négatives par le descripteur `negative`.

- {{cssxref("@counter-style/range", "range")}}
  - : Définit l'intervalle de valeurs pour lequel le style de compteur est applicable. Si un style de compteur est utilisé pour représenter une valeur en dehors des intervalles définis par ce descripteur, le style de compteur basculera sur son style de `fallback`.

- {{cssxref("@counter-style/pad", "pad")}}
  - : À utiliser lorsque vous souhaitez que la représentation du marqueur ait une longueur minimale. Par exemple, si vous voulez que les compteurs commencent à 01 et continuent avec 02, 03, 04, etc., alors le descripteur `pad` doit être utilisé. Pour les représentations plus grandes que la valeur de `pad` spécifiée, le marqueur est construit normalement.

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Décrit comment les synthétiseurs vocaux, comme les lecteurs d'écran, doivent annoncer le style de compteur. Par exemple, la valeur du marqueur de l'élément de liste peut être lue comme un nombre ou un alphabet pour les listes ordonnées, ou comme une indication sonore pour les listes non ordonnées, selon la valeur de ce descripteur.

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Indique le nom du compteur de repli à utiliser si le système spécifié ne peut pas construire la représentation d'une valeur de compteur ou si la valeur du compteur est en dehors de l'intervalle spécifié par `range`. Si le compteur de secours échoue aussi, alors le secours de ce compteur est utilisé, si défini. S'il n'y a pas de compteur de secours ou si la chaîne de systèmes de secours ne permet pas de représenter la valeur, le style `decimal` sera utilisé en dernier recours.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Spécifier les symboles avec counter-style

#### HTML

```html
<ul class="exemple">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
</ul>
```

#### CSS

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}

.exemple {
  list-style: circled-alpha;
}
```

#### Résultat

{{EmbedLiveSample('spécifier_les_symboles_avec_counter-style', '', '160')}}

Voir plus d'exemples sur la [page de démonstration](https://mdn.github.io/css-examples/counter-style-demo/) ([code](https://github.com/mdn/css-examples/tree/main/counter-style-demo)).

### Styles de compteurs prêts à l'emploi

Retrouvez une collection de plus de 100 extraits de code `counter-style` dans le document [Styles de compteur prêts à l'emploi <sup>(angl.)</sup>](https://w3c.github.io/predefined-counter-styles/). Ce document propose des compteurs adaptés aux besoins des langues et cultures du monde entier.

Le [convertisseur de styles de compteurs <sup>(angl.)</sup>](https://r12a.github.io/app-counters/) utilise cette liste pour tester et générer du code à copier-coller pour les styles de compteurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Cssxref("counter", "counter()")}}
- {{Cssxref("counters", "counters()")}}
- {{cssxref("symbols", "symbols()")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}, {{Cssxref("list-style-type")}}
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
