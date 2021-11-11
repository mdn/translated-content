---
title: Premiers pas
slug: Web/Guide/AJAX/Getting_Started
tags:
  - AJAX
translation_of: Web/Guide/AJAX/Getting_Started
original_slug: Web/Guide/AJAX/Premiers_pas
---
<p>Cet article vous guide à travers les bases d’AJAX et vous donne deux exemples clefs-en-main pour débuter.</p>

<h3 id="Pr.C3.A9sentation_d.27AJAX">Présentation d’AJAX</h3>

<p>AJAX est un raccourci pour <em><strong>A</strong>synchronous <strong>J</strong>avaScript <strong>A</strong>nd <strong>X</strong>ML</em> (JavaScript asynchrone et XML) inventé par Jesse James Garrett. Pour simplifier, il s’agit d’employer l’objet <code><a href="/fr/XMLHttpRequest" title="fr/XMLHttpRequest">XMLHttpRequest</a></code> pour communiquer avec des serveurs. Il peut envoyer et recevoir des informations sous différents formats, dont JSON, XML, HTML ou texte. Son principal attrait est sa nature « asynchrone » ce qui signifie qu’il peut communiquer avec le serveur, échanger des données et mettre à jour la page sans avoir à la recharger.</p>

<p>Les deux principales fonctionnalités d’AJAX permettent de :</p>

<ul>
 <li>faire des requêtes vers le serveur sans recharger la page ;</li>
 <li>recevoir et travailler avec des données provenant du serveur.</li>
</ul>

<h3 id=".C3.89tape_1_.E2.80.94_Lancement_d.27une_requ.C3.AAte_HTTP">Étape 1 — Lancement d’une requête HTTP</h3>

<p>Pour faire une requête <a href="/HTTP">HTTP</a> vers le serveur à l’aide de JavaScript, il faut disposer d’une instance d’objet fournissant cette fonctionnalité. C’est ici que <code>XMLHttpRequest</code> intervient. Son prédécesseur est originaire de Internet Explorer sous la forme d’un objet ActiveX appelé <code>XMLHTTP</code>. Par la suite, Mozilla, Safari et d’autres navigateurs ont suivi en implémentant un objet <code>XMLHttpRequest</code> qui fournit les mêmes méthodes et propriétés que l’objet ActiveX original de Microsoft. Entre temps, Microsoft a également implémenté XMLHttpRequest.</p>

<pre class="brush: js">// ancien code de compatibilité, aujourd’hui inutile
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+...
    httpRequest = new XMLHttpRequest();
}
else if (window.ActiveXObject) { // IE 6 et antérieurs
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}</pre>

<div class="note">
<p><strong>Note :</strong> Pour illustrer le principe, le code ci-dessus est une version un peu simplifiée de celui qui est utilisé pour créer une instance XMLHTTP. Pour un exemple plus réaliste, voir l’étape 3 de cet article.</p>
</div>

<p>Après avoir fait une requête, vous recevrez une réponse du serveur. À ce stade, vous devez indiquer à l’objet <code>httpRequest</code> le nom de la fonction JavaScript qui traitera la réponse. Pour cela, assignez à la propriété <code>onreadystatechange</code> de l’objet le nom de la fonction JavaScript que vous envisagez d’utiliser, comme ceci :</p>

<pre class="brush: js">httpRequest.onreadystatechange = nomDeLaFonction;</pre>

<p>Notez qu’il n’y a ni parenthèses ni paramètres après le nom de la fonction, car vous ne faites qu’assigner une référence à la fonction sans l’appeler réellement. Alternativement, au lieu de donner un nom de fonction, vous pouvez utiliser la technique JavaScript de définition de fonctions à la volée (ce qu’on appelle une fonction anonyme), et définir à cet endroit les actions à effectuer sur la réponse, comme ceci :</p>

<pre class="brush: js">httpRequest.onreadystatechange = function() {
    // instructions de traitement de la réponse
};
</pre>

<p>Ensuite, après avoir déclaré ce qui se produit lorsque la réponse est reçue, il s’agit de lancer effectivement la requête. Il faut pour cela appeler les méthodes <code>open()</code> et <code>send()</code> de l’objet <code>httpRequest</code>, comme ceci :</p>

<pre class="brush: js">httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send();</pre>

