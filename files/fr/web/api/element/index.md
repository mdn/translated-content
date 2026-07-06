---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("DOM")}}

**`Element`** est la classe de base la plus générale dont héritent tous les objets représentant des éléments (c'est-à-dire des objets qui représentent des éléments) dans un {{DOMxRef("Document")}}. Elle ne possède que des méthodes et des propriétés communes à tous les types d'éléments. Des classes plus spécifiques héritent de `Element`.

Par exemple, l'interface {{DOMxRef("HTMLElement")}} est l'interface de base pour les éléments HTML. De même, l'interface {{DOMxRef("SVGElement")}} est la base pour tous les éléments SVG, et l'interface {{DOMxRef("MathMLElement")}} est l'interface de base pour les éléments MathML. La plupart des fonctionnalités sont définies plus bas dans la hiérarchie des classes.

Les langages en dehors du domaine de la plateforme Web, comme XUL par le biais de l'interface `XULElement`, implémentent également `Element`.

{{InheritanceDiagram}}

## Propriétés d'instance

_`Element` hérite des propriétés de son interface parente, {{DOMxRef("Node")}}, et par extension de celles de l'interface parente de celle-ci, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Element.activeViewTransition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne une instance de {{DOMxRef("ViewTransition")}} représentant la [transition de vue](/fr/docs/Web/API/View_Transition_API) actuellement active sur un élément.
- {{DOMxRef("Element.assignedSlot")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLSlotElement")}} représentant le {{HTMLElement("slot")}} dans lequel le nœud est inséré.
- {{DOMxRef("Element.attributes")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("NamedNodeMap")}} contenant les attributs assignés de l'élément HTML correspondant.
- {{DOMxRef("Element.childElementCount")}} {{ReadOnlyInline}}
  - : Retourne le nombre d'éléments enfants de cet élément.
- {{DOMxRef("Element.children")}} {{ReadOnlyInline}}
  - : Retourne les éléments enfants de cet élément.
- {{DOMxRef("Element.classList")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("DOMTokenList")}} contenant la liste des attributs de classe.
- {{DOMxRef("Element.className")}}
  - : Une chaîne de caractères représentant la classe de l'élément.
- {{DOMxRef("Element.clientHeight")}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant la hauteur intérieure de l'élément.
- {{DOMxRef("Element.clientLeft")}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant la largeur de la bordure gauche de l'élément.
- {{DOMxRef("Element.clientTop")}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant la largeur de la bordure supérieure de l'élément.
- {{DOMxRef("Element.clientWidth")}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant la largeur intérieure de l'élément.
- {{DOMxRef("Element.currentCSSZoom")}} {{ReadOnlyInline}}
  - : Un nombre indiquant la taille de zoom effective de l'élément, ou 1.0 si l'élément n'est pas rendu.
- {{DOMxRef("Element.customElementRegistry")}} {{ReadOnlyInline}}
  - : L'objet {{DOMxRef("CustomElementRegistry")}} associé à cet élément, ou `null` si aucun n'a été défini.
- {{DOMxRef("Element.elementTiming")}} {{Experimental_Inline}}
  - : Une chaîne de caractères reflétant l'attribut [`elementtiming`](/fr/docs/Web/HTML/Reference/Attributes/elementtiming) qui marque un élément pour observation dans l'API {{DOMxRef("PerformanceElementTiming")}}.
- {{DOMxRef("Element.firstElementChild")}} {{ReadOnlyInline}}
  - : Retourne le premier élément enfant de cet élément.
- {{DOMxRef("Element.id")}}
  - : Une chaîne de caractères représentant l'identifiant de l'élément.
- {{DOMxRef("Element.innerHTML")}}
  - : Une chaîne de caractères représentant le balisage du contenu de l'élément.
- {{DOMxRef("Element.lastElementChild")}} {{ReadOnlyInline}}
  - : Retourne le dernier élément enfant de cet élément.
- {{DOMxRef("Element.localName")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant la partie locale du nom qualifié de l'élément.
- {{DOMxRef("Element.namespaceURI")}} {{ReadOnlyInline}}
  - : L'URI de l'espace de noms de l'élément, ou `null` s'il n'y a pas d'espace de noms.
- {{DOMxRef("Element.nextElementSibling")}} {{ReadOnlyInline}}
  - : Un objet `Element`, l'élément immédiatement suivant celui donné dans l'arbre, ou `null` s'il n'y a pas de nœud voisin.
- {{DOMxRef("Element.outerHTML")}}
  - : Une chaîne de caractères représentant le balisage de l'élément, y compris son contenu. Lorsqu'elle est utilisée comme un mutateur, elle remplace l'élément par des nœuds analysés à partir de la chaîne de caractères donnée.
- {{DOMxRef("Element.part")}}
  - : Représente l'identifiant de partie(s) de l'élément (c'est-à-dire, défini en utilisant l'attribut `part`), retourné en tant que {{DOMxRef("DOMTokenList")}}.
- {{DOMxRef("Element.prefix")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant le préfixe de l'espace de noms de l'élément, ou `null` si aucun préfixe n'est défini.
- {{DOMxRef("Element.previousElementSibling")}} {{ReadOnlyInline}}
  - : Un objet `Element`, l'élément immédiatement précédent celui donné dans l'arbre, ou `null` s'il n'y a pas de nœud voisin.
- {{DOMxRef("Element.scrollHeight")}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant la hauteur de la zone de défilement d'un élément.
- {{DOMxRef("Element.scrollLeft")}}
  - : Un nombre représentant le décalage de défilement horizontal de l'élément.
- {{DOMxRef("Element.scrollLeftMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant le décalage de défilement horizontal maximal possible pour l'élément.
- {{DOMxRef("Element.scrollTop")}}
  - : Un nombre représentant le nombre de pixels que le haut de l'élément est défilé verticalement.
- {{DOMxRef("Element.scrollTopMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant le décalage de défilement vertical maximal possible pour l'élément.
- {{DOMxRef("Element.scrollWidth")}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant la largeur de la zone de défilement de l'élément.
- {{DOMxRef("Element.shadowRoot")}} {{ReadOnlyInline}}
  - : Retourne la racine d'ombre (<i lang="en">shadow root</i> en anglais) ouverte hébergée par l'élément, ou `null` si aucune racine d'ombre ouverte n'est présente.
- {{DOMxRef("Element.slot")}}
  - : Retourne le nom de l'emplacement du DOM d'ombre (<i lang="en">shadow DOM slot</i> en anglais) dans lequel l'élément est inséré.
- {{DOMxRef("Element.tagName")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères avec le nom de la balise pour l'élément donné.

### Propriétés d'instance provenant de l'ARIA

_L'interface `Element` inclut également les propriétés suivantes._

- {{DOMxRef("Element.ariaAtomic")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic), qui indique si les technologies d'assistance présentent toutes les parties ou seulement certaines parties de la région modifiée en fonction des notifications de changement définies par l'attribut [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant).
- {{DOMxRef("Element.ariaAutoComplete")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete), qui indique si la saisie de texte peut déclencher l'affichage d'une ou plusieurs prédictions de la valeur prévue par l'utilisateur·ice pour une zone de combinaison, une zone de recherche ou une zone de texte, et définit comment les prédictions seraient présentées si elles étaient faites.
- {{DOMxRef("Element.ariaBrailleLabel")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-braillelabel`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel), qui définit l'étiquette braille de l'élément.
- {{DOMxRef("Element.ariaBrailleRoleDescription")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-brailleroledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription), qui définit la description du rôle braille ARIA de l'élément.
- {{DOMxRef("Element.ariaBusy")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy), qui indique si un élément est en cours de modification, car les technologies d'assistance peuvent vouloir attendre que les modifications soient terminées avant de les exposer à l'utilisateur·ice.
- {{DOMxRef("Element.ariaChecked")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked), qui indique l'état actuel «&nbsp;coché&nbsp;» des cases à cocher, des boutons radio et d'autres widgets ayant un état coché.
- {{DOMxRef("Element.ariaColCount")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount), qui définit le nombre de colonnes dans un tableau, une grille ou une arborescence de grille.
- {{DOMxRef("Element.ariaColIndex")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex), qui définit l'index ou la position d'une colonne par rapport au nombre total de colonnes dans un tableau, une grille ou une arborescence de grille.
- {{DOMxRef("Element.ariaColIndexText")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-colindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext), qui définit une alternative textuelle lisible par un·e humain·e pour `aria-colindex`.
- {{DOMxRef("Element.ariaColSpan")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan), qui définit le nombre de colonnes couvertes par une cellule ou une cellule de grille dans un tableau, une grille ou une arborescence de grille.
- {{DOMxRef("Element.ariaCurrent")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-current`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current), qui indique l'élément représentant l'élément actuel dans un conteneur ou un ensemble d'éléments liés.
- {{DOMxRef("Element.ariaDescription")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-description`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), qui définit une valeur de chaîne de caractères décrivant ou annotant l'élément actuel.
- {{DOMxRef("Element.ariaDisabled")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled), qui indique que l'élément est perceptible mais désactivé, donc il n'est pas modifiable ou autrement opérationnel.
- {{DOMxRef("Element.ariaExpanded")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), qui indique si un élément de regroupement possédé ou contrôlé par cet élément est développé ou réduit.
- {{DOMxRef("Element.ariaHasPopup")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), qui indique la disponibilité et le type d'élément contextuel interactif, tel qu'un menu ou une boîte de dialogue, pouvant être déclenché par un élément.
- {{DOMxRef("Element.ariaHidden")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden), qui indique si l'élément est exposé à une API d'accessibilité.
- {{DOMxRef("Element.ariaInvalid")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid), qui indique que la valeur saisie ne correspond pas au format attendu par l'application.
- {{DOMxRef("Element.ariaKeyShortcuts")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-keyshortcuts`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts), qui indique les raccourcis clavier qu'un·e auteur·ice a mis en œuvre pour activer ou donner la sélection à un élément.
- {{DOMxRef("Element.ariaLabel")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), qui définit une valeur de chaîne de caractères étiquetant l'élément actuel.
- {{DOMxRef("Element.ariaLevel")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level), qui définit le niveau hiérarchique d'un élément au sein d'une structure.
- {{DOMxRef("Element.ariaLive")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live), qui indique qu'un élément est mis à jour et décrit les types de mises à jour que les agents utilisateurs, les technologies d'assistance et l'utilisateur·ice peuvent attendre de la région dynamique.
- {{DOMxRef("Element.ariaModal")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-modal`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal), qui indique si un élément est modal lorsqu'il est affiché.
- {{DOMxRef("Element.ariaMultiline")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-multiline`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline), qui indique si une zone de texte accepte plusieurs lignes de saisie ou seulement une seule ligne.
- {{DOMxRef("Element.ariaMultiSelectable")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable), qui indique que l'utilisateur·ice peut sélectionner plusieurs éléments parmi les descendants sélectionnables actuels.
- {{DOMxRef("Element.ariaOrientation")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation), qui indique si l'orientation de l'élément est horizontale, verticale ou inconnue/ambiguë.
- {{DOMxRef("Element.ariaPlaceholder")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-placeholder`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder), qui définit un court indice destiné à aider l'utilisateur·ice lors de la saisie de données lorsque le contrôle n'a pas de valeur.
- {{DOMxRef("Element.ariaPosInSet")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset), qui définit le numéro ou la position d'un élément dans l'ensemble actuel de `listitems` ou `treeitems`.
- {{DOMxRef("Element.ariaPressed")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed), qui indique l'état actuel «&nbsp;pressé&nbsp;» des boutons bascule.
- {{DOMxRef("Element.ariaReadOnly")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly), qui indique que l'élément n'est pas modifiable, mais reste autrement opérationnel.
- {{DOMxRef("Element.ariaRelevant")}} {{Non-standard_Inline}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant), qui indique quelles notifications l'agent utilisateur déclenche lorsque l'arbre d'accessibilité dans une région dynamique est modifié. C'est utilisé pour décrire quels changements dans une région `aria-live` sont pertinents et doivent être annoncés.
- {{DOMxRef("Element.ariaRequired")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required), qui indique que l'utilisateur·ice doit fournir une saisie sur l'élément avant qu'un formulaire puisse être envoyé.
- {{DOMxRef("Element.ariaRoleDescription")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription), qui définit une description lisible par un·e humain·e et localisée par l'auteur·ice pour le rôle d'un élément.
- {{DOMxRef("Element.ariaRowCount")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount), qui définit le nombre total de lignes dans un tableau, une grille ou un arbre de grille.
- {{DOMxRef("Element.ariaRowIndex")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex), qui définit l'index ou la position d'une ligne par rapport au nombre total de lignes dans un tableau, une grille ou un arbre de grille.
- {{DOMxRef("Element.ariaRowIndexText")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-rowindextext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext), qui définit une alternative textuelle lisible par un·e humain·e pour `aria-rowindex`.
- {{DOMxRef("Element.ariaRowSpan")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan), qui définit le nombre de lignes couvertes par une cellule ou une cellule de grille dans un tableau, une grille ou un arbre de grille.
- {{DOMxRef("Element.ariaSelected")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected), qui indique l'état actuel «&nbsp;sélectionné&nbsp;» des éléments qui ont un état de sélection.
- {{DOMxRef("Element.ariaSetSize")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize), qui définit le nombre d'éléments dans l'ensemble actuel de `listitems` ou `treeitems`.
- {{DOMxRef("Element.ariaSort")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort), qui indique si les éléments d'un tableau ou d'une grille sont triés par ordre croissant ou décroissant.
- {{DOMxRef("Element.ariaValueMax")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-valueMax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), qui définit la valeur maximale autorisée pour un composant de plage.
- {{DOMxRef("Element.ariaValueMin")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-valueMin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin), qui définit la valeur minimale autorisée pour un composant de plage.
- {{DOMxRef("Element.ariaValueNow")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-valueNow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow), qui définit la valeur actuelle pour un composant de plage.
- {{DOMxRef("Element.ariaValueText")}}
  - : Une chaîne de caractères reflétant l'attribut [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext), qui définit une alternative textuelle lisible par un·e humain·e pour `aria-valuenow`.
- {{DOMxRef("Element.role")}}
  - : Une chaîne de caractères reflétant explicitement l'attribut [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles), qui fournit le rôle sémantique de l'élément.

#### Propriétés d'instance réfléchies à partir des références d'éléments ARIA

Les propriétés reflètent les éléments définis par la référence `id` dans les attributs correspondants, mais avec certaines exceptions. Voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Attributs réfléchis_ pour plus d'informations.

- {{DOMxRef("Element.ariaActiveDescendantElement")}}
  - : Un élément qui représente l'élément actif actuel lorsque la sélection est sur un composant [`composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) ou [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).
    Reflète l'attribut [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant).
- {{DOMxRef("Element.ariaControlsElements")}}
  - : Un tableau d'éléments dont le contenu ou la présence est contrôlé par l'élément auquel il est appliqué.
    Reflète l'attribut [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls).
- {{DOMxRef("Element.ariaDescribedByElements")}}
  - : Un tableau d'éléments qui contiennent la description accessible pour l'élément auquel il est appliqué.
    Reflète l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).
- {{DOMxRef("Element.ariaDetailsElements")}}
  - : Un tableau d'éléments qui fournissent des détails accessibles pour l'élément auquel il est appliqué.
    Reflète l'attribut [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).
- {{DOMxRef("Element.ariaErrorMessageElements")}}
  - : Un tableau d'éléments qui fournissent un message d'erreur pour l'élément auquel il est appliqué.
    Reflète l'attribut [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage).
- {{DOMxRef("Element.ariaFlowToElements")}}
  - : Un tableau d'éléments qui identifient l'élément suivant (ou les éléments suivants) dans un ordre de lecture alternatif du contenu, remplaçant l'ordre de lecture par défaut général à la discrétion de l'utilisateur·ice.
    Reflète l'attribut [`aria-flowto`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto).
- {{DOMxRef("Element.ariaLabelledByElements")}}
  - : Un tableau d'éléments qui fournissent le nom accessible pour l'élément auquel il est appliqué.
    Reflète l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).
- {{DOMxRef("Element.ariaOwnsElements")}}
  - : Un tableau d'éléments possédés par l'élément auquel il est appliqué.
    C'est utilisé pour définir une relation visuelle, fonctionnelle ou contextuelle entre un parent et ses éléments enfants lorsque la hiérarchie DOM ne peut pas être utilisée pour représenter la relation.
    Reflète l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns).

## Méthodes d'instance

_`Element` hérite des méthodes de ses parents {{DOMxRef("Node")}}, et de son propre parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Element.after()")}}
  - : Insère un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères dans la liste des enfants du parent d'un `Element`, juste après un `Element`.
- {{DOMxRef("Element.animate()")}}
  - : Une méthode raccourcie pour créer et exécuter une animation sur un élément. Retourne l'instance de l'objet `Animation` créée.
- {{DOMxRef("Element.ariaNotify()")}}
  - : Définit qu'une chaîne de caractères de texte donnée doit être annoncée par un lecteur d'écran.
- {{DOMxRef("Element.append()")}}
  - : Insère un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères après le dernier enfant de l'élément.
- {{DOMxRef("Element.attachShadow()")}}
  - : Attache un arbre de DOM d'ombre à l'élément défini et retourne une référence à son {{DOMxRef("ShadowRoot")}}.
- {{DOMxRef("Element.before()")}}
  - : Insère un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères dans la liste des enfants du parent d'un `Element`, juste avant un `Element`.
- {{DOMxRef("Element.checkVisibility()")}}
  - : Retourne si un élément est censé être visible ou non en fonction de vérifications configurables.
- {{DOMxRef("Element.closest()")}}
  - : Retourne un `Element` qui est l'ancêtre le plus proche de l'élément actuel (ou l'élément actuel lui-même) qui correspond aux sélecteurs donnés en paramètre.
- {{DOMxRef("Element.computedStyleMap()")}}
  - : Retourne une interface {{DOMxRef("StylePropertyMapReadOnly")}} qui fournit une représentation en lecture seule d'un bloc de déclaration CSS, alternative à {{DOMxRef("CSSStyleDeclaration")}}.
- {{DOMxRef("Element.getAnimations()")}}
  - : Retourne un tableau d'objets `Animation` actuellement actifs sur l'élément.
- {{DOMxRef("Element.getAttribute()")}}
  - : Retourne la valeur de l'attribut nommé de l'élément actuel et la retourne sous forme de chaîne de caractères.
- {{DOMxRef("Element.getAttributeNames()")}}
  - : Retourne un tableau des noms d'attributs de l'élément actuel.
- {{DOMxRef("Element.getAttributeNode()")}}
  - : Récupère la représentation en nœud de l'attribut nommé de l'élément actuel et la retourne sous forme d'un {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNodeNS()")}}
  - : Récupère la représentation en nœud de l'attribut avec le nom et l'espace de noms définis, à partir de l'élément actuel, et la retourne sous forme d'un objet {{DOMxRef("Attr")}}.
- {{DOMxRef("Element.getAttributeNS()")}}
  - : Récupère la valeur de l'attribut avec l'espace de noms et le nom définis à partir de l'élément actuel et la retourne sous forme de chaîne de caractères.
- {{DOMxRef("Element.getBoundingClientRect()")}}
  - : Retourne la taille d'un élément et sa position par rapport à la fenêtre d'affichage.
- {{DOMxRef("Element.getBoxQuads()")}} {{Experimental_Inline}}
  - : Retourne une liste d'objets {{DOMxRef("DOMQuad")}} représentant les fragments CSS du nœud.
- {{DOMxRef("Element.getClientRects()")}}
  - : Retourne une collection de rectangles qui indiquent les rectangles englobants pour chaque ligne de texte dans un client.
- {{DOMxRef("Element.getElementsByClassName()")}}
  - : Retourne une {{DOMxRef("HTMLCollection")}} dynamique contenant tous les descendants de l'élément actuel qui possèdent la liste des classes données en paramètre.
- {{DOMxRef("Element.getElementsByTagName()")}}
  - : Retourne une {{DOMxRef("HTMLCollection")}} dynamique contenant tous les éléments descendants, d'un nom de balise particulier, à partir de l'élément actuel.
- {{DOMxRef("Element.getElementsByTagNameNS()")}}
  - : Retourne une {{DOMxRef("HTMLCollection")}} dynamique contenant tous les éléments descendants, d'un nom de balise et d'un espace de noms particuliers, à partir de l'élément actuel.
- {{DOMxRef("Element.getHTML()")}}
  - : Retourne le contenu DOM de l'élément sous forme de chaîne de caractères HTML, incluant éventuellement tout DOM d'ombre.
- {{DOMxRef("Element.hasAttribute()")}}
  - : Retourne une valeur booléenne indiquant si l'élément possède l'attribut défini ou non.
- {{DOMxRef("Element.hasAttributeNS()")}}
  - : Retourne une valeur booléenne indiquant si l'élément possède l'attribut défini, dans l'espace de noms défini, ou non.
- {{DOMxRef("Element.hasAttributes()")}}
  - : Retourne une valeur booléenne indiquant si l'élément possède un ou plusieurs attributs HTML présents.
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : Indique si l'élément sur lequel il est invoqué a la capture du pointeur pour le pointeur identifié par l'ID de pointeur donné.
- {{DOMxRef("Element.insertAdjacentElement()")}}
  - : Insère un nœud élément donné à une position donnée par rapport à l'élément sur lequel il est invoqué.
- {{DOMxRef("Element.insertAdjacentHTML()")}}
  - : Analyse le texte comme HTML ou XML et insère les nœuds résultants dans l'arbre à la position donnée.
- {{DOMxRef("Element.insertAdjacentText()")}}
  - : Insère un nœud texte donné à une position donnée par rapport à l'élément sur lequel il est invoqué.
- {{DOMxRef("Element.matches()")}}
  - : Retourne une valeur booléenne indiquant si l'élément est sélectionné par la chaîne de caractères de sélecteur définie.
- {{DOMxRef("Element.moveBefore()")}}
  - : Déplace un nœud ({{DOMxRef("Node")}}) donné à l'intérieur du nœud invoqué en tant qu'enfant direct, avant un nœud de référence donné, sans supprimer puis insérer le nœud.
- {{DOMxRef("Element.prepend()")}}
  - : Insère un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères avant le premier enfant de l'élément.
- {{DOMxRef("Element.pseudo()")}} {{Experimental_Inline}}
  - : Retourne un objet {{DOMxRef("CSSPseudoElement")}} représentant le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) du type défini associé à l'élément.
- {{DOMxRef("Element.querySelector()")}}
  - : Retourne le premier {{DOMxRef("Node")}} qui correspond à la chaîne de caractères de sélecteur définie relative à l'élément.
- {{DOMxRef("Element.querySelectorAll()")}}
  - : Retourne une {{DOMxRef("NodeList")}} de nœuds qui correspondent à la chaîne de caractères de sélecteur définie relative à l'élément.
- {{DOMxRef("Element.releasePointerCapture()")}}
  - : Libère (arrête) la capture du pointeur qui avait été précédemment définie pour un {{DOMxRef("PointerEvent")}} spécifique.
- {{DOMxRef("Element.remove()")}}
  - : Supprime l'élément de la liste des enfants de son parent.
- {{DOMxRef("Element.removeAttribute()")}}
  - : Supprime l'attribut nommé du nœud actuel.
- {{DOMxRef("Element.removeAttributeNode()")}}
  - : Supprime la représentation du nœud de l'attribut nommé du nœud actuel.
- {{DOMxRef("Element.removeAttributeNS()")}}
  - : Supprime l'attribut avec le nom et l'espace de noms définis du nœud actuel.
- {{DOMxRef("Element.replaceChildren()")}}
  - : Remplace les enfants existants d'un {{DOMxRef("Node")}} par un nouvel ensemble d'enfants définis.
- {{DOMxRef("Element.replaceWith()")}}
  - : Remplace l'élément dans la liste des enfants de son parent par un ensemble d'objets {{DOMxRef("Node")}} ou de chaînes de caractères.
- {{DOMxRef("Element.requestFullscreen()")}}
  - : Demande de manière asynchrone au navigateur de mettre l'élément en plein écran.
- {{DOMxRef("Element.requestPointerLock()")}}
  - : Permet de demander de manière asynchrone que le pointeur soit verrouillé sur l'élément donné.
- {{DOMxRef("Element.scroll()")}}
  - : Fait défiler vers un ensemble particulier de coordonnées à l'intérieur d'un élément donné.
- {{DOMxRef("Element.scrollBy()")}}
  - : Fait défiler un élément de la quantité donnée.
- {{DOMxRef("Element.scrollIntoView()")}}
  - : Fait défiler la page jusqu'à ce que l'élément soit visible.
- {{DOMxRef("Element.scrollIntoViewIfNeeded()")}} {{Non-standard_Inline}}
  - : Fait défiler l'élément actuel dans la zone visible de la fenêtre du navigateur s'il n'est pas déjà dans la zone visible de la fenêtre du navigateur. **Utilisez plutôt la méthode standard {{DOMxRef("Element.scrollIntoView()")}}.**
- {{DOMxRef("Element.scrollTo()")}}
  - : Fait défiler vers un ensemble particulier de coordonnées à l'intérieur d'un élément donné.
- {{DOMxRef("Element.setAttribute()")}}
  - : Définit la valeur d'un attribut nommé du nœud actuel.
- {{DOMxRef("Element.setAttributeNode()")}}
  - : Définit la représentation du nœud de l'attribut nommé du nœud actuel.
- {{DOMxRef("Element.setAttributeNodeNS()")}}
  - : Définit la représentation du nœud de l'attribut avec le nom et l'espace de noms définis, à partir du nœud actuel.
- {{DOMxRef("Element.setAttributeNS()")}}
  - : Définit la valeur de l'attribut avec le nom et l'espace de noms définis, à partir du nœud actuel.
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Configure la capture des évènements de la souris, redirigeant tous les évènements de la souris vers cet élément.
- {{DOMxRef("Element.setHTML()")}} {{SecureContext_Inline}}
  - : Analyse et [assainit](/fr/docs/Web/API/HTML_Sanitizer_API) une chaîne de caractères HTML en un fragment de document, qui remplace ensuite le sous-arbre original de l'élément dans le DOM.
- {{DOMxRef("Element.setHTMLUnsafe()")}}
  - : Analyse une chaîne de caractères HTML en un fragment de document, sans assainissement, qui remplace ensuite le sous-arbre original de l'élément dans le DOM. La chaîne de caractères HTML peut inclure des racines d'ombre déclaratives, qui seraient analysées comme des éléments de modèle si le HTML était défini en utilisant {{DOMxRef("Element.innerHTML")}}.
- {{DOMxRef("Element.setPointerCapture()")}}
  - : Désigne un élément spécifique comme cible de capture des futurs [évènements de pointeur](/fr/docs/Web/API/Pointer_events).
- {{DOMxRef("Element.startViewTransition()")}} {{Experimental_Inline}}
  - : Démarre une nouvelle [transition de vue](/fr/docs/Web/API/View_Transition_API) dans le même document (SPA) et retourne un objet {{DOMxRef("ViewTransition")}} pour la représenter.
- {{DOMxRef("Element.toggleAttribute()")}}
  - : Bascule un attribut booléen, le supprimant s'il est présent et l'ajoutant s'il n'est pas présent, sur l'élément défini.

## Évènements

Écoutez ces évènements en utilisant `addEventListener()` ou en assignant un écouteur d'évènements à la propriété `oneventname` de cette interface.

- {{DOMxRef("Element/afterscriptexecute_event","afterscriptexecute")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Déclenché lorsqu'un script a été exécuté.
- {{DOMxRef("Element/beforeinput_event", "beforeinput")}}
  - : Déclenché lorsque la valeur d'un élément de saisie est sur le point d'être modifiée.
- {{DOMxRef("Element/beforematch_event", "beforematch")}}
  - : Déclenché sur un élément qui est dans l'état [_caché jusqu'à ce qu'il soit trouvé_](/fr/docs/Web/HTML/Reference/Global_attributes/hidden), lorsque le navigateur est sur le point de révéler son contenu parce que l'utilisateur·ice a trouvé le contenu avec la fonction «&nbsp;rechercher dans la page&nbsp;» ou avec la navigation par fragment.
- {{DOMxRef("Element/beforescriptexecute_event","beforescriptexecute")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Déclenché lorsqu'un script est sur le point d'être exécuté.
- {{DOMxRef("Element/beforexrselect_event", "beforexrselect")}} {{Experimental_Inline}}
  - : Déclenché avant que les évènements de sélection WebXR ({{DOMxRef("XRSession/select_event", "select")}}, {{DOMxRef("XRSession/selectstart_event", "selectstart")}}, {{DOMxRef("XRSession/selectend_event", "selectend")}}) ne soient dispatchés.
- {{DOMxRef("Element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
  - : Déclenché sur tout élément avec {{CSSxRef("content-visibility", "content-visibility: auto")}} lorsqu'il commence ou cesse d'être [pertinent pour l'utilisateur·ice](/fr/docs/Web/CSS/Guides/Containment/Using#pertinent_pour_lutilisatrice_et_lutilisateur) et [ignore son contenu](/fr/docs/Web/CSS/Guides/Containment/Using#ignorer_le_contenu).
- {{DOMxRef("Element/input_event","input")}}
  - : Déclenché lorsqu'une valeur d'un élément est modifiée directement par une action de l'utilisateur·ice.
- {{DOMxRef("Element/securitypolicyviolation_event","securitypolicyviolation")}}
  - : Déclenché lorsqu'une [Politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) est violée.
- {{DOMxRef("Element/wheel_event","wheel")}}
  - : Déclenché lorsque l'utilisateur·ice fait tourner un bouton de molette sur un dispositif de pointage (généralement une souris).

### Évènements d'animation

- {{DOMxRef("Element/animationcancel_event", "animationcancel")}}
  - : Déclenché lorsqu'une animation est interrompue de manière inattendue.
- {{DOMxRef("Element/animationend_event", "animationend")}}
  - : Déclenché lorsqu'une animation est terminée normalement.
- {{DOMxRef("Element/animationiteration_event", "animationiteration")}}
  - : Déclenché lorsqu'une itération d'animation est terminée.
- {{DOMxRef("Element/animationstart_event", "animationstart")}}
  - : Déclenché lorsqu'une animation commence.

### Évènements du presse-papiers

- {{DOMxRef("Element/copy_event", "copy")}}
  - : Déclenché lorsque l'utilisateur·ice initie une action de copie avec l'interface du navigateur.
- {{DOMxRef("Element/cut_event", "cut")}}
  - : Déclenché lorsque l'utilisateur·ice initie une action de coupe avec l'interface du navigateur.
- {{DOMxRef("Element/paste_event", "paste")}}
  - : Déclenché lorsque l'utilisateur·ice initie une action de collage avec l'interface du navigateur.

### Évènements de composition

- {{DOMxRef("Element/compositionend_event", "compositionend")}}
  - : Déclenché lorsqu'un système de composition textuel tel qu'un {{Glossary("input method editor", "éditeur de méthode de saisie")}} termine ou annule la session de composition courante.
- {{DOMxRef("Element/compositionstart_event", "compositionstart")}}
  - : Déclenché lorsqu'un système de composition textuel tel qu'un {{Glossary("input method editor", "éditeur de méthode de saisie")}} démarre une nouvelle session de composition.
- {{DOMxRef("Element/compositionupdate_event", "compositionupdate")}}
  - : Déclenché lorsqu'un nouveau caractère est reçu dans le contexte d'une session de composition textuelle contrôlée par un système de composition textuelle tel qu'un {{Glossary("input method editor", "éditeur de méthode de saisie")}}.

### Évènements pour la sélection

- {{DOMxRef("Element/blur_event", "blur")}}
  - : Déclenché lorsqu'un élément a perdu la sélection.
- {{DOMxRef("Element/focus_event", "focus")}}
  - : Déclenché lorsqu'un élément a reçu la sélection.
- {{DOMxRef("Element/focusin_event", "focusin")}}
  - : Déclenché lorsqu'un élément a reçu la sélection, après {{DOMxRef("Element/focus_event", "focus")}}.
- {{DOMxRef("Element/focusout_event", "focusout")}}
  - : Déclenché lorsqu'un élément a perdu la sélection, après {{DOMxRef("Element/blur_event", "blur")}}.

### Évènements relatifs au plein écran

- {{DOMxRef("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Envoyé à un objet `Element` lorsqu'il passe en mode [plein écran](/fr/docs/Web/API/Fullscreen_API/Guide) ou en sort.
- {{DOMxRef("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Envoyé à un objet `Element` si une erreur se produit lors de la tentative de passage en mode [plein écran](/fr/docs/Web/API/Fullscreen_API/Guide) ou d'en sortie.

### Évènements relatifs au clavier

- {{DOMxRef("Element/keydown_event", "keydown")}}
  - : Déclenché lorsqu'une touche est enfoncée.
- {{DOMxRef("Element/keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : Déclenché lorsqu'une touche qui produit une valeur de caractère est enfoncée.
- {{DOMxRef("Element/keyup_event", "keyup")}}
  - : Déclenché lorsqu'une touche est relâchée.

### Évènements relatifs à la souris

- {{DOMxRef("Element/auxclick_event", "auxclick")}}
  - : Déclenché lorsqu'un bouton de dispositif de pointage secondaire (par exemple, tout bouton de souris autre que le bouton gauche) est enfoncé et relâché sur un élément.
- {{DOMxRef("Element/click_event", "click")}}
  - : Déclenché lorsqu'un bouton de dispositif de pointage principal (par exemple, le bouton gauche de la souris) est enfoncé et relâché sur un élément.
- {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
  - : Déclenché lorsque l'utilisateur·ice tente d'ouvrir un menu contextuel.
- {{DOMxRef("Element/dblclick_event", "dblclick")}}
  - : Déclenché lorsqu'un bouton de dispositif de pointage (par exemple, le bouton principal de la souris) est cliqué deux fois sur un seul élément.
- {{DOMxRef("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : Survient lorsqu'un élément est activé, par exemple, par un clic de souris ou une pression sur une touche.
- {{DOMxRef("Element/DOMMouseScroll_event", "DOMMouseScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Survient lorsque la molette de la souris ou un dispositif similaire est utilisé et que la quantité de défilement accumulée dépasse 1 ligne ou 1 page depuis le dernier évènement.
- {{DOMxRef("Element/mousedown_event", "mousedown")}}
  - : Déclenché lorsqu'un bouton de dispositif de pointage est enfoncé sur un élément.
- {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
  - : Déclenché lorsqu'un dispositif de pointage (généralement une souris) est déplacé sur l'élément auquel le gestionnaire est attaché.
- {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
  - : Déclenché lorsque le pointeur d'un dispositif de pointage (généralement une souris) est déplacé hors d'un élément auquel le gestionnaire est attaché.
- {{DOMxRef("Element/mousemove_event", "mousemove")}}
  - : Déclenché lorsqu'un dispositif de pointage (généralement une souris) est déplacé tout en étant au-dessus d'un élément.
- {{DOMxRef("Element/mouseout_event", "mouseout")}}
  - : Déclenché lorsqu'un dispositif de pointage (généralement une souris) est déplacé hors de l'élément auquel le gestionnaire est attaché ou hors de l'un de ses enfants.
- {{DOMxRef("Element/mouseover_event", "mouseover")}}
  - : Déclenché lorsqu'un dispositif de pointage (généralement une souris) est déplacé sur l'élément auquel le gestionnaire est attaché ou sur l'un de ses enfants.
- {{DOMxRef("Element/mouseup_event", "mouseup")}}
  - : Déclenché lorsqu'un bouton de dispositif de pointage est relâché sur un élément.
- {{DOMxRef("Element/mousewheel_event", "mousewheel")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Déclenché lorsque la molette de la souris ou un dispositif similaire est utilisé.
- {{DOMxRef("Element/MozMousePixelScroll_event", "MozMousePixelScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Déclenché lorsque la molette de la souris ou un dispositif similaire est utilisé.
- {{DOMxRef("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{Non-standard_Inline}}
  - : Déclenché chaque fois que la quantité de pression change sur l'écran tactile du pavé tactile.
- {{DOMxRef("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{Non-standard_Inline}}
  - : Déclenché après l'évènement `mousedown` dès que la pression appliquée est suffisante pour être considérée comme un «&nbsp;clic forcé&nbsp;».
- {{DOMxRef("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{Non-standard_Inline}}
  - : Déclenché avant l'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}.
- {{DOMxRef("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{Non-standard_Inline}}
  - : Déclenché après l'évènement {{DOMxRef("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} dès que la pression a été réduite suffisamment pour mettre fin au «&nbsp;clic forcé&nbsp;».

### Évènements relatifs aux pointeurs

- {{DOMxRef("Element/gotpointercapture_event", "gotpointercapture")}}
  - : Déclenché lorsqu'un élément capture un pointeur en utilisant {{DOMxRef("Element/setPointerCapture", "setPointerCapture()")}}.
- {{DOMxRef("Element/lostpointercapture_event", "lostpointercapture")}}
  - : Déclenché lorsqu'un [pointeur capturé](/fr/docs/Web/API/Pointer_events#pointer_capture) est libéré.
- {{DOMxRef("Element/pointercancel_event", "pointercancel")}}
  - : Déclenché lorsqu'un évènement de pointeur est annulé.
- {{DOMxRef("Element/pointerdown_event", "pointerdown")}}
  - : Déclenché lorsqu'un pointeur devient actif.
- {{DOMxRef("Element/pointerenter_event", "pointerenter")}}
  - : Déclenché lorsqu'un pointeur est déplacé dans les limites de test de collision d'un élément ou de l'un de ses descendants.
- {{DOMxRef("Element/pointerleave_event", "pointerleave")}}
  - : Déclenché lorsqu'un pointeur est déplacé en dehors des limites de test de collision d'un élément.
- {{DOMxRef("Element/pointermove_event", "pointermove")}}
  - : Déclenché lorsqu'un pointeur change de coordonnées.
- {{DOMxRef("Element/pointerout_event", "pointerout")}}
  - : Déclencé lorsqu'un ponteur est déplacé en dehors des limites de _test de collision_ d'un élément (entre autres raisons).
- {{DOMxRef("Element/pointerover_event", "pointerover")}}
  - : Déclenché lorsqu'un pointeur est déplacé dans les limites de test de collision d'un élément.
- {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}}
  - : Déclenché lorsqu'un pointeur change de propriétés qui ne déclenchent pas les évènements {{DOMxRef("Element/pointerdown_event", "pointerdown")}} ou {{DOMxRef("Element/pointerup_event", "pointerup")}}.
- {{DOMxRef("Element/pointerup_event", "pointerup")}}
  - : Déclenché lorsqu'un pointeur n'est plus actif.

### Évènements relatifs au défilement

- {{DOMxRef("Element/scroll_event", "scroll")}}
  - : Déclenché lorsque la vue du document ou un élément a été défilé.
- {{DOMxRef("Element/scrollend_event", "scrollend")}}
  - : Déclenché lorsque la vue du document a terminé le défilement.
- {{DOMxRef("Element/scrollsnapchange_event", "scrollsnapchange")}} {{Experimental_Inline}}
  - : Déclenché sur le conteneur de défilement à la fin d'une opération de défilement lorsqu'une nouvelle cible d'accroche de défilement a été sélectionnée.
- {{DOMxRef("Element/scrollsnapchanging_event", "scrollsnapchanging")}} {{Experimental_Inline}}
  - : Déclenché sur le conteneur de défilement lorsque le navigateur détermine qu'une nouvelle cible d'accroche de défilement est en attente, c'est-à-dire qu'elle est sélectionnée lorsque le geste de défilement actuel se termine.

### Évènements tactiles

- {{DOMxRef("Element/gesturechange_event","gesturechange")}} {{Non-standard_Inline}}
  - : Déclenché lorsque les doigts se déplacent pendant une action tactile.
- {{DOMxRef("Element/gestureend_event","gestureend")}} {{Non-standard_Inline}}
  - : Déclenché lorsqu'il n'y a plus plusieurs doigts en contact avec la surface tactile, mettant ainsi fin au geste.
- {{DOMxRef("Element/gesturestart_event","gesturestart")}} {{Non-standard_Inline}}
  - : Déclenché lorsque plusieurs doigts entrent en contact avec la surface tactile, marquant ainsi le début d'un nouveau geste.
- {{DOMxRef("Element/touchcancel_event", "touchcancel")}}
  - : Déclenché lorsqu'un ou plusieurs points de contact ont été interrompus d'une manière spécifique à l'implémentation (par exemple, si un nombre trop élevé de points de contact est créé).
- {{DOMxRef("Element/touchend_event", "touchend")}}
  - : Déclenché lorsqu'un ou plusieurs points de contact sont retirés de la surface tactile.
- {{DOMxRef("Element/touchmove_event", "touchmove")}}
  - : Déclenché lorsqu'un ou plusieurs points de contact sont déplacés le long de la surface tactile.
- {{DOMxRef("Element/touchstart_event", "touchstart")}}
  - : Déclenché lorsqu'un ou plusieurs points de contact sont placés sur la surface tactile.

### Évènements relatifs aux transitions

- {{DOMxRef("Element/transitioncancel_event", "transitioncancel")}}
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/Guides/Transitions) a été annulée.
- {{DOMxRef("Element/transitionend_event", "transitionend")}}
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/Guides/Transitions) a terminé son exécution.
- {{DOMxRef("Element/transitionrun_event", "transitionrun")}}
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/Guides/Transitions) est créée (c'est-à-dire lorsqu'elle est ajoutée à un ensemble de transitions en cours), mais pas nécessairement démarrée.
- {{DOMxRef("Element/transitionstart_event", "transitionstart")}}
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/Guides/Transitions) a commencé à se dérouler.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
