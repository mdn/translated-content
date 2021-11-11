---
title: Introduction à l'utilisation de XPath avec JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
tags:
  - DOM
  - Extensions
  - JavaScript
  - XML
  - XPath
  - XSLT
translation_of: Web/XPath/Introduction_to_using_XPath_in_JavaScript
original_slug: Web/JavaScript/Introduction_à_l_utilisation_de_XPath_avec_JavaScript
---
<p>Ce document décrit l'interface pour utiliser <a href="/fr/docs/Web/XPath">XPath</a> dans JavaScript, que ce soit en interne, dans les extensions et depuis les sites Web. Mozilla implémente une partie importante de <a href="https://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/">DOM 3 XPath (en)</a>. Cela signifie que les expressions XPath peuvent être utilisées sur des documents HTML et XML.</p>

<p>La principale interface pour l'utilisation de XPath est la fonction <code><a href="/fr/docs/Web/API/Document/evaluate">evaluate()</a></code> de l'objet <code><a href="/fr/docs/Web/API/Document">document</a></code>.</p>

<h2 id="document.evaluate()">document.evaluate()</h2>

<p>Cette méthode évalue les expressions <a href="/fr/docs/Web/XPath">XPath</a> dans un document <a href="/fr/docs/Web/XML">XML</a> (y compris les documents HTML), et retourne un objet <code><a href="/fr/docs/Web/XPath/XPathResult">XPathResult</a></code>, qui peut être un nœud unique ou un ensemble de nœuds. La documentation existante sur cette méthode se trouve à la page <code><a href="/fr/docs/Web/API/Document/evaluate">document.evaluate</a></code> mais elle est plutôt succincte comparée à nos besoins actuels. Nous l'examinerons de façon plus complète dans la suite de ce document.</p>

<pre class="eval">var xpathResult = document.evaluate( xpathExpression, contextNode, namespaceResolver, resultType, result );
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>La fonction <a href="/fr/docs/Web/API/Document/evaluate">evaluate</a> prend cinq arguments au total :</p>

<dl>
 <dt><code>xpathExpression</code></dt>
 <dd>Une chaîne contenant l'expression XPath à évaluer.</dd>
 <dt><code>contextNode</code></dt>
 <dd>Un nœud du document pour lequel l'expression <code>xpathExpression</code> doit être évaluée, ainsi que l'ensemble de ses descendants. Le nœud <a href="/fr/docs/Web/API/Document/">document</a> est le plus couramment utilisé.</dd>
 <dt><code>namespaceResolver</code></dt>
 <dd>Une fonction à laquelle sera passé tout préfixe d'espace de nommage contenu dans l'expression <code>xpathExpression</code> et qui renvoie une chaîne représentant l'URI de l'espace de nommage associé à ce préfixe. Cela permet la conversion entre le préfixe utilisé dans les expressions XPath et les différents préfixes éventuellement utilisés dans le document. Cette fonction peut être :</dd>
</dl>

<ul>
 <li><a href="#Impl.C3.A9mentation_d.27un_r.C3.A9solveur_d.27espaces_de_nommage_par_d.C3.A9faut">Créée</a> à l'aide de la méthode <code><a href="/fr/docs/Web/API/Document/createNSResolver">createNSResolver</a></code> d'un objet <code><a href="http://www.xulplanet.com/references/objref/XPathEvaluator.html">XPathEvaluator</a></code>. C'est la solution à utiliser à peu près tout le temps.</li>
 <li>Une valeur <code>null</code>, qui peut être utilisé pour les documents HTML ou lorsqu'aucun préfixe n'est utilisé. Remarquez que si l'expression <code>xpathExpression</code> contient un préfixe d'espace de nommage cela déclenchera une exception <code>DOMException</code> portant le code <code>NAMESPACE_ERR</code>.</li>
 <li>Une fonction personnalisée définie par l'utilisateur. Voir la section <a href="#Impl.C3.A9mentation_d.27un_r.C3.A9solveur_d.27espace_de_nommage_personnalis.C3.A9">Implémentation d'un résolveur d'espace de nommage personnalisé</a> dans l'annexe pour plus de détails.</li>
</ul>

