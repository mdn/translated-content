---
title: <input type="week">
slug: Web/HTML/Element/Input/week
tags:
  - Element
  - Formulaires
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/week
---
{{HTMLRef}}

Les éléments {{htmlelement("input")}} dont l'attribut `type` vaut **`week`** permettent de créer des champs de saisie où l'on peut saisir une année et le numéro de la semaine pendant cette année (allant de 1 à 52 ou 53, suivant la norme [ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601#Num%C3%A9ro_de_semaine)).

{{EmbedInteractiveExample("pages/tabbed/input-week.html", "tabbed-shorter")}}

L'interface utilisateur offerte par un tel contrôle varie en fonction des navigateurs. Au moment où nous écrivons ces lignes, seuls Chrome/Opera et Edge prennent en charge cette fonctionnalité. Pour les navigateurs qui ne l'implémentent pas, l'élément est interprété comme un élément [`<input type="text">`](/fr/docs/Web/HTML/Element/input/text).

Sous Chrome/Opera, le contrôle `week` fournit des emplacements pour les deux valeurs. Un calendrier est affiché afin de sélectionner plus faiclement la semaine et l'année. Un bouton avec une croix permet de supprimer la valeur saisie dans le contrôle.

![](week-control-chrome.png)

Pour Edge, le contrôle associé à `month` est plus élaboré et se compose de deux listes qu'on peut faire défiler séparement pour la semaine d'une part et l'année d'autre part.

![](week-control-edge.png)

## Valeur

Une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur de la semaine et de l'année saisies dans le champ. Le format précis de représentation d'une semaine donnée est décrit dans [l'article sur les formats des dates et heures en HTML](/fr/docs/Web/HTML/Formats_date_heure_HTML#Représentation_des_semaines).

Il est possible de définir une valeur par défaut grâce à l'attribut {{htmlattrxref("value", "input")}} de la façon suivante :

```html
<label for="week">À quelle semaine souhaiteriez-vous démarrer ?</label>
<input id="week" type="week" name="week" value="2017-W01">
```

{{EmbedLiveSample('Valeur', 600, 60)}}

On notera que le format affiché peut être différent de la valeur réellement utilisée pour l'attribut `value`. Cette dernière respecte toujours le format `yyyy-Www` (soit les quatre chiffres de l'année, suivi d'un tiret, suivi d'un W majuscule suivi des deux chiffres pour la semaine). Dans l'exemple précédent par exemple, l'interface utilisateur pourra afficher `Semaine 01 de l'année 2017` mais la valeur envoyée via le formulaire aura toujours la structure `week=2017-W01`.

Il est également possible d'accéder à la valeur ou de la définir en JavaScript grâce à la propriété {{domxref("HTMLInputElement.value")}}. Par exemple :

```js
var weekControl = document.querySelector('input[type="week"]');
weekControl.value = '2017-W45';
```

## Attributs supplémentaires

En complément des attributs pris en charge par l'ensemble des éléments {{HTMLElement("input")}}, les champs de semaine gèrent les attributs suivants :

| Attribut                       | Description                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("max")}}`         | La semaine (avec l'année) la plus tardive qui est considérée comme valide.                                                                              |
| `{{anch("min")}}`         | La semaine (avec l'année) la plus tôt qui est considérée comme valide.                                                                                  |
| `{{anch("readonly")}}` | Un booléen qui indique si l'utilisateur peut modifier la valeur du champ.                                                                               |
| `{{anch("step")}}`         | Le pas qui est utilisé pour incrémenter la valeur du champ. Cet incrément est utilisé par l'interface utilisateur et également pour vérifier la valeur. |

### {{htmlattrdef("max")}}

La semaine la plus tardive, indiquée avec l'année, sous la forme d'une chaîne de caractères au format `"yyyy-Www"`. Si la valeur saisie dans le champ (représentée par l'attribut {{htmlattrxref("value", "input")}}) est supérieure à cette date, [la validation échouera](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur fournie n'est pas une chaîne de caractères au format correct, aucun maximum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être supérieure ou égale à celle indiquée par l'attribut `min`.

### {{htmlattrdef("min")}}

La semaine la plus tôt, indiquée avec l'année, sous la forme d'une chaîne de caractères au format `"yyyy-Www"`. Si la valeur saisie dans le champ (représentée par l'attribut {{htmlattrxref("value", "input")}}) est antérieure à cette date, [la validation échouera](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur fournie pour cet attribut n'est pas une chaîne de caractères au format correct, aucun minimum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être inférieure ou égale à celle indiquée par l'attribut `max`.

{{page("/fr/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

### {{htmlattrdef("step")}}

{{page("/fr/docs/Web/HTML/Element/input/number", "step-include")}}

Pour les champs de type `week`, la valeur de l'attribut `step` est indiquée en nombre de semaine et le facteur de multiplication est 604 800 000 (qui correspond au nombre de millisecondes dans une semaine). Par défaut, la valeur de `step` est 1. La base à partir de laquelle incrémenter par défaut est -259 200 000 qui correspond à la première semaine de 1970 (`"1970-W01"`).

_À l'heure où ces lignes sont écrites, la signification de la valeur `"any"` pour l'attribut `step` pour les champs `week` n'est pas certaine. Cette information sera mise à jour dès que possible._

## Utiliser les contrôles de type `week`

Ces contrôles peuvent être pratiques selon certains aspects : ils permettent de sélectionner une semaine de façon simple, les données envoyées au serveur sont normalisées quelle que soit la langue ou le navigateur de l'utilisateur. Toutefois, en raison de la prise en charge des navigateurs actuellement limitée, `<input type="week">` pose quelques défis.

Nous verrons par la suite quelques cas d'utilisation simples puis complexes avant de voir comment gérer l'hétérogénéité des différents navigateurs (cf. {{anch("Gérer la prise en charge des navigateurs")}}).

### Utilisation simple

La forme la plus simple de `<input type="week">` se compose d'un élément `<input>` et d'un élément {{htmlelement("label")}} :

```html
<form>
  <label for="week">À quelle semaine souhaiteriez-vous commencer ?</label>
  <input id="week" type="week" name="week">
