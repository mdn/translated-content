---
title: Entrées utilisateur et méthodes
slug: Web/Guide/User_input_methods
translation_of: Web/Guide/User_input_methods
---
<p>Les entrées utilisateur modernes vont au-delà du simple clavier et souris: pensez aux écrans tactiles par exemple. Cet article fournit des recommendations pour gérer les entrées utilisateur et implémenter les contrôles des Open Web Apps, ainsi que des FAQs, des exemples concrets, et des liens pour ceux qui ont besoin d'informations supplémentaires sur les technologies utilisées. Les APIs et événements abordés sont en autre <a href="/fr/docs/Web/Guide/DOM/Events/Touch_events">les événements tactiles</a>, <a href="/fr/docs/WebAPI/Pointer_Lock">l'API Pointer Lock</a>, <a href="/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">l'API Screen Orientation</a>, <a href="/fr/docs/Web/Guide/DOM/Using_full_screen_mode">l'API Fullscreen</a> et <a href="/fr/docs/Web/API/API_HTML_Drag_and_Drop">Drag &amp; Drop</a>.</p>

<h2 id="Workflow_entrées_utilisateur_et_contrôles">Workflow entrées utilisateur et contrôles</h2>

<p>La diagramme suivant illustre le déroulement des opérations typique pour implémenter les mécanismes d'entrée utilisateur:</p>

<p><img alt="" src="user-input-and-controls.png"></p>

<p>Tout d'abord vous devez décider quels mécanismes en entrées vous voulez prendre en charge dans votre application: souris, clavier, doigt, etc. Une fois que vous avez décidé, vous pouvez les contrôler en utilisant les outils offerts par la plateforme web ou par des bibliothèques JavaScript.</p>

<h2 id="Recommandations">Recommandations</h2>

<p>Les mécanismes en entrées dépendent des capacités de l'appareil qui exécute l'application:</p>

<ul>
 <li>Certains appareils ont des écrans tactiles: le plateforme web dispose des <a href="/fr/docs/Web/Guide/DOM/Events/Touch_events">événements tactiles</a> pour interpréter l'activité du doigt sur les interfaces tactiles.</li>
 <li>Pour les appareils ayant une souris/pavé tactile comme méthode de pointage, l'<a href="/fr/docs/WebAPI/Pointer_Lock">API Pointer Lock</a> aide à implémenter un jeu 3D à la première personne ou toute autre application nécessisant un contrôle total du dispositif de pointage. L'<a href="/fr/docs/Web/Guide/DOM/Using_full_screen_mode">API Fullscreen</a> quant à elle aide à afficher l'application en mode plein écran.</li>
 <li>En utilisant les fonctionnalités telles que les éléments <a href="/fr/docs/Web/HTML/Contenu_editable">contentEditable</a>, vous pouvez implémenter des éditeurs rich-text rapidement et avec <a href="/fr/docs/Web/API/API_HTML_Drag_and_Drop">Drag&amp;Drop</a> vous pouvez laisser les utilisateurs déplacer des éléments dans votre application. Quand l'orientation de l'écran a de l'importance pour votre application, vous pouvez lire l'orientation de l'écran à travers l'<a href="/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">API Screen Orientation</a> et verrouiller l'écran dans un sens.</li>
 <li>Vous devriez toujours être attentif à l'accessibilité du clavier quand c'est approprié — beaucoup d'utilisateurs web utilisent uniquement le clavier pour naviger sur les sites web et applications, et les bloquer hors de votre fonctionnalité est une mauvaise idée.</li>
</ul>

<p>Vous trouverez ci-dessous un ensemble de recommandations et meilleures pratiques pour utiliser de tels outils dans des Open Web Apps.</p>

<h3 id="Décidez_quel_mécanisme_en_entrée_vous_utilisez">Décidez quel mécanisme en entrée vous utilisez</h3>

<h4 id="Clavier">Clavier</h4>

<p>La saisie du clavier peut être contrôlée par votre application. Par exemple, si vous voulez ajouter des contrôles déclenchés quand des touches sont pressées, vous devez ajouter un gestionnaire d'événement sur l'objet window:</p>

