---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 3cc665141a834304942e7e2c15745cb766a6b195
---

L'objet **`Temporal.ZonedDateTime`** représente une date et une heure avec un fuseau horaire. Il est fondamentalement représenté comme une combinaison d'un [instant](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), d'un fuseau horaire et d'un système de calendrier.

## Description

Un `ZonedDateTime` fonctionne comme un pont entre un temps exact et un temps affiché sur une horloge murale&nbsp;: il représente simultanément un instant dans l'histoire (comme un {{JSxRef("Temporal.Instant")}}) et un temps local affiché sur une horloge (comme un {{JSxRef("Temporal.PlainDateTime")}}). Il le fait en stockant l'instant, le fuseau horaire et le système de calendrier. Le fuseau horaire est utilisé pour convertir entre l'instant et le temps local, et le système de calendrier est utilisé pour interpréter le temps local.

`ZonedDateTime` est la seule classe `Temporal` qui prend en compte le fuseau horaire. L'ajout d'un fuseau horaire fait que les objets `ZonedDateTime` ont des différences de comportement importantes par rapport aux objets {{JSxRef("Temporal.PlainDateTime")}}. Notamment, vous ne pouvez plus supposer que «&nbsp;l'heure 1 minute plus tard&nbsp;» est la même chaque jour, ou qu'une journée compte 24 heures. Dans le pire des cas, une journée entière peut manquer dans le calendrier local. Ci-dessous, nous proposons un aperçu rapide des fuseaux horaires et des décalages, et de la façon dont ils affectent la conversion entre l'heure UTC et l'heure locale.

### Fuseaux horaires et décalages

Toutes les heures en JavaScript ont une norme d'or&nbsp;: l'heure UTC, qui s'incrémente de manière continue et uniforme à mesure que le temps physique progresse. En revanche, les utilisateur·ice·s s'intéressent davantage à leur heure locale, qui est l'heure qu'ils lisent sur leurs calendriers et horloges. Le processus de conversion entre l'heure UTC et l'heure locale implique un _décalage_ de fuseau horaire, qui est calculé comme suit&nbsp;:

```plain
heure locale = heure UTC + décalage
```

Par exemple, si l'heure UTC est 1970-01-01T00:00:00 et que le décalage est «&nbsp;-05:00&nbsp;», alors l'heure locale est&nbsp;:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

En ajoutant un suffixe à cette heure locale avec le décalage, et donc en exprimant cette heure comme «&nbsp;1969-12-31T19:00:00-05:00&nbsp;», elle peut maintenant être comprise sans ambiguïté comme un instant dans l'histoire.

Pour connaître le décalage, nous avons besoin de deux informations, _le fuseau horaire_ et _l'instant_. Le fuseau horaire est une région sur Terre où le même décalage est utilisé à tout moment. Deux horloges dans le même fuseau horaire afficheront toujours la même heure simultanément, mais le décalage n'est pas nécessairement constant&nbsp;: c'est-à-dire que l'heure de ces horloges peut changer brusquement. Cela se produit couramment lors des transitions d'heure d'été, où le décalage change d'une heure, ce qui arrive deux fois par an. Les décalages peuvent aussi changer définitivement en raison de changements politiques, par exemple, un pays changeant de fuseau horaire.

