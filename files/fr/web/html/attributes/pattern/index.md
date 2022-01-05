---
title: 'Attribut HTML : pattern'
slug: Web/HTML/Attributes/pattern
tags:
  - Attribute
  - Attributes
  - Constraint Validation API
  - HTML
  - Reference
translation_of: Web/HTML/Attributes/pattern
original_slug: Web/HTML/Attributs/pattern
---
{{HTMLSidebar}}

L'attribut **`pattern`** indique une [expression rationnelle](/fr/docs/Web/JavaScript/Guide/Regular_Expressions) que doit respecter la valeur du contrôle du formulaire. Si une valeur non nulle (qui n'est pas `null`) ne respecte pas les contraintes portées par `pattern`, la propriété [`patternMismatch`](/fr/docs/Web/API/ValidityState/patternMismatch) en lecture seule, rattachée à l'objet [`ValidityState`](/fr/docs/Web/API/ValidityState), vaudra `true`.

L'attribut `pattern` peut être utilisé pour les champs de type [`text`](/fr/docs/Web/HTML/Element/Input/text), [`tel`](/fr/docs/Web/HTML/Element/Input/tel), [`email`](/fr/docs/Web/HTML/Element/Input/email), [`url`](/fr/docs/Web/HTML/Element/Input/url), [`password`](/fr/docs/Web/HTML/Element/Input/password), [`search`](/fr/docs/Web/HTML/Element/Input/search).

La valeur de cet attribut doit être une expression rationnelle JavaScript valide (voir la documentation de [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) et [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions)). Le marqueur (_flag_) `'u'` pour être utilisé afin d'indiquer que l'expression rationnelle est une séquence de codets Unicode et non ASCII. On n'utilisera pas de barres obliques (_slashes_) autour du texte du motif de l'expression rationnelle.

Si le motif n'est pas indiqué ou est invalide, aucune expression rationnelle ne sera appliquée et l'attribut sera ignoré.

> **Note :** On pourra utiliser l'attribut [`title`](/fr/docs/Web/HTML/Element/Input#attr-title) afin de fournir aux utilisateurs des explications quant aux règles à respecter pour que la valeur soit valide. Attention, on ne doit pas utiliser uniquement cet attribut pour fournir ces explications. Voir ci-après quant à l'utilisabilité.

Certains types d'`<input>` qui prennent en charge l'attribut `pattern` (notamment [`email`](/fr/docs/Web/HTML/Element/Input/email) et [`url`](/fr/docs/Web/HTML/Element/Input/url)) ont des contraintes particulières qui doivent également être respectées. Si l'attribut `pattern` n'est pas présent et que la valeur saisie ne respecte pas la syntaxe attendue pour ce type de champ, la propriété en lecture seule [`typeMismatch`](/fr/docs/Web/API/ValidityState/typeMismatch) vaudra `true`.

### Utilisabilité

Lorsqu'on utilise l'attribut `pattern`, il est nécessaire de fournir une description du format attendu avec un texte visible près du contrôle. On pourra en plus utiliser l'attribut [`title`](/fr/docs/Web/HTML/Global_attributes/title) afin de fournir une description. Les agents utilisateurs peuvent utiliser la valeur de `title` lors de la validation des contraintes afin d'indiquer à l'utilisateur que le motif n'est pas respecté. Certains navigateurs pourront afficher une bulle d'information et certains outils d'assistance pourront énoncer le contenu de `title` à voix haute lorsque le focus arrive sur le contrôle. Toutefois, l'utilisation seule de cet attribut ne suffit pas pour fournir une accessibilité suffisante.

### Validation des contraintes

Si la valeur du champ n'est pas la chaîne vide et que la valeur ne respecte pas l'expression rationnelle, on aura une incohérence, portée par [`patternMismatch`](/fr/docs/Web/API/ValidityState/patternMismatch).
L'expression rationnelle indiquée doit correspondre pour toute la chaîne (depuis son début jusqu'à la fin. Autrement dit, c'est comme si on enveloppait l'expression entre `^(?:` et `)$` afin d'indiquer que c'est toute la chaîne qui est considérée (et pas une de ses sous-partie).

## Exemples

### Exemple 1

Avec le fragment de code HTML suivant :

