---
title: <input type="radio">
slug: Web/HTML/Element/input/radio
---

{{HTMLSidebar}}

Les éléments `<input>` dont l'attribut `type` vaut **`radio`** sont généralement utilisés pour construire des groupes d'options parmi lesquelles on ne peut choisir qu'une valeur. Les « boutons radio » sont représentés par des cercles remplis lorsqu'ils sont sélectionnés.

{{EmbedInteractiveExample("pages/tabbed/input-radio.html", "tabbed-standard")}}

On les appelle boutons radios par analogie avec les boutons qui étaient utilisés sur les anciens postes de radios.

> **Note :** [Les cases à cocher (_checkboxes_)](/fr/docs/Web/HTML/Element/input/checkbox) ressemblent aux boutons radios. Toutefois, il existe une différence fondamentale : les boutons radio ne permettent de sélectionner qu'une seule option au sein d'un groupe alors que les cases à cocher permettent d'en sélectionner plusieurs.

## Valeur

L'attribut `value` est une chaîne de caractères (un objet {{domxref("DOMString")}} au sens du DOM) qui contient la valeur du bouton radio. Cette valeur n'est pas montrée à l'utilisateur par le navigateur ou tout autre agent utilisateur, elle permet d'identifier l'option sélectionnée.

### Définir un groupe de boutons radio

Pour définir un groupe de boutons radio, on leur donne le même nom via l'attribut [`name`](/fr/docs/Web/HTML/Element/input#name). Une fois qu'on a formé un groupe de boutons radio, on ne pourra sélectionner qu'une seule des options de ce groupes (cliquer sur une option désélectionnera automatiquement l'option précédemment choisie dans ce groupe).

Il est possible d'avoir autant de groupes que nécessaire, il suffit que chaque groupe ait un nom (l'attribut `name`) unique.

Ainsi, si on souhaite utiliser un formulaire afin de demander à l'utilisateur sa méthode de contact préférée, on pourra créer trois boutons radio avec l'attribut `name` qui vaut `contact` et pour lesquels l'attribut [`value`](/fr/docs/Web/HTML/Element/input#value) varie : `email` pour le premier, `telephone` pour le deuxième et `courrier` pour le dernier. Cette valeur et le nom du groupe ne sont pas affichés (ce sera le rôle de l'élément {{HTMLElement("label")}} de fournir un intitulé).

Voici le fragment de code HTML correspondant à cet exemple :

```html
<form>
  <p>Veuillez choisir la meilleure méthode pour vous contacter :</p>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="email" />
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2" name="contact" value="telephone" />
    <label for="contactChoice2">Téléphone</label>

    <input type="radio" id="contactChoice3" name="contact" value="courrier" />
    <label for="contactChoice3">Courrier</label>
  </div>
  <div>
    <button type="submit">Envoyer</button>
  </div>
</form>
```

