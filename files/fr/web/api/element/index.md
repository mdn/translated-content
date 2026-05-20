---
title: Element
slug: Web/API/Element
---

{{APIRef("DOM")}}

**`Element`** est la classe de base la plus générique dont héritent tous les objets qui représentent des éléments d'un [`Document`](/fr/docs/Web/API/Document). Elle contient uniquement des méthodes et propriétés communes à l'ensemble des éléments. Des classes plus spécifiques héritent d'`Element`. Ainsi, l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement) correspond à l'interface de base pour les éléments HTML tandis que l'interface [`SVGElement`](/fr/docs/Web/API/SVGElement) représente la base pour les éléments SVG. La plupart des fonctionnalités sont définies dans les classes situées plus loin dans la hiérarchie.

## Propriétés

_`Element` hérite des propriétés de son interface parente : [`Node`](/fr/docs/Web/API/Node) (et donc indirectement des propriétés du parent de celle-ci : [`EventTarget`](/fr/docs/Web/API/EventTarget))._

- [`Element.assignedSlot`](/fr/docs/Web/API/Element/assignedSlot){{readonlyInline}}
  - : Renvoie un objet [`HTMLSlotElement`](/fr/docs/Web/API/HTMLSlotElement) représentant l'emplacement ([`<slot>`](/fr/docs/Web/HTML/Reference/Elements/slot)) dans lequel le nœud est inséré.
- [`Element.attributes`](/fr/docs/Web/API/Element/attributes) {{readOnlyInline}}
  - : Renvoie un objet [`NamedNodeMap`](/fr/docs/Web/API/NamedNodeMap) contenant les attributs affectés de l'élément HTML correspondant.
- [`Element.childElementCount`](/fr/docs/Web/API/Element/childElementCount) {{readonlyInline}}
  - : Renvoie le nombre d'éléments enfants de cet élément.
- [`Element.children`](/fr/docs/Web/API/Element/children) {{readonlyInline}}
  - : Renvoie les éléments enfants de cet élément.
- [`Element.classList`](/fr/docs/Web/API/Element/classList) {{readOnlyInline}}
  - : Renvoie un objet [`DOMTokenList`](/fr/docs/Web/API/DOMTokenList) contenant la liste des attributs de classe.
- [`Element.className`](/fr/docs/Web/API/Element/className)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui représente la classe de l'élément.
- [`Element.clientHeight`](/fr/docs/Web/API/Element/clientHeight) {{readOnlyInline}}
  - : Renvoie un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) représentant la hauteur intérieure de l'élément.
- [`Element.clientLeft`](/fr/docs/Web/API/Element/clientLeft) {{readOnlyInline}}
  - : Renvoie un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) représentant la largeur de la bordure gauche de l'élément.
- [`Element.clientTop`](/fr/docs/Web/API/Element/clientTop) {{readOnlyInline}}
  - : Renvoie un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) représentant la largeur de la bordure haute de l'élément.
- [`Element.clientWidth`](/fr/docs/Web/API/Element/clientWidth) {{readOnlyInline}}
  - : Renvoie un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) représentant la largeur intérieure de l'élément.
- [`Element.firstElementChild`](/fr/docs/Web/API/Element/firstElementChild) {{readonlyInline}}
  - : Renvoie le premier élément enfant de cet élément.
- [`Element.id`](/fr/docs/Web/API/Element/id)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui représente l'identifiant de l'élément.
- [`Element.innerHTML`](/fr/docs/Web/API/Element/innerHTML)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui représente le balisage du contenu de l'élément.
- [`Element.lastElementChild`](/fr/docs/Web/API/Element/lastElementChild) {{readonlyInline}}
  - : Renvoie le dernier élément enfant de cet élément.
- [`Element.localName`](/fr/docs/Web/API/Element/localName) {{readOnlyInline}}
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui représente la partie locale pour le nom qualifié de l'élément.
- [`Element.namespaceURI`](/fr/docs/Web/API/Element/namespaceURI) {{readonlyInline}}
  - : L'URI pour l'espace de noms de l'élément ou `null` s'il n'y en a pas.

    > [!NOTE]
    > Pour Firefox 3.5 et les versions antérieures, les éléments HTML ne sont pas situés dans un espace de noms. Dans les versions ultérieures, les éléments HTML s'inscrivent dans l'espace de noms [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml) tant pour les arbres HTML que XML.

- [`Element.nextElementSibling`](/fr/docs/Web/API/Element/nextElementSibling) {{readOnlyInline}}
  - : Un objet `Element` qui représente l'élément qui suit immédiatement l'élément courant dans l'arbre ou `null` si l'élément courant n'a pas de voisin.
- [`Element.outerHTML`](/fr/docs/Web/API/Element/outerHTML)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui représente le balisage de l'élément (incluant son contenu). Lorsque cette propriété est utilisée en modification, cela remplace l'élément avec les noeuds construits à partir de l'analyse de la chaîne de caractères fournie.
- [`Element.part`](/fr/docs/Web/API/Element/part)
  - : Représente les identifiants des parties de l'élément (c'est-à-dire ceux définis avec l'attribut `part`) sous la forme d'un objet [`DOMTokenList`](/fr/docs/Web/API/DOMTokenList).
