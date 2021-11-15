---
title: Firefox 13 pour les développeurs
slug: Mozilla/Firefox/Releases/13
tags:
  - Firefox
  - Firefox 13
translation_of: Mozilla/Firefox/Releases/13
original_slug: Mozilla/Firefox/Versions/13
---
<div>{{FirefoxSidebar}}</div><p>Firefox 13, basé sur Gecko 13.0, est sorti le 5 juin 2012. Cette page résume les principaux changements dans Firefox 13 qui sont utiles aux développeurs.</p>

<h2 id="Changements_pour_les_développeurs_Web">Changements pour les développeurs Web</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>L'attribut {{htmlattrxref("cellspacing", "table")}} de {{htmlelement("table")}} est désormais analysé de la manière qu'il soit en mode quirks ou non. Autrement dit, si une valeur est spécifiée en pourcentage, elle est traitée comme un certain nombre de pixels, puisque les valeurs en pourcentage ne sont pas réellement autorisée selon la spécification.</li>
 <li>L'élément {{htmlelement("wbr")}} a vu son comportement bi-directionnel corrigé. Il se comporte à présent comme l'Unicode <code>U+200B ZERO-WIDTH SPACE</code> et n'affecte donc plus la bi-directionnalité de son élément parent.</li>
 <li>La peusdo-classe {{Cssxref(":invalid")}} peut à présent être appliquée à l'élément {{htmlelement("form")}}.</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>L'unité <code>turn</code> de la propriété {{cssxref("&lt;angle&gt;")}} est désormais supportée (à utiliser avec la fonction CSS <code>rotate()</code>).</li>
 <li>Le support d'une syntaxe de 3 à 4 valeurs pour la propriété {{cssxref("background-position")}} a été ajouté. Vous pour décaler une image de fond à partir de n'importe quel coin en écrivant par exemple "<code>right 10px bottom 20px</code>". Voir {{bug(522607)}}</li>
 <li>Le support d'une syntaxe à 2 valeurs pour la propriété {{cssxref("background-repeat")}} a été ajouté.</li>
 <li>Les propriétés {{cssxref("border-radius","-moz-border-radius*")}} et {{cssxref("box-shadow","-moz-box-shadow")}} n'ont plus de préfixe (<code>border-radius</code> ou <code>box-shadow</code>). Voir {{bug(693510)}}</li>
 <li>La propriété {{cssxref("column-fill")}} a été implémentée (prefixée).</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>Le support pour la construction <a href="/fr/docs/JavaScript/Reference/Statements/for...of"><code>for..of</code></a> de l'ECMAScript 6 a été ajouté.</li>
 <li>Le support expérimental pour les objets ECMAScript 6 <a href="/fr/docs/JavaScript/Reference/Global_Objects/Map">Map</a> and <a href="/fr/docs/JavaScript/Reference/Global_Objects/Set">Set</a> a été ajouté.</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>L'argument <code>deep</code> de la méthode {{domxref("Node.cloneNode()")}} est désormais optionnel, comme c'est spécifié dans DOM4.</li>
 <li>Les méthodes {{domxref("window.setTimeout()")}} et {{domxref("window.setInterval()")}} ne transmettent plus l'argument supplémentaire "lateness" lors du rappel de routine.</li>
 <li>La méthode {{domxref("Blob","Blob.mozSlice()")}} n'a plus de préfixe.</li>
 <li>Le support du constructeur {{domxref("Blob")}} a été ajouté.</li>
 <li>Le support de <a href="/fr/docs/DOM/Storage#globalStorage"><code>globalStorage</code></a> a été retiré.</li>
 <li>La nouvelle interface {{domxref("DOMRequest")}}, utilisée pour rapporté l'état et le résultat des opérations en arrière-plan, a été ajoutée.</li>
 <li>La méthode {{domxref("HTMLOptionElement", "HTMLOptionElement.index()")}} renvoie désormais <code>0</code> au lieu de l'incorrect <code>-1</code> lorsque {{HTMLElement("option")}} est à l'intérieur d'un élément {{HTMLElement("datalist")}}.</li>
 <li>{{domxref("DOMException")}} a été implémenté selon la spécification DOM Level 4.</li>
 <li>L'inteface {{domxref("FileError")}} a été supprimée en faveur de l'interface {{domxref("DOMError")}} selon la dernière spécification FileAPI.</li>
 <li>L'objet {{domxref("Range")}} ne lance plus une <code>RangeException</code>. A la place une {{domxref("DOMException")}} est utilisée selon DOM 4.</li>
 <li>{{domxref("element.getAttributeNS()")}} renvoie désormais toujours <code>null</code> au lieu d'une chaîne vide pour les attributs inexistants. Auparavant, il y avait des cas où une chaîne vide pouvait être retournée. Pour être conforme à la spécification DOM4, null doit être retourné pour les attributs inexistants.</li>
 <li>L'interface {{domxref("HTMLCanvasElement")}} a maintenant une méthode non-standard, <code>mozFetchAsStream()</code>, qui fournit un flux entrant contenant les données d'image de l'élément au format spécifié.</li>
