---
title: <input type="tel">
slug: Web/HTML/Reference/Elements/input/tel
l10n:
  sourceCommit: 6e3b5b1a28e717aedd42b5e27b61bd80664ae3af
---

Les éléments {{HTMLElement("input")}} de type **`tel`** permettent de saisir un numéro de téléphone. Contrairement aux contrôles utilisés pour [`<input type="email">`](/fr/docs/Web/HTML/Reference/Elements/input/email) et [`<input type="url">`](/fr/docs/Web/HTML/Reference/Elements/input/url), la valeur saisie n'est pas automatiquement validée selon un format donné, car les formats des numéros de téléphone varient à travers le monde.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;tel&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="phone">
  Entrez votre numéro de téléphone&nbsp;:<br />
  <small>Format&nbsp;: 01 23 45 67 89</small>
</label>

<input
  type="tel"
  id="phone"
  name="phone"
  pattern="0[1-9](?: [0-9]{2}){4}"
  required />
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

Bien que les entrées de type `tel` soient fonctionnellement identiques aux entrées `text` standard, elles présentent néanmoins des avantages concrets&nbsp;; le plus évident est que les navigateurs mobiles — en particulier sur les téléphones portables — peuvent choisir d'afficher un clavier personnalisé, optimisé pour la saisie de numéros de téléphone. L'utilisation d'un type d'entrée spécifique pour les numéros de téléphone facilite également la mise en place d'une validation personnalisée et la gestion de ces numéros.

> [!NOTE]
> Les navigateurs qui ne prennent pas en charge le type `tel` utiliseront à la place un champ `{{HTMLElement("input/text", "text")}}` standard.

## Valeur

L'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de l'élément {{HTMLElement("input")}} contient une chaîne de caractères qui représente soit un numéro de téléphone, soit une chaîne de caractères vide (`""`).

## Attributs supplémentaires

En plus des attributs présents pour tous les éléments [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input), les champs de saisie pour les numéros de téléphone prennent en charge les attributs suivants.

### `list`

La valeur de cet attribut est l'identifiant ({{DOMxRef("Element.id", "id")}}) d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément {{HTMLElement("datalist")}} fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Reference/Elements/input#type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

### `maxlength`

Le nombre maximum de caractères (exprimé en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}) qu'il est possible de saisir dans le champ. Cette valeur doit un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du numéro de téléphone dépasse `maxlength` en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}. La validation de contrainte est seulement appliquée lorsque la valeur est modifée par l'utilisateur·ice.

### `minlength`

Le nombre minimal de caractères (exprimé en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}) que l'utilisateur·ice peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieure à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du numéro de téléphone est inférieure à `minlength` en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}. La validation de contrainte est seulement appliquée lorsque la valeur est modifée par l'utilisateur·ice.

### `pattern`

L'attribut `pattern`, lorsqu'il est défini, est une expression régulière à laquelle la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de l'élément `input` doit correspondre pour que la valeur passe la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Il doit s'agir d'une expression régulière JavaScript valide, telle qu'utilisée par le type {{JSxRef("RegExp")}} et telle que documentée dans notre [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)&nbsp;; le marqueur `"u"` est défini lors de la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode, plutôt que de {{Glossary("ASCII", "l'ASCII")}}. Aucune barre oblique ne doit être définie autour du texte du motif.

Si aucune expression rationnelle n'est fournie ou que celle-ci est invalide, aucune contrainte de format ne sera appliquée et cet attribut sera ignoré complètement.

> [!NOTE]
> On utilisera l'attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/input#title) pour définir le texte que la plupart des navigateurs afficheront comme bulle d'information afin d'expliquer les contraintes imposées par l'expression rationnelle. Il faut également inclure un texte explicatif à proximité du champ.

