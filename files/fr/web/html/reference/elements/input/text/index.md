---
title: Valeur d'attribut HTML `<input type="text">`
short-title: <input type="text">
slug: Web/HTML/Reference/Elements/input/text
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Les éléments {{HTMLElement("input")}} de type **`text`** permettent de créer des champs de saisie pour du texte sur une seule ligne.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;text&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="name">Nom (4 à 8 caractères)&nbsp;:</label>

<input
  type="text"
  id="name"
  name="name"
  required
  minlength="4"
  maxlength="8"
  size="10" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Valeur

L'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) d'un tel élément contient une chaîne de caractères qui correspond à la valeur contenue dans le champ texte. En JavaScript, cette valeur peut être récupérée avec la propriété `value` rattachée à l'interface {{DOMxRef("HTMLInputElement")}}.

```js
let monTexte = leTexteSaisi.value;
```

Si aucune contrainte de validation n'est ajoutée (cf. la section [Validation](#validation) pour plus d'informations), la valeur peut être une chaîne de caractères vide (`""`).

## Attributs supplémentaires

En plus des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) et des attributs qui s'appliquent à tous les éléments {{HTMLElement("input")}} quel que soit leur type, les champs textuels prennent en charge les attributs suivants.

### `list`

La valeur de cet attribut est l'identifiant ({{DOMxRef("Element.id", "id")}}) d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément {{HTMLElement("datalist")}} fournit la liste de valeurs prédéfinies à suggérer à l'utilisateur·ice. Toute valeur de la liste qui n'est pas compatible avec ce [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) n'est pas incluse dans les options suggérées. Les valeurs fournies sont des suggestions et pas des valeurs imposées&nbsp;: il reste possible de sélectionner des valeurs en dehors de cette liste.

### `maxlength`

Le nombre maximum de caractères (exprimé en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}) qu'on peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur·ice.

### `minlength`

Le nombre minimal de caractères (exprimé en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}) qu'on peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieure à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte est inférieure à `minlength` en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}. Les contraintes de validation sont uniquement appliquées lorsque la valeur est modifiée par l'utilisateur·ice.

### `pattern`

L'attribut `pattern` est une expression rationnelle que doit respecter la valeur ([`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)) du champ afin d'être [valide](/fr/docs/Web/HTML/Guides/Constraint_validation). Cette expression rationnelle doit être une expression rationnelle valide pour JavaScript, telle qu'utilisée par {{JSxRef("RegExp")}}, et telle que documentée dans [ce guide](/fr/docs/Web/JavaScript/Guide/Regular_expressions). Le marqueur `"u"` est fourni par le navigateur lors de la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode plutôt que comme des caractères {{Glossary("ASCII")}}. Aucune barre oblique (`/`) ne devrait être utilisée autour du motif.

Si l'expression rationnelle est invalide ou que cet attribut n'est pas défini, l'attribut est ignoré.

> [!NOTE]
> L'attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/input#title) pourra être utilisé afin d'afficher une bulle d'informations qui explique les conditions à respecter. Il est également conseillé d'inclure un texte explicatif à proximité du champ.

