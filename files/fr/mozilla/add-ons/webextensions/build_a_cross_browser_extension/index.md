---
title: Construction d'une extension multi-navigateur
slug: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
tags:
  - Add-ons
  - Extensions
  - Guide
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension
original_slug: Mozilla/Add-ons/WebExtensions/construction_extension_cross_browser
---
<p>{{AddonSidebar()}}</p>

<p>L'introduction de l'API WebExtension a créé un paysage plus homogène pour le développement des extensions des navigateurs. Cependant, parmi les navigateurs qui utilisent les API d'extensions (les principaux étant Chrome, Firefox, Opera et Edge), il existe des différences à la fois dans l'implémentation de l'API et dans la couverture des différentes fonctionnalités. Par ailleurs, Safari utilise ses propres extensions Safari Extensions JS.</p>

<p>Maximiser la portée de votre extension de navigateur signifie la développer pour au moins deux navigateurs différents, voire plus. Cet article examine six des principaux défis rencontrés lors de la création d'une extension multi-navigateur, et dans chaque cas, suggère comment relever ce défi.</p>

<p>Cet article ne traite pas de la création d'extensions de navigateur pour Safari. Il est possible de partager certaines ressources avec une extension Safari, comme des images et du contenu HTML. Cependant, le développement JavaScript doit être entrepris comme un projet de développement séparé, à moins que vous ne souhaitiez créer votre propre prothèse (<i>polyfill</i>).</p>

<h2 id="Cross-platform_extension_coding_hurdles">Obstacles pour les extensions multi-navigateur</h2>

<p>Il existe six domaines que vous devez aborder lorsque vous souhaitez développer une extension multiplateforme :</p>

<ul>
 <li>L'espace de noms utilisé par l'API</li>
 <li>La gestion asynchrone des événements par l'API</li>
 <li>La couverture des fonctions de l'API</li>
 <li>Les clés du manifeste</li>
 <li>L'empaquetage d'une extension</li>
 <li>La publication</li>
</ul>

<h3 id="API_namespace">Les espaces de noms des API</h3>

<p>Deux espaces de noms (<i>namespaces</i>) sont utilisés pour les quatre principaux navigateurs :</p>

<ul>
 <li><code>browser.*</code>, l'espace standard  de l'API, utilisé par Firefox et Edge.</li>
 <li><code>chrome.*</code>, utilisé par Chrome et Opera.</li>
</ul>

<p>Firefox prend également en charge l'espace de noms <code>chrome.*</code> pour les API compatibles avec Chrome, principalement pour faciliter le <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension">portage</a>. Cependant, il est préférable d'utiliser l'espace de nommage <code>browser.*</code>. En plus d'être la norme proposée, <code>browser.*</code> utilise des promesses — un mécanisme moderne et pratique pour gérer les événements asynchrones.</p>

<p>Ce n'est que dans les extensions les plus triviales que l'espace de nom sera probablement le seul problème multiplateforme à résoudre. Il est donc rarement, voire jamais, utile d'essayer d'aborder cette seule question. La meilleure approche consiste à traiter ce problème avec une gestion asynchrone des événements.</p>

<h3 id="API_asynchronous_event_handling">Gestion asynchrone des événements</h3>

<p>Il existe deux approches pour gérer les événements asynchrones utilisées par les quatre principaux navigateurs :</p>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">Les promesses</a>, le standard proposé pour l'API d'extensions, utilisé par Firefox.</li>
 <li>Les <i>callbacks</i> (fonctions de rappel), utilisés par Chrome, Edge, et Opera.</li>
</ul>

