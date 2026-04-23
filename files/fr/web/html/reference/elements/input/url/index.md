---
title: Valeur d'attribut HTML `<input type="url">`
short-title: <input type="url">
slug: Web/HTML/Reference/Elements/input/url
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Les éléments {{HTMLElement("input")}} de type **`url`** sont employées afin de permettre à un·e utilisateur·ice de saisir ou d'éditer une URL.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;url&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<form>
  <label for="url">Entrez une URL commençant par https://&nbsp;:</label>
  <input
    type="url"
    name="url"
    id="url"
    placeholder="https://example.com"
    pattern="https://.*"
    size="30"
    required />
</form>
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

La valeur saisie est automatiquement validée par le navigateur qui vérifie qu'elle est vide ou formatée correctement avant que le formulaire puisse être envoyé. Les pseudo-classes {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} sont appliquées automatiquement selon le cas de figure.

## Valeur

La valeur de l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) contient une chaîne de caractères dont la valeur est automatiquement vérifiée afin de s'assurer que sa syntaxe est bien celle d'une URL. De façon plus précise, seuls deux formats sont autorisés&nbsp;:

1. Une chaîne de caractères vide (`""`) qui indique que l'utilisateur·ice n'a pas saisi de valeur ou que la valeur a été retirée.
2. Une seule URL absolue correctement formée. Cela ne signifie pas nécessairement que l'adresse URL existe, mais au moins qu'elle est correctement formatée. Une entrée correspondant à `schema://restedelurl` peut être valide, même si le `schema` saisi n'existe pas.

Voir [la section sur la validation](#validation) pour plus de détails sur le format des URL et leur validation.

## Attributs supplémentaires

En complément des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes), et des attributs qui fonctionnent pour tous les types d'éléments {{HTMLElement("input")}}, les champs de saisie d'URL prennent en charge les attributs suivants.

> [!NOTE]
> L'attribut universel [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect) peut être ajouté aux champs de saisie d'URL, mais l'état stocké est toujours `off`.

### `list`

La valeur de cet attribut est l'identifiant ({{DOMxRef("Element.id", "id")}}) d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément {{HTMLElement("datalist")}} fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Reference/Elements/input#type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

### `maxlength`

Le nombre maximum de caractères (exprimé en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}) qu'il est possible de saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ échouera à [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}. La validation de contrainte est uniquement appliquée lorsque la valeur est modifiée par l'utilisateur·ice.

### `minlength`

Le nombre minimal de caractères (en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}) qui doivent être saisis dans le champ de l'URL. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, le champ n'aura pas de longueur minimale. La valeur de cet attribut doit être inférieure ou égale à celle de l'attribut `maxlength`.