Voir [Motif de validation](#motif_de_validation) pour plus de détails et un exemple.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères qui fournit une indication courte sur le type d'information attendue dans le champ. Ce devrait être un mot ou une phrase courte qui illustre le type de données attendu plutôt qu'un message explicatif. Le texte _ne doit pas_ inclure de saut de ligne ou de retour chariot.

Si le contenu du contrôle utilise une direction (écriture de gauche à droite ou de droite à gauche), mais que le texte indicatif doit être présenté dans la direction inverse, vous pouvez utiliser des caractères de formatage pour l'algorithme bidirectionnel Unicode dans la valeur. Voir [comment utiliser des contrôles Unicode pour le texte bidirectionnel <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus d'informations.

> [!NOTE]
> On évitera d'utiliser l'attribut `placeholder` si possible. Il n'est pas aussi utile que d'autres sur le plan sémantique pour expliquer le formulaire et il peut causer des problèmes techniques avec le contenu. Voir [les libellés de `<input>`](/fr/docs/Web/HTML/Reference/Elements/input#libellés) pour plus d'informations.

### `readonly`

Un attribut booléen qui, s'il est présent, indique que le champ ne peut pas être édité dans le formulaire. La valeur du champ (portée par l'attribut `value`) peut toutefois être modifiée par du code JavaScript, qui changerait la propriété `value` de l'interface {{DOMxRef("HTMLInputElement")}}.

> [!NOTE]
> Un champ en lecture seule ne pouvant pas avoir de valeur, l'attribut `required` n'a pas d'effet particulier sur les champs pour lesquels `readonly` est appliqué.

### `size`

L'attribut `size` est une valeur numérique qui indique la largeur idéale du champ, exprimée en nombre de caractères. Sa valeur doit être un nombre supérieur à 0 et la valeur par défaut est 20. Comme les caractères peuvent avoir une largeur différente entre eux, on ne doit pas s'attendre à ce que cette taille permette exactement de voir les n caractères, le contrôle résultant pourra être plus étroit ou plus large que le nombre indiqué en fonction des caractères saisis et de la police (voir la propriété CSS {{CSSxRef("font")}}) utilisée.

Cet attribut _n'impose pas_ de limite sur le nombre de caractères qui peuvent être saisis. Il indique uniquement, de façon approximative, le nombre de caractères visibles au même moment. Pour imposer une contrainte de taille sur la longueur maximale de la valeur saisissable, on pourra utiliser l'attribut [`maxlength`](#maxlength).

## Utiliser le champ de téléphone

Les numéros de téléphone sont un type de données très fréquemment collecté sur le web. Par exemple, lors de la création d'un site d'inscription ou de commerce électronique, vous devrez probablement demander à l'utilisateur·ice un numéro de téléphone, que ce soit pour des raisons professionnelles ou pour les contacts en cas d'urgence. Étant donné la fréquence à laquelle les numéros de téléphone sont saisis, il est regrettable qu'une solution «&nbsp;taille unique&nbsp;» pour valider les numéros de téléphone ne soit pas pratique.

Heureusement, vous pouvez prendre en compte les exigences de votre propre site et mettre en œuvre un niveau de validation approprié vous-même. Voir [Validation](#validation), ci-dessous, pour plus de détails.

### Claviers adaptés

L'un des avantages des contrôles `<input type="tel">` est qu'ils permettent aux navigateurs mobiles de proposer un clavier adapté à la saisie de numéros de téléphone.

| Firefox pour Android                                             | WebKit iOS (Safari/Chrome/Firefox)                                      |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![Capture d'écran pour Firefox pour Android](fx-android-tel.png) | ![Capture d'écran pour Firefox pour iOS](iphone-tel-keyboard-50pct.png) |

### Un champ simple

Dans sa forme la plus simple, on peut implémenter un tel contrôle avec ce fragment HTML&nbsp;:

```html
<label for="telNo">Numéro de téléphone&nbsp;:</label>
<input id="telNo" name="telNo" type="tel" />
```

{{EmbedLiveSample("Un champ simple", 600, 40)}}

Rien de bien surprenant ici. Lorsque les données seront envoyées au serveur, elles auront la forme `telNo=0123456789`.

### Textes indicatifs

Il est parfois utile de fournir une indication contextuelle sur la forme que doivent prendre les données saisies. Cela peut être particulièrement important si la mise en page n'offre pas d'étiquettes descriptives pour chaque {{HTMLElement("input")}}. C'est là qu'interviennent les **textes indicatifs**. Un texte indicatif illustre la forme que doit prendre la `value` en présentant un exemple de valeur valide, affiché dans la zone d'édition lorsque la `value` de l'élément est vide (`""`). Lorsque des données sont saisies dans la zone, le texte indicatif disparaît&nbsp;; si la zone est vidée, il réapparaît.

Dans l'exemple suivant, on a un contrôle `tel` avec un texte indicatif (<i lang="en">placeholder</i> en anglais) qui vaut `01 23 45 67 89`. Vous pouvez manipuler le résultat obtenu pour voir comment ce texte est affiché selon qu'une valeur saisie ou que le champ est vide&nbsp;:

```html
<input id="telNo" name="telNo" type="tel" placeholder="01 23 45 67 89" />
```

{{EmbedLiveSample("Textes indicatifs", 600, 40)}}

### Contrôler la taille du champ

On peut contrôler la taille physique allouée au contrôle ainsi que les longueurs minimale et maximale autorisées pour le texte saisi dans le contrôle.

#### La taille physique d'un champ

La taille physique de la boîte de saisie peut être contrôlée avec l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size). La valeur de cet attribut indique le nombre de caractères que la boîte peut afficher simultanément. Si, par exemple, on souhaite que le contrôle mesure 20 caractères de large, on pourra utiliser le code suivant&nbsp;:

```html
<input id="telNo" name="telNo" type="tel" size="20" />
```

{{EmbedLiveSample("La taille physique d'un champ", 600, 40)}}

#### La longueur de la valeur

L'attribut `size` ne contraint pas la taille de la valeur qui peut être saisie dans le contrôle. Si on souhaite avoir une longueur minimale (en nombre de caractères), on pourra utiliser l'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Elements/input#minlength). De même, si on souhaite qu'un numéro de téléphone valide mesure au maximum X caractères, on pourra employer l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength).

Dans l'exemple qui suit, on crée un contrôle qui mesure 20 caractères de large et dont le contenu doit être plus long que 9 caractères et plus court que 14 caractères.

```html
<input
  id="telNo"
  name="telNo"
  type="tel"
  size="20"
  minlength="9"
  maxlength="14" />
```

{{EmbedLiveSample("La longueur de la valeur", 600, 40)}}

> [!NOTE]
> Ces deux attributs jouent un rôle lors de la [validation](#validation). Dans l'exemple précédent, la valeur sera considérée comme invalide si elle contient moins de 9 caractères ou plus de 14. La plupart des navigateurs ne permettront pas de saisir une valeur plus longue que la taille maximale.

### Fournir une valeur par défaut

#### Fournir une seule valeur par défaut avec l'attribut `value`

Il est possible de fournir une valeur par défaut en renseignant au préalable l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)&nbsp;:

```html
<input id="telNo" name="telNo" type="tel" value="01 23 45 67 89" />
```

{{EmbedLiveSample("Fournir une seule valeur par défaut avec l'attribut `value`", 600, 40)}}

#### Afficher des suggestions

Si on souhaite aller plus loin, on peut fournir une liste de suggestions parmi lesquelles on pourra choisir (on pourra également saisir la valeur de son choix si celle-ci ne fait pas partie de la liste). Pour cela, on utilisera l'attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list) dont la valeur est l'identifiant d'un élément [`<datalist>`](/fr/docs/Web/HTML/Reference/Elements/datalist) qui contient autant d'éléments [`<option>`](/fr/docs/Web/HTML/Reference/Elements/option) que de valeurs suggérées. C'est la valeur de l'attribut `value` de chaque élément `<option>` qui sera utilisée comme suggestion.

```html
<input id="telNo" name="telNo" type="tel" list="defaultTels" />

<datalist id="defaultTels">
  <option value="01 23 45 67 89"></option>
  <option value="02 45 67 89 01"></option>
  <option value="03 45 67 89 12"></option>
  <option value="04 56 87 98 32"></option>
</datalist>
```

{{EmbedLiveSample("Afficher des suggestions", 600, 40)}}

Avec l'élément {{HTMLElement("datalist")}} contenant ces différentes valeurs {{HTMLElement("option")}}, le navigateur affichera une liste déroulante (ou un autre élément d'interface utilisateur) afin que l'utilisateur·ice puisse éventuellement choisir parmi les suggestions. Lorsqu'on saisit dans le contrôle, la liste des suggestions est restreinte à celles qui correspondent encore.

Voici une capture d'écran de ce à quoi cela pourrait ressembler&nbsp;:

![Une zone de saisie a la sélection avec un anneau de sélection bleu. La zone de saisie a un menu déroulant affichant quatre numéros de téléphone que l'utilisateur·ice peut sélectionner.](phone-number-with-options.png)

## Validation

Comme évoqué ci-avant, il est difficile de fournir une solution qui convienne pour l'ensemble des formats utilisés et qui permette de valider correctement les numéros de téléphone.

> [!WARNING]
> La validation des formulaires HTML ne remplace _pas_ les scripts côté serveur qui garantissent que les données saisies sont au format approprié avant d'être enregistrées dans la base de données. Il est bien trop facile pour quelqu'un de modifier le code HTML afin de contourner la validation, voire de la supprimer complètement. Il est également possible pour quelqu'un de contourner complètement votre code HTML et d'envoyer les données directement à votre serveur. Si votre code côté serveur ne parvient pas à valider les données qu'il reçoit, une catastrophe pourrait se produire lorsque des données mal formatées (ou des données trop volumineuses, de type incorrect, etc.) sont enregistrées dans votre base de données.

### Rendre la valeur obligatoire

Il est possible de rendre la saisie obligatoire avant de pouvoir envoyer le formulaire. Pour cela, on utilisera l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required)&nbsp;:

```html
<form>
  <div>
    <label for="telNo">
      Veuillez saisir un numéro de téléphone (obligatoire)&nbsp;:
    </label>
    <input id="telNo" name="telNo" type="tel" required />
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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
  color: darkred;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}
```

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample("Rendre la valeur obligatoire", 700, 130)}}

