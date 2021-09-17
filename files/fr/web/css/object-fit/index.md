---
title: object-fit
slug: Web/CSS/object-fit
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/object-fit
---
<div>{{CSSRef}}</div>

<p>La propriété CSS <strong><code>object-fit</code></strong> définit la façon dont le contenu d'un <a href="/fr/docs/Web/CSS/Élément_remplacé">élément remplacé</a> ({{HTMLElement("img")}} ou {{HTMLElement("video")}} par exemple) doit s'adapter à son conteneur en utilisant sa largeur et sa hauteur.</p>

<div>{{EmbedInteractiveExample("pages/css/object-fit.html")}}</div>

<p>Selon la valeur utilisée pour <code>object-fit</code>, l'élément peut être rogné, mis à l'échelle ou étiré, afin de remplir la boîte qui le contient.</p>

<div class="note">
<p><strong>Note :</strong> Il est possible de modifier l'alignement du contenu de l'élément remplacé au sein de la boîte de l'élément grâce à la propriété {{cssxref("object-position")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
object-fit: fill;
object-fit: contain;
object-fit: cover;
object-fit: none;
object-fit: scale-down;

/* Valeurs globales */
object-fit: inherit;
object-fit: initial;
object-fit: unset;
</pre>

<p>La propriété <code>object-fit</code> peut être définie grâce à l'un des mots-clés suivants.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>contain</code></dt>
 <dd>Le contenu remplacé est dimensionné pour maintenir ses proportions tout en étant ajusté à la boîte de contenu : sa taille réelle est résolue en utilisant la largeur et la hauteur de l'élément comme contraintes de contenant.</dd>
 <dt><code>cover</code></dt>
 <dd>Le contenu remplacé est dimensionné pour maintenir son ratio d'affichage tout en remplissant toute la boîte de contenu. La taille réelle est calculée pour couvrir la zone décrite par la hauteur et la largeur de l'élément. Si les ratios de l'objet et de la boîte ne correspondent pas, le contenu remplacé sera rogné.</dd>
 <dt><code>fill</code></dt>
 <dd>Le contenu remplacé est dimensionné pour remplir la boîte de contenu. La taille réelle de l'objet est déterminée grâce à la hauteur et à la largeur de l'élément. Il est donc étiré afin de remplir la boîte.</dd>
 <dt><code>none</code></dt>
 <dd>Le contenu remplacé n'est pas redimensionné à l'intérieur de l'élément.</dd>
 <dt><code>scale-down</code></dt>
 <dd>Le contenu est dimensionné comme si <code>none</code> ou <code>contain</code> étaient spécifiés, on prend celui qui aboutirait à une taille réelle plus petite.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;h2&gt;object-fit: fill&lt;/h2&gt;
  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="fill"/&gt;

  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="fill narrow"/&gt;

  &lt;h2&gt;object-fit: contain&lt;/h2&gt;
  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="contain"/&gt;

  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="contain narrow"/&gt;

  &lt;h2&gt;object-fit: cover&lt;/h2&gt;
  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="cover"/&gt;

  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="cover narrow"/&gt;

  &lt;h2&gt;object-fit: none&lt;/h2&gt;
  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="none"/&gt;

  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="none narrow"/&gt;

  &lt;h2&gt;object-fit: scale-down&lt;/h2&gt;
  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="scale-down"/&gt;

  &lt;img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="scale-down narrow"/&gt;

&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">h2 {
  font-family: 'Courier New', monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 940px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.narrow {
  width: 100px;
  height: 150px;
  margin-top: 10px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', 500, 450)}}</p>

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
   <td>{{SpecName('CSS4 Images', '#the-object-fit', 'object-fit')}}</td>
   <td>{{Spec2('CSS4 Images')}}</td>
   <td>Les mots-clés <code>from-image</code> et <code>flip</code> ont été ajoutés.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Images', '#the-object-fit', 'object-fit')}}</td>
   <td>{{Spec2('CSS3 Images')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.object-fit")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("background-size")}}</li>
 <li>Les autres propriétés CSS liées aux images :
  <ul>
   <li>{{cssxref("object-position")}}</li>
   <li>{{cssxref("image-orientation")}}</li>
   <li>{{cssxref("image-rendering")}}</li>
   <li>{{cssxref("image-resolution")}}</li>
  </ul>
 </li>
</ul>
