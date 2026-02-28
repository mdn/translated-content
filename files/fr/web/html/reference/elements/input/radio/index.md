---
title: <input type="radio">
slug: Web/HTML/Reference/Elements/input/radio
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Les éléments {{HTMLElement("input")}} de type **`radio`** sont généralement utilisés dans des **groupes de boutons radio** — des ensembles de boutons radio décrivant un ensemble d'options liées.

Un seul bouton radio d'un groupe donné peut être sélectionné à la fois. Les boutons radio sont généralement affichés sous forme de petits cercles, qui sont remplis ou mis en surbrillance lorsqu'ils sont sélectionnés.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;radio&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<fieldset>
  <legend>Sélectionnez un drone de maintenance&nbsp;:</legend>

  <div>
    <input type="radio" id="huey" name="drone" value="huey" checked />
    <label for="huey">Huey</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label for="dewey">Dewey</label>
  </div>

  <div>
    <input type="radio" id="louie" name="drone" value="louie" />
    <label for="louie">Louie</label>
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

On les appelle boutons radio car ils ressemblent et fonctionnent de manière similaire aux boutons-poussoirs des anciennes radios, comme celle illustrée ci-dessous.

![Illustration de l'apparence des boutons radio sur les anciens appareils.](old-radio.jpg)

> [!NOTE]
> [Les cases à cocher](/fr/docs/Web/HTML/Reference/Elements/input/checkbox) ressemblent aux boutons radio. Toutefois, il existe une différence fondamentale&nbsp;: les boutons radio servent à sélectionner une seule valeur parmi un ensemble, tandis que les cases à cocher permettent d'activer ou de désactiver individuellement plusieurs valeurs. Lorsqu'il y a plusieurs contrôles, les boutons radio n'autorisent qu'une seule sélection, alors que les cases à cocher permettent d'en sélectionner plusieurs.

## Valeur

L'attribut `value` est une chaîne de caractères qui contient la valeur du bouton radio. Cette valeur n'est jamais affichée à l'utilisateur·ice par son {{Glossary("user agent", "agent utilisateur")}}. Elle sert à identifier quel bouton radio d'un groupe est sélectionné.

### Définir un groupe de boutons radio

Pour définir un groupe de boutons radio, on leur donne le même nom via l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name). Une fois qu'on a formé un groupe de boutons radio, on ne pourra sélectionner qu'une seule des options de ce groupes (cliquer sur une option désélectionnera automatiquement l'option précédemment choisie dans ce groupe).

Il est possible d'avoir autant de groupes de boutons radio que vous le souhaitez sur une page, à condition que chacun ait un attribut `name` unique.

Par exemple, si votre formulaire doit demander à l'utilisateur·ice sa méthode de contact préférée, vous pouvez créer trois boutons radio, chacun avec la propriété `name` définie à `contact`, mais l'un avec la valeur `email`, un autre avec la valeur `telephone` et un autre avec la valeur `courrier`. L'utilisateur·ice ne voit jamais la valeur de `value` ou de `name` (sauf si vous ajoutez explicitement du code pour l'afficher).

Voici le fragment de code HTML correspondant à cet exemple&nbsp;:

```html
<form>
  <p>Veuillez choisir la meilleure méthode pour vous contacter&nbsp;:</p>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="email" />
    <label for="contactChoice1">Adresse électronique</label>

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

On voit ici trois boutons radio dont l'attribut `name` vaut `contact` et dont chacun possède une valeur unique pour l'attribut `value`. Ils possèdent également un identifiant unique ({{DOMxRef("Element.id", "id")}}) qui est utilisé pour rattacher le libellé fourni par l'élément {{HTMLElement("label")}} via l'attribut [`for`](/fr/docs/Web/HTML/Reference/Elements/label#for).

Voici le résultat obtenu :

{{EmbedLiveSample('Définir un groupe de boutons radio', 600, 130)}}

### La représentation des données d'un groupe de boutons radio

Lorsqu'on envoie le formulaire ci-dessus avec un bouton radio sélectionné, les données du formulaire contiennent une entrée sous la forme `contact=valeur`. Par exemple, si l'utilisateur·ice clique sur le bouton radio «&nbsp;Téléphone&nbsp;» puis envoie le formulaire, les données du formulaire contiendront la ligne `contact=telephone`.

Si vous omettez l'attribut `value` dans le HTML, les données envoyées par le formulaire attribuent la valeur `on` au groupe. Dans ce cas, si l'utilisateur·ice clique sur l'option «&nbsp;Téléphone&nbsp;» et envoie le formulaire, les données envoyées seraient `contact=on`, ce qui n'est pas utile. N'oubliez donc pas de définir vos attributs `value`&nbsp;!

> [!NOTE]
> Si aucun bouton radio n'est sélectionné lors de l'envoi du formulaire, le groupe radio n'est pas inclus dans les données envoyées car il n'y a aucune valeur à fournir.

Il est assez rare de vouloir permettre l'envoi du formulaire sans qu'aucun bouton radio d'un groupe ne soit sélectionné, il est donc généralement judicieux d'en avoir un par défaut avec l'état `checked`. Voir [Sélectionner un bouton radio par défaut](#sélectionner_un_bouton_radio_par_défaut) ci-dessous.

Ajoutons un peu de code à notre exemple pour examiner les données générées par ce formulaire. Le HTML est modifié pour ajouter un bloc {{HTMLElement("pre")}} qui affichera les données du formulaire&nbsp;:

```html
<form>
  <p>Veuillez choisir la meilleure méthode pour vous contacter&nbsp;:</p>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="email" />
    <label for="contactChoice1">Adresse électronique</label>

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

