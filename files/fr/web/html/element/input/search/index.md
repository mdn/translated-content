---
title: <input type="search">
slug: Web/HTML/Element/input/search
translation_of: Web/HTML/Element/input/search
browser-compat: html.elements.input.input-search
---
{{HTMLRef}}

Les éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut `type` vaut **`search`** permettent de saisir des termes de recherche. Sur le plan fonctionnel, ils sont identiques aux champs de saisie textuels ([`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text)), c'est leur mise en forme qui peut être différente selon [les agents utilisateurs](/fr/docs/Glossary/User_agent).

{{EmbedInteractiveExample("pages/tabbed/input-search.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères (<a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>) qui représente la valeur contenue dans le champ de recherche.
      </td>
    </tr>
    <tr>
      <td><strong>Évènements</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement/change_event"><code>change</code></a> et <a href="/fr/docs/Web/API/HTMLElement/input_event"><code>input</code></a>.
      </td>
    </tr>
    <tr>
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/Input#attr-autocomplete"><code>autocomplete</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-list"><code>list</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-maxlength"><code>maxlength</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-minlength"><code>minlength</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-pattern"><code>pattern</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-placeholder"><code>placeholder</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-required"><code>required</code></a>, <a href="/fr/docs/Web/HTML/Element/Input#attr-size"><code>size</code></a>.
      </td>
    </tr>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        <a href="/fr/docs/Web/API/HTMLInputElement/select"><code>select()</code></a>,
        <a href="/fr/docs/Web/API/HTMLInputElement/setRangeText"><code>setRangeText()</code></a>,
        <a href="/fr/docs/Web/API/HTMLInputElement/setSelectionRange"><code>setSelectionRange()</code></a>.
      </td>
    </tr>
  </tbody>
</table>

## Valeur

La valeur de l'attribut [`value`](/fr/docs/Web/HTML/Element/Input#attr-value) contient une chaîne de caractères ([`DOMString`](/fr/docs/Web/API/DOMString)) qui représente la valeur du champ de recherche. En JavaScript, on peut récupérer cette information grâce à la propriété `value` rattachée à [l'interface `HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement).

```js
termesRecherche = monChampSearch.value;
```

Si aucune contrainte de validation n'est imposée (cf. la section [Validation](#validation) pour plus de détails), la valeur peut être un texte ou une chaîne de caractères vide.

## Attributs supplémentaires

En complément des attributs communs à l'ensemble des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input), les champs de recherche prennent en charge les attributs suivants.

### `list`

La valeur de cet attribut est l'identifiant ([`id`](/fr/docs/Web/API/Element/id)) d'un élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) situé dans le même document. L'élément [`<datalist>`](/fr/docs/Web/HTML/Element/datalist) fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Element/Input#attr-type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

### `maxlength`

Le nombre maximum de caractères (exprimé en nombre de points de code UTF-16) qu'il est possible de saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `maxlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille maximale. La valeur indiquée par cet attribut doit être supérieure à `minlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte dépasse `maxlength` en nombre de points de code UTF-16.

### `minlength`

Le nombre minimal de caractères (exprimé en nombre de points de code UTF-16) que l'utilisatrice ou l'utilisateur peut saisir dans le champ. Cette valeur doit être un entier positif ou nul. Si aucune valeur n'est fournie pour `minlength` ou qu'une valeur invalide est fournie, il n'y a pas de contrainte de taille minimale. La valeur indiquée par cet attribut doit être inférieure à `maxlength`.

Le champ [ne sera pas valide](/fr/docs/Web/Guide/HTML/Constraint_validation) si la longueur du texte est inférieure à `minlength` en nombre de points de code UTF-16.

### `pattern`

