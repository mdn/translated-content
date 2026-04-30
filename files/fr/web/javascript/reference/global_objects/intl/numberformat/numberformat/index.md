---
title: Constructeur Intl.NumberFormat()
short-title: Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Le constructeur **`Intl.NumberFormat()`** permet de créer des objets {{JSxRef("Intl.NumberFormat")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Intl.NumberFormat()", "taller")}}

```js interactive-example
const number = 123456.789;

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// Résultat attendu : "123.456,79 €"

// Le yen japonais n'utilise pas d'unité mineure
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// Résultat attendu : "￥123,457"

// Limiter à trois chiffres significatifs
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// Résultat attendu : "1,23,000"
```

## Syntaxe

```js-nolint
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)

Intl.NumberFormat()
Intl.NumberFormat(locales)
Intl.NumberFormat(locales, options)
```

> [!NOTE]
> `Intl.NumberFormat()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `Intl.NumberFormat`. Cependant, il y a un comportement spécial lorsqu'il est appelé sans `new` et que la valeur de `this` est une autre instance de `Intl.NumberFormat`&nbsp;; voir [Valeur de retour](#valeur_de_retour).

### Paramètres

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} ou une instance de {{JSxRef("Intl.Locale")}}, ou un tableau de tels identifiants de locale. La locale par défaut de l'environnement d'exécution est utilisée lorsque `undefined` est passé ou lorsqu'aucun des identifiants de locale définis n'est pris en charge. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).

    La clé d'extension Unicode suivante est autorisée&nbsp;:
    - `nu`
      - : Voir [`numberingSystem`](#numberingsystem).

    Cette clé peut également être définie avec `options` (comme indiqué ci-dessous). Lorsque les deux sont définis, la propriété `options` prend le pas.

- `options` {{Optional_Inline}}
  - : Un objet. Pour faciliter la lecture, la liste des propriétés est divisée en sections en fonction de leur objectif, y compris [options de locale](#options_de_locale), [options de style](#options_de_style), [options de chiffres](#options_de_chiffres) et [autres options](#autres_options).

#### Options de locale

- `localeMatcher`
  - : L'algorithme de correspondance de locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`.
    Pour plus d'informations sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
- `numberingSystem`
  - : Le système de numération à utiliser pour le formatage des nombres, tel que `"arab"`, `"hans"`, `"mathsans"`, etc. Pour une liste des types de systèmes de numération pris en charge, voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_systèmes_de_numération_pris_en_charge)&nbsp;; la valeur par défaut dépend de la locale. Cette option peut également être définie via la clé d'extension Unicode `nu`&nbsp;; si les deux sont fournis, la propriété `options` prend le pas.

#### Options de style

En fonction du `style` utilisé, certaines options peuvent être ignorées et d'autres peuvent être requises&nbsp;:

- `style`
  - : Le style de formatage à utiliser.
    - `"decimal"` (par défaut)
      - : Pour le formatage des nombres simples.
    - `"currency"`
      - : Pour le formatage des devises.
    - `"percent"`
      - : Pour le formatage des pourcentages.
    - `"unit"`
      - : Pour le formatage des unités.
- `currency`
  - : La devise à utiliser pour le formatage des devises. Les valeurs possibles sont les codes de devise ISO 4217, tels que `"USD"` pour le dollar américain, `"EUR"` pour l'euro ou `"CNY"` pour le RMB chinois — voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#identifiants_de_monnaies_pris_en_charge). Il n'y a pas de valeur par défaut&nbsp;; si le `style` est `"currency"`, la propriété `currency` doit être fournie. Elle est normalisée en majuscules.
- `currencyDisplay`
  - : Comment afficher la devise dans le formatage des devises.
    - `"code"`
      - : Utiliser le code de devise ISO.
    - `"symbol"` (par défaut)
      - : Utiliser un symbole de devise localisé, tel que €.
    - `"narrowSymbol"`
      - : Utiliser un symbole de format étroit («&nbsp;$100&nbsp;» plutôt que «&nbsp;US$100&nbsp;»).
    - `"name"`
      - : Utiliser un nom de devise localisé, tel que `"dollar"`.
- `currencySign`
  - : Dans de nombreuses locales, le format comptable signifie d'encadrer le nombre avec des parenthèses au lieu d'ajouter un signe moins. Les valeurs possibles sont `"standard"` et `"accounting"`&nbsp;; la valeur par défaut est `"standard"`.
- `unit`
  - : L'unité à utiliser dans le formatage des unités. Les valeurs possibles sont répertoriées dans [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#identifiants_dunités_pris_en_charge). Les paires d'unités simples peuvent être concaténées avec `"-per-"` pour créer une unité composée. Il n'y a pas de valeur par défaut&nbsp;; si le `style` est `"unit"`, la propriété `unit` doit être fournie.
- `unitDisplay`
  - : Le style de formatage des unités à utiliser dans le formatage des unités. Les valeurs possibles sont :
    - `"short"` (par défaut)
      - : Par exemple, `16 l`.
    - `"narrow"`
      - : Par exemple, `16l`.
    - `"long"`
      - : Par exemple, `16 litres`.

#### Options de chiffres

Les propriétés suivantes sont également prises en charge par {{JSxRef("Intl.PluralRules")}}.

- `minimumIntegerDigits`
  - : Le nombre minimum de chiffres entiers à utiliser. Une valeur avec un nombre de chiffres entiers inférieur à ce nombre sera complétée à gauche avec des zéros (jusqu'à la longueur définie) lors du formatage. Les valeurs possibles vont de `1` à `21`&nbsp;; la valeur par défaut est `1`.
- `minimumFractionDigits`
  - : Le nombre minimum de chiffres fractionnaires à utiliser. Les valeurs possibles vont de `0` à `100`&nbsp;; la valeur par défaut pour le formatage des nombres simples et des pourcentages est `0`&nbsp;; la valeur par défaut pour le formatage des devises est le nombre de chiffres de l'unité mineure fourni par la [liste des codes de devises ISO 4217 <sup>(angl.)</sup>](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (2 si la liste ne fournit pas cette information). Voir [Valeurs par défaut des chiffres significatifs/fractionnaires](#valeurs_par_défaut_des_significantdigitsfractiondigits) pour savoir quand cette valeur par défaut est appliquée.
- `maximumFractionDigits`
  - : Le nombre maximum de chiffres fractionnaires à utiliser. Les valeurs possibles vont de `0` à `100`&nbsp;; la valeur par défaut pour le formatage des nombres simples est le plus grand de `minimumFractionDigits` et `3`&nbsp;; la valeur par défaut pour le formatage des devises est le plus grand de `minimumFractionDigits` et le nombre de chiffres de l'unité mineure fourni par la [liste des codes de devises ISO 4217 <sup>(angl.)</sup>](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list-one.xml) (2 si la liste ne fournit pas cette information)&nbsp;; la valeur par défaut pour le formatage des pourcentages est le plus grand de `minimumFractionDigits` et `0`. Voir [Valeurs par défaut des chiffres significatifs/fractionnaires](#valeurs_par_défaut_des_significantdigitsfractiondigits) pour savoir quand cette valeur par défaut est appliquée.
- `minimumSignificantDigits`
  - : Le nombre minimum de chiffres significatifs à utiliser. Les valeurs possibles vont de `1` à `21`&nbsp;; la valeur par défaut est `1`. Voir [Valeurs par défaut des chiffres significatifs/fractionnaires](#valeurs_par_défaut_des_significantdigitsfractiondigits) pour savoir quand cette valeur par défaut est appliquée.
- `maximumSignificantDigits`
  - : Le nombre maximum de chiffres significatifs à utiliser. Les valeurs possibles vont de `1` à `21`&nbsp;; la valeur par défaut est `21`. Voir [Valeurs par défaut des chiffres significatifs/fractionnaires](#valeurs_par_défaut_des_significantdigitsfractiondigits) pour savoir quand cette valeur par défaut est appliquée.
- `roundingPriority`
  - : Définit comment les conflits d'arrondi seront résolus si à la fois `"FractionDigits"` ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) et `"SignificantDigits"` ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sont définis.
    Valeurs possibles&nbsp;:
    - `"auto"` (par défaut)
      - : Le résultat de la propriété des chiffres significatifs est utilisé.
    - `"morePrecision"`
      - : Le résultat de la propriété qui donne plus de précision est utilisé.
    - `"lessPrecision"`
      - : Le résultat de la propriété qui donne moins de précision est utilisé.

    La valeur `"auto"` est normalisée en `"morePrecision"` si `notation` est `"compact"` et qu'aucune des quatre options `"FractionDigits"`/`"SignificantDigits"` n'est définie.

    Notez que pour les valeurs autres que `auto`, le résultat avec plus de précision est calculé à partir des [`maximumSignificantDigits`](#minimumsignificantdigits) et [`maximumFractionDigits`](#maximumfractiondigits) (les paramètres minimums de chiffres fractionnaires et significatifs sont ignorés).

- `roundingIncrement`
  - : Indique l'incrément auquel l'arrondi doit avoir lieu par rapport à la magnitude d'arrondi calculée. Les valeurs possibles sont `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500` et `5000`&nbsp;; la valeur par défaut est `1`. Il ne peut pas être combiné avec l'arrondi des chiffres significatifs ou tout paramètre de `roundingPriority` autre que `auto`.

- `roundingMode`
  - : Comment les décimales doivent être arrondies. Les valeurs possibles sont&nbsp;:
    - `"ceil"`
      - : Arrondir vers +∞. Les valeurs positives sont arrondies vers le haut. Les valeurs négatives sont arrondies «&nbsp;plus positivement&nbsp;».
    - `"floor"`
      - : Arrondir vers -∞. Les valeurs positives sont arrondies vers le bas. Les valeurs négatives sont arrondies «&nbsp;plus négativement&nbsp;».
    - `"expand"`
      - : Arrondir loin de 0. La _magnitude_ de la valeur est toujours augmentée par l'arrondi. Les valeurs positives sont arrondies vers le haut. Les valeurs négatives sont arrondies «&nbsp;plus négativement&nbsp;».
    - `"trunc"`
      - : Arrondir vers 0. La _magnitude_ de la valeur est toujours réduite par l'arrondi. Les valeurs positives sont arrondies vers le bas. Les valeurs négatives sont arrondies «&nbsp;moins négativement&nbsp;».
    - `"halfCeil"`
      - : Égalité vers +∞. Les valeurs au-dessus de la demi-incrémentation sont arrondies comme `"ceil"` (vers +∞), et en dessous comme `"floor"` (vers -∞). Sur la demi-incrémentation, les valeurs sont arrondies comme `"ceil"`.
    - `"halfFloor"`
      - : Égalité vers -∞. Les valeurs au-dessus de la demi-incrémentation sont arrondies comme `"ceil"` (vers +∞), et en dessous comme `"floor"` (vers -∞). Sur la demi-incrémentation, les valeurs sont arrondies comme `"floor"`.
    - `"halfExpand"` (par défaut)
      - : Égalité loin de 0. Les valeurs au-dessus de la demi-incrémentation sont arrondies comme `"expand"` (loin de zéro), et en dessous comme `"trunc"` (vers 0). Sur la demi-incrémentation, les valeurs sont arrondies comme `"expand"`.
    - `"halfTrunc"`
      - : Égalité vers 0. Les valeurs au-dessus de la demi-incrémentation sont arrondies comme `"expand"` (loin de zéro), et en dessous comme `"trunc"` (vers 0). Sur la demi-incrémentation, les valeurs sont arrondies comme `"trunc"`.
    - `"halfEven"`
      - : Égalité vers l'entier pair le plus proche. Les valeurs au-dessus de la demi-incrémentation sont arrondies comme `"expand"` (loin de zéro), et en dessous comme `"trunc"` (vers 0). Sur la demi-incrémentation, les valeurs sont arrondies vers le chiffre pair le plus proche.

    Ces options reflètent le [guide de l'utilisateur ICU <sup>(angl.)</sup>](https://unicode-org.github.io/icu/userguide/format_parse/numbers/rounding-modes.html), où `"expand"` et `"trunc"` correspondent respectivement à ICU `"UP"` et `"DOWN"`.
    L'exemple des [modes d'arrondi](#modes_darrondi) ci-dessous montre comment chaque mode fonctionne.

- `trailingZeroDisplay`
  - : La stratégie pour afficher les zéros finaux sur les nombres entiers. Les valeurs possibles sont :
    - `"auto"` (par défaut)
      - : Conserver les zéros finaux selon `minimumFractionDigits` et `minimumSignificantDigits`.
    - `"stripIfInteger"`
      - : Supprimer les chiffres fractionnaires _s'ils_ sont tous nuls. C'est la même chose que `"auto"` si l'un des chiffres fractionnaires est non nul.

##### Valeurs par défaut des `SignificantDigits`/`FractionDigits`

Pour les quatre options ci-dessus (les options `FractionDigits` et `SignificantDigits`), nous avons mentionné leurs valeurs par défaut&nbsp;; cependant, ces valeurs par défaut ne sont _pas appliquées de manière inconditionnelle_. Elles ne sont appliquées que lorsque la propriété va réellement être utilisée, ce qui dépend des paramètres [`roundingPriority`](#roundingpriority) et [`notation`](#notation). Plus précisément&nbsp;:

- Si `roundingPriority` n'est pas `"auto"`, alors les quatre options s'appliquent.
- Si `roundingPriority` est `"auto"` et qu'au moins une option `SignificantDigits` est définie, alors les options `SignificantDigits` s'appliquent et les options `FractionDigits` sont ignorées.
- Si `roundingPriority` est `"auto"`, et qu'au moins une option `FractionDigits` est définie ou que `notation` n'est pas `"compact"`, alors les options `FractionDigits` s'appliquent et les options `SignificantDigits` sont ignorées.
- Si `roundingPriority` est `"auto"`, `notation` est `"compact"`, et qu'aucune des quatre options n'est définie, alors elles sont définies à `{ minimumFractionDigits: 0, maximumFractionDigits: 0, minimumSignificantDigits: 1, maximumSignificantDigits: 2 }`, indépendamment des valeurs par défaut mentionnées ci-dessus, et `roundingPriority` est défini à `"morePrecision"`.

#### Autres options

- `notation`
  - : Le formatage qui doit être affiché pour le nombre. Les valeurs possibles sont&nbsp;:
    - `"standard"` (par défaut)
      - : Formatage de nombre simple.
    - `"scientific"`
      - : Retourne l'ordre de grandeur pour le nombre formaté.
    - `"engineering"`
      - : Retourne l'exposant de dix lorsqu'il est divisible par trois.
    - `"compact"`
      - : Une chaîne de caractères représentant l'exposant&nbsp;; par défaut, utilise la forme «&nbsp;courte&nbsp;».
- `compactDisplay`
  - : Utilisé uniquement lorsque `notation` est `"compact"`. Les valeurs possibles sont `"short"` et `"long"`&nbsp;; la valeur par défaut est `"short"`.
- `useGrouping`
  - : Indique s'il faut utiliser des séparateurs de regroupement, tels que des séparateurs de milliers ou des séparateurs de «&nbsp;milliers/lakhs/crores&nbsp;».
    - `"always"`
      - : Affiche les séparateurs de regroupement même si la locale préfère autrement.
    - `"auto"`
      - : Affiche les séparateurs de regroupement en fonction de la préférence de la locale, ce qui peut également dépendre de la devise.
    - `"min2"`
      - : Affiche les séparateurs de regroupement lorsqu'il y a au moins 2 chiffres dans un groupe.
    - `true`
      - : Même chose que `"always"`.
    - `false`
      - : Ne pas afficher de séparateurs de regroupement.

    La valeur par défaut est `"min2"` si `notation` est `"compact"`, et `"auto"` sinon. Les valeurs de chaîne de caractères `"true"` et `"false"` sont acceptées, mais sont toujours converties en la valeur par défaut.

- `signDisplay`
  - : Quand afficher le signe pour le nombre. Les valeurs possibles sont&nbsp;:
    - `"auto"` (par défaut)
      - : Affiche le signe uniquement pour les nombres négatifs, y compris zéro négatif.
    - `"always"`
      - : Affiche toujours le signe.
    - `"exceptZero"`
      - : Affiche le signe pour les nombres positifs et négatifs, mais pas pour zéro.
    - `"negative"`
      - : Affiche le signe uniquement pour les nombres négatifs, à l'exclusion du zéro négatif.
    - `"never"`
      - : Ne jamais afficher le signe.

### Valeur de retour

Un nouvel objet `Intl.NumberFormat`.

> [!NOTE]
> Le texte ci-dessous décrit un comportement marqué par la spécification comme «&nbsp;optionnel&nbsp;". Il peut ne pas fonctionner dans tous les environnements. Consultez le [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs).

Normalement, `Intl.NumberFormat()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}, et une nouvelle instance de `Intl.NumberFormat` est renvoyée dans les deux cas. Cependant, si la valeur de {{JSxRef("Operators/this", "this")}} est un objet qui est {{JSxRef("Operators/instanceof", "instanceof")}} `Intl.NumberFormat` (cela ne signifie pas nécessairement qu'il a été créé via `new Intl.NumberFormat`&nbsp;; cela signifie simplement qu'il a `Intl.NumberFormat.prototype` dans sa chaîne de caractères de prototypes), alors la valeur de `this` est renvoyée à la place, avec le nouvel objet `Intl.NumberFormat` caché dans une propriété `[Symbol(IntlLegacyConstructedSymbol)]` (un symbole unique réutilisé entre les instances).

```js
const formateur = Intl.NumberFormat.call(
  { __proto__: Intl.NumberFormat.prototype },
  "en-US",
  { notation: "scientific" },
);
console.log(Object.getOwnPropertyDescriptors(formateur));
// {
//   [Symbol(IntlLegacyConstructedSymbol)]: {
//     value: NumberFormat [Intl.NumberFormat] {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// }
```

Notez qu'il n'y a qu'une seule instance réelle de `Intl.NumberFormat` ici&nbsp;: celle cachée dans `[Symbol(IntlLegacyConstructedSymbol)]`. L'appel des méthodes {{JSxRef("Intl/NumberFormat/format", "format()")}} et {{JSxRef("Intl/NumberFormat/resolvedOptions", "resolvedOptions()")}} sur `formateur` utiliserait correctement les options stockées dans cette instance, mais l'appel de toutes les autres méthodes (par exemple, {{JSxRef("Intl/NumberFormat/formatRange", "formatRange()")}}) échouerait avec «&nbsp;TypeError: formatRange method called on incompatible Object&nbsp;», car ces méthodes ne consultent pas les options de l'instance cachée.

Ce comportement, appelé `ChainNumberFormat`, ne se produit pas lorsque `Intl.NumberFormat()` est appelé sans `new` mais avec `this` défini sur autre chose qui n'est pas un `instanceof Intl.NumberFormat`. Si vous l'appelez directement comme `Intl.NumberFormat()`, la valeur de `this` est {{JSxRef("Intl")}}, et une nouvelle instance de `Intl.NumberFormat` est créée normalement.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Une propriété qui prend des valeurs énumérées (comme `style`, `units`, `currency`, etc.) est définie sur une valeur invalide.
    - Les propriétés `maximumFractionDigits` et `minimumFractionDigits` sont toutes deux définies, et elles sont définies sur des valeurs différentes.
      Notez qu'en fonction des différentes options de formatage, ces propriétés peuvent avoir des valeurs par défaut.
      Il est donc possible d'obtenir cette erreur même si vous ne définissez qu'une seule des propriétés.
- {{JSxRef("TypeError")}}
  - : Levée si la propriété `options.style` est définie sur `"unit"` ou `"currency"`, et qu'aucune valeur n'a été définie pour la propriété correspondante `options.unit` ou `options.currency`.

## Exemples

### Utilisation simple

Dans une utilisation de base sans définir de locale, une chaîne de caractères formatée dans la locale par défaut et avec les options par défaut est retournée.

```js
const quantite = 3500;

console.log(new Intl.NumberFormat().format(quantite));
// '3,500' si la locale est l'anglais américain
```

### Format décimal et proportionnel

```js
const quantite = 3500;

new Intl.NumberFormat("en-US", {
  style: "decimal",
}).format(quantite); // '3,500'
new Intl.NumberFormat("en-US", {
  style: "percent",
}).format(quantite); // '350,000%'
```

### Format des unités

Si le `style` est `'unit'`, une propriété `unit` doit être fournie.
Optionnellement, `unitDisplay` contrôle le formatage de l'unité.

```js
const quantite = 3500;

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
}).format(quantite); // '3,500 L'

new Intl.NumberFormat("en-US", {
  style: "unit",
  unit: "liter",
  unitDisplay: "long",
}).format(quantite); // '3,500 liters'
```

### Format des devises

Si le `style` est `'currency'`, une propriété `currency` doit être fournie.
Optionnellement, `currencyDisplay` et `currencySign` contrôlent le formatage de l'unité.

```js
const quantite = -3500;
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(quantite); // '-$3,500.00'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
}).format(quantite); // '-3,500.00 US dollars'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
}).format(quantite); // '($3,500.00)'
```

### Notations scientifiques, techniques ou compactes

Les notations scientifiques et compacte sont représentées par l'option `notation` et peuvent être formatées comme suit&nbsp;:

```js
new Intl.NumberFormat("en-US", {
  notation: "scientific",
}).format(987654321);
// 9.877E8

new Intl.NumberFormat("pt-PT", {
  notation: "scientific",
}).format(987654321);
// 9,877E8

new Intl.NumberFormat("en-GB", {
  notation: "engineering",
}).format(987654321);
// 987.654E6

new Intl.NumberFormat("de", {
  notation: "engineering",
}).format(987654321);
// 987,654E6

new Intl.NumberFormat("zh-CN", {
  notation: "compact",
}).format(987654321);
// 9.9亿

new Intl.NumberFormat("fr", {
  notation: "compact",
  compactDisplay: "long",
}).format(987654321);
// 988 millions

new Intl.NumberFormat("en-GB", {
  notation: "compact",
  compactDisplay: "short",
}).format(987654321);
// 988M
```

### Afficher les signes

Afficher un signe pour les nombres positifs et négatifs, mais pas pour zéro&nbsp;:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// '+55%'
```

Notez que lorsque le signe de la devise est `"accounting"`, des parenthèses peuvent être utilisées à la place d'un signe moins&nbsp;:

```js
new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
  signDisplay: "always",
}).format(-3500);
// '($3,500.00)'
```

### `FractionDigits`, `SignificantDigits` et `IntegerDigits`

Vous pouvez définir le nombre minimum ou maximum de chiffres fractionnaires, entiers ou significatifs à afficher lors du formatage d'un nombre.

> [!NOTE]
> Si les limites de chiffres significatifs et fractionnaires sont toutes deux définies, le formatage réel dépend de la propriété [`roundingPriority`](#roundingpriority).

#### Utiliser `FractionDigits` et `IntegerDigits`

Les propriétés de chiffres entiers et fractionnaires indiquent le nombre de chiffres à afficher avant et après le point décimal, respectivement.
Si la valeur à afficher a moins de chiffres entiers que défini, elle sera complétée à gauche avec des zéros pour atteindre le nombre attendu.
Si elle a moins de chiffres fractionnaires, elle sera complétée à droite avec des zéros.
Les deux cas sont illustrés ci-dessous&nbsp;:

```js
// Le formatage ajoute des zéros pour afficher le nombre minimum de
// chiffres entiers et fractionnaires
console.log(
  new Intl.NumberFormat("en", {
    minimumIntegerDigits: 3,
    minimumFractionDigits: 4,
  }).format(4.33),
);
// "004.3300"
```

Si une valeur a plus de chiffres fractionnaires que le nombre maximum défini, elle sera arrondie.
La _manière_ dont elle est arrondie dépend de la propriété [`roundingMode`](#roundingmode) (plus de détails sont fournis dans la section [modes d'arrondi](#modes_darrondi)).
Ci-dessous, la valeur est arrondie de cinq chiffres fractionnaires (`4.33145`) à deux (`4.33`)&nbsp;:

```js
// Afficher la valeur raccourcie au nombre maximum de chiffres
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(4.33145),
);
// "4.33"
```

Les chiffres fractionnaires minimums n'ont aucun effet si la valeur a déjà plus de 2 chiffres fractionnaires&nbsp;:

```js
// Les fractions minimums n'ont aucun effet si la valeur a une précision
// plus élevée.
console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).format(4.33145),
);
// "4.331"
```

> [!WARNING]
> Faites attention aux valeurs par défaut, car elles peuvent affecter le formatage même si elles ne sont pas définies dans votre code.
> La valeur maximale par défaut des chiffres est `3` pour les valeurs simples, `2` pour la monnaie, et peut avoir des valeurs différentes pour d'autres types prédéfinis.

La valeur formatée ci-dessus est arrondie à 3 chiffres, même si nous n'avons pas défini le nombre maximum de chiffres&nbsp;!
Ceci est dû au fait qu'une valeur par défaut de `maximumFractionDigits` est définie lorsque nous spécifions `minimumFractionDigits`, et vice versa. Les valeurs par défaut de `maximumFractionDigits` et `minimumFractionDigits` sont respectivement `3` et `0`.

Vous pouvez utiliser {{JSxRef("Intl/NumberFormat/resolvedOptions", "resolvedOptions()")}} pour inspecter le formateur.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 2,
//   …
// }

console.log(
  new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 3,
//   …
// }
```

#### Utiliser `SignificantDigits`

Le nombre de _chiffres significatifs_ est le nombre total de chiffres, y compris les parties entières et fractionnaires.
La propriété `maximumSignificantDigits` est utilisée pour indiquer le nombre total de chiffres de la valeur d'origine à afficher.

Les exemples ci-dessous montrent comment cela fonctionne.
Notez en particulier le dernier cas&nbsp;: seul le premier chiffre est conservé et les autres sont supprimés/mis à zéro.

```js
// Afficher 5 chiffres significatifs
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 5,
  }).format(54.33145),
);
// "54.331"

// Afficher 2 chiffres significatifs
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(54.33145),
);
// "54"