- [`Element.prefix`](/fr/docs/Web/API/Element/prefix) {{readOnlyInline}}
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui représente le préfixe de l'espace de nom pour l'élément ou `null` si aucun préfixe n'est défini.
- [`Element.previousElementSibling`](/fr/docs/Web/API/Element/previousElementSibling) {{readOnlyInline}}
  - : Un objet `Element` qui représente l'élément qui précède immédiatement l'élément courant dans l'arbre ou `null` si l'élément courant n'a pas de voisin.
- [`Element.scrollHeight`](/fr/docs/Web/API/Element/scrollHeight) {{readOnlyInline}}
  - : Renvoie un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) représentant la hauteur de la vue de défilement pour l'élément.
- [`Element.scrollLeft`](/fr/docs/Web/API/Element/scrollLeft)
  - : Un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) qui représente le décalage à gauche de l'élément lié au défilement.
- [`Element.scrollLeftMax`](/fr/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{readOnlyInline}}
  - : Renvoie un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) représentant le décalage à gauche maximal pour l'élément lors du défilement.
- [`Element.scrollTop`](/fr/docs/Web/API/Element/scrollTop)
  - : Un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) qui représente le nombre de pixels dont on a fait défiler verticalement le haut de l'élément.
- [`Element.scrollTopMax`](/fr/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{readOnlyInline}}
  - : Renvoie un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) représentant le décalage maximal depuis le haut de l'élément lors du défilement.
- [`Element.scrollWidth`](/fr/docs/Web/API/Element/scrollWidth) {{readOnlyInline}}
  - : Renvoie un nombre ([`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number)) représentant la largeur de la vue de défilement pour l'élément.
- [`Element.shadowRoot`](/fr/docs/Web/API/Element/shadowRoot){{readOnlyInline}}
  - : Renvoie la racine sombre ouverte (

    <i lang="en">open shadow root</i>

    ) hébergée par l'élément ou `null` si aucune racine sombre ouverte n'est présente.

- [`Element.openOrClosedShadowRoot`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot) {{Non-standard_Inline}}{{readOnlyInline}}
  - : Renvoie la racine sombre hébergée par l'élément (qu'elle soit ouverte ou fermée). **Uniquement disponible pour [les WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions).**
- [`Element.slot`](/fr/docs/Web/API/Element/slot) {{Experimental_Inline}}
  - : Renvoie le nom de l'emplacement du DOM sombre dans lequel l'élément est inséré.
- [`Element.tagName`](/fr/docs/Web/API/Element/tagName) {{readOnlyInline}}
  - : Renvoie une chaîne de caractères ([`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)) qui est le nom de la balise pour l'élément courant.

### Propriétés provenant d'ARIA

_L'interface `Element` inclut les propriétés suivantes, définies sur le <i lang="en">mixin</i> `ARIAMixin`._

