---
title: Date.parse()
short-title: parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Date.parse()`** analyse la représentation sous forme de chaîne de caractères d'une date et renvoie l'[horodatage](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#le_format_epoch_les_horodatages_et_les_dates_invalides) correspondant.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.parse()")}}

```js interactive-example
// Format de chaîne de caractères de date-heure standard
const unixTimeZero = Date.parse("1970-01-01T00:00:00Z");
// Format non standard ressemblant à toUTCString()
const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

console.log(unixTimeZero);
// Résultat attendu : 0

console.log(javaScriptRelease);
// Résultat attendu : 818035920000
```

## Syntaxe

```js-nolint
Date.parse(dateString)
```

### Paramètres

- `dateString`
  - : Une chaîne de caractères (`string`) au [format date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#format_de_chaîne_de_date_et_heure). Voir la référence liée pour les précautions concernant l'utilisation de différents formats.

### Valeur de retour

Un nombre représentant l'[horodatage (<i lang="en">timestamp</i> en anglais)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#le_format_epoch_les_horodatages_et_les_dates_invalides) de la date donnée. Si `dateString` ne peut pas être analysé comme une date valide, {{jsxref("NaN")}} est renvoyé.

## Description

Cette fonction est utile pour définir des valeurs de date à partir de chaînes de caractères, par exemple en combinaison avec la méthode {{jsxref("Date/setTime", "setTime()")}}.

Les formats que `parse()` peut traiter ne sont pas explicitement spécifiés, mais il existe quelques {{Glossary("invariant", "invariants")}}&nbsp;:

- Le [format de chaîne de caractères date-heure](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#format_de_chaîne_de_date_et_heure) (produit par {{jsxref("Date/toISOString", "toISOString()")}}) doit être pris en charge.
- Si `x` est un objet Date dont la valeur en millisecondes est zéro, alors `x.valueOf()` doit être égal à l'une des valeurs suivantes&nbsp;: `Date.parse(x.toString())`, `Date.parse(x.toUTCString())`, `Date.parse(x.toISOString())`. Cela signifie que les formats produits par {{jsxref("Date/toString", "toString()")}} et {{jsxref("Date/toUTCString", "toUTCString()")}} doivent aussi être pris en charge.
- La spécification _n'exige pas_ la prise en charge du format produit par {{jsxref("Date/toLocaleString", "toLocaleString()")}}. Cependant, les principaux moteurs essaient tous de prendre en charge le format `toLocaleString("en-US")`.

Les autres formats dépendent de l'implémentation et peuvent ne pas fonctionner sur tous les navigateurs. Une bibliothèque peut être utile si de nombreux formats différents doivent être pris en charge. En fait, le manque de fiabilité de `Date.parse()` est l'une des raisons de l'introduction de l'API {{jsxref("Temporal")}}.

Comme `parse()` est une méthode statique de `Date`, vous l'utilisez toujours comme `Date.parse()`, et non comme une méthode d'un objet `Date` que vous avez créé.

## Exemples

### Utilisation de Date.parse()

Les appels suivants renvoient tous `1546300800000`. Le premier impliquera l'heure UTC car il s'agit uniquement d'une date, et les autres spécifient explicitement le fuseau horaire UTC.

```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

L'appel suivant, qui ne précise pas de fuseau horaire, sera interprété comme le 2019-01-01 à 00:00:00 dans le fuseau horaire local du système, car il contient à la fois une date et une heure.

```js
Date.parse("2019-01-01T00:00:00");
```

### Formats toString() et toUTCString()

En plus du format standard de chaîne de caractères date et heure, les formats {{jsxref("Date/toString", "toString()")}} et {{jsxref("Date/toUTCString", "toUTCString()")}} sont pris en charge&nbsp;:

```js
// format toString()
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 dans toutes les implémentations dans tous les fuseaux horaires

// format toUTCString()
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 dans toutes les implémentations dans tous les fuseaux horaires
```

### Chaînes de date non standard

> [!NOTE]
> Cette section décrit des comportements spécifiques à chaque implémentation, qui peuvent varier selon les navigateurs ou leurs versions. Il ne s'agit pas d'un tableau de compatibilité exhaustif et vous devez toujours effectuer vos propres tests avant d'utiliser un format dans votre code.

