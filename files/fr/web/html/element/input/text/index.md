---
title: <input type="text">
slug: Web/HTML/Element/Input/text
tags:
  - Formulaires
  - HTML
  - Input
  - Reference
translation_of: Web/HTML/Element/input/text
---
{{HTMLRef}}

Les éléments {{HTMLElement("input")}} dont l'attribut `type` vaut **`"text"`** permettent de créer des champs de saisie avec du texte sur une seule ligne.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-standard")}}

## Valeur

L'attribut {{htmlattrxref("value", "input")}} d'un tel élément contient une chaîne de caractères ({{domxref("DOMString")}}) qui correspond à la valeur contenue dans le champ texte. En JavaScript, cette valeur peut être récupérée avec la propriété JavaScript {{domxref("HTMLInputElement.value","value")}}.

```js
monTextInput.value;
```

Si aucune contrainte de validation n'est ajoutée (cf. {{anch("Validation")}} pour plus d'informations), la valeur peut être n'importe quelle chaîne de caractères voire la chaîne vide ("").

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments {{HTMLElement("input")}}, les champs textuels prennent en charge les attributs suivants :

| Attribut                           | Description                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `{{anch("maxlength")}}`     | Le nombre de caractères maximal qui peut être écrit dans ce champ.                                                                                     |
| `{{anch("minlength")}}`     | Le nombre de caractères minimal qui peut être écrit dans ce champ pour qu'il soit considéré comme valide.                                              |
| `{{anch("pattern")}}`         | Une expression rationnelle à laquelle doit correspondre le texte saisi pour être valide.                                                               |
| `{{anch("placeholder")}}` | Une valeur d'exemple qui sera affichée lorsqu'aucune valeur n'est saisie.                                                                              |
| `{{anch("readonly")}}`     | Un attribut booléen qui indique si le contenu du champ est en lecture seule.                                                                           |
| `{{anch("size")}}`             | Un nombre qui indique le nombre de caractères affichés par le champ.                                                                                   |
| `{{anch("spellcheck")}}`     | Cet attribut contrôle l'activation de la vérification orthographique sur le champ ou si la vérification orthographique par défaut doit être appliquée. |

### {{htmlattrdef("maxlength")}}

Le nombre maximum de caractères (exprimé en nombre de points de code UTF-16) que l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de points de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur.

### {{htmlattrdef("minlength")}}

Le nombre minimal de caractères (exprimé en nombre de points de code UTF-16) que l'utilisateur peut saisir dans le champ. Cette valeur doit êtrer un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieur à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation) si la longueur du texte est inférieure à `minlength` en nombre de points de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur.

### {{htmlattrdef("pattern")}}

