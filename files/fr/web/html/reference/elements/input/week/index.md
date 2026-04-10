---
title: <input type="week">
slug: Web/HTML/Reference/Elements/input/week
l10n:
  sourceCommit: 13856107d2cab5bb9e40de608ee38a5770ef7c4d
---

Les éléments {{HTMLElement("input")}} de type **`week`** créent des champs de saisie permettant de saisir facilement une année ainsi que le [numéro de semaine ISO 8601](https://fr.wikipedia.org/wiki/ISO_8601#Semaine) correspondant à cette année (c'est-à-dire de la semaine 1 à la semaine [52 ou 53](https://fr.wikipedia.org/wiki/ISO_8601#Semaine)).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;week&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="camp-week">
  Choisissez une semaine en mai ou en juin&nbsp;:
</label>

<input
  type="week"
  name="week"
  id="camp-week"
  min="2018-W18"
  max="2018-W26"
  required />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

L'interface utilisateur du contrôle varie d'un navigateur à l'autre&nbsp;; la prise en charge inter-navigateurs est actuellement un peu limitée, seuls Chrome/Opera et Microsoft Edge le prennent en charge pour l'instant. Dans les navigateurs qui ne le prennent pas en charge, le contrôle se dégrade gracieusement pour fonctionner de manière identique à [`<input type="text">`](/fr/docs/Web/HTML/Reference/Elements/input/text).

![Un champ affichant 'semaine 01, 2017'. L'arrière-plan du 2017 utilise le même bleu que l'anneau de focus. Le champ contient 3 icônes : une croix pour effacer, un sélecteur avec de petites flèches haut et bas, et une flèche vers le bas plus grande. Un calendrier apparaît en pop-up sous le champ, réglé sur janvier 2017. La première colonne du calendrier indique la semaine : 52, 1, 2, 3, 4, 5. Le calendrier mensuel complet se trouve à droite. La ligne correspondant à la semaine 1 (du 2 au 8 janvier) est mise en surbrillance. Sur la même ligne que le mois, des boutons permettent de passer au mois suivant ou précédent.](week-control-chrome.png)

## Valeur

Une chaîne de caractères qui représente la valeur de la semaine et de l'année saisies dans le champ. Le format précis de représentation d'une semaine donnée est décrit dans [l'article sur les formats des dates et heures en HTML](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_semaines).

Il est possible de définir une valeur par défaut grâce à l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de la façon suivante&nbsp;:

```html
<label for="week">
  À quelle semaine souhaiteriez-vous démarrer&nbsp;?
</label>
<input id="week" type="week" name="week" value="2017-W01" />
```

{{EmbedLiveSample("Valeur", 600, 60)}}

Une chose à noter est que le format affiché peut différer de la `value` réelle, qui est toujours formatée en `yyyy-Www`. Lorsque la valeur ci‑dessus est envoyée au serveur, par exemple, les navigateurs peuvent l'afficher sous la forme `Semaine 01, 2017`, mais la valeur soumise restera toujours `week=2017-W01`.

Vous pouvez également obtenir et définir la valeur en JavaScript en utilisant la propriété {{DOMxRef("HTMLInputElement.value", "value")}} de l'élément d'entrée, par exemple&nbsp;:

```js
let weekControl = document.querySelector('input[type="week"]');
weekControl.value = "2017-W45";
```

## Attributs supplémentaires

En complément des attributs pris en charge par l'ensemble des éléments {{HTMLElement("input")}}, les champs de semaine gèrent les attributs suivants&nbsp;:

### `max`

La dernière année (chronologiquement) et le numéro de semaine acceptés, au format de chaîne de caractères décrit dans la section [Valeur](#valeur) ci‑dessus. Si la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) renseignée dans l'élément dépasse cette valeur, l'élément échoue à la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `max` n'est pas une chaîne de caractères représentant une semaine valide, alors l'élément n'a pas de valeur maximale.

Cette valeur doit être supérieure ou égale à l'année et à la semaine définies par l'attribut `min`.

### `min`

La première année et le numéro de semaine acceptés. Si la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de l'élément est inférieure à cette valeur, l'élément échoue à la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Si une valeur est définie pour `min` qui n'est pas une chaîne de caractères représentant une semaine valide, l'élément n'a pas de valeur minimale.

Cette valeur doit être inférieure ou égale à la valeur de l'attribut `max`.

### `readonly`

Un attribut booléen qui, s'il est présent, indique que le champ ne peut pas être édité par l'utilisateur·ice. La valeur de l'attribut `value` peut, toutefois, être modifiée avec du code JavaScript qui modifierait la valeur de la propriété `value` de l'objet {{DOMxRef("HTMLInputElement")}}.

> [!NOTE]
> Puisqu'un champ en lecture seule ne peut pas avoir de valeur, `required` n'a pas d'effet sur les champs qui ont également `readonly` présent.

### `step`

L'attribut `step` est un nombre qui définit la granularité à laquelle la valeur doit se conformer, ou la valeur spéciale `any`, décrite ci-dessous. Seules les valeurs qui sont un nombre entier de pas à partir de la base de pas sont valides. La base de pas est [`min`](#min) si spécifiée, [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) sinon, ou −259,200,000 (le début de la semaine `1970-W01`) si aucune n'est fournie.

Pour les champs `week`, la valeur de `step` est donnée en semaines et est traitée comme un nombre de millisecondes égal à 604,800,000 fois la valeur de `step` (la valeur numérique sous-jacente est en millisecondes). La valeur par défaut est 1, indiquant 1 semaine.

Une valeur de chaîne de caractères `any` signifie qu'aucun pas n'est implicite, et toute valeur est autorisée (sauf autres contraintes, telles que [`min`](#min) et [`max`](#max)). En réalité, cela a le même effet que `1` pour les champs `week` car l'interface de sélection ne permet de choisir que des semaines entières.

> [!NOTE]
> Lorsque les données saisies par l'utilisateur·ice ne respectent pas cette contrainte, {{Glossary("user agent", "l'agent utilisateur")}} pourra arrondir à la valeur valide la plus proche, avec une préférence pour les dates les plus avancées quand deux dates sont aussi proches de la valeur saisie.

## Utiliser les contrôles de type `week`

Ces contrôles peuvent être pratiques selon certains aspects&nbsp;: ils permettent de sélectionner une semaine de façon simple, les données envoyées au serveur sont normalisées quelle que soit la langue ou le navigateur de la personne saisissant dans le champ. Toutefois, en raison de la prise en charge des navigateurs actuellement limitée, `<input type="week">` pose quelques défis.

Nous verrons par la suite quelques cas d'utilisation simples puis complexes avant de voir comment gérer l'hétérogénéité des différents navigateurs (cf. [Gérer la prise en charge des navigateurs](#gérer_la_prise_en_charge_des_navigateurs)).

### Utilisation simple

La forme la plus simple de `<input type="week">` se compose d'un élément `<input>` et d'un élément {{HTMLElement("label")}}&nbsp;:

```html
<form>
  <label for="week">
    À quelle semaine souhaiteriez-vous commencer&nbsp;?
  </label>
  <input id="week" type="week" name="week" />
</form>
```

{{EmbedLiveSample("Utilisation simple", 600, 40)}}

### Contrôler la taille du champ

`<input type="week">` ne prend pas en charge des attributs de dimensionnement (tel que [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size)). Il sera nécessaire d'utiliser [CSS](/fr/docs/Web/CSS) si on a besoin de modifier la taille du contrôle.

### Utiliser l'attribut `step`

En théorie, l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) devrait pouvoir être employé pour définir l'incrément minimal entre chaque semaine sélectionnable. Toutefois, il ne semble avoir encore aucun effet pour les navigateurs qui prennent en charge ce contrôle.

## Validation

Par défaut, `<input type="week">` n'applique aucune validation aux valeurs saisies. Les interfaces utilisateurs affichées ne permettent pas de saisir autre chose qu'un couple semaine / année. Toutefois, il est toujours possible de ne sélectionner aucune valeur, on peut également vouloir restreindre la plage de semaines qui peuvent être sélectionnées.

### Paramétrer des semaines minimum et maximum

Les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) peuvent être utilisés afin de restreindre les semaines qui peuvent être sélectionnées par l'utilisateur·ice. Dans l'exemple qui suit, on indique une valeur minimale correspondant à la première semaine de 2017 et une valeur maximale correspondant à la dernière semaine de 2017&nbsp;:

```html
<form>
  <label for="week">
    À quelle semaine souhaiteriez-vous commencer&nbsp;?
  </label>
  <input id="week" type="week" name="week" min="2017-W01" max="2017-W52" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample("Paramétrer des semaines minimum et maximum", 600, 40)}}

Voici la feuille de style utilisée dans l'exemple précédent. Vous pourrez noter qu'on utilise les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} afin de mettre en forme le contrôle selon que la valeur saisie est valide ou non. Les icônes associées sont placées dans un élément {{HTMLElement("span")}} situé à côté du champ et non sur le champ même car, pour Chrome, le contenu généré dynamiquement avec les pseudo-éléments serait placé dans le contrôle du formulaire et ne pourrait être mis en forme efficacement.

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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Pour les navigateurs qui prennent en charge ce contrôle et ces fonctionnalités, on ne pourra sélectionner que les semaines de l'année 2017.

### Rendre la valeur obligatoire

On peut aussi utiliser l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) afin que la saisie de la valeur soit obligatoire. Pour les navigateurs qui prennent en charge cette fonctionnalité, une erreur sera affichée lorsqu'on tentera d'envoyer un formulaire avec un champ vide pour une semaine.

Prenons un autre exemple (où la période a été restreinte comme précédemment) et où le champ est obligatoire&nbsp;:

```html
<form>
  <div>
    <label for="week">
      À quelle semaine souhaiteriez-vous commencer&nbsp;?
    </label>
    <input
      id="week"
      type="week"
      name="week"
      min="2017-W01"
      max="2017-W52"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Envoyer le formulaire" />
  </div>
</form>
```

Si vous essayez de soumettre le formulaire sans aucune valeur, le navigateur affichera une erreur. Vous pouvez tester avec l'exemple qui suit&nbsp;:

{{EmbedLiveSample("Rendre la valeur obligatoire", 600, 120)}}

Voici une capture d'écran du résultat obtenu si votre navigateur ne prend pas en charge cette fonctionnalité&nbsp;:

![Le contrôle de formulaire de type « semaine » affiche deux tirets là où devrait se trouver le numéro de semaine. Une fenêtre contextuelle avec un symbole d'avertissement jaune et le message «Veuillez remplir ce champ» émane de ces deux tirets, qui sont mis en surbrillance en bleu, le même bleu que la bordure du champ lors de la sélection.](week-validation-chrome.png)

> [!WARNING]
> La validation des formulaires HTML _ne remplace pas_ les scripts qui garantissent que les données saisies sont au bon format. Il est très facile pour quelqu'un de modifier le HTML pour contourner la validation, ou de la supprimer entièrement. Il est également possible pour quelqu'un de contourner complètement votre HTML et d'envoyer les données directement à votre serveur. Si votre code côté serveur ne valide pas les données qu'il reçoit, des catastrophes peuvent survenir lorsque des données mal formatées (ou des données trop volumineuses, de type incorrect, etc.) sont saisies dans votre base de données.

## Gérer la prise en charge des navigateurs

Comme indiqué plus haut, le principal problème lié à l'utilisation des champs de type semaine est la prise en charge par les navigateurs&nbsp;: Safari et Firefox ne le prennent pas en charge sur bureau, et les anciennes versions d'Internet Explorer ne le prennent pas en charge.

Les plateformes mobiles telles qu'Android et iOS exploitent pleinement ce type de champ, en proposant des contrôles d'interface adaptés au tactile qui facilitent grandement la sélection des valeurs. Par exemple, le sélecteur `week` sur Chrome pour Android ressemble à ceci&nbsp;:

![Une fenêtre modale. L'en-tête indique « définir la semaine ». Il y a deux colonnes : la colonne de gauche affiche 36 au centre en pleine opacité, avec 35 au-dessus et 37 en dessous en semi-opacité. Sur la droite, 2017 est en pleine opacité. Il n'y a pas d'autres options. Trois liens texte ou boutons sont placés en bas : « effacer » à gauche, et « annuler » et « définir » à droite.](week-chrome-android.png)

Les navigateurs qui ne prennent pas en charge ce contrôle basculent sur un champ texte, ce qui pose des problèmes tant pour la cohérence de l'interface (le contrôle affiché est différent) que pour le traitement des données.

Le second problème est plus grave. Comme indiqué précédemment, avec un champ `week` la valeur réelle est toujours normalisée au format `yyyy-Www`. Quand le navigateur se rabat sur un champ texte générique, rien n'aide l'utilisateur·ice à formater correctement la saisie (ce qui n'est pas intuitif). Il existe plusieurs manières d'indiquer une semaine&nbsp;; par exemple&nbsp;:

- `Première semaine de 2017`
- `Du 2 au 8 janvier 2017`
- `2017-W01`
- etc.

À l'heure actuelle, la meilleure façon de gérer les semaines et les années dans les formulaires de manière compatible avec tous les navigateurs consiste à demander à l'utilisateur·ice de saisir le numéro de la semaine et l'année dans des champs distincts (les éléments {{HTMLElement("select")}} sont couramment utilisés&nbsp;; voir ci-dessous pour un exemple), ou à utiliser des bibliothèques JavaScript telles que [le sélecteur de date jQuery <sup>(angl.)</sup>](https://jqueryui.com/datepicker/).

## Exemples

Dans l'exemple qui suit, on construit deux ensembles d'éléments pour sélectionner une semaine&nbsp;: un sélecteur natif avec `<input type="week">` et un second composé de deux éléments {{HTMLElement("select")}} qui permettent de choisir la semaine et l'année sur les navigateurs qui ne prennent pas en charge le contrôle natif.

{{EmbedLiveSample("Exemples", 600, 140)}}

Voici le code HTML utilisé&nbsp;:

```html
<form>
  <div class="nativeWeekPicker">
    <label for="week">
      À quelle semaine souhaiteriez-vous commencer&nbsp;?
    </label>
    <input
      id="week"
      type="week"
      name="week"
      min="2017-W01"
      max="2018-W52"
      required />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">
    À quelle semaine souhaiteriez-vous commencer&nbsp;?
  </p>
  <div class="fallbackWeekPicker">
    <div>
      <span>
        <label for="week">Semaine&nbsp;:</label>
        <select id="fallbackWeek" name="week"></select>
      </span>
      <span>
        <label for="year">Année&nbsp;:</label>
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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Dans le fragment de code JavaScript qui suit, on montre comment détecter si la fonctionnalité est prise en charge ou non. Pour cela, on crée un nouvel élément {{HTMLElement("input")}} et on règle son `type` sur `week` puis on vérifie immédiatement la valeur de son type. Les navigateurs qui ne prennent pas en charge la fonctionnalité renverront `text`. Si c'est le cas, on masque le sélecteur natif et on affiche le sélecteur alternatif composé des deux éléments {{HTMLElement("select")}}.

```js
// On définit certaines variables
const nativePicker = document.querySelector(".nativeWeekPicker");
const fallbackPicker = document.querySelector(".fallbackWeekPicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const yearSelect = document.querySelector("#year");
const weekSelect = document.querySelector("#fallbackWeek");

// À l'état initial, on masque le sélecteur alternatif
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// On teste si le sélecteur natif se transforme en
// contrôle de saisie de texte ou non
const test = document.createElement("input");

try {
  test.type = "week";
} catch (e) {
  console.log(e.description);
}

// Si c'est le cas, on exécute le code dans le bloc
// conditionnel if() {}
if (test.type === "text") {
  // On masque alors le sélecteur natif et
  // on affiche le sélecteur alternatif
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // On ajoute les semaines dynamiquement
  populateWeeks();
}

function populateWeeks() {
  // On ajoute 52 semaines grâce à une boucle
  for (let i = 1; i <= 52; i++) {
    let option = document.createElement("option");
    option.textContent = i < 10 ? "0" + i : i;
    weekSelect.appendChild(option);
  }
}
```

> [!NOTE]
> N'oubliez pas que certaines années comptent 53 semaines (voir [Nombre de semaines par an <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year))&nbsp;! Vous devrez en tenir compte lors du développement d'applications de production.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères qui représente une semaine et une année ou qui est vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{DOMxRef("HTMLElement/change_event", "change")}} et
        {{DOMxRef("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
        <code>valueAsDate</code>,
        <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}},
        {{DOMxRef("HTMLInputElement.stepDown", "stepDown()")}},
        et {{DOMxRef("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant <sup>(angl.)</sup></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément générique {{HTMLElement("input")}} et l'interface qui permet de le manipuler, {{DOMxRef("HTMLInputElement")}}
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Guides/Date_and_time_formats)
- Les éléments [`<input type="datetime-local">`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local), [`<input type="date">`](/fr/docs/Web/HTML/Reference/Elements/input/date), [`<input type="time">`](/fr/docs/Web/HTML/Reference/Elements/input/time) et [`<input type="month">`](/fr/docs/Web/HTML/Reference/Elements/input/month)
