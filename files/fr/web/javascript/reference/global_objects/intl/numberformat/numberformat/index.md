---
title: Constructeur Intl.NumberFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
---

{{JSRef}}

Le constructeur **`Intl.NumberFormat()`** permet de créer des objets [`Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) qui formatent des valeurs numériques en texte selon une locale et des options.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## Syntaxe

```js
new Intl.NumberFormat();
new Intl.NumberFormat(locales);
new Intl.NumberFormat(locales, options);
```

### Paramètres

- `locales` {{optional_inline}}

  - : Une chaîne de caractères représentant une balise de langue BCP 47 ou un tableau de telles balises. Pour la forme générale et l'interprétation de cet argument, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_choix_de_la_locale). Les clés d'extension Unicode suivantes sont autorisées&nbsp;:

    - `nu`
      - : Le système de numération à utiliser. Les valeurs possibles sont&nbsp;: "`adlm`", "`ahom`", "`arab`", "`arabext`", "`bali`", "`beng`", "`bhks`", "`brah`", "`cakm`", "`cham`", "`deva`", "`diak`", "`fullwide`", "`gong`", "`gonm`", "`gujr`", "`guru`", "`hanidec`", "`hmng`", "`hmnp`", "`java`", "`kali`", "`khmr`", "`knda`", "`lana`", "`lanatham`", "`laoo`", "`latn`", "`lepc`", "`limb`", "`mathbold`", "`mathdbl`", "`mathmono`", "`mathsanb`", "`mathsans`", "`mlym`", "`modi`", "`mong`", "`mroo`", "`mtei`", "`mymr`", "`mymrshan`", "`mymrtlng`", "`newa`", "`nkoo`", "`olck`", "`orya`", "`osma`", "`rohg`", "`saur`", "`segment`", "`shrd`", "`sind`", "`sinh`", "`sora`", "`sund`", "`takr`", "`talu`", "`tamldec`", "`telu`", "`thai`", "`tibt`", "`tirh`", "`vaii`", "`wara`", "`wcho`". — voir [la liste des systèmes de numération standard Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem).

- `options` {{optional_inline}}

  - : Un objet avec une ou plusieurs des propriétés suivantes&nbsp;:

    - `compactDisplay`
      - : Seulement utilisée lorsque `notation` vaut "`compact`". Soit "`short`" (la valeur par défaut) ou "`long`".
    - `currency`
      - : La devise à utiliser pour le formatage des montants. Les valeurs possibles sont les codes de devises ISO 4217 comme "`EUR`" pour l'euro, ou "`USD`" pour les dollars américains par exemple (voir [la liste des devises et fonds](https://www.currency-iso.org/en/home/tables/table-a1.html)). Il n'y a pas de valeur par défaut, si le style vaut "`currency`", la propriété `currency` doit être fournie.
    - `currencyDisplay`

      - : La façon d'afficher les devises pour le formatage des devises. Les valeurs possibles sont&nbsp;:

        - "`symbol`" pour utiliser le symbole localisé de la devise (par exemple €), il s'agit de la valeur par défaut,
        - "`narrowSymbol`" pour utiliser un symbole et une notation concise (par exemple "$100" plutôt que "US$100"),
        - "`code`" pour utiliser le code ISO de la devise,
        - "`name`" pour utiliser le nom localisé de la devise (par exemple "`dollar`"),

    - `currencySign`
      - : Dans de nombreuses locales, les formatages comptables utilisent des parenthèses autour du nombre plutôt qu'un signe moins pour indiquer une valeur négative. On peut activer ce comportement entre utilisant la valeur "`accounting`" pour l'option `currencySign`. La valeur par défaut est "`standard`".
    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont "`lookup`" et "`best fit`"&nbsp;; la valeur par défaut est "`best fit`". Pour plus d'information, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).
    - `notation`

      - : Le formatage qui devrait être utilisé pour le nombre.

        - "`standard`" pour l'affichage d'une valeur numérique simple, c'est la valeur par défaut,
        - "`scientific`" pour la notation scientifique de la valeur numérique,
        - "`engineering`" qui indique la puissance de dix lorsqu'elle est divisible par trois,
        - "`compact`" qui utilise l'exposant, c'est la valeur par défaut lorsque la forme "`short`" est utilisée.

    - `numberingSystem`
      - : Le système de numération. Les valeurs possibles sont&nbsp;: "`arab`", "`arabext`", " `bali`", "`beng`", "`deva`", "`fullwide`", " `gujr`", "`guru`", "`hanidec`", "`khmr`", "`knda`", "`laoo`", "`latn`", "`limb`", "`mlym`", " `mong`", "`mymr`", "`orya`", "`tamldec`", "`telu`", "`thai`", "`tibt`".
    - `signDisplay`

      - : Indique comment afficher le signe du nombre.

        - "`auto`" le signe est uniquement affiché pour les nombres négatifs, c'est la valeur par défaut,
        - "`never`" le signe n'est jamais affiché,
        - "`always`" le signe est toujours affiché,
        - "`exceptZero`" le signe est affiché sauf lorsque la valeur numérique est nulle.

    - `style`

      - : Le style de formatage à utiliser.

        - "`decimal`" pour les nombres simples, c'est la valeur par défaut,
        - "`currency`" pour les montants en devises,
        - "`percent`" pour les pourcentages,
        - "`unit`" pour les mesures avec des unités.

    - `unit`
      - : L'unité à utiliser lorsque `style` vaut `unit`. Les valeurs possibles sont des identifiants d'unités tels que définis [dans la section 6 de la partie 2 de UTS #35](https://unicode.org/reports/tr35/tr35-general.html#Unit_Elements). [Un sous-ensemble des unités](https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier) de [la liste complète](https://github.com/unicode-org/cldr/blob/master/common/validity/unit.xml) a été sélectionné pour être utilisé avec ECMAScript. Des paires d'unités simples peuvent être concaténées avec "`-per-`" pour construire une unité composite. Il n'existe pas de valeur par défaut. Cette propriété doit être fournie lorsque la valeur de `style` vaut "`unit`".
    - `unitDisplay`

      - : Le style de formatage pour les unités à utiliser lorsque `style` vaut `unit`.

        - "`long`" (par exemple `16 litres`)
        - "`short`" (par exemple `16 l`), c'est la valeur par défaut
        - "`narrow`" (par exemple `16l`)

    - `useGrouping`
      - : Indique si des séparateurs de groupe sont à utiliser (pour séparer par exemple des milliers/lakh/crore). Les valeurs possibles sont "`true`" ou "`false`", la valeur par défaut est `true`.

    Les propriétés suivantes s'inscrivent dans deux groupes distincts&nbsp;: d'une part `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits` et d'autre part `minimumSignificantDigits` and `maximumSignificantDigits`. Si au moins une des propriétés du second groupe est définie, toute propriété du premier groupe sera ignorée.

    - `minimumIntegerDigits`
      - : Le nombre minimal de chiffres à utiliser. Les valeurs possibles vont de 1 à 21&nbsp;; la valeur par défaut est 1.
    - `minimumFractionDigits`
      - : Le nombre minimal de chiffres décimaux (derrière la virgule) à utiliser. Les valeurs possibles vont de 0 à 20&nbsp;; la valeur par défaut pour les nombres normaux et les pourcentages est 0&nbsp;; la valeur par défaut pour la mise en forme des montants en devises correspond au nombre de chiffres fourni par [la liste ISO 4217 pour les devises](https://www.currency-iso.org/en/home/tables/table-a1.html) (et 2 si la liste ne fournit pas cette information).
    - `maximumFractionDigits`
      - : Le nombre maximal de chiffres décimaux (derrière la virgule) à utiliser. Les valeurs possibles vont de 0 à 20&nbsp;; la valeur par défaut pour les nombres normaux correspond au maximum entre `minimumFractionDigits` et 3&nbsp;; la valeur par défaut pour les montants en devises correspond au maximum entre `minimumFractionDigits` et au nombre de chiffres fourni par [la liste ISO 4217 pour les devises](https://www.currency-iso.org/en/home/tables/table-a1.html) (et 2 si la liste ne fournit pas cette information)&nbsp;; la valeur par défaut pour le formatage des pourcentages correspond au maximum entre `minimumFractionDigits` et 0.
    - `minimumSignificantDigits`
      - : Le nombre minimal de chiffres significatifs à utiliser. Les valeurs possibles vont de 1 à 21&nbsp;; la valeur par défaut est 1.
    - `maximumSignificantDigits`
      - : Le nombre maximal de chiffres significatifs à utiliser. Les valeurs possibles vont de 1 à 21&nbsp;; la valeur par défaut 21.

## Exemples

### Utilisation simple

Par défaut, sans indiquer de locale, une chaîne formatée avec la locale et les options par défaut est renvoyée.

```js
let amount = 3500;

console.log(new Intl.NumberFormat().format(amount));
// → '3 500' si l'environnement est en français
```

### Formatage pour des nombres décimaux et des pourcentages

```js
let amount = 3500;

new Intl.NumberFormat("en-US", { style: "decimal" }).format(amount);
// → '3,500'
new Intl.NumberFormat("fr", { style: "percent" }).format(amount);
// → '350 000 %'
```

### Formatage avec des unités

Si l'option `style` vaut `'unit'`, une propriété `unit` doit être fournie. Le paramètre optionnel `unitDisplay` contrôle le formatage de l'unité.

```js
let amount = 3500;

new Intl.NumberFormat("en-US", { style: "unit", unit: "liter" }).format(amount);
// → '3,500 L'

new Intl.NumberFormat("fr", {
  style: "unit",
  unit: "liter",
  unitDisplay: "long",
}).format(amount);
// → '3 500 litres'
```

### Formatage de devises

Si l'option `style` vaut `'currency'`, une propriété `currency` doit être fournie. Les paramètres optionnels `currencyDisplay` et `currencySign` contrôlent le formatage de la devise.

```js
let amount = -3500;
new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
  amount,
);
// → '-$3,500.00'

