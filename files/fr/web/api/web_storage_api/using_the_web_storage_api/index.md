---
title: Utiliser l'API Web Storage
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
tags:
  - API
  - Guide
  - Stockage
  - Stockage Web
  - localStorage
translation_of: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---
<p>L'API "Web Storage" fournit des mécanismes par lesquels les navigateurs web peuvent stocker des paires de clé-valeur, d'une manière plus intuitive qu'en utilisant des cookies. Cet article décrit pas à pas comment se servir de cette technologie facile d'utilisation.</p>

<h2 id="Concepts_de_base">Concepts de base</h2>

<p>Les objets de stockages sont de simples magasins clé-valeur, similaires aux objets, mais restant intacts après des chargements de page. La clé peut être une chaîne de caractères ou des entiers, mais la valeur sera toujours une chaîne. Vous pouvez accéder à ces valeurs comme pour un objet ou avec les méthodes getItem() et setItem(). Les trois lignes suivantes vont enregistrer la couleur de la même façon :</p>

<pre class="brush: js">localStorage.colorSetting = '#a4509b';
localStorage['colorSetting'] = '#a4509b';
localStorage.setItem('colorSetting', '#a4509b');
</pre>

<div class="blockIndicator note">
<p><strong>Note :</strong> Il est recommandé d'utiliser l'API "Web Storage" (<code>setItem</code>, <code>getItem</code>, <code>removeItem</code>, <code>key</code>, <code>length</code>) pour prévenir les <a href="http://www.2ality.com/2012/01/objects-as-maps.html">embûches</a> associées à l'utilisation d'objets capable de stocker des couples clé-valeur.</p>
</div>

<p>Les deux principaux mécanismes internes du Stockage Web sont :</p>

<ul>
 <li><strong><code>sessionStorage</code></strong> qui maintient un espace de stockage, séparé pour chaque origine différente, disponible le temps de la session de la page (tant que le navigateur reste lancé, incluant les rechargements de la page et les restaurations).</li>
 <li><strong><code>localStorage</code></strong> qui tient le même rôle mais persiste même après le redémarrage du navigateur web.</li>
</ul>

