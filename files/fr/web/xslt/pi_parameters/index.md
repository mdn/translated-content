---
title: Paramètres des instructions de traitement
slug: Web/XSLT/PI_Parameters
tags:
  - XSLT
translation_of: Web/XSLT/PI_Parameters
original_slug: Web/XSLT/Paramètres_des_instructions_de_traitement
---
<h3 id="Pr.C3.A9sentation">Présentation</h3>

<p>XSLT permet de passer des paramètres à une feuille de style lors de son exécution. C'était déjà possible depuis quelques temps dans l'<a href="fr/XSLTProcessor">XSLTProcessor</a> sous JavaScript, mais pas lors de l'utilisation de l'instruction de traitement (<em>PI</em>, pour Processing Instruction) <code>&lt;?xml-stylesheet?&gt;</code>.</p>

<p>Pour résoudre cela, deux nouvelles PI (Instructions de traitement) ont été implémentées dans <a href="fr/Firefox_2">Firefox 2</a> (voir {{ Anch("Versions supportées") }} plus bas pour plus de détails), <code>&lt;?xslt-param?&gt;</code> et <code>&lt;?xslt-param-namespace?&gt;</code>. Ces deux PI peuvent contenir des « pseudo attributs » de la même manière que la PI (Instruction de traitement) <code>xml-stylesheet</code>.</p>

<p>L'exemple suivant passe les deux paramètres <code>color</code> et <code>size</code> à la feuille de style style.xsl :</p>

<pre class="eval">&lt;?xslt-param name="color" value="blue"?&gt;
&lt;?xslt-param name="size" select="2"?&gt;
&lt;?xml-stylesheet type="text/xsl" href="style.xsl"?&gt;
</pre>

<p>Notez que ces PI n'ont aucun effet lorsque la transformation est faite à l'aide de l'objet <code>XSLTProcessor</code> en JavaScript.</p>

<h3 id="Instructions_de_traitement">Instructions de traitement</h3>

<p>Les attributs des PI <code>xslt-param</code> et <code>xslt-param-namespace</code> sont analysés en utilisant les règles définies dans <a href="http://www.w3.org/TR/xml-stylesheet/">xml-stylesheet</a>. Tous les attributs non reconnus sont ignorés. L'analyse d'un attribut n'échouera pas à cause de la présence d'un attribut non reconnu tant que cet attribut respecte la syntaxe définie dans <code>xml-stylesheet</code>.</p>

<p>Les deux instructions de traitement <code>xslt-param</code> et <code>xslt-param-namespace</code> doivent apparaître dans le prologue du document, c'est-à-dire avant la balise du premier élément. Toutes les PI du prologue sont exécutées, celles présentes avant une PI <code>xml-stylesheet</code> comme celles présentes après.</p>

<p>S'il existe plusieurs PI <code>xml-stylesheet</code> les paramètres s'appliquent à toutes les feuilles de style, conséquence du fait que selon la spécification XSLT, toutes les feuilles de style sont importées concaténées en une seule feuille.reference? Notez que les PI XSLT <code>xml-stylesheet</code> multiples ne sont pas supportées par Firefox à l'heure actuelle.</p>

<h4 id="xslt-param">xslt-param</h4>

<p>La PI <code>xslt-param</code> accepte quatre attributs :</p>

<dl>
 <dt>name</dt>
 <dd>La partie locale du nom du paramètre. Aucune vérification de syntaxe n'est faite pour cet attribut. Cependant, si ce n'est pas un <a href="http://www.w3.org/TR/REC-xml-names/#NT-NCName">NCName</a> valide, il ne correspondra à aucun paramètre de la feuille de style.</dd>
 <dt>namespace</dt>
 <dd>L'espace de nommage du nom du paramètre. Aucune vérification de syntaxe n'est faite pour cet attribut.</dd>
 <dt>value</dt>
 <dd>Contient la valeur de chaîne du paramètre. La valeur de l'attribut est utilisée comme valeur du paramètre. Le type de donnée sera toujours<em>chaîne</em>.</dd>
 <dt>select</dt>
 <dd>Un expression <a href="fr/XPath">XPath</a> pour le paramètre. La valeur de cet attribut est analysée comme une expressions XPath. Le résultat de l'évaluation de l'expression est utilisé comme valeur pour le paramètre.</dd>
</dl>

<p>Si l'attribut <strong>name</strong> est absent ou vide, la PI est ignorée.</p>

<p>Si l'attribut <strong>namespace</strong> est absent ou vide, l'espace de nommage <code>null</code> est utilisé.</p>

<p>Spécifier un nom de paramètre qui n'existe pas dans la feuille de style (ou qui soit une variable dans la feuille de style) n'est pas une erreur. La PI est simplement ignorée dans ce cas.</p>