// Afficher 1 chiffre significatif
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 1,
  }).format(54.33145),
);
// "50"
```

La propriété `minimumSignificantDigits` garantit qu'au moins le nombre défini de chiffres est affiché, en ajoutant des zéros à la fin de la valeur si nécessaire.

```js
// Minimum 10 chiffres significatifs
console.log(
  new Intl.NumberFormat("en", {
    minimumSignificantDigits: 10,
  }).format(54.33145),
);
// "54.33145000"
```

> [!WARNING]
> Faites attention aux valeurs par défaut, car elles peuvent affecter le formatage.
> Si une seule propriété `SignificantDigits` est utilisée, alors sa contrepartie sera automatiquement appliquée avec la valeur par défaut.
> Les valeurs maximales et minimales par défaut des chiffres significatifs sont respectivement 21 et 1.

#### Définir les chiffres significatifs et fractionnaires en même temps

Les chiffres fractionnaires ([`minimumFractionDigits`](#minimumfractiondigits)/[`maximumFractionDigits`](#maximumfractiondigits)) et les chiffres significatifs ([`minimumSignificantDigits`](#minimumsignificantdigits)/[`maximumSignificantDigits`](#maximumsignificantdigits)) sont deux façons de contrôler combien de chiffres fractionnaires et principaux doivent être formatés.
Si les deux sont utilisés en même temps, il est possible qu'ils entrent en conflit.

Ces conflits sont résolus en utilisant la propriété [`roundingPriority`](#roundingpriority).
Par défaut, cette propriété a la valeur `"auto"`, ce qui signifie que si l'une des propriétés [`minimumSignificantDigits`](#minimumsignificantdigits) ou [`maximumSignificantDigits`](#maximumsignificantdigits) est définie, les propriétés de chiffres fractionnaires et entiers seront ignorées.

Par exemple, le code ci-dessous formate la valeur de `4.33145` avec `maximumFractionDigits: 3`, puis `maximumSignificantDigits: 2`, et enfin les deux.
La valeur avec les deux propriétés est celle définie par `maximumSignificantDigits`.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
  }).format(4.33145),
);
// "4.331"
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(4.33145),
);
// "4.3"
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    maximumSignificantDigits: 2,
  }).format(4.33145),
);
// "4.3"
```

