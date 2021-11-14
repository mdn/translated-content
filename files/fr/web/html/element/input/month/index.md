---
title: <input type="month">
slug: Web/HTML/Element/Input/month
tags:
  - Element
  - Input
  - Reference
translation_of: Web/HTML/Element/input/month
---
{{HTMLRef}}

Les éléments {{htmlelement("input")}} dont l'attribut `type` vaut **`"month"`** permettent de créer des contrôles où l'utilisateur peut saisir un mois et année. La valeur associée à un tel élément suit le format `"YYYY-MM"`, où `YYYY` représente l'année sur quatre chiffre et `MM` le mois sur deux chiffres.

{{EmbedInteractiveExample("pages/tabbed/input-month.html", "tabbed-shorter")}}

L'interface utilisateur associée à ce contrôle varie d'un navigateur à l'autre et la prise en charge de cette fonctionnalité reste encore hétérogène : seuls Chrome, Opéra et Edge implémentent cette fonctionnalité sur ordinateur et la plupart des navigateurs mobiles possèdent une implémentation. Pour les navigateurs qui ne prennent pas en charge cette fonctionnalité, l'élément sera transformé en un simple [`<input type="text">`](/fr/docs/Web/HTML/Element/input/text).

Si votre navigateur ne prend pas en charge ce type d'élément, voici ensuite une capture d'écran de Chrome : cliquer sur la flèche vers le bas permettra de faire apparaître un sélecteur de date qui permettra de choisir le mois et l'année.

![](month-control-chrome.png)

Voici un aperçu du contrôle sous Edge :

![](month-control-edge.png)

## Valeur

