---
title: Intl.Locale.prototype.calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/calendar
---
{{JSRef}}

La propriété **`Intl.Locale.prototype.calendar`** est une propriété (via un accesseur) qui renvoie le type de calendrier utilisé par l'instance de `Locale`.

## Description

La propriété `calendar` renvoie la partie de la locale qui indique le calendrier utilisé. Bien que la plupart des régions utilise le calendrier grégorien, il existe différents calendriers utilisés. Le tableau qui suit indique les clés Unicode pour les différents calendriers ainsi qu'une description.

<table class="standard-table">
  <caption>
    Clés Unicode pour les calendriers
  </caption>
  <thead>
    <tr>
      <th scope="col">Clé Unicode</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>buddhist</code></td>
      <td>Calendrier bouddhiste</td>
    </tr>
    <tr>
      <td><code>chinese</code></td>
      <td>Calendrier chinois traditionnel</td>
    </tr>
    <tr>
      <td><code>coptic</code></td>
      <td>Calendrier copte</td>
    </tr>
    <tr>
      <td><code>dangi</code></td>
      <td>Calendrier coréen traditionnel</td>
    </tr>
    <tr>
      <td><code>ethioaa</code></td>
      <td>
        Calendrier éthiopique, Amete Alem (an 0 situé environ à  5493 ans avant
        notre ère)
      </td>
    </tr>
    <tr>
      <td><code>ethiopic</code></td>
      <td>
        Calendrier éthiopique, Amete Mihret (an 0 situé environ à 8 ans de notre
        ère)
      </td>
    </tr>
    <tr>
      <td><code>gregory</code></td>
      <td>Calendrier grégorien</td>
    </tr>
    <tr>
      <td><code>hebrew</code></td>
      <td>Calendrier traditionnel hébreux</td>
    </tr>
    <tr>
      <td><code>indian</code></td>
      <td>Calendrier indien</td>
    </tr>
    <tr>
      <td><code>islamic</code></td>
      <td>Calendrier islamique</td>
    </tr>
    <tr>
      <td><code>islamic-umalqura</code></td>
      <td>Calendrier islamique, Umm al-Qura</td>
    </tr>
    <tr>
      <td><code>islamic-tbla</code></td>
      <td>
        Calendrier islamique tabulaire (années intercalaires
        [2,5,7,10,13,16,18,21,24,26,29] - origine des temps astronomique)
      </td>
    </tr>
    <tr>
      <td><code>islamic-civil</code></td>
      <td>
        Calendrier islamique tabulaire (années intercalaires
        [2,5,7,10,13,16,18,21,24,26,29] - origine des temps civile)
      </td>
    </tr>
    <tr>
      <td><code>islamic-rgsa</code></td>
      <td>Calendrier islamique vu de l'Arabie saoudite</td>
    </tr>
    <tr>
      <td><code>iso8601</code></td>
      <td>
        Calendrier ISO (calendrier grégorien utilisant la numérotation des
        semaines ISO 8601)
      </td>
    </tr>
    <tr>
      <td><code>japanese</code></td>
      <td>Calendrier japonais impérial</td>
    </tr>
    <tr>
      <td><code>persian</code></td>
      <td>Calendrier perse</td>
    </tr>
    <tr>
      <td><code>roc</code></td>
      <td>Calendrier de la République de Chine</td>
    </tr>
    <tr>
      <td>
        <div class="warning">
          <p>
            <strong>Attention :</strong> La clé  <code>islamicc</code> est
            désormais dépréciée et il faut utiliser <code>islamic-civil</code> à
            la place.
          </p>
        </div>
        <p><code>islamicc</code></p>
      </td>
      <td>Calendrier arabe civil (algorithmique)</td>
    </tr>
  </tbody>
</table>

## Exemples

### Indiquer le calendrier via la chaîne de définition de la locale

Les calendriers font partie des « clés d'extension ». Ces clés permettent d'ajouter des informations supplémentaires aux locales et sont ajoutées via l'extension `-u`. Ainsi, on peut indiquer le calendrier utilisé via la chaîne de locale passée comme argument au constructeur {{jsxref("Locale", "Intl.Locale")}}. Pour ce faire, on ajoutera d'abord `-u` à la chaîne « courte » de la locale puis `-ca` afin d'indiquer qu'on précise le calendrier et enfin la chaîne représentant la clé du calendrier.

```js
let frBuddhist = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(frBuddhist.calendar); // affiche "buddhist" dans la console
```

### Spécifier un calendrier grâce à un objet de configuration

Le constructeur {{jsxref("Locale", "Intl.Locale")}} peut utiliser un argument optionnel qui est un objet permettant de configurer la locale via différentes extensions dont les calendriers. En utilisant la propriété `calendar` de cet objet, on définit le calendrier qui sera utilisé :

```js
let frBuddhist = new Intl.Locale("fr-FR", {calendar: "buddhist"});
console.log(frBuddhist.calendar); // affiche "buddhist" dans la console
```

## Spécifications

| Spécification                                                                                                                        | État                    | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------ |
| [Proposition pour `Intl.Locale.prototype.calendar`](https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.calendar) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Locale.calendar")}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- [Identifiants Unicode pour les calendriers](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