Voir [la section sur l'utilisation d'un motif de validation](#utiliser_un_motif_de_validation) pour plus de détails et un exemple.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères fournissant une courte indication à l'utilisateur·ice quant à l'information attendue dans le champ. Cet attribut devrait être un mot ou une phrase courte qui illustre le type de donnée attendu plutôt qu'un message explicatif. Le texte ne doit pas contenir de saut à la ligne.

Si le contenu du contrôle respecte une directionnalité donnée ({{Glossary("LTR")}} ou {{Glossary("RTL")}}) et que le texte indicatif doit être présenté dans l'autre sens, il est possible d'utiliser l'algorithme de formatage bidirectionnel Unicode — voir [Comment utiliser les contrôles Unicode pour le texte bidirectionnel <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus d'informations.

> [!NOTE]
> On évitera, tant que faire se peut, d'utiliser l'attribut `placeholder`, car il n'est pas sémantiquement très utile pour expliquer le formulaire, et car il peut causer certains problèmes avec le contenu. Voir [les problèmes d'accessibilité des `<input>`](/fr/docs/Web/HTML/Reference/Elements/input#acessibilité) pour plus d'informations.

### `readonly`

Un attribut booléen qui, lorsqu'il est présent, indique que le champ ne peut pas être édité par l'utilisateur·ice. Toutefois, la valeur de l'attribut `value` peut toujours être modifiée avec du code JavaScript qui définirait la propriété `value` rattachée à l'interface {{DOMxRef("HTMLInputElement")}}.

> [!NOTE]
> Un champ en lecture seule ne pouvant pas avoir de valeur, l'attribut `required` n'aura pas d'effet si l'attribut `readonly` est également présent.

### `size`

L'attribut `size` est un nombre positif qui indique le nombre de caractères affichés à l'écran et qui définit donc la largeur du champ. La valeur par défaut de cet attribut est 20. Étant donné que la largeur des caractères peut varier cet attribut ne permet de définir une largeur exacte mais approximative — le champ affiché peut être plus étroit ou plus large que la taille (`size`) spécifiée en fonction des caractères saisis et des paramètres de police (la propriété CSS {{CSSxRef("font")}}) utilisés.

Cet attribut _ne_ définit _pas_ la limite du nombre de caractères saisissables dans le champ mais uniquement, et approximativement, le nombre de caractères qui peuvent être affichés à l'écran simultanément. Pour fixer une taille maximale sur la valeur du champ, on utilisera plutôt l'attribut [`maxlength`](#maxlength).

### `spellcheck`

L'attribut universl [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck) est utilisé afin d'indiquer si la vérification orthographique doit être utilisée pour un élément. Il peut être utilisé pour n'importe quel contenu éditable mais possède certaines spécificités pour les éléments {{HTMLElement("input")}}. Les valeurs autorisées pour cet attribut sont&nbsp;:

- `false`
  - : La vérification orthographique est désactivée pour cet élément.
- `true`
  - : La vérification orthographique est activée pour cet élément.
- `""` (chaîne de caractères vide) ou aucune valeur
  - : La configuration par défaut de l'élément par rapport à la vérification orthographique sera respectée. Cette configuration par défaut peut provenir de la valeur de `spellcheck` pour les éléments parents ou d'autres facteurs.

Un champ de saisie peut avoir la vérification orthographique activée s'il ne possède pas l'attribut [`readonly`](#readonly) et qu'il n'est pas désactivé.

La valeur renvoyée par l'attribut `spellcheck` peut ne pas refléter l'état réel de la vérification orthographique si certaines préférences de {{Glossary("user agent", "l'agent utilisateur")}} surchargent le paramétrage par défaut.

## Utiliser les champs de texte

Les éléments `<input>` de type `text` sont utilisés pour créer des champs texte sur une seule ligne. Ils doivent être utilisés lorsqu'on souhaite saisir du texte sur une ligne et qu'il n'existe pas de meilleur contrôle disponible pour la valeur (ainsi, s'il s'agit d'une [date](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local), [d'une URL](/fr/docs/Web/HTML/Reference/Elements/input/url), [d'une adresse électronique](/fr/docs/Web/HTML/Reference/Elements/input/email) ou [d'une recherche](/fr/docs/Web/HTML/Reference/Elements/input/search), on pourra utiliser des éléments plus pertinents).

### Exemple simple

```html
<form>
  <div>
    <label for="uname">
      Veuillez choisir un nom d'utilisateur·ice&nbsp;:
    </label>
    <input type="text" id="uname" name="name" />
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

Voici ce qui sera obtenu&nbsp;:

{{EmbedLiveSample("Exemple simple", 600, 90)}}

Lorsque le formulaire est envoyé, la paire nom/valeur est envoyée au serveur sous la forme `uname=Chris` (si «&nbsp;Chris&nbsp;» était le texte qui avait été saisi avant d'envoyer le formulaire). Il faut veiller à bien avoir un attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name) pour l'élément {{HTMLElement("input")}} car sinon, rien ne sera envoyé.

### Utiliser des textes indicatifs

Il est possible de fournir un texte indicatif (<i lang="en">placeholder</i> en anglais) qui sera affiché dans le champ lorsqu'aucune valeur n'a été saisie. Pour cela, on utilise l'attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder). Par exemple&nbsp;:

```html
<form>
  <div>
    <label for="uname">
      Veuillez choisir un nom d'utilisateur·ice&nbsp;:
    </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Un seul mot, en minuscules" />
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

Voici le résultat qui sera obtenu&nbsp;:

{{EmbedLiveSample("Utiliser des textes indicatifs", 600, 90)}}

Le texte indicatif est généralement affiché dans une couleur plus claire que la couleur de premier plan de l'élément. Il s'efface dès qu'un·e utilisateur·ice commence à écrire dans le champ texte, ou lorsqu'une valeur est définie pour l'attribut `value` du champ.

### Contrôler la taille physique du champ

La taille physique du champ de saisie peut être adaptée grâce à l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size). Sa valeur correspond au nombre de caractères qui seront affichés simultanément. Voici par exemple, un fragment de code HTML où la contrôle de saisie affichera au plus 30 caractères en même temps (on pourra saisir un texte plus long mais toutes les lettres ne seront pas affichées)&nbsp;:

```html
<form>
  <div>
    <label for="uname">
      Veuillez choisir un nom d'utilisateur·ice&nbsp;:
    </label>
    <input
      type="text"
      id="uname"
      name="name"
      placeholder="Un seul mot, en minuscules"
      size="30" />
  </div>
  <div>
    <button>Envoyer</button>
  </div>
</form>
```

{{EmbedLiveSample("Contrôler la taille physique du champ", 600, 90)}}

## Validation

Les éléments `<input>` de type `text` ne possède pas de mécanisme de validation automatique. En revanche, il est possible d'ajouter certaines contraintes qui seront vérifiées côté client et que nous allons voir ici.

> [!NOTE]
> La validation des données de formulaire HTML _ne doit pas_ remplacer des scripts de vérification côté serveur. En effet, il est très facile à modifier le code HTML du site pour outrepasser ou même désactiver les mécanismes de validation. Il est également possible d'envoyer des données directement au serveur sans passer par le formulaire. Si votre serveur ne valide pas les données reçues, des données potentiellement mal formatées (ou trop abondantes, du mauvais type et ainsi de suite) pourraient causer des dommages à votre base de données.

### Un aparté sur la mise en forme

Il existe des pseudo-classes utiles permettant de mettre en forme les éléments de formulaire afin d'aider les utilisateur·ice·s à voir si leurs valeurs sont valides ou non. Il s'agit de {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}. Dans cette section, nous utiliserons le CSS suivant, qui placera une coche à côté des champs contenant des valeurs valides, et une croix (X) à côté des champs contenant des valeurs non valides.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Comme le montrent les sélecteurs utilisés, cette technique s'appuie sur la présence d'un élément {{HTMLElement("span")}} placé après le formulaire et qui joue le rôle de réceptacle pour les icônes. Cette méthode de contournement est nécessaire car certains navigateurs n'affichent pas les icônes placées directement sur les éléments de formulaire.

### Rendre un champ obligatoire

On peut utiliser l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) afin d'indiquer que le champ doit être rempli avant de pouvoir envoyer le formulaire&nbsp;:

```html
<form>
  <div>
    <label for="uname">
      Veuillez choisir un nom d'utilisateur·ice&nbsp;:
    </label>
    <input type="text" id="uname" name="name" required />
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
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Ce qui produira ce résultat&nbsp;:

{{EmbedLiveSample("Rendre un champ obligatoire", 600, 100)}}

Si vous tentez d'envoyer le formulaire sans avoir saisi de valeur dans le champ texte, le navigateur affichera un message d'erreur.

### Contraindre la longueur du texte saisi

Il est possible d'indiquer la longueur minimale du texte grâce à l'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Elements/input#minlength). De même, on peut utiliser l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) pour indiquer le nombre maximal de caractères attendus.

Dans l'exemple suivant, pour que le texte soit valide, il faut qu'il soit plus long que 4 caractères et moins long que 8 caractères.

```html
<form>
  <div>
    <label for="uname">
      Veuillez choisir un nom d'utilisateur·ice&nbsp;:
    </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      placeholder="Le nom d'utilisateur doit mesurer entre 4 et 8 caractères"
      minlength="4"
      maxlength="8" />
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
input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}
input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Voici le résultat qui est alors obtenu&nbsp;:

{{EmbedLiveSample("Contraindre la longueur du texte saisi", 600, 100)}}

Si vous essayez d'envoyer le formulaire avec un nom d'utilisateur·ice plus court (que 4 caractères), le navigateur affichera un message d'erreur. De plus le navigateur empêchera de saisir une valeur plus longue que 8 caractères.

> [!NOTE]
> Si on indique `minlength` mais pas `required`, la valeur saisie est considérée comme valide car l'utilisateur·ice peut ne pas saisir de valeur.

### Utiliser un motif de validation

L'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) permet d'indiquer une expression rationnelle que doit respecter la valeur saisie afin d'être valide (voir [Validation selon une expression régulière](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation#validation_selon_une_expression_régulière) pour une introduction à la validation des données avec les expressions rationnelles).

Dans l'exemple qui suit, on restreint le format du texte afin que ce soit un texte en minuscules (pour lequel seules les lettres de `a` à `z` sont autorisées) et qui mesure entre 4 et 8 caractères.

```html
<form>
  <div>
    <label for="uname">Veuillez choisir un nom d'utilisateur : </label>
    <input
      type="text"
      id="uname"
      name="name"
      required
      size="45"
      pattern="[a-z]{4,8}" />
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
  color: #999999;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
```

Voici le résultat qui sera obtenu&nbsp;:

{{EmbedLiveSample("Utiliser un motif de validation", 600, 130)}}

## Exemples

Vous trouverez de bons exemples de champs texte utilisés en contexte dans les articles [Votre premier formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Your_first_form) et [Comment structurer un formulaire HTML](/fr/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Value</a></strong></td>
      <td>
        Une chaîne de caractères qui représente la valeur contenue dans le champ texte.
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
      <td><strong>Attributs communs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
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
      <td><a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>, <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}},
        {{DOMxRef("HTMLInputElement.setRangeText", "setRangeText()")}}
        et
        {{DOMxRef("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td>
        sans attribut <code>list</code>&nbsp;:
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        avec attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("input")}} et l'interface {{DOMxRef("HTMLInputElement")}} qui l'implémente
- [`<input type="search">`](/fr/docs/Web/HTML/Reference/Elements/input/search)
- L'élément {{HTMLElement("textarea")}}&nbsp;: un élément qui permet de saisir du texte sur plusieurs lignes
