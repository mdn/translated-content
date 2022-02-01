---
title: <input type="tel">
slug: Web/HTML/Element/Input/tel
tags:
  - Element
  - Formulaires
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/tel
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`"tel"`** permettent à un utilisateur de saisir un numéro de téléphone. Contrairement aux contrôles utilisés pour [`<input type="email">`](/fr/docs/Web/HTML/Element/input/email) et [`<input type="url">`](/fr/docs/Web/HTML/Element/input/url) , la valeur saisie n'est pas automatiquement validée selon un format donné car les formats des numéros de téléphone varient à travers le monde.

{{EmbedInteractiveExample("pages/tabbed/input-tel.html", "tabbed-standard")}}

> **Note :** Les navigateurs qui ne prennent pas en charge le type `"tel"` utiliseront à la place un contrôle de type [`"text"`](/fr/docs/Web/HTML/Element/input/text).

## Valeur

Une chaîne de caractères ({{domxref("DOMString")}}) qui peut prendre l'une de ces deux valeurs :

1.  Une chaîne vide ("") qui indique que l'utilisateur n'a saisi aucune valeur ou que celle-ci a été supprimée.
2.  Une chaîne de caractères représentant un numéro de téléphone.

## Attributs supplémentaires

In addition to the attributes that operate on all {{HTMLElement("input")}} elements regardless of their type, telephone number inputs support the following attributes:

| Attribut                           | Description                                                                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("maxlength")}}`     | Le nombre de caractères maximal, exprimé en points de code UTF-16, qui peut être écrit dans ce champ.                                        |
| `{{anch("minlength")}}`     | Le nombre de caractères minimal, exprimé en points de code UTF-16, qui peut être écrit dans ce champ pour qu'il soit considéré comme valide. |
| `{{anch("pattern")}}`         | Une expression rationnelle à laquelle doit correspondre le numéro de téléphone saisi pour être valide.                                       |
| `{{anch("placeholder")}}` | Une valeur d'exemple qui sera affichée lorsqu'aucune valeur n'est saisie.                                                                    |
| `{{anch("readonly")}}`     | Un attribut booléen qui indique si le contenu du champ est en lecture seule.                                                                 |
| `{{anch("size")}}`             | Un nombre qui indique le nombre de caractères affichés par le champ.                                                                         |

### {{htmlattrdef("maxlength")}}

Le nombre maximum de caractères (exprimé en nombre de points de code UTF-16) que l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du numéro de téléphone dépasse `maxlength` en nombre de points de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur.

### {{htmlattrdef("minlength")}}

Le nombre minimal de caractères (exprimé en nombre de points de code UTF-16) que l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieur à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du numéro de téléphone est inférieure à `minlength` en nombre de points de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur.

### {{htmlattrdef("pattern")}}

{{page("/fr/docs/Web/HTML/Element/input/text", "pattern-include")}}

Voir [la section format](#format) ci-après pour plus détails et d'exemples.

{{page("/fr/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

## Attributs non-standard

Les attributs non-standard suivant sont disponibles pour les champs textuels mais devraient ne pas être utilisés.

| Attribute                          | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("autocorrect")}}` | Indique si la correction automatique doit être appliquée à ce champ texte. **Uniquement pris en charge par Safari.**                                                                                                                                                                                                                              |
| `{{anch("mozactionhint")}}` | Une chaîne de caractères qui indique le type d'action qui sera effectuée lorsque l'utilisateur appuiera sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ. La valeur de cet attribut est utilisée comme libellé pour la touche adéquate du clavier virtuel. **Uniquement pris en charge par Firefox pour Android.** |

### {{htmlattrdef("autocorrect")}} {{non-standard_inline}}

{{page("/fr/docs/Web/HTML/Element/input/text", "autocorrect-include")}}

### {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}

{{page("/fr/docs/Web/HTML/Element/input/text", "mozactionhint-include")}}

## Utiliser `<input type="tel">`

Les numéros de téléphone peuvent jouer un rôle important dans certains formulaires web. Un site de commerce en ligne, par exemple, peut vouloir enregistrer le numéro de téléphone d'un utilisateur pour le contacter lors de la livraison. Toutefois, un des problèmes relatifs aux numéros de téléphone est la variété de formats qui existent à travers le monde. Il est donc difficile (voire impossible) de valider les valeurs automatiquement.

> **Note :** Des mécanismes de validation particuliers peuvent être ajoutés si besoin (cf. {{anch("Validation")}} ci-après).

### Claviers adaptés

L'un des avantages des contrôles de type `tel` est qu'ils permettent aux navigateurs mobiles de proposer un clavier adapté à la saisie de numéros de téléphone.

