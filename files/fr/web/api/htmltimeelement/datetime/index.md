---
title: HTMLTimeElement.dateTime
slug: Web/API/HTMLTimeElement/dateTime
translation_of: Web/API/HTMLTimeElement/dateTime
---
{{ APIRef("HTML DOM") }}La propriété **`HTMLTimeElement.dateTime`** est une {{domxref("DOMString")}} qui reflète l'attribut HTML {{ htmlattrxref("datetime", "time") }}, contenant une date et une heure interprétable par un ordinateur.

Le format de la chaîne de caractères doit correspondre à l'une des micro-syntaxes HTML suivantes:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Microsyntaxe</th>
      <th scope="col">Description</th>
      <th scope="col">Exemples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mois</td>
      <td><em>AAAA</em><code>-</code><em>MM</em></td>
      <td><code>2011-11</code>, <code>2013-05</code></td>
    </tr>
    <tr>
      <td><p>Date</p></td>
      <td>
        <em><code>AAAA</code></em
        ><code>-</code><em>MM</em><code>-</code><em>DD</em>
      </td>
      <td><code>1887-12-01</code></td>
    </tr>
    <tr>
      <td>Date sans l'année</td>
      <td><em>MM</em><code>-</code><em>DD</em></td>
      <td><code>11-12</code></td>
    </tr>
    <tr>
      <td>Heure</td>
      <td>
        <em>HH</em><code>:</code><em>MM</em><br /><em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><br /><em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><code>.</code><em>mmm</em>
      </td>
      <td>
        <code>23:59</code><br /><code>12:15:47</code><br /><code
          >12:15:52.998</code
        >
      </td>
    </tr>
    <tr>
      <td>Date et heure locale</td>
      <td>
        <em>AAAA</em><code>-</code><em>MM</em><code>-</code><em>DD</em>
        <em>HH</em><code>:</code><em>MM</em><br /><em>AAAA</em><code>-</code
        ><em>MM</em><code>-</code><em>DD</em> <em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><br /><em>AAAA</em><code>-</code
        ><em>MM</em><code>-</code><em>DD</em> <em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS<code>.</code><em>mmm</em></em
        ><br /><em>AAAA</em><code>-</code><em>MM</em><code>-</code><em>DD</em
        ><code>T</code><em>HH</em><code>:</code><em>MM</em><br /><em>AAAA</em
        ><code>-</code><em>MM</em><code>-</code><em>DD</em><code>T</code
        ><em>HH</em><code>:</code><em>MM</em><code>:</code><em>SS</em><br /><em
          >AAAA</em
        ><code>-</code><em>MM</em><code>-</code><em>DD</em><code>T</code
        ><em>HH</em><code>:</code><em>MM</em><code>:</code
        ><em>SS<code>.</code><em>mmm</em></em>
      </td>
      <td>
        <code
          >2013-12-25 11:12<br />1972-07-25 13:43:07<br />1941-03-15
          07:06:23.678<br />2013-12-25T11:12<br />1972-07-25T13:43:07<br />1941-03-15T07:06:23.678</code
        >
      </td>
    </tr>
    <tr>
      <td>Décalage horaire</td>
      <td>
        <code>Z</code><br /><code>+</code><em>HHMM<br /><code>+</code></em
        ><em>HH</em><code>:</code><em>MM</em><br /><em
          ><code>-</code><em>HHMM<br /><code>-</code></em
          ><em>HH</em><code>:</code><em>MM</em></em
        >
      </td>
      <td>
        <code>Z<br />+0200<br />+04:30<br />-0300<br />-08:00</code>
      </td>
    </tr>
    <tr>
      <td>date et heure globale</td>
      <td>
        <p>
          <em
            >N'importe quelle combinaison de date et d'heure locale suivie d'un
            décalage horaire</em
          >
        </p>
      </td>
      <td>
        <code
          >2013-12-25 11:12+0200<br />1972-07-25 13:43:07+04:30<br />1941-03-15
          07:06:23.678Z<br />2013-12-25T11:12-08:00</code
        >
      </td>
    </tr>
    <tr>
      <td>Semaine</td>
      <td><em>AAAA</em><code>-W</code><em>WW</em></td>
      <td><code>2013-W46</code></td>
    </tr>
    <tr>
      <td><p>Quatre ou plus chiffres ASCII</p></td>
      <td><em>AAAA</em></td>
      <td><code>2013</code>, <code>0001</code></td>
    </tr>
    <tr>
      <td>Durée</td>
      <td>
        <code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>X<code
          >S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>XX<code
          >S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>XXX<code
          >S</code
        ><br /><code>P</code><code>T</code><em>h</em><code>H</code><em>m</em
        ><code>M</code><em>s</em><code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>X<code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>XX<code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>XXX<code>S</code><br /><em>w</em><code>w </code><em>d</em
        ><code>d </code><em>h</em><code>h </code><em>m</em><code>m </code
        ><em>s</em><code>s</code>
      </td>
      <td>
        <code
          >P12DT7H12M13S<br />P12DT7H12M13.3S<br />P12DT7H12M13.45S<br />P12DT7H12M13.455S<br />PT7H12M13S<br />PT7H12M13.2S<br />PT7H12M13.56S<br />PT7H12M13.999S<br />7d
          5h 24m 13s</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

    dateTimeString = timeElt.dateTime;
    timeElt.dateTime = dateTimeString

## Exemple

```js
// Supposons qu'il y ai un élément <time id="t"> dans le HTML

var t = document.getElementById("t");
t.dateTime = "6w 5h 34m 5s";
```

## Spécifications

| Spécification                                                                                                                | Status                           | Commentaire                                                |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "text-level-semantics.html#dom-time-datetime", "HTMLTimeElement")}} | {{Spec2('HTML WHATWG')}} | Pas de changement depuis {{SpecName("HTML5.1")}}. |
| {{SpecName('HTML5.1', "text-level-semantics.html#dom-time-datetime", "HTMLTimeElement")}}     | {{Spec2('HTML5.1')}}     | Pas de changement depuis {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', "text-level-semantics.html#dom-time-datetime", "HTMLTimeElement")}}     | {{Spec2('HTML5 W3C')}}     | Définition initiale                                        |

## Compatibilité des navigateurs

{{Compat("api.HTMLTimeElement.dateTime")}}

## Voir aussi

- L'interface {{domxref("HTMLTimeElement")}} dont cette propriété appartient.
