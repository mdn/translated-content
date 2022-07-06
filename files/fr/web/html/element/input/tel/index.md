---
title: <input type="tel">
slug: Web/HTML/Element/input/tel
translation_of: Web/HTML/Element/input/tel
browser-compat: html.elements.input.input-tel
---
{{HTMLRef}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut **`tel`** permettent de saisir un numéro de téléphone. Contrairement aux contrôles utilisés pour [`<input type="email">`](/fr/docs/Web/HTML/Element/input/email) et [`<input type="url">`](/fr/docs/Web/HTML/Element/input/url), la valeur saisie n'est pas automatiquement validée selon un format donné, car les formats des numéros de téléphone varient à travers le monde.

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

Bien que les champs de saisie de numéro de téléphone soient fonctionnellement identiques aux champs de saisie textuels (`<input type="text">`), ils permettent, notamment pour les navigateurs mobiles, de présenter un clavier optimisé pour la saisie d'un numéro de téléphone. L'utilisation d'un tel champ permet également d'appliquer une validation personnalisée de façon ciblée.

> **Note :** Les navigateurs qui ne prennent pas en charge le type `tel` utiliseront à la place un contrôle [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères (<a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>) qui représente un numéro de téléphone ou qui est vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/input_event"><code>input</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-maxlength"><code>maxlength</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-minlength"><code>minlength</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-pattern"><code>pattern</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-placeholder"><code>placeholder</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-readonly"><code>readonly</code></a>, et <a href="/fr/docs/Web/HTML/Element/Input#attr-size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>list</code>, <code>selectionStart</code>,
        <code>selectionEnd</code>, <code>selectionDirection</code>, et
        <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/setRangeText"><code>setRangeText()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/setSelectionRange"><code>setSelectionRange()</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Valeur

La valeur de ce champ, portée par l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) est une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) qui peut être une chaîne vide ou un numéro de téléphone.

## Attributs supplémentaires

En plus des attributs présents pour tous les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs de saisie pour les numéros de téléphone prennent en charge les attributs suivants.

### `list`

La valeur de cet attribut est l'identifiant ([`id`](/fr/docs/Web/API/Element/id)) d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) situé dans le même document. L'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Element/Input#attr-type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

### `maxlength`

Le nombre maximum de caractères (exprimé en nombre de points de code UTF-16) qu'il est possible de saisir dans le champ. Cette valeur doit  un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du numéro de téléphone dépasse `maxlength` en nombre de points de code UTF-16.

### `minlength`

Le nombre minimal de caractères (exprimé en nombre de points de code UTF-16) que l'utilisatrice ou l'utilisateur peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieure à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du numéro de téléphone est inférieure à `minlength` en nombre de points de code UTF-16.

### `pattern`

