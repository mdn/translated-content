---
title: font-kerning
slug: Web/CSS/font-kerning
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-kerning
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>font-kerning</code></strong> contrôle le crénage de la police ; c'est-à-dire l'espace créé entre les lettres. L'information de crénage est stockée dans la police et si la police est <em>bien crénée</em>, cette caractéristique permet aux caractères, quels qu'ils soient, d'être espacés de manière semblable.<img alt="Exemple pour font-kerning" src="font-kerning.png"></p>

<pre class="brush:css  no-line-numbers">font-kerning: auto;
font-kerning: normal;
font-kerning: none;

/* Valeurs globales */
font-kerning: inherit;
font-kerning: initial;
font-kerning: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Ce mot-clé laisse au navigateur le choix d'utiliser ou non le crénage. Quand la taille de la police est petite, le crénage de la police peut avoir l'air étrange et les navigateurs le désactiveront. C'est la valeur par défaut.</dd>
 <dt><code>normal</code></dt>
 <dd>Ce mot-clé force l'application du crénage.</dd>
 <dt><code>none</code></dt>
 <dd>Ce mot-clé empêche le navigateur d'utiliser l'information de crénage stockée dans la police.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#nokern, #kern {
  font-size: 2rem;
  font-family: serif;
}
#nokern {
  font-kerning: none;
}
#kern {
  font-kerning: normal;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="kern"&gt;&lt;/div&gt;
&lt;div id="nokern"&gt;&lt;/div&gt;
&lt;textarea id="input"&gt;AV T. ij&lt;/textarea&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var input  = document.getElementById('input'),
    kern   = document.getElementById('kern'),
    nokern = document.getElementById('nokern');
input.addEventListener('keyup', function() {
  kern.textContent = input.value; /* On met à jour le contenu */
  nokern.textContent = input.value;
});
kern.textContent = input.value; /* On initialise le contenu */
nokern.textContent = input.value;
</pre>

<p>{{EmbedLiveSample('Exemples')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Fonts', '#propdef-font-kerning', 'font-kerning')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.font-kerning")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("font-variant")}}</li>
 <li>{{cssxref("font-variant-position")}}</li>
 <li>{{cssxref("font-variant-east-asian")}}</li>
 <li>{{cssxref("font-variant-caps")}}</li>
 <li>{{cssxref("font-variant-ligatures")}}</li>
 <li>{{cssxref("font-variant-numeric")}}</li>
 <li>{{cssxref("font-variant-alternates")}}</li>
 <li>{{cssxref("font-synthesis")}}</li>
 <li>{{cssxref("letter-spacing")}}.</li>
</ul>
