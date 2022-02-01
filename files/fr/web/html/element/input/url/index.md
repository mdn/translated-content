---
title: <input type="url">
slug: Web/HTML/Element/Input/url
tags:
  - Formulaire
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/url
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`"url"`** sont employées afin de permettre à un utilisateur de saisir ou d'éditer une URL.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

La valeur saisie est automatiquement validée par le navigateur qui vérifie qu'elle est vide ou formatée correctement avant que le formulaire puisse être envoyé. Les pseudo-classes {{cssxref(":valid")}} et {{cssxref(":invalid")}} sont appliquées auomatiquement selon le cas de figure.

> **Note :** Les navigateurs qui ne prennent pas en charge le type`"url"` utiliseront à la place un élément {{HTMLElement("input/text", "text")}}.

## Valeur

La valeur de l'attribut {{htmlattrxref("value", "input")}} contient une chaîne de caractères ({{domxref("DOMString")}}) dont la valeur est automatiquement vérifiée afin de s'assurer que sa syntaxe est bien celle d'une URL. De façon plus précise, seuls deux formats sont autorisés :

1.  Une chaîne de caractères vide ("") qui indique que l'utilisateur n'a pas saisi de valeur ou que la valeur a été retirée.
2.  Une seule URL bien formée. Cela ne signifie pas nécessairement que l'adresse existe mais qu'elle est formatée correctement. Autrement dit, la chaîne de caractères respecte la forme `"schema://restedelurl"`.

Voir {{anch("Validation")}} pour plus de détails sur le format des URL et leur validation.

## Attributs supplémentaires

En complément des attributs qui fonctionnent pour tous les types d'éléments {{HTMLElement("input")}}, les champs de saisie d'URL prennent en charge les attributs suivants :

| Attribut                           | Description                                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `{{anch("maxlength")}}`     | La longueur maximale de l'URL, exprimée en nombre de caractères UTF-16, afin qu'elle soit considérée comme valide. |
| `{{anch("minlength")}}`     | La longueur minimale de l'URL, exprimée en nombre de caractères UTF-16, afin qu'elle soit considérée comme valide. |
| `{{anch("pattern")}}`         | Une expression rationnelle que doit respecter la valeur afin d'être considérée comme valide.                       |
| `{{anch("placeholder")}}` | Une valeur d'exemple à afficher lorsqu'aucune valeur n'est saisie dans le champ.                                   |
| `{{anch("readonly")}}`     | Un attribut booléen qui indique si le champ est en lecture seule et ne peut être édité par l'utilisateur.          |
| `{{anch("size")}}`             | Le nombre de caractères qui doivent être visibles à l'écran.                                                       |
| `{{anch("spellcheck")}}`     | Une chaîne de caractères qui contrôle si la vérification orthographique doit être activée.                         |

### {{htmlattrdef("maxlength")}}

Le nombre maximal de caractères (en nombre de points de code UTF-16) qui peuvent être saisis dans le champ de l'URL. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, le champ n'aura pas de longueur maximale. La valeur de cet attribut doit être supérieure ou égale à celle de l'attribut `minlength`.

