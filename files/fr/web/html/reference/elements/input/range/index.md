---
title: <input type="range">
slug: Web/HTML/Reference/Elements/input/range
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

Les éléments {{HTMLElement("input")}} de type **`range`** permettent à l'utilisatrice ou l'utilisateur d'indiquer une valeur numérique comprise entre deux bornes. La valeur précise n'est pas considérée comme importante. Ces éléments sont généralement représentés avec un curseur sur une ligne ou comme un bouton de potentiel et non pas comme un champ de saisie (à la façon de `{{HTMLElement("input/number", "number")}}` par exemple).

Ce genre de composant n'étant pas précis, ce type ne devrait pas être utilisé lorsque la valeur exacte fournie est importante.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;range&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Paramètres audio&nbsp;:</p>

<div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label for="volume">Volume</label>
</div>

<div>
  <input
    type="range"
    id="cowbell"
    name="cowbell"
    min="0"
    max="100"
    value="90"
    step="10" />
  <label for="cowbell">Cowbell</label>
</div>
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

Si le navigateur de l'utilisatrice ou l'utilisateur ne prend pas en charge le type `range`, il utilisera le type `{{HTMLElement('input/text', 'text')}}` à la place.

## Valeur

La valeur d'un élément `<input type="range">` est définit en utilisant l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) qui accepte une chaîne de caractères correspondant à la représentation textuelle du nombre sélectionnée. La valeur n'est jamais une chaîne de caractères vide (`""`). La valeur par défaut est celle médiane entre le minimum et le maximum — sauf si la valeur maximale indiquée est inférieure à la valeur minimale, auquel cas la valeur par défaut est celle de l'attribut `min`. Voici un fragment de code illustrant cet algorithme pour le choix de la valeur par défaut&nbsp;:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Si une tentative est faite pour définir la valeur en dessous du minimum, elle est réglée sur le minimum. De même, une tentative de définir la valeur au-dessus du maximum entraîne son réglage sur le maximum.

## Validation

Il n'existe pas de motif de validation. Cependant, voici les formes de validation automatiques qui sont appliquées&nbsp;:

- Si la valeur de l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) est quelque chose qui ne peut pas être converti en nombre décimal, la validation échoue.
- La valeur ne doit pas être inférieure à [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min). La valeur minimale par défaut est `0`.
- La valeur ne doit pas être supérieure à [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max). La valeur maximale par défaut est `100`.
- La valeur doit être un multiple de [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step). La valeur par défaut est `1`.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs pour les intervalles peuvent utiliser les attributs suivants&nbsp;:

### `list`

La valeur de cet attribut est l'identifiant ({{DOMxRef("Element.id", "id")}}) d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément {{HTMLElement("datalist")}} fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Reference/Elements/input#type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

Voir l'exemple ci-après sur [le contrôle d'intervalle avec les marques](#un_contrôle_avec_des_marques) qui illustre comment ces options s'affichent dans les navigateurs qui prennent en charge la fonctionnalité.

### `max`

La plus grande valeur autorisée sur l'intervalle. Si la valeur saisie dans le champ (représentée par l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)) dépasse ce seuil, [la validation échouera](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur fournie n'est pas un nombre, aucun maximum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être supérieure ou égale à celle indiquée par l'attribut [`min`](/fr/docs/Web/HTML/Reference/Attributes/min). Voir l'attribut HTML [`max`](/fr/docs/Web/HTML/Reference/Attributes/max).

### `min`

La plus petite valeur autorisée sur l'intervalle. Si la valeur saisie dans le champ (représentée par l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)) est inférieure à ce seuil, [la validation échouera](/fr/docs/Web/HTML/Guides/Constraint_validation). Si la valeur fournie n'est pas un nombre, aucun minimum (`min`) ne sera fixé pour la valeur du contrôle.

Cette valeur doit être inférieure ou égale à celle indiquée par l'attribut [`max`](/fr/docs/Web/HTML/Reference/Attributes/max). Voir l'attribut HTML [`min`](/fr/docs/Web/HTML/Reference/Attributes/min).

> [!NOTE]
> Si les valeurs de `min` et `max` sont égales ou si la valeur de `max` est inférieure à la valeur de `min`, l'utilisateur·ice ne pourra pas interagir avec l'intervalle.

### `step`

L'attribut `step` est un nombre qui définit la granularité à laquelle la valeur doit obéir, ou la valeur `any`, qui est décrite ci-après. Seules les valeurs qui sont des incréments en multiple de `step` depuis la valeur de base ([`min`](#min) si cet attribut est défini, [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) sinon, et si aucun n'est fourni, une valeur par défaut appropriée) sont valides.

La valeur par défaut du pas pour les entrées `step` est `1`, ce qui permet de saisir uniquement des nombres entiers — à moins que la base du pas ne soit pas un nombre entier.