Ensuite, on ajoute du [JavaScript](/fr/docs/Web/JavaScript) pour mettre en place un gestionnaire d'évènements sur l'évènement {{DOMxRef("HTMLFormElement/submit_event", "submit")}} qui est envoyé lorsque l'utilisateur·ice clique sur le bouton «&nbsp;Envoyer&nbsp;»&nbsp;:

```js
const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]} = ${entry[1]}\r`;
  }
  log.innerText = output;
  event.preventDefault();
});
```

Vous pouvez manipuler cet exemple et voir qu'il n'y a jamais plus 'un résultat pour le groupe `"contact"`.

{{EmbedLiveSample("La représentation des données d'un groupe de boutons radio", 600, 130)}}

## Attributs supplémentaires

En complément des attributs partagés par l'ensemble des éléments {{HTMLElement("input")}}, les boutons `radio` peuvent utiliser les attributs suivants&nbsp;:

- `checked`
  - : Un attribut booléen qui, s'il est présent, indique que ce bouton radio est celui sélectionné par défaut dans le groupe.

    Contrairement aux autres navigateurs, Firefox [conserve par défaut l'état coché dynamique <sup>(angl.)</sup>](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) d'un `<input>` lors des rechargements de page. Utilisez l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete) pour contrôler ce comportement.

- `value`
  - : L'attribut `value` est partagé par tous les {{HTMLElement("input")}}&nbsp;; cependant, il a un rôle particulier pour les boutons radio&nbsp;: lorsqu'un formulaire est envoyé, seuls les boutons radio actuellement sélectionnés sont envoyés au serveur, et la valeur rapportée est la valeur de l'attribut `value`. Si `value` n'est pas autrement défini, il s'agit de la chaîne `on` par défaut. Cela est illustré dans la section [Valeur](#valeur) ci-dessus.

- [`required`](/fr/docs/Web/HTML/Reference/Attributes/required)
  - : L'attribut `required` est partagé par la plupart des {{HTMLElement("input")}}. Si un bouton radio d'un groupe partageant le même nom possède l'attribut `required`, un bouton de ce groupe doit être sélectionné, même si ce n'est pas forcément celui qui porte l'attribut.

## Utiliser les boutons radio

Nous avons déjà vu certaines techniques ci-avant. Voyons désormais d'autres fonctionnalités fréquemment utilisées avec ces boutons.

### Sélectionner un bouton radio par défaut

Pour qu'un bouton radio soit sélectionné par défaut, on ajoutera l'attribut booléen `checked`. Voici ce que ça donne pour l'exemple précédent, légèrement modifié&nbsp;:

```html
<form>
  <p>Veuillez choisir la meilleure méthode pour vous contacter&nbsp;:</p>
  <div>
    <input
      type="radio"
      id="contactChoice1"
      name="contact"
      value="email"
      checked />
    <label for="contactChoice1">Adresse électronique</label>

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

{{EmbedLiveSample("Sélectionner un bouton radio par défaut", 600, 130)}}

Ici, c'est le premier bouton radio qui sera sélectionné par défaut.

> [!NOTE]
> Si vous placez l'attribut `checked` sur plusieurs boutons radio, les instances ultérieures écraseront les précédentes&nbsp;; c'est donc le dernier bouton radio avec `checked` qui sera sélectionné. Cela s'explique par le fait qu'un seul bouton radio d'un groupe peut être sélectionné à la fois, et l'agent utilisateur désélectionne automatiquement les autres chaque fois qu'un nouveau est marqué comme sélectionné.

