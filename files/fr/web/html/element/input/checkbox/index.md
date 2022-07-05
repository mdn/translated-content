---
title: <input type="checkbox">
slug: Web/HTML/Element/Input/checkbox
tags:
  - Element
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input/checkbox
---
{{HTMLRef}}

Les éléments {{htmlelement("input")}} de type **`checkbox`** sont affichés sous la forme de boîtes à cocher qui sont cochées lorsqu'elles sont activées. Elles permettent de sélectionner une ou plusieurs valeurs dans un formulaire.

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Note :** [Les boutons radio](/fr/docs/Web/HTML/Element/input/radio) sont semblables aux cases à cocher mais il existe une différence importante : les boutons radio permettent de sélectionner une seule valeur parmi plusieurs alors que les cases à cocher permettent de cocher/décocher plusieurs valeurs d'un groupe.

## Valeur

Une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur de la case à cocher. Cette chaîne de caractères n'est pas affichée côté client mais est envoyée au serveur comme valeur associée à la donnée envoyée avec le nom de la case à cocher. Par exemple :

```html
<form>
  <div>
    <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter">
    <label for="subscribeNews">Souhaitez-vous vous abonner à la newsletter ?</label>
  </div>
  <div>
    <button type="submit">S'abonner</button>
  </div>
</form>
```

{{EmbedLiveSample('Valeur', 600, 60)}}

Dans cet exemple, on a le nom (l'attribut `name`) `subscribe` utilisé pour la case à cocher avec une valeur (l'attribut `value`) qui est `newsletter`. Lorsque le formulaire est envoyé, les données seront transmises sous la forme `subscribe=newsletter`.