new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
}).format(amount);
// →  '-3,500.00 US dollars'

new Intl.NumberFormat("fr", {
  style: "currency",
  currency: "EUR",
  currencySign: "accounting",
}).format(amount);
// →  "(3 500,00 €)"
```

### Notations scientifique, ingénieur et compacte

Ces notations sont portées par l'option `notation` et peuvent être formatées ainsi&nbsp;:

```js
new Intl.NumberFormat("en-US", { notation: "scientific" }).format(987654321);
// → 9.877E8

new Intl.NumberFormat("pt-PT", { notation: "scientific" }).format(987654321);
// → 9,877E8

new Intl.NumberFormat("en-GB", { notation: "engineering" }).format(987654321);
// → 987.654E6

new Intl.NumberFormat("de", { notation: "engineering" }).format(987654321);
// → 987,654E6

new Intl.NumberFormat("zh-CN", { notation: "compact" }).format(987654321);
// → 9.9亿

new Intl.NumberFormat("fr", {
  notation: "compact",
  compactDisplay: "long",
}).format(987654321);
// → 988 millions

new Intl.NumberFormat("en-GB", {
  notation: "compact",
  compactDisplay: "short",
}).format(987654321);
// → 988M
```

### Affichage des signes

Dans l'exemple qui suit, on affiche toujours le signe sauf si la valeur est zéro&nbsp;:

```js
new Intl.NumberFormat("en-US", {
  style: "percent",
  signDisplay: "exceptZero",
}).format(0.55);
// → '+55%'
```

On notera que lorsque le style porte sur les devises et que le style de signe vaut "`accounting`", des parenthèses pourront être utilisées plutôt qu'un signe moins&nbsp;:

```js
new Intl.NumberFormat("bn", {
  style: "currency",
  currency: "USD",
  currencySign: "accounting",
  signDisplay: "always",
}).format(-3500);

// → '($3,500.00)'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf)
- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