Une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur du mois et de l'année saisies via le contrôle, au format YYYY-MM (c'est-à-dire une année sur 4 chiffres suivi d'un tiret (`"-"`) suivi du mois sur deux chiffres. Le format détaillé est [décrit dans l'article sur les formats des dates/heures](/fr/docs/Web/HTML/Formats_date_heure_HTML#Représentation_des_mois).

Il est possible de définir une valeur par défaut pour le contrôle en utilisant l'attribut {{htmlattrxref("value", "input")}} de la façon suivante :

### Exemple 1

```html
<label for="bday-month">Quel est le mois de votre naissance ?</label>
<input id="bday-month" type="month" name="bday-month" value="2017-06">
```

{{EmbedLiveSample('Exemple_1', 600, 60)}}

On notera que la façon dont la date est affichée peut varier selon la locale de l'utilisateur et être présentée sous un format différent. En revanche, d'un point de vue technique, la valeur de l'attribut `value` suivra toujours le format `YYYY-MM`.

Par exemple, lorsque le formulaire précédent sera envoyé vers le serveur, l'information sera transmise de cette façon : `bday-month=1978-06`.

Il est également possible de manipuler la date en JavaScript grâce à la propriété {{domxref("HTMLInputElement.value")}}. Par exemple :

### Exemple 2

```html hidden
<label for="bday-month">Quel est le mois de votre naissance ?</label>
<input id="bday-month" type="month" name="bday-month" value="2017-06">
```

```js hidden
var monthControl = document.querySelector('input[type="month"]');
monthControl.value = '1978-06';
```

{{EmbedLiveSample("Exemple_2", 600, 60)}}

## Attributs supplémentaires

En complément des attributs pris en charge par l'ensemble des éléments {{HTMLElement("input")}}, les champs pour les mois gèrent les attributs suivants :

| Attribut                       | Description                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("max")}}`         | Le mois (et l'année) le plus tardif qui est considéré comme valide.                                                                                     |
| `{{anch("min")}}`         | Le mois (et l'année) le plus tôt qui est considéré comme valide.                                                                                        |
| `{{anch("readonly")}}` | Un booléen qui indique si l'utilisateur peut modifier la valeur du champ.                                                                               |
| `{{anch("step")}}`         | Le pas qui est utilisé pour incrémenter la valeur du champ. Cet incrément est utilisé par l'interface utilisateur et également pour vérifier la valeur. |

### {{htmlattrdef("max")}}

Le mois le plus tardif, indiqué avec l'année, sous la forme d'une chaîne de caractères au format `"yyyy-MM"`. Si la valeur saisie dans le champ (représentée par l'attribut {{htmlattrxref("value", "input")}}) est supérieure à cette date, [la validation échouera](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur fournie n'est pas une chaîne de caractères au format correct, aucun maximum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être supérieure ou égale à celle indiquée par l'attribut `min`.

### {{htmlattrdef("min")}}

Le mois le plus tôt, indiqué avec l'année, sous la forme d'une chaîne de caractères au format `"yyyy-MM"`. Si la valeur saisie dans le champ (représentée par l'attribut {{htmlattrxref("value", "input")}}) est antérieure à cette date, [la validation échouera](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur fournie pour cet attribut n'est pas une chaîne de caractères au format correct, aucun minimum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être inférieure ou égale à celle indiquée par l'attribut `max`.

### {{htmlattrdef("readonly")}}

Un attribut booléen qui, lorsqu'il est présent, indique que le champ ne peut pas être édité par l'utilisateur. La valeur de l'attribut `value` peut toutefois être modifiée grâce à du code JavaScript qui changerait la propriété {{domxref("HTMLInputElement.value")}}.

> **Note :** Un champ en lecture seule pouvant ne pas avoir de valeur, l'attribut `required` n'aura aucun effet si l'attribut `readonly` est défini.

### {{htmlattrdef("step")}}

{{page("/fr/docs/Web/HTML/Element/input/number", "step-include")}}

Pour les champs `month`, la valeur de l'attribut `step` est exprimée en mois et le facteur d'amplification est égal à 1 (la valeur sous-jacente est également exprimée en mois). La valeur par défaut pour cet attribut est 1.

## Utiliser `<input type="month">`

Un élément `<input>` de type `month` permet d'avoir une interface utilisateur simple d'utilisation pour choisir un mois et également de respecter un même format, quelle que soit la locale de l'utilisateur. Toutefois, `<input type="month">` n'est pas pris en charge par l'ensemble des navigateurs ce qui peut poser problème.

Nous verrons ici quelques cas d'utilisation, simples puis complexes et nous aborderons ensuite comment gérer l'absence de prise en charge.

### Utilisation simple

Dans son expression la plus simple, il suffit d'employer un élément `<input>` ainsi qu'un élément {{htmlelement("label")}} :

```html
<form>
  <label for="bday-month">Quel est le mois de votre naissance ?</label>
  <input id="bday-month" type="month" name="bday-month">
</form>
```

{{EmbedLiveSample('Utilisation_simple', 600, 40)}}

### Indiquer une date maximale et une date minimale

On peut utiliser les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} afin de restreindre la période pendant laquelle l'utilisateur peut choisir un mois. Dans l'exemple qui suit, on définit une date au plus tôt avec `1900-01` et une date au plus tard avec `2017-08`:

```html
<form>
  <label for="bday-month">Quel est le mois de votre naissance ?</label>
  <input id="bday-month" type="month" name="bday-month"
         min="1900-01" max="2017-08">
</form>
```

{{EmbedLiveSample('Indiquer_une_date_maximale_et_une_date_minimale', 600, 40)}}

Grâce ce fragment de code :

- Seuls les mois entre janvier 1900 et août 2017 peuvent être sélectionnés (le contrôle ne doit pas permettre de sélectionner un mois en dehors de cette période)
- Selon le navigateur, les mois en dehors de la période ne peuvent pas être sélectionnés (Edge) ou sont invalides mais toujours disponibles (Chrome).

> **Note :** L'attribut {{htmlattrxref("step", "input")}} devrait pouvoir être utilisé afin d'ajuster le pas d'incrémentation (par exemple si on ne veut pouvoir sélectionner que les mois de début de trimestre). Toutefois, à l'heure où nous écrivons ces lignes, aucun navigateur ne semble prendre correctement en charge cette fonctionnalité.

### Contrôler la taille du champ

`<input type="month">` ne peut pas être dimensionné grâce à {{htmlattrxref("size", "input")}}, il vous faudra utiliser [CSS](/fr/docs/Web/CSS) si besoin.

## Validation

Par défaut, `<input type="month">` n'applique pas de validation particulière sur la valeur saisie. C'est l'interface utilisateur qui ne permet pas de choisir autre chose qu'un mois.

Les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} permettent de limiter la période valide et l'attribut {{htmlattrxref("required", "input")}} rend le champ obligatoire. Avec ces attributs, les navigateurs afficheront un message d'erreur si la date choisie est hors de la période ou si la valeur est vide.

Prenons un exemple avec une période délimitée et un champ obligatoire :

```html
<form>
  <div>
    <label for="month">À quel mois souhaitez-vous venir cet été ?</label>
    <input id="month" type="month" name="month"
           min="2017-06" max="2017-09" required>
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Envoyer le formulaire">
  </div>