| Firefox pour Android                                             | WebKit iOS (Safari/Chrome/Firefox)                                      |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![Capture d'écran pour Firefox pour Android](fx-android-tel.png) | ![Capture d'écran pour Firefox pour iOS](iphone-tel-keyboard-50pct.png) |

### Un contrôle simple

Dans sa forme la plus simple, on peut implémenter un tel contrôle avec ce fragment HTML :

```html
<input id="telNo" name="telNo" type="tel">
```

{{EmbedLiveSample('Un_contrôle_simple', 600, 40)}}

Rien de bien surprenant ici. Lorsque les données seront envoyées au serveur, elles auront la forme `telNo=0123456789`.

### Textes indicatifs - _placeholders_

Il est parfois utile de fournir une indication quant au format attendu. Or, il est possible que la disposition de la page ne permette pas de fournir des étiquettes détaillées. C'est pourquoi on peut utiliser des textes indicatifs via l'attribut `placeholder`. Ces valeurs seront affichées dans le champ et disparaîtront dès que l'utilisateur saisira quelque chose (et réapparaîtront si la valeur redevient vide). Un tel texte indicatif doit servir de suggestion quant au format souhaité.

Dans l'exemple suivant, on a un contrôle `"tel"` avec un attribut `placeholder` qui vaut `"01 23 45 67 89"`. Vous pouvez manipuler le résultat obtenu pour voir comment ce texte est affiché selon qu'une valeur saisie ou que le champ est vide :

```html
<input id="telNo" name="telNo" type="tel"
       placeholder="01 23 45 67 89">
```

{{EmbedLiveSample('Textes_indicatifs_-_placeholders', 600, 40)}}

### Contrôler la taille du champ

On peut contrôler la taille physique allouée au contrôle ainsi que les longueurs minimale et maximale autorisées pour le texte saisi dans le contrôle.

#### La taille physique

La taille physique de la boîte de saisie peut être contrôlée avec l'attribut {{htmlattrxref("size", "input")}}. La valeur de cet attribut indique le nombre de caractères que la boîte peut afficher simultanément. Si, par exemple, on souhaite que le contrôle mesure 20 caractères de large, on pourra utiliser le code suivant :

```html
<input id="telNo" name="telNo" type="tel"
       size="20">
```

{{EmbedLiveSample('La_taille_physique', 600, 40)}}

#### La longueur de la valeur

L'attribut `size` ne contraint pas la taille de la valeur qui peut être saisie dans le contrôle. Si on souhaite avoir une longueur minimale (en nombre de caractères), on pourra utiliser l'attribut {{htmlattrxref("minlength", "input")}}. De même, si on souhaite qu'un numéro de téléphone valide mesure au maximum X caractères, on pourra employer l'attribut {{htmlattrxref("maxlength", "input")}}.

Dans l'exemple qui suit, on crée un contrôle qui mesure 20 caractères de large et dont le contenu doit être plus long que 9 caractères et plus court que 14 caractères.

```html
<input id="telNo" name="telNo" type="tel"
       size="20" minlength="9" maxlength="14">
```

{{EmbedLiveSample("La_longueur_de_la_valeur", 600, 40)}}

> **Note :** Ces deux attributs jouent un rôle lors de la {{anch("validation", "Validation")}}. Dans l'exemple précédent, la valeur sera considérée comme invalide si elle contient moins de 9 caractères ou plus de 14. La plupart des navigateurs ne permettront pas de saisir une valeur plus longue que la taille maximale.

### Fournir une valeur par défaut

Il est possible de fournir une valeur par défaut en renseignant au préalable l'attribut {{htmlattrxref("value", "input")}} :

```html
<input id="telNo" name="telNo" type="tel"
       value="01 23 45 67 89">
```

{{EmbedLiveSample("Fournir_une_valeur_par_défaut", 600, 40)}}

#### Afficher des suggestions

Si on souhaite aller plus loin, on peut fournir une liste de suggestions parmi lesquelles l'utilisateur pourra choisir (il pourra également saisir la valeur de son choix si celle-ci ne fait pas partie de la liste). Pour cela, on utilisera l'attribut {{htmlattrxref("list", "input")}} dont la valeur est l'identifiant d'un élément  {{HTMLElement("datalist")}} qui contient autant d'éléments  {{HTMLElement("option")}} que de valeurs suggérées. C'est la valeur de l'attribut `value` de chaque élément `<option>` qui sera utilisée comme suggestion.

```html
<input id="telNo" name="telNo" type="tel" list="defaultTels">

<datalist id="defaultTels">
  <option value="01 23 45 67 89">
  <option value="02 45 67 89 01">
  <option value="03 45 67 89 12">
  <option value="04 56 87 98 32">
</datalist>
```

{{EmbedLiveSample("Afficher_des_suggestions", 600, 40)}}

