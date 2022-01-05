---
title: <input type="date">
slug: Web/HTML/Element/Input/date
tags:
  - Element
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input/date
---
{{HTMLRef}}

Les éléments {{htmlelement("input")}} dont l'attribut `type` vaut **`date`** permettent de créer des champs permettant de saisir des dates (composées d'une année, d'un mois et d'un jour mais pas d'une heure , cf. [`time`](/fr/docs/Web/HTML/Element/input/time)).

{{EmbedInteractiveExample("pages/tabbed/input-date.html", "tabbed-shorter")}}

L'apparence du contrôle affiché dépend du navigateur utilisé et la prise en charge de cette fonctionnalité est hétérogène (cf. la section {{anch("Compatibilité des navigateurs")}} pour plus de détails). Pour les navigateurs qui ne prennent pas en charge ce type d'élément `<input>`, c'est un simple [`<input type="text">`](/fr/docs/Web/HTML/Element/input/text) qui sera affiché.

## Valeur

Une chaîne de caractères qui représente la valeur de la date saisie dans le contrôle. Le format à respecter est décrit dans dans [cette section de l'article sur les formats](/fr/docs/Web/HTML/Formats_date_heure_HTML#Représentation_des_dates). Il est possible de fournir une valeur par défaut en renseignant l'attribut {{htmlattrxref("value", "input")}} :

```html
<input id="date" type="date" value="2017-06-01">
```

{{EmbedLiveSample('Valeur', 600, 40) }}

On notera que le format d'affichage est différent de la valeur réelle de l'attribut `value` — le format de la date affichée sera déterminé en fonction de la langue utilisée par le navigateur alors que la valeur de l'attribut `value` aura toujours la forme `yyyy-mm-dd` (c'est-à-dire les quatres chiffres de l'année, suivi d'un tiret, suivi des deux chiffres pour le mois, suivi d'un tiret puis des deux chiffres pour le jour).

On peut également récupérer la valeur de la date en JavaScript grâce à la propriété {{domxref("HTMLInputElement.value")}} :

```js
var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';
```

## Utiliser les contrôles de saisie de date

Les contrôles de date semblent pratiques : ils fournissent une interface utilisateur simple afin de sélectionner des dates et normalisent la donnée saisie dans un format unique pour l'envoyer au serveur, quelle que soit la locale de l'utilisateur. Malheureusement, il y a certains problèmes de prise en charge par les navigateurs pour `<input type="date">`.

Nous verrons ici différents cas d'utilisation de `<input type="date">`, simples et complexes. Puis nous verrons comment parer aux problèmes de support des navigateurs.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `"date"` gèrent les attributs suivants :

| Attribut               | Description                                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("max")}}` | La date la plus avancée qui peut être saisie.                                                                                                      |
| `{{anch("min")}}` | La date la plus reculée qui peut être saisie.                                                                                                      |
| `{{anch("step")}}` | Le pas à utiliser pour l'incrément quand on utilise les boutons d'augmentation/diminution. Cet incrément est également utilisé pour la validation. |

### {{htmlattrdef("max")}}

La date la plus avancée qui peut être saisie dans le contrôle. Si la valeur de {{htmlattrxref("value", "input")}} est supérieure à la date indiquée par cet attribut, l'élément ne respectera pas [les contraintes de validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur de l'attribut `max` n'est pas une chaîne de caractères qui suit le format `yyyy-MM-dd`, il n'y aura pas de valeur maximale.

La valeur de cet attribut doit être une date supérieure ou égale à celle indiquée par l'attribut `min`.

### {{htmlattrdef("min")}}

La date minimale qui peut être saisie dans le contrôle. Toute date saisie antérieure à celle-ci ne respectera pas [les contraintes de validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur de l'attribut `min` n'est pas une chaîne de caractères qui suit le format `yyyy-MM-dd`, il n'y aura pas de valeur minimale.

La valeur de cet attribut doit être une date antérieure ou égale à celle indiquée par l'attribut `max`.

### {{htmlattrdef("step")}}

{{page("/fr/docs/Web/HTML/Element/input/number", "step-include")}}

Pour les champs `date`, la valeur de `step` est exprimée en jours avec un facteur de multiplication de 86 400 000 (soit le nombre de millisecondes en une journée). La valeur par défaut de `step` est 1.

> **Note :** Utiliser `any` comme valeur pour `step` produira le même effet que la valeur `1` pour les champs `date`.

## Utilisation des contrôles de saisie des dates

Les champs date paraissent pratiques de prime abord : ils fournissent une interface utilisateur simple qui permet de sélectionner des dates et normalisent le format des données envoyées au serveur quelle que soit la locale de l'utilisateur. Toutefois, il existe certains problèmes avec `<input type="date">` en raison de la prise en charge limitée des navigateurs.

Dans les exemples qui suivent, nous verrons comment utiliser `<input type="date">` dans des cas simples et complexes en ajoutant des conseils quant à la prise en charge des navigateurs (en espérant que celle-ci s'améliore au fur et à mesure).

### Utilisation simple

Dans son expression la plus simple `<input type="date">` s'utilise avec un élément `<input>` et un élément {{htmlelement("label")}} :

```html
<form>
  <div>
    <label for="bday">Veuillez saisir votre date de naissance :</label>
    <input type="date" id="bday" name="bday">
  </div>