- [`Element.ariaAtomic`](/fr/docs/Web/API/Element/ariaAtomic)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-atomic` qui indique si des technologies d'assistance présenteront tout ou partie de la région modifiée selon les notifications définies par l'attribut `aria-relevant`.
- [`Element.ariaAutoComplete`](/fr/docs/Web/API/Element/ariaAutoComplete)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-autocomplete` qui indique si la saisie de texte peut déclencher l'affichage d'une ou plusieurs prédictions pour la valeur saisie par l'utilisateur à destination d'une liste de choix, d'une boîte de recherche ou d'une zone de texte. Elle indique également la façon dont les éventuelles prédictions seraient présentées.
- [`Element.ariaBusy`](/fr/docs/Web/API/Element/ariaBusy)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-busy` qui indique d'un élément est en train d'être modifié. Les technologies d'assistance peuvent alors faire le choix d'attendre la fin de la modification avant d'exposer le contenu à l'utilisateur.
- [`Element.ariaChecked`](/fr/docs/Web/API/Element/ariaChecked)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-checked` indiquant l'état coché (ou non) des cases à cocher, des boutons radio ou des autres éléments d'interface graphique qui peuvent être cochés.
- [`Element.ariaColCount`](/fr/docs/Web/API/Element/ariaColCount)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-colcount` indiquant le nombre de colonnes d'un tableau, d'une grille ou d'une grille arborescente.
- [`Element.ariaColIndex`](/fr/docs/Web/API/Element/ariaColIndex)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-colindex` qui définit l'indice de la colonne d'un élément ou sa position par rapport au nombre total de colonnes d'un tableau, d'une grille ou d'une grille arborescente.
- [`Element.ariaColIndexText`](/fr/docs/Web/API/Element/ariaColIndexText)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-colindextext` qui définit texte alternatif à `aria-colindex` qui soit compréhensible par un humain.
- [`Element.ariaColSpan`](/fr/docs/Web/API/Element/ariaColSpan)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-colspan` qui définit le nombre de colonnes sur lesquelles s'étend une cellule dans un tableau, une grille ou une grille arborescente.
- [`Element.ariaCurrent`](/fr/docs/Web/API/Element/ariaCurrent)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-current` qui indique l'élément représente l'objet courant dans un conteneur ou un ensemble d'éléments.
- [`Element.ariaDescription`](/fr/docs/Web/API/Element/ariaDescription)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-description` qui définit la chaîne de caractères pour décrire ou annoter l'élément courant.
- [`Element.ariaDisabled`](/fr/docs/Web/API/Element/ariaDisabled)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-disabled` qui indique que l'élément est perceptible mais désactivé et qu'il ne peut être édité ou manipulé.
- [`Element.ariaExpanded`](/fr/docs/Web/API/Element/ariaExpanded)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-expanded` qui indique si un élément de groupement contrôlé par l'élément courant est développé ou replié.
- [`Element.ariaHasPopup`](/fr/docs/Web/API/Element/ariaHasPopup)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-haspopup` qui indique la disponibilité et le type d'élément interactif visuel comme un menu ou une boîte de dialogue pouvant être généré par l'élément courant.
- [`Element.ariaHidden`](/fr/docs/Web/API/Element/ariaHidden)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-hidden` qui indique si l'élément est exposé à une API d'accessibilité.
- [`Element.ariaKeyShortcuts`](/fr/docs/Web/API/Element/ariaKeyShortcuts)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-keyshortcuts` qui indique les raccourcis clavier implémentés spécifiquement pour activer ou fournir le focus à un élément.
- [`Element.ariaLabel`](/fr/docs/Web/API/Element/ariaLabel)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-label` qui définit une chaîne de caractères étant un libellé pour l'élément courant.
- [`Element.ariaLevel`](/fr/docs/Web/API/Element/ariaLevel)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-level` qui définit le niveau hiérarchique de l'élément au sein d'une structure.
- [`Element.ariaLive`](/fr/docs/Web/API/Element/ariaLive)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-live` qui indique que l'élément sera mis à jour et qui décrit les types de mises à jour qui peuvent être attendues par les agents utilisateur, les outils d'assistance et l'utilisateur.
- [`Element.ariaModal`](/fr/docs/Web/API/Element/ariaModal)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-modal` qui indique si un élément est modal lorsqu'il est affiché.
- [`Element.ariaMultiline`](/fr/docs/Web/API/Element/ariaMultiline)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-multiline` qui indique si une zone de texte accepte une saisie sur plusieurs lignes ou sur une seule ligne.
- [`Element.ariaMultiSelectable`](/fr/docs/Web/API/Element/ariaMultiSelectable)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-multiselectable` qui indique que la personne peut choisir plus d'un élément parmi les éléments descendants qui peuvent être sélectionnés.
- [`Element.ariaOrientation`](/fr/docs/Web/API/Element/ariaOrientation)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-orientation` qui indique si l'orientation de l'élément est horizontale, verticale ou inconnue voire ambigüe.
- [`Element.ariaPlaceholder`](/fr/docs/Web/API/Element/ariaPlaceholder)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-placeholder` qui définit une indication courte destinée à aider l'utilisateur à saisir une valeur lorsque le contrôle ne possède pas de valeur.
- [`Element.ariaPosInSet`](/fr/docs/Web/API/Element/ariaPosInSet)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-posinset` qui définit l'index ou la position de l'élément courant dans l'ensemble ou l'arbre d'éléments.
- [`Element.ariaPressed`](/fr/docs/Web/API/Element/ariaPressed)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-pressed` qui indique l'état actif/pressé des boutons.
- [`Element.ariaReadOnly`](/fr/docs/Web/API/Element/ariaReadOnly)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-readonly` qui indique que l'élément ne peut pas être édité mais qu'il peut être utilisé sinon.
- [`Element.ariaRelevant`](/fr/docs/Web/API/Element/ariaRelevant)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-relevant` qui indique les notifications qui seront déclenchées par l'agent utilisateur lorsque l'arbre d'accessibilité d'une région interactive sera modifié. Cette propriété est utilisée afin de décrire quels changements d'une région `aria-live` sont pertinents et devraient être annoncés.
- [`Element.ariaRequired`](/fr/docs/Web/API/Element/ariaRequired)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-required` qui indique que la saisie d'une utilisatrice ou d'un utilisateur est requise sur l'élément avant qu'un formulaire puisse être envoyé.
- [`Element.ariaRoleDescription`](/fr/docs/Web/API/Element/ariaRoleDescription)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-roledescription` qui définit une description compréhensible par un humain, adaptée par l'autrice ou l'auteur du document pour le rôle de l'élément courant.
- [`Element.ariaRowCount`](/fr/docs/Web/API/Element/ariaRowCount)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-rowcount` qui définit le nombre total de lignes dans un tableau, une grille ou une grille arborescente.
- [`Element.ariaRowIndex`](/fr/docs/Web/API/Element/ariaRowIndex)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-rowindex` qui définit l'index ou la position de la ligne de l'élément par rapport au nombre total de lignes dans le tableau, la grille ou la grille arborescente.
- [`Element.ariaRowIndexText`](/fr/docs/Web/API/Element/ariaRowIndexText)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-rowindextext` qui définit un libellé alternatif à `aria-rowindex`, compréhensible par un humain.
- [`Element.ariaRowSpan`](/fr/docs/Web/API/Element/ariaRowSpan)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-rowspan` qui définit le nombre de lignes sur lesquelles s'étend une cellule dans un tableau, une grille ou une grille arborescente.
- [`Element.ariaSelected`](/fr/docs/Web/API/Element/ariaSelected)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-selected` qui indique l'état de sélection pour les éléments qui peuvent être sélectionnés.
- [`Element.ariaSetSize`](/fr/docs/Web/API/Element/ariaSetSize)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-setsize` qui définit le nombre d'objets dans l'ensemble d'éléments d'une liste ou d'un arbre.
- [`Element.ariaSort`](/fr/docs/Web/API/Element/ariaSort)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-sort` qui indique si les objets d'un tableau ou d'une grille sont triés par ordre croissant ou décroissant.
- [`Element.ariaValueMax`](/fr/docs/Web/API/Element/ariaValueMax)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-valueMax` qui définit la valeur maximale autorisée pour un élément d'interface utilisateur décrivant un intervalle.
- [`Element.ariaValueMin`](/fr/docs/Web/API/Element/ariaValueMin)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-valueMin` qui définit la valeur minimale autorisée pour un élément d'interface utilisateur décrivant un intervalle.
- [`Element.ariaValueNow`](/fr/docs/Web/API/Element/ariaValueNow)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-valueNow` qui définit la valeur courante d'un élément d'interface utilisateur décrivant un intervalle.
- [`Element.ariaValueText`](/fr/docs/Web/API/Element/ariaValueText)
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) qui reflète l'attribut `aria-valuetext` qui définit une alternative textuelle à `aria-valuenow` compréhensible par un humain.

### Gestionnaires d'évènements

- [`Element.onfullscreenchange`](/fr/docs/Web/API/Element/fullscreenchange_event)
  - : Un gestionnaire d'évènement pour l'évènement [`fullscreenchange`](/fr/docs/Web/API/Document/fullscreenchange_event) qui est envoyé lorsque l'élément passe en mode plein écran ou sort de celui-ci. Cet évènement peut être utilisé pour surveiller les transitions entre les deux modes mais aussi pour surveiller les modifications inattendues comme lorsque l'application s'exécute en arrière-plan.
- [`Element.onfullscreenerror`](/fr/docs/Web/API/Element/fullscreenerror_event)
  - : Un gestionnaire d'évènement pour [`fullscreenerror`](/fr/docs/Web/API/Document/fullscreenerror_event) qui est envoyé lorsqu'une erreur se produit lors du passage au mode plein écran.

## Méthodes

_`Element` hérite des méthodes fournit par la classe parente [`Node`](/fr/docs/Web/API/Node) et de sa classe parente avant elle : [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- [`EventTarget.addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener)
  - : Enregistre un gestionnaire d'évènement sur l'élément pour un type d'évènement donné.
