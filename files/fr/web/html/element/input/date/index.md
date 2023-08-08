---
title: <input type="date">
slug: Web/HTML/Element/input/date
---

{{HTMLSidebar}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut **`date`** permettent de créer des champs où saisir des dates, via un champ texte dont la valeur est validée ou avec un sélecteur de date.

La valeur fournie par un tel contrôle contiendra l'année, le mois et le jour mais _pas_ l'heure et les minutes. Les éléments [`<input type="time">`](/fr/docs/Web/HTML/Element/input/time) et [`<input type="datetime-local">`](/fr/docs/Web/HTML/Element/input/datetime-local) permettent respectivement de saisir des heures et des combinaisons de dates et heures.

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

L'apparence du contrôle affiché dépend du navigateur utilisé et la prise en charge de cette fonctionnalité est hétérogène (cf. la section en fin d'article sur [la compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails). Pour les navigateurs qui ne prennent pas en charge ce type d'élément `<input>`, c'est un simple [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text) qui sera affiché.

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Valeur</strong></td>
      <td>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui représente une date au format <code>yyyy-mm-dd</code> (quatre chiffres pour l'année, un tiret, deux chiffres pour le mois, un tiret, deux chiffres pour le jour) ou qui est vide.</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/Input_event"><code>input</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs communs pris en charge</strong></td>
      <td><a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-readonly"><code>readonly</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-step"><code>step</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>list</code>, <code>value</code>, <code>valueAsDate</code>, <code>valueAsNumber</code>.</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/stepDown"><code>stepDown()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/stepUp"><code>stepUp()</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Valeur

Une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) qui représente la valeur de la date saisie dans le contrôle. La date est dans le format ISO8601, décrit dans [cette section de l'article sur les formats](/fr/docs/Web/HTML/Date_and_time_formats).

Il est possible de fournir une valeur par défaut en renseignant l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value)&nbsp;:

```html
<input id="date" type="date" value="2017-06-01" />
```

{{EmbedLiveSample('', 600, 40)}}

> **Note :** Le format d'affichage est différent de la valeur réelle de l'attribut `value` — le format de la date affichée sera déterminé en fonction de la langue utilisée par le navigateur alors que la valeur de l'attribut `value` aura toujours la forme `yyyy-mm-dd` (c'est-à-dire les quatre chiffres de l'année, suivi d'un tiret, suivi des deux chiffres pour le mois, suivi d'un tiret puis des deux chiffres pour le jour).

On peut également récupérer la valeur de la date en JavaScript grâce à la propriété [`HTMLInputElement.value`](/fr/docs/Web/API/HTMLInputElement)&nbsp;:

```js
let dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // affiche "2017-06-01"
console.log(dateControl.valueAsNumber); // affiche 1496275200000, un timestamp JavaScript (exprimé en ms)
```

Dans l'exemple qui précède, on récupère le premier élément `<input>` dont l'attribut `type` vaut `date` et on définit sa valeur à `2017-06-01` (ce qui correspond au premier juin 2017). On lit ensuite cette valeur sous la forme d'une chaîne de caractères puis sous forme numérique.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs de type `"date"` gèrent les attributs suivants&nbsp;:

### `max`

La date la plus avancée qui peut être saisie dans le contrôle. Si la valeur de [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) est supérieure à la date indiquée par cet attribut, l'élément ne respectera pas [les contraintes de validation](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur de l'attribut `max` n'est pas une chaîne de caractères qui suit le format `yyyy-mm-dd`, il n'y aura pas de valeur maximale.

La valeur de cet attribut doit être une date supérieure ou égale à celle indiquée par l'attribut `min`.

### `min`

La date minimale qui peut être saisie dans le contrôle. Toute date saisie antérieure à celle-ci ne respectera pas [les contraintes de validation](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur de l'attribut `min` n'est pas une chaîne de caractères qui suit le format `yyyy-mm-dd`, il n'y aura pas de valeur minimale.

La valeur de cet attribut doit être une date antérieure ou égale à celle indiquée par l'attribut `max`.

### `step`

L'attribut `step` est un nombre qui indique le «&nbsp;pas&nbsp;» suivi par le compteur. Il peut également prendre la valeur spéciale `any` (décrite ci-après). Seules les valeurs qui suivent cette progression (à partir de `min` ou de `value` si ces attributs sont fournis) seront considérées comme valides.

Une chaîne de caractères `any` indique qu'aucune contrainte de pas n'est appliquée et que n'importe quelle valeur (sous réserve qu'elle respecte les autres contraintes potentiellement indiquées par `min` ou `max`) est valide.

> **Note :** Lorsque les données saisies par l'utilisatrice ou l'utilisateur ne respectent pas cette contrainte, l'agent utilisateur pourra arrondir à la valeur valide la plus proche, avec une préférence pour les dates les plus avancées quand deux dates sont aussi proches de la valeur saisie.

Pour les champs `date`, la valeur de `step` est exprimée en jours et est traité comme un nombre de millisecondes égal à 86&nbsp;400&nbsp;000 fois la valeur de `step`. La valeur par défaut de `step` est 1 (ce qui correspond à un jour).

> **Note :** Utiliser `any` comme valeur pour `step` produira le même effet que la valeur `1` pour les champs `date`.

## Utilisation des contrôles de saisie des dates

Les champs date paraissent pratiques de prime abord&nbsp;: ils fournissent une interface utilisateur simple qui permet de sélectionner des dates et normalisent le format des données envoyées au serveur quelle que soit la locale de l'utilisatrice ou l'utilisateur. Toutefois, il existe certains problèmes avec `<input type="date">` en raison de la prise en charge limitée des navigateurs.

Dans les exemples qui suivent, nous verrons comment utiliser `<input type="date">` dans des cas simples et complexes en ajoutant des conseils quant à la prise en charge des navigateurs (en espérant que celle-ci s'améliore au fur et à mesure).

### Utilisation simple

Dans son expression la plus simple `<input type="date">` s'utilise avec un élément `<input>` et un élément [`<label>`](/fr/docs/Web/HTML/Element/Label)&nbsp;:

```html
<form action="https://example.com">
  <label>
    Veuillez saisir votre date de naissance :
    <input type="date" name="bday" />
  </label>

  <p><button>Envoyer</button></p>
</form>
```

{{EmbedLiveSample('', 600, 40)}}

Ce fragment de HTML envoie la date saisie avec la clé `bday` vers `https://example.com`, ce qui donne une URL résultante comme `https://example.com/?bday=1955-06-08`.

### Paramétrer une date maximale et une date minimale

On peut utiliser les attributs [`min`](/fr/docs/Web/HTML/Element/Input#attr-min) et [`max`](/fr/docs/Web/HTML/Element/Input#attr-max) afin de restreindre les dates qui peuvent être saisies par l'utilisatrice ou l'utilisateur. Dans l'exemple suivant, on indique une date minimum au premier avril 2017 (`2017-04-01`) et une date maximale au 30 avril 2017 (`2017-04-30`)&nbsp;:

```html
<form>
  <label
    >Veuillez choisir la meilleure date pour la soirée :
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample('', 600, 40)}}

On ne peut donc ici que sélectionner une date en avril 2017. Seule la partie du contrôle consacrée aux jours sera éditable et on ne pourra pas sélectionner d'autres mois ou années.

> **Note :** On devrait également pouvoir utiliser l'attribut [`step`](/fr/docs/Web/HTML/Element/Input#attr-step) afin de faire varier le nombre de jours pour l'incrément de la date (par exemple afin de ne pouvoir sélectionner que les samedis). Cependant, cette fonctionnalité ne semble être présente dans aucune implémentation au moment où nous écrivons ces lignes.

### Contrôler la taille du champ de saisie

`<input type="date">` ne permet pas d'utiliser des attributs de dimensionnement tels que [`size`](/fr/docs/Web/HTML/Element/Input#attr-size). Il est nécessaire d'utiliser [CSS](/fr/docs/Web/CSS) pour adresser ces aspects de mise en forme.

## Validation

Par défaut `<input type="date">` n'applique pas de validation particulière aux valeurs saisies. Les interfaces utilisateur ne permettent généralement pas de saisir une valeur qui n'est pas une date ou qui est une date invalide (par exemple un 32 avril 2017).

Si on utilise les attributs [`min`](/fr/docs/Web/HTML/Element/Input#attr-min) et [`max`](/fr/docs/Web/HTML/Element/Input#attr-max) afin de restreindre les dates possibles, les navigateurs qui prennent en charge cette fonctionnalité afficheront une erreur si la valeur saisie est en dehors de cet intervalle.

De plus, si l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required) est actif, il sera obligatoire de saisir ce champ. Une erreur sera affichée si on essaie d'envoyer le formulaire avec un tel champ vide.

Prenons un exemple où la date est contrainte entre deux dates et que le champ est obligatoire&nbsp;:

```html
<form>
  <label>
    Sélectionner la meilleure date (entre le premier et le 20 avril) :
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>Envoyer</button>
  </p>
</form>
```

Si on essaie de soumettre le formulaire avec une date incomplète (ou en dehors de l'intervalle indiqué), le message affichera une erreur. Vous pouvez essayer ici&nbsp;:

{{EmbedLiveSample('', 600, 100)}}

Voici la feuille de style utilisée pour l'exemple. On utilise les pseudo-classes [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid) afin de mettre en forme un indicateur selon que la valeur est valide ou non. On place cet indicateur dans un élément [`<span>`](/fr/docs/Web/HTML/Element/span) séparé car pour Chrome, le contenu généré dans les pseudo-classes est intégré dans le contrôle du formulaire et ne peut être mis en forme ou affiché correctement.

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span:after {
  content: "✖";
}

input:valid + span:after {
  content: "✓";
}
```

> **Attention :** La validation des valeurs du formulaire HTML par le client ne remplace pas la validation côté serveur afin de vérifier que le format est bien celui attendu. Il est tout à fait possible de modifier le code HTML afin d'outrepasser ces mécanismes de validation ou d'envoyer directement des données au serveur. Il est donc nécessaire de valider les données lorsque celles-ci parviennent au serveur afin d'éviter les effets indésirables entraînés par l'injection de données mal formatées ou malveillantes.

## Gérer la prise en charge des navigateurs

Comme indiqué ci-avant, le principal problème qu'on rencontre avec ces contrôles est l'hétérogénéité de la prise en charge par les différents navigateurs.

Les navigateurs qui ne prennent pas en charge ces contrôles utiliseront à la place des champs texte. Toutefois, cette solution de contournement entraîne deux problèmes&nbsp;: le premier concerne l'homogénéité de l'interface utilisateur (le contrôle affiché ne sera pas le même) et le second concerne la gestion des données.

C'est sur ce second point qu'il y a le plus de risques. Comme nous l'avons mentionné avant, un champ date est toujours normalisé sous la forme `yyyy-mm-dd` (les chiffres de l'année, un tiret, les chiffres du mois, un tiret, les chiffres du jour). Toutefois, pour un champ texte, les navigateurs ne reconnaissant pas le format dans lequel la date doit être écrite. Or, selon les langues, régions, pays, les personnes écrivent les dates de différentes façons. On pourrait ainsi avoir des dates écrites comme&nbsp;:

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`

Une méthode permettant de parer à cette éventualité est d'utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern). Bien que celui-ci ne soit pas utilisé pour les contrôles de saisie des dates, il peut être utilisé pour le champ texte. Voici un exemple que vous pouvez consulter dans un navigateur qui ne prend pas en charge cette fonctionnalité&nbsp;:

```html
<form>
  <label
    >Veuillez saisir votre date de naissance :
    <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
    <span class="validity"></span>
  </label>
  <p>
    <button>Envoyer</button>
  </p>
</form>
```

{{EmbedLiveSample('', 600, 100)}}

Si vous tentez d'envoyer ce formulaire, vous pourrez voir que le navigateur affiche un message d'erreur et met en évidence la valeur invalide si la valeur saisie ne correspond pas au motif `nnnn-nn-nn` (avec `n` un chiffre entre 0 et 9). Bien entendu, cela n'empêche pas de saisir des dates invalides ou mal formatées (par exemple avec le motif `yyyy-dd-mm` alors qu'on souhaiterait avoir `yyyy-mm-dd`). Il reste donc un problème.

```css hidden
span {
  position: relative;
}

span::after {
  right: -18px;
  position: absolute;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

C'est pour cela que la meilleure solution consiste à avoir trois champs de saisie distincts à destination de l'utilisatrice ou l'utilisateur&nbsp;: un pour saisir les jours, le deuxième pour les mois et un troisième pour l'année (chacun avec un élément ([`<select>`](/fr/docs/Web/HTML/Element/select)). On peut également opter pour l'utilisation d'une bibliothèque JavaScript telle que [le sélecteur de date jQuery (<i lang="en">jQuery date picker</i>)](https://jqueryui.com/datepicker/).

## Exemples

Dans l'exemple qui suit, on crée deux éléments d'interface utilisateur afin de choisir une date&nbsp;: le premier qui utilise un sélecteur natif `<input type="date">` et un second qui utilise trois éléments [`<select>`](/fr/docs/Web/HTML/Element/select) qui permettra de choisir une date pour les anciens navigateurs qui ne prendraient pas en charge le contrôle natif.

{{EmbedLiveSample('', 600, 100)}}

Voici le code HTML utilisé&nbsp;:

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Veuillez saisir votre date de naissance :</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">Veuillez saisir votre date de naissance :</p>
  <div class="fallbackDatePicker">
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
</form>
```

Les mois sont écrits «&nbsp;en dur&nbsp;» (ce sont toujours les mêmes) alors que les valeurs pour les jours et les années sont générées dynamiquement en fonction du mois et de l'année sélectionnées (voir les commentaires ci-après qui expliquent le détail des fonctions).

```css hidden
span {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

Une autre partie intéressante est celle où on détecte si le navigateur prend charge la fonctionnalité native `<input type="date">`. Pour cela, on crée un nouvel élément [`<input>`](/fr/docs/Web/HTML/Element/Input) et on change son type en `date`, puis on vérifie immédiatement la valeur de son type&nbsp;: pour les navigateurs qui ne prennent pas en charge l'élément natif, ils renverront la valeur `text`, car l'élément natif aura été «&nbsp;converti&nbsp;». Dans ce cas, on masque le sélecteur natif et on affiche le sélecteur alternatif (celui qui contient les éléments [`<select>`](/fr/docs/Web/HTML/Element/select)).

```js
// On définit les différentes variables
let nativePicker = document.querySelector(".nativeDatePicker");
let fallbackPicker = document.querySelector(".fallbackDatePicker");
let fallbackLabel = document.querySelector(".fallbackLabel");

let yearSelect = document.querySelector("#year");
let monthSelect = document.querySelector("#month");
let daySelect = document.querySelector("#day");

// Initialement, on masque le sélecteur non-natif
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// On teste si l'élément <input type="date">
// se transforme en <input type="text">
let test = document.createElement("input");

try {
  test.type = "date";
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

  // On affiche les jours et les années
  // de façon dynamique
  populateDays(monthSelect.value);
  populateYears();
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
    dayNum = leap ? 29 : 28;
  }

  // on ajoute le bon nombre de jours dans autant
  // d'éléments <option> pour l'élément <select>
  // pour la journée
  for (i = 1; i <= dayNum; i++) {
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

- L'élément générique [`<input>`](/fr/docs/Web/HTML/Element/Input) et l'interface DOM qui le porte&nbsp;: [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement)
- [Un tutoriel sur les sélecteurs de date et d'heure](/fr/docs/Learn/Forms/Basic_native_form_controls#sélection_de_date_et_heure)
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Date_and_time_formats)
- [La compatibilité des propriétés CSS pour les éléments de formulaire](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
