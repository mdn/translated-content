---
title: <input type="url">
slug: Web/HTML/Element/input/url
translation_of: Web/HTML/Element/input/url
browser-compat: html.elements.input.input-url
---
{{HTMLRef("Input_types")}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut **`url`** sont employées afin de permettre à une utilisatrice ou un utilisateur de saisir ou d'éditer une URL.

{{EmbedInteractiveExample("pages/tabbed/input-url.html", "tabbed-shorter")}}

La valeur saisie est automatiquement validée par le navigateur qui vérifie qu'elle est vide ou formatée correctement avant que le formulaire puisse être envoyé. Les pseudo-classes [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid) sont appliquées automatiquement selon le cas de figure.

> **Note :** Les navigateurs qui ne prennent pas en charge le type `url` utiliseront à la place un élément [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text).

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>Une chaîne de caractères (<a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>) qui représente une URL ou qui est vide.</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/Input_event"><code>input</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-maxlength"><code>maxlength</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-minlength"><code>minlength</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-pattern"><code>pattern</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-placeholder"><code>placeholder</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-readonly"><code>readonly</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-required"><code>required</code></a> et <a href="/fr/docs/Web/HTML/Element/Input#attr-size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td>
        <code>list</code>, <code>value</code>, <code>selectionEnd</code>, <code>selectionDirection</code>
      </td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>, <a href="/fr/docs/Web/API/HTMLInputElement/setRangeText"><code>setRangeText()</code></a> et <a href="/fr/docs/Web/API/HTMLInputElement/setSelectionRange"><code>setSelectionRange()</code></a>.
      </td>
    </tr>
  </tbody>
</table>

## Valeur

La valeur de l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) contient une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) dont la valeur est automatiquement vérifiée afin de s'assurer que sa syntaxe est bien celle d'une URL. De façon plus précise, seuls deux formats sont autorisés&nbsp;:

1. Une chaîne de caractères vide (`""`) qui indique que l'utilisatrice ou l'utilisateur n'a pas saisi de valeur ou que la valeur a été retirée.
2. Une seule URL bien formée. Cela ne signifie pas nécessairement que l'adresse existe mais qu'elle est formatée correctement. Autrement dit, la chaîne de caractères respecte la forme `schema://restedelurl`.