<ul>
 <li>Le premier paramètre de l’appel à <code>open()</code> est la méthode de requête HTTP — GET, POST, HEAD ou toute autre méthode gérée par votre serveur. Laissez le nom de la méthode en majuscules comme spécifié par la norme HTTP ; autrement certains navigateurs (comme Firefox) peuvent ne pas traiter la requête. Pour plus d’informations sur les méthodes de requêtes HTTP possibles, vous pouvez consulter les <a class="external" href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html">spécifications du W3C</a>.</li>
 <li>Le second paramètre est l’URL à laquelle vous envoyez la requête. Pour des raisons de sécurité, il est par défaut impossible d’appeler des URL se situant sur un domaine de tierce-partie. Veillez à utiliser le nom de domaine exact sur toutes vos pages ou vous obtiendrez une erreur « permission refusée » lors de l’appel à <code>open()</code>. Une erreur courante est de charger le site via <code>domaine.tld</code>, mais d’essayer d’appeler des pages avec <code>www.domain.tld</code>. Si vous avez réellement besoin d’envoyer une requête vers un autre domaine, veuillez consulter <a href="/fr/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a>.</li>
 <li>Le troisième paramètre, optionnel, précise si la requête est asynchrone. Si mis à <code>true</code> (sa valeur par défaut), l’exécution de JavaScript se poursuivra, et l’utilisateur ou l’utilisatrice pourra interagir avec la page, en attendant l’arrivée de la réponse du serveur. C’est le premier « A » de « AJAX ».</li>
</ul>

<p>Le paramètre de la méthode <code>send()</code> peut être n’importe quelle donnée que vous voulez envoyer au serveur en cas d’utilisation de la méthode POST. Les données doivent être sous la forme d’une chaîne de requête, comme :</p>

<pre class="brush: js">"nom=valeur&amp;autrenom="+encodeURIComponent(autrevaleur)+"&amp;ainsi=desuite"</pre>

<p>Ou d’autres formats tels que <code>multipart/form-data</code>, JSON, XML, etc.</p>

<p>Notez que si vous voulez envoyer des données avec la méthode POST, vous aurez peut-être à changer le type MIME de la requête. Par exemple, utilisez ce qui suit avant d’appeler <code>send()</code> pour envoyer des données de formulaire en tant que chaîne de requête :</p>

<pre class="brush: js">httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
</pre>

<h3 id=".C3.89tape_2_.E2.80.94_Gestion_de_la_r.C3.A9ponse_du_serveur">Étape 2 — Gestion de la réponse du serveur</h3>

<p>Lors de l’envoi de la requête, vous avez désigné une fonction JavaScript pour traiter la réponse.</p>

<pre class="brush: js"><code>httpRequest.onreadystatechange = nomDeLaFonction;</code></pre>

<p>Voyons maintenant ce que cette fonction doit faire. Tout d’abord, elle doit vérifier l’état de la requête. Si cet état a la valeur de <code>XMLHttpRequest.DONE</code> (ce qui correspond à 4), cela signifie que la réponse du serveur a été reçue dans son intégralité et qu’elle peut maintenant être traitée.</p>

<pre class="brush: js">if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // tout va bien, la réponse a été reçue
} else {
    // pas encore prête
}</pre>

<p>La liste complète des valeurs de <code>readyState</code> est documentée sur <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties">XMLHttpRequest.readyState</a> et se résume de cette façon :</p>

<ul>
 <li>0 (non initialisée) ou (requête non initialisée)</li>
 <li>1 (en cours de chargement) ou (connexion établie avec le serveur)</li>
 <li>2 (chargée) ou (requête reçue)</li>
 <li>3 (en cours d’interaction) ou (requête en cours de traitement)</li>
 <li>4 (terminée) ou (requête terminée et réponse prête)</li>
</ul>

<p>Ensuite, vérifiez le <a href="/fr/docs/Web/HTTP/Status">code de statut HTTP</a> de la réponse du serveur. Tous les codes possibles sont listés sur le <a class="external" href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">site du W3C</a>. Dans l’exemple qui suit, nous différencions un appel réussi ou échoué en vérifiant la réception d’un code <code><a href="/fr/docs/Web/HTTP/Status#R%C3%A9ponses_de_succ%C3%A8s">200 OK</a></code>.</p>

<pre class="brush: js">if (httpRequest.status === 200) {
    // parfait !
} else {
    // il y a eu un problème avec la requête,
    // par exemple la réponse peut être un code 404 (Non trouvée)
    // ou 500 (Erreur interne au serveur)
}
</pre>

