---
title: <input type="time">
slug: Web/HTML/Element/Input/time
tags:
  - Formulaires
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/time
---
{{HTMLRef}}

Les éléments {{htmlelement("input")}} dont l'attribut `type` vaut **`time`** permettent de créer des contrôles où l'utilisateur peut saisir une heure (avec des minutes et éventuellement des secondes).

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

L'interface utilisateur affichée pour le contrôle peut varier d'un navigateur à l'autre. À l'heure où nous écrivons ces lignes, seul Safari ne prend pas en charge ce type de contrôle. Pour ce dernier, l'élément sera transformé en simple [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text).

## Apparence

### Chrome/Opera

Pour Chrome/Opera, le contrôle `time` possède deux cases permettant de saisir les heures d'une part et les minutes d'autre part (sur 12 ou 24 heures selon la locale de l'ordinateur), deux flèches pour augmenter ou réduire la valeur et une croix permettant de supprimer la valeur.

![Contrôle Chrome pour une heure sur 12 heures](chrome_time.png)12 heures

![Contrôle Chrome pour une heure sur 24 heures](chrome-time.png)24 heures

### Firefox

Pour Firefox, l'aspect du contrôle est similaire mais il ne possède pas les flèches d'incrément. L'horloge peut également s'utiliser sur un format 12 heures ou 24 heures (selon la locale du système). Un bouton rond avec une croix permet de réinitialiser la valeur du contrôle.

![Contrôle Firefox pour une heure sur 12 heures](firefox-time.png)12 heures

![Contrôle Firefox pour une heure sur 24 heures](firefox-time-24.png)24 heures

### Edge

Pour Edge, le contrôle affiché est un plus élaboré : il affiche un sélecteur avec deux bandes déroulantes pour choisir l'heure et les minutes (sur 12 ou 24 heures selon la locale) :

![Contrôle Edge pour la saisie sur 12 heures](edge_time.png)12 heures

![Contrôle Edge pour la saisie sur 24 heures](edge-time.png)24 heures

## Valeur

Une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur de l'heure saisie dans le contrôle. Il est possible de définir une valeur par défaut en indiquant une heure dans l'attribut {{htmlattrxref("value", "input")}} :

```html
<label for="appt-time">Veuillez choisir une heure de rendez-vous :</label>
<input id="appt-time" type="time" name="appt-time" value="13:30">
```

{{EmbedLiveSample('Valeur', 600, 60)}}

Il est également possible d'obtenir et de fixer l'heure en JavaScript grâce à la propriété {{domxref("HTMLInputElement.value")}}. Par exemple :

```js
var timeControl = document.querySelector('input[type="time"]');
timeControl.value = '15:30';
```

### Représentation de la valeur

Attention, le format d'affichage peut être différent de la valeur exacte contenue dans l'attribut `value`. Le format d'affichage sera choisi en fonction de la locale du système d'exploitation de l'utilisateur alors que la valeur de `value` suivra toujours le format `hh:mm` (où `hh` représente les deux chiffres de l'heure sur 24 heures et où `mm` représente les deux chiffres pour les minutes). Ainsi, `13:30`, pourra être affiché sous la forme `1.30 PM` dans le contrôle mais la valeur envoyée avec le formulaire sera toujours `appt-time=13%3A30`. Pour en savoir plus, vous pouvez vous référer à [l'article sur les formats utilisés pour les représentations des dates et heures](/fr/docs/Web/HTML/Formats_date_heure_HTML).

Prenons un autre exemple qui permet de voir simultanément la valeur dans le contrôle et celle stockée dans l'attribut :

#### HTML

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

On utilise quelques lignes de JavaScript afin de récupérer la valeur stockée et on l'insère dans l'élément `<span>` du fragment HTML précédent en surveillant l'évènement {{domxref("HTMLElement/input_event", "input")}} :

```js
var startTime = document.getElementById("startTime");
var valueSpan = document.getElementById("value");

startTime.addEventListener("input", function() {
  valueSpan.innerText = startTime.value;
}, false);
```

#### Résultat

{{EmbedLiveSample("Représentation_de_la_valeur", 600, 80)}}

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `"time"` gèrent les attributs suivants :

| Attribut                       | Description                                                                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("max")}}`         | L'heure la plus tardive qui est accepté, au format `"hh:mm"`.                                                                                      |
| `{{anch("min")}}`         | L'heure la plus tôt qui est acceptée au format `"hh:mm"`.                                                                                          |
| `{{anch("readonly")}}` | Un attribut booléen qui, lorsqu'il est présent, indique que le contenu du champ ne peut pas être édité par l'utilisateur.                          |
| `{{anch("step")}}`         | Le pas à utiliser pour l'incrément quand on utilise les boutons d'augmentation/diminution. Cet incrément est également utilisé pour la validation. |

> **Note :** À la différence d'autres types de donnée, les valeurs pour les heures sont sur un domaine **périodique**. Cela signifie qu'une fois la valeur maximale dépassée, on revient à la valeur minimale (autrement dit, on fait le tour de l'horloge). Ainsi, si on indique `min` avec la valeur `"14:00"` et `max` avec la valeur `"2:00"`, cela signifie que les valeurs autorisées sont comprises entre 2 heures de l'après-midi et jusqu'à 2 heures du matin le jour suivant.

### {{htmlattrdef("max")}}

Une chaîne de caractères, au format `"hh:mm"`, qui indique l'heure la plus tardive qui est considérée comme valide. Si la chaîne fournie n'est pas valide, aucun maximum n'est défini.

### {{htmlattrdef("min")}}

Une chaîne de caractères, au format `"hh:mm"`, qui indique l'heure la plus tôt qui est considérée comme valide. Si la chaîne fournie n'est pas valide, aucun minimum n'est défini.

{{page("/fr/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

### {{htmlattrdef("step")}}

{{page("/fr/docs/Web/HTML/Element/input/number", "step-include")}}

Pour les champs de type `time`, la valeur de l'attribut `step` est exprimée en secondes (avec un facteur de multiplication de 1000). Par défaut, la valeur de l'incrément est 60, ce qui correspond à 1 minute.

_À l'heure où ces lignes sont écrites, la signification de la valeur `"any"` pour l'attribut `step` pour les champs `time` n'est pas certaine. Cette information sera mise à jour dès que possible._

## Utiliser `<input type="time">`

Ces champs de saisie peuvent sembler pratiques : ils fournissent simplement une interface utilisateur pour sélectionner ds heures et normalisent les données dans un format (indépendant de la locale de l'utilisateur) avant de l'envoyer au serveur. Toutefois, quelques écueils peuvent apparaître en raison de la prise en charge hétérogène des différents navigateurs.

Dans la suite de cet article, nous verrons des cas d'utilisation simples puis complexes autour de `<input type="time">` puis nous verrons comment gérer l'absence de prise en charge des navigateur avec un exemple plus développé.

### Utilisation simple

Dans sa forme la plus simple, `<input type="time">` n'est accompagné que d'un élément {{htmlelement("label")}} :

```html
<form>
  <label for="appt-time">Veuillez choisir une heure de rendez-vous : </label>
  <input id="appt-time" type="time" name="appt-time">
