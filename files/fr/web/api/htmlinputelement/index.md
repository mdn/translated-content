---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 6d4ac4a04fd5c01adc690b9c95de3d9261570212
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLInputElement`** fournit les propriétés et les méthodes pour manipuler les options, la disposition et la présentation des éléments HTML {{HTMLElement("input")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite également des propriétés de son interface parente, {{DOMxRef("HTMLElement")}}._

Certaines propriétés ne s'appliquent qu'aux types d'éléments `<input>` qui prennent en charge les attributs correspondants.

- `HTMLInputElement.align` {{Deprecated_Inline}}
  - : Une chaîne de caractères qui représente l'alignement de l'élément. _On utilisera CSS à la place._

- {{DOMxRef("HTMLInputElement.alpha")}} {{Experimental_Inline}}
  - : Un booléen qui représente l'attribut [`alpha`](/fr/docs/Web/HTML/Reference/Elements/input/color#alpha) de l'élément, indiquant si la composante alpha de la couleur peut être manipulée par l'utilisateur·ice et n'a pas besoin d'être complètement opaque.

- {{DOMxRef("HTMLInputElement.colorSpace")}} {{Experimental_Inline}}
  - : Une chaîne de caractères qui représente l'attribut [`colorspace`](/fr/docs/Web/HTML/Reference/Elements/input/color#colorspace) de l'élément, indiquant le {{Glossary("color space", "espace colorimétrique")}} de la couleur CSS sérialisée (sRGB ou display-p3).

- {{DOMxRef("HTMLInputElement.defaultValue")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire la valeur par défaut telle qu'originellement indiquée dans le HTML à l'origine de cet objet.

- {{DOMxRef("HTMLInputElement.dirName")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire le sens d'écriture de l'élément.

- `HTMLInputElement.incremental` {{Non-standard_Inline}}
  - : Un booléen qui représente le mode de déclenchement de l'évènement de recherche, s'il vaut `true`, il est déclenché à chaque frappe, ou lors du clic sur le bouton d'annulation&nbsp;; sinon, il est déclenché lors de l'appui sur <kbd>Entrée</kbd>.

- {{DOMxRef("HTMLInputElement.labels")}} {{ReadOnlyInline}}
  - : Retourne une liste d'éléments HTML {{HTMLElement("label")}} utilisés comme libellés pour cet élément.

- {{DOMxRef("HTMLInputElement.list")}} {{ReadOnlyInline}}
  - : Retourne l'élément ciblé par l'attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list). Cette propriété peut valoir `null` si aucun élément HTML n'a été trouvé dans le même arbre.

- {{DOMxRef("HTMLInputElement.multiple")}}
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/input#multiple) de l'élément qui indique que plusieurs valeurs sont possibles (par exemple pour sélectionner plusieurs fichiers).

- {{DOMxRef("HTMLInputElement.name")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name) de l'élément qui indique le nom identifiant l'élément lors de l'envoi du formulaire.

- {{DOMxRef("HTMLInputElement.popoverTargetAction")}}
  - : Permet de lire et d'écrire l'action à effectuer (`"hide"`, `"show"`, ou `"toggle"`) sur une fenêtre contextuelle contrôlée par un élément {{HTMLElement("input")}} de `type="button"`. Cette propriété reflète la valeur de l'attribut HTML [`popovertargetaction`](/fr/docs/Web/HTML/Reference/Elements/input#popovertargetaction).

- {{DOMxRef("HTMLInputElement.popoverTargetElement")}}
  - : Permet de lire et d'écrire l'élément fenêtre contextuelle à contrôler via un élément {{HTMLElement("input")}} de `type="button"`. Équivalent JavaScript de l'attribut HTML [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/input#popovertarget).

- {{DOMxRef("HTMLInputElement.step")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) de l'élément. Cet attribut fonctionne avec les attributs [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) et [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) pour limiter l'incrément d'une valeur numérique ou temporelle. Elle peut être la chaîne de caractères `any` ou un nombre décimal positif. Si la valeur n'est pas `any`, le contrôle acceptera uniquement les multiples de l'incrément depuis la valeur minimale.

- {{DOMxRef("HTMLInputElement.type")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) de l'élément qui indique le type de contrôle à afficher. Voir la documentation de [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) pour les valeurs possibles.

- `HTMLInputElement.useMap` {{Deprecated_Inline}}
  - : Une chaîne de caractères qui représente une carte d'images côté client.

- {{DOMxRef("HTMLInputElement.value")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire la valeur contenue dans le contrôle. Si l'utilisatrice ou l'utilisateur saisit une valeur différente de la valeur attendue, cette propriété pourra renvoyer une chaîne vide.

- {{DOMxRef("HTMLInputElement.valueAsDate")}}
  - : Un objet {{JSxRef("Date")}} qui permet de lire ou d'écrire la valeur de l'élément interprétée comme une date, ou `null` si la conversion n'est pas possible.

- {{DOMxRef("HTMLInputElement.valueAsNumber")}}
  - : Une valeur numérique `double` qui retourne la valeur de l'élément interprété dans l'ordre comme&nbsp;: une valeur temporelle, un nombre, ou `NaN` si la conversion est impossible

### Propriétés d'instance relatives au formulaire parent

- {{DOMxRef("HTMLInputElement.form")}} {{ReadOnlyInline}}
  - : Retourne la référence à l'élément {{HTMLElement("form")}} parent.

- {{DOMxRef("HTMLInputElement.formAction")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`formaction`](/fr/docs/Web/HTML/Reference/Elements/input#formaction) de l'élément, qui contient l'URI d'un programme traitant les informations envoyées avec l'élément. Cet attribut HTML surcharge l'attribut [`action`](/fr/docs/Web/HTML/Reference/Elements/form#action) du formulaire parent.

- {{DOMxRef("HTMLInputElement.formEnctype")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`formenctype`](/fr/docs/Web/HTML/Reference/Elements/input#formenctype) de l'élément, qui contient le type de contenu utilisé pour envoyer le formulaire au serveur. Cet attribut HTML surcharge l'attribut [`enctype`](/fr/docs/Web/HTML/Reference/Elements/form#enctype) du formulaire parent.

- {{DOMxRef("HTMLInputElement.formMethod")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`formmethod`](/fr/docs/Web/HTML/Reference/Elements/input#formmethod) de l'élément, qui contient la méthode HTTP utilisée par le navigateur pour envoyer le formulaire. Cet attribut HTML surcharge l'attribut [`method`](/fr/docs/Web/HTML/Reference/Elements/form#method) du formulaire parent.

- {{DOMxRef("HTMLInputElement.formNoValidate")}}
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`formnovalidate`](/fr/docs/Web/HTML/Reference/Elements/input#formnovalidate) de l'élément, qui indique que le formulaire n'a pas à être validé lors de l'envoi. Cet attribut HTML surcharge l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) du formulaire parent.

- {{DOMxRef("HTMLInputElement.formTarget")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`formtarget`](/fr/docs/Web/HTML/Reference/Elements/input#formtarget) de l'élément, qui contient un nom ou un mot-clé indiquant où afficher la réponse reçue après l'envoi du formulaire. Cet attribut HTML surcharge l'attribut [`target`](/fr/docs/Web/HTML/Reference/Elements/form#target) du formulaire parent.

### Propriétés d'instance qui s'appliquent à tous les éléments `<input>` qui ne sont pas masqués

- {{DOMxRef("HTMLInputElement.disabled")}}
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Elements/input#disabled) de l'élément, qui indique qu'on ne peut pas interagir avec le contrôle. La valeur du champ ne sera pas envoyée avec le formulaire. Voir aussi [`readonly`](/fr/docs/Web/HTML/Reference/Elements/input#readonly).

- {{DOMxRef("HTMLInputElement.required")}}
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) de l'élément, qui indique que le champ doit être renseigné avant de pouvoir envoyer le formulaire.

- {{DOMxRef("HTMLInputElement.validationMessage")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères qui retourne un message localisé qui décrit les éventuelles contraintes de validation qu'il doit respecter. Cette propriété aura la chaîne vide comme valeur si le contrôle ne participe pas à la validation des contraintes (c'est-à-dire si {{DOMxRef("HTMLInputElement.willValidate", "willValidate")}} vaut `false`), ou s'il respecte les contraintes. Cette valeur peut être définie avec la méthode {{DOMxRef("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}.

- {{DOMxRef("HTMLInputElement.validity")}} {{ReadOnlyInline}}
  - : Retourne un objet [`ValidityState`](/fr/docs/Web/API/ValidityState) qui traduit l'état de validité courant de l'élément.

- {{DOMxRef("HTMLInputElement.willValidate")}} {{ReadOnlyInline}}
  - : Un booléen qui indique si l'élément participe à la validation des contraintes. Il vaut `false` si au moins une condition empêche la validation de contrainte, incluant&nbsp;: l'attribut `type` qui vaut `hidden`, `reset`, ou `button`, la présence d'un ancêtre {{HTMLElement("datalist")}}, ou la propriété `disabled` à `true`.

### Propriétés d'instance seulement pour les éléments de type checkbox et radio

- {{DOMxRef("HTMLInputElement.checked")}}
  - : Un booleén qui permet de lire ou d'écrire l'état actuel de l'élément.

- {{DOMxRef("HTMLInputElement.defaultChecked")}}
  - : Un booléen qui permet de lire ou d'écrire l'état par défaut du bouton radio ou de la case à cocher, tel qu'initialement indiqué en HTML par l'attribut `default`.

- {{DOMxRef("HTMLInputElement.indeterminate")}}
  - : Un booléen qui indique si la case à cocher ou le bouton radio est dans un état indéterminé. Pour les cases à cocher, cela se traduit par une case grisée d'une certaine façon (la case n'est ni cochée ni décochée). Cette propriété n'affecte pas la valeur de l'attribut `checked`, et cliquer sur la case à cocher la passera à `false` (décochée).

### Propriétés d'instance seulement pour les éléments de type image

- {{DOMxRef("HTMLInputElement.alt")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`alt`](/fr/docs/Web/HTML/Reference/Elements/input#alt) de l'élément, qui contient le texte alternatif à utiliser à la place de l'image.

- {{DOMxRef("HTMLInputElement.height")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`height`](/fr/docs/Web/HTML/Reference/Elements/input#height) de l'élément, qui définit la hauteur de l'image affichée sur le bouton.

- {{DOMxRef("HTMLInputElement.src")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/input#src) de l'élément, qui définit l'URI d'un emplacement d'image à afficher sur le bouton graphique.

- {{DOMxRef("HTMLInputElement.width")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`width`](/fr/docs/Web/HTML/Reference/Elements/input#width) de l'élément, qui définit la largeur de l'image affichée sur le bouton.

### Propriétés d'instance seulement pour les éléments de type file

- {{DOMxRef("HTMLInputElement.accept")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Elements/input#accept) de l'élément, qui contient une liste de types de fichier, séparés par des virgules, qu'on peut sélectionner.

- {{DOMxRef("HTMLInputElement.capture")}}
  - : Une chaîne de caractères qui représente l'attribut [`capture`](/fr/docs/Web/HTML/Reference/Elements/input#capture) de l'élément, indiquant la méthode d'entrée de capture média dans les contrôles de téléchargement de fichiers.

- {{DOMxRef("HTMLInputElement.files")}}
  - : Un objet [`FileList`](/fr/docs/Web/API/FileList) qui permet de manipuler la liste des objets [`File`](/fr/docs/Web/API/File) qui représente les fichiers sélectionnés pour le téléversement.

- {{DOMxRef("HTMLInputElement.webkitdirectory")}} {{Non-standard_Inline}}
  - : Un booléen qui retourne la valeur de l'attribut [`webkitdirectory`](/fr/docs/Web/HTML/Reference/Elements/input#webkitdirectory) de l'élément. S'il vaut `true`, cela indique que l'interface du sélecteur de fichier n'acceptera que les répertoires (plutôt que les fichiers).

- {{DOMxRef("HTMLInputElement.webkitEntries")}} {{Non-standard_Inline}}
  - : Un tableau [`FileSystemEntry`](/fr/docs/Web/API/FileSystemEntry) qui décrit les fichiers ou répertoires actuellement sélectionnés.

### Propriétés d'instance qui s'appliquent aux éléments visibles contenant du texte ou des nombres

- {{DOMxRef("HTMLInputElement.autocomplete")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/input#autocomplete) de l'élément, qui indique si la valeur du contrôle peut être automatiquement complétée par le navigateur.

- {{DOMxRef("HTMLInputElement.max")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max) de l'élément, qui contient la valeur maximale (numérique ou temporelle) de la valeur pour ce champ. Cette valeur ne doit pas être inférieure à la valeur minimale portée par l'attribut [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min).

- {{DOMxRef("HTMLInputElement.maxLength")}}
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) de l'élément, qui contient le nombre maximal de caractères (exprimés en codets Unicode) que doit contenir la valeur.

- {{DOMxRef("HTMLInputElement.min")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`min`](/fr/docs/Web/HTML/Reference/Elements/input#min) de l'élément, qui contient la valeur minimale (numérique ou temporelle) de la valeur pour ce champ. Cette valeur ne doit pas être supérieure à la valeur maximale portée par l'attribut [`max`](/fr/docs/Web/HTML/Reference/Elements/input#max).

- {{DOMxRef("HTMLInputElement.minLength")}}
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Elements/input#maxlength) de l'élément, qui contient le nombre minimal de caractères (exprimés en codets Unicode) que doit contenir la valeur.

- {{DOMxRef("HTMLInputElement.pattern")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) de l'élément, qui contient une expression rationnelle contre laquelle la valeur du contrôle est testée. On utilisera l'attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/input#title) afin de décrire le motif à respecter. Cet attribut s'applique uniquement lorsque l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) vaut `text`, `search`, `tel`, `url`, ou `email`.

- {{DOMxRef("HTMLInputElement.placeholder")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire l'attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder) de l'élément, qui contient une indication fournie à l'utilisatrice ou à l'utilisateur quant à ce qui peut être saisi dans le contrôle. Le texte d'indication ne doit pas contenir de retour chariot ou de passage à la ligne. Cet attribut s'applique uniquement lorsque l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) vaut `text`, `search`, `tel`, `url`, ou `email`.

- {{DOMxRef("HTMLInputElement.readOnly")}}
  - : Un booléen qui permet de lire ou d'écrire l'attribut [`readonly`](/fr/docs/Web/HTML/Reference/Elements/input#readonly) de l'élément, qui indique qu'il n'est pas possible de modifier la valeur du contrôle. Cet attribut est ignoré si l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) vaut `hidden`, `range`, `color`, `checkbox`, `radio`, `file`, ou `button`.

- {{DOMxRef("HTMLInputElement.selectionDirection")}}
  - : Une chaîne de caractères qui permet de lire ou d'écrire la direction selon laquelle la sélection est effectuée. Les valeurs possibles sont&nbsp;: `forward` (la sélection a été effectuée dans le sens d'écriture de la locale courante), `backward` (le sens opposé), ou `none` (la direction est inconnue).

- {{DOMxRef("HTMLInputElement.selectionEnd")}}
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'indice de fin pour le texte sélectionné. Lorsqu'il n'y a aucune sélection, cette propriété retourne le décalage du caractère qui suit immédiatement le curseur pour le champ texte actuel.

- {{DOMxRef("HTMLInputElement.selectionStart")}}
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'indice de début pour le text sélectionné. Lorsqu'il n'y a aucune sélection, cette propriété retourne la position du curseur de saisie à l'intérieur de l'élément {{HTMLElement("input")}}.

- {{DOMxRef("HTMLInputElement.size")}}
  - : Une valeur numérique de type `unsigned long` qui permet de lire ou d'écrire l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size) de l'élément, qui contient la taille visuelle du contrôle. La valeur est exprimée en pixels à moins que [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) vaille `text` ou `password`, auquel cas il s'agit du nombre de caractères. Cet attribut s'applique uniquement lorsque l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) vaut `text`, `search`, `tel`, `url`, `email`, ou `password`.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLInputElement.checkValidity()")}}
  - : Retourne un booléen qui vaut `false` si l'élément est candidat à la validation des contraintes et ne respecte pas ses contraintes. Dans ce cas, il déclenche également un évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} sur l'élément. Il retourne `true` si l'élément n'est pas candidat à la validation des contraintes, ou s'il respecte ses contraintes.

- {{DOMxRef("HTMLInputElement.reportValidity()")}}
  - : Exécute la méthode `checkValidity()` et, si celle‑ci retourne faux (contrôle invalide ou absence de l'attribut motif), signale à l'utilisateur·ice que le contrôle est invalide de la même manière que lors de l'envoi d'un formulaire.

- {{DOMxRef("HTMLInputElement.select()")}}
  - : Sélectionne tout le texte de l'élément de saisie et lui donne la sélection afin que l'utilisateur·ice puisse ensuite remplacer l'intégralité de son contenu.

- {{DOMxRef("HTMLInputElement.setCustomValidity()")}}
  - : Définit un message de validité personnalisé pour l'élément. Si ce message n'est pas la chaîne vide, l'élément souffre d'une erreur de validité personnalisée et n'est pas valide.

- {{DOMxRef("HTMLInputElement.setRangeText()")}}
  - : Remplace une plage de texte de l'élément de saisie par un nouveau texte.

- {{DOMxRef("HTMLInputElement.setSelectionRange()")}}
  - : Sélectionne une plage de texte dans l'élément de saisie (mais ne lui donne pas la sélection).

- {{DOMxRef("HTMLInputElement.showPicker()")}}
  - : Affiche le sélecteur du navigateur pour la date, l'heure, la couleur et les fichiers.

- {{DOMxRef("HTMLInputElement.stepDown()")}}
  - : Décrémente la valeur [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de ([`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) \* n), où n vaut 1 par défaut si non défini.

