---
title: <input type="search">
slug: Web/HTML/Reference/Elements/input/search
l10n:
  sourceCommit: 30eaa394709dfb8e1bd6ccc85239b432152aaf9b
---

Les éléments {{HTMLElement("input")}} de type **`search`** sont des champs de texte conçus pour que l'utilisateur puisse saisir des requêtes de recherche. Ils sont fonctionnellement identiques aux champs [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text), mais peuvent être mis en forme différemment par {{Glossary("user agent", "l'agent utilisateur")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;input type=&quot;search&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<label for="site-search">Rechercher sur le site&nbsp;:</label>
<input type="search" id="site-search" name="q" />

<button>Rechercher</button>
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

L'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) contient une chaîne de caractères représentant la valeur contenue dans le champ de recherche. Vous pouvez récupérer cette valeur en utilisant la propriété [`HTMLInputElement.value`](/fr/docs/Web/API/HTMLInputElement/value) en JavaScript.

```js
termesRecherche = monChampSearch.value;
```

Si aucune contrainte de validation n'est imposée (cf. la section [Validation](#validation) pour plus de détails), la valeur peut être un texte ou une chaîne de caractères vide (`""`).

## Attributs supplémentaires

En plus des [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) et des attributs communs à tous les éléments {{HTMLElement("input")}} quel que soit leur type, les champs de recherche prennent en charge les attributs suivants.

### `list`

