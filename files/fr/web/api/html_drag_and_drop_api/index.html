---
title: Glisser et déposer
slug: Web/API/HTML_Drag_and_Drop_API
tags:
  - Avancé
  - Glisser-deposer
  - Guide
  - HTML
  - drag and drop
translation_of: Web/API/HTML_Drag_and_Drop_API
original_slug: Web/API/API_HTML_Drag_and_Drop
---
<p>{{DefaultAPISidebar("HTML Drag and Drop API")}}</p>

<p><strong>L'interface HTML <em>Drag and Drop</em></strong> (pour glisser-déposer) permet à des applications d'utiliser des fonctionnalités de glisser-déposer dans le navigateur.</p>

<p>L'utilisateur pourra sélectionner des éléments déplaçables à la souris et les déplacer vers un élément où on peut déposer en relâchant le bouton de la souris. Une représentation translucide de l'élément déplacé suit le pointeur lors de l'opération.</p>

<p>Pour les sites web et les extensions, on peut personnaliser les éléments qui peuvent être déplacés, la façon dont ceux-ci sont signalés et les éléments qui peuvent servir de destination.</p>

<p>L'aperçu de cette API inclut une description des interfaces, les étapes à suivre pour prendre en charge ces fonctionnalités dans une application et un aperçu de l'interopérabilité de ces interfaces.</p>

<h2 id="Évènements_de_déplacement">Évènements de déplacement</h2>

<p>L'API HTML <em>Drag and Drop</em> utilise le modèle d'évènements du DOM ({{domxref("Event")}}) ainsi que les éléments de déplacements (<em>{{domxref("DragEvent")}}</em>) hérités des évènements liés à la souris ({{domxref("MouseEvent")}}). Une opération de déplacement commence généralement lorsqu'un utilisateur sélectionne un élément déplaçable puis qu'il le déplace sur un élément de destination avant de relâcher l'élément déplacé.</p>

<p>Lors des opérations de déplacement, plusieurs évènements sont déclenchés (dont certains qui sont déclenchés à plusieurs reprises comme {{event("drag")}} et {{event("dragover")}}).</p>