En utilisant {{JSxRef("Intl/NumberFormat/resolvedOptions", "resolvedOptions()")}} pour inspecter le formateur, nous pouvons voir que l'objet retourné n'inclut pas `maximumFractionDigits` lorsque `maximumSignificantDigits` ou `minimumSignificantDigits` sont définis.

```js
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    maximumSignificantDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumSignificantDigits: 1,
//   maximumSignificantDigits: 2,
//   …
// }
console.log(
  new Intl.NumberFormat("en", {
    maximumFractionDigits: 3,
    minimumSignificantDigits: 2,
  }).resolvedOptions(),
);
// {
//   …
//   minimumIntegerDigits: 1,
//   minimumSignificantDigits: 2,
//   maximumSignificantDigits: 21,
//   …
// }
```

En plus de `"auto"`, vous pouvez résoudre les conflits en définissant [`roundingPriority`](#roundingpriority) comme `"morePrecision"` ou `"lessPrecision"`.
Le formateur calcule la précision en utilisant les valeurs de `maximumSignificantDigits` et `maximumFractionDigits`.

Le code ci-dessous montre le format sélectionné pour les trois priorités d'arrondi différentes&nbsp;:

```js
const maxFracNF = new Intl.NumberFormat("en", {
  maximumFractionDigits: 3,
});
console.log(`maximumFractionDigits:3 - ${maxFracNF.format(1.23456)}`);
// "maximumFractionDigits:2 - 1.235"

const maxSigNS = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
});
console.log(`maximumSignificantDigits:3 - ${maxSigNS.format(1.23456)}`);
// "maximumSignificantDigits:3 - 1.23"

const bothAuto = new Intl.NumberFormat("en", {
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`auto - ${bothAuto.format(1.23456)}`);
// "auto - 1.23"

const bothLess = new Intl.NumberFormat("en", {
  roundingPriority: "lessPrecision",
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`lessPrecision - ${bothLess.format(1.23456)}`);
// "lessPrecision - 1.23"

const bothMore = new Intl.NumberFormat("en", {
  roundingPriority: "morePrecision",
  maximumSignificantDigits: 3,
  maximumFractionDigits: 3,
});
console.log(`morePrecision - ${bothMore.format(1.23456)}`);
// "morePrecision - 1.235"
```

Notez que l'algorithme peut se comporter de manière contre-intuitive si une valeur minimale est définie sans valeur maximale.
L'exemple ci-dessous formate la valeur `1` en définissant `minimumFractionDigits: 2` (formatage en `1.00`) et `minimumSignificantDigits: 2` (formatage en `1.0`).
Puisque `1.00` a plus de chiffres que `1.0`, cela devrait être le résultat lors de la priorité `morePrecision`, mais en fait, c'est le contraire qui se produit&nbsp;:

```js
const bothLess = new Intl.NumberFormat("en", {
  roundingPriority: "lessPrecision",
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});
console.log(`lessPrecision - ${bothLess.format(1)}`);
// "lessPrecision - 1.00"

const bothMore = new Intl.NumberFormat("en", {
  roundingPriority: "morePrecision",
  minimumFractionDigits: 2,
  minimumSignificantDigits: 2,
});
console.log(`morePrecision - ${bothMore.format(1)}`);
// "morePrecision - 1.0"
```

La raison en est que seules les valeurs de «&nbsp;précision maximale&nbsp;» sont utilisées pour le calcul, et la valeur par défaut de `maximumSignificantDigits` est beaucoup plus élevée que celle de `maximumFractionDigits`.

> [!NOTE]
> Le groupe de travail a proposé une modification de l'algorithme où le formateur devrait évaluer le résultat de l'utilisation des chiffres fractionnaires et significatifs définis de manière indépendante (en tenant compte des valeurs minimales et maximales).
> Il sélectionnera ensuite l'option qui affiche plus de chiffres fractionnaires si `morePrecision` est défini, et moins si `lessPrecision` est défini.
> Cela entraînera un comportement plus intuitif pour ce cas.

### Modes d'arrondi

Si une valeur a plus de chiffres fractionnaires que ceux autorisés par les options du constructeur, la valeur formatée sera _arrondie_ au nombre défini de chiffres fractionnaires.
La _manière_ dont la valeur est arrondie dépend de la propriété [`roundingMode`](#roundingmode).

Les formateurs de nombres utilisent par défaut l'arrondi `halfExpand`, qui arrondit les valeurs «&nbsp;à l'écart de zéro&nbsp;" au demi-incrément (en d'autres termes, la _magnitude_ de la valeur est arrondie vers le haut).

Pour un nombre positif, si les chiffres fractionnaires à supprimer sont plus proches de l'incrément suivant (ou au point médian), les chiffres fractionnaires restants seront arrondis vers le haut, sinon ils seront arrondis vers le bas.
Cela est illustré ci-dessous&nbsp;: 2,23 arrondi à deux chiffres significatifs est tronqué à 2,2 car 2,23 est inférieur au demi-incrément 2,25, tandis que les valeurs de 2,25 et plus sont arrondies à 2,3&nbsp;:

```js
// Valeur inférieure au demi-incrément : arrondir vers le bas.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.23),
);
// "2.2"

// Valeur au point médian ou au-dessus : arrondir vers le haut.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.25),
);
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(2.28),
);
// "2.3"
// "2.3"
```

Un nombre négatif au point médian ou en dessous est également arrondi à l'écart de zéro (devient plus négatif)&nbsp;:

```js
// Valeur inférieure au demi-incrément : arrondir vers le bas.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.23),
);
// "-2.2"

// Valeur au point médian ou au-dessus : arrondir vers le haut.
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.25),
);
console.log(
  new Intl.NumberFormat("en", {
    maximumSignificantDigits: 2,
  }).format(-2.28),
);
// "-2.3"
// "-2.3"
```

Le tableau ci-dessous montre l'effet des différents modes d'arrondi pour les valeurs positives et négatives qui se trouvent sur et autour du demi-incrément.

| mode d'arrondi | 2.23 | 2.25 | 2.28 | -2.23 | -2.25 | -2.28 |
| -------------- | ---- | ---- | ---- | ----- | ----- | ----- |
| `ceil`         | 2.3  | 2.3  | 2.3  | -2.2  | -2.2  | -2.2  |
| `floor`        | 2.2  | 2.2  | 2.2  | -2.3  | -2.3  | -2.3  |
| `expand`       | 2.3  | 2.3  | 2.3  | -2.3  | -2.3  | -2.3  |
| `trunc`        | 2.2  | 2.2  | 2.2  | -2.2  | -2.2  | -2.2  |
| `halfCeil`     | 2.2  | 2.3  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfFloor`    | 2.2  | 2.2  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfExpand`   | 2.2  | 2.3  | 2.3  | -2.2  | -2.3  | -2.3  |
| `halfTrunc`    | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |
| `halfEven`     | 2.2  | 2.2  | 2.3  | -2.2  | -2.2  | -2.3  |

Lorsque vous utilisez `halfEven`, son comportement dépend également de la parité (impair ou pair) du dernier chiffre du nombre arrondi. Par exemple, le comportement de `halfEven` dans le tableau ci-dessus est le même que celui de `halfTrunc`, car les magnitudes de tous les nombres se situent entre un plus petit nombre «&nbsp;pair&nbsp;» (2.2) et un plus grand nombre «&nbsp;impair&nbsp;» (2.3). Si les nombres se situent entre ±2.3 et ±2.4, `halfEven` se comportera plutôt comme `halfExpand`. Ce comportement évite de sous-estimer ou de surestimer systématiquement les demi-incréments dans un grand échantillon de données.

### Utiliser `roundingIncrement`

Parfois, nous voulons arrondir les chiffres fractionnaires restants à un autre incrément que l'entier suivant.
Par exemple, les devises pour lesquelles la plus petite pièce est de 5 cents peuvent vouloir arrondir la valeur à des incréments de 5, reflétant les montants qui peuvent réellement être payés en espèces.

Ce type d'arrondi peut être réalisé avec la propriété [`roundingIncrement`](#roundingincrement).

Par exemple, si `maximumFractionDigits` est 2 et `roundingIncrement` est 5, alors le nombre est arrondi au 0,05 le plus proche&nbsp;:

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
});