- [`Element.after()`](/fr/docs/Web/API/Element/after)
  - : Insère un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) dans la liste des enfants du parent de l'élément courant, juste après ce dernier.
- [`Element.attachShadow()`](/fr/docs/Web/API/Element/attachShadow)
  - : Attache un arbre du DOM sombre à l'élément indiqué puis renvoie une référence à sa racine [`ShadowRoot`](/fr/docs/Web/API/ShadowRoot).
- [`Element.animate()`](/fr/docs/Web/API/Element/animate) {{Experimental_Inline}}
  - : Une méthode synthétique pour créer et exécuter une animation sur un élément. Renvoie l'instance de l'objet `Animation` créé.
- [`Element.append()`](/fr/docs/Web/API/Element/append)
  - : Insère un ensemble d'objet [`Node`](/fr/docs/Web/API/Node) ou [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) après le dernier enfant de l'élément.
- [`Element.before()`](/fr/docs/Web/API/Element/before)
  - : Insère un ensemble d'objet [`Node`](/fr/docs/Web/API/Node) ou [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) dans la liste des enfants du parent de l'élément courant, juste avant ce dernier.
- [`Element.closest()`](/fr/docs/Web/API/Element/closest)
  - : Renvoie l'élément (`Element`) qui est le plus proche ancêtre de l'élément courant (ou l'élément courant lui-même) qui correspond au sélecteur passé en paramètre.
- [`Element.createShadowRoot()`](/fr/docs/Web/API/Element/shadowRoot) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Crée un [DOM sombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM) sur l'élément, le transformant ainsi en hôte sombre. Renvoie un objet [`ShadowRoot`](/fr/docs/Web/API/ShadowRoot).
- [`Element.computedStyleMap()`](/fr/docs/Web/API/Element/computedStyleMap) {{Experimental_Inline}}
  - : Renvoie une interface [`StylePropertyMapReadOnly`](/fr/docs/Web/API/StylePropertyMapReadOnly) qui fournit une représentation en lecture seule d'un bloc de déclaration CSS alternatif à [`CSSStyleDeclaration`](/fr/docs/Web/API/CSSStyleDeclaration).
- [`EventTarget.dispatchEvent()`](/fr/docs/Web/API/EventTarget/dispatchEvent)
  - : Diffuse un évènement sur ce nœud dans le DOM et renvoie un booléen qui indique si aucun gestionnaire n'a annulé l'évènement.
- [`Element.getAnimations()`](/fr/docs/Web/API/Element/getAnimations) {{Experimental_Inline}}
  - : Renvoie un tableau des objets `Animation` actuellement actifs sur l'élément.
- [`Element.getAttribute()`](/fr/docs/Web/API/Element/getAttribute)
  - : Récupère la valeur de l'attribut nommé pour le nœud courant et le renvoie comme un [objet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object).
- [`Element.getAttributeNames()`](/fr/docs/Web/API/Element/getAttributeNames)
  - : Renvoie un tableau de noms d'attribut pour l'élément courant.
- [`Element.getAttributeNode()`](/fr/docs/Web/API/Element/getAttributeNode)
  - : Récupère la représentation du nœud pour l'attrtibut nommé du nœud courant et le renvoie comme un objet [`Attr`](/fr/docs/Web/API/Attr).
- [`Element.getAttributeNodeNS()`](/fr/docs/Web/API/Element/getAttributeNodeNS)
  - : Depuis le nœud courant, récupère la représentation du nœud pour l'attribut avec le nom et l'espace de noms indiqués et renvoie la valeur obtenue sous la forme d'un objet [`Attr`](/fr/docs/Web/API/Attr).
- [`Element.getAttributeNS()`](/fr/docs/Web/API/Element/getAttributeNS)
  - : Depuis le nœud courant, récupère la valeur de l'attribut avec le nom et l'espace de noms indiqués et la renvoie sous la forme d'un [objet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object).
- [`Element.getBoundingClientRect()`](/fr/docs/Web/API/Element/getBoundingClientRect)
  - : Renvoie la taille d'un élément et sa position relative dans la zone d'affichage (

    <i lang="en">viewport</i>

    ).

- [`Element.getBoxQuads()`](/fr/docs/Web/API/Element/getBoxQuads) {{experimental_inline}}
  - : Renvoie une liste d'objets [`DOMQuad`](/fr/docs/Web/API/DOMQuad) qui représentent les fragments CSS pour le nœud.
- [`Element.getClientRects()`](/fr/docs/Web/API/Element/getClientRects)
  - : Renvoie une collection de rectangles qui indique les rectangles englobants pour chaque ligne de texte d'un client.
- [`Element.getElementsByClassName()`](/fr/docs/Web/API/Element/getElementsByClassName)
  - : Renvoie une collection dynamique [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) qui contient tous les descendants de l'élément courant et qui possèdent la liste de classes fournie en paramètre.
- [`Element.getElementsByTagName()`](/fr/docs/Web/API/Element/getElementsByTagName)
  - : Renvoie une collection dynamique [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) qui contient tous les descendants de l'élément courant avec un nom de balise donné.
- [`Element.getElementsByTagNameNS()`](/fr/docs/Web/API/Element/getElementsByTagNameNS)
  - : Renvoie une collection dynamique [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) qui contient tous les descendants de l'élément courant qui ont un nom de balise et un espace de noms donnés.
- [`Element.hasAttribute()`](/fr/docs/Web/API/Element/hasAttribute)
  - : Renvoie un booléen indiquant si l'élément courant possède l'attribut donné.
- [`Element.hasAttributeNS()`](/fr/docs/Web/API/Element/hasAttributeNS)
  - : Renvoie un booléen indiquant si l'élément courant possède l'attribut donné pour l'espace de noms donné.
- [`Element.hasAttributes()`](/fr/docs/Web/API/Element/hasAttributes)
  - : Renvoie un booléen qui indique si l'élément courant a un ou plusieurs attributs HTML.
- [`Element.hasPointerCapture()`](/fr/docs/Web/API/Element/hasPointerCapture)
  - : Indique si l'élément a la capture du pointeur pour le pointeur identifié par l'identifiant passé en argument.
- [`Element.insertAdjacentElement()`](/fr/docs/Web/API/Element/insertAdjacentElement)
  - : Insère un nœud d'élément à la position relative indiquée par rapport à l'élément courant.
- [`Element.insertAdjacentHTML()`](/fr/docs/Web/API/Element/insertAdjacentHTML)
  - : Analyse le texte comme HTML ou XML puis insère les nœuds résultatns dans l'arbre à la position indiquée.
- [`Element.insertAdjacentText()`](/fr/docs/Web/API/Element/insertAdjacentText)
  - : Insère un nœud textuel à la position relative indiquée, par rapport à l'élément courant.
- [`Element.matches()`](/fr/docs/Web/API/Element/matches)
  - : Renvoie un booléen qui indique si l'élément serait ciblé par la chaîne de caractères passée en argument qui décrit un sélecteur.
- [`Element.prepend()`](/fr/docs/Web/API/Element/prepend)
  - : Insère un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) avant le premier enfant de l'élément courant.