<dl>
 <dt><code>resultType</code></dt>
 <dd>Une <a href="#Constantes_d.C3.A9finies_de_XPathResult">constante</a> qui définit le type de résultat à renvoyer comme résultat de l'évaluation. La constante la plus courante est <code>XPathResult.ANY_TYPE</code> qui renverra un résultat du type le plus naturel par rapport à l'expression XPath. Une section de l'annexe contient une liste complète des <a href="#Constantes_d.C3.A9finies_de_XPathResult">constantes disponibles</a>. Elles sont expliquées dans la section <a href="#D.C3.A9finition_du_type_de_retour">#Définition du type de retour</a> ci-dessous.</dd>
 <dt><code>result</code></dt>
 <dd>Soit un objet <code>XPathResult</code> existant qui sera réutilisé pour contenir les résultats, soit la valeur <code>null</code> qui peut être utilisée pour créer un nouvel objet <code>XPathResult</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Renvoie <code>xpathResult</code>, qui est un objet <code>XPathResult</code> du type <a href="#D.C3.A9finition_du_type_de_retour">défini</a> dans le paramètre <code>resultType</code>. L'interface <code>XPathResult</code> est définie dans ce <a href="/fr/docs/Web/API/XPathResult">document</a>.</p>

<h3 id="Implémentation_d'un_résolveur_d'espaces_de_nommage_par_défaut">Implémentation d'un résolveur d'espaces de nommage par défaut</h3>

<p>On crée un résolveur d'espace de nommage à l'aide de la méthode <code>createNSResolver</code> de l'objet <a href="/fr/docs/Web/API/Document/">document</a>.</p>

<pre class="eval">var nsResolver = document.createNSResolver( contextNode.ownerDocument == null ? contextNode.documentElement : contextNode.ownerDocument.documentElement );
</pre>

<p>Ou alternativement en utilisant la méthode &lt;code&gt;createNSResolver&lt;/code&gt; d'un objet &lt;code&gt;XPathEvaluator&lt;/code&gt;. &lt;pre&gt; var xpEvaluator = new XPathEvaluator(); var nsResolver = xpEvaluator.createNSResolver( contextNode.ownerDocument == null ? contextNode.documentElement : contextNode.ownerDocument.documentElement ); &lt;/pre&gt; On lui passe ensuite <code>document.evaluate</code>, la variable <code>nsResolver</code> comme paramètre <code>namespaceResolver</code>.</p>

<p>véracité du paragraphe suivant à vérifier avec la doc du w3c Notez que XPath définit que les <code>QNames</code> sans préfixe correspondent uniquement aux éléments de l'espace de nommage <code>null</code>. Il n'existe aucun moyen dans XPath pour récupérer l'espace de nommage par défaut. Pour coupler des éléments ou des attributs dans un espace de nommage non nul, vous devrez détecter les noms préfixés, et créer un résolveur d'espace de nommage qui fera correspondre le préfixe avec l'espace de nommage. Vous en saurez plus sur la façon de <a href="#Impl.C3.A9mentation_d.27un_r.C3.A9solveur_d.27espace_de_nommage_personnalis.C3.A9">créer un résolveur d'espace de nommage personnalisé</a> ci-dessous.</p>

<h3 id="Définition_du_type_de_retour">Définition du type de retour</h3>

