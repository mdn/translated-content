---
title: <input type="range">
slug: Web/HTML/Element/input/range
browser-compat: html.elements.input.input-range
translation_of: Web/HTML/Element/input/range
---
{{HTMLRef("Input_types")}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut **`range`** permettent à l'utilisatrice ou l'utilisateur d'indiquer une valeur numérique comprise entre deux bornes. La valeur précise n'est pas considérée comme importante. Ces éléments sont généralement représentés avec un curseur sur une ligne ou comme un bouton de potentiel et non pas comme un champ de saisie (à la façon de [`number`](/fr/docs/Web/HTML/Element/input/number) par exemple).

Ce genre de <i lang="en">widget</i> n'étant pas précis, ce type ne devrait pas être utilisé lorsque la valeur exacte fournie est importante.

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

Si le navigateur de l'utilisatrice ou l'utilisateur ne prend pas en charge le type `range`, il utilisera le type [`text`](/fr/docs/Web/HTML/Element/Input/text) à la place.

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères (<a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>) qui contient la représentation textuelle de la valeur numérique sélectionnée. On utilisera la méthode <a href="/fr/docs/Web/API/HTMLInputElement/valueAsNumber"><code>valueAsNumber</code></a> afin d'obtenir la valeur sous forme numérique (type <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>).
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/Input_event"><code>input</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-max"><code>max</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-min"><code>min</code></a>, et <a href="/fr/docs/Web/HTML/Element/Input#attr-step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>list</code>, <code>value</code> et <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement/stepDown"><code>stepDown()</code></a> et <a href="/fr/docs/Web/API/HTMLInputElement/stepUp"><code>stepUp()</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Validation

Il n'existe pas de motif de validation. Cependant, voici les formes de validation automatiques qui sont appliquées&nbsp;:

- Si la valeur de l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) est quelque chose qui ne peut pas être converti en nombre décimal, la validation échoue.
- La valeur ne doit pas être inférieure à [`min`](/fr/docs/Web/HTML/Element/Input#attr-min). La valeur minimale par défaut est `0`.
- La valeur ne doit pas être supérieure à [`max`](/fr/docs/Web/HTML/Element/Input#attr-max). La valeur maximale par défaut est `0`.
- La valeur doit être un multiple de [`step`](/fr/docs/Web/HTML/Element/Input#attr-step). La valeur par défaut est `1`.

## Valeur

L'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) contient une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) qui correspond à la représentation textuelle du nombre sélectionnée. La valeur n'est jamais une chaîne vide (`""`). La valeur par défaut est celle médiane entre le minimum et le maximum (sauf si la valeur maximale indiquée est inférieure à la valeur minimale, auquel cas la valeur par défaut est celle de l'attribut `min`). Voici un fragment de code illustrant cet algorithme pour le choix de la valeur par défaut&nbsp;:

```js
defaultValue = (rangeElem.max < rangeElem.min) ? rangeElem.min
               : rangeElem.min + (rangeElem.max - rangeElem.min)/2;
```

Si on essaie d'obtenir une valeur inférieure au minimum, alors la valeur sera ramenée au minimum (de même si on essaye de dépasser le maximum).

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs pour les intervalles peuvent utiliser les attributs suivants&nbsp;:

### `list`

La valeur de cet attribut est l'identifiant ([`id`](/fr/docs/Web/API/Element/id)) d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) situé dans le même document. L'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Element/Input#attr-type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

Voir l'exemple ci-après sur [le contrôle d'intervalle avec les marques](#un_contrôle_avec_des_marques) qui illustre comment ces options s'affichent dans les navigateurs qui prennent en charge la fonctionnalité.

### `max`

La plus grande valeur autorisée sur l'intervalle. Si la valeur saisie dans le champ (représentée par l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value)) dépasse ce seuil, [la validation échouera](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur fournie n'est pas un nombre, aucun maximum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être supérieure ou égale à celle indiquée par l'attribut [`min`](/fr/docs/Web/HTML/Attributes/min). Voir l'attribut HTML [`max`](/fr/docs/Web/HTML/Attributes/max).

### `min`

La plus petite valeur autorisée sur l'intervalle. Si la valeur saisie dans le champ (représentée par l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value)) est inférieure à ce seuil, [la validation échouera](/fr/docs/Web/Guide/HTML/Constraint_validation). Si la valeur fournie n'est pas un nombre, aucun minimum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être inférieure ou égale à celle indiquée par l'attribut [`max`](/fr/docs/Web/HTML/Attributes/max). Voir l'attribut HTML [`min`](/fr/docs/Web/HTML/Attributes/min).

### `step`

L'attribut `step` est un nombre qui définit la granularité à laquelle la valeur doit obéir, ou la valeur `any` (décrite ci-après). Seules les valeurs qui sont des incréments en multiple de `step` depuis la valeur de base ([`min`](#min) si cet attribut est défini, [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) sinon, et si aucun n'est fourni, une valeur par défaut appropriée) sont valides.

Si cet attribut utilise la chaîne de caractère `any`, cela signifie qu'il n'y a aucune contrainte d'incrément et que toute valeur est autorisée (sous réserve de respecter les autres contraintes, comme celles indiquées par [`min`](#min) et [`max`](#max)).

> **Note :** Lorsque les données saisies dans le contrôle ne respectent pas l'incrément, [l'agent utilisateur](/fr/docs/Glossary/User_agent) pourra arrondir à la valeur valide la plus proche, en privilégiant les nombres les plus grands si les deux options valides environnantes sont à égale distance.

Par défaut, l'incrément utilisé pour les champs de type `range` vaut 1 et on ne peut alors saisir que des entiers à moins que la valeur de base ne soit pas entière. Ainsi, si on définit `min` avec -10 et `value` avec 1.5, un attribut `step` qui vaut 1 permettra de saisir les valeurs positives 1.5, 2.5, 3.5, etc. et les valeurs négatives -0.5, -1.5, -2.5, etc.

Voir [l'attribut HTML `step`](/fr/docs/Web/HTML/Attributes/step).

## Attributs non-standard

### `orient`

Semblable à la propriété CSS non-standard `moz-orient` qui agit sur les éléments [`<progress>`](/fr/docs/Web/HTML/Element/Progress) et [`<meter>`](/fr/docs/Web/HTML/Element/Meter), l'attribut `orient` définit l'orientation de la piste pour le contrôle d'intervalle. Les valeurs possibles incluent `horizontal` pour un affichage horizontal et `vertical` pour un affichage vertical.

> **Note :** Les attributs suivants ne s'appliquent pas aux contrôles d'intervalle (`<input type="range">`)&nbsp;: `accept`, `alt`, `checked`, `dirname`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`, `readonly`, `required`, `size`, `src`, et `width`. Si l'un de ces attributs est inclus, il sera ignoré.

## Exemples

Bien que le type `number` permette à l'utilisatrice ou l'utilisateur de saisir un nombre avec certaines contraintes optionnelles (par exemple, pour que la valeur soit comprise entre un minimum et un maximum), ce type nécessite de saisir une valeur spécifique. Le type `range` permet de saisir une valeur lorsque l'exactitude de celle-ci importe peu.

Voici quelques scénarios où un contrôle de saisie avec un intervalle est plus pertinent&nbsp;:

- Les contrôles relatifs à l'audio pour le volume, la balance ou les filtres.
- Les contrôles relatifs à la configuration des couleurs (canaux, transparence, luminosité, etc.).
- Les contrôles relatifs à la configuration de jeux vidéos (difficulté, distance de visibilité, taille du monde généré, etc.).
- La longueur du mot de passe pour les mots de passe générés par un gestionnaire de mots de passe.

De façon générale, si une utilisatrice ou un utilisateur est plutôt intéressé dans un pourcentage représentant la distance entre la borne minimale et la borne maximale, un intervalle de saisie sera plus pertinent (par exemple, pour le volume, on pensera plutôt «&nbsp;augmenter le volume jusqu'à la moitié du maximum&nbsp;» que «&nbsp;mettre le volume à 0.5&nbsp;»).

### Indiquer le minimum et le maximum

Par défaut, le minimum vaut `0` et le maximum vaut `100`. Si ces bornes ne conviennent pas, on peut facilement les changer via les attributs [`min`](/fr/docs/Web/HTML/Element/Input#attr-min) et/ou [`max`](/fr/docs/Web/HTML/Element/Input#attr-max). Ces attributs acceptent des nombres décimaux.

Par exemple, afin de demander à une utilisatrice ou un utilisateur de choisir une valeur approximative dans l'intervalle `[-10, 10]`, on pourra utiliser&nbsp;:

```html
<input type="range" min="-10" max="10">
```

{{EmbedLiveSample("", 600, 40)}}

### Définir la granularité

Par défaut, la granularité vaut `1`, ce qui signifie que la valeur est toujours un entier. Cela peut être modifié grâce à l'attribut [`step`](/fr/docs/Web/HTML/Element/Input#attr-step) qui permet de contrôler la granularité. Ainsi, si on souhaite une valeur comprise entre `5` et `10` et précise avec deux chiffres après la virgule, on pourra utiliser l'attribut `step` avec la valeur `0.01`&nbsp;:

#### Utiliser l'attribut `step`

```html
<input type="range" min="5" max="10" step="0.01">
```

{{EmbedLiveSample("", 600, 40)}}

#### Utiliser l'attribut `step` avec `any`

Si on souhaite prendre en charge n'importe quelle valeur, quel que soit le nombre de décimales, on pourra utiliser la valeur `any` pour l'attribut [`step`](/fr/docs/Web/HTML/Element/Input#attr-step)&nbsp;:

```html
<input type="range" min="0" max="3.14" step="any">
```

{{EmbedLiveSample("", 600, 40)}}

Cet exemple permet de choisir une valeur entre `0` et `3.14` sans aucune restriction quant à la partie décimale.

### Ajouter des marques et des étiquettes

La spécification HTML fournit une certaine flexibilité aux navigateurs pour représenter le contrôle de saisie. La spécification indique comment ajouter des informations pour certains niveaux de l'intervalle grâce à l'attribut [`list`](/fr/docs/Web/HTML/Element/Input#attr-list) et à un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist). En revanche, il n'y a pas de spécifications précises quant aux marques (tirets) positionnées le long du contrôle.

#### Aperçus

La plupart des navigateurs prennent partiellement en charge ces fonctionnalités. Voici donc quelques aperçus du résultat qui peut être obtenu sur macOS avec un navigateur qui prend en charge chacune des fonctionnalités.

##### Un contrôle sans marque

Voici ce qu'on obtient lorsque le navigateur ne prend pas en charge cette fonctionnalité ou que l'attribut [`list`](/fr/docs/Web/HTML/Element/Input#attr-list) est absent.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Exemples</th>
    </tr>
    <tr>
      <td rowspan="4">
        <pre class="brush: html">&#x3C;input type="range"></pre>
      </td>
      <th>Capture d'écran</th>
    </tr>
    <tr>
      <td>
        <img
          alt="Capture d'écran d'un contrôle d'intervalle avec une piste, sans modification, sur macOS"
          src="macslider-plain.png"
        />
      </td>
    </tr>
    <tr>
      <th>Rendu <i lang="en">live</i></th>
    </tr>
    <tr>
      <td>
        {{EmbedLiveSample("",200,55,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

##### Un contrôle avec des marques

Dans l'exemple qui suit, le contrôle utilise un attribut `list` qui indique l'identifiant d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) qui définit un ensemble de marques à appliquer sur le contrôle. Il y en a ici 11&nbsp;: une marque pour `0%` puis une marque tous les `10%`. Chaque point pour lequel on souhaite afficher une marque est représenté par un élément [`<option>`](/fr/docs/Web/HTML/Element/Option) dont la valeur de l'attribut [`value`](/fr/docs/Web/HTML/Element/Option#attr-value) correspond à l'emplacement de la marque.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Exemples</th>
    </tr>
    <tr>
      <td rowspan="4">
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0">&#x3C;/option>
&#x3C;option value="10">&#x3C;/option>
&#x3C;option value="20">&#x3C;/option>
&#x3C;option value="30">&#x3C;/option>
&#x3C;option value="40">&#x3C;/option>
&#x3C;option value="50">&#x3C;/option>
&#x3C;option value="60">&#x3C;/option>
&#x3C;option value="70">&#x3C;/option>
&#x3C;option value="80">&#x3C;/option>
&#x3C;option value="90">&#x3C;/option>
&#x3C;option value="100">&#x3C;/option>
&#x3C;/datalist>

</pre>
      </td>
      <th>Capture d'écran</th>
    </tr>
    <tr>
      <td>
        <img
          alt="Une capture d'écran d'un contrôle d'intervalle avec des marques sur macOS"
          src="macslider-ticks.png"
        />
      </td>
    </tr>
    <tr>
      <th>Rendu <i lang="en">live</i></th>
    </tr>
    <tr>
      <td>
        {{EmbedLiveSample("",200,55,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

##### Un contrôle avec des marques et des étiquettes

Il est possible d'ajouter des étiquettes grâce à l'attribut [`label`](/fr/docs/Web/HTML/Element/Option#attr-label) des éléments [`<option>`](/fr/docs/Web/HTML/Element/Option) correspondants aux marques.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Exemples</th>
    </tr>
    <tr>
      <td rowspan="4">
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0" label="0%">&#x3C;/option>
&#x3C;option value="10">&#x3C;/option>
&#x3C;option value="20">&#x3C;/option>
&#x3C;option value="30">&#x3C;/option>
&#x3C;option value="40">&#x3C;/option>
&#x3C;option value="50" label="50%">&#x3C;/option>
&#x3C;option value="60">&#x3C;/option>
&#x3C;option value="70">&#x3C;/option>
&#x3C;option value="80">&#x3C;/option>
&#x3C;option value="90">&#x3C;/option>
&#x3C;option value="100" label="100%">&#x3C;/option>
&#x3C;/datalist>

</pre
        >
      </td>
      <th>Capture d'écran</th>
    </tr>
    <tr>
      <td>
        <img
          alt="Capture d'écran d'un contrôle d'intervalle avec des marques et des libellés associés sur macOS"
          src="macslider-labels.png"
        />
      </td>
    </tr>
    <tr>
      <th>Rendu <i lang="en">live</i></th>
    </tr>
    <tr>
      <td>
        {{EmbedLiveSample("",200,55,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>


> **Note :** Actuellement, aucun navigateur ne prend en charge l'ensemble de ces fonctionnalités. Firefox n'affiche aucune marque ni étiquette et Chrome affiche uniquement les marques mais pas les étiquettes. La version 66 (66.0.3359.181) de Chrome prendre en charge les étiquettes mais par défaut l'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) est mis en forme avec CSS et [`display`](/fr/docs/Web/CSS/display)`: none;`, ce qui le masque.

### Créer des contrôles d'intervalle verticaux

Par défaut, si un navigateur affiche un tel contrôle avec une piste, celle-ci sera affichée afin que le curseur puisse aller de gauche à droite. Selon la prise en charge du navigateur, on pourra afficher le contrôle verticalement et déplacer le curseur vers le haut ou vers le bas en utilisant CSS en déclarant une hauteur supérieure à une largeur. Cette fonctionnalité n'est, à date, implémentée par aucun des navigateurs majeurs (voir [le bug 981916 pour Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=981916), [le bug 341071 pour Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=341071)). La spécification d'un tel rendu vertical est [toujours en discussion](https://github.com/whatwg/html/issues/4177).

En attendant, il est possible de créer un contrôle vertical en utilisant les transformations CSS ou en utilisant les méthodes spécifiques à chaque navigateur&nbsp;: en utilisant la propriété CSS [`appearance`](/fr/docs/Web/CSS/appearance) avec la valeur `slider-vertical`, en utilisant l'attribut non-standard `orient` ou en changeant l'orientation du texte pour Internet Explorer.

#### Contrôle d'intervalle horizontal

Prenons ce contrôle&nbsp;:

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1">
```

{{EmbedLiveSample("", 200, 200, "orientation_sample1.png")}}

Il s'affiche horizontalement (en tout cas sur la plupart, si ce n'est la totalité, des principaux navigateurs).

#### Méthodes standard pour un rendu vertical

Selon la spécification, pour afficher un tel contrôle verticalement, il suffit que ses dimensions soient plus hautes que larges&nbsp;:

```css
#volume {
  height: 150px;
  width: 50px;
}
```

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1">
```

{{EmbedLiveSample("", 200, 200, "orientation_sample2.png")}}

Toutefois, aucun navigateur majeur ne prend en charge cette fonctionnalité.

#### Utiliser les transformations CSS

On peut créer un contrôle vertical en dessinant un contrôle horizontal auquel on applique une rotation. Pour cela, on pourra utiliser CSS avec [`transform`](/fr/docs/Web/CSS/transform) pour tourner l'élément. Voyons comment faire.

Tout d'abord, on enveloppe l'élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dans un élément [`<div>`](/fr/docs/Web/HTML/Element/div) afin de pouvoir corriger la disposition une fois que la transformation est effectuée (les transformations n'affectent pas automatiquement la disposition de la page)&nbsp;:

```html
<div class="slider-wrapper">
  <input type="range" min="0" max="11" value="7" step="1">
</div>
```

En suite, on met en forme le conteneur du contrôle avec CSS en indiquant le mode d'affichage et la taille qu'on souhaite afin que la page soit organisée correctement. En pratique, cela correspond à réserver un espace sur la page afin que le curseur tourné s'inscrive dans l'espace réservé, sans perturber les autres éléments.

```css
.slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}
```

Et ensuite, on met en forme l'élément `<input>` situé dans cet espace réservé&nbsp;:

```css
.slider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}
```

La taille du contrôle est de 150 pixels de long sur 20 pixels de haut. Les marges sont nulles et [`transform-origin`](/fr/docs/Web/CSS/transform-origin) déplace au milieu de l'espace le centre de rotation (75 étant la moitié de 150). Enfin, on applique une rotation antihoraire de `90°`. On obtient comme résultat un contrôle d'intervalle vertical où le maximum est situé en haut et où le minimum est situé en bas.

{{EmbedLiveSample("", 200, 200, "orientation_sample3.png")}}

#### Utiliser la propriété `appearance`

La propriété [`appearance`](/fr/docs/Web/CSS/appearance) possède une valeur non-standard `slider-vertical` qui permet de transformer les pistes horizontales en pistes verticales.

On utilise le même HTML que pour les exemples précédents&nbsp;:

```html
<input type="range" min="0" max="11" value="7" step="1">
```

Ici, on cible uniquement les contrôles d'intervalles&nbsp;:

```css
input[type="range"] {
  -webkit-appearance: slider-vertical;
}
```

{{EmbedLiveSample("", 200, 200)}}

#### Utiliser l'attribut `orient`

Firefox dispose d'un attribut HTML non-standard&nbsp;: `orient`.

Le code HTML est semblable à celui utilisé précédemment, on y ajoute l'attribut avec une valeur `vertical`&nbsp;:

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical">
```