- [`Element.querySelector()`](/fr/docs/Web/API/Element/querySelector)
  - : Renvoie le premier objet [`Node`](/fr/docs/Web/API/Node) qui correspond au sélecteur donné, relatif à l'élément courant.
- [`Element.querySelectorAll()`](/fr/docs/Web/API/Element/querySelectorAll)
  - : Renvoie un objet [`NodeList`](/fr/docs/Web/API/NodeList) contenant les nœuds pour lesquels le sélecteur, passé en argument, relatif à l'élément courant.
- [`Element.releasePointerCapture()`](/fr/docs/Web/API/Element/releasePointerCapture)
  - : Libère (arrête) la capture du pointeur précédemment activée pour un évènement de pointeur spécifique.
- [`Element.remove()`](/fr/docs/Web/API/Element/remove)
  - : Retire l'élément de la liste des éléments enfants de son parent.
- [`Element.removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute)
  - : Retire l'attribut nommé du nœud courant.
- [`Element.removeAttributeNode()`](/fr/docs/Web/API/Element/removeAttributeNode)
  - : Retire la représentation nodale de l'attribut nommé pour le nœud courant.
- [`Element.removeAttributeNS()`](/fr/docs/Web/API/Element/removeAttributeNS)
  - : Sur le nœud courant, retire l'attribut avec le nom et l'espace de noms indiqués.
- [`EventTarget.removeEventListener()`](/fr/docs/Web/API/EventTarget/removeEventListener)
  - : Retire un gestionnaire d'évènement de l'élément.
- [`Element.replaceChildren()`](/fr/docs/Web/API/Element/replaceChildren)
  - : Remplace l'enfant existant d'un nœud avec un nouvel ensemble d'enfants.
- [`Element.replaceWith()`](/fr/docs/Web/API/Element/replaceWith)
  - : Remplace l'élément dans la liste des enfants de son parent par un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String).
- [`Element.requestFullscreen()`](/fr/docs/Web/API/Element/requestFullscreen) {{Experimental_Inline}}
  - : Demande au navigateur, de façon asynchrone, d'afficher l'élément en plein écran.
- [`Element.requestPointerLock()`](/fr/docs/Web/API/Element/requestPointerLock) {{Experimental_Inline}}
  - : Demande au navigateur, de façon asynchrone, de bloquer le pointeur sur l'élément indiqué.
- [`Element.scroll()`](/fr/docs/Web/API/Element/scroll)
  - : Défile jusqu'à un ensemble de coordonnées données à l'intérieur de l'élément courant.
- [`Element.scrollBy()`](/fr/docs/Web/API/Element/scrollBy)
  - : Défile un élément de la quantité indiquée.
- [`Element.scrollIntoView()`](/fr/docs/Web/API/Element/scrollIntoView) {{Experimental_Inline}}
  - : Défile la page jusqu'à ce que l'élément apparaisse dans la vue.
- [`Element.scrollTo()`](/fr/docs/Web/API/Element/scrollTo)
  - : Défile jusqu'à un ensemble de coordonnées particulier à l'intérieur de l'élément donné.
- [`Element.setAttribute()`](/fr/docs/Web/API/Element/setAttribute)
  - : Définit la valeur d'un attribut nommé pour le nœud courant.
- [`Element.setAttributeNode()`](/fr/docs/Web/API/Element/setAttributeNode)
  - : Définit la représentation nodale d'un attribut nommé pour le nœud courant.
- [`Element.setAttributeNodeNS()`](/fr/docs/Web/API/Element/setAttributeNodeNS)
  - : Pour le nœud courant, définit la représentation nodale d'un attribut avec le nom et l'espace de noms indiqués.
- [`Element.setAttributeNS()`](/fr/docs/Web/API/Element/setAttributeNS)
  - : Pour le nœud courant, définit la valeur de l'attribut avec le nom et l'espace de noms indiqués.
- [`Element.setCapture()`](/fr/docs/Web/API/Element/setCapture) {{Non-standard_Inline}}{{Deprecated_Inline}}
  - : Initialise la capture des évènements liés à la souris, redirigeant ainsi tous les évènements de la souris sur cet élément.
- [`Element.setPointerCapture()`](/fr/docs/Web/API/Element/setPointerCapture)
  - : Désigne un élément spécifique comme future cible pour la capture des [évènements de pointeur](/fr/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/fr/docs/Web/API/Element/toggleAttribute)
  - : Active/désactive un attribut booléen sur l'élément courant : s'il est présent, cela le retire et s'il est absent, cela l'ajoute.

## Évènements

On peut écouter ces évènements en utilisant la méthode `addEventListener()` ou en affectant un gestionnaire d'évènement à la propriété `onnomevenement` de cette interface.

- [`cancel`](/fr/docs/Web/API/HTMLDialogElement/cancel_event)
  - : Déclenché sur un élément [`<dialog>`](/fr/docs/Web/HTML/Reference/Elements/dialog) lorsque la personne indique au navigateur le souhait de fermer la boîte de dialogue courante. Un navigateur pourra par exemple déclencher cet évènement lors d'un appui sur la touche

    <kbd>Echap</kbd>

    ou lors d'un clic sur le bouton « Fermer cette boîte de dialogue » fourni par le navigateur. Également disponible via la propriété [`oncancel`](/fr/docs/Web/API/GlobalEventHandlers/oncancel).

- [`error`](/fr/docs/Web/API/HTMLElement/error_event)
  - : Déclenché lors de l'échec du chargement d'une ressource ou lorsque celle-ci ne peut être utilisée. Cet évènement sera par exemple déclenché lors d'une erreur d'exécution d'un script ou lorsqu'une image ne peut être trouvée ou est invalide. Également disponible via la propriété [`onerror`](/fr/docs/Web/API/Window/error_event).
- [`scroll`](/fr/docs/Web/API/Element/scroll_event)
  - : Déclenché lors du défilement de la vue du document ou d'un élément. Également disponible via la propriété [`onscroll`](/fr/docs/Web/API/Element/scroll_event).
- [`select`](/fr/docs/Web/API/HTMLInputElement/select_event)
  - : Déclenché lors de la sélection de texte. Également disponible via la propriété [`onselect`](/fr/docs/Web/API/HTMLInputElement/select_event).
- [`show`](/fr/docs/Web/API/Element/show_event)
  - : Déclenché lorsqu'un évènement [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event) a été déclenché ou a bouillonné sur un élément qui dispose de l'attribut [`contextmenu`](/fr/docs/Web/HTML/Reference/Elements/menu) attribute. {{deprecated_inline}} Également disponible via la propriété [`onshow`](/fr/docs/Web/API/GlobalEventHandlers/onshow).
- [`wheel`](/fr/docs/Web/API/Element/wheel_event)
  - : Déclenché lorsque l'utilisateur fait tourner la molette d'un appareil de pointage (généralement une souris). Également disponible via la propriété [`onwheel`](/fr/docs/Web/API/Element/wheel_event).

### Évènements du presse-papiers

- [`copy`](/fr/docs/Web/API/Element/copy_event)
  - : Déclenché lorsque l'utilisateur initie une action de copie via l'interface du navigateur. Également disponible via la propriété [`oncopy`](/fr/docs/Web/API/Element/copy_event).
- [`cut`](/fr/docs/Web/API/Element/cut_event)
  - : Déclenché lorsque l'utilisateur initie une action de coupe via l'interface du navigateur. Également disponible via la propriété [`oncut`](/fr/docs/Web/API/Element/cut_event).
- [`paste`](/fr/docs/Web/API/Element/paste_event)
  - : Déclenché lorsque l'utilisateur initie une action pour coller via l'interface du navigateur. Également disponible via la propriété [`onpaste`](/fr/docs/Web/API/Element/paste_event).

### Évènements de composition

- [`compositionend`](/fr/docs/Web/API/Element/compositionend_event)
  - : Déclenché lorsqu'un système de composition textuel tel qu'un [éditeur de méthode de saisie](/fr/docs/Glossary/Input_method_editor) termine ou annule la session de composition courante.
- [`compositionstart`](/fr/docs/Web/API/Element/compositionstart_event)
  - : Déclenché lorsqu'un système de composition textuel tel qu'un [éditeur de méthode de saisie](/fr/docs/Glossary/Input_method_editor) démarre une nouvelle session de composition.
- [`compositionupdate`](/fr/docs/Web/API/Element/compositionupdate_event)
  - : Déclenché lorsqu'un nouveau caractère est reçu dans le contexte d'une session de composition textuelle.

### Évènements pour le focus

- [`blur`](/fr/docs/Web/API/Element/blur_event)
  - : Déclenché lorsqu'un élément a perdu le focus. Également disponible via la propriété [`onblur`](/fr/docs/Web/API/Window/blur_event).
- [`focus`](/fr/docs/Web/API/Element/focus_event)
  - : Déclenché lorsqu'un élément reçoit le focus. Également disponible via la propriété [`onfocus`](/fr/docs/Web/API/Window/focus_event).
- [`focusin`](/fr/docs/Web/API/Element/focusin_event)
  - : Déclenché lorsqu'un élément s'apprête à recevoir le focus.
- [`focusout`](/fr/docs/Web/API/Element/focusout_event)
  - : Déclenché lorsqu'un élément s'apprête à perdre le focus.

### Évènements relatifs au plein écran

- [`fullscreenchange`](/fr/docs/Web/API/Element/fullscreenchange_event)
  - : Envoyé à un élément (`Element`) lorsque celui-ci effectue une transition (entrée ou sortie) pour le mode [plein écran](/fr/docs/Web/API/Fullscreen_API/Guide). Également disponible via la propriété [`onfullscreenchange`](/fr/docs/Web/API/Element/fullscreenchange_event).
- [`fullscreenerror`](/fr/docs/Web/API/Element/fullscreenerror_event)
  - : Envoyé à un élément `Element` si une erreur se produit lors d'une transition (entrée ou sortie) pour le mode [plein écran](/fr/docs/Web/API/Fullscreen_API/Guide). Également disponible via la propriété [`onfullscreenerror`](/fr/docs/Web/API/Element/fullscreenerror_event).

### Évènements relatifs au clavier

- [`keydown`](/fr/docs/Web/API/Element/keydown_event)
  - : Déclenché lors de l'appui sur une touche du clavier. Également disponible via la propriété [`onkeydown`](/fr/docs/Web/API/Element/keydown_event).
- [`keypress`](/fr/docs/Web/API/Element/keypress_event)
  - : Déclenché lorsqu'une touche produit un caractère lorsqu'elle est pressée. {{deprecated_inline}} Également disponible via la propriété [`onkeypress`](/fr/docs/Web/API/Element/keypress_event).
- [`keyup`](/fr/docs/Web/API/Element/keyup_event)
  - : Déclenché lorsqu'une touche est relâchée. Également disponible via la propriété [`onkeyup`](/fr/docs/Web/API/Element/keyup_event).

### Évènements relatifs à la souris

- [`auxclick`](/fr/docs/Web/API/Element/auxclick_event)
  - : Déclenché lorsqu'un bouton non primaire d'un appareil de pointage (c'est-à-dire tout bouton de la souris en dehors du bouton gauche) a été pressé puis relâché sur un élément. Également disponible via la propriété [`onauxclick`](/fr/docs/Web/API/Element/auxclick_event).
- [`click`](/fr/docs/Web/API/Element/click_event)
  - : Déclenché lorsqu'un bouton d'un appareil de pointage (par exemple le bouton gauche de la souris) a été pressé puis relâche sur un élément. Également disponible via la propriété [`onclick`](/fr/docs/Web/API/Element/click_event).
- [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
  - : Déclenché lorsqu'un utilisateur tente d'ouvrir un menu contextuel. Également disponible via la propriété [`oncontextmenu`](/fr/docs/Web/API/Element/contextmenu_event).
- [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - : Déclenché lorsqu'un bouton d'un appareil de pointage (par exemple le bouton gauche de la souris) a été utilisé pour un double-clic sur un élément. Également disponible via la propriété [`ondblclick`](/fr/docs/Web/API/Element/dblclick_event).
- [`DOMActivate`](/fr/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Se produit lorsqu'un élément est activé, par exemple avec un clic de souris ou l'appui d'une touche.
- [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - : Déclenché lorsqu'un bouton d'un appareil de pointage est pressé sur un élément. Également disponible via la propriété [`onmousedown`](/fr/docs/Web/API/Element/mousedown_event).
- [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - : Déclenché lorsqu'un appareil de pointage (généralement une souris) est déplacé pour arriver sur l'élément disposant du gestionnaire d'évènement. Également disponible via la propriété [`onmouseenter`](/fr/docs/Web/API/Element/mouseenter_event).
- [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - : Déclenché lorsque le pointeur d'un appareil de pointage (généralement une souris) est déplacée en dehors de l'élément qui dispose du gestionnaire d'évènement. Également disponible via la propriété [`onmouseleave`](/fr/docs/Web/API/Element/mouseleave_event).
- [`mousemove`](/fr/docs/Web/API/Element/mousemove_event)
  - : Déclenché lorsqu'un appareil de pointage (généralement une souris) est déplacé sur un élément. Également disponible via la propriété [`onmousemove`](/fr/docs/Web/API/Element/mousemove_event).
- [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - : Déclenché lorsqu'un appareil de pointage (généralement une souris) se déplace pour quitter l'élément qui dispose du gestionnaire d'évènement (ou lorsque le pointeur quitte l'un des enfants de cet élément). Également disponible via la propriété [`onmouseout`](/fr/docs/Web/API/Element/mouseout_event).
- [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
  - : Déclenché lorsqu'un appareil de pointage arrive sur l'élément (ou l'un de ses enfants) qui dispose du gestionnaire d'évènement. Également disponible via la propriété [`onmouseover`](/fr/docs/Web/API/Element/mouseover_event).
- [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - : Déclenché lorsque le bouton d'un appareil de pointage est relâché pour un élément. Également disponible via la propriété [`onmouseup`](/fr/docs/Web/API/Element/mouseup_event).
- [`webkitmouseforcechanged`](/fr/docs/Web/API/Element/webkitmouseforcechanged_event)
  - : Déclenché à chaque fois que la quantite dé pression change sur le pavé ou l'écran tactile.
- [`webkitmouseforcedown`](/fr/docs/Web/API/Element/webkitmouseforcedown_event)
  - : Déclenché après l'évènement `mousedown` dès que suffisamment de pression a été appliquée pour qualifier ce clic de clic forcé.
- [`webkitmouseforcewillbegin`](/fr/docs/Web/API/Element/webkitmouseforcewillbegin_event)
  - : Déclenché avant l'évènement [`mousedown`](/fr/docs/Web/API/Element/mousedown_event).
- [`webkitmouseforceup`](/fr/docs/Web/API/Element/webkitmouseforceup_event)
  - : Déclenché après l'évènement [`webkitmouseforcedown`](/fr/docs/Web/API/Element/webkitmouseforcedown_event) dès que suffisamment de pression a été relâchée pour terminer le clic forcé.

### Évènements tactiles

- [`touchcancel`](/fr/docs/Web/API/Element/touchcancel_event)
  - : Déclenché lorsqu'un ou plusieurs points de toucher ont été perturbés de façon spécifique à l'implémentation (par exemple lorsque trop de points de toucher ont été créés). Également disponible avec la propriété [`ontouchcancel`](/fr/docs/Web/API/Element/touchcancel_event).
- [`touchend`](/fr/docs/Web/API/Element/touchend_event)
  - : Déclenché lorsqu'un ou plusieurs points de toucher sont retirés de la surface tactile. Également disponible via la propriété [`ontouchend`](/fr/docs/Web/API/Element/touchend_event).
- [`touchmove`](/fr/docs/Web/API/Element/touchmove_event)
  - : Déclenché lorsqu'un ou plusieurs points de toucher se déplacent sur la surface tactile. Également disponible via la propriété [`ontouchmove`](/fr/docs/Web/API/Element/touchmove_event).
- [`touchstart`](/fr/docs/Web/API/Element/touchstart_event)
  - : Déclenché lorsqu'un ou plusieurs points de toucher sont placés sur la surface tactile. Également disponible via la propriété [`ontouchstart`](/fr/docs/Web/API/Element/touchstart_event).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
