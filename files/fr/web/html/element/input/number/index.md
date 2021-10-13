---
title: <input type="number">
slug: Web/HTML/Element/Input/number
tags:
  - Element
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/number
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`number`** permettent à un utilisateur de saisir des nombres dans un formulaires. De tels contrôles incluent des mécanismes de validation natifs afin de rejeter les valeurs non-numériques. Le navigateur peut agrémenter le contrôle avec des flèches afin d'incrémenter/décrémenter la valeur grâce à la souris ou avec le doigt.

{{EmbedInteractiveExample("pages/tabbed/input-number.html", "tabbed-shorter")}}

> **Note :** Si un navigateur ne prend pas en charge le type `number`, le contrôle affiché sera le contrôle standard pour la saisie d'un texte (cf. [`text`](/fr/docs/Web/HTML/Element/input/text)).

## Valeur

Un nombre (cf. {{jsxref("Number")}}) qui représente la valeur saisie dans le contrôle. Il est possible d'indiquer une valeur par défaut en utilisant l'attribut {{htmlattrxref("value", "input")}} :

```html
<input id="number" type="number" value="42">
```

{{EmbedLiveSample('Valeur', 600, 40)}}

## Attributs supplémentaires

En complément des attributs pris en charge par l'ensemble des éléments {{HTMLElement("input")}}, les champs de type `"number"` peuvent utiliser les attributs suivants :

