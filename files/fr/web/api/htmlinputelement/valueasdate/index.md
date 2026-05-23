---
title: "HTMLInputElement : propriété valueAsDate"
short-title: valueAsDate
slug: Web/API/HTMLInputElement/valueAsDate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`valueAsDate`** de l'interface {{DOMxRef("HTMLInputElement")}} représente la valeur actuelle de l'élément HTML {{HTMLElement("input")}} sous forme de {{JSxRef("Date")}}, ou `null` si la conversion est impossible.

Cette propriété peut également être définie directement, par exemple pour définir une date par défaut en fonction d'une condition. Si la valeur fournie n'est ni `null` ni un objet `Date`, une {{JSxRef("TypeError")}} est levée. Si la valeur fournie est `null` ou une [date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), la valeur de l'entrée est définie sur une chaîne de caractères vide.

Cette propriété retourne toujours `null` lorsqu'elle est consultée sur une entrée de formulaire qui n'est pas basée sur la date ou l'heure. Lors de la définition de cette propriété sur une telle entrée de formulaire, une `InvalidStateError` {{DOMxRef("DOMException")}} est levée.

## Valeur

Un objet {{JSxRef("Date")}} ou `null` si la conversion est impossible. La date retournée doit toujours être interprétée comme une heure UTC — par exemple, en utilisant des méthodes comme `getUTCDate()` au lieu de `getDate()`. Si vous n'êtes pas prudent, le résultat peut être décalé d'un jour — par exemple, si l'utilisateur·ice se trouve dans un fuseau horaire UTC négatif (les États-Unis, par exemple), alors interpréter la date comme une date locale donnera le jour précédent par rapport à ce que l'utilisateur·ice a sélectionné.

Les entrées de type [`month`](/fr/docs/Web/HTML/Reference/Elements/input/month), [`date`](/fr/docs/Web/HTML/Reference/Elements/input/date) et [`week`](/fr/docs/Web/HTML/Reference/Elements/input/week) retournent une date UTC qui représente le premier instant de la période de temps saisie — c'est-à-dire qu'elles sont toujours à minuit en UTC. Pour `month`, la date est le premier jour du mois. Pour `week`, la date est le lundi de la semaine. Le type d'entrée [`time`](/fr/docs/Web/HTML/Reference/Elements/input/time) a toujours la date définie sur `1970-01-01`.

Le type d'entrée [`datetime-local`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local) ne prend pas en charge la propriété `valueAsDate`, car il représente une date et une heure dans le fuseau horaire local (une [heure murale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime)), mais les objets `Date` représentent un point absolu dans le temps. Cependant, certains navigateurs peuvent fournir une implémentation non standard. [WHATWG travaille à l'intégration <sup>(angl.)</sup>](https://github.com/whatwg/html/issues/10882) de l'API {{JSxRef("Temporal")}} avec les entrées de date et heure pour tenir compte de ce cas d'utilisation.

## Exemples

### Récupérer une valeur de date

Cet exemple montre l'utilisation de la propriété `valueAsDate` avec un `<input>` de type `{{HTMLElement("input/week", "week")}}`.

#### HTML

Nous incluons un `<input>` de type `week`&nbsp;:

```html
<label for="date">Choisissez une date et une heure&nbsp;:</label>

<input name="date" id="date" type="week" />

<pre id="log"></pre>
```

#### JavaScript

Si aucune date ni heure n'est sélectionnée, le champ de saisie vide est considéré comme `null`. À chaque sélection, un évènement {{DOMxRef("HTMLElement/change_event", "change")}} est déclenché, mettant à jour le contenu du `<pre>` qui affiche la {{DOMxRef("HTMLInputElement.value")}} du contrôle de formulaire comparée à cette valeur en tant que date.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date");

logElement.innerText = `Valeur initiale : ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
  logElement.innerText = `${inputElement.value} se résout en ${inputElement.valueAsDate}`;
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### Résultats

{{EmbedLiveSample("Récupérer une valeur de date", "", 100)}}

### Utiliser les méthodes de Date

Cet exemple montre l'application des méthodes {{JSxRef("Date")}} directement à la propriété `valueAsDate` d'un `<input>` de type {{HTMLElement("input/date", "date")}}.

#### HTML

Nous incluons un `<input>` de type `date`&nbsp;:

```html
<label for="date2">Choisissez une date&nbsp;:</label>

<input name="date2" id="date2" type="date" />

<pre id="log"></pre>
```

#### JavaScript

Lorsqu'aucune date n'est sélectionnée, la chaîne de caractères vide est convertie en `null`. À chaque sélection, un évènement {{DOMxRef("HTMLElement/change_event", "change")}} est déclenché. Nous remplissons ensuite le journal avec la date sélectionnée, formatée à l'aide de la méthode {{JSxRef("Date.prototype.toLocaleDateString()", "toLocaleDateString()")}} de l'objet `Date`.

```js
const logElement = document.getElementById("log");
const inputElement = document.getElementById("date2");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

logElement.innerText = `Valeur initiale : ${inputElement.valueAsDate}`;

inputElement.addEventListener("change", () => {
  if (inputElement.valueAsDate !== null) {
    logElement.innerText = `Vous avez sélectionné ${inputElement.valueAsDate.toLocaleDateString("en-US", options)}`;
  } else {
    logElement.innerText = `${inputElement.value} se résout en ${inputElement.valueAsDate}`;
  }
});
```

```css hidden
#log {
  height: 20px;
  padding: 0.5rem;
  background-color: #ededed;
}
```

#### Résultats

{{EmbedLiveSample("Utiliser les méthodes de Date", "", 100)}}

La date peut être décalée d'un jour en raison de votre fuseau horaire local.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.value")}}
- La propriété {{DOMxRef("HTMLInputElement.valueAsNumber")}}