Si cet attribut utilise la chaîne de caractère `any`, cela signifie qu'il n'y a aucune contrainte d'incrément et que toute valeur est autorisée (sous réserve de respecter les autres contraintes, comme celles indiquées par [`min`](#min) et [`max`](#max)). Voir l'exemple [Définir l'étape sur la valeur `any`](#utiliser_lattribut_step_avec_any) pour voir comment cela fonctionne dans les navigateurs pris en charge.

> [!NOTE]
> Lorsque les données saisies dans le contrôle ne respectent pas l'incrément, {{Glossary("user agent", "l'agent utilisateur")}} pourra arrondir à la valeur valide la plus proche, en privilégiant les nombres les plus grands si les deux options valides environnantes sont à égale distance.

## Attributs non standard

### `orient`

Semblable à la propriété CSS non standard `-moz-orient` qui agit sur les éléments {{HTMLElement('progress')}} et {{HTMLElement('meter')}}, l'attribut `orient` définit l'orientation de la piste pour le contrôle d'intervalle. Les valeurs possibles incluent `horizontal` pour un affichage horizontal et `vertical` pour un affichage vertical.

## Exemples

Bien que le type `number` permette à l'utilisatrice ou l'utilisateur de saisir un nombre avec certaines contraintes optionnelles (par exemple, pour que la valeur soit comprise entre un minimum et un maximum), ce type nécessite de saisir une valeur spécifique. Le type `range` permet de saisir une valeur lorsque l'exactitude de celle-ci importe peu.

Voici quelques scénarios où un contrôle de saisie avec un intervalle est plus pertinent&nbsp;:

- Les contrôles relatifs à l'audio pour le volume, la balance ou les filtres.
- Les contrôles relatifs à la configuration des couleurs (canaux, transparence, luminosité, etc.).
- Les contrôles relatifs à la configuration de jeux vidéos (difficulté, distance de visibilité, taille du monde généré, etc.).
- La longueur du mot de passe pour les mots de passe générés par un gestionnaire de mots de passe.

De façon générale, si une utilisatrice ou un utilisateur est plutôt intéressé dans un pourcentage représentant la distance entre la borne minimale et la borne maximale, un intervalle de saisie sera plus pertinent (par exemple, pour le volume, on pensera plutôt «&nbsp;augmenter le volume jusqu'à la moitié du maximum&nbsp;» que «&nbsp;mettre le volume à 0.5&nbsp;»).

### Définir le minimum et le maximum

Par défaut, le minimum vaut `0` et le maximum vaut `100`. Si ces bornes ne conviennent pas, on peut facilement les changer avec les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et/ou [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max). Ces attributs acceptent des nombres décimaux.

Par exemple, afin de demander à une utilisatrice ou un utilisateur de choisir une valeur approximative dans l'intervalle `[-10, 10]`, on pourra utiliser&nbsp;:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Définir le minimum et le maximum", 600, 40)}}

### Définir la granularité

Par défaut, la granularité vaut `1`, ce qui signifie que la valeur est toujours un entier. Cela peut être modifié grâce à l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) qui permet de contrôler la granularité. Ainsi, si on souhaite une valeur comprise entre `5` et `10` et précise avec deux chiffres après la virgule, on pourra utiliser l'attribut `step` avec la valeur `0.5`&nbsp;:

#### Utiliser l'attribut `step`

```html
<input type="range" min="5" max="10" step="0.5" />
```

{{EmbedLiveSample("Utiliser l'attribut `step`", 600, 40)}}

#### Utiliser l'attribut `step` avec `any`

Si on souhaite prendre en charge n'importe quelle valeur, quel que soit le nombre de décimales, on pourra utiliser la valeur `any` pour l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step)&nbsp;:

##### HTML

```html
<input id="pi_input" type="range" min="0" max="3.14" step="any" />
<p>Valeur&nbsp;: <output id="value"></output></p>
```

##### JavaScript

```js
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
```

{{EmbedLiveSample("Utiliser l'attribut `step` avec `any`", 600, 40)}}

Cet exemple permet à l'utilisateur·ice de choisir n'importe quelle valeur entre 0 et π sans aucune restriction sur la partie fractionnaire de la valeur sélectionnée. JavaScript est utilisé pour montrer comment la valeur change lorsque l'utilisateur·ice interagit avec l'intervalle.

### Ajouter des marques

Pour ajouter des marques à un contrôle d'intervalle, incluez l'attribut `list`, en lui donnant l'`id` d'un élément {{HTMLElement("datalist")}} qui définit une série de marques sur le contrôle. Chaque point est représenté par un élément {{HTMLElement("option")}} dont la valeur de l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/option#value) correspond à la valeur de l'intervalle à laquelle une marque doit être dessinée.

#### HTML

```html
<label for="temp">Choisissez une température confortable&nbsp;:</label><br />
<input type="range" id="temp" name="temp" list="markers" />

<datalist id="markers">
  <option value="0"></option>
  <option value="25"></option>
  <option value="50"></option>
  <option value="75"></option>
  <option value="100"></option>
</datalist>
```

#### Résultat

{{EmbedLiveSample("Ajouter des marques", 600, 50)}}

### Utiliser la même liste de données pour plusieurs contrôles d'intervalle

Pour éviter de répéter du code, vous pouvez réutiliser le même élément {{HTMLElement("datalist")}} pour plusieurs éléments `<input type="range">`, ainsi que pour d'autres types d'éléments {{HTMLElement("input")}}.

> [!NOTE]
> Si vous souhaitez également [afficher les étiquettes](#ajouter_des_étiquettes) comme dans l'exemple ci-dessous, vous aurez besoin d'un `datalist` pour chaque contrôle d'intervalle.

#### HTML

```html
<p>
  <label for="temp1">Température pour la pièce 1&nbsp;:</label>
  <input type="range" id="temp1" name="temp1" list="values" />
</p>
<p>
  <label for="temp2">Température pour la pièce 2&nbsp;:</label>
  <input type="range" id="temp2" name="temp2" list="values" />
</p>

<p>
  <label for="temp3">Température pour la pièce 3&nbsp;:</label>
  <input type="range" id="temp3" name="temp3" list="values" />
</p>

<datalist id="values">
  <option value="0" label="0"></option>
  <option value="25" label="25"></option>
  <option value="50" label="50"></option>
  <option value="75" label="75"></option>
  <option value="100" label="100"></option>
</datalist>
```

#### Résultat

{{EmbedLiveSample("Utiliser la même liste de données pour plusieurs contrôles d'intervalle")}}

### Ajouter des étiquettes

Vous pouvez ajouter des étiquettes aux marques en donnant aux éléments `<option>` des attributs `label`. Cependant, le contenu des étiquettes ne sera pas affiché par défaut. Vous pouvez utiliser CSS pour afficher les étiquettes et les positionner correctement. Voici une façon de le faire.

#### HTML

```html
<label for="tempB">Choisissez une température confortable&nbsp;:</label><br />
<input type="range" id="tempB" name="temp" list="values" />

<datalist id="values">
  <option value="0" label="très froid !"></option>
  <option value="25" label="frais"></option>
  <option value="50" label="moyen"></option>
  <option value="75" label="chaud !"></option>
  <option value="100" label="très chaud !"></option>
</datalist>
```

#### CSS

```css
datalist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  writing-mode: vertical-lr;
  width: 200px;
}

option {
  padding: 0;
}

input[type="range"] {
  width: 200px;
  margin: 0;
}
```

#### Résultat

{{EmbedLiveSample("Ajouter des étiquettes")}}

### Créer des contrôles d'intervalle verticaux

Par défaut, les navigateurs affichent les éléments `<input type="range">` sous forme de curseurs avec le bouton coulissant de gauche à droite.

Pour créer un intervalle vertical dans lequel le bouton coulisse de haut en bas, définissez la propriété {{CSSxRef("writing-mode")}} avec une valeur de `vertical-rl` ou `vertical-lr`&nbsp;:

```html hidden
<input type="range" min="0" max="10" value="8" />
```

```css
input[type="range"] {
  writing-mode: vertical-lr;
}
```

Cela fait en sorte que le curseur de l'intervalle s'affiche verticalement&nbsp;:

{{EmbedLiveSample("Créer des contrôles d'intervalle verticaux", 200, 200)}}

Vous pouvez également définir la propriété CSS {{CSSxRef('appearance')}} sur la valeur non standard `slider-vertical` si vous souhaitez prendre en charge les anciennes versions de Chrome et Safari, et inclure l'attribut non standard `orient="vertical"` pour prendre en charge les anciennes versions de Firefox.

Voir [Créer des contrôles de formulaire verticaux](/fr/docs/Web/CSS/Guides/Writing_modes/Vertical_controls) pour des exemples.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères contenant la représentation textuelle
        de la valeur numérique sélectionnée&nbsp;; utilisez
        {{DOMxRef("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
        pour obtenir la valeur sous forme numérique.
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
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#max"><code>max</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#min"><code>min</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#value"><code>value</code></a>,
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
        {{DOMxRef("HTMLInputElement.stepDown", "stepDown()")}}
        et {{DOMxRef("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role">slider</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("input")}} et l'interface {{DOMxRef("HTMLInputElement")}} sur laquelle l'élément du DOM correspondant est basé
- L'élément [`<input type="number">`](/fr/docs/Web/HTML/Reference/Elements/input/number)
- Les propriétés {{DOMxRef('validityState.rangeOverflow')}} et {{DOMxRef('validityState.rangeUnderflow')}}
- [Contrôler plusieurs paramètres avec `ConstantSourceNode`](/fr/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Créer des contrôles de formulaire verticaux](/fr/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
- [Mettre en forme un contrôle d'intervalle <sup>(angl.)</sup>](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