### Motif de validation

Si on souhaite restreindre le format de la valeur qui peut être saisie, on peut utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) dont la valeur est une expression rationnelle que la valeur doit respecter pour être valide.

Dans cet exemple, on utilisera la même feuille de style que précédemment mais le code HTML sera celui-ci&nbsp;:

```html
<form>
  <div>
    <label for="telNo">
      Veuillez saisir un numéro de téléphone (au format xx xx xx xx xx)&nbsp;:
    </label>
    <input
      id="telNo"
      name="telNo"
      type="tel"
      required
      pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" />
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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
  color: darkred;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}
```

{{EmbedLiveSample("Motif de validation", 700, 130)}}

Remarquez que la valeur saisie est considérée comme non valide si elle ne correspond pas au format `xx xx xx xx xx`&nbsp;; par exemple, 331 23 45 56 78 ne sera pas accepté, idem pour AB 12 CD 34 EF. En revanche, 01 23 45 67 89 sera accepté. Ce format particulier n'est évidemment utile que pour certaines zones géographiques — dans une application réelle, vous devrez probablement adapter le format utilisé en fonction de la zone géographique de l'utilisateur·ice.

## Exemples

Dans cet exemple, on présente une interface simple avec un élément {{HTMLElement("select")}} qui permet à l'utilisateur·ice de sélectionner son pays, ainsi qu'un ensemble d'éléments `<input type="tel">` lui permettant de saisir chaque partie de son numéro de téléphone&nbsp;; rien ne vous empêche d'utiliser plusieurs champs `tel`.