Le champ échouera à [la validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte saisi est inférieure à cet attribut. Le champ [ne sera pas valide](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de {{Glossary("UTF-16", "points de code UTF-16")}}. La validation de contrainte est uniquement appliquée lorsque la valeur est modifiée par l'utilisateur·ice.

### `pattern`

L'attribut `pattern`, lorsqu'il est utilisé, est une expression rationnelle qui impose un format à [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value), que cette dernière doit respecter afin que le champ soit [valide](/fr/docs/Web/HTML/Guides/Constraint_validation) . Le contenu de `pattern` doit être une expression rationnelle JavaScript valide, comme utilisé par le type {{JSxRef("RegExp")}} et comme documenté dans [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions). Le marqueur `"u"` est utilisé à la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode et non {{Glossary("ASCII")}}. Il ne faut pas entourer l'expression de barres obliques.

Si aucune expression rationnelle n'est fournie ou que celle-ci est invalide, aucune contrainte de format ne sera appliquée et cet attribut sera ignoré complètement.

> [!NOTE]
> On utilisera l'attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/input#title) pour définir le texte que la plupart des navigateurs afficheront comme bulle d'information afin d'expliquer les contraintes imposées par l'expression rationnelle. Il faut également inclure un texte explicatif à proximité du champ.

Voir [la section ci-après sur le format](#utiliser_un_format_particulier) pour plus de détails et d'exemples.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères qui fournit un indice bref à l'utilisateur·ice sur le type d'information attendu dans le champ. Il doit s'agir d'un mot ou d'une courte phrase qui démontre le type de données attendu, plutôt qu'un message explicatif. Le texte _ne doit pas_ inclure de retours chariot ou de sauts de ligne.

Si le contenu du contrôle a une directionnalité ({{Glossary("LTR")}} ou {{Glossary("RTL")}}) mais doit présenter le texte indicatif dans la direction opposée, vous pouvez utiliser des caractères de formatage de l'algorithme bidirectionnel Unicode pour remplacer la directionnalité dans le texte indicatif&nbsp;; voir [Comment utiliser les contrôles Unicode pour le texte bidi <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus d'informations.

> [!NOTE]
> Évitez d'utiliser l'attribut `placeholder` si possible. Il n'est pas aussi sémantiquement utile que d'autres moyens d'expliquer votre formulaire et peut provoquer des problèmes techniques inattendus avec votre contenu. Voir [les libellés de `<input>`](/fr/docs/Web/HTML/Reference/Elements/input#libellés) pour plus d'informations.

### `readonly`

L'attribut booléen [`readonly`](/fr/docs/Web/HTML/Reference/Attributes/readonly), s'il est présent, signifie que ce champ ne peut pas être modifié par l'utilisateur·ice. Sa `value` peut toutefois être modifiée par du code JavaScript en définissant directement la propriété `value` de {{DOMxRef("HTMLInputElement")}}.

> [!NOTE]
> Étant donné qu'un champ en lecture seule ne peut pas avoir de valeur, l'attribut [`required`](/fr/docs/Web/HTML/Reference/Attributes/required) n'a aucun effet sur les champs de saisie pour lesquels l'attribut `readonly` est également défini.

### `size`

L'attribut `size` est une valeur numérique qui indique la largeur idéale du champ, exprimée en nombre de caractères. Sa valeur doit être un nombre supérieur à `0` et la valeur par défaut est `20`. Comme les caractères peuvent avoir une largeur différente entre eux, on ne doit pas s'attendre à ce que cette taille permette exactement de voir les n caractères, le contrôle résultant pourra être plus étroit ou plus large que le nombre indiqué en fonction des caractères saisis et de la police (voir la propriété CSS {{CSSxRef("font")}}) utilisée.

Cet attribut _n'impose pas_ de limite sur le nombre de caractères qui peuvent être saisis. Il indique uniquement, de façon approximative, le nombre de caractères visibles au même moment. Pour imposer une contrainte de taille sur la longueur maximale de la valeur saisissable, on pourra utiliser l'attribut [`maxlength`](#maxlength).

### `spellcheck`

L'attribut universel [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck) est utilisé afin d'indiquer si la vérification orthographique doit être activée sur un élément. Il peut être utilisé sur n'importe quel contenu éditable. On considère ici les aspects spécifiques de `spellcheck` sur les éléments {{HTMLElement("input")}}. Les valeurs autorisées pour `spellcheck` sont&nbsp;:

- `false`
  - : La vérification orthographique est désactivée pour l'élément.
- `true`
  - : La vérification orthographique est activée pour l'élément.
- `""` (la chaîne vide) ou aucune valeur
  - : C'est le comportement par défaut de l'élément qui est utilisé pour déterminer si la vérification est active ou non. Cela peut être déduit de la valeur `spellcheck` sur un élément parent ou d'autres facteurs.

Un champ de saisie peut avoir la vérification orthographique activée s'il n'utilise pas l'attribut [`readonly`](#readonly) et qu'il n'est pas désactivé.

La valeur renvoyée par la lecture de `spellcheck` ne reflète pas nécessairement l'état réel de la vérification orthographique pour le contrôle si {{Glossary("user agent", "l'agent utilisateur")}} surcharge ce paramètre.

## Attributs non-standard

Il est possible (mais déconseillé) d'utiliser ces attributs non-standard sur les champs de saisie d'URL.

## Utiliser des champs de saisie d'URL

Lorsqu'on crée un champ avec un attribut `type` qui vaut `url`, on obtient une validation automatique qui vérifie que le format de la valeur respecte bien celui d'une URL. Cela permet, par exemple, d'éviter des cas où des utilisateur·ice·s laissent une coquille dans la saisie d'une adresse d'un site web.

Il est important de noter, cependant, que cela ne suffit pas à garantir que le texte défini est une URL qui existe réellement, correspond à l'utilisateur·ice du site ou est acceptable d'une quelconque manière. Cela garantit seulement que la valeur du champ est correctement formatée pour être une URL.

> [!NOTE]
> Un·e utilisateur·ice peut modifier votre HTML en arrière-plan, donc votre site _ne doit pas_ utiliser cette validation à des fins de sécurité. Vous _devez_ vérifier l'URL côté serveur pour toute transaction dans laquelle le texte fourni pourrait avoir des implications de sécurité de quelque nature que ce soit.

### Un champ de saisie simple d'URL

Actuellement, l'ensemble des navigateurs implémentent ce type de champ comme un champ texte qui dispose de fonctionnalités de validation basiques. Dans sa forme la plus simple, un champ de saisie d'URL ressemblera à&nbsp;:

```html
<input id="monURL" name="monURL" type="url" />
```

{{EmbedLiveSample("Un champ de saisie simple d'URL", 600, 40)}}

La valeur du champ est considérée valide lorsqu'elle est vide ou qu'il s'agit d'une URL correctement formatée, autrement elle est invalide. Si on ajoute l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required), la valeur vide n'est plus valide, il est nécessaire de saisir une valeur.

Ainsi, si l'utilisateur·ice saisit l'URL `http://www.exemple.com`, voici ce qui sera envoyé vers le serveur&nbsp;: `monURL=http%3A%2F%2Fwww.exemple.com` (on notera la façon dont certains caractères sont échappés).

### Textes indicatifs

Parfois, il est utile de fournir une indication sur le type de donnée attendu. Cela peut être particulièrement important si la conception de la page ne propose pas d'étiquettes descriptives pour chaque {{HTMLElement("input")}}. C'est là qu'interviennent les **textes indicatifs**. Un texte indicatif (<i lang="en">placeholder</i> en anglais) est une valeur qui montre la forme que doit prendre la `value` en présentant un exemple de valeur valide, affiché à l'intérieur de la boîte de saisie lorsque la `value` de l'élément est `""`. Une fois que des données sont saisies dans la boîte, le texte indicatif disparaît&nbsp;; si la boîte est vidée, le texte indicatif réapparaît.

Ici, nous avons un champ de saisie `url` avec le texte indicatif `http://www.exemple.com`. Notez comment le texte indicatif disparaît et réapparaît lorsque vous manipulez le contenu du champ.

```html
<input
  id="monURL"
  name="monURL"
  type="url"
  placeholder="http://www.exemple.com" />
```

{{EmbedLiveSample("Textes indicatifs", 600, 40)}}

### Contrôler la taille du champ

Il est possible de contrôler la taille physique de la boîte utilisée pour le contrôle. On peut également contraindre la taille de la valeur saisie dans le champ (entre X et Y caractères par exemple).

#### La taille physique

C'est l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size) qui permet de contrôler la taille de la boîte utilisée. La valeur de cet attribut correspond au nombre de caractères qui seront affichés en même temps dans la boîte. Dans l'exemple suivant, on souhaite que la boîte de saisie mesure 30 caractères de large&nbsp;:

```html
<input id="monURL" name="monURL" type="url" size="30" />
```

{{EmbedLiveSample("La taille physique", 600, 40)}}

#### La longueur de la valeur

L'attribut `size` ne limite pas la valeur qui peut être saisie mais uniquement l'affichage de celle-ci. Pour indiquer une longueur (exprimée en nombre de caractères) minimale d'URL à saisir, on pourra utiliser l'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Elements/input#minlength). De même, l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) indique la longueur maximale d'une URL qui peut être saisie dans le contrôle.

Dans l'exemple qui suit, on affiche une boîte de saisie qui mesure 30 caractères de large et on souhaite que l'URL soit plus longue que 10 caractères et moins longue que 80.

```html
<input
  id="monURL"
  name="monURL"
  type="url"
  size="30"
  minlength="10"
  maxlength="80" />
```

{{EmbedLiveSample("La longueur de la valeur", 600, 40)}}

> [!NOTE]
> Ces attributs ont également une incidence sur la validation&nbsp;; toute valeur plus courte ou plus longue que les longueurs minimale et maximale définies sera considérée comme non valide&nbsp;; de plus, la plupart des navigateurs empêcheront l'utilisateur de saisir une valeur dépassant la longueur maximale définie.

### Fournir des valeurs par défaut

#### Fournir une valeur par défaut avec l'attribut `value`

On peut fournir une valeur par défaut grâce à l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value)&nbsp;:

```html
<input id="monURL" name="monURL" type="url" value="http://www.example.com" />
```

{{EmbedLiveSample("Fournir une valeur par défaut avec l'attribut `value`", 600, 40)}}

#### Fournir des suggestions

On peut également fournir une liste d'options parmi lesquelles la personne saisissant une URL peut choisir via l'attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list). Cette liste ne limite pas l'utilisateur·ice à ces choix mais permet de choisir certaines URL fréquemment utilisées plus facilement. Cette liste peut également être utilisée par l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete). La valeur de l'attribut `list` est un identifiant d'un élément {{HTMLElement("datalist")}} qui contient autant d'éléments {{HTMLElement("option")}} que de valeurs suggérées. La valeur de l'attribut `value` de chacun de ces éléments `<option>` correspondra à la valeur qui sera suggérée dans le champ de saisie.

```html
<input id="monURL" name="monURL" type="url" list="defaultURLs" />

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/"></option>
  <option value="http://www.google.com/"></option>
  <option value="http://www.microsoft.com/"></option>
  <option value="https://www.mozilla.org/"></option>
  <option value="http://w3.org/"></option>
</datalist>
```

{{EmbedLiveSample("Fournir des suggestions", 600, 40)}}

Avec cet élément {{HTMLElement("datalist")}} et les éléments {{HTMLElement("option")}} associés, le navigateur affichera les valeurs proposées sous la forme d'une liste déroulante (voire sous un autre format). Au fur et à mesure que la personne saisit dans le champ, la liste se réduit pour ne contenir que les valeurs correspondantes (et ce jusqu'à ce que la personne saisisse une autre valeur ou sélectionne une valeur parmi la liste).

