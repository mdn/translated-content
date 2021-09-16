---
title: Document.caretRangeFromPoint()
slug: Web/API/Document/caretRangeFromPoint
tags:
  - API
  - DOM
  - Document
  - Insertion
  - Méthode
translation_of: Web/API/Document/caretRangeFromPoint
---
<p>{{APIRef("DOM")}}{{Non-standard_header}} </p>

<p>La méthode <code><strong>caretRangeFromPoint()</strong></code> de l'interface {{domxref("Document")}} renvoie un objet "Range" (<em>chaîne</em>) pour le fragment de document aux coordonnées spécifiées.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var <em>range</em> = <em>document</em>.caretRangeFromPoint(float <em>x</em>, float <em>y</em>);
</pre>

<h3 id="Retourne">Retourne</h3>

<p>Une des réponses suivantes :</p>

<ul>
 <li>Un {{domxref("Range")}}.</li>
 <li><code>Null</code> si <strong>x</strong> ou <strong>y</strong> sont négatifs, hors de la fenêtre, ou s'il n'y a pas de noeud d'entrée de texte.</li>
</ul>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt>x</dt>
 <dd>Une position horizontale dans la fenêtre courante.</dd>
 <dt>y</dt>
 <dd>Une position verticale dans la fenêtre courante.</dd>
</dl>

<h2 id="Example">Exemple</h2>

<p>Démonstration de base : lorsque vous cliquez dans un paragraphe, insérez un saut de ligne à la position du curseur :</p>

<h3 id="Contenu_HTML">Contenu HTML</h3>

<pre class="brush: html">&lt;p&gt;Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.&lt;/p&gt;</pre>

<h3 id="Contenu_JavaScript">Contenu JavaScript</h3>

<pre class="brush: js">function insertBreakAtPoint(e) {

    var range;
    var textNode;
    var offset;

    if (document.caretPositionFromPoint) {
        range = document.caretPositionFromPoint(e.clientX, e.clientY);
        textNode = range.offsetNode;
        offset = range.offset;

    } else if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(e.clientX, e.clientY);
        textNode = range.startContainer;
        offset = range.startOffset;
    }

    // divise seulement les TEXT_NODE (<em>noeuds texte</em>)
    if (textNode &amp;&amp; textNode.nodeType == 3) {
        var replacement = textNode.splitText(offset);
        var br = document.createElement('br');
        textNode.parentNode.insertBefore(br, replacement);
    }
}

var paragraphs = document.getElementsByTagName("p");
for (i=0 ; i &lt; paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", insertBreakAtPoint, false);
}</pre>

<p>{{ EmbedLiveSample('Example', '', '', '', 'Web/API/Document/caretRangeFromPoint') }}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Document.caretRangeFromPoint")}}</p>
