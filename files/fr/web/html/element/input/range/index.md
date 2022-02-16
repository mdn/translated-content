---
title: <input type="range">
slug: Web/HTML/Element/Input/range
tags:
  - Element
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/range
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`range`** permettent à l'utilisateur d'indiquer une valeur numérique comprise entre deux bornes. La valeur précise n'est pas considérée comme importante. Ces éléments sont généralement représenté avec un curseur sur une ligne ou comme un bouton de potentiel. Ce genre de _widget_ n'étant pas précis, ce type ne devrait pas être utilisé lorsque la valeur exacte fournie par l'utilisateur est importante.

{{EmbedInteractiveExample("pages/tabbed/input-range.html", "tabbed-standard")}}

Si le navigateur de l'utilisateur ne prend pas en charge le type `range`, il utilisera le type [`text`](/fr/docs/Web/HTML/Element/input/text) à la place.

## Valeur

L'attribut {{htmlattrxref("value", "input")}} contient une chaîne de caractères {{domxref("DOMString")}} qui correspond à la représentation textuelle du nombre sélectionnée. La valeur n'est jamais une chaîne vide (`""`). La valeur par défaut est celle médiane entre le minimum et le maximum (sauf si la valeur maximale indiquée est inférieure à la valeur minimale, auquel cas la valeur par défaut est celle de l'attribut `min`).  Voici un fragment de code illustrant cet algorithme pour le choix de la valeur par défaut :

```js
defaultValue = (rangeElem.max < rangeElem.min) ? rangeElem.min
               : rangeElem.min + (rangeElem.max - rangeElem.min)/2;
```

Si on essaie d'obtenir une valeur inférieure au minimum, alors la valeur sera ramenée au minimum (de même si on essaye de dépasser le maximum).

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs pour les intervalles peuvent utiliser les attributs suivants :

| Attribut               | Description                                                                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("max")}}` | La valeur maximale autorisée.                                                                                                                              |
| `{{anch("min")}}` | La valeur minimale autorisée.                                                                                                                              |
| `{{anch("step")}}` | Le pas utilisé pour incrémenter la valeur du champ. Cette valeur est utilisée pour l'interface utilisateur du contrôle et pour la validation de la valeur. |

### {{htmlattrdef("max")}}

La plus grande valeur autorisée sur l'intervalle. Si la valeur saisie dans le champ (représentée par l'attribut {{htmlattrxref("value", "input")}}) dépasse ce seuil, [la validation échouera](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur fournie n'est pas un nombre, aucun maximum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être supérieure ou égale à celle indiquée par l'attribut `min`.

### {{htmlattrdef("min")}}

La plus petite valeur autorisée sur l'intervalle. Si la valeur saisie dans le champ (représentée par l'attribut {{htmlattrxref("value", "input")}}) est inférieure à ce seuil, [la validation échouera](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur fournie n'est pas un nombre, aucun minimum ne sera fixé pour la valeur du contrôle.

Cette valeur doit être inférieure ou égale à celle indiquée par l'attribut `max`.

### {{htmlattrdef("step")}}

{{page("/fr/docs/Web/HTML/Element/input/number", "step-include")}}

Par défaut, l'incrément utilisé pour les champs de type `number` vaut 1 et on ne peut alors saisir que des entiers à momins que la valeur de base ne soit pas entière. Ainsi, si on définit `min` avec -10 et `value` avec 1.5, un attribut `step` qui vaut 1 permettra de saisir les valeurs positives 1.5, 2.5, 3.5, etc. et les valeurs négatives -0.5, -1.5, -2.5, etc.

## Utiliser les intervalles

Bien que le type `"number"` permette à l'utilisateur de saisir un nombre avec certaines contraintes optionnelles (par exemple pour que la valeur soit comprise entre un minimum et un maximum), ce type nécessite de saisir une valeur spécifique. Le type `"range"` permet de saisir une valeur lorsque l'exactitude de celle-ci importe peu.

Voici quelques scénarios où un intervalle de saisie est plus pertinent :

- Les contrôles relatis à l'audio pour le volume, la balance ou les filtres.
- Les contrôles relatifs à la configuration des couleurs (canaux, transparence, luminosité, etc.)
- Les contrôles relatifs à la configuration de jeux vidéos (difficulté, distance de visibilité, taille du monde généré, etc.)
- La longueur du mot de passe pour les mots de passe générés par un gestionnaire de mots de passe.

De façon générale, si un utilisateur est plutôt intéressé dans un pourcentage représentant la distance entre la borne minimale et la borne maximale, un intervalle de saisie sera plus pertinent (par exemple, pour le volume, on pensera plutôt « augmenter le volume jusqu'à la moitié du maximum » que « mettre le volume à 0.5 »).

### Indiquer le minimum et le maximum

Par défaut, le minimum vaut 0 et le maximum vaut 100. Si ces bornes ne conviennent pass, on peut facilement les changer via les attributs {{htmlattrxref("min", "input")}} et/ou {{htmlattrxref("max", "input")}}. Ces attributs acceptent des nombres décimaux.

Par exemple, afin de demander à un utilisateur de choisir une valeur approximative dans l'intervalle \[-10 , 10], on pourra utiliser :

```html
<input type="range" min="-10" max="10">
```

{{EmbedLiveSample("Indiquer_le_minimum_et_le_maximum", 600, 40)}}

### Définir la granularité

Par défaut, la granularité vaut 1, ce qui signifie que la valeur est toujours un entier. Cela peut être modifié grâce à l'attribut {{htmlattrxref("step")}} qui permet de contrôler la granularité. Ainsi, si on souhaite une valeur comprise entre 5 et 10 et précise avec deux chiffres après la virgule, on pourra utiliser l'attribut `step` avec la valeur 0.01 :

#### Exemple 1

```html
<input type="range" min="5" max="10" step="0.01">
```

{{EmbedLiveSample("Exemple_1", 600, 40)}}

#### Exemple 2

Si on souhaite prendre en charge n'importe quelle valeur, quel que soit le nombre de décimales, on pourra utiliser la valeur `any` pour l'attribut `step` :

```html
<input type="range" min="0" max="3.14" step="any">
```

{{EmbedLiveSample("Exemple_2", 600, 40)}}

Cet exemple permet à l'utilisateur de choisir une valeur entre 0 et 3.14 sans aucune restriction quant à la partie décimale.

### Ajouter des marques et des étiquettes

La spécification HTML fournit une certaine flexibilité aux navigateurs pour représenter le contrôle de saisie. La spécification indique comment ajouter des informations pour certains niveaux de l'intervalle grâce à l'attribut  {{htmlattrxref("list", "input")}} et à un élément {{HTMLElement("datalist")}}. En revanche, il n'y a pas de spécifications précises quant aux marques (tirets) positionnés le long du contrôle.

#### Aperçus

La plupart des navigateurs prennent partiellement en charge ces fonctionnalités. Voici donc quelques aperçus du résultat qui peut être obtenu sur macOS avec un navigateur qui prend en charge chacune des fonctionnalités.

##### Un contrôle sans marque

Voici ce qu'on option lorsque le navigateur ne prend pas en charge cette fonctionnalité ou que l'attribut {{htmlattrxref("list", "input")}} est absent.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Aperçu</th>
    </tr>
    <tr>
      <td><pre class="brush: html">&#x3C;input type="range"></pre></td>
      <td>
        <img
          alt="Capture d&#x27;écran d&#x27;un contrôle curseur sur macOS"
          src="macslider-plain.png"
        />
      </td>
    </tr>
  </tbody>
</table>

##### Un contrôle avec des marques

Dans l'exemple qui suit, le contrôle utilise un attribut `list` qui indique l'identifiant d'un élément {{HTMLElement("datalist")}} qui définit un ensemble de marques à appliquer sur le contrôle. Il y en a ici 11 : une marque pour 0% puis une marque tous les 10%. Chaque point pour lequel on souhaite afficher une marque est représenté par un élément {{HTMLElement("option")}} dont la valeur de l'attribut {{htmlattrxref("value", "option")}} correspond à l'emplacement de la marque.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Aperçu</th>
    </tr>
    <tr>
      <td>
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0">
&#x3C;option value="10">
&#x3C;option value="20">
&#x3C;option value="30">
&#x3C;option value="40">
&#x3C;option value="50">
&#x3C;option value="60">
&#x3C;option value="70">
&#x3C;option value="80">
&#x3C;option value="90">
&#x3C;option value="100">
&#x3C;/datalist>

</pre
        >
      </td>
      <td>
        <img
          alt="Capture d&#x27;écran un contrôle curseur sur macOS"
          src="macslider-ticks.png"
        />
      </td>
    </tr>
  </tbody>
</table>

##### Un contrôle avec des marques et des étiquettes

Il est possible d'ajouter des étiquettes grâce à l'attribut {{htmlattrxref("label", "option")}} des éléments {{HTMLElement("option")}} correspondants aux marques.

<table class="fullwidth standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Aperçu</th>
    </tr>
    <tr>
      <td>
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0" label="0%">
&#x3C;option value="10">
&#x3C;option value="20">
&#x3C;option value="30">
&#x3C;option value="40">
&#x3C;option value="50" label="50%">
&#x3C;option value="60">
&#x3C;option value="70">
&#x3C;option value="80">
&#x3C;option value="90">
&#x3C;option value="100" label="100%">
&#x3C;/datalist>

</pre
        >
      </td>
      <td>
        <img
          alt="Capture d&#x27;écran un contrôle curseur sur macOS"
          src="macslider-labels.png"
        />
      </td>
    </tr>
  </tbody>
</table>

> **Note :** Actuellement, aucun navigateur ne prend en charge l'ensemble de ces fonctionnalités. Firefox n'affiche aucune marque ni étiquette et Chrome affiche uniquement les marques mais pas les étiquettes. La version 66 (66.0.3359.181) de Chrome prendre en charge les étiquettes mais par défaut l'élément {{HTMLElement("datalist")}} est mis en forme avec CSS et {{cssxref("display")}}`: none;` , ce qui le masque. Il faut donc rajouter des règles de mises en forme spécifiques.

### Modifier l'orientation du curseur

Par exemple :

#### Horizontal

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1">
```

