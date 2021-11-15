---
title: Firefox 21 pour les développeurs
slug: Mozilla/Firefox/Releases/21
tags:
  - Firefox
  - Firefox 21
translation_of: Mozilla/Firefox/Releases/21
original_slug: Mozilla/Firefox/Versions/21
---
<div>{{FirefoxSidebar}}</div>

<p>Firefox 21 est sorti le 14 mai 2013. Cette page résume les principaux changements dans Firefox 21 qui sont utiles aux développeurs, que vous soyez développeur web, développeur Firefox et Gecko, ou développeur d'add-ons.</p>

<h2 id="Changement_pour_les_développeurs_Web">Changement pour les développeurs Web</h2>

<h3 id="HTML">HTML</h3>

<ul>
 <li>L'attribut {{htmlattrxref("scoped", "style")}} a été ajouté à l'élément {{HTMLElement("style")}}. Il permet d'inclure des styles qui sont isolés du reste du document. Ces styles peuvent être sélectionnés par le pseudo élément CSS {{cssxref(":scope")}} ajouté dans Firefox 20. ({{bug("508725")}}).</li>
 <li>Le nouvel élément HTML {{HTMLElement("main")}} a été implémenté ({{bug("820508")}}).</li>
</ul>

<h3 id="JavaScript">JavaScript</h3>

<ul>
 <li><a href="/fr/docs/E4X">E4X</a>, une ancienne extension JavaScript, a été retirée. Implementée seulement par Gecko, elle n'a jamais reçu suffisament de soutien ({{bug("788293")}}).</li>
 <li><a href="/fr/docs/JavaScript/Reference/Global_Objects/parseInt">parseInt</a> ne traite plus les chaînes de caractères commençant par "0" comme un octal ({{bug("786135")}}).</li>
</ul>

<h3 id="CSS">CSS</h3>

<ul>
 <li>La valeur <code>none</code> pour {{cssxref("user-select", "-moz-user-select")}} a maintenant le même comportement que la valeur <code>-moz-none</code>, alignant  Gecko sur WebKit (Chrome, Safari), Presto (Opera) et Trident (Internet Explorer) ({{bug("816298")}}).</li>
 <li>Dans des contenus XHTML, la valeur <code>auto</code> de {{cssxref("hyphens", "-moz-hyphens")}} appliquait incorrectement des règles de césure quand le langage n'était pas explicitement défini. Cela a été corrigé par ({{bug("702121")}}).</li>
 <li>Une valeur <code>auto</code> a été ajoutée pour la propriété CSS {{cssxref("-moz-orient")}}. La valeur <code>auto</code> est équivalente à <code>horizontal</code> quand appliquée à {{HTMLElement("meter")}} et {{HTMLElement("progress")}} ({{bug("835883")}}).</li>
</ul>

<h3 id="DOM">DOM</h3>

<ul>
 <li>La propriété <code>origin</code> a été ajoutée à {{domxref("window.location")}} ({{bug("828261")}}).</li>
 <li>Les méthodes <code>valueAsDate</code> et <code>valueAsNumber</code> ont été ajoutées à <code>&lt;input type="time"&gt;</code> ({{bug("781570")}}).</li>
 <li>Les attributs <code>min</code> et <code>max</code> sont maintenant aussi appliquées à <code>&lt;input type="time"&gt;</code> ({{bug("781572")}}).</li>
 <li>De nouveaux keyCodes pour contrôler le volume sont supportées ({{bug("674739")}}).</li>
 <li>De nouveaux keyCodes pour des anciennes disposition de touches de claviers tels que AS/400 sont maintenant supportées sur Windows et Linux ({{bug("833719")}}).</li>
 <li>Différentes valeurs keyCode pour des touches OEM spécifiques sur Windows sont maintenant supportées ({{bug("833719")}}).</li>
 <li>La fonction <a href="/fr/docs/DOM/window.crypto.getRandomValues"><code>window.crypto.getRandomValues</code></a> est maintenant implémentée ({{bug("440046")}}).</li>
</ul>

<h3 id="SVG">SVG</h3>

<ul>
 <li>La propriété {{cssxref("paint-order")}} a été implémentée ({{bug("828805")}}).</li>
</ul>

<h3 id="Networking">Networking</h3>

<ul>
 <li>Nous continuons à faire évoluer notre implémentation de CSP pour qu'elle corresponde à la spécification CSP 1.0, qui vient d'atteindre la statut de Candidate Recommendation :
  <ul>
   <li>Le support de l'entête HTTP <code>Content-Security-Policy</code> conformément à la spécification (en plus de l'entête expérimental <code>X-Content-Security-Policy</code>) a été ajouté ({{bug("783049")}}). <strong>Note : </strong>le patch pour ce nouvel entête est arrivé dans Firefox 21, mais il a été désactivé dans les compilations ({{bug("842657")}}).</li>
  </ul>
 </li>
</ul>

<h3 id="Worker">Worker</h3>

<ul>
 <li>Les fonctions {{domxref("window.URL.createObjectURL", "URL.createObjectURL")}} et {{domxref("window.URL.revokeObjectURL", "URL.revokeObjectURL")}} font maintenant partie des <a href="/fr/docs/Web/Guide/Needs_categorization/Functions_available_to_workers">fonctions disponibles au workers</a>.</li>
</ul>

<h2 id="Changement_pour_les_add-ons_et_les_développeurs_Mozilla">Changement pour les add-ons et les développeurs Mozilla</h2>

<ul>
 <li>Les applications FUEL ne peuvent plus utiliser le service Livemarks ({{bug("834492")}}). Le service Livemarks est déprécié et mis en retrait en faveur de l'interface async.</li>
 <li><code>resource:///modules/</code> et <code>resource://gre/modules/</code> ne sont plus identiques ({{bug("755724")}}). Ce changement a eu lieu à cause du travail pour la version metro de Firefox. Si vous chargez des modules en utilisant <code>resource:///modules/</code>, vous devriez vérifier si vous ne préférez pas utiliser <code>resource://gre/modules/</code> à la place. Notez que certains modules ont migrés de Firefox à Toolkit ({{bug("840287")}} et {{bug("811548")}} ont déplacé respectivement <code>NewTabUtils.jsm</code> et les modules thumbnail).</li>
 <li>Le SDK Add-on est maintenant inclus dans Firefox ({{bug("731779")}})</li>
 <li>L'API History a vu plusieurs API dépréciées, retirées :
  <ul>
   <li>Remplacées par <code>mozIAsyncFavicons</code> :
    <ul>
     <li><code>nsIFaviconService::setFaviconUrlForPage</code></li>
     <li><code>nsIFaviconService::setFaviconData</code></li>
     <li><code>nsIFaviconService::getFaviconData</code></li>
     <li><code>nsIFaviconService::getFaviconForPage</code></li>
     <li><code>nsIFaviconService::setAndLoadFaviconForPage</code></li>
     <li><code>nsIFaviconService::getFaviconImageForPage</code></li>
     <li><code>nsIFaviconService::getFaviconDataAsDataURL</code></li>
    </ul>
   </li>
   <li>Remplacées par <code>mozIAsyncLivemarks </code>:
    <ul>
     <li><code>nsILivemarkService::*</code></li>
     <li><code>PlacesUtils.itemIsLivemark</code></li>
     <li><code>PlacesUtils.nodeIsLivemarkContainer</code></li>
     <li><code>PlacesUtils.nodeIsLivemarkItem</code></li>
    </ul>
   </li>
   <li>Retire seulement le 3e arguments :
    <ul>
     <li><code>PlacesUIUtils.showBookmarkDialog</code></li>
    </ul>
   </li>
   <li>Plus implementé par Places, utilisez <code>mozIAsyncHistory</code> à la place :
    <ul>
     <li><code>nsIGlobalHistory2::addURI</code></li>
     <li><code>nsIGlobalHistory2::isVisited</code></li>
     <li><code>nsIGlobalHistory2::setPageTitle</code></li>
    </ul>
   </li>
   <li>Plus nécessaire, utilisez <code>onDeleteURI</code> ou <code>onItemRemoved</code>:
    <ul>
     <li><code>nsINavHistoryObserver::OnBeforeDeleteURI</code></li>
     <li><code>nsINavBookmarkObserver::OnBeforeItemRemoved</code></li>
    </ul>
   </li>
   <li>Jamais implementé correctement :
    <ul>
     <li><code>nsINavHistoryFullVisitResultNode</code></li>
    </ul>
   </li>
   <li>Déprécié, utilisez <code>mozIAsyncHistory::updatePlaces</code> à la place :
    <ul>
     <li><code>nsINavHistoryService::AddVisit</code></li>
    </ul>
   </li>
  </ul>
 </li>
 <li><code>nsIHttpChannel.redirectTo</code> a été ajouté pour permettre de rediriger les canaux HTTP sans faire des bidouilles fragiles.</li>
</ul>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="http://www.mozilla.org/en-US/firefox/21.0/releasenotes/">Firefox 21 Release Notes</a></li>
 <li><a href="/fr/docs/Site_Compatibility_for_Firefox_21">Site Compatibility for Firefox 21</a></li>
 <li><a href="https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/">Add-on Compatibility for Firefox 21</a></li>
</ul>

<h3 id="Anciennes_versions">Anciennes versions</h3>

<div>{{Firefox_for_developers('20')}}</div>