</form>
```

{{EmbedLiveSample('Utilisation_simple', 600, 40)}}

### Paramétrer une date maximale et une date minimale

On peut utiliser les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} afin de restreindre les dates qui peuvent être saisies par l'utilisateur. Dans l'exemple suivant, on indique un date minimum au premier avril 2017 (`2017-04-01`) et une date maximale au 30 avril 2017 (`2017-04-30`) :

```html
<form>
  <div>
    <label for="party">Veuillez choisir la meilleure date pour la soirée :</label>
    <input type="date" id="party" name="party" min="2017-04-01" max="2017-04-30">
  </div>
</form>
```

{{EmbedLiveSample('Paramétrer_une_date_maximale_et_une_date_minimale', 600, 40)}}

On ne peut donc ici que sélectionner une date en avril 2017. Seule la partie du contrôle consacrée aux jours sera éditable et on ne pourra pas sélectionner d'autres mois ou années..

> **Note :** On devrait également pouvoir utiliser l'attribut {{htmlattrxref("step", "input")}} afin de faire varier le nombre de jours pour l'incrément de la date (par exemple afin de ne pouvoir sélectionner que les samedis). Cependant, cette fonctionnalité ne semble être présente dans aucune implémentation au moment où nous écrivons ces lignes.

### Contrôler la taille du champ de saisie

`<input type="date">` ne permet pas d'utiliser des attributs de dimensionnement tels que {{htmlattrxref("size", "input")}}. Il est nécessaire d'utiliser [CSS](/fr/docs/Web/CSS) pour adresser ces aspects de mise en forme.

## Validation

Par défaut `<input type="date">` n'applique pas de validation particulière aux valeurs saisies. Les interfaces utilisateur ne permettent généralement pas de saisir une valeur qui n'est pas une date ou qui est une date invalide (par exemple un 32 avril 2017).

Si on utilise les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} afin de restreindre les dates possibles, les navigateurs qui prennent en charge cette fonctionnalité afficheront une erreur si la valeur saisie est en dehors de cet intervalle.

De plus, si l'attribut {{htmlattrxref("required", "input")}} est actif, il sera obligatoire de saisir ce champ. Une erreur sera affichée si on essaie d'envoyer le formulaire avec un tel champ vide.

Prenons un exemple où la date est contrainte entre deux dates et que le champ est obligatoire :

```html
<form>
  <div>
    <label for="party">Sélectionner la meilleure date (entre le premier et le 20 avril) :</label>
    <input type="date" id="party" name="party" min="2017-04-01" max="2017-04-20" required>
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit">
  </div>
</form>
```

Si on essaie de soumettre le formulaire avec une date incomplète (ou en dehors de l'intervalle indiqué), le message affichera une erreur. Vous pouvez essayer ici :

{{EmbedLiveSample('Validation', 600, 100)}}

Voici la feuille de style utilisée pour l'exemple. On utilise les pseudo-classes {{cssxref(":valid")}} et {{cssxref(":invalid")}} afin de mettre en forme un indicateur selon que la valeur est valide ou non. On place cet indicateur dans un élément {{htmlelement("span")}} séparé car pour Chrome, le contenu généré dans les pseudo-classes est intégré dans le contrôle du formulaire et ne peut être mis en forme ou affiché correctement.

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

input:invalid+span:after {
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  content: '✓';
  padding-left: 5px;
}
```