L'attribut `pattern`, lorsqu'il est utilisé, est une expression rationnelle qui impose un format à [`value`](/fr/docs/Web/HTML/Element/Input#attr-value), que cette dernière doit respecter afin que le champ soit [valide](/fr/docs/Web/Guide/HTML/Constraint_validation). Le contenu de `pattern` doit être une expression rationnelle JavaScript valide (voir la documentation sur le type [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) et [le guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions). Le marqueur `'u'` est utilisé à la compilation de l'expression rationnelle afin que le motif soit traité comme une séquence de points de code Unicode et non ASCII. Il ne faut pas entourer l'expression de barres obliques.

Si aucune expression rationnelle n'est fournie ou que celle-ci est invalide, aucune contrainte de format ne sera appliquée et cet attribut sera ignoré complètement.

> **Note :** On utilisera l'attribut [`title`](/fr/docs/Web/HTML/Element/Input#attr-title) pour définir le texte que la plupart des navigateurs afficheront comme bulle d'information afin d'expliquer les contraintes imposées par l'expression rationnelle. Il faut également inclure un texte explicatif à proximité du champ.

Voir la section [Indiquer un motif](#indiquer_un_motif) pour plus de détails et un exemple.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères qui fournit une indication courte sur le type d'information attendue dans le champ. Ce devrait être un mot ou une phrase courte qui illustre le type de données attendu plutôt qu'un message explicatif. Le texte _ne doit pas_ inclure de saut de ligne ou de retour chariot.

Si le contenu du contrôle utilise une direction (écriture de gauche à droite ou de droite à gauche), mais que le texte indicatif doit être présenté dans la direction inverse, vous pouvez utiliser des caractères de formatage pour l'algorithme bidirectionnel Unicode dans la valeur. Voir [Comment utiliser des contrôles Unicode pour le texte bidirectionnel (en anglais)](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus d'informations.

> **Note :** On évitera d'utiliser l'attribut `placeholder` si possible. Il n'est pas aussi utile que d'autres sur le plan sémantique pour expliquer le formulaire et il peut causer des problèmes techniques avec le contenu. Voir [L'utilisation de libellés et de textes indicatifs](/fr/docs/Web/HTML/Element/Input#utilisation_de_libellés) pour plus d'informations.

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

Un champ de saisi peut avoir la vérification orthographique activée s'il n'utilise pas l'attribut [`readonly`](#readonly") et qu'il n'est pas désactivé.

La valeur renvoyée par la lecture de `spellcheck` peut ne pas refléter l'état réel de la vérification orthographique pour le contrôle (par exemple, si des préférences au sein [de l'agent utilisateur](/fr/docs/Glossary/User_agent) surchargent ce paramètre).

## Attributs non-standard

Les attributs non-standard suivants sont disponibles pour les champs de recherche. Toutefois, vu leur caractère spécifique, mieux vaut ne pas les utiliser.

### `autocorrect`

Un attribut spécifique à Safari qui indique si la correction automatique doit être activée (ou non) lors de l'édition manuelle de ce champ. Les valeurs autorisées sont&nbsp;:

- `on`
  - : La correction automatique est activée et les remplacements automatiques, si certains sont configurés, sont effectués.
- `off`
  - : La correction automatique et les remplacements sont désactivés.

### `incremental`

Un attribut booléen spécifique à WebKit et Blink (donc pris en charge par les navigateurs Safari, Opera, Chrome, etc.) qui indique à l'agent utilisateur de traiter la recherche en continu. Lorsque cet attribut est présent et lorsque l'utilisatrice ou l'utilisateur édite la valeur du champ, l'agent utilisateur envoie des évènements [`search`](/fr/docs/Web/API/HTMLInputElement/search_event) sur l'objet [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) qui représente le champ de recherche. Ainsi, on peut gérer, avec du code, la mise à jour continue des résultats de recherche.

Si l'attribut `incremental` n'est pas indiqué, l'évènement [`search`](/fr/docs/Web/API/HTMLInputElement/search_event) est uniquement envoyé lorsque la recherche est déclenchée (avec l'appui sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> à l'édition du champ).

La fréquence maximale à laquelle l'évènement `search` est envoyé est définie par chaque implémentation.

### `mozactionhint`

Un attribut spécifique à Mozilla, pris en charge par Firefox sur Android qui fournit une indication sur le type d'action réalisée lors de l'appui sur <kbd>Entrée</kbd> ou <kbd>Retour</kbd> pendant l'édition du champ. Cette information est utilisée pour décider du libellé à afficher sur la touche <kbd>Entrée</kbd> du clavier virtuel.

> **Note :** [Ce comportement a été standardisé](https://html.spec.whatwg.org/#input-modalities:-the-enterkeyhint-attribute) avec l'attribut universel [`enterkeyhint`](/fr/docs/Web/HTML/Global_attributes#attr-enterkeyhint), mais ce dernier n'est pas encore largement implémenté. En ce qui concerne l'implémentation dans Firefox, voir [le bug 1490661](https://bugzilla.mozilla.org/show_bug.cgi?id=1490661).

Les valeurs autorisées sont&nbsp;: `go`, `done`, `next`, `search`, et `send`. Le navigateur décide alors, en fonction de cette indication, du libellé à appliquer sur la touche <kbd>Entrée</kbd>.

### `results`

L'attribut `results`, spécifique à Safari, est une valeur numérique qui permet de surcharger la valeur maximale du nombre de recherches précédentes affichées dans la liste déroulante des suggestions basées sur les recherches précédentes.

Cette valeur doit être un nombre positif. Si cet attribut n'est pas fourni, ou que sa valeur est invalide, ce sera le maximum fourni par le navigateur qui sera utilisé.

## Utiliser un champ de recherche

Les éléments `<input>` de type `search` sont semblables aux éléments `<input>` de type `text` mais sont spécifiquement destinés à la gestion des termes d'une recherche. Leur comportement est équivalent, c'est leur mise en forme qui peut varier en fonction des navigateurs (et, bien entendu, en fonction des feuilles de style de chacun des sites).

### Exemple simple

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q">
    <button>Rechercher</button>
  </div>
</form>
```

Cet exemple produira le résultat suivant&nbsp;:

{{EmbedLiveSample("", 600, 40)}}

`q` est la valeur la plus communément utilisée pour l'attribut `name` des champs de recherche mais cette valeur spécifique n'est pas obligatoire. Lorsque le formulaire est envoyé, les données envoyées au serveur auront la forme `q=termederecherche`.

> **Note :** Il est toujours nécessaire de fournir une valeur pour l'attribut [`name`](/fr/docs/Web/HTML/Element/Input#attr-name), sinon aucune valeur ne sera envoyée.

### Différences entre les champs de recherche et les champs texte

La différence principale est la façon dont les navigateurs gèrent cet élément. Premièrement, certains navigateurs affichent une icône de croix dans la zone de saisie qui peut être utilisée pour retirer le terme de la recherche. Voici par exemple un aperçu de la fonctionnalité sous Chrome&nbsp;:

![](chrome-cross-icon.png)

De plus, les navigateurs modernes proposent souvent une auto-complétion basée sur les termes de recherche déjà utilisés sur le site. Ainsi, quand on réutilise le champ, différentes suggestions peuvent être affichées et utilisées. Cela facilite la réutilisation de recherches déjà saisies. Voici l'aperçu de cette fonctionnalité sous Firefox&nbsp;:

![](firefox-auto-complete.png)

### Ajouter un texte indicatif

Il est possible de fournir un texte indicatif dans le champ de recherche afin de fournir une indication quant aux recherches qu'il est possible de faire. Pour cela, on ajoutera un texte avec l'attribut [`placeholder`](/fr/docs/Web/HTML/Element/Input#attr-placeholder). Par exemple&nbsp;:

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q"
     placeholder="Rechercher sur le site…">
    <button>Rechercher</button>
  </div>
</form>
```

Voici le résultat obtenu avec ce fragment HTML&nbsp;:

{{EmbedLiveSample("", 600, 40)}}

### Les champs de recherche et l'accessibilité

Un des problèmes posé par les formulaires de recherche est leur accessibilité. En effet, dans la plupart des situations, il n'est pas nécessaire de fournir une étiquette indiquant le rôle de la recherche, car le placement du champ rend son rôle clair ([voici un exemple](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

En revanche, pour les personnes qui utilisent des technologies d'assistance, cela peut être source de confusion. Une façon de résoudre ce problème sans modifier l'organisation visuelle est d'utiliser les fonctionnalités [WAI-ARIA](/fr/docs/Learn/Accessibility/WAI-ARIA_basics)&nbsp;:

- Utiliser un attribut `role` avec la valeur `search` sur l'élément `<form>` permettra aux lecteurs d'écran d'indiquer le formulaire comme étant un formulaire de recherche.
- Si cela n'est pas suffisant, il est possible d'utiliser l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Attributes/aria-label) sur l'élément [`<input>`](/fr/docs/Web/HTML/Element/Input). Cet attribut peut contenir un texte descriptif qui sera lu à voix haute par un lecteur d'écran. Il s'agit d'un équivalent non-visuel de `<label>`.

Prenons un exemple&nbsp;:

```html
<form role="search">
  <div>
    <input type="search" id="maRecherche" name="q"
     placeholder="Rechercher sur le site…"
     aria-label="Rechercher parmi le contenu du site">
    <button>Rechercher</button>
  </div>
</form>
```

Voici le résultat obtenu grâce à ce fragment HTML&nbsp;:

{{EmbedLiveSample("", 600, 40)}}

Il n'y a aucune différence visuelle avec l'exemple précédent mais avec cette deuxième version, les personnes qui utilisent un lecteur d'écran disposeront de plus d'informations.

> **Note :** Voir [Panneaux/points de repère](/fr/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) pour plus d'informations à propos de ces fonctionnalités relatives à l'accessibilité.

### Paramétrer la taille physique

Il est possible de contrôler la taille physique du champ de saisie grâce à l'attribut [`size`](/fr/docs/Web/HTML/Element/Input#attr-size). Cet attribut permet d'indiquer le nombre de caractères qui peuvent être affichés simultanément à l'intérieur du champ. Ainsi, dans l'exemple qui suit, la zone de recherche peut contenir 30 caractères&nbsp;:

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q"
    placeholder="Rechercher sur le site…" size="30">
    <button>Rechercher</button>
  </div>
</form>
```

On obtient une boîte de recherche plus large qu'auparavant&nbsp;:

{{EmbedLiveSample('', 600, 40)}}

## Validation

Les éléments `<input>` de type `search` possèdent les mêmes fonctionnalités de validation que les éléments `<input type="text">`. Il existe peu de raison de contraindre les termes d'une recherche mais voici quelques cas.

> **Note :** Attention, la validation des données d'un formulaire de recherche HTML par le client _ne doit pas remplacer_ la vérification de ces données lorsqu'elles sont reçues sur le serveur. En effet, il est tout à fait possible pour quelqu'un de modifier le code HTML de la page pour outrepasser les mécanismes de validation. Il est également possible d'envoyer des données directement au serveur. Si le serveur ne valide pas les données reçues, des données potentiellement mal formatées pourraient causer des dommages aux bases de données et autres composants sensibles.

### Une note sur la mise en forme

Les pseudo-classes CSS [`:valid`](/fr/docs/Web/CSS/:valid) et [`:invalid`](/fr/docs/Web/CSS/:invalid) permettent de mettre en forme les éléments d'un formulaire en fonction de la validité de leur contenu. Dans cette section, nous utiliserons la feuille de style suivante afin de placer une coche à côté des champs valides et une croix à côté des champs invalides.

```css
input:invalid ~ span:after {
  content: '✖';
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span:after {
  content: '✓';
  padding-left: 5px;
  position: absolute
}
```

Vous pouvez ici voir qu'on utilise un élément [`<span>`](/fr/docs/Web/HTML/Element/span) placé après l'élément du formulaire, c'est cet élément `<span>` qui contiendra les icônes. Cet élément est nécessaire car, sur certains navigateurs, les pseudo-classes dans les éléments de saisie sont mal gérées.

### Rendre le champ obligatoire

Il est possible d'utiliser l'attribut [`required`](/fr/docs/Web/HTML/Element/Input#attr-required) afin d'indiquer que la valeur doit obligatoirement être saisie avant d'envoyer le formulaire&nbsp;:

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q"
    placeholder="Recherche sur le site…" required>
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
  content: '✖';
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span:after {
  content: '✓';
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample('', 600, 40)}}

De plus, si on essaie d'envoyer le formulaire sans aucun terme de recherche, le navigateur affichera un message. Voici par exemple, le résultat dans Firefox&nbsp;:

![Champ de formulaire avec un message attaché indiquant 'veuillez compléter ce champ'](message-requis-firefox.png)

Différents messages peuvent être affichés selon le type d'erreur liée à la saisie, voir les exemples qui suivent.

### Contraindre la taille de la valeur saisie

Il est possible d'indiquer une taille minimale pour la longueur des termes de la recherche via l'attribut [`minlength`](/fr/docs/Web/HTML/Element/Input#attr-minlength). De même, on peut fixer la longueur maximale du texte qui peut être saisi pour la recherche grâce à l'attribut [`maxlength`](/fr/docs/Web/HTML/Element/Input#attr-maxlength). Ces deux attributs sont exprimés en nombres de caractères.

Dans l'exemple qui suit, la valeur saisie dans le champ de recherche doit mesurer entre 4 et 8 caractères.

```html
<form>
  <div>
    <label for="mySearch">Rechercher une utilisatrice ou un utilisateur</label>
    <input type="search" id="mySearch" name="q"
    placeholder="ID de 4 à 8 char." required
    size="30" minlength="4" maxlength="8">
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
  content: '✖';
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span:after {
  content: '✓';
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu avec ce fragment de code HTML&nbsp;:

{{EmbedLiveSample('', 600, 100)}}

Si vous essayez de soumettre une valeur qui est plus petite que 4 caractères, vous aurez un message d'erreur (qui peut varier selon le navigateur utilisé). De plus, le navigateur ne permettra pas de saisir un texte plus long que 8 caractères.

### Indiquer un motif

L'attribut [`pattern`](/fr/docs/Web/HTML/Element/Input#attr-pattern) permet d'indiquer une expression rationnelle que doit respecter la valeur saisie pour être considérée valide (cf. [Validation selon une expression régulière](/fr/docs/Learn/Forms/Form_validation#validation_selon_une_expression_régulière) pour une introduction).

Prenons un exemple. Imaginons qu'on veuille rechercher un produit grâce à son identifiant et que les identifiants commencent par deux lettres, suivies de 4 chiffres. Dans l'exemple qui suit, le formulaire n'accepte qu'une valeur dont la taille est comprise entre 4 et 8 caractères et qui commence par deux lettres puis termine par 4 chiffres.

```html
<form>
  <div>
    <label for="mySearch">Rechercher un produit par son code :</label>
    <input type="search" id="mySearch" name="q"
    placeholder="2 lettres puis 4 chiffres" required
    size="30" pattern="[A-z]{2}[0-9]{4}">
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span:after {
  content: '✖';
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span:after {
  content: '✓';
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu avec ce fragment HTML&nbsp;:

{{EmbedLiveSample('', 600, 100)}}

## Exemples

Vous pouvez consulter un exemple de formulaire de recherche dans notre exemple [`website-aria-roles`](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles) ([voir la démonstration <i lang="en">live</i>](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formulaires HTML](/fr/docs/Learn/Forms)
- [`<input>`](/fr/docs/Web/HTML/Element/Input) et l'interface [`HTMLInputElement`](/fr/docs/Web/API/HTMLInputElement) DOM qui le porte
- [`<input type="text">`](/fr/docs/Web/HTML/Element/Input/text)
- [La compatibilité des propriétés CSS](/fr/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