</ul>

<h3 id="UA_string">UA string</h3>

<ul>
 <li>Firefox Mobile ou Tablet pour Android dispose désormais <a href="/fr/docs/Gecko_user_agent_string_reference#Mobile_and_Tablet_indicators">d'une chaîne UA</a> pour indiquer le style et n'a plus le signe Fennec. En outre, le nombre après "Gecko /" est à présent le numéro de version de Gecko au lieu d'une date.</li>
 <li>La chaîne UA n'affiche plus le numéro de correctif Gecko ou le statut de version dans le numéro de version ; le numéro de version est à présent toujours de la forme "X.Y", où X est le numéro de version majeur et Y le mineur. Par exemple, "13.0" ou "14.1". Il n'y aura plus quelque chose comme "14.0.1b1".</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>L'interface DOM {{domxref("SVGStringList")}} est désormais indexable comme <a href="/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/Array"><code>Array</code></a> (voir {{bug(722071)}}).</li>
</ul>

<h3 id="WebGL">WebGL</h3>

<ul>
 <li>Le support pour l'extension <a href="/fr/docs/WebGL/Using_Extensions#EXT_texture_filter_anisotropic"><code>EXT_texture_filter_anisotropic</code></a> a été ajouté. Le filtrage des textures anisotrope améliore la qualité de l'accès aux textures mipmapped lors de la visualisation d'une primitive texturée à un angle oblique.</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>Le support pour l'attribut <code>width</code> sur l'élément {{MathMLElement("mtable")}} a été ajouté ({{bug(722880)}}).</li>
 <li>La <a href="http://www.mathjax.org/demos/tex-samples/" rel="external">police MathJax</a> est désormais utilisée comme police par défaut pour le texte mathématique are now used as the default fonts for mathematical text. Voir <a href="/fr/docs/Mozilla_MathML_Project/Fonts">les polices pour le moteur MathML de Mozilla</a> pour plus d'informations.</li>
</ul>

<h3 id="Réseau">Réseau</h3>

<ul>
 <li>Le protocole SPDY est désormais activé par défaut.</li>
</ul>

<h3 id="Outils_de_développement">Outils de développement</h3>

<h4 id="Amélioration_de_la_vue_3D">Amélioration de la vue 3D</h4>

<ul>
 <li>Vous pouvez à présent appuyer sur la touche "F" pour s'assurer que le nœud actuellement sélectionné est visible.</li>
</ul>

<h4 id="Améliorations_du_panneau_de_style">Améliorations du panneau de style</h4>

