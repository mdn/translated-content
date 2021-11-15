---
title: Firefox 13 pour les développeurs
slug: Mozilla/Firefox/Releases/13
tags:
  - Firefox
  - Firefox 13
translation_of: Mozilla/Firefox/Releases/13
original_slug: Mozilla/Firefox/Versions/13
---
{{FirefoxSidebar}}

Firefox 13, basé sur Gecko 13.0, est sorti le 5 juin 2012. Cette page résume les principaux changements dans Firefox 13 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- L'attribut {{htmlattrxref("cellspacing", "table")}} de {{htmlelement("table")}} est désormais analysé de la manière qu'il soit en mode quirks ou non. Autrement dit, si une valeur est spécifiée en pourcentage, elle est traitée comme un certain nombre de pixels, puisque les valeurs en pourcentage ne sont pas réellement autorisée selon la spécification.
- L'élément {{htmlelement("wbr")}} a vu son comportement bi-directionnel corrigé. Il se comporte à présent comme l'Unicode `U+200B ZERO-WIDTH SPACE` et n'affecte donc plus la bi-directionnalité de son élément parent.
- La peusdo-classe {{Cssxref(":invalid")}} peut à présent être appliquée à l'élément {{htmlelement("form")}}.

### CSS

- L'unité `turn` de la propriété {{cssxref("&lt;angle&gt;")}} est désormais supportée (à utiliser avec la fonction CSS `rotate()`).
- Le support d'une syntaxe de 3 à 4 valeurs pour la propriété {{cssxref("background-position")}} a été ajouté. Vous pour décaler une image de fond à partir de n'importe quel coin en écrivant par exemple "`right 10px bottom 20px`". Voir {{bug(522607)}}
- Le support d'une syntaxe à 2 valeurs pour la propriété {{cssxref("background-repeat")}} a été ajouté.
- Les propriétés {{cssxref("border-radius","-moz-border-radius*")}} et {{cssxref("box-shadow","-moz-box-shadow")}} n'ont plus de préfixe (`border-radius` ou `box-shadow`). Voir {{bug(693510)}}
- La propriété {{cssxref("column-fill")}} a été implémentée (prefixée).

### JavaScript

- Le support pour la construction [`for..of`](/fr/docs/JavaScript/Reference/Statements/for...of) de l'ECMAScript 6 a été ajouté.
- Le support expérimental pour les objets ECMAScript 6 [Map](/fr/docs/JavaScript/Reference/Global_Objects/Map) and [Set](/fr/docs/JavaScript/Reference/Global_Objects/Set) a été ajouté.

### DOM

