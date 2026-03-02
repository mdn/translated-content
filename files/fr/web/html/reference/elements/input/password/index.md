---
title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: cc7f29133a331628d623e8cd705394b538d4368c
---

Les éléments `<input>` de type **`password`** permettent à l'utilisateur·ice de saisir un mot de passe de manière sécurisée.

L'élément se présente comme un champ d'édition de texte sur une seule ligne dans lequel le texte est masqué afin qu'il ne puisse pas être lu, généralement en remplaçant chaque caractère par un symbole tel qu'un astérisque («&nbsp;\*&nbsp;») ou un point («&nbsp;•&nbsp;»).
Ce caractère varie selon {{Glossary("user agent", "l'agent utilisateur")}} et le système d'exploitation.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;password&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<div>
  <label for="username">Nom d'utilisateur&nbsp;:</label>
  <input type="text" id="username" name="username" />
</div>

<div>
  <label for="pass">Mot de passe (8 caractères minimum)&nbsp;:</label>
  <input type="password" id="pass" name="password" minlength="8" required />
</div>

<input type="submit" value="Se connecter" />
```

```css interactive-example
label {
  display: block;
}

input[type="submit"],
label {
  margin-top: 1rem;
}
```

Le comportement précis du processus de saisie peut varier d'un navigateur à l'autre.
Certains navigateurs affichent le caractère tapé pendant un court instant avant de le masquer, tandis que d'autres permettent à l'utilisateur·ice d'afficher ou de masquer le texte en clair.
Ces deux approches aident l'utilisateur·ice à vérifier qu'il·elle a bien saisi le mot de passe souhaité, ce qui peut être particulièrement difficile sur les appareils mobiles.

> [!NOTE]
> Les différents formulaires qui permettent d'envoyer des informations sensibles (comme des mots de passe) doivent être servis sur HTTPS.
> De nombreux navigateurs implémentent désormais des mécanismes pour avertir contre les formulaires de connexion non sécurisés.

## Valeur

L'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) contient une chaîne de caractères dont la valeur correspond au contenu actuel du contrôle d'édition de texte utilisé pour saisir le mot de passe. Si l'utilisateur·ice n'a encore rien saisi, cette valeur est une chaîne vide (`""`). Si la propriété [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) est présente, le champ de saisie du mot de passe doit contenir une valeur différente d'une chaîne vide pour être valide.

Si l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) est présent, le contenu du contrôle `password` n'est considéré comme valide que si la valeur respecte la validation&nbsp;; voir la section [Validation](#validation) pour plus d'informations.

> [!NOTE]
> Les caractères de saut de ligne (U+000A) et de retour chariot (U+000D) ne sont pas autorisés dans la valeur d'un champ `password`. Lorsqu'on définit la valeur d'un contrôle de mot de passe, ces caractères sont retirés de la valeur.

## Attributs supplémentaires

En plus des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) et des attributs qui s'appliquent à tous les éléments {{HTMLElement("input")}} quel que soit leur type, les champs de saisie de mot de passe prennent en charge les attributs suivants.

> [!NOTE]
> L'attribut global [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect) peut être ajouté aux champs de mot de passe, mais son état enregistré est toujours `off`.

### `maxlength`

Le nombre maximum de caractères (mesuré en {{Glossary("UTF-16", "unités de code UTF-16")}}) que l'utilisateur·ice peut saisir dans le champ de mot de passe. Cette valeur doit être un entier positif ou nul. Si aucun `maxlength` n'est défini, ou si une valeur invalide est indiquée, le champ n'a pas de limite de taille maximale. Cette valeur doit également être supérieure ou égale à la valeur de `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte saisi dans le champ dépasse `maxlength` en {{Glossary("UTF-16", "unités de code UTF-16")}}. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur·ice.

### `minlength`

Le nombre minimal de caractères (mesuré en {{Glossary("UTF-16", "unités de code UTF-16")}}) que l'utilisateur·ice peut saisir dans le champ de mot de passe. Cette valeur doit être un entier positif inférieur ou égal à la valeur indiquée par `maxlength`. Si aucun `minlength` n'est défini, ou si une valeur invalide est indiquée, le champ n'a pas de limite de taille minimale.

Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte saisi dans le champ est inférieure à `minlength` en {{Glossary("UTF-16", "unités de code UTF-16")}}. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur·ice.

