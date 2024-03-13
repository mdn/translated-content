---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLInputElement`** fournit les propriétés et les méthodes pour manipuler les options, la disposition et la présentation des éléments [`<input>`](/fr/docs/Web/HTML/Element/input).

{{InheritanceDiagram}}

## Propriétés

Certaines propriétés ne s'appliquent qu'aux types d'éléments `<input>` qui prennent en charge les attributs correspondants.

- [`align`](/fr/docs/Web/API/HTMLInputElement/align) {{deprecated_inline}}
  - : Une chaîne de caractères qui représente l'alignement de l'élément. _On utilisera CSS à la place._
- [`autocapitalize`](/fr/docs/Web/API/HTMLInputElement/autocapitalize) {{experimental_inline}}
  - : Une chaîne de caractères qui définit le comportement à suivre pour mettre en capitales la valeur saisie. Les valeurs valides sont `none`, `off`, `characters`, `words`, ou `sentences`.
- [`defaultValue`](/fr/docs/Web/API/HTMLInputElement/defaultValue)
  - : Une chaîne de caractères qui permet de lire ou d'écrire la valeur par défaut telle qu'originellement indiquée dans le HTML à l'origine de cet objet.
- [`dirName`](/fr/docs/Web/API/HTMLInputElement/dirName)
  - : Une chaîne de caractères qui permet de lire ou d'écrire le sens d'écriture de l'élément.
- [`inputmode`](/fr/docs/Web/API/HTMLInputElement/inputmode)
  - : Fournit une indication au navigateur quant à la configuration de clavier virtuel à utiliser lors de l'édition de cet élément ou de son contenu.
- [`labels`](/fr/docs/Web/API/HTMLInputElement/labels) {{readonlyInline}}
  - : Un tableau [`NodeList`](/fr/docs/Web/API/NodeList) contenant une liste des éléments [`<label>`](/fr/docs/Web/HTML/Element/Label) utilisés comme libellés pour cet élément.
- [`list`](/fr/docs/Web/API/HTMLInputElement/list) {{readonlyInline}}
  - : Un objet [`HTMLElement`](/fr/docs/Web/API/HTMLElement) qui correspond à l'élément ciblé par l'attribut [`list`](/fr/docs/Web/HTML/Element/input#list). Cette propriété peut valoir `null` si aucun élément HTML n'a été trouvé dans le même arbre.
- [`multiple`](/fr/docs/Web/API/HTMLInputElement/multiple)
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`multiple`](/fr/docs/Web/HTML/Element/input#multiple) de l'élément qui indique que plusieurs valeurs sont possibles (par exemple pour sélectionner plusieurs fichiers).
- [`name`](/fr/docs/Web/API/HTMLInputElement/name)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`name`](/fr/docs/Web/HTML/Element/input#name) de l'élément qui indique le nom identifiant l'élément lors de l'envoi du formulaire.
- [`step`](/fr/docs/Web/API/HTMLInputElement/step)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`step`](/fr/docs/Web/HTML/Element/input#step) de l'élément. Cet attribut fonctionne avec les attributs [`min`](/fr/docs/Web/HTML/Element/input#min) et [`max`](/fr/docs/Web/HTML/Element/input#max) pour limiter l'incrément d'une valeur numérique ou temporelle. Elle peut être la chaîne de caractères `any` ou un nombre décimal positif. Si la valeur n'est pas `any`, le contrôle acceptera uniquement les multiples de l'incrément depuis la valeur minimale.
- [`type`](/fr/docs/Web/API/HTMLInputElement/type)
  - : Une chaîne de caractères qui permet de lire ou d'écrire [`type`](/fr/docs/Web/HTML/Element/input#type) de l'élément qui indique le type de contrôle à afficher. Voir la documentation de [`type`](/fr/docs/Web/HTML/Element/input#type) pour l'élément [`<input>`](/fr/docs/Web/HTML/Element/input) pour les valeurs possibles.
- [`useMap`](/fr/docs/Web/API/HTMLInputElement/useMap) {{deprecated_inline}}
  - : Une chaîne de caractères qui représente une carte d'images côté client.
- [`value`](/fr/docs/Web/API/HTMLInputElement/value)
  - : Une chaîne de caractères qui permet de lire ou d'écrire la valeur contenue dans le contrôle. Si l'utilisatrice ou l'utilisateur saisit une valeur différente de la valeur attendue, cette propriété pourra renvoyer une chaîne vide.
- [`valueAsDate`](/fr/docs/Web/API/HTMLInputElement/valueAsDate)
  - : Un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) qui permet de lire ou d'écrire la valeur de l'élément interprétée comme une date, ou `null` si la conversion n'est pas possible.
- [`valueAsNumber`](/fr/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Une valeur numérique `double` qui renvoie la valeur de l'élément interprété dans l'ordre comme&nbsp;: une valeur temporelle, un nombre, ou `NaN` si la conversion est impossible

### Propriétés relatives au formulaire parent

- [`form`](/fr/docs/Web/API/HTMLInputElement/form) {{readonlyInline}}
  - : Un objet [`HTMLFormElement`](/fr/docs/Web/API/HTMLFormElement) correspondant à l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) parent.
- [`formAction`](/fr/docs/Web/API/HTMLInputElement/formAction)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`formaction`](/fr/docs/Web/HTML/Element/input#formaction) de l'élément, qui contient l'URI d'un programme traitant les informations envoyées avec l'élément. Cet attribut HTML surcharge l'attribut [`action`](/fr/docs/Web/HTML/Element/Form#action) du formulaire parent.
- [`formEnctype`](/fr/docs/Web/API/HTMLInputElement/formEnctype)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`formenctype`](/fr/docs/Web/HTML/Element/input#formenctype) de l'élément, qui contient le type de contenu utilisé pour envoyer le formulaire au serveur. Cet attribut HTML surcharge l'attribut [`enctype`](/fr/docs/Web/HTML/Element/Form#enctype) du formulaire parent.
- [`formMethod`](/fr/docs/Web/API/HTMLInputElement/formMethod)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`formmethod`](/fr/docs/Web/HTML/Element/input#formmethod) de l'élément, qui contient la méthode HTTP utilisée par le navigateur pour envoyer le formulaire. Cet attribut HTML surcharge l'attribut [`method`](/fr/docs/Web/HTML/Element/Form#method) du formulaire parent.
- [`formNoValidate`](/fr/docs/Web/API/HTMLInputElement/formNoValidate)
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`formnovalidate`](/fr/docs/Web/HTML/Element/input#formnovalidate) de l'élément, qui indique que le formulaire n'a pas à être validé lors de l'envoi. Cet attribut HTML surcharge l'attribut [`novalidate`](/fr/docs/Web/HTML/Element/Form#novalidate) du formulaire parent.
- [`formTarget`](/fr/docs/Web/API/HTMLInputElement/formTarget)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`formtarget`](/fr/docs/Web/HTML/Element/input#formtarget) de l'élément, qui contient un nom ou un mot-clé indiquant où afficher la réponse reçue après l'envoi du formulaire. Cet attribut HTML surcharge l'attribut [`target`](/fr/docs/Web/HTML/Element/Form#target) du formulaire parent.

### Propriétés qui s'appliquent à tous les éléments `<input>` qui ne sont pas masqués

- [`autofocus`](/fr/docs/Web/API/HTMLInputElement/autofocus)
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`autofocus`](/fr/docs/Web/HTML/Element/input#autofocus) de l'élément, qui indique qu'un contrôle de formulaire devrait recevoir le focus au chargement de la page, à moins que la personne ait déjà sélectionné un autre contrôle. Seul un élément de formulaire d'un document peut avoir l'attribut [`autofocus`](/fr/docs/Web/HTML/Element/input#autofocus).
- [`disabled`](/fr/docs/Web/API/HTMLInputElement/disabled)
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`disabled`](/fr/docs/Web/HTML/Element/input#disabled) de l'élément, qui indique qu'on ne peut pas interagir avec le contrôle. La valeur du champ ne sera pas envoyée avec le formulaire. Voir aussi [`readonly`](/fr/docs/Web/HTML/Element/input#readonly).
- [`required`](/fr/docs/Web/API/HTMLInputElement/required)
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`required`](/fr/docs/Web/HTML/Element/input#required) de l'élément, qui indique que le champ doit être renseigné avant de pouvoir envoyer le formulaire.
- [`validationMessage`](/fr/docs/Web/API/HTMLInputElement/validationMessage) {{readonlyInline}}
  - : Une chaîne de caractères qui renvoie un message localisé qui décrit les éventuelles contraintes de validation qu'il doit respecter. Cette propriété aura la chaîne vide comme valeur si le contrôle ne participe pas à la validation des contraintes (c'est-à-dire si [`willValidate`](/fr/docs/Web/API/HTMLInputElement/willValidate) vaut `false`), ou s'il respecte les contraintes. Cette valeur peut être définie avec la méthode [`setCustomValidity()`](/fr/docs/Web/API/HTMLInputElement/setCustomValidity).
- [`validity`](/fr/docs/Web/API/HTMLInputElement/validity) {{readonlyInline}}
  - : Renvoie un objet [`ValidityState`](/fr/docs/Web/API/ValidityState) qui traduit l'état de validité courant de l'élément.
- [`willValidate`](/fr/docs/Web/API/HTMLInputElement/willValidate) {{readonlyInline}}
  - : Un booléen qui indique si l'élément participe à la validation des contraintes. Il vaut `false` si au moins une condition empêche la validation de contrainte, incluant&nbsp;: l'attribut `type` qui vaut `hidden`, `reset`, ou `button`, la présence d'un ancêtre [`<datalist>`](/fr/docs/Web/HTML/Element/datalist), ou la propriété `disabled` à `true`.

### Propriétés pour `<input type="checkbox">` et `<input type="radio">`

- [`checked`](/fr/docs/Web/API/HTMLInputElement/checked)
  - : Un booleén qui permet de lire ou d'écrire l'état actuel de l'élément.
- [`defaultChecked`](/fr/docs/Web/API/HTMLInputElement/defaultChecked)
  - : Un booléen qui permet de lire ou d'écrire l'état par défaut du bouton radio ou de la case à cocher, tel qu'initialement indiqué en HTML par l'attribut `default`.
- [`indeterminate`](/fr/docs/Web/API/HTMLInputElement/indeterminate)
  - : Un booléen qui indique si la case à cocher ou le bouton radio est dans un état indéterminé. Pour les cases à cocher, cela se traduit par une case grisée d'une certaine façon (la case n'est ni cochée ni décochée). Cette propriété n'affecte pas la valeur de l'attribut `checked`, et cliquer sur la case à cocher la passera à `false` (décochée).

### Propriétés pour `<input type="image">`

- [`alt`](/fr/docs/Web/API/HTMLInputElement/alt)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`alt`](/fr/docs/Web/HTML/Element/input#alt) de l'élément, qui contient le texte alternatif à utiliser à la place de l'image.
- [`height`](/fr/docs/Web/API/HTMLInputElement/height)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`height`](/fr/docs/Web/HTML/Element/input#height) de l'élément, qui définit la hauteur de l'image affichée sur le bouton.
- [`src`](/fr/docs/Web/API/HTMLInputElement/src)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`src`](/fr/docs/Web/HTML/Element/input#src) de l'élément, qui définit l'URI d'un emplacement d'image à afficher sur le bouton graphique.
- [`width`](/fr/docs/Web/API/HTMLInputElement/width)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`width`](/fr/docs/Web/HTML/Element/input#width) de l'élément, qui définit la largeur de l'image affichée sur le bouton.

### Propriétés pour `<input type="file">`

- [`accept`](/fr/docs/Web/API/HTMLInputElement/accept)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`accept`](/fr/docs/Web/HTML/Element/input#accept) de l'élément, qui contient une liste de types de fichier, séparés par des virgules, qu'on peut sélectionner.
- [`allowdirs`](/fr/docs/Web/API/HTMLInputElement/allowdirs) {{non-standard_inline}}
  - : Un booléen qui indique si des répertoires peuvent être sélectionnés via le sélecteur de fichier. Fait partie de l'API non-standard <i lang="en">Directory Upload</i> et est uniquement implémentée dans Firefox et accessible via une préférence.
- [`files`](/fr/docs/Web/API/HTMLInputElement/files)
  - : Un objet [`FileList`](/fr/docs/Web/API/FileList) qui permet de manipuler la liste des objets [`File`](/fr/docs/Web/API/File) qui représente les fichiers sélectionnés pour l'<i lang="en">upload</i>.
- [`webkitdirectory`](/fr/docs/Web/API/HTMLInputElement/webkitdirectory) {{Non-standard_inline}}
  - : Un booléen qui renvoie la valeur de l'attribut [`webkitdirectory`](/fr/docs/Web/HTML/Element/input#webkitdirectory) de l'élément. S'il vaut `true`, cela indique que l'interface du sélecteur de fichier n'acceptera que les répertoires (plutôt que les fichiers).
- [`webkitEntries`](/fr/docs/Web/API/HTMLInputElement/webkitEntries) {{Non-standard_inline}}
  - : Un tableau [`FileSystemEntry`](/fr/docs/Web/API/FileSystemEntry) qui décrit les fichiers ou répertoires actuellement sélectionnés.

### Propriétés qui s'appliquent aux éléments visibles contenant du texte ou des nombres

- [`autocomplete`](/fr/docs/Web/API/HTMLInputElement/autocomplete)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`autocomplete`](/fr/docs/Web/HTML/Element/input#autocomplete) de l'élément, qui indique si la valeur du contrôle peut être automatiquement complétée par le navigateur.
- [`max`](/fr/docs/Web/API/HTMLInputElement/max)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`max`](/fr/docs/Web/HTML/Element/input#max) de l'élément, qui contient la valeur maximale (numérique ou temporelle) de la valeur pour ce champ. Cette valeur ne doit pas être inférieure à la valeur minimale portée par l'attribut [`min`](/fr/docs/Web/HTML/Element/input#min).
- [`maxLength`](/fr/docs/Web/API/HTMLInputElement/maxLength)
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'attribut [`maxlength`](/fr/docs/Web/HTML/Element/input#maxlength) de l'élément, qui contient le nombre maximal de caractères (exprimés en codets Unicode) que doit contenir la valeur.
- [`min`](/fr/docs/Web/API/HTMLInputElement/min)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`min`](/fr/docs/Web/HTML/Element/input#min) de l'élément, qui contient la valeur minimale (numérique ou temporelle) de la valeur pour ce champ. Cette valeur ne doit pas être supérieure à la valeur maximale portée par l'attribut [`max`](/fr/docs/Web/HTML/Element/input#max).
- [`minLength`](/fr/docs/Web/API/HTMLInputElement/minLength)
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'attribut [`maxlength`](/fr/docs/Web/HTML/Element/input#maxlength) de l'élément, qui contient le nombre minimal de caractères (exprimés en codets Unicode) que doit contenir la valeur.
- [`pattern`](/fr/docs/Web/API/HTMLInputElement/pattern)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`pattern`](/fr/docs/Web/HTML/Element/input#pattern) de l'élément, qui contient une expression rationnelle contre laquelle la valeur du contrôle est testée. On utilisera l'attribut [`title`](/fr/docs/Web/HTML/Element/input#title) afin de décrire le motif à respecter. Cet attribut s'applique uniquement lorsque l'attribut [`type`](/fr/docs/Web/HTML/Element/input#type) vaut `text`, `search`, `tel`, `url`, ou `email`.
- [`placeholder`](/fr/docs/Web/API/HTMLInputElement/placeholder)
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`placeholder`](/fr/docs/Web/HTML/Element/input#placeholder) de l'élément, qui contient une indication fournie à l'utilisatrice ou à l'utilisateur quant à ce qui peut être saisi dans le contrôle. Le texte d'indication ne doit pas contenir de retour chariot ou de passage à la ligne. Cet attribut s'applique uniquement lorsque l'attribut [`type`](/fr/docs/Web/HTML/Element/input#type) vaut `text`, `search`, `tel`, `url`, ou `email`.
- [`readOnly`](/fr/docs/Web/API/HTMLInputElement/readOnly)
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`readonly`](/fr/docs/Web/HTML/Element/input#readonly) de l'élément, qui indique qu'il n'est pas possible de modifier la valeur du contrôle. Cet attribut est ignoré si l'attribut [`type`](/fr/docs/Web/HTML/Element/input#type) vaut `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, ou `button`.
- [`selectionEnd`](/fr/docs/Web/API/HTMLInputElement/selectionEnd)
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'indice de fin pour le texte sélectionné. Lorsqu'il n'y a aucune sélection, cette propriété renvoie le décalage du caractère qui suit immédiatement le curseur pour le champ texte actuel.
- [`selectionStart`](/fr/docs/Web/API/HTMLInputElement/selectionStart)
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'indice de début pour le text sélectionné. Lorsqu'il n'y a aucune sélection, cette propriété renvoie la position du curseur de saisie à l'intérieur de l'élément [`<input>`](/fr/docs/Web/HTML/Element/input).
- [`selectionDirection`](/fr/docs/Web/API/HTMLInputElement/selectionDirection)
  - : Une chaîne de caractères qui permet de lire ou d'écrire la direction selon laquelle la sélection est effectuée. Les valeurs possibles sont&nbsp;: `forward` (la sélection a été effectuée dans le sens d'écriture de la locale courante), `backward` (le sens opposé), ou `none` (la direction est inconnue).