<p>Ces mécanismes sont disponibles via les propriétés {{domxref("Window.sessionStorage")}} et {{domxref("Window.localStorage")}}  (plus précisément, dans les navigateurs web le supportant, l'objet <code>Window</code>  implémente les objets <code>WindowLocalStorage</code> et <code>WindowSessionStorage</code>, sur lesquels les propriétés <code>localStorage</code> et <code>sessionStorage</code> se basent) — l'appel d'un des deux va créer une instance de l'objet {{domxref("Storage")}}, dans lequel des données pourront être ajoutées, récupérées et supprimées. Pour <code>sessionStorage</code> et <code>localStorage</code>, un objet de stockage différent est utilisé pour chaque origine — ils fonctionnent et sont contrôlés séparément.</p>

<p>Donc, par exemple, un appel initial de <code>localStorage</code> sur un document va retourner un objet {{domxref("Storage")}} ; un appel de <code>sessionStorage</code> sur un document va retourner un objet {{domxref("Storage")}} différent. Les deux peuvent se manipuler de la même façon, mais séparément.</p>

<h2 id="Détection_de_la_fonction_localStorage">Détection de la fonction localStorage</h2>

<p>Pour être capable d'utiliser localStorage, nous devons d'abord vérifier qu'il est supporté et disponible dans la session de navigation actuelle.</p>

<h3 id="Test_du_support_et_disponibilité">Test du support et disponibilité</h3>

<p>Les navigateurs qui supportent localStorage ont sur l'objet windows une propriété nommée localStorage. Cependant, pour différentes raisons, la vérification seule de l'existnce de cette propriété peut provoquer des erreurs. .Son absence n'est pas non plus une garantie de son indisponibilité, certains navigateurs offrent un paramètre pour désactiver localStorage. Donc un navigateur <em>peut</em> supporter localStorage, mais peut ne pas le rendre <em>disponible</em> aux scripts de la page. Un exemple de cela est Safari, qui en mode de navigation privée fournit un objet localStorage vide dont le quota est nul, le rendant inutilisable. Notre fonction de détection doit prendre en compte ces scénarios.</p>

<p>Voici une fonction qui va détecter que localStorage est supporté mais aussi disponible:</p>

<pre class="brush: js">function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException &amp;&amp; (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &amp;&amp;
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}</pre>

<p>Et voici comment l'utiliser :</p>

<pre class="brush: js">if (storageAvailable('localStorage')) {
	// Nous pouvons utiliser localStorage
}
else {
	// Malheureusement, localStorage n'est pas disponible
}</pre>

<p>Au lieu de cela, vous pouvez tester la disponibilité de sessionStorage en appelant <code>storageAvailable('sessionStorage')</code>. </p>

<p>Vous pouvez retrouver ici <a href="https://gist.github.com/paulirish/5558557">une brève histoire de la détection de localStorage</a>.</p>

<h2 id="Un_exemple_simple">Un exemple simple</h2>

<p>Pour illustrer certains usages typiques du Stockage Web, nous avons créé un exemple simple ingénieusement appelé <strong>Web Storage Demo</strong>. La <a href="https://mdn.github.io/dom-examples/web-storage/">page de lancement</a> fournit des contrôles afin de personnaliser la couleur, la police de caractère et l'image de décoration:</p>

<p><img alt="" src="landing.png"></p>

<p>Quand vous choisissez une option différente, la page est mise à jour instantanément; de plus, vos choix sont stockés avec localStorage, donc quand vous quitterez la page et la rechargerez plus tard, vos choix auront été mémorisés.</p>

<p>Nous avons aussi fournit une <a href="https://mdn.github.io/dom-examples/web-storage/event.html">page pour l'événement émis</a> - Si vous chargez cette page dans un autre onglet, puis faite les changements de votre choix sur la page de démarrage, vous allez voir une information liée à l'événement {{domxref("StorageEvent")}} qui a été lancé.</p>

<p><img alt="" src="event-output.png"></p>

<div class="note">
<p><strong>Note :</strong> En plus de l'affichage en temps réel des pages en utilisant les liens ci-dessus, vous pouvez aussi <a href="https://github.com/mdn/dom-examples/tree/master/web-storage">regarder le code-source</a>.</p>
</div>

<h2 id="Tester_si_le_stockage_a_déjà_été_rempli">Tester si le stockage a déjà été rempli</h2>

<p>Pour démarrer avec <a href="https://github.com/mdn/dom-examples/blob/master/web-storage/main.js">main.js</a>, nous allons tester que l'objet de stockage a bien été rempli (c-à-d, que l'on a déjà accédé à la page):</p>

<pre class="brush: js">if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}</pre>

<p>La méthode {{domxref("Storage.getItem()")}} est utilisée pour obtenir les données de l'élément depuis le stockage ; dans ce cas nous testons l'existence de l'élément <code>bgcolor</code>; si il n'existe pas nous lançons <code>populateStorage()</code> pour ajouter des valeurs personnalisées dans le stockage. Si il y a déjà des valeurs ici, nous lançons <code>setStyles()</code> pour mettre à jour le style de la page avec les valeurs stockées.</p>

<p><strong>Note</strong>: Vous pouvez aussi utiliser {{domxref("Storage.length")}} pour tester si l'objet de stockage est vide ou non.</p>

<h2 id="Obtenir_les_valeurs_du_stockage">Obtenir les valeurs du stockage</h2>

<p>Comme vu ci dessus, les valeurs peuvent être recupérées du stockage en utilisant {{domxref("Storage.getItem()")}}. La méthode prend en argument la clé de l'élément, et retourne la valeur. Par exemple:</p>

<pre class="brush: js">function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}</pre>

<p>Ici, les trois premières lignes vont chercher les valeurs dans le stockage local. Puis, nous définissons les valeurs exposées par le formulaire avec ces valeurs, afin qu'elles persistent quand on recharge la page. Enfin, nous mettons à jour le style et l'image de décoration de la page, ainsi nos options de personnalisation reviennent lors du rechargement de la page.</p>