<p>La variable <code>xpathResult</code> renvoyée par <code>document.evaluate</code> peut être composée de nœuds individuels (<a href="#Types_simples">types simples</a>), ou un groupe de nœuds (<a href="#Types_d.27ensembles_de_n.C5.93uds">types d'ensembles de nœuds</a>).</p>

<h4 id="Types_simples">Types simples</h4>

<p>Lorsque le type de résultat spécifié dans <code>resultType</code> est soit :</p>

<ul>
 <li><code>NUMBER_TYPE</code> — un nombre</li>
 <li><code>STRING_TYPE</code> — une chaîne</li>
 <li><code>BOOLEAN_TYPE</code> — une valeur booléenne</li>
</ul>

<p>On obtiendra la valeur de retour de l'expression en accédant respectivement aux propriétés suivantes de l'objet <code>XPathResult</code> :</p>

<ul>
 <li><code>numberValue</code></li>
 <li><code>stringValue</code></li>
 <li><code>booleanValue</code></li>
</ul>

<h5 id="Exemple">Exemple</h5>

<p>Cet exemple utilise l'expression XPath <code><a href="/fr/docs/Web/XPath/Fonctions/count">count(//p)</a></code> pour obtenir le nombre d'éléments <code>&lt;p&gt;</code> présents dans le document HTML :</p>

<pre>var paragraphCount = document.evaluate( 'count(//p)', document, null, XPathResult.ANY_TYPE, null );

console.log( 'Ce document contient ' + paragraphCount.numberValue + ' éléments de paragraphe' );
</pre>

<p>Même si JavaScript convertira un nombre en chaîne pour l'affichage, l'interface XPath ne fera pas automatiquement la conversion du résultat numérique si la propriété <code>stringValue</code> est demandée. Ainsi, le code suivant ne fonctionnera <strong>pas</strong> :</p>

<pre>var paragraphCount = document.evaluate('count(//p)', document, null, XPathResult.ANY_TYPE, null );

console.log( 'Ce document contient ' + paragraphCount.stringValue + ' éléments de paragraphe' );
</pre>

<p>Au lieu de cela, il déclenchera une exception portant le code <code>NS_DOM_TYPE_ERROR</code>.</p>

<h4 id="Types_d'ensembles_de_nœuds">Types d'ensembles de nœuds</h4>

<p>L'objet <code>XPathResult</code> permet de renvoyer les ensembles de nœuds sous la forme de trois types principaux :</p>

<ul>
 <li><a href="#It.C3.A9rateurs">Itérateurs</a></li>
 <li><a href="#Snapshots">Snapshots</a></li>
 <li><a href="#Premiers_n.C5.93uds">Premiers nœuds</a></li>
</ul>

<h5 id="Itérateurs">Itérateurs</h5>

<p>Lorsque le type de résultat spécifié dans le paramètre <code>resultType</code> est soit :</p>

<ul>
 <li><code>UNORDERED_NODE_ITERATOR_TYPE</code></li>
 <li><code>ORDERED_NODE_ITERATOR_TYPE</code></li>
</ul>

<p>L'objet <code>XPathResult</code> renvoyé sera un ensemble de nœuds correspondant à l'expression se comportant comme un itérateur. On pourra accéder individuellement aux nœuds qu'il contient en utilisant la méthode <a href="/fr/docs/Web/XPathResult/IterateNext"><code>iterateNext()</code></a> de l'objet <code>XPathResult</code>.</p>

<p>Lorsque tous les nœuds ont été parcourus, <a href="/fr/docs/Web/XPathResult/IterateNext"><code>iterateNext()</code></a> renverra <code>null</code>.</p>

<p>Notez cependant que si le document est modifié (l'arbre du document est modifié) entre les itérations, l'itérateur sera invalidé et la propriété <code>invalidIteratorState</code> de <code>XPathResult</code> deviendra <code>true</code>. Une exception <code>NS_ERROR_DOM_INVALID_STATE_ERR</code> sera également déclenchée.</p>

<h6 id="Exemple_d'itérateur">Exemple d'itérateur</h6>

<pre>var iterator = document.evaluate('//phoneNumber', documentNode, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

try {
  var thisNode = iterator.iterateNext();

  while (thisNode) {
    console.log( thisNode.textContent );
    thisNode = iterator.iterateNext();
  }
}
catch (e) {
  console.log( 'Erreur : L\'arbre du document a été modifié pendant l\'itération ' + e );
}
</pre>

<h5 id="Snapshots">Snapshots</h5>

<p>Lorsque le type de résultat spécifié dans le paramètre <code>resultType</code> est l'une des valeurs suivantes :</p>

<ul>
 <li><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></li>
 <li><code>ORDERED_NODE_SNAPSHOT_TYPE</code></li>
</ul>

<p>L'objet <code>XPathResult</code> renvoyé sera un ensemble statique de nœuds correspondant à l'expression. L'accès à chaque nœud se fera au travers de la méthode <a href="/fr/docs/Web/XPathResult/SnapshotItem"><code>snapshotItem(itemNumber)</code></a> de l'objet <code>XPathResult</code>, où <code>itemNumber</code> est l'indice du nœud à récupérer. On peut accéder au nombre total de nœuds contenus dans l'ensemble par la propriété <code>snapshotLength</code>.</p>

<p>Les snapshots ne changent pas avec les mutations du document. Aussi, contrairement aux itérateurs, le snapshot ne deviendra pas invalide mais peut ne plus correspondre au document actuel. Par exemple, des nœuds peuvent avoir été déplacés, il peut contenir des nœuds qui n'existent plus ou de nouveaux nœuds peuvent avoir été ajoutés.</p>

<h6 id="Exemple_de_snapshot">Exemple de snapshot</h6>

<pre>var nodesSnapshot = document.evaluate('//phoneNumber', documentNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );

for ( var i=0 ; i &lt; nodesSnapshot.snapshotLength; i++ ){
  console.log( nodesSnapshot.snapshotItem(i).textContent );
}
</pre>

<h5 id="Premier_nœud">Premier nœud</h5>

<p>Lorsque le type de résultat spécifié dans le paramètre <code>resultType</code> est l'une des valeurs suivantes :</p>

<ul>
 <li><code>ANY_UNORDERED_NODE_TYPE</code></li>
 <li><code>FIRST_ORDERED_NODE_TYPE</code></li>
</ul>

<p>L'objet <code>XPathResult</code> renvoyé n'est que le premier nœud trouvé correspondant à l'expression XPath. On peut y accéder à l'aide de la propriété <code>singleNodeValue</code> de l'objet <code>XPathResult</code>. Celle-ci vaudra <code>null</code> si l'ensemble de nœuds est vide.</p>

<p>Notez que pour le sous-type non ordonné (le premier), le nœud unique renvoyé ne sera peut-être pas le premier nœud dans l'ordre du document. Dans le cas du sous-type ordonné (le second), vous pouvez être sûr d'obtenir le premier nœud correspondant dans l'ordre du document.</p>

<h6 id="Exemple_de_premier_nœud">Exemple de premier nœud</h6>

<pre class="brush:js">var firstPhoneNumber = document.evaluate('//phoneNumber', documentNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null );

console.log( 'Le premier numéro de téléphone trouvé est ' + firstPhoneNumber.singleNodeValue.textContent );
</pre>

<h4 id="La_constante_ANY_TYPE">La constante ANY_TYPE</h4>

<p>Lorsque le type de résultat spécifié dans le paramètre <code>resultType</code> est la valeur <code>ANY_TYPE</code>, l'objet <code>XPathResult</code> renvoyé pourra être de n'importe quel type, c'est-à-dire du type résultant le plus naturellement de l'évaluation de l'expression.</p>

<p>Il peut s'agir de n'importe lequel des types simples (<code>NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE</code>), <strong>mais</strong> si le type du résultat retourné est un ensemble de nœuds alors il ne pourra être <strong>que</strong> du type <code>UNORDERED_NODE_ITERATOR_TYPE</code>.</p>

<p>Pour déterminer le type utilisé après l'évaluation, on utilisera la propriété <code>resultType</code> de l'objet <code>XPathResult</code>. Les valeurs <a href="#Constantes_d.C3.A9finies_de_XPathResult">constantes</a> de cette propriété sont définies dans l'annexe.</p>

<p>None Yet =====Exemple Any_Type===== &lt;pre&gt; &lt;/pre&gt;</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Dans_un_document_HTML">Dans un document HTML</h3>

<p>Le code suivant est destiné à être inséré dans un fragment JavaScript intégré ou lié au document HTML qui devra être évalué par l'expression XPath.</p>

<p>Pour extraire tous les éléments d'en-tête <code>&lt;h2&gt;</code> d'un document HTML à l'aide de XPath, l'expression <code>xpathExpression</code> est simplement '<code>//h2</code>', où <code>//</code> est l'opérateur descendant récursif (ou RDO) qui correspond aux éléments dont la propriété <code>nodeName</code> est <code>h2</code> n'importe où dans l'arbre du document. Le code complet pour cela est : link to introductory xpath doc</p>

<pre class="brush:js">var headings = document.evaluate('//h2', document, null, XPathResult.ANY_TYPE, null );
</pre>

<p>Notez que, comme HTML ne possède pas d'espace de nommage, <code>null</code> a été passé comme paramètre <code>namespaceResolver</code>.</p>

<p>Comme le but est de chercher les en-têtes dans l'intégralité du document, on utilise l'objet <a href="/fr/docs/Web/API/Document/">document</a> lui-même comme paramètre <code>contextNode</code>.</p>

<p>Le résultat de cette expression est un objet <code>XPathResult</code>. Pour connaître le type de résultat renvoyé, il convient d'évaluer la propriété <code>resultType</code> de l'objet renvoyé. Dans notre cas, il sera évalué à <code>4</code>, c'est donc un <code>UNORDERED_NODE_ITERATOR_TYPE</code>. Il s'agit du type de retour par défaut lorsque le résultat de l'expression XPath est un ensemble de nœuds. Il permet d'accéder à un seul nœud à la fois et ne renvoie pas les nœuds dans un ordre particulier. Pour accéder à ceux-ci, on utilise la méthode <code>iterateNext()</code> de l'objet renvoyé :</p>

<pre>var thisHeading = headings.iterateNext();

var alertText = 'Les en-têtes de niveau 2 présents dans ce document sont :\n'

while (thisHeading) {
  alertText += thisHeading.textContent + '\n';
  thisHeading = headings.iterateNext();
}
</pre>

<p>Une fois l'itération effectuée sur un nœud, nous avons accès à toutes les <a href="/fr/docs/Web/API/Document_Object_Model#Interfaces_du_DOM">Interfaces DOM</a> standards de ce nœud. Après avoir parcouru tous les éléments <code>h2</code> renvoyés à partir de notre expression, chaque nouvel appel à <code>iterateNext()</code> donnera <code>null</code>.</p>

<h3 id="Évaluation_d'un_document_XML_appartenant_à_une_extension">Évaluation d'un document XML appartenant à une extension</h3>

<p>L'exemple suivant utilise un document XML situé à l'adresse <code><a>chrome://yourextension/content/peopleDB.xml</a></code>.</p>

<pre>&lt;?xml version="1.0"?&gt;
&lt;people xmlns:xul = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul" &gt;
  &lt;person&gt;
	&lt;name first="george" last="bush" /&gt;
	&lt;address street="1600 pennsylvania avenue" city="washington" country="usa"/&gt;
	&lt;phoneNumber&gt;202-456-1111&lt;/phoneNumber&gt;
  &lt;/person&gt;
  &lt;person&gt;
	&lt;name first="tony" last="blair" /&gt;
	&lt;address street="10 downing street" city="london" country="uk"/&gt;
	&lt;phoneNumber&gt;020 7925 0918&lt;/phoneNumber&gt;
  &lt;/person&gt;
&lt;/people&gt;
</pre>

<p>Pour rendre les contenus du document XML accessibles depuis l'extension, on crée un objet <code><a href="/fr/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code> pour charger le document de façon synchrone. La variable <code>xmlDoc</code> contiendra le document comme un objet <code><a href="/fr/docs/Web/API/XMLDocument">XMLDocument</a></code> sur lequel on pourra utiliser la méthode <code>evaluate</code>.</p>

<p><em>JavaScript utilisé dans les documents XUL/js des extensions.</em></p>

<pre>var req = new XMLHttpRequest();

req.open("GET", "chrome://yourextension/content/peopleDB.xml", false);
req.send(null);

var xmlDoc = req.responseXML;

var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);

var personIterator = xmlDoc.evaluate('//person', xmlDoc, nsResolver, XPathResult.ANY_TYPE, null );
</pre>

<h4 id="Note">Note</h4>

<p>Quant l'objet XPathResult n'est pas défini, les constantes peuvent être récupérées dans du code privilégié avec <code>Components.inertfaces.nsIDOMXPathResult.ANY_TYPE(CI.nsIDOMXPathResult)</code>. De la même manière un objet XPathEvaluator peut être créé en utilisant :</p>

<pre>Components.classes["@mozille.org/dom/xpath-evaluator;1"].createInstance(Components.interfaces.nsIDOMXPathEvaluator)</pre>

<h2 id="Annexe">Annexe</h2>

<h4 id="Implémentation_d'un_résolveur_d'espace_de_nommage_personnalisé">Implémentation d'un résolveur d'espace de nommage personnalisé</h4>

<p>Cet exemple ne sert que d'illustration. Cette fonction nécessitera de prendre les préfixes d'espaces de nommage depuis la <code>xpathExpression</code> et retourne l'URI correspondante à ces préfixes. Par exemple, l'expression :</p>

<pre>'//xhtml:td/mathml:math'
</pre>

<p>sélectionnera toutes les expressions <a href="/fr/MathML">MathML</a> qui sont les descendantes des éléments (X)HTML de cellules de tableau.</p>

<p>Afin d'associer le préfixe <code>mathml:</code> avec l'URI d'espace de nommage '<code><a href="http://www.w3.org/1998/Math/MathML">http://www.w3.org/1998/Math/MathML</a></code>' et <code>xhtml:</code> avec l'URI <code><a href="http://www.w3.org/1999/xhtml">http://www.w3.org/1999/xhtml</a></code>, nous fournissons une fonction :</p>

<pre>function nsResolver(prefix) {
  var ns = {
    'xhtml' : 'http://www.w3.org/1999/xhtml',
    'mathml': 'http://www.w3.org/1998/Math/MathML'
  };
  return ns[prefix] || null;
}
</pre>

<p>L'appel à <code>document.evaluate</code> ressemblera alors à :</p>

<pre class="eval">document.evaluate( '//xhtml:td/mathml:math', document, nsResolver, XPathResult.ANY_TYPE, null );
</pre>

<h4 id="Implémentation_d'un_espace_de_nommage_par_défaut_pour_les_documents_XML">Implémentation d'un espace de nommage par défaut pour les documents XML</h4>

<p>Comme nous l'avons vu précédemment dans la section <a href="#Impl.C3.A9mentation_d.27un_r.C3.A9solveur_d.27espaces_de_nommage_par_d.C3.A9faut">#Implémentation d'un résolveur d'espaces de nommage par défaut</a>, le résolveur par défaut ne gère pas l'espace de nommage par défaut pour les documents XML. Par exemple, avec ce document :</p>

<pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;feed xmlns="http://www.w3.org/2005/Atom"&gt;
    &lt;entry /&gt;
    &lt;entry /&gt;
    &lt;entry /&gt;
&lt;/feed&gt;
</pre>

<p><code>doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)</code> retournera un ensemble vide, où <code>nsResolver</code> est le résolveur retourné par <code>createNSResolver</code>. Passé un résolveur <code>null</code> ne fonctionne pas mieux.</p>

<p>Une alternative possible est de créer un résolveur personnalisé qui retournera le bon espace de nommage (l'espace de nommage <em>Atom</em> dans ce cas). Par exemple :</p>

<pre> function resolver() {
     return 'http://www.w3.org/2005/Atom';
 }
 doc.evaluate('//entry', doc, resolver, XPathResult.ANY_TYPE, null)
</pre>

<p>Un résolveur plus complexe sera nécessaire si le document utilise de multiple espaces de nommage.</p>

<p>Une approche qui peut potentiellement mieux fonctionner (et autoriser les espaces de nom à ne pas être connus au fil du temps) est décrite dans la section suivante.</p>

<h4 id="Utiliser_les_fonctions_XPath_pour_référencer_les_éléments_avec_un_espace_de_nom_par_défaut">Utiliser les fonctions XPath pour référencer les éléments avec un espace de nom par défaut</h4>

<p>Une autre approche pour identifier les éléments par défaut dans un espace de noms non-null (et qui fonctionne bien pour les expressions XPath dynamiques où les espaces de noms peuvent ne pas être connus) implique la référence à un élément particulier en utilisant un formulaire tel que <code>[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_monid']</code>. Cela évite les problèmes résultant en une requête XPath qui n'est pas capable de détecter l'espace de noms par défaut sur un élément labelisé correctement.</p>

<h4 id="Obtenir_des_éléments_et_des_attributs_d'un_espace_de_noms_spécifique_en_ignorant_le_préfixe">Obtenir des éléments et des attributs d'un espace de noms spécifique en ignorant le préfixe</h4>

<p>Si l'on souhaite avoir une certaine flexibilité dans les espaces de noms en ne nécessitant pas d'utiliser un préfixe spécifique lorsque l'on veut trouver un élément ou un attribut appartenant à un espace de noms, on doit utiliser des techniques spéciales.</p>

<p>Tandis que l'on peut adapter la technique dans la section supérieure pour tester les éléments appartenant à un espace de noms sans regarder le préfix choisi (en utilisant <a href="/XPath/Functions/local-name">local-name()</a> combiné avec <a href="/XPath/Functions/namespace-uri">namespace-uri()</a> à la place de <a href="/XPath/Functions/name">name()</a>), un situation plus compliquée apparaît cependant, si l'on souhaite obtenir un élément avec un attribut appartenant à un espace de noms spécifique dans un prédicat (étant donnée l'absence des variables indépendantes de l'implémentation en XPath 1.0).</p>

<p>Par exemple, on peut essayer (de manière incorrecte) d'obtenir un élément avec un attribut appartenant à un espace de noms de la manière suivante : <code>var xpathlink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];</code></p>

<p>Cela pourrait récupérer des éléments par inadvertance si un de ces attributs existaient avec un nom local "<code>href</code>", mais que c'était un autre attribut qui avait le nom d'espace ciblé (XLink, à la place de <a href="/XPath/Axes/attribute">@href</a>).</p>

<p>Afin d'obtenir des éléments avec l'attribut XLink <code>@href</code> de manière précise (sans par ailleurs être obligé de définir des préfixes dans un résolveur de nom d'espaces), on procéder comme suit :</p>

<pre>var xpathEls = 'someElements[@*[local-name() = "href" and manespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Récupère les éléments avec un simple attribute qui a à la fois le nom local 'href' and l'espace de noms XLink
var thislevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
var thisitemEl = thislevel.iterateNext();
</pre>

<h4 id="Constantes_définies_de_XPathResult">Constantes définies de XPathResult</h4>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">Constante du type de résultat</td>
   <td class="header">Valeur</td>
   <td class="header">Description</td>
  </tr>
  <tr>
   <td>ANY_TYPE</td>
   <td>0</td>
   <td>Un ensemble contenant n'importe quel type qui résulte naturellement de l'évaluation de l'expression. Notez que si c'est un ensemble de noeuds qui doit être retourné, alors le type résultant sera toujours UNORDERED_NODE_ITERATOR_TYPE.</td>
  </tr>
  <tr>
   <td>NUMBER_TYPE</td>
   <td>1</td>
   <td>Un résultat contenant un seul nombre. C'est utile, par exemple, dans une expression XPath utilisant la fonction <code>count()</code>.</td>
  </tr>
  <tr>
   <td>STRING_TYPE</td>
   <td>2</td>
   <td>Un résultat contenant une seule chaîne de caractère.</td>
  </tr>
  <tr>
   <td>BOOLEAN_TYPE</td>
   <td>3</td>
   <td>Un résultat contenant une seule valeur booléenne. C'est utile, par exemple, dans une expression XPath utilisant la fonction <code>not()</code>.</td>
  </tr>
  <tr>
   <td>UNORDERED_NODE_ITERATOR_TYPE</td>
   <td>4</td>
   <td>Un ensemble de nœuds contenant tous les nœuds vérifiant l'expression. Les nœuds ne sont pas nécessairement dans le même ordre que celui dans lequel ils apparaissent dans le document.</td>
  </tr>
  <tr>
   <td>ORDERED_NODE_ITERATOR_TYPE</td>
   <td>5</td>
   <td>Un ensemble de nœuds contenant tous les nœuds vérifiant l'expression. Les nœuds du résultat sont dans le même ordre que celui dans lequel ils apparaissent dans le document.</td>
  </tr>
  <tr>
   <td>UNORDERED_NODE_SNAPSHOT_TYPE</td>
   <td>6</td>
   <td>Un ensemble de nœuds contenant les snapshots de tous les nœuds vérifiant l'expression. Les nœuds ne sont pas nécessairement dans le même ordre que celui dans lequel ils apparaissent dans le document.</td>
  </tr>
  <tr>
   <td>ORDERED_NODE_SNAPSHOT_TYPE</td>
   <td>7</td>
   <td>Un ensemble de nœuds contenant les snapshots de tous les nœuds vérifiant l'expression. Les nœuds du résultat sont dans le même ordre que celui dans lequel ils apparaissent dans le document.</td>
  </tr>
  <tr>
   <td>ANY_UNORDERED_NODE_TYPE</td>
   <td>8</td>
   <td>Un ensemble de nœuds contenant un seul nœud vérifiant l'expression. Le nœud n'est pas nécessairement le premier dans l'ordre du document qui correspond à l'expression.</td>
  </tr>
  <tr>
   <td>FIRST_ORDERED_NODE_TYPE</td>
   <td>9</td>
   <td>Un ensemble de nœuds contenant le premier nœud du document vérifiant l'expression.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/XPath">XPath</a></li>
 <li><a href="http://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info">XML Path Language</a> de <em><a href="http://www.xml.com/pub/a/2000/08/holman/">What is XSLT?</a></em> par G. Ken Holman</li>
</ul>
