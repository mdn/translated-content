---
title: <input type="datetime-local">
slug: Web/HTML/Element/input/datetime-local
---

{{HTMLSidebar}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut **`"datetime-local"`** permettent de créer des champs destinés à saisir simplement une date (définie par une année, un mois, et un jour) et une heure (définie par une heure et une minute). Il n'y a pas de secondes dans ce contrôle.

{{EmbedInteractiveExample("pages/tabbed/input-datetime-local.html", "tabbed-shorter")}}

L'interface utilisateur du contrôle varie selon les navigateurs. La prise en charge de cette fonctionnalité est hétérogène&nbsp;: Chrome/Opera et Edge l'implémentent pour les navigateurs de bureau et la plupart des navigateurs mobiles l'implémentent. Pour les navigateurs qui n'implémentent pas cette fonctionnalité, le contrôle utilisé est celui de [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text).

Le contrôle est spécifié afin de pouvoir représenter une heure et une date locales et _pas nécessairement la date et l'heure locale de l'utilisatrice ou l'utilisateur_. Autrement dit, une implémentation devrait autoriser toute combinaison valide (d'année / mois / jour / heure / minutes) même si cette combinaison n'est pas valide pour le fuseau horaire de l'utilisatrice ou l'utilisateur (par exemple pour les fuseaux horaires qui ne gèrent pas les heures d'été). Certains navigateurs mobiles (sur iOS par exemple) n'implémentent pas cette règle correctement.

En raison du faible support pour `datetime-local` et des variations dans ses implémentations, mieux vaudra peut-être encore (juillet 2019) utiliser un _framework_ ou une bibliothèque pour une telle saisie. Une autre option consiste à séparer les champs pour la date (`type="date"`) et pour l'heure (`type="time"`) qui sont mieux pris en charge.

Certains navigateurs pourront utiliser un contrôle avec un texte simple et vérifier que la valeur date/heure est correcte avant de l'envoyer au serveur. Toutefois, ce contrôle ayant lieu côté client, vous devrez nécessairement vérifier le bon format de la donnée côté serveur.

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Valeur<strong></td>
      <td>Une chaîne de caractères (<a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>) qui représente une date et une heure (selon le fuseau horaire local) ou bien une chaîne de caractères vide.</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a>, <a href="/fr/docs/Web/API/HTMLElement/Input_event"><code>input</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td><a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-readonly"><code>readonly</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-step"><code>step</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>list</code>, <code>value</code>, <code>valueAsNumber</code>.</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/stepDown"><code>stepDown()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/stepUp"><code>stepUp()</code></a>.</td>
    </tr>
  </tbody>
</table>

## Valeur

Une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) qui représente la valeur de la date saisie dans le contrôle. Le format utilisable est décrit dans [cette section de l'article sur les formats](/fr/docs/Web/HTML/Date_and_time_formats). Il est possible d'indiquer une date par défaut grâce à l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value)&nbsp;:

```html
<label for="party">Veuillez saisir une date et une heure pour la fête :</label>
<input
  id="party"
  type="datetime-local"
  name="partydate"
  value="2017-06-01T08:30" />
```

{{EmbedLiveSample('', 600, 60)}}

On notera ici que le format de la date affichée n'est pas celui utilisé pour écrire la valeur de l'attribut `value`. Le format d'affichage de la date sera choisi en fonction de la locale du système d'exploitation de l'utilisatrice ou l'utilisateur. En revanche, l'attribut `value` sera toujours formaté de la façon suivante&nbsp;: `yyyy-MM-ddThh:mm`. Lorsque la valeur est envoyée au serveur, elle aura donc ce format&nbsp;: `partydate=2017-06-01T08:30`.

> **Note :** Attention si les données sont envoyées avec la méthode HTTP [`GET`](/fr/docs/Web/HTTP/Methods/GET), les deux points (`:`) devront être échappés pour être intégrés dans les paramètres de l'URL. Avec l'exemple précédent, cela signifie qu'on enverra `partydate=2017-06-01T08%3A30`. Si on souhaite échapper une chaîne de caractères de la même façon en JavaScript, on pourra utiliser [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).

