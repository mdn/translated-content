---
title: window.parent
slug: Web/API/Window/parent
tags:
  - DOM
  - DOM_0
  - Référence_du_DOM_Gecko
translation_of: Web/API/Window/parent
---
<p>{{ ApiRef() }}</p>
<h3 id="R.C3.A9sum.C3.A9">Résumé</h3>
<p>Renvoie une référence à la fenêtre parente ou cadre parent de la fenêtre courante ou du cadre courant.</p>
<h3 id="Syntaxe">Syntaxe</h3>
<pre class="eval"><i>refObj</i> = window.parent
</pre>
<h3 id="Exemple">Exemple</h3>
<pre class="eval">if (window.parent != window.top) {
     // on se trouve dans une imbrication de cadres
}
</pre>
<h3 id="Notes">Notes</h3>
<p>Si une fenêtre n'a pas de parent, sa propriété <b>parent</b> est une référence vers elle-même.</p>
<p>Lorsqu'une fenêtre est chargée dans un ensemble de cadres (frameset), son parent est le cadre parent (c'est-à-dire le document dans lequel se trouve l'élément <code>&lt;frame&gt;</code> qui fait référence à la fenêtre).</p>
<h3 id="Sp.C3.A9cification">Spécification</h3>
<p>{{ DOM0() }}</p>
