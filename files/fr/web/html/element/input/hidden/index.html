---
title: <input type="hidden">
slug: Web/HTML/Element/Input/hidden
tags:
  - Element
  - Input
  - Reference
translation_of: Web/HTML/Element/input/hidden
---
<div>{{HTMLRef}}</div>

<p>Les éléments {{HTMLElement("input")}} de type <code><strong>"hidden"</strong></code> permettent aux développeurs web d'inclure des données qui ne peuvent pas être vues ou modifiées lorsque le formulaire est envoyé. Cela permet par exemple d'envoyer l'identifiant d'une commande ou un jeton de sécurité unique. Les champs de ce type sont invisibles sur la page.</p>

<div class="note">
<p><strong>Note :</strong> La ligne de code suivante est suivie du rendu associé... si l'exemple fonctionne correctement, vous ne devriez rien voir :)</p>
</div>

<h2>Exemple simple</h2>

<pre class="brush: html">&lt;input id="prodId" name="prodId" type="hidden" value="xm234jq"&gt;</pre>

<p>{{EmbedLiveSample('Exemple_simple', 600, 40)}}</p>

<div class="note">
<p><strong>Note :</strong> Attention, les évènements DOM <code><a href="/fr/docs/Web/API/HTMLElement/input_event">input</a></code> et <code><a href="/fr/docs/Web/API/HTMLElement/change_event">change</a></code> ne s'appliquent pas à ce type de contrôle. Les champs masqués ne peuvent pas recevoir le focus, y compris en JavaScript avec <code>hiddenInput.focus()</code>).</p>
</div>

<h2 id="Valeur">Valeur</h2>

<p>L'attribut {{htmlattrxref("value", "input")}} de l'élément contient une chaîne de caractères masquée qui est envoyée au serveur avec le formulaire. Cette valeur ne peut pas directement être éditée par l'utilisateur sur la page (mais elle est toujours accessible et modifiable via les outils de développement intégrés au navigateur).</p>

<div class="warning">
<p><strong>Attention :</strong> Bien que la valeur ne soit pas affichée sur la page, elle est visible et modifiable par l'utilisateur si ce dernier utilise les outils de développements intégrés aux navigateurs (par exemple "Afficher la source"). Le type <code>hidden</code> ne doit donc pas être utilisé comme mécanisme de sécurité.</p>
</div>

<h2 id="Attributs_supplémentaires">Attributs supplémentaires</h2>

<p>En complément des attributs communs à l'ensemble des éléments <code>&lt;input&gt;</code>, les champs masqués peuvent utiliser les attributs suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Attribut</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>{{anch("name")}}</code></td>
   <td>À l'instar de l'ensemble des champs de saisie, ce sera le nom auquel associer la donnée lors de l'envoi du formulaire. Si la valeur spéciale <code>"_charset_"</code> est utilisée pour cet attribut, la valeur du champ sera l'encodage utilisé pour l'envoi du formulaire.</td>
  </tr>
 </tbody>
</table>

<h3 id="htmlattrdef(name)">{{htmlattrdef("name")}}</h3>

<p>Cet attribut fait partie des attributs communs à l'ensemble des éléments <code>&lt;input&gt;</code> mais il possède un comportement particulier pour les champs masqués. En effet, si cet attribut utilise la valeur spéciale <code>"_charset_"</code>, la valeur du champ envoyée avec le formulaire sera l'encodage utilisé pour l'envoi du formulaire.</p>

<h2 id="Utiliser_les_valeurs_masquées_dans_les_formulaires">Utiliser les valeurs masquées dans les formulaires</h2>

<p>Comme évoqué ci-avant, les éléments <code>&lt;input type="hidden"</code>&gt; peuvent être utilisés lorsque le formulaire sert à transmettre des données avec lesquelles l'utilisateur n'est pas censé intéragir.</p>

<h3 id="Suivre_les_modifications_apportées_au_contenu">Suivre les modifications apportées au contenu</h3>

<p>Un usage fréquent de ces éléments est de garder un registre des données qui doivent être mises à jour dans une base de données lorsque le formulaire est envoyé. Le processus est généralement le suivant :</p>

<ol>
 <li>L'utilisateur édite du contenu (un billet de blog, une fiche d'un produit) en commençant par cliquer sur le bouton Éditer.</li>
 <li>Le contenu à modifier est extrait de la base de données et est chargé dans le formulaire HTML afin que l'utilisateur puis appliquer les modifications voulues.</li>
 <li>Après avoir éditer, l'utilisateur envoie le formulaire et les données mises à jour sont envoyées au serveur qui se charge d'appliquer cette mise à jour en base de données.</li>
</ol>

<p>Ici, lors de la deuxième étape, on peut récupérer l'identifiant de l'enregistrement et le placer dans un champ caché du formulaire. Lorsque le formulaire est envoyé à l'étape 3, l'identifiant est automatiquement envoyé au serveur avec le contenu. L'identifiant permet alors au serveur de connaître l'enregistrement de la base de données qui doit être mis à jour.</p>