Chaque boîte de saisie possède un attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder) qui indique le format pressenti. On utilise également l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) afin d'indiquer le nombre de caractères ainsi qu'un attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) qui pourra être lu par un lecteur d'écran et qui décrit quoi saisir dans le contrôle.

```html
<form>
  <div>
    <label for="country">Veuillez choisir votre pays&nbsp;:</label>
    <select id="country" name="country">
      <option>Royaume-Uni</option>
      <option selected>États-Unis</option>
      <option>Allemagne</option>
    </select>
  </div>
  <div>
    <p>Veuillez saisir vos numéros de téléphone&nbsp;:</p>
    <span class="areaDiv">
      <input
        id="areaNo"
        name="areaNo"
        type="tel"
        required
        placeholder="Code régional"
        pattern="[0-9]{3}"
        aria-label="Code régional" />
      <span class="validity"></span>
    </span>
    <span class="number1Div">
      <input
        id="number1"
        name="number1"
        type="tel"
        required
        placeholder="Premier fragment"
        pattern="[0-9]{3}"
        aria-label="Premier fragment du numéro" />
      <span class="validity"></span>
    </span>
    <span class="number2Div">
      <input
        id="number2"
        name="number2"
        type="tel"
        required
        placeholder="Second fragment"
        pattern="[0-9]{4}"
        aria-label="Second fragment du numéro" />
      <span class="validity"></span>
    </span>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

Le code JavaScript associé est relativement simple, il contient un gestionnaire d'évènements {{DOMxRef("HTMLElement.change_event", "onchange")}} qui est déclenché lorsque la valeur du `<select>` est modifiée. Il met alors à jour les attributs `pattern`, `placeholder` et `aria-label` du contrôle pour adapter le format attendu au pays choisi.

```js
const selectElem = document.querySelector("select");
const inputElems = document.querySelectorAll("input");

