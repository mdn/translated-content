---
title: "Document : méthode execCommand()"
short-title: execCommand()
slug: Web/API/Document/execCommand
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{APIRef("DOM")}}{{Deprecated_Header}}

> [!NOTE]
> Bien que la méthode `execCommand()` soit obsolète, il existe encore quelques cas d'utilisation valides qui n'ont pas d'alternatives viables. Par exemple, contrairement à la manipulation directe du DOM, les modifications effectuées par `execCommand()` préservent le tampon d'annulation (historique des modifications). Pour ces cas d'utilisation, vous pouvez toujours utiliser cette méthode, mais vérifiez la compatibilité inter-navigateurs, par exemple en utilisant {{DOMxRef("document.queryCommandSupported()")}}.

La méthode **`execCommand`** de l'interface {{DOMxRef("Document")}} implémente plusieurs commandes différentes. Certaines permettent d'accéder au presse-papier, tandis que d'autres servent à éditer les [champs de formulaire](/fr/docs/Web/HTML/Reference/Elements/input), les éléments [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) ou des documents entiers (lorsqu'ils sont passés en [mode design](/fr/docs/Web/API/Document/designMode)).

Pour accéder au presse-papier, il est recommandé d'utiliser [l'API Clipboard](/fr/docs/Web/API/Clipboard_API) plus récente plutôt que `execCommand()`.

La plupart des commandes affectent la [sélection](/fr/docs/Web/API/Selection) du document. Par exemple, certaines commandes (gras, italique, etc.) mettent en forme le texte actuellement sélectionné, tandis que d'autres suppriment la sélection, insèrent de nouveaux éléments (remplaçant la sélection) ou affectent une ligne entière (indentation). Seul l'élément éditable actuellement actif peut être modifié, mais certaines commandes (par exemple, `copy`) peuvent fonctionner sans élément éditable.

