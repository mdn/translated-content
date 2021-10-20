---
title: '<script> : l''élément de script'
slug: Web/HTML/Element/script
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/script
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;script&gt;</code></strong> est utilisé pour intégrer ou faire référence à un script exécutable. Cela fait généralement référence à du code JavaScript mais ce peut également être un autre type de script (par exemple <a href="/fr/docs/Apprendre/WebGL">WebGL</a>).</p>

<p>Les scripts sans attribut <code>async</code> ou <code>defer</code> sont chargés et exécutés immédiatement avant que le navigateur continue l'analyse de la page.</p>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("async")}}</dt>
 <dd><p>Cet attribut booléen indique si le navigateur doit, dans la mesure du possible, exécuter les scripts de manière asynchrone. <strong><em>Cet attribut ne doit pas être utilisé si l'attribut <code>src</code> est absent (c'est-à-dire pour les scripts « inline » déclarés dans les éléments), dans ce cas il n'aurait aucun effet.</em></strong></p>
 <p>Par défaut, les navigateurs prennent l'hypothèse la plus pessimiste et chargent les scripts de façon synchrone (autrement dit, le comportement par défaut est <code>async="false"</code>) lors de l'analyse du document HTML.</p>
 <p>Les scripts insérés dynamiquement (via {{domxref("document.createElement()")}}) sont exécutés de façon asynchrone par défaut. Pour activer le mode d'exécution synchrone, il faudra explicitement indiquer <code>async="false"</code>.</p>
 <p>Se référer au tableau de compatibilité ci-après pour les informations concernant la prise en charge par les navigateurs. Voir aussi la page sur <a href="/fr/docs/Games/Techniques/Async_scripts">les scripts asynchrones avec asm.js</a>.</p></dd>
 <dt>{{htmlattrdef("crossorigin")}}</dt>
 <dd>Les balises de <code>script</code> classiques enverront un minimum d'informations à {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}} pour les scripts qui ne respectent pas les contrôles standard du <a href="/fr/docs/HTTP/Access_control_CORS">CORS</a>. Afin de disposer de plus de renseignements sur les erreurs pour les sites utilisant des domaines séparés pour des documents statiques, on pourra utiliser cet attribut. Voir <a href="/fr/docs/Web/HTML/Reglages_des_attributs_CORS">la page de réglages des attributs CORS</a> pour plus d'explications quant aux valeurs valides.</dd>
 <dt>{{htmlattrdef("defer")}}</dt>
 <dd><p>Cet attribut booléen permet d'indiquer au navigateur que le script doit être exécuté après l'analyse du document et avant l'évènement {{event("DOMContentLoaded")}}. <strong><em>Cet attribut ne doit pas être utilisé si l'attribut <code>src</code> est absent (c'est-à-dire pour les scripts contenus déclarés dans les éléments), dans ce cas il n'aurait aucun effet.</em></strong> Pour obtenir un effet similaire avec les scripts insérés de façon dynamique, on utilisera explicitement <code>async=false</code>. Les scripts qui possèdent un attribut <code>defer</code> seront exécutés dans l'ordre dans lequel ils apparaissent dans le document.</p>
 <p>Les scripts qui utilisent l'attribut <code>defer</code> empêche le déclenchement de l'évènement <code>DOMContentLoaded</code> tant que le script n'a pas été chargé et que son évaluation n'est pas terminée.</p></dd>
 <dt>{{htmlattrdef("integrity")}}</dt>
 <dd>Cet attribut contient des métadonnées que l'agent utilisateur peut vérifier afin de contrôler qu'une ressource téléchargée n'a pas été modifiée de façon frauduleuse. Pour plus d'informations, consulter <a href="/fr/docs/Web/Security/Subresource_Integrity">la page relative à l'intégrité des sous-ressources</a>.</dd>
 <dt>{{htmlattrdef("nomodule")}}</dt>
 <dd>Cet attribut booléen indique que le script ne doit pas être exécuté dans le navigateur si celui prend en charge <a href="https://tech.mozfr.org/post/2015/08/21/ES6-en-details-%3A-les-modules">les modules ES6</a>. En pratique, de tels scripts seront utilisés pour couvrir les cas où le navigateur ne prend pas en charge les modules JavaScript.</dd>
 <dt>{{htmlattrdef("nonce")}}</dt>
 <dd>Un <em>nonce</em> cryptographique utilisé pour inscrire les scripts en ligne sur une liste blanche pour la règle <code>script-src</code> de la CSP (<em>Content Security Policy</em>). Le serveur doit générer un nonce unique chaque fois qu'il transmet une règle de sécurité. Ce nonce ne doit pas pouvoir être deviné car sinon, il devient trivial d'outrepasser la règle de sécurité.</dd>
 <dt>{{htmlattrdef("referrerpolicy")}}</dt>
 <dd><p>Une chaîne de caractères qui indique le référent (<em>referrer</em>) à utiliser lors de la récupération du script :</p>
 <ul>
  <li><code>no-referrer</code> signifie que l'en-tête {{HTTPHeader("Referer")}} ne sera pas envoyé.</li>
  <li><code>no-referrer-when-downgrade</code> signifie qu'aucune en-tête <code>Referrer</code> ne sera envoyé lorsqu'on navigue vers une origine qui n'utilise pas TLS (HTTPS). C'est le comportement par défaut de l'agent utilisateur.</li>
  <li><code>origin</code> signifie que le référent sera l'origine de la page (c'est-à-dire son schéma, son hôte et le port utilisé).</li>
  <li><code>origin-when-cross-origin</code> signifie que les navigations vers d'autres origines seront limitées aux schémas, hôtes et ports. Les navigations sur la même origine inclueront le chemin explicite du référent.</li>
  <li><code>same-origin</code> un référent sera envoyé pour <a href="/fr/docs/Web/JavaScript/Same_origin_policy_for_JavaScript">les origines du même site</a> mais les requêtes multi-origines ne contiendront pas d'informations de référent.</li>
  <li><code>strict-origin</code> seule l'origine du document est envoyée comme référent lorsque le protocole de sécurité est le même (HTTPS→HTTPS). L'origine n'est pas envoyée lorsque la destination est moins sécurisée (HTTPS→HTTP).</li>
  <li><code>strict-origin-when-cross-origin</code> : l'URL complète est envoyée pour les requêtes de même origine, seule l'origine est envoyée lorsque le protocole de sécurité est le même (HTTPS→HTTPS) et aucun en-tête n'est envoyé pour une destination moins sécurisée (HTTPS→HTTP).</li>
  <li><code>unsafe-url</code> signifie que le référent incluera l'origine et le chemin (mais pas le fragment, le mot de passe ou le nom utilisateur). Cette valeur n'est pas sûre car elle peut entraîner des fuites d'origine ou de chemin provenant de ressources sécurisées avec TLS vers des origines insécures.</li>
 </ul>

 <p>Utiliser une chaîne vide (<code>""</code>) correspond à la valeur par défaut et à la valeur utilisée si <code>referrerpolicy</code> n'est pas pris en charge. Si cet attribut n'est pas explicitement défini sur l'élément <code>&lt;script&gt;</code>, ce dernier respectera la politique défine à un niveau supérieur (sur le document ou sur le domaine). Si une telle politique n'est pas disponible, la chaîne vide sera considérée comme équivalente à <code>no-referrer-when-downgrade</code>.</p>
 </dd>
 <dt>{{htmlattrdef("src")}}</dt>
 <dd>Cet attribut définit l'URI d'un script externe. Cela peut être utilisé pour insérer des scripts autrement qu'en les insérant à même le document. <strong><em>Les éléments <code>script</code> avec un attribut <code>src</code> défini ne doivent pas avoir de script compris dans leurs balises. Cela peut causer un comportement inattendu où le contenu du fichier référencé est chargé mais où le contenu de l'élément est ignoré.</em></strong></dd>
 <dt>{{htmlattrdef("type")}}</dt>
 <dd>
 <p>Cet attribut indique le type de script. La valeur de cet attribut peut appartenir à l'une de ces catégories :</p>

 <ul>
  <li><strong>Correspondant à un type MIME JavaScript ou absent :</strong> Cela indique que le script est en JavaScript. La spécification HTML5 conseille aux auteurs d'omettre cet attribut plutôt que de fournir un type MIME redondant. Pour les navigateurs plus anciens, cela indiquait le langage de script du code embarqué. Les types MIME correspondant à JavaScript sont <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types">énumérés dans la spécification</a>.</li>
  <li><strong><code>module</code> :</strong> Le code sera traité comme un module JavaScript. Le traitement du script n'est pas affecté par les attributs <code>charset</code> et <code>defer</code>. Pour plus d'informations sur l'utilisation des modules, voir le guide sur <a href="/fr/docs/Web/JavaScript/Guide/Modules">les modules JavaScript</a>.</li>
  <li><strong>Toute autre valeur :</strong> Le contenu embarqué est considéré comm un bloc de donnée et ne sera pas traité par le navigateur. Les développeurs doivent utiliser un type MIME valide qui n'est pas un type MIME JavaScript afin d'indiquer de tels blocs de donnée. Dans ce cas, l'attribut <code>src</code> sera ignoré.</li>
 </ul>

 <div class="note">
 <p><strong>Note :</strong> Avec Firefox, on pouvait indiquer la version JavaScript d'un élément <code>&lt;script&gt;</code> en incluant un paramètre non-standard <code>version</code> à l'intérieur de <code>type</code> (ex. <code>type="text/javascript;version=1.8"</code>). Cette spécificité a été retirée avec Firefox 59 (cf. {{bug(1428745)}}).</p>
 </div>
 </dd>
