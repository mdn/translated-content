---
title: Manipuler l'historique du navigateur
slug: Web/API/History_API
tags:
  - API
  - DOM
  - Historique
translation_of: Web/API/History_API
original_slug: Web/Guide/DOM/Manipuler_historique_du_navigateur
---
<p>L'objet DOM {{ domxref("window") }} fournit un accès à l'historique du navigateur via l'objet {{ domxref("window.history", "history") }}. Il expose un ensemble de méthodes et de propriétés qui permettent d'avancer et de reculer dans l'historique de l'utilisateur ainsi que -- à partir d'HTML5 -- manipuler le contenu de l'ensemble de l'historique.</p>

<h2 id="Se_déplacer_dans_l'historique">Se déplacer dans l'historique</h2>

<p>Avancer ou reculer dans l'historique de l'utilisateur est possible en utilisant les méthodes <code>back()</code>, <code>forward()</code> et <code>go()</code>.</p>

<h3 id="Avancer_et_reculer">Avancer et reculer</h3>

<p>Pour reculer dans l'historique, il vous suffit de faire :</p>

<pre class="brush: js">window.history.back();
</pre>

<p>Cela agira exactement comme si l'utilisateur cliquait sur le bouton Retour de la barre d'outils de son navigateur.</p>

<p>De la même manière, il est possible d'avancer (comme si l'utilisateur cliquait sur le bouton Avancer) :</p>

<pre class="brush: js">window.history.forward();
</pre>

<h3 id="Se_déplacer_à_un_élément_précis_de_l'historique">Se déplacer à un élément précis de l'historique</h3>

<p>Vous pouvez utiliser la méthode <code>go()</code> pour charger une page spécifique de l'historique de la session, identifiée par sa position relative par rapport à la page en cours (la page courante étant, évidemment, d'index 0).</p>

<p>Pour reculer d'une page (l'équivalent d'un appel à <code>back()</code>):</p>

<pre class="brush: js"><code>window.history.go(-1);</code>
</pre>

<p>Pour avancer d'une page, comme en appelant <code>forward()</code>:</p>

<pre class="brush: js"><code>window.history.go(1);</code>
</pre>

<p>De la même manière, vous pouvez avancer de 2 pages en passant la valeur 2, et ainsi de suite.</p>

<p>Vous pouvez déterminer le nombre de pages de l'historique en accédant à la valeur de la propriété length (<em>longeur</em>) :</p>

<pre class="brush: js">var numberOfEntries = window.history.length;
</pre>

<div class="note">
  <p><strong>Note :</strong> Internet Explorer supporte le passage d'une URL sous forme de chaîne de caractères comme paramètre de la méthode <code>go()</code>; ce comportement est non standard et non supporté par Gecko.</p>
</div>

<h2 id="Ajouter_et_modifier_des_entrées_de_l'historique">Ajouter et modifier des entrées de l'historique</h2>

<p>{{ gecko_minversion_header("2") }}</p>

<p>HTML5 a introduit les méthodes <a href="/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur#La_méthode_pushState()">history.pushState()</a> et <a href="/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur#La_méthode_replaceState()">history.replaceState()</a>, qui permettent, respectivement, d'ajouter et de modifier des entrées de l'historique. Ces méthodes fonctionnent conjointement avec l'événement <a href="/fr/docs/Web/API/WindowEventHandlers/onpopstate">onpopstate</a>.</p>

<p>L'utilisation de <code>history.pushState()</code> change le référent créé habituellement dans l'en-tête HTTP pour les objets <a href="/en/DOM/XMLHttpRequest"><code>XMLHttpRequest</code></a>, chaque fois que son état a été changé. Le référent sera l'URL de la page dont l'objet window est <code>this</code> au moment de la création de l'objet <a href="/en/DOM/XMLHttpRequest"><code>XMLHttpRequest</code></a>.</p>

<h3 id="Exemple_de_la_méthode_pushState()">Exemple de la méthode pushState()</h3>

<p>Supposons que http://mozilla.org/foo.html exécute la séquence JavaScript suivante :</p>

<pre class="brush: js">var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
</pre>

<p>Cela va provoquer l'apparition dans la barre de navigation de http://mozilla.org/bar.html, mais ne provoquera pas le chargement effectif de <code>bar.html</code> ni même le test d'existence de <code>bar.html</code>.</p>

<p>Supposons à présent que l'utilisateur accède à la page http://google.com, puis clique sur l'icône "Recul". La barre de navigation va alors afficher http://mozilla.org/bar.html, et si vous lisez l'<code>history.state</code>, vous obtiendrez le <code>stateObj</code>.  L'événement <code>popstate</code> ne sera pas lancé car la page a été rechargée. La page elle-même ressemblera à <code>bar.html</code>.</p>