<pre class="brush: js">window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);</pre>

<p>où <code>handleKeyDown</code> et <code>handleKeyUp</code> sont des fonctions implémentant les contrôles sur les événements <code>keydown</code> et <code>keyup</code>.</p>

<div class="note">
<p><strong>Note :</strong> Jetez un coup d'oeil à la <a href="/fr/docs/Web/Events">Référence des événements</a> et au guide {{domxref("KeyboardEvent")}} pour en savoir plus sur les événements de clavier.</p>
</div>

<h4 id="Souris">Souris</h4>

<p>Les événements qui se produisent quand l'utilisateur interagit avec un appareil de pointage comme une souris sont représentés par l'interface DOM {{domxref("MouseEvent")}}. Les événements de souris les plus communs sont <a href="/fr/docs/Web/Events/click"><code>click</code></a>, <a href="/fr/docs/Web/Events/dblclick"><code>dblclick</code></a>, <a href="/fr/docs/Web/Events/mouseup"><code>mouseup</code></a>, et <a href="/fr/docs/Web/Events/mousedown"><code>mousedown</code></a>. La liste de tous les événements souris utilisant l'interface MouseEvent est disponible dans la <a href="/fr/docs/Web/Events">Référence des événements</a>.<br>
 <br>
 Quand le périphérique d'entrée est une souris, vous pouvez également contrôler les entrées utilisateur avec l'API Pointer Lock et implémenter le Drag &amp; Drop (voir ci-dessous).</p>

<h4 id="Toucher_du_doigt">Toucher du doigt</h4>

<p>Quand vous développez des applications web destinées à être installées sur des appareils à écran tactile, il est recommandé de prendre en considération les différentes capacités de l'appareil, en terme de résolution d'écran et d'entrée utilisateur. Les <a href="/fr/docs/Web/Guide/DOM/Events/Touch_events">événements tactiles</a> peuvent vous aider à implémenter des éléments interactifs et des geste d'interactions courants sur les appareils à écran tactile.<br>
 <br>
 Si vous voulez utiliser les événements tactiles, vous devez ajouter des gestionnaires d'événement et spécifier des fonctions de rappel, appelées quand l'événement est déclenché:</p>

<pre class="brush: js">element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);</pre>

<p>où <code>element</code> est l'élément du DOM sur lequel vous voulez enregistrer les événements tactiles.</p>

<div class="note">
<p><strong>Note :</strong> Pour plus d'informations sur ce que vous pouvez faire avec les événements tactiles, lisez le guide des <a href="/fr/docs/Web/Guide/DOM/Events/Touch_events">événements tactiles</a>.</p>
</div>

<h4 id="Événements_de_pointeur">Événements de pointeur</h4>

<p>Quand vous avez affaire à des appareils qui incorporent de multiples formes d'entrée, comme la souris, le toucher du doigt et la saisie au stylet, il peut être difficile de développer une solution qui marche pour tous ces mécanismes de contrôle différents. Les <a href="/fr/docs/Web/API/Pointer_events">événements de pointeur</a> aident les développeurs à gérer plus facilement les événements sur les appareils en normalisant le traitement de chacun d'entre eux. Un pointeur peut être n'importe quel contact sur l'écran, fait par le curseur d'une souris, d'un stylo, le toucher (y compris multi-touch) ou autre périphérique d'entrée de pointage. Les événements génériques pour gérer la saisie du pointeur ressemblent beaucoup à ceux pour la souris: <code>pointerdown</code>, <code>pointermove</code>, <code>pointerup</code>, <code>pointerover</code>, <code>pointerout</code>, etc.</p>

<div class="note">
<p><strong>Note :</strong> Les événements du pointeur ne sont pas encore beaucoup pris en charge, mais le <a href="https://github.com/mozilla/pointer.js">polyfill pointer.js</a> est disponible sur le compte GitHub de Mozilla.</p>
</div>

<h3 id="Implémentez_les_contrôles">Implémentez les contrôles</h3>

<h4 id="Verrouiller_le_pointeur">Verrouiller le pointeur</h4>

