---
title: Cheatsheet HTML
slug: Learn/HTML/Cheatsheet
tags:
  - Cheatsheet
  - HTML
  - Intermediate
  - Learn
translation_of: Learn/HTML/Cheatsheet
original_slug: Apprendre/HTML/Cheatsheet
---
<div>{{draft}}</div>

<p>Lorsqu'on utilise {{Glossary("HTML")}}, une antisèche, une page rapide et récapitulative (<em>cheatsheet</em>) peut s'avérer plutôt pratique pour se souvenir rapidement de quelle balise HTML utiliser dans quel cas. MDN possède également une <a href="/fr/docs/Web/HTML/Element">documentation HTML exhaustive</a> ainsi que différents <a href="/fr/Apprendre/HTML/Comment">tutoriels HTML détaillés</a>. Toutefois, dans la plupart des cas, il suffit juste d'une rapide vérification afin de pouvoir continuer. Cet article, sous la forme d'une antisèche synthétique, est là pour fournir des exemples de codes concis pour les usages les plus fréquents des éléments les plus utilisés.</p>

<div class="note">
<p><strong>Note :</strong> Les balises HTML doivent en premier lieu être utilisées pour leur sémantique et non pour leur apparence. Il est toujours possible de modifier la mise en forme d'une balise donnée grâce à {{Glossary("CSS")}}. Aussi, quand vous utilisez HTML, soyez concentré-e sur la signification plutôt que sur l'apparence finale.</p>
</div>

<h2>Éléments en ligne</h2>

<p>Un élément est une partie d'une page web. Certains éléments sont agissent comme des conteneurs&nbsp;: ils sont grands et contiennent de plus petits éléments. Certains éléments sont plus petits et sont imbriqués dans des éléments plus grands. Par défaut les éléments «&nbsp;en ligne&nbsp;» apparaissent les uns à côté des autres sur une page web. Ils prennent autant de largeur que nécessaire sur une page et s'organisent horizontalement à la façon des mots dans une phrase ou des livres dans une bibliothèque. Tous les éléments en ligne peuvent être placés à l'intérieur de l'élément <code>&lt;body&gt;</code>.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Usage</th>
   <th scope="col">Élément</th>
   <th scope="col">Exemple</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Un lien</td>
   <td>{{HTMLElement("a")}}</td>
   <td id="a-example"><pre class="brush: html">&lt;a href="https://example.org"&gt;