console.log(nf.format(11.29)); // "$11.30"
console.log(nf.format(11.25)); // "$11.25"
console.log(nf.format(11.22)); // "$11.20"
```

Ce modèle particulier est appelé «&nbsp;arrondi au nickel&nbsp;», où nickel est le nom familier pour une pièce de 5 cents aux États-Unis.
Pour arrondir au dixième de dollar le plus proche («&nbsp;arrondi à la dime&nbsp;»), vous pouvez changer `roundingIncrement` à `10`.

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 10,
});

console.log(nf.format(11.29)); // "$11.30"
console.log(nf.format(11.25)); // "$11.30"
console.log(nf.format(11.22)); // "$11.20"
```

Vous pouvez également utiliser [`roundingMode`](#roundingmode) pour changer l'algorithme d'arrondi.
L'exemple ci-dessous montre comment l'arrondi `halfCeil` peut être utilisé pour arrondir la valeur «&nbsp;moins positive&nbsp;» en dessous de l'incrément d'arrondi à moitié et «&nbsp;plus positive&nbsp;» si elle est au-dessus ou sur l'incrément à moitié.
Le chiffre incrémenté est «&nbsp;0,05&nbsp;», donc l'incrément à moitié est à 0,025 (ci-dessous, cela est montré à 11,225).

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

console.log(nf.format(11.21)); // "$11.20"
console.log(nf.format(11.22)); // "$11.20"
console.log(nf.format(11.224)); // "$11.20"
console.log(nf.format(11.225)); // "$11.25"
console.log(nf.format(11.23)); // "$11.25"
```

Si vous devez changer le nombre de chiffres, rappelez-vous que `minimumFractionDigits` et `maximumFractionDigits` doivent tous deux être définis sur la même valeur, sinon une `RangeError` est levée.

`roundingIncrement` ne peut pas être combiné avec l'arrondi des chiffres significatifs ou toute autre configuration de `roundingPriority` autre que `auto`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.NumberFormat")}}
- La méthode {{JSxRef("Intl.supportedValuesOf()")}}
- L'objet {{JSxRef("Intl")}}