#### Utiliser des libellés pour les valeurs suggérées

Il est aussi possible d'inclure des attributs [`label`](/fr/docs/Web/HTML/Reference/Elements/option#label) sur un ou plusieurs des éléments `<option>` afin de fournir un libellé textuel. Certains navigateurs n'afficheront que les libellés tandis que d'autres afficheront le libellé et l'URL.

```html
<input id="monURL" name="monURL" type="url" list="defaultURLs" />

<datalist id="defaultURLs">
  <option value="https://developer.mozilla.org/" label="MDN Web Docs"></option>
  <option value="http://www.google.com/" label="Google"></option>
  <option value="http://www.microsoft.com/" label="Microsoft"></option>
  <option value="https://www.mozilla.org/" label="Mozilla"></option>
  <option value="http://w3.org/" label="W3C"></option>
</datalist>
```

{{EmbedLiveSample("Utiliser des libellés pour les valeurs suggérées", 600, 40)}}

## Validation

Deux niveaux de validation du contenu sont disponibles pour les champs `url`. Tout d'abord, il y a le niveau de validation standard proposé à tous les éléments {{HTMLElement("input")}}, qui vérifie automatiquement que le contenu répond aux critères d'une URL valide. Mais il est également possible d'ajouter des filtres supplémentaires pour répondre à vos besoins spécifiques, le cas échéant.