<p>Dans certains cas, typiquement dans le développement de jeux, vous pouvez avoir besoin d'accéder aux événements de la souris même lorsque le curseur dépasse la limite du navigateur ou de l'écran: l'{{domxref("Pointer_Lock_API", "API Pointer Lock")}} vous donne le contrôle total de l'appareil de pointage.</p>

<p>Voici le code pour demander que le pointeur soit bloqué à l'intérieur d'<code>element</code>:</p>

<pre class="brush: js">element.requestPointerLock();</pre>

<div class="note">
<p><strong>Note :</strong> Pour un tutoriel complet et la référence, lisez notre page {{domxref("Pointer_Lock_API", "Pointer Lock API")}}.</p>
</div>

<h4 id="Orientation_de_l'écran">Orientation de l'écran</h4>

<p>Si l'orientation de l'écran est importante pour votre application, vous pouvez lire l'état de l'orientation de l'écran, être informé quand cet état change, et verrouiller l'orientation dans un état spécifique (habituellement portrait ou paysage) à travers l'<a href="/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">API Screen Orientation</a>.</p>

<p>Les données d'orientation peuvent être récupérées à travers l'attribut {{domxref("screen.orientation")}} ou à travers la media query <a href="/fr/docs/Web/CSS/@media/orientation"><code>orientation</code></a>. Quand <code>screen.orientation</code> change, l'événement {{domxref("screen.orientationchange")}} est declenché sur l'objet screen. Verrouiller l'orientation de l'écran en possible en invoquant la méthode {{domxref("screen.lockOrientation")}}, tandis que la méthode {{domxref("screen.unlockOrientation")}} supprime le verrouillage de l'écran précédemment définit.</p>

<div class="note">
<p><strong>Note :</strong> Pour plus d'informations sur l'API Screen Orientation API consultez <a href="/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">Gérer l'orientation de l'écran</a>.</p>
</div>

<h4 id="Plein_écran">Plein écran</h4>

<p>Vous pourriez avoir besoin de présenter un élément de votre application (comme une {{ htmlelement("video") }} par exemple) en mode plein écran. Vous pouvez y parvenir en appelant {{domxref("Element.requestFullscreen()")}} sur cet élément. Gardez à l'esprit que beaucoup de navigateurs l'implémentent encore avec un préfixe de fournisseur, vous aurez donc probablement besoin de découper votre code ainsi:</p>

<pre class="brush: js">var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}</pre>

<div class="note">
<p><strong>Note :</strong> Pour en savoir plus sur la fonctionnalité de plein écran, lisez notre documentation <a href="/fr/docs/Web/Guide/DOM/Using_full_screen_mode">utiliser le plein écran</a>.</p>
</div>

<h4 id="Drag_Drop">Drag &amp; Drop</h4>

<p><a href="/fr/docs/Web/API/API_HTML_Drag_and_Drop">Drag &amp; Drop</a> (glisser/déposer) permet à l'utilisateur de votre application de cliquer sur un élément, maintenir le bouton de la souris enfoncé sur cet élément, le faire glisser vers un autre emplacement, et relacher le bouton de la souris pour le déposer à cet emplacement.<br>
 <br>
 Voici un exemple qui permet à du contenu d'être déplacé:</p>

<pre class="brush: html">&lt;div draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'Ce texte peut être déplacé')"&gt;
    Ce texte &lt;strong&gt;peut&lt;/strong&gt; être déplacé.
&lt;/div&gt;</pre>

<p>Ici, on</p>

<ul>
 <li>Définit l'attribut <a href="/fr/docs/Web/HTML/Attributs_universels#attr-dir"><code>draggable</code></a> à vrai pour que l'élément puisse être déplacé.</li>
 <li>Ajoute un gestionnaire d'événement <a href="/fr/docs/Web/Events/dragstart"><code>dragstart</code></a> qui définit les données de déplacement à l'intérieur.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Vous pouvez trouver plus d'informations dans la documentation MDN <a href="/fr/docs/Web/API/API_HTML_Drag_and_Drop">Drag &amp; Drop</a>.</p>
</div>