> **Attention :** La validation des valeurs du formulaire HTML par le client ne remplace pas la validation côté serveur afin de vérifier que le format est bien celui attendu. Il est tout à fait possible de modifier le code HTML afin d'outrepasser ces mécanismes de validation ou d'envoyer directement des données au serveur. Il est donc nécessaire de valider les données lorsque celles-ci parviennent au serveur afin d'éviter les effets indésirables entraînés par l'injection de données mal formatées ou malveillantes.

## Gérer la prise en charge des navigateurs

Comme indiqué ci-avant, le principal problème qu'on rencontre avec ces contrôles est l'hétérogénéité de la prise en charge par les différents navigateurs.

Les navigateurs qui ne prennent pas en charge ces contrôles utiliseront à la place des champs texte. Toutefois, cette solution de contournement entraîne deux problèmes : le premier concerne l'homogénéité de l'interface utilisateur (le contrôle affiché ne sera pas le même) et le second concerne la gestion des données.

C'est sur ce second point qu'il y a le plus de risques. Comme nous l'avons mentionné avant, un champ date est toujours normalisé sous la forme `yyyy-mm-dd` (les chiffres de l'année, un tiret, les chiffres du mois, un tiret, les chiffres du jour). Toutefois, pour un champ texte, les navigateurs ne reconnaissant pas le format dans lequel la date doit être écrite. Or, selon les langues, régions, pays, les personnes écrivent les dates de différentes façons. On pourrait ainsi avoir des dates écrites comme :

- `ddmmyyyy`
- `dd/mm/yyyy`
- `mm/dd/yyyy`
- `dd-mm-yyyy`
- `mm-dd-yyyy`

Une méthode permettant de parer à cette éventualité est d'utiliser l'attribut {{htmlattrxref("pattern", "input")}}. Bien que celui-ci ne soit pas utilisé pour les contrôles de saisie des dates, il peut être utilisé pour le champ texte. Voici un exemple que vous pouvez consulter dans un navigateur qui ne prend pas en charge cette fonctionnalité :

```html
<form>
  <div>
    <label for="bday">Veuillez saisir votre date de naissance :</label>
    <input type="date" id="bday" name="bday" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}">
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit">
  </div>
</form>
```

{{EmbedLiveSample('Gérer_la_prise_en_charge_des_navigateurs', 600, 100)}}

Si vous tentez d'envoyer ce formulaire, vous pourrez voir que le navigateur affiche un message d'erreur et met en évidence la valeur invalide si la valeur saisie ne correspond pas au motif `nnnn-nn-nn` (avec `n` un chiffre entre 0 et 9). Bien entendu, cela n'empêche pas de saisir des dates invalides ou mal formatées (par exemple avec le motif `yyyy-dd-mm` alors qu'on souhaiterait avoir `yyyy-mm-dd`). Il reste donc un problème.

```css hidden
div {
  margin-bottom: 10px;
}

input:invalid + span {
  position: relative;
}

input:invalid + span:after {
  content: '✖';
  position: absolute;
  right: -18px;
}

input:valid + span {
  position: relative;
}

input:valid + span:after {
  content: '✓';
  position: absolute;
  right: -18px;
}
```

C'est pour cela que la meilleure solution consiste à avoir trois champs de saisie distincts à destination de l'utilisateur : un pour saisir les jours, le deuxième pour les mois et un troisième pour l'année (chacun avec un élément ({{htmlelement("select")}}). On peut également opter pour l'utilisation d'un bibliothèque JavaScript telle que [le sélecteur de date jQuery (jQuery date picker)](https://jqueryui.com/datepicker/).

## Exemples

Dans l'exemple qui suit, on crée deux éléments d'interface utilisateur afin de choisir une date : le premier qui utilise un sélecteur natif `<input type="date">` et un second qui utilise trois éléments {{htmlelement("select")}}  qui permettra de choisir une date pour les anciens navigateurs qui ne prendraient pas en charge le contrôle natif.

{{EmbedLiveSample('Exemples', 600, 100)}}

Voici le code HTML utilisé :

```html
<form>
    <div class="nativeDatePicker">
      <label for="bday">Veuillez saisir votre date de naissance :</label>
      <input type="date" id="bday" name="bday">
      <span class="validity"></span>
    </div>
    <p class="fallbackLabel">Veuillez saisir votre date de naissance :</p>
    <div class="fallbackDatePicker">
      <span>
        <label for="day">Jour :</label>
        <select id="day" name="day">
        </select>
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
        <select id="year" name="year">
        </select>
      </span>
    </div>
</form>
```