<h2 id="Enregistrer_une_valeur_dans_le_stockage">Enregistrer une valeur dans le stockage</h2>

<p>{{domxref("Storage.setItem()")}} est aussi bien utilisée pour la création d'une donnée,  que pour la modification d'une donnée existante (si cette donnée existe déja). Elle prend deux arguments — la clé de l'élément à créer/modifier, et la valeur associée à stocker.</p>

<pre class="brush: js">function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);

  setStyles();
}</pre>

<p>La fonction <code>populateStorage()</code> définit trois éléments dans le stockage local — la couleur de fond, la police de caractère et le chemin de l'image. Ensuite elle lance la fonction <code>setStyles()</code> pour mettre à jour le style de la page, etc.</p>

<p>Nous avons aussi inclu un handler <code>onchange</code> sur chaque élément du formulaire, ainsi les données et le style sont mis à jour quelque soit la valeur du formulaire qui a changé:</p>

<pre class="brush: js">bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;</pre>

<h2 id="Répondre_aux_changements_du_stockage_avec_StorageEvent">Répondre aux changements du stockage avec StorageEvent</h2>

<p>L'événement {{event("StorageEvent")}} est lancé dès lors qu'un changement est fait sur l'objet {{domxref("Storage")}}. Cela ne va pas marcher sur la même page qui a provoqué le changement: c'est vraiment un moyen pour que les autres pages du domaine qui utilisent le stockage local puissent se synchroniser avec tous les changements qui ont été fait.</p>

<p>Les pages des autres domaines ne peuvent pas accéder aux mêmes objets de stockage.</p>

<p>Sur la page d'événement (voir <a href="https://github.com/mdn/web-storage-demo/blob/gh-pages/event.js">events.js</a>) le seul JavaScript est :</p>

<pre class="brush: js">window.addEventListener('storage', function(e) {
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = e.storageArea;
});</pre>

<p>Ici nous avons ajouté un event listener à l'objet <code>window </code>qui se lance quand l'objet {{domxref("Storage")}}, associée à l'origine courante, est modifié. Comme vous pouvez le voir ci-dessus, l'objet événement associé à cet événement a de nombreuses propriétés contenant des informations utiles: la clé de la donnée qui a changé, l'ancienne valeur avant le changement, la nouvelle valeur après le changement, l'URL du document qui a changé le stockage et l'objet stockage lui-même.</p>

<h2 id="Supprimer_des_données">Supprimer des données</h2>

<p>l'API de Stockage Web fournit aussi un couple de méthodes simples pour supprimer des données. Nous ne les utilisons pas dans notre démo, mais elles sont simples à ajouter dans votre projet :</p>

<ul>
 <li>{{domxref("Storage.removeItem()")}} prend un seul argument — la clé de l'élément que vous souhaitez supprimer — et le supprime de l'objet de stockage pour le domaine.</li>
 <li>{{domxref("Storage.clear()")}} ne prend pas d'argument, et vide l'ensemble des données de l'objet de stockage pour le domaine.</li>
</ul>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Storage')}}</td>
   <td>{{Spec2('Web Storage')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<h3 id="Window.localStorage"><code>Window.localStorage</code></h3>

<p>{{Compat("api.Window.localStorage")}}</p>

<h3 id="Window.sessionStorage"><code>Window.sessionStorage</code></h3>

<p>{{Compat("api.Window.sessionStorage")}}</p>

<p>Tous les navigateurs ont des niveaux de capacité différents pour localStorage et sessionStorage. Voici un <a href="http://dev-test.nemikor.com/web-storage/support-test/">détail des capacités de stockage pour différents navigateurs</a>.</p>

<div class="note">
<p><strong>Note :</strong> Depuis iOS 5.1, Safari Mobile stocke les données de localStorage dans le repertoire de cache, qui est parfois sujet à des nettoyages, à la demande de l'OS, typiquement quand l'espace restant est faible.</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Web_Storage_API">Page API du Stockage Web</a></li>
</ul>