</form>
```

{{EmbedLiveSample('Utilisation_simple', 600, 40)}}

### Contrôler la taille du champ

`<input type="week">` ne prend pas en charge des attributs de dimensionnement (tel que {{htmlattrxref("size", "input")}}). Il sera nécessaire d'utiliser [CSS](/fr/docs/Web/CSS) si on a besoin de modifier la taille du contrôle.

### Utiliser l'attribut `step`

En théorie, l'attribut {{htmlattrxref("step", "input")}} devrait pouvoir être employé pour définir l'incrément minimal entre chaque semaine sélectionnable. Toutefois, il ne semble avoir encore aucun effet pour les navigateurs qui prennent en charge ce contrôle.

## Validation

Par défaut, `<input type="week">` n'applique aucune validation aux valeurs saisies. Les interfaces utilisateurs affichées ne permettent pas de saisir autre chose qu'un couple semaine / année. Toutefois, il est toujours possible de ne sélectionner aucune valeur, on peut également vouloir restreindre la plage de semaines qui peuvent être sélectionnées.

### Paramétrer des semaines minimum et maximum

Les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} peuvent être utilisés afin de restreindre les semaines qui peuvent être sélectionnées par l'utilisateur. Dans l'exemple qui suit, on indique une valeur minimale correspondant à la première semaine de 2017 et une valeur maximale correspondant à la dernière semaine de 2017 :

```html
<form>
  <label for="week">À quelle semaine souhaiteriez-vous commencer ?</label>
  <input id="week" type="week" name="week"
         min="2017-W01" max="2017-W52">
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample('Paramétrer_des_semaines_minimum_et_maximum', 600, 40)}}

Voici la feuille de style utilisée dans l'exemple précédent. Vous pourrez noter qu'on utilise les pseudo-classes {{cssxref(":valid")}} et {{cssxref(":invalid")}} afin de mettre en forme le contrôle selon que la valeur saisie est valide ou non. Les icônes associées sont placées dans un élément {{htmlelement("span")}} situé à côté du champ et non sur le champ même car, pour Chrome, le contenu généré dynamiquement avec les pseudo-éléments serait placé dans le contrôle du formulaire et ne pourrait être mis en forme efficacement.

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

Pour les navigateurs qui prennent en charge ce contrôle et ces fonctionnalités, on ne pourra sélectionner que les semaines de l'année 2017.

### Rendre la valeur obligatoire

On peut aussi utiliser l'attribut {{htmlattrxref("required", "input")}} afin que la saisie de la valeur soit obligatoire. Pour les navigateurs qui prennent en charge cette fonctionnalité, une erreur sera affichée lorsqu'on tentera d'envoyer un formulaire avec un champ vide pour une semaine.

Prenons un autre exemple (où la période a été restreinte comme précédemment) et où le champ est obligatoire :

```html
<form>
  <div>
    <label for="week">À quelle semaine souhaiteriez-vous commencer ?</label>
    <input id="week" type="week" name="week"
         min="2017-W01" max="2017-W52" required>
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Envoyer le formulaire">
  </div>
</form>
```

Si vous essayez de soumettre le formulaire sans aucune valeur, le navigateur affichera une erreur. Vous pouvez tester avec l'exemple qui suit :

{{EmbedLiveSample('Rendre_la_valeur_obligatoire', 600, 120)}}

Voici une capture d'écran du résultat obtenu si votre navigateur ne prend pas en charge cette fonctionnalité :

![](week-validation-chrome.png)

> **Attention :** la validation des données du formulaire HTML par le navigateur ne se substitue pas à la validation des données reçues côté serveur. En effet, il est tout à fait possible pour un utilisateur de modifier le HTML côté client et de passer outre les contraintes normalement appliquées. Il est également possible d'envoyer des données au serveur sans passer par le formulaire. Ne pas vérifier les données reçues côté serveur expose à des risques d'erreur voire d'attaques.

