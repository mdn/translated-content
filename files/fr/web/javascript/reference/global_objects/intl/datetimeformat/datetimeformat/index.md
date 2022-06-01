---
title: Constructeur Intl.DateTimeFormat()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
browser-compat: javascript.builtins.Intl.DateTimeFormat.DateTimeFormat
---
{{JSRef}}

Le constructeur **`Intl.DateTimeFormat()`** permet de créer des objets [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) qui formatent des horodatages en tenant compte de la locale et des options fournies.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

## Syntaxe

```js
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)
```

### Paramètres

- `locales` {{optional_inline}}

  - : Une chaîne de caractères représentant une balise de langue BCP 47 ou un tableau de telles balises. Pour la forme générale et l'interprétation de cet argument, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_choix_de_la_locale). Les clés d'extension Unicode suivantes sont autorisées&nbsp;:

    - `nu`
      - : Le système de numération à utiliser. Les valeurs possibles sont&nbsp;: "`arab`", "`arabext`", "`bali`", "`beng`", "`deva`", "`fullwide`", "`gujr`", "`guru`", "`hanidec`", "`khmr`", "`knda`", "`laoo`", "`latn`", "`limb`", "`mlym`", "`mong`", "`mymr`", "`orya`", "`tamldec`", "`telu`", "`thai`", "`tibt`".
    - `ca`
      - : Le calendrier à utiliser. Les valeurs possibles sont&nbsp;: "`buddhist`", "`chinese`", "`coptic`", "`ethiopia`", "`ethiopic`", "`gregory`", "`hebrew`", "`indian`", "`islamic`", "`iso8601`", "`japanese`", "`persian`", "`roc`".
    - `hc`
      - : Le cycle horaire à utiliser. Les valeurs possibles sont&nbsp;: "`h11`", "`h12`", "`h23`", "`h24`".