<p>Si les attributs <strong>value</strong> et <strong>select</strong> sont tous deux présents (ou absents) la PI est ignorée.</p>

<p>Notez que <code>value="..."</code> n'est pas strictement égal à <code>select="'...'"</code> car value peut contenir à la fois des caractères apostrophe et des caractères guillemet.</p>

<h5 id="Exemples">Exemples</h5>

<p>Le paramètre <code>color</code> contient la chaîne <code>red</code> :</p>

<pre class="eval">&lt;?xslt-param name="color" value="red"?&gt;
</pre>

<p>Le paramètre <code>columns</code> contient <code>2</code> :</p>

<pre class="eval">&lt;?xslt-param name="columns" select="2"?&gt;
</pre>

<p>Le paramètre <code>books</code> contient l'ensemble de noeuds qui regroupe tous les éléments <code>&lt;book&gt;</code> de l'espace de nommage <code>null</code> :</p>

<pre class="eval">&lt;?xslt-param name="books" select="//book"?&gt;
</pre>

<p>Le paramètre <code>show-toc&lt;code&gt; contient le booléen &lt;code&gt;true</code> :</p>

<pre class="eval"> &lt;?xslt-param name="show-toc" select="true()"?&gt;
</pre>

<h5 id="Le_contexte_de_l.27attribut_select">Le contexte de l'attribut<em>select</em></h5>

<p>Le contexte suivant est utilisé pour analyser et évaluer l'expression de l'attribut <strong>select</strong>.</p>

<ul>
 <li>Le nœud de contexte est le nœud utilisé comme nœud courant initial lors de l'exécution de la feuille de style.</li>
 <li>La position du contexte est la position du noeud de contexte dans la liste initiale de nœuds courants utilisée lors de l'exécution de la feuille de style.</li>
 <li>La taille du contexte est la taille de la liste initiale de nœuds courants utilisée lors de l'exécution de la feuille de style.</li>
 <li>Aucune variable n'est disponible.</li>
 <li>La bibliothèque de fonctions est la bibliothèque standard de fonctions XPath.</li>
 <li>Les déclarations d'espace de nommage sont déterminées par les PI <code>xslt-param-namespace</code>, voir ci-dessous.</li>
</ul>

<p>Si l'attribut <strong>select</strong> ne peut pas être analysé ou exécuté, la PI est ignorée (en particulier, l'attribut <strong>value</strong> ne sera pas utilisé comme valeur de secours).</p>

<h4 id="xslt-param-namespace">xslt-param-namespace</h4>

<p><code>xslt-param-namespace</code> accepte deux attributs :</p>

<dl>
 <dt>prefix</dt>
 <dd>Le préfixe mappé.</dd>
 <dt>namespace</dt>
 <dd>L'espace de nommage vers lequel le préfixe mappe.</dd>
</dl>

<p>Une PI <code>xslt-param-namespace</code> affecte l'expression de l'attribut <strong>select</strong> de tous les <code>xslt-param</code> qui la suivent. Cela s'applique même s'il y a d'autres nœuds tels que des commentaires ou d'autres PI entre les PI <code>xslt-param-namespace</code> et <code>xslt-param</code>.</p>

<p>Utiliser le même préfixe pour plusieurs instructions de traitement n'est pas une erreur, chaque nouvelle PI ne fait que changer l'espace de nommage vers lequel le préfixe renvoie.</p>

<p>Si <strong>prefix</strong> est absent, vide ou égal un à NCName invalide, la PI est ignorée.</p>

<p>Si <strong>namespace</strong> est absent, la PI est ignorée. Si <strong>namespace</strong> est vide, le mappage du préfixe est supprimé.</p>

<h5 id="Exemples_2">Exemples</h5>

<p>Le paramètre <code>books</code> contient l'ensemble de noeuds qui regroupe tous les éléments <code>&lt;book&gt;</code> de l'espace de nommage <code>http://www.example.org/myNamespace</code> :</p>

<pre class="eval">&lt;?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?&gt;
&lt;?xslt-param name="books" select="//my:book"?&gt;
</pre>

<h3 id="Versions_support.C3.A9es">Versions supportées</h3>

<p>Supportées depuis Firefox 2.0.0.1. Dans la version 2, l'attribut <strong>value</strong> est supporté mais l'attribut <strong>select</strong> provoque des plantages pour certaines expressions.</p>

<h3 id="Possibilit.C3.A9s_de_d.C3.A9veloppements_futurs">Possibilités de développements futurs</h3>

<p>Devons-nous autoriser n'importe quelle fonction XSLT dans les expressions ? <code>document()</code> semble utile, mais il semble difficile de conserver le fait que <code>generate-id()</code> devrait produire la même chaîne pour un même document.</p>

<p>Interwiki Language Links</p>