- L'argument `deep` de la méthode {{domxref("Node.cloneNode()")}} est désormais optionnel, comme c'est spécifié dans DOM4.
- Les méthodes {{domxref("window.setTimeout()")}} et {{domxref("window.setInterval()")}} ne transmettent plus l'argument supplémentaire "lateness" lors du rappel de routine.
- La méthode {{domxref("Blob","Blob.mozSlice()")}} n'a plus de préfixe.
- Le support du constructeur {{domxref("Blob")}} a été ajouté.
- Le support de [`globalStorage`](/fr/docs/DOM/Storage#globalStorage) a été retiré.
- La nouvelle interface {{domxref("DOMRequest")}}, utilisée pour rapporté l'état et le résultat des opérations en arrière-plan, a été ajoutée.
- La méthode {{domxref("HTMLOptionElement", "HTMLOptionElement.index()")}} renvoie désormais `0` au lieu de l'incorrect `-1` lorsque {{HTMLElement("option")}} est à l'intérieur d'un élément {{HTMLElement("datalist")}}.
- {{domxref("DOMException")}} a été implémenté selon la spécification DOM Level 4.
- L'inteface {{domxref("FileError")}} a été supprimée en faveur de l'interface {{domxref("DOMError")}} selon la dernière spécification FileAPI.
- L'objet {{domxref("Range")}} ne lance plus une `RangeException`. A la place une {{domxref("DOMException")}} est utilisée selon DOM 4.
- {{domxref("element.getAttributeNS()")}} renvoie désormais toujours `null` au lieu d'une chaîne vide pour les attributs inexistants. Auparavant, il y avait des cas où une chaîne vide pouvait être retournée. Pour être conforme à la spécification DOM4, null doit être retourné pour les attributs inexistants.
- L'interface {{domxref("HTMLCanvasElement")}} a maintenant une méthode non-standard, `mozFetchAsStream()`, qui fournit un flux entrant contenant les données d'image de l'élément au format spécifié.

### UA string

- Firefox Mobile ou Tablet pour Android dispose désormais [d'une chaîne UA](/fr/docs/Gecko_user_agent_string_reference#Mobile_and_Tablet_indicators) pour indiquer le style et n'a plus le signe Fennec. En outre, le nombre après "Gecko /" est à présent le numéro de version de Gecko au lieu d'une date.
- La chaîne UA n'affiche plus le numéro de correctif Gecko ou le statut de version dans le numéro de version ; le numéro de version est à présent toujours de la forme "X.Y", où X est le numéro de version majeur et Y le mineur. Par exemple, "13.0" ou "14.1". Il n'y aura plus quelque chose comme "14.0.1b1".

### SVG

- L'interface DOM {{domxref("SVGStringList")}} est désormais indexable comme [`Array`](/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/Array) (voir {{bug(722071)}}).

### WebGL

- Le support pour l'extension [`EXT_texture_filter_anisotropic`](/fr/docs/WebGL/Using_Extensions#EXT_texture_filter_anisotropic) a été ajouté. Le filtrage des textures anisotrope améliore la qualité de l'accès aux textures mipmapped lors de la visualisation d'une primitive texturée à un angle oblique.

### MathML

- Le support pour l'attribut `width` sur l'élément {{MathMLElement("mtable")}} a été ajouté ({{bug(722880)}}).
- La [police MathJax](http://www.mathjax.org/demos/tex-samples/) est désormais utilisée comme police par défaut pour le texte mathématique are now used as the default fonts for mathematical text. Voir [les polices pour le moteur MathML de Mozilla](/fr/docs/Mozilla_MathML_Project/Fonts) pour plus d'informations.

### Réseau

- Le protocole SPDY est désormais activé par défaut.

### Outils de développement

#### Amélioration de la vue 3D

- Vous pouvez à présent appuyer sur la touche "F" pour s'assurer que le nœud actuellement sélectionné est visible.

#### Améliorations du panneau de style

- En cliquant sur l'en-tête d'une règle dans le [panneau de style](/fr/docs/Tools/Page_Inspector/Style_panel) ouvre à présent [l'Editeur de style](/fr/docs/Outils/%C3%89diteur_de_Style) correspondant au CSS.
- Un clique droit sur une règle dans le [panneau de style](/fr/docs/Tools/Page_Inspector/Style_panel) offre à présent une option pour copier la règle dans le presse-papiers.
- La saisie d'un nom de propriété inconnue, ou d'une valeur de propriété illégale, affiche une icône d'avertissement près de cette propriété.

#### Amélioration de l'Ardoise

- L'[Ardoise](/fr/docs/Outils/Ardoise) a maintenant une option dans le menu Aide pour vous rendre à la documentation MDN sur l'Ardoise.

## Changements pour les développeurs de Mozilla et de modules complémentaires

### Note de compatibilité

A partir de Firefox 13, Firefox pour Windows requiert au minimum Windows XP Service Pack 2, il ne pourra plus s'exécuter sur Windows 2000 ou les versions antérieures de Windows XP.

### Modules de code JavaScript

#### source-editor.jsm

- Le support d'un drapeau sale a été ajouté à l'API Source Editor.
- L'éditeur de source ne supporte plus de retomber sur un {{HTMLElement("textarea")}} au lieu d'utiliser Orion.
- L'éditeur expose à présent les évènements focus et blur.
- La méthode [`getIndentationString()`](/fr/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29) a été ajoutée, cela renvoie la chaîne à utiliser pour l'indentation du texte dans l'éditeur.
- L'éditeur de source supporte désormais la gestion d'une liste de points d'arrêt et l'affichage de l'interface utilisateur pour les basculer sur et en dehors ; toutefois, il ne fait pas la mise en œuvre des points d'arrêt. C'est à vous d'écrire du code pour le débogueur.
- Le support pour mettre en surbrillance la ligne actuelle a été ajouté, en utilisant l'option de configuration `highlightCurrentLine`.

### ARIA

- Les propriétés CSS {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} sont à présent toutes reflétées dans les attributs des objets ARIA avec le même nom. Voir les [attributs des objets Gecko](/fr/docs/Accessibility/AT-APIs/Gecko/Attrs) pour plus d'informations.

### Interfaces

- L'interface {{interface("nsIScreen")}} supporte à présent le contrôle de la rotation via le nouvel attribut `rotation`.
- L'interface {{interface("nsIPrefBranch2")}} a été intégrée dans {{interface("nsIPrefBranch")}} ({{bug(718255)}}).
- Les alias `MozOpacity`, `MozOutline`, `MozOutlineStyle`, `MozOutlineWidth`, `MozOutlineOffset` et `MozOutlineColor`, qui ont tous été retirés des précédentes versions de Gecko, ont été supprimés de {{interface("nsIDOMCSS2Properties")}}, qui aurait dû avoir ces alias.
- L'attribut `excludeItemIfParentHasAnnotation` de {{interface("nsINavHistoryQueryOptions")}} a été retiré, avec l'opération de requête correspondante. Il existait les livemarks, qui n'existent plus.

## Voir également

{{Firefox_for_developers('12')}}
