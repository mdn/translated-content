---
title: <input type="time">
slug: Web/HTML/Reference/Elements/input/time
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Les éléments {{HTMLElement("input")}} de type **`time`** permettent de créer des contrôles où l'utilisateur·ice peut saisir une heure (avec des minutes et éventuellement des secondes).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;time&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="appt">Choisissez une heure pour votre réunion&nbsp;:</label>

<input type="time" id="appt" name="appt" min="09:00" max="18:00" required />

<small>Les heures de bureau sont de 9h à 18h</small>
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

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `time` gèrent les attributs suivants.

> [!NOTE]
> À la différence d'autres types de donnée, les valeurs pour les heures sont sur un domaine **périodique**. Cela signifie qu'une fois la valeur maximale dépassée, on revient à la valeur minimale (autrement dit, on fait le tour de l'horloge). Ainsi, si on indique `min` avec la valeur `14:00` et `max` avec la valeur `2:00`, cela signifie que les valeurs autorisées sont comprises entre 2 heures de l'après-midi et jusqu'à 2 heures du matin le jour suivant. Pour plus de détails, voir la section [avoir un minimum et un maximum autour de minuit](#avoir_un_minimum_et_un_maximum_autour_de_minuit).

### `list`

La valeur de cet attribut est l'identifiant ({{DOMxRef("Element.id", "id")}}) d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément {{HTMLElement("datalist")}} fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Reference/Elements/input#type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

### `max`

Une chaîne de caractères indiquant l'heure la plus tardive qui peut être acceptée, définie dans le même [format de valeur temporelle](#format_de_la_valeur_de_lheure) que celui décrit ci-dessus. Si la chaîne de caractères définie n'est pas une heure valide, aucune valeur maximale n'est définie.

### `min`

Une chaîne de caractères indiquant l'heure la plus tôt qui peut être acceptée, définie dans le même [format de valeur temporelle](#format_de_la_valeur_de_lheure) que celui décrit ci-dessus. Si la chaîne de caractères définie n'est pas une heure valide, aucune valeur minimale n'est définie.

### `readonly`

Un attribut booléen qui, s'il est présent, indique que le champ ne peut pas être édité par l'utilisateur·ice. La valeur de l'attribut `value` peut, toutefois, être modifiée avec du code JavaScript qui modifierait la valeur de la propriété `value` sur l'objet {{DOMxRef("HTMLInputElement")}}.

> [!NOTE]
> Puisqu'un champ en lecture seule ne peut pas avoir de valeur, `required` n'a pas d'effet sur les champs qui ont également `readonly` présent.

### `step`

L'attribut `step` est un nombre qui définit la granularité à laquelle la valeur doit obéir, ou la valeur `any` (décrite ci-après). Seules les valeurs qui sont des incréments en multiple de `step` depuis la valeur de base ([`min`](#min) si cet attribut est défini, [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) sinon, et si aucun n'est fourni, une valeur par défaut appropriée) sont valides.

Pour les champs de type `time`, la valeur de `step` est exprimée en secondes et est interprétée comme un nombre de millisecondes égal à 1 000 fois la valeur de `step` (la valeur numérique sous-jacente est en millisecondes). La valeur par défaut est 60, ce qui correspond à 1 minute.

