---
title: <input type="date">
slug: Web/HTML/Reference/Elements/input/date
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Les éléments {{HTMLElement("input")}} de **`type="date"`** créent des champs de saisie permettant à l'utilisateur·ice d'entrer une date. L'apparence de l'interface du sélecteur de date varie selon le navigateur et le système d'exploitation. La valeur est normalisée au format `yyyy-mm-dd`.

La valeur obtenue inclut l'année, le mois et le jour, mais _pas_ l'heure. Les types de champ `{{HTMLElement("input/time", "time")}}` et `{{HTMLElement("input/datetime-local", "datetime-local")}}` permettent de saisir respectivement une heure ou une date et une heure.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;date&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="start">Date de début&nbsp;:</label>

<input
  type="date"
  id="start"
  name="trip-start"
  value="2018-07-22"
  min="2018-01-01"
  max="2018-12-31" />
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

## Valeur

Une chaîne de caractères représentant la date saisie dans le champ. La date est formatée selon le [format des chaînes de date](/fr/docs/Web/HTML/Guides/Date_and_time_formats#représentation_des_dates).

Vous pouvez définir une valeur par défaut pour le champ en indiquant une date dans l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)&nbsp;:

```html
<input type="date" value="2017-06-01" />
```

{{EmbedLiveSample("Valeur", 600, 40)}}

> [!NOTE]
> Le format de la date affichée diffère de la valeur réelle de l'attribut `value` — la date affichée est formatée _selon la langue du navigateur de l'utilisateur·ice_, mais la valeur analysée est toujours au format `yyyy-mm-dd`.

Vous pouvez obtenir et définir la valeur de la date en JavaScript avec les propriétés `value` et `valueAsNumber` de {{DOMxRef("HTMLInputElement")}}. Par exemple&nbsp;:

```js
const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); // affiche "2017-06-01"
console.log(dateControl.valueAsNumber); // affiche 1496275200000, un timestamp JavaScript (exprimé en ms)
```

Ce code recherche le premier élément {{HTMLElement("input")}} dont le `type` est `date`, et définit sa valeur à `2017-06-01` (le 1er juin 2017). Il lit ensuite cette valeur sous forme de chaîne de caractères et sous forme numérique.

## Attributs supplémentaires

En plus des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) et des [attributs de champs](/fr/docs/Web/HTML/Reference/Elements/input#attributs) communs à tous les éléments {{HTMLElement("input")}}, le champ de saisie de type `date` prend en charge les attributs suivants&nbsp;:

### `max`

La date la plus avancée qui peut être saisie. Si la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) entrée dans l'élément est postérieure, l'élément ne respecte pas [les contraintes de validation](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `max` n'est pas une chaîne de caractères de date possible au format `yyyy-mm-dd`, alors l'élément n'a pas de valeur maximale.

Si les attributs `max` et `min` sont tous les deux définis, cette valeur doit être une chaîne de caractères de date **postérieure ou égale** à celle de l'attribut `min`.

### `min`

La date la plus ancienne qui peut être saisie. Si la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) entrée dans l'élément est antérieure, l'élément ne respecte pas [les contraintes de validation](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur de l'attribut `min` n'est pas une chaîne de caractères de date possible au format `yyyy-mm-dd`, alors l'élément n'a pas de valeur minimale.

Si les attributs `max` et `min` sont tous les deux définis, cette valeur doit être une chaîne de caractères de date **antérieure ou égale** à celle de l'attribut `max`.

### `step`

L'attribut `step` est un nombre qui définit la granularité à laquelle la valeur doit se conformer, ou la valeur spéciale `any`, qui est décrite ci-dessous. Seules les valeurs qui sont un nombre entier de pas à partir de la base de pas sont valides. La base de pas est [`min`](#min) si elle est définie, [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) sinon, ou `0` (l'époque Unix, `1970-01-01`) si aucune n'est fournie.

Pour les champs de type `date`, la valeur de `step` est donnée en jours et est traitée comme un nombre de millisecondes égal à 86 400 000 fois la valeur de `step` (la valeur numérique sous-jacente est en millisecondes). La valeur par défaut est 1, ce qui indique 1 jour.

Une valeur de chaîne de caractères `any` signifie qu'aucun pas n'est impliqué, et que n'importe quelle valeur est autorisée (sous réserve d'autres contraintes, telles que [`min`](#min) et [`max`](#max)). En réalité, cela a le même effet que `1` pour les champs de type `date` car l'interface du sélecteur ne permet de sélectionner que des jours entiers.

> [!NOTE]
> Lorsque la donnée saisie par l'utilisateur·ice ne respecte pas la configuration du pas, le {{Glossary("user agent", "agent utilisateur")}} peut arrondir à la valeur valide la plus proche, en privilégiant les nombres dans le sens positif lorsqu'il y a deux options aussi proches.

## Utiliser des contrôles de saisie des dates

Les champs de saisie de date offrent une interface simple pour choisir des dates et normalisent le format des données envoyées au serveur, quelle que soit la langue de l'utilisateur·ice.

Dans cette section, nous allons examiner des utilisations simples puis plus complexes de `<input type="date">`.

### Utilisation simple

Dans son expression la plus simple `<input type="date">` s'utilise avec un élément `<input>` et un élément {{HTMLElement("label")}}&nbsp;:

```html
<form action="https://example.com">
  <label>
    Veuillez saisir votre date de naissance&nbsp;:
    <input type="date" name="bday" />
  </label>

  <p><button>Envoyer</button></p>
</form>
```

{{EmbedLiveSample("Utilisation simple", 600, 40)}}

Ce fragment de HTML envoie la date saisie avec la clé `bday` vers `https://example.com`, ce qui donne une URL résultante comme `https://example.com/?bday=1955-06-08`.

### Paramétrer une date maximale et une date minimale

On peut utiliser les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) afin de restreindre les dates qui peuvent être saisies par l'utilisateur·ice. Dans l'exemple suivant, on indique une date minimum au premier avril 2017 (`2017-04-01`) et une date maximale au 30 avril 2017 (`2017-04-30`)&nbsp;:

