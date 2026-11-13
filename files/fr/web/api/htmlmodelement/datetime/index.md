---
title: "HTMLModElement : propriété dateTime"
short-title: dateTime
slug: Web/API/HTMLModElement/dateTime
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`dateTime`** de l'interface {{DOMxRef("HTMLModElement")}} est une chaîne de caractères contenant une date lisible par machine, avec une valeur d'heure facultative. Elle reflète l'attribut HTML [`datetime`](/fr/docs/Web/HTML/Reference/Elements/time#datetime) des éléments {{HTMLElement("del")}} et {{HTMLElement("ins")}}.

## Valeur

Une chaîne de caractères. Pour les formats valides, voir [valeurs valides de datetime](/fr/docs/Web/HTML/Reference/Elements/time#valeurs_datetime_valides).

## Exemples

Étant donné le HTML suivant&nbsp;:

```html
<p>Le paragraphe <del datetime="2021-11-01">a été</del> modifié</p>
```

On peut obtenir la valeur de l'attribut `dateTime` de l'élément `<del>`&nbsp;:

```js
const deletedText = document.querySelector("del");
console.log(deletedText.dateTime); // "2021-11-01"
```

On peut aussi définir la propriété `dateTime`. Ici, on crée un élément `<ins>`, puis on définit sa propriété `dateTime` à la date courante au format `YYYY-MM-DD`, puis on l'insère après le texte supprimé&nbsp;:

```js
const insertedText = document.createElement("ins");
const now = new Date();
insertedText.dateTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
insertedText.appendChild(document.createTextNode("a été"));
deletedText.insertAdjacentElement("afterend", insertedText);
```

Si notre script s'exécute le 9 janvier 2025, notre HTML serait&nbsp;:

```html
<p>
  Le paragraphe <del datetime="2021-11-01">a été</del
  ><ins datetime="2025-1-9">a été</ins> modifié
</p>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("del")}}
- L'élément HTML {{HTMLElement("ins")}}
- L'interface {{DOMxRef("HTMLModElement")}}
- La propriété {{DOMxRef("HTMLModElement.cite")}}
- La propriété {{DOMxRef("HTMLTimeElement.dateTime")}}
- [Représentation des dates](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates)
- [Représentation des dates et heures locales](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates_et_heures_locales)
- L'objet {{JSxRef("Date")}}
- La méthode {{DOMxRef("Element.insertAdjacentElement()")}}
