---
title: <input type="text">
slug: Web/HTML/Element/Input/text
translation_of: Web/HTML/Element/input/text
browser-compat: html.elements.input.input-text
---
{{HTMLRef("Input_types")}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut **`text`** permettent de créer des champs de saisie pour du texte sur une seule ligne.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Valeur</strong></td>
      <td>
        Une chaîne de caractères (<a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>) qui représente la valeur contenue dans le champ texte.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et
        <a href="/fr/docs/Web/API/HTMLElement/input_event"><code>input</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs communs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>,
        <a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Element/Input#attr-maxlength"><code>maxlength</code></a>,
        <a href="/fr/docs/Web/HTML/Element/Input#attr-minlength"><code>minlength</code></a>,
        <a href="/fr/docs/Web/HTML/Element/Input#attr-pattern"><code>pattern</code></a>,
        <a href="/fr/docs/Web/HTML/Element/Input#attr-placeholder"><code>placeholder</code></a>,
        <a href="/fr/docs/Web/HTML/Element/Input#attr-readonly"><code>readonly</code></a>,
        <a href="/fr/docs/Web/HTML/Element/Input#attr-required"><code>required</code></a> et
        <a href="/fr/docs/Web/HTML/Element/Input#attr-size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>, <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>,
        <a href="/fr/docs/Web/API/HTMLInputElement/setRangeText"><code>setRangeText()</code></a>
        et
        <a href="/fr/docs/Web/API/HTMLInputElement/setSelectionRange"><code>setSelectionRange()</code></a>.
      </td>
    </tr>
  </tbody>
</table>

## Valeur

L'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) d'un tel élément contient une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) qui correspond à la valeur contenue dans le champ texte. En JavaScript, cette valeur peut être récupérée avec la propriété `value` rattachée à l'interface [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement).

```js
let monTexte = leTexteSaisi.value;
```

Si aucune contrainte de validation n'est ajoutée (cf. la section [Validation](#validation) pour plus d'informations), la valeur peut être n'importe quelle chaîne de caractères voire la chaîne vide (`""`).

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs textuels prennent en charge les attributs suivants&nbsp;:

### `list`

La valeur de cet attribut est l'identifiant d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) situé dans le même document. L'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) fournit la liste de valeurs prédéfinies à suggérer à l'utilisatrice ou à l'utilisateur. Toute valeur de la liste qui n'est pas compatible avec ce type de champ n'est pas incluse dans les options suggérées. Les valeurs fournies sont des suggestions et pas des valeurs imposées&nbsp;: il reste possible de sélectionner des valeurs en dehors de cette liste.

### `maxlength`

Le nombre maximum de caractères (exprimé en nombre de points de code UTF-16) qu'on peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de points de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisatrice ou l'utilisateur.

### `minlength`

Le nombre minimal de caractères (exprimé en nombre de points de code UTF-16) qu'on peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieure à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte est inférieure à `minlength` en nombre de points de code UTF-16. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisatrice ou l'utilisateur.

### `pattern`