```html
<form>
  <label
    >Veuillez choisir la meilleure date pour la soirée&nbsp;:
    <input type="date" name="party" min="2017-04-01" max="2017-04-30" />
  </label>
</form>
```

{{EmbedLiveSample("Paramétrer une date maximale et une date minimale", 600, 40)}}

On ne peut donc ici que sélectionner une date en avril 2017. Seule la partie du contrôle consacrée aux jours sera éditable et on ne pourra pas sélectionner d'autres mois ou années.

Vous pouvez utiliser l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) pour faire varier le nombre de jours sautés à chaque incrémentation de la date (par exemple, pour ne rendre sélectionnables que les samedis).

### Contrôler la taille du champ de saisie

`<input type="date">` ne permet pas d'utiliser des attributs de dimensionnement tels que [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size). Il est nécessaire d'utiliser [CSS](/fr/docs/Web/CSS) pour gérer ces aspects de mise en forme.

## Validation

Par défaut, `<input type="date">` ne valide pas la valeur saisie au-delà de son format. Les interfaces ne permettent généralement pas de saisir autre chose qu'une date — ce qui est utile.

Si vous utilisez [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) pour restreindre les dates disponibles (voir [Paramétrer une date maximale et une date minimale](#paramétrer_une_date_maximale_et_une_date_minimale)), le contrôle du formulaire désactive les dates invalides et affichera une erreur si vous essayez de soumettre une date hors limites.

Vous pouvez aussi utiliser l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) pour rendre la saisie de la date obligatoire — une erreur sera affichée si vous essayez de soumettre un champ date vide.

Voyons un exemple de dates minimale et maximale, et rendons aussi le champ obligatoire&nbsp;:

```html
<form>
  <label>
    Sélectionner la meilleure date (entre le premier et le 20 avril)&nbsp;:
    <input
      type="date"
      name="party"
      min="2017-04-01"
      max="2017-04-20"
      required />
    <span class="validity"></span>
  </label>

  <p>
    <button>Envoyer</button>
  </p>
</form>
```

Si on essaie de soumettre le formulaire avec une date incomplète (ou en dehors de l'intervalle indiqué), le message affichera une erreur. Vous pouvez essayer ici&nbsp;:

{{EmbedLiveSample("Validation", 600, 100)}}

Voici le CSS utilisé dans l'exemple ci-dessus. Nous utilisons les [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} pour ajouter une icône à côté du champ de saisie, selon que la valeur courante est valide ou non. Nous avons dû placer l'icône sur un {{HTMLElement("span")}} à côté du champ, et non sur le champ lui-même, car dans Chrome au moins, le contenu généré du champ est placé à l'intérieur du contrôle du formulaire et ne peut pas être mis en forme ou affiché correctement.

```css
label {
  display: flex;
  align-items: center;
}

span::after {
  padding-left: 5px;
}

input:invalid + span::after {
  content: "✖";
}

input:valid + span::after {
  content: "✓";
}
```

> [!WARNING]
> La validation des formulaires côté client _n'est pas un substitut_ à la validation côté serveur. Il est facile pour quelqu'un de modifier le HTML, ou de contourner entièrement votre HTML et d'envoyer les données directement à votre serveur. Si votre serveur ne valide pas les données reçues, cela peut entraîner des problèmes avec des données mal formatées, trop volumineuses, d'un type incorrect, etc.

## Exemples

Dans cet exemple, nous créons un sélecteur de date en utilisant le sélecteur natif `<input type="date">`.

### HTML

Le HTML ressemble à ceci&nbsp;:

```html
<form>
  <div class="nativeDatePicker">
    <label for="bday">Entrez votre date de naissance&nbsp;:</label>
    <input type="date" id="bday" name="bday" />
    <span class="validity"></span>
  </div>
</form>
```

### CSS

Le CSS ressemble à ceci&nbsp;:

```css
input:invalid + span::after {
  content: " ✖";
}

input:valid + span::after {
  content: " ✓";
}
```

### Résultats

{{EmbedLiveSample("Exemples", 600, 100)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Valeur</a></strong></td>
      <td>
        Une chaîne représentant une date au format YYYY-MM-DD, ou vide
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
        <a href="/fr/docs/Web/API/HTMLInputElement/value"><code>value</code></a>,
        <a href="/fr/docs/Web/API/HTMLInputElement/valueAsDate"><code>valueAsDate</code></a>,
        <a href="/fr/docs/Web/API/HTMLInputElement/valueAsNumber"><code>valueAsNumber</code></a>
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
        {{DOMxRef("HTMLInputElement.stepUp", "stepUp()")}}
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

- L'élément générique {{HTMLElement("input")}} et l'interface DOM qui le porte, {{DOMxRef("HTMLInputElement")}}
- [Un tutoriel sur les sélecteurs de date et d'heure](/fr/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#sélection_de_date_et_heure)
- [Les formats de date et d'heure utilisés en HTML](/fr/docs/Web/HTML/Guides/Date_and_time_formats)