Une valeur de chaînes de caractères `any` signifie qu'aucun pas n'est implicite et que toute valeur est autorisée (sous réserve d'autres contraintes, telles que [`min`](#min) et [`max`](#max)). En réalité, cela a le même effet que `60` pour les champs `time`, car l'interface utilisateur du sélecteur ne permet dans ce cas que de sélectionner des minutes entières.

> [!NOTE]
> Lorsque les données saisies dans le contrôle ne respectent pas l'incrément, {{Glossary("user agent", "l'agent utilisateur")}} pourra arrondir à la valeur valide la plus proche, en privilégiant les nombres les plus grands si les deux options valides environnantes sont à égale distance.

## Validation

Par défaut, `<input type="time">` ne valide pas les valeurs saisies, autre que l'interface utilisateur qui ne permet généralement pas de saisir autre chose qu'une valeur temporelle. Cela est utile, mais vous ne pouvez pas vous fier entièrement à la valeur pour être une chaîne de temps correcte, car elle pourrait être une chaîne de caractères vide (`""`), ce qui est autorisé. Pour des exemples de validation des contraintes utilisant les attributs `min`, `max`, `step` et `required`, voir la section [définir les heures maximales et minimales](#définir_les_heures_minimales_et_maximales).

## Exemples

### Utilisation simple du type `time`

L'utilisation la plus simple de `<input type="time">` implique une combinaison simple d'un élément `<input>` et d'un élément {{HTMLElement("label")}}, comme illustré ci-dessous&nbsp;:

```html
<form>
  <label for="appointment-time">
    Choisissez une heure de rendez-vous&nbsp;:
  </label>
  <input id="appointment-time" type="time" name="appointment-time" />
</form>
```

{{EmbedLiveSample("Utilisation simple du type `time`", 600, 40)}}

### Créer une interface de sélection de l'heure

Dans cet exemple, nous créons un élément d'interface pour choisir l'heure en utilisant le sélecteur natif créé avec `<input type="time">`&nbsp;:

```html
<form>
  <label for="appointment-time">
    Choisissez une heure de rendez-vous (heures d'ouverture 12:00 à
    18:00)&nbsp;:
  </label>
  <input
    id="appointment-time"
    type="time"
    name="appointment-time"
    min="12:00"
    max="18:00"
    required />
  <span class="validity"></span>
</form>
```

```css
input[type="time"] {
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

{{EmbedLiveSample("Créer une interface de sélection de l'heure", 600, 140)}}

### Contrôler la taille du champ

`<input type="time">` ne prend pas en charge les attributs de taille de formulaire tels que [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size), car les heures ont toujours à peu près le même nombre de caractères. Vous devrez utiliser le [CSS](/fr/docs/Web/CSS) pour les besoins de dimensionnement.

### Définir l'attribut `value`

Vous pouvez définir une valeur par défaut pour le champ en incluant une heure valide dans l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) lors de la création de l'élément `<input>`, comme suit&nbsp;:

```html
<label for="appointment-time">
  Choisissez une heure de rendez-vous&nbsp;:
</label>
<input
  id="appointment-time"
  type="time"
  name="appointment-time"
  value="13:30" />
```

{{EmbedLiveSample("Définir l'attribut `value`", 600, 60)}}

### Définir la valeur à l'aide de JavaScript

Vous pouvez également obtenir et définir la valeur de l'heure en JavaScript en utilisant la propriété `value` de {{DOMxRef("HTMLInputElement")}}, par exemple&nbsp;:

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Format de la valeur de l'heure

La `value` du champs `time` est toujours au format 24 heures avec des zéros initiaux&nbsp;: `HH:mm`, quel que soit le format d'entrée, qui est probablement sélectionné en fonction de la locale de l'utilisateur·ice (ou par l'agent utilisateur). Si l'heure inclut des secondes (voir [Utiliser l'attribut `step`](#utiliser_lattribut_step)), le format est toujours `HH:mm:ss`. Vous pouvez en savoir plus sur le format de la valeur de l'heure utilisé par ce type d'entrée dans [la représentation des heures](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_heures).

Dans cet exemple, vous pouvez voir la valeur du champ de l'heure en saisissant une heure et en observant comment elle change ensuite.

Premièrement, regardons le HTML. Nous incluons un libellé et un champ de saisie, et ajoutons un élément {{HTMLElement("p")}} avec un {{HTMLElement("span")}} pour afficher la valeur du champ `time`&nbsp;:

```html
<form>
  <label for="startTime">Heure de début&nbsp;: </label>
  <input type="time" id="startTime" />
  <p>
    Valeur du champ <code>time</code>&nbsp;:
    <code>"<span id="value">n/a</span>"</code>.
  </p>
</form>
```

Le code JavaScript ajoute un écouteur d'évènements au champ de l'heure pour surveiller l'évènement {{DOMxRef("Element/input_event", "input")}}, qui est déclenché chaque fois que le contenu d'un élément de saisie change. Lorsque cela se produit, le contenu du `<span>` est remplacé par la nouvelle valeur de l'élément input.

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener("input", () => {
  valueSpan.innerText = startTime.value;
});
```

{{EmbedLiveSample("Format de la valeur de l'heure", 600, 80)}}

Lorsque un formulaire incluant un champ `time` est soumis, la valeur est encodée avant d'être incluse dans les données du formulaire. L'entrée de données du formulaire pour un champ de type time sera toujours sous la forme `name=HH%3Amm`, ou `name=HH%3Amm%3Ass` si des secondes sont incluses (voir [Utiliser l'attribut `step`](#utiliser_lattribut_step)).

### Utiliser l'attribut `step`

You can use the [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) attribute to vary the amount of time jumped whenever the time is incremented or decremented (for example, so the time moves by 10 minutes at a time when clicking the little arrow widgets).

It takes an integer value defining the number of seconds you want to increment by; the default value is 60 seconds. With this as the default, most user agent time UIs display hours and minutes but not seconds. Including the [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) attribute with any numeric value other than a value divisible by `60` adds seconds to the UI, if the `min` or `max` value has not already caused the seconds to be visible.

```html
<form>
  <label for="appointment-time">Choose an appointment time: </label>
  <input id="appointment-time" type="time" name="appointment-time" step="2" />
</form>
```

{{EmbedLiveSample('utiliser_lattribut_step', 600, 40)}}

Pour définir des minutes ou des heures comme pas, définissez le nombre de minutes ou d'heures en secondes, par exemple 120 pour 2 minutes, ou 7200 pour 2 heures.

### Définir les heures minimales et maximales

Vous pouvez utiliser les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) pour restreindre les heures valides que l'utilisateur·ice peut choisir. Dans l'exemple suivant, nous définissons une heure minimale de `12:00` et une heure maximale de `18:00`&nbsp;:

```html
<form>
  <label for="appointment-time">
    Choisissez une heure de rendez-vous (heures d'ouverture de 12:00 à
    18:00)&nbsp;:
  </label>
  <input
    id="appointment-time"
    type="time"
    name="appointment-time"
    min="12:00"
    max="18:00" />
  <span class="validity"></span>
</form>
```

{{EmbedLiveSample("Définir les heures minimales et maximales", 600, 40)}}

Voici le CSS utilisé dans l'exemple ci-dessus. Nous utilisons les propriétés CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} pour mettre en forme l'élément de saisie en fonction de la validité de la valeur actuelle. Nous ajoutons une icône en tant que contenu généré sur un {{HTMLElement("span")}} à côté de l'élément de saisie.

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

Le résultat ici est que&nbsp;:

- Seules les heures comprises entre 12:00 et 18:00 seront considérées comme valides&nbsp;; les heures en dehors de cette plage seront considérées comme invalides.

#### Avoir un minimum et un maximum autour de minuit

En définissant un attribut [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) supérieur à l'attribut [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max), la plage horaire valide contournera minuit pour produire une plage horaire valide. Cette fonctionnalité n'est pas prise en charge par d'autres types de champs de saisie.

```js
const input = document.createElement("input");
input.type = "time";
input.min = "23:00";
input.max = "01:00";
input.value = "23:59";

if (input.validity.valid && input.type === "time") {
  // <input type=time> plage inversée prise en charge
} else {
  // <input type=time> plage inversée non prise en charge
}
```

### Rendre les heures obligatoires

De plus, vous pouvez utiliser l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) pour rendre la saisie de l'heure obligatoire. Les navigateurs afficheront une erreur si vous essayez de soumettre une heure en dehors des limites définies ou un champ horaire vide.

Voyons un exemple&nbsp;; ici, nous avons défini des heures minimales et maximales, et avons également rendu le champ obligatoire&nbsp;:

```html
<form>
  <div>
    <label for="appointment-time">
      Choisissez une heure de rendez-vous (heures d'ouverture de 12:00 à
      18:00)&nbsp;:
    </label>
    <input
      id="appointment-time"
      type="time"
      name="appointment-time"
      min="12:00"
      max="18:00"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Envoyer le formulaire" />
  </div>
</form>
```

Si vous essayez de soumettre le formulaire avec une heure incomplète (ou avec une heure en dehors des limites définies), le navigateur affichera une erreur. Essayez de jouer avec l'exemple maintenant&nbsp;:

{{EmbedLiveSample("Rendre les heures obligatoires", 600, 120)}}

> [!WARNING]
> La validation des formulaires HTML _ne remplace pas_ les scripts qui garantissent que les données saisies sont au bon format. Il est beaucoup trop facile pour quelqu'un de modifier le HTML pour contourner la validation, ou de la supprimer entièrement. Il est également possible pour quelqu'un de contourner complètement votre HTML et de soumettre les données directement à votre serveur. Si votre code côté serveur ne valide pas les données qu'il reçoit, des catastrophes peuvent survenir lorsque des données mal formatées sont soumises (ou des données trop volumineuses, du mauvais type, etc.).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="/fr/docs/Web/HTML/Reference/Elements/input#valeur">Valeur</a></strong></td>
      <td>Une chaîne de caractères représentant une heure, ou une chaîne de caractères vide.</td>
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
        et
        {{DOMxRef("HTMLInputElement.stepUp", "stepUp()")}}.
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

- L'élément [`<input type="date">`](/fr/docs/Web/HTML/Reference/Elements/input/date)
- L'élément [`<input type="datetime-local">`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local)
- L'élément [`<input type="week">`](/fr/docs/Web/HTML/Reference/Elements/input/week)
- L'élément [`<input type="month">`](/fr/docs/Web/HTML/Reference/Elements/input/month)
- L'élément {{HTMLElement("input")}} ainsi que l'interface {{DOMxRef("HTMLInputElement")}} qui permet de le manipuler
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Guides/Date_and_time_formats)
- [Un tutoriel pour les sélecteurs de date et d'heure](/fr/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#sélection_de_date_et_heure)