> [!WARNING]
> La validation des formulaires HTML _ne remplace pas_ les scripts qui garantissent que les données saisies sont au bon format. Il est très facile pour quelqu'un de modifier le HTML pour contourner la validation, ou de la supprimer entièrement. Il est également possible pour quelqu'un de contourner complètement votre HTML et d'envoyer les données directement à votre serveur. Si votre code côté serveur ne valide pas les données qu'il reçoit, des catastrophes peuvent survenir lorsque des données mal formatées (ou des données trop volumineuses, de type incorrect, etc.) sont saisies dans votre base de données.

### Validation simple

Les navigateurs qui prennent en charge le type `url` fournissent automatiquement un mécanisme de validation pour s'assurer que la valeur saisie correspond à une URL bien formée.

La syntaxe possible d'une URL est complexe. Elle est définie [par le standard évolutif WHATWG sur les URL <sup>(angl.)</sup>](https://url.spec.whatwg.org/) et est décrite de façon plus accessible dans notre article [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)

### Rendre le champ URL obligatoire

Comme indiqué précédemment, pour rendre un champ URL obligatoire avant que le formulaire puisse être envoyé (il n'est pas possible de laisser ce champ vide), il suffit d'ajouter l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) à l'élément de saisie.

### Utiliser un format particulier