<p>Après avoir vérifié l’état de la requête et le code de statut HTTP de la réponse, vous pouvez traiter à votre guise les données envoyées par le serveur. Il existe deux manières d’accéder à ces données :</p>

<ul>
 <li><code>httpRequest.responseText</code> — renvoie la réponse du serveur sous la forme d’une chaîne de texte ;</li>
 <li><code>httpRequest.responseXML</code> — renvoie la réponse sous la forme d’un objet <code>XMLDocument</code> que vous pouvez parcourir à l’aide des fonctions DOM de JavaScript.</li>
</ul>

<p>Notez que les étapes ci-dessus sont valides uniquement si vous utilisez une requête asynchrone (Le 3e paramètre d’<code>open()</code> n’a pas été spécifié, ou a été défini à <code>true</code>). Si vous utilisez une requête <strong>synchrone,</strong> vous n’avez pas besoin de spécifier une fonction, mais c’est fortement découragé car cela entraîne une mauvaise expérience utilisateur.</p>

<h3 id=".C3.89tape_3_.E2.80.94_Un_exemple_simple">Étape 3 — Un exemple simple</h3>

<p>Rassemblons tous ces éléments dans un exemple : une requête HTTP simple. Notre JavaScript demande un document HTML, <code>test.html</code>, qui contient le texte « Je suis un test. », puis nous affichons le contenu de la réponse dans un message <code>alert()</code>. Remarquez que cet exemple n’utilise que du pur JavaScript vanilla (pas de jQuery). D’autre part, les fichiers HTML, XML et PHP doivent être placés dans le même dossier.</p>

<pre class="brush: html">&lt;button id="ajaxButton" type="button"&gt;Faire une requête&lt;/button&gt;

&lt;script&gt;
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Abandon :( Impossible de créer une instance de XMLHTTP');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'test.html');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('Il y a eu un problème avec la requête.');
      }
    }
  }
})();
&lt;/script&gt;</pre>

<p>Dans cet exemple :</p>

<ul>
 <li>L’utilisateur ou l’utilisatrice clique sur le bouton « Faire une requête » ;</li>
 <li>Le gestionnaire d’évènement appelle la fonction <code>makeRequest()</code> ;</li>
 <li>la requête est faite, puis l’exécution est passée à <code>alertContents()</code> (via <code>onreadystatechange</code>);</li>
 <li><code>alertContents()</code> vérifie si la réponse reçue est correcte, et affiche ensuite le contenu du fichier <code>test.html</code> dans un message <code>alert()</code>.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Si vous envoyez une requête à du code qui renvoie du XML plutôt qu’un fichier HTML statique, vous devez spécifier des en-têtes de réponse pour que cela fonctionne avec Internet Explorer. Si vous ne spécifiez pas l’en-tête <code>Content-Type: application/xml</code>, IE émettra une erreur JavaScript « Objet attendu » après la ligne à laquelle vous avez tenté d’accéder à l’élément XML.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Si vous ne spécifiez pas l’en-tête <code>Cache-Control: no-cache</code>, le navigateur mettra la réponse en cache et n’effectuera plus jamais la requête ultérieurement, ce qui peut rendre le débogage difficile. Vous pouvez également ajouter un paramètre GET toujours différent, comme un timestamp ou un nombre aléatoire (voir <a href="https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest#Contourner_le_cache">contourner le cache</a>).</p>
</div>

<div class="note">
<p><strong>Note :</strong> Si la variable <code>httpRequest</code> est utilisée globalement, des appels concurrents à <code>makeRequest()</code> peuvent s’écraser l’un l’autre, provoquant une situation de compétition <em>(race condition</em>). On peut s’en prémunir en déclarant la variable <code>httpRequest</code> locale à une <a href="/fr/docs/Web/JavaScript/Closures">closure</a> contenant les fonctions AJAX.</p>
</div>

<p>Si une erreur de communication se produit (par exemple le serveur qui cesse de répondre), une exception sera levée dans la méthode <code>onreadystatechange</code> lors de l’accès à la propriété <code>status</code>. Pour atténuer ce problème, vous pouvez entourer votre bloc <code>if...then</code> dans un <code>try...catch</code> :</p>

<pre class="brush: js">function alertContents(httpRequest) {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert("Un problème est survenu au cours de la requête.");
      }
    }
  }
  catch( e ) {
    alert("Une exception s’est produite : " + e.description);
  }
}</pre>

<h3 id=".C3.89tape_4_.E2.80.94_Travailler_avec_des_r.C3.A9ponses_XML">Étape 4 — Travailler avec des réponses XML</h3>

