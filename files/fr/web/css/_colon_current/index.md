---
title: ':current'
slug: 'Web/CSS/:current'
browser-compat: css.selectors.current
translation_of: Web/CSS/:current
---
<p>{{CSSRef}}</p>

<p>Le sélecteur de <a href="/fr/docs/Web/CSS/Pseudo-classes">pseudo-classe</a> <a href="/fr/docs/Web/CSS">CSS</a> <strong><code>:current</code></strong> est une pseudo-classe agissant dans la dimension temporelle et représentant l'élément actuellement affiché, ou un ancêtre de cet élément. Ce sélecteur peut par exemple servir dans le cas d'une vidéo ayant des sous-titres affichés à l'aide du format <a href="/fr/docs/Web/API/WebVTT_API">WebVTT</a>.</p>

<pre class="brush: css">:current(p, span) {
  background-color: yellow;
}</pre>

<h2 id="syntax">Syntaxe</h2>

<p>{{csssyntax}}</p>

<h2 id="examples">Exemples</h2>

<h3 id="css">CSS</h3>

<pre class="brush: css">:current(p, span) {
  background-color: yellow;
}</pre>

<h3 id="html">HTML</h3>

<pre class="brush: html">&lt;video controls preload="metadata"&gt;
  &lt;source src="video.mp4" type="video/mp4" /&gt;
  &lt;source src="video.webm" type="video/webm" /&gt;
  &lt;track label="Français" kind="subtitles" srclang="fr" src="subtitles.vtt" default&gt;
&lt;/video&gt;</pre>

<h3 id="webvtt">WebVTT</h3>

<pre>FICHIER WEBVTT

1
00:00:03.500 --&gt; 00:00:05.000
Voici le premier sous-titre

2
00:00:06.000 --&gt; 00:00:09.000
Voici le second sous-titre

3
00:00:11.000 --&gt; 00:00:19.000
Voici le troisième sous-titre
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/WebVTT_API">Web Video Text Tracks Format (WebVTT)</a></li>
 <li>{{cssxref(":past")}}</li>
 <li>{{cssxref(":future")}}</li>
</ul>