</form>
```

Si vous tentez d'envoyer le formulaire avec une date incomplète ou en dehors de cette période, le navigateur doit afficher un message d'erreur. Voici le résultat _live_ :

{{EmbedLiveSample('Validation', 600, 120)}}

Voici une capture d'écran qui illustre le résultat obtenu avec un navigateur prenant en charge cette fonctionnalité :

![](month-required.png)

Voici ensuite la feuille de style CSS utilisée dans l'exemple précédent. On utilise {{cssxref(":valid")}} et {{cssxref(":invalid")}} afin de mettre en forme le contrôle selon que la valeur saisie est invalide. Les icônes ajoutées sont placées dans un élément {{htmlelement("span")}} à part car Chrome ne permet pas de gérer du contenu généré à même le contrôle ni de mettre en forme ce contenu généré.

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

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur ! En effet, il est tout à fait possible pour un utilisateur de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

## Gérer la prise en charge des navigateurs

Comme évoqué plus haut, le problème principal relatif à ces contrôles est l'absence partielle de prise en charge des navigateurs. Seuls Chrome, Opera et Edge supportent ce type de contrôle sur ordinateurs et la plupart des navigateurs mobiles le prennent en charge. À titre d'exemple, voici une capture d'écran du contrôle sous Chrome pour Android :

![](month-android.png)

Les navigateurs qui ne prennent pas en charge cette fonctionnalité basculent sur un contrôle textuel classique mais cela pose problème à la fois en termes de cohérence de l'interface utilisateur et aussi par rapport à la gestion des données.

C'est ce deuxième aspect qui est le plus problématique. Comme nous l'avons mentionné, la valeur d'une date saisie dans un contrôle `<input type="month">` est toujours normalisée au format `"YYYY-MM"`. En revanche, avec un champ textuel, le navigateur ne convertit pas la valeur saisie et les personnes peuvent très bien écrire un mois sous plusieurs formes :

- `MMYYYY`
- `MM/YYYY`
- `MM-YYYY`
- `YYYY-MM`
- etc.

Une façon de contourner ce problème consiste à utiliser l'attribut {{htmlattrxref("pattern", "input")}} sur l'élément `<input type="month">`. Bien que le contrôle de type `month` ne gère pas cet attribut, ce dernier sera pris en charge par le champ texte. Vous pouvez essayer l'exemple suivant dans un navigateur qui ne prend pas en charge le contrôle de saisie des mois :

```html
<form>
  <div>
    <label for="month">À quel mois souhaitez-vous venir cet été ? (utilisez le format yyyy-mm)</label>
    <input id="month" type="month" name="month"
           min="2017-06" max="2017-09" required
           pattern="[0-9]{4}-[0-9]{2}">
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Envoyer le formulaire">
  </div>
