---
title: <input type="time">
slug: Web/HTML/Element/input/time
translation_of: Web/HTML/Element/input/time
browser-compat: html.elements.input.input-time
---
{{HTMLRef}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut **`time`** permettent de créer des contrôles où l'utilisatrice ou l'utilisateur peut saisir une heure (avec des minutes et éventuellement des secondes).

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

L'interface utilisateur affichée pour le contrôle peut varier d'un navigateur à l'autre. À l'heure où nous écrivons ces lignes, seul Safari ne prend pas en charge ce type de contrôle. Pour ce dernier, l'élément sera transformé en simple [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text).

## Apparence

### Chrome/Opera

Pour Chrome/Opera, le contrôle `time` possède deux cases permettant de saisir les heures d'une part et les minutes d'autre part (sur 12 ou 24 heures selon la locale de l'ordinateur), deux flèches pour augmenter ou réduire la valeur et une croix permettant de supprimer la valeur.

![Contrôle Chrome pour une heure sur 12 heures](chrome_time.png)12 heures

![Contrôle Chrome pour une heure sur 24 heures](chrome-time.png)24 heures

### Firefox

Pour Firefox, l'aspect du contrôle est similaire, mais il ne possède pas les flèches d'incrément. L'horloge peut également s'utiliser sur un format 12 heures ou 24 heures (selon la locale du système). Un bouton rond avec une croix permet de réinitialiser la valeur du contrôle.

![Contrôle Firefox pour une heure sur 12 heures](firefox-time.png) 12 heures

![Contrôle Firefox pour une heure sur 24 heures](firefox-time-24.png) 24 heures

### Edge

Pour Edge, le contrôle affiché est un plus élaboré&nbsp;: il affiche un sélecteur avec deux bandes déroulantes pour choisir l'heure et les minutes (sur 12 ou 24 heures selon la locale)&nbsp;:

![Contrôle Edge pour la saisie sur 12 heures](edge_time.png) 12 heures

![Contrôle Edge pour la saisie sur 24 heures](edge-time.png) 24 heures

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui représente une heure ou qui est vide.</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/input_event"><code>input</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-readonly"><code>readonly</code></a>, et <a href="/fr/docs/Web/HTML/Element/Input#attr-step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>value</code>, <code>valueAsDate</code>,
        <code>valueAsNumber</code> et <code>list</code>.
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/stepDown"><code>stepDown()</code></a>, et <a href="/fr/docs/Web/API/HTMLInputElement/stepUp"><code>stepUp()</code></a>.
      </td>
    </tr>
  </tbody>
</table>

## Valeur

Une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) qui représente la valeur de l'heure saisie dans le contrôle.

### Définir l'attribut HTML `value`

Il est possible de définir une valeur par défaut en indiquant une heure dans l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value)&nbsp;:

```html
<label for="appt-time">Veuillez choisir une heure de rendez-vous :</label>
<input id="appt-time" type="time" name="appt-time" value="13:30">
```

{{EmbedLiveSample('', 600, 60)}}

### Définir la valeur avec le DOM et JavaScript

