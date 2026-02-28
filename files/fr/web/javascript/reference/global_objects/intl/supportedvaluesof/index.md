---
title: "Intl : méthode statique supportedValuesOf()"
short-title: supportedValuesOf()
slug: Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La méthode statique **`supportedValuesOf()`** des instances de {{JSxRef("Intl")}} retourne un tableau contenant les valeurs de calendrier, de collation, de monnaie, de systèmes de numérotation ou d'unités prises en charge par l'implémentation.

Les doublons sont omis et le tableau est trié par ordre lexicographique croissant (ou plus précisément, en utilisant {{JSxRef("Array/sort", "Array.prototype.sort()")}} avec une fonction de comparaison `undefined`).

La méthode peut être utilisée pour tester si des valeurs sont prises en charge dans une implémentation donnée et télécharger une prothèse d'émulation uniquement si nécessaire.
Elle peut aussi servir à construire des interfaces permettant à l'utilisateur·ice de sélectionner ses valeurs localisées préférées, par exemple lorsque l'interface est créée depuis WebGL ou côté serveur.

Cette méthode n'est pas sensible à la locale&nbsp;: il est possible que certains identifiants ne soient pris en charge ou préférés que dans certaines locales. Si vous souhaitez déterminer les valeurs préférées pour une locale spécifique, utilisez l'objet {{JSxRef("Intl.Locale")}}, comme {{JSxRef("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.supportedValuesOf()", "taller")}}

```js interactive-example
console.log(Intl.supportedValuesOf("calendar"));
console.log(Intl.supportedValuesOf("collation"));
console.log(Intl.supportedValuesOf("currency"));
console.log(Intl.supportedValuesOf("numberingSystem"));
console.log(Intl.supportedValuesOf("timeZone"));
console.log(Intl.supportedValuesOf("unit"));
// Résultat attendu : Array ['key'] (pour chaque clé)

try {
  Intl.supportedValuesOf("uneCléInvalide");
} catch (err) {
  console.log(err.toString());
  // Résultat attendu : RangeError: clé invalide : "uneCl\xE9Invalide"
}
```

## Syntaxe

```js-nolint
Intl.supportedValuesOf(key)
```

### Paramètres