### `pattern`

L'attribut `pattern`, lorsqu'il est défini, est une expression rationnelle que la [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) du champ doit respecter pour que la valeur passe la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Il doit s'agir d'une expression rationnelle valide pour JavaScript, comme utilisée par le type {{JSxRef("RegExp")}}, et comme documentée dans le [guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)&nbsp;; le marqueur `'u'` est défini lors de la compilation afin que le motif soit traité comme une séquence de points de code Unicode, au lieu de {{Glossary("ASCII")}}. Aucune barre oblique ne doit être indiquée autour du motif.

Si le motif défini n'est pas présent ou est invalide, aucune expression rationnelle n'est appliquée et cet attribut est ignoré.

> [!NOTE]
> Utilisez l'attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/input#title) pour définir un texte que la plupart des navigateurs afficheront comme info-bulle pour expliquer les exigences du motif. Vous devriez aussi inclure un texte explicatif à proximité du champ.

L'utilisation d'un motif est fortement recommandée pour les champs de mot de passe, afin d'aider à garantir que des mots de passe valides utilisant une grande variété de classes de caractères soient choisis et utilisés par les utilisateur·ices. Avec un motif, vous pouvez imposer des règles de casse, exiger l'utilisation d'un certain nombre de chiffres et/ou de caractères de ponctuation, etc. Voir la section [Validation](#validation) pour plus de détails et un exemple.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères qui fournit un indice bref à l'utilisateur·ice sur le type d'information attendu dans le champ. Il doit s'agir d'un mot ou d'une courte phrase qui illustre le type de donnée attendu, plutôt qu'un message explicatif. Le texte _ne doit pas_ inclure de retours chariot ou de sauts de ligne.

Si le contenu du contrôle a une directionnalité ({{Glossary("LTR")}} ou {{Glossary("RTL")}}) mais que le texte du placeholder doit être présenté dans la direction opposée, il est possible d'utiliser les caractères de formatage de l'algorithme bidirectionnel Unicode pour forcer la directionnalité à l'intérieur du placeholder&nbsp;; voir [Comment utiliser les contrôles Unicode pour le texte bidirectionnel <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus d'informations.

> [!NOTE]
> Évitez d'utiliser l'attribut `placeholder` si possible. Il n'est pas aussi utile sémantiquement que d'autres moyens d'expliquer votre formulaire, et peut provoquer des problèmes techniques inattendus avec votre contenu. Voir [libellés `<input>`](/fr/docs/Web/HTML/Reference/Elements/input#libellés) pour plus d'informations.

### `readonly`

Un attribut booléen qui, lorsqu'il est présent, signifie que ce champ ne peut pas être édité par l'utilisateur·ice. Sa valeur (`value`) peut cependant toujours être modifiée par du code JavaScript qui définit directement la valeur de la propriété {{DOMxRef("HTMLInputElement","HTMLInputElement.value")}}.

> [!NOTE]
> Un champ en lecture seule pouvant ne pas avoir de valeur, l'attribut `required` n'aura pas d'effet si l'attribut `readonly` est également présent.

### `size`

L'attribut `size` est une valeur numérique qui indique combien de caractères de largeur le champ de saisie doit afficher. La valeur doit être un nombre supérieur à zéro, et la valeur par défaut est 20. Comme la largeur des caractères varie, cela peut ne pas être exact et il ne faut pas s'y fier&nbsp;; le champ résultant peut être plus étroit ou plus large que le nombre de caractères indiqué, selon les caractères et la police (paramètres {{CSSxRef("font")}} utilisés).