- {{DOMxRef("HTMLInputElement.stepUp()")}}
  - : Incrémente la valeur [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value) de ([`step`](/fr/docs/Web/HTML/Reference/Elements/input#step) \* n), où n vaut 1 par défaut si non défini.

## Évènements

_Hérite également des évènements de son interface parente, {{DOMxRef("HTMLElement")}}._

Pour écouter ces évènements, utilisez {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou affectez un gestionnaire d'évènements à la propriété `oneventname` de cette interface&nbsp;:

- L'évènement {{DOMxRef("HTMLInputElement/cancel_event", "cancel")}}
  - : Déclenché lorsque l'utilisateur·ice annule la boîte de dialogue du sélecteur de fichiers via la touche <kbd>Échap</kbd> ou le bouton d'annulation, ou lorsqu'il·elle re‑sélectionne les mêmes fichiers précédemment sélectionnés.

- L'évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}}
  - : Déclenché lorsqu'un élément ne respecte pas ses contraintes lors de la validation des contraintes.

- L'évènement {{DOMxRef("HTMLInputElement/search_event", "search")}} {{Non-standard_Inline}}
  - : Déclenché lorsqu'une recherche est initiée sur un {{HTMLElement("input")}} de `type="search"`.

- L'évènement {{DOMxRef("HTMLInputElement/select_event", "select")}}
  - : Déclenché lorsqu'une portion de texte a été sélectionnée.

- L'évènement {{DOMxRef("HTMLInputElement/selectionchange_event", "selectionchange")}}
  - : Déclenché lorsque la sélection du texte à l'intérieur d'un élément {{HTMLElement("input")}} a changé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML implémentant cette interface&nbsp;: {{HTMLElement("input")}}