Voir [la section sur la validation](#validation) pour plus de détails sur le format des URL et leur validation.

## Attributs supplémentaires

En complément des attributs qui fonctionnent pour tous les types d'éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs de saisie d'URL prennent en charge les attributs suivants.

### `list`

La valeur de cet attribut est l'identifiant ([`id`](/fr/docs/Web/API/Element/id)) d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) situé dans le même document. L'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Element/Input#attr-type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

### `maxlength`

Le nombre maximum de caractères (exprimé en nombre de points de code UTF-16) qu'il est possible de saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de points de code UTF-16. La validation de contrainte est uniquement appliquée lorsque la valeur est modifiée par l'utilisatrice ou l'utilisateur.

### `minlength`

Le nombre minimal de caractères (en nombre de points de code UTF-16) qui doivent être saisis dans le champ de l'URL. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, le champ n'aura pas de longueur minimale. La valeur de cet attribut doit être inférieure ou égale à celle de l'attribut `maxlength`.

La valeur [ne respectera pas la validation](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte saisi est inférieure à cet attribut. Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de points de code UTF-16. La validation de contrainte est uniquement appliquée lorsque la valeur est modifiée par l'utilisatrice ou l'utilisateur.

### `pattern`

L'attribut `pattern`, lorsqu'il est utilisé, est une expression rationnelle qui impose un format à [`value`](/fr/docs/Web/HTML/Element/Input#attr-value), que cette dernière doit respecter afin que le champ soit [valide](/fr/docs/Web/Guide/HTML/Constraint_validation) . Le contenu de `pattern` doit être une expression rationnelle JavaScript valide (voir la documentation sur le type [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) et [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions). Le marqueur `'u'` est utilisé à la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode et non ASCII. Il ne faut pas entourer l'expression de barres obliques.

Si aucune expression rationnelle n'est fournie ou que celle-ci est invalide, aucune contrainte de format ne sera appliquée et cet attribut sera ignoré complètement.

> **Note :** On utilisera l'attribut [`title`](/fr/docs/Web/HTML/Element/Input#attr-title) pour définir le texte que la plupart des navigateurs afficheront comme bulle d'information afin d'expliquer les contraintes imposées par l'expression rationnelle. Il faut également inclure un texte explicatif à proximité du champ.

Voir [la section ci-après sur le format](#utiliser_un_format_particulier) pour plus de détails et d'exemples.

### `readonly`

Un attribut booléen qui, s'il est présent, indique que le champ ne peut pas être édité dans le formulaire. La valeur du champ (portée par l'attribut `value`) peut toutefois être modifiée par du code JavaScript, qui changerait la propriété `value` rattachée à l'interface [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement).

> **Note :** Un champ en lecture seule ne pouvant pas avoir de valeur, l'attribut `required` n'a pas d'effet particulier sur les champs pour lesquels `readonly` est appliqué.

### `size`

L'attribut `size` est une valeur numérique qui indique la largeur idéale du champ, exprimée en nombre de caractères. Sa valeur doit être un nombre supérieur à `0` et la valeur par défaut est `20`. Comme les caractères peuvent avoir une largeur différente entre eux, on ne doit pas s'attendre à ce que cette taille permette exactement de voir les n caractères, le contrôle résultant pourra être plus étroit ou plus large que le nombre indiqué en fonction des caractères saisis et de la police (voir la propriété CSS [`font`](/fr/docs/Web/CSS/font)) utilisée.

Cet attribut _n'impose pas_ de limite sur le nombre de caractères qui peuvent être saisis. Il indique uniquement, de façon approximative, le nombre de caractères visibles au même moment. Pour imposer une contrainte de taille sur la longueur maximale de la valeur saisissable, on pourra utiliser l'attribut [`maxlength`](#maxlength).

### `spellcheck`

`spellcheck` est un attribut universel qui est utilisé afin d'indiquer si la vérification orthographique doit être activée sur un élément. Il peut être utilisé sur n'importe quel contenu éditable. On considère ici les aspects spécifiques de `spellcheck` sur les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input). Les valeurs autorisées pour `spellcheck` sont&nbsp;:

- `false`
  - : La vérification orthographique est désactivée pour l'élément.
- `true`
  - : La vérification orthographique est activée pour l'élément.
- `""` (la chaîne vide) ou aucune valeur
  - : C'est le comportement par défaut de l'élément qui est utilisé pour déterminer si la vérification est active ou non. Cela peut être déduit de la valeur `spellcheck` sur un élément parent ou d'autres facteurs.

Un champ de saisi peut avoir la vérification orthographique activée s'il n'utilise pas l'attribut [`readonly`](#readonly) et qu'il n'est pas désactivé.

La valeur renvoyée par la lecture de `spellcheck` peut ne pas refléter l'état réel de la vérification orthographique pour le contrôle (par exemple si des préférences au sein [de l'agent utilisateur](/fr/docs/Glossary/User_agent) surchargent ce paramètre.

## Attributs non-standard

Il est possible (mais déconseillé) d'utiliser ces attributs non-standard sur les champs de saisie d'URL.

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

## Utiliser des champs de saisie d'URL

Lorsqu'on crée un champ avec un attribut `type` qui vaut `url`, on obtient une validation automatique qui vérifie que le format de la valeur respecte bien celui d'une URL. Cela permet, par exemple, d'éviter des cas où des utilisatrices ou utilisateurs laissent une coquille dans la saisie d'une adresse d'un site web.

Toutefois, ce mécanisme ne vérifie pas que l'URL saisie existe bien. Seule une vérification de format est effectuée.

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur&nbsp;! En effet, il est tout à fait possible pour quelqu'un de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

### Un simple champ

Actuellement, l'ensemble des navigateurs implémentent ce type de champ comme un champ texte qui dispose de fonctionnalités de validation basiques. Dans sa forme la plus simple, un champ de saisie d'URL ressemblera à&nbsp;:

```html
<input id="monURL" name="monURL" type="url">
```

{{EmbedLiveSample('', 600, 40)}}

La valeur du champ est considérée valide lorsqu'elle est vide ou qu'il s'agit d'une URL correctement formatée, autrement elle est invalide. Si on ajoute l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required), la valeur vide n'est plus valide, il est nécessaire de saisir une valeur.

Ainsi, si l'utilisatrice ou l'utilisateur saisit l'URL `http://www.example.com`, voici ce qui sera envoyé vers le serveur&nbsp;: `monURL=http%3A%2F%2Fwww.example.com` (on notera la façon dont certains caractères sont échappés).

### Textes indicatifs (<i lang="en">placeholders</i>)

Il est parfois utile de fournir une indication sur le type de donnée attendu. Sur les pages pour lesquelles la place est restreinte, on ne peut pas se servir de l'étiquette du champ. On peut alors utiliser un texte indicatif qui apparaît lorsque la valeur du champ est vide et qui est retiré dès que l'utilisatrice ou l'utilisateur saisit quelqu chose. Pour cela, on utilise l'attribut `placeholder`.

Dans l'exemple qui suit, le contrôle contient le texte indicatif `http://www.example.com`. Dans le résultat, vous pouvez voir comment ce texte disparaît/réapparaît lorsqu'on saisit une valeur dans le contrôle.

```html
<input id="monURL" name="monURL" type="url"
       placeholder="http://www.example.com">
```

{{EmbedLiveSample('', 600, 40)}}

### Contrôler la taille du champ

Il est possible de contrôler la taille physique de la boîte utilisée pour le contrôle. On peut également contraindre la taille de la valeur saisie dans le champ (entre X et Y caractères par exemple).

#### La taille physique

C'est l'attribut [`size`](/fr/docs/Web/HTML/Element/Input#attr-size) qui permet de contrôler la taille de la boîte utilisée. La valeur de cet attribut correspond au nombre de caractères qui seront affichés en même temps dans la boîte. Dans l'exemple suivant, on souhaite que la boîte de saisie mesure 30 caractères de large&nbsp;:

```html
<input id="monURL" name="monURL" type="url"
       size="30">
```

{{EmbedLiveSample('', 600, 40)}}

#### La longueur de la valeur

L'attribut `size` ne limite pas la valeur qui peut être saisie mais uniquement l'affichage de celle-ci. Pour indiquer une longueur (exprimée en nombre de caractères) minimale d'URL à saisir, on pourra utiliser l'attribut [`minlength`](/fr/docs/Web/HTML/Element/Input#attr-minlength). De même, l'attribut [`maxlength`](/fr/docs/Web/HTML/Element/Input#attr-maxlength) indique la longueur maximale d'une URL qui peut être saisie dans le contrôle.

Dans l'exemple qui suit, on affiche une boîte de saisie qui mesure 30 caractères de large et on souhaite que l'URL soit plus longue que 10 caractères et moins longue que 80.

```html
<input id="monURL" name="monURL" type="url"
       size="30" minlength="10" maxlength="80">
```

{{EmbedLiveSample("", 600, 40)}}

> **Note :** Ces attributs jouent un rôle lors de la validation. Si la valeur saisie est plus courte que la longueur minimale indiquée ou plus grande que la longueur maximale indiquée, alors elle sera considérée comme invalide. De plus, la plupart des navigateurs ne permettent pas de saisir une valeur plus grande que la longueur maximale indiquée avec `maxlength`.

### Fournir des valeurs par défaut

#### Fournir une valeur par défaut avec l'attribut `value`

On peut fournir une valeur par défaut grâce à l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value)&nbsp;:

```html
<input id="monURL" name="monURL" type="url"
       value="http://www.example.com">
```

{{EmbedLiveSample("", 600, 40)}}

#### Fournir des suggestions

On peut également fournir une liste d'options parmi lesquelles la personne saisissant une URL peut choisir via l'attribut [`list`](/fr/docs/Web/HTML/Element/Input#attr-list). Cette liste ne limite pas l'utilisatrice ou l'utilisateur à ces choix mais permet de choisir certaines URL fréquemment utilisées plus facilement. Cette liste peut également être utilisée par l'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/Input#attr-autocomplete). La valeur de l'attribut `list` est un identifiant d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) qui contient autant d'éléments [`<option>`](/fr/docs/Web/HTML/Element/Option) que de valeurs suggérées. La valeur de l'attribut `value` de chacun de ces éléments `<option>` correspondra à la valeur qui sera suggérée dans le champ de saisie.

```html
<input id="monURL" name="monURL" type="url"
       list="defaultURLs">

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/">
  <option value="http://www.google.com/">
  <option value="http://www.microsoft.com/">
  <option value="https://www.mozilla.org/">
  <option value="http://w3.org/">
</datalist>
```

{{EmbedLiveSample("", 600, 40)}}

Avec cet élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) et les éléments [`<option>`](/fr/docs/Web/HTML/Element/Option) associés, le navigateur affichera les valeurs proposées sous la forme d'une liste déroulante (voire sous un autre format). Au fur et à mesure que la personne saisit dans le champ, la liste se réduit pour ne contenir que les valeurs correspondantes (et ce jusqu'à ce que la personne saisisse une autre valeur ou sélectionne une valeur parmi la liste).


#### Utiliser des libellés pour les valeurs suggérées

Il est aussi possible d'inclure des attributs [`label`](/fr/docs/Web/HTML/Element/Option#attr-label) sur un ou plusieurs des éléments `<option>` afin de fournir un libellé textuel. Certains navigateurs n'afficheront que les libellés tandis que d'autres afficheront le libellé et l'URL.

```html
<input id="monURL" name="monURL" type="url"
       list="defaultURLs">

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/" label="MDN Web Docs">
  <option value="http://www.google.com/" label="Google">
  <option value="http://www.microsoft.com/" label="Microsoft">
  <option value="https://www.mozilla.org/" label="Mozilla">
  <option value="http://w3.org/" label="W3C">
</datalist>
```

{{EmbedLiveSample("", 600, 40)}}

## Validation

Il existe deux niveaux de validation pour les contrôles de type `url`. Tout d'abord, le contrôle natif, toujours présent qui s'assure que la valeur correspond à une URL bien formée. Ensuite, on peut ajouter des options supplémentaires pour personnaliser le format de l'URL attendue.

> **Attention :** Il est également important de vérifier le format de la valeur saisie côté serveur&nbsp;! En effet, il est tout à fait possible pour quelqu'un de modifier le code HTML du site ou d'envoyer des données au serveur sans passer par le formulaire. Il est donc nécessaire de contrôler la valeur avant de s'en servir dans la logique de l'application côté serveur afin d'éviter des conséquences malheureuses.

### Validation simple

Les navigateurs qui prennent en charge le type `url` fournissent automatiquement un mécanisme de validation pour s'assurer que la valeur saisie correspond à une URL bien formée.

La syntaxe possible d'une URL est complexe. Elle est définie [par le standard évolutif WHATWG sur les URL](https://url.spec.whatwg.org/) et est décrite de façon plus accessible dans notre article [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn/Common_questions/What_is_a_URL)

### Rendre le champ URL obligatoire

Comme vu ci-avant, on peut rendre la saisie de l'URL obligatoire avec l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required)&nbsp;:

```html
<form>
  <input id="monURL" name="monURL" type="url" required>
  <button>Envoyer</button>
</form>
```

{{EmbedLiveSample("", 600, 40)}}

Vous pouvez essayer d'envoyer le formulaire précédent sans valeur saisie et voir le résultat obtenu.

### Utiliser un format particulier

S'il faut restreindre l'URL plus fortement, on peut utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) afin d'indiquer une [expression rationnelle](/fr/docs/Web/JavaScript/Guide/Regular_Expressions) que la valeur saisie doit respecter afin d'être valide.