On voit ici trois boutons radio dont l'attribut `name` vaut `contact` et dont chacun possède une valeur unique pour l'attribut `value`. Ils possèdent également un identifiant unique ({{domxref("Element.id", "id")}}) qui est utilisé pour rattacher le libellé fourni par l'élément {{HTMLElement("label")}} via l'attribut [`for`](/fr/docs/Web/HTML/Element/label#for).

Voici le résultat obtenu :

{{EmbedLiveSample('Définir_un_groupe_de_boutons_radio', 600, 130)}}

### La représentation des données d'un groupe de boutons radio

Lorsqu'on envoie le formulaire précédent avec une option sélectionnée, les données du formulaire contiendront une valeur sous la forme `"contact=valeur"`. Ainsi, si l'utilisateur clique sur le bouton radio « Téléphone » et envoie le formulaire, les données du formulaire contiendront `"contact=telephone"`.

Si l'attribut `value` n'est pas fourni dans le document HTML, la valeur par défaut utilisée sera `on` pour l'ensemble du groupe. Si c'était le cas avec notre exemple précédent et que l'utilisateur avait cliqué sur l'option « Téléphone » et envoyé le formulaire, les données envoyées auraient contenu `"contact=on"` ce qui ne s'avère pas très utile. Aussi, mieux vaut ne pas oublier les attributs `value` !

> **Note :** Si aucun bouton radio n'est sélectionné au moment de l'envoi du formulaire, le groupe radio n'est pas inclus dans les données envoyées par le formulaire car il n'y a aucune valeur à fournir.

Généralement, on souhaite qu'au moins une option soit sélectionné parmi les boutons d'un groupe et on inclue donc souvent un attribut `checked` sur l'un des boutons afin d'avoir une option sélectionnée par défaut.

Ajoutant un peu de code à notre exemple pour étudier les données générées par ce formulaire. On modifie le code HTML afin d'ajouter un bloc {{HTMLElement("pre")}} qui contiendra les données produites par le formulaire :

```html
<form>
  <p>Veuillez choisir la meilleure méthode pour vous contacter :</p>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="email" />
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2" name="contact" value="telephone" />
    <label for="contactChoice2">Téléphone</label>

    <input type="radio" id="contactChoice3" name="contact" value="courrier" />
    <label for="contactChoice3">Courrier</label>
  </div>
  <div>
    <button type="submit">Envoyer</button>
  </div>
</form>
<pre id="log"></pre>
```

Ensuite, on ajoute du code [JavaScript](/fr/docs/Web/JavaScript) pour rattacher un gestionnaire d'évènement sur l'évènement [`submit`](/fr/docs/Web/API/HTMLFormElement/submit_event) qui est déclenché lorsque l'utilisateur clique sur le bouton « Envoyer » :

```js
var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener(
  "submit",
  function (event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
      output = entry[0] + "=" + entry[1] + "\r";
    }
    log.innerText = output;
    event.preventDefault();
  },
  false,
);
```

Vous pouvez manipuler cet exemple et voir qu'il n'y a jamais plus 'un résultat pour le groupe `"contact"`.

{{EmbedLiveSample("La_représentation_des_données_d'un_groupe_de_boutons_radio", 600, 130)}}

## Attributs supplémentaires

En complément des attributs partagés par l'ensemble des éléments {{HTMLElement("input")}}, les boutons radio peuvent utiliser les attributs suivants :

| Attribut              | Definition                                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`checked`](#checked) | Un attribut booléen qui indique si le bouton radio est l'élément sélectionné du groupe.                        |
| [`value`](#value)     | Une chaîne à utiliser comme valeur pour le bouton radio lors de l'envoi du formulaire si ce bouton est choisi. |

### `checked`

Un attribut booléen qui indique si c'est ce champ radio qui est sélectionné parmi le groupe.

À la différence des autres navigateurs, Firefox conservera [l'état coché dynamique](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) d'un bouton radio au fur et à mesure des chargements de la page. On pourra utiliser l'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/input#autocomplete) afin de contrôler cette fonctionnalité.

### `value`

L'attribut `value` est partagé par l'ensemble des types d'élément {{HTMLElement("input")}}. Dans le cas d'un bouton radio, il a un rôle spécifique et permet d'associer un texte qui sera envoyé avec le formulaire pour représenter la valeur sélectionnée. Si la valeur de `value` n'est pas définie, ce sera la chaîne de caractères `"on"` qui sera envoyée.

## Utiliser les boutons radio

Nous avons déjà vu certaines techniques ci-avant. Voyons désormais d'autres fonctionnalités fréquemment utilisées avec ces boutons.

### Sélectionner un bouton radio par défaut

Pour qu'un bouton radio soit sélectionné par défaut, on ajoutera l'attribut booléen `checked`. Voici ce que ça donne pour l'exemple précédent, légèrement modifié :

```html
<form>
  <p>Veuillez choisir la meilleure méthode pour vous contacter :</p>
  <div>
    <input
      type="radio"
      id="contactChoice1"
      name="contact"
      value="email"
      checked />
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2" name="contact" value="telephone" />
    <label for="contactChoice2">Téléphone</label>

    <input type="radio" id="contactChoice3" name="contact" value="courrier" />
    <label for="contactChoice3">Courrier</label>
  </div>
  <div>
    <button type="submit">Envoyer</button>
  </div>
</form>
```

{{EmbedLiveSample('Sélectionner_un_bouton_radio_par_défaut', 600, 130)}}

Ici, c'est le premier bouton radio qui sera sélectionné par défaut.

> **Note :** Si l'attribut `checked` est placé sur plus d'un bouton, c'est le dernier bouton contenant l'attribut qui sera sélectionné. C'est donc l'ordre des valeurs qui déterminera la valeur par défaut. Pour rappel, il ne peut y avoir qu'un seul bouton radio du groupe qui soit sélectionné à un instant donné.

### Fournir une plus grande zone de sélection

Dans les exemples précédents, vous avez peut-être constaté qu'en cliquant sur l'élément {{htmlelement("label")}} associé au bouton radio, cela sélectionnait la valeur de ce bouton. C'est une fonctionnalité HTML très pratique qui facilite la sélection des options, notamment sur les écrans de petites tailles comme ceux des smartphones.

Au-delà des raisons relatives à l'accessibilité, il s'agit d'un autre argument en faveur de la bonne utilisation des éléments `<label>` dans les formulaires.

## Validation

Il n'existe pas de contrainte de validation particulière pour les boutons radio.

## Mettre en forme les boutons radio

L'exemple qui suit est une version légèrement plus détaillée de l'exemple précédent qui contient une mise en forme et une meilleure sémantique grâce aux éléments HTML utilisés :

```html
<form>
  <fieldset>
    <legend>Veuillez choisir la meilleure méthode pour vous contacter :</legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">Email</label>

      <input
        type="radio"
        id="contactChoice2"
        name="contact"
        value="telephone" />
      <label for="contactChoice2">Téléphone</label>

      <input type="radio" id="contactChoice3" name="contact" value="courrier" />
      <label for="contactChoice3">Courrier</label>
    </div>
    <div>
      <button type="submit">Envoyer</button>
    </div>
  </fieldset>
</form>
```

On voit ici peu de modifications mais notamment l'ajout d'éléments {{htmlelement("fieldset")}} et {{htmlelement("legend")}} qui permettent de grouper les options (à la fois pour la mise en forme et pour la sémantique du document).

La feuille de style CSS utilisée est la suivante :

```css
html {
  font-family: sans-serif;
}

div:first-of-type {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5px;
}

label {
  margin-right: 15px;
  line-height: 32px;
}

input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}

input:checked {
  border: 6px solid black;
}

button,
legend {
  color: white;
  background-color: black;
  padding: 5px 10px;
  border-radius: 0;
  border: 0;
  font-size: 14px;
}

button:hover,
button:focus {
  color: #999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

La propriété utilisée la plus notable est {{cssxref("-moz-appearance")}} (utilisée avec certains préfixes navigateur). Par défaut, les boutons radios (ainsi que les cases à cocher) sont mis en forme avec l'apparence native liée au système d'exploitation sous-jacente. Avec `appearance: none`, on peut passer outre cette mise en forme native et créer ses propres styles pour ces boutons. Ici, nous avons utilisé {{cssxref("border")}} et {{cssxref("border-radius")}} avec {{cssxref("transition")}} afin de créer une animation lors de la sélection. On utilise également la pseudo-classe {{cssxref(":checked")}} pour définir l'apparence du bouton radio lorsqu'il est sélectionné.

Cette méthode n'est pas exempte d'inconvénient : `appearance` fonctionne correctement pour une mise en forme simple mais peut se comporter de façons différentes selon les navigateurs et elle ne fonctionne pas du tout avec Internet Explorer. Attention donc à tester votre site dans les différents navigateurs.

{{EmbedLiveSample('Mettre_en_forme_les_boutons_radio', 600, 120)}}

De plus, la légende et le bouton d'envoi ont été mis en forme pour avoir un contraste marqué. Ce n'est pas peut-être pas la mise en forme idéale pour toutes les applications web mais cela illustre certaines des possibilités.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères {{domxref("DOMString")}} qui représente
        la valeur du bouton radio.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/input_event"><code>input</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td><a href="/fr/docs/Web/HTML/Element/input#checked"><code>checked</code></a></td>
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface {{domxref("HTMLInputElement")}} du DOM qui est implémentée par cet élément
- L'interface {{domxref("RadioNodeList")}} qui décrit une liste de boutons radio
