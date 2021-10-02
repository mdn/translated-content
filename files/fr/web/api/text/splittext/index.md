---
title: Text.splitText()
slug: Web/API/Text/splitText
translation_of: Web/API/Text/splitText
---
<div>{{apiref("DOM")}}</div>

<p>La méthode <strong><code>Text.splitText()</code></strong> sépare le nœud {{domxref("Text")}} en deux nœuds au niveau de l’indice spécifié, et conserve les deux nœuds dans l’arbre en tant que voisins.</p>

<p>Après la séparation, le nœud actuel contient tout le texte jusqu’à l’indice spécifié, et un nœud nouvellement créé du même type contient le texte restant. Le nœud nouvellement créé est retourné à l’appelant. Si le nœud original avait un parent, le nouveau nœud est inséré en tant que voisin suivant du nœud original. Si l’indice est égal à la longueur du nœud original, le nœud nouvellement créé ne contient pas de données.</p>

<p>Des nœuds texte séparés peuvent être concaténés en utilisant la méthode {{domxref("Node.normalize()")}}.</p>

<p>Une {{domxref("DOMException")}} avec la valeur <code>INDEX_SIZE_ERR</code> est levée si l’indice spécifié est négatif ou est supérieur au nombre d’unités 16-bit dans le texte du nœud ; une {{domxref("DOMException")}} avec la valeur <code>NO_MODIFICATION_ALLOWED_ERR</code> est levée si le nœud est en lecture seule.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>noeudRemplacant</em> = <em>noeudTexte</em>.splitText(indice)
</pre>

<h2 id="Exemple">Exemple</h2>

<p>Dans cet exemple, le nœud texte d’un {{HTMLElement("p")}} est séparé en deux nœuds texte et un {{HTMLElement("span")}} est inséré entre les deux.</p>

<pre class="brush:html">&lt;body&gt;
  &lt;p id="p"&gt;foobar&lt;/p&gt;

  &lt;script type="text/javascript"&gt;
    var p = document.getElementById('p');
    var noeudTexte = p.firstChild;

    // coupe entre foo et bar
    var noeudRemplacant = noeudTexte.splitText(3);

    // crée un span avec ' contenu du span '
    var span = document.createElement('span');
    span.appendChild(document.createTextNode(' contenu du span '));

    // ajoute le span avant 'bar'
    p.insertBefore(span, noeudRemplacant);

    // le résultat est &lt;p id="p"&gt;foo&lt;span&gt; contenu du span &lt;/span&gt;bar&lt;/p&gt;
  &lt;/script&gt;
&lt;/body&gt;
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-text-splittext', 'Text.splitText')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Pas de changement depuis {{SpecName('DOM3 Core')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-38853C1D', 'Text.splitText')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>Pas de changement depuis {{SpecName('DOM2 Core')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-38853C1D', 'Text.splitText')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>Pas de changement depuis {{SpecName('DOM1')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-38853C1D', 'Text.splitText')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Text.splitText")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L’interface {{domxref("Text")}} à laquelle cette méthode appartient.</li>
 <li>La méthode opposée : {{domxref("Node.normalize")}}.</li>
</ul>
