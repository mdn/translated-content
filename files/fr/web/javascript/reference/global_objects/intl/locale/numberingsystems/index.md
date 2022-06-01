---
title: Intl.Locale.prototype.numberingSystems
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystems
browser-compat: javascript.builtins.Intl.Locale.numberingSystems
---
{{JSRef}}

La propriété **`Intl.Locale.prototype.numberingSystems`** est un accesseur qui renvoie un ou plusieurs identifiants pour des systèmes de numération utilisés par la locale représentée par l'instance `Intl.Locale` courante.

## Description

Un système de numération est utilisé pour représenter les nombres. La propriété `numberingSystems` permet de connaître les différents systèmes de numération utilisés par les différents pays, les différentes régions et cultures autour du monde. Les systèmes de numération représentés par cette propriété sont standardisés avec Unicode. Un tableau des systèmes de numération Unicode suit.

> **Note :** La propriété `numberingSystem` (sans S) permet de connaître le système de numération principal utilisé par une locale. Celle-ci permet d'avoir la liste des différents systèmes de numération utilisés par une locale.

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

### Obtenir les systèmes de numération utilisés et pris en charge

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.numberingSystems); // affiche ["arab"]
```

```js
let ja = new Intl.Locale("ja");
console.log(ja.numberingSystems); // affiche ["latn"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
- [`Intl.Locale.numberingSystem`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
- [Détails du standard Unicode sur les systèmes de numération](https://github.com/unicode-org/cldr/blob/master/common/supplemental/numberingSystems.xml)