En JavaScript, Il est également possible de définir la valeur de la date utilisée dans le contrôle via la propriété `value` rattachée à [l'interface `HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement). Par exemple&nbsp;:

```js
let dateControl = document.querySelector('input[type="datetime-local"]');
dateControl.value = "2017-06-01T08:30";
```

Plusieurs méthodes, fournies par JavaScript (cf. [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)), peuvent être utilisées afin de convertir des informations numériques en une telle chaîne de caractères (par exemple la méthode [`Date.toISOString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)).

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs de type `date` gèrent les attributs suivants.

### `max`

La date/heure la plus avancée qui peut être saisie dans le contrôle. Si la valeur de [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) est supérieure à la date indiquée par cet attribut, l'élément ne respectera pas [les contraintes de validation](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur de l'attribut `max` n'est pas une chaîne de caractères qui suit le format `"yyyy-MM-ddThh:mm"`, il n'y aura pas de valeur maximale.

La valeur de cet attribut doit être une date supérieure ou égale à celle indiquée par l'attribut `min`.

### `min`

La date/heure minimale qui peut être saisie dans le contrôle. Toute date/heure saisie antérieure à celle-ci ne respectera pas [les contraintes de validation](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur de l'attribut `min` n'est pas une chaîne de caractères qui suit le format `"yyyy-MM-ddThh:mm"`, il n'y aura pas de valeur minimale.

La valeur de cet attribut doit être une date antérieure ou égale à celle indiquée par l'attribut `max`.

### `step`

L'attribut `step` est un nombre qui indique le «&nbsp;pas&nbsp;» suivi par le compteur. Il peut également prendre la valeur spéciale `any` (décrite ci-après). Seules les valeurs qui suivent cette progression (à partir de `min` ou de `value` si ces attributs sont fournis) seront considérées comme valides.

Une chaîne de caractères `any` indique qu'aucune contrainte de pas n'est appliquée et que n'importe quelle valeur (sous réserve qu'elle respecte les autres contraintes potentiellement indiquées par `min` ou `max`) est valide.

> **Note :** Lorsque les données saisies par l'utilisatrice ou l'utilisateur ne respectent pas cette contrainte, l'agent utilisateur pourra arrondir à la valeur valide la plus proche, avec une préférence pour les dates les plus avancées quand deux dates sont aussi proches de la valeur saisie.

Pour les champs `datetime-local`, la valeur de l'attribut `step` est exprimée en secondes avec un facteur d'amplification de 1000 (pour passer des millisecondes aux secondes). La valeur par défaut de `step` est 60 (soit 1 minute ou 60&nbsp;000 millisecondes).

_À l'heure où ces lignes sont écrites, la signification de la valeur `any` pour l'attribut `step` pour les champs `datetime-local` n'est pas certaine. Cette information sera mise à jour dès que possible._

## Utiliser les contrôles `datetime-local`

Ces contrôles sont pratiques&nbsp;: ils permettent d'utiliser une interface simple pour sélectionner une date et une heure et en plus, ils normalisent la valeur saisie avant de l'envoyer au serveur, quelle que soit la locale de l'utilisatrice ou l'utilisateur. Toutefois, il existe actuellement des problèmes liés à la prise en charge partielle de `<input type="datetime-local">` dans les différents navigateurs.

Dans les exemples suivants, nous verrons certains cas d'utilisation plus complexes puis nous traiterons de l'adaptation nécessaire en fonction de la prise en charge des navigateurs.

### Utilisation simple de `datetime-local`

Dans sa forme la plus simple, `<input type="datetime-local">` peut s'utiliser avec un élément `<input>` et un élément [`<label>`](/fr/docs/Web/HTML/Element/Label) comme ceci&nbsp;:

```html
<form>
  <label for="party"
    >Veuillez choisir une date et une heure pour la fête :</label
  >
  <input id="party" type="datetime-local" name="partydate" />
</form>
```

{{EmbedLiveSample('', 600, 40)}}

### Paramétrer des dates et heures minimales/maximales

Les attributs `min` et `max` permettent de restreindre la fenêtre de dates qu'il est possible de choisir. Dans l'exemple qui suit, on indique une date/heure minimale au `2017-06-01T08:30` et une date maximale au `2017-06-30T16:30`&nbsp;:

```html
<form>
  <label for="party"
    >Veuillez choisir une date et une heure pour la fête :</label
  >
  <input
    id="party"
    type="datetime-local"
    name="partydate"
    min="2017-06-01T08:30"
    max="2017-06-30T16:30" />
</form>
```

{{EmbedLiveSample('', 600, 40)}}

Par conséquent&nbsp;:

- Seuls les jours de juin 2017 peuvent être sélectionnés et seules les heures entre 08h30 et 16h30 pourront être sélectionnées.
- Selon le navigateur utilisé, il est possible ou non de sélectionner des heures invalides (cf. [Validation](#validation)).

> **Note :** L'attribut `step` devrait pouvoir être utilisé afin de faire varier l'incrément, en jours, pour sélectionner la date (par exemple afin de ne pouvoir sélectionner que les samedi). En revanche, à l'heure où nous rédigeons cet article, aucune implémentation ne semble proposer cette fonctionnalité.

### Contrôler la taille du champ

`<input type="datetime-local">` ne prend pas en charge des attributs tels que `size`. Il est nécessaire d'utiliser [CSS](/fr/docs/Web/CSS) pour les problèmes relatifs au dimensionnement.

### Paramétrer le fuseau horaire

Les champs `datetime-local` ne permettent pas d'indiquer le fuseau horaire de la date/heure utilisée. Cette caractéristique était disponible pour les champs de type [`datetime`](/fr/docs/Web/HTML/Element/Input/datetime) qui est désormais obsolète (retiré de la spécification). Ce type de champ a été retiré en raison d'un manque d'implémentation de la part des navigateurs et des problèmes relatifs à l'ergonomie. Il est plus simple d'avoir un contrôle séparé pour indiquer le fuseau horaire.

Ainsi, si vous créez un système où l'utilisatrice ou l'utilisateur est déjà connecté et que le fuseau horaire est déjà connu, celui-ci peut être fourni via un champ de type [`hidden`](/fr/docs/Web/HTML/Element/Input/hidden). Par exemple&nbsp;:

```html
<input type="hidden" id="timezone" name="timezone" value="-08:00" />
```

Sinon, on peut proposer la sélection d'un fuseau horaire grâce à un élément [`<select>`](/fr/docs/Web/HTML/Element/select)&nbsp;:

```html
<select name="timezone" id="timezone">
  <option value="Pacific/Kwajalein">Eniwetok, Kwajalein</option>
  <option value="Pacific/Midway">Midway Island, Samoa</option>
  <option value="Pacific/Honolulu">Hawaii</option>
  <option value="Pacific/Marquesas">Taiohae</option>
  <!-- et ainsi de suite -->
</select>
```

Dans ces deux situations, le fuseau horaire et la date sont transmis au serveur séparément (c'est côté serveur que le choix de la représentation pour le stockage est effectué).

## Validation

Par défaut, `<input type="datetime-local">` n'applique pas de validation aux valeurs saisies. C'est l'interface utilisateur du contrôle qui ne permet pas de saisir autre chose qu'une date et une heure (ce qui est utile) mais il est toujours possible de ne saisir aucune valeur ou de saisir une valeur invalide (le 32 avril par exemple).

Les attributs `min` et `max` permettent de restreindre les dates disponibles et `required` rend la date obligatoire. Dans ces cas, les navigateurs afficheront un message d'erreur si on essaie d'envoyer une date en dehors de l'intervalle ou une date vide.

Prenons un exemple avec des dates mini/maxi et le champ obligatoire&nbsp;:

```html
<form>
  <div>
    <label for="party"
      >Veuillez choisir une date et une heure pour la fête (obligatoire, entre
      le 1er juin, 8h30 et le 30 juin, 16h30) :</label
    >
    <input
      id="party"
      type="datetime-local"
      name="partydate"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Réserver !" />
  </div>
</form>
```

Si vous essayez d'envoyer le formulaire avec une date incomplète ou en dehors de l'intervalle indiqué, le navigateur affichera une erreur. Voici le résultat&nbsp;:

{{EmbedLiveSample('', 600, 120)}}

Vous trouverez ensuite la feuille de style CSS utilisée pour l'exemple. On utilise les pseudo-classes [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid) afin de mettre en forme le contrôle selon que sa valeur est valide ou non. Les icônes indicatives sont placées dans un élément [`<span>`](/fr/docs/Web/HTML/Element/span) séparé car, sous Chrome, le contenu généré automatiquement est placé à l'intérieur du contrôle et ne peut pas être affiché/mis en forme efficacement.

```css
div {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

label {
  display: inline-block;
  width: 300px;
}

input:invalid + span:after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  content: "✓";
  padding-left: 5px;
}
```

> **Attention :** La validation des données du formulaire HTML par le navigateur ne doit pas remplacer la validation des données reçues sur le serveur&nbsp;! En effet, il est tout à fait possible pour quelqu'un de modifier le document HTML afin d'outrepasser ces contraintes (voire d'envoyer directement des données au serveur sans passer par le formulaire HTML). Si les mécanismes, côté serveur, échouent à valider les données, cela pourrait avoir des conséquences néfastes sur le stockage ou la sécurité de l'application.

## Gérer la prise en charge des navigateurs

Comme indiqué ci-avant, le principal problème qu'on rencontre avec ces contrôles est la prise en charge hétérogène des différents navigateurs&nbsp;: seuls Opera et Chrome implémentent cette fonctionnalité parmi les navigateurs de bureau et la plupart des navigateurs mobiles la prennent en charge.

Les navigateurs qui n'implémentent pas cette fonctionnalité afficheront un contrôle de saisie textuelle. Toutefois, cela entraîne des problèmes de cohérence d'interface graphique d'une part et de représentation des données d'autre part.

C'est ce second problème qui est le plus important. Comme nous l'avons mentionné avant, la valeur d'un contrôle `datetime-local` est toujours normalisée sous la forme `YYYY-MM-DDThh:mm`. En revanche, avec un champ texte, le navigateur n'utilise pas de formatage particulier et il existe différentes façon d'écrire des dates et heures selon les langues et les régions. On peut par exemple avoir les formats suivants&nbsp;:

- `DDMMYYYY`
- `DD/MM/YYYY`
- `MM/DD/YYYY`
- `DD-MM-YYYY`
- `MM-DD-YYYY`
- `MM-DD-YYYY hh:mm` (heure exprimée sur 12 heures)
- `MM-DD-YYYY HH:mm` (heure exprimée sur 24 heures)
- etc.

Une façon de contourner ce problème est de placer un attribut `pattern` dans l'élément `<input type="datetime-local">`. Bien que cet élément n'utilise pas cet attribut, s'il est converti en `<input type="text">` par le navigateur, le motif sera alors utilisé. Vous pouvez par exemple essayer le code suivant dans un navigateur qui ne prend pas en charge `<input type="datetime-local">`&nbsp;:

```html
<form>
  <div>
    <label for="party"
      >Veuillez choisir une date et une heure pour la fête (obligatoire, entre
      le 1er juin, 8h30 et le 30 juin, 16h30) :</label
    >
    <input
      id="party"
      type="datetime-local"
      name="partydate"
      min="2017-06-01T08:30"
      max="2017-06-30T16:30"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Réserver !" />
  </div>
  <input type="hidden" id="timezone" name="timezone" value="-08:00" />
</form>
```

{{EmbedLiveSample('', 600, 100)}}

Si vous essayer de soumettre ce formulaire, vous pourrez voir que le navigateur affiche un message d'erreur et met en avant le champ invalide si la valeur saisie ne respecte pas la forme `nnnn-nn-nnTnn:nn` avec `n` qui est un chiffre entre 0 et 9. Bien entendu, cela n'empêche pas de saisir des dates/heures invalides ou mal formatées.

De plus, comment la personne remplissant le formulaire doit-elle comprendre la règle de format qui lui est imposée pour saisir une date et une heure&nbsp;?

Bref, il y a toujours un problème.

```css hidden
div {
  margin-bottom: 10px;
}

input:invalid + span {
  position: relative;
}

input:invalid + span:after {
  content: "✖";
  position: absolute;
  right: -18px;
}

input:valid + span {
  position: relative;
}

input:valid + span:after {
  content: "✓";
  position: absolute;
  right: -18px;
}
```

Actuellement, la meilleure façon de gérer les dates/heures d'une façon homogène pour les différents navigateurs est d'utiliser différents contrôles (via des éléments [`<select>`](/fr/docs/Web/HTML/Element/select)) pour sélectionner l'année, le jour, le mois, la date et l'heure. Il existe également des bibliothèques JavaScript telles que [le sélecteur de date jQuery](https://jqueryui.com/datepicker/) et [le sélecteur d'heure jQuery](https://timepicker.co/).

## Exemples

Dans cet exemple, on crée deux ensembles d'éléments pour sélectionner une date et une heure&nbsp;: un sélecteur natif `<input type="datetime-local">` d'une part et un ensemble de cinq éléments [`<select>`](/fr/docs/Web/HTML/Element/select) d'autre part pour les navigateurs qui ne prennent pas en charge le contrôle natif.

{{EmbedLiveSample('', 600, 140)}}

Voici le fragment de code HTML utilisé&nbsp;:

```html
<form>
  <div class="nativeDateTimePicker">
    <label for="party"
      >Veuillez sélectionner une date et une heure pour la fête :</label
    >
    <input type="datetime-local" id="party" name="bday" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">
    Veuillez sélectionner une date et une heure pour la fête :
  </p>
  <div class="fallbackDateTimePicker">
    <div>
      <span>
        <label for="day">Jour :</label>
        <select id="day" name="day"></select>
      </span>
      <span>
        <label for="month">Mois :</label>
        <select id="month" name="month">
          <option selected>Janvier</option>
          <option>Février</option>
          <option>Mars</option>
          <option>Avril</option>
          <option>Mai</option>
          <option>Juin</option>
          <option>Juillet</option>
          <option>Août</option>
          <option>Septembre</option>
          <option>Octobre</option>
          <option>Novembre</option>
          <option>Décembre</option>
        </select>
      </span>
      <span>
        <label for="year">Année :</label>
        <select id="year" name="year"></select>
      </span>
    </div>
    <div>
      <span>
        <label for="hour">Heure :</label>
        <select id="hour" name="hour"></select>
      </span>
      <span>
        <label for="minute">Minute :</label>
        <select id="minute" name="minute"></select>
      </span>
    </div>
  </div>
</form>
```

Les mois disponibles sont codés de façon statique (ce sont toujours les mêmes). En revanche, les valeurs pour les jours et les années sont générées dynamiquement selon le mois et l'année courante (voir les commentaires du script ci-après). Les heures et les minutes sont également générées dynamiquement.

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Une partie intéressante du code est celle où on détecte la prise en charge de la fonctionnalité. Pour cela, dans le script, on crée un nouvel élément [`<input>`](/fr/docs/Web/HTML/Element/Input) auquel on attribue le type `datetime-local` puis on vérifie son type juste après. Pour les navigateurs qui ne prennent pas en charge ce type de contrôle, le type aura changé et sera `text`. Si c'est le cas, on masque le contrôle natif et on utilise l'interface utilisateur alternative (composée avec les éléments [`<select>`](/fr/docs/Web/HTML/Element/select)).

```js
// On définit les différentes variables
let nativePicker = document.querySelector(".nativeDateTimePicker");
let fallbackPicker = document.querySelector(".fallbackDateTimePicker");
let fallbackLabel = document.querySelector(".fallbackLabel");

let yearSelect = document.querySelector("#year");
let monthSelect = document.querySelector("#month");
let daySelect = document.querySelector("#day");
let hourSelect = document.querySelector("#hour");
let minuteSelect = document.querySelector("#minute");

// Initialement, on masque le sélecteur non-natif
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// On teste si l'élément <input type="date">
// se transforme en <input type="text">
let test = document.createElement("input");

try {
  test.type = "datetime-local";
} catch (e) {
  console.log(e.description);
}
// Si c'est le cas, cela signifie que l'élément
// n'est pas pris en charge et
if (test.type === "text") {
  // On masque le sélecteur natif et on affiche
  // le sélecteur avec les <select>
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // On affiche les jours, années, heures
  // et minutes de façon dynamique
  populateDays(monthSelect.value);
  populateYears();
  populateHours();
  populateMinutes();
}

function populateDays(month) {
  // On supprime les éléments <option> pour l'élément
  // <select> des jours afin de pouvoir ajouter les prochains
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }

  // On crée une variable afin de contenir le nombre
  // de jours à afficher
  let dayNum;

  // 31 ou 30 jours ?
  if (
    month === "Janvier" ||
    month === "Mars" ||
    month === "Mai" ||
    month === "Juillet" ||
    month === "Août" ||
    month === "Octobre" ||
    month === "Décembre"
  ) {
    dayNum = 31;
  } else if (
    month === "Avril" ||
    month === "Juin" ||
    month === "Septembre" ||
    month === "Novembre"
  ) {
    dayNum = 30;
  } else {
    // Si le mois est février, on calcule si l'année est bissextile
    let year = yearSelect.value;
    let leap = new Date(year, 1, 29).getMonth() == 1;
    leap ? (dayNum = 29) : (dayNum = 28);
  }

  // on ajoute le bon nombre de jours dans autant
  // d'éléments <option> pour l'élément <select>
  // pour la journée
  for (let i = 1; i <= dayNum; i++) {
    let option = document.createElement("option");
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Si le jour précédent a déjà été défini on utilise
  // la valeur de ce jour pour daySelect afin d'éviter de
  // réinitialiser le jour lorsqu'on change l'année
  if (previousDay) {
    daySelect.value = previousDay;

    // Si le jour précédent correspond au dernier jour d'un mois
    // et que le mois sélectionné possède moins de jours (par
    // exemple en février)
    if (daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if (daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // On obtient l'année courante
  let date = new Date();
  let year = date.getFullYear();

  // On affiche l'année courante et les 100 années
  // précédentes pour l'élément <select> destiné à
  // stocker l'année
  for (let i = 0; i <= 100; i++) {
    let option = document.createElement("option");
    option.textContent = year - i;
    yearSelect.appendChild(option);
  }
}

function populateHours() {
  // on crée 24 valeurs pour l'élément <select>
  // associé aux heures
  for (let i = 0; i <= 23; i++) {
    let option = document.createElement("option");
    option.textContent = i < 10 ? "0" + i : i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // On crée 60 valeurs pour l'élément <select>
  // associé aux minutes
  for (let i = 0; i <= 59; i++) {
    let option = document.createElement("option");
    option.textContent = i < 10 ? "0" + i : i;
    minuteSelect.appendChild(option);
  }
}

// Lorsque la valeur du mois ou de l'année est modifiée
// on relance populateDays()
yearSelect.onchange = function () {
  populateDays(monthSelect.value);
};

monthSelect.onchange = function () {
  populateDays(monthSelect.value);
};

// On conserve le jour sélectionné
let previousDay;

// On met à jour la journée utilisée précédemment
// (voir la fin de populateDays() pour voir où
// est utilisée cette valeur)
daySelect.onchange = function () {
  previousDay = daySelect.value;
};
```

> **Note :** Attention, certaines années peuvent contenir 53 semaines&nbsp;! (cf. [cet article Wikipédia (en anglais)](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year)) Il vous faudra prendre cela en compte si vous souhaitez développer des applications réelles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément générique [`<input>`](/fr/docs/Web/HTML/Element/Input) ainsi que l'interface DOM qui le porte&nbsp;: [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement)
- [`<input type="date">`](/fr/docs/Web/HTML/Element/input/date)
- [`<input type="time">`](/fr/docs/Web/HTML/Element/input/time)
- [Un tutoriel sur les sélecteurs de date et d'heure](/fr/docs/Learn/Forms/Basic_native_form_controls#sélection_de_date_et_heure)
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Date_and_time_formats)
- [La compatibilité des propriétés CSS pour les éléments de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
