---
title: Intl.Locale.prototype.calendars
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendars
browser-compat: javascript.builtins.Intl.Locale.calendars
---
{{JSRef}}

La propriété **`Intl.Locale.prototype.calendars`** est un accesseur qui renvoie un tableau avec le ou les identifiants des calendriers utilisés par la locale représentée par l'instance `Locale` courante.

## Description

La propriété `calendar` renvoie un tableau de l'ensemble des calendriers pris en charge pour la locale représentée par `Locale`. Les éléments du tableau indiquent l'ère du calendrier pour l'objet `Locale`. Le tableau qui suit indique les différents identifiants Unicode pour les calendriers, associés à l'ère calendaire qu'ils représentent.

### Identifiants Unicode pour les calendriers

- `buddhist`
  - : Calendrier bouddhiste
- `chinese`
  - : Calendrier chinois traditionnel
- `coptic`
  - : Calendrier copte
- `dangi`
  - : Calendrier coréen traditionnel
- `ethioaa`
  - : Calendrier éthiopique, Amete Alem (an 0 situé environ à 5493 ans avant notre ère)
- `ethiopic`
  - : Calendrier éthiopique, Amete Mihret (an 0 situé environ à 8 ans de notre ère)
- `gregory`
  - : Calendrier grégorien
- `hebrew`
  - : Calendrier traditionnel hébreux
- `indian`
  - : Calendrier indien
- `islamic`
  - : Calendrier islamique
- `islamic-umalqura`
  - : Calendrier islamique, Umm al-Qura
- `islamic-tbla`
  - : Calendrier islamique tabulaire (années intercalaires [2,5,7,10,13,16,18,21,24,26,29] - origine des temps astronomique)
- `islamic-civil`
  - : Calendrier islamique tabulaire (années intercalaires [2,5,7,10,13,16,18,21,24,26,29] - origine des temps civile)
- `islamic-rgsa`
  - : Calendrier islamique vu de l'Arabie saoudite
- `iso8601`
  - : Calendrier ISO (calendrier grégorien utilisant la numérotation des semaines ISO 8601)
- `japanese`
  - : Calendrier japonais impérial
- `persian`
  - : Calendrier perse
- `roc`
  - : Calendrier de la République de Chine
- `islamicc`
  - : Calendrier arabe civil (algorithmique)
    > **Attention :** La clé `islamicc` a été dépréciée. Mieux vaut utiliser `islamic-civil`.

## Exemples

### Obtenir la liste des calendriers pris en charge

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.calendars); // affiche ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
let jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.calendars); // affiche ["gregory", "japanese"]
```
## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)
- [`Intl.Locale.calendar`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
- [Identifiants de calendrier Unicode](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
