---
title: Element
slug: Web/API/Element
translation_of: Web/API/Element
browser-compat: api.Element
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>Element</code></strong> est la classe de base la plus générique dont héritent tous les objets qui représentent des éléments d'un <a href="/fr/docs/Web/API/Document"><code>Document</code></a>. Elle contient uniquement des méthodes et propriétés communes à l'ensemble des éléments. Des classes plus spécifiques héritent d'<code>Element</code>. Ainsi, l'interface <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a> correspond à l'interface de base pour les éléments HTML tandis que l'interface <a href="/fr/docs/Web/API/SVGElement"><code>SVGElement</code></a> représente la base pour les éléments SVG. La plupart des fonctionnalités sont définies dans les classes situées plus loin dans la hiérarchie.</p>

<h2 id="properties">Propriétés</h2>

<p><em><code>Element</code> hérite des propriétés de son interface parente : <a href="/fr/docs/Web/API/Node"><code>Node</code></a> (et donc indirectement des propriétés du parent de celle-ci : <a href="/fr/docs/Web/API/EventTarget"><code>EventTarget</code></a>).</em></p>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/assignedSlot"><code>Element.assignedSlot</code></a>{{readonlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/HTMLSlotElement"><code>HTMLSlotElement</code></a> représentant l'emplacement (<a href="/fr/docs/Web/HTML/Element/slot"><code>&lt;slot&gt;</code></a>) dans lequel le nœud est inséré.</dd>
  <dt><a href="/fr/docs/Web/API/Element/attributes"><code>Element.attributes</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/NamedNodeMap"><code>NamedNodeMap</code></a> contenant les attributs affectés de l'élément HTML correspondant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/childElementCount"><code>Element.childElementCount</code></a> {{readonlyInline}}</dt>
  <dd>Renvoie le nombre d'éléments enfants de cet élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/children"><code>Element.children</code></a> {{readonlyInline}}</dt>
  <dd>Renvoie les éléments enfants de cet élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/classList"><code>Element.classList</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/DOMTokenList"><code>DOMTokenList</code></a> contenant la liste des attributs de classe.</dd>
  <dt><a href="/fr/docs/Web/API/Element/className"><code>Element.className</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui représente la classe de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/clientHeight"><code>Element.clientHeight</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) représentant la hauteur intérieure de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/clientLeft"><code>Element.clientLeft</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) représentant la largeur de la bordure gauche de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/clientTop"><code>Element.clientTop</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) représentant la largeur de la bordure haute de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/clientWidth"><code>Element.clientWidth</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) représentant la largeur intérieure de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/firstElementChild"><code>Element.firstElementChild</code></a> {{readonlyInline}}</dt>
  <dd>Renvoie le premier élément enfant de cet élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/id"><code>Element.id</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui représente l'identifiant de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/innerHTML"><code>Element.innerHTML</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui représente le balisage du contenu de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/lastElementChild"><code>Element.lastElementChild</code></a> {{readonlyInline}}</dt>
  <dd>Renvoie le dernier élément enfant de cet élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/localName"><code>Element.localName</code></a> {{readOnlyInline}}</dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui représente la partie locale pour le nom qualifié de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/namespaceURI"><code>Element.namespaceURI</code></a> {{readonlyInline}}</dt>
  <dd>L'URI pour l'espace de noms de l'élément ou <code>null</code> s'il n'y en a pas.
  <div class="note">
  <p><strong>Note :</strong> Pour Firefox 3.5 et les versions antérieures, les éléments HTML ne sont pas situés dans un espace de noms. Dans les versions ultérieures, les éléments HTML s'inscrivent dans l'espace de noms <code><a href="https://www.w3.org/1999/xhtml">http://www.w3.org/1999/xhtml</a></code> tant pour les arbres HTML que XML.</p>
  </div>
  </dd>
  <dt><a href="/fr/docs/Web/API/Element/nextElementSibling"><code>Element.nextElementSibling</code></a> {{readOnlyInline}}</dt>
  <dd>Un objet <code>Element</code> qui représente l'élément qui suit immédiatement l'élément courant dans l'arbre ou <code>null</code> si l'élément courant n'a pas de voisin.</dd>
  <dt><a href="/fr/docs/Web/API/Element/outerHTML"><code>Element.outerHTML</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui représente le balisage de l'élément (incluant son contenu). Lorsque cette propriété est utilisée en modification, cela remplace l'élément avec les noeuds construits à partir de l'analyse de la chaîne de caractères fournie.</dd>
  <dt><a href="/fr/docs/Web/API/Element/part"><code>Element.part</code></a></dt>
  <dd>Représente les identifiants des parties de l'élément (c'est-à-dire ceux définis avec l'attribut <code>part</code>) sous la forme d'un objet <a href="/fr/docs/Web/API/DOMTokenList"><code>DOMTokenList</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/prefix"><code>Element.prefix</code></a> {{readOnlyInline}}</dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui représente le préfixe de l'espace de nom pour l'élément ou <code>null</code> si aucun préfixe n'est défini.</dd>
  <dt><a href="/fr/docs/Web/API/Element/previousElementSibling"><code>Element.previousElementSibling</code></a> {{readOnlyInline}}</dt>
  <dd>Un objet <code>Element</code> qui représente l'élément qui précède immédiatement l'élément courant dans l'arbre ou <code>null</code> si l'élément courant n'a pas de voisin.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollHeight"><code>Element.scrollHeight</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) représentant la hauteur de la vue de défilement pour l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollLeft"><code>Element.scrollLeft</code></a></dt>
  <dd>Un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) qui représente le décalage à gauche de l'élément lié au défilement.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollLeftMax"><code>Element.scrollLeftMax</code></a> {{Non-standard_Inline}} {{readOnlyInline}}</dt>
  <dd>Renvoie un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) représentant le décalage à gauche maximal pour l'élément lors du défilement.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollTop"><code>Element.scrollTop</code></a></dt>
  <dd>Un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) qui représente le nombre de pixels dont on a fait défiler verticalement le haut de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollTopMax"><code>Element.scrollTopMax</code></a> {{Non-standard_Inline}} {{readOnlyInline}}</dt>
  <dd>Renvoie un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) représentant le décalage maximal depuis le haut de l'élément lors du défilement.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollWidth"><code>Element.scrollWidth</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie un nombre (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>) représentant la largeur de la vue de défilement pour l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/shadowRoot"><code>Element.shadowRoot</code></a>{{readOnlyInline}}</dt>
  <dd>Renvoie la racine sombre ouverte (<i lang="en">open shadow root</i>) hébergée par l'élément ou <code>null</code> si aucune racine sombre ouverte n'est présente.</dd>
  <dt><a href="/fr/docs/Web/API/Element/openOrClosedShadowRoot"><code>Element.openOrClosedShadowRoot</code></a> {{Non-standard_Inline}}{{readOnlyInline}}</dt>
  <dd>Renvoie la racine sombre hébergée par l'élément (qu'elle soit ouverte ou fermée). <strong>Uniquement disponible pour <a href="/fr/docs/Mozilla/Add-ons/WebExtensions">les WebExtensions</a>.</strong></dd>
  <dt><a href="/fr/docs/Web/API/Element/slot"><code>Element.slot</code></a> {{Experimental_Inline}}</dt>
  <dd>Renvoie le nom de l'emplacement du DOM sombre dans lequel l'élément est inséré.</dd>
  <dt><a href="/fr/docs/Web/API/Element/tagName"><code>Element.tagName</code></a> {{readOnlyInline}}</dt>
  <dd>Renvoie une chaîne de caractères (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a>) qui est le nom de la balise pour l'élément courant.</dd>
