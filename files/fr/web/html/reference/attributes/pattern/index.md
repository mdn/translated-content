---
title: "Attribut HTML : pattern"
short-title: pattern
slug: Web/HTML/Reference/Attributes/pattern
original_slug: Web/HTML/Attributes/pattern
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'attribut **`pattern`** indique une [expression rationnelle](/fr/docs/Web/JavaScript/Guide/Regular_expressions) que doit respecter la valeur du contrôle du formulaire. Si une valeur non nulle (qui n'est pas `null`) ne respecte pas les contraintes portées par `pattern`, la propriété {{DOMxRef('ValidityState.patternMismatch', 'patternMismatch')}} en lecture seule, rattachée à l'objet {{DOMxRef('ValidityState')}}, vaudra `true`.

{{InteractiveExample("Démonstration HTML&nbsp;: pattern", "tabbed-shorter")}}

```html interactive-example
<label for="username">Nom d'utilisateur&nbsp;: (3-16 caractères)</label>
<input
  id="username"
  name="username"
  type="text"
  value="Sasha"
  pattern="\w{3,16}"
  required />

<label for="pin">PIN&nbsp;: (4 chiffres)</label>
<input id="pin" name="pin" type="password" pattern="\d{4,4}" required />
```

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

input:valid {
  background-color: palegreen;
}

input:invalid {
  background-color: lightpink;
}
```

## Vue d'ensemble

L'attribut `pattern` peut être utilisé pour les champs de type {{HTMLElement("input/text", "<code>text</code>")}}, {{HTMLElement("input/tel", "<code>tel</code>")}}, {{HTMLElement("input/email", "<code>email</code>")}}, {{HTMLElement("input/url", "<code>url</code>")}}, {{HTMLElement("input/password", "<code>password</code>")}} et {{HTMLElement("input/search", "<code>search</code>")}}.

L'attribut `pattern`, lorsqu'il est spécifié, est une expression rationnelle que l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) du champ doit respecter pour réussir la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Il doit s'agir d'une expression rationnelle JavaScript valide, comme utilisée par le type {{JSxRef("RegExp")}}, et documentée dans notre [guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions).

L'expression rationnelle du motif est compilée avec l'indicateur [`'v'`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classe_de_caractères_en_mode_v). Cela rend l'expression [compatible Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) et modifie la façon dont les classes de caractères sont interprétées. Cela permet l'intersection et la soustraction d'ensembles dans les classes de caractères. En plus de `]` et `\`, les caractères suivants doivent être échappés avec un antislash `\` s'ils sont littéraux&nbsp;: `(`, `)`, `[`, `{`, `}`, `/`, `-`, `|`. Avant mi-2023, l'indicateur `'u'` était utilisé&nbsp;; si vous mettez à jour un ancien code, consultez la référence [`unicodeSets`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets).

L'expression rationnelle du motif doit correspondre à l'intégralité de la valeur du champ, et non à une sous-chaîne — comme si `^(?:` était ajouté au début du motif et `)$` à la fin.

Il ne faut pas entourer le texte du motif de barres obliques. Aucune expression rationnelle n'est appliquée si la valeur de l'attribut est absente, vide ou invalide.

Certains types de champs prenant en charge l'attribut pattern, notamment {{HTMLElement("input/email", "<code>email</code>")}} et {{HTMLElement("input/url", "<code>url</code>")}}, ont des syntaxes de valeur attendues qui doivent être respectées. Si l'attribut pattern n'est pas présent et que la valeur ne correspond pas à la syntaxe attendue pour ce type, la propriété en lecture seule {{DOMxRef('ValidityState.typeMismatch','typeMismatch')}} de l'objet {{DOMxRef('ValidityState')}} vaudra `true`.

### Validation des contraintes

Si la valeur du champ n'est pas la chaîne de caractères vide et qu'elle ne correspond pas entièrement à l'expression rationnelle, une violation de contrainte est signalée par la propriété {{DOMxRef('ValidityState.patternMismatch','patternMismatch')}} de l'objet {{DOMxRef('ValidityState')}}, qui vaudra true.

> [!NOTE]
> Si l'attribut `pattern` est spécifié sans valeur, sa valeur est implicitement la chaîne de caractères vide. Ainsi, toute valeur non vide pour l'attribut value entraînera une violation de contrainte.

### Considérations d'utilisabilité et d'accessibilité

Lorsque vous utilisez un attribut `pattern`, fournissez une description du motif attendu dans un texte visible à proximité du contrôle. Ajoutez également un attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/input#title) qui décrit le motif. Les agents utilisateurs peuvent utiliser le contenu de title lors de la validation des contraintes pour indiquer à l'utilisateur·ice que le motif n'est pas respecté. Certains navigateurs affichent une info-bulle avec le contenu de title, ce qui améliore l'utilisabilité pour les utilisateur·ice·s voyant·e·s. De plus, certaines technologies d'assistance peuvent lire le contenu de title à voix haute lorsque le contrôle reçoit la sélection, mais il ne faut pas s'y fier pour l'accessibilité.

Il est déconseillé de se reposer uniquement sur l'attribut `title` pour l'affichage visuel du texte, car de nombreux agents utilisateurs n'exposent pas cet attribut de manière accessible. Bien que certains navigateurs affichent une info-bulle au survol d'un élément avec un titre, cela exclut les utilisateur·ice·s au clavier ou sur écran tactile. C'est l'une des raisons pour lesquelles il est nécessaire d'inclure des informations expliquant comment remplir le contrôle pour respecter les exigences.

Bien que certains navigateurs utilisent le contenu de `title` pour afficher des messages d'erreur, ils peuvent aussi l'afficher au survol même sans erreur. Il faut donc veiller à ne pas formuler le titre comme si une erreur était survenue.

## Exemples

### Correspondance d'un numéro de téléphone

Avec le fragment de code HTML suivant&nbsp;:

```html
<p>
  <label
    >Veuillez saisir votre numéro de téléphone au format (123)456-7890 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit area code"
      size="2" />)-
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit prefix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-digit number"
      size="3" />
  </label>