- `key`
  - : Une chaîne de caractères qui indique la catégorie de valeurs à retourner. Il s'agit de&nbsp;:
    - `"calendar"`&nbsp;: voir [les types de calendriers pris en charge](#types_de_calendriers_pris_en_charge)
    - `"collation"`&nbsp;: voir [les types de collation pris en charge](#types_de_collation_pris_en_charge)
    - `"currency"`&nbsp;: voir [les identifiants de monnaies pris en charge](#identifiants_de_monnaies_pris_en_charge)
    - `"numberingSystem"`&nbsp;: voir [les types de systèmes de numérotation pris en charge](#types_de_systèmes_de_numérotation_pris_en_charge)
    - `"timeZone"`&nbsp;: voir [les identifiants de fuseaux horaires pris en charge](#identifiants_de_fuseaux_horaires_pris_en_charge)
    - `"unit"`&nbsp;: voir [les identifiants d'unités pris en charge](#identifiants_dunités_pris_en_charge)

### Valeur de retour

Un tableau trié, contenant des chaînes de caractères uniques indiquant les valeurs prises en charge par l'implémentation pour la clé demandée.

#### Types de calendriers pris en charge

Voici toutes les valeurs couramment prises en charge par les navigateurs pour la clé `calendar`. Ces valeurs peuvent être utilisées pour l'option `calendar` ou la [clé d'extension Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales) `ca` lors de la création d'objets comme {{JSxRef("Intl.DateTimeFormat")}}, ainsi que pour la création d'objets de date {{JSxRef("Temporal")}}. Cette liste est explicitement approuvée par la spécification ECMA-402, donc toutes les implémentations devraient être cohérentes.

| Value              | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buddhist`         | Calendrier bouddhiste thaïlandais, proleptique. Les numéros de mois, les codes de mois et les jours sont identiques à ceux du calendrier ISO 8601, mais l'année d'époque est différente. Il y a une ère.                                                                                                                                                                                                     |
| `chinese`          | Calendrier chinois traditionnel, proleptique. Calendrier luni-solaire utilisé en Chine basé sur les données publiées par l'Observatoire de la Montagne Pourpre entre 1900 et 2100 (qui est conforme à GB/T 33661-2017 entre 1912 et 2100), avec un retour à une approximation définie par l'implémentation en dehors de cette plage. L'année arithmétique est identique à `gregory`, et il n'y a pas d'ères. |
| `coptic`           | Calendrier copte, proleptique. Algorithme solaire similaire à `ethioaa` et `ethiopic`, avec une ère et une année d'époque différente.                                                                                                                                                                                                                                                                        |
| `dangi`            | Calendrier coréen traditionnel, proleptique. Calendrier luni-solaire utilisant les mois publiés par le Korea Astronomy and Space Science Institute (KASI) entre 1900 et 2050, avec un retour à une approximation définie par l'implémentation en dehors de cette plage. L'année arithmétique est identique à `gregory`, et il n'y a pas d'ères.                                                              |
| `ethioaa`          | Calendrier éthiopien, Amete Alem, proleptique. Algorithme solaire similaire à `coptic` et `ethiopic`, avec une ère et une année d'époque différente.                                                                                                                                                                                                                                                         |
| `ethiopic`         | Calendrier éthiopien, Amete Mihret, proleptique. Algorithme solaire similaire à `coptic` et `ethioaa`, avec deux ères et une année d'époque différente.                                                                                                                                                                                                                                                      |
| `gregory`          | Calendrier grégorien, proleptique. Calendrier solaire presque identique au calendrier ISO 8601, sauf qu'il ne définit pas la numérotation des semaines et qu'il contient deux ères, une avant l'année d'époque.                                                                                                                                                                                              |
| `hebrew`           | Calendrier hébraïque, proleptique. Calendrier civil avec Tishrei comme premier mois de l'année. Calendrier luni-solaire avec un mois intercalaire inséré après le mois 5. Il y a une ère.                                                                                                                                                                                                                    |
| `indian`           | Calendrier national indien (ou Śaka), proleptique. Calendrier solaire avec une ère.                                                                                                                                                                                                                                                                                                                          |
| `islamic-civil`    | Calendrier hégirien, proleptique, tabulaire/basé sur des règles avec la règle des années bissextiles II (années bissextiles 2,5,7,10,13,16,18,21,24,26,29 dans le cycle de 30 ans (numérotation à partir de 1)) et époque civile (vendredi 16 juillet 622 julien / 0622-07-19 ISO)                                                                                                                           |
| `islamic-tbla`     | Calendrier hégirien, proleptique, tabulaire/basé sur des règles avec la règle des années bissextiles II (années bissextiles 2,5,7,10,13,16,18,21,24,26,29 dans le cycle de 30 ans (numérotation à partir de 1)) et époque astronomique (jeudi 15 juillet 622 julien / 0622-07-18 ISO)                                                                                                                        |
| `islamic-umalqura` | Calendrier hégirien, proleptique, Umm al-Qura. Calendrier lunaire utilisant les mois calculés par KACST du début de 1300 AH (1882-11-12 ISO) à la fin de 1600 AH (2174-11-25 ISO), avec un retour à `islamic-civil` en dehors de cette plage.                                                                                                                                                                |
| `iso8601`          | Calendrier ISO (variante du calendrier grégorien avec des règles de semaine et des paramètres de formatage rendus indépendants de la région)                                                                                                                                                                                                                                                                 |
| `japanese`         | Calendrier impérial japonais (ce calendrier ajoute une ère pour chaque nouvel empereur, donc l'année et l'ère de sortie pour une date future peuvent ne pas correspondre à l'année et à l'ère d'entrée lorsque votre code s'exécute sur une future version du moteur. **Remarque&nbsp;:** Voir les remarques sous ce tableau concernant les dates antérieures au 23/10/1868 ISO.)                            |
| `persian`          | Calendrier persan (ou hégirien solaire), proleptique. Il y a une ère.                                                                                                                                                                                                                                                                                                                                        |
| `roc`              | Calendrier de la République de Chine (ou Minguo), proleptique. Les numéros de mois, les codes de mois et les jours sont identiques à ceux du calendrier ISO 8601, mais l'année d'époque est différente. Il y a deux ères, une avant l'année d'époque et une après.                                                                                                                                           |

En octobre 2025, dans le calendrier `japanese`, les dates antérieures au 23/10/1868 ISO (date de début de l'année 1 Meiji) ne fonctionnent pas comme prévu dans les navigateurs pour deux raisons. Premièrement, [CLDR avait la mauvaise date de début pour l'ère Meiji <sup>(angl.)</sup>](https://unicode-org.atlassian.net/browse/CLDR-11375), ce qui fait que les implémentations de calendrier étendent l'ère Meiji plus loin dans le passé qu'elle ne l'était réellement. Deuxièmement, la future [proposition Intl era and monthCode <sup>(angl.)</sup>](https://tc39.es/proposal-intl-era-monthcode/) précise que les dates antérieures au 01/01/1873 ISO doivent utiliser les ères grégoriennes, mais les navigateurs ont traditionnellement utilisé des approximations des ères japonaises antérieures. Le calendrier `japanese` a été adopté le 1er janvier, 6 Meiji / 1873-01-01 ISO, donc ces problèmes n'affectent que les dates proleptiques.

Les types ci-dessous sont spécifiés dans CLDR mais n'ont pas d'implémentations distinctes des calendriers ci-dessus dans les navigateurs.

| Value                            | Description                                    | Notes                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ethiopic-amete-alem`            | Calendrier éthiopien, Amete Alem, proleptique. | Ceci est un alias de `ethioaa` et n'est donc pas retourné par `supportedValuesOf()`. Utilisez `ethioaa` à la place.                                                                                                                                                                                                                                                                                           |
| `islamic`                        | Calendrier hégirien, algorithme non défini.    | En avril 2025, il s'agit d'une simulation astronomique dont les paramètres ne sont pas documentés et qui n'est pas connue pour correspondre à une variante définie du calendrier hégirien en dehors des contextes logiciels. Il est défini pour être canoniquement converti vers un autre calendrier, généralement l'un de `islamic-umalqura`, `islamic-tbla` ou `islamic-civil`, et génère un avertissement. |
| `islamicc` {{Deprecated_Inline}} | Calendrier arabe civil (algorithmique).        | Ceci est un alias de `islamic-civil` et n'est donc pas retourné par `supportedValuesOf()`. Utilisez `islamic-civil` à la place.                                                                                                                                                                                                                                                                               |

Les documents {{JSxRef("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}} et {{JSxRef("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}} fournissent plus d'informations sur les différents calendriers.

Références&nbsp;:

- [Clés de type de calendrier CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/bcp47/calendar.xml)
- [UTS 35, Dates <sup>(angl.)</sup>](https://unicode.org/reports/tr35/tr35-dates.html)
- [Types de calendrier islamique <sup>(angl.)</sup>](https://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types) (proposition CLDR)

#### Types de collation pris en charge

Voici toutes les valeurs couramment prises en charge par les navigateurs pour la clé `collation`. Ces valeurs peuvent être utilisées pour l'option `collation` ou la [clé d'extension Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales) `co` lors de la création d'objets comme {{JSxRef("Intl.Collator")}}.

| Value      | Description                                                                                                                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compat`   | Une version précédente de l'ordre, pour la compatibilité (pour l'arabe)                                                                                                                                                                 |
| `dict`     | Ordre de type dictionnaire (comme en cingalais). Reconnu aussi comme `dictionary`.                                                                                                                                                      |
| `emoji`    | Ordre recommandé pour les caractères emoji                                                                                                                                                                                              |
| `eor`      | Règles d'ordre européennes                                                                                                                                                                                                              |
| `phonebk`  | Ordre de type annuaire téléphonique (comme en allemand). Reconnu aussi comme `phonebook`.                                                                                                                                               |
| `phonetic` | Ordre phonétique (tri basé sur la prononciation&nbsp;; pour le lingala)                                                                                                                                                                 |
| `pinyin`   | Ordre pinyin pour le latin et pour les caractères CJC (utilisé en chinois)                                                                                                                                                              |
| `searchjl` | Type de collation spécial pour la recherche de consonnes initiales coréennes. **Attention&nbsp;:** Cette collation n'est pas destinée au tri, même si vous ne pouvez l'utiliser qu'avec {{JSxRef("Intl.Collator")}} de `usage: "sort"`. |
| `stroke`   | Ordre pinyin pour le latin, ordre des traits pour les caractères CJC (utilisé en chinois)                                                                                                                                               |
| `trad`     | Ordre de style traditionnel (comme en espagnol). Reconnu aussi comme `traditional`.                                                                                                                                                     |
| `unihan`   | Ordre pinyin pour le latin, ordre radical-trait Unihan pour les caractères CJC (utilisé en chinois)                                                                                                                                     |
| `zhuyin`   | Ordre pinyin pour le latin, ordre zhuyin pour le bopomofo et les caractères CJC (utilisé en chinois)                                                                                                                                    |

Les types ci-dessous sont définis dans les données CLDR, mais sont obsolètes, déconseillés à l'usage explicite et/ou peuvent ne pas être indiqués comme pris en charge par les navigateurs pour diverses raisons. Évitez de les utiliser&nbsp;:

| Value                            | Description                                                                                                                     | Notes                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `big5han` {{Deprecated_Inline}}  | Ordre pinyin pour le latin, ordre big5 charset pour les caractères CJC (utilisé en chinois)                                     | Obsolète.                                                                                                                                                                                                                                                                                                                                                           |
| `direct` {{Deprecated_Inline}}   | Ordre binaire des points de code (utilisé en hindi)                                                                             | Obsolète.                                                                                                                                                                                                                                                                                                                                                           |
| `ducet`                          | Ordre par défaut de la table des éléments de collation Unicode                                                                  | Le type de collation `ducet` n'est pas disponible sur le Web.                                                                                                                                                                                                                                                                                                       |
| `gb2312` {{Deprecated_Inline}}   | Ordre pinyin pour le latin, ordre gb2312han charset pour les caractères CJC (pour le chinois). Reconnu aussi comme `gb2312han`. | Obsolète.                                                                                                                                                                                                                                                                                                                                                           |
| `reformed` {{Deprecated_Inline}} | Ordre réformé (comme en suédois)                                                                                                | Obsolète. Il s'agit de l'ancien nom de l'ordre par défaut pour le suédois [dont le nommage de collation différait des autres langues <sup>(angl.)</sup>](https://unicode-org.atlassian.net/browse/CLDR-15603). Puisque c'était la valeur par défaut, demandez `sv` au lieu de demander `sv-u-co-reformed`.                                                          |
| `search`                         | Type de collation spécial pour la recherche de chaînes de caractères                                                            | Ne pas utiliser comme type de collation, car dans {{JSxRef("Intl.Collator")}}, cette collation est activée via l'option `usage: "search"`. Il n'existe actuellement aucune API pour la recherche de sous-chaînes, donc cela ne sert actuellement qu'à filtrer une liste de chaînes en essayant une correspondance exacte de la clé avec chaque élément de la liste. |
| `standard`                       | Ordre par défaut pour chaque langue, sauf le chinois (et, auparavant, le suédois)                                               | Ne pas utiliser explicitement. En général, il est inutile de spécifier cela explicitement et le spécifier pour le suédois est problématique en raison de la signification différente pour le suédois dans le passé.                                                                                                                                                 |

Références&nbsp;:

- [Clés de type de collation CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/bcp47/collation.xml)
- [UTS 35, Collation <sup>(angl.)</sup>](https://unicode.org/reports/tr35/tr35-collation.html)

#### Identifiants de monnaies pris en charge

Les identifiants de monnaie sont des codes de trois lettres majuscules définis dans la norme ISO 4217. Ces valeurs peuvent être utilisées pour l'option `currency` lors de la création d'objets comme {{JSxRef("Intl.NumberFormat")}}, ainsi que pour {{JSxRef("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}. Il existe plus de 300 identifiants couramment utilisés, ils ne sont donc pas listés ici. Pour une liste exhaustive des identifiants possibles, consultez [l'article Wikipédia](https://fr.wikipedia.org/wiki/ISO_4217#Liste_triée_par_nom_d%E2%80%99unité_monétaire).

Références&nbsp;:

- [Clés de type de monnaie CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/bcp47/currency.xml)
- [Codes de monnaie ISO 4217 <sup>(angl.)</sup>](https://www.iso.org/iso-4217-currency-codes.html)
- [UTS 35, Monnaies <sup>(angl.)</sup>](https://unicode.org/reports/tr35/tr35-numbers.html#Currencies)

#### Types de systèmes de numérotation pris en charge

Voici toutes les valeurs couramment prises en charge par les navigateurs pour la clé `numberingSystem`. Ces valeurs peuvent être utilisées pour l'option `numberingSystem` ou la [clé d'extension Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales) `nu` lors de la création d'objets comme {{JSxRef("Intl.NumberFormat")}}. Pour les lignes avec «&nbsp;chiffres&nbsp;», l'exécution traduit les chiffres un par un sans action supplémentaire. Les autres, marquées «&nbsp;algorithmique&nbsp;», nécessitent des algorithmes supplémentaires pour traduire les chiffres. Plus le point de code Unicode est élevé, plus le système de numérotation est récent et plus il est probable qu'il ne soit pas pris en charge par tous les navigateurs.

| Value      | Description                                                                                         | Digit characters                                                                                        |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `adlm`     | Chiffres adlam                                                                                      | `𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙` (U+1E950 à U+1E959)                                                                        |
| `ahom`     | Chiffres ahom                                                                                       | `𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹` (U+11730 à U+11739)                                                                        |
| `arab`     | Chiffres arabo-indiens                                                                              | `٠١٢٣٤٥٦٧٨٩` (U+0660 à U+0669)                                                                          |
| `arabext`  | Chiffres arabo-indiens étendus                                                                      | `۰۰۱۲۳۴۵۶۷۸۹` (U+06F0 à U+06F9)                                                                         |
| `armn`     | Numéraux arméniens majuscules                                                                       | algorithmique                                                                                           |
| `armnlow`  | Numéraux arméniens minuscules                                                                       | algorithmique                                                                                           |
| `bali`     | Chiffres balinais                                                                                   | `᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙` (U+1B50 à U+1B59)                                                                          |
| `beng`     | Chiffres bengalis                                                                                   | `০১২৩৪৫৬৭৮৯` (U+09E6 à U+09EF)                                                                          |
| `bhks`     | Chiffres bhaïksoukis                                                                                | `𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙` (U+11C50 à U+11C59)                                                                        |
| `brah`     | Chiffres brahmi                                                                                     | `𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯` (U+11066 à U+1106F)                                                                        |
| `cakm`     | Chiffres chakma                                                                                     | `𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿` (U+11136 à U+1113F)                                                                        |
| `cham`     | Chiffres cham                                                                                       | `꩐꩑꩒꩓꩔꩕꩖꩗꩘꩙` (U+AA50 à U+AA59)                                                                          |
| `cyrl`     | Numéraux cyrilliques                                                                                | algorithmique                                                                                           |
| `deva`     | Chiffres dévanâgarî                                                                                 | `०१२३४५६७८९` (U+0966 à U+096F)                                                                          |
| `diak`     | Chiffres dives akuru                                                                                | `𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙` (U+11950 à U+11959)                                                                        |
| `ethi`     | Numéraux éthiopiens                                                                                 | algorithmique                                                                                           |
| `fullwide` | Chiffres pleine largeur                                                                             | `０１２３４５６７８９` (U+FF10 à U+FF19)                                                                |
| `gara`     | Chiffres garay                                                                                      | `𐵀𐵁𐵂𐵃𐵄𐵅𐵆𐵇𐵈𐵉` (U+10D40 à U+10D49)                                                                        |
| `geor`     | Numéraux géorgiens                                                                                  | algorithmique                                                                                           |
| `gong`     | Chiffres gunjala gondi                                                                              | `𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩` (U+11DA0 à U+11DA9)                                                                        |
| `gonm`     | Chiffres masaram gondi                                                                              | `𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙` (U+11D50 à U+11D59)                                                                        |
| `grek`     | Numéraux grecs majuscules                                                                           | algorithmique                                                                                           |
| `greklow`  | Numéraux grecs minuscules                                                                           | algorithmique                                                                                           |
| `gujr`     | Chiffres gujarati                                                                                   | `૦૧૨૩૪૫૬૭૮૯` (U+0AE6 à U+0AEF)                                                                          |
| `gukh`     | Chiffres gurung khema                                                                               | `𖄰𖄱𖄲𖄳𖄴𖄵𖄶𖄷𖄸𖄹` (U+16130 à U+16139)                                                                        |
| `guru`     | Chiffres gourmoukhi                                                                                 | `੦੧੨੩੪੫੬੭੮੯` (U+0A66 à U+0A6F)                                                                          |
| `hanidays` | Numérotation des jours du mois en caractères han pour les calendriers lunaires/autres traditionnels |                                                                                                         |
| `hanidec`  | Système décimal positionnel utilisant des idéogrammes numériques chinois comme chiffres             | `〇一二三四五六七八九` (U+3007, U+4E00, U+4E8C, U+4E09, U+56DB, U+4E94, U+516D, U+4E03, U+516B, U+4E5D) |
| `hans`     | Numéraux chinois simplifiés                                                                         | algorithmique                                                                                           |
| `hansfin`  | Numéraux financiers chinois simplifiés                                                              | algorithmique                                                                                           |
| `hant`     | Numéraux chinois traditionnels                                                                      | algorithmique                                                                                           |
| `hantfin`  | Numéraux financiers chinois traditionnels                                                           | algorithmique                                                                                           |
| `hebr`     | Numéraux hébraïques                                                                                 | algorithmique                                                                                           |
| `hmng`     | Chiffres pahawh hmong                                                                               | `𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙` (U+16B50 à U+16B59)                                                                        |
| `hmnp`     | Chiffres nyiakeng puachue hmong                                                                     | `𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉` (U+1E140 à U+1E149)                                                                        |
| `java`     | Chiffres javanais                                                                                   | `꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙` (U+A9D0 à U+A9D9)                                                                          |
| `jpanfin`  | Numéraux financiers japonais                                                                        | algorithmique                                                                                           |
| `jpan`     | Numéraux japonais                                                                                   | algorithmique                                                                                           |
| `jpanyear` | Numérotation Gannen de la première année japonaise pour le calendrier japonais                      | algorithmique                                                                                           |
| `kali`     | Chiffres kayah li                                                                                   | `꤀꤁꤂꤃꤄꤅꤆꤇꤈꤉` (U+A900 à U+A909)                                                                          |
| `kawi`     | Chiffres kawi                                                                                       | `𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙` (U+11F50 à U+11F59)                                                                        |
| `khmr`     | Chiffres khmers                                                                                     | `០១២៣៤៥៦៧៨៩` (U+17E0 à U+17E9)                                                                          |
| `knda`     | Chiffres kannada                                                                                    | `೦೧೨೩೪೫೬೭೮೯` (U+0CE6 à U+0CEF)                                                                          |
| `krai`     | Chiffres kirat rai                                                                                  | `𖵰𖵱𖵲𖵳𖵴𖵵𖵶𖵷𖵸𖵹` (U+16D70 à U+16D79)                                                                        |
| `lana`     | Chiffres tai tham hora (séculiers)                                                                  | `᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉` (U+1A80 à U+1A89)                                                                          |
| `lanatham` | Chiffres tai tham (ecclésiastiques)                                                                 | `᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙` (U+1A90 à U+1A99)                                                                          |
| `laoo`     | Chiffres laos                                                                                       | `໐໑໒໓໔໕໖໗໘໙` (U+0ED0 à U+0ED9)                                                                          |
| `latn`     | Chiffres latins                                                                                     | `0123456789` (U+0030 à U+0039)                                                                          |
| `lepc`     | Chiffres lepcha                                                                                     | `᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉` (U+1C40 à U+1C49)                                                                          |
| `limb`     | Chiffres limbu                                                                                      | `᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏` (U+1946 à U+194F)                                                                          |
| `mathbold` | Chiffres mathématiques gras                                                                         | `𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗` (U+1D7CE à U+1D7D7)                                                                        |
| `mathdbl`  | Chiffres mathématiques double barré                                                                 | `𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡` (U+1D7D8 à U+1D7E1)                                                                        |
| `mathmono` | Chiffres mathématiques monospace                                                                    | `𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿` (U+1D7F6 à U+1D7FF)                                                                        |
| `mathsanb` | Chiffres mathématiques sans-serif gras                                                              | `𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵` (U+1D7EC à U+1D7F5)                                                                        |
| `mathsans` | Chiffres mathématiques sans-serif                                                                   | `𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫` (U+1D7E2 à U+1D7EB)                                                                        |
| `mlym`     | Chiffres malayalam                                                                                  | `൦൧൨൩൪൫൬൭൮൯` (U+0D66 à U+0D6F)                                                                          |
| `modi`     | Chiffres modi                                                                                       | `𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙` (U+11650 à U+11659)                                                                        |
| `mong`     | Chiffres mongols                                                                                    | `᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙` (U+1810 à U+1819)                                                                          |
| `mroo`     | Chiffres mro                                                                                        | `𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩` (U+16A60 à U+16A69)                                                                        |
| `mtei`     | Chiffres meetei mayek                                                                               | `꯰꯱꯲꯳꯴꯵꯶꯷꯸꯹` (U+ABF0 à U+ABF9)                                                                          |
| `mymr`     | Chiffres birmans                                                                                    | `၀၁၂၃၄၅၆၇၈၉` (U+1040 à U+1049)                                                                          |
| `mymrepka` | Chiffres pwo karen orientaux du Myanmar                                                             | `𑛚𑛛𑛜𑛝𑛞𑛟𑛠𑛡𑛢𑛣` (U+116DA à U+116E3)                                                                        |
| `mymrpao`  | Chiffres pao du Myanmar                                                                             | `𑛐𑛑𑛒𑛓𑛔𑛕𑛖𑛗𑛘𑛙` (U+116D0 à U+116D9)                                                                        |
| `mymrshan` | Chiffres shan du Myanmar                                                                            | `႐႑႒႓႔႕႖႗႘႙` (U+1090 à U+1099)                                                                          |
| `mymrtlng` | Chiffres tai laing du Myanmar                                                                       | `꧰꧱꧲꧳꧴꧵꧶꧷꧸꧹` (U+A9F0 à U+A9F9)                                                                          |
| `nagm`     | Chiffres nag mundari                                                                                | `𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹` (U+1E4F0 à U+1E4F9)                                                                        |
| `newa`     | Chiffres newa                                                                                       | `𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙` (U+11450 à U+11459)                                                                        |
| `nkoo`     | Chiffres n'ko                                                                                       | `߀߁߂߃߄߅߆߇߈߉` (U+07C0 à U+07C9)                                                                          |
| `olck`     | Chiffres ol chiki                                                                                   | `᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙` (U+1C50 à U+1C59)                                                                          |
| `onao`     | Chiffres ol onal                                                                                    | `𞗱𞗲𞗳𞗴𞗵𞗶𞗷𞗸𞗹𞗺` (U+1E5F1 à U+1E5FA)                                                                        |
| `orya`     | Chiffres oriya                                                                                      | `୦୧୨୩୪୫୬୭୮୯` (U+0B66 à U+0B6F)                                                                          |
| `osma`     | Chiffres osmanya                                                                                    | `𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩` (U+104A0 à U+104A9)                                                                        |
| `outlined` | Chiffres informatiques contours hérités                                                             | `𜳰𜳱𜳲𜳳𜳴𜳵𜳶𜳷𜳸𜳹` (U+1CCF0 à U+1CCF9)                                                                        |
| `rohg`     | Chiffres hanifi rohingya                                                                            | `𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹` (U+10D30 à U+10D39)                                                                        |
| `roman`    | Numéraux romains majuscules                                                                         | algorithmique                                                                                           |
| `romanlow` | Numéraux romains minuscules                                                                         | algorithmique                                                                                           |
| `saur`     | Chiffres saurashtra                                                                                 | `꣐꣑꣒꣓꣔꣕꣖꣗꣘꣙` (U+A8D0 à U+A8D9)                                                                          |
| `segment`  | Chiffres informatiques segmentés hérités                                                            | `🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹` (U+1FBF0 à U+1FBF9)                                                                        |
| `shrd`     | Chiffres sharada                                                                                    | `𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙` (U+111D0 à U+111D9)                                                                        |
| `sind`     | Chiffres khudawadi                                                                                  | `𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹` (U+112F0 à U+112F9)                                                                        |
| `sinh`     | Chiffres lith singhalais                                                                            | `෦෧෨෩෪෫෬෭෮෯` (U+0DE6 à U+0DEF)                                                                          |
| `sora`     | Chiffres sora sompeng                                                                               | `𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹` (U+110F0 à U+110F9)                                                                        |
| `sund`     | Chiffres soundanais                                                                                 | `᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹` (U+1BB0 à U+1BB9)                                                                          |
| `sunu`     | Chiffres sunuwar                                                                                    | `𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹` (U+11BF0 à U+11BF9)                                                                        |
| `takr`     | Chiffres takri                                                                                      | `𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉` (U+116C0 à U+116C9)                                                                        |
| `talu`     | Chiffres new tai lue                                                                                | `᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙` (U+19D0 à U+19D9)                                                                          |
| `taml`     | Numéraux tamouls                                                                                    | algorithmique                                                                                           |
| `tamldec`  | Chiffres décimaux tamouls modernes                                                                  | `௦௧௨௩௪௫௬௭௮௯` (U+0BE6 à U+0BEF)                                                                          |
| `telu`     | Chiffres télougou                                                                                   | `౦౧౨౩౪౫౬౭౮౯` (U+0C66 à U+0C6F)                                                                          |
| `thai`     | Chiffres thaïlandais                                                                                | `๐๑๒๓๔๕๖๗๘๙` (U+0E50 à U+0E59)                                                                          |
| `tibt`     | Chiffres tibétains                                                                                  | `༠༡༢༣༤༥༦༧༨༩` (U+0F20 à U+0F29)                                                                          |
| `tirh`     | Chiffres tirhuta                                                                                    | `𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙` (U+114D0 à U+114D9)                                                                        |
| `tnsa`     | Chiffres tangsa                                                                                     | `𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉` (U+16AC0 à U+16AC9)                                                                        |
| `vaii`     | Chiffres vaï                                                                                        | `꘠꘡꘢꘣꘤꘥꘦꘧꘨꘩` (U+A620 à U+A629)                                                                          |
| `wara`     | Chiffres warang citi                                                                                | `𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩` (U+118E0 à U+118E9)                                                                        |
| `wcho`     | Chiffres wancho                                                                                     | `𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹` (U+1E2F0 à U+1E2F9)                                                                        |

Il existe trois valeurs spéciales&nbsp;: `native`, `traditio` et `finance`, dont la signification dépend de la locale, et qui seront résolues vers le bon système selon la locale. Par conséquent, les méthodes `resolvedOptions()` ne retourneront jamais ces valeurs, mais `Intl.Locale.prototype.numberingSystem` le fera (si elles sont fournies en entrée).

Références&nbsp;:

- [Clés de type de système de numérotation CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/bcp47/number.xml)
- [Définitions des systèmes de numérotation CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
- [UTS 35, Systèmes de numérotation <sup>(angl.)</sup>](https://unicode.org/reports/tr35/tr35-numbers.html#Numbering_Systems)

#### Identifiants de fuseaux horaires pris en charge

Les identifiants de fuseaux horaires pris en charge peuvent être utilisés pour l'option `timeZone` lors de la création d'objets comme {{JSxRef("Intl.DateTimeFormat")}}, ainsi que pour la création d'objets de date {{JSxRef("Temporal")}}. Il existe plus de 400 identifiants couramment utilisés, ils ne sont donc pas listés ici. Pour une liste exhaustive des identifiants possibles, consultez [l'article Wikipédia <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) ou la [base de données IANA des fuseaux horaires <sup>(angl.)</sup>](https://www.iana.org/time-zones).

Lorsque vous parcourez la liste, notez que la standardisation de `Temporal` exige que les navigateurs retournent toujours l'identifiant principal dans la base de données IANA, qui peut évoluer au fil du temps. Voir [fuseaux horaires et décalages](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) pour plus d'informations. Par exemple, le tableau retourné doit contenir `"Asia/Kolkata"` au lieu de `"Asia/Calcutta"` car ce dernier est un alias du premier et ils correspondent tous deux à l'Inde&nbsp;; cependant, il doit contenir à la fois `"Africa/Abidjan"` et `"Atlantic/Reykjavik"` car ils sont dans des pays différents, bien que le second soit aussi un alias du premier.

Références&nbsp;:

- [Base de données IANA des fuseaux horaires <sup>(angl.)</sup>](https://www.iana.org/time-zones)
- [UTS 35, Identifiants de fuseaux horaires <sup>(angl.)</sup>](https://unicode.org/reports/tr35/tr35-dates.html#Time_Zone_Identifiers)

#### Identifiants d'unités pris en charge

Voici toutes les valeurs couramment prises en charge par les navigateurs pour la clé `unit`. Ces valeurs peuvent être utilisées pour l'option `unit` lors de la création d'objets comme {{JSxRef("Intl.NumberFormat")}}. Cette liste est un sous-ensemble du CLDR explicitement validé par la spécification ECMA-402, donc toutes les implémentations doivent être cohérentes.

- `acre`
- `bit`
- `byte`
- `celsius`
- `centimeter`
- `day`
- `degree`
- `fahrenheit`
- `fluid-ounce`
- `foot`
- `gallon`
- `gigabit`
- `gigabyte`
- `gram`
- `hectare`
- `hour`
- `inch`
- `kilobit`
- `kilobyte`
- `kilogram`
- `kilometer`
- `liter`
- `megabit`
- `megabyte`
- `meter`
- `microsecond`
- `mile`
- `mile-scandinavian`
- `milliliter`
- `millimeter`
- `millisecond`
- `minute`
- `month`
- `nanosecond`
- `ounce`
- `percent`
- `petabyte`
- `pound`
- `second`
- `stone`
- `terabit`
- `terabyte`
- `week`
- `yard`
- `year`

Lors de la spécification des unités, vous pouvez également combiner deux unités avec le séparateur «&nbsp;-per-&nbsp;» (qui signifie «&nbsp;par). Par exemple&nbsp;: `meter-per-second` ou `liter-per-megabyte`.
Lors de la spécification des unités, vous pouvez également combiner deux unités avec le séparateur «&nbsp;-per-&nbsp;» (qui signifie «&nbsp;par&nbsp;»). Par exemple&nbsp;: `meter-per-second` ou `liter-per-megabyte`.

Références&nbsp;:

- [Unités validées ECMA-402 <sup>(angl.)</sup>](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
- [Données de validité des unités CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/validity/unit.xml)
- [UTS 35, Identifiants d'unités <sup>(angl.)</sup>](https://unicode.org/reports/tr35/tr35-general.html#Unit_Identifiers)

### Exceptions

- {{JSxRef("RangeError")}}
  - : Une clé non prise en charge a été passée en paramètre.

## Exemples

### Test de fonctionnalité

On peut vérifier que la méthode est prise en charge en la comparant à `undefined`&nbsp;:

```js
if (typeof Intl.supportedValuesOf !== "undefined") {
  // la méthode est prise en charge
}
```

### Obtenir toutes les valeurs d'une clé donnée

Pour obtenir les valeurs prises en charge pour les représentations calendaires, on pourra appeler la méthode avec la clé `"calendar"` et parcourir le tableau obtenu&nbsp;:

```js
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

Les autres valeurs peuvent être obtenues de la même façon&nbsp;:

```js
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### Exception à l'utilisation d'une clé invalide

```js
try {
  Intl.supportedValuesOf("uneCleInvalide");
} catch (err) {
  // Error: RangeError: invalid key: "uneCleInvalide"
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `Intl.supportedValuesOf` dans FormatJS <sup>(angl.)</sup>](https://formatjs.github.io/docs/polyfills/intl-supportedvaluesof/)
- L'objet {{JSxRef("Intl")}}