Les implémentations utilisent généralement le fuseau horaire local lorsque la chaîne de date n'est pas standard. Par cohérence, nous supposerons que l'environnement d'exécution utilise le fuseau horaire UTC, et sauf indication contraire, le résultat dépendra du fuseau horaire de l'appareil. [L'heure d'été (DST) du fuseau local peut aussi avoir un effet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset#résultats_variés_dans_les_régions_appliquant_lheure_dété_dst).

Voici d'autres exemples de chaînes de date non standard. Les navigateurs sont très tolérants lors de l'analyse des chaînes de date et peuvent ignorer toute partie d'une chaîne qu'ils ne parviennent pas à analyser. Pour des raisons de compatibilité, les navigateurs copient souvent le comportement les uns des autres, ce qui fait que ces schémas de gestion se propagent d'un navigateur à l'autre. Comme indiqué précédemment, les exemples suivants sont donnés à titre d'illustration uniquement et ne sont en aucun cas exhaustifs&nbsp;:

<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Exemple</th>
      <th>Chrome</th>
      <th>Firefox</th>
      <th>Safari</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Nombre seul</td>
      <td><code>0</code> (un seul chiffre)</td>
      <td colspan="2">946684800000 (01 janv. 2000)&nbsp;; NaN dans Firefox ≤122</td>
      <td>-62167219200000 (01 janv. 0000)</td>
    </tr>
    <tr>
      <td><code>31</code> (deux chiffres)</td>
      <td colspan="2">NaN</td>
      <td>-61188912000000 (01 janv. 0031)</td>
    </tr>
    <tr>
      <td><code>999</code> (trois/quatre chiffres)</td>
      <td colspan="3">-30641733102000 (01 janv. 0999)</td>
    </tr>
    <tr>
      <td rowspan="4">Chaînes de date utilisant différents séparateurs</td>
      <td><code>1970-01-01</code> (standard)</td>
      <td colspan="3">0 dans tous les fuseaux horaires</td>
    </tr>
    <tr>
      <td><code>1970/01/01</code></td>
      <td colspan="3">0</td>
    </tr>
    <tr>
      <td><code>1970,01,01</code></td>
      <td colspan="2">0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td><code>1970 01 01</code></td>
      <td colspan="2">0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td>Chaînes de caractères ressemblant à <code>toString()</code></td>
      <td>
        <code>Thu&nbsp;Jan&nbsp;01&nbsp;1970&nbsp;00:00:00</code><br>
        <code>Thu Jan 01 1970</code><br>
        <code>Jan 01 1970 00:00:00</code><br>
        <code>Jan 01 1970</code>
      </td>
      <td colspan="3">0</td>
    </tr>
    <tr>
      <td>Chaînes de caractères ressemblant à <code>toUTCString()</code></td>
      <td>
        <code>Thu, 01 Jan 1970 00:00:00</code><br>
        <code>Thu, 01 Jan 1970</code><br>
        <code>01 Jan 1970 00:00:00</code><br>
        <code>01 Jan 1970</code>
      </td>
      <td colspan="3">0</td>
    </tr>
    <tr>
      <td rowspan="4">Premier composant de date à 2 chiffres</td>
      <td><code>01-02-03</code> (le premier segment peut être un mois valide)</td>
      <td colspan="2">1041465600000 (02 janv. 2003)</td>
      <td>
        -62132745600000 (03 févr. 0001)<br>
        Remarque&nbsp;: Safari suppose toujours AA-MM-JJ, mais MM/JJ/AA.
      </td>
    </tr>
    <tr>
      <td><code>27-02-03</code> (le premier segment peut être un jour valide mais pas un mois)</td>
      <td colspan="2">NaN</td>
      <td>-61312291200000 (03 févr. 0027)</td>
    </tr>
    <tr>
      <td><code>49-02-03</code> (le premier segment ne peut pas être un jour valide et est &lt;50)</td>
      <td colspan="2">2495923200000 (03 févr. 2049)</td>
      <td>-60617980800000 (03 févr. 0049)</td>
    </tr>
    <tr>
      <td><code>50-02-03</code> (le premier segment ne peut pas être un jour valide et est ≥50)</td>
      <td colspan="2">-628300800000 (03 févr. 1950)</td>
      <td>-60586444800000 (03 févr. 0050)</td>
    </tr>
    <tr>
      <td rowspan="3">Composants de date hors limites</td>
      <td>
        <code>2014-25-23</code><br>
        <code>Mar 32, 2014</code><br>
        <code>2014/25/23</code>
      </td>
      <td colspan="3">NaN</td>
    </tr>
    <tr>
      <td><code>2014-02-30</code></td>
      <td colspan="2">1393718400000 (02 mars 2014)</td>
      <td>NaN</td>
    </tr>
    <tr>
      <td><code>02/30/2014</code></td>
      <td colspan="3">1393718400000</td>
    </tr>
    <tr>
      <td rowspan="5">Caractères superflus après le nom du mois</td>
      <td><code>04 Dec 1995</code><br><code>04 Decem 1995</code><br><code>04 December 1995</code></td>
      <td colspan="3">818031600000</td>
    </tr>
    <tr>
      <td><code>04 DecFoo 1995</code></td>
      <td colspan="3">
        818031600000<br>
        Seuls les trois premiers caractères sont lus.<br>
        Firefox ≤121 lit jusqu'au nom de mois valide, et retourne donc NaN lorsqu'il rencontre «&nbsp;F&nbsp;».
      </td>
    </tr>
    <tr>
      <td><code>04 De 1995</code></td>
      <td colspan="3">NaN</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.UTC()")}}