La valeur de cet attribut est l'identifiant ({{DOMxRef("Element.id", "id")}}) d'un élément {{HTMLElement("datalist")}} situé dans le même document. L'élément {{HTMLElement("datalist")}} fournit une liste de valeurs prédéfinies qui doivent être suggérées lors de la saisie dans le champ. Toute valeur de cette liste qui n'est pas compatible avec le type de champ ([`type`](/fr/docs/Web/HTML/Reference/Elements/input#type)) ne sera pas incluse dans les suggestions. Les valeurs fournies sont des suggestions et pas des contraintes&nbsp;: il reste tout à fait possible de choisir une valeur différente que celles de la liste.

### `maxlength`

La longueur maximale de la chaîne de caractères (mesurée en {{Glossary("UTF-16", "unités de code UTF-16")}}) que l'utilisateur·ice peut saisir dans le champ de recherche. Cela doit être une valeur entière de 0 ou plus. Si aucun `maxlength` n'est défini, ou si une valeur invalide est défini, le champ de recherche n'a pas de longueur maximale. Cette valeur doit également être supérieure ou égale à la valeur de `minlength`.

L'entrée de formulaire échouera à la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte saisi dans le champ est supérieure à `maxlength` {{Glossary("UTF-16", "unités de code UTF-16")}}. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur·ice.

### `minlength`

La longueur minimale de la chaîne de caractères (mesurée en {{Glossary("UTF-16", "unités de code UTF-16")}}) que l'utilisateur·ice peut saisir dans le champ de recherche. Cela doit être une valeur entière de 0 ou plus. Si aucun `minlength` n'est défini, ou si une valeur invalide est défini, le champ de recherche n'a pas de longueur minimale. Cette valeur doit également être inférieure ou égale à la valeur de `maxlength`.

L'entrée de formulaire échouera à la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) si la longueur du texte saisi dans le champ est inférieure à `minlength` {{Glossary("UTF-16", "unités de code UTF-16")}}. La validation des contraintes n'est appliquée que lorsque la valeur est modifiée par l'utilisateur·ice.

### `pattern`

L'attribut `pattern`, lorsqu'il est défini, est une expression régulière que la valeur de l'élément [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) doit correspondre pour que la valeur passe la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Il doit s'agir d'une expression régulière JavaScript valide, telle qu'utilisée par le type {{JSxRef("RegExp")}}, et comme documenté dans notre [guide sur les expressions régulières](/fr/docs/Web/JavaScript/Guide/Regular_expressions)&nbsp;; le drapeau `'u'` est défini lors de la compilation de l'expression régulière afin que le modèle soit traité comme une séquence de points de code Unicode, au lieu de {{Glossary("ASCII")}}. Aucune barre oblique ne doit être définie autour du texte du modèle.

Si le motif défini n'est pas défini ou est invalide, aucune expression régulière n'est appliquée et cet attribut est complètement ignoré.

> [!NOTE]
> Utilisez l'attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/input#title) pour définir un texte que la plupart des navigateurs afficheront comme info-bulle pour expliquer les exigences de correspondance du motif. Vous devriez également inclure d'autres textes explicatifs à proximité.

Voir la section [Définir un motif](#définir_un_motif) pour plus de détails et un exemple.

### `placeholder`

L'attribut `placeholder` est une chaîne de caractères qui fournis à l'utilisateur·ice une brève indication sur le type d'informations attendues dans le champ. Il doit s'agir d'un mot ou d'une courte phrase qui précise le type de données attendu, plutôt que d'un message explicatif. Le texte ne doit pas comporter de retours chariot ni de sauts de ligne.

Si le contenu du contrôle a une direction ({{Glossary("LTR")}} ou {{Glossary("RTL")}}) mais que le texte de remplacement doit s'afficher dans la direction opposée, vous pouvez utiliser des caractères de formatage bidirectionnels Unicode pour remplacer la direction au sein du texte de remplacement&nbsp;; voir [Comment utiliser des contrôles Unicode pour le texte bidirectionnel <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-bidi-unicode-controls) pour plus d'informations.

> [!NOTE]
> Évitez d'utiliser l'attribut `placeholder` si possible. Il n'est pas aussi utile sur le plan sémantique que d'autres moyens pour expliquer votre formulaire, et peut causer des problèmes techniques inattendus avec votre contenu. Voir [Les libellés `<input>`](/fr/docs/Web/HTML/Reference/Elements/input#labels) pour plus d'informations.

### `readonly`

Un attribut booléen qui, s'il est présent, indique que le champ ne peut pas être édité dans le formulaire. La valeur du champ (portée par l'attribut `value`) peut toutefois être modifiée par du code JavaScript, qui changerait la propriété `value` rattachée à l'interface {{DOMxRef("HTMLInputElement")}}.

> [!NOTE]
> Un champ en lecture seule ne pouvant pas avoir de valeur, l'attribut `required` n'a pas d'effet particulier sur les champs pour lesquels `readonly` est appliqué.

### `size`

L'attribut `size` est une valeur numérique qui indique la largeur idéale du champ, exprimée en nombre de caractères. Sa valeur doit être un nombre supérieur à `0` et la valeur par défaut est `20`. Comme les caractères peuvent avoir une largeur différente entre eux, on ne doit pas s'attendre à ce que cette taille permette exactement de voir les n caractères, le contrôle résultant pourra être plus étroit ou plus large que le nombre indiqué en fonction des caractères saisis et de la police (voir la propriété CSS {{CSSxRef("font")}}) utilisée.

Cet attribut _n'impose pas_ de limite sur le nombre de caractères qui peuvent être saisis. Il indique uniquement, de façon approximative, le nombre de caractères visibles au même moment. Pour imposer une contrainte de taille sur la longueur maximale de la valeur saisissable, on pourra utiliser l'attribut [`maxlength`](#maxlength).

### `spellcheck`

[`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck) est un attribut universel qui est utilisé afin d'indiquer si la vérification orthographique doit être activée sur un élément. Il peut être utilisé sur n'importe quel contenu éditable. On considère ici les aspects spécifiques de `spellcheck` sur les éléments {{HTMLElement("input")}}. Les valeurs autorisées pour `spellcheck` sont&nbsp;:

- `false`
  - : La vérification orthographique est désactivée pour l'élément.
- `true`
  - : La vérification orthographique est activée pour l'élément.
- `""` (la chaîne vide) ou aucune valeur
  - : C'est le comportement par défaut de l'élément qui est utilisé pour déterminer si la vérification est active ou non. Cela peut être déduit de la valeur `spellcheck` sur un élément parent ou d'autres facteurs.

Un champ de saisi peut avoir la vérification orthographique activée s'il n'utilise pas l'attribut [`readonly`](#readonly) et qu'il n'est pas désactivé.

La valeur renvoyée par la lecture de `spellcheck` peut ne pas refléter l'état réel de la vérification orthographique pour le contrôle (par exemple, si des préférences au sein de {{Glossary("user agent", "l'agent utilisateur")}} surchargent ce paramètre).

## Attributs non standard

Les attributs non standard suivants sont disponibles pour les champs de recherche.
Toutefois, vu leur caractère spécifique, mieux vaut ne pas les utiliser.

### `incremental`

L'attribut booléen `incremental` est une extension de WebKit et Blink (donc pris en charge par les navigateurs Safari, Opera, Chrome, etc.) qui, si présent, indique à {{Glossary("user agent", "l'agent utilisateur")}} de traiter la saisie comme une recherche en temps réel. Lorsque l'utilisateur·ice modifie la valeur du champ, l'agent utilisateur envoie des évènements {{DOMxRef("HTMLInputElement/search_event", "search")}} à l'objet {{DOMxRef("HTMLInputElement")}} représentant la zone de recherche. Cela permet à votre code de mettre à jour les résultats de recherche en temps réel pendant que l'utilisateur·ice modifie la recherche.

Si `incremental` n'est pas défini, l'évènement {{DOMxRef("HTMLInputElement/search_event", "search")}} n'est envoyé que lorsque l'utilisateur·ice initie explicitement une recherche (par exemple en appuyant sur la touche <kbd>Entrée</kbd> ou <kbd>Retour</kbd> lors de l'édition du champ).

La fréquence maximale à laquelle l'évènement `search` est envoyé est définie par chaque implémentation.

### `results`

L'attribut `results` — spécifique à Safari — est une valeur numérique qui permet de surcharger le nombre maximum d'entrées à afficher dans le menu déroulant fourni nativement par l'élément {{HTMLElement("input")}} pour les recherches précédentes.

Cette valeur doit être un nombre positif. Si cet attribut n'est pas fourni, ou que sa valeur est invalide, ce sera le maximum fourni par le navigateur qui sera utilisé.

## Utiliser un champ de recherche

Les éléments `<input>` de type `search` sont semblables aux éléments de type `text` mais sont spécifiquement destinés à la gestion des termes d'une recherche. Leur comportement est équivalent, c'est leur mise en forme qui peut varier en fonction des navigateurs (et, bien entendu, en fonction des feuilles de style de chacun des sites).

### Exemple simple

```html
<form>
  <div>
    <input type="search" id="maRecherche" name="q" />
    <button>Rechercher</button>
  </div>
</form>
```

Cet exemple produira le résultat suivant&nbsp;:

{{EmbedLiveSample("Exemple simple", 600, 40)}}

`q` est la valeur la plus communément utilisée pour l'attribut `name` des champs de recherche mais cette valeur spécifique n'est pas obligatoire. Lorsque le formulaire est envoyé, les données envoyées au serveur auront la forme `q=termederecherche`.

> [!NOTE]
> Il est toujours nécessaire de fournir une valeur pour l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name), sinon aucune valeur ne sera envoyée.

### Différences entre les champs de recherche et les champs texte

La différence principale est la façon dont les navigateurs gèrent cet élément. Premièrement, certains navigateurs affichent une icône de croix dans la zone de saisie qui peut être utilisée pour retirer le terme de la recherche. Voici par exemple un aperçu de la fonctionnalité sous Chrome&nbsp;:

![Une entrée de formulaire sélectionnée, avec un contour de sélection, avec le texte 'cats'. Il y a une icône en forme de croix dans l'entrée de formulaire jouxtant le côté droit.](chrome-cross-icon.png)

De plus, les navigateurs modernes proposent souvent une auto-complétion basée sur les termes de recherche déjà utilisés sur le site. Ainsi, quand on réutilise le champ, différentes suggestions peuvent être affichées et utilisées. Cela facilite la réutilisation de recherches déjà saisies. Voici l'aperçu de cette fonctionnalité sous Firefox&nbsp;:

![Un champ de saisie en état d'erreur avec un anneau de mise au point rouge. L'utilisateur·ice a saisi la lettre 'h'. Une liste de sélection contextuelle est ouverte juste sous la zone de saisie avec deux options : hello et hermansje.](firefox-auto-complete.png)

### Ajouter un texte indicatif

Il est possible de fournir un texte indicatif dans le champ de recherche afin de fournir une indication quant aux recherches qu'il est possible de faire. Pour cela, on ajoutera un texte avec l'attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder). Par exemple&nbsp;:

```html
<form>
  <div>
    <input
      type="search"
      id="maRecherche"
      name="q"
      placeholder="Rechercher sur le site…" />
    <button>Rechercher</button>
  </div>
</form>
```

Voici le résultat obtenu avec ce fragment HTML&nbsp;:

{{EmbedLiveSample("Ajouter un texte indicatif", 600, 40)}}

### Les champs de recherche et l'accessibilité

Un des problèmes posé par les formulaires de recherche est leur accessibilité. En effet, dans la plupart des situations, il n'est pas nécessaire de fournir une étiquette indiquant le rôle de la recherche, car le placement du champ rend son rôle clair ([cet exemple montre un motif commun <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

Cela pourrait toutefois prêter à confusion pour les utilisateur·ice·s de lecteurs d'écran, car ceux-ci ne recevront aucune indication vocale sur la nature du champ de recherche. Une solution qui n'aura pas d'incidence sur la conception visuelle consiste à utiliser des [éléments de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role).

- Enveloppez toute la fonctionnalité de recherche dans un élément {{HTMLElement("search")}}, ce qui crée une région de repère que les technologies d'assistance peuvent annoncer et naviguer rapidement. Si votre `<input>` est déjà dans un `<form>`, vous pouvez alternativement ajouter [`role="search"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) à l'élément `<form>`, ce qui fait également du `<form>` un repère de recherche. L'élément `<search>` utilise la sémantique HTML native, tandis que `role="search"` bénéficie d'un meilleur support et peut être plus concis à taper si vous avez déjà un `<form>` englobant.
- Si cela ne suffit pas, vous pouvez utiliser un attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) sur le {{HTMLElement("input")}} lui-même. Il s'agit d'une étiquette textuelle descriptive qui sera lue par le lecteur d'écran&nbsp;; elle est utilisée comme équivalent non visuel de `<label>`.

Prenons un exemple&nbsp;:

```html
<form role="search">
  <div>
    <input
      type="search"
      id="maRecherche"
      name="q"
      placeholder="Rechercher sur le site…"
      aria-label="Rechercher parmi le contenu du site" />
    <button>Rechercher</button>
  </div>
</form>
```

Voici le résultat obtenu grâce à ce fragment HTML&nbsp;:

{{EmbedLiveSample("Les champs de recherche et l'accessibilité", 600, 40)}}

Il n'y a aucune différence visuelle avec l'exemple précédent mais avec cette deuxième version, les personnes qui utilisent un lecteur d'écran disposeront de plus d'informations.

> [!NOTE]
> Voir [Panneaux/points de repère](/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#signpostslandmarks) pour plus d'informations à propos de ces fonctionnalités relatives à l'accessibilité.

### Paramétrer la taille physique

Il est possible de contrôler la taille physique du champ de saisie grâce à l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size). Cet attribut permet d'indiquer le nombre de caractères qui peuvent être affichés simultanément à l'intérieur du champ. Ainsi, dans l'exemple qui suit, la zone de recherche peut contenir 30 caractères&nbsp;:

```html
<form>
  <div>
    <input
      type="search"
      id="maRecherche"
      name="q"
      placeholder="Rechercher sur le site…"
      size="30" />
    <button>Rechercher</button>
  </div>
</form>
```

On obtient une boîte de recherche plus large qu'auparavant&nbsp;:

{{EmbedLiveSample("Paramétrer la taille physique", 600, 40)}}

## Validation

Les éléments `<input>` de type `search` possèdent les mêmes fonctionnalités de validation que les éléments `<input type="text">`. Il existe peu de raison de contraindre les termes d'une recherche mais voici quelques cas.

> [!NOTE]
> Attention, la validation des données d'un formulaire de recherche HTML par le client _ne doit pas remplacer_ la vérification de ces données lorsqu'elles sont reçues sur le serveur. En effet, il est tout à fait possible pour quelqu'un de modifier le code HTML de la page pour outrepasser les mécanismes de validation. Il est également possible d'envoyer des données directement au serveur. Si le serveur ne valide pas les données reçues, des données potentiellement mal formatées pourraient causer des dommages aux bases de données et autres composants sensibles.

### Une note sur la mise en forme

Il existe des pseudo-classes utiles pour mettre en forme les éléments de formulaire valides/invalide&nbsp;: {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}. Dans cette section, nous utiliserons la feuille de style suivante, qui placera une coche à côté des champs dont la valeur est valide et une croix à côté des champs dont la valeur est invalide.

```css
input:invalid ~ span::after {
  content: "✖";
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span::after {
  content: "✓";
  padding-left: 5px;
  position: absolute;
}
```

Vous pouvez ici voir qu'on utilise un élément {{HTMLElement("span")}} placé après l'élément de formulaire, qui sert de conteneur pour les icônes. Cela était nécessaire car certains types d'éléments de saisie, sur certains navigateurs, n'affichent pas correctement les icônes placées directement après eux.

### Rendre le champ obligatoire

Il est possible d'utiliser l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) afin d'indiquer que la valeur doit obligatoirement être saisie avant d'envoyer le formulaire&nbsp;:

```html
<form>
  <div>
    <input
      type="search"
      id="maRecherche"
      name="q"
      placeholder="Recherche sur le site…"
      required />
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span::after {
  content: "✖";
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span::after {
  content: "✓";
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu&nbsp;:

{{EmbedLiveSample("Rendre le champ obligatoire", 600, 40)}}

De plus, si on essaie d'envoyer le formulaire sans aucun terme de recherche, le navigateur affichera un message. Voici par exemple, le résultat dans Firefox&nbsp;:

![Champ de formulaire avec un message attaché indiquant 'veuillez compléter ce champ'](firefox-required-message.png)

Différents messages peuvent être affichés selon le type d'erreur liée à la saisie, voir les exemples qui suivent.

### Contraindre la taille de la valeur saisie

Il est possible d'indiquer une taille minimale pour la longueur des termes de la recherche avec l'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Elements/input#minlength). De même, on peut fixer la longueur maximale du texte qui peut être saisi pour la recherche grâce à l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength). Ces deux attributs sont exprimés en nombres de caractères.

Dans l'exemple qui suit, la valeur saisie dans le champ de recherche doit mesurer entre 4 et 8 caractères.

```html
<form>
  <div>
    <label for="mySearch">Rechercher une utilisatrice ou un utilisateur</label>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="ID de 4 à 8 char."
      required
      size="30"
      minlength="4"
      maxlength="8" />
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span::after {
  content: "✖";
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span::after {
  content: "✓";
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu avec ce fragment de code HTML&nbsp;:

{{EmbedLiveSample("Contraindre la taille de la valeur saisie", 600, 100)}}

Si vous essayez de soumettre une valeur qui est plus petite que 4 caractères, vous aurez un message d'erreur (qui peut varier selon le navigateur utilisé). De plus, le navigateur ne permettra pas de saisir un texte plus long que 8 caractères.

### Indiquer un motif

L'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) permet d'indiquer une expression rationnelle que doit respecter la valeur saisie pour être considérée valide (cf. [Validation selon une expression régulière](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation#validation_selon_une_expression_régulière) pour une introduction).

Regardons un exemple. Imaginons que nous voulions fournir un formulaire de recherche par identifiant de produit, et que les identifiants soient tous des codes composés de deux lettres suivies de quatre chiffres. L'exemple suivant couvre ce cas&nbsp;:

```html
<form>
  <div>
    <label for="mySearch">Rechercher un produit par son code :</label>
    <input
      type="search"
      id="mySearch"
      name="q"
      placeholder="2 lettres puis 4 chiffres"
      required
      size="30"
      pattern="[A-z]{2}[0-9]{4}" />
    <button>Rechercher</button>
    <span class="validity"></span>
  </div>
</form>
```

```css hidden
input {
  margin-right: 10px;
}

input:invalid ~ span::after {
  content: "✖";
  padding-left: 5px;
  position: absolute;
}

input:valid ~ span::after {
  content: "✓";
  padding-left: 5px;
  position: absolute;
}
```

Voici le résultat obtenu avec ce fragment HTML&nbsp;:

{{EmbedLiveSample("Indiquer un motif", 600, 100)}}

## Exemples

Vous pouvez consulter un exemple de formulaire de recherche dans notre exemple [`website-aria-roles` <sup>(angl.)</sup>](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles) ([voir la démonstration en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)).

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#valeur">Valeur</a></strong></td>
      <td>
        Une chaîne de caractères qui représente la valeur contenue dans le champ de recherche.
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
      <td><strong>Attributs pris en charge</strong></td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#list"><code>list</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>.
      </td>
    <tr>
      <td><strong>Attributs IDL</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Interface DOM</strong></td>
      <td>{{DOMxRef("HTMLInputElement")}}</td>
    </tr>
    <tr>
      <td><strong>Méthodes</strong></td>
      <td>
        {{DOMxRef("HTMLInputElement.select", "select()")}},
        {{DOMxRef("HTMLInputElement.setRangeText", "setRangeText()")}},
        {{DOMxRef("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}.
      </td>
    </tr>
     <tr>
      <td><strong>Rôle ARIA implicite</strong></td>
      <td>
        sans l'attribut <code>list</code>&nbsp;:
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role">searchbox</a></code><br />
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

- [Les formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
- L'élément {{HTMLElement("input")}} et l'interface {{DOMxRef("HTMLInputElement")}} qui l'implémente
- L'élément [`<input type="text">`](/fr/docs/Web/HTML/Reference/Elements/input/text)
