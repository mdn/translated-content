---
title: Intl.Locale.prototype.numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/numberingSystem
---
{{JSRef}}

La propriété **`Intl.Locale.prototype.numberingSystem`** est une propriété fournie par un accesseur qui renvoie le [système de numération](https://en.wikipedia.org/wiki/Numeral_system) utilisée par la locale.

## Description

Un système de numération est un système qui permet d'exprimer les nombres. La propriété `numberingSystem` permet de connaître le système de numérati Unicode. A table of the standard Unicode numeral systems can be seen belowon de la locale. Les valeurs qui peuvent être fournies par cette propriété sont standardisées par Unicode.

| Valeur     | Description                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Chiffres adlams                                                                                         |
| `ahom`     | Chiffres ahoms                                                                                          |
| `arab`     | Chiffres arabes                                                                                         |
| `arabext`  | Chiffres arabes étendus                                                                                 |
| `armn`     | Numération arménienne majuscule (algorithmique)                                                         |
| `armnlow`  | Numération arménienne minuscule (algorithmique)                                                         |
| `bali`     | Chiffres balinais                                                                                       |
| `beng`     | Chiffres bengalis                                                                                       |
| `bhks`     | Chiffres bhaiksuki                                                                                      |
| `brah`     | Chiffres brahmis                                                                                        |
| `cakm`     | Chiffres chakmas                                                                                        |
| `cham`     | Chiffres chams                                                                                          |
| `cyrl`     | Numération cyrillique (algorithmique)                                                                   |
| `deva`     | Chiffres devanagaris                                                                                    |
| `ethi`     | Numération éthiopienne (algorithmique)                                                                  |
| `finance`  | Numération financière (peut être algorithmique)                                                         |
| `fullwide` | Chiffres à pleine chasse                                                                                |
| `geor`     | Numération géorgienne (algorithmique)                                                                   |
| `gong`     | Chiffres Gunjala Gondis                                                                                 |
| `gonm`     | Chiffres Masaram Gondis                                                                                 |
| `grek`     | Numération greque majuscule (algorithmique)                                                             |
| `greklow`  | Numération greque minuscule (algorithmique)                                                             |
| `gujr`     | Chiffres Gujaratis                                                                                      |
| `guru`     | Chiffres Gurmukhis                                                                                      |
| `hanidays` | Numération du jour du mois avec caractère Han (utilisée avec les calendriers lunaires ou traditionnels) |
| `hanidec`  | Système décimal positionnel utilisant les idéographes des nombres chinois comme chiffres                |
| `hans`     | Numération chinoise simplifiée (algorithmique)                                                          |
| `hansfin`  | Numération chinoise simplifiée financière (algorithmique)                                               |
| `hant`     | Numération chinoise traditionnelle (algorithmique)                                                      |
| `hantfin`  | Numération chinoise traditionnelle financière (algorithmique)                                           |
| `hebr`     | Numération hébraïque (algorithmique)                                                                    |
| `hmng`     | Chiffres Pahawh Hmongs                                                                                  |
| `hmnp`     | Chiffres Nyiakeng Puachue Hmongs                                                                        |
| `java`     | Chiffres javanais                                                                                       |
| `jpan`     | Numération japonaise (algorithmique)                                                                    |
| `jpanfin`  | Numération japonaise financière (algorithmique)                                                         |
| `jpanyear` | Numération basée sur la première année Gannen du calendrier japonais                                    |
| `kali`     | Chiffres Kayah Lis                                                                                      |
| `khmr`     | Chiffres Khmers                                                                                         |
| `knda`     | Chiffres Kannadas                                                                                       |
| `lana`     | Chiffres Tai Tham Hora séculiers                                                                        |
| `lanatham` | Chiffres Tai Tham Tham ecclésiastiques                                                                  |
| `laoo`     | Chiffres laotien                                                                                        |
| `latn`     | Chiffres latins                                                                                         |
| `lepc`     | Chiffres Lepchas                                                                                        |
| `limb`     | Chiffres Limbus                                                                                         |
| `mathbold` | Chiffres mathématiques en gras                                                                          |
| `mathdbl`  | Chiffres mathématiques barrés en double                                                                 |
| `mathmono` | Chiffres mathématiques à chasse fixe                                                                    |
| `mathsanb` | Chiffres mathématiques en gras sans empattements                                                        |
| `mathsans` | Chiffres mathématiques sans empattements                                                                |
| `mlym`     | Chiffres Malayalams                                                                                     |
| `modi`     | Chiffres Modis                                                                                          |
| `mong`     | Chiffres mongols                                                                                        |
| `mroo`     | Chiffres Mros                                                                                           |
| `mtei`     | Chiffres Meetei Mayeks                                                                                  |
| `mymr`     | Chiffres Myanmars                                                                                       |
| `mymrshan` | Chiffres Myanmar Shans                                                                                  |
| `mymrtlng` | Chiffres Myanmar Tai Laings                                                                             |
| `native`   | Chiffres natifs                                                                                         |
| `newa`     | Chiffres Newas                                                                                          |
| `nkoo`     | Chiffres N'Kos                                                                                          |
| `olck`     | Chiffres Ol Chikis                                                                                      |
| `orya`     | Chiffres Oriyas                                                                                         |
| `osma`     | Chiffres Osmanyas                                                                                       |
| `rohg`     | Chiffres Hanifi Rohingyas                                                                               |
| `roman`    | Numération romaine majuscule (algorithmique)                                                            |
| `romanlow` | Numération romaine minuscule (algorithmique)                                                            |
| `saur`     | Chiffres Saurashtras                                                                                    |
| `shrd`     | Chiffres Sharadas                                                                                       |
| `sind`     | Chiffres Khudawadis                                                                                     |
| `sinh`     | Chiffres Sinhala Liths                                                                                  |
| `sora`     | Chiffres Sora_Sompengs                                                                                  |
| `sund`     | Chiffres soudanais                                                                                      |
| `takr`     | Chiffres Takris                                                                                         |
| `talu`     | Chiffres New Tai Lues                                                                                   |
| `taml`     | Numération tamoule (algorithmique=                                                                      |
| `tamldec`  | Chiffres tamouls décimaux modernes                                                                      |
| `telu`     | Chiffres Telugus                                                                                        |
| `thai`     | Chiffres thaïs                                                                                          |
| `tirh`     | Chiffres Tirhutas                                                                                       |
| `tibt`     | Chiffres tibétains                                                                                      |
| `traditio` | Numération traditionnelle (peut être algorithmique)                                                     |
| `vaii`     | Chiffres Vais                                                                                           |
| `wara`     | Chiffres Warang Citis                                                                                   |
| `wcho`     | Chiffres Wanchos                                                                                        |

## Exemples

### Définir la valeur de `numberingSystem` grâce à la chaîne décrivant la locale

D'après [la spécification Unicode sur les chaînes décrivant les locales](https://www.unicode.org/reports/tr35/), l'extension décrivant le système de numération est indiquée par la clé `nu`.

Le constructeur [`Intl.locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale) prend comme premier argument une chaîne de caractères décrivant la locale. Aussi, on peut indiquer le système de numération après les composantes principales de la chaîne de caractères en lui ajoutant un `"-u"` (indiquant la présence d'une extension), suivi d'un `"-nu"` (indiquant que l'extension qui sera indiquée décrit le système de numération, suivi de la valeur voulue pour le système de numération.

```js
let numberingSystemViaStr = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(numberingSystemStr.numberingSystem);
// affichera "mong" dans la console
```

### Définir la valeur de `numberingSystem` grâce à un objet de configuration

Le constructeur [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale "The Intl.Locale constructor is a standard built-in property of the Intl object.") possède un deuxième argument, optionnel, qui est un objet permettant de configurer la locale. Les propriétés de cet objet sont utilisées comme extensions pour la locale ; les clés des propriétés sont les noms des extensions et leurs valeurs sont celles utilisées pour chaque extension. On peut donc utiliser la propriété `numberingSystem` sur cet objet afin de définir le système de numération à utiliser pour cette locale.

```js
let numberingSystemViaObj= new Intl.Locale("en-Latn-US", {numberingSystem: "latn"});
console.log(us12hour.numberingSystem);
// affichera "latn" dans la console
```

## Spécifications

| Spécification                                                                                                            | État                    | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------ |
| [Proposition pour `Intl.Locale`](https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.numberingSystem) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Locale.numberingSystem")}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- [Détails sur les systèmes de numération dans le standard Unicode](https://github.com/unicode-org/cldr/blob/master/common/supplemental/numberingSystems.xml)
