---
title: Utiliser les formats de date et d'heure en HTML
short-title: Formats de date et d'heure
slug: Web/HTML/Guides/Date_and_time_formats
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Certains éléments HTML manipulent des valeurs temporelles pour des dates ou des heures. Les formats utilisés pour les chaînes de caractères qui définissent ces valeurs sont décrits dans cet article.

Les éléments qui utilisent ces données sont notamment les éléments {{HTMLElement("input")}} qui permettent de choisir une date, une heure ou les deux, les éléments {{HTMLElement("ins")}} et {{HTMLElement("del")}} dont l'attribut [`datetime`](/fr/docs/Web/HTML/Reference/Elements/ins#datetime) définit la date ou la date et l'heure à laquelle l'ajout ou la suppression de contenu a eu lieu.

Pour les éléments `<input>`, voici les différents type (cf. [`input`](/fr/docs/Web/HTML/Reference/Elements/input#type)) pour lesquels l'attribut [`value`](/fr/docs/Web/HTML/Reference/Global_attributes#value) contient une chaîne de caractères représentant une date ou une heure&nbsp;:

- [`date`](/fr/docs/Web/HTML/Reference/Elements/input/date)
- [`datetime-local`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`month`](/fr/docs/Web/HTML/Reference/Elements/input/month)
- [`time`](/fr/docs/Web/HTML/Reference/Elements/input/time)
- [`week`](/fr/docs/Web/HTML/Reference/Elements/input/week)

## Exemples

Avant de détailler plus, voyons quelques exemples de chaînes de caractères utilisées en HTML et qui représentent des valeurs temporelles.

<table class="standard-table">
  <caption>
    Exemple de chaînes de caractères HTML pour représenter des
    dates et des heures
  </caption>
  <thead>
    <tr>
      <th scope="col">Chaîne de caractères</th>
      <th colspan="2" scope="col">Date et/ou date et heure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07</code></td>
      <td>7 juin 2005</td>
      <td>
        <a href="#représentation_des_dates"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45</code></td>
      <td>08h45m (le matin)</td>
      <td>
        <a href="#représentation_des_heures"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>08h45m25s</td>
      <td>
        <a href="#représentation_des_heures"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>03h40 (du matin), le 04 août 33</td>
      <td>
        <a
          href="#représentation_des_dates_et_heures_locales"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1977-04-01T14:00:30</code></td>
      <td>30 secondes après 14h00, le premier avril 1977</td>
      <td>
        <a
          href="#représentation_des_dates_et_heures_locales"
          >[détails]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00Z</code></td>
      <td>Minuit, UTC, le 1er janvier 1901</td>
      <td>
        <a
          href="#représentation_des_dates_et_heures_universelles"
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
          href="#représentation_des_dates_et_heures_universelles"
          >[détails]</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Notions essentielles

Avant d'examiner les différents formats de chaînes de caractères de date et d'heure utilisés par les éléments HTML, il est utile de comprendre quelques faits fondamentaux sur la façon dont ils sont définis. HTML utilise une variante de la norme [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601) pour ses chaînes de date et d'heure. Il est recommandé de relire les descriptions des formats que vous utilisez afin de vous assurer que vos chaînes sont bien compatibles avec HTML, car la spécification HTML inclut des algorithmes d'analyse de ces chaînes qui sont en réalité plus précis que ISO 8601, ce qui peut entraîner des différences subtiles dans la façon dont les chaînes de date et d'heure doivent être écrites.

### Jeu de caractères

En HTML, les chaînes qui représentent des dates et des heures manipulent uniquement des caractères {{Glossary("ASCII")}}.

### Numérotation des années

Afin de simplifier le format de base utilisé pour les chaînes de caractères de date en HTML, la spécification exige que toutes les années soient indiquées selon le calendrier grégorien moderne (ou **proleptique**) [calendrier grégorien](https://fr.wikipedia.org/wiki/Calendrier_gr%C3%A9gorien). Bien que les interfaces utilisateur puissent permettre la saisie de dates selon d'autres calendriers, la valeur sous-jacente utilise toujours le calendrier grégorien.

Bien que le calendrier grégorien n'ait été créé qu'en 1582 (remplaçant le calendrier julien similaire), pour les besoins de HTML, le calendrier grégorien est étendu jusqu'à l'an 1 de notre ère. Veillez à ce que les dates plus anciennes en tiennent compte.

Pour les dates en HTML, les années comportent toujours au moins quatre chiffres&nbsp;; les années antérieures à l'an 1000 sont complétées par des zéros initiaux (`0`), ainsi l'année 72 s'écrit `0072`. Les années antérieures à l'an 1 de notre ère ne sont pas prises en charge, donc HTML ne prend pas en charge les années 1 avant notre ère (1 av. J.-C.) ou antérieures.

Une année compte normalement 365 jours, sauf pendant les **[années bissextiles](#années_bissextiles)**.

#### Années bissextiles

Une **année bissextile** est toute année divisible par 400 _ou_ divisible par 4 mais pas par 100. Bien que l'année calendaire compte normalement 365 jours, il faut en réalité environ 365,2422 jours à la planète Terre pour effectuer une orbite complète autour du soleil. Les années bissextiles permettent d'ajuster le calendrier afin de le maintenir synchronisé avec la position réelle de la planète sur son orbite. Ajouter un jour à l'année tous les quatre ans rend la durée moyenne d'une année égale à 365,25 jours, ce qui est proche de la réalité.

Les ajustements apportés à l'algorithme (prendre une année bissextile lorsque l'année est divisible par 400, et ignorer les années bissextiles lorsque l'année est divisible par 100) permettent d'approcher encore plus la valeur correcte (365,2425 jours). Les scientifiques ajoutent parfois des secondes intercalaires au calendrier (vraiment) pour gérer les trois dix-millièmes de jour restants et compenser le ralentissement naturel et progressif de la rotation de la Terre.

Le mois `02`, février, compte normalement 28 jours, mais il en compte 29 lors des années bissextiles.

### Mois de l'année

Une année comporte 12 mois, numérotés de 1 à 12. Ils sont toujours représentés par une chaîne de caractères ASCII sur deux chiffres dont la valeur varie de `01` à `12`. Voir le tableau dans la section [Jours du mois](#jours_du_mois) pour les numéros des mois et leurs noms correspondants (et leurs durées en jours).

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
      <th scope="row">08</th>
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

Une année aura 53 semaines si&nbsp;:

- Le premier jour de l'année calendaire (le premier janvier) est un jeudi **ou**
- Le premier jour de l'année calendaire (le premier janvier) est un mercredi et que l'année est une [année bissextile](#années_bissextiles).

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

Une chaîne de caractères représentant un mois correspondant à un mois d'une année donnée. Autrement dit, plutôt que de représenter «&nbsp;Janvier,&nbsp;» seule, une chaîne de caractères de mois représente un mois et une année associés, comme «&nbsp;Janvier 1972.&nbsp;»

Une **chaîne de caractères de mois valide** consiste en un [numéro d'année](#numérotation_des_années) valide (une chaîne de caractères composée d'au moins quatre chiffres), suivi d'un caractère tiret (`-`, ou U+002D), suivi d'un [numéro de mois](#mois_de_lannée) sur deux chiffres, où `01` représente janvier et `12` représente décembre.

| Chaîne de caractères | Le mois et l'année                    |
| -------------------- | ------------------------------------- |
| `17310-09`           | Le mois de septembre de l'année 17310 |
| `2019-01`            | Le mois de janvier de l'année 2019    |
| `1993-11`            | Le mois de novembre de l'année 1993   |
| `0571-04`            | Le mois d'avril de l'année 571        |
| `0001-07`            | Le mois de juillet de l'an 1          |

On notera que les années sont exprimées sur au moins 4 chiffres et que les années antérieures à 1000 sont préfixées de 0.

## Représentation des dates

Une chaîne de caractères de date valide consiste en une [chaîne de caractères de mois](#représentation_des_mois), suivie d'un caractère tiret (`-`, ou U+002D), suivi d'un [numéro de jour dans le mois](#jours_du_mois) sur deux chiffres.

| Chaîne de caractères | Date complète     |
| -------------------- | ----------------- |
| `1993-11-01`         | 1er novembre 1993 |
| `1066-10-14`         | 14 octobre 1066   |
| `0571-04-22`         | 22 avril 571      |
| `0062-02-05`         | 5 février 62      |

## Représentation des heures

Une chaîne de caractères d'heure peut définir une heure avec une précision à la minute, à la seconde ou à la milliseconde. Il n'est pas permis d'indiquer uniquement l'heure ou les minutes. Une **chaîne de caractères d'heure valide** consiste au minimum en une heure sur deux chiffres suivie d'un deux-points (`:`, U+003A), puis de deux chiffres pour les minutes. Les minutes peuvent éventuellement être suivies d'un autre deux-points et de deux chiffres pour les secondes. Les millisecondes peuvent être indiquées, en option, en ajoutant un point décimal (`.`, U+002E) suivi d'un, deux ou trois chiffres.

Voici quelques règles supplémentaires&nbsp;:

- L'heure est toujours définie selon une horloge sur 24 heures où `00` correspond à minuit et où `23` correspond à onze heures du soir. Aucune valeur en dehors de l'intervalle `00` - `23` n'est autorisée.
- La valeur représentant les minutes doit être composée de deux chiffres et être située entre `00` et `59`. Les valeurs en dehors de cet intervalle ne sont pas autorisées.
- Si les secondes ne sont pas définies (pour définir une heure précise à la minute près), il ne doit pas y avoir de deux-points après les minutes.
- Si les secondes sont définies, leur nombre entier doit être compris entre `00` et `59`. Vous _ne pouvez pas_ définir des secondes intercalaires à l'aide de valeurs telles que `60` ou `61`.
- Si le nombre de secondes est défini et que c'est un entier, il ne doit pas être suivi d'un point décimal.
- Si une fraction de seconde est incluse, elle peut comporter un à trois chiffres, indiquant le nombre de millisecondes. Elle suit le point décimal placé après la composante des secondes dans la chaîne de caractères d'heure.

| Chaîne de caractères | Heure                                            |
| -------------------- | ------------------------------------------------ |
| `00:00:30.75`        | Minuit passé de 30 secondes et 750 millisecondes |
| `12:15`              | Midi passé de quinze minutes                     |
| `13:44:25`           | 13 heures 44 et 25 secondes                      |

## Représentation des dates et heures locales

Une chaîne de caractères valide pour un élément de saisie [`datetime-local`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local) se compose d'une chaîne de caractères représentant une date, suivie de la lettre `T` ou d'une espace puis d'une chaîne de caractères représentant une heure. La représentation ne contient aucune information quant au fuseau horaire dont il est question et on présume que la valeur temporelle indiquée est relative au fuseau horaire de l'utilisateur·ice.

Lorsqu'on définit la valeur de l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) d'un champ `<input>` de type `datetime-local`, la chaîne de caractères est **normalisée**. Les formes normalisées utilisent toujours la lettre `T` comme séparateur entre la date et l'heure. De plus, les formes normalisées utilisent toujours la forme la plus courte. Cela se fait en omettant la composante des secondes si sa valeur est `:00`.

<table class="standard-table">
  <caption>
    Exemples de chaînes de caractères valides pour <code>datetime-local</code>
  </caption>
  <thead>
    <tr>
      <th scope="col">Chaîne de caractères date/heure</th>
      <th scope="col">Chaîne de caractères date/heure normalisée</th>
      <th scope="col">Date et heure réelles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td>28 janvier 1986 à 11:38:00.01</td>
    </tr>
    <tr>
      <td><code>1986-01-28 11:38:00.010</code></td>
      <td>
        <p><code>1986-01-28T11:38:00.01</code></p>
        <p>
          Notez qu'après normalisation, il s'agit de la même chaîne de caractères que la précédente pour <code>datetime-local</code>. L'espace a été remplacé par le caractère <code>T</code> et le zéro final de la fraction de seconde a été supprimé pour rendre la chaîne de caractères aussi courte que possible.
        </p>
      </td>
      <td>28 janvier 1986 à 11:38:00.01</td>
    </tr>
    <tr>
      <td><code>0170-07-31T22:00:00</code></td>
      <td>
        <p><code>0170-07-31T22:00</code></p>
        <p>
          Notez que la forme normalisée de cette date supprime le <code>:00</code> indiquant que le nombre de secondes est zéro, car les secondes sont optionnelles lorsqu'elles valent zéro, et la chaîne de caractères normalisée minimise la longueur de la chaîne de caractères.
        </p>
      </td>
      <td>31 juillet 170 à 22:00</td>
    </tr>
  </tbody>
</table>

## Représentation des dates et heures universelles

Une chaîne de caractères exprimant une date et une heure universelles spécifie une date et une heure ainsi que le fuseau horaire dans lequel elles se produisent. Une **chaîne de caractères valide représentant une date et une heure universelles** est au même format qu'une [chaîne de caractères représentant une date et une heure locales](#représentation_des_dates_et_heures_locales), sauf qu'elle a une chaîne de caractères de fuseau horaire ajoutée à la fin, après l'heure.

### Chaîne de caractères exprimant un décalage de fuseau horaire

Une chaîne de caractères représentant le décalage horaire indique le décalage en heures et minutes, positif ou négatif, par rapport à l'heure de référence standard. Il existe deux heures de référence standard, qui sont très proches l'une de l'autre, mais pas identiques&nbsp;:

- Pour les dates postérieures à la création du [Temps universel coordonné <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) (UTC) au début des années 1960, la base de temps est `Z` et le décalage indique l'écart d'un fuseau horaire par rapport à l'heure au méridien de référence situé à la longitude 0º (qui passe par l'Observatoire royal de Greenwich, en Angleterre).
- Pour les dates antérieures à UTC, la base de temps est exprimée en termes de [UT1 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/UT1), qui correspond au temps solaire contemporain au méridien de référence.

La chaîne de caractères de fuseau horaire est ajoutée immédiatement après l'heure dans la chaîne de caractères de date et d'heure. Vous pouvez spécifier `Z` comme chaîne de caractères de décalage de fuseau horaire pour indiquer que l'heure est spécifiée en UTC. Sinon, la chaîne de caractères de fuseau horaire est construite comme suit&nbsp;:

1. Un caractère indiquant le signe du décalage&nbsp;: le caractère plus (`+`, ou U+002B) pour les fuseaux situés à l'est du méridien de référence ou le caractère moins (`-`, ou U+002D) pour les fuseaux situés à l'ouest.
2. Un nombre sur deux chiffres d'heures indiquant le décalage du fuseau horaire par rapport au méridien de référence. Cette valeur doit être comprise entre `00` et `23`.
3. Un caractère deux-points (`:`) optionnel.
4. Un nombre sur deux chiffres indiquant les minutes de décalage&nbsp;; cette valeur doit être comprise entre `00` et `59`.

Bien que ce format permette d'exprimer des fuseaux horaires entre -23:59 et +23:59, l'intervalle actuel des décalages horaires est -12:00 à +14:00, et aucun fuseau horaire n'est actuellement décalé de l'heure par autre chose que `00`, `30` ou `45` minutes. Cela peut changer à tout moment, puisque les pays sont libres de modifier leurs fuseaux horaires quand ils le souhaitent.

<table class="no-markdown">
  <caption>
    Exemples de chaînes de caractères valides pour une date et une heure universelles
  </caption>
  <thead>
    <tr>
      <th scope="col">Chaîne de caractères date/heure universelle</th>
      <th scope="col">Date et heure universelles réelles</th>
      <th scope="col">Date et heure au méridien de référence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07T00:00Z</code></td>
      <td>7 juin 2005 à minuit UTC</td>
      <td>7 juin 2005 à minuit</td>
    </tr>
    <tr>
      <td><code>1789-08-22T12:30:00.1-04:00</code></td>
      <td>
        22 août 1789 à un dixième de seconde après 12:30 (heure avancée de l'Est, EDT)
      </td>
      <td>22 août 1789 à un dixième de seconde après 16:30</td>
    </tr>
    <tr>
      <td><code>3755-01-01 00:00+10:00</code></td>
      <td>
        1er janvier 3755 à minuit (heure normale de l'Est australien, AEST)
      </td>
      <td>31 décembre 3754 à 14:00</td>
    </tr>
  </tbody>
</table>

## Problèmes liés aux dates

En raison de problèmes de stockage des données et de précision, il peut être utile de connaître certains problèmes côté client et côté serveur.

### Le problème de l'an 2038 (souvent côté serveur)

JavaScript utilise des nombres à virgule flottante en double précision pour stocker les dates, comme pour tous les nombres, ce qui signifie que le code JavaScript ne subira pas le problème de l'an 2038 sauf si des contraintes sur les entiers ou des manipulations de bits sont utilisées, car tous les opérateurs de bits JavaScript utilisent des entiers signés sur 32 bits en complément à deux.

Le problème concerne le côté serveur&nbsp;: le stockage de dates supérieures à 2^31 - 1. Pour résoudre ce problème, il faut stocker toutes les dates en utilisant soit des entiers non signés sur 32 bits, des entiers signés sur 64 bits, ou des nombres à virgule flottante en double précision sur le serveur. Si votre serveur est écrit en PHP, la correction peut nécessiter la mise à jour de PHP vers une version plus récente, ainsi que la mise à jour du matériel vers x86_64 ou IA64. Si vous êtes bloqué·e avec un autre matériel, vous pouvez essayer d'émuler du matériel 64 bits dans une machine virtuelle 32 bits, mais la plupart des machines virtuelles ne prennent pas en charge ce type de virtualisation, car la stabilité peut en pâtir et les performances seront fortement dégradées.

### Le problème de l'an 10000 (souvent côté client)

Sur de nombreux serveurs, les dates sont stockées sous forme de nombres plutôt que de chaînes de caractères — des nombres de taille fixe et indépendants du format (à l'exception de l'endianness). Après l'an 10 000, ces nombres seront simplement un peu plus grands qu'avant, donc de nombreux serveurs ne rencontreront pas de problèmes avec les formulaires soumis après l'an 10 000.

Le problème concerne le côté client&nbsp;: l'analyse des dates comportant plus de 4 chiffres pour l'année.

```html
<!-- minuit du 1er janvier 10000 : moment exact du bug de l'an 10000 -->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Il faut préparer le code à gérer n'importe quel nombre de chiffres — pas seulement 5. La fonction JavaScript suivante définit la valeur de manière programmatique&nbsp;:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Pourquoi se soucier du problème de l'an 10000 s'il ne surviendra que plusieurs siècles après votre mort&nbsp;? Justement parce que vous serez déjà mort·e, donc les entreprises utilisant votre logiciel seront coincées avec sans personne connaissant suffisamment bien le système pour venir le corriger.

## Voir aussi

- L'élément {{HTMLElement("input")}}
- {{HTMLElement("ins")}} et {{HTMLElement("del")}}&nbsp;: voir l'attribut `datetime`, qui spécifie soit une date, soit une date et une heure locales auxquelles le contenu a été inséré ou supprimé
- [La spécification ISO 8601 <sup>(angl.)</sup>](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Représentation des dates et heures](/fr/docs/Web/JavaScript/Guide/Representing_dates_times) dans le [Guide JavaScript](/fr/docs/Web/JavaScript/Guide)
- L'objet JavaScript {{JSxRef("Date")}}
- L'objet {{JSxRef("Intl.DateTimeFormat")}} pour formater les dates et heures pour une locale donnée
