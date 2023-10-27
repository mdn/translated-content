---
title: "CycleTracker : fonctionnalités JavaScript"
short-title: Fonctionnalités JavaScript
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality
l10n:
  sourceCommit: 3c0315d7898d2a5bc21784002c9cdc9dddcf559d
---

{{PWASidebar}}

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

Dans la section précédente, nous avons écrit le code HTML et CSS de CycleTracker, et ainsi obtenu une version statique de notre application web. Dans cette section, nous écrirons le code JavaScript qui permettra de convertir le HTML statique en une application web fonctionnelle.

Si ce n'est pas déjà fait, téléchargez [le fichier HTML](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality/index.html) et [le fichier CSS](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality/style.css), et enregistrez les sur votre ordinateur avec les noms `index.html` et `styles.css`, respectivement.

La dernière ligne du fichier HTML appelle le fichier JavaScript `app.js`. C'est le script que nous allons créer dans ce chapitre. Dans cette leçon, nous allons écrire le code JavaScript exécuté par le navigateur, qui est responsable de la capture des données saisies dans le formulaire, de l'enregistrement local des données et de la complétion de la zone indiquant les cycles précédents.

À la fin de ce chapitre, vous aurez une application pleinement fonctionnelle. Dans les chapitres suivants, nous améliorerons progressivement l'application afin que celle-ci devienne une PWA qui puisse être installée et qui fonctionne hors-ligne.

## Plan d'action JavaScript

Lorsqu'une personne visite la page, nous vérifions s'il existe déjà des données dans le stockage local. À la première visite, il n'y aura pas de données. Lorsqu'une personne sélectionne deux dates et soumet le formulaire pour la première fois, il faut&nbsp;:

1. Créer un titre "`<h2>Cycles antérieurs</h2>`"
2. Créer une liste non-ordonnée avec un élement [`<ul>`](/fr/docs/Web/HTML/Element/ul)
3. Remplir l'élément `<ul>` avec un seul élément [`<li>`](/fr/docs/Web/HTML/Element/li) qui contient les informations du cycle en question
4. Sauvegarder les données dans le stockage local

Pour les saisies ultérieures, il faut&nbsp;:

1. Ajouter le nouveau cycle menstruel à la liste actuelle
2. Trier la liste par ordre chronologique
3. Remplir à nouveau la liste `<ul>` avec cette nouvelle liste, en utilisant un élément `<li>` par cycle
4. Ajouter les données dans le stockage local

Les personnes ayant déjà utilisé l'application auront des données existantes dans le stockage local. Lorsqu'elles reviennent sur la page web en utilisant le même navigateur depuis le même appareil, il faut&nbsp;:

1. Récupérer les données enregistrées dans le stockage local
2. Créer un titre a "`<h2>Cycles antérieurs</h2>`"
3. Créer une liste non-ordonnée avec un élement [`<ul>`](/fr/docs/Web/HTML/Element/ul)
4. Remplir l'élément `<ul>` avec un élément [`<li>`](/fr/docs/Web/HTML/Element/li) pour chaque cycle menstruel enregistré dans le stockage local.

Cette application a uniquement pour objectif d'enseigner les fondamentaux pour convertir une application web en PWA. Aussi, elle ne contient pas les fonctionnalités nécessaires à une application réelle comme la validation du formulaire, la vérification des erreurs ou encore les fonctionnalités pour éditer ou supprimer un enregistrement. N'hésitez pas à ajouter ces fonctionnalités et à adapter les exemples données pour créer l'application qui correspond à vos objectifs d'apprentissage et à vos besoins.

## Envoi du formulaire

La page contient un formulaire, l'élément HTML [`<form>`](/fr/docs/Web/HTML/Element/form), doté de sélecteurs de date pour saisir les dates de début et de fin de chaque cycle menstruel. Les sélecteurs de date sont des éléments HTML [`<input>`](/fr/docs/Web/HTML/Element/input) de type [`date`](/fr/docs/Web/HTML/Element/input/date), dotés respectivement des [identifiants (`id`)](/fr/docs/Web/HTML/Global_attributes/id) `start-date` et `end-date`.