| Attribut                           | Description                                                                                                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("max")}}`             | La valeur maximale qui peut être acceptée.                                                                                                                             |
| `{{anch("min")}}`             | La valeur minimale qui peut être acceptée.                                                                                                                             |
| `{{anch("placeholder")}}` | Une valeur fournie comme exemple affiché lorsque le champ est vide.                                                                                                    |
| `{{anch("readonly")}}`     | Un attribut booléen qui contrôle si le champ est en lecture seule.                                                                                                     |
| `{{anch("step")}}`             | Le pas à utiliser pour incrémenter la valeur à l'aide du contrôle fourni par l'agent utilisateur. Cet incrément est également utilisé pour la validation de la valeur. |

### {{htmlattrdef("max")}}

La valeur maximale qui peut être acceptée pour ce champ. Si la valeur du champ (portée par l'attribut {{htmlattrxref("value", "input")}}) dépasse ce seuil, l'élément [ne pourra être validé](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur de l'attribut `max` n'est pas un nombre, l'élément n'aura pas de maximum.

Cette valeur doit être supérieure ou égale à l'attribut `min`.

### {{htmlattrdef("min")}}

La valeur minimale qui peut être acceptée pour ce champ. Si la valeur du champ (portée par l'attribut {{htmlattrxref("value", "input")}}) est inférieure à ce seuil, l'élément [ne pourra être validé](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Si la valeur de l'attribut `min` n'est pas un nombre, l'élément n'aura pas de minimum.

Cette valeur doit être inférieure ou égale à l'attribut `max`.

{{page("/fr/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

### {{htmlattrdef("step")}}

L'attribut `step` est un nombre qui définit la granularité de la valeur ou le mot-clé `any`. Seule les valeurs qui sont des multiples de cet attribut depuis le seuil `{{anch("min")}}` sont valides.

Lorsque la chaîne de caractères `any` est utilisée, cela indique qu'aucun incrément spécifique n'est défini et que toute valeur (comprise entre `{{anch("min")}}` et `{{anch("max")}}`) est valide.

> **Note :** Lorsque les données saisies par l'utilisateur ne correspondent pas à l'incrément indiqué, l'agent utilisateur pourra arrondir à la valeur valide la plus proche (en choisissant les nombres les plus grands lorsque deux sont équidistants.

Pour les champs `number`, l'incrément par défaut est 1 et ne permet donc que de saisir des entiers si la valeur de base est entière. Ainsi, si on a `min` qui vaut -10 et `value` qui vaut 1.5, si on a `step` qui vaut 1, seules les valeurs 1.5, 2.5, 3.5,... -0.5, -1.5, -2.5,... seront valides.

## Utiliser les contrôles de saisie numérique

Les éléments `<input type="number">` simplifient la saisie de valeurs numériques dans un formulaire. Lorsqu'on crée un tel contrôle, des mécanismes de validation automatiques sont appliqués afin de vérifier que le texte saisi est bien un nombre. Généralement un contrôle de saisie numérique incluera des boutons avec des curseurs pour augmenter/réduire la valeur.

> **Attention :** On notera qu'un utilisateur peut toujours saisir des valeurs qui ne sont pas numériques dans de tels champs (par exemple avec un navigateur de bureau). Toutefois, ce comportement semble différer selon les navigateurs (voir {{bug(1398528)}}). Les valeurs non-numériques seront considérées comme invalide (cf. {{anch("Validation")}} ci-après).

> **Note :** Il est important de rappeler qu'un utilisateur peut tout à fait modifier le code HTML qui est utilisé. Le site ne doit donc pas se reposer sur les mécanismes de validation qui existent côté client pour considérer qu'une valeur est saine. Pour des raisons de contrôle et de sécurité, les valeurs envoyées via un formulaire doivent être vérifiées côté serveur.

De plus, les navigateurs mobiles peuvent adapter leur ergonomie en affichant un clavier adapté à la saisie de valeur numérique lorsque l'utilisateur appuie sur un tel contrôle. Voici le résultat qu'on obtient par exemple avec Firefox pour Android :

### Un contrôle simple

Dans sa forme la plus simple, on peut implémenter un contrôle de saisie numérique avec le fragment HTML suivant :

```html
<label for="ticketNum">Nombre de tickets à acheter :</label>
<input id="ticketNum" type="number" name="ticketNum" value="0">
```

{{EmbedLiveSample('Un_contrôle_simple', 600, 40)}}

Un contrôle de saisie numérique considère que la valeur est valide si elle est vide ou quand un nombre est saisi. Dans les autres cas, la valeur est considérée invalide. Si l'attribut {{htmlattrxref("required", "input")}} est utilisé, la valeur vide n'est plus considérée valide.

> **Note :** N'importe quel nombre est valide tant que c'est un nombre qui peut être représenté [comme un nombre à virgule flottante](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number) (autrement dit, un nombre qui n'est pas {{jsxref("NaN")}} ou {{jsxref("Infinity")}}).

### Indicateurs de saisie - _placeholders_

Il est parfois utile de fournir une indication quant à la valeur qui devrait être saisie. C'est notamment le cas lorsque la disposition de la page ne permet pas d'avoir d'étiquettes suffisamment descriptives pour chaque {{HTMLElement("input")}}. Dans ces cas, on peut utiliser l'attribut `placeholder` afin de fournir une indication et qui sera le texte affiché dans le contrôle avant toute saisie ou quand la valeur est vide.

Dans l'exemples qui suit, on utilise un élément ` <input``> ` de type `"number"` avec le texte indicatif `"Multiple de 10"`. Vous pouvez noter la façon dont le texte disparaît/réapparaît à selon la présence ou l'absence de valeur dans le champ.

```html
<input type="number" placeholder="Multiple de 10">
```

{{ EmbedLiveSample('Indicateurs_de_saisie_-_placeholders', 600, 40) }}

### Paramétrer la taille de l’incrément

Par défaut, les curseurs fournis pour incrémenter/décrémenter la valeur utilisent un pas de 1. Ce comportement par défaut peut être changé en utilisant l'attribut {{htmlattrxref("step", "input")}} dont la valeur représente le pas d'incrémentation. Dans l'exemple qui suit et parce que le texte informatif indique "Multiple de 10", on utilise un pas de 10 grâce à l'attribut `step` :

```html
<input type="number" placeholder="Multiple de 10" step="10">
```

{{EmbedLiveSample("Paramétrer_la_taille_de_l’incrément", 600, 40)}}

Dans cet exemple, on peut voir que les curseurs permettent d'augmenter ou de réduire la valeur de 10 (et non de 1). Il est toujours possible de saisir manuellement un nombre qui n'est pas un multiple de 10 mais la valeur sera alors considérée invalide.

### Indiquer un minimum et un maximum

Les attributs {{htmlattrxref("min", "input")}} et {{htmlattrxref("max", "input")}} peuvent être employés afin d'indiquer les bornes de l'intervalle dans lequel doit se situer la valeur. Par exemple, avec le fragment HTML suivant, on indique que le minimum vaut 0 et que le maximum vaut 100 :

```html
<input type="number" placeholder="Multiple de 10" step="10" min="0" max="100">
```

{{EmbedLiveSample('Indiquer_un_minimum_et_un_maximum', 600, 40)}}

Dans cet exemple, les curseurs ne permettent pas de dépasser 100 ou de saisir une valeur inférieure à 0. Il est toujours possible de saisir manuellement un nombre en dehors de ces bornes mais la valeur sera alors considérée invalide.

### Autoriser les valeurs décimales

Par défaut, l'incrément d'un tel contrôle vaut 1 et si on saisit la valeur `1.0`, elle sera considérée invalide. Si on souhaite pouvoir saisir une valeur qui contient une partie décimale, on pourra utiliser l'attribut `step` (par exemple, on pourra utiliser `step="0.01"` pour autoriser des nombres avec deux chiffres après la virgules) :

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10">
```

