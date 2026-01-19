---
title: <input type="checkbox">
slug: Web/HTML/Reference/Elements/input/checkbox
l10n:
  sourceCommit: f86740f3a842a5a075be18185ecaf9a981eda4b9
---

Les éléments {{HTMLElement("input")}} de type **`checkbox`** sont affichés par défaut sous la forme de cases qui sont cochées lorsqu'elles sont activées, comme vous pourriez le voir sur un formulaire papier gouvernemental. L'apparence exacte dépend de la configuration du système d'exploitation sous lequel le navigateur fonctionne. Il s'agit généralement d'un carré, mais il peut avoir des coins arrondis. Une case à cocher permet de sélectionner des valeurs individuelles à soumettre dans un formulaire (ou pas).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;checkbox&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Choisissez les caractéristiques de votre monstre&nbsp;:</legend>

  <div>
    <input type="checkbox" id="scales" name="scales" checked />
    <label for="scales">Écailles</label>
  </div>

  <div>
    <input type="checkbox" id="horns" name="horns" />
    <label for="horns">Cornes</label>
  </div>
</fieldset>
```

```css interactive-example
p,
label {
  font:
    1rem "Fira Sans",
    sans-serif;
}

input {
  margin: 0.4rem;
}
```

> [!NOTE]
> [Les boutons radio](/fr/docs/Web/HTML/Reference/Elements/input/radio) sont semblables aux cases à cocher, mais il existe une différence importante&nbsp;: les boutons radio permettent de sélectionner une seule valeur parmi plusieurs d'[un même groupe (identifié par le nom)](/fr/docs/Web/HTML/Reference/Elements/input/radio#définir_un_groupe_de_boutons_radio) alors que les cases à cocher permettent de cocher/décocher plusieurs valeurs d'un groupe.

## Valeur

Une chaîne de caractères représentant la valeur de la case à cocher. Celle-ci n'est pas affichée côté client, mais côté serveur, c'est la `value` donnée aux données envoyées avec le `name` de la case à cocher. Prenez l'exemple suivant&nbsp;:

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
    <button type="submit">S'abonner</button>
  </div>
</form>
```

Dans cet exemple, on a le nom (l'attribut `name`) `subscribe` utilisé pour la case à cocher avec une valeur (l'attribut `value`) qui est `newsletter`. Lorsque le formulaire est envoyé, les données seront transmises sous la forme `subscribe=newsletter`.

Si l'attribut `value` n'était pas renseigné, la valeur par défaut serait `on` (dans l'exemple, les données envoyées au serveur auraient eu la forme `subscribe=on`).

> [!NOTE]
> Si la case à cocher n'est pas cochée lorsque le formulaire est envoyé, ni le nom ni la valeur ne sont envoyés au serveur pour indiquer cet état (autrement dit, le client n'envoie pas quelque chose comme `value=unchecked`)&nbsp;; la valeur n'est pas transmise au serveur du tout. Si on veut envoyer une valeur par défaut lorsque la case à cocher est décochée, une solution pourrait être d'utiliser du JavaScript pour créer un élément `{{HTMLElement("input/hidden", '&lt;input type="hidden"&gt;')}}`.

## Attributs supplémentaires