Le formulaire n'a pas de méthode ou d'action déclarée dans le HTML. À la place, nous ajoutons un gestionnaire d'évènement au formulaire à l'aide de la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener). Lorsqu'on tente d'envoyer le formulaire, on empêche l'envoi par défaut du formulaire, on enregistre les données du nouveau cycle menstruel et on affiche ce cycle ainsi que les précédents, puis on réinitialise le formulaire.

```js
// On crée des constantes pour le formulaire et les contrôles associés
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
  // Prevent the form from submitting to the server
  // since everything is client-side.
  event.preventDefault();

  // Get the start and end dates from the form.
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  // Check if the dates are invalid
  if (checkDatesInvalid(startDate, endDate)) {
    // If the dates are invalid, exit.
    return;
  }

  // Store the new period in our client-side storage.
  storeNewPeriod(startDate, endDate);

  // Refresh the UI.
  renderPastPeriods();

  // Reset the form.
  newPeriodFormEl.reset();
});
```

After preventing the form submission with [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault), we:

1. [Validate user input](#validate_user_input); exiting if invalid,
2. store the new period by [retrieving, parsing, appending, sorting, stringifying, and re-storing](#retrieve_append_sort_and_re-store_data) data in localStorage,
3. [render the form data](#render_data_to_screen) along with the data of past menstrual cycles and a section header, and
4. reset the form using the HTMLFormElement [`reset()`](/fr/docs/Web/API/HTMLFormElement/reset) method

### Validate user input

We check if the dates are invalid. We do minimal error checking. We make sure neither date is null, which the `required` attribute should prevent from happening. We also check that the start date is not greater than the end date. If there is an error, we clear the form.

```js
function checkDatesInvalid(startDate, endDate) {
  // Check that end date is after start date and neither is null.
  if (!startDate || !endDate || startDate > endDate) {
    // To make the validation robust we could:
    // 1. add error messaging based on error type
    // 2. Alert assistive technology users about the error
    // 3. move focus to the error location
    // instead, for now, we clear the dates if either
    // or both are invalid
    newPeriodFormEl.reset();
    // as dates are invalid, we return true
    return true;
  }
  // else
  return false;
}
```

In a more robust version of this app, we would, at minimum, include error messaging informing the user there is an error. A good application would inform the user what the error is, put focus on the offending form control, and use [ARIA live regions](/fr/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to alert assistive technology users to the error.

## Local storage

We are using the [Web Storage API](/fr/docs/Web/API/Web_Storage_API), specifically [window.localStorage](/fr/docs/Web/API/Window/localStorage), to store start and end date pairs in a stringified JSON object.

[LocalStorage](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_—_web_storage) has several limitations, but suffices for our apps needs. We're using localStorage to make this simple and client-side only. This means the data will only be stored on one browser on a single device. Clearing the browser data will also lose all locally stored periods. What may seem like a limitation for many applications may be an asset in the case of this application, as menstrual cycle data is personal, and the user of such an app may very rightly be concerned about privacy.

For a more robust application, other [client side storage](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) options like [IndexDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB) (IDB) and, discussed later, service workers, have better performance.

Limitations of `localStorage` include:

- Limited data storage: `localStorage` is limited to 5MB of data per origin. Our storage needs are much less than that.
- Stores strings only: `localStorage` stores data as string key and string value pairs. Our start and end dates will be stored as a JSON object parsed as a string. For more complex data, a more robust storage mechanism like IDB would be required.
- Can cause poor performance: Getting and setting from and to local storage is done synchronously on the main thread. When the main thread is occupied, apps are not responsive and appear frozen. With the limited nature of this app, this blip of bad user experience is negligible.
- Only available to the main thread: In addition to the performance issues of occupying the main thread, service workers do not have access to the main thread, meaning the service worker can't directly set or get the local storage data.

#### Retrieve, append, sort, and re-store data

Because we're using localStorage, which comprises of a single string, we retrieve the JSON string of data from local storage, parse the JSON data (if any), push the new pair of dates to the existing array, sort the dates, parse the JSON object back into a string, and save that string back to `localStorage`.

This process requires the creation of a few functions:

```js
// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

function storeNewPeriod(startDate, endDate) {
  // Get data from storage.
  const periods = getAllStoredPeriods();

  // Add the new period objet to the end of the array of period objects.
  periods.push({ startDate, endDate });

  // Sort the array so that periods are ordered by start date, from newest
  // to oldest.
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });

  // Store the updated array back in the storage.
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  // Get the string of period data from localStorage
  const data = window.localStorage.getItem(STORAGE_KEY);

  // If no periods were stored, default to an empty array
  // otherwise, return the stored data as parsed JSON
  const periods = data ? JSON.parse(data) : [];

  return periods;
}
```

### Render data to screen

The last step of our application is to render the list of past periods to the screen along with a heading.

In our HTML, we added a `<section id="past-periods">` placeholder to contain the heading and list of past periods.

Add the container element to the list of contents at the top of your script.

```js
const pastPeriodContainer = document.getElementById("past-periods");
```

We retrieve the parsed string of past periods, or an empty array. If empty, we exit. If past periods exist, we clear the current contents from the past period container. We create a header and an unordered list. We loop through the past periods, adding list items containing formatted from and to dates.

```js
function renderPastPeriods() {
  // get the parsed string of periods, or an empty array.
  const periods = getAllStoredPeriods();

  // exit if there are no periods
  if (periods.length === 0) {
    return;
  }

  // Clear the list of past periods, since we're going to re-render it.
  pastPeriodContainer.innerHTML = "";

  const pastPeriodHeader = document.createElement("h2");
  pastPeriodHeader.textContent = "Past periods";

  const pastPeriodList = document.createElement("ul");

  // Loop over all periods and render them.
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  // Convert the date string to a Date object.
  const date = new Date(dateString);

  // Format the date into a locale-specific string.
  // include your locale for better user experience
  return date.toLocaleDateString("fr", { timeZone: "UTC" });
}
```

## Render past periods on load

When the deferred JavaScript runs on page load, we render past periods, if any.

```js
// Start the app by rendering the past periods.
renderPastPeriods();
```

## Complete JavaScript

Your `app.js` file should look similar to this JavaScript:

```js
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");
const pastPeriodContainer = document.getElementById("past-periods");

// Add the storage key as an app-wide constant
const STORAGE_KEY = "period-tracker";

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;
  if (checkDatesInvalid(startDate, endDate)) {
    return;
  }
  storeNewPeriod(startDate, endDate);
  renderPastPeriods();
  newPeriodFormEl.reset();
});

function checkDatesInvalid(startDate, endDate) {
  if (!startDate || !endDate || startDate > endDate) {
    newPeriodFormEl.reset();
    return true;
  }
  return false;
}

function storeNewPeriod(startDate, endDate) {
  const periods = getAllStoredPeriods();
  periods.push({ startDate, endDate });
  periods.sort((a, b) => {
    return new Date(b.startDate) - new Date(a.startDate);
  });
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
}

function getAllStoredPeriods() {
  const data = window.localStorage.getItem(STORAGE_KEY);
  const periods = data ? JSON.parse(data) : [];
  console.dir(periods);
  console.log(periods);
  return periods;
}

function renderPastPeriods() {
  const pastPeriodHeader = document.createElement("h2");
  const pastPeriodList = document.createElement("ul");
  const periods = getAllStoredPeriods();
  if (periods.length === 0) {
    return;
  }
  pastPeriodContainer.innerHTML = "";
  pastPeriodHeader.textContent = "Past periods";
  periods.forEach((period) => {
    const periodEl = document.createElement("li");
    periodEl.textContent = `From ${formatDate(
      period.startDate,
    )} to ${formatDate(period.endDate)}`;
    pastPeriodList.appendChild(periodEl);
  });

  pastPeriodContainer.appendChild(pastPeriodHeader);
  pastPeriodContainer.appendChild(pastPeriodList);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr", { timeZone: "UTC" });
}

renderPastPeriods();
```

You can try the fully functioning [CycleTracker period tracking web app](https://mdn.github.io/pwa-examples/cycletracker/javascript_functionality) and view the [web app source code](https://github.com/mdn/pwa-examples/tree/master/cycletracker/javascript_functionality) on GitHub. Yes, it works, but it's not a yet PWA.

## Up next

At its core, a PWA is a web application that can be installed is progressively enhanced to work offline. Now that we have a fully functional web application, we add the features required to convert it to a PWA, including the [manifest file](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), [secure connection](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection), and [service worker](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers).

Up first, we create the [CycleTracker's manifest file](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file), including the identity, appearance, and iconography for our CycleTracker PWA.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS", "Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