Ceci ne définit _pas_ de limite au nombre de caractères que l'utilisateur·ice peut saisir dans le champ. Cela indique seulement approximativement combien peuvent être vus à la fois. Pour fixer une limite supérieure à la longueur des données saisies, utilisez l'attribut [`maxlength`](#maxlength).

## Utiliser les contrôles de saisie de mot de passe

Les champs de saisie de mot de passe fonctionnent généralement comme les autres champs de saisie de texte&nbsp;; la principale différence est que le contenu est masqué afin d'empêcher les personnes proches de l'utilisateur·ice de lire le mot de passe.

### Un contrôle basique

Voici le champ de saisie de mot de passe le plus basique, avec un libellé établi à l'aide de l'élément {{HTMLElement("label")}}.

```html
<label for="userPassword">Mot de passe&nbsp;:</label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("Un contrôle basique", 600, 40)}}

### Paramétrer l'autocomplétion

Afin de permettre au gestionnaire de mots de passe de saisir automatiquement le mot de passe, on pourra utiliser l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete). Pour les mots de passe, celui-ci aura l'une des valeurs suivantes&nbsp;:

- `on`
  - : Cette valeur permet au navigateur ou à un gestionnaire de mot de passe de remplir automatiquement le champ. Cette valeur n'est pas aussi informative que `current-password` ou `new-password`.
- `off`
  - : Cette valeur n'autorise pas le navigateur ou le gestionnaire de mot de passe à remplir le champ automatiquement.
- `current-password`
  - : Cette valeur indique au navigateur ou au gestionnaire de mots de passe qu'il faut utiliser le mot de passe actuel pour le site. Cette valeur est plus précise que la valeur `on`, car elle indique qu'il faut utiliser le mot de passe courant plutôt qu'un nouveau mot de passe.
- `new-password`
  - : Cette valeur indique au navigateur ou au gestionnaire de mots de passe qu'il faut générer un nouveau mot de passe et utiliser ce dernier pour remplir le champ. La génération automatique du mot de passe peut alors utiliser les autres attributs de l'élément. Cette valeur peut également être indiquée pour que le navigateur indique cette information d'une façon ou d'une autre.

```html
<label for="userPassword">Mot de passe&nbsp;:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Paramétrer l'autocomplétion", 600, 40)}}

### Rendre le champ obligatoire

Pour indiquer à l'utilisateur·ice que le champ de mot de passe doit contenir une valeur valide avant que le formulaire puisse être envoyé, ajoutez l'attribut booléen [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required).

```html
<label for="userPassword">Mot de passe&nbsp;:</label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Rendre le champ obligatoire", 600, 40)}}

### Définir un mode de saisie

Si les règles de syntaxe recommandées (ou requises) pour le mot de passe bénéficient d'une interface de saisie différente du clavier standard, vous pouvez utiliser l'attribut [`inputmode`](/fr/docs/Web/HTML/Reference/Elements/input#inputmode) pour demander une interface spécifique. Le cas d'utilisation le plus évident est celui où le mot de passe doit être numérique (comme un code PIN). Les appareils mobiles dotés de claviers virtuels peuvent, par exemple, afficher un pavé numérique au lieu d'un clavier complet pour faciliter la saisie du mot de passe. Si le code PIN est à usage unique, définissez l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete) sur `off` ou `one-time-code` pour indiquer qu'il ne doit pas être enregistré.

```html
<label for="pin">PIN&nbsp;:</label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Définir un mode de saisie", 600, 40)}}

### Indiquer des critères de longueur

Les attributs [`minlength`](/fr/docs/Web/HTML/Reference/Elements/input#minlength) et [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) peuvent être utilisés afin d'indiquer les tailles minimale et maximale du mot de passe qui doit être saisi. Dans l'exemple qui suit, on repart de l'exemple précédent et on indique que le code PIN doit contenir au moins 4 caractères et au plus 8 caractères. L'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size) est utilisé afin que le contrôle permette bien d'afficher 8 caractères.

```html
<label for="pin">PIN&nbsp;:</label>
<input
  id="pin"
  type="password"
  inputmode="numeric"
  minlength="4"
  maxlength="8"
  size="8" />
```

{{EmbedLiveSample("Indiquer des critères de longueur", 600, 40)}}

### Sélectionner le texte saisi

Comme pour les autres contrôles de saisie de texte, vous pouvez utiliser la méthode {{DOMxRef("HTMLInputElement.select", "select()")}} pour sélectionner tout le texte du champ de mot de passe.

#### HTML

```html
<label for="userPassword">Mot de passe&nbsp;:</label>
<input id="userPassword" type="password" size="12" />
<button id="selectAll">Sélectionner tout</button>
```

#### JavaScript

```js
document.getElementById("selectAll").onclick = () => {
  document.getElementById("userPassword").select();
};
```

#### Résultat

{{EmbedLiveSample("Sélectionner le texte saisi", 600, 40)}}

Vous pouvez également utiliser {{DOMxRef("HTMLInputElement.selectionStart", "selectionStart")}} et {{DOMxRef("HTMLInputElement.selectionEnd", "selectionEnd")}} pour obtenir (ou définir) la plage de caractères actuellement sélectionnée dans le contrôle, et {{DOMxRef("HTMLInputElement.selectionDirection", "selectionDirection")}} pour connaître la direction dans laquelle la sélection a été effectuée (ou sera étendue, selon la plateforme&nbsp;; voir sa documentation pour plus d'explications). Cependant, étant donné que le texte est masqué, l'utilité de ces propriétés reste limitée.

## Validation

Si votre application possède des contraintes sur les caractères utilisables ou sur la structure du mot de passe, il est possible d'utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) afin que le navigateur vérifie que la valeur saisie respecte une expression rationnelle tenant compte de ces contraintes.

Dans cet exemple, il n'est possible de saisir qu'une valeur qui contient entre 4 et 8 caractères qui sont des caractères hexadécimaux.

```html
<label for="hexId">Identifiant Hexa&nbsp;:</label>
<input
  id="hexId"
  type="password"
  pattern="[0-9a-fA-F]{4,8}"
  title="Veuillez saisir un identifiant avec 4 à 8 chiffres hexadécimaux."
  autocomplete="nouveau-mot-de-passe" />
```

{{EmbedLiveSample("Validation", 600, 40)}}

## Exemples

### Saisir un numéro de sécurité sociale américain comme mot de passe

Dans l'exemple qui suit, on construit un formulaire avec un mot de passe qui doit respecter le format d'un [numéro de sécurité sociale américain <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Social_Security_number#Structure). Ces nombres ont la forme `123-45-6789` et il existe différentes règles permettant de restreindre les valeurs pour chacun des groupes.

#### HTML

```html
<label for="ssn">SSN&nbsp;:</label>
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
<label for="ssn">Valeur&nbsp;:</label>
<span id="current"></span>
```

On utilise l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) afin d'imposer certaines contraintes de saisie afin que les chaînes aient le bon format. Cette expression rationnelle ne garantit pas un numéro valide, mais elle permet de s'assurer que la valeur saisie _peut_ être un numéro de sécurité sociale valide. De plus, elle permet d'avoir un séparateur variable entre les trois groupes (une espace, un tiret ou rien).

L'attribut [`inputmode`](/fr/docs/Web/HTML/Reference/Elements/input#inputmode) vaut `number`, ce qui incite les appareils mobiles à utiliser un clavier virtuel uniquement numérique pour la saisie d'un tel champ. Les attributs [`minlength`](/fr/docs/Web/HTML/Reference/Elements/input#minlength) et [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) valent respectivement 9 et 12 et l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) indique que cette valeur est nécessaire pour envoyer le formulaire. Enfin, [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete) vaut `off`, ce qui évite que les gestionnaires de mots de passe ou que les fonctionnalités de restauration de session remplissent automatiquement cette valeur.

#### JavaScript

Le JavaScript affiche le numéro de sécurité sociale saisi à l'écran pour que vous puissiez le voir. Cela va à l'encontre de l'objectif d'un champ de mot de passe, mais cela permet d'expérimenter avec le `pattern`.

```js
const ssn = document.getElementById("ssn");
const current = document.getElementById("current");

ssn.oninput = (event) => {
  current.textContent = ssn.value;
};
```

#### Résultat

{{EmbedLiveSample("Saisir un numéro de sécurité sociale américain comme mot de passe", 600, 60)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères représentant un mot de passe, ou vide
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
      <td><strong>Attributs pris en charges</strong></td>
      <td>
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#inputmode"><code>inputmode</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a> et
         <a href="/fr/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>selectionStart</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code> et <code>value</code>
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
        et
        {{DOMxRef("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
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