<p>Pour un exemple complet, voir la section {{anch("Exemples")}} ci-après.</p>

<h3 id="Contribuer_à_la_sécurité_d'un_site_web">Contribuer à la sécurité d'un site web</h3>

<p>Les champs masqués sont également employés afin de stocker des jetons de sécurité (aussi appelés « secrets ») afin d'améliorer la sécurité d'un site. Pour un formulaire sensible (par exemple le transfert d'argent d'un compte à un autre sur un site bancaire), le secret est généré par le serveur et intégré sur la page afin de prouver l'identité de l'utilisateur et que c'est bien le bon formulaire qui est utilisé pour effectuer le transfert.</p>

<p>Cela permet d'éviter le cas où quelqu'un crée un faux site et un faux formulaire pour transférer de l'argent sur le mauvais compte (c'est ce qu'on appelle <a href="https://fr.wikipedia.org/wiki/Cross-Site_Request_Forgery">Cross Site Request Forgery (CSRF)</a>).</p>

<div class="note">
<p><strong>Note :</strong> Comme indiqué précédemment, placer le secret dans un champ masqué ne le rend pas plus sécurisé. La composition, l'encodage de la clé et la vérification par le serveur sont autant d'étapes cruciales pour garantir la qualité du secret utilisé. Le champ masqué n'est finalement qu'un outil qui simplifie l'envoi de cette information au serveur lorsque l'utilisateur envoie le formulaire.</p>
</div>

<h2 id="Validation">Validation</h2>

<p>Aucune contrainte de validation n'est appliquée sur ces valeurs.</p>

<h2 id="Exemples">Exemples</h2>

<p>Voyons comment implémenter une version simple du formulaire d'édition décrit précédemment : on utilise un champ masqué pour mémoriser l'identifiant de la donnée qui est modifiée.</p>

<h3 id="HTML">HTML</h3>

<p>Voici le fragment HTML pour le formulaire :</p>

<pre class="brush: html">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="title"&gt;Titre du billet :&lt;/label&gt;
    &lt;input type="text" id="title" name="title" value="Mon meilleur billet"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="content"&gt;Contenu :&lt;/label&gt;
    &lt;textarea id="content" name="content" cols="60" rows="5"&gt;
Voici le contenu de mon meilleur billet, j'espère que ça vous plaît !
    &lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button type="submit"&gt;Mettre à jour le billet&lt;/button&gt;
  &lt;/div&gt;
  &lt;input type="hidden" id="postId" name="postId" value="34657"&gt;
&lt;/form&gt;</pre>

<h3 id="CSS">CSS</h3>

<p>Ajoutons quelques éléments de mise en forme :</p>

<pre class="brush: css">html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input, textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<p>Le serveur génèrera la page HTML avec l'identifiant <code>"postID"</code> qui contient l'identifiant du billet de la base de données. Lorsque l'utilisateur termine l'édition, c'est le navigateur qui envoie cette donnée au serveur ainsi que les autres données du formulaire. Aucun code JavaScript n'est nécessaire pour gérer cela.</p>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '100%', 200)}}</p>

<div class="note">
<p><strong>Note :</strong> Vous pouvez consulter l'exemple sur GitHub (cf. <a href="https://github.com/mdn/learning-area/blob/master/html/forms/hidden-input-example/index.html">le code source</a> et <a href="https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html">la démonstration <em>live</em></a>).</p>
</div>

<p>Lorsque le formulaire est envoyé, les données envoyées au serveur ressembleront à :</p>

<p><code>title=Mon+meilleur+billet&amp;content=Le+contenu+de+mon+meilleur+article.+J'espère+qu'il+vous+plaît!&amp;postId=34657</code></p>

<p>Bien que le champ masqué soit invisible sur la page, il fait toujours partie des données envoyées.</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <td><strong>{{anch("Valeur")}}</strong></td>
   <td>Une chaîne de caractères ({{domxref("DOMString")}}) qui représente la valeur de la donnée masquée qu'on souhaite envoyer au serveur.</td>
  </tr>
  <tr>
   <td><strong>Évènements</strong></td>
   <td>Aucun.</td>
  </tr>
  <tr>
   <td><strong>Attributs pris en charge</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}</td>
  </tr>
  <tr>
   <td><strong>Attributs IDL</strong></td>
   <td><code>value</code></td>
  </tr>
  <tr>
   <td><strong>Méthodes</strong></td>
   <td>Aucune.</td>
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
   <td>{{SpecName('HTML WHATWG', 'forms.html#hidden-state-(type=hidden)', '&lt;input type="hidden"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.2', 'sec-forms.html#hidden-state-typehidden', '&lt;input type="hidden"&gt;')}}</td>
   <td>{{Spec2('HTML5.2')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.input.input-hidden")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires">Guide sur les formulaires HTML</a></li>
 <li>{{HTMLElement("input")}}</li>
 <li>L'interface DOM {{domxref("HTMLInputElement")}}</li>
</ul>
