---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat
---
{{JSRef}}

L'objet **`Intl.NumberFormat`** est un constructeur permettant de créer des objets pour formater des nombres en fonction de la locale.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## Syntaxe

    new Intl.NumberFormat([locales[, options]])
    Intl.NumberFormat.call(this[, locales[, options]])

### Paramètres

- `locales`

  - : Paramètre optionnel. Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument `locales`, voir la page {{jsxref("Intl","Intl","#L'identification_et_le_choix_de_la_locale")}}. Les clefs d'extensions Unicode suivantes sont autorisées :

    - nu
      - : Le système numérique à utiliser. Parmi les valeurs possibles, on a : `"arab", "arabext", "bali", "beng", "deva", "fullwide", "gujr", "guru", "hanidec", "khmr", "knda", "laoo", "latn", "limb", "mlym", "mong", "mymr", "orya", "tamldec", "telu", "thai", "tibt".`

- `options`

  - : Paramètre optionnel. Un objet avec certaines ou toutes les propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme de correspondance à utiliser pour la locale. Les valeurs possibles sont `"lookup"` et `"best fit"` ; le défaut est `"best fit"`. Pour des informations sur cette option, voir la page {{jsxref("Intl","Intl","##Choix_de_la_locale")}}.
    - `style`
      - : Le style de formatage. Les valeurs possibles sont `"decimal"` pour l'affichage de nombres simple, `"currency"` pour un affichage en fonction de la devise et `"percent"` pour afficher des pourcentages. La valeur par défaut est `"decimal"`.
    - `currency`
      - : La devise à utiliser pour le formatage. Les valeurs possibles sont les codes ISO 4217 pour les devises, tels que `"USD"` pour le dollar américain, `"EUR"` pour l'euro, ou `"CNY"` pour le yuan chinois. Voir la page listant [les codes actuels pour les devises et les fonds](http://www.currency-iso.org/en/home/tables/table-a1.html) (en anglais). Il n'y a pas de valeur par défaut. Si le style choisi avec l'option `style` est "currency", la propriété `currency` doit être définie.
    - `currencyDisplay`
      - : La façon d'afficher la devise dans le format courant. Les valeurs possibles sont `"symbol"` qui permet d'utiliser un symbole localisé comme '€', `"code"` qui affichera le code ISO de la devise (voir ci-avant), `"name"`  affichera un nom localisé pour la devise comme `"dollar"`. La valeur par défaut est `"symbol"`.
    - `useGrouping`
      - : Cette option indique si on doit utiliser des séparateurs de groupes (comme les séparateurs de milliers ou autres comme lakhs et crores). Les valeurs possibles sont `true` et `false`. La valeur par défaut `true`.

    Les propriétés suivantes peuvent être classées en deux groupes. Dans le premier on aura `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits` et dans le second on aura `minimumSignificantDigits` et `maximumSignificantDigits`. S'il existe une option définie pour le second groupe, les options du premier groupe seront ignorées.

    - `minimumIntegerDigits`
      - : Le nombre minimal de chiffres à utiliser pour la partie entière. Les valeurs possibles sont comprises entre 1 to 21. La valeur par défaut est 1.
    - `minimumFractionDigits`
      - : Le nombre minimal de chiffres à utiliser pour la partie fractionnaire. Les valeurs possibles sont comprises entre 0 et 20. Pour les formats `"decimal"` et `"percent"`, la valeur par défaut est 0. La valeur par défaut pour le formatage monétaire (`"currency"`) correspond au nombre de chiffres défini par [la liste de codes de devises ISO 4217](https://www.currency-iso.org/en/home/tables/table-a1.html), si cette valeur n'est pas définie dans cette liste, on aura 2 chiffres.
    - `maximumFractionDigits`
      - : Le nombre maximal de chiffres à utiliser pour représenter la partie fractionnaire. Les valeurs possibles sont comprises entre 0 et 20. Pour le format `"decimal"`, la valeur par défaut est le maximum entre 3 et `minimumFractionDigits`. Pour le format monétaire (`"currency"`), la valeur par défaut est le maximum entre  `minimumFractionDigits` et le nombre de chiffres prévus par la liste [ISO 4217 des codes de devises](https://www.currency-iso.org/en/home/tables/table-a1.html) (ou 2 si cette information n'est pas disponible dans cette liste). Pour le format en pourcent, la valeur par défaut est le maximum entre `minimumFractionDigits` et 0.
    - `minimumSignificantDigits`
      - : Le nombre minimal de chiffres significatifs à utiliser. Les valeurs possibles sont comprises entre 1 et 21. La valeur par défaut est 1.
    - `maximumSignificantDigits`
      - : Le nombre maximal de chiffres significatifs à utiliser. Les valeurs possibles sont comprises entre 1 et 21. La valeur par défaut est `minimumSignificantDigits`.

## Description

### Propriétés

- {{jsxref("NumberFormat.prototype", "Intl.NumberFormat.prototype")}}
  - : Permet d'ajouter des propriétés à toutes les instances.

### Méthodes

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Renvoie un tableau des locales supportées parmi les locales données afin d'éviter d'utiliser la locale par défaut de l'environnement.

## Instances de `NumberFormat`

### Propriétés

Les instances de `NumberFormat` héritent des propriétés suivantes grâce à leur prototype :

{{page('fr/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype','Properties')}}

### Méthods

Les instances de `NumberFormat` héritent des méthodes suivantes grâce à leur prototype :

{{page('fr/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype','Methods')}}

## Exemples

### Usage simple

Sans aucune spécification, le résultat sera une chaîne de caractères avec la locale et les options par défaut :

```js
var nombre = 3500;

console.log(new Intl.NumberFormat().format(nombre));
// → "3 500" pour la locale fr
```

### Utiliser `locales`

Cet exemple illustre les variations possibles des formats numériques localisés. Si vous souhaitez que votre application utilise le format de la locale de l'utilisateur, assurez vous de l'indiquer via l'argument `locales` (voire avec d'autres locales de secours) :

```js
var nombre = 123456.789;

// L'allemand utilise la virgule comme séparateur décimal
// et un point pour indiquer les milliers
console.log(new Intl.NumberFormat("de-DE").format(nombre));
// → 123.456,789

// Dans la plupart des pays arabophones, on utilise les
// chiffres arabo-hindîs
console.log(new Intl.NumberFormat("ar-EG").format(nombre));
// → ١٢٣٤٥٦٫٧٨٩

// L'indien utilise des séparateurs pour les milliers,
//les lakhs et les crores
console.log(new Intl.NumberFormat("en-IN").format(nombre));
// → 1,23,456.789

// La clé d'extension nu indique une l'utilisation d'un système numérique
// par exemple le système chinois
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(nombre));
// → 一二三,四五六.七八九

// Lorsqu'une locale n'est pas supportée (par exemple le balinais)
// on peut inclure une locale de secours (ici l'indonésien)
console.log(new Intl.NumberFormat(["ban", "id"]).format(nombre));
// → 123.456,789
```

### Utiliser `options`

Les résultats fournis par `toLocaleString` peuvent être paramétrés grâce à l'argument `options` :

```js
var nombre = 123456.789;

// on affiche une devise avec le style "currency"
console.log(new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(nombre));
// → 123.456,79 €

// Le yen japonais n'a pas de centimes
console.log(new Intl.NumberFormat("ja-JP", {style: "currency", currency: "JPY"}).format(nombre))
// → ￥123,457

// On se limite ici à trois chiffres significatifs
console.log(new Intl.NumberFormat("en-IN", {maximumSignificantDigits: 3}).format(nombre));
// → 1,23,000
```

## Spécifications

| Spécification                                                                                        | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-11.1', 'Intl.NumberFormat')}}                     | {{Spec2('ES Int 1.0')}} | Définition initiale. |
| {{SpecName('ES Int 2.0', '#sec-11.1', 'Intl.NumberFormat')}}                     | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#numberformat-objects', 'Intl.NumberFormat')}} | {{Spec2('ES Int Draft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.NumberFormat")}}

## Voir aussi

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl','Voir_aussi')}}