</dl>

<h3 id="Attributs_dépréciés">Attributs dépréciés</h3>

<dl>
 <dt>{{htmlattrdef("charset")}} {{Deprecated_inline}}</dt>
 <dd>Si cet attribut est présent, sa valeur doit correspondre (quelle que soit la casse) à "<code>utf-8"</code>. Cet attribut est superflu car les documents doivent utiliser UTF-8 et car les éléments <code>script</code> héritent de l'encodage du document.</dd>
 <dt>{{htmlattrdef("language")}} {{Deprecated_inline}}</dt>
 <dd>Comme l'attribut <code>type</code>, cet attribut spécifie le langage de script utilisé. Cependant, contrairement à l'attribut <code>type</code> les valeurs possibles de cet attribut n'ont jamais été normalisées. Il est recommandé d'utiliser l'attribut <code>type</code> plutôt que celui-là.</dd>
</dl>

<h2 id="Notes">Notes</h2>

<p>Le script doit être servi avec le type MIME <code>text/javascript</code>. Cependant, les navigateurs appliquent cette règle avec une certaine flexibilité et ne bloquent que si le script est servi avec un type image (<code>image/*</code>), vidéo (<code>video/*</code>) ou audio (<code>audio/*</code>) ou CSV (<code>text/csv</code>). Si le script est bloqué, un évènement {{event("error")}} sera déclenché sur l'élément, sinon, l'évènement {{event("load")}} sera envoyé.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<pre class="brush: html">&lt;!-- HTML4 et (x)HTML --&gt;
&lt;script type="text/javascript" src="javascript.js"&gt;&lt;/script&gt;

&lt;!-- HTML5 --&gt;
&lt;script src="javascript.js"&gt;&lt;/script&gt;
</pre>

<h3 id="Utilisation_des_modules_et_d'une_alternative">Utilisation des modules et d'une alternative</h3>

<p>Les navigateurs qui prennent en charge le type <code>module</code> prennent également en charge un attribut <code>nomodule</code> qui permet aux navigateurs qui ne gèrent pas les modules d'utiliser un autre script.</p>

<pre class="brush: html">&lt;script type="module" src="main.mjs"&gt;&lt;/script&gt;
&lt;script nomodule src="fallback.js"&gt;&lt;/script&gt;
</pre>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_m.C3.A9ta-donn.C3.A9es">contenu de méta-données</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td>Script dynamique tel que <code>text/javascript</code>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_m.C3.A9ta-donn.C3.A9es">contenu de méta-données</a> ou tout élément acceptant du <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Aucun.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLScriptElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG", "scripting.html#the-script-element", "&lt;script&gt;")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Retrait de l'attribut {{HTMLAttrxRef("charset", "script")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.3", "semantics-scripting.html#the-script-element", "&lt;script&gt;")}}</td>
   <td>{{Spec2("HTML5.3")}}</td>
   <td>Retrait de l'attribut {{HTMLAttrxRef("charset", "script")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.2", "semantics-scripting.html#the-script-element", "&lt;script&gt;")}}</td>
   <td>{{Spec2("HTML5.2")}}</td>
   <td>Ajout de la valeur <code>module</code> pour {{HTMLAttrxRef("type", "script")}}</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "semantics-scripting.html#the-script-element", "&lt;script&gt;")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "scripting-1.html#script", "&lt;script&gt;")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("HTML4.01", "interact/scripts.html#h-18.2.1", "&lt;script&gt;")}}</td>
   <td>{{Spec2("HTML4.01")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("Subresource Integrity", "#htmlscriptelement", "&lt;script&gt;")}}</td>
   <td>{{Spec2("Subresource Integrity")}}</td>
   <td>Ajout de l'attribut {{HTMLAttrxRef("integrity", "script")}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.script",2)}}</p>

<h3 id="Notes_de_compatibilité">Notes de compatibilité</h3>

<p>Pour les anciens navigateurs qui ne prennent pas en charge l'attribut <code>async</code> attribute, les scripts insérés lors de l'analyse (<em>parsing</em>) bloquent l'analyseur, les scripts insérés par d'autres scripts s'exécutent en asynchrone sous IE et WebKit et en synchrone sous Opera et sous Firefox pour les versions antérieures à Firefox 4.0.</p>

<p>Sous Firefox 4.0, la propriété <code>async</code> du DOM vaut <code>true</code> par défaut pour les scripts créés avec <code>document.createElement("script").async</code> afin que le comportement par défaut corresponde au comportement d'IE et de WebKit. Afin que les scripts insérés par des scripts externes soient lancés dans l'ordre d'insertion, on définira <code>.async=false</code> pour les scripts dont on souhaite conserver l'ordre d'exécution.</p>

<p><code>document.write()</code> ne doit jamais être appelé sur un script asynchrone avec <code>async</code>. Sous Gecko 1.9.2, si on appelle <code>document.write()</code>, cela aura un effet imprévisible. Pour Gecko 2.0, appeler <code>document.write()</code> depuis un script asynchrone n'aura aucun effet (en dehors d'afficher un message d'erreur dans la console).</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("document.currentScript")}}</li>
 <li><a href="/fr/docs/Web/HTML/Formats_date_heure_HTML">Les formats de date et d'heure utilisés en HTML</a></li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Modules">Guide sur les modules JavaScript</a></li>
 <li><a href="https://pie.gd/test/script-link-events/">Tableau de compatibilité de Ryan Grove pour les évènements liés aux éléments <code>&lt;script&gt;</code> et <code>&lt;link&gt;</code></a></li>
 <li><a href="https://flaviocopes.com/javascript-async-defer/">Un article de Flavio Copes sur le chargement de ressources JavaScript et les différences entre <code>async</code> et <code>defer</code> (en anglais)</a></li>
</ul>