{{EmbedLiveSample("", 200, 200)}}

#### `writing-mode: bt-lr;`

La propriété [`writing-mode`](/fr/docs/Web/CSS/writing-mode) ne devrait pas être utilisée pour modifier la direction du texte pour l'internationalisation et la localisation mais peut être employée pour créer des effets spéciaux.

Ici, on utilise le même HTML que précédemment&nbsp;:

```html
<input type="range" min="0" max="11" value="7" step="1">
```

On cible uniquement les contrôles d'intervalle et on change leur mode d'écriture avec la valeur `bt-lr` qui signifie <i lang="en">bottom-to-top and left-to-right</i>, soit du bas vers le haut puis de la gauche vers la droite&nbsp;:

```css
input[type="range"] {
  writing-mode: bt-lr;
}
```

{{EmbedLiveSample("", 200, 200)}}

#### Assembler tout ça

Comme chacun des exemples précédents fonctionne dans un navigateur différent, on peut les combiner en un seul qui fonctionne pour les différents navigateurs.

On garde l'attribut `orient` avec la valeur `vertical` pour Firefox&nbsp;:

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical">
```

On cible les contrôles d'intervalle avec un mode d'écriture `bt-lr` pour Internet Explorer et on ajoute `-webkit-appearance: slider-vertical` pour les navigateurs basés sur WebKit&nbsp;:

```css
input[type="range"] {
  writing-mode: bt-lr;
  -webkit-appearance: slider-vertical;
}
```

{{EmbedLiveSample("", 200, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Learn/Forms)
- [`<input>`](/fr/docs/Web/HTML/Element/Input) et l'interface [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) sur laquelle l'élément du DOM correspondant est basé
- [`<input type="number">`](/fr/docs/Web/HTML/Element/input/number)
- [`validityState.rangeOverflow`](/fr/docs/Web/API/validityState/rangeOverflow)
- [`validityState.rangeUnderflow`](/fr/docs/Web/API/validityState/rangeUnderflow)
- [Contrôler plusieurs paramètres avec `ConstantSourceNode`](/fr/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Mettre en forme un contrôle d'intervalle (en anglais)](https://css-tricks.com/sliding-nightmare-understanding-range-input)
- [Compatibilité des propriétés CSS](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