L'attribut `pattern` est une expression rationnelle que doit respecter la valeur ({{htmlattrxref("value")}}) du champ afin d'être [valide](/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation). Cette expression rationnelle doit être une expression rationnelle valide pour JavaScript (telle qu'utilisée par {{jsxref("RegExp")}} et telle que documentée dans [ce guide](/fr/docs/Web/JavaScript/Guide/Expressions_régulières)). Le marqueur `'u'` est fourni par le navigateur lors de la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode plutôt que comme des caractères ASCII. Aucune barre oblique (/) ne devrait être utilisée autour du motif.

Si l'expression rationnelle est invalide ou que cet attribut n'est pas défini, l'attribut est ignoré.

> **Note :** L'attribut {{htmlattrxref("title", "input")}} pourra être utilisé afin d'afficher une bulle d'informations qui explique les conditions à respecter. Il est également conseillé d'inclure un texte explicatif à proximité du champ.

Voir [la section sur l'utilisation de cet attribut ci-après](#format) pour plus d'exemples.

### {{htmlattrdef("placeholder")}}

L'attribut `placeholder` est une chaîne de caractères fournissant une courte indication à l'utilisateur quant à l'information attendue dans le champ. Cet attribut devrait être un mot ou une phrase courte qui illustre le type de donnée attendu plutôt qu'un message explicatif. Le texte ne doit pas contenir de saut à la ligne.

Si le contenu du contrôle respecte une directionnalité donnée ({{Glossary("LTR")}} ou {{Glossary("RTL")}}) et que le texte indicatif doit être présenté dans l'autre sens, il est possible  d'utiliser l'algorithme de formatage bidirectionnel Unicode (cf. {{SectionOnPage("/en-US/docs/Web/Localization/Unicode_Bidirectional_Text_Algorithm", "Overriding BiDi using Unicode control characters")}}).

> **Note :** On évitera, tant que faire se peut, d'utiliser l'attribut `placeholder` car il n'est pas sémantiquement très utile pour expliquer le formulaire et car il peut causer certains problèmes avec le contenu. Voir  {{SectionOnPage("/fr/docs/Web/HTML/Element/input", "Libellés et textes indicatifs")}} pour plus d'informations.

### {{htmlattrdef("readonly")}}

Un attribut booléen qui, lorsqu'il est présent, indique que le champ ne peut pas être édité par l'utilisateur. Toutefois, la valeur de l'attribut `value` peut toujours être modifiée via du code JavaScript qui définirait la propriété {{domxref("HTMLInputElement.value")}}.

> **Note :** Un champ en lecture seule pouvant ne pas avoir de valeur, l'attribut `required` n'aura pas d'effet si l'attribut `readonly` est également présent.

### {{htmlattrdef("size")}}

L'attribut `size` est un nombre positif qui indique le nombre de caractères affichés à l'écran et qui définit donc la largeur du champ. La valeur par défaut de cet attribut est 20. Étant donné que la largeur des caractères peut varier cet attribut ne permet de définir une largeur exacte mais approximative.

Cet attribut ne définit pas la limite du nombre de caractères saisissables dans le champ mais uniquement, et approximativement, le nombre de caractères qui peuvent être affichés à l'écran simultanément. Pour fixer une taille maximale sur la valeur du champ, on utilisera plutôt l'attribut `{{anch("maxlength")}}`.

### {{htmlattrdef("spellcheck")}}

`spellcheck` est un attribut universel qui est utilisé afin d'indiquer si la vérification orthographique doit être utilisée pour un élément. Il peut être utilisé pour n'importe quel contenu éditable mais possède certaines spécificités pour les éléments {{HTMLElement("input")}}. Les valeurs autorisées pour cet attribut sont :

- `false`
  - : La vérification orthographique est désactivée pour cet élément.
- `true`
  - : La vérification orthographique est activée pour cet élément.
- `""` (chaîne de caractères vide) ou aucune valeur
  - : La configuration par défaut de l'élément par rapport à la vérification orthographique sera respectée. Cette configuration par défaut peut provenir de la valeur de `spellcheck` pour les éléments parents ou d'autres facteurs.

Un champ de saisie peut avoir la vérification orthographique activée s'il ne possède pas l'attribut {{anch("readonly")}} et qu'il n'est pas désactivé.

La valeur renvoyée par l'attribut `spellcheck` peut ne pas refléter l'état réel de la vérification ortographique si certaines préférences de l'agent utilisateur surchargent le paramétrage par défaut.

## Attributs non-standard

Les attributs non-standard suivant sont disponibles pour les champs textuels mais devraient ne pas être utilisés.

| Attribut                           | Description                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `{{anch("autocorrect")}}` | Une chaîne de caractères qui indique si la correction automatique doit être appliquée à ce champ texte. **Uniquement pris en charge par Safari.**                                                                                                                                                                                                 |
| `{{anch("mozactionhint")}}` | Une chaîne de caractères qui indique le type d'action qui sera effectuée lorsque l'utilisateur appuiera sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ. La valeur de cet attribut est utilisée comme libellé pour la touche adéquate du clavier virtuel. **Uniquement pris en charge par Firefox pour Android.** |

### {{htmlattrdef("autocorrect")}} {{non-standard_inline}}

Un attribut spécifique à Safari, sous la forme d'une chaîne de caractères, qui indique si la correction automatique doit être appliquée lors de l'édition du champ. Les valeurs autorisées pour cet attribut sont :

- `on`
  - : La correction automatique et les remplacements de texte sont appliqués.
- `off`
  - : Toute correction automatique et tout remplacement de texte est désactivé.

### {{htmlattrdef("mozactionhint")}} {{non-standard_inline}}

Un attribut spécifique à Mozilla (et plus particulièrement Firefox pour Android) qui fournit une indication quant au type d'action effectuée lorsque l'utilisateur appuie sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition. Cette information pourra être utilisée afin de choisir le libellé à afficher sur la touche <kbd>Entrée</kbd> du clavier virtuel.

> **Note :** Cet attribut [a été standardisé](https://html.spec.whatwg.org/#input-modalities:-the-enterkeyhint-attribute) sous l'attribut universel {{htmlattrxref("enterkeyhint")}} mais ce dernier n'est pas encore largement implémenté. Pour connaître le statut du changement d'implémentation pour Firefox, voir {{bug(1490661)}}.

Les valeurs autorisées pour cet attribut sont : `go`, `done`, `next`, `search` et `send`. Le navigateur décide alors, selon la valeur, quel libellé utiliser pour la touche Entrée.

## Utiliser `<input type="text">`

Les éléments `<input>` de type `text` sont utilisés pour créer des champs texte sur une seule ligne. Ils doivent être utilisés lorsqu'on souhaite saisir du texte sur une ligne et qu'il n'existe pas de meilleur contrôle disponible pour la valeur (ainsi, s'il s'agit d'une [date](/fr/docs/Web/HTML/Element/input/datetime-local), [d'une URL](/fr/docs/Web/HTML/Element/input/url), [d'une adresse électronique](/fr/docs/Web/HTML/Element/input/email) ou [d'une recherch](/fr/docs/Web/HTML/Element/input/search), on pourra par exemple utiliser des éléments plus pertinents).

### Exemple simple

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur :</label>
    <input type="text" id="uname" name="name">
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

Voici ce qui sera obtenu :

{{EmbedLiveSample("Exemple_simple", 600, 50)}}

Lorsque le formulaire est envoyé, la paire nom/valeur est envoyée au serveur sous la forme `uname=Chris` (si "Chris" était le texte qui avait été saisi avant d'envoyer le formulaire). Il faut veiller à bien avoir un attribut `name` pour l'élément `<input>` car sinon, rien ne sera envoyé.

### Utiliser des textes indicatifs _- placeholders_

Il est possible de fournir un texte indicatif qui sera affiché dans le champ lorsqu'aucune valeur n'a été saisi. Pour cela, on utilise l'attribut {{htmlattrxref("placeholder","input")}}. Par exemple :

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur :</label>
    <input type="text" id="uname" name="name"
           placeholder="Un seul mot, en minuscules">
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

Voici le résultat qui sera obtenu :

{{EmbedLiveSample("Utiliser_des_textes_indicatifs_-_placeholders", 600, 50)}}

Le texte indicatif est généralement affiché dans une couleur plus claire que le texte qui sera saisi par l'utilisateur.

### Contrôler la taille physique du champ

La taille physique du champ de saisie peut être adaptée grâce à l'attribut {{htmlattrxref("size", "input")}}. Sa valeur correspond au nombre de caractères qui seront affichés simultanément. Voici par exemple, un fragment de code HTML où la contrôle de saisie affichera au plus 30 caractères en même temps (on pourra saisir un texte plus long mais toutes les lettres ne seront pas affichées) :

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur : </label>
    <input type="text" id="uname" name="name"
           placeholder="Un seul mot, en minuscules"
           size="30">
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

{{EmbedLiveSample("Contrôler_la_taille_physique_du_champ", 600, 50)}}

## Validation

Les éléments `<input>` de type `text` ne possède pas de mécanisme de validation automatique. En revanche, il est possible d'ajouter certaines contraintes qui seront vérifiées côté client et que nous allons voir ici.

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur ! En effet, il est tout à fait possible pour un utilisateur de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

### Un aparté sur la mise en forme

Les pseudo-classes CSS {{cssxref(":valid")}} et {{cssxref(":invalid")}} sont utiles pour mettre en forme les éléments qui ne respectent pas les contraintes de validation. Dans la suite de cette section, nous utiliserons cette feuille de style afin d'afficher une coche ou une croix après les valeurs valides ou invalides.

```css
div {
  margin-bottom: 10px;
  position: relative;
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

Comme le montrent les sélecteurs utilisés, cette technique s'appuie sur la présence d'un élément {{htmlelement("span")}} placé après le formulaire et qui joue le rôle de réceptacle pour les icônes. Cette méthode de contournement est nécessaire car certains navigateurs n'affichent pas les icônes placées directement sur les éléments de formulaire.

### Rendre la valeur obligatoire

On peut utiliser l'attribut {{htmlattrxref("required","input")}} afin d'indiquer que la valeur doit être remplie avant de pouvoir envoyer le formulaire :

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur : </label>
    <input type="text" id="uname" name="name" required>
    <span class="validity"></span>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

```css hidden
div { margin-bottom: 10px; position: relative; } input + span { padding-right: 30px; } input:invalid+span:after { position: absolute; content: '✖'; padding-left: 5px; } input:valid+span:after { position: absolute; content: '✓'; padding-left: 5px; }
```

Ce qui produira ce résultat :

{{EmbedLiveSample('Rendre_la_valeur_obligatoire', 600, 70)}}

Si vous tentez d'envoyer le formulaire sans avoir saisi de valeur dans le champ texte, le navigateur affichera un message d'erreur.

### Contraindre la longueur du texte saisi

Il est possible d'indiquer la longueur minimale du texte grâce à l'attribut {{htmlattrxref("minlength", "input")}}. De même, on peut utiliser l'attribut {{htmlattrxref("maxlength", "input")}} pour indiquer le nombre maximal de caractères attendus.

Dans l'exemple suivant, pour que le texte soit valide, il faut qu'il soit plus long que 4 caractères et moins long que 8 caractères.

```html
<form>
  <div>
    <label for="uname">Choisir un nom d'utilisateur : </label>
    <input type="text" id="uname" name="name" required size="45"
           placeholder="Le nom d'utilisateur doit mesurer entre 4 et 8 caractères"
           minlength="4" maxlength="8">
    <span class="validity"></span>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

```css hidden
div { margin-bottom: 10px; position: relative; } input + span { padding-right: 30px; } input:invalid+span:after { position: absolute; content: '✖'; padding-left: 5px; } input:valid+span:after { position: absolute; content: '✓'; padding-left: 5px; }
```

Voici le résultat qui est alors obtenu :

{{EmbedLiveSample('Contraindre_la_longueur_du_texte_saisi', 600, 70)}}

Si vous essayez d'envoyer le formulaire avec un nom d'utilisateur plus court (que 4 caractères), le navigateur affichera un message d'erreur. De plus le navigateur empêchera de saisir une valeur plus longue que 8 caractères.

> **Note :** Si on indique `minlength` mais pas `required`, la valeur saisie est considérée comme valide car l'utilisateur peut ne pas saisir de valeur.

### Contraindre un format spécifique - expression rationnelle

L'attribut {{htmlattrxref("pattern","input")}} permet d'indiquer une expression rationnelle que devra respecter la valeur saisie afin d'être valide (cf. [Valider un champ par rapport à une expression rationnelle](/en-US/docs/Learn/HTML/Forms/Form_validation#Validating_against_a_regular_expression) pour une introduction).

Dans l'exemple qui suit, on restreint le format du texte afin que ce soit un texte en minuscules (pour lequel seules les lettres de "a" à "z" sont autorisées) et qui mesure entre 4 et 8 caractères.

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur : </label>
    <input type="text" id="uname" name="name" required size="45"
           pattern="[a-z]{4,8}">
    <span class="validity"></span>
    <p>Un nom d'utilisateur doit être en minuscules sur 4 à 8 caractères.</p>
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

```css
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

Voici le résultat qui sera obtenu :

{{EmbedLiveSample("Contraindre_un_format_spécifique_-_expression_rationnelle", 600, 110)}}

## Exemples

En plus des exemples précédents, vous pouvez consulter les articles [Un premier formulaire en HTML](/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML) et [Comment organiser un formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Valeur")}}</strong></td>
      <td>
        Une chaîne de caractères ({{domxref("DOMString")}}) qui
        représente la valeur contenue dans le champ texte.
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
        {{htmlattrxref("minlength", "input")}}, {{htmlattrxref("pattern", "input")}}, {{htmlattrxref("placeholder", "input")}}, {{htmlattrxref("required", "input")}}, {{htmlattrxref("readonly", "input")}},
        {{htmlattrxref("size", "input")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                                                        | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('HTML WHATWG', 'input.html#text-(type=text)-state-and-search-state-(type=search)', '&lt;input type="text"&gt;')}} | {{Spec2('HTML WHATWG')}} | Définition initiale. |
| {{SpecName('HTML5.1', 'sec-forms.html#text-typetext-state-and-search-state-typesearch', '&lt;input type="text"&gt;')}}         | {{Spec2('HTML5.1')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("html.elements.input.input-text")}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires)
- {{HTMLElement("input")}} ainsi que l'interface DOM {{domxref("HTMLInputElement")}} qui est implémentée par cet élément.
- [`<input type="search">`](/fr/docs/Web/HTML/Element/input/search)
- {{HTMLElement("textarea")}} : un élément qui permet de saisir du texte sur plusieurs lignes