</dl>

<h3 id="properties_included_from_aria">Propriétés provenant d'ARIA</h3>

<p><em>L'interface <code>Element</code> inclut les propriétés suivantes, définies sur le <i lang="en">mixin</i> <code>ARIAMixin</code>.</em></p>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/ariaAtomic"><code>Element.ariaAtomic</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-atomic</code> qui indique si des technologies d'assistance présenteront tout ou partie de la région modifiée selon les notifications définies par l'attribut <code>aria-relevant</code>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaAutoComplete"><code>Element.ariaAutoComplete</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-autocomplete</code> qui indique si la saisie de texte peut déclencher l'affichage d'une ou plusieurs prédictions pour la valeur saisie par l'utilisateur à destination d'une liste de choix, d'une boîte de recherche ou d'une zone de texte. Elle indique également la façon dont les éventuelles prédictions seraient présentées.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaBusy"><code>Element.ariaBusy</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-busy</code> qui indique d'un élément est en train d'être modifié. Les technologies d'assistance peuvent alors faire le choix d'attendre la fin de la modification avant d'exposer le contenu à l'utilisateur.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaChecked"><code>Element.ariaChecked</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-checked</code> indiquant l'état coché (ou non) des cases à cocher, des boutons radio ou des autres éléments d'interface graphique qui peuvent être cochés.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaColCount"><code>Element.ariaColCount</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-colcount</code> indiquant le nombre de colonnes d'un tableau, d'une grille ou d'une grille arborescente.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaColIndex"><code>Element.ariaColIndex</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-colindex</code> qui définit l'indice de la colonne d'un élément ou sa position par rapport au nombre total de colonnes d'un tableau, d'une grille ou d'une grille arborescente.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaColIndexText"><code>Element.ariaColIndexText</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-colindextext</code> qui définit texte alternatif à <code>aria-colindex</code> qui soit compréhensible par un humain.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaColSpan"><code>Element.ariaColSpan</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-colspan</code> qui définit le nombre de colonnes sur lesquelles s'étend une cellule dans un tableau, une grille ou une grille arborescente.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaCurrent"><code>Element.ariaCurrent</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-current</code> qui indique l'élément représente l'objet courant dans un conteneur ou un ensemble d'éléments.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaDescription"><code>Element.ariaDescription</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-description</code> qui définit la chaîne de caractères pour décrire ou annoter l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaDisabled"><code>Element.ariaDisabled</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-disabled</code> qui indique que l'élément est perceptible mais désactivé et qu'il ne peut être édité ou manipulé.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaExpanded"><code>Element.ariaExpanded</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-expanded</code> qui indique si un élément de groupement contrôlé par l'élément courant est développé ou replié.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaHasPopup"><code>Element.ariaHasPopup</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-haspopup</code> qui indique la disponibilité et le type d'élément interactif visuel comme un menu ou une boîte de dialogue pouvant être généré par l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaHidden"><code>Element.ariaHidden</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-hidden</code> qui indique si l'élément est exposé à une API d'accessibilité.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaKeyShortcuts"><code>Element.ariaKeyShortcuts</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-keyshortcuts</code> qui indique les raccourcis clavier implémentés spécifiquement pour activer ou fournir le focus à un élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaLabel"><code>Element.ariaLabel</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-label</code> qui définit une chaîne de caractères étant un libellé pour l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaLevel"><code>Element.ariaLevel</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-level</code> qui définit le niveau hiérarchique de l'élément au sein d'une structure.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaLive"><code>Element.ariaLive</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-live</code> qui indique que l'élément sera mis à jour et qui décrit les types de mises à jour qui peuvent être attendues par les agents utilisateur, les outils d'assistance et l'utilisateur.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaModal"><code>Element.ariaModal</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-modal</code> qui indique si un élément est modal lorsqu'il est affiché.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaMultiline"><code>Element.ariaMultiline</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-multiline</code> qui indique si une zone de texte accepte une saisie sur plusieurs lignes ou sur une seule ligne.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaMultiSelectable"><code>Element.ariaMultiSelectable</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-multiselectable</code> qui indique que la personne peut choisir plus d'un élément parmi les éléments descendants qui peuvent être sélectionnés.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaOrientation"><code>Element.ariaOrientation</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-orientation</code> qui indique si l'orientation de l'élément est horizontale, verticale ou inconnue voire ambigüe.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaPlaceholder"><code>Element.ariaPlaceholder</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-placeholder</code> qui définit une indication courte destinée à aider l'utilisateur à saisir une valeur lorsque le contrôle ne possède pas de valeur.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaPosInSet"><code>Element.ariaPosInSet</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-posinset</code> qui définit l'index ou la position de l'élément courant dans l'ensemble ou l'arbre d'éléments.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaPressed"><code>Element.ariaPressed</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-pressed</code> qui indique l'état actif/pressé des boutons.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaReadOnly"><code>Element.ariaReadOnly</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-readonly</code> qui indique que l'élément ne peut pas être édité mais qu'il peut être utilisé sinon.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaRelevant"><code>Element.ariaRelevant</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-relevant</code> qui indique les notifications qui seront déclenchées par l'agent utilisateur lorsque l'arbre d'accessibilité d'une région interactive sera modifié. Cette propriété est utilisée afin de décrire quels changements d'une région <code>aria-live</code> sont pertinents et devraient être annoncés.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaRequired"><code>Element.ariaRequired</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-required</code> qui indique que la saisie d'une utilisatrice ou d'un utilisateur est requise sur l'élément avant qu'un formulaire puisse être envoyé.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaRoleDescription"><code>Element.ariaRoleDescription</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-roledescription</code> qui définit une description compréhensible par un humain, adaptée par l'autrice ou l'auteur du document pour le rôle de l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaRowCount"><code>Element.ariaRowCount</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-rowcount</code> qui définit le nombre total de lignes dans un tableau, une grille ou une grille arborescente.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaRowIndex"><code>Element.ariaRowIndex</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-rowindex</code> qui définit l'index ou la position de la ligne de l'élément par rapport au nombre total de lignes dans le tableau, la grille ou la grille arborescente.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaRowIndexText"><code>Element.ariaRowIndexText</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-rowindextext</code> qui définit un libellé alternatif à <code>aria-rowindex</code>, compréhensible par un humain.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaRowSpan"><code>Element.ariaRowSpan</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-rowspan</code> qui définit le nombre de lignes sur lesquelles s'étend une cellule dans un tableau, une grille ou une grille arborescente.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaSelected"><code>Element.ariaSelected</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-selected</code> qui indique l'état de sélection pour les éléments qui peuvent être sélectionnés.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaSetSize"><code>Element.ariaSetSize</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-setsize</code> qui définit le nombre d'objets dans l'ensemble d'éléments d'une liste ou d'un arbre.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaSort"><code>Element.ariaSort</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-sort</code> qui indique si les objets d'un tableau ou d'une grille sont triés par ordre croissant ou décroissant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaValueMax"><code>Element.ariaValueMax</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-valueMax</code> qui définit la valeur maximale autorisée pour un élément d'interface utilisateur décrivant un intervalle.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaValueMin"><code>Element.ariaValueMin</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-valueMin</code> qui définit la valeur minimale autorisée pour un élément d'interface utilisateur décrivant un intervalle.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaValueNow"><code>Element.ariaValueNow</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-valueNow</code> qui définit la valeur courante d'un élément d'interface utilisateur décrivant un intervalle.</dd>
  <dt><a href="/fr/docs/Web/API/Element/ariaValueText"><code>Element.ariaValueText</code></a></dt>
  <dd>Une chaîne de caractères <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> qui reflète l'attribut <code>aria-valuetext</code> qui définit une alternative textuelle à <code>aria-valuenow</code> compréhensible par un humain.</dd>