<ul>
 <li>En cliquant sur l'en-tête d'une règle dans le <a href="/fr/docs/Tools/Page_Inspector/Style_panel">panneau de style</a> ouvre à présent <a href="/fr/docs/Outils/%C3%89diteur_de_Style">l'Editeur de style</a> correspondant au CSS.</li>
 <li>Un clique droit sur une règle dans le <a href="/fr/docs/Tools/Page_Inspector/Style_panel">panneau de style</a> offre à présent une option pour copier la règle dans le presse-papiers.</li>
 <li>La saisie d'un nom de propriété inconnue, ou d'une valeur de propriété illégale, affiche une icône d'avertissement près de cette propriété.</li>
</ul>

<h4 id="Amélioration_de_l'Ardoise">Amélioration de l'Ardoise</h4>

<ul>
 <li>L'<a href="/fr/docs/Outils/Ardoise">Ardoise</a> a maintenant une option dans le menu Aide pour vous rendre à la documentation MDN sur l'Ardoise.</li>
</ul>

<h2 id="Changements_pour_les_développeurs_de_Mozilla_et_de_modules_complémentaires">Changements pour les développeurs de Mozilla et de modules complémentaires</h2>

<h3 id="Note_de_compatibilité">Note de compatibilité</h3>

<p>A partir de Firefox 13, Firefox pour Windows requiert au minimum Windows XP Service Pack 2, il ne pourra plus s'exécuter sur Windows 2000 ou les versions antérieures de Windows XP.</p>

<h3 id="Modules_de_code_JavaScript">Modules de code JavaScript</h3>

<h4 id="source-editor.jsm">source-editor.jsm</h4>

<ul>
 <li>Le support d'un drapeau sale a été ajouté à l'API Source Editor.</li>
 <li>L'éditeur de source ne supporte plus de retomber sur un {{HTMLElement("textarea")}} au lieu d'utiliser Orion.</li>
 <li>L'éditeur expose à présent les évènements focus et blur.</li>
 <li>La méthode <a href="/fr/docs/JavaScript_code_modules/source-editor.jsm#getIndentationString%28%29"><code>getIndentationString()</code></a> a été ajoutée, cela renvoie la chaîne à utiliser pour l'indentation du texte dans l'éditeur.</li>
 <li>L'éditeur de source supporte désormais la gestion d'une liste de points d'arrêt et l'affichage de l'interface utilisateur pour les basculer sur et en dehors ; toutefois, il ne fait pas la mise en œuvre des points d'arrêt. C'est à vous d'écrire du code pour le débogueur.</li>
 <li>Le support pour mettre en surbrillance la ligne actuelle a été ajouté, en utilisant l'option de configuration <code>highlightCurrentLine</code>.</li>
</ul>

<h3 id="ARIA">ARIA</h3>

<ul>
 <li>Les propriétés CSS {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}} sont à présent toutes reflétées dans les attributs des objets ARIA avec le même nom. Voir les <a href="/fr/docs/Accessibility/AT-APIs/Gecko/Attrs">attributs des objets Gecko</a> pour plus d'informations.</li>
</ul>

<h3 id="Interfaces">Interfaces</h3>

<ul>
 <li>L'interface {{interface("nsIScreen")}} supporte à présent le contrôle de la rotation via le nouvel attribut <code>rotation</code>.</li>
 <li>L'interface {{interface("nsIPrefBranch2")}} a été intégrée dans {{interface("nsIPrefBranch")}} ({{bug(718255)}}).</li>
 <li>Les alias <code>MozOpacity</code>, <code>MozOutline</code>, <code>MozOutlineStyle</code>, <code>MozOutlineWidth</code>, <code>MozOutlineOffset</code> et <code>MozOutlineColor</code>, qui ont tous été retirés des précédentes versions de Gecko, ont été supprimés de {{interface("nsIDOMCSS2Properties")}}, qui aurait dû avoir ces alias.</li>
 <li>L'attribut <code>excludeItemIfParentHasAnnotation</code> de {{interface("nsINavHistoryQueryOptions")}} a été retiré, avec l'opération de requête correspondante. Il existait les livemarks, qui n'existent plus.</li>
</ul>

<h2 id="Voir_également">Voir également</h2>

<p>{{Firefox_for_developers('12')}}</p>