<p>Firefox prend également en charge les <i>callbacks</i> pour les API qui prennent en charge l'espace de noms <code>chrome.*</code>. Cependant, il est recommandé d'utiliser des promesses (et l'espace de noms <code>browser.*</code> du navigateur). Des promesses ont été adoptées dans le cadre de la norme proposée. Cette approche simplifie grandement la gestion asynchrone des événements, en particulier lorsque vous devez enchaîner des événements.</p>

<div class="note">
 <p><strong>Note :</strong> Si vous n'êtes pas familier avec les différences entre ces deux méthodes, jetez un coup d'oeil à <a href="https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee">Apprendre à connaître le JavaScript asynchrone : Rappels, promesses et synchronisation/attente</a> ou la page sur <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses">l'utilisation des promesses</a> de MDN.</p>
</div>

<h4 id="The_WebExtension_browser_API_Polyfill">Polyfill pour l'API WebExtension du navigateur</h4>

<p>Alors, comment tirer profit des promesses facilement, alors que Firefox est le seul navigateur qui les supporte ? La solution est de coder pour Firefox en utilisant des promesses et d'utiliser le <a href="https://github.com/mozilla/webextension-polyfill/"><i>polyfill</i> pour l'API WebExtension du navigateur</a>.</p>

<p>Pour utiliser le <i>polyfill</i>, installez-le dans votre environnement de développement à l'aide de npm ou téléchargez-le directement depuis les <a href="https://github.com/mozilla/webextension-polyfill/releases">versions de GitHub</a></p>

<p>Vous référencerez alors <code>browser-polyfill.js</code> dans :</p>

<ul>
 <li><code>manifest.json</code>, pour mettre à disposition des scripts de fond et de contenu.</li>
 <li>Les documents HTML, tels que les popups <code>browserAction</code> ou les pages d'onglet.</li>
 <li>L'appel à <code>executeScript</code> dans les scripts de contenu dynamiquement injectés chargés par <code>tabs.executeScript</code>, où il n'a pas été chargé en utilisant une déclaration <code>content_scripts</code> dans manifest.json.</li>
</ul>

<p>Ainsi, par exemple, ce code <code>manifest.json</code> rend le <i>polyfill</i> disponible pour vos scripts d'arrière-plan :</p>

<pre class="brush: json">{
 // ...
 "background": {
   "scripts": [
     "browser-polyfill.js",
     "background.js"
   ]
 }
}</pre>

<p>Votre but est de vous assurer que le <i>polyfill</i> s'exécute dans votre extension avant tout autre script qui attend le <code>browser.*</code> API namespace s'exécute.</p>

<div class="note">
 <p><strong>Note :</strong> Pour plus de détails et d'informations sur l'utilisation du <i>polyfill</i> avec un module bundler, voir le <a href="https://github.com/mozilla/webextension-polyfill/blob/master/README.md">readme du projet sur GitHub.</a></p>
</div>

<p>Il existe d'autres options de <i>polyfill</i> mais, au moment où nous écrivons ces lignes, aucune ne fournit une couverture équivalente à ce <i>polyfill</i> pour l'API WebExtension du navigateur. Ainsi, lorsque vous n'avez pas choisi Firefox comme cible initiale de navigateur, vos options sont d'accepter les limitations des <i>polyfills</i> alternatifs, de porter sur Firefox et d'ajouter la prise en charge multi-navigateur, ou de développer votre propre <i>polyfill</i>.</p>



<h3 id="API_function_coverage">Couverture des différentes implémentations d'API</h3>

<p>Les différences de fonctionnalités offertes par les différents navigateurs peuvent se répartir en trois catégories :</p>

<ol>
 <li><strong>L'absence de prise en charge d'une fonctionnalité à part entière.</strong></li>
 <li><strong>Les variations de prise en charge pour certains aspects d'une fonctionnalité.</strong> Au moment où nous écrivons ces lignes, Firefox ne prend pas en charge la méthode <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onButtonClicked#browser_compatibility">onButtonClicked</a></code> mais est le seul navigateur qui prend en charge <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/notifications/onShown#browser_compatibility">onShown</a></code>.</li>
 <li><strong>Les fonctionnalités propriétaires spécifiques à chaque navigateur.</strong> Au moment où nous écrivons ces lignes, les conteneurs sont une fonctionnalité spécifique à Firefox qui est donc le seul à prendre en charge la fonction <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities#browser_compatibility">contextualIdentities</a></code>.</li>
</ol>

<p>Vous pouvez trouver plus de détails sur la prise en charge de l'API pour les différents navigateurs sur <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">La prise en charge des API JavaScript WebExtension pour les différents navigateurs</a>. Les informations de compatibilité sont également disponibles sur chaque page de la <a href="/fr/docs/Mozilla/Add-ons/WebExtensions/API">référence des API JavaScript WebExtension</a>.</p>

<h4 id="Handling_API_differences">Handling API differences</h4>

<p>Une approche simple pour gérer ces différences consiste à limiter les fonctionnalités utilisées par une extension afin que celle-ci puisse fonctionner sur différents navigateurs. Toutefois, en pratique, cette approche se révèlera souvent trop restrictive.</p>

<p>À la place, on peut utiliser des implémentations alternatives ou des fonctionnalités de recours dans ces cas. Cela peut également s'avérer utile pour gérer les différences d'implémentation entre les différentes versions d'un même navigateur</p>

<p>L'utilisation de vérifications à l'exécution quant à la disponibilité d'une fonctionnalité est une approche recommandée qui permet d'implémenter ou d'utiliser des alternatives à bon escient. L'avantage d'une vérification à l'exécution est que si la fonction devient disponible, il n'est pas nécessaire de mettre à jour ou de redistribuer l'extension à nouveau.</p>

<p>Le fragment de code suivant vous permet de vérifier l'existance d'une fonction lors de l'exécution :</p>

<pre class="brush: js">if (typeof &lt;function&gt; === "function") {
   // safe to use the function
}</pre>

<h3 id="Manifest_keys">Les clés de manifeste</h3>

<p>Les différences pour les clés du fichier <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json">manifest.json</a></code> se répartissent en trois catégories :</p>

<ol>
 <li><strong>Les attributs d'information sur l'extension.</strong> Firefox et Opera incluent la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer#browser_compatibility">developer</a></code> pour fournir des détails quant à la développeuse ou au développeur de l'application et la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author#browser_compatibility">author</a></code>.</li>
 <li><strong>Les fonctionnalités rattachées à l'extension.</strong> Edge ne prenait pas en charge la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#browser_compatibility">commands</a></code> qui permet de définir des raccourcis clavier pour une extension.</li>
 <li><strong>Le caractère optionnel d'une clé.</strong> Ainsi, la clé <code><a href="/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author#browser_compatibility">author</a></code> était obligatoire dans Edge mais optionnelle pour les autres navigateurs.</li>
</ol>

<p>Les informations quant à la compatibilité de chaque clé de manifeste sont incluses dans les pages de référence correspondantes.</p>

<p>Le fichier <code>manifest.json</code> évolue peu entre les différentes versions (exception faite du numéro de version). Il est parfois judicieux d'avoir une version statique différente pour chaque navigateur.</p>

<h3 id="Extension_packaging">Empaquetage des extensions</h3>

<p>L'empaquetage d'une extension pour la distribuer via les plateformes des navigateurs est uniforme .</p>

<ul>
 <li>Firefox, Chrome, et Opera utilise une archive ZIP dans laquelle le fichier  <code>manifest.json</code> doit être à la racine.</li>
 <li>Pour Microsoft, des étapes supplémentaires sont nécessaires.</li>
</ul>

<p>Pour plus de détails sur les méthodes d'empaquetage, veuillez vous référer aux documentations de chaque portail de distribution.</p>

<h3 id="Extension_publishing">Publication des extensions</h3>

<p>Chaque navigateur majeur possède une plateforme de distribution d'extension. Chacun de ces magasins effectue une revue de l'extension pour vérifier la présence de vulnérabilités.</p>

<p>Aussi, il faudra gérer l'inscription et la mise à jour d'une extension séparément pour chaque distributeur. Dans certains cas, il est possible d'uploader son extension avec un utilitaire.</p>

<p>Le tableau qui suit récapitule les approches et fonctionnalités pour chaque plateforme de distribution :</p>

<table>
 <thead>
  <tr>
   <th>Navigateur</th>
   <th>Frais d'enregistrement</th>
   <th>Utilitaire pour l'<i>upload</i></th>
   <th>Processus de revue avant la publication</th>
   <th>Authentification multi-facteur</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th>Firefox</th>
   <td>Non</td>
   <td><a href="https://extensionworkshop.com/documentation/develop/web-ext-command-reference/">web-ext</a></td>
   <td>Automatique, quelques secondes<sup>1</sup></td>
   <td>Non</td>
  </tr>
  <tr>
   <th>Chrome</th>
   <td>Oui</td>
   <td>Oui</td>
   <td>Automatique, moins d'une heure</td>
   <td>Oui</td>
  </tr>
  <tr>
   <th>Opera</th>
   <td>Non</td>
   <td>Non</td>
   <td>Manuel, aucun délai garanti</td>
   <td>Non</td>
  </tr>
  <tr>
   <th>Edge</th>
   <td>Oui</td>
   <td>Non</td>
   <td>Manuel, jusqu'à 72 heures<sup>2</sup></td>
   <td>Oui</td>
  </tr>
 </tbody>
</table>

<p><sup>1</sup> Une revue manuelle de l'extension a lieu après la publication et peut entraîner la suspension de l'extension dans l'attente des corrections nécessaires aux problèmes éventuellement trouvés.</p>

<p><sup>2</sup> Au moment où nous écrivons ces lignes, Microsoft approuvait uniquement la publication d'extensions pré-approuvées.</p>

<h3 id="Other_considerations">Autres considérations</h3>

<h4 id="Extension_naming">Nommage des extensions</h4>

<p>Microsoft requiert un nom unique pour chaque extension et permet de revendiquer un ou plusieurs noms pour une extension via Windows Dev Center. Aussi, il peut être prudent de réserver un nom pour votre extension dès à présent, même si vous ne prévoyez pas de prendre en charge Edge immédiatement.</p>

<p>Aucune des autres plateformes n'impose de restrictions quant au nom de l'extension.</p>

<h4 id="Version_numbering">Numérotation des versions</h4>

<p>Les plateformes de distribution pour Firefox et Chrome requièrent un numéro de version distinct et croissant pour chaque <i>upload</i>. Cela signifie qu'on ne peut pas revenir à un numéro de version antérieur s'il y a un problème sur une version.</p>

<h4 id="Share_content">Partage des ressources</h4>

<p>Lorsque vous développez une extension pour Safari, vous pouvez réutiliser les éléments suivants entre vos différentes implémentations :</p>

<ul>
 <li>Images</li>
 <li>HTML</li>
 <li>CSS</li>
</ul>

<h2 id="Conclusion">Conclusion</h2>

<p>Lorsqu'on souhaite développer une extension pour les différents navigateurs, on pourra résoudre certaines des différences d'implémentation en visant initialement Firefox et en utilisant <a href="https://github.com/mozilla/webextension-polyfill/">le <i>polyfill</i> pour les API WebExtension</a>. Avec cette approche, on pourra bénéficier des fonctionnalités d'API proches du standard et exploiter les promesses pour la gestion asynchrone des évènements.</p>

<p>La majeure partie du travail d'adaptation consistera à gérer les variations de fonctionnalités entre les différentes implémentations et les différences du fichier manifeste (<code>manifest.json</code>) ; ce dernier pouvant être créé manuellement. L'empaquetage et la distribution contiennent également quelques différences en fonction des plateformes.</p>

<p>Vous pouvez utiliser <a href="https://github.com/notlmn/browser-extension-template">browser-extension-template</a> pour rapidement mettre en place un projet d'extension, l'empaqueter et la publier.</p>

<p>Avec les informations de cet article, vous devriez être en mesure de créer une extension qui fonctionne correctement sur l'ensemble des principaux navigateurs, permettant ainsi au plus grand nombre d'utiliser votre extension.</p>
