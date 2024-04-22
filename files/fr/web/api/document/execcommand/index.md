---
title: document.execCommand
slug: Web/API/Document/execCommand
---

{{ApiRef("DOM")}}{{deprecated_header}}

Lorsqu'un document HTML passe en [`designMode`](/fr/docs/Web/API/Document/designMode), l'objet `document` correspondant expose une méthode **`execCommand()`** permettant d'exécuter des commandes manipulant la région éditable courante tels que [les champs de formulaire](/fr/docs/Web/HTML/Element/input) ou les éléments [`contentEditable`](/fr/docs/Web/HTML/Global_attributes/contenteditable).

La plupart des commandes affectent la [sélection](/fr/docs/Web/API/Selection) du document (mise en gras, italique, etc.), tandis que
d'autres insèrent de nouveaux éléments (un lien) ou modifient toute une ligne (indentation). Lorsqu'on
utilise `contentEditable`, `execCommand()` affecte l'élément éditable
courant.

## Syntaxe

```js
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
```

### Valeur de retour

Un booléen ({{jsxref('Boolean')}}) qui vaut `false` si la commande n'est pas
prise en charge ou si elle est désactivée.

> **Note :** `document.execCommand()` ne renvoie
> `true` que s'il est appelé à partir d'une interaction utilisateur. On ne
> peut pas l'invoquer dans un script afin de vérifier la prise en charge navigateur avant
> d'appeler une commande. À partir de Firefox 82, les appels imbriqués à
> `document.execCommand()` renverront toujours `false`.

### Paramètres