{{EmbedLiveSample("Autoriser_les_valeurs_décimales", 600, 40)}}

Dans cet exemple, on peut saisir des valeurs comprises entre 0 et 10 et qui ont au plus deux chiffres après la virgule, "9.52" sera considérée comme valide mais pas "9.521".

### Paramétrer la taille du contrôle

Les éléments {{HTMLElement("input")}} de type `"number"` ne prennent pas en charge l'attribut {{htmlattrxref("size", "input")}} et il est donc nécessaire d'utiliser CSS afin de modifier la taille des contrôles.

Par exemple, si on souhaite réduire la largeur du contrôle car il ne permet que de saisir un nombre à trois chiffres, on ajoute un identifiant sur l'élément et on réduit le texte indicatif afin qu'il ne soit pas tronqué :

```html
<input type="number" placeholder="x10" step="10" min="0" max="100" id="number">
```

On ajoute ensuite une déclaration CSS dans la feuille de style pour l'élément avec un identifiant `"number"` :

```css
#number {
  width: 3em;
}
```

Le résultat ressemblera à :

{{EmbedLiveSample('Paramétrer_la_taille_du_contrôle', 600, 40)}}

### Ajouter des valeurs suggérées

Il est possible de fournir une liste d'options par défaut parmi lesquelles l'utilisateur pourra choisir. Pour cela, on renseignera l'attribut {{htmlattrxref("list", "input")}} dont la valeur est l'identifiant (attribut `id`) d'un élément {{HTMLElement("datalist")}} contenant autant d'éléments {{HTMLElement("option")}} que de valeurs suggéréees. La valeur de l'attribut `value` de chaque élément `<option>` sera utilisée comme suggestion pour la saisie dans le contrôle.

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers">
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678">
  <option value="103421">
  <option value="11111111">
  <option value="12345678">
  <option value="12999922">
</datalist>
```

{{EmbedLiveSample("Ajouter_des_valeurs_suggérées", 600, 40)}}

> **Note :** L'attribut {{htmlattrxref("list", "input")}} pour les éléments `<input>` de type `"number"` n'est pas pris en charge pour tous les navigateurs (cela fonctionne pour Chrome et Opera mais pas pour Firefox par exemple).

## Validation

Plusieurs mécanismes de validation sont mis en place par le navigateur pour les contrôles de saisie numérique :

- Toute valeur qui n'est pas un nombre est considérée comme invalide (la valeur vide est uniquement considérée comme valide si l'attribut `required` est absent).
- Toute valeur qui n'est pas un multiple de {{htmlattrxref("step", "input")}} est considérée comme invalide.
- Toute valeur qui est inférieure à {{htmlattrxref("min", "input")}} ou supérieure à {{htmlattrxref("max", "input")}} est considérée comme invalide.

L'exemple suivant illustre l'ensemble de ces fonctionnalités et quelques règles CSS ont été ajoutées afin d'afficher des icônes pour indiquer si la valeur saisie est valide ou invalide :

```html
<form>
  <div>
    <label for="balloons">Quantité de ballons à commander (par 10) :</label>
    <input id="balloons" type="number" name="balloons" step="10" min="0" max="100" required>
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit">
  </div>
</form>
```

{{EmbedLiveSample("Validation", 600, 80)}}

Vous pouvez essayer d'envoyer des données invalides (pas de valeur, une valeur inférieure à 0 ou supérieure à 100 ou une valeur qui n'est pas un multiple de 10) afin de voir les messages d'erreur fournis par le navigateur.

Voici les règles CSS appliquées :

```css
div {
  margin-bottom: 10px;
}