### Fournir une plus grande zone de sélection

Dans les exemples précédents, vous avez peut-être constaté qu'en cliquant sur l'élément {{HTMLElement("label")}} associé au bouton radio, cela sélectionnait la valeur de ce bouton. C'est une fonctionnalité HTML très pratique qui facilite la sélection des options, notamment sur les écrans de petites tailles comme ceux des smartphones.

Au-delà des raisons relatives à l'accessibilité, il s'agit d'un autre argument en faveur de la bonne utilisation des éléments `<label>` dans les formulaires.

## Validation

Dans le cas d'un bouton radio avec l'attribut [`required`](/fr/docs/Web/HTML/Reference/Attributes/required) défini, ou d'un groupe de boutons radio partageant le même nom dont au moins un possède `required`, un bouton radio doit être sélectionné pour que le contrôle soit considéré comme valide. Si aucun bouton radio n'est coché, la propriété {{DOMxRef("ValidityState.valueMissing", "valueMissing")}} d'un objet {{DOMxRef("ValidityState")}} retournera `true` lors de la validation, et le navigateur demandera à l'utilisateur·ice de sélectionner une option.

## Mettre en forme les boutons radio

L'exemple qui suit est une version légèrement plus détaillée de l'exemple précédent qui contient une mise en forme et une meilleure sémantique grâce aux éléments HTML utilisés&nbsp;:

```html
<form>
  <fieldset>
    <legend>
      Veuillez choisir la meilleure méthode pour vous contacter&nbsp;:
    </legend>
    <div>
      <input
        type="radio"
        id="contactChoice1"
        name="contact"
        value="email"
        checked />
      <label for="contactChoice1">Adresse électronique</label>

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

La feuille de style CSS utilisée est la suivante&nbsp;:

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
  appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999999;
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
  color: #999999;
}

button:active {
  background-color: white;
  color: black;
  outline: 1px solid black;
}
```

Ce qui est le plus notable ici est l'utilisation de la propriété CSS {{CSSxRef("appearance")}} (avec les préfixes nécessaires pour certains navigateurs). Par défaut, les boutons radio (et les [cases à cocher](/fr/docs/Web/HTML/Reference/Elements/input/checkbox)) sont mis en forme avec le style natif du système d'exploitation pour ces contrôles. En indiquant `appearance: none`, vous pouvez supprimer totalement le style natif et créer vos propres styles. Ici, nous avons utilisé {{CSSxRef("border")}} avec {{CSSxRef("border-radius")}} et {{CSSxRef("transition")}} pour créer une animation agréable lors de la sélection. Remarquez aussi comment la pseudo-classe CSS {{CSSxRef(":checked")}} est utilisée pour définir le style du bouton radio lorsqu'il est sélectionné.

> [!NOTE]
> Si vous souhaitez utiliser la propriété CSS {{CSSxRef("appearance")}}, testez-la très attentivement. Bien qu'elle soit prise en charge par la plupart des navigateurs modernes, son implémentation varie beaucoup. Dans les anciens navigateurs, même le mot-clé `none` n'a pas le même effet partout, et certains ne la prennent pas du tout en charge. Les différences sont moindres dans les navigateurs les plus récents.

{{EmbedLiveSample("Mettre en forme les boutons radio", 600, 120)}}

Remarquez qu'en cliquant sur un bouton radio, il y a un bel effet de fondu lors du changement d'état entre les boutons. De plus, le style et la couleur de la légende et du bouton d'envoi sont personnalisés pour offrir un contraste marqué. Ce n'est peut-être pas l'apparence que vous souhaiteriez dans une vraie application web, mais cela illustre bien les possibilités.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères qui représente la valeur du bouton radio.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{DOMxRef("HTMLElement/change_event", "change")}} et {{DOMxRef("Element/input_event", "input")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <code><a href="#checked">checked</a></code
        >, <code><a href="#value">value</a></code> et
        <code
          ><a href="/fr/docs/Web/HTML/Reference/Attributes/required">required</a></code
        >
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>checked</code> et <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role">radio</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("input")}} et l'interface {{DOMxRef("HTMLInputElement")}} du DOM qui est implémentée par cet élément
- L'interface {{DOMxRef("RadioNodeList")}} qui décrit une liste de boutons radio