<p>Dans l’exemple précédent, après avoir reçu la réponse à la requête HTTP, nous avons utilisé la propriété <code>responseText</code> de l’objet, qui contenait le contenu du fichier <code>test.html</code>. Essayons maintenant la propriété <code>responseXML</code>.</p>

<p>Tout d’abord, créons un document XML valide qui sera l’objet de la requête. Le document (<code>test.xml</code>) contient ce qui suit :</p>

<pre class="brush: xml">&lt;?xml version="1.0" ?&gt;
&lt;root&gt;
    Je suis un test.
&lt;/root&gt;
</pre>

<p>Dans le script, il est seulement nécessaire de remplacer la ligne de requête par :</p>

<pre class="brush: html">...
onclick="makeRequest('test.xml')"&gt;
...
</pre>

<p>Ensuite, dans <code>alertContents()</code>, il faut remplacer la ligne <code>alert(httpRequest.responseText);</code> par :</p>

<pre class="brush: js">var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName('root').item(0);
alert(root_node.firstChild.data);
</pre>

<p>Ce code prend l’objet <code>XMLDocument</code> donné par <code>responseXML</code> et utilise les méthodes du DOM pour accéder à des données contenues dans le document XML.</p>

<p>Catégories</p>

<p>Interwiki</p>

<h3 id="Étape_5_–_Manipuler_les_données">Étape 5 – Manipuler les données</h3>

<p>Pour finir, envoyons quelques données au serveur et réceptionnons la réponse. Notre JavaScript demandera cette fois-ci une page dynamique, <code>test.php</code>, qui prendra notre contenu envoyé et revera une chaîne « calculée » – "Bonjour, [user data] !" – que nous afficherons via <code>alert()</code>.</p>

<p>D’abord, nous allons ajouter un boîte de texte dans notre HTML afin que l’utilisateur ou l’utilisatrice puisse saisir son nom :</p>

<pre class="brush: html">&lt;label&gt;Vore nom :
  &lt;input type="text" id="ajaxTextbox" /&gt;
&lt;/label&gt;
&lt;span id="ajaxButton"&gt;
  Lancer une requête
&lt;/span&gt;</pre>

<p>Nous allons également ajouter une ligne à notre gestionnaire d’événement pour obtenir les données de la boite de texte et les envoyer à la fonction <code>makeRequest()</code>, ainsi que l’URL de notre script côté serveur :</p>

<pre class="brush: js">  document.getElementById("ajaxButton").onclick = function() {
      var userName = document.getElementById("ajaxTextbox").value;
      makeRequest('test.php', userName);
  };</pre>

<p>Nous devons modifier <code>makeRequest()</code> afin d’accepter les données et les transmettre au serveur. Nous changerons la méthode de GET à POST et inclurons nos données en paramètres dans l’appel à <code>httpRequest.send()</code> :</p>

<pre class="brush: js">  function makeRequest(url, userName) {

    ...

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
  }</pre>

<p>La fonction <code>alertContents()</code> peut être écrite de la même manière qu’à l’étape 3 pour afficher notre chaîne calculée, si c’est tout ce que le serveur renvoie. Cependant, supposons que le serveur renvoie à la fois la phrase calculée et la donnée originale. Donc si l’utilisateur ou l’utilisatrice a saisi « Dorothée », la réponse du serveur ressemblera à :</p>

<pre class="brush: json">{"userData":"Dorothée","computedString":"Bonjour, Dorothée !"}</pre>

<p>Pour utiliser cette phrase dans <code>alertContents()</code>, nous ne pouvons pas simplement afficher une alerte avec le contenu de <code>responseText</code>, nous devons l’analyser et afficher <code>computedString</code>, la propriété que nous souhaitons :</p>

<pre class="brush: js">function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText);
      alert(response.computedString);
    } else {
      alert('Un problème est survenu avec la requête.');
    }
  }
}</pre>

<p>Le fichier <code>test.php</code> devrait contenir ce qui suit :</p>

<pre class="brush: php">$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'anonyme';
$computedString = 'Bonjour, ' . $name . ' !';
$array = ['userName' =&gt; $name, 'computedString' =&gt; $computedString];
echo json_encode($array);</pre>

<p>Pour en savoir sur les méthodes DOM, pensez à lire la <a href="/fr/docs/Web/API/Document_Object_Model">Référence du DOM</a> de Mozilla.</p>
