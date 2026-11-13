---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Les objets JavaScript **`Date`** représentent un instant unique dans le temps dans un format indépendant de la plateforme. Les objets `Date` encapsulent un nombre entier qui représente le nombre de millisecondes écoulées depuis minuit au début du 1er janvier 1970, UTC (l'_epoch_).

> [!NOTE]
> Avec l'introduction de l'API {{JSxRef("Temporal")}}, l'objet `Date` est considéré comme une fonctionnalité héritée. Il est conseillé d'utiliser `Temporal` pour le nouveau code et de migrer le code existant si possible (voir la [compatibilité des navigateurs](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#compatibilité_des_navigateurs)).

## Description

### L'epoch, les timestamps et la date invalide

Une date JavaScript est fondamentalement définie comme le temps en millisecondes écoulé depuis [l'epoch <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range), qui correspond à minuit au début du 1er janvier 1970, UTC (équivalent à [l'epoch UNIX](/fr/docs/Glossary/Unix_time)). Ce timestamp est indépendant du fuseau horaire et définit de façon unique un instant dans l'histoire.

> [!NOTE]
> Bien que la valeur temporelle au cœur d'un objet Date soit en UTC, les méthodes de base pour obtenir la date, l'heure ou leurs composantes fonctionnent toutes dans le fuseau horaire local (c'est-à-dire celui du système hôte) et avec son décalage.

La valeur maximale du timestamp représentable par un objet `Date` est légèrement inférieure au plus grand entier sûr ({{JSxRef("Number.MAX_SAFE_INTEGER")}}, soit 9 007 199 254 740 991). Un objet `Date` peut représenter un maximum de ±8 640 000 000 000 000 millisecondes, soit ±100 000 000 (cent millions) de jours, par rapport à l'epoch. Cela correspond à la période du 20 avril 271821 avant notre ère au 13 septembre 275760 de notre ère. Toute tentative de représenter un instant en dehors de cette plage donne à l'objet `Date` une valeur de timestamp [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN), ce qui correspond à une «&nbsp;Date invalide&nbsp;».

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Temps universel coordonné)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

Il existe différentes méthodes permettant d'interagir avec le timestamp stocké dans la date&nbsp;:

- Vous pouvez interagir directement avec la valeur du timestamp en utilisant les méthodes {{JSxRef("Date/getTime", "getTime()")}} et {{JSxRef("Date/setTime", "setTime()")}}.
- Les méthodes {{JSxRef("Date/valueOf", "valueOf()")}} et [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (lorsqu'elles reçoivent `"number"`) — qui sont automatiquement appelées lors de la [contrainte de nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) — retournent le timestamp, ce qui fait que les objets `Date` se comportent comme leur timestamp lorsqu'ils sont utilisés dans des contextes numériques.
- Toutes les méthodes statiques ({{JSxRef("Date.now()")}}, {{JSxRef("Date.parse()")}}, et {{JSxRef("Date.UTC()")}}) retournent des timestamps au lieu d'objets `Date`.
- Le constructeur {{JSxRef("Date/Date", "Date()")}} peut être appelé avec un timestamp comme unique argument.

### Composants de date et fuseaux horaires

Une date est représentée en interne par un seul nombre, le _timestamp_. Lorsqu'on interagit avec elle, ce timestamp doit être interprété comme une représentation structurée de la date et de l'heure. Il existe toujours deux façons d'interpréter un timestamp&nbsp;: comme une heure locale ou comme une heure universelle coordonnée (UTC), la norme mondiale définie par le World Time Standard. Le fuseau horaire local n'est pas stocké dans l'objet date, mais est déterminé par l'environnement hôte (l'appareil de l'utilisateur·ice).

> [!NOTE]
> Il ne faut pas confondre l'UTC avec le [temps moyen de Greenwich](https://fr.wikipedia.org/wiki/Temps_moyen_de_Greenwich) (GMT), car ils ne sont pas toujours identiques — cela est expliqué plus en détail dans la page Wikipédia liée.

Par exemple, le timestamp 0 représente un instant unique dans l'histoire, mais il peut être interprété de deux façons&nbsp;:

- En heure UTC, il s'agit de minuit au début du 1er janvier 1970, UTC,
- En heure locale à New York (UTC-5), il s'agit de 19:00:00 le 31 décembre 1969.

La méthode {{JSxRef("Date/getTimezoneOffset", "getTimezoneOffset()")}} retourne la différence entre l'UTC et l'heure locale en minutes. Notez que le décalage horaire ne dépend pas uniquement du fuseau horaire courant, mais aussi de l'heure représentée par l'objet `Date`, à cause de l'heure d'été et des changements historiques. En essence, le décalage horaire est la différence par rapport à l'heure UTC, à l'instant représenté par l'objet `Date` et à l'emplacement de l'environnement hôte.

Il existe deux groupes de méthodes de `Date`&nbsp;: un groupe obtient et définit les différents composants de date en interprétant le timestamp comme une heure locale, tandis que l'autre utilise l'UTC.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">Composant</th>
      <th colspan="2">Local</th>
      <th colspan="2">UTC</th>
    </tr>
    <tr>
      <th>Obtenir</th>
      <th>Définir</th>
      <th>Obtenir</th>
      <th>Définir</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Année</td>
      <td>{{JSxRef("Date/getFullYear", "getFullYear()")}}</td>
      <td>{{JSxRef("Date/setFullYear", "setFullYear()")}}</td>
      <td>{{JSxRef("Date/getUTCFullYear", "getUTCFullYear()")}}</td>
      <td>{{JSxRef("Date/setUTCFullYear", "setUTCFullYear()")}}</td>
    </tr>
    <tr>
      <td>Mois</td>
      <td>{{JSxRef("Date/getMonth", "getMonth()")}}</td>
      <td>{{JSxRef("Date/setMonth", "setMonth()")}}</td>
      <td>{{JSxRef("Date/getUTCMonth", "getUTCMonth()")}}</td>
      <td>{{JSxRef("Date/setUTCMonth", "setUTCMonth()")}}</td>
    </tr>
    <tr>
      <td>Jour (du mois)</td>
      <td>{{JSxRef("Date/getDate", "getDate()")}}</td>
      <td>{{JSxRef("Date/setDate", "setDate()")}}</td>
      <td>{{JSxRef("Date/getUTCDate", "getUTCDate()")}}</td>
      <td>{{JSxRef("Date/setUTCDate", "setUTCDate()")}}</td>
    </tr>
    <tr>
      <td>Heures</td>
      <td>{{JSxRef("Date/getHours", "getHours()")}}</td>
      <td>{{JSxRef("Date/setHours", "setHours()")}}</td>
      <td>{{JSxRef("Date/getUTCHours", "getUTCHours()")}}</td>
      <td>{{JSxRef("Date/setUTCHours", "setUTCHours()")}}</td>
    </tr>
    <tr>
      <td>Minutes</td>
      <td>{{JSxRef("Date/getMinutes", "getMinutes()")}}</td>
      <td>{{JSxRef("Date/setMinutes", "setMinutes()")}}</td>
      <td>{{JSxRef("Date/getUTCMinutes", "getUTCMinutes()")}}</td>
      <td>{{JSxRef("Date/setUTCMinutes", "setUTCMinutes()")}}</td>
    </tr>
    <tr>
      <td>Secondes</td>
      <td>{{JSxRef("Date/getSeconds", "getSeconds()")}}</td>
      <td>{{JSxRef("Date/setSeconds", "setSeconds()")}}</td>
      <td>{{JSxRef("Date/getUTCSeconds", "getUTCSeconds()")}}</td>
      <td>{{JSxRef("Date/setUTCSeconds", "setUTCSeconds()")}}</td>
    </tr>
    <tr>
      <td>Millisecondes</td>
      <td>{{JSxRef("Date/getMilliseconds", "getMilliseconds()")}}</td>
      <td>{{JSxRef("Date/setMilliseconds", "setMilliseconds()")}}</td>
      <td>{{JSxRef("Date/getUTCMilliseconds", "getUTCMilliseconds()")}}</td>
      <td>{{JSxRef("Date/setUTCMilliseconds", "setUTCMilliseconds()")}}</td>
    </tr>
    <tr>
      <td>Jour (de la semaine)</td>
      <td>{{JSxRef("Date/getDay", "getDay()")}}</td>
      <td>N/A</td>
      <td>{{JSxRef("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

Le constructeur {{JSxRef("Date/Date", "Date()")}} peut être appelé avec deux arguments ou plus, auquel cas ils sont interprétés comme l'année, le mois, le jour, l'heure, la minute, la seconde et la milliseconde, respectivement, en heure locale. {{JSxRef("Date.UTC()")}} fonctionne de façon similaire, mais interprète les composants comme une heure UTC et accepte aussi un seul argument représentant l'année.

> [!NOTE]
> Certaines méthodes, dont le constructeur `Date()`, `Date.UTC()`, et les méthodes obsolètes {{JSxRef("Date/getYear", "getYear()")}}/{{JSxRef("Date/setYear", "setYear()")}}, interprètent une année sur deux chiffres comme une année des années 1900. Par exemple, `new Date(99, 5, 24)` est interprété comme le 24 juin 1999, et non le 24 juin 99. Voir [Interprétation des années sur deux chiffres](#interprétation_des_années_sur_deux_chiffres) pour plus d'informations.

Quand un segment déborde ou est inférieur à sa plage attendue, il est généralement «&nbsp;reporté&nbsp;» ou «&nbsp;emprunté&nbsp;» au segment supérieur. Par exemple, si le mois est fixé à 12 (les mois commencent à 0, donc décembre est 11), il devient janvier de l'année suivante. Si le jour du mois est fixé à 0, il devient le dernier jour du mois précédent. Cela s'applique aussi aux dates définies avec le [format de chaîne date-heure](#format_de_chaîne_date-heure).

Lorsque vous essayez de définir l'heure locale à un moment qui tombe dans une transition de décalage (généralement l'heure d'été), l'heure exacte est déterminée en utilisant le même comportement que l'option [`disambiguation: "compatible"`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_entre_lheure_locale_et_lheure_utc) de `Temporal`. C'est-à-dire, si l'heure locale correspond à deux instants, le plus tôt est choisi&nbsp;; si l'heure locale n'existe pas (il y a un saut), on avance de la durée du saut.

```js
// Supposons le fuseau horaire local America/New_York
// 2024-03-10 02:30 se situe dans la transition d'avance du printemps et n'existe pas
// 01:59 (UTC-5) passe à 03:00 (UTC-4), donc 02:30 avance d'une heure
console.log(new Date(2024, 2, 10, 2, 30).toString());
// Dim Mar 10 2024 03:30:00 GMT-0400 (Heure d'été de l'Est)

// 2024-11-03 01:30 se situe dans la transition de recul de l'automne et existe deux fois
// 01:59 (UTC-4) passe à 01:00 (UTC-5), donc le premier 01:30 (UTC-4) est choisi
console.log(new Date(2024, 10, 3, 1, 30).toString());
// Dim Nov 03 2024 01:30:00 GMT-0400 (Heure d'été de l'Est)
```

### Format de chaîne date-heure

Il existe de nombreuses façons de formater une date en chaîne de caractères. La spécification JavaScript ne définit qu'un seul format devant être universellement pris en charge&nbsp;: [_le format de chaîne date-heure <sup>(angl.)</sup>_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), une simplification du format étendu de date calendaire ISO 8601. Le format est le suivant&nbsp;:

```plain
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` est l'année, sur quatre chiffres (`0000` à `9999`), ou une _année étendue_ commençant par `+` ou `-` suivie de six chiffres. Le signe est requis pour les années étendues. `-000000` est explicitement interdit comme année valide.
- `MM` est le mois, sur deux chiffres (`01` à `12`). Par défaut `01`.
- `DD` est le jour du mois, sur deux chiffres (`01` à `31`). Par défaut `01`.
- `T` est un caractère littéral qui indique le début de la partie _heure_ de la chaîne. Le `T` est requis lorsqu'on définit la partie heure.
- `HH` est l'heure, sur deux chiffres (`00` à `23`). Cas particulier, `24:00:00` est autorisé et est interprété comme minuit au début du jour suivant. Par défaut `00`.
- `mm` sont les minutes, sur deux chiffres (`00` à `59`). Par défaut `00`.
- `ss` sont les secondes, sur deux chiffres (`00` à `59`). Par défaut `00`.
- `sss` sont les millisecondes, sur trois chiffres (`000` à `999`). Par défaut `000`.
- `Z` est le décalage horaire, qui peut être le caractère littéral `Z` (indiquant l'UTC), ou `+` ou `-` suivi de `HH:mm`, le décalage en heures et minutes par rapport à l'UTC.

Plusieurs composants peuvent être omis, donc les formes suivantes sont toutes valides&nbsp;:

- Forme date seule&nbsp;: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Forme date-heure&nbsp;: l'une des formes date seule ci‑dessus, suivie de `T`, puis de `HH:mm`, `HH:mm:ss` ou `HH:mm:ss.sss`. Chaque combinaison peut être suivie d'un décalage de fuseau horaire.

Par exemple, `"2011-10-10"` (format _date seulement_), `"2011-10-10T14:48:00"` (format _date-heure_), ou `"2011-10-10T14:48:00.000+09:00"` (format _date-heure_ avec millisecondes et fuseau horaire) sont toutes des chaînes de date-heure valides.

Lorsque le décalage de fuseau horaire est absent, **les formes date seule sont interprétées comme une heure UTC et les formes date-heure comme une heure locale.** L'interprétation en UTC est due à une erreur historique de la spécification incompatible avec ISO&nbsp;8601 qui n'a pas pu être modifiée pour des raisons de compatibilité web. Voir [Broken Parser — Un problème de compatibilité web <sup>(angl.)</sup>](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{JSxRef("Date.parse()")}} et le constructeur {{JSxRef("Date/Date", "Date()")}} acceptent tous deux des chaînes de caractères au format date-heure en entrée. De plus, les implémentations peuvent prendre en charge d'autres formats de date lorsque l'entrée ne correspond pas à ce format.

La méthode {{JSxRef("Date/toISOString", "toISOString()")}} retourne une chaîne de caractères représentant la date selon le format de chaîne date-heure, avec le décalage de fuseau horaire toujours fixé à `Z` (UTC).

> [!NOTE]
> Il est conseillé de s'assurer que votre entrée respecte le format de chaîne de caractères date-heure ci-dessus pour une compatibilité maximale, car la prise en charge d'autres formats n'est pas garantie. Toutefois, certains formats sont pris en charge par toutes les implémentations majeures — comme le format {{RFC(2822)}} — et leur utilisation peut alors être acceptable. Effectuez toujours des [Tests inter-navigateurs](/fr/docs/Learn_web_development/Extensions/Testing) pour vérifier que votre code fonctionne dans tous les navigateurs ciblés. Une bibliothèque peut aider si vous devez gérer de nombreux formats différents.

Les chaînes de caractères non standard peuvent être analysées comme l'implémentation le souhaite, y compris pour le fuseau horaire — la plupart des implémentations utilisent par défaut le fuseau horaire local. Les implémentations ne sont pas tenues de renvoyer une date invalide pour des composants de date hors limites, bien qu'elles le fassent généralement. Une chaîne de caractères peut contenir des composants de date dans les limites (telles que définies ci-dessus) mais ne pas représenter une date réelle (par exemple, "February 30"). Les implémentations se comportent de manière incohérente dans ce cas. La page [`Date.parse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#exemples) propose davantage d'exemples sur ces cas non standard.

### Autres façons de formater une date

- {{JSxRef("Date/toISOString", "toISOString()")}} retourne une chaîne de caractères au format `1970-01-01T00:00:00.000Z` (le format de chaîne de caractères date-heure présenté ci‑dessus, qui est une simplification de [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601)). {{JSxRef("Date/toJSON", "toJSON()")}} appelle `toISOString()` et retourne le résultat.
- {{JSxRef("Date/toString", "toString()")}} retourne une chaîne de caractères au format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)`, tandis que {{JSxRef("Date/toDateString", "toDateString()")}} et {{JSxRef("Date/toTimeString", "toTimeString()")}} retournent respectivement la partie date et la partie heure de la chaîne. [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) (lorsqu'on lui passe `"string"` ou `"default"`) appelle `toString()` et retourne le résultat.
- {{JSxRef("Date/toUTCString", "toUTCString()")}} retourne une chaîne de caractères au format `Thu, 01 Jan 1970 00:00:00 GMT` (généralisé par {{RFC(7231)}}).
- {{JSxRef("Date/toLocaleDateString", "toLocaleDateString()")}}, {{JSxRef("Date/toLocaleTimeString", "toLocaleTimeString()")}} et {{JSxRef("Date/toLocaleString", "toLocaleString()")}} utilisent des formats de date et d'heure spécifiques à la locale, généralement fournis par l'API [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl).

Voir la section [Formats des valeurs de retour de la méthode `toString`](#formats_des_valeurs_de_retour_de_la_méthode_tostring) pour des exemples.

## Constructeur

- {{JSxRef("Date/Date", "Date()")}}
  - : Lorsqu'il est appelé en tant que constructeur, retourne un nouvel objet `Date`. Lorsqu'il est appelé en tant que fonction, retourne une représentation sous forme de chaîne de caractères de la date et de l'heure actuelles.

## Méthodes statiques

- {{JSxRef("Date.now()")}}
  - : Retourne la valeur numérique correspondant au moment présent — le nombre de millisecondes écoulées depuis le 1er janvier 1970 00:00:00 UTC, les secondes intercalaires sont ignorées.
- {{JSxRef("Date.parse()")}}
  - : Analyse une représentation textuelle d'une date et retourne le nombre de millisecondes écoulées depuis le 1er janvier 1970 00:00:00 UTC, les secondes intercalaires sont ignorées.
- {{JSxRef("Date.UTC()")}}
  - : Accepte les mêmes paramètres que la forme longue du constructeur (c'est‑à‑dire entre 2 et 7) et retourne le nombre de millisecondes écoulées depuis le 1er janvier 1970 00:00:00 UTC, les secondes intercalaires sont ignorées.

## Méthodes d'instances

- {{JSxRef("Date.prototype.getDate()")}}
  - : Retourne le jour du mois (`1` à `31`) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.getDay()")}}
  - : Retourne le jour de la semaine (`0` à `6`) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.getFullYear()")}}
  - : Retourne l'année (sur 4 chiffres pour les années à 4 chiffres) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.getHours()")}}
  - : Retourne l'heure (`0` à `23`) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.getMilliseconds()")}}
  - : Retourne les millisecondes (`0` à `999`) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.getMinutes()")}}
  - : Retourne les minutes (`0` à `59`) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.getMonth()")}}
  - : Retourne le mois (`0` à `11`) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.getSeconds()")}}
  - : Retourne les secondes (`0` à `59`) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.getTime()")}}
  - : Retourne la valeur numérique de la date définie sous la forme du nombre de millisecondes écoulées depuis le 1er janvier 1970 00:00:00 UTC. (Des valeurs négatives sont retournées pour les instants antérieurs.)
- {{JSxRef("Date.prototype.getTimezoneOffset()")}}
  - : Retourne le décalage horaire, exprimé en minutes, pour la locale courante.
- {{JSxRef("Date.prototype.getUTCDate()")}}
  - : Retourne le jour du mois (`1` à `31`) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.getUTCDay()")}}
  - : Retourne le jour de la semaine (`0` à `6`) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.getUTCFullYear()")}}
  - : Retourne l'année (sur 4 chiffres pour les années à 4 chiffres) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.getUTCHours()")}}
  - : Retourne les heures (`0` à `23`) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.getUTCMilliseconds()")}}
  - : Retourne les millisecondes (`0` à `999`) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.getUTCMinutes()")}}
  - : Retourne les minutes (`0` à `59`) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.getUTCMonth()")}}
  - : Retourne le mois (`0` à `11`) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.getUTCSeconds()")}}
  - : Retourne les secondes (`0` à `59`) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.getYear()")}} {{Deprecated_Inline}}
  - : Retourne l'année (généralement exprimée sur 2 à 3 chiffres) pour la date définie selon le temps local. Utiliser {{JSxRef("Date/getFullYear", "getFullYear()")}} à la place.
- {{JSxRef("Date.prototype.setDate()")}}
  - : Définit le jour du mois pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.setFullYear()")}}
  - : Définit l'année complète (par exemple 4 chiffres pour les années à 4 chiffres) pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.setHours()")}}
  - : Définit les heures pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.setMilliseconds()")}}
  - : Définit les millisecondes pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.setMinutes()")}}
  - : Définit les minutes pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.setMonth()")}}
  - : Définit le mois pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.setSeconds()")}}
  - : Définit les secondes pour la date définie selon le temps local.
- {{JSxRef("Date.prototype.setTime()")}}
  - : Définit l'objet `Date` à l'instant représenté par le nombre de millisecondes écoulées depuis le 1er janvier 1970 00:00:00 UTC. Utiliser des nombres négatifs pour les instants antérieurs.
- {{JSxRef("Date.prototype.setUTCDate()")}}
  - : Définit le jour du mois pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.setUTCFullYear()")}}
  - : Définit l'année complète (par exemple 4 chiffres pour les années à 4 chiffres) pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.setUTCHours()")}}
  - : Définit l'heure pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.setUTCMilliseconds()")}}
  - : Définit les millisecondes pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.setUTCMinutes()")}}
  - : Définit les minutes pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.setUTCMonth()")}}
  - : Définit le mois pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.setUTCSeconds()")}}
  - : Définit les secondes pour la date définie selon le temps universel.
- {{JSxRef("Date.prototype.setYear()")}} {{Deprecated_Inline}}
  - : Définit l'année (généralement exprimée sur 2 à 3 chiffres) pour la date définie selon le temps local. Utiliser {{JSxRef("Date/setFullYear", "setFullYear()")}} à la place.
- {{JSxRef("Date.prototype.toDateString()")}}
  - : Retourne la partie «&nbsp;date&nbsp;» de l'objet `Date` sous forme d'une chaîne de caractères lisible par un humain, par exemple `'Thu Apr 12 2018'`.
- {{JSxRef("Date.prototype.toISOString()")}}
  - : Convertit une date en une chaîne de caractères selon le format ISO 8601 étendu.
- {{JSxRef("Date.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant l'objet `Date` via {{JSxRef("Date/toISOString", "toISOString()")}}. Méthode destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Date.prototype.toLocaleDateString()")}}
  - : Retourne une chaîne de caractères représentant la partie date selon la locale, basée sur les paramètres système.
- {{JSxRef("Date.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères représentant la date selon la locale. Surcharge la méthode {{JSxRef("Object.prototype.toLocaleString()")}}.
- {{JSxRef("Date.prototype.toLocaleTimeString()")}}
  - : Retourne une chaîne de caractères représentant la partie heure selon la locale, basée sur les paramètres système.
- {{JSxRef("Date.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant l'objet `Date` spécifié. Surcharge la méthode {{JSxRef("Object.prototype.toString()")}}.
- {{JSxRef("Date.prototype.toTemporalInstant()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Instant")}} avec la même valeur {{JSxRef("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} que le [timestamp](#the_epoch_timestamps_and_invalid_date) de cette date.
- {{JSxRef("Date.prototype.toTimeString()")}}
  - : Retourne la partie «&nbsp;heure&nbsp;» de l'objet `Date` sous forme d'une chaîne de caractères lisible par un humain.
- {{JSxRef("Date.prototype.toUTCString()")}}
  - : Convertit une date en chaîne de caractères en utilisant le fuseau horaire UTC.
- {{JSxRef("Date.prototype.valueOf()")}}
  - : Retourne la valeur primitive d'un objet `Date`. Surcharge la méthode {{JSxRef("Object.prototype.valueOf()")}}.
- [`Date.prototype[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive)
  - : Convertit cet objet `Date` en une valeur primitive.

## Exemples

### Différentes façons de créer un objet `Date`

Les exemples qui suivent illustrent différentes méthodes permettant de créer des dates JavaScript&nbsp;:

> [!NOTE]
> La création d'une date à partir d'une chaîne de caractères présente de nombreuses incohérences de comportement. Voir [format de chaîne de caractères date-heure](#format_de_chaîne_date-heure) pour les mises en garde concernant l'utilisation de différents formats.

```js
const aujourdhui = new Date();
const anniversaire = new Date("September 22, 2018 15:00:00"); // DÉCONSEILLÉ : peut ne pas fonctionner dans tous les environnements
const anniversaire2 = new Date("2018-09-22T15:00:00"); // Ceci est standardisé et fonctionnera de manière fiable
const anniversaire3 = new Date(2018, 8, 22); // le mois est indexé à partir de 0
const anniversaire4 = new Date(2018, 8, 22, 15, 0, 0);
const anniversaire5 = new Date(628021800000); // en utilisant un timestamp epoch
```

### Formats des valeurs de retour de la méthode `toString()`

```js
const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM
```

### Obtenir la date, le mois, l'année ou l'heure

```js
const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
// [0, 17, 2000] comme les mois sont indexés à partir de 0
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
// [16, 45, 30]
```

### Interprétation des années sur deux chiffres

`new Date()` présente un comportement hérité indésirable et incohérent avec les années sur deux chiffres&nbsp;; spécifiquement, lorsqu'un appel à `new Date()` reçoit une année sur deux chiffres, cette valeur n'est pas traitée comme une année littérale et utilisée telle quelle mais est interprétée comme un décalage relatif — dans certains cas comme un décalage par rapport à l'année `1900`, mais dans d'autres cas, comme un décalage par rapport à l'année `2000`.

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Méthode héritée ; interprète toujours les années sur deux chiffres
// comme relatives à 1900
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

Ainsi, pour créer et obtenir des dates entre les années `0` et `99`, il faut utiliser les méthodes recommandées {{JSxRef("Date/setFullYear", "setFullYear()")}} et {{JSxRef("Date/getFullYear", "getFullYear()")}}.

```js
// Méthode recommandée ; n'interprète jamais une valeur comme un décalage
// relatif, mais utilise la valeur de l'année telle quelle
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

### Calculer le temps écoulé

Dans les exemples suivants, on illustre comment calculer le temps écoulé entre deux dates JavaScript en millisecondes.

En raison de durées différentes pour les jours (heure d'été / heure d'hiver), les mois et les années, il faudra faire attention et étudier le sujet avant d'exprimer des durées en unités supérieures à des heures / minutes / secondes.

```js
// Utiliser des objets Date
const debutTemps = Date.now();

// Ici, l'évènement dont on veut mesurer la durée :
faireQuelqueChosePendantLongtemps();
const finTemps = Date.now();
const duree = finTemps - debutTemps; // La durée écoulée, en millisecondes
```

```js
// En utilisant les méthodes natives
const debutTemps = new Date();

// Ici, l'évènement dont on veut mesurer la durée :
faireQuelqueChosePendantLongtemps();
const finTemps = new Date();
const duree = finTemps.getTime() - debutTemps.getTime(); // La durée écoulée, en millisecondes
```

```js
// Pour tester le temps d'exécution d'une fonction
function afficheDureeEcoulee(fTest) {
  const debutTemps = Date.now();
  const resultat = fTest();
  const finTemps = Date.now();

  console.log(`Temps écoulé : ${String(finTemps - debutTemps)} millisecondes`);
  return resultat;
}

const valeurDeRetour = afficheDureeEcoulee(maFonctionATester);
```

> [!NOTE]
> Dans les navigateurs qui prennent en charge la fonctionnalité de mesure de temps haute résolution de {{DOMxRef("Performance API", "l'API Performance", "", "nocode")}}, {{DOMxRef("Performance.now()")}} peut fournir des mesures de durée écoulée plus fiables et précises que {{JSxRef("Date.now()")}}.

### Obtenir le nombre de secondes écoulées depuis l'epoch ECMAScript

```js
const secondes = Math.floor(Date.now() / 1000);
```

Dans ce cas, il est important de retourner uniquement un entier — une simple division ne suffit donc pas. Il est aussi important de ne retourner que les secondes effectivement écoulées. (C'est pourquoi ce code utilise {{JSxRef("Math.floor()")}}, et _pas_ {{JSxRef("Math.round()")}}.)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le constructeur {{JSxRef("Date/Date", "Date()")}}