<p>Si on clique à nouveau sur Recul, l'URL de la barre de navigation va se changer en http://mozilla.org/foo.html et le document va recevoir un autre événement <code>popstate</code>, qui comportera, cette fois, un état null. Dans ce cas aussi, revenir en arrière ne modifie pas le contenu du document par rapport à ce qu'il était à l'étape précédente, cela bien qu'il ait pu être mis à jour manuellement sur réception de l'événement <code>popstate</code>.</p>

<h3 id="La_méthode_pushState()">La méthode pushState()</h3>

<p><code>La méthode pushState()</code> utilise trois paramètres : un objet état, un titre (qui est pour l'instant ignoré) et, éventuellement, une URL. Examinons chacun de ces paramètres en détail :</p>

<ul>
 <li>
  <p><strong>state object</strong> (<em><strong>objet état</strong></em>) — L'objet état est un objet JavaScript qui est associé à une nouvelle entrée de l'historique par <code>pushState()</code>. Chaque fois qu'un utilisateur ouvre une nouvelle page, un événement <code>popstate</code> est émis et la propriété <code>state</code> de l'événement contient une copie de l'objet état de ce nouvel élément de l'historique.<br>
   L'objet état peut être tout ce qui peut être sous forme de liste. Puisque Firefox sauvegarde les objets état sur le disque de l'utilisateur de façon à ce qu'ils puissent être rétablis après redémarrage du navigateur, le codage de l'objet état est limité à une taille de 640k octets. Si vous donnez à <code>pushState()</code> un objet état dont la représentation a une taille plus importante, la méthode génèrera une exception. Si vous avez un besoin d'espace plus important, il est conseillé d'utiliser <code>sessionStorage</code> et/ou <code>localStorage</code>.</p>
 </li>
 <li>
  <p><strong>title</strong> (<strong><em>titre</em>)</strong> — Firefox, pour l'instant, ignore ce paramètre, bien qu'il puisse être utilisé plus tard. Afin de prévenir les changements futurs de cette méthode, il serait prudent de fournir ici, en paramètre, une chaîne vide. Vous pourriez aussi donner un titre court à l'état vers lequel vous vous dirigez.</p>
 </li>
 <li>
  <p><strong>URL</strong> — L'URL de la nouvelle entrée de l'historique est donnée par ce paramètre. Il convient de préciser que le navigateur n'essaiera pas de charger la page pointée par cette URL après un appel à <code>pushState()</code>, mais il se peut qu'il tente de le faire plus tard, par exemple, lorsque l'utilisateur relancera son navigateur. Il n'est pas nécessaire que la nouvelle URL soit absolue ; si elle est relative, ce sera par rapport à l'URL courante. La nouvelle URL doit avoir la même origine (domaine) que l'URL courante ; dans le cas contraire, <code>pushState()</code> génèrera une exception. Ce paramètre est optionnel ; s'il n'est pas spécifié, sa valeur par défaut est l'URL de la page courante.</p>
 </li>
</ul>

<div class="note">
  <p><strong>Note :</strong> Dans Gecko 2.0 {{ geckoRelease("2.0") }} jusqu'à Gecko 5.0 {{ geckoRelease("5.0") }}, l'objet fourni est sérialisé en utilisant JSON. À partir de  Gecko 6.0 {{ geckoRelease("6.0") }}, l'objet est sérialisé à l'aide de<a href="/en/DOM/The_structured_clone_algorithm"> "structured clone algorithm"</a> qui autorise, en particulier, la sérialisation d'arbres récursifs cycliques. Cela permet de passer de façon sûre une plus grande diversité d'objets.</p>
</div>

<p>On peut assimiler l'appel à <code>pushState()</code> à l'affectation <code>window.location = "#foo"</code>, en cela que l'un comme l'autre auront pour effet de créer et déclencher une autre entrée de l'historique associée au document courant. Mais <code>pushState()</code> a quelques avantages :</p>

<ul>
 <li>La nouvelle URL peut être quelconque pourvu qu'elle ait la même origine que l'URL courante. En revanche, affecter <code>window.location</code> vous maintient  au même {{ domxref("document") }} seulement si vous modifiez uniquement le hash.</li>
 <li>Vous n'êtes pas contraint de modifier l'URL si vous ne le voulez pas. Par contre, affecter <code>window.location = "#foo";</code> crée une nouvelle entrée de l'historique seulement si le hash courant n'est pas <code>#foo</code>.</li>
 <li>Vous pouvez associer des données quelconques avec votre nouvelle entrée de l'historique. Avec l'approche basée sur le hash, il est nécessaire de coder toute donnée pertinente en une chaîne courte.</li>
</ul>

<p>Notez que <code>pushState()</code> n'entraîne jamais le déclenchement d'un événement <code>hashchange</code>, même si la nouvelle URL diffère de l'ancienne seulement par son hash.</p>

<p>Dans un document <a href="/fr/docs/Mozilla/Tech/XUL">XUL</a> elle crée l'élément XUL spécifié.</p>

<p>Dans d'autres documents, elle crée un élément avec l'URI d'espace de nom <code>null</code>. </p>

<h3 id="La_méthode_replaceState()">La méthode replaceState()</h3>

<p><code>history.replaceState()</code> fonctionne exactement comme <code>history.pushState()</code> hormis le fait que <code>replaceState()</code> modifie l'entrée courante de l'historique au lieu d'en créer une nouvelle. À noter que ceci n'empêche pas la création d'une nouvelle entrée dans l'historique global du navigateur.</p>

<p><code>replaceState()</code> est particulièrement utile si vous désirez mettre à jour l'objet état ou l'URL de l'entrée courante de l'historique en réponse à une action de l'utilisateur.</p>

<div class="note">
  <p><strong>Note :</strong> Dans Gecko 2.0 {{ geckoRelease("2.0") }} jusqu'à Gecko 5.0 {{ geckoRelease("5.0") }}, l'objet transmis est sérialisé avec JSON. À partir de  Gecko 6.0 {{ geckoRelease("6.0") }}, l'objet est sérialisé à l'aide de<a href="/en/DOM/The_structured_clone_algorithm"> "structured clone algorithm"</a> qui autorise, en particulier, la sérialisation d'arbres récursifs cycliques. Cela permet de passer de façon sûre une plus grande diversité d'objets.</p>
</div>

<h3 id="Exemple_de_la_méthode_replaceState()">Exemple de la méthode replaceState()</h3>

<p>Supposons que <code>http://mozilla.org/foo.html</code> exécute le code JavaScript suivant :</p>

<pre class="brush: js">var stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");</pre>

<p>L'explication des deux lignes ci-dessus peut être trouvée dans la section "<a href="#">Exemple de la méthode pushState()</a>". Supposons ensuite que http://mozilla.org/bar.html exécute le code JavaScript suivant :</p>

<pre class="brush: js">history.replaceState(stateObj, "page 3", "bar2.html");</pre>

<p>Cela entraînera l'affichage de la barre d'URL http://mozilla.org/bar2.html, mais le navigateur ne chargera pas <code>bar2.html</code> ou même vérifiera que <code>bar2.html</code> existe.</p>

<p>Supposons maintenant que l'utilisateur accède à http://www.microsoft.com, puis clique sur le bouton Précédent. À ce stade, la barre d'URL affichera http://mozilla.org/bar2.html. Si l'utilisateur clique à nouveau sur Retour, la barre d'URL affichera http://mozilla.org/foo.html et contournera totalement bar.html.</p>

<h3 id="L'événement_popstate">L'événement popstate</h3>

<p>Un événement <code>popstate</code> est envoyé à la fenêtre chaque fois que l'entrée active de l'historique change. Si l'entrée de l'historique activée a été créée par un appel à <code>replaceState</code>, la propriété <code>state </code>de l'événement <code>popstate</code> contient une copie de l'objet état  de l'entrée de l'historique.</p>

<p>Voir {{ domxref("window.onpopstate") }} pour un exemple d'utilisation.</p>

<h3 id="Lire_l'état_courant">Lire l'état courant</h3>

<p>Quand votre page est chargée, il se pourrait qu'elle ait un objet état non nul. Cela peut se produire, par exemple, si la page fixe un objet état (avec  <code>pushState()</code> ou <code>replaceState()</code>) et qu'ensuite l'utilisateur redémarre le navigateur.  Quand votre page sera rechargée, elle recevra l'événement  onload , mais pas l'événement popstate.  Néanmoins, si vous lisez la propriété history.state, vous récupèrerez l'objet état que vous auriez obtenu si un événement popstate avait été déclenché.</p>

<p>Vous pouvez lire l'état de l'entrée courante de l'historique sans devoir attendre un événement <code>popstate</code> en utilisant la propriété <code>history.state</code> comme ceci :</p>

<pre class="brush: js">var currentState = history.state;
</pre>

<h2 id="Exemples">Exemples</h2>

<p>Pour un exemple comple de site web AJAX, vous pouvez voir : <a href="/fr/docs/Web/Guide/DOM/Manipuler_historique_du_navigateur/Example">Exemple de navigation en Ajax</a>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "browsers.html#history", "History")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de changement de {{SpecName("HTML5 W3C")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "browsers.html#history", "History")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.History")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{ domxref("window.history") }}</li>
 <li>{{ domxref("window.onpopstate") }}</li>
</ul>
