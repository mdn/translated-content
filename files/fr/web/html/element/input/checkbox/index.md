---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
l10n:
  sourceCommit: 2b4bf33acb346baf925fad1317f425ba2b967456
---

{{HTMLSidebar}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/input) de type **`checkbox`** sont affichés sous la forme de boîtes à cocher qui sont cochées lorsqu'elles sont activées. Elles permettent de sélectionner une ou plusieurs valeurs dans un formulaire. Leur apparence exacte dépend du navigateur utilisé. Il s'agit généralement d'une case carrée, dont les coins peuvent parfois être arrondis.

{{EmbedInteractiveExample("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Note :** [Les boutons radio](/fr/docs/Web/HTML/Element/input/radio) sont semblables aux cases à cocher, mais il existe une différence importante&nbsp;: les boutons radio permettent de sélectionner une seule valeur parmi plusieurs d'[un même groupe (identifié par le nom)](/fr/docs/Web/HTML/Element/input/radio#defining_a_radio_group) alors que les cases à cocher permettent de cocher/décocher plusieurs valeurs d'un groupe.

## Valeur

Une chaîne de caractères qui représente la valeur de la case à cocher. Cette chaîne de caractères n'est pas affichée côté client mais est envoyée au serveur comme valeur associée à la donnée envoyée avec le nom de la case à cocher. Par exemple&nbsp;:

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews">
      Souhaitez-vous vous abonner à la newsletter ?
    </label>
  </div>
  <div>
    <button type="submit">Subscribe</button>
  </div>
</form>
```

Dans cet exemple, on a le nom (l'attribut `name`) `subscribe` utilisé pour la case à cocher avec une valeur (l'attribut `value`) qui est `newsletter`. Lorsque le formulaire est envoyé, les données seront transmises sous la forme `subscribe=newsletter`.

Si l'attribut `value` n'était pas renseigné, la valeur par défaut serait `on` (dans l'exemple, les données envoyées au serveur auraient eu la forme `subscribe=on`).

> **Note :** Si la case à cocher n'est pas cochée lorsque le formulaire est envoyé, ni le nom ni la valeur ne sont envoyés au serveur pour indiquer cet état (autrement dit, le client n'envoie pas quelque chose comme `value=unchecked`)&nbsp;; la valeur n'est pas transmise au serveur du tout. Si on veut envoyer une valeur par défaut lorsque la case à cocher est décochée, une solution pourrait être d'utiliser du JavaScript pour créer un élément [`<input type="hidden">`](/fr/docs/Web/HTML/Element/input/hidden).

## Attributs supplémentaires

En plus des attributs qui sont partagés par l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/input), les champs de type `checkbox` prennent aussi en charge les attributs suivants&nbsp;:

- `checked`

  - : Un attribut booléen qui indique si la case est cochée par défaut à l'ouverture de la page. Cet attribut n'indique _pas_ si la case est actuellement cochée&nbsp;: si l'état a été modifié, l'attribut dans le document ne reflètera pas cette modification (seul l'attribut IDL `checked` de l'objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) est mis à jour).
    > **Note :** À la différence des autres champs, les valeurs des cases à cocher ne sont envoyées au serveur que lorsqu'elles sont cochées. Lorsque c'est le cas, c'est la valeur de l'attribut `value` qui est envoyé (ou la valeur `on` si aucun attribut `value` n'est présent).
    > À la différence des autres navigateurs, Firefox [conserve l'état coché placé dynamiquement](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) d'un champ `<input>` après les rechargements de la page. L'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/input#autocomplete) peut être utilisé afin de contrôler cette fonctionnalité.

- `value`
  - : L'attribut `value` est partagé par l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/input), mais il a un rôle spécifique pour les champs de type `checkbox`&nbsp;: lorsqu'un formulaire est envoyé, seules les cases à cocher qui sont cochées sont envoyées au serveur et c'est la valeur de l'attribut `value` qui est envoyée. Si l'attribut `value` n'est pas renseigné, ce sera la chaîne de caractères `"on"` qui sera envoyée par défaut (voir [la section précédente](#valeur))

## Utiliser les cases à cocher

### Gérer plusieurs cases à cocher

Dans l'exemple précédent, il n'y a qu'une seule case à cocher. Dans un scénario réaliste, on aura vraisemblablement plusieurs cases à cocher. Si celles-ci n'ont pas de rapport entre elles, il est possible de les gérer de façon séparée avec des cases à cocher «&nbsp;unitaires&nbsp;» comme illustré précédemment. Toutefois, si les valeurs sont liées entre elles, il est alors nécessaire d'indiquer ce lien.

Dans l'exemple qui suit, on affiche différentes cases à cocher pour représenter les intérêts d'une personne (voir l'exemple complet dans la section [Exemples](#exemples)).

```html
<fieldset>
  <legend>Veuillez sélectionner vos intérêts</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" />
    <label for="coding">Développement</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Musique</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('', 600, 100)}}

Dans cet exemple on voit que chaque case à cocher utilise le même attribut `name`. Si les deux cases sont cochées lorsque le formulaire est envoyé, la chaîne des paires nom/valeur qui sera envoyée au serveur sera&nbsp;: `interest=coding&interest=music`. Lorsque les données parviennent au serveur, on peut ainsi récupérer un tableau des valeurs sélectionnées (voir [la question StackOverflow&nbsp;: Gérer plusieurs cases à cocher avec une seule variable côté serveur](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable) par exemple).

### Cocher certaines cases par défaut

Afin qu'une case à cocher soit sélectionnée par défaut, il suffit de placer l'attribut booléen `checked`. Voir l'exemple qui suit&nbsp;:

```html
<fieldset>
  <legend>Veuillez sélectionner vos intérêts</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked />
    <label for="coding">Développement</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music" />
    <label for="music">Musique</label>
  </div>
</fieldset>
```

{{EmbedLiveSample('', 600, 100)}}

### Fournir une zone cliquable plus grande

Dans les exemples précédents, vous avez peut-être remarqué qu'il était possible de cocher une case en cliquant sur l'élément [`<label>`](/fr/docs/Web/HTML/Element/label) associé. Il s'agit d'une fonctionnalité particulièrement utile des étiquettes de formulaire HTML&nbsp;: il y a ainsi plus d'espace qui peut être utilisé pour sélectionner les options voulues (notamment sur les petits écrans).

En plus des raisons liées à l'accessibilité, il s'agit d'une bonne raison pour indiquer correctement des éléments `<label>` dans vos formulaires.

### Gérer un état indéterminé

Il existe un état indéterminé pour les cases à cocher qui indique que la case n'est ni cochée, ni décochée mais indéterminée. Cet état peut être obtenu via la propriété `indeterminate` d'un élément [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) en JavaScript (il est impossible d'obtenir cet état en utilisant uniquement du HTML)&nbsp;:

```js
inputInstance.indeterminate = true;
```

Dans la plupart des navigateurs, une case à cocher dans un état indéterminé est représentée avec une ligne horizontale en travers de la case.

Il n'y a pas beaucoup de cas d'usage pour cette propriété. Le scénario le plus fréquent est d'avoir une case à cocher parente, contenant plusieurs options filles représentées par d'autres cases à cocher. Si l'ensemble des options filles est coché, la case à cocher parente est cochée, si toutes les options filles sont décochées, la case à cocher parente est décochée. En revanche, si au moins une des options filles est dans un état différent des autres, la case à cocher parente apparaît dans un état indéterminé.

Voici un exemple d'utilisation de cet état (tiré de [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/)) où on tient le compte des ingrédients qu'on possède pour une recette. Lorsqu'on coche ou décoche une case d'un ingrédient, une fonction JavaScript vérifie le nombre d'ingrédients possédés (c'est-à-dire cochés)&nbsp;:

- Si aucun n'est coché, la case associée à la recette est décochée.
- Si un ou deux éléments sont cochés, la case associée à la recette est dans un état indéterminé.
- Si les trois ingrédients sont cochés, la case associée à la recette est cochée.

Dans cet exemple, l'état `indeterminate` est utilisé afin d'indiquer qu'on possède certains ingrédients mais pas suffisamment pour une recette.

```js
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```

{{EmbedGHLiveSample("learning-area/html/forms/indeterminate-example/index.html", '100%', 200)}}

> **Note :** Si vous envoyez un formulaire avec une case à cocher dans un état indéterminé, le résultat obtenu est le même que si la case avait été décochée&nbsp;: aucune donnée n'est envoyée au serveur.

## Validation

Les cases à cocher prennent en charge la [validation](/fr/docs/Web/HTML/Constraint_validation) (comme d'autres [`<input>`](/fr/docs/Web/HTML/Element/input)). Toutefois, la plupart des propriétés de l'instance correspondante [`ValidityState`](/fr/docs/Web/API/ValidityState) vaudront toujours `false`. Si la case à cocher utilise l'attribut [`required`](/fr/docs/Web/HTML/Element/input#required), mais n'est pas cochée, [`ValidityState.valueMissing`](/fr/docs/Web/API/ValidityState/valueMissing) vaudra `true`.

## Exemples

Dans l'exemple suivant, on développe l'exemple vu précédemment avec les groupes de cases à cocher : il y a cette fois plus d'options et un champ texte libre qui permet de saisir une autre valeur. Pour cela on utilise un bloc de code JavaScript et quelques règles CSS pour la mise en forme.

### HTML

```html
<form>
  <fieldset>
    <legend>Veuillez sélectionner vos intérêts</legend>
    <div>
      <label>
        <input type="checkbox" id="coding" name="interest" value="coding" />
        Développement
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="music" name="interest" value="music" />
        Musique
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="art" name="interest" value="art" />
        Art
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="sports" name="interest" value="sports" />
        Sports
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="cooking" name="interest" value="cooking" />
        Cuisine
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" id="other" name="interest" value="other" />
        Autre
      </label>
      <input
        type="text"
        id="otherValue"
        name="other"
        aria-label="Autres intérêts" />
    </div>
    <div>
      <button type="submit">Envoyer le formulaire</button>
    </div>
  </fieldset>
</form>
```

### CSS

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
```

### JavaScript

```js
const otherCheckbox = document.querySelector("#other");
const otherText = document.querySelector("#otherValue");
otherText.style.visibility = "hidden";

otherCheckbox.addEventListener("change", () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = "visible";
    otherText.value = "";
  } else {
    otherText.style.visibility = "hidden";
  }
});
```

### Résultat

{{EmbedLiveSample('', '100%', 300)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères qui représente la valeur de la case à cocher.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/input_event"><code>input</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td><code>checked</code></td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code><a href="#checked">checked</a></code>,
        <code><a href="#indeterminate">indeterminate</a></code> et
        <code><a href="#value">value</a></code>
      </td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLInputElement"><code>HTMLInputElement</code></a></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les sélecteurs CSS qui permettent de mettre en forme les cases à cocher en fonction de leur état actuel&nbsp;: [`:checked`](/fr/docs/Web/CSS/:checked), [`:indeterminate`](/fr/docs/Web/CSS/:indeterminate)
- L'interface du DOM qui représente cet élément&nbsp;: [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement)
- [Tableau de compatibilité des propriétés CSS pour les contrôles de formulaires](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
