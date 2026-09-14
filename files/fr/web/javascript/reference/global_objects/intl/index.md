---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

L'objet espace de noms **`Intl`** contient plusieurs constructeurs ainsi que des fonctionnalités communes aux constructeurs d'internationalisation et aux autres fonctions sensibles à la langue. Ensemble, ils constituent l'API d'internationalisation ECMAScript, qui fournit la comparaison de chaînes de caractères sensible à la langue, le formatage des nombres, le formatage des dates et heures, et plus encore.

## Description

Contrairement à la plupart des objets globaux, `Intl` n'est pas un constructeur. Vous ne pouvez pas l'utiliser avec [l'opérateur `new`](/fr/docs/Web/JavaScript/Reference/Operators/new) ni invoquer l'objet `Intl` comme une fonction. Toutes les propriétés et méthodes de `Intl` sont statiques (comme pour l'objet {{JSxRef("Math")}}).

Les constructeurs d'internationalisation ainsi que plusieurs méthodes sensibles à la langue d'autres constructeurs (listées dans la section [Voir aussi](#voir_aussi)) utilisent un schéma commun pour identifier les locales et déterminer celle qui sera effectivement utilisée&nbsp;: ils acceptent tous les arguments `locales` et `options`, et négocient la ou les locales demandées avec celles qu'ils prennent en charge à l'aide d'un algorithme défini dans la propriété `options.localeMatcher`.

### Argument `locales`

L'argument `locales` est utilisé pour déterminer la locale utilisée dans une opération donnée. L'implémentation JavaScript examine `locales`, puis calcule une locale qu'elle comprend et qui se rapproche le plus de la préférence exprimée. `locales` peut être&nbsp;:

- `undefined` (ou omis)&nbsp;: la locale par défaut de l'implémentation sera utilisée.
- Une locale&nbsp;: un identifiant de locale ou un objet [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) qui encapsule un identifiant de locale.
- Une liste de locales&nbsp;: toute autre valeur, qui sera convertie en objet puis traitée comme un tableau de locales.

Dans les deux derniers cas, la locale effectivement utilisée est la locale la mieux prise en charge déterminée par la [négociation de locale](#locale_identification_and_negotiation). Si un identifiant de locale n'est ni une chaîne de caractères ni un objet, une exception {{JSxRef("TypeError")}} est levée. Si un identifiant de locale est une chaîne de caractères syntaxiquement invalide, une exception {{JSxRef("RangeError")}} est levée. Si un identifiant de locale est bien formé mais que l'implémentation ne le reconnaît pas, il est ignoré et la locale suivante de la liste est considérée, avec un retour éventuel à la locale du système. Cependant, il ne faut pas compter sur le fait qu'un nom de locale particulier soit ignoré, car l'implémentation peut ajouter des données pour n'importe quelle locale à l'avenir. Par exemple, `new Intl.DateTimeFormat("default")` utilise la locale par défaut de l'implémentation uniquement parce que `"default"` est syntaxiquement valide mais n'est reconnue comme aucune locale.

Un identifiant de locale est une chaîne de caractères composée de&nbsp;:

1. Un sous-étiquette de langue comportant 2 à 3 ou 5 à 8 lettres
2. Un sous-étiquette d'écriture comportant 4 lettres {{Optional_Inline}}
3. Un sous-étiquette de région comportant soit 2 lettres, soit 3 chiffres {{Optional_Inline}}
4. Une ou plusieurs sous-étiquettes de variante (toutes doivent être uniques), chacune comportant soit 5 à 8 caractères alphanumériques, soit un chiffre suivi de 3 caractères alphanumériques {{Optional_Inline}}
5. Une ou plusieurs séquences d'extension {{Glossary("BCP 47 language tag", "de balise de langue BCP 47")}} {{Optional_Inline}}
6. Une séquence d'extension à usage privé {{Optional_Inline}}

Chaque sous-étiquette et séquence est séparée par un tiret. Les identifiants de locale ne tiennent pas compte de la casse {{Glossary("ASCII")}}. Cependant, il est d'usage d'utiliser la casse capitale initiale (la première lettre en majuscule, les suivantes en minuscule) pour les sous-étiquettes d'écriture, la casse majuscule pour les sous-étiquettes de région et la casse minuscule pour tout le reste. Par exemple&nbsp;:

- `"hi"`&nbsp;: hindi (langue)
- `"de-AT"`&nbsp;: allemand (langue) tel qu'utilisé en Autriche (région)
- `"zh-Hans-CN"`&nbsp;: chinois (langue) écrit en caractères simplifiés (écriture) tel qu'utilisé en Chine (région)
- `"en-emodeng"`&nbsp;: anglais (langue) dans le dialecte "Early modern English" (variante)

Les sous-étiquettes identifiant les langues, écritures, régions (y compris les pays) et (rarement utilisées) variantes sont enregistrées dans le [registre IANA des sous-étiquettes de langue <sup>(angl.)</sup>](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry). Ce registre est mis à jour périodiquement, et les implémentations ne sont pas toujours à jour, donc il ne faut pas trop compter sur la prise en charge universelle des sous-étiquettes.

Les séquences d'extension BCP 47 consistent en un seul chiffre ou une seule lettre (autre que `"x"`) et une ou plusieurs sous-étiquettes de deux à huit lettres ou chiffres séparées par des tirets. Une seule séquence est autorisée pour chaque chiffre ou lettre&nbsp;: `"de-a-toto-a-toto"` est invalide. Les sous-étiquettes d'extension BCP 47 sont définies dans le [projet Unicode CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/tree/main/common/bcp47). Actuellement, seules deux extensions ont des significations définies&nbsp;:

- L'extension `"u"` (Unicode) peut être utilisée pour demander une personnalisation supplémentaire des objets de l'API `Intl`. Exemples&nbsp;:
  - `"de-DE-u-co-phonebk"`&nbsp;: utiliser la variante d'ordre téléphonique allemand, qui interprète les voyelles avec tréma comme des paires de caractères correspondantes&nbsp;: ä → ae, ö → oe, ü → ue.
  - `"th-TH-u-nu-thai"`&nbsp;: utiliser les chiffres thaïs (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) pour le formatage des nombres.
  - `"ja-JP-u-ca-japanese"`&nbsp;: utiliser le calendrier japonais pour le formatage des dates et heures, de sorte que 2013 soit exprimé comme l'année 25 de l'ère Heisei, ou 平成 25.
  - `"en-GB-u-ca-islamic-umalqura"`&nbsp;: utiliser l'anglais britannique avec le calendrier Umm al-Qura (Hijri), où la date grégorienne du 14 octobre 2017 correspond à la date hijri 24 Muharram, 1439.

- L'extension `"t"` (transformed) indique un contenu transformé&nbsp;: par exemple, un texte qui a été traduit depuis une autre locale. Aucune fonctionnalité de `Intl` ne prend actuellement en compte l'extension `"t"`. Cependant, cette extension contient parfois une locale imbriquée (sans extensions)&nbsp;: par exemple, l'extension transformée dans `"de-t-en"` contient l'identifiant de locale pour l'anglais. Si une locale imbriquée est présente, elle doit être un identifiant de locale valide. Par exemple, comme `"en-emodeng-emodeng"` est invalide (car il contient une sous-étiquette de variante `emodeng` dupliquée), `"de-t-en-emodeng-emodeng"` est aussi invalide.

Enfin, une séquence d'extension à usage privé utilisant la lettre `"x"` peut apparaître, suivie d'une ou plusieurs sous-étiquettes de un à huit lettres ou chiffres séparées par des tirets. Cela permet aux applications d'encoder des informations pour leur propre usage, qui seront ignorées par toutes les opérations `Intl`.

### Argument `options`

L'argument `options` doit être un objet avec des propriétés qui varient selon les constructeurs et les fonctions. Si l'argument `options` n'est pas fourni ou est indéfini, des valeurs par défaut sont utilisées pour toutes les propriétés.

Une propriété est prise en charge par tous les constructeurs et fonctions sensibles à la langue&nbsp;: la propriété `localeMatcher`, dont la valeur doit être une chaîne de caractères `"lookup"` ou `"best fit"` et qui sélectionne l'un des algorithmes de correspondance de locale décrits ci-dessous.

### Identification et négociation de locale

La liste des locales spécifiée par l'argument `locales`, après suppression des extensions Unicode, est interprétée comme une demande priorisée de l'application. L'environnement d'exécution la compare aux locales disponibles et choisit la meilleure disponible. Deux algorithmes de correspondance existent&nbsp;: le comparateur `"lookup"` suit l'algorithme Lookup défini dans la [BCP 47](https://datatracker.ietf.org/doc/html/rfc4647#section-3.4)&nbsp;; le comparateur `"best fit"` permet à l'environnement d'exécution de fournir une locale au moins aussi adaptée, voire plus, que le résultat de l'algorithme Lookup. Si l'application ne fournit pas d'argument `locales`, ou si l'environnement d'exécution ne dispose pas d'une locale correspondant à la demande, la locale par défaut de l'environnement est utilisée. Le comparateur peut être sélectionné à l'aide d'une propriété de l'argument `options` (voir ci-dessous).

Si l'identifiant de locale sélectionné comportait une séquence d'extension Unicode, cette extension est maintenant utilisée pour personnaliser l'objet construit ou le comportement de la fonction. Chaque constructeur ou fonction ne prend en charge qu'un sous-ensemble des clés définies pour l'extension Unicode, et les valeurs prises en charge dépendent souvent de l'identifiant de locale. Par exemple, la clé `"co"` (collation) n'est prise en charge que par {{JSxRef("Intl.Collator")}}, et sa valeur `"phonebk"` n'est prise en charge que pour l'allemand.

## Propriétés statiques

- {{JSxRef("Intl.Collator")}}
  - : Constructeur pour les collationneurs, qui sont des objets permettant la comparaison de chaînes de caractères en tenant compte de la langue.
- {{JSxRef("Intl.DateTimeFormat")}}
  - : Constructeur pour les objets permettant le formatage des dates et heures sensible à la langue.
- {{JSxRef("Intl.DisplayNames")}}
  - : Constructeur pour les objets permettant la traduction cohérente des noms de langues, de régions et d'écritures.
- {{JSxRef("Intl.DurationFormat")}}
  - : Constructeur pour les objets permettant le formatage des durées sensible à la locale.
- {{JSxRef("Intl.ListFormat")}}
  - : Constructeur pour les objets permettant le formatage des listes sensible à la langue.
- {{JSxRef("Intl.Locale")}}
  - : Constructeur pour les objets représentant un identifiant de locale Unicode.
- {{JSxRef("Intl.NumberFormat")}}
  - : Constructeur pour les objets permettant le formatage des nombres sensible à la langue.
- {{JSxRef("Intl.PluralRules")}}
  - : Constructeur pour les objets permettant le formatage prenant en compte le pluriel et les règles de pluriel spécifiques à une langue.
- {{JSxRef("Intl.RelativeTimeFormat")}}
  - : Constructeur pour les objets permettant le formatage des temps relatifs sensible à la langue.
- {{JSxRef("Intl.Segmenter")}}
  - : Constructeur pour les objets permettant la segmentation de texte sensible à la locale.
- `Intl[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Intl"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes statiques

- {{JSxRef("Intl.getCanonicalLocales()")}}
  - : Retourne les noms canoniques des locales.
- {{JSxRef("Intl.supportedValuesOf()")}}
  - : Retourne un tableau trié contenant les valeurs uniques de calendrier, de collation, de monnaie, de systèmes de numérotation ou d'unités prises en charge par l'implémentation.

## Exemples

### Formater des dates et nombres

Vous pouvez utiliser Intl pour formater des dates et nombres dans un format qui est conventionnel pour une langue et une région spécifiques :

```js
const compte = 26254.39;
const date = new Date("2012-05-24");

function afficher(langue) {
  console.log(
    `${new Intl.DateTimeFormat(langue).format(date)} ${new Intl.NumberFormat(
      langue,
    ).format(compte)}`,
  );
}

afficher("en-US"); // 5/24/2012 26,254.39

afficher("de-DE"); // 24.5.2012 26.254,39
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Keyboard.getLayoutMap()")}}
- La propriété {{DOMxRef("navigator.language")}}
- La propriété {{DOMxRef("navigator.languages")}}
- [L'API d'internationalisation ECMAScript <sup>(angl.)</sup>](https://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html) par Norbert Lindenberg (2012)