<h4 id="contentEditable">contentEditable</h4>

<p>Dans un Open Web App, tout élément DOM peut être rendu directement éditable en utilisant l'attribut <a href="/fr/docs/Web/HTML/Attributs_universels#attr-class"><code>contenteditable</code></a>.</p>

<pre class="brush: html">&lt;div contenteditable="true"&gt;
    Ce texte peut être édité par l'utilisateur.
&lt;/div&gt;</pre>

<div class="note">
<p><strong>Note :</strong> Vous pouvez trouver les informations de compatibilité, des exemples et d'autres ressources dans le guide <a href="/fr/docs/Web/HTML/Contenu_editable">Contenu Éditable</a>.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<dl>
 <dt><strong><a href="/en/DOM/Touch_events#Example">Suivre plusieurs points de contact à la fois</a></strong></dt>
 <dd>Cet exemple permet de gérer un toucher multiple (plusieurs contacts simultanés), permettant ainsi à l'utilisateur de dessiner dans un <code>{{htmlelement("canvas")}}</code> avec plusieurs doigts. Cela ne fonctionne qu'avec les navigateurs supportant les interactions tactiles.</dd>
 <dt><strong><a href="/fr/docs/WebAPI/Pointer_Lock#example">Démo de verrouillage de pointeur simple</a></strong></dt>
 <dd>Vous avons écrit une démo de verrouillage de pointeur pour vous montrer comment l'utiliser pour mettre en place un système de contrôle simple. Cette démo utilise JavaScript pour dessiner une balle dans un élément <code>{{htmlelement("canvas")}}</code>. Quand vous cliquez sur le canvas, le verrouillage du pointeur est utilisé pour supprimer le curseur de la souris à l'écran et vous permettre de déplacer la balle avec la souris.</dd>
 <dt><strong><a href="http://html5demos.com/contenteditable">Démo contentEditable</a></strong></dt>
 <dd>Ceci est un exemple qui montre comment contenteditable peut être utilisé pour créer une section de document éditable, et dont l'état est sauvegardé en utilisant <a href="/fr/docs/Web/API/Web_Storage_API">LocalStorage</a>.</dd>
</dl>

<h2 id="Tutoriels">Tutoriels</h2>

<ul>
 <li><a href="/fr/docs/Web/Guide/DOM/Events/Touch_events">Événement tactiles</a></li>
 <li><a href="/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">Gérer l'orientation de l'écran</a></li>
 <li><a href="/fr/docs/Web/Guide/DOM/Using_full_screen_mode">Utiliser le mode plein écran</a></li>
 <li><a href="/fr/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items">Drag &amp; Drop de multiples éléments</a></li>
 <li><a href="/fr/docs/Web/API/API_HTML_Drag_and_Drop/Op%C3%A9rations_de_glissement">Opérations de glissement</a></li>
</ul>

<h2 id="Référence">Référence</h2>

<ul>
 <li>{{domxref("MouseEvent")}}</li>
 <li>{{domxref("KeyboardEvent")}}</li>
 <li><a href="/fr/docs/Web/Guide/DOM/Events/Touch_events">Événements tactiles</a></li>
 <li><a href="/fr/docs/WebAPI/Pointer_Lock">Pointer Lock API</a></li>
 <li><a href="/fr/docs/Web/API/CSS_Object_Model/Managing_screen_orientation">Screen Orientation API</a></li>
 <li><a href="/fr/docs/Web/Guide/DOM/Using_full_screen_mode">Fullscreen API</a></li>
 <li><a href="/fr/docs/Web/API/API_HTML_Drag_and_Drop">Drag &amp; Drop</a></li>
 <li><a href="/fr/docs/Web/HTML/Contenu_editable">Content Editable</a></li>
 <li><a href="https://developer.mozilla.org/en-US/Firefox_OS/Platform/Keyboard_events_in_Firefox_OS_TV">Keyboard events in Firefox OS TV</a></li>
 <li><a href="/en-US/docs/Mozilla/Firefox_OS/TVs_connected_devices/TV_remote_control_navigation">Implementing TV remote control navigation</a></li>
</ul>