En plus des [attributs communs](/fr/docs/Web/HTML/Reference/Elements/input#attributs) partagés par tous les éléments {{HTMLElement("input")}}, les champs de type `checkbox` prennent en charge les attributs suivants.

- `checked`
  - : Un attribut {{Glossary("Boolean/HTML", "booléen")}} qui indique si cette case à cocher est cochée par défaut (lorsque la page se charge). Il n'indique _pas_ si cette case à cocher est actuellement cochée&nbsp;: si l'état de la case à cocher est modifié, cet attribut de contenu ne reflète pas la modification. (Seul l'attribut IDL `checked` de l'interface {{DOMxRef("HTMLInputElement")}} est mis à jour.)
    > [!NOTE]
    > À la différence des autres champs, les valeurs des cases à cocher ne sont envoyées au serveur que lorsqu'elles sont cochées. Lorsque c'est le cas, c'est la valeur de l'attribut `value` qui est envoyé (ou la valeur `on` si aucun attribut `value` n'est présent).
    > À la différence des autres navigateurs, Firefox [conserve l'état coché placé dynamiquement <sup>(angl.)</sup>](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) d'un champ `<input>` après les rechargements de la page. L'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete) peut être utilisé afin de contrôler cette fonctionnalité.

- `value`
  - : L'attribut `value` est partagé par l'ensemble des éléments {{HTMLElement("input")}}&nbsp;; mais il a un rôle spécifique pour les champs de type `checkbox`&nbsp;: lorsqu'un formulaire est envoyé, seules les cases à cocher qui sont cochées sont envoyées au serveur et c'est la valeur de l'attribut `value` qui est envoyée. Si l'attribut `value` n'est pas renseigné, ce sera la chaîne de caractères `"on"` qui sera envoyée par défaut (voir [la section précédente](#valeur))

## Utiliser les cases à cocher

Nous avons déjà couvert l'utilisation la plus basique des cases à cocher ci-dessus. Voyons maintenant les autres fonctionnalités et techniques courantes liées aux cases à cocher dont vous aurez besoin.

### Gérer plusieurs cases à cocher

L'exemple que nous avons vu ci-dessus ne contenait qu'une seule case à cocher&nbsp;; dans des situations réelles, vous rencontrerez probablement plusieurs cases à cocher. Si elles sont complètement indépendantes, vous pouvez simplement les gérer séparément, comme montré ci-dessus. Cependant, si elles sont toutes liées, les choses ne sont pas aussi simples.

Dans l'exemple qui suit, on affiche différentes cases à cocher pour représenter les intérêts d'une personne (voir l'exemple complet dans la section [d'exemples](#exemples)).

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

{{EmbedLiveSample("Gérer plusieurs cases à cocher", 600, 100)}}

Dans cet exemple on voit que chaque case à cocher utilise le même attribut `name`. Si les deux cases sont cochées lorsque le formulaire est envoyé, la chaîne des paires nom/valeur qui sera envoyée au serveur sera&nbsp;: `interest=coding&interest=music`. Lorsque les données parviennent au serveur, on peut ainsi récupérer un tableau des valeurs sélectionnées (voir [la question StackOverflow&nbsp;: Gérer plusieurs cases à cocher avec une seule variable côté serveur <sup>(angl.)</sup>](https://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable) par exemple).

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

{{EmbedLiveSample("Cocher certaines cases par défaut", 600, 100)}}

### Fournir une zone cliquable plus grande pour vos cases à cocher

Dans les exemples ci-dessus, vous avez peut-être remarqué que vous pouvez basculer une case à cocher en cliquant sur son élément {{HTMLElement("label")}} associé ainsi que sur la case elle-même. Il s'agit d'une fonctionnalité très utile des étiquettes de formulaire HTML qui facilite le clic sur l'option souhaitée, en particulier sur les appareils à petit écran comme les smartphones.

En plus des raisons liées à l'accessibilité, il s'agit d'une bonne raison pour indiquer correctement des éléments `<label>` dans vos formulaires.

### Gérer un état indéterminé

Il existe un état indéterminé pour les cases à cocher qui indique que la case n'est ni cochée, ni décochée mais indéterminée. Cet état peut être obtenu via la propriété `indeterminate` d'un élément [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) en JavaScript (il est impossible d'obtenir cet état en utilisant uniquement du HTML)&nbsp;:

```js
inputInstance.indeterminate = true;
```

Lorsque `indeterminate` vaut `true`, la case à cocher affiche une ligne horizontale dans la boîte (cela ressemble à un trait d'union ou un signe moins) au lieu d'une coche dans la plupart des navigateurs.

> [!NOTE]
> Il s'agit uniquement d'un changement visuel. Cela n'a aucun impact sur l'utilisation de la `value` de la case à cocher lors de la soumission d'un formulaire. C'est l'état `checked` qui détermine cela, indépendamment de l'état `indeterminate`.

Il n'y a pas beaucoup de cas d'usage pour cette propriété. Le plus courant est lorsqu'une case à cocher est disponible et «&nbsp;possède&nbsp;» un certain nombre de sous-options (qui sont aussi des cases à cocher). Si toutes les sous-options sont cochées, la case à cocher principale est aussi cochée, et si elles sont toutes décochées, la case à cocher principale est décochée. Si une ou plusieurs des sous-options ont un état différent des autres, la case à cocher principale est dans l'état indéterminé.

Cela peut être observé dans l'exemple ci-dessous (merci à [CSS Tricks <sup>(angl.)</sup>](https://css-tricks.com/indeterminate-checkboxes/) pour l'inspiration). Dans cet exemple, on tient le compte des ingrédients que l'on collecte pour une recette. Lorsque vous cochez ou décochez une case d'ingrédient, une fonction JavaScript vérifie le nombre total d'ingrédients cochés&nbsp;:

- Si aucun n'est coché, la case associée à la recette est décochée.
- Si un ou deux éléments sont cochés, la case associée à la recette est dans un état indéterminé.
- Si les trois ingrédients sont cochés, la case associée à la recette est cochée.

Dans cet exemple, l'état `indeterminate` est utilisé afin d'indiquer qu'on possède certains ingrédients mais pas suffisamment pour une recette.

```js live-sample___indeterminate_state
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

```html live-sample___indeterminate_state
<form>
  <fieldset>
    <legend>Complétez la recette</legend>
    <div>
      <input type="checkbox" id="enchantment" name="enchantment" />
      <label for="enchantment">Table d'enchantement</label>
      <ul>
        <li>
          <input type="checkbox" id="book" name="ingredient" value="book" />
          <label for="book">Livre</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="diamonds"
            name="ingredient"
            value="diamonds" />
          <label for="diamonds">Diamants (x2)</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="obsidian"
            name="ingredient"
            value="obsidian" />
          <label for="obsidian">Bloc d'obsidienne (x4)</label>
        </li>
      </ul>
    </div>
  </fieldset>
</form>
```

{{EmbedLiveSample("indeterminate_state", "", 200)}}

## Validation

Les cases à cocher prennent en charge la [validation](/fr/docs/Web/HTML/Guides/Constraint_validation) (comme tous les éléments {{HTMLElement("input")}}). Toutefois, la plupart des propriétés de {{DOMxRef("ValidityState")}} valent toujours `false`. Si la case à cocher utilise l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) mais n'est pas cochée, alors {{DOMxRef("ValidityState.valueMissing")}} vaut `true`.

## Exemples

L'exemple suivant est une version étendue de l'exemple «&nbsp;plusieurs cases à cocher&nbsp;» vu ci-dessus — il propose plus d'options standards, ainsi qu'une case «&nbsp;autre&nbsp;» qui, lorsqu'elle est cochée, fait apparaître un champ texte pour saisir une valeur pour l'option «&nbsp;autre&nbsp;». Ceci est réalisé avec un court bloc JavaScript. L'exemple inclut des étiquettes implicites, avec l'élément `<input>` directement à l'intérieur du `<label>`. Le champ texte, sans étiquette visible, inclut l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) qui fournit son nom accessible. Cet exemple inclut aussi du CSS pour améliorer la mise en forme.

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

{{EmbedLiveSample("Exemples", "100%", 300)}}

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
      <td>{{DOMxRef("HTMLElement/change_event", "change")}} et {{DOMxRef("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td><code><a href="#checked">checked</a></code></td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code><a href="/fr/docs/Web/API/HTMLInputElement/checked">checked</a></code>,
        <code><a href="/fr/docs/Web/API/HTMLInputElement/indeterminate">indeterminate</a></code> et
        <code><a href="/fr/docs/Web/API/HTMLInputElement/value">value</a></code>
      </td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>{{DOMxRef("HTMLInputElement.select", "select()")}}</td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les sélecteurs CSS qui permettent de mettre en forme les cases à cocher en fonction de leur état actuel&nbsp;: {{CSSxRef(":checked")}}, {{CSSxRef(":indeterminate")}}
- L'interface du DOM qui représente cet élément&nbsp;: {{DOMxRef("HTMLInputElement")}}