</form>
```

{{EmbedLiveSample('Utilisation_simple', 600, 40)}}

### Ajuster la taille du contrôle

`<input type="time">` ne prend pas en charge d'attribut qui permette de le dimensionner (à la façon de {{htmlattrxref("size", "input")}}). Il faut donc utiliser [CSS](/fr/docs/Web/CSS) si besoin.

### Utiliser `step`

L'attribut {{htmlattrxref("step", "input")}} peut être utilisé afin de faire varier l'incrément de temps lorsqu'on passe d'une valeur à la suivante ou à la précédente. Attention toutefois, cela n'est pas pris en charge ou homogène parmi les différents navigateurs.

La valeur de cet attribut est un entier exprimant le nombre de secondes à incrémenter. Si on choisit une valeur inférieure à 60 secondes (c'est-à-dire 1 minute), le contrôle `time` affichera alors une troisième section pour les secondes après les heures et les minutes:

```html
<form>
  <label for="appt-time">Veuillez choisir une heure de rendez-vous : </label>
  <input id="appt-time" type="time" name="appt-time" step="2">
</form>
```

{{EmbedLiveSample("Utiliser_step", 600, 40)}}

Cependant, cela ne semble avoir un effet prévisible que pour Chrome/Opera qui sont les deux navigateurs à posséder des flèches d'incrément. Avant l'exemple précédent, cliquer sur le flèche augmentera/réduira l'heure de deux secondes (si on souhaite manipuler des minutes, il faudra multiplier par 60 et de même pour les heures : un incrément de 120 correspondra à 2 minutes et un incrément de 7200 correspondra à 2 heures).

Cet attribut semble n'avoir aucun impact pour Firefox ou Edge voire empêche la validation de fonctionner (voir la prochaine section).

## Validation

Par défaut `<input type="time">` ne valide pas les valeurs saisies. En effet, l'interface utilisateur ne permet de choisir une valeur exotique (par exemple 36:87).

### Indiquer une heure maximale et minimale

Les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} permettent de réduire la plage horaire valide pendant laquelle l'utilisateur peut sélectionner une heure. Dans l'exemple suivant, l'utilisateur peut saisir une heure minimum de `12:00` et une heure maximum de `18:00`:

```html
<form>
  <label for="appt-time">Veuillez choisir une heure de rendez-vous (heures d'ouverture 12:00 à 18:00) : </label>
  <input id="appt-time" type="time" name="appt-time"
         min="12:00" max="18:00">
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Indiquer_une_heure_maximale_et_minimale', 600, 40)}}

Voici la feuille de style CSS utilisée dans l'exemple précédent. On utilise les pseudos-classes {{cssxref(":valid")}} et {{cssxref(":invalid")}} afin de mettre en forme le contrôle selon que la valeur saisie est valide ou non. Les icônes qui indiquent cette validité ont été placées dans un élément {{htmlelement("span")}} à part car Chrome ne permet pas de placer du contenu généré dans le contrôle.

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

Avec ce fragment de code HTML :

- Seules les heures comprises entre 12:00 et 18:00 sont affichées comme étant valides (les heures avant et après seront invalides).
- Selon le navigateur utilisé, il peut même être impossible de sélectionner une heure en dehors de la plage restreinte (avec Edge notamment).

### Rendre la saisie obligatoire

On peut également utiliseer l'attribut {{htmlattrxref("required", "input")}} afin que la saisie du champ soit obligatoire. Lorsque c'est le cas, les navigateurs afficheront un message d'erreur si l'utilisateur tente d'envoyer le formulaire sans avoir saisi de valeur (ou si celle-ci est en dehors de la plage indiquée).

Prenons l'exemple suivant qui restreint la plage horaire sélectionnable et qui rend le champ obligatoire :

```html
<form>
  <div>
    <label for="appt-time">Veuillez choisir une heure de rendez-vous (horaires d'ouverture entre 12:00 et 18:00) : </label>
    <input id="appt-time" type="time" name="appt-time"
           min="12:00" max="18:00" required>
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Envoyer le formulaire">
  </div>
</form>
```

Si vous essayez de soumettre le formulaire sans avoir saisi de valeur (ou avec une heure en dehors des heures d'ouverture indiquées), le navigateur affichera une erreur. Vous pouvez manipuler le résultat obtenu :

{{EmbedLiveSample('Rendre_la_saisie_obligatoire', 600, 120)}}

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur ! En effet, il est tout à fait possible pour un utilisateur de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

## Gérer la prise en charge des navigateurs

Comme mentionné avant, un problème peut être l'hétérogénéité de la prise en charge des navigateurs : Safari ne prend pas en charge cette fonctionnalité sur les ordinateurs de bureau et les anciennes versions d'Internet Explorer n'implémentent pas cet élément.

Pour les plateformes mobiles (Android et iOS par exemple), les systèmes d'exploitation fournissent des interfaces particulièrement adaptées aux environnements tactiles. Voici par exemple le sélecteur d'heure pour Chrome sur Android :

![](chrome-android-time.png)

Lorsqu'un navigateur ne prend pas en charge ce type d'élément, il utilise un champ texte (`<input type="text">`) à la place. Mais cela crée des problèmes, tant au niveau de l'interface utilisateur que de la cohérence des données et du format.

C'est ce problème de format qui est le plus important. Comme nous l'avons expliqués plus haut, un champ`time` permet d'obtenir un valeur normalisée, respectant le format `hh:mm`. Avec un champ texte, le navigateur ne reconnaît pas de format particulier pour l'heure et les utilisateurs peuvent employer différentes formes pour décrire l'heure voulue :

- `3.00 pm`
- `3:00pm`
- `15:00`
- `3h de l'après-midi`
- etc.

Une façon de contourner ce problème consiste à utiliser l'attribut {{htmlattrxref("pattern", "input")}} sur le champ `time`. Bien que le champ `time` n'utilise pas cet attribut, le champ texte pourra l'utiliser. Vous pouvez par exemple tester ce fragment de code dans un navigateur qui ne prend pas en charge `<input type="time">` :

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

{{EmbedLiveSample('Gérer_la_prise_en_charge_des_navigateurs', 600, 100)}}

Si on essaie d'envoyer une valeur qui ne respecte pas le bon format, le navigateur affichera un message d'erreur et mettra en évidence le champ si celui-ci ne suit pas la forme `nn:nn` avec `n` un nombre entre 0 et 9. Bien entendu, cela n'empêche pas de saisir des heures invalides mais qui respectent ce format.

De plus, comment communiquer à l'utilisateur le format dans lequel saisir l'heure ?

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

Actuellement, la meilleure façon de gérer ce type de saisie pour les différents navigateurs consiste à utiliser deux contrôles (le premier pour la saisie des heures et le second pour la saisie des minutes) avec deux éléments {{htmlelement("select")}} (cf. ci-après) ou d'utiliser certaines bibliothèques JavaScript telles que [jQuery date picker](https://jqueryui.com/datepicker/) ou encore [jQuery timepicker plugin](http://timepicker.co/).

## Exemples

Dans l'exemple qui suit, on crée deux ensembles d'éléments : un sélecteur natif avec `<input type="time">` et un ensemble de deux éléments {{htmlelement("select")}} qui permettent de choisir des heures et des minutes dans les navigateurs qui ne prennent pas en charge le contrôle natif.

{{EmbedLiveSample('Exemples', 600, 140)}}

Voici le fragment HTML utilisé :

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

La partie la plus intéressante du code est celle qui permet de détecter si le contrôle natif est pris en charge. Pour cela, on crée un nouvel élément {{htmlelement("input")}} et on modifie son attribut `type` afin qu'il vaille `time`, immédiatement après, on vérifie la valeur du type. Si le navigateur ne prend pas en charge l'élément, il renverra `text` car l'élément a été transformé en `<input type="text">`, dans ce cas, on masque le sélecteur natif et on affiche l'interface alternative avec les deux éléments {{htmlelement("select")}}.

```js
// On définit quelques variables
var nativePicker = document.querySelector('.nativeTimePicker');
var fallbackPicker = document.querySelector('.fallbackTimePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var hourSelect = document.querySelector('#hour');
var minuteSelect = document.querySelector('#minute');

// On cache le sélecteur alternatif
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// On teste si un nouveau contrôle time
// est transformé en text
var test = document.createElement('input');
test.type = 'time';
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
  for(var i = 12; i <= 18; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // On génère 60 options pour 60 minutes
  for(var i = 0; i <= 59; i++) {
    var option = document.createElement('option');
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

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente un heure (avec des minutes) ou bien une chaîne de caractères
        vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} et
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("readonly", "input")}} et
        {{htmlattrxref("step", "input")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>value</code>, <code>valueAsDate</code>,
        <code>valueAsNumber</code>, <code>list</code>.
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                | État                             | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'forms.html#time-state-(type=time)', '&lt;input type="time"&gt;')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-time")}}

## Voir aussi

- L'élément générique {{HTMLElement("input")}} ainsi que l'interface DOM {{domxref("HTMLInputElement")}} qui peut être utilisée pour manipuler l'élément
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Formats_date_heure_HTML)
- [Un tutoriel pour les sélecteurs de date et d'heure](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs#Sélection_de_date_et_d'horaire)
- [`<input type="datetime-local">`](/fr/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/fr/docs/Web/HTML/Element/input/date), [`<input type="week">`](/fr/docs/Web/HTML/Element/input/week), and [`<input type="month">`](/fr/docs/Web/HTML/Element/input/month)