L'attribut `pattern` est une expression rationnelle que doit respecter la valeur ([`value`](/fr/docs/Web/HTML/Element/Input#attr-value)) du champ afin d'être [valide](/fr/docs/Web/Guide/HTML/Constraint_validation). Cette expression rationnelle doit être une expression rationnelle valide pour JavaScript (telle qu'utilisée par [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) et telle que documentée dans [ce guide](/fr/docs/Web/JavaScript/Guide/Regular_Expressions)). Le marqueur `'u'` est fourni par le navigateur lors de la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode plutôt que comme des caractères ASCII. Aucune barre oblique (`/`) ne devrait être utilisée autour du motif.

Si l'expression rationnelle est invalide ou que cet attribut n'est pas défini, l'attribut est ignoré.

> **Note :** L'attribut [`title`](/fr/docs/Web/HTML/Element/Input#attr-title) pourra être utilisé afin d'afficher une bulle d'informations qui explique les conditions à respecter. Il est également conseillé d'inclure un texte explicatif à proximité du champ.

Voir [la section sur l'utilisation d'un motif de validation](#utiliser_un_motif_de_validation) pour plus de détails et un exemple.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères fournissant une courte indication à l'utilisatrice ou l'utilisateur quant à l'information attendue dans le champ. Cet attribut devrait être un mot ou une phrase courte qui illustre le type de donnée attendu plutôt qu'un message explicatif. Le texte ne doit pas contenir de saut à la ligne.

Si le contenu du contrôle respecte une directionnalité donnée ([LTR](/fr/docs/Glossary/ltr) ou [RTL](/fr/docs/Glossary/rtl)) et que le texte indicatif doit être présenté dans l'autre sens, il est possible d'utiliser l'algorithme de formatage bidirectionnel Unicode — voir [Comment utiliser les contrôles Unicode pour le texte bidirectionnel (en anglais)](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus d'informations.

> **Note :** On évitera, tant que faire se peut, d'utiliser l'attribut `placeholder`, car il n'est pas sémantiquement très utile pour expliquer le formulaire, et car il peut causer certains problèmes avec le contenu. Voir la section [Utilisation de libellés](/fr/docs/Web/HTML/Element/Input#utilisation_de_libellés) de [la page sur l'élément `<input>`](/fr/docs/Web/HTML/Element/Input) pour plus d'informations.

### `readonly`

Un attribut booléen qui, lorsqu'il est présent, indique que le champ ne peut pas être édité par l'utilisatrice ou l'utilisateur. Toutefois, la valeur de l'attribut `value` peut toujours être modifiée via du code JavaScript qui définirait la propriété `value` rattachée à l'interface [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement).

> **Note :** Un champ en lecture seule ne pouvant pas avoir de valeur, l'attribut `required` n'aura pas d'effet si l'attribut `readonly` est également présent.

### `size`

L'attribut `size` est un nombre positif qui indique le nombre de caractères affichés à l'écran et qui définit donc la largeur du champ. La valeur par défaut de cet attribut est 20. Étant donné que la largeur des caractères peut varier cet attribut ne permet de définir une largeur exacte mais approximative — le champ affiché peut être plus étroit ou plus large que la taille (`size`) spécifiée en fonction des caractères saisis et des paramètres de police ([`font`](/fr/docs/Web/CSS/font)) utilisés.

Cet attribut *ne* définit *pas* la limite du nombre de caractères saisissables dans le champ mais uniquement, et approximativement, le nombre de caractères qui peuvent être affichés à l'écran simultanément. Pour fixer une taille maximale sur la valeur du champ, on utilisera plutôt l'attribut [`maxlength`](#maxlength).

### `spellcheck`

`spellcheck` est un attribut universel qui est utilisé afin d'indiquer si la vérification orthographique doit être utilisée pour un élément. Il peut être utilisé pour n'importe quel contenu éditable mais possède certaines spécificités pour les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input). Les valeurs autorisées pour cet attribut sont&nbsp;:

- `false`
  - : La vérification orthographique est désactivée pour cet élément.
- `true`
  - : La vérification orthographique est activée pour cet élément.
- `""` (chaîne de caractères vide) ou aucune valeur
  - : La configuration par défaut de l'élément par rapport à la vérification orthographique sera respectée. Cette configuration par défaut peut provenir de la valeur de `spellcheck` pour les éléments parents ou d'autres facteurs.

Un champ de saisie peut avoir la vérification orthographique activée s'il ne possède pas l'attribut [`readonly`](#readonly) et qu'il n'est pas désactivé.

La valeur renvoyée par l'attribut `spellcheck` peut ne pas refléter l'état réel de la vérification orthographique si certaines préférences de [l'agent utilisateur](/fr/docs/Glossary/User_agent) surchargent le paramétrage par défaut.

## Attributs non-standard

Les attributs non-standard suivants sont disponibles dans certains navigateurs. Toutefois, en règle générale, vous devriez éviter de les utiliser à moins qu'il n'y ait pas moyen de faire autrement.

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

## Utiliser `<input type="text">`

Les éléments `<input>` de type `text` sont utilisés pour créer des champs texte sur une seule ligne. Ils doivent être utilisés lorsqu'on souhaite saisir du texte sur une ligne et qu'il n'existe pas de meilleur contrôle disponible pour la valeur (ainsi, s'il s'agit d'une [date](/fr/docs/Web/HTML/Element/input/datetime-local), [d'une URL](/fr/docs/Web/HTML/Element/input/url), [d'une adresse électronique](/fr/docs/Web/HTML/Element/input/email) ou [d'une recherche](/fr/docs/Web/HTML/Element/input/search), on pourra utiliser des éléments plus pertinents).

### Exemple simple

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur : </label>
    <input type="text" id="uname" name="name">
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

Voici ce qui sera obtenu&nbsp;:

{{EmbedLiveSample("", 600, 90)}}

Lorsque le formulaire est envoyé, la paire nom/valeur est envoyée au serveur sous la forme `uname=Chris` (si «&nbsp;Chris&nbsp;» était le texte qui avait été saisi avant d'envoyer le formulaire). Il faut veiller à bien avoir un attribut `name` pour l'élément `<input>` car sinon, rien ne sera envoyé.

### Utiliser des textes indicatifs (<i lang="en">placeholders</i>)

Il est possible de fournir un texte indicatif qui sera affiché dans le champ lorsqu'aucune valeur n'a été saisi. Pour cela, on utilise l'attribut [`placeholder`](/fr/docs/Web/HTML/Element/Input#attr-placeholder). Par exemple&nbsp;:

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

Voici le résultat qui sera obtenu&nbsp;:

{{EmbedLiveSample("", 600, 90)}}

Le texte indicatif est généralement affiché dans une couleur plus claire que la couleur de premier plan de l'élément. Il s'efface dès qu'une utilisatrice ou un utilisateur commence à écrire dans le champ texte, ou lorsqu'une valeur est définie pour l'attribut `value` du champ.

### Contrôler la taille physique du champ

La taille physique du champ de saisie peut être adaptée grâce à l'attribut [`size`](/fr/docs/Web/HTML/Element/Input#attr-size). Sa valeur correspond au nombre de caractères qui seront affichés simultanément. Voici par exemple, un fragment de code HTML où la contrôle de saisie affichera au plus 30 caractères en même temps (on pourra saisir un texte plus long mais toutes les lettres ne seront pas affichées)&nbsp;:

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

{{EmbedLiveSample("", 600, 90)}}

## Validation

Les éléments `<input>` de type `text` ne possède pas de mécanisme de validation automatique. En revanche, il est possible d'ajouter certaines contraintes qui seront vérifiées côté client et que nous allons voir ici.

> **Note :** La validation des données de formulaire HTML *ne doit pas* remplacer des scripts de vérification côté serveur. En effet, il est très facile à modifier le code HTML du site pour outrepasser ou même désactiver les mécanismes de validation. Il est également possible d'envoyer des données directement au serveur sans passer par le formulaire. Si votre serveur ne valide pas les données reçues, des données potentiellement mal formatées (ou trop abondantes, du mauvais type et ainsi de suite) pourraient causer des dommages à votre base de données.

### Un aparté sur la mise en forme

Les pseudo-classes CSS [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid) sont utiles pour mettre en forme les éléments qui ne respectent pas les contraintes de validation. Dans la suite de cette section, nous utiliserons cette feuille de style afin d'afficher une coche ou une croix après les valeurs valides ou invalides.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid + span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

Comme le montrent les sélecteurs utilisés, cette technique s'appuie sur la présence d'un élément [`<span>`](/fr/docs/Web/HTML/Element/span) placé après le formulaire et qui joue le rôle de réceptacle pour les icônes. Cette méthode de contournement est nécessaire car certains navigateurs n'affichent pas les icônes placées directement sur les éléments de formulaire.

### Rendre un champ obligatoire

On peut utiliser l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required) afin d'indiquer que le champ doit être rempli avant de pouvoir envoyer le formulaire&nbsp;:

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
div { 
  margin-bottom: 10px;
  position: relative;
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

Ce qui produira ce résultat&nbsp;:

{{EmbedLiveSample('', 600, 100)}}

Si vous tentez d'envoyer le formulaire sans avoir saisi de valeur dans le champ texte, le navigateur affichera un message d'erreur.

### Contraindre la longueur du texte saisi

Il est possible d'indiquer la longueur minimale du texte grâce à l'attribut [`minlength`](/fr/docs/Web/HTML/Element/Input#attr-minlength). De même, on peut utiliser l'attribut [`maxlength`](/fr/docs/Web/HTML/Element/Input#attr-maxlength) pour indiquer le nombre maximal de caractères attendus.

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
div {
  margin-bottom: 10px;
  position: relative;
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

Voici le résultat qui est alors obtenu&nbsp;:

{{EmbedLiveSample('', 600, 100)}}

Si vous essayez d'envoyer le formulaire avec un nom d'utilisateur plus court (que 4 caractères), le navigateur affichera un message d'erreur. De plus le navigateur empêchera de saisir une valeur plus longue que 8 caractères.

> **Note :** Si on indique `minlength` mais pas `required`, la valeur saisie est considérée comme valide car l'utilisatrice ou l'utilisateur peut ne pas saisir de valeur.

### Utiliser un motif de validation

L'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) permet d'indiquer une expression rationnelle que doit respecter la valeur saisie afin d'être valide (voir [Validation selon une expression régulière](/fr/docs/Learn/Forms/Form_validation#validation_selon_une_expression_régulière) pour une introduction à la validation des données avec les expressions rationnelles).

Dans l'exemple qui suit, on restreint le format du texte afin que ce soit un texte en minuscules (pour lequel seules les lettres de `a` à `z` sont autorisées) et qui mesure entre 4 et 8 caractères.

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

Voici le résultat qui sera obtenu&nbsp;:

{{EmbedLiveSample("", 600, 130)}}

## Exemples

Vous trouverez de bons exemples de champs texte utilisés en contexte dans les articles [Votre premier formulaire](/fr/docs/Learn/Forms/Your_first_form) et [Comment structurer un formulaire HTML](/fr/docs/Learn/Forms/How_to_structure_a_web_form).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Learn/Forms)
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/Input) et l'interface DOM [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) qui le porte
- [`<input type="search">`](/fr/docs/Web/HTML/Element/input/search)
- [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea)&nbsp;: un élément qui permet de saisir du texte sur plusieurs lignes
- [La compatibilité des propriétés CSS](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