La valeur [ne respectera pas la validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du texte saisi est supérieure à cet attribut.

### {{htmlattrdef("minlength")}}

Le nombre minimal de caractères (en nombre de points de code UTF-16) qui doivent être saisis dans le champ de l'URL. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, le champ n'aura pas de longueur minimale. La valeur de cet attribut doit être inférieure ou égale à celle de l'attribut `maxlength`.

La valeur [ne respectera pas la validation](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du texte saisi est inférieure à cet attribut.

### {{htmlattrdef("pattern")}}

{{page("/fr/docs/Web/HTML/Element/input/text", "pattern-include")}}

Voir [la section ci-après sur le format](#format) pour plus de détails et d'exemples.

{{page("/fr/docs/Web/HTML/Element/input/text", "placeholder", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "size", 0, 1, 2)}}

{{page("/fr/docs/Web/HTML/Element/input/text", "spellcheck", 0, 1, 2)}}

## Attributs non-standard

Il est possible (mais déconseillé) d'utiliser ces attributs non-standard sur les champs de saisie d'URL.

| Attribut                           | Description                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("autocorrect")}}` | Autorise ou non la correction automatique lors de l'édition de ce champ. **Uniquement pris en charge par Safari.**                                                                                                                                                                                                                                                   |
| `{{anch("mozactionhint")}}` | Une chaîne de caractères qui indique le type d'action qui sera effectuée lorsque l'utilisateur appuiera sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ. Cet attribut est destiné à fournir un libellé équivoque pour la touche du clavier virtuel présenté à l'utilisateur. **Uniquement pris en charge par Firefox pour Android.** |

### {{htmlattrdef("autocorrect")}} {{non-standard_inline}}

{{page("/fr/docs/Web/HTML/Element/input/text", "autocorrect-include")}}

### {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}

{{page("/fr/docs/Web/HTML/Element/input/text", "mozactionhint-include")}}

## Utiliser des champs de saisie d'URL

Lorsqu'on crée un champ avec un attribut `type` qui vaut `"url"`, on obtient une validation automatique qui vérifie que le format de la valeur respecte bien celui d'une URL. Cela permet par exemple d'éviter des cas où des utilisateurs laissent une coquille dans la saisie d'une adresse d'un site web.

Toutefois, ce mécanisme ne vérifie pas que l'URL saisie existe bien ou correspond à l'utilisateur. Seule une vérification de format est effectuée.

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur ! En effet, il est tout à fait possible pour un utilisateur de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

### Un simple champ

Actuellement, l'ensemble des navigateurs implémentent ce type de champ comme un champ texte qui dispose de fonctionnalités de validation basiques. Dans sa forme la plus simple, un champ de saisie d'URL ressemblera à :

```html
<input id="monURL" name="monURL" type="url">
```

{{EmbedLiveSample('Un_simple_champ', 600, 40)}}

La valeur du champ est considérée valide lorsqu'elle est vide ou qu'il s'agit d'une URL correctement formatée, autrement elle est invalide. Si on ajoute l'attribut {{htmlattrxref("required", "input")}}, la valeur vide n'est plus valide, il est nécessaire de saisir une valeur.

Ainsi, si l'utilisateur saisit l'URL `http://www.example.com`, voici ce qui sera envoyé vers le serveur : `monURL=http%3A%2F%2Fwww.example.com` (on notera la façon dont certains caractères sont échappés).

### Textes indicatifs _- placeholders_

Il est parfois utile de fournir une indication sur le type de donnée attendu. Sur les pages pour lesquelles la place est restreinte, on ne peut pas se servir de l'étiqutte du champ. On peut alors utiliser un texte indicatif qui apparaît lorsque la valeur du champ est vide et qui est retiré dès que l'utilisateur saisit quelqu chose. Pour cela, on utilise l'attribut `placeholder`.

Dans l'exemple qui suit, le contrôle contient le texte indicatif `"http://www.example.com"`. Dans le résultat, vous pouvez voir comment ce texte disparaît/réapparaît lorsqu'on saisit une valeur dans le contrôle.

```html
<input id="monURL" name="monURL" type="url"
       placeholder="http://www.example.com">
```

{{EmbedLiveSample('Textes_indicatifs_-_placeholders', 600, 40)}}

### Contrôler la taille du champ

Il est possible de contrôler la taille physique de la boîte utilisée pour le contrôle. On peut également contraindre la taille de la valeur saisie dans le champ (entre X et Y caractères par exemple).

#### La taille physique

C'est l'attribut {{htmlattrxref("size", "input")}} qui permet de contrôler la taille de la boîte utilisée. La valeur de cet attribut correspond au nombre de caractères qui seront affichés en même temps dans la boîte. Dans l'exemple suivant, on souhaite que la boîte de saisie mesure 30 caractères de large :

```html
<input id="monURL" name="monURL" type="url"
       size="30">
```

{{EmbedLiveSample('La_taille_physique', 600, 40)}}

#### La longueur de la valeur

L'attribut `size` ne limite pas la valeur qui peut être saisie mais uniquement l'affichage de celle-ci. Pour indiquer une longueur (exprimée en nombre de caractères) minimale d'URL à saisir, on pourra utiliser l'attribut {{htmlattrxref("minlength", "input")}}. De même, l'attribut {{htmlattrxref("maxlength", "input")}} indique la longueur maximale d'une URL qui peut être saisie dans le contrôle.

Dans l'exemple qui suit, on affiche une boîte de saisie qui mesure 30 caractères de large et on souhaite que l'URL soit plus longue que 10 caractères et moins longue que 80.

```html
<input id="monURL" name="monURL" type="url"
       size="30" minlength="10" maxlength="80">
```

{{EmbedLiveSample("La_longueur_de_la_valeur", 600, 40)}}

> **Note :** Ces attributs jouent un rôle lors de la validation. Si la valeur saisie est plus courte que la longueur minimale indiquée ou plus grande que la longueur maximale indiquée, alors elle seera considérée comme invalide. De plus, la plupart des navigateurs ne permettent pas de saisir une valeur plus grande que la longueur maximale indiquée avec `maxlength`.

### Fournir des valeurs par défaut

On peut fournir une valeur par défaut grâce à l'attribut {{htmlattrxref("value", "input")}} :

```html
<input id="monURL" name="monURL" type="url"
       value="http://www.example.com">
```

{{EmbedLiveSample("Fournir_des_valeurs_par_défaut", 600, 40)}}

#### Fournir des suggestions

On peut également fournir une liste d'options parmi lesquelles l'utilisateur peut choisir via l'attribut {{htmlattrxref("list", "input")}}. Cette liste ne limite pas l'utilisateur à ces choix mais permet de choisir certaines URL fréquemment utilisées plus facilement. Cette liste peut également être utilisée par l'attribut {{htmlattrxref("autocomplete", "input")}}. La valeur de l'attribut `list` est un identifiant d'un élément {{HTMLElement("datalist")}} qui contient autant d'éléments {{HTMLElement("option")}} que de valeurs suggérées. La valeur de l'attribut `value` de chacun de ces éléments `<option>` correspondra à la valeur qui sera suggérée dans le champ de saisie.

```html
<input id="monURL" name="monURL" type="url"
       list="defaultURLs">

<datalist id="defaultURLs">
  <option value="http://www.example.com">
  <option value="https://www.example.com">
  <option value="http://www.example.org">
  <option value="https://www.example.org">
</datalist>
```

{{EmbedLiveSample("Fournir_des_suggestions", 600, 40)}}

Avec cet élément {{HTMLElement("datalist")}} et les éléments {{HTMLElement("option")}} associés, le navigateur affichera les valeurs proposées sous la forme d'une liste déroulante (voire sous un autre format). Au fur et à mesure que l'utilisateur saisit dans le champ, la liste se réduit pour ne contenir que les valeurs correspondantes (et ce jusqu'à ce que l'utilisateur saisisse une autre valeur ou sélectionne une valeur parmi la liste).

## Validation

Il existe deux niveaux de validation pour les contrôles de type `"url"`. Tout d'abord, le contrôle natif, toujours présent qui s'asssure que la valeur correspond à une URL bien formée. Ensuite, on peut ajouter des options supplémentaires pour personnaliser le format de l'URL attendue.

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur ! En effet, il est tout à fait possible pour un utilisateur de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

### Validation simple

Les navigateurs qui prennent en charge le type `"url"` fournissent automatiquement un mécanisme de validation pour s'assurer que la valeur saisie correspond à une URL bien formée.

### Rendre le champ URL obligatoire

Comme vu ci-avant, on peut rendre la saisie de l'URL obligatoire avec l'attribut {{htmlattrxref("required", "input")}} :

```html
<form>
  <input id="monURL" name="monURL" type="url" required>
  <button>Envoyer</button>
</form>
```

{{EmbedLiveSample("Rendre_le_champ_URL_obligatoire", 600, 40)}}

Vous pouvez essayer d'envoyer le formulaire précédent sans valeur saisie et voir le résultat obtenu.

### Utiliser un format particulier

S'il faut restreindre l'URL plus fortement, on peut utiliser l'attribut {{htmlattrxref("pattern", "input")}} afin d'indiquer une [expression rationnelle](/fr/docs/Web/JavaScript/Guide/Expressions_régulières) que la valeur saisie doit respecter afin d'être valide.

Prenons comme exemple la construction d'un formulaire de support pour les employés de MaBoîte Inc. Ce formulaire permet d'indiquer à un service une des pages du site interne qui pose problème. Dans l'exemple simplifié, l'utilisateur indique l'URL de la page problématique ainsi qu'un message descriptif. Ici, on souhaite que l'URL saisit ne soit valide que si elle correspond au domaine `maboite`.

Les contrôles de type `"url"` utilisant la validation native pour vérifier que c'est une URL bien formée et une validation spécifique via l'attribut {{htmlattrxref("pattern", "input")}}, on peut implémenter cette contrainte facilement :

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

```html
<form>
  <div>
    <label for="myURL">Veuillez saisir l'adresse de la page problématique:</label>
    <input id="myURL" name="myURL" type="url"
           required pattern=".*\.maboite\..*"
           title="L'URL doit être sur le domaine maboite.">
    <span class="validity"></span>
  </div>
  <div>
    <label for="myComment">Quel est le problème ?</label>
    <input id="myComment" name="myComment" type="text"
           required>
    <span class="validity"></span>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

{{EmbedLiveSample("Utiliser_un_format_particulier", 700, 150)}}

Si on étudie le contrôle, on peut voir qu'on commence par utiliser l'attribut {{htmlattrxref("required", "input")}} afin de rendre le champ obligatoire.

Ensuite, on utilise l'attribut `pattern` avec l'expression rationnelle `".*\.maboite\..*"`. Cet expression rationnelle indique que la chaîne de caractères saisie doit contenir des caractères quelconques suivis d'un point, suivi de "maboite", suivi d'un point, suivi de n'importe quels caractères.

Cette expression rationnelle est loin d'être parfaite mais suffit pour les besoins de cet exemple.

Il est conseillé d'utiliser l'attribut {{htmlattrxref("title")}} quand on utilise l'attribut `pattern`. Dans ce cas, l'attribut `title` doit alors décrire l'expression rationnelle (et l'explication de la contrainte) plutôt que le rôle du champ. En effet, la valeur contenue dans `title` pourrait alors être affichée ou vocalisée comme message d'erreur. Un navigateur pourra ainsi affiche un message : "Le texte saisi ne respecte pas la format souhaité." suivi du texte contenu dans `title`. Si la valeur de `title` est simplement "URL", le message complet obtenu serait "Le texte saisi ne respecte pas la format souhaité. URL" (ce qui n'est pas très parlant).

C'est pourquoi nous avons écrit "L'URL doit être sur le domaine maboite" qui est plus détaillé.

> **Note :** Si vous rencontrez des problèmes avec ces expressions rationnelles et qu'elles ne semblent pas fonctionner correctement, vérifiez la console de votre navigateur. Il est possible que des messages d'erreur y soient affichés et puissent vous aider à diagnostiquer le problème.

## Exemples

En plus des exemples précédents, vous pouvez consulter [l'exemple de validation de format sur GitHub](https://github.com/mdn/learning-area/blob/master/html/forms/url-example/index.html) (et voir [le résultat _live_](https://mdn.github.io/learning-area/html/forms/url-example/)).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente une URL ou une chaîne de caractères vide.
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
        {{htmlattrxref("maxlength", "input")}},
        {{htmlattrxref("minlength", "input")}},
        {{htmlattrxref("pattern", "input")}},
        {{htmlattrxref("placeholder", "input")}},
        {{htmlattrxref("readonly", "input")}}, {{htmlattrxref("required", "input")}}
        et {{htmlattrxref("size", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>list</code>, <code>value</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code>
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
| {{SpecName('HTML WHATWG', 'forms.html#url-state-(type=url)', '&lt;input type="url"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#url-state-typeurl', '&lt;input type="url"&gt;')}}     | {{Spec2('HTML5.1')}}     | Définition initiale. |
| {{SpecName("URL", "#urls", "URL syntax")}}                                                                 | {{Spec2("URL")}}             |                      |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-url")}}

## Voir aussi

- [Guide sur les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("input")}}
- [`<input type="tel">`](/fr/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/fr/docs/Web/HTML/Element/input/email)
