---
title: <input type="password">
slug: Web/HTML/Element/Input/password
tags:
  - Formulaires
  - HTML
  - Input
  - Reference
  - Web
translation_of: Web/HTML/Element/input/password
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} de type **`"password"`** permettent à utilisateur de saisir un mot de passe sans que celui-ci ne soit lisible à l'écran. Un tel élément se présente comme un contrôle de saisie de texte sur une ligne et dans lequel chaque caractère est remplacé par un symbole (un astérisque ("\*") ou un point ("•")) afin que le texte saisi ne puisse être lu. Le caractère utilisé pour obfusquer dépend de l'agent utilisateur (du navigateur) et du système d'exploitation utilisé.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

La façon dont le texte saisi est traité dépend du navigateur utilisé. Sur les appareils mobiles, par exemple, le caractère tapé est souvent laissé affiché un court instant afin que l'utilisateur puisse contrôler que c'est bien le bon caractère. Ainsi, même si le clavier est petit et viruel, on peut éviter de faire trop d'erreurs.

> **Note :** les différents formulaires qui permettent d'envoyer des données sensibles (tels que des mots de passe) doivent être servis sur HTTPS. Firefox, Chrome et les autres navigateurs implémentent désormais différents mécanismes afin d'avertir l'utilisateur lorsqu'il saisit un mot de passe sur une connexion HTTP (cf. l'article [mots de passe non sécurisés](/fr/docs/Web/Security/Insecure_passwords) pour Firefox).

## Valeur

La valeur de l'attribut {{htmlattrxref("value", "input")}} d'un tel élément contient une chaîne de caractères ({{domxref("DOMString")}}) dont la valeur est le texte qui est en cours de saisie dans le contrôle. Si l'utilisateur n'a pas encore saisi d'information, la valeur est une chaîne vide. Si l'attribut booléen {{htmlattrxref("required")}} est utilisé, le mot de passe doit contenir une valeur non vide afin que le formulaire puisse être envoyé.

Si l'attribut {{htmlattrxref("pattern", "input")}} est indiqué, le contenu du contrôle doit respecter l'expression rationnelle indiquée par l'attribut. Pour plus d'informations, voir la section {{anch("Validation")}} ci-après.

> **Note :** Il n'est pas possible d'utiliser les caractères de fin de ligne (_Line Feed_) (code U+000A) et de retour chariot (_Carriage Return_) (code U+000D) dans la valeur d'un champ `"password"`. Lorsqu'on saisit la valeur, ces caractères sont retirés si besoin.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs pour les mots de passe prennent en charge les attributs suivants :

| Attribut                           | Description                                                                                               |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `{{anch("maxlength")}}`     | Le nombre de caractères maximal qui peut être écrit dans ce champ.                                        |
| `{{anch("minlength")}}`     | Le nombre de caractères minimal qui peut être écrit dans ce champ pour qu'il soit considéré comme valide. |
| `{{anch("pattern")}}`         | Une expression rationnelle à laquelle doit correspondre le texte saisi pour être valide.                  |
| `{{anch("placeholder")}}` | Une valeur d'exemple qui sera affichée lorsqu'aucune valeur n'est saisie.                                 |
| `{{anch("readonly")}}`     | Un attribut booléen qui indique si le contenu du champ est en lecture seule.                              |
| `{{anch("size")}}`             | Un nombre qui indique le nombre de caractères affichés par le champ.                                      |

### {{htmlattrdef("maxlength")}}

Le nombre maximum de caractères (exprimé en nombre d'unité de code UTF-16) que l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre d'unité de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur.

### {{htmlattrdef("minlength")}}

Le nombre minimal de caractères (exprimé en nombre d'unité de code UTF-16) que l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieur à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du texte est inférieure à `minlength` en nombre d'unité de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur.

### {{htmlattrdef("pattern")}}

{{page("/fr/docs/Web/HTML/Element/input/text", "pattern-include")}}

L'utilisation d'un motif pour les mots de passe est fortement recommandée. Elle permet de s'assurer que les mots de passe saisis respectent des critères de complexité suffisants pour être robustes. Voir la section {{anch("Validation")}} ci-après pour plus de détails et d'exemples.

{{page("/fr/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

### {{htmlattrdef("readonly")}}

Un attribut booléen qui, lorsqu'il est présent, indique que le champ ne peut pas être édité par l'utilisateur. Toutefois, la valeur de l'attribut `value` peut toujours être modifiée via du code JavaScript qui définirait la propriété {{domxref("HTMLInputElement.value")}}.

> **Note :** Un champ en lecture seule pouvant ne pas avoir de valeur, l'attribut `required` n'aura pas d'effet si l'attribut `readonly` est également présent.

{{page("/fr/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

## Utiliser les contrôles de saisie de mot de passe

Les champs destinés à la saisie des mots de passe fonctionnent comme les champs texte mais masquent le texte saisi pour que celui-ci ne puisse pas être lu sur l'écran.

### Un contrôle basique

Voici un exemple simple illustrant un contrôle de saisie d'un mot de passe qui utilise un élément {{HTMLElement("label")}} afin d'indiquer le rôle du champ.

```html
<label for="userPassword">Mot de passe :</label>
<input id="userPassword" type="password">
```

{{EmbedLiveSample("Un_contrôle_basique", 600, 40)}}

### Paramétrer l'autocomplétion

Afin de permettre au gestionnaire de mots de passe de saisir automatiquement le mot de passe, on pourra utiliser l'attribut {{htmlattrxref("autocomplete", "input")}}. Pour les mots de passe, celui-ci aura l'une des valeurs suivantes :

- `on`
  - : Cette valeur permet au navigateur ou à un gestionnaire de mot de passe de remplir automatiquement le champ. Cette valeur n'est pas aussi informatique que `"current-password"` or `"new-password"`.
- `off`
  - : Cette valeur n'autorise pas le navigateur ou le gestionnaire de mot de passe à remplir le champ automatiquement.
- `current-password`
  - : Cette valeur indique au navigateur ou au gestionnaire de mots de passe qu'il faut utiliser le mot de passe actuel pour le site. Cette valeur est plus précise que la valeur `"on"` car elle indique qu'il faut utiliser le mot de passe courant plutôt qu'un nouveau mot de passe.
- `new-password`
  - : Cette valeur indique au navigateur ou au gestionnaire de mots de passe qu'il faut générer un nouveau mot de passe et utiliser ce dernier pour remplir le champ. La génération automatique du mot de passe peut alors utiliser les autres attributs de l'élément. Cette valeur peut également être indiquée pour que le navigateur indique cette information d'un façon ou d'une autre.

```html
<label for="userPassword">Mot de passe :</label>
<input id="userPassword" type="password" autocomplete="current-password">
```

{{EmbedLiveSample("Paramétrer_l'autocomplétion", 600, 40)}}

### Rendre le champ obligatoire

Pour indiquer à l'utilisateur que le mot de passe est obligatoire, on pourra utiliser l'attribut {{htmlattrxref("required", "input")}}.

```html
<label for="userPassword">Mot de passe :</label>
<input id="userPassword" type="password" required>
```

{{EmbedLiveSample("Rendre_le_champ_obligatoire", 600, 40)}}

### Définir un mode de saisie

Si votre application utilise un autre mode de saisie que le mode par défaut, l'attribut {{htmlattrxref("inputmode", "input")}} peut être employé pour indiquer le mode à utiliser. Le cas le plus fréquent est celui où on utilise une valeur numérique pour un mot de passe (par exemple pour un code PIN). Si ce code ne doit être utilisé qu'une seule fois, on pourra paramétrer l'attribut {{htmlattrxref("autocomplete", "input")}} avec la valeur `off`. Les appareils mobiles pourront tirer parti de la valeur de cet attribut et afficher un autre clavier pour faciliter la saisie.

```html
<label for="pin">PIN :</label>
<input id="pin" type="password" inputmode="numeric">
```

{{EmbedLiveSample("Définir_un_mode_de_saisie", 600, 40)}}

### Indiquer des critères de longueur

Les attributs {{htmlattrxref("minlength", "input")}} et {{htmlattrxref("maxlength", "input")}} peuvent être utilisés afin d'indiquer les tailles minimale et maximale du mot de passe qui doit être saisi. Dans l'exemple qui suit, on repart de l'exemple précédent et on indique que le code PIN doit contenir au moins 4 caractères et au plus 8 caractères. L'attribut {{htmlattrxref("size", "input")}} est utilisé afin que le contrôle permette bien d'afficher 8 caractères.

```html
<label for="pin">PIN :</label>
<input id="pin" type="password" inputmode="numeric" minlength="4"
       maxlength="8" size="8">
```

{{EmbedLiveSample("Indiquer_des_critères_de_longueur", 600, 40)}}

### Sélectionner le texte saisi

Il est possible d'utiliser la méthode {{domxref("HTMLInputElement.select", "select()")}} pour sélectionner le texte saisi dans le contrôle.

#### HTML

```html
<label for="userPassword">Mot de passe :</label>
<input id="userPassword" type="password" size="12">
<button id="selectAll">Sélectionner tout</button>
```

#### JavaScript

```js
document.getElementById("selectAll").onclick = function(event) {
  document.getElementById("userPassword").select();
}
```

#### Résultat

{{EmbedLiveSample("Sélectionner_le_texte_saisi", 600, 40)}}

On peut également utiliser {{domxref("HTMLInputElement.selectionStart", "selectionStart")}} et {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}} afin d'obtenir (ou de régler) l'intervalle de caractères sélectionnés. {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}} permet de connaître la direction dans laquelle la sélection a été effectuée.

## Validation

Si votre application possède des contraintes sur les caractères utilisables ou sur la structure du mot de passe, il est possible d'utiliser l'attribut {{htmlattrxref("pattern", "input")}} afin que le navigateur vérifie que la valeur saisie respecte une expression rationnelle tenant compte de ces contraintes.

Dans cet exemple, il n'est possible de saisir qu'une valeur qui contient entre 4 et 8 caractères qui sont des caractères hexadécimaux.

```html
<label for="hexId">Identifiant Hexa :</label>
<input id="hexId" type="password" pattern="[0-9a-fA-F]{4,8}"
       title="Veuillez saisir un identifiant avec 4 à 8 chiffres hexadécimaux."
       autocomplete="nouveau-mot-de-passe">
```

{{EmbedLiveSample("Validation", 600, 40)}}

## Désactiver le champ

L'attribut booléen {{htmlattrdef("disabled")}} indique que le champ ne peut pas être utilisé de façon interactive. Les données des champs désactivés ne seront pas envoyées avec le formulaire.

## Exemples

### Saisir un numéro de sécurité sociale américain comme mot de passe

Dans l'exemple qui suit, on construit un formulaire avec un mot de passe qui doit respecter le format d'un [numéro de sécurité sociale américain](https://en.wikipedia.org/wiki/Social_Security_number#Structure). Ces nombres ont la forme "123-45-6789" et il existe différentes règles permettant de restreindre les valeurs pour chacun des groupes.

#### HTML

```html
<label for="ssn">SSN :</label>
<input type="password" id="ssn" inputmode="number" minlength="9" maxlength="12"
    pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
    required autocomplete="off">
<br>
<label for="ssn">Valeur :</label>
<span id="current"></span>
```

On n'utilise l'attribut {{htmlattrxref("pattern", "input")}} afin d'imposer certaines contraintes de saisie afin que les chaînes aient le bon format. Cette expression rationnelle ne garantit pas un numéro valide mais elle permet de s'assurer que la valeur saisie _peut_ être un numéro de sécurité sociale valide. De plus, elle permet d'avoir un séparateur variable entre les trois groupes (un espace, un tiret ou rien).

L'attribut {{htmlattrxref("inputmode", "input")}} vaut `number`, ce qui incite les appareils mobiles à utiliser un clavier virtuel uniquement numérique pour la saisie d'un tel champ. Les attributs {{htmlattrxref("minlength", "input")}} et {{htmlattrxref("maxlength", "input")}} valent respectivement 9 et 12 et l'attribut {{htmlattrxref("required", "input")}} indique que cette valeur est nécessaire pour envoyer le formulaire. Enfin, {{htmlattrxref("autocomplete", "input")}} vaut `off`, ce qui évite que les gestionnaires de mots de passe ou que les fonctionnalités de restoration de session remplissent automatiquement cette valeur.

#### Résultat

{{EmbedLiveSample("Saisir_un_numéro_de_sécurité_sociale_américain_comme_mot_de_passe", 600, 60)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères qui représente un mot de passe (la chaîne peut
        éventuellement être vide).
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
        {{htmlattrxref("inputmode", "input")}},
        {{htmlattrxref("maxlength", "input")}},
        {{htmlattrxref("minlength", "input")}},
        {{htmlattrxref("pattern", "input")}},
        {{htmlattrxref("placeholder", "input")}},
        {{htmlattrxref("readonly", "input")}},
        {{htmlattrxref("required", "input")}} et
        {{htmlattrxref("size", "input")}}
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
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
        et 
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                                | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#password-state-(type=password)', '&lt;input type="password"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#password-state-typepassword', '&lt;input type="password"&gt;')}}     | {{Spec2('HTML5.1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-password")}}
