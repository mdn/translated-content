---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
tags:
  - Espace de noms
  - Internationalisation
  - Intl
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl
---
{{JSRef}}

L'objet **`Intl`** est l'espace de noms pour l'API d'Internationalisation d'ECMAScript. Elle fournit des outils de comparaison de chaînes de caractères, de formatage des nombres, de dates et de l'heure selon les langues. `Intl` donne accès à plusieurs constructeurs et fonctionnalités communs aux constructeurs destinés à l'internationalion et à d'autres fonctions dépendantes des langues.

## Propriétés constructrices

- {{jsxref("Objets_globaux/Collator", "Intl.Collator")}}
  - : Le constructeur pour les ordonnanceurs (_collators_ en anglais) et les objets qui permettent la comparaison de chaînes de caractères selon les règles spécifiques d'une langue.
- {{jsxref("Objets_globaux/DateTimeFormat", "Intl.DateTimeFormat")}}
  - : Le constructeur pour les objets qui permettent le formatage des dates et de l'heure selon les règles spécifiques d'une langue.
- {{jsxref("Global_Objects/Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : Le constructeur pour les objets qui permettent de fournir des traductions constantes de noms de langues, régions et systèmes d'écriture.
- {{jsxref("Objets_globaux/ListFormat", "Intl.ListFormat")}}
  - : Le constructeur pour les objets qui permettent le formatage des listes selon les règles spécifiques d'une langue.
- {{jsxref("Global_Objects/Intl/Locale/Locale", "Intl.Locale()")}}
  - : Le constructeur pour les objets qui représentent un identifiant de langue Unicode.
- {{jsxref("Objets_globaux/NumberFormat", "Intl.NumberFormat")}}
  - : Le constructeur pour les objets qui permettent le formatage des nombres selon les règles spécifiques d'une langue.
- {{jsxref("Objets_globaux/PluralRules","Intl.PluralRules")}}
  - : Le constructeur pour les objets qui permettent le formatage prenant en compte le pluriel et les règles de pluriel spécifiques d'une langue.
- {{jsxref("Objets_globaux/RelativeTimeFormat","Intl.RelativeTimeFormat")}}
  - : Le constructeur pour les objets qui permettent le formatage d'intervalles de temps spécifiques d'une langue.

## Méthodes statiques

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Méthode renvoyant les noms canoniques des locales.

## Identification et choix de la locale

Les constructeurs d'internationalisation, ainsi que plusieurs autres méthodes spécifiques à une langue dans d'autres constructeurs (voir ci-dessous [Voir aussi](#voir_aussi)), utilisent un schéma commun pour identifier les locales et déterminer celle qu'ils utiliseront effectivement : ils acceptent tous les arguments `locales` et `options`, et ils négocient les locales demandées face aux locales qu'ils supportent, en utilisant un algorithme spécifié dans la propriété `options.localeMatcher`.

### Argument `locales`

L'argument `locales` peut être soit une chaîne de caractères comportant une [balise de langue BCP 47](http://tools.ietf.org/html/rfc5646), soit un tableau de telles balises. Si l'argument n'est pas fourni ou est indéfini, la locale par défaut de l'environnement d'exécution est utilisée.

Une balise de langue BCP 47 définit un langage et contient au minimum un code de langue principale. Dans sa forme la plus fréquente, elle peut contenir, dans l'ordre : un code de langue, un code de script et un code de pays ou de région, tous séparés par des tirets. Bien que la balise ne soit sensible à la casse, il est recommandé d'utiliser des initiales majuscules pour le code de script, des majuscules pour les codes de pays et de région, et des minuscules pour tout le reste.

Exemples :

- `"hi"` : Hindi (langue principale).
- `"de-AT"` : Allemand tel qu'utilisé en Autriche (langue principale avec un code pays).
- `"zh-Hans-CN"` : Le chinois écrit en caractères simplifiés tel qu'utilisé en Chine (langue principale avec des codes de script et de pays).

Les sous balises identifiant les langues, les scripts, les pays (régions) et les variantes (rarement utilisées) dans les balises de langue BCP 47 peuvent être trouvées dans le [registre IANA des Sous balises de Langues](http://www.iana.org/assignments/language-subtag-registry)

La BCP 47 permet également des extensions. Les fonctions d'internalisation de JavaScript utilisent l'extension "u" (Unicode), qui peut utilisée pour demander une personnalisation supplémentaire des objets {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, ou {{jsxref("DateTimeFormat")}}. Exemples :

- `"de-DE-u-co-phonebk"` : utiliser la variante annuaire de l'ordre de tri allemand, qui décompose les voyelles infléchies (à umlaut) en paires de caractères : ä → ae, ö → oe, ü → ue.
- `"th-TH-u-nu-thai"` : utiliser les chiffres thaïs (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) dans le formatage des nombres.
- `"ja-JP-u-ca-japanese"` : utiliser le calendrier japonais dans le formatage des dates et des heures, de sorte que 2013 soit exprimé comme l'an 25 de l'ère Heisei, ou 平成 25.
- `"en-GB-u-ca-islamic"` : utiliser l'anglais britannique avec le calendrier islamique (Hijri), où la date grégorienne 14 octobre 2017 est la date de l'ère de l'Hégire 24 Muharram,1439.

### Négociation de la locale

L'argument `locales`, après retrait de toutes les extensions Unicode, est interprété comme une requête classée par priorité émanant de l'application. L'environnement d'exécution le compare aux locales dont il dispose et choisit la meilleure disponible. Il existe deux algorithmes d'association : l'apparieur "lookup" suit l'algorithme Lookup spécifié dans [BCP 47](http://tools.ietf.org/html/rfc4647#section-3.4); l'apparieur "meilleure correspondance" laisse l'environnement d'exécution fournir une locale qui est au moins aussi, mais possiblement mieux, adaptée à la demande que le résultat de l'algorithme Lookup. Si l'application ne fournit pas d'argument `locales` ou que l'environnement d'exécution ne dispose pas d'une locale qui corresponde à la requête, alors la locale par défaut de l'environnement d'exécution est utilisée. L'apparieur peut être choisi en utilisant une propriété de l'argument `options` (voir ci-dessous).

Si la balise de la langue choisie comporte une sous chaîne d'extension Unicode, cette extension est maintenant utilisée pour personnaliser l'objet construit ou le comportement de la fonction. Chaque constructeur ou fonction ne supporte qu'un sous-ensemble des clés définies pour le extension Unicode, et les valeurs supportées dépendent souvent de la balise de langue. Par exemple, la clé "co" (collation) n'est supportée que par le constructeur {{jsxref("Collator")}}, et sa valeur "phonebk" n'est supportée que pour l'allemand.

### Argument `options`

L'argument `options` doit être un objet ayant des propriétés qui varient suivant qu'il s'agit des constructeurs ou des fonctions. Si l'argument `options` n'est pas fourni ou est indéfini, des valeurs par défaut seront utilisées pour toutes les propriétés.

Une propriété est supportée par tous les constructeurs et toutes les fonctions fondés sur les locales : la propriété `localeMatcher`, dont la valeur doit être la chaîne `"lookup"` ou `"best fit"`, et qui sélectionne l'un des algorithmes d'appariement décrits ci-dessus.

## Exemples

### Formater des dates et nombres

Vous pouvez utiliser Intl pour formater des dates et nombres dans un format qui est conventionnel pour une langue et une région spécifiques :

```js
const compte = 26254.39;
const date = new Date("2012-05-24");

function afficher (langue) {
  console.log(
    `${new Intl.DateTimeFormat(langue).format(date)} ${new Intl.NumberFormat(langue).format(compte)}`
  );
}

afficher("en-US");
// résultat attendu : 5/24/2012 26,254.39

afficher("de-DE");
// résultat attendu : 24.5.2012 26.254,39
```

## Spécifications

| Spécification                                                        | État                             | Commentaires                                            |
| -------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------- |
| {{SpecName('ES Int 1.0', '#sec-8', 'Intl')}}         | {{Spec2('ES Int 1.0')}} | Définition initiale.                                    |
| {{SpecName('ES Int 2.0', '#sec-8', 'Intl')}}         | {{Spec2('ES Int 2.0')}} |                                                         |
| {{SpecName('ES Int Draft', '#intl-object', 'Intl')}} | {{Spec2('ES Int Draft')}} | Ajout de `Intl.getCanonicalLocales` dans la 4e édition. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl")}}

## Voir aussi

- Introduction : ['The ECMAScript Internationalisation API](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- Constructeurs

  - {{jsxref("Collator", "Intl.Collator")}}
  - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
  - {{jsxref("ListFormat", "Intl.ListFormat")}}
  - {{jsxref("NumberFormat", "Intl.NumberFormat")}}
  - {{jsxref("PluralRules", "Intl.PluralRules")}}
  - {{jsxref("RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
  - {{jsxref("Locale", "Intl.Locale")}}

- Méthodes

  - {{jsxref("String.prototype.localeCompare()")}}
  - {{jsxref("Number.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleDateString()")}}
  - {{jsxref("Date.prototype.toLocaleTimeString()")}}