</dl>

<h3 id="handlers">Gestionnaires d'évènements</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/onfullscreenchange"><code>Element.onfullscreenchange</code></a></dt>
  <dd>Un gestionnaire d'évènement pour l'évènement <a href="/fr/docs/Web/API/Document/fullscreenchange_event"><code>fullscreenchange</code></a> qui est envoyé lorsque l'élément passe en mode plein écran ou sort de celui-ci. Cet évènement peut être utilisé pour surveiller les transitions entre les deux modes mais aussi pour surveiller les modifications inattendues comme lorsque l'application s'exécute en arrière-plan.</dd>
  <dt><a href="/fr/docs/Web/API/Element/onfullscreenerror"><code>Element.onfullscreenerror</code></a></dt>
  <dd>Un gestionnaire d'évènement pour <a href="/fr/docs/Web/API/Document/fullscreenerror_event"><code>fullscreenerror</code></a> qui est envoyé lorsqu'une erreur se produit lors du passage au mode plein écran.</dd>
</dl>

<h2 id="methods">Méthodes</h2>

<p><em><code>Element</code> hérite des méthodes fournit par la classe parente <a href="/fr/docs/Web/API/Node"><code>Node</code></a> et de sa classe parente avant elle : <a href="/fr/docs/Web/API/EventTarget"><code>EventTarget</code></a>.</em></p>