- `options` {{optional_inline}}

  - : Un objet avec une ou plusieurs propriétés parmi les suivantes&nbsp;:

    - `dateStyle`

      - : Le style de formatage pour la date à utiliser avec `format()`. Les valeurs possibles sont&nbsp;:

        - "`full`"
        - "`long`"
        - "`medium`"
        - "`short`"

        > **Note :** `dateStyle` peut être utilisée avec `timeStyle`, mais pas avec les autres options (comme `weekday`, `hour`, `month`, etc.).

    - `timeStyle`

      - : Le style de formatage des heures à utiliser avec `format()`. Les valeurs possibles sont&nbsp;:

        - "`full`"
        - "`long`"
        - "`medium`"
        - "`short`"

        > **Note :** `timeStyle` peut être utilisée avec `dateStyle`, mais pas avec les autres options (comme `weekday`, `hour`, `month`, etc.).

    - `calendar`
      - : Le calendrier à utiliser. Les valeurs possibles sont&nbsp;: "`buddhist`", "`chinese`", " `coptic`", "`ethiopia`", "`ethiopic`", "`gregory`", "`hebrew`", "`indian`", "`islamic`", "`iso8601`", "`japanese`", "`persian`", "`roc`".
    - `dayPeriod`

      - : Le style de formatage à utiliser pour les périodes du jour comme «&nbsp;dans la matinée&nbsp;», «&nbsp;à midi&nbsp;», etc. Les valeurs possibles sont&nbsp;:
        "`narrow`", "`short`", " `long`".

        > **Note :** Cette option applique un effet uniquement si une horloge sur 12 heures est utilisée. De nombreuses locales utilisent la même chaîne de caractères quelle que soit la longueur indiquée.

    - `numberingSystem`
      - : Le système de numération à utiliser. Les valeurs possibles sont&nbsp;: "`arab`", "`arabext`", " `bali`", "`beng`", "`deva`", "`fullwide`", " `gujr`", "`guru`", "`hanidec`", "`khmr`", "`knda`", "`laoo`", "`latn`", "`limb`", "`mlym`", " `mong`", "`mymr`", "`orya`", "`tamldec`", "`telu`", "`thai`", "`tibt`".
    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont "`lookup`" et "`best fit`"&nbsp;; la valeur par défaut est "`best fit`". Pour plus d'information, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).
    - `timeZone`
      - : Le fuseau horaire à utiliser. La seule valeur que doivent nécessairement reconnaître les implémentations est "`UTC`". La valeur par défaut est le fuseau horaire de l'environnement d'exécution. Les implémentations peuvent également reconnaître les noms de fuseaux horaires tels que décrits dans [la base de données des fuseaux horaires IANA](https://www.iana.org/time-zones), comme "`Asia/Shanghai`", "`Asia/Kolkata`", "`America/New_York`".
    - `hour12`
      - : Indique si l'heure est exprimée sur 12 heures plutôt que sur 24. Les valeurs possibles sont `true` et `false`&nbsp;; la valeur par défaut dépend de la locale. Cette option surcharge la clé d'extension `hc` et/ou l'option `hourCycle`.
    - `hourCycle`
      - : Le cycle horaire à utiliser. Les valeurs possibles sont&nbsp;: "`h11`", "`h12`", "`h23`", or "`h24`". Cette option prévaut sur la clé d'extension `hc`. L'option `hour12` aura la priorité sur cette option si les deux sont utilisées.
    - `formatMatcher`
      - : L'algorithme de correspondance des formats à utiliser. Les valeurs possibles sont "`basic`" et "`best fit`"&nbsp;; la valeur par défaut est "`best fit`". Voir les paragraphes suivants à propos de l'utilisation de cette propriété.

    Les propriétés suivantes décrivent les composantes d'horodatage qui peuvent être utilisées pour le format de production ainsi que leurs différentes représentations. Les implémentations doivent au moins prendre en charge les sous-ensembles suivants&nbsp;:

    - `weekday`, `year`, `month`,
      `day`, `hour`, `minute`,
      `second`
    - `weekday`, `year`, `month`,
      `day`
    - `year`, `month`, `day`
    - `year`, `month`
    - `month`, `day`
    - `hour`, `minute`, `second`
    - `hour`, `minute`

    Les moteurs peuvent prendre en charge d'autres sous-ensembles et la recherche de la meilleure correspondance aura lieu parmi toutes les combinaisons disponibles. Deux algorithmes sont disponibles pour cette recherche et la propriété `formatMatcher` permet de choisir l'un ou l'autre&nbsp;: [un algorithme explicitement spécifié, "`basic`"](https://www.ecma-international.org/ecma-402/1.0/#BasicFormatMatcher) et un algorithme laissé à l'implémentation&nbsp;: "`best fit`".

    - `weekday`

      - : La représentation du jour de la semaine. Les valeurs possibles sont&nbsp;:

        - "`long`" (par exemple, `mardi`)
        - "`short`" (par exemple, `mar`)
        - "`narrow`" (par exemple, `m`). Deux jours différents de la semaine peuvent avoir la même représentation avec ce style.

    - `era`

      - : La représentation d'une ère. Les valeurs possibles sont&nbsp;:

        - "`long`" (par exemple, `Anno Domini`)
        - "`short`" (par exemple, `AD`)
        - "`narrow`" (par exemple, `A`)

    - `year`

      - : La représentation de l'année. Les valeurs possibles sont&nbsp;:

        - "`numeric`" (par exemple, `2012`)
        - "`2-digit`" (par exemple, `12`)

    - `month`

      - : La représentation du mois.  Les valeurs possibles sont&nbsp;:

        - "`numeric`" (par exemple, `3`)
        - "`2-digit`" (par exemple, `03`)
        - "`long`" (par exemple, `mars`)
        - "`short`" (par exemple, `mar`)
        - "`narrow`" (par exemple, `m`). Deux mois différents peuvent avoir la même représentation avec ce style.

    - `day`

      - : La représentation du jour. Les valeurs possibles sont&nbsp;:

        - "`numeric`" (par exemple, `1`)
        - "`2-digit`" (par exemple, `01`)

    - `hour`
      - : La représentation de l'heure. Les valeurs possibles sont&nbsp;: "`numeric`", "`2-digit`".
    - `minute`
      - : La représentation des minutes. Les valeurs possibles sont&nbsp;: "`numeric`", "`2-digit`".
    - `second`
      - : La représentation des secondes. Les valeurs possibles sont&nbsp;: "`numeric`", "`2-digit`".
    - `fractionalSecondDigits`

      - : Le nombre de chiffres à utiliser pour représenter la partie décimale des secondes (tout chiffre supplémentaire sera tronqué). Les valeurs possibles sont&nbsp;:

        - `0` (la partie décimale est tronquée)
        - `1`
        - `2`
        - `3`

    - `timeZoneName`

      - : La représentation localisée du nom du fuseau horaire. Les valeurs possibles sont&nbsp;:

        - "`long`" pour le format long (par exemple, `Pacific Standard Time`, `Nordamerikanische Westküsten-Normalzeit`)
        - "`short`" pour la forme courte localisée (par exemple, `PST`, `GMT-8`)
        - "`shortOffset`" pour la forme courte GMT localisée (par exemple, `GMT-8`)
        - "`longOffset`" pour la forme longue GMT localisée (par exemple, `GMT-0800`)
        - "`shortGeneric`" pour la forme courte générique non-localisée (par exemple, `PT`, `Los Angeles Zeit`).
        - "`longGeneric`" pour la forme longue générique non-localisée (par exemple, `Pacific Time`, `Nordamerikanische Westküstenzeit`)

        > **Note :** L'affichage du fuseau horaire pourra basculer sur un autre format si la chaîne de caractères nécessaire n'est pas disponible. Ainsi, les formats non-localisés devraient afficher le fuseau horaire sans indication de pays ou de ville, à la manière de "Pacific Time". Si ce n'est pas possible, le moteur pourra utiliser un nom de fuseau horaire localisé comme "Los Angeles Time".

    La valeur par défaut pour chaque composante de l'horodatage est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), et si toutes les propriétés valent [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), ce sera la valeur "`numeric`" qui sera utilisée pour `year`, `month`, et `day`.

## Exemples

### Utiliser DateTimeFormat()

Voici une utilisation simple du constructeur sans indiquer de locale. `DateTimeFormat` utilise alors la locale par défaut et les options par défaut.

```js
let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(new Intl.DateTimeFormat().format(date));
// → "20/12/2012" si exécuté sur un environnement avec la locale en fr-FR et sur le fuseau horaire (UTC+0100)
```

### Utiliser timeStyle et dateStyle

```js
let o = new Intl.DateTimeFormat("fr" , {
  timeStyle: "short"
});
console.log(o.format(Date.now())); // "09:45"

let o2 = new Intl.DateTimeFormat("fr" , {
  dateStyle: "short"
});
console.log(o2.format(Date.now())); // "29/12/2021"

let o3 = new Intl.DateTimeFormat("fr" , {
  timeStyle: "medium",
  dateStyle: "short"
});
console.log(o3.format(Date.now())); // "29/12/2021 09:46:55"
```

### Utiliser dayPeriod

On utilise l'option `dayPeriod` pour produire une chaîne de caractères qui indique le moment de la journée («&nbsp;dans la matinée&nbsp;», «&nbsp;pendant la nuit&nbsp;», etc.). On notera que cela fonctionne uniquement avec un formatage utilisant une horloge sur 12 heures (`hourCycle: 'h12'`) et que pour de nombreuses locales, les chaînes obtenues sont les mêmes quelle que soit la valeur utilisée pour `dayPeriod`.

```js
let date = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hourCycle: 'h12', 
dayPeriod: 'short', timeZone: 'UTC' }).format(date));
// > 4 at night"  (même formatage pour en-GB quelle que soit la valeur de dayPeriod)

console.log(new Intl.DateTimeFormat('fr', { hour: 'numeric', hourCycle: 'h12',
    dayPeriod: 'narrow', timeZone: 'UTC' }).format(date));
// > "4 mat."  (même formatage pour fr avec narrow ou short)

console.log(new Intl.DateTimeFormat('fr', { hour: 'numeric', hourCycle: 'h12', 
    dayPeriod: 'long', timeZone: 'UTC' }).format(date));
// > "4 du matin"
```

### Utiliser timeZoneName

On utilise l'option `timeZoneName` pour produire une chaîne de caractères représentant le fuseau horaire ("GMT", "Pacific Time", etc.).

```js
var date = Date.UTC(2021, 11, 17, 3, 0, 42);
const timezoneNames = ['short', 'long', 'shortOffset', 'longOffset', 'shortGeneric', 'longGeneric']

for (const zoneName of timezoneNames) {
  var formatter = new Intl.DateTimeFormat('fr', {
    timeZone: 'Europe/Paris',
    timeZoneName: zoneName,
  });
  console.log(zoneName + " : " + formatter.format(date) );
}

// Résultat attendu : 
// short : 17/12/2021, UTC+1
// long : 17/12/2021, heure normale d'Europe centrale
// shortOffset : 17/12/2021, UTC+1
// longOffset : 17/12/2021, UTC+01:00
// shortGeneric : 17/12/2021, heure : France
// longGeneric : 17/12/2021, heure d'Europe centrale
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf)
- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