> [!NOTE]
> Les modifications effectuées par `execCommand()` peuvent ou non déclencher les évènements {{DOMxRef("Element/beforeinput_event", "beforeinput")}} et {{DOMxRef("Element/input_event", "input")}}, selon le navigateur et la configuration. Si elles sont déclenchées, les gestionnaires d'évènements s'exécutent avant que `execCommand()` ne retourne. Les auteur·ice·s doivent être prudent·e·s avec ce type d'appels récursifs, en particulier s'ils appellent `execCommand()` en réponse à ces évènements. Depuis Firefox 82, les appels imbriqués à `execCommand()` échoueront toujours, voir [le bogue 1634262 <sup>(angl.)</sup>](https://bugzil.la/1634262).

## Syntaxe

```js-nolint
execCommand(commandName, showDefaultUI, valueArgument)
```

### Paramètres

- `commandName`
  - : Une chaîne de caractères définissant le nom de la commande à exécuter. Les commandes suivantes sont définies&nbsp;:
    - `backColor`
      - : Modifie la couleur d'arrière-plan du document. En mode `styleWithCss`, cela affecte la couleur d'arrière-plan du bloc englobant à la place. Cela nécessite une chaîne de caractères de valeur {{CSSxRef("&lt;color&gt;")}} à passer en argument de valeur.
    - `bold`
      - : Active ou désactive le gras pour la sélection ou au point d'insertion.
    - `contentReadOnly`
      - : Rend le document de contenu soit en lecture seule, soit modifiable. Cela nécessite un booléen vrai/faux comme argument de valeur.
    - `copy`
      - : Copie la sélection actuelle dans le presse-papier. Les conditions d'activation de ce comportement varient selon les navigateurs et ont évolué au fil du temps. Consultez le tableau de compatibilité pour déterminer si vous pouvez l'utiliser dans votre cas.
    - `createLink`
      - : Crée un hyperlien à partir de la sélection, mais uniquement s'il y a une sélection. Nécessite une chaîne de caractères {{Glossary("URI")}} comme argument de valeur pour le `href` de l'hyperlien. L'URI doit contenir au moins un caractère, qui peut être un espace.
    - `cut`
      - : Supprime la sélection actuelle et la copie dans le presse-papier. Le moment où ce comportement est activé varie selon les navigateurs, et ses conditions ont évolué au fil du temps. Consultez [le tableau de compatibilité](#compatibilité_des_navigateurs) pour les détails d'utilisation.
    - `decreaseFontSize`
      - : Ajoute une balise {{HTMLElement("small")}} autour de la sélection ou au point d'insertion.
    - `defaultParagraphSeparator`
      - : Modifie le séparateur de paragraphe utilisé lors de la création de nouveaux paragraphes dans les zones de texte éditables.
    - `delete`
      - : Supprime la sélection actuelle.
    - `enableAbsolutePositionEditor`
      - : Active ou désactive la poignée qui permet de déplacer les éléments positionnés en absolu. La poignée est désactivée par défaut depuis Firefox 64 ([bogue Firefox 1490641 <sup>(angl.)</sup>](https://bugzil.la/1490641)).
    - `enableInlineTableEditing`
      - : Active ou désactive les contrôles d'insertion et de suppression de lignes/colonnes de tableau. Les contrôles sont désactivés par défaut depuis Firefox 64 ([bogue Firefox 1490641 <sup>(angl.)</sup>](https://bugzil.la/1490641)).
    - `enableObjectResizing`
      - : Active ou désactive les poignées de redimensionnement sur les images, tableaux, éléments positionnés en absolu et autres objets redimensionnables. Les poignées sont désactivées par défaut depuis Firefox 64 ([bogue Firefox 1490641 <sup>(angl.)</sup>](https://bugzil.la/1490641)).
    - `fontName`
      - : Modifie le nom de la police pour la sélection ou au point d'insertion. Cela nécessite une chaîne de caractères de nom de police (comme `"Arial"`) comme argument de valeur.
    - `fontSize`
      - : Modifie la taille de la police pour la sélection ou au point d'insertion. Cela nécessite un entier de `1` à `7` comme argument de valeur.
    - `foreColor`
      - : Modifie la couleur de police pour la sélection ou au point d'insertion. Cela nécessite une chaîne de caractères de valeur hexadécimale comme argument de valeur.
    - `formatBlock`
      - : Ajoute un élément HTML de niveau bloc autour de la ligne contenant la sélection actuelle, en remplaçant l'élément de bloc contenant la ligne si un existe (dans Firefox, {{HTMLElement("blockquote")}} est l'exception — il enveloppe tout élément de bloc englobant). Nécessite une chaîne de caractères de nom de balise comme argument de valeur. Pratiquement tous les éléments de niveau bloc peuvent être utilisés. (Edge hérité ne prend en charge que les balises de titre `H1` à `H6`, `ADDRESS`, and `PRE`, qui doivent être entourées de chevrons, comme `"<H1>"`.)
    - `forwardDelete`
      - : Supprime le caractère devant la position du [curseur](https://en.wikipedia.org/wiki/Cursor_%28computers%29), identique à l'appui sur la touche Suppr d'un clavier Windows.
    - `heading`
      - : Ajoute un élément de titre autour d'une sélection ou d'une ligne au point d'insertion. Nécessite une chaîne de caractères de nom de balise comme argument de valeur (par exemple, `"H1"`, `"H6"`). (Non pris en charge par Safari.)
    - `highlightColor`
      - : Modifie la couleur d'arrière-plan pour la sélection ou au point d'insertion. Nécessite une chaîne de caractères de valeur de couleur comme argument de valeur. `useCSS` doit être à `true` pour que cela fonctionne.
    - `increaseFontSize`
      - : Ajoute une balise {{HTMLElement("big")}} autour de la sélection ou au point d'insertion.
    - `indent`
      - : Indente la ligne contenant la sélection ou le point d'insertion. Dans Firefox, si la sélection couvre plusieurs lignes à différents niveaux d'indentation, seules les lignes les moins indentées de la sélection seront indentées.
    - `insertBrOnReturn`
      - : Contrôle si la touche Entrée insère un élément HTML {{HTMLElement("br")}}, ou divise l'élément de bloc actuel en deux.
    - `insertHorizontalRule`
      - : Insère un élément HTML {{HTMLElement("hr")}} au point d'insertion, ou remplace la sélection par celui-ci.
    - `insertHTML`
      - : Insère une instance {{DOMxRef("TrustedHTML")}} ou une chaîne de caractères de balisage HTML au point d'insertion (supprime la sélection).
        Cela nécessite un balisage HTML valide.

        > [!WARNING]
        > L'entrée est analysée comme du HTML et écrite dans le DOM.
        > Les API de ce type sont connues comme des [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation), et sont potentiellement une porte d'entrée pour des attaques de [cross-site scripting (XSS)](/fr/docs/Web/Security/Attacks/XSS), si l'entrée provient d'un·e attaquant·e.
        >
        > Vous pouvez réduire ce risque en assignant toujours des objets {{DOMxRef("TrustedHTML")}} au lieu de chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance).
        > Voir [l'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API) pour plus d'informations.

    - `insertImage`
      - : Insère une image au point d'insertion (supprime la sélection). Nécessite une chaîne de caractères d'URL pour le `src` de l'image comme argument de valeur. Les exigences pour cette chaîne de caractères sont les mêmes que pour `createLink`.
    - `insertOrderedList`
      - : Crée une [liste ordonnée numérotée](/fr/docs/Web/HTML/Reference/Elements/ol) pour la sélection ou au point d'insertion.
    - `insertUnorderedList`
      - : Crée une [liste non ordonnée à puces](/fr/docs/Web/HTML/Reference/Elements/ul) pour la sélection ou au point d'insertion.
    - `insertParagraph`
      - : Insère un [paragraphe](/fr/docs/Web/HTML/Reference/Elements/p) autour de la sélection ou de la ligne actuelle.
    - `insertText`
      - : Insère le texte brut donné au point d'insertion (supprime la sélection).
    - `italic`
      - : Active ou désactive l'italique pour la sélection ou au point d'insertion.
    - `justifyCenter`
      - : Centre la sélection ou le point d'insertion.
    - `justifyFull`
      - : Justifie la sélection ou le point d'insertion.
    - `justifyLeft`
      - : Justifie la sélection ou le point d'insertion à gauche.
    - `justifyRight`
      - : Justifie la sélection ou le point d'insertion à droite.
    - `outdent`
      - : Désindente la ligne contenant la sélection ou le point d'insertion.
    - `paste`
      - : Colle le contenu du presse-papier au point d'insertion (remplace la sélection actuelle).

        Cette fonctionnalité est définie comme désactivée pour le _contenu web_, mais a été implémentée via [l'API Clipboard](/fr/docs/Web/API/Clipboard_API#considérations_de_sécurité) sur certains navigateurs.
        Sur ces navigateurs, la fonctionnalité nécessite {{Glossary("transient activation", "l'activation transitoire")}}, et la reconnaissance d'une interface contextuelle lors du collage de contenu inter-origine.
        Consultez [le tableau de compatibilité des navigateurs](#browser_compatibility) pour plus d'informations.

    - `redo`
      - : Refait la commande d'annulation précédente.
    - `removeFormat`
      - : Supprime toute mise en forme de la sélection actuelle.
    - `selectAll`
      - : Sélectionne tout le contenu de la région éditable.
    - `strikeThrough`
      - : Active ou désactive le barré pour la sélection ou au point d'insertion.
    - `subscript`
      - : Active ou désactive le [texte en indice](/fr/docs/Web/HTML/Reference/Elements/sub) pour la sélection ou au point d'insertion.
    - `superscript`
      - : Active ou désactive le [texte en exposant](/fr/docs/Web/HTML/Reference/Elements/sup) pour la sélection ou au point d'insertion.
    - `underline`
      - : Active ou désactive le [soulignement](/fr/docs/Web/HTML/Reference/Elements/u) pour la sélection ou au point d'insertion.
    - `undo`
      - : Annule la dernière commande exécutée.
    - `unlink`
      - : Supprime [l'élément d'ancrage](/fr/docs/Web/HTML/Reference/Elements/a) d'un hyperlien sélectionné.
    - `useCSS` {{Deprecated_Inline}}
      - : Active ou désactive l'utilisation de balises HTML ou de CSS pour le balisage généré. Nécessite un booléen vrai/faux comme argument de valeur.
        > [!NOTE]
        > Cet argument est logiquement inversé (c'est-à-dire, utilisez `false` pour utiliser le CSS,
        > `true` pour utiliser le HTML). Cela a été rendu obsolète au profit de `styleWithCSS`.
    - `styleWithCSS`
      - : Remplace la commande `useCSS`. `true` modifie ou génère des attributs `style` dans le balisage, faux génère des éléments de présentation.
    - `AutoUrlDetect`
      - : Modifie le comportement d'auto-lien du navigateur.

- `showDefaultUI`
  - : Une valeur booléenne indiquant si l'interface utilisateur par défaut doit être affichée. Ceci n'est pas implémenté dans Mozilla.
- `valueArgument`
  - : Pour les commandes qui nécessitent un argument d'entrée, il s'agit d'une chaîne de caractères fournissant cette information. Par exemple, `insertImage` nécessite l'URL de l'image à insérer. Définir `null` si aucun argument n'est nécessaire.

### Valeur de retour

Une valeur booléenne qui est `false` si la commande n'est pas prise en charge ou est désactivée.

> [!NOTE]
> `document.execCommand()` retourne uniquement `true` si elle est invoquée dans le cadre d'une interaction utilisateur·ice. Vous ne pouvez pas l'utiliser pour vérifier la prise en charge du navigateur avant d'appeler une commande.

## Exemple

Un exemple d'utilisation est disponible
[sur CodePen](https://codepen.io/chrisdavidmills/full/gzYjag/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Clipboard](/fr/docs/Web/API/Clipboard_API)
- Exemple MDN&nbsp;: [execCommands pris en charge dans votre navigateur <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/execcommand/)
- La propriété {{DOMxRef("HTMLElement.contentEditable")}}
- La propriété {{DOMxRef("document.designMode")}}
- La méthode {{DOMxRef("document.queryCommandEnabled()")}}
- La méthode {{DOMxRef("document.queryCommandState()")}}
- La méthode {{DOMxRef("document.queryCommandSupported()")}}