<dl>
  <dt><a href="/fr/docs/Web/API/EventTarget/addEventListener"><code>EventTarget.addEventListener()</code></a></dt>
  <dd>Enregistre un gestionnaire d'évènement sur l'élément pour un type d'évènement donné.</dd>
  <dt><a href="/fr/docs/Web/API/Element/after"><code>Element.after()</code></a></dt>
  <dd>Insère un ensemble d'objets <a href="/fr/docs/Web/API/Node"><code>Node</code></a> ou <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> dans la liste des enfants du parent de l'élément courant, juste après ce dernier.</dd>
  <dt><a href="/fr/docs/Web/API/Element/attachShadow"><code>Element.attachShadow()</code></a></dt>
  <dd>Attache un arbre du DOM sombre à l'élément indiqué puis renvoie une référence à sa racine <a href="/fr/docs/Web/API/ShadowRoot"><code>ShadowRoot</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/animate"><code>Element.animate()</code></a> {{Experimental_Inline}}</dt>
  <dd>Une méthode synthétique pour créer et exécuter une animation sur un élément. Renvoie l'instance de l'objet <code>Animation</code> créé.</dd>
  <dt><a href="/fr/docs/Web/API/Element/append"><code>Element.append()</code></a></dt>
  <dd>Insère un ensemble d'objet <a href="/fr/docs/Web/API/Node"><code>Node</code></a> ou <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> après le dernier enfant de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/before"><code>Element.before()</code></a></dt>
  <dd>Insère un ensemble d'objet <a href="/fr/docs/Web/API/Node"><code>Node</code></a> ou <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> dans la liste des enfants du parent de l'élément courant, juste avant ce dernier.</dd>
  <dt><a href="/fr/docs/Web/API/Element/closest"><code>Element.closest()</code></a></dt>
  <dd>Renvoie l'élément (<code>Element</code>) qui est le plus proche ancêtre de l'élément courant (ou l'élément courant lui-même) qui correspond au sélecteur passé en paramètre.</dd>
  <dt><a href="/fr/docs/Web/API/Element/createShadowRoot"><code>Element.createShadowRoot()</code></a> {{Non-standard_Inline}} {{Deprecated_Inline}}</dt>
  <dd>Crée un <a href="/fr/docs/Web/Web_Components/Using_shadow_DOM">DOM sombre</a> sur l'élément, le transformant ainsi en hôte sombre. Renvoie un objet <a href="/fr/docs/Web/API/ShadowRoot"><code>ShadowRoot</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/computedStyleMap"><code>Element.computedStyleMap()</code></a> {{Experimental_Inline}}</dt>
  <dd>Renvoie une interface <a href="/fr/docs/Web/API/StylePropertyMapReadOnly"><code>StylePropertyMapReadOnly</code></a> qui fournit une représentation en lecture seule d'un bloc de déclaration CSS alternatif à <a href="/fr/docs/Web/API/CSSStyleDeclaration"><code>CSSStyleDeclaration</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/EventTarget/dispatchEvent"><code>EventTarget.dispatchEvent()</code></a></dt>
  <dd>Diffuse un évènement sur ce nœud dans le DOM et renvoie un booléen qui indique si aucun gestionnaire n'a annulé l'évènement.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getAnimations"><code>Element.getAnimations()</code></a> {{Experimental_Inline}}</dt>
  <dd>Renvoie un tableau des objets <code>Animation</code> actuellement actifs sur l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getAttribute"><code>Element.getAttribute()</code></a></dt>
  <dd>Récupère la valeur de l'attribut nommé  pour le nœud courant et le renvoie comme un <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object">objet</a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getAttributeNames"><code>Element.getAttributeNames()</code></a></dt>
  <dd>Renvoie un tableau de noms d'attribut pour l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getAttributeNode"><code>Element.getAttributeNode()</code></a></dt>
  <dd>Récupère la représentation du nœud pour l'attrtibut nommé du nœud courant et le renvoie comme un objet <a href="/fr/docs/Web/API/Attr"><code>Attr</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getAttributeNodeNS"><code>Element.getAttributeNodeNS()</code></a></dt>
  <dd>Depuis le nœud courant, récupère la représentation du nœud pour l'attribut avec le nom et l'espace de noms indiqués et renvoie la valeur obtenue sous la forme d'un objet <a href="/fr/docs/Web/API/Attr"><code>Attr</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getAttributeNS"><code>Element.getAttributeNS()</code></a></dt>
  <dd>Depuis le nœud courant, récupère la valeur de l'attribut avec le nom et l'espace de noms indiqués et la renvoie sous la forme d'un <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object">objet</a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getBoundingClientRect"><code>Element.getBoundingClientRect()</code></a></dt>
  <dd>Renvoie la taille d'un élément et sa position relative dans la zone d'affichage (<i lang="en">viewport</i>).</dd>
  <dt><a href="/fr/docs/Web/API/Element/getBoxQuads"><code>Element.getBoxQuads()</code></a> {{experimental_inline}}</dt>
  <dd>Renvoie une liste d'objets <a href="/fr/docs/Web/API/DOMQuad"><code>DOMQuad</code></a> qui représentent les fragments CSS pour le nœud.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getClientRects"><code>Element.getClientRects()</code></a></dt>
  <dd>Renvoie une collection de rectangles qui indique les rectangles englobants pour chaque ligne de texte d'un client.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getElementsByClassName"><code>Element.getElementsByClassName()</code></a></dt>
  <dd>Renvoie une collection dynamique <a href="/fr/docs/Web/API/HTMLCollection"><code>HTMLCollection</code></a> qui contient tous les descendants de l'élément courant et qui possèdent la liste de classes fournie en paramètre.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getElementsByTagName"><code>Element.getElementsByTagName()</code></a></dt>
  <dd>Renvoie une collection dynamique <a href="/fr/docs/Web/API/HTMLCollection"><code>HTMLCollection</code></a> qui contient tous les descendants de l'élément courant avec un nom de balise donné.</dd>
  <dt><a href="/fr/docs/Web/API/Element/getElementsByTagNameNS"><code>Element.getElementsByTagNameNS()</code></a></dt>
  <dd>Renvoie une collection dynamique <a href="/fr/docs/Web/API/HTMLCollection"><code>HTMLCollection</code></a> qui contient tous les descendants de l'élément courant qui ont un nom de balise et un espace de noms donnés.</dd>
  <dt><a href="/fr/docs/Web/API/Element/hasAttribute"><code>Element.hasAttribute()</code></a></dt>
  <dd>Renvoie un booléen indiquant si l'élément courant possède l'attribut donné.</dd>
  <dt><a href="/fr/docs/Web/API/Element/hasAttributeNS"><code>Element.hasAttributeNS()</code></a></dt>
  <dd>Renvoie un booléen indiquant si l'élément courant possède l'attribut donné pour l'espace de noms donné.</dd>
  <dt><a href="/fr/docs/Web/API/Element/hasAttributes"><code>Element.hasAttributes()</code></a></dt>
  <dd>Renvoie un booléen qui indique si l'élément courant a un ou plusieurs attributs HTML.</dd>
  <dt><a href="/fr/docs/Web/API/Element/hasPointerCapture"><code>Element.hasPointerCapture()</code></a></dt>
  <dd>Indique si l'élément a la capture du pointeur pour le pointeur identifié par l'identifiant passé en argument.</dd>
  <dt><a href="/fr/docs/Web/API/Element/insertAdjacentElement"><code>Element.insertAdjacentElement()</code></a></dt>
  <dd>Insère un nœud d'élément à la position relative indiquée par rapport à l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/insertAdjacentHTML"><code>Element.insertAdjacentHTML()</code></a></dt>
  <dd>Analyse le texte comme HTML ou XML puis insère les nœuds résultatns dans l'arbre à la position indiquée.</dd>
  <dt><a href="/fr/docs/Web/API/Element/insertAdjacentText"><code>Element.insertAdjacentText()</code></a></dt>
  <dd>Insère un nœud textuel à la position relative indiquée, par rapport à l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/matches"><code>Element.matches()</code></a></dt>
  <dd>Renvoie un booléen qui indique si l'élément serait ciblé par la chaîne de caractères passée en argument qui décrit un sélecteur.</dd>
  <dt><a href="/fr/docs/Web/API/Element/prepend"><code>Element.prepend()</code></a></dt>
  <dd>Insère un ensemble d'objets <a href="/fr/docs/Web/API/Node"><code>Node</code></a> ou <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a> avant le premier enfant de l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/querySelector"><code>Element.querySelector()</code></a></dt>
  <dd>Renvoie le premier objet <a href="/fr/docs/Web/API/Node"><code>Node</code></a> qui correspond au sélecteur donné, relatif à l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/querySelectorAll"><code>Element.querySelectorAll()</code></a></dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/NodeList"><code>NodeList</code></a> contenant les nœuds pour lesquels le sélecteur, passé en argument, relatif à l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/releasePointerCapture"><code>Element.releasePointerCapture()</code></a></dt>
  <dd>Libère (arrête) la capture du pointeur précédemment activée pour un évènement de pointeur spécifique.</dd>
  <dt><a href="/fr/docs/Web/API/Element/remove"><code>Element.remove()</code></a></dt>
  <dd>Retire l'élément de la liste des éléments enfants de son parent.</dd>
  <dt><a href="/fr/docs/Web/API/Element/removeAttribute"><code>Element.removeAttribute()</code></a></dt>
  <dd>Retire l'attribut nommé du nœud courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/removeAttributeNode"><code>Element.removeAttributeNode()</code></a></dt>
  <dd>Retire la représentation nodale de l'attribut nommé pour le nœud courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/removeAttributeNS"><code>Element.removeAttributeNS()</code></a></dt>
  <dd>Sur le nœud courant, retire l'attribut avec le nom et l'espace de noms indiqués.</dd>
  <dt><a href="/fr/docs/Web/API/EventTarget/removeEventListener"><code>EventTarget.removeEventListener()</code></a></dt>
  <dd>Retire un gestionnaire d'évènement de l'élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/replaceChildren"><code>Element.replaceChildren()</code></a></dt>
  <dd>Remplace l'enfant existant d'un nœud avec un nouvel ensemble d'enfants.</dd>
  <dt><a href="/fr/docs/Web/API/Element/replaceWith"><code>Element.replaceWith()</code></a></dt>
  <dd>Remplace l'élément dans la liste des enfants de son parent par un ensemble d'objets <a href="/fr/docs/Web/API/Node"><code>Node</code></a> ou <a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/requestFullScreen"><code>Element.requestFullscreen()</code></a> {{Experimental_Inline}}</dt>
  <dd>Demande au navigateur, de façon asynchrone, d'afficher l'élément en plein écran.</dd>
  <dt><a href="/fr/docs/Web/API/Element/requestPointerLock"><code>Element.requestPointerLock()</code></a> {{Experimental_Inline}}</dt>
  <dd>Demande au navigateur, de façon asynchrone, de bloquer le pointeur sur l'élément indiqué.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scroll"><code>Element.scroll()</code></a></dt>
  <dd>Défile jusqu'à un ensemble de coordonnées données à l'intérieur de l'élément courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollBy"><code>Element.scrollBy()</code></a></dt>
  <dd>Défile un élément de la quantité indiquée.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollIntoView"><code>Element.scrollIntoView()</code></a> {{Experimental_Inline}}</dt>
  <dd>Défile la page jusqu'à ce que l'élément apparaisse dans la vue.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scrollTo"><code>Element.scrollTo()</code></a></dt>
  <dd>Défile jusqu'à un ensemble de coordonnées particulier à l'intérieur de l'élément donné.</dd>
  <dt><a href="/fr/docs/Web/API/Element/setAttribute"><code>Element.setAttribute()</code></a></dt>
  <dd>Définit la valeur d'un attribut nommé pour le nœud courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/setAttributeNode"><code>Element.setAttributeNode()</code></a></dt>
  <dd>Définit la représentation nodale d'un attribut nommé pour le nœud courant.</dd>
  <dt><a href="/fr/docs/Web/API/Element/setAttributeNodeNS"><code>Element.setAttributeNodeNS()</code></a></dt>
  <dd>Pour le nœud courant, définit la représentation nodale d'un attribut avec le nom et l'espace de noms indiqués.</dd>
  <dt><a href="/fr/docs/Web/API/Element/setAttributeNS"><code>Element.setAttributeNS()</code></a></dt>
  <dd>Pour le nœud courant, définit la valeur de l'attribut avec le nom et l'espace de noms indiqués.</dd>
  <dt><a href="/fr/docs/Web/API/Element/setCapture"><code>Element.setCapture()</code></a> {{Non-standard_Inline}}{{Deprecated_Inline}}</dt>
  <dd>Initialise la capture des évènements liés à la souris, redirigeant ainsi tous les évènements de la souris sur cet élément.</dd>
  <dt><a href="/fr/docs/Web/API/Element/setPointerCapture"><code>Element.setPointerCapture()</code></a></dt>
  <dd>Désigne un élément spécifique comme future cible pour la capture des <a href="/fr/docs/Web/API/Pointer_events">évènements de pointeur</a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/toggleAttribute"><code>Element.toggleAttribute()</code></a></dt>
  <dd>Active/désactive un attribut booléen sur l'élément courant : s'il est présent, cela le retire et s'il est absent, cela l'ajoute.</dd>
</dl>

<h2 id="events">Évènements</h2>

<p>On peut écouter ces évènements en utilisant la méthode <code>addEventListener()</code> ou en affectant un gestionnaire d'évènement à la propriété <code>on<em>nomevenement</em></code> de cette interface.</p>

<dl>
  <dt><a href="/fr/docs/Web/API/HTMLDialogElement/cancel_event"><code>cancel</code></a></dt>
  <dd>Déclenché sur un élément <a href="/fr/docs/Web/HTML/Element/dialog"><code>&lt;dialog&gt;</code></a> lorsque la personne indique au navigateur le souhait de fermer la boîte de dialogue courante. Un navigateur pourra par exemple déclencher cet évènement lors d'un appui sur la touche <kbd>Echap</kbd> ou lors d'un clic sur le bouton « Fermer cette boîte de dialogue » fourni par le navigateur. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/oncancel"><code>oncancel</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/error_event"><code>error</code></a></dt>
  <dd>Déclenché lors de l'échec du chargement d'une ressource ou lorsque celle-ci ne peut être utilisée. Cet évènement sera par exemple déclenché lors d'une erreur d'exécution d'un script ou lorsqu'une image ne peut être trouvée ou est invalide. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onerror"><code>onerror</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/scroll_event"><code>scroll</code></a></dt>
  <dd>Déclenché lors du défilement de la vue du document ou d'un élément. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onscroll"><code>onscroll</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/select_event"><code>select</code></a></dt>
  <dd>Déclenché lors de la sélection de texte. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onselect"><code>onselect</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/show_event"><code>show</code></a></dt>
  <dd>Déclenché lorsqu'un évènement <a href="/fr/docs/Web/API/Element/contextmenu_event"><code>contextmenu</code></a> a été déclenché ou a bouillonné sur un élément qui dispose de l'attribut <code><a href="/fr/docs/Web/HTML/Global_attributes/contextmenu">contextmenu</a></code> attribute. {{deprecated_inline}} Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onshow"><code>onshow</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/wheel_event"><code>wheel</code></a></dt>
  <dd>Déclenché lorsque l'utilisateur fait tourner la molette d'un appareil de pointage (généralement une souris). Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onwheel"><code>onwheel</code></a>.</dd>
</dl>

<h3 id="clipboard_events">Évènements du presse-papiers</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/copy_event"><code>copy</code></a></dt>
  <dd>Déclenché lorsque l'utilisateur initie une action de copie via l'interface du navigateur. Également disponible via la propriété <a href="/fr/docs/Web/API/HTMLElement/oncopy"><code>oncopy</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/cut_event"><code>cut</code></a></dt>
  <dd>Déclenché lorsque l'utilisateur initie une action de coupe via l'interface du navigateur. Également disponible via la propriété <a href="/fr/docs/Web/API/HTMLElement/oncut"><code>oncut</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/paste_event"><code>paste</code></a></dt>
  <dd>Déclenché lorsque l'utilisateur initie une action pour coller via l'interface du navigateur. Également disponible via la propriété <a href="/fr/docs/Web/API/HTMLElement/onpaste"><code>onpaste</code></a>.</dd>
</dl>

<h3 id="composition_events">Évènements de composition</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/compositionend_event"><code>compositionend</code></a></dt>
  <dd>Déclenché lorsqu'un système de composition textuel tel qu'un <a href="/fr/docs/Glossary/Input_method_editor">éditeur de méthode de saisie</a> termine ou annule la session de composition courante.</dd>
  <dt><a href="/fr/docs/Web/API/Element/compositionstart_event"><code>compositionstart</code></a></dt>
  <dd>Déclenché lorsqu'un système de composition textuel tel qu'un <a href="/fr/docs/Glossary/Input_method_editor">éditeur de méthode de saisie</a> démarre une nouvelle session de composition.</dd>
  <dt><a href="/fr/docs/Web/API/Element/compositionupdate_event"><code>compositionupdate</code></a></dt>
  <dd>Déclenché lorsqu'un nouveau caractère est reçu dans le contexte d'une session de composition textuelle.</dd>
</dl>

<h3 id="focus_events">Évènements pour le focus</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/blur_event"><code>blur</code></a></dt>
  <dd>Déclenché lorsqu'un élément a perdu le focus. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onblur"><code>onblur</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/focus_event"><code>focus</code></a></dt>
  <dd>Déclenché lorsqu'un élément reçoit le focus. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onfocus"><code>onfocus</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/focusin_event"><code>focusin</code></a></dt>
  <dd>Déclenché lorsqu'un élément s'apprête à recevoir le focus.</dd>
  <dt><a href="/fr/docs/Web/API/Element/focusout_event"><code>focusout</code></a></dt>
  <dd>Déclenché lorsqu'un élément s'apprête à perdre le focus.</dd>
</dl>

<h3 id="fullscreen_events">Évènements relatifs au plein écran</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/fullscreenchange_event"><code>fullscreenchange</code></a></dt>
  <dd>Envoyé à un élément (<code>Element</code>) lorsque celui-ci effectue une transition (entrée ou sortie) pour le mode <a href="/fr/docs/Web/API/Fullscreen_API/Guide">plein écran</a>. Également disponible via la propriété <a href="/fr/docs/Web/API/Element/onfullscreenchange"><code>onfullscreenchange</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/fullscreenerror_event"><code>fullscreenerror</code></a></dt>
  <dd>Envoyé à un élément <code>Element</code> si une erreur se produit lors d'une transition (entrée ou sortie) pour le mode <a href="/fr/docs/Web/API/Fullscreen_API/Guide">plein écran</a>. Également disponible via la propriété <a href="/fr/docs/Web/API/Element/onfullscreenerror"><code>onfullscreenerror</code></a>.</dd>
</dl>

<h3 id="keyboard_events">Évènements relatifs au clavier</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/keydown_event"><code>keydown</code></a></dt>
  <dd>Déclenché lors de l'appui sur une touche du clavier. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onkeydown"><code>onkeydown</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/keypress_event"><code>keypress</code></a></dt>
  <dd>Déclenché lorsqu'une touche produit un caractère lorsqu'elle est pressée. {{deprecated_inline}} Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onkeypress"><code>onkeypress</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/keyup_event"><code>keyup</code></a></dt>
  <dd>Déclenché lorsqu'une touche est relâchée. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onkeyup"><code>onkeyup</code></a>.</dd>
</dl>

<h3 id="mouse_events">Évènements relatifs à la souris</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/auxclick_event"><code>auxclick</code></a></dt>
  <dd>Déclenché lorsqu'un bouton non primaire d'un appareil de pointage (c'est-à-dire tout bouton de la souris en dehors du bouton gauche) a été pressé puis relâché sur un élément. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onauxclick"><code>onauxclick</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/click_event"><code>click</code></a></dt>
  <dd>Déclenché lorsqu'un bouton d'un appareil de pointage (par exemple le bouton gauche de la souris) a été pressé puis relâche sur un élément. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onclick"><code>onclick</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/contextmenu_event"><code>contextmenu</code></a></dt>
  <dd>Déclenché lorsqu'un utilisateur tente d'ouvrir un menu contextuel. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/oncontextmenu"><code>oncontextmenu</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/dblclick_event"><code>dblclick</code></a></dt>
  <dd>Déclenché lorsqu'un bouton d'un appareil de pointage (par exemple le bouton gauche de la souris) a été utilisé pour un double-clic sur un élément. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/ondblclick"><code>ondblclick</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/DOMActivate_event"><code>DOMActivate</code></a> {{Deprecated_Inline}}</dt>
  <dd>Se produit lorsqu'un élément est activé, par exemple avec un clic de souris ou l'appui d'une touche.</dd>
  <dt><a href="/fr/docs/Web/API/Element/mousedown_event"><code>mousedown</code></a></dt>
  <dd>Déclenché lorsqu'un bouton d'un appareil de pointage est pressé sur un élément. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onmousedown"><code>onmousedown</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/mouseenter_event"><code>mouseenter</code></a></dt>
  <dd>Déclenché lorsqu'un appareil de pointage (généralement une souris) est déplacé pour arriver sur l'élément disposant du gestionnaire d'évènement. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onmouseenter"><code>onmouseenter</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/mouseleave_event"><code>mouseleave</code></a></dt>
  <dd>Déclenché lorsque le pointeur d'un appareil de pointage (généralement une souris) est déplacée en dehors de l'élément qui dispose du gestionnaire d'évènement. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onmouseleave"><code>onmouseleave</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/mousemove_event"><code>mousemove</code></a></dt>
  <dd>Déclenché lorsqu'un appareil de pointage (généralement une souris) est déplacé sur un élément. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onmousemove"><code>onmousemove</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/mouseout_event"><code>mouseout</code></a></dt>
  <dd>Déclenché lorsqu'un appareil de pointage (généralement une souris) se déplace pour quitter l'élément qui dispose du gestionnaire d'évènement (ou lorsque le pointeur quitte l'un des enfants de cet élément). Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onmouseout"><code>onmouseout</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/mouseover_event"><code>mouseover</code></a></dt>
  <dd>Déclenché lorsqu'un appareil de pointage arrive sur l'élément (ou l'un de ses enfants) qui dispose du gestionnaire d'évènement. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onmouseover"><code>onmouseover</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/mouseup_event"><code>mouseup</code></a></dt>
  <dd>Déclenché lorsque le bouton d'un appareil de pointage est relâché pour un élément. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/onmouseup"><code>onmouseup</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/webkitmouseforcechanged_event"><code>webkitmouseforcechanged</code></a></dt>
  <dd>Déclenché à chaque fois que la quantite dé pression change sur le pavé ou l'écran tactile.</dd>
  <dt><a href="/fr/docs/Web/API/Element/webkitmouseforcedown_event"><code>webkitmouseforcedown</code></a></dt>
  <dd>Déclenché après l'évènement <code>mousedown</code> dès que suffisamment de pression a été appliquée pour qualifier ce clic de clic forcé.</dd>
  <dt><a href="/fr/docs/Web/API/Element/webkitmouseforcewillbegin_event"><code>webkitmouseforcewillbegin</code></a></dt>
  <dd>Déclenché avant l'évènement <a href="/fr/docs/Web/API/Element/mousedown_event"><code>mousedown</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/webkitmouseforceup_event"><code>webkitmouseforceup</code></a></dt>
  <dd>Déclenché après l'évènement <a href="/fr/docs/Web/API/Element/webkitmouseforcedown_event"><code>webkitmouseforcedown</code></a> dès que suffisamment de pression a été relâchée pour terminer le clic forcé.</dd>
</dl>

<h3 id="touch_events">Évènements tactiles</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/Element/touchcancel_event"><code>touchcancel</code></a></dt>
  <dd>Déclenché lorsqu'un ou plusieurs points de toucher ont été perturbés de façon spécifique à l'implémentation (par exemple lorsque trop de points de toucher ont été créés). Également disponible avec la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/ontouchcancel"><code>ontouchcancel</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/touchend_event"><code>touchend</code></a></dt>
  <dd>Déclenché lorsqu'un ou plusieurs points de toucher sont retirés de la surface tactile. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/ontouchend"><code>ontouchend</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/touchmove_event"><code>touchmove</code></a></dt>
  <dd>Déclenché lorsqu'un ou plusieurs points de toucher se déplacent sur la surface tactile. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/ontouchmove"><code>ontouchmove</code></a>.</dd>
  <dt><a href="/fr/docs/Web/API/Element/touchstart_event"><code>touchstart</code></a></dt>
  <dd>Déclenché lorsqu'un ou plusieurs points de toucher sont placés sur la surface tactile. Également disponible via la propriété <a href="/fr/docs/Web/API/GlobalEventHandlers/ontouchstart"><code>ontouchstart</code></a>.</dd>
</dl>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>