```html
<p>
 <label>Veuillez saisir votre numéro de téléphone au format (123)456-7890
  (<input name="tel1" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit area code" size="2"/>)-
   <input name="tel2" type="tel" pattern="[0-9]{3}" placeholder="###" aria-label="3-digit prefix" size="2"/> -
   <input name="tel3" type="tel" pattern="[0-9]{4}" placeholder="####" aria-label="4-digit number" size="3"/>
 </label>
</p>
```

Ici, nous avons 3 sections pour un numéro de téléphone nord-américain avec une étiquette implicite englobant les trois composants du numéro de téléphone, s'attendant respectivement à 3 chiffres, 3 chiffres et 4 chiffres, comme défini par l'attribut [`pattern`](pattern) défini sur chacun.

Si les valeurs saisies sont trop longues ou trop courtes ou si elles contiennent des caractères qui ne sont pas des chiffres, la valeur de l'attribut `patternMismatch` sera `true`. On aura également l'activation de la pseudo-classe CSS [`:invalid`](/fr/docs/Web/CSS/:invalid).

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Exemple_1", 300, 80)}}

En utilisant les attributs [`minlength`](/fr/docs/Web/HTML/Attributes/minlength) et [`maxlength`](/fr/docs/Web/HTML/Attributes/maxlength) à la place, on aurait eu les propriétés [`validityState.tooLong`](/fr/docs/Web/API/validityState/tooLong) ou [`validityState.tooShort`](/fr/docs/Web/API/validityState/tooShort) qui auraient valu `true`.

### Indiquer un motif

On pourra utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) afin d'indiquer une expression rationnelle qui devra être respectée par la valeur saisie pour que celle-ci soit considérée comme valide (voir [ce guide sur la validation avec les expressions rationnelles](/fr/docs/Learn/Forms/Form_validation#validating_against_a_regular_expression) pour une introduction).

L'exemple qui suit permet de restreindre les valeurs saisies entre 4 et 8 caractères qui doivent également être des lettres minuscules.

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur : </label>
    <input type="text" id="uname" name="name" required size="45"
           pattern="[a-z]{4,8}" title="4 à 8 lettres en minuscules">
    <span class="validity"></span>
    <p>Les noms d'utilisateurs doivent être en minuscules et contenir 4 à 8 caractères.</p>
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

p {
  font-size: 80%;
  color: #999;
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

Cela donne le résultat suivant :

{{EmbedLiveSample('Indiquer_un_motif', '', 130)}}

## Accessibilité

Lorsqu'un contrôle dispose de l'attribut `pattern`, l'attribut `title`, s'il est utilisé, doit décrire le motif souhaité. Attention, reposer uniquement sur l'attribut `title` pour fournir une aide visuelle n'est pas souhaitable, car la plupart des agents utilisateurs n'exposent pas cet attribut de façon accessible. Certains navigateurs affichent une bulle d'information lorsqu'on survole l'élément avec un pointeur mais cela laisse de côté les utilisateurs qui naviguent avec le clavier ou ceux qui utilisent une interface tactile. Il faut donc inclure au moins autrement des informations sur la façon de saisir des valeurs qui respectent les contraintes.

L'attribut `title` est utilisé par certains navigateurs pour écrire les messages d'erreur. Attention toutefois, car les navigateurs affichent également le contenu de cet attribut au survol de l'élément y compris lorsqu'il n'y a pas d'erreur. La formulation doit être choisie avec précaution pour ne pas induire l'utilisateur en erreur.

## Spécifications

| Spécification                                                                                                    | Statut                           |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'forms.html#attr-input-pattern', 'l\'attribut pattern')}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('HTML5.1', 'forms.html#attr-input-pattern', 'l\'attribut pattern')}}         | {{Spec2('HTML5.1')}}     |
| {{SpecName('HTML5 W3C', 'forms.html#attr-input-pattern', 'l\'attribut pattern')}}     | {{Spec2('HTML5 W3C')}}     |

## Compatibilité des navigateurs

{{Compat("html.elements.attributes.pattern")}}

## Voir aussi

- [Les contraintes de validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [La validation des données de formulaires](/fr/docs/Learn/Forms/Form_validation)
- [Les expressions rationnelles (ou expressions régulières / _regexp_)](/fr/docs/Web/JavaScript/Guide/Regular_Expressions)
