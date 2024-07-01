---
title: <input type="password">
slug: Web/HTML/Element/input/password
---

{{HTMLSidebar}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) de type **`password`** permettent à l'utilisatrice ou l'utilisateur de saisir un mot de passe sans que celui-ci ne soit lisible à l'écran.

Un tel élément se présente comme un contrôle de saisie de texte sur une ligne et dans lequel chaque caractère est remplacé par un symbole (un astérisque (`*`) ou un point (`•`)) afin que le texte saisi ne puisse être lu. Le caractère utilisé pour masquer dépend de l'agent utilisateur et du système d'exploitation utilisé.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

La façon dont le texte saisi est traité dépend du navigateur utilisé. Sur les appareils mobiles, par exemple, le caractère tapé est souvent laissé affiché un court instant afin que l'utilisatrice ou l'utilisateur puisse contrôler que c'est bien le bon caractère. Ainsi, même si le clavier est petit et virtuel, on peut éviter de faire trop d'erreurs.

> **Note :** Les différents formulaires qui permettent d'envoyer des données sensibles (telles que des mots de passe) doivent être servis sur HTTPS. Firefox, Chrome et les autres navigateurs implémentent désormais différents mécanismes afin d'avertir l'utilisatrice ou l'utilisateur lorsqu'il saisit un mot de passe sur une connexion HTTP (cf. l'article [mots de passe non sécurisés](/fr/docs/Web/Security/Insecure_passwords) pour Firefox).

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Valeur</strong></td>
      <td>Une chaîne de caractères qui représente un mot de passe (la chaîne peut éventuellement être vide).</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/Input_event"><code>input</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charges</strong></td>
      <td><a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-inputmode"><code>inputmode</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-maxlength"><code>maxlength</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-minlength"><code>minlength</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-pattern"><code>pattern</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-placeholder"><code>placeholder</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-readonly"><code>readonly</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-required"><code>required</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-size"><code>size</code></a></td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>selectionStart</code>, <code>selectionEnd</code>, <code>selectionDirection</code> et <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td><a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/setRangeText"><code>setRangeText()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/setSelectionRange"><code>setSelectionRange()</code></a></td>
    </tr>
  </tbody>
</table>

## Valeur

La valeur de l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) d'un tel élément contient une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) dont la valeur est le texte qui est en cours de saisie dans le contrôle. Si l'utilisatrice ou l'utilisateur n'a pas encore saisi d'information, la valeur est une chaîne vide. Si l'attribut booléen `required` est utilisé, le mot de passe doit contenir une valeur non vide afin que le formulaire puisse être envoyé.

Si l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) est indiqué, le contenu du contrôle doit respecter l'expression rationnelle indiquée par l'attribut. Pour plus d'informations, voir la section [Validation](#validation) ci-après.

> **Note :** Il n'est pas possible d'utiliser les caractères de fin de ligne (<i lang="en">line feed</i>) (code U+000A) et de retour chariot (<i lang="en">carriage return</i>) (code U+000D) dans la valeur d'un champ `password`. Lorsqu'on saisit la valeur, ces caractères sont retirés si besoin.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs pour les mots de passe prennent en charge les attributs suivants.

### `maxlength`