## Gérer la prise en charge des navigateurs

Comme évoqué plus haut, le principal problème associé à ce type de contrôle est l'absence de prise en charge par Safari, Firefox (hors mobile) et les anciennes versions d'Internet Explorer (pré-Edge).

Les plateformes mobiles comme Android et iOS fournissent un contrôle natif à l'ergonomie tactile adaptée. Voici par exemple le sélecteur `week` sur Chrome pour Android :

![](week-chrome-android.png)

Les navigateurs qui ne prennent pas en charge ce type de contrôle l'interprètent comme un champ texte mais cela crée des problèmes de cohérence tant au niveau de l'ergonomie qu'au niveau de la représentation des données.

C'est ce deuxième aspect qui peut poser le plus de problème. Comme nous l'avons mentionné avant, un contrôle `week` verra sa valeur normalisée pour respecter le format `yyyy-Www`. En revanche, pour un champ texte non reconnu par le navigateur, les utilisateurs pourraient saisir des semaines selon une variété de formats :

- `Première semaine de 2017`
- `Du 2 au 8 janvier 2017`
- `2017-W01`
- etc.

Si on souhaite gérer cette saisie de façon compatible entre les différents navigateurs, on utilisera alors deux contrôles distincts (représentés par des éléments {{htmlelement("select")}}) qui représenteront respectivement le numéro de la semaine et l'année.

## Exemples

Dans l'exemple qui suit, on construit deux ensembles d'éléments pour sélectionner une semaine : un sélecteur natif avec `<input type="week">` et un second composé de deux éléments {{htmlelement("select")}} qui permettent de choisir la semaine et l'année sur les navigateurs qui ne prennent pas en charge le contrôle natif.

{{EmbedLiveSample('Exemples', 600, 140)}}

Voici le code HTML utilisé :

```html
<form>
  <div class="nativeWeekPicker">
    <label for="week">À quelle semaine souhaiteriez-vous commencer ?</label>
    <input id="week" type="week" name="week"
           min="2017-W01" max="2018-W52" required>
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">À quelle semaine souhaiteriez-vous commencer ?</p>
  <div class="fallbackWeekPicker">
    <div>
      <span>
        <label for="week">Semaine :</label>
        <select id="fallbackWeek" name="week">
        </select>
      </span>
      <span>
        <label for="year">Année :</label>
        <select id="year" name="year">
          <option value="2017" selected>2017</option>
          <option value="2018">2018</option>
        </select>
      </span>
    </div>
  </div>
</form>
```

On génère les valeurs des semaines dynamiquement.

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

Dans le fragment de code JavaScript qui suit, on montre comment détecter si la fonctionnalité est prise en charge ou non. Pour cela, on crée un nouvel élément {{htmlelement("input")}} et on règle son `type` sur `week` puis on vérifie immédiatement la valeur de son type. Les navigateurs qui ne prennent pas en charge la fonctionnalité renverront `text`. Si c'est le cas, on masque le sélecteur natif et on affiche le sélecteur alternatif composé des deux éléments {{htmlelement("select")}}.

```js
// On définit certaines variables
var nativePicker = document.querySelector('.nativeWeekPicker');
var fallbackPicker = document.querySelector('.fallbackWeekPicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var yearSelect = document.querySelector('#year');
var weekSelect = document.querySelector('#fallbackWeek');

// À l'état initial, on masque le sélecteur alternatif
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// On teste si le sélecteur natif se transforme en
// contrôle de saisie de texte ou non
var test = document.createElement('input');
test.type = 'week';
// Si c'est le cas, on exécute le code dans le bloc
// conditionnel if() {}
if(test.type === 'text') {
  // On masque alors le sélecteur natif et
  // on affiche le sélecteur alternatif
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // On ajoute les semaines dynamiquement
  populateWeeks();
}

function populateWeeks() {
  // On ajoute 52 semaines grâce à une boucle
  for(var i = 1; i <= 52; i++) {
    var option = document.createElement('option');
    option.textContent = (i < 10) ? ("0" + i) : i;
    weekSelect.appendChild(option);
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
        représente une semaine et une année ou la chaîne vide.
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
| {{SpecName('HTML WHATWG', 'forms.html#week-state-(type=week)', '&lt;input type="week"&gt;')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-week")}}

## Voir aussi

- L'élément générique {{HTMLElement("input")}}
- L'interface du DOM qui permet de le manipuler {{domxref("HTMLInputElement")}}
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Formats_date_heure_HTML)
- [`<input type="datetime-local">`](/fr/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/fr/docs/Web/HTML/Element/input/date), [`<input type="time">`](/fr/docs/Web/HTML/Element/input/time), and [`<input type="month">`](/fr/docs/Web/HTML/Element/input/month)