selectElem.onchange = function () {
  for (const e of inputElems) {
    e.value = "";
  }

  if (selectElem.value === "États-Unis") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Code régional";
    inputElems[0].pattern = "[0-9]{3}";

    inputElems[1].placeholder = "Première partie";
    inputElems[1].pattern = "[0-9]{3}";
    inputElems[1].setAttribute("aria-label", "Première partie du numéro");

    inputElems[2].placeholder = "Seconde partie";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label", "Seconde partie du numéro");
  } else if (selectElem.value === "Royaume-Uni") {
    inputElems[2].parentNode.style.display = "none";

    inputElems[0].placeholder = "Code régional";
    inputElems[0].pattern = "[0-9]{3,6}";

    inputElems[1].placeholder = "Numéro local";
    inputElems[1].pattern = "[0-9]{4,8}";
    inputElems[1].setAttribute("aria-label", "Numéro local");
  } else if (selectElem.value === "Allemagne") {
    inputElems[2].parentNode.style.display = "inline";

    inputElems[0].placeholder = "Code régional";
    inputElems[0].pattern = "[0-9]{3,5}";

    inputElems[1].placeholder = "Première partie";
    inputElems[1].pattern = "[0-9]{2,4}";
    inputElems[1].setAttribute("aria-label", "Première partie du numéro");

    inputElems[2].placeholder = "Seconde partie";
    inputElems[2].pattern = "[0-9]{4}";
    inputElems[2].setAttribute("aria-label", "Seconde partie du numéro");
  }
};
```

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample("Exemples", 600, 140)}}

C'est une idée intéressante, qui offre une solution potentielle au problème posé par le traitement des numéros de téléphone internationaux. Il faudrait bien sûr adapter cet exemple pour fournir le format correct pour chaque pays, ce qui représenterait beaucoup de travail, sans pour autant garantir à 100 % que les utilisateur·ice·s saisissent correctement leurs numéros.

On peut se demander s'il vaut la peine de se donner tout ce mal côté client, alors qu'il suffirait de laisser l'utilisateur·ice saisir son numéro dans le format de son choix côté client, puis de le valider et de le nettoyer côté serveur. Mais c'est à vous de faire ce choix.

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

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
  color: darkred;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères qui représente un numéro de téléphone, ou est vide.
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
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a> et
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>list</code>, <code>selectionStart</code>,
        <code>selectionEnd</code>, <code>selectionDirection</code> et
        <code>value</code>
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
        {{DOMxRef("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{DOMxRef("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td>
        sans l'attribut <code>list</code>&nbsp;:
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        avec l'attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le guide des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- Les éléments {{HTMLElement("input")}}&nbsp;:
  - [`<input type="text">`](/fr/docs/Web/HTML/Reference/Elements/input/text)
  - [`<input type="email">`](/fr/docs/Web/HTML/Reference/Elements/input/email)