<p>Chaque <a href="/fr/docs/Web/API/DragEvent#Event_types">type d'évènement de déplacement</a> possède un <a href="/fr/docs/Web/API/DragEvent#GlobalEventHandlers">gestionnaire d'évènement global (une méthode <code>on...</code>)</a> :</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Évènement</th>
   <th scope="col">Gestionnaire d'évènement global</th>
   <th scope="col">Déclenchement</th>
  </tr>
  <tr>
   <td>{{event('drag')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondrag','ondrag')}}</td>
   <td>…un objet déplaçable (que ce soit un élément ou une sélection de texte) est déplacée.</td>
  </tr>
  <tr>
   <td>{{event('dragend')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragend','ondragend')}}</td>
   <td>…une opération de déplacement se termine (en relâchant le bouton de la souris ou en utilisant la touche Echap, voir <a href="/en-US/docs/DragDrop/Drag_Operations#dragend" >Terminer un déplacement</a>)</td>
  </tr>
  <tr>
   <td>{{event('dragenter')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragenter','ondragenter')}}</td>
   <td>…un élément en cours de déplacement arrive sur une zone de dépôt valide (voir <a href="/fr/docs/DragDrop/Drag_Operations#droptargets" >indiquer une cible de destination</a>).</td>
  </tr>
  <tr>
   <td>{{event('dragexit')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragexit','ondragexit')}}</td>
   <td>…un élément n'est plus la sélection immédiate du déplacement.</td>
  </tr>
  <tr>
   <td>{{event('dragleave')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragleave','ondragleave')}}</td>
   <td>…un élément en cours de déplacement quitte une zone de dépôt valide.</td>
  </tr>
  <tr>
   <td>{{event('dragover')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragover','ondragover')}}</td>
   <td>…un élément en cours de déplacement est en cours de survol d'une zone de dépôt valide (cet évènement est déclenché toutes les quelques centaines de millisecondes).</td>
  </tr>
  <tr>
   <td>{{event('dragstart')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondragstart','ondragstart')}}</td>
   <td>…l'utilisateur commence à déplacer un élément (voir <a href="/fr/docs/DragDrop/Drag_Operations#dragstart" >démarrer une opération de glissement</a>).</td>
  </tr>
  <tr>
   <td>{{event('drop')}}</td>
   <td>{{domxref('GlobalEventHandlers.ondrop','ondrop')}}</td>
   <td>…un élément est déposé sur une cible valide (voir <a href="/fr/docs/DragDrop/Drag_Operations#drop" >déposer un élément</a>).</td>
  </tr>
 </tbody>
</table>

<div class="note">
  <p><strong>Note :</strong> Les évènements <code>dragstart</code> et <code>dragend</code> ne sont pas déclenchés lors qu'on glisse-dépose un fichier de l'appareil dans le navigateur.</p>
</div>

<h2 id="Interfaces">Interfaces</h2>

<p>Les interfaces fournies par cette API sont</p>

<ul>
 <li>{{domxref("DragEvent")}},</li>
 <li>{{domxref("DataTransfer")}},</li>
 <li>{{domxref("DataTransferItem")}}</li>
 <li>{{domxref("DataTransferItemList")}}.</li>
</ul>

<p>L'interface {{domxref("DragEvent")}} possède un constructeur et une propriété {{domxref("DragEvent.dataTransfer","dataTransfer")}} qui est un objet {{domxref("DataTransfer")}}.</p>

<p>Les objets {{domxref("DataTransfer")}} incluent l'état du glisser-déposer, le type de déplacement (<code>copy</code> ou <code>move</code>), les données déplacées (un ou plusieurs objets) et le type MIME de chaque objet déplacé. Les objets {{domxref("DataTransfer")}} possèdent également des méthodes permettant d'ajouter ou de retirer des objets aux données déplacées.</p>

<p>Les interfaces {{domxref("DragEvent")}} et {{domxref("DataTransfer")}} sont standard et suffisent à apporter des fonctionnalités de glisser/déposer. Toutefois, Firefox prend en charge quelques extensions spécifiques à Gecko (cf. ci-après) pour l'objet {{domxref("DataTransfer")}} (bien entendu, ces extensions ne fonctionneront que dans Firefox et pas dans les autres navigateurs).</p>

<p>Chaque objet {{domxref("DataTransfer")}} possède une propriété  {{domxref("DataTransfer.items","items")}} qui est une liste ({{domxref("DataTransferItemList","list")}}) d'objets {{domxref("DataTransferItem")}}. Un objet {{domxref("DataTransferItem")}} représente un seul objet déplacé, avec une propriété {{domxref("DataTransferItem.kind","kind")}} qui indique s'il s'agit d'un texte (<code>string</code>) ou d'un fichier (<code>file</code>) et une propriété {{domxref("DataTransferItem.type","type")}} qui correspond au type MIME de la donnée déplacée. L'objet {{domxref("DataTransferItem")}} possède également des méthodes pour consulter les données de l'objet déplacé.</p>

<p>L'objet {{domxref("DataTransferItemList")}} est une liste d'objets {{domxref("DataTransferItem")}}. La liste possède des méthodes pour ajouter un objet en déplacement à la liste, pour retirer un objet de la liste ou pour vider la liste de tout ses objets.</p>

<p>La différence principale entre {{domxref("DataTransfer")}} et {{domxref("DataTransferItem")}} est l'utilisation de la méthode synchrone {{domxref("DataTransfer.getData","getData()")}} pour la première et de la méthode asynchrone {{domxref("DataTransferItem.getAsString","getAsString()")}} pour la deuxième.</p>

<div class="note">
  <p><strong>Note :</strong> {{domxref("DragEvent")}} et {{domxref("DataTransfer")}} sont largement prises en charge par les navigateurs de bureau tandis que {{domxref("DataTransferItem")}} et {{domxref("DataTransferItemList")}} ont une compatibilité plus restreinte. Voir la section ci-après sur l'interopérabilité.</p>
</div>

<h3 id="Interfaces_spécifiques_à_Gecko">Interfaces spécifiques à Gecko</h3>

<p>Mozilla / Firefox prend en charge certaines fonctionnalités qui ne font pas partie du modèle standard. Ce sont des fonctions utilitaires pour aider au déplacement de plusieurs objets ou de données qui ne sont pas du texte (des fichiers par exemple). Pour plus d'informations, voir <a href="/fr/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items" >Glisser-déposer plusieurs objets</a>. Voir aussi la page de référence de {{domxref("DataTransfer")}} pour la liste de l'ensemble <a href="/fr/docs/Web/API/DataTransfer#Gecko_properties">des propriétés spécifique à Gecko</a> et <a href="/fr/docs/Web/API/DataTransfer#Gecko_methods">des méthodes spécifiques à Gecko</a>.</p>

<h2 id="Bases">Bases</h2>

<p>Dans cette section, nous allons voir les premières étapes nécessaires aux fonctionnalités de glisser-déposer dans une application.</p>

<h3 id="Identifier_ce_qui_peut_être_déplacé">Identifier ce qui peut être déplacé</h3>

<p>Pour qu'un élément puisse être déplacé, il faut lui ajouter l'attribut {{htmlattrxref("draggable")}} ainsi que le gestionnaire d'évènement global {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} :</p>

<pre class="brush: html">&lt;script&gt;
function dragstart_handler(ev) {
 // On ajoute l'identifiant de l'élément cible à l'objet de transfert
 ev.dataTransfer.setData("text/plain", ev.target.innerText);
}
&lt;/script&gt;

&lt;p id="p1" draggable="true" ondragstart="dragstart_handler(event)"&gt;Cet élément est déplaçable.&lt;/p&gt;
</pre>

<p>Voir <a href="/fr/docs/Web/HTML/Global_attributes/draggable" >la page de référence sur l'attribut <code>draggable</code></a> et <a href="/fr/docs/Web/Guide/HTML/Drag_operations#draggableattribute">le guide sur les opérations de déplacement</a> pour plus d'informations.</p>

<h3 id="Définir_les_données_déplacées">Définir les données déplacées</h3>

<p>Une application peut inclure plusieurs objets dans une opération de glisser/déposer. Chaque objet est une chaîne de caractères ({{domxref("DOMString")}}) ayant un type MIME particulier (indiqué par son attribut <code>type</code>) tel que <code>text/html</code>.</p>

<p>Chaque {{domxref("DragEvent")}} possède une propriété  {{domxref("DragEvent.dataTransfer","dataTransfer")}} contenant les données transportées. Cette propriété (un objet {{domxref("DataTransfer")}}) possède des méthodes pour gérer les données transportées. La méthode {{domxref("DataTransfer.setData","setData()")}} permet d'ajouter un objet aux données transportées :</p>

<pre class="brush: js">function dragstart_handler(ev) {
  // On ajoute différents types de données transportées
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData("text/uri-list", ev.target.ownerDocument.location.href);
}
</pre>

<p>Pour connaître la liste des types de donnée communément utilisées lors d'un glisser/déposer (texte, HTML, liens, fichiers, etc.), voir <a href="/fr/docs/DragDrop/Recommended_Drag_Types" >les types recommandés</a>. Pour plus d'informations sur les informations transportées, voir <a href="/fr/docs/Web/Guide/HTML/Drag_operations#dragdata" >Drag Data</a>.</p>

<h3 id="Définir_limage_pour_le_déplacement">Définir l'image pour le déplacement</h3>

<p>Par défaut, le navigateur fournit une image qui apparaît à côté du pointeur lors de l'opération de déplacement. Toutefois, une application peut définir une image personnalisée grâce à la méthode {{domxref("DataTransfer.setDragImage","setDragImage()")}} :</p>

<pre class="brush: js">function dragstart_handler(ev) {
  // On crée une image qu'on utilise pour le déplacement
  // Note : on changera "example.gif" vers une vraie image
  // (sinon l'image par défaut sera utilisée)
  var img = new Image();
  img.src = 'example.gif';
  ev.dataTransfer.setDragImage(img, 10, 10);
}
</pre>

<p>Pour en savoir plus, voir <a href="/fr/docs/DragDrop/Drag_Operations#dragfeedback" >Définir l'image de <em>feedback</em> pour le glisser-déposer</a>.</p>

<h3 id="Définir_leffet_de_déplacement">Définir l'effet de déplacement</h3>

<p>La propriété {{domxref("DataTransfer.dropEffect","dropEffect")}} est utilisée pour fournir un retour à l'utilisateur qui effectue l'opération de glisser/déposer. Généralement, cela se traduit par la modification du curseur affiché par le navigateur lors du déplacement.</p>

<p>Il est possible de définir trois effets :</p>

<ul>
 <li><code>copy</code> : indique que les données déplacées seront copiées depuis l'emplacement source vers la cible.</li>
 <li><code>move</code> : indique que les données déplacées seront déplacées depuis l'emplacement source vers la cible.</li>
 <li><code>link</code> : indique qu'une relation ou une connexion sera créée entre la source et la cible.</li>
</ul>

<p>Lors de l'opération de déplacement, les effets peuvent être modifiés afin d'indiquer que certains effets sont autorisés à certains emplacements.</p>

<p>Voici un exemple illustrant l'utilisation de cette propriété.</p>

<pre class="brush: js">function dragstart_handler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
</pre>

<p>See <a href="/en-US/docs/Web/Guide/HTML/Drag_operations#drageffects" >Drag Effects</a> for more details.</p>

<h3 id="Définir_la_zone_où_déposer_lélément_déplacé">Définir la zone où déposer l'élément déplacé</h3>

<p>Par défaut, le navigateur empêche de déposer quoi que ce soit sur la plupart des éléments HTML. Pour modifier ce comportement, il faut qu'un élément devienne une zone cible ou qu'il soit identifié comme "<em>droppable</em>". L'élément doit avoir les deux gestionnaires d'évènements {{domxref("GlobalEventHandlers.ondragover","ondragover")}} et {{domxref("GlobalEventHandlers.ondrop","ondrop")}} comme attributs. Dans l'exemple suivant, on montre comment utiliser ces attributs et on fournit des gestionnaires d'évènements simples associés :</p>

<pre class="brush: html">&lt;script&gt;
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
 ev.preventDefault();
 // On récupère l'identifiant de la cible et on ajoute l'élément déplacé au DOM de la cible
 var data = ev.dataTransfer.getData("text/plain");
 ev.target.appendChild(document.getElementById(data));
}
&lt;/script&gt;

&lt;p id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)"&gt;Zone pour déposer&lt;/p&gt;
</pre>

<p>On voit ici que chaque gestionnaire invoque {{domxref("Event.preventDefault","preventDefault()")}} afin d'éviter toute gestion d'évènement ultérieure (comme <a href="/fr/docs/Web/API/Touch_events">les évènements tactiles</a> ou <a href="/fr/docs/Web/API/Pointer_events">les évènements de pointeur</a>).</p>

<p>Pour plus d'information, voir <a href="/fr/docs/Web/Guide/HTML/Drag_operations#droptargets">Indiquer une cible pour un glisser-déposer</a>.</p>

<h3 id="Gérer_le_dépôt_de_lobjet">Gérer le dépôt de l'objet</h3>

<p>Le gestionnaire de l'évènement {{event("drop")}} permet de gérer les données déposées avec la logique de l'application. Généralement, une application utilisera {{domxref("DataTransfer.getData","getData()")}} afin de récupérer les données déplacées et les traitera. L'application peut choisir d'avoir un comportement différent selon la valeur de {{domxref("DataTransfer.dropEffect","dropEffect")}} et/ou celles des autres propriétés.</p>

<p>Dans l'exemple suivant, on montre un gestionnaire pour le dépot de l'objet : on récupère l'identifiant (<code>id</code>) de l'élément déplacé puis on utilise celui-ci afin de le déplacer depuis la source vers la cible :</p>

<pre class="brush: html">&lt;script&gt;
function dragstart_handler(ev) {
 // On ajoute l'identifiant de l'élément cible à l'objet de transfert
 ev.dataTransfer.setData("application/my-app", ev.target.id);
 ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
 ev.preventDefault();
 // On obtient l'identifiant de la cible et on ajoute l'élément déplacé
 // au DOM de la cible
 var data = ev.dataTransfer.getData("application/my-app");
 ev.target.appendChild(document.getElementById(data));
}
&lt;/script&gt;

&lt;p id="p1" draggable="true" ondragstart="dragstart_handler(event)"&gt;Cet élément peut être déplacé.&lt;/p&gt;
&lt;div id="target" ondrop="drop_handler(event)" ondragover="dragover_handler(event)"&gt;Zone pour le dépôt&lt;/div&gt;
</pre>

<p>Pour plus d'information, voir <a href="/fr/docs/Web/Guide/HTML/Drag_operations#drop">Gérer le dépôt lors d'une opération de glisser-déposer</a>.</p>

<h3 id="Terminer_lopération_de_glisserdéposer">Terminer l'opération de glisser/déposer</h3>

<p>À la fin de l'opération, c'est l'évènement {{event("dragend")}} qui est déclenché <em>sur l'élément source</em> (celui qui a été "saisi" au début). Cet évènement est déclenché lorsque l'opération est terminée ou qu'elle a été annulée. Le gestionnaire d'évènement pour {{event("dragend")}} peut vérifier la valeur de la propriété {{domxref("DataTransfer.dropEffect","dropEffect")}} afin de déterminer si l'opération a réussi ou non.</p>

<p>Pour plus d'informations sur la gestion de la fin d'une opération de glisser-déposer, voir <a href="/fr/docs/DragDrop/Drag_Operations#dragend" >Terminer un glisser-déposer</a>.</p>

<h2 id="Interopérabilité">Interopérabilité</h2>

<p>Comme on peut le voir <a href="/en-US/docs/Web/API/DataTransferItem#Browser_compatibility">dans le tableau de compatibilité pour l'interface <code>DataTransferItem</code></a>, la prise en charge du <em>drag-and-drop</em> est assez répandue parmi les navigateurs de bureau à l'exception des interfaces {{domxref("DataTransferItem")}} et {{domxref("DataTransferItemList")}}. Ce tableau montre également que la prise en charge sur mobile est assez faible.</p>

<h2 id="Examples_and_demos">Exemples et démos</h2>

<ul>
 <li><a href="https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html">Copier et déplacer des éléments avec l'interface <code>DataTransfer</code></a></li>
 <li><a href="http://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html">Copier et déplacer des éléments avec l'interface <code>DataTransferListItem</code></a></li>
 <li><a href="https://jsbin.com/hiqasek/edit?html,js,output">JSBin : Glisser-déposer des fichiers</a></li>
 <li>
  <p><a href="https://park.glitch.me/">Un parking réalisé avec l'API Drag and Drop</a> (<a href="https://glitch.com/edit/#!/park">lien pour éditer le code</a>)</p>
 </li>
</ul>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations">Les opérations de déplacement</a></li>
 <li><a href="/fr/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items">Glisser-déposer plusieurs objets</a></li>
 <li><a href="/fr/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types">Types de déplacement recommandés</a></li>
 <li><a href="https://html.spec.whatwg.org/multipage/interaction.html#dnd">Spécification HTML5 : Drag and Drop</a></li>
 <li><a href="http://caniuse.com/#search=draganddrop">Données d'interopérabilité pour l'API Drag and Drop sur CanIUse</a></li>
</ul>