Il est également possible d'obtenir et de fixer l'heure en JavaScript grâce à la propriété `value` rattachée à [l'interface `HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement). Par exemple&nbsp;:

```js
let timeControl = document.querySelector('input[type="time"]');
timeControl.value = '15:30';
```

### Représentation de la valeur

Attention, le format d'affichage peut être différent de la valeur exacte contenue dans l'attribut `value`. Le format d'affichage sera choisi en fonction de la locale du système d'exploitation du navigateur alors que la valeur de `value` suivra toujours le format `hh:mm` (où `hh` représente les deux chiffres de l'heure sur 24 heures et où `mm` représente les deux chiffres pour les minutes). Ainsi, `13:30`, pourra être affiché sous la forme `1.30 PM` dans le contrôle mais la valeur envoyée avec le formulaire sera toujours `appt-time=13%3A30`. Si l'heure inclut des secondes (voir [Utiliser l'attribut `step`](#utiliser_step)), le format sera `hh:mm:ss`. Pour en savoir plus, vous pouvez vous référer à [l'article sur les formats utilisés pour les représentations des dates et heures](/fr/docs/Web/HTML/Date_and_time_formats).

Prenons un autre exemple qui permet de voir simultanément la valeur dans le contrôle et celle stockée dans l'attribut.

#### HTML

Pour commencer, on a ce fragment de HTML qui utilise un libellé et le champ de saisie (comme montré avant). On y ajoute un paragraphe (l'élément [`<p>`](/fr/docs/Web/HTML/Element/p)) et un élément [`<span>`](/fr/docs/Web/HTML/Element/span) afin d'afficher la valeur du champ `time`&nbsp;:

```html
<form>
  <label for="startTime">Début : </label>
  <input type="time" id="startTime">
  <p>
    Valeur stockée dans <code>&lt;input time&gt;</code> :<code>
            "<span id="value">n/a</span>"</code>.
  </p>
</form>
```

#### JavaScript

On utilise quelques lignes de JavaScript afin de récupérer la valeur stockée et on l'insère dans l'élément `<span>` du fragment HTML précédent en surveillant l'évènement [`input`](/fr/docs/Web/API/HTMLElement/input_event)&nbsp;:

```js
let startTime = document.getElementById("startTime");
let valueSpan = document.getElementById("value");

startTime.addEventListener("input", function() {
  valueSpan.innerText = startTime.value;
}, false);
```

#### Résultat

{{EmbedLiveSample("", 600, 120)}}

Lorsqu'un formulaire contenant un champ `time` est envoyé, la valeur est encodée avant d'être incluse dans les données du formulaire. Ainsi, la valeur du champ pour l'heure aura toujours la forme `name=hh%3Amm`, ou `name=hh%3Amm%3Ass` si les secondes sont incluses (voir [Utiliser l'attribut `step`](#utiliser_step)).

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs de type `time` gèrent les attributs suivants.

> **Note :** À la différence d'autres types de donnée, les valeurs pour les heures sont sur un domaine **périodique**. Cela signifie qu'une fois la valeur maximale dépassée, on revient à la valeur minimale (autrement dit, on fait le tour de l'horloge). Ainsi, si on indique `min` avec la valeur `14:00` et `max` avec la valeur `2:00`, cela signifie que les valeurs autorisées sont comprises entre 2 heures de l'après-midi et jusqu'à 2 heures du matin le jour suivant. Pour plus de détails, voir la section [avoir un minimum et un maximum autour de minuit](#avoir_un_minimum_et_un_maximum_autour_de_minuit).

### `list`

La valeur de cet attribut est l'identifiant ([`id`](/fr/docs/Web/API/Element/id)) d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) situé dans le même document. L'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Element/Input#attr-type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

### `max`

Une chaîne de caractères, au format `hh:mm`, qui indique l'heure la plus tardive qui est considérée comme valide. Si la chaîne fournie n'est pas valide, aucun maximum n'est défini.

### `min`

Une chaîne de caractères, au format `hh:mm`, qui indique l'heure la plus tôt qui est considérée comme valide. Si la chaîne fournie n'est pas valide, aucun minimum n'est défini.

### `readonly`

Un attribut booléen qui, s'il est présent, indique que le champ ne peut pas être édité par l'utilisatrice ou l'utilisateur. La valeur de l'attribut `value` peut, toutefois, être modifiée avec du code JavaScript qui modifierait la valeur de la propriété `value` sur l'objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement).

> **Note :** Puisqu'un champ en lecture seule ne peut pas avoir de valeur, `required` n'a pas d'effet sur les champs qui ont également `readonly` présent.

### `step`

L'attribut `step` est un nombre qui définit la granularité à laquelle la valeur doit obéir, ou la valeur `any` (décrite ci-après). Seules les valeurs qui sont des incréments en multiple de `step` depuis la valeur de base ([`min`](#min) si cet attribut est défini, [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) sinon, et si aucun n'est fourni, une valeur par défaut appropriée) sont valides.

Si cet attribut utilise la chaîne de caractère `any`, cela signifie qu'il n'y a aucune contrainte d'incrément et que toute valeur est autorisée (sous réserve de respecter les autres contraintes, comme celles indiquées par [`min`](#min) et [`max`](#max)).

> **Note :** Lorsque les données saisies dans le contrôle ne respectent pas l'incrément, [l'agent utilisateur](/fr/docs/Glossary/User_agent) pourra arrondir à la valeur valide la plus proche, en privilégiant les nombres les plus grands si les deux options valides environnantes sont à égale distance.

Pour les champs de type `time`, la valeur de l'attribut `step` est exprimée en secondes (avec un facteur de multiplication de `1000` puisque la valeur numérique sous-jacente est exprimée en millisecondes). Par défaut, la valeur de l'incrément est `60`, ce qui correspond à 1 minute.

_À l'heure où ces lignes sont écrites, la signification de la valeur `any` pour l'attribut `step` pour les champs `time` n'est pas certaine. Cette information sera mise à jour dès que possible._

## Utiliser `<input type="time">`

### Utilisation simple

Dans sa forme la plus simple, `<input type="time">` n'est accompagné que d'un élément [`<label>`](/fr/docs/Web/HTML/Element/Label)&nbsp;:

```html
<form>
  <label for="appt-time">Veuillez choisir une heure de rendez-vous : </label>
  <input id="appt-time" type="time" name="appt-time">
</form>
```

{{EmbedLiveSample('', 600, 40)}}

### Ajuster la taille du contrôle

`<input type="time">` ne prend pas en charge d'attribut qui permette de le dimensionner (à la façon de [`size`](/fr/docs/Web/HTML/Element/Input#attr-size)). Il faut donc utiliser [CSS](/fr/docs/Web/CSS) si besoin.

### Utiliser `step`

L'attribut [`step`](/fr/docs/Web/HTML/Element/Input#attr-step) peut être utilisé afin de faire varier l'incrément de temps lorsqu'on passe d'une valeur à la suivante ou à la précédente. Attention toutefois, cela n'est pas pris en charge ou homogène parmi les différents navigateurs.

> **Note :** L'effet de cette propriété peut être étrange selon les navigateurs, elle n'est donc pas complètement fiable.

La valeur de cet attribut est un entier exprimant le nombre de secondes à incrémenter. Si on choisit une valeur inférieure à 60 secondes (c'est-à-dire 1 minute), le contrôle `time` affichera alors une troisième section pour les secondes après les heures et les minutes&nbsp;:

```html
<form>
  <label for="appt-time">Veuillez choisir une heure de rendez-vous : </label>
  <input id="appt-time" type="time" name="appt-time" step="2">
</form>
```

{{EmbedLiveSample("", 600, 40)}}

Cependant, cela ne semble avoir un effet prévisible que pour Chrome/Opera qui sont les deux navigateurs à posséder des flèches d'incrément. Avant l'exemple précédent, cliquer sur la flèche augmentera/réduira l'heure de deux secondes (si on souhaite manipuler des minutes, il faudra multiplier par `60` et de même pour les heures&nbsp;: un incrément de `120` correspondra à 2 minutes et un incrément de `7200` correspondra à 2 heures).

Pour Firefox, il n'y a pas de flèches et `step` n'est pas utilisé. Toutefois, fournir cet attribut a comme effet d'ajouter une zone de saisie pour les secondes à côté de la section pour les minutes.

Cet attribut ne semble pas avoir d'effet pour Edge.

> **Note :** L'utilisation de `step` semble causer des problèmes de validation (voir la section qui suit).

## Validation

Par défaut `<input type="time">` ne valide pas les valeurs saisies. En effet, l'interface utilisateur ne permet de choisir une valeur exotique (par exemple `36:87`). Il faut toutefois faire attention à une saisie de la valeur autrement qu'avec l'interface du navigateur et au cas où la valeur est la chaîne de caractères vide (`""`).

### Indiquer une heure maximale et minimale

Les attributs [`min`](/fr/docs/Web/HTML/Element/Input#attr-min) et [`max`](/fr/docs/Web/HTML/Element/Input#attr-max) permettent de réduire la plage horaire valide pendant laquelle on peut sélectionner une heure. Dans l'exemple suivant, on peut saisir une heure minimum de `12:00` et une heure maximum de `18:00`&nbsp;:

```html
<form>
  <label for="appt-time">Veuillez choisir une heure de rendez-vous (heures d'ouverture 12:00 à 18:00) : </label>
  <input id="appt-time" type="time" name="appt-time"
         min="12:00" max="18:00">
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('', 600, 100)}}

Voici la feuille de style CSS utilisée dans l'exemple précédent. On utilise les pseudo-classes [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid) afin de mettre en forme le contrôle selon que la valeur saisie est valide ou non. Les icônes qui indiquent cette validité ont été placées dans un élément [`<span>`](/fr/docs/Web/HTML/Element/span) à part car Chrome ne permet pas de placer du contenu généré dans le contrôle.

```css
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

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

Avec ce fragment de code HTML&nbsp;:

- Seules les heures comprises entre `12:00` et `18:00` sont affichées comme étant valides (les heures avant et après seront invalides).
- Selon le navigateur utilisé, il peut même être impossible de sélectionner une heure en dehors de la plage restreinte (avec Edge notamment).

#### Avoir un minimum et un maximum autour de minuit

En définissant un attribut [`min`](/fr/docs/Web/HTML/Element/Input#attr-min) supérieur à [`max`](/fr/docs/Web/HTML/Element/Input#attr-max), l'intervalle de temps valide se situera autour de minuit. Cette fonctionnalité n'est pas valable pour les autres champs de formulaire. Et bien [qu'elle fasse partie de la spécification HTML](https://html.spec.whatwg.org/C/#has-a-reversed-range), elle n'est pas prise en charge de façon universelle. La prise en charge pour les navigateurs basés sur Chrome a démarré à la version 82, Firefox l'a ajouté à la version 76 et Safari ne l'implémente pas (au moins jusqu'à la version 14.1). Pour déterminer la prise en charge, vous pouvez utiliser le fragment de code suivant&nbsp;:

```js
const input = document.createElement('input');
input.type = 'time';
input.min = '23:00';
input.max = '01:00';
input.value = '23:59';

if (input.validity.valid && input.type === 'time') {
  // l'intervalle encadrant minuit est pris en charge
} else {
  // l'intervalle encadrant minuit n'est pas pris en charge
}
```

### Rendre la saisie obligatoire

On peut également utiliser l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required) afin que la saisie du champ soit obligatoire. Lorsque c'est le cas, les navigateurs afficheront un message d'erreur si l'utilisatrice ou l'utilisateur tente d'envoyer le formulaire sans avoir saisi de valeur (ou si celle-ci est en dehors de la plage indiquée).

Prenons l'exemple suivant qui restreint la plage horaire sélectionnable et qui rend le champ obligatoire&nbsp;:

```html
<form>
  <div>
    <label for="appt-time">Veuillez choisir une heure de rendez-vous (heures d'ouverture entre 12:00 et 18:00) : </label>
    <input id="appt-time" type="time" name="appt-time"
           min="12:00" max="18:00" required>
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Envoyer le formulaire">
  </div>
</form>
```

Si vous essayez de soumettre le formulaire sans avoir saisi de valeur (ou avec une heure en dehors des heures d'ouverture indiquées), le navigateur affichera une erreur. Vous pouvez manipuler le résultat obtenu&nbsp;:

{{EmbedLiveSample('', 600, 120)}}

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur&nbsp;! En effet, il est tout à fait possible pour quelqu'un de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

## Gérer la prise en charge des navigateurs

Comme mentionné avant, un problème peut être l'hétérogénéité de la prise en charge des navigateurs&nbsp;: les anciennes versions de Safari ne prennent pas en charge cette fonctionnalité sur les ordinateurs de bureau et les anciennes versions d'Internet Explorer n'implémentent pas cet élément.

Pour les plateformes mobiles (Android et iOS par exemple), les systèmes d'exploitation fournissent des interfaces particulièrement adaptées aux environnements tactiles. Voici par exemple le sélecteur d'heure pour Chrome sur Android&nbsp;:

![](chrome-android-time.png)

Lorsqu'un navigateur ne prend pas en charge ce type d'élément, il utilise un champ texte (`<input type="text">`) à la place. Mais cela crée des problèmes, tant au niveau de l'interface utilisateur que de la cohérence des données et du format.

C'est ce problème de format qui est le plus important. Comme nous l'avons expliqué plus haut, un champ `time` permet d'obtenir une valeur normalisée, respectant le format `hh:mm`. Avec un champ texte, le navigateur ne reconnaît pas de format particulier pour l'heure et les personnes peuvent employer différentes formes pour décrire l'heure voulue&nbsp;:

- `3.00 pm`
- `3:00pm`
- `15:00`
- `3h de l'après-midi`
- etc.

Une façon de contourner ce problème consiste à utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) sur le champ `time`. Bien que le champ `time` n'utilise pas cet attribut, le champ texte pourra l'utiliser. Vous pouvez par exemple tester ce fragment de code dans un navigateur qui ne prend pas en charge `<input type="time">`&nbsp;:

```html
<form>
  <div>
    <label for="appt-time">Veuillez choisir une heure de rendez-vous (heures d'ouverture entre 12:00 et 18:00) : </label>
    <input id="appt-time" type="time" name="appt-time"
           min="12:00" max="18:00" required
           pattern="[0-9]{2}:[0-9]{2}">
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Envoyer">
  </div>
</form>
```

{{EmbedLiveSample('', 600, 120)}}

Si on essaie d'envoyer une valeur qui ne respecte pas le bon format, le navigateur affichera un message d'erreur et mettra en évidence le champ si celui-ci ne suit pas la forme `nn:nn` avec `n` qui est un chiffre entre 0 et 9. Bien entendu, cela n'empêche pas de saisir des heures invalides mais qui respectent ce format.

De plus, comment communiquer à la personne le format dans lequel saisir l'heure&nbsp;?

Il reste donc un problème.

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

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

Actuellement, la meilleure façon de gérer ce type de saisie pour les différents navigateurs consiste à utiliser deux contrôles (le premier pour la saisie des heures et le second pour la saisie des minutes) avec deux éléments [`<select>`](/fr/docs/Web/HTML/Element/select) (cf. ci-après) ou d'utiliser certaines bibliothèques JavaScript telles que [le plugin de sélecteur d'heure (<i lang="en">timepicker</i>) jQuery](https://timepicker.co/).

## Exemples

Dans l'exemple qui suit, on crée deux ensembles d'éléments&nbsp;: un sélecteur natif avec `<input type="time">` et un ensemble de deux éléments [`<select>`](/fr/docs/Web/HTML/Element/select) qui permettent de choisir des heures et des minutes dans les navigateurs qui ne prennent pas en charge le contrôle natif.

{{EmbedLiveSample('', 600, 140)}}

Voici le fragment HTML utilisé&nbsp;:

```html
<form>
  <div class="nativeTimePicker">
    <label for="appt-time">Veuillez choisir une heure de rendez-vous (heures d'ouverture 12:00 à 18:00) : </label>
      <input id="appt-time" type="time" name="appt-time"
             min="12:00" max="18:00" required>
      <span class="validity"></span>
    </div>
  <p class="fallbackLabel">Veuillez choisir une heure de rendez-vous (heures d'ouverture 12:00 à 18:00) : </p>
  <div class="fallbackTimePicker">
    <div>
      <span>
        <label for="hour">Heures :</label>
        <select id="hour" name="hour">
        </select>
      </span>
      <span>
        <label for="minute">Minutes :</label>
        <select id="minute" name="minute">
        </select>
      </span>
    </div>
  </div>
</form>
```

Les valeurs pour les heures et les minutes seront générées dynamiquement en JavaScript.

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

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

La partie la plus intéressante du code est celle qui permet de détecter si le contrôle natif est pris en charge. Pour cela, on crée un nouvel élément [`<input>`](/fr/docs/Web/HTML/Element/Input) et on modifie son attribut `type` afin qu'il vaille `time`, immédiatement après, on vérifie la valeur du type. Si le navigateur ne prend pas en charge l'élément, il renverra `text`, car l'élément a été transformé en `<input type="text">`, dans ce cas, on masque le sélecteur natif et on affiche l'interface alternative avec les deux éléments [`<select>`](/fr/docs/Web/HTML/Element/select).

```js
// On définit quelques variables
let nativePicker = document.querySelector('.nativeTimePicker');
let fallbackPicker = document.querySelector('.fallbackTimePicker');
let fallbackLabel = document.querySelector('.fallbackLabel');

let hourSelect = document.querySelector('#hour');
let minuteSelect = document.querySelector('#minute');

// On cache le sélecteur alternatif
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// On teste si un nouveau contrôle time
// est transformé en text
let test = document.createElement('input');

try {
  test.type = 'time';
} catch (e) {
  console.log(e.description);
}

// Si c'est le cas…
if(test.type === 'text') {
  // On masque le sélecteur natif et
  // on affiche le sélecteur alternatif
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // On génère les valeurs dynamiquement
  // pour les heures et les minutes
  populateHours();
  populateMinutes();
}

function populateHours() {
  // On ajoute les heures dans
  // l'élément <select> avec les 6
  // heures ouvertes
  for(let i = 12; i <= 18; i++) {
    let option = document.createElement('option');
    option.textContent = i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // On génère 60 options pour 60 minutes
  for(let i = 0; i <= 59; i++) {
    let option = document.createElement('option');
    option.textContent = (i < 10) ? ("0" + i) : i;
    minuteSelect.appendChild(option);
  }
}

// avec la fonction suivante, si l'heure vaut 18
// on s'assure que les minutes vaillent 00
// afin de ne pas pouvoir choisir d'heure passé 18:00
function setMinutesToZero() {
  if(hourSelect.value === '18') {
    minuteSelect.value = '00';
  }
}

hourSelect.onchange = setMinutesToZero;
minuteSelect.onchange = setMinutesToZero;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément générique [`<input>`](/fr/docs/Web/HTML/Element/Input) ainsi que l'interface DOM [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) qui permet de le manipuler
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Date_and_time_formats)
- [Un tutoriel pour les sélecteurs de date et d'heure](/fr/docs/Learn/Forms/Basic_native_form_controls#sélection_de_date_et_heure)
- [`<input type="datetime-local">`](/fr/docs/Web/HTML/Element/input/datetime-local)
- [`<input type="date">`](/fr/docs/Web/HTML/Element/input/date)
- [`<input type="month">`](/fr/docs/Web/HTML/Element/input/month)
- [`<input type="week">`](/fr/docs/Web/HTML/Element/input/week)
- [Compatibilité des propriétés CSS](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
