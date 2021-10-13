---
title: '<bgsound> : l''élément d''arrière-plan sonore'
slug: Web/HTML/Element/bgsound
tags:
  - Audio
  - Background Sound
  - Element
  - HTML
  - Internet Explorer
  - Non-standard
  - Deprecated
  - Reference
  - Web
translation_of: Web/HTML/Element/bgsound
browser-compat: html.elements.bgsound
---
<div>{{HTMLRef}}</div>

<div class="warning">
  <p><strong>Attention :</strong> Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.</p>
</div>

<p>L'élément HTML <strong><code>&lt;bgsound&gt;</code></strong> (pour <em>background sound</em> ou « son d'arrière-plan ») est un élément défini par Internet Explorer qui permet d'associer un son d'ambiance à une page.</p>

<div class="warning">
  <p><strong>Attention :</strong> Cet élément n'est pas standard et ne doit pas être utilisé ! Pour intégrer du son à une page web, on utilisera l'élément <a href="/fr/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a>.</p>
</div>

<h2 id="attributes">Attributs</h2>

<dl>
 <dt><strong><code>balance</code></strong></dt>
 <dd>Cet attribut accepte un nombre entre -10 000 et +10 000, qui déterminera comment le volume sera réparti entre les hauts-parleurs (ou les écouteurs).</dd>
 <dt><strong><code>loop</code></strong></dt>
 <dd>Cet attribut indique le nombre de fois que le son doit être joué, grâce à une valeur numérique ou avec le mot-clé <code>infinite</code> (infini).</dd>
 <dt><strong><code>src</code></strong></dt>
 <dd>Cet attribut indique l'URL du fichier sonore qui doit être joué. Il doit être d'un des types suivants : .wav, .au, ou .mid.</dd>
 <dt><strong><code>volume</code></strong></dt>
 <dd>Cet attribut accepte un nombre entre -10 000 et 0 qui déterminera le volume du son.</dd>
</dl>

<h2 id="example">Exemple</h2>

<pre class="brush:html">&lt;bgsound src="son1.mid"&gt;

&lt;bgsound src="son2.au" loop="infinite"&gt;</pre>

<h2 id="usage_notes">Notes d'utilisation</h2>

<p>Une fonctionnalité similaire pouvait être obtenue dans d'autres navigateurs grâce à l'élément <a href="/fr/docs/Web/HTML/Element/embed"><code>&lt;embed&gt;</code></a> afin d'invoquer un lecteur audio. Cet élément étant également obsolète, il est préférable d'utiliser <a href="/fr/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a>.</p>

<p>On peut écrire <code>bgsound</code> avec une balise auto-fermante <code>&lt;bgsound /&gt;</code>. Cependant, puisque cet élément ne fait pas partie du standard, le transformer en XHTML ne le rendra pas valide.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>L'élément standard <a href="/fr/docs/Web/HTML/Element/audio"><code>&lt;audio&gt;</code></a> qui permet d'ajouter du son dans un document HTML.</li>
</ul>