Le nombre maximum de caractères (exprimé en nombre d'unités de code UTF-16) que l'utilisatrice ou l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre d'unités de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisatrice ou l'utilisateur.

### `minlength`

Le nombre minimal de caractères (exprimé en nombre d'unités de code UTF-16) que l'utilisatrice ou l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieure à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte est inférieure à `minlength` en nombre d'unités de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisatrice et l'utilisateur.

### `pattern`

L'attribut `pattern` est une expression rationnelle que doit respecter la valeur ([`value`](/fr/docs/Web/HTML/Element/Input#attr-value)) du champ afin d'être [valide](/fr/docs/Web/Guide/HTML/Constraint_validation). Cette expression rationnelle doit être une expression rationnelle valide pour JavaScript (telle qu'utilisée par [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) et telle que documentée dans [ce guide](/fr/docs/Web/JavaScript/Guide/Regular_Expressions)). Le marqueur `'u'` est fourni par le navigateur lors de la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode plutôt que comme des caractères ASCII. Aucune barre oblique (`/`) ne devrait être utilisée autour du motif.

Si l'expression rationnelle est invalide ou que cet attribut n'est pas défini, l'attribut est ignoré.

> **Note :** L'attribut [`title`](/fr/docs/Web/HTML/Element/Input#attr-title) pourra être utilisé afin d'afficher une bulle d'informations qui explique les conditions à respecter. Il est également conseillé d'inclure un texte explicatif à proximité du champ.

Voir [la section sur l'utilisation de cet attribut ci-après](#validation) pour plus d'exemples.

L'utilisation d'un motif pour les mots de passe est fortement recommandée. Elle permet de s'assurer que les mots de passe saisis respectent des critères de complexité suffisants pour être robustes. Voir la section [Validation](#validation) ci-après pour plus de détails et d'exemples.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères fournissant une courte indication à l'utilisatrice ou l'utilisateur quant à l'information attendue dans le champ. Cet attribut devrait être un mot ou une phrase courte qui illustre le type de donnée attendu plutôt qu'un message explicatif. Le texte ne doit pas contenir de saut à la ligne.

Si le contenu du contrôle respecte une directionnalité donnée ([LTR](/fr/docs/Glossary/ltr) ou [RTL](/fr/docs/Glossary/rtl)) et que le texte indicatif doit être présenté dans l'autre sens, il est possible d'utiliser l'algorithme de formatage bidirectionnel Unicode — voir [Comment utiliser les contrôles Unicode pour le texte bidirectionnel (en anglais)](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus de détails.

> **Note :** On évitera, tant que faire se peut, d'utiliser l'attribut `placeholder`, car il n'est pas sémantiquement très utile pour expliquer le formulaire et car il peut causer certains problèmes avec le contenu. Voir [Utilisation de libellés](/fr/docs/Web/HTML/Element/Input#utilisation_de_libellés) pour plus d'informations.

### `readonly`

Un attribut booléen qui, lorsqu'il est présent, indique que le champ ne peut pas être édité par l'utilisatrice ou l'utilisateur. Toutefois, la valeur de l'attribut `value` peut toujours être modifiée via du code JavaScript, qui définirait la propriété `value` rattachée à [l'interface `HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement).

> **Note :** Un champ en lecture seule pouvant ne pas avoir de valeur, l'attribut `required` n'aura pas d'effet si l'attribut `readonly` est également présent.

### `size`

L'attribut `size` est un nombre positif qui indique le nombre de caractères affichés à l'écran et qui définit donc la largeur du champ. La valeur par défaut de cet attribut est 20. Étant donné que la largeur des caractères peut varier cet attribut ne permet de définir une largeur exacte mais approximative.

Cet attribut ne définit pas la limite du nombre de caractères saisissables dans le champ mais uniquement, et approximativement, le nombre de caractères qui peuvent être affichés à l'écran simultanément. Pour fixer une taille maximale sur la valeur du champ, on utilisera plutôt l'attribut `maxlength`.

## Utiliser les contrôles de saisie de mot de passe

Les champs destinés à la saisie des mots de passe fonctionnent comme les champs texte mais masquent le texte saisi pour que celui-ci ne puisse pas être lu sur l'écran.

### Un contrôle basique

Voici un exemple simple illustrant un contrôle de saisie d'un mot de passe qui utilise un élément [`<label>`](/fr/docs/Web/HTML/Element/Label) afin d'indiquer le rôle du champ.

```html
<label for="userPassword">Mot de passe :</label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("", 600, 40)}}

### Paramétrer l'autocomplétion

Afin de permettre au gestionnaire de mots de passe de saisir automatiquement le mot de passe, on pourra utiliser l'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/Input#attr-autocomplete). Pour les mots de passe, celui-ci aura l'une des valeurs suivantes&nbsp;:

- `on`
  - : Cette valeur permet au navigateur ou à un gestionnaire de mot de passe de remplir automatiquement le champ. Cette valeur n'est pas aussi informative que `current-password` or `new-password`.
- `off`
  - : Cette valeur n'autorise pas le navigateur ou le gestionnaire de mot de passe à remplir le champ automatiquement.
- `current-password`
  - : Cette valeur indique au navigateur ou au gestionnaire de mots de passe qu'il faut utiliser le mot de passe actuel pour le site. Cette valeur est plus précise que la valeur `on`, car elle indique qu'il faut utiliser le mot de passe courant plutôt qu'un nouveau mot de passe.
- `new-password`
  - : Cette valeur indique au navigateur ou au gestionnaire de mots de passe qu'il faut générer un nouveau mot de passe et utiliser ce dernier pour remplir le champ. La génération automatique du mot de passe peut alors utiliser les autres attributs de l'élément. Cette valeur peut également être indiquée pour que le navigateur indique cette information d'une façon ou d'une autre.

```html
<label for="userPassword">Mot de passe :</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("", 600, 40)}}

### Rendre le champ obligatoire

Pour indiquer à l'utilisatrice ou l'utilisateur que le mot de passe est obligatoire, on pourra utiliser l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required).

```html
<label for="userPassword">Mot de passe :</label>
<input id="userPassword" type="password" required />
```

{{EmbedLiveSample("", 600, 40)}}

### Définir un mode de saisie

Si votre application utilise un autre mode de saisie que le mode par défaut, l'attribut [`inputmode`](/fr/docs/Web/HTML/Element/Input#attr-inputmode) peut être employé pour indiquer le mode à utiliser. Le cas le plus fréquent est celui où on utilise une valeur numérique pour un mot de passe (par exemple pour un code PIN). Si ce code ne doit être utilisé qu'une seule fois, on pourra paramétrer l'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/Input#attr-autocomplete) avec la valeur `off`. Les appareils mobiles pourront tirer parti de la valeur de cet attribut et afficher un autre clavier pour faciliter la saisie.

```html
<label for="pin">PIN :</label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("", 600, 40)}}

### Indiquer des critères de longueur

Les attributs [`minlength`](/fr/docs/Web/HTML/Element/Input#attr-minlength) et [`maxlength`](/fr/docs/Web/HTML/Element/Input#attr-maxlength) peuvent être utilisés afin d'indiquer les tailles minimale et maximale du mot de passe qui doit être saisi. Dans l'exemple qui suit, on repart de l'exemple précédent et on indique que le code PIN doit contenir au moins 4 caractères et au plus 8 caractères. L'attribut [`size`](/fr/docs/Web/HTML/Element/Input#attr-size) est utilisé afin que le contrôle permette bien d'afficher 8 caractères.

```html
<label for="pin">PIN :</label>
<input
  id="pin"
  type="password"
  inputmode="numeric"
  minlength="4"
  maxlength="8"
  size="8" />
```

{{EmbedLiveSample("", 600, 40)}}

### Sélectionner le texte saisi

Il est possible d'utiliser la méthode [`select()`](/fr/docs/Web/API/HTMLInputElement/select) pour sélectionner le texte saisi dans le contrôle.

#### HTML

```html
<label for="userPassword">Mot de passe :</label>
<input id="userPassword" type="password" size="12" />
<button id="selectAll">Sélectionner tout</button>
```

#### JavaScript

```js
document.getElementById("selectAll").onclick = function (event) {
  document.getElementById("userPassword").select();
};
```

#### Résultat

{{EmbedLiveSample("", 600, 40)}}

On peut également utiliser [`selectionStart`](/fr/docs/Web/API/HTMLInputElement) et [`selectionEnd`](/fr/docs/Web/API/HTMLInputElement) afin d'obtenir (ou de régler) l'intervalle de caractères sélectionnés. [`selectionDirection`](/fr/docs/Web/API/HTMLInputElement) permet de connaître la direction dans laquelle la sélection a été effectuée.

## Validation

Si votre application possède des contraintes sur les caractères utilisables ou sur la structure du mot de passe, il est possible d'utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) afin que le navigateur vérifie que la valeur saisie respecte une expression rationnelle tenant compte de ces contraintes.

Dans cet exemple, il n'est possible de saisir qu'une valeur qui contient entre 4 et 8 caractères qui sont des caractères hexadécimaux.

```html
<label for="hexId">Identifiant Hexa :</label>
<input
  id="hexId"
  type="password"
  pattern="[0-9a-fA-F]{4,8}"
  title="Veuillez saisir un identifiant avec 4 à 8 chiffres hexadécimaux."
  autocomplete="nouveau-mot-de-passe" />
```

{{EmbedLiveSample("", 600, 40)}}

## Désactiver le champ

L'attribut booléen `disabled` indique que le champ ne peut pas être utilisé de façon interactive. Les données des champs désactivés ne seront pas envoyées avec le formulaire.

## Exemples

### Saisir un numéro de sécurité sociale américain comme mot de passe

Dans l'exemple qui suit, on construit un formulaire avec un mot de passe qui doit respecter le format d'un [numéro de sécurité sociale américain](https://en.wikipedia.org/wiki/Social_Security_number#Structure). Ces nombres ont la forme `123-45-6789` et il existe différentes règles permettant de restreindre les valeurs pour chacun des groupes.

#### HTML

```html
<label for="ssn">SSN :</label>
<input
  type="password"
  id="ssn"
  inputmode="number"
  minlength="9"
  maxlength="12"
  pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
  required
  autocomplete="off" />
<br />
<label for="ssn">Valeur :</label>
<span id="current"></span>
```

On utilise l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) afin d'imposer certaines contraintes de saisie afin que les chaînes aient le bon format. Cette expression rationnelle ne garantit pas un numéro valide, mais elle permet de s'assurer que la valeur saisie _peut_ être un numéro de sécurité sociale valide. De plus, elle permet d'avoir un séparateur variable entre les trois groupes (une espace, un tiret ou rien).

L'attribut [`inputmode`](/fr/docs/Web/HTML/Element/Input#attr-inputmode) vaut `number`, ce qui incite les appareils mobiles à utiliser un clavier virtuel uniquement numérique pour la saisie d'un tel champ. Les attributs [`minlength`](/fr/docs/Web/HTML/Element/Input#attr-minlength) et [`maxlength`](/fr/docs/Web/HTML/Element/Input#attr-maxlength) valent respectivement 9 et 12 et l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required) indique que cette valeur est nécessaire pour envoyer le formulaire. Enfin, [`autocomplete`](/fr/docs/Web/HTML/Element/Input#attr-autocomplete) vaut `off`, ce qui évite que les gestionnaires de mots de passe ou que les fonctionnalités de restauration de session remplissent automatiquement cette valeur.

#### Résultat

{{EmbedLiveSample("", 600, 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La compatibilité des propriétés CSS pour les contrôles de formulaires](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