Les fuseaux horaires sont stockés dans la [base de données des fuseaux horaires <abbr lang="en" title="Internet Assigned Numbers Authority">IANA</abbr> <sup>(angl.)</sup>](https://www.iana.org/time-zones). Chaque fuseau horaire IANA possède&nbsp;:

- Un _identifiant principal de fuseau horaire_ qui identifie de manière unique le fuseau horaire. Il fait généralement référence à une zone géographique ancrée par une ville (par exemple, `Europe/Paris` ou `Africa/Kampala`), mais peut aussi désigner des fuseaux horaires à décalage unique comme `UTC` (un décalage constant de `+00:00`) ou `Etc/GMT+5` (qui, pour des raisons historiques, est un décalage négatif de `-05:00`). Pour des raisons historiques, le nom principal du fuseau horaire UTC est `UTC`, bien que dans l'IANA ce soit `Etc/UTC`.
- Une _définition de fuseau horaire_ sous la forme d'un tableau qui associe des plages de dates/heures UTC (y compris des plages futures) à des décalages spécifiques.
- Zéro ou plusieurs _identificateurs de fuseau horaire qui ne sont pas principaux_ qui sont des alias de l'identifiant principal du fuseau horaire. Il s'agit généralement de noms historiques qui ne sont plus utilisés, mais qui sont conservés pour des raisons de compatibilité. Voir ci-dessous pour plus d'informations.

Lors de la saisie, la correspondance des identifiants nommés s'effectue sans distinction de casse. En interne, ils sont stockés dans leur casse préférée, et les identifiants non principaux _ne seront pas_ convertis en leur identifiant principal.

> [!NOTE]
> Lorsque vous définissez le nom du fuseau horaire, vous ne souhaitez généralement pas le définir sur `"UTC"`. `ZonedDateTime` est destinée à être affichée aux utilisateur·ice·s, mais aucun·e humain·e ne vit dans le fuseau horaire «&nbsp;UTC&nbsp;». Si vous ne connaissez pas le fuseau horaire au moment de la construction mais que vous connaissez l'heure affichée, utilisez un {{JSxRef("Temporal.PlainDateTime")}}. Si vous connaissez l'instant exact, utilisez un {{JSxRef("Temporal.Instant")}}.

Lorsqu'une API `Temporal` accepte un _identifiant de fuseau horaire_, en plus des identifiants principaux de fuseau horaire et des identifiants de fuseau horaire qui ne sont pas principaux, elle accepte également un _identifiant de fuseau horaire à décalage_, qui est sous la même forme que le décalage, sauf que la précision subminute n'est pas autorisée. Par exemple, `+05:30`, `-08`, `+0600` sont tous des identifiants de décalage valides. En interne, les identifiants de décalage sont stockés sous la forme `±HH:mm`.

> [!NOTE]
> Évitez d'utiliser des identifiants de décalage si vous pouvez utiliser un fuseau horaire nommé à la place. Même si une région a toujours utilisé un seul décalage, il est préférable d'utiliser l'identifiant nommé pour se prémunir contre les futurs changements politiques du décalage.
>
> Si une région utilise (ou a utilisé) plusieurs décalages, alors l'utilisation de son fuseau horaire nommé est encore plus importante. En effet, `Temporal.ZonedDateTime` peut utiliser des méthodes comme `add` ou `with` pour créer de nouvelles instances à un instant différent. Si ces instances dérivées correspondent à un instant qui utilise un décalage différent (par exemple, après une transition de l'heure d'été), alors vos calculs auront une heure locale incorrecte. L'utilisation d'un fuseau horaire nommé garantit que les dates et heures locales sont toujours ajustées pour le décalage correct à cet instant.

Pour plus de commodité, lorsque vous fournissez un identifiant de fuseau horaire aux API `Temporal` telles que `Temporal.ZonedDateTime.prototype.withTimeZone()` et l'option `timeZoneId` de `Temporal.ZonedDateTime.from()`, vous pouvez le fournir sous quelques autres formes&nbsp;:

- Comme une autre instance de `ZonedDateTime`, dont le `timeZoneId` sera utilisé.
- Comme une [chaîne de caractères RFC 9557](#format_rfc_9557) avec une annotation de fuseau horaire, dont l'identifiant de fuseau horaire sera utilisé.
- Comme une chaîne de caractères ISO 8601 / RFC 3339 contenant un décalage, dont le décalage sera utilisé comme identifiant de décalage&nbsp;; ou, si vous utilisez `Z`, alors le fuseau horaire `"UTC"` est utilisé. Cette utilisation est généralement déconseillée, car comme expliqué ci-dessus, les identifiants de décalage n'offrent pas la possibilité de produire en toute sécurité d'autres instances de `Temporal.ZonedDateTime` lors d'une transition de décalage comme lorsque l'heure d'été commence ou se termine. À la place, envisagez simplement d'utiliser `Temporal.Instant` ou d'obtenir le nom de fuseau horaire réel de l'utilisateur·ice.

La base de données des fuseaux horaires IANA change de temps en temps, généralement pour ajouter de nouveaux fuseaux horaires en réponse à des changements politiques. Cependant, dans de rares occasions, les identifiants de fuseau horaire IANA sont renommés pour correspondre à la traduction anglaise mise à jour d'un nom de ville ou pour mettre à jour des conventions de nommage obsolètes. Par exemple, voici quelques changements de nom notables&nbsp;:

| Identifiant IANA principal actuel | Ancien identifiant, qui n'est plus principal |
| --------------------------------- | -------------------------------------------- |
| `America/Argentina/Buenos_Aires`  | `America/Buenos_Aires`                       |
| `Asia/Kolkata`                    | `Asia/Calcutta`                              |
| `Asia/Ho_Chi_Minh`                | `Asia/Saigon`                                |
| `Europe/Kyiv`                     | `Europe/Kiev`                                |

Historiquement, ces changements de noms ont causé des problèmes pour les programmeur·euse·s, car la base de données Unicode [CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (une bibliothèque utilisée par les navigateurs pour fournir des identifiants et des données de fuseau horaire) ne suivait pas les renommages de l'IANA pour des [raisons de stabilité <sup>(angl.)</sup>](https://unicode.org/reports/tr35/#Time_Zone_Identifiers). En conséquence, certains navigateurs comme Chrome et Safari ont signalé des identifiants obsolètes de la CLDR, tandis que d'autres navigateurs comme Firefox ont remplacé les valeurs par défaut de la CLDR et ont signalé les identifiants principaux à jour.

Avec l'introduction de `Temporal`, ce comportement est désormais davantage standardisé&nbsp;:

- [Les données CLDR <sup>(angl.)</sup>](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) incluent désormais un attribut `"_iana"` qui indique l'identifiant le plus à jour si l'ancien identifiant stable a été renommé. Les navigateurs peuvent utiliser ce nouvel attribut pour fournir des identifiants à jour aux appelant·e·s.
- Les identifiants de fuseau horaire fournis par le·la programmeur·euse ne seront jamais remplacés par un alias. Par exemple, si l'appelant·e fournit `Asia/Calcutta` ou `Asia/Kolkata` comme identifiant à {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, alors le même identifiant est retourné dans l'instance résultante {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}. Notez que la casse des sorties est normalisée pour correspondre à l'IANA, donc `ASIA/calCuTTa` en entrée génère un {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} de `Asia/Calcutta` en sortie.
- Lorsque l'identifiant de fuseau horaire n'est pas fourni par l'appelant·e mais provient du système lui-même (par exemple, lors de l'utilisation de {{JSxRef("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), les identifiants modernes sont retournés dans tous les navigateurs. Pour les changements de nom de ville, il y a un délai de deux ans avant que ces API d'identifiant fourni par le système exposent le nouveau nom, laissant ainsi le temps aux autres composants (comme un serveur Node) de mettre à jour leurs copies de la base de données IANA pour reconnaître le nouveau nom.

On notera que l'attribution des identifiants principaux préserve le code pays&nbsp;: par exemple, la base de données IANA enregistre `Atlantic/Reykjavik` comme un alias pour `Africa/Abidjan`, mais comme ils correspondent à des pays différents (Islande et Côte d'Ivoire, respectivement), ils sont traités comme des identifiants principaux distincts.

Cette standardisation s'applique également en dehors de `Temporal`. Par exemple, l'option `timeZone` retournée par {{JSxRef("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} n'est jamais remplacée par un alias, bien que les navigateurs aient traditionnellement canonisé ces identifiants avant la standardisation par Temporal. En revanche, {{JSxRef("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} et {{JSxRef("Intl.supportedValuesOf()")}} (option `timeZone`) retourneront l'identifiant le plus à jour, tandis que certains navigateurs retournaient auparavant l'ancien identifiant non principal.

### Format RFC 9557

Les objets `ZonedDateTime` peuvent être sérialisés et analysés en utilisant le format [RFC 9557 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc9557), une extension du format [ISO 8601 / RFC 3339 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc3339). La chaîne de caractères a la forme suivante (les espaces ne sont là que pour la lisibilité et ne doivent pas être présents dans la chaîne de caractères réelle)&nbsp;:

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Soit un nombre à quatre chiffres, soit un nombre à six chiffres avec un signe `+` ou `-`.
- `MM`
  - : Un nombre à deux chiffres de `01` à `12`.
- `DD`
  - : Un nombre à deux chiffres de `01` à `31`. Les composants `YYYY`, `MM` et `DD` peuvent être séparés par `-` ou rien.
- `T` {{Optional_Inline}}
  - : Un séparateur de date et d'heure, qui peut être `T`, `t` ou un espace. Présent si et seulement si `HH` est présent.
- `HH` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `00` à `23`. Par défaut `00`.
- `mm` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `00` à `59`. Par défaut `00`.
- `ss.sssssssss` {{Optional_Inline}}
  - : Un nombre à deux chiffres de `00` à `59`. Peut être suivi optionnellement d'un `.` ou `,` et d'un à neuf chiffres. Par défaut `00`. Les composants `HH`, `mm` et `ss` peuvent être séparés par `:` ou rien. Vous pouvez omettre soit `ss` seul, soit `ss` et `mm`, donc l'heure peut être sous trois formes&nbsp;: `HH`, `HH:mm` ou `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{Optional_Inline}}
  - : Soit le désignateur UTC `Z` ou `z`, soit un décalage par rapport à l'UTC sous la forme `+` ou `-` suivi du même format que le composant heure. Notez que la précision sous la minute (`:ss.sssssssss`) peut ne pas être prise en charge par d'autres systèmes, et est acceptée mais jamais produite. Si elle est omise, le décalage est dérivé de l'identifiant de fuseau horaire. Si elle est présente, l'heure doit également être fournie. `Z` n'est pas identique à `+00:00`&nbsp;: la première signifie que l'heure est donnée sous forme UTC indépendamment de l'identifiant de fuseau horaire, tandis que la seconde signifie que l'heure est donnée en heure locale qui se trouve être UTC+0, et sera validée par rapport à l'identifiant de fuseau horaire avec [l'option `offset`](#ambiguïté_du_décalage).
- `[time_zone_id]`
  - : Remplacez `time_zone_id` par l'identifiant de fuseau horaire (nommé ou décalé) comme décrit ci-dessus. Peut avoir un _drapeau critique_ en préfixant l'identifiant avec `!`&nbsp;: par exemple, `[!America/New_York]`. Ce drapeau indique généralement aux autres systèmes qu'il ne peut pas être ignoré s'ils ne le prennent pas en charge. Notez qu'il est requis pour `Temporal.ZonedDateTime.from()`&nbsp;: l'omission entraîne une `RangeError`. Si vous souhaitez analyser des chaînes de caractères ISO 8601 / RFC 3339 sans annotations d'identifiant de fuseau horaire, utilisez plutôt {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `[u-ca=calendar_id]` {{Optional_Inline}}
  - : Remplacez `calendar_id` par le calendrier à utiliser. Voir [`Intl.supportedValuesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#types_de_calendriers_pris_en_charge) pour une liste des types de calendriers couramment pris en charge. Par défaut `[u-ca=iso8601]`. Peut avoir un _drapeau critique_ en préfixant la clé avec `!`&nbsp;: par exemple, `[!u-ca=iso8601]`. Ce drapeau indique généralement aux autres systèmes qu'il ne peut pas être ignoré s'ils ne le prennent pas en charge. L'analyseur `Temporal` lèvera une erreur si les annotations contiennent deux ou plusieurs annotations de calendrier et que l'une d'elles est critique. Notez que le `YYYY-MM-DD` est toujours interprété comme une date de calendrier ISO 8601 puis converti dans le calendrier défini.

En tant qu'entrée, les autres annotations au format `[clé=valeur]` sont ignorées, et elles ne doivent pas avoir le drapeau critique.

Lors de la sérialisation, vous pouvez configurer les chiffres fractionnaires des secondes, décider d'afficher le décalage/l'identifiant de fuseau horaire/l'identifiant de calendrier, et décider d'ajouter un drapeau critique pour les annotations.

### Ambiguïté et écarts lors du passage de l'heure locale à l'UTC

Étant donné un fuseau horaire, la conversion de l'UTC vers l'heure locale est simple&nbsp;: vous obtenez d'abord le décalage en utilisant le nom du fuseau horaire et l'instant, puis vous ajoutez le décalage à l'instant. L'inverse n'est pas vrai&nbsp;: la conversion de l'heure locale vers l'UTC, sans décalage explicite, est ambiguë, car une heure locale peut correspondre à zéro, une ou plusieurs heures UTC. Considérez la cause la plus courante&nbsp;: les transitions d'heure d'été. Prenons New York comme exemple. Son décalage standard est UTC-5, mais pendant l'heure d'été, toutes les horloges sont avancées d'une heure, donc le décalage devient UTC-4. Aux États-Unis, les transitions ont lieu à 2h00 heure locale, donc considérez ces deux jours de transition&nbsp;:

| Heure UTC            | Heure de New York         |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Comme vous pouvez le voir, en mars, une heure a disparu de l'heure locale, et en novembre, nous avons deux heures qui ont la même heure affichée. Supposons que nous ayons stocké un `PlainDateTime` qui indique «&nbsp;2024-03-10T02:05:00&nbsp;», et que nous voulions l'interpréter dans le fuseau horaire `America/New_York`, il n'y aura aucune heure qui y correspond, tandis qu'un `PlainDateTime` qui indique «&nbsp;2024-11-03T01:05:00&nbsp;» peut correspondre à deux instants différents.

Lors de la construction d'un `ZonedDateTime` à partir d'une heure locale (en utilisant {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{JSxRef("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), le comportement pour l'ambiguïté et les écarts se configure avec l'option `disambiguation`&nbsp;:

- `earlier`
  - : S'il y a deux instants possibles, choisir le plus tôt. S'il y a un écart, reculer de la durée de l'écart.
- `later`
  - : S'il y a deux instants possibles, choisir le plus tard. S'il y a un écart, avancer de la durée de l'écart.
- `compatible` (par défaut)
  - : Même comportement que {{JSxRef("Date")}}&nbsp;: utiliser `later` pour les écarts et `earlier` pour les ambiguïtés.
- `reject`
  - : Lever une `RangeError` chaque fois qu'il y a une ambiguïté ou un écart.

Il existe plusieurs cas où il n'y a pas d'ambiguïté lors de la construction d'un `ZonedDateTime`&nbsp;:

- Si l'heure est définie en UTC en utilisant le décalage `Z`.
- Si le décalage est explicitement fourni et utilisé (voir ci-dessous).

### Ambiguïté du décalage

Nous avons déjà montré comment l'interprétation d'une heure locale dans un fuseau horaire peut prêter à confusion si aucun décalage n'est explicitement indiqué. Cependant, si vous fournissez un décalage explicite, un autre conflit apparaît&nbsp;: celui entre le décalage tel qu'il est défini et celui calculé à partir du fuseau horaire et de l'heure locale. TIl s'agit d'un problème inévitable dans la réalité&nbsp;: si vous enregistrez une heure dans le futur, avec un décalage anticipé, il se peut que, d'ici là, la définition du fuseau horaire ait changé pour des raisons politiques. Par exemple, supposons qu'en 2018, nous ayons défini un rappel à l'heure `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (qui correspond à l'heure d'été&nbsp;; le Brésil se trouve dans l'hémisphère sud, il passe donc à l'heure d'été en octobre et en sort en février). Mais avant que ce moment n'arrive, début 2019, le Brésil décide de ne plus appliquer l'heure d'été, de sorte que le décalage réel devient `-03:00`. Le rappel doit-il désormais se déclencher à midi (en conservant l'heure locale), ou doit-il se déclencher à 11h (en conservant l'heure exacte)&nbsp;?

Pour qu'une ambiguïté de décalage existe, une chaîne de caractères d'horodatage doit être analysée à l'aide de règles de la base de données des fuseaux horaires de l'IANA différentes de celles utilisées lors de la génération initiale de l'horodatage. Cela ne se produira jamais lorsque les horodatages sont générés au cours de la même exécution d'un programme JavaScript, car la spécification ECMAScript exige que les règles de la base de données des fuseaux horaires de l'IANA restent cohérentes pendant toute la durée de vie d'un programme JavaScript.

Cependant, une ambiguïté de décalage peut exister lorsqu'un programme JavaScript analyse des horodatages qui ont été stockés précédemment, comme dans l'exemple `America/Sao_Paulo` ci-dessus, et que la base de données des fuseaux horaires de l'IANA a été mise à jour depuis la génération initiale de l'horodatage. Cela peut également se produire lors de la communication d'horodatages entre ordinateurs (ou, rarement, entre différents logiciels sur le même ordinateur&nbsp;!) utilisant différentes versions de la base de données des fuseaux horaires de l'IANA. La base de données des fuseaux horaires de l'IANA dispose également d'options de compilation (par exemple, utiliser ou non les règles obsolètes dans `backzone`) qui peuvent provoquer une ambiguïté de décalage lors de la communication d'horodatages entre ordinateurs utilisant différents logiciels, même lorsque la version de la base de données des fuseaux horaires de l'IANA est la même.

Les ambiguïtés de décalage sont rares et ne concernent presque toujours que les horodatages antérieurs à 1970 ou ceux situés plusieurs mois ou années dans le futur. Toutefois, lorsque ce problème survient, une exception `RangeError` est levée par défaut. Lors de la création d'un objet `ZonedDateTime` à l'aide de {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} ou lors de sa mise à jour à l'aide de la méthode {{JSxRef("Temporal/ZonedDateTime/with", "with()")}} vous pouvez éviter cette exception en utilisant l'option `offset` pour déterminer si l'offset ou l'identifiant de fuseau horaire «&nbsp;l'emporte&nbsp;»&nbsp;:

- `use`
  - : Utilise le décalage pour calculer l'heure exacte. Cette option «&nbsp;utilise&nbsp;» le décalage pour déterminer l'instant auquel se réfère la chaîne de caractères de la date et de l'heure, même si le décalage à cet instant a changé. L'identifiant de fuseau horaire est toujours utilisé pour déduire le décalage (éventuellement mis à jour) et utiliser ce décalage pour convertir l'heure exacte en heure locale. Dans l'exemple `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` ci-dessus, cette option ferait en sorte que le rappel se déclenche à 11h, heure locale.
- `ignore`
  - : Utilise l'identifiant du fuseau horaire pour recalculer le décalage, en ignorant celui défini dans la chaîne de caractères. Cette option conserve l'heure locale telle qu'elle avait été calculée initialement lors de l'enregistrement de l'heure, mais peut aboutir à un instant différent. Notez qu'en ignorant le décalage, la même [ambiguïté d'interprétation de l'heure locale](#ambiguïté_et_écarts_lors_du_passage_de_lheure_locale_à_lutc) peut se produire, ce qui est résolu en utilisant l'option `disambiguation`. Dans l'exemple `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` ci-dessus, cette option ferait en sorte que le rappel se déclenche à 12h, heure locale.
- `reject`
  - : Lève une erreur `RangeError` chaque fois qu'il y a un conflit entre le décalage et l'identifiant du fuseau horaire. C'est le comportement par défaut de {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Utilise le décalage s'il est valide, sinon, calcule le décalage à partir de l'identifiant du fuseau horaire. Il s'agit du comportement par défaut de {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (voir cette méthode pour plus de détails). Cela diffère de `ignore` car, en cas d'ambiguïté concernant l'heure locale, c'est le décalage qui est utilisé pour la résoudre plutôt que l'option `disambiguation`.

Si vous savez à l'avance comment vous souhaitez gérer l'ambiguïté liée au décalage horaire, pensez à utiliser l'option `offset` pour éviter les exceptions levées par défaut. Par exemple, une application de calendrier souhaitera probablement que l'identifiant de fuseau horaire «&nbsp;l'emporte&nbsp;» afin que les réunions récurrentes s'affichent à l'heure locale la plus récente pour ce fuseau horaire, dans ce cas `offset: "ignore"` est approprié. En revanche, une application de planification de tâches qui exécute une tâche exactement dans 3 heures devrait probablement choisir `offset: "use"`, car les modifications apportées aux règles de fuseau horaire ne devraient pas changer la signification de «&nbsp;dans 3 heures&nbsp;».

Dans certains cas, il se peut que vous ne sachiez pas quelle option `offset` est la bonne sans demander confirmation à l'utilisateur·ice. Dans ce cas, vous pouvez intercepter l'exception `RangeError`, puis demander à l'utilisateur·ice quelle heure locale est la bonne, avant de réessayer l'analyse en utilisant une autre option `offset` correspondant au choix de l'utilisateur·ice.

Notez que le décalage `Z` n'est pas équivalent à `+00:00`. Le décalage `Z` signifie «&nbsp;l'heure UTC est connue, mais le décalage par rapport à l'heure locale est inconnu&nbsp;», conformément au [RFC 9557 <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Lorsque la chaînes de caractères de l'heure utilise le décalage `Z`, l'option `offset` est ignorée et le décalage est dérivé de l'identifiant du fuseau horaire. En revanche, le décalage `+00:00` est interprété comme un décalage horaire local qui correspond à UTC et est validé par rapport à l'identifiant du fuseau horaire.

> [!NOTE]
> Bien que {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}} accepte également une chaîne de caractères [RFC 9557](#format_rfc_9557) sous cette forme, il n'y a pas d'ambiguïté car elle ignore toujours l'identifiant de fuseau horaire et ne prend en compte que le décalage horaire.

## Constructeur

- {{JSxRef("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{Experimental_Inline}}
  - : Crée un nouvel objet `Temporal.ZonedDateTime` en fournissant directement les données sous-jacentes.

## Méthodes statiques

- {{JSxRef("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Retourne un nombre (-1, 0, ou 1) indiquant si la première valeur de date et d'heure précède, est la même que, ou suit la deuxième valeur de date et d'heure. Équivalent à la comparaison des {{JSxRef("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} des deux dates et heures.
- {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Crée un nouvel objet `Temporal.ZonedDateTime` à partir d'un autre objet `Temporal.ZonedDateTime`, d'un objet avec des propriétés de date, d'heure et de fuseau horaire, ou d'une chaîne de caractères [RFC 9557](#format_rfc_9557).

## Propriétés d'instance

Ces propriétés sont définies sur `Temporal.ZonedDateTime.prototype` et partagées par toutes les instances de `Temporal.ZonedDateTime`.

- {{JSxRef("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Retourne une chaîne de caractères représentant le [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers) utilisé pour interpréter les dates internes ISO 8601.
- {{JSxRef("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Temporal.ZonedDateTime`, la valeur initiale est le constructeur {{JSxRef("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}.
- {{JSxRef("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Retourne un entier positif représentant l'index du jour dans le mois de cette date, basé sur 1, ce qui correspond au numéro de jour que vous verriez sur un calendrier. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Généralement commence à 1 et est continu, mais pas toujours.
- {{JSxRef("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Retourne un entier positif représentant l'index du jour dans la semaine de cette date, basé sur 1. Les jours de la semaine sont numérotés séquentiellement de `1` à {{JSxRef("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}, chaque numéro correspondant à son nom. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). 1 représente généralement le lundi dans le calendrier, même lorsque les locales utilisant le calendrier peuvent considérer un jour différent comme le premier jour de la semaine (voir {{JSxRef("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{JSxRef("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Retourne un entier positif représentant l'index du jour dans l'année de cette date, basé sur 1. Le premier jour de cette année est `1`, et le dernier jour est le {{JSxRef("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Retourne un entier positif représentant le nombre de jours dans le mois de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Retourne un entier positif représentant le nombre de jours dans la semaine de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est toujours 7, mais dans d'autres systèmes de calendrier, cela peut varier d'une semaine à l'autre.
- {{JSxRef("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Retourne un entier positif représentant le nombre de jours dans l'année de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est 365, ou 366 dans une année bissextile.
- {{JSxRef("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Retourne un entier représentant le nombre de millisecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC) jusqu'à cet instant. Équivaut à diviser `epochNanoseconds` par `1e6` et à arrondir le résultat.
- {{JSxRef("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Retourne un {{JSxRef("BigInt")}} représentant le nombre de nanosecondes écoulées depuis l'époque Unix (minuit au début du 1er janvier 1970, UTC) jusqu'à cet instant.
- {{JSxRef("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Retourne une chaîne de caractères en minuscules spécifique au calendrier représentant l'ère de cette date, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier grégorien, c'est soit `"ce"`, soit `"bce"`.
- {{JSxRef("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Retourne un entier qui n'est pas négatif représentant l'année de cette date dans l'ère, ou `undefined` si le calendrier n'utilise pas d'ères (par exemple, ISO 8601). L'index de l'année commence généralement à 1 (plus courant) ou 0, et les années dans une ère peuvent diminuer avec le temps (par exemple, BCE grégorien). `era` et `eraYear` identifient ensemble de manière unique une année dans un calendrier, de la même manière que `year`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Retourne un entier de 0 à 23 représentant la composante heure de cette date.
- {{JSxRef("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Retourne un entier positif représentant le nombre d'heures dans le jour de cette date dans le fuseau horaire. Il peut être supérieur ou inférieur à 24 en cas de changements de décalage tels que l'heure d'été.
- {{JSxRef("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Retourne un booléen indiquant si cette date se trouve dans une année bissextile. Une année bissextile est une année qui a plus de jours (en raison d'un jour ou d'un mois intercalaire) qu'une année commune. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers).
- {{JSxRef("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Retourne un entier de 0 à 999 représentant la composante microseconde (10<sup>-6</sup> seconde) de cette heure.
- {{JSxRef("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Retourne un entier de 0 à 999 représentant la composante milliseconde (10<sup>-3</sup> seconde) de cette heure.
- {{JSxRef("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Retourne un entier de 0 à 59 représentant la composante minute de cette heure.
- {{JSxRef("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Retourne un entier positif représentant l'index du mois dans l'année de cette date, basé sur 1. Le premier mois de cette année est `1`, et le dernier mois est le {{JSxRef("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Notez que contrairement à {{JSxRef("Date.prototype.getMonth()")}}, l'index est basé sur 1. Si le calendrier a des mois intercalaires, alors le mois avec le même {{JSxRef("Temporal/ZonedDateTime/monthCode", "monthCode")}} peut avoir des index de `month` différents pour différentes années.
- {{JSxRef("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Retourne une chaîne de caractères spécifique au calendrier représentant le mois de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Habituellement, c'est `M` suivi d'un numéro de mois à deux chiffres. Pour les mois intercalaires, c'est le code du mois précédent suivi de `L`. Si le mois intercalaire est le premier mois de l'année, le code est `M00L`.
- {{JSxRef("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Retourne un entier positif représentant le nombre de mois dans l'année de cette date. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Pour le calendrier ISO 8601, c'est toujours 12, mais dans d'autres systèmes de calendrier, cela peut varier.
- {{JSxRef("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Retourne un entier de 0 à 999 représentant la composante nanoseconde (10<sup>-9</sup> seconde) de cette heure.
- {{JSxRef("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Retourne une chaîne de caractères représentant le [décalage](#fuseaux_horaires_et_décalages) utilisé pour interpréter l'instant interne, sous la forme `±HH:mm` (ou `±HH:mm:ss.sssssssss` avec autant de précision subminute que nécessaire).
- {{JSxRef("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Retourne un entier représentant le [décalage](#fuseaux_horaires_et_décalages) utilisé pour interpréter l'instant interne, en nombre de nanosecondes (positif ou négatif).
- {{JSxRef("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Retourne un entier de 0 à 59 représentant la composante seconde de cette heure.
- {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Retourne une chaîne de caractères représentant [l'identifiant de fuseau horaire](#fuseaux_horaires_et_décalages) utilisé pour interpréter l'instant interne. Il utilise la même chaîne de caractères utilisée lors de la construction de l'objet `Temporal.ZonedDateTime`, qui est soit un nom de fuseau horaire IANA, soit un décalage fixe.
- {{JSxRef("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Retourne un entier positif représentant l'index de la semaine basé sur 1 dans l'année de cette date, ou `undefined` si le calendrier n'a pas de système de semaine bien défini. La première semaine de l'année est `1`. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Notez que pour ISO 8601, les premiers et derniers jours de l'année peuvent être attribués à la dernière semaine de l'année précédente ou à la première semaine de l'année suivante.
- {{JSxRef("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Retourne un entier représentant le nombre d'années de cette date par rapport au début d'une année d'époque spécifique au calendrier. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Habituellement, l'année 1 est soit la première année de la dernière ère, soit l'année ISO 8601 `0001`. Si l'époque est au milieu de l'année, cette année aura la même valeur avant et après la date de début de l'ère.
- {{JSxRef("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Retourne un entier représentant l'année à associer à la {{JSxRef("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} de cette date, ou `undefined` si le calendrier n'a pas de système de semaine bien défini. Dépend du [calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers). Habituellement, c'est l'année de la date, mais pour ISO 8601, les premiers et derniers jours de l'année peuvent être attribués à la dernière semaine de l'année précédente ou à la première semaine de l'année suivante, ce qui peut entraîner une différence de 1 pour `yearOfWeek`.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal.ZonedDateTime"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure avancée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Retourne `true` si cette date et heure est équivalente en valeur à une autre date et heure (sous une forme convertible par {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}), sinon `false`. Elles sont comparées à la fois par leurs valeurs d'instant, leurs fuseaux horaires et leurs calendriers, donc deux dates et heures de calendriers ou fuseaux horaires différents peuvent être considérées comme égales par {{JSxRef("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} mais pas par `equals()`.
- {{JSxRef("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Retourne un objet `Temporal.ZonedDateTime` représentant le premier instant après ou avant cet instant auquel le décalage UTC du fuseau horaire change, ou `null` s'il n'y a pas de telle transition. Cela est utile pour connaître les règles de décalage d'un fuseau horaire, comme son schéma d'heure d'été.
- {{JSxRef("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure arrondie à l'unité donnée.
- {{JSxRef("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre une autre date et heure (sous une forme convertible par {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}) et cette date et heure. La durée est positive si l'autre date et heure est avant cette date et heure, et négative si elle est après.
- {{JSxRef("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Retourne un objet `Temporal.ZonedDateTime` représentant le premier instant de cette date dans le fuseau horaire. Il a généralement une heure de `00:00:00`, mais peut être différent si minuit n'existe pas en raison des changements de décalage, auquel cas la première heure existante est retournée.
- {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure reculée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{JSxRef("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Instant")}} représentant l'instant de cette date et heure.
- {{JSxRef("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant cette date et heure dans le même [format RFC 9557](#format_rfc_9557) que l'appel à {{JSxRef("Temporal/ZonedDateTime/toString", "toString()")}}. Destiné à être appelé implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères représentant cette date et heure de manière sensible à la langue.
- {{JSxRef("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainDate")}} représentant la partie date de cette date et heure.
- {{JSxRef("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainDateTime")}} représentant les parties date et heure de cette date et heure. Seules les informations de fuseau horaire sont supprimées.
- {{JSxRef("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.PlainTime")}} représentant la partie heure de cette date et heure.
- {{JSxRef("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant cette date et heure dans le [format RFC 9557](#format_rfc_9557).
- {{JSxRef("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Retourne un nouvel objet {{JSxRef("Temporal.Duration")}} représentant la durée entre cette date et heure et une autre date et heure (sous une forme convertible par {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}). La durée est positive si l'autre date et heure est après cette date et heure, et négative si elle est avant.
- {{JSxRef("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.ZonedDateTime` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contrainte_de_primitive) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.
- {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure avec certains champs remplacés par de nouvelles valeurs.
- {{JSxRef("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure interprétée dans le nouveau système de calendrier.
- {{JSxRef("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure avec la partie heure entièrement remplacée par la nouvelle heure (sous une forme convertible par {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}})
- {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : Retourne un nouvel objet `Temporal.ZonedDateTime` représentant le même instant que cette date et heure mais dans le nouveau fuseau horaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- L'objet {{JSxRef("Temporal.Instant")}}
- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.PlainTime")}}