- `aCommandName`
  - : Une chaîne de caractères {{domxref("DOMString")}} indiquant le nom de la commande à
    exécuter. Voir [Commandes](#commandes) pour une liste de commandes possibles.
- `aShowDefaultUI`
  - : Un booléen ({{jsxref("Boolean")}}) indiquant si l'interface utilisateur par défaut
    devrait être affichée. Ce n'est pas implémenté par Mozilla.
- `aValueArgument`
  - : Pour les commandes utilisant un argument en entrée, il s'agit d'une chaîne {{domxref("DOMString")}}
    qui fournit cette information. On pourra, par exemple, `insertImage` utilise
    l'URL de l'image à insérer. On utilisera `null` si aucun argument n'est utilisé.

### Commandes

- `backColor`
  - : Modifie la couleur d'arrière-plan du document. Avec le mode `styleWithCss` cela affecte la couleur d'arrière-plan du bloc englobant. Une chaîne de caractères décrivant une valeur {{cssxref("&lt;color&gt;")}} doit être passée en argument. On notera qu'Internet Explorer utilise ceci pour la couleur d'arrière-plan du texte.
- `bold`
  - : Active ou désactive la mise en gras pour la sélection ou à partir du point d'insertion Internet Explorer utilise la balise {{HTMLElement("strong")}} plutôt que {{HTMLElement("b")}}.
- `ClearAuthenticationCache`
  - : Supprime toutes les informations d'authentification _credentials_) du cache.
- `contentReadOnly`
  - : Rend le contenu du document en lecture seule ou éditable en fonction du booléen passé en argument (n'est pas pris en charge par Internet Explorer)
- `copy`
  - : Copie la sélection courante vers le presse-papier. Les conditions pour obtenir ce comportement peuvent varier d'un navigateur à l'autre. Veuillez voir le tableau de compatibilité ci-après.
- `createLink`
  - : Crée un hyperlien à partir de la sélection (sous réserve qu'il y en ait une). Une chaîne de caractères formant un URI est nécessaire comme argument afin de fournir la valeur de l'attribut `href`. L'URI doit contenir au moins un caractère (qui peut être un blanc). (Internet Explorer créera un lien avec une valeur `null`.)
- `cut`
  - : Coupe le contenu de la sélection courante et le copie dans le presse-papier. Les conditions pour obtenir ce comportement peuvent varier d'un navigateur à l'autre. Veuillez voir le tableau de compatibilité ci-après.
- `decreaseFontSize`
  - : Ajoute une balise {{HTMLElement("small")}} autour de la sélection ou au point d'insertion. (Non pris en charge par Internet Explorer.)
- `defaultParagraphSeparator`
  - : Modifie le séparateur de paragraphe utilisé lorsque de nouveaux paragraphes sont créés dans les zones de texte éditables. Voir [Différences dans la génération du balisage](/fr/docs/Web/Guide/HTML/Editable_content#differences_in_markup_generation) pour plus de détails.
- `delete`
  - : Supprimer la sélection courante.
- `enableAbsolutePositionEditor`
  - : Active ou désactive la poignée qui permet de déplacer les éléments positionnés de façon absolue. Celle-ci est désactivée par défaut depuis Firefox 64 ([bug Firefox 1490641](https://bugzil.la/1490641)).
- `enableInlineTableEditing`
  - : Active ou désactive les contrôles pour l'insertion ou la suppression des lignes ou colonnes de tableau. Les contrôles sont désactivés par défaut depuis Firefox 64 ([bug Firefox 1490641](https://bugzil.la/1490641)).
- `enableObjectResizing`
  - : Active ou désactive les contrôles permettant de redimensionner les images, tableaux ou les éléments positionnés de façon absolue. Les poignées sont désactivées par défaut depuis Firefox 64 ([bug Firefox 1490641](https://bugzil.la/1490641)).
- `fontName`
  - : Modifie le nom de la police pour la sélection ou à partir du point d'insertion. La valeur fournie en argument doit être un nom de police (ex. `"Arial"`).
- `fontSize`
  - : Modifie la taille de la police pour la sélection ou à partir du point d'insertion. La valeur fournie en argument doit être un entier compris entre 1 et 7.
- `foreColor`
  - : Modifie la couleur de la police pour la sélection ou à partir du point d'insertion. La valeur passée en argument doit être une chaîne de caractères décrivant une couleur exprimée en notation hexadécimale.
- `formatBlock`
  - : Ajoute un élément HTML de bloc autour de la ligne contenant la sélection courante et remplace l'éventuel élément de bloc englobant s'il en existe un (pour Firefox, {{HTMLElement("blockquote")}} fera exception et englobera n'importe quel bloc). L'argument passé doit être un nom de balise. Tous les éléments de bloc peuvent en théorie être utilisés. (Internet Explorer et Edge ne prennent en charge que les balises `H1` à `H6`, `ADDRESS`, et `PRE` qui doivent être passées entre chevrons : `"<H1>"`.)
- `forwardDelete`
  - : Supprime un caractère à la position du curseur. Le comportement obtenu est le même que lorsqu'on appuie sur la touche <kbd>Suppr</kbd> d'un clavier Windows.
- `heading`
  - : Ajoute un élément de titre autour de la sélection ou au niveau du point d'insertion. L'argument doit être le nom d'une balise de titre (`"H1"` à `"H6"`). (Non pris en charge par Internet Explorer et Safari.)
- `hiliteColor`
  - : Modifie la couleur d'arrière-plan pour la sélection ou à partir du point d'insertion. La valeur passée en argument doit être une chaîne de caractères définissant une couleur et `useCSS` doit valoir `true`. (Non pris en charge par Internet Explorer.)
- `increaseFontSize`
  - : Ajoute une balise {{HTMLElement("big")}} autour de la sélection ou à partir du point d'insertion. (Non pris en charge par Internet Explorer).
- `indent`
  - : Augmente l'indentation de la ligne contenant la sélection ou le point d'insertion. Pour Firefox, si la sélection s'étend sur plusieurs lignes ayant différents niveaux d'indentation, seules les lignes les moins indentées seront décalées.
- `insertBrOnReturn`
  - : Contrôle si la touche <kbd>Entrée</kbd> insère un élément {{HTMLElement("br")}} ou si le bloc courant est scindé en deux. (Non pris en charge par Internet Explorer.)
- `insertHorizontalRule`
  - : Insère un élément {{HTMLElement("hr")}} au point d'insertion ou remplace la sélection courante par cet élément.
- `insertHTML`
  - : Insère un élément au point d'insertion en supprimant la sélection. Une chaîne de caractères HTML valide doit être fournie en argument. (Non pris en charge par Internet Explorer.)
- `insertImage`
  - : Insère une image au point d'insertion en supprimant la sélection. L'argument doit être une chaîne de caractères indiquant l'URL à utiliser pour l'attribut `src` de l'image. Les prérequis de cette valeur sont les mêmes que pour `createLink`.
- `insertOrderedList`
  - : Crée une [liste numérotée ordonnée](/fr/docs/Web/HTML/Element/ol) pour la sélection ou à partir du point d'insertion.
- `insertUnorderedList`
  - : Crée une [liste non-ordonnée](/fr/docs/Web/HTML/Element/ul) pour la sélection ou à partir du point d'insertion.
- `insertParagraph`
  - : Insère un [paragraphe](/fr/docs/Web/HTML/Element/p) autour de la sélection pour la ligne courante. (Internet Explorer insère un paragraphe au point d'insertion et supprime la sélection.)
- `insertText`
  - : Insère le texte indiqué au point d'insertion (quitte à supprimer l'éventuelle sélection courante).
- `italic`
  - : Active ou désactive la mise en italique pour la sélection ou à partir du point d'insertion. (Internet Explorer utilisera l'élément {{HTMLElement("em")}} plutôt que {{HTMLElement("i")}}.)
- `justifyCenter`
  - : Centre la sélection ou le point d'insertion.
- `justifyFull`
  - : Justifie la sélection ou le point d'insertion.
- `justifyLeft`
  - : Justifie à gauche la sélection ou le point d'insertion.
- `justifyRight`
  - : Justifie à droite la sélection ou le point d'insertion.
- `outdent`
  - : Effectue un retrait d'indentation pour la ligne courante.
- `paste`
  - : Colle le contenu du presse-papier au point d'insertion (et remplace éventuellement la sélection actuelle). Fonctionnalité désactivée pour le contenu web.
- `redo`
  - : Rejoue l'action annulée par la précédente commande `undo`.
- `removeFormat`
  - : Supprime toute mise en forme pour la sélection courante.
- `selectAll`
  - : Sélectionne l'ensemble du contenu de la région éditable.
- `strikeThrough`
  - : Active ou désactive la rayure de la sélection ou à partir d'un point d'insertion.
- `subscript`
  - : Active ou désactive [la mise en indice](/fr/docs/Web/HTML/Element/sub) pour la sélection ou au point d'insertion
- `superscript`
  - : Active ou désactive [la mise en exposant](/fr/docs/Web/HTML/Element/sup) pour la sélection ou au point d'insertion
- `underline`
  - : Active ou désactive [le soulignement](/fr/docs/Web/HTML/Element/u) pour la sélection ou au point d'insertion.
- `undo`
  - : Annule la dernière commande exécutée.
- `unlink`
  - : Retire l'[ancre](/fr/docs/Web/HTML/Element/a) de l'hyperlien sélectionné.
- `useCSS` {{Deprecated_inline}}
  - : Active/désactive l'utilisation de balises HTML ou de CSS pour le balisage généré. La valeur de l'argument doit être un booléen. Note : cet argument possède une logique inversée (`false` permet d'utiliser CSS et `true` permet d'utiliser HTML). Cette valeur n'est pas prise en charge par Internet Explorer et a été dépréciée en faveur de `styleWithCSS`.
- `styleWithCSS`
  - : Remplace la commande `useCSS`. `true` modifie/génère des attributs `style` dans le balisage tandis que `false` génère des éléments HTML de présentation.

## Exemple

Un exemple d'utilisation est disponible
[sur CodePen](https://codepen.io/chrisdavidmills/full/gzYjag/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
- [L'édition HTML dans Firefox](/fr/docs/Web/Guide/HTML/Editable_content/Rich-Text_Editing_in_Mozilla)
- [Documentation des incohérences
  navigateur dans Scribe](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md) qui indique les bugs liés à `document.execCommand`.