input:invalid+span:after {
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  content: '✓';
  padding-left: 5px;
}
```

Ici, on a utilisé les pseudo-classes {{cssxref(":invalid")}} et {{cssxref(":valid")}} afin d'afficher une icône selon le cas, à côté de l'élément {{htmlelement("span")}} ajdacent. On utilise un élément `<span>` séparé pour plus de flexibilité : certains navigateurs n'affichent pas le contenu généré par les pseudo-classes pour certains types de contrôle (cf. [`<input type="date">`](/fr/docs/Web/HTML/Element/input/date#Validation)).

> **Attention :** la validation des données des formulaires par le navigateur (côté client) doit toujours être complétée d'une validation des données côté serveur (l'utilisateur peut toujours modifier le HTML et envoyer les données au serveur).

### Utilisation d'un motif de validation

Les éléments `<input type="number">` ne prennent pas en charge l'attribut {{htmlattrxref("pattern", "input")}} qui permet de restreindre les valeurs selon une expression rationnelle. En effet, les contrôles de saisie numérique sont destinés à contenir des nombres plutôt que des chaînes de caractères et les autres attributs permettent de paramétrer les valeurs recevables (cf. ci-avant).

## Exemples

Dans l'exemple suivant, on crée un formulaire qui permet de saisir la taille d'un personne, par défaut exprimée en mètres et pour laquelle un bouton permet de la saisir en pieds (_feet_/_inches_).

{{EmbedLiveSample("Exemples", 600, 100)}}

### HTML

```html
<form>
    <div class="metersInputGroup">
        <label for="meters">Saisir votre taille — en mètres :</label>
        <input id="meters" type="number" name="meters" step="0.01" min="0" placeholder="e.g. 1.78" required>
        <span class="validity"></span>
    </div>
        <span>Saisir votre taille — </span>
        <label for="feet">feet :</label>
        <input id="feet" type="number" name="feet" min="0" step="1">
        <span class="validity"></span>
        <label for="inches">inches :</label>
        <input id="inches" type="number" name="inches" min="0" max="11" step="1">
        <span class="validity"></span>
    </div>
    <div>
      <input type="button" class="meters" value="Saisir la taille en feet/inches">
    </div>
    <div>
        <input type="submit" value="Envoyer">
    </div>
</form>
```

Ici on utilise l'attribut `step` avec la valeur `0.01` afin d'accepter une taille en centimètres. On fournit également un texte indicatif via `placeholder`.

Par défaut on masque la saisie en pieds avec `class="hidden"`.

### CSS

La feuille CSS ressemble de près à celle vue précédemment :

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

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

### JavaScript

Enfin, voici le code JavaScript utilisé :

```js
var metersInputGroup = document.querySelector('.metersInputGroup');
var feetInputGroup = document.querySelector('.feetInputGroup');
var metersInput = document.querySelector('#meters');
var feetInput = document.querySelector('#feet');
var inchesInput = document.querySelector('#inches');
var switchBtn = document.querySelector('input[type="button"]');

switchBtn.addEventListener('click', function() {
  if(switchBtn.getAttribute('class') === 'meters') {
    switchBtn.setAttribute('class', 'feet');
    switchBtn.value = 'Saisir la taille en mètres';

    metersInputGroup.style.display = 'none';
    feetInputGroup.style.display = 'block';

    feetInput.setAttribute('required', '');
    inchesInput.setAttribute('required', '');
    metersInput.removeAttribute('required');

    metersInput.value = '';
  } else {
    switchBtn.setAttribute('class', 'meters');
    switchBtn.value = 'Saisir la taille en pieds';

    metersInputGroup.style.display = 'block';
    feetInputGroup.style.display = 'none';

    feetInput.removeAttribute('required');
    inchesInput.removeAttribute('required');
    metersInput.setAttribute('required', '');

    feetInput.value = '';
    inchesInput.value = '';
  }
});
```

Après avoir déclaré quelques variables, on ajoute un gestionnaire d'évènements au bouton afin de gérer le changement d'unités. Lors de ce changement, on modifiera la classe du bouton et l'étiquette associée et on mettr à jour les valeurs affichées lorsque l'utilisateur appuie sur le bouton. On notera qu'il n'y a pas de mécanisme de conversion entre les mètres et les pieds (ce qui serait vraisemblablement implémenté dans une application réelle).

> **Note :** Lorsqu'on clique sur le bouton, on retire l'attribut `required` du champ de saisie masqué et on vide l'attribut `value` afin de pouvoir envoyer le formulaire si un des deux champs n'est pas renseigné.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>Un nombre ou une valeur vide.</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} et
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charges</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("placeholder", "input")}},
        {{htmlattrxref("readonly", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>list</code>, <code>value</code>, <code>valueAsNumber</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.stepUp", "stepUp()")}},
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                        | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#number-state-(type=number)', '&lt;input type="number"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#number-state-typenumber', '&lt;input type="number"&gt;')}}     | {{Spec2('HTML5.1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-number")}}

## Voir aussi

- [Guide sur les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/fr/docs/Web/HTML/Element/input/tel)