{{EmbedLiveSample("Horizontal", 200, 200, "orientation_sample1.png")}}

Le contrôle est ici horizontal, pour le rendre vertical, on pourra utiliser un peu de CSS afin de le rendre plus haut que large :

#### Vertical

##### CSS

```css
#volume {
  height: 150px;
  width: 50px;
}
```

##### HTML

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1">
```

##### Résultat

{{EmbedLiveSample("Vertical", 200, 200, "orientation_sample2.png")}}

**Currently, no major browsers support creating vertical range inputs using CSS this way, even though it's the way the specification recommends they do it.**

La spécification HTML recommande de dessiner les contrôles verticalement lorsque la hauteur de celui-ci est supérieure à la largeur. Malheureusement, aucun navigateur ne prend actuellement en charge cette fonctionnalité directement. On peut toutefois dessiner un contrôle vertical en appliquant une rotation sur un contrôle horizontal avec du code CSS et notamment {{cssxref("transform")}} pour tourner l'élément.

#### Autre exemple

##### HTML

Il est nécessaire de placer l'élément {{HTMLElement("input")}} dans un élément {{HTMLElement("div")}} afin de corriger la disposition une fois la transformation appliquée :

```html
<div class="slider-wrapper">
  <input type="range" min="0" max="11" value="7" step="1">
</div>
```

##### CSS

Ensuite, on applique quelques règles CSS. Voici la règle CSS pour l'élément `div` qui indique le mode d'affichage et la taille qu'on souhaite avoir pour que la page soit correctement organisée..

```css
.slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}
```

Ensuite, on applique une transformation sur l'élément `<input>` au sein de l'espace réservé par le `<div>` :

```css
.slider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}
```

Le contrôle mesure alors 150 pixels de long et 20 pixels de haut. Les marges sont nulles et {{cssxref("transform-origin")}} est décalé vers le milieu du contrôle. Le contrôle mesurant 150 pixels de large, décaler le centre de rotation permet d'avoir la zone de destination centrée avec 75 pixels de chaque côté.

##### Résultat

{{EmbedLiveSample("Autre_exemple", 200, 200, "orientation_sample3.png")}}

## Validation

Il n'existe pas de motif de validation. Cependant, voici les formes de validation automatiques qui sont appliquées :

- Si la valeur de l'attribut {{htmlattrxref("value", "input")}} est quelque chose qui ne peut pas être converti en nombre décimal, la validation échoue.
- La valeur ne doit pas être inférieure à {{htmlattrxref("min", "input")}}. La valeur minimale par défaut est 0.
- La valeur ne doit pas être supérieure à {{htmlattrxref("max", "input")}}. La valeur maximale par défaut est 0.
- La valeur doit être un multiple de {{htmlattrxref("step", "input")}}. La valeur par défaut est 1.

## Exemples

Pour compléter les exemples précédents, on pourra consulter l'article suivant :

- [Contrôler plusieurs paramètres grâce à `ConstantSourceNode` (en anglais)](/fr/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui contient
        la représentation textuelle de la valeur numérique sélectionnée. On
        utilisera la méthode
        {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
        afin d'obtenir la valeur sous forme numérique (type
        {{jsxref("Number")}}).
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>{{event("change")}} et {{event("input")}}</td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("max", "input")}},
        {{htmlattrxref("min", "input")}} et
        {{htmlattrxref("step", "input")}}
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
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
        et {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                    | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#range-state-(type=range)', '&lt;input type="range"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#range-state-typerange', '&lt;input type="range"&gt;')}}     | {{Spec2('HTML5.1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-range")}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("input")}} et l'interface {{domxref("HTMLInputElement")}}
- [`<input type="number">`](/fr/docs/Web/HTML/Element/input/number)