L'attribut `pattern`, lorsqu'il est utilisé, est une expression rationnelle qui impose un format à [`value`](/fr/docs/Web/HTML/Element/Input#attr-value), que cette dernière doit respecter afin que le champ soit [valide](/fr/docs/Web/Guide/HTML/Constraint_validation) . Le contenu de `pattern` doit être une expression rationnelle JavaScript valide (voir la documentation sur le type [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) et [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions). Le marqueur `'u'` est utilisé à la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode et non ASCII. Il ne faut pas entourer l'expression de barres obliques.

Si aucune expression rationnelle n'est fournie ou que celle-ci est invalide, aucune contrainte de format ne sera appliquée et cet attribut sera ignoré complètement.

> **Note :** On utilisera l'attribut [`title`](/fr/docs/Web/HTML/Element/Input#attr-title) pour définir le texte que la plupart des navigateurs afficheront comme bulle d'information afin d'expliquer les contraintes imposées par l'expression rationnelle. Il faut également inclure un texte explicatif à proximité du champ.

Voir [Utiliser un format particulier](#utiliser_un_format_particulier) pour plus de détails et un exemple.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères qui fournit une indication courte sur le type d'information attendue dans le champ. Ce devrait être un mot ou une phrase courte qui illustre le type de données attendu plutôt qu'un message explicatif. Le texte _ne doit pas_ inclure de saut de ligne ou de retour chariot.

Si le contenu du contrôle utilise une direction (écriture de gauche à droite ou de droite à gauche), mais que le texte indicatif doit être présenté dans la direction inverse, vous pouvez utiliser des caractères de formatage pour l'algorithme bidirectionnel Unicode dans la valeur. Voir [comment utiliser des contrôles Unicode pour le texte bidirectionnel](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus d'informations.

> **Note :** On évitera d'utiliser l'attribut `placeholder` si possible. Il n'est pas aussi utile que d'autres sur le plan sémantique pour expliquer le formulaire et il peut causer des problèmes techniques avec le contenu. Voir [Utilisation de libellés et de textes indicatifs](/fr/docs/Web/HTML/Element/Input#utilisation_de_libellés) pour plus d'informations.

### `readonly`

Un attribut booléen qui, s'il est présent, indique que le champ ne peut pas être édité dans le formulaire. La valeur du champ (portée par l'attribut `value`) peut toutefois être modifiée par du code JavaScript, qui changerait la propriété `value` rattachée à [l'interface `HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement).

> **Note :** Un champ en lecture seule ne pouvant pas avoir de valeur, l'attribut `required` n'a pas d'effet particulier sur les champs pour lesquels `readonly` est appliqué.

### `size`

L'attribut `size` est une valeur numérique qui indique la largeur idéale du champ, exprimée en nombre de caractères. Sa valeur doit être un nombre supérieur à 0 et la valeur par défaut est 20. Comme les caractères peuvent avoir une largeur différente entre eux, on ne doit pas s'attendre à ce que cette taille permette exactement de voir les n caractères, le contrôle résultant pourra être plus étroit ou plus large que le nombre indiqué en fonction des caractères saisis et de la police (voir la propriété CSS [`font`](/fr/docs/Web/CSS/font)) utilisée.

Cet attribut _n'impose pas_ de limite sur le nombre de caractères qui peuvent être saisis. Il indique uniquement, de façon approximative, le nombre de caractères visibles au même moment. Pour imposer une contrainte de taille sur la longueur maximale de la valeur saisissable, on pourra utiliser l'attribut [`maxlength`](#maxlength).

## Attributs non-standard

Les attributs non-standard suivants sont disponibles pour les champs téléphoniques mais ne devraient pas être utilisés.

### `autocorrect`

Un attribut spécifique à Safari qui indique si la correction automatique doit être activée (ou non) lors de l'édition manuelle de ce champ. Les valeurs autorisées sont&nbsp;:

- `on`
  - : La correction automatique est activée et les remplacements automatiques, si certains sont configurés, sont effectués.
- `off`
  - : La correction automatique et les remplacements sont désactivés.

### `mozactionhint`

Un attribut spécifique à Mozilla, pris en charge par Firefox sur Android qui fournit une indication sur le type d'action réalisée lors de l'appui sur <kbd>Entrée</kbd> ou <kbd>Retour</kbd> pendant l'édition du champ. Cette information est utilisée pour décider du libellé à afficher sur la touche <kbd>Entrée</kbd> du clavier virtuel.

> **Note :** [Ce comportement a été standardisé](https://html.spec.whatwg.org/#input-modalities:-the-enterkeyhint-attribute) avec l'attribut universel [`enterkeyhint`](/fr/docs/Web/HTML/Global_attributes#attr-enterkeyhint), mais ce dernier n'est pas encore largement implémenté. En ce qui concerne l'implémentation dans Firefox, voir [le bug 1490661](https://bugzilla.mozilla.org/show_bug.cgi?id=1490661).

Les valeurs autorisées sont&nbsp;: `go`, `done`, `next`, `search`, et `send`. Le navigateur décide alors, en fonction de cette indication, du libellé à appliquer sur la touche <kbd>Entrée</kbd>.

## Utiliser `<input type="tel">`

Les numéros de téléphone peuvent jouer un rôle important dans certains formulaires web. Un site de commerce en ligne, par exemple, peut vouloir enregistrer le numéro de téléphone d'une utilisatrice ou un utilisateur pour le contacter lors de la livraison. Toutefois, un des problèmes relatifs aux numéros de téléphone est la variété de formats qui existent à travers le monde. Il est donc difficile (voire impossible) de valider les valeurs automatiquement.

> **Note :** Des mécanismes de validation particuliers peuvent être ajoutés si besoin (cf. [Validation](#validation) ci-après).

### Claviers adaptés

L'un des avantages des contrôles de type `tel` est qu'ils permettent aux navigateurs mobiles de proposer un clavier adapté à la saisie de numéros de téléphone.

| Firefox pour Android                                             | WebKit iOS (Safari/Chrome/Firefox)                                      |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![Capture d'écran pour Firefox pour Android](fx-android-tel.png) | ![Capture d'écran pour Firefox pour iOS](iphone-tel-keyboard-50pct.png) |

### Un contrôle simple

Dans sa forme la plus simple, on peut implémenter un tel contrôle avec ce fragment HTML&nbsp;:

```html
<label for="telNo">Numéro de téléphone :</label>
<input id="telNo" name="telNo" type="tel">
```

{{EmbedLiveSample('', 600, 40)}}

Rien de bien surprenant ici. Lorsque les données seront envoyées au serveur, elles auront la forme `telNo=0123456789`.

### Textes indicatifs (<i lang="en">placeholders</i>)

Il est parfois utile de fournir une indication quant au format attendu. Or, il est possible que la disposition de la page ne permette pas de fournir des étiquettes détaillées. C'est pourquoi on peut utiliser des textes indicatifs via l'attribut `placeholder`. Ces valeurs seront affichées dans le champ et disparaîtront dès que l'utilisatrice ou l'utilisateur saisira quelque chose (et réapparaîtront si la valeur redevient vide). Un tel texte indicatif doit servir de suggestion quant au format souhaité.

Dans l'exemple suivant, on a un contrôle `tel` avec un attribut `placeholder` qui vaut `01 23 45 67 89`. Vous pouvez manipuler le résultat obtenu pour voir comment ce texte est affiché selon qu'une valeur saisie ou que le champ est vide&nbsp;:

```html
<input id="telNo" name="telNo" type="tel"
       placeholder="01 23 45 67 89">
```

{{EmbedLiveSample('', 600, 40)}}

### Contrôler la taille du champ

On peut contrôler la taille physique allouée au contrôle ainsi que les longueurs minimale et maximale autorisées pour le texte saisi dans le contrôle.

#### La taille physique

La taille physique de la boîte de saisie peut être contrôlée avec l'attribut [`size`](/fr/docs/Web/HTML/Element/Input#attr-size). La valeur de cet attribut indique le nombre de caractères que la boîte peut afficher simultanément. Si, par exemple, on souhaite que le contrôle mesure 20 caractères de large, on pourra utiliser le code suivant&nbsp;:

```html
<input id="telNo" name="telNo" type="tel"
       size="20">
```

{{EmbedLiveSample('', 600, 40)}}

#### La longueur de la valeur

L'attribut `size` ne contraint pas la taille de la valeur qui peut être saisie dans le contrôle. Si on souhaite avoir une longueur minimale (en nombre de caractères), on pourra utiliser l'attribut [`minlength`](/fr/docs/Web/HTML/Element/Input#attr-minlength). De même, si on souhaite qu'un numéro de téléphone valide mesure au maximum X caractères, on pourra employer l'attribut [`maxlength`](/fr/docs/Web/HTML/Element/Input#attr-maxlength).

Dans l'exemple qui suit, on crée un contrôle qui mesure 20 caractères de large et dont le contenu doit être plus long que 9 caractères et plus court que 14 caractères.

```html
<input id="telNo" name="telNo" type="tel"
       size="20" minlength="9" maxlength="14">
```

{{EmbedLiveSample("", 600, 40)}}

> **Note :** Ces deux attributs jouent un rôle lors de la [validation](#validation). Dans l'exemple précédent, la valeur sera considérée comme invalide si elle contient moins de 9 caractères ou plus de 14. La plupart des navigateurs ne permettront pas de saisir une valeur plus longue que la taille maximale.

### Fournir une valeur par défaut

#### Fournir une seule valeur par défaut avec l'attribut `value`

Il est possible de fournir une valeur par défaut en renseignant au préalable l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value)&nbsp;:

```html
<input id="telNo" name="telNo" type="tel"
       value="01 23 45 67 89">
```

{{EmbedLiveSample("", 600, 40)}}

#### Afficher des suggestions

Si on souhaite aller plus loin, on peut fournir une liste de suggestions parmi lesquelles on pourra choisir (on pourra également saisir la valeur de son choix si celle-ci ne fait pas partie de la liste). Pour cela, on utilisera l'attribut [`list`](/fr/docs/Web/HTML/Element/Input#attr-list) dont la valeur est l'identifiant d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) qui contient autant d'éléments [`<option>`](/fr/docs/Web/HTML/Element/Option) que de valeurs suggérées. C'est la valeur de l'attribut `value` de chaque élément `<option>` qui sera utilisée comme suggestion.

```html
<input id="telNo" name="telNo" type="tel" list="defaultTels">

<datalist id="defaultTels">
  <option value="01 23 45 67 89">
  <option value="02 45 67 89 01">
  <option value="03 45 67 89 12">
  <option value="04 56 87 98 32">
</datalist>
```

{{EmbedLiveSample("", 600, 40)}}

Avec l'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) contenant ces différentes valeurs [`<option>`](/fr/docs/Web/HTML/Element/Option), le navigateur affichera une liste déroulante (ou un autre élément d'interface utilisateur) afin que l'utilisatrice ou l'utilisateur puisse éventuellement choisir parmi les suggestions. Lorsqu'on saisit dans le contrôle, la liste des suggestions est restreinte à celles qui correspondent encore.

## Validation

Comme évoqué ci-avant, il est difficile de fournir une solution qui convienne pour l'ensemble des formats utilisés et qui permette de valider correctement les numéros de téléphone.

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur&nbsp;! En effet, il est tout à fait possible pour quelqu'un de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

### Rendre la valeur obligatoire

Il est possible de rendre la saisie obligatoire avant de pouvoir envoyer le formulaire. Pour cela, on utilisera l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required)&nbsp;:

```html
<form>
  <div>
    <label for="telNo">Veuillez saisir un numéro de téléphone (obligatoire) : </label>
    <input id="telNo" name="telNo" type="tel" required>
    <span class="validity"></span>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

On utilisera la feuille de style suivante pour indiquer les éléments valides ou invalides du formulaire&nbsp;:

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
  position: absolute; content: '✖';
  padding-left: 5px;
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample("", 700, 130)}}

### Utiliser un format particulier

Si on souhaite restreindre le format de la valeur qui peut être saisie, on peut utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) dont la valeur est une expression rationnelle que la valeur doit respecter pour être valide.

Dans cet exemple, on utilisera la même feuille de style que précédemment mais le code HTML sera celui-ci&nbsp;:

```html
<form>
  <div>
    <label for="telNo">Veuillez saisir un numéro de téléphone (au format xx xx xx xx xx) :</label>
    <input id="telNo" name="telNo" type="tel" required
           pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}">
    <span class="validity"></span>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

```css hidden
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
  position: absolute; content: '✖';
  padding-left: 5px;
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

{{EmbedLiveSample("", 700, 130)}}

Vous pouvez ici voir que la valeur est considérée comme invalide si elle ne suit pas le format `xx xx xx xx xx`. Ce format peut peut-être être utile pour certaines régions mais attention, dans une application réelle, il faudra s'adapter à des cas plus complexes selon la locale de l'utilisatrice ou l'utilisateur.

## Exemples

Dans cet exemple, on présente une interface simple avec un élément [`<select>`](/fr/docs/Web/HTML/Element/select) permettant de choisir le pays dans lequel on se trouve puis un ensemble d'éléments `<input type="tel">` permettant de saisir ses différents numéros de téléphone.

Chaque boîte de saisie possède un attribut [`placeholder`](/fr/docs/Web/HTML/Element/Input#attr-placeholder) qui indique le format pressenti. On utilise également l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) afin d'indiquer le nombre de caractères ainsi qu'un attribut `aria-label` qui pourra être lu par un lecteur d'écran et qui décrit quoi saisir dans le contrôle.

```html
<form>
  <div>
    <label for="country">Veuillez choisir votre pays :</label>
    <select id="country" name="country">
      <option>Royaume-Uni</option>
      <option selected>États-Unis</option>
      <option>Allemagne</option>
    </select>
  </div>
  <div>
    <p>Veuillez saisir vos numéros de téléphone : </p>
    <span class="areaDiv">
      <input id="areaNo" name="areaNo" type="tel" required
             placeholder="Code régional" pattern="[0-9]{3}"
             aria-label="Code régional">
      <span class="validity"></span>
    </span>
    <span class="number1Div">
      <input id="number1" name="number1" type="tel" required
             placeholder="Premier fragment" pattern="[0-9]{3}"
             aria-label="Premier fragment du numéro">
      <span class="validity"></span>
    </span>
    <span class="number2Div">
      <input id="number2" name="number2" type="tel" required
             placeholder="Second fragment" pattern="[0-9]{4}"
             aria-label="Second fragment du numéro">
      <span class="validity"></span>
    </span>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

Le code JavaScript associé est relativement simple, il contient un gestionnaire d'évènements [`onchange`](/fr/docs/Web/API/GlobalEventHandlers/onchange) qui est déclenché lorsque la valeur du `<select>` est modifiée. Il met alors à jour les attributs `pattern`, `placeholder`, `aria-label` du contrôle pour adapter le format attendu au pays choisi.

```js
let selectElem = document.querySelector("select");
let inputElems = document.querySelectorAll("input");

selectElem.onchange = function() {
  for(let i = 0; i < inputElems.length; i++) {
    inputElems[i].value = "";
  }

  if(selectElem.value === "États-Unis") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Code régional";
    inputElems[0].pattern = "[0-9]{3}";

    inputElems[1].placeholder = "Première partie";
    inputElems[1].pattern = "[0-9]{3}";
    inputElems[1].setAttribute("aria-label","Première partie du numéro");

    inputElems[2].placeholder = "Seconde partie";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label","Seconde partie du numéro");
  } else if(selectElem.value === "Royaume-Uni") {
    inputElems[2].parentNode.style.display = "none";

    inputElems[0].placeholder = "Code régional";
    inputElems[0].pattern = "[0-9]{3,6}";

    inputElems[1].placeholder = "Numéro local";
    inputElems[1].pattern = "[0-9]{4,8}";
    inputElems[1].setAttribute("aria-label","Numéro local");
  } else if(selectElem.value === "Allemagne") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Code régional";
    inputElems[0].pattern = "[0-9]{3,5}";

    inputElems[1].placeholder = "Première partie";
    inputElems[1].pattern = "[0-9]{2,4}";
    inputElems[1].setAttribute("aria-label","Première partie du numéro");

    inputElems[2].placeholder = "Seconde partie";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label","Seconde partie du numéro");
  }
}
```

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample('', 600, 140)}}

Attention, cet exemple n'est qu'une illustration du problème associé à la gestion internationale des numéros de téléphone. Il serait prétentieux d'affirmer qu'étendre ce mécanisme à chaque pays suffirait à garantir la bonne saisie d'un numéro de téléphone.

Bien entendu, si cette complexité est trop importante, on peut également faire le choix de contrôler la valeur côté serveur avant de faire un retour à l'utilisatrice ou l'utilisateur.

```css hidden
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
  position: absolute; content: '✖';
  padding-left: 5px;
  color: #8b0000;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
  color: #009000;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le guide sur les formulaires HTML](/fr/docs/Learn/Forms)
- [Les formulaires et l'accessibilité](/fr/docs/Web/Accessibility/ARIA/forms)
- [`<input>`](/fr/docs/Web/HTML/Element/Input)
  - [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text)
  - [`<input type="email">`](/fr/docs/Web/HTML/Element/input/email)
- [Compatibilité des propriétés CSS](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