Un lien vers example.org&lt;/a&gt;.</pre>
   {{EmbedLiveSample("a-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Une image</td>
   <td>{{HTMLElement("img")}}</td>
   <td id="img-example"><pre class="brush: html">&lt;img src="beast.png" width="25" /&gt;</pre>
   {{EmbedLiveSample("img-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Un conteneur en ligne</td>
   <td>{{HTMLElement("span")}}</td>
   <td id="span-example"><pre class="brush: html">Utilisé pour grouper des éléments, par exemple pour &lt;span style="color:blue"&gt;les mettre en forme&lt;/span&gt.</pre>
  {{EmbedLiveSample("span-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Emphase du texte</td>
   <td>{{HTMLElement("em")}}</td>
   <td id="em-example"><pre class="brush: html">&lt;em&gt;La classe non ?&lt;/em&gt;.</pre>
   {{EmbedLiveSample("em-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Texte idiomatique</td>
   <td>{{HTMLElement("i")}}</td>
   <td id="i-example"><pre class="brush: html">
Marque la phrase &lt;i&gt;généralement en italique&lt;/i&gt;.</pre>
  {{EmbedLiveSample("i-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Texte d'attention</td>
   <td>{{HTMLElement("b")}}</td>
   <td id="b-example"><pre class="brush: html">
Met en avant un &lt;b&gt;mot ou une phrase d'une certaine importance&lt;/b&gt;.</pre>
  {{EmbedLiveSample("b-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Texte d'importance</td>
   <td>{{HTMLElement("strong")}}</td>
   <td id="strong-example"><pre class="brush: html">&lt;strong&gt;Ce contenu est important !&lt;/strong&gt;</pre>
   {{EmbedLiveSample("strong-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Marquer du texte</td>
   <td>{{HTMLElement("mark")}}</td>
   <td id="mark-example"><pre class="brush: html">&lt;mark&gt;Vous me voyez ?&lt;/mark&gt;</pre>
   {{EmbedLiveSample("mark-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Texte barré</td>
   <td>{{HTMLElement("s")}}</td>
   <td id="s-example"><pre class="brush: html">&lt;s&gt;Je ne suis plus pertinent.&lt;/s&gt;</pre>
   {{EmbedLiveSample("s-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Mise en indice</td>
   <td>{{HTMLElement("sub")}}</td>
   <td id="sub-example"><pre class="brush: html">H&lt;sub&gt;2&lt;/sub&gt;O</pre>
   {{EmbedLiveSample("sub-example", 100, 60)}}</td>
  </tr>
 <tr>
   <td>Texte de commentaire</td>
   <td>{{HTMLElement("small")}}</td>
   <td id="small-example"><pre class="brush: html">
Utilisé pour représenter &lt;small&gt;les petites
notes &lt;/small&gt; d'un document.</pre>
{{EmbedLiveSample("small-example", 100, 60)}}</td>
  </tr>
 <tr>
   <td>Adresse</td>
   <td>{{HTMLElement("address")}}</td>
   <td id="address-example"><pre class="brush: html">&lt;address&gt;15 Rue du Bourg&lt;/address&gt;</pre>
{{EmbedLiveSample("address-example", 100, 60)}}</td>
  </tr>
 <tr>
   <td>Citation textuelle</td>
   <td>{{HTMLElement("cite")}}</td>
   <td id="cite-example"><pre class="brush: html">Pour plus d'informations sur les monstres,
voir &lt;cite&gt;Le monstrueux livre des monstres&lt;/cite&gt;.</pre>
   {{EmbedLiveSample("cite-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Mise en exposant</td>
   <td>{{HTMLElement("sup")}}</td>
   <td id="sup-example"><pre class="brush: html">x&lt;sup&gt;2&lt;/sup&gt;</pre>
   {{EmbedLiveSample("sup-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Citation en ligne</td>
   <td>{{HTMLElement("q")}}</td>
   <td id="q-example"><pre class="brush: html">
&lt;q&gt;Toi aussi mon fils ?&lt;/q&gt;, a-t-il dit.</pre>
{{EmbedLiveSample("q-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Un saut de ligne</td>
   <td>{{HTMLElement("br")}}</td>
   <td id="br-example"><pre class="brush: html">Ligne 1&lt;br&gt;Ligne 2</pre>
{{EmbedLiveSample("br-example", 100, 80)}}</td>
  </tr>
  <tr>
   <td>Un saut de ligne possible</td>
   <td>{{HTMLElement("wbr")}}</td>
   <td id="wbr-example"><pre class="brush: html">
&lt;div style="width: 200px"&gt;
  Llanfair&lt;wbr&gt;pwllgwyngyllgogerychwyrngogogoch.
&lt;/div&gt;</pre>
{{EmbedLiveSample("wbr-example", 100, 80)}}</td>
  </tr>
  <tr>
   <td>Date</td>
   <td>{{HTMLElement("time")}}</td>
   <td id="time-example"><pre class="brush: html">
Utilisé pour mettre en forme la date. Par exemple :
&lt;time datetime="2020-05-24" pubdate&gt;
Publié le 24 mai 2020&lt;/time&gt;.</pre>
{{EmbedLiveSample("time-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Code</td>
   <td>{{HTMLElement("code")}}</td>
   <td id="code-example"><pre class="brush: html">
Ce texte est au format normal,
mais &lt;code&gt;celui-ci représente du code&lt;/code&gt;.</pre>
{{EmbedLiveSample("code-example", 100, 60)}}</td>
  </tr>
  <tr>
   <td>Audio</td>
   <td>{{HTMLElement("audio")}}</td>
   <td id="audio-example"><pre class="brush: html">
&lt;audio controls="controls"&gt;
  &lt;source="t-rex-roar.mp3" type="audio/mpeg"&gt;
  Votre navigateur ne prend pas en charge audio.
&lt;/audio&gt;</pre>
{{EmbedLiveSample("audio-example", 100, 80)}}</td>
  </tr>
  <tr>
   <td>Video</td>
   <td>{{HTMLElement("video")}}</td>
   <td id="video-example"><pre class="brush: html">
&lt;video controls  width="250"
  src="https://archive.org/download/ElephantsDream/ed_hd.ogv" &gt;
  L'élément &lt;code&gt;video&lt;/code&gt; n'est pas pris en charge.
&lt;/video&gt;</pre>
{{EmbedLiveSample("video-example", 100, 200)}}</td>
  </tr>
 </tbody>
</table>

<h2>Éléments de bloc</h2>

<p>Les éléments de bloc, en revanche, occupent toutes la largeur de la page. Ils occupent une ligne entière et ne sont pas apposés les uns à côtés des autres. Ils s'empilent plutôt à l'instar des paragraphes dans un texte.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Usage</th>
   <th scope="col">Élément</th>
   <th scope="col">Exemple</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Un paragraphe</td>
   <td>{{HTMLElement("p")}}</td>
   <td id="p-example"><pre class="brush: html">
&lt;p&gt;Je suis un paragraphe&lt;/p&gt;
&lt;p&gt;Et un autre paragraph&lt;/p&gt;</pre>
{{EmbedLiveSample("p-example", 100, 150)}}
   </td>
  </tr>
  <tr>
   <td>Une citation étendue</td>
   <td>{{HTMLElement("blockquote")}}</td>
   <td id="blockquote-example"><pre class="brush: html">Ils sont alors dit :
&lt;blockquote&gt;L'élément blockquote indique une citation étendue.&lt;/blockquote&gt;</pre>
{{EmbedLiveSample("blockquote-example", 100, 100)}}
  </td>
  </tr>
  <tr>
   <td>Information supplémentaire</td>
   <td>{{HTMLElement("details")}}</td>
   <td id="details-example"><pre class="brush: html">
&lt;details&gt;
  &lt;summary&gt;Anti-sèche HTML&lt;/summary&gt;
  &lt;p&gt;Éléments en ligne&lt;/p&gt;
  &lt;p&gt;Éléments de bloc&lt;/p&gt;
&lt;/details&gt;</pre>
{{EmbedLiveSample("details-example", 100, 150)}}
  </td>
  </tr>
  <tr>
   <td>Une liste non-ordonnée</td>
   <td>{{HTMLElement("ul")}}</td>
   <td id="ul-example"><pre class="brush: html">
&lt;ul&gt;<br>
  &lt;li&gt;Je suis un élément de liste&lt;/li&gt;<br>
  &lt;li&gt;Et moi un autre&lt;/li&gt;<br>
&lt;/ul&gt;</pre>
{{EmbedLiveSample("ul-example", 100, 100)}}
  </td>
  </tr>
  <tr>
   <td>Une liste ordonnée</td>
   <td>{{HTMLElement("ol")}}</td>
   <td id="ol-example"><pre class="brush: html">
&lt;ol&gt;<br>
  &lt;li&gt;Je suis le premier élément&lt;/li&gt;<br>
  &lt;li&gt;Et moi le deuxième&lt;/li&gt;<br>
&lt;/ol&gt;</pre>
{{EmbedLiveSample("ol-example", 100, 100)}}
  </td>
  </tr>
  <tr>
   <td>Une liste de définitions</td>
   <td>{{HTMLElement("dl")}}</td>
   <td id="dl-example"><pre class="brush: html">
&lt;dl&gt;
  &lt;dt&gt;Un terme&lt;/dt&gt;<br>
  &lt;dd&gt;La définition du terme&lt;/dd&gt;
  &lt;dt&gt;Un autre terme&lt;/dt&gt;
  &lt;dd&gt;La définition d'un autre terme&lt;/dd&gt;
&lt;/dl&gt;</pre>
{{EmbedLiveSample("dl-example", 100, 150)}}
   </td>
  </tr>
  <tr>
   <td>Un séparateur horizontal</td>
   <td>{{HTMLElement("hr")}}</td>
   <td id="hr-example"><pre class="brush: html">
avant&lt;hr&gt;après</pre>
{{EmbedLiveSample("hr-example", 100, 100)}}
  </td>
  </tr>
  <tr>
   <td>Un titre</td>
   <td>{{HTMLElement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}}</td>
   <td id="h1-h6-example"><pre class="brush: html">
&lt;h1&gt; Titre de niveau 1 &lt;/h1&gt;
&lt;h2&gt; Titre de niveau 2 &lt;/h2&gt;
&lt;h3&gt; Titre de niveau 3 &lt;/h3&gt;
&lt;h4&gt; Titre de niveau 4 &lt;/h4&gt;
&lt;h5&gt; Titre de niveau 5 &lt;/h5&gt;
&lt;h6&gt; Titre de niveau 6 &lt;/h6&gt;</pre>
{{EmbedLiveSample("h1-h6-example", 100, 350)}}
  </td>
  </tr>
 </tbody>
</table>