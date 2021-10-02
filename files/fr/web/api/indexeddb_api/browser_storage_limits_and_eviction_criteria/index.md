---
title: Limites de stockage du navigateur et critères d'éviction
slug: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
tags:
  - Base de données
  - IndexedDB
  - LRU
  - Limites
  - Stockage
  - eviction
translation_of: Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria
original_slug: Web/API/API_IndexedDB/Browser_storage_limits_and_eviction_criteria
---
<div>{{DefaultAPISidebar("IndexedDB")}}</div>

<div class="note">
<p><strong>Note :</strong> Il existe un certain nombre de technologies Web qui stockent des données d'un type ou d'un autre du côté client (c'est-à-dire sur le disque local). Le processus par lequel le navigateur calcule l'espace alloué au stockage de données Web et les données à supprimer quand la limite est atteinte n'est pas simple et diffère d'un navigateur à l'autre. Cet article tente d'expliquer comment tout cela fonctionne.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Les informations ci-dessous devraient être assez précises pour la plupart des navigateurs modernes, mais les spécificités du navigateur sont évoquées quand elles sont connues. Opera et Chrome devraient se comporter de la même manière dans tous les cas. Mais <a href="http://www.opera.com/mobile/mini">Opera Mini</a> (encore basé sur presto du côté serveur) ne stocke aucune donnée sur le client.</p>
</div>

<h2 id="Les_différents_types_de_stockage_des_données">Les différents types de stockage des données</h2>

<p>Même dans le même navigateur, en utilisant la même méthode de stockage, il existe différentes classes de stockage de données à comprendre. Cette section traite des différents types que vous pouvez trouver dans différents navigateurs.</p>

<p>Généralement, les deux principaux types de stockage sont les suivants :</p>

<ul>
 <li>Persistant : ce sont des données qui doivent être conservées pendant une longue période. Elles ne seront évincéés que si l'utilisateur le choisit (par exemple, dans Firefox, il existe un bouton "nettoyer stockage" dans la boîte de dialogue d'informations sur la page pour chaque page).</li>
 <li>Temporaire : il s'agit de données qui n'ont pas besoin de persister très longtemps. Elles seront évacuées en-dessous d'un minimum d'utilisation ({{anch("LRU policy")}}) lorsque les limites de stockage sont atteintes.</li>
</ul>

<p>Par défaut, le stockage temporaire sera utilisé dans la plupart des contextes d'utilisation (par exemple, des applications Web standard) et le persistant pour les applications installées (par exemple, les applications Firefox installées sur le système d'exploitation Firefox OS / Firefox de bureau, les applications Chrome).</p>

<h3 id="Spécificités_de_Firefox">Spécificités de Firefox</h3>

<p>Dans Firefox, vous pouvez choisir le type de stockage que vous souhaitez utiliser en incluant une option propriétaire — <code>storage</code> — lorsque vous créez une base de données IndexedDB en utilisant {{domxref ("IDBFactory.open ()", "open ()")}} :</p>

<ul>
 <li>
  <pre class="brush: js"><code>var request = indexedDB.open("myDatabase", { version: 1, storage: "persistent" });</code></pre>
 </li>
 <li>
  <pre class="brush: js"><code>var request = indexedDB.open("myDatabase", { version: 1, storage: "temporary" });</code></pre>
 </li>
</ul>

<p>Dans Firefox, quand le stockage persistant est choisi, l'utilisateur reçoit une fenêtre de dialogue d'interface utilisateur pour l'avertir que ces données persisteront et lui demander s'il en est satisfait.</p>

<p>Les données de stockage temporaire ne provoquent aucune fenêtre de dialogue vers l'utilisateur, mais il y a des {{anch("Limites de stockage")}}.</p>

<h3 id="Default_storage_dans_Firefox_(stockage_par_défaut)">"Default storage" dans Firefox <em>(stockage par défaut)</em></h3>

<p>C'est le troisième type de stockage à envisager dans Firefox — "Default storage" <em>(stockage par défaut)</em>.  C'est une option par défaut, utilisée quand vous ne spécifiez pas le paramètre <code>storage</code>  vu ci-dessus. Les données du stockage par défaut se comportent différemment selon les circonstances : assimilées aux données d'un stockage persistant pour les applications installées de Firefox OS, ou d'un stockage temporaire pour tout autre type d'utilisation.</p>

<h2 id="Où_sont_stockées_les_données">Où sont stockées les données ?</h2>

<p>Chaque type de stockage représente un référentiel distinct, voici la cartographie réelle des répertoires sous le profil Firefox d'un utilisateur (d'autres navigateurs peuvent différer légèrement) :</p>

<ul>
 <li><code>&lt;profile&gt;/storage</code> — le principal, le plus haut niveau de répertoire pour le stockage maintenu par le " quota manager " <em>(manager de quotas)</em> (voir ci-dessous).</li>
 <li><code>&lt;profile&gt;/storage/permanent</code> — répertoire de stockage des données persistantes.</li>
 <li><code>&lt;profile&gt;/storage/temporary</code> — répertoire de stockage des données temporaires.</li>
 <li><code>&lt;profile&gt;/storage/default</code> — répertoire de stockage des données par défaut.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Depuis l'introduction de l' <a href="/en-US/docs/Web/API/Storage_API">API Storage</a> , le dossier "permanent" peut être considéré comme obsolète, il n'est plus utilisé que pour les bases de données de type persistant IndexedDB. Peu importe le mode, "best-effort"<em> (meilleur effort)</em> ou "persistant", les données sont stockées sous <code>&lt;profile&gt;/storage/default</code>.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Dans Firefox, vous pouvez trouver votre dossier profil en entrant : <code>support</code> dans la barre d'URL et en appuyant sur le bouton <em>Show in..</em>. <em>(</em><em>Afficher dans ...)</em> (par exemple, <em>"Show in Finder"</em> sur Mac OS X) à côté du titre <em>"Profile Folder" (</em><em>dossier de profil)</em> .</p>
</div>

<div class="note">
<p><strong>Note :</strong> Si vous regardez dans votre profil les répertoires de données stockées, vous pouvez voir un quatrième dossier : <code>persistent</code> . À la base, le dossier <code>persistent</code> a été renommé <code>permanent,</code> il y a quelques temps, pour faciliter les mises à niveau / migrations.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Les utilisateurs ne doivent pas ajouter leurs propres répertoires ou fichiers sous <code>&lt;profile&gt;/storage</code> . Cela entraînerait l'échec de l'initialisation du stockage ; par exemple {{domxref ("IDBFactory.open ()", "open ()")}} déclencherait un événement d'erreur.</p>
</div>

<h2 id="Limites_de_stockage">Limites de stockage</h2>

<p>L'espace de stockage maximal du navigateur est dynamique  — il est basé sur la taille de votre disque dur. La limite globale est calculée sur la base de 50% de l'espace disque libre. Dans Firefox, un outil interne du navigateur appelé " Quota Manager " <em>(gestionnaire de quotas)</em> surveille la quantité d'espace disque utilisée par chaque origine et supprime les données si nécessaire.</p>

<p>Donc, si votre disque dur est de 500 Go, le stockage total d'un navigateur est de 250 Go. S'il est dépassé, une procédure appelée <strong>"origin eviction"</strong> <em>(</em><em>éviction d'origine)</em> entre en jeu, en supprimant la valeur totale de l'origine jusqu'à ramener le niveau de stockage en-dessous de la limite. La suppression d'une base de données d'origine peut entraîner des problèmes d'incohérence.</p>

<p>Il y a aussi une autre limite appelée <strong>group limit</strong> — ceci est défini comme 20% de la limite globale. Chaque origine fait partie d'un groupe (groupe d'origines). Il existe un groupe pour chaque domaine eTLD + 1.</p>

<p>Par exemple :</p>

<ul>
 <li><code>mozilla.org</code> — groupe1, origine1</li>
 <li><code>www.mozilla.org</code> — groupe1, origine2</li>
 <li><code>joe.blogs.mozilla.org</code> — groupe1, origine3</li>
 <li><code>firefox.com</code> — groupe2, origine4</li>
</ul>

<p>Ces groupes, <code>mozilla.org</code>, <code>www.mozilla.org</code>, et <code>joe.blogs.mozilla.org</code> peuvent utiliser globalement un maximum de 20% de la limite globale. <code>firefox.com</code> a un maximum distinct de 20%.</p>

<p>Les deux limites reagissent différemment quand la limite est atteinte :</p>

<ul>
 <li>La limite de groupe est également appelée «limite dure»: elle ne déclenche pas l'éviction d'origine.</li>
 <li>La limite globale est une «limite douce» car il est possible que certains espaces soient libérés et que l'opération puisse se poursuivre.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Si la limite de groupe est dépassée, ou si l'éviction d'origine ne crée pas assez d'espace libre, le navigateur lance  <code>QuotaExceededError</code>.</p>
</div>

<h2 id="Politique_LRU">Politique LRU</h2>

<p>Lorsque l'espace disque disponible est rempli, le gestionnaire de quotas commence à effacer les données sur la base de la politique LRU — l'origine la moins utilisée sera d'abord supprimée, puis la suivante, jusqu'à ce que le navigateur ne dépasse plus la limite.</p>

<p>Nous traçons le "dernier temps d'accès" pour chaque origine utilisant le stockage temporaire. Une fois que la limite globale du stockage temporaire est atteinte, nous essayons de trouver toutes les origines actuellement inutilisées (c'est-à-dire, sans onglets ou applications ouverts qui conservent des bases de données ouvertes). Celles-ci sont ensuite triées sur le dernier accès. Les origines les moins récemment utilisées sont ensuite supprimées jusqu'à ce qu'il y ait suffisamment d'espace pour répondre à la demande qui a déclenché cette éviction d'origine.</p>

<h2 id="Quelles_technologies_utilisent_le_stockage_de_données_du_navigateur">Quelles technologies utilisent le stockage de données du navigateur ?</h2>

<p>Dans Firefox, les technologies suivantes utilisent le stockage de données du navigateur pour stocker des données au besoin. Nous les qualifions de "quota clients" dans ce contexte :</p>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB">IndexedDB</a></li>
 <li><a href="http://asmjs.org/">asm.js</a> caching</li>
 <li><a href="/fr/docs/Web/API/Cache">Cache API</a></li>
</ul>

<p>Le «dernier temps d'accès» des origines est mis à jour lorsque l'un de ces éléments est activé / désactivé. L'éviction d'origine supprimera les données pour tous ces "quota clients".</p>

<p>Dans Chrome / Opera, l'API " Quota Management" gère les quotas pour <a href="/en-US/docs/Web/HTML/Using_the_application_cache">AppCache</a>, <a href="/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a>, WebSQL et <a href="/en-US/docs/Web/API/File_System_API">File System API</a>.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://www.html5rocks.com/en/tutorials/offline/quota-research/">Working with quota on mobile browsers</a>, de<a href="http://blog.agektmr.com"> Eiji Kitamura.</a> Une analyse détaillée du stockage côté client sur les navigateurs mobiles.</li>
 <li><a href="https://developers.google.com/web/updates/2011/11/Quota-Management-API-Fast-Facts">Quota Management API : Fast Facts</a>, de<a href="http://blog.agektmr.com"> Eiji Kitamura.</a> Un regard sur l'API Quota Management dans Chrome / Blink (qui devrait également inclure Opera aussi.)</li>
</ul>