Prenons comme exemple la construction d'un formulaire de support pour les employés de MaBoîte Inc. Ce formulaire permet d'indiquer à un service une des pages du site interne qui pose problème. Dans l'exemple simplifié, l'utilisatrice ou l'utilisateur indique l'URL de la page problématique ainsi qu'un message descriptif. Ici, on souhaite que l'URL saisit ne soit valide que si elle correspond au domaine `maboite`.

Les contrôles de type `url` utilisant la validation native pour vérifier que c'est une URL bien formée et une validation spécifique via l'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern), on peut implémenter cette contrainte facilement&nbsp;:

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
    <label for="myURL">Veuillez saisir l'adresse de la page problématique :</label>
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

{{EmbedLiveSample("", 700, 150)}}

Si on étudie le contrôle, on peut voir qu'on commence par utiliser l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required) afin de rendre le champ obligatoire.

Ensuite, on utilise l'attribut `pattern` avec l'expression rationnelle `.*\.maboite\..*`. Cette expression rationnelle indique que la chaîne de caractères saisie doit contenir des caractères quelconques suivis d'un point, suivi de `maboite`, suivi d'un point, suivi de n'importe quels caractères.

Cette expression rationnelle est loin d'être parfaite mais suffit pour les besoins de cet exemple.

Il est conseillé d'utiliser l'attribut [`title`](/fr/docs/Web/HTML/Global_attributes#attr-title) quand on utilise l'attribut `pattern`. Dans ce cas, l'attribut `title` doit alors décrire l'expression rationnelle (et l'explication de la contrainte) plutôt que le rôle du champ. En effet, la valeur contenue dans `title` pourrait alors être affichée ou vocalisée comme message d'erreur. Un navigateur pourra ainsi affiche un message&nbsp;: «&nbsp;Le texte saisi ne respecte pas le format souhaité.&nbsp;» suivi du texte contenu dans `title`. Si la valeur de `title` est simplement `URL`, le message complet obtenu serait «&nbsp;Le texte saisi ne respecte pas le format souhaité. URL&nbsp;» (ce qui n'est pas très parlant).

C'est pourquoi nous avons écrit «&nbsp;L'URL doit être sur le domaine maboite&nbsp;» qui est plus détaillé.

> **Note :** Si vous rencontrez des problèmes avec ces expressions rationnelles et qu'elles ne semblent pas fonctionner correctement, vérifiez la console de votre navigateur. Il est possible que des messages d'erreur y soient affichés et puissent vous aider à diagnostiquer le problème.

## Exemples

En plus des exemples précédents, vous pouvez consulter [l'exemple de validation de format sur GitHub](https://github.com/mdn/learning-area/blob/main/html/forms/url-example/index.html) (et voir [le résultat <i lang="en">live</i>](https://mdn.github.io/learning-area/html/forms/url-example/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur les formulaires HTML](/fr/docs/Learn/Forms)
- [`<input>`](/fr/docs/Web/HTML/Element/Input)
- [`<input type="tel">`](/fr/docs/Web/HTML/Element/input/tel)
- [`<input type="email">`](/fr/docs/Web/HTML/Element/input/email)
- [Compatibilité des propriétés CSS](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