- [`size`](/fr/docs/Web/API/HTMLInputElement/size)
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'attribut [`size`](/fr/docs/Web/HTML/Element/input#size) de l'élément, qui contient la taille visuelle du contrôle. La valeur est exprimée en pixels à moins que [`type`](/fr/docs/Web/HTML/Element/input#type) vaille `text` ou `password`, auquel cas il s'agit du nombre de caractères. Cet attribut s'applique uniquement lorsque l'attribut [`type`](/fr/docs/Web/HTML/Element/input#type) vaut `text`, `search`, `tel`, `url`, `email`, ou `password`.

## Méthodes

- [`blur()`](/fr/docs/Web/API/HTMLElement/blur)
  - : Retire le focus de l'élément, les saisies au clavier qui suivent seront perdues.
- [`click()`](/fr/docs/Web/API/HTMLElement/click)
  - : Simule un clic sur l'élément
- [`focus()`](/fr/docs/Web/API/HTMLElement/focus)
  - : Passe le focus à l'élément, les saisies au clavier qui suivent s'appliqueront à cet élément.
- [`select()`](/fr/docs/Web/API/HTMLInputElement/select)
  - : Sélectionne tout le texte de l'élément et lui donne le focus afin que l'utilisatrice ou l'utilisateur puisse remplacer le contenu.
- [`setSelectionRange()`](/fr/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Sélectionne un intervalle de texte de l'élément (mais ne lui donne pas le focus).
- [`setRangeText()`](/fr/docs/Web/API/HTMLInputElement/setRangeText)
  - : Remplace un intervalle de texte de l'élément avec un nouveau texte.
- [`setCustomValidity()`](/fr/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Définit un message de validité spécifique pour l'élément. Si ce message n'est pas la chaîne vide, l'élément souffrira d'une erreur de validation spécifique et ne sera pas valide.
- [`showPicker()`](/fr/docs/Web/API/HTMLInputElement/showPicker)
  - : Affiche le sélecteur du navigateur pour une date, une heure, une couleur, ou des fichiers.
- [`checkValidity()`](/fr/docs/Web/API/HTMLInputElement/checkValidity)
  - : Renvoie un booléen qui vaut `false` si l'élément est candidat à la validation des contraintes, mais qu'il ne les respecte pas toutes. Dans ce cas, un évènement [`invalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event) est également déclenché sur l'élément. Cette méthode renvoie `true` si l'élément ne participe pas à la validation des contraintes ou si les contraintes sont respectées.
- [`reportValidity()`](/fr/docs/Web/API/HTMLInputElement/reportValidity)
  - : Exécute la méthode `checkValidity()` et, si celle-ci renvoie `false` (si un champ est invalide ou si aucun motif n'a été fourni), fourni la même indication à l'utilisatrice ou l'utilisateur, que celle affichée en cas de champ invalide lorsque le formulaire est envoyé.
- [`stepDown()`](/fr/docs/Web/API/HTMLInputElement/stepDown)

  - : Décrémente la valeur de l'attribut [`value`](/fr/docs/Web/HTML/Element/input#value) de ([`step`](/fr/docs/Web/HTML/Element/input#step) \* n), où n vaut 1 par défaut. Cette méthode déclenche une exception si&nbsp;:
    - Elle n'est pas applicable pour un champ qui a cet attribut [`type`](/fr/docs/Web/HTML/Element/input#type),
    - L'élément n'a pas de valeur pour l'attribut [`step`](/fr/docs/Web/HTML/Element/input#step),
    - Si l'attribut [`value`](/fr/docs/Web/HTML/Element/input#value) ne peut pas être converti en nombre,
    - Si la valeur résultante est supérieure à [`max`](/fr/docs/Web/HTML/Element/input#max) ou inférieure à [`min`](/fr/docs/Web/HTML/Element/input#min).

- [`stepUp()`](/fr/docs/Web/API/HTMLInputElement/stepUp)
  - : Incrémente la valeur de l'attribut [`value`](/fr/docs/Web/HTML/Element/input#value) de ([`step`](/fr/docs/Web/HTML/Element/input#step) \* n), où n vaut 1 par défaut. Cette méthode déclenche une exception si&nbsp;:
    - Elle n'est pas applicable pour un champ qui a cet attribut [`type`](/fr/docs/Web/HTML/Element/input#type),
    - L'élément n'a pas de valeur pour l'attribut [`step`](/fr/docs/Web/HTML/Element/input#step),
    - Si l'attribut [`value`](/fr/docs/Web/HTML/Element/input#value) ne peut pas être converti en nombre,
    - Si la valeur résultante est supérieure à [`max`](/fr/docs/Web/HTML/Element/input#max) ou inférieure à [`min`](/fr/docs/Web/HTML/Element/input#min).

## Évènements

Pour écouter ces évènements, on utilisera la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou on affectera un gestionnaire d'évènements à la propriété `onnomevenement` correspondante de cette interface&nbsp;:

- [`input`](/fr/docs/Web/API/HTMLElement/input_event)
  - : Déclenché lorsque la valeur d'un élément [`<input>`](/fr/docs/Web/HTML/Element/input), [`<select>`](/fr/docs/Web/HTML/Element/select), or [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) a changé. On notera qu'à strictement parler, cet évènement est déclenché sur l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) et s'applique également aux éléments qui ont l'attribut [`contenteditable`](/fr/docs/Web/HTML/Global_attributes/contenteditable). Toutefois, nous l'avons indiqué ici, car il est fréquemment utilisé avec les éléments de formulaire. Également disponible via la propriété [`oninput`](/fr/docs/Web/API/GlobalEventHandlers/oninput).
- [`invalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event)
  - : Déclenché lorsqu'un élément ne respecte pas les contraintes lors de la validation des contraintes. Également disponible via la propriété [`oninvalid`](/fr/docs/Web/API/GlobalEventHandlers/oninvalid).
- [`search`](/fr/docs/Web/API/HTMLInputElement/search_event)
  - : Déclenché lorsqu'une recherche est initiée sur un élément [`<input>`](/fr/docs/Web/HTML/Element/input) qui a `type="search"`. Également disponible via la propriété [`onsearch`](/fr/docs/Web/API/GlobalEventHandlers/onsearch).
- [`selectionchange`](/fr/docs/Web/API/HTMLInputElement/selectionchange_event) {{experimental_inline}}
  - : Déclenché lorsque la sélection du texte à l'intérieur d'un élément [`<input>`](/fr/docs/Web/HTML/Element/input) a changé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HMTL qui porte cette interface, [`<input>`](/fr/docs/Web/HTML/Element/input)
