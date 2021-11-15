---
title: Différences entre les implémentations d'API
slug: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
tags:
  - Guide
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations
original_slug: Mozilla/Add-ons/WebExtensions/Differences_entre_les_implementations_api
---
<div>{{AddonSidebar}}</div>

<p>L'API d'extension de navigateur est encore un <a href="https://browserext.github.io/browserext/">standard emergent</a>. Par conséquent, bien qu'il soit pris en charge par la plupart des principaux navigateurs, dont Firefox, Chrome, Edge et Opera, il existe des différences entre les différentes implémentations. Cela signifie que certaines modifications peuvent être nécessaires pour implémenter votre extension pour plusieurs navigateurs</p>

<p>Parmi les différents navigateurs supportant l'API d'extension, Firefox est le plus conforme à la norme émergente, et est donc votre meilleur point de départ pour développer des extensions de navigateur.</p>

<p>Les différences entre les implémentations d'API d'extensions de navigateurs se répartissent en quatre domaines : l'espace de noms, la gestion asynchrone des événements, la couverture API et les clés de manifest.</p>

<h2 id="Espace_de_nommage">Espace de nommage</h2>

<p>Vous faites référence à toutes les fonctions de l'API des extensions en utilisant un espace de noms, par exemple, <code>browser.alarms.create({delayInMinutes});</code> créerait une alarme dans Firefox qui se déclenche après le temps spécifié dans <code>delayInMinutes</code>.</p>

<p>Deux espaces de noms API sont utilisés :</p>

<ul>
 <li>
  <p><code>chrome</code> utilisé dans Chrome et Opera.</p>
 </li>
 <li>
  <p><code>browser</code> utilisé dans Firefox et Edge.</p>
 </li>
</ul>

<h2 id="Traitement_asynchrone_des_événements">Traitement asynchrone des événements</h2>

<p>JavaScript fournit plusieurs façons de gérer les événements asynchrones. La norme API d'extensions proposée est d'utiliser des promises. L'approche des promises offre des avantages significatifs lorsqu'il s'agit d'appels d'événements asynchrones en chaîne</p>

<p>Si vous n'êtes pas familier avec la façon dont JavaScript peut gérer les événements asynchrones ou les promesses, jetez un coup d'oeil sur <a href="https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee">Apprendre à connaître Javascript Asynchrone : Callbacks, Promises et Async/Await</a> ou la page des <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses">promises d'utilisation</a> de MDN.</p>

<p>Firefox est le seul navigateur majeur à avoir implémenté des promises pour les extensions API. Tous les autres navigateurs utilisent des callbacks.</p>

<h2 id="Couverture_API">Couverture API</h2>

<p>Les différences dans l'implémentation des fonctions de l'API d'extension entre les navigateurs se répartissent en trois grandes catégories :</p>

<ul>
 <li>
  <p>Manque de soutien pour l'ensemble d'une fonction. Par exemple, au moment d'écrire ces lignes, Edge ne prend pas en charge la fonction de <code><a href="/fra/Add-ons/WebExtensions/API/privacy">vide privée</a></code>.</p>
 </li>
 <li>
  <p>Variations dans la prise en charge des fonctions au sein d'une fonction. Par exemple, au moment d'écrire ces lignes, Firefox ne supporte pas la fonction de <code><a href="/fr/Add-ons/WebExtensions/API/notifications">notification</a></code>  <a href="/fr/Add-ons/WebExtensions/API/notifications/onButtonClicked">onButtonClicked</a> alors que Firefox est le seul navigateur qui supporte <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown">onShown</a>.</p>
 </li>
 <li>
  <p>Fonctions propriétaires, supportant des fonctions spécifiques au navigateur. Par exemple, au moment d'écrire ces lignes, containers est une fonctionnalité spécifique à Firefox supportée par la fonction <a href="/fr/Add-ons/WebExtensions/API/contextualIdentities">contextualIdentities</a>.</p>
 </li>
</ul>

<h2 id="Touches_Manifest">Touches Manifest</h2>

<p>Les différences entre les clés <a href="/fr/Add-ons/WebExtensions/manifest.json">clés manifest.json</a> prises en charge par les navigateurs se répartissent en deux grandes catégories :</p>

<ul>
 <li>
  <p>Attributs d'information sur les extensions. Par exemple, au moment d'écrire ces lignes, Firefox et Opera incluent la clé de <a href="/fr/Add-ons/WebExtensions/manifest.json/developer">développent</a> permettant d'ajouter des détails sur le développeur de l'extension, ainsi que sur l'auteur, à enregistrer.</p>
 </li>
 <li>
  <p>Fonctions d'extension. Par exemple, au moment d'écrire ces lignes, Edge ne prenait pas en charge les clés de <a href="/fr/Add-ons/WebExtensions/manifest.json/commands">commande</a> qui permettent de définir des raccourcis clavier pour une extension.</p>
 </li>
</ul>

<h2 id="Plus_d'information">Plus d'information</h2>

<p>Vous trouverez des informations plus détaillées sur les différences entre les extensions de navigateur prises en charge par les fonctionnalités API dans le domaine :</p>

<ul>
 <li><a href="/fr/Add-ons/WebExtensions/Chrome_incompatibilities">Incompatibilités Chrome</a></li>
 <li><a href="/fr/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">Prise en charge des API Javascript par le navigateur</a></li>
 <li><a href="/fr/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json">Compatibilité du navigateur pour manifest.json</a></li>
</ul>