Les mois sont écrits « en dur » (ce sont toujours les mêmes) alors que les valeurs pour les jours et les années sont générées dynamiquement en fonction du mois et de l'année sélectionnées (voir les commentaires ci-après qui expliquent le détail des fonctions).

```css hidden
input:invalid+span:after {
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  content: '✓';
  padding-left: 5px;
}
```

Une autre partie intéressante est celle où on détecte si le navigateur prend charge la fonctionnalité native `<input type="date">`. Pour cela, on crée un nouvelle élément {{htmlelement("input")}} et on change son type en `date` puis ensuite, on vérifie immédiatement la valeur de son type : pour les navigateurs qui ne prennent pas en charge l'élément natif, ils renverront la valeur `text` car l'élément natif aura été « converti ». Dans ce cas, on masque le sélecteur natif et on affiche le sélecteur alternatif (celui qui contient les éléments {{htmlelement("select")}}).

```js
// On définit les différentes variables
var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');

// Initialement, on masque le sélecteur non-natif
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// On teste si l'élément <input type="date">
// se transforme en <input type="text">
var test = document.createElement('input');
test.type = 'date';
// Si c'est le cas, cela signifie que l'élément
// n'est pas pris en charge et
if(test.type === 'text') {
  // On masque le sélecteur natif et on affiche
  // le sélecteur avec les <select>
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // On affiche les jours et les années
  // de façon dynamique
  populateDays(monthSelect.value);
  populateYears();
}

function populateDays(month) {
  // On supprime les éléments <option> pour l'élément
  // <select> des jours afin de pouvoir ajouter les prochains
  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  // On crée une variable afin de contenir le nombre
  // de jours à afficher
  var dayNum;

  // 31 ou 30 jours ?
  if(month === 'Janvier' || month === 'Mars' || month === 'Mai' || month === 'Juillet' || month === 'Août' || month === 'Octobre' || month === 'Décembre') {
    dayNum = 31;
  } else if(month === 'Avril' || month === 'Juin' || month === 'Septembre' || month === 'Novembre') {
    dayNum = 30;
  } else {
  // Si le mois est février, on calcule si l'année est bissextile
    var year = yearSelect.value;
    var leap = new Date(year, 1, 29).getMonth() == 1;
    dayNum = leap ? 29 : 28;
  }

  // on ajoute le bon nombre de jours dans autant
  // d'éléments <option> pour l'élément <select>
  // pour la journée
  for(i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Si le jour précédent a déjà été défini on utilise
  // la valeur de ce jour pour daySelect afin d'éviter de
  // réinitialiser le jour lorsqu'on change l'année
  if(previousDay) {
    daySelect.value = previousDay;

    // Si le jour précédent correspond au dernier jour d'un mois
    // et que le mois sélectionné possède moins de jours (par
    // exemple en février)
    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // On obtient l'année courante
  var date = new Date();
  var year = date.getFullYear();

  // On affiche l'année courante et les 100 années
  // précédentes pour l'élément <select> destiné à
  // stocker l'année
  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
}

// Lorsque la valeur du mois ou de l'année est modifiée
// on relance populateDays()
yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

// On conserve le jour sélectionné
var previousDay;

// On met à jour la journée utilisé précédemment
// (voir la fin de populateDays() pour voir où
// est utilisée cette valeur)
daySelect.onchange = function() {
  previousDay = daySelect.value;
}
```

> **Note :** Attention, certaines années peuvent contenir 53 semaines ! (cf. [cet article Wikipédia](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year)) Il vous faudra prendre cela en compte si vous souhaitez développer des applications réelles.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente une date ou qui est vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{event("change")}} et {{event("input")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("readonly", "input")}} et 
        {{htmlattrxref("step", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>list</code>, <code>value</code>, <code>valueAsDate</code>,
        <code>valueAsNumber</code>.
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                | État                             | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'forms.html#date-state-(type=date)', '&lt;input type="date"&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'forms.html#date-state-(type=date)', '&lt;input type="date"&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-date")}}

## Voir aussi

- L'élément générique {{HTMLElement("input")}} et l'interface DOM qu'il implémente : {{domxref("HTMLInputElement")}}
- [Un tutoriel sur les sélecteurs de date et d'heure](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs#date)
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Formats_date_heure_HTML)