</p>
```

Ici, nous avons 3 sections pour un numéro de téléphone nord-américain avec une étiquette implicite englobant les trois composants du numéro de téléphone, s'attendant respectivement à 3 chiffres, 3 chiffres et 4 chiffres, comme défini par l'attribut `pattern` défini sur chacun.

Si les valeurs saisies sont trop longues ou trop courtes ou si elles contiennent des caractères qui ne sont pas des chiffres, la valeur de l'attribut `patternMismatch` sera `true`. On aura également l'activation de la pseudo-classe CSS {{CSSxRef(":invalid")}}.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Correspondance d'un numéro de téléphone", 300, 80)}}

En utilisant les attributs [`minlength`](/fr/docs/Web/HTML/Reference/Attributes/minlength) et [`maxlength`](/fr/docs/Web/HTML/Reference/Attributes/maxlength) à la place, on aurait eu les propriétés {{DOMxRef('validityState.tooLong')}} ou {{DOMxRef('validityState.tooShort')}} qui auraient valu `true`.

### Indiquer un motif

On pourra utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#attr-pattern) afin d'indiquer une expression rationnelle qui devra être respectée par la valeur saisie pour que celle-ci soit considérée comme valide (voir [ce guide sur la validation avec les expressions rationnelles](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation#validation_selon_une_expression_régulière) pour une introduction).

L'exemple qui suit permet de restreindre les valeurs saisies entre 4 et 8 caractères qui doivent également être des lettres minuscules.

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur&nbsp;: </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}"
      title="4 à 8 lettres en minuscules" />
    <span class="validity"></span>
    <p>
      Les noms d'utilisateurs doivent être en minuscules et contenir 4 à 8
      caractères.
    </p>
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
  color: #999999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Cela donne le résultat suivant&nbsp;:

{{EmbedLiveSample('Indiquer un motif', 600, 110) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Contraintes de validation](/fr/docs/Web/HTML/Guides/Constraint_validation)
- [Formulaires&nbsp;: validation des données](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
