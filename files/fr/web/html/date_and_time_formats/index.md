---
title: Formats de date et d'heure utilisés en HTML
slug: Web/HTML/Date_and_time_formats
---

{{HTMLSidebar}}

Certains éléments HTML manipulent des valeurs temporelles pour des dates ou des heures. Les formats utilisés pour les chaînes de caractères qui définissent ces valeurs sont décrits dans cet article. Les éléments qui utilisent ces données sont notamment les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) qui permettent de choisir une date, une heure ou les deux, les éléments [`<ins>`](/fr/docs/Web/HTML/Element/ins) et [`<del>`](/fr/docs/Web/HTML/Element/del) dont l'attribut [`ins`](/fr/docs/Web/HTML/Element/ins#attr-datetime) indique la date (ou la date et l'heure) à laquelle l'ajout ou la suppression de contenu a eu lieu.

Pour les éléments `<input>`, voici les différents type (cf. [`input`](/fr/docs/Web/HTML/Element/Input#attr-type)) pour lesquels l'attribut [`value`](/fr/docs/Web/HTML/Global_attributes#attr-value) contient une chaîne de caractères représentant une date ou une heure :

- [`date`](/fr/docs/Web/HTML/Element/Input/date)
- [`datetime`](/fr/docs/Web/HTML/Element/Input/datetime) {{deprecated_inline}}
- [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local)
- [`month`](/fr/docs/Web/HTML/Element/Input/month)
- [`time`](/fr/docs/Web/HTML/Element/Input/time)
- [`week`](/fr/docs/Web/HTML/Element/Input/week)

## Exemples

Avant de détailler plus, voyons quelques exemples de chaînes de caractères utilisées en HTML et qui représentent des valeurs temporelles.

<table class="standard-table">
  <caption>
    Exemple de chaînes de caractères utilisées en HTML pour représenter des
    dates et des heures
  </caption>
  <thead>
    <tr>
      <th scope="col">Chaîne de caractères</th>
      <th colspan="2" scope="col">Date/heure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07</code></td>
      <td>7 juin 2005</td>
      <td>
        <a href="/fr/docs/Web/HTML/Date_and_time_formats#date_strings"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45</code></td>
      <td>08h45m (le matin)</td>
      <td>
        <a href="/fr/docs/Web/HTML/Date_and_time_formats#time_strings"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>08h45m25s</td>
      <td>
        <a href="/fr/docs/Web/HTML/Date_and_time_formats#time_strings"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>03h40 (du matin), le 04 août 33</td>
      <td>
        <a
          href="/fr/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1977-04-01T14:00:30</code></td>
      <td>30 secondes après 14h00, le premier avril 1977</td>
      <td>
        <a
          href="/fr/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00Z</code></td>
      <td>Minuit, UTC, le 1er janvier 1901</td>
      <td>
        <a
          href="/fr/docs/Web/HTML/Date_and_time_formats#global_date_and_time_strings"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00:01-04:00</code></td>
      <td>
        Minuit passé d'une seconde sur l'heure de l'Est (EST), le 1er janvier
        1901
      </td>
      <td>
        <a
          href="/fr/docs/Web/HTML/Date_and_time_formats#global_date_and_time_strings"
          >[détails]</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Notions essentielles

Avant de s'intéresser aux différents formats pour la représentation textuelle des valeurs temporelles en HTML, commençons par décrire comment ces valeurs sont définies formellement. HTML utilise une variation du standard [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601) pour les chaînes de caractères représentant les dates et les heures. Il est toujours utile de vérifier que le format utilisé est compatible avec HTML, car la spécification HTML utilise des algorithmes pour analyser ces chaînes qui sont plus précis que le standard ISO 8601 (il peut donc y avoir quelques fines différences).

### Jeu de caractères

En HTML, les chaînes qui représentent des dates et des heures manipulent uniquement des caractères [ASCII](https://fr.wikipedia.org/wiki/ASCII).

### Numérotation des années

La spécification HTML indique que les années doivent être exprimées selon le [calendrier grégorien](https://fr.wikipedia.org/wiki/Calendrier_grégorien). Bien que les interfaces utilisateur permettent éventuellement de saisir des dates grâce à d'autres calendriers, la valeur sous-jacente est toujours représentée à l'aide du calendrier grégorien.

Bien que le calendrier grégorien ait été créé en 1582 afin de remplacer le calendrier julien, la notation grégorienne est « étendue » en HTML jusqu'à 1 après J.C. Aussi, si vous manipulez des dates antérieures à 1582, assurez-vous qu'elles soient bien exprimées selon le calendrier grégorien.

En HTML, les années sont toujours écrites avec au moins 4 chiffres. Aussi, les années antérieures à l'an 1000 sont complétées avec des zéros : l'an 72 est donc écrit `0072`. Les années antérieures à l'an 1 ne sont pas prises en charge par HTML.

Une année est normalement constituée de 365 jours, sauf pendant les **[années bissextiles](#leap_years)**.

#### Années bissextiles

Une année bissextile est une année dont le numéro est :

- Divisible par 400 ou,
- Divisible par 4 mais pas par 100

Bien qu'une année calendaire s'étende sur 365 jours, la Terre met environ 365,2422 jours avant d'effectuer une orbite complète autour du soleil. Les années bissextiles permettent d'ajuster le calendrier et de le synchroniser avec la position de la planète le long de l'orbite. Ajouter un jour tous les 4 ans (environ) permet d'avoir une année moyenne longue de 365,25 jours, ce qui est relativement correct.

En ajustant l'algorithme avec les contraintes ci-avant (divisible par 400 ou divisible par 4 mais pas par 100), on s'approche plus précisément du nombre correct de jours (365,2425). Des secondes intercalaires sont parfois ajoutées au calendrier afin de compenser les trois millièmes restant et le ralentissement naturel de la rotation de la Terre.

Le deuxième mois de l'année (février) possède 28 jours pendant les années non-bissextiles et 29 jours pendant les années bissextiles.

### Mois de l'année

Une année comporte 12 mois, numérotés de 1 à 12. Les valeurs des mois sont toujours représentées par une chaîne de caractères se composant de deux chiffres : des valeurs entre `01` et `12`. Voir le tableau ci-après pour les numéros des mois et le nombre de jours correspondant.

### Jours du mois

Les mois numérotés 1, 3, 5, 7, 8, 10 et 12 possèdent 31 jours. Les mois 4, 6, 9 et 11 possèdent 30 jours. Le deuxième mois, février, possède 28 jours sauf pendant les années bissextiles où il possède 29 jours. Le tableau ci-après détaille les mois et leurs noms, ainsi que leur durée en jours.

<table class="standard-table">
  <caption>
    Les mois de l'année et leur durée en jours
  </caption>
  <thead>
    <tr>
      <th scope="row">Numéro du mois</th>
      <th scope="col">Nom (en français)</th>
      <th scope="col">Durée du mois (en nombre de jours)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>Janvier</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">02</th>
      <td>Février</td>
      <td>28 (29 pour les années bissextiles)</td>
    </tr>
    <tr>
      <th scope="row">03</th>
      <td>Mars</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">04</th>
      <td>Avril</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">05</th>
      <td>Mai</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">06</th>
      <td>Juin</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">07</th>
      <td>Juillet</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">o8</th>
      <td>Août</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">09</th>
      <td>Septembre</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Octobre</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>Novembre</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>Décembre</td>
      <td>31</td>
    </tr>
  </tbody>
</table>

## Représentation des semaines

Une chaîne de caractères représentant une semaine correspondra à une semaine d'une année donnée. Aussi, une chaîne de caractères **valide** pour représenter une semaine se compose de 4 chiffres représentant l'année, suivis d'un tiret ("`-`" ou U+002D), suivi de la lettre majuscule "`W`" (U+0057), suivie d'un numéro de semaine sur deux chiffres.

Le numéro de la semaine est une chaîne de caractères, avec deux chiffres, entre `01` et `53`. Chaque semaine commence un lundi et se termine un dimanche. Il est ainsi possible que les premiers jours de janvier fassent partie de la dernière semaine de l'année précédente et que les derniers jours fassent partie de la première semaine de l'année suivante. La première semaine de l'année est celle qui contient _le premier jeudi de l'année_. Ainsi, le premier jeudi de 1953 était le 1er janvier et la semaine contenant ce jour est donc considérée la première semaine de l'année. Ainsi, le 30 décembre 1952 appartient à la semaine `1953-W01`.

Une année aura 53 semaines si :

- Le premier jour de l'année calendaire (le premier janvier) est un jeudi **ou**
- Le premier jour de l'année calendaire (le premier janvier) est un mercredi et que l'année est une [année bissextile](#leap_years).

Les autres années contiennent 52 semaines.

| Chaîne de caractères | Semaine et année (intervalle de dates)                                      |
| -------------------- | --------------------------------------------------------------------------- |
| `2001-W37`           | Semaine 37 de l'année 2001 (entre le 10 et le 16 septembre 2001)            |
| `1953-W01`           | Semaine 1 de l'année 1953 (entre le 29 décembre 1952 et le 4 janvier 1953)  |
| `1948-W53`           | Semaine 53 de l'année 1948 (entre le 27 décembre 1948 et le 2 janvier 1949) |
| `1949-W01`           | Semaine 1 de l'année 1949 (entre le 3 janvier et le 9 janvier 1949)         |
| `0531-W16`           | Semaine 16 de l'année 531 (entre le 13 avril et le 19 avril 531)            |
| `0042-W04`           | Semaine 4 de l'année 42 (entre le 21 et le 27 janvier 42)                   |

On notera que les deux composantes pour l'année et pour la semaine sont complétées avec des zéros à gauche afin que l'année soit exprimée sur 4 chiffres et que la semaine soit exprimée sur 2 chiffres.

## Représentation des mois

Une chaîne de caractères pour un mois représente un mois d'une année donnée (plutôt qu'un mois «&nbsp;générique&nbsp;»). Aussi, on ne représentera pas simplement le mois de janvier mais le mois de janvier de l'année 1972.

Une chaîne de caractères représentant un mois est valide si elle commence par un numéro d'année valide (une chaîne de caractères composée de quatre chiffres), suivie d'un tiret ("`-`", ou U+002D), suivi d'un nombre sur deux chiffres où `01` représente janvier et où `12` représente décembre.

| Chaîne de caractères | Le mois et l'année                    |
| -------------------- | ------------------------------------- |
| `17310-09`           | Le mois de septembre de l'année 17310 |
| `2019-01`            | Le mois de janvier de l'année 2019    |
| `1993-11`            | Le mois de novembre de l'année 1993   |
| `0571-04`            | Le mois d'avril de l'année 571        |
| `0001-07`            | Le mois de juillet de l'an 1          |

On notera que les années sont exprimées sur au moins 4 chiffres et que les années antérieures à 1000 sont préfixées de 0.

## Représentation des dates

Une chaîne de caractères représentant une date est valide si elle contient : une année (cf. ci-avant) suivie d'un tiret, suivi d'un mois, suivi d'un tiret ("`-`" ou U+002D) suivi du numéro du jour dans le mois sur deux chiffres.

| Chaîne de caractères | Date complète     |
| -------------------- | ----------------- |
| `1993-11-01`         | 1er novembre 1993 |
| `1066-10-14`         | 14 octobre 1066   |
| `0571-04-22`         | 22 avril 571      |
| `0062-02-05`         | 5 février 62      |

## Représentation des heures

Une chaîne de caractères représentant une heure peut décrire différentes précisions : minute, seconde ou milliseconde. Il n'est pas possible d'indiquer uniquement l'heure ou les minutes. Une chaîne valide se compose _a minima_ d'une valeur sur deux chiffres représentant une heure, suivi de deux-points ("`:`", U+003A) puis d'une valeur sur deux chiffres exprimant les minutes. La valeur des minutes peut ensuite être suivie d'un autre deux-points puis d'une valeur sur deux chiffres pour les secondes. Il est possible d'indiquer les millisecondes en ajoutant un point ("`.`", U+002E) après les secondes, suivi d'une valeur sur un, deux ou trois chiffres.

Voici quelques règles supplémentaires :

- L'heure est toujours exprimée selon une horloge sur 24 heures où `00` correspond à minuit et où `23` correspond à onze heures du soir. Aucune valeur en dehors de l'intervalle `00` - `23` n'est autorisée.
- La valeur représentant les minutes doit être composée de deux chiffres et être située entre `00` et `59`. Les valeurs en dehors de cet intervalle ne sont pas autorisées.
- Si les secondes ne sont pas exprimées, il ne faut pas que la valeur se termine par un deux-points (après les minutes).
- Si les secondes sont exprimées, leur nombre doit être entre `00` et `59`. Il n'est pas possible d'indiquer des secondes intercalaires à l'aide de valeurs telles que `60` ou `61`.
- Si le nombre de secondes est indiqué et que c'est un entier, il ne doit pas être suivi d'un point.
- Si les millisecondes sont indiquées, la valeur correspondante peut être composée d'un à trois chiffres.

| Chaîne de caractères | Heure                                            |
| -------------------- | ------------------------------------------------ |
| `00:00:30.75`        | Minuit passé de 30 secondes et 750 millisecondes |
| `12:15`              | Midi passé de quinze minutes                     |
| `13:44:25`           | 13 heures 44 et 25 secondes                      |

## Représentation des dates et heures locales

Une chaîne de caractères valide pour un élément de saisie [`datetime-local`](/fr/docs/Web/HTML/Element/Input/datetime-local) se compose d'une chaîne de caractères représentant une date, suivie de la lettre "`T`" ou d'une espace puis d'une chaîne de caractères représentant une heure. La représentation ne contient aucune information quant au fuseau horaire dont il est question et on présume que la valeur temporelle indiquée est relative au fuseau horaire de l'utilisateur.

Lorsqu'on définit la valeur de l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) d'un champ `<input>` de type `datetime-local`, la chaîne de caractères est normalisée. Les formes normalisées utilisent toujours la lettre T comme séparateur entre la date et l'heure. De plus, les formes normalisées utilisent toujours la forme la plus courte pour exprimer l'heure (les secondes sont omises si leur valeur est `:00`).

| Chaîne de caractères      | Version normalisée       | Date et heure correspondantes                                         |
| ------------------------- | ------------------------ | --------------------------------------------------------------------- |
| `1986-01-28T11:38:00.01`  | `1986-01-28T11:38:00.01` | 28 janvier 1986 à 11 heures et 38 minutes passées de 10 millisecondes |
| `1986-01-28 11:38:00.010` | `1986-01-28T11:38:00.01` | 28 janvier 1986 à 11 heures et 38 minutes passées de 10 millisecondes |
| `0170-07-31T22:00:00`     | `0170-07-31T22:00`       | 31 juillet 170 à 22 heures                                            |

1. On notera qu'après la normalisation, on obtient la même chaîne que sur l'exemple précédent : l'espace séparateur a été remplacé par un `"T"` et le zéro de terminaison a été supprimé pour raccourcir la chaîne de l'heure.
2. On notera que la forme normalisée de cette date ne contient pas l'expression des secondes.

## Représentation des dates et heures universelles

Une valeur de date/heure universelle exprime la date et l'heure mais aussi le fuseau horaire de l'instant. Une chaîne de caractères représentant une telle valeur commence de la même façon qu'une chaîne de caractère représentant une date/heure locale, suivie d'une chaîne de caractères indiquant le décalage horaire.

### Chaîne de caractères exprimant le décalage horaire

La chaîne de caractères qui décrit le décalage horaire contient un décalage positif d'heures et de minutes, relativement à un fuseau de base. Il existe deux points de référence qui sont très proches sans être identiques :

- Pour les dates situées après la création du temps coordonné universel (UTC, [Coordinated Universal Time](https://fr.wikipedia.org/wiki/Coordinated_Universal_Time)) au début des années 60, le point de référence est indiqué avec `Z` et le décalage indique le décalage d'un fuseau horaire par rapport au méridien situé à la longitude 0° (méridien de Greenwich).
- Pour les dates antérieures à UTC, le point de référence est exprimé en [UT1](https://fr.wikipedia.org/wiki/UT1), qui correspond au temps solaire au méridien de longitude 0°.

La chaîne de caractères indiquant le décalage est directement ajoutée après la valeur pour la date et l'heure. Si la date et l'heure sont déjà exprimées relativement à UTC, on pourra simplement suffixer `"Z"`, sinon, on construira le complément de la façon suivante :

1. Un caractère indiquant le signe du décalage : le plus ("`+`" ou U+002B) pour les fuseaux situés à l'est du méridien ou le moins ("`-`" ou U+002D) pour les fuseaux situés à l'ouest.
2. Deux chiffres indiquant le nombre d'heures de décalage par rapport au méridien. Cette valeur doit être comprise entre `00` et `23`.
3. Deux-points ("`:`") (nécessaires uniquement si le décalage contient des minutes)
4. Deux chiffres indiquant les minutes de décalage. Cette valeur doit être comprise entre `00` et `59`.

Bien que ces règles permettent d'exprimer des fuseaux horaires entre -23:59 et +23:59, l'intervalle actuel des décalages horaires est -12:00 à +14:00 et il n'y a pas de fuseau horaire pour lequel le décalage en minutes est différent de `00`, `30` ou `45`. Cela peut en théorie évoluer à tout moment car les pays sont libres de modifier leur fuseau horaire quand ils le souhaitent.

| Chaîne de caractères          | Date/heure universelle                                                                                                    | Date/heure sur le méridien solaire                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `2005-06-07T00:00Z`           | 7 juin 2005 à minuit UTC                                                                                                  | 7 juin 2005 à minuit                                            |
| `1789-08-22T12:30:00.1-04:00` | 22 août 1789 à midi trente (passé d'un dixième de seconde) selon l'heure avancée de l'Est (_Eastern Daylight Time_ (EDT)) | 22 août 1789 à 16 heures trente passées d'un dixième de seconde |
| `3755-01-01 00:00+10:00`      | 1er janvier 3755 à minuit pour le fuseau AEST (_Australian Eastern Standard Time_)                                        | 31 décembre 3754 à 14h                                          |

## Voir aussi

- [`<input>`](/fr/docs/Web/HTML/Element/Input)
- Les éléments [`<ins>`](/fr/docs/Web/HTML/Element/ins) et [`<del>`](/fr/docs/Web/HTML/Element/del) qui possèdent l'attribut `datetime` qui permet de définir une date ou une date et une heure locales pour indiquer le moment où le contenu a été inséré ou supprimé
- [La spécification ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Le chapitre sur les nombres et les dates](/fr/docs/Web/JavaScript/Guide/Numbers_and_dates) dans le [Guide JavaScript](/fr/docs/Web/JavaScript/Guide)
- L'objet JavaScript [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
- L'objet [`Intl.DateTimeFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) qui permet de formater des dates et des heures pour une locale donnée