Avec l'élément {{HTMLElement("datalist")}} contenant ces différentes valeurs  {{HTMLElement("option")}}, le navigateur affichera une liste déroulante (ou un autre élément d'interface utilisateur) afin que l'utilisateur puisse éventuellement choisir parmi les suggestions. Lorsque l'utilisateur saisit dans le contrôle, la liste des suggestions est restreinte à celles qui correspondent encore.

## Validation

Comme évoqué ci-avant, il est difficile de fournir une solution qui convienne pour l'ensemble des formats utilisés et qui permette de valider correctement les numéros de téléphone.

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur ! En effet, il est tout à fait possible pour un utilisateur de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

### Rendre la valeur obligatoire

Il est possible de rendre la saisie obligatoire avant de pouvoir envoyer le formulaire. Pour cela, on utilisera l'attribut {{htmlattrxref("required", "input")}} :

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

On utilisera la feuille de style suivante pour indiquer les éléments valides ou invalides du formulaire :

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

Voici le résultat obtenu :

{{EmbedLiveSample("Rendre_la_valeur_obligatoire", 700, 70)}}

### Utiliser un format particulier

Si on souhaite restreindre le format de la valeur qui peut être saisie, on peut utiliser l'attribut {{htmlattrxref("pattern","input")}} dont la valeur est une expression rationnelle que la valeur doit respecter pour être valide.

Dans cet exemple, on utilisera la même feuille de style que précédemment mais le code HTML sera celui-ci :

```html
<form>
  <div>
    <label for="telNo">Veuillez saisir un numéro de téléphone (obligatoire) : </label>
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

{{EmbedLiveSample("Utiliser_un_format_particulier", 700, 70)}}

Vous pouvez ici voir que la valeur est considérée comme invalide si elle ne suit pas le format xx xx xx xx xx. Ce format peut peut-être être utile pour certaines régions mais attention, dans une application réelle, il faudra s'adapter à des cas plus complexes selon la locale de l'utilisateur.

## Exemples

Dans cet exemple, on présente une interface simple avec un élément {{htmlelement("select")}} permettant à l'utilisateur de choisir le pays dans lequel il se trouve puis un ensemble d'éléments `<input type="tel">` permettant de saisir ses différents numéros de téléphone.

Chaque boîte de saisie possède un attribut {{htmlattrxref("placeholder","input")}} qui indique le format pressenti. On utilise également l'attribut {{htmlattrxref("pattern","input")}} afin d'indiquer le nombre de caractères ainsi qu'un attribut `aria-label` qui pourra être lu par un lecteur d'écran ete qui décrit quoi saisir dans le contrôle.

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

Le code JavaScript associé est relativement simple, il contient un gestionnaire d'évènements {{domxref("GlobalEventHandlers.onchange", "onchange")}} qui est déclenché lorsque la valeur du `<select>` est modifiée. Il met alors à jour les attributs `pattern`, `placeholder`, `aria-label` du contrôle pour adapter le format attendu au pays choisi.

```js
var selectElem = document.querySelector("select");
var inputElems = document.querySelectorAll("input");

selectElem.onchange = function() {
  for(var i = 0; i < inputElems.length; i++) {
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

Voici le résultat obtenu :

{{EmbedLiveSample('Exemples', 600, 140)}}

Attention, cet exemple n'est qu'une illustration du problème associé à la gestion internationale des numéros de téléphone. Il serait prétentieux d'affirmer qu'étendre ce mécanisme à chaque pays suffirait à garantir la bonne saisie d'un numéro de téléphone.

Bien entendu, si cette complexité est trop importante, on peut également faire le choix de contrôler la valeur côté serveur avant de faire un retour à l'utilisateur.

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
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente un numéro de téléphone ou qui est vide.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} et
        {{domxref("HTMLElement/input_event", "input")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        {{htmlattrxref("autocomplete", "input")}},
        {{htmlattrxref("list", "input")}},
        {{htmlattrxref("maxlength", "input")}},
        {{htmlattrxref("minlength", "input")}},
        {{htmlattrxref("pattern", "input")}},
        {{htmlattrxref("placeholder", "input")}},
        {{htmlattrxref("readonly", "input")}} et
        {{htmlattrxref("size", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>list,selectionStart</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code> et <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                            | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#tel-state-(type=tel)', '&lt;input type="tel"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#tel-state-typetel', '&lt;input type="tel"&gt;')}}     | {{Spec2('HTML5.1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-tel")}}

## Voir aussi

- [Le guide sur les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("input")}}
- [Les formulaires et l'accessibilité](/fr/docs/Accessibilité/ARIA/formulaires)
- {{HTMLElement("input")}}

  - [`<input type="text">`](/fr/docs/Web/HTML/Element/input/text)
  - [`<input type="email">`](/fr/docs/Web/HTML/Element/input/email)
