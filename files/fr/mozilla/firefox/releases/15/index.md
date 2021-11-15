---
title: Firefox 15 pour les développeurs
slug: Mozilla/Firefox/Releases/15
tags:
  - Firefox
  - Firefox 15
translation_of: Mozilla/Firefox/Releases/15
original_slug: Mozilla/Firefox/Versions/15
---
<div>{{FirefoxSidebar}}</div><p>Firefox 15, basé sur Gecko 15.0, est sorti le 28 août 2012. Cette page résume les principaux changements dans Firefox 15 qui sont utiles aux développeurs.</p>

<h2 id="Changements_pour_les_développeurs_Web">Changements pour les développeurs Web</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>L'attribut <code>size</code> de l'élément {{HTMLElement("font")}} est à présent géré selon la spécification HTML5. Cela signifie que toutes les valeurs entières supérieures à 10 ou inférieure à -10 sont désormais considérées, respectivement, comme équivalentes à 10 et -10.</li>
 <li>Le support pour les attributs <code>font-weight</code> et <code>point-size</code> de l'élément <code>&lt;font&gt;</code> a été supprimé ; ils n'étaient pas standards et Gecko était le seul moteur qui les a supportés.</li>
 <li>Le <a href="http://www.opus-codec.org/">codec Opus</a> est à présent supporté pour l'audio dans les conteneurs Ogg pour les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}}.</li>
 <li>L'élément {{HTMLElement("source")}} supporte désormais l'attribut <code>media</code>.</li>
 <li>Les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} supportent désormais l'attribut <code>played</code>, qui fournit l'objet {{domxref("TimeRanges")}} listant les plages de temps des médias qui ont été lus jusqu'à présent.</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>La propriété {{cssxref("font-feature-settings")}} a été mise à jour selon la dernière syntaxe : <code>font-feature-settings: "lnum" 1;</code>.</li>
 <li>La propriété CSS {{cssxref("text-transform")}} a été étendue pour gérer correctement les ligatures Unicode (comme <code>ﬁ</code>).</li>
 <li>La propriété CSS {{cssxref("word-break")}} a été impémentée.</li>
 <li>La propriété {{cssxref("border-image")}} a été mise à jour selon la dernière spécification et n'a plus de préfixe. ({{bug(713643)}})</li>
 <li>La fonction <code>skew()</code> de {{cssxref("transform")}} retirée dans Firefox 14, a été restaurée pour la compatibilitée avec les sites existants. Toutefois, les auteurs sont invités à utiliser à la place les fonctions <code>skewX()</code> et <code>skewY()</code>.</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>Les méthodes <a href="/fr/docs/DOM/KeyboardEvent#getModifierState%28%29"><code>KeyboardEvent.getModifierState()</code></a> et <a href="/en/DOM/MouseEvent#getModifierState%28%29"><code>MouseEvent.getModifierState()</code></a> de DOM Events Level 3, qui vous permettent de demander l'état des touches de modification, comme <code>Ctrl</code> ou <code>Shift</code>, ont été implémentées ({{bug(630811)}} et {{bug(731878)}}). Mais le comportement est conforme au dernier brouillon de D3E. Donc, certains noms de touches de modification diffèrent de IE ({{bug(769190)}}).</li>
 <li>Sur les évènements de la souris, l'attribut <a href="/fr/docs/DOM/MouseEvent"><code>MouseEvent.buttons</code></a> pour interroger l'état des boutons de la souris, a été implémenté.</li>
 <li>Sur les évènements du clavier, l'attribut <a href="/fr/docs/DOM/KeyboardEvent#Attributes_location">KeyboardEvent.location</a> pour interroger l'emplacement de la clé (standard, à gauche ou à droite de la touche de modification, dans le pavé numérique), a été implémenté ({{bug(166240)}}).</li>
 <li>Le résultat de KeyboardEvent.keyCode a été calculé à partir de meilleures règles qui étaient presque identiques sous Windows/Linux/Mac. Et désormais elles sont disponibles sur certaines configurations de clavier qui n'ont pas la disposition ASCII sur Linux et Mac, comme l'arabe, le cyrillique, thaï et ainsi de suite. Voir <a href="/fr/docs/DOM/KeyboardEvent#Virtual_key_codes">le document des codes pour les touches virtuelles</a>.</li>
 <li>La méthode <a href="/fr/docs/DOM/range.detach"><code>range.detach()</code></a> a été tranformée en no-op et sera probablement supprimée dans le futur.</li>
 <li>La méthode <code>HTMLVideoElement.mozHasAudio()</code> a été implémentée. Elle indique si une piste audio est associée à un élément vidéo. ({{bug(480376)}})</li>
 <li>L'API <code>Performance</code> a une nouvelle méthode, <code>now()</code>, supportant les horloges haute résolution du type de <code>DOMHighResTimeStamp</code>. ({{bug(539095)}}).</li>
 <li>L'<a href="/fr/docs/API/WebSMS">API WebSMS</a> a été mise à jour et supporte à présent l'attribut <code>read</code> indiquant si un SMS est lu ou non.</li>
 <li>L'<a class="link-https" href="https://wiki.mozilla.org/WebAPI/FileHandleAPI">API FileHandle</a> a été implémentée.</li>
 <li>Le constructeur <a href="/fr/docs/DOM/Blob"><code>Blob</code></a> prend désormais <code>ArrayBufferView</code> comme un membre du paramètre <code><var>blobParts</var></code> en plus de <code>ArrayBuffer</code>. ({{bug(752402)}})</li>
 <li>{{domxref("DeviceLightEvent")}} spécifié dans <a href="http://www.w3.org/TR/ambient-light/">Ambient Light Events</a> a été implémenté.</li>
 <li>{{domxref("DeviceProximityEvent")}} et {{domxref("UserProximityEvent")}} de <a href="http://www.w3.org/TR/proximity/">Proximity Events</a> ont été implementés.</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li>Le support de l'interface <a href="/fr/docs/JavaScript_typed_arrays/DataView"><code>DataView</code></a> a été ajouté à partir de la spécification des tableaux typés. Cela fournit un accès de bas niveau aux données contenues dans un <a href="/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/ArrayBuffer"><code>ArrayBuffer</code></a>.</li>
 <li>Le support de <a href="/fr/docs/JavaScript/Reference/Global_Objects/Number/isNaN"><code>Number.isNaN</code></a> d'ECMAScript Harmony a été ajouté. ({{bug(749818)}}, {{bug(761495)}}, {{bug(761480)}})</li>
 <li>Le support du paramètre default d'ECMAScript Harmony a été ajouté. ({{bug(757676)}})</li>
 <li>Le support du paramètre rest d'ECMAScript Harmony a été ajouté. ({{bug(574132)}})</li>
</ul>

<h3 id="WebGL">WebGL</h3>

<ul>
 <li>Le support de l'extension <a href="/fr/docs/WebGL/Using_Extensions#WEBGL_compressed_texture_s3tc"><code>WEBGL_compressed_texture_s3tc</code></a> a été ajouté. Les textures compressées réduisent la quantité de mémoire nécessaire pour stocker une texture sur le GPU, ce qui permet d'utiliser des textures en plus hautes résolutions ou plus de textures de même résolution.</li>
</ul>

<h3 id="MathML">MathML</h3>

<ul>
 <li>Les opérateurs mathématiques peuvent désormais utiliser les polices téléchargeables spécifiés avec {{cssxref("@font-face")}}. Cela permet à <a class="link-https" href="https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/">l'extension MathML-fonts</a> de travailler également avec les opérateurs extensibles.</li>
 <li>L'attribut <code>selection</code> de {{MathMLElement("maction")}} est désormais uniquement pris en compte avec l'actiontype <code>toggle</code>.</li>
 <li><a href="http://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1">L'obsolète et contraignant namedspace</a> a été supprimé ({{bug("673759")}}).</li>
 <li>La prise en charge de la syntaxe des valeurs de <a href="/fr/docs/MathML/Attributes/Values">Length</a> et {{MathMLElement("mpadded")}} a été améliorée selon la spécification MathML3.</li>
 <li>Les nouveaux opérateurs MathML pour les maths arabes ont été ajoutés au dictionnaire opérateur ({{bug(757125)}}).</li>
</ul>

<h3 id="Réseau">Réseau</h3>

<ul>
 <li>Le support du protocole SPDY v3 a été lancé. Il est désactivé par défaut et peut être activé en définissant la préférence <code>network.http.spdy.enabled.v3</code> sur vrai. ({{bug(737470)}})</li>
</ul>

<h2 id="Changements_pour_les_développeurs_de_Mozilla_et_de_modules_complémentaires">Changements pour les développeurs de Mozilla et de modules complémentaires</h2>

<h3 id="Changements_dans_les_interfaces">Changements dans les interfaces</h3>

<dl>
 <dt>{{interface("nsIDOMWindowUtils")}}</dt>
 <dd><code>aModifiers</code> de <code>sendMouseEvent()</code>, <code>sendTouchEvent()</code>, <code>sendMouseEventToWindow()</code>, <code>sendMouseScrollEvent()</code> et <code>sendKeyEvent()</code> supporte toutes les touches de modification qui sont supportées par <a href="/fr/docs/DOM/KeyboardEvent#getModifierState%28%29"><code>KeyboardEvent.getModifierState()</code></a>. Utiliser les valeurs <code>MODIFIER_*</code>. Et désormais le 5ème paramètre de <code>sendKeyEvent()</code> est changé d'un <code>boolean</code> vers un <code>unsigned long</code>. Pour la compatibilité ascendante, si l'appelant passe <code>true</code> ou <code>false</code>, le comportement n'est pas changé. Ce changement permet aux appelants d'indiquer l'emplacement de la touche.</dd>
 <dt>{{interface("nsIBrowserHistory")}}</dt>
 <dd>La méthode <code>hidePage()</code> n'a jamais été implémentée, et a été entièrement supprimée dans cette version. La méthode <code>addPageWithDetails()</code> a également été supprimée dans le cadre des travaux pour faire une API <a href="/fr/docs/Places">Places</a> asynchrone ; à la place, utilisez plutôt {{ifmethod("mozIAsyncHistory", "updatePlaces")}}. De plus, l'attribut <code>count</code> a été retiré, il ne renvoyé pas un comptage réel à certain moment (à la place, il indiqué simplement si les entrées existées). Vous pouvez utiliser à la place {{ifattribute("nsINavHistoryService", "hasHistoryEntries")}}.</dd>
</dl>

<dl>
 <dt>{{interface("inIDOMUtils")}}</dt>
 <dd>La méthode <code>parseStyleSheet()</code> permet d'ajouter et d'analyser des feuilles de style.</dd>
</dl>

<h4 id="Nouvelles_interfaces">Nouvelles interfaces</h4>

<dl>
 <dt>{{interface("nsISpeculativeConnect")}}</dt>
 <dd>Fournit un moyen de suggérer la couche réseau que vous allez être susceptibles de demander l'ouverture d'une connexion à un URI donné dans un futur proche. Cela permet à la couche réseau d'entamer le processus, qui a parfois une forte latence, d'ouvrir une nouvelle connexion réseau à l'avance.</dd>
</dl>

<h4 id="Interfaces_supprimées">Interfaces supprimées</h4>

<p>Les interfaces suivantes ont été supprimées.</p>

<ul>
 <li>{{interface("nsIGlobalHistory")}}</li>
</ul>

<h2 id="Voir_également">Voir également</h2>

<p>{{Firefox_for_developers('14')}}</p>