Si vous souhaitez restreindre davantage l'URL saisie, au-delà d'une simple « chaîne ressemblant à une URL », vous pouvez utiliser l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) pour définir une {{Glossary("regular expression", "expression rationnelle")}} à laquelle la valeur doit correspondre pour être valide.

## Exemples

### Valider une URL

Dans cet exemple, nous nous assurons qu'une URL est remplie en utilisant l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) et que l'URL provient de `mozilla.org` en utilisant l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) à titre d'illustration.

#### HTML

Dans le champ `url`, nous définissons `pattern` sur `".*\.mozilla\.org.*"`. Cette expression rationnelle valide une chaîne qui peut comporter un nombre quelconque de caractères, suivie de «&nbsp;.mozilla.org&nbsp;», puis d'un nombre quelconque de caractères. Comme le navigateur exécute à la fois le filtre standard des URL _et_ notre motif personnalisé sur le texte défini, la validation exige «&nbsp;assurez-vous qu'il s'agit d'une URL valide, et qu'elle contient `.mozilla.org`.&nbsp;»

Notez qu'un `pattern` strict comme `https://developer\.mozilla\.org.*` serait plus robuste, mais cela rendrait l'attribut `type="url"` redondant dans ce cas.

L'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) décrit également le `pattern` pour les utilisateur·ice·s recourant à des technologies d'assistance.

```html live-sample___url-validation
<form>
  <label for="myURL">
    Entrez une URL de ce site&nbsp;:
    <input
      id="myURL"
      name="myURL"
      type="url"
      required
      pattern=".*\.mozilla\.org.*"
      title="L'URL doit inclure mozilla.org" />
    <span class="validity"></span>
  </label>
  <button>Submit</button>
</form>
```

#### CSS

Le CSS fournit des indices visuels pour montrer à l'utilisateur·ice si le contenu est {{CSSxRef(":valid")}} ou {{CSSxRef(":invalid")}} en ajoutant une propriété {{CSSxRef("content")}} appropriée et inclut du [texte alternatif](/fr/docs/Web/CSS/Reference/Properties/content#ajouter_des_compteurs_dans_le_texte_alternatif) pour les utilisateur·ice·s recourant à des technologies d'assistance.

```css live-sample___url-validation
input:focus:invalid {
  outline: 2px solid red;
}

input:focus:valid {
  outline: 2px solid green;
}

input + span {
  padding: 0 0.3rem;
}

input:invalid + span::after {
  content: "✖" / "Le contenu n'est pas valide";
  color: red;
}

input:valid + span::after {
  content: "✓" / "Le contenu est valide";
  color: green;
}
```

#### Result

Copiez l'URL de cette page et collez-la dans le champ de saisie et vous verrez un contour vert et une coche verte. Saisissez toute autre URL qui ne contient pas **mozilla.org** ou une URL invalide et vous verrez un contour rouge et une croix rouge.

{{EmbedLiveSample("url-validation", "40px", , , , , "allow-forms")}}

Consultez les sections [Validation par motif](#utiliser_un_format_particulier) et [Utiliser des champs de saisie d'URL](#utiliser_des_champs_de_saisie_durl) pour d'autres exemples.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>Une chaîne de caractères qui représente une URL ou qui est vide.</td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        {{DOMxRef("HTMLElement/change_event", "change")}} et
        {{DOMxRef("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
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
      <td>
        <code>list</code>, <code>value</code>, <code>selectionEnd</code>, <code>selectionDirection</code>
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
        {{DOMxRef("HTMLInputElement.setRangeText", "setRangeText()")}}
        et
        {{DOMxRef("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td>
        sans l'attribut <code>list</code>&nbsp;:
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role">textbox</a></code><br />
        avec l'attribut <code>list</code>&nbsp;: <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role">combobox</a></code>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("input")}}
- L'élément [`<input type="tel">`](/fr/docs/Web/HTML/Reference/Elements/input/tel)
- L'élément [`<input type="email">`](/fr/docs/Web/HTML/Reference/Elements/input/email)