Si l'attribut `value` n'était pas renseigné, la valeur par défaut sera `on` (dans l'exemple, les données envoyées au serveur auraient la forme `subscribe=on`).

> **Note :** Si la case à cocher n'est pas cochée lorsque le formulaire est envoyé, aucune valeur n'est envoyée au serveur pour indiquer cet état (autrement dit, le client n'envoie pas quelque chose comme `value=unchecked`) ; la valeur n'est pas transmise au serveur du tout.

## Attributs supplémentaires

En plus des attributs qui sont partagés par l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `"checkbox"` prennent aussi en charge les attributs suivants :

| Attribut                   | Description                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [`checked`](#checked) | Un attribut booléen. Si celui-ci est présent, la case à cocher sera cochée.                                                          |
| [`value`](#value) | La chaîne de caractères qui sera utilisée pour représenter la valeur lorsque celle-ci sera envoyée au serveur si la case est cochée. |

### {{htmlattrdef("checked")}}

Un attribut booléen qui indique si la case est cochée. Cet attribut n'indique pas si la case est actuellement cochée : si l'état a été modifié, l'attribut dans le document ne reflètera pas cette modification (seul l'attribut IDL `checked`de l'objet {{domxref("HTMLInputElement")}} est mis à jour).

> **Note :** À la différence des autres champs, les valeurs des cases à cocher ne sont envoyées au serveur que lorsqu'elles sont cochées. Lorsque c'est le cas, c'est la valeur de l'attribut `value` qui est envoyé.

À la différence des autres navigateurs, Firefox [conserve l'état coché placé dynamiquement](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) d'un champ `<input>` après les rechargements de la page. L'attribut {{htmlattrxref("autocomplete","input")}} peut être utilisé afin de contrôler cette fonctionnalité.

### {{htmlattrdef("value")}}

L'attribut `value` est partagé par l'ensemble des éléments `<input>` mais il a un rôle spécifique pour les champs de type `checkbox` : lorsqu'un formulaire est envoyé, seules les cases à cocher qui sont cochées sont envoyées au serveur et c'est la valeur de l'attribut `value` qui est envoyée. Si l'attribut `value` n'est pas renseigné, ce sera la chaîne de caractères `"on"` qui sera envoyée par défaut.

## Utiliser les cases à cocher

### Gérer plusieurs cases à cocher

Dans l'exemple précédent, il n'y a qu'une seule case à cocher. Dans un scénario réaliste, on aura vraisemblablement plusieurs cases à cocher. Si celles-ci n'ont pas de rapport entre elles, il est possible de les gérer de façon séparée avec des cases à cocher « unitaires » comme illustré précédemment. Toutefois, si les valeurs sont liées entre elles, il est alors nécessaire d'indiquer ce lien.

Dans l'exemple qui suit, on affiche différentes cases à cocher pour représenter les intérets d'un utilisateur (voir l'exemple complet dans la section [Exemples](#exemples)).

```html
<fieldset>
  <legend>Veuillez sélectionner vos intérêts :</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding">
    <label for="coding">Développement</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">Musique</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Gérer_plusieurs_cases_à_cocher', 600, 100)}}

Dans cet exemple on voit que chaque case à cocher utilise le même attribut `name`. Si les deux cases sont cochées lorsque le formulaire est envoyé, la chaîne des paires nom/valeur qui sera envoyée au serveur sera : `interest=coding&interest=music`. Lorsque les données parviennent au serveur, on peut ainsi récupérer un tableau des valeurs sélctionnées (voir [Gérer plusieurs cases à cocher avec une seule variable côté serveur](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable) par exemple).

### Cocher certaines cases par défaut

Afin qu'une case à cocher soit sélectionnée par défaut, il suffit de placer l'attribut booléen `checked`. Voir l'exemple qui suit :

```html
<fieldset>
  <legend>Veuillez sélectionner vos intérêts</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked>
    <label for="coding">Développement</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">Musique</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('Cocher_certaines_cases_par_défaut', 600, 100)}}

### Fournir une zone cliquable plus grande

Dans les exemples précédents, vous avez peut-être remarqué qu'il était possible de cocher une case en cliquant sur l'élément {{htmlelement("label")}} associé. Il s'agit d'une fonctionnalité particulièrement utile des étiquettes de formulaire HTML : il y a ainsi plus d'espace qui peut être utilisé pour sélectionner les options voulues (notamment sur les petits écrans).

En plus des raisons liées à l'accessibilité, il s'agit d'une bonne raison pour indiquer correctement des éléments `<label>` dans vos formulaires.

### Gérer un état indéterminé

Il existe un état indéterminé pour les cases à cocher qui indique que la case n'est ni cochée, ni décochée mais indéterminéee. Cet état peut être obtenu via la propriété `indeterminate` d'un élément {{domxref("HTMLInputElement")}} en JavaScript (il est impossible d'obtenir cet état en utilisant uniquement du HTML) :

```js
inputInstance.indeterminate = true;
```

Dans la plupart des navigateurs, une case à cocher dans un état indéterminé est représentée avec une ligne horizontale en travers de la case.

Voici un exemple d'utilisation de cet état (tiré de [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/)) où on tient le compte des ingrédients qu'on possède pour une recette. Lorsqu'on coche ou décoche une case d'un ingrédient, une fonction JavaScript vérifie le nombre d'ingrédients possédés (c'est-à-dire cochés) :

- Si aucun n'est coché, la case associée à la recette est décochée.
- Si un ou deux éléments sont cochés, la case associée à la recette est dans un état indéterminé.
- Si les trois ingrédients sont cochés, la case associée à la recette est cochée.

Dans cet exemple, l'état `indeterminate` est utilisé afin d'indiquer qu'on possède certains ingrédients mais pas suffisamment pour une recette.

```js
var overall = document.querySelector('input[id="EnchTbl"]');
var ingredients = document.querySelectorAll('ul input');

overall.addEventListener('click', function(e) {
  e.preventDefault();
});

for(var i = 0; i < ingredients.length; i++) {
  ingredients[i].addEventListener('click', updateDisplay);
}

function updateDisplay() {
  var checkedCount = 1;
  for(var i = 0; i < ingredients.length; i++) {
    if(ingredients[i].checked) {
      checkedCount++;
    }
  }
  if(checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if(checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

> **Note :** Si vous envoyez un formulaire avec une case à cocher dans un état indéterminé, le résultat obtenu est le même que si la case avait été décochée : aucune donnée n'est envoyée au serveur.

## Validation

Il n'y a pas de mécanisme de validation natif pour la valeur d'une case à cocher.

## Exemples

Dans l'exemple suivant, on développe l'exemple vu précédemment avec les groupes de cases à cocher : il y a cette fois plus d'options et un champ texte libre qui permet de saisir une autre valeur. Pour cela on utilise un bloc de code JavaScript et quelques règles CSS pour la mise en forme.

```html
<form>
  <fieldset>
  <legend>Veuillez sélectionner vos intérêts</legend>
    <div>
      <input type="checkbox" id="coding" name="interest" value="coding">
      <label for="coding">Développement</label>
    </div>
    <div>
      <input type="checkbox" id="music" name="interest" value="music">
      <label for="music">Musique</label>
    </div>
    <div>
      <input type="checkbox" id="art" name="interest" value="art">
      <label for="art">Art</label>
    </div>
    <div>
      <input type="checkbox" id="sports" name="interest" value="sports">
      <label for="sports">Sports</label>
    </div>
    <div>
      <input type="checkbox" id="cooking" name="interest" value="cooking">
      <label for="cooking">Cuisine</label>
    </div>
    <div>
      <input type="checkbox" id="other" name="interest" value="other">
      <label for="other">Autre</label>
      <input type="text" id="otherValue" name="other">
    </div>
    <div>
      <button type="submit">Envoyer le formulaire</button>
    </div>
  </fieldset>
</form>
```

```css
html {
  font-family: sans-serif;
}

form {
  width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 10px;
}

fieldset {
  background: cyan;
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}

#otherValue
{
  display: none;
}

#other:checked ~ #otherValue
{
  display: inline-block;
}
```

### JavaScript

```js
var otherCheckbox = document.querySelector('input[value="other"]');
var otherText = document.querySelector('input[id="otherValue"]');
otherText.style.visibility = 'hidden';

otherCheckbox.onchange = function() {
  if(otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
};
```

{{EmbedLiveSample('Exemples', '100%', 300)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente la valeur de la case à cocher.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{event("change")}} et {{event("input")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td><code>checked</code></td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>checked</code> et <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                                | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', 'forms.html#checkbox-state-(type=checkbox)', '&lt;input type="checkbox"&gt;')}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('HTML5 W3C', 'forms.html#checkbox-state-(type=checkbox)', '&lt;input type="checkbox"&gt;')}}     | {{Spec2('HTML5 W3C')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-checkbox")}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface DOM qu'il implémente : {{domxref("HTMLInputElement")}}.
- {{cssxref(":checked")}}
- {{cssxref("indeterminate")}}