</form>
```

{{EmbedLiveSample('Gérer_la_prise_en_charge_des_navigateurs', 600, 100)}}

Si vous tentez d'envoyer ce formulaire, vous verrez un message d'erreur si la valeur saisie ne respecte pas le format `nnnn-nn`, où `n` est un chiffre entre 0 et 9. Bien entendu, cela n'empêche pas de saisir des dates inexistantes ou au mauvais format.

De plus, cela présage que l'utilisateur comprenne le format dans lequel il faut saisir la valeur. Bref, le problème subsiste.

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

La meilleure façon de gérer la saisie de mois pour l'ensemble des navigateurs consiste actuellement à saisir le mois et l'année dans deux contrôles séparés, représentés chacun par un élément {{htmlelement("select")}}. On peut également utiliser certaines bibliothèques JavaScript telles que [jQuery date picker](https://jqueryui.com/datepicker/) ou le plugin [jQuery timepicker](http://timepicker.co/).

## Exemples

Dans l'exemple qui suit, on crée deux ensembles d'éléments pour choisir un mois : un sélecteur natif `<input type="month">` d'une part et un ensemble de deux éléments {{htmlelement("select")}} pour choisir le mois et l'année d'autre part (ce sont ces deux éléments qui seront utilisés lorsque le navigateur ne prend pas en charge le contrôle natif).

{{EmbedLiveSample('Exemples', 600, 140)}}

Voici le fragment de code HTML utilisé :

```html
<form>
  <div class="nativeDatePicker">
    <label for="month-visit">À quel mois souhaitez-vous venir cet été ?</label>
    <input type="month" id="month-visit" name="month-visit">
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">À quel mois souhaitez-vous venir cet été ?</p>
  <div class="fallbackDatePicker">
    <div>
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
  </div>
</form>
```

Les mois sont représentés statiquement (ce sont toujours les mêmes) et les valeurs pour les années sont générées dynamiquement à partir de l'année courante (voir les commentaires dans le code suivant).

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

Une partie intéressante du code est celle qui permet de détecter la prise en charge de fonctionnalité. Pour détecter si le navigateur prend en charge ce contrôle, on crée un nouvel élément {{htmlelement("input")}} dont on modifie le type afin qu'il vaille `month` puis on vérifie immédiatement la valeur associée au type : les navigateurs qui ne prennent pas en charge la fonctionnalité renverront `text` car le champ `month` a automatiquement transformé en `text`. Si c'est le cas, on masque le sélecteur natif et on affiche le sélecteur alternatif (celui construit avec les éléments {{htmlelement("select")}}).

```js
// On définit des variables
var nativePicker = document.querySelector('.nativeDatePicker');
var fallbackPicker = document.querySelector('.fallbackDatePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');

// Par défaut on masque le sélecteur alternatif
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// On teste si un nouveau contrôle est automatiquement
// converti en un champ texte
var test = document.createElement('input');
test.type = 'month';
// Si c'est le cas, on exécute le code dans ce bloc if
if(test.type === 'text') {
  // on masque le sélecteur natif et on masque le sélecteur alternatif
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // on génère les valeurs pour les années
  populateYears();
}

function populateYears() {
  // On récupère l'année courante
  var date = new Date();
  var year = date.getFullYear();

  // On ajoute l'année courante et les 100 années à venir
  // dans l'élément <select> pour l'année
  for(var i = 0; i <= 100; i++) {
    var option = document.createElement('option');
    option.textContent = year-i;
    yearSelect.appendChild(option);
  }
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
        représente un mois et une année ou bien la chaîne vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} et
        {{domxref("HTMLElement/input_event", "input")}}.
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
      <td><code>value</code></td>
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

## Specifications

| Spécification                                                                                                                    | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'forms.html#month-state-(type=month)', '&lt;input type="month"&gt;')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-month")}}

## Voir aussi

- L'élément générique {{HTMLElement("input")}} et l'interface DOM qui permet de le manipuler : {{domxref("HTMLInputElement")}}
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Formats_date_heure_HTML)
- [Un tutoriel à propos des sélecteurs de dates et d'heures](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs#Sélection_de_date_et_d'horaire)
- [`<input type="datetime-local">`](/fr/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/fr/docs/Web/HTML/Element/input/date), [`<input type="time">`](/fr/docs/Web/HTML/Element/input/time), and [`<input type="week">`](/fr/docs/Web/HTML/Element/input/week)
