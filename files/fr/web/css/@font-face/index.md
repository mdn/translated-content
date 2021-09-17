---
title: '@font-face'
slug: Web/CSS/@font-face
tags:
  - CSS
  - Reference
  - Règle @
translation_of: Web/CSS/@font-face
---
<div>{{CSSRef}}</div>

<p>La <a href="/fr/docs/Web/CSS/R%C3%A8gles_@">règle @</a> <strong><code>@font-face</code></strong> permet de définir les polices d'écriture à utiliser pour afficher le texte de pages web. Cette police peut être chargée depuis un serveur distant ou depuis l'ordinateur de l'utilisateur. Si la fonction <code>local()</code> est utilisée, elle indique à l'agent utilisateur de prendre en compte une police présente sur le poste de l'utilisateur.</p>

<p>En permettant aux auteurs de fournir leurs propres polices, il n'est plus nécessaire de dépendre uniquement des polices qui sont installées sur les postes des utilisateurs.</p>

<p>Il est courant d'utiliser les deux formes <code>url()</code> et <code>local()</code> afin de pouvoir utiliser une police locale si elle est disponible ou d'en télécharger une autre au cas où.</p>

<p>La règle <code>@font-face</code> peut être utilisée au niveau global d'une feuille de style et également au sein d'un groupe lié à <a href="/fr/docs/Web/CSS/Règles_@">une règle @ conditionnelle</a>.</p>

<pre class="brush: css no-line-numbers">@font-face {
 font-family: "Open Sans";
 src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
        url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Descripteurs">Descripteurs</h3>

<dl>
 <dt>{{cssxref("@font-face/font-display", "font-display")}}</dt>
 <dd>Ce descripteur détermine la façon dont une fonte est affichée selon qu'elle a été téléchargée et/ou si elle est prête à être utilisée.</dd>
 <dt>{{cssxref("@font-face/font-family", "font-family")}}</dt>
 <dd>Ce descripteur définit un nom qui sera utilisé pour désigner cette police dans les différentes règles associées.</dd>
 <dt>{{cssxref("@font-face/font-stretch", "font-stretch")}}</dt>
 <dd>Une valeur {{cssxref("font-stretch")}}. Depuis Firefox 61 et pour les navigateurs récents, il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une fonte, par exemple : <code>font-stretch: 50% 200%;</code>.</dd>
 <dt>{{cssxref("@font-face/font-style", "font-style")}}</dt>
 <dd>Une valeur {{cssxref("font-style")}}. Depuis Firefox 61 et pour les navigateurs récents, il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une fonte, par exemple : <code>font-style: oblique 20deg 50deg;</code>.</dd>
 <dt>{{cssxref("@font-face/font-variant", "font-variant")}}</dt>
 <dd>Une valeur {{cssxref("font-variant")}}.</dd>
 <dt>{{cssxref("@font-face/font-weight", "font-weight")}}</dt>
 <dd>Une valeur {{cssxref("font-weight")}}. Depuis Firefox 61 et pour les navigateurs récents, il est possible d'utiliser deux valeurs afin d'indiquer l'intervalle pris en charge par une fonte, par exemple : <code>font-weight: 100 400;</code>.</dd>
 <dt>{{cssxref("font-feature-settings", "font-feature-settings")}}</dt>
 <dd>Ce descripteur permet d'avoir un contrôle avancé sur les fonctionnalités typographiques relatives aux fontes OpenType.</dd>
 <dt>{{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}</dt>
 <dd>Ce descripteur permet d'avoir un contrôle de bas niveau sur les variations des polices OpenType et TrueType en indiquant les nom des axes et des fonctionnalités à faire varier.</dd>
 <dt>{{cssxref("@font-face/src", "src")}}</dt>
 <dd>
 <p>Indique la ressource qui contient les données pour la police d'écriture. Cela peut être une URL vers un fichier distant ou le nom d'une police de caractères présente sur l'ordinateur de l'utilisateur.</p>

 <p>On peut fournir une indication de format au navigateur (afin que celui-ci sélectionne celui qui lui convient le mieux) sous la forme d'une fonction <code>format()</code> qui contient le type comme argument :</p>

 <pre class="brush: css">src: url(ideal-sans-serif.woff) <strong>format("woff")</strong>,
     url(basic-sans-serif.ttf) <strong>format("truetype")</strong>;</pre>

 <p>Les types utilisables sont : <code>"woff"</code>, <code>"woff2"</code>, <code>"truetype"</code>, <code>"opentype"</code>, <code>"embedded-opentype"</code> et <code>"svg"</code>.</p>
 </dd>
 <dt>{{cssxref("@font-face/unicode-range", "unicode-range")}}</dt>
 <dd>L'intervalle des points de code Unicode pour lesquels la règle  <code>@font-face</code> s'applique.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="Police_distante">Police distante</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("/static/styles/libs/font-awesome/fonts/fontawesome-webfont.fdf491ce5ff5.woff");
}

body {
  font-family: "Bitstream Vera Serif Bold", serif;
} </pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt; Et voici Bitstream Vera Serif Bold.&lt;/p&gt;
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Police_distante")}}</p>

<h3 id="Police_locale">Police locale</h3>

<p>Ici, l'agent utilisateur tente d'utiliser la police Helvetica Neue Bold ou HelveticaNeue-Bold si elle existe sur l'ordinateur de l'utilisateur. Sinon, il utilise la police distante MgOpenModernaBold.ttf.</p>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">@font-face {
  font-family: MaHelvetica;
  src: local("Helvetica Neue Bold"),
       local("HelveticaNeue-Bold"),
       url(MgOpenModernaBold.ttf);
  font-weight: bold;
}</pre>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p&gt; Et voici Ma Helvetica.&lt;/p&gt;
</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("Police_locale")}}</p>

<h2 id="Types_MIME_associés_aux_polices">Types MIME associés aux polices</h2>

<p>Voici, selon les différents formats de police, les types MIME associés :</p>

<dl>
 <dt>TrueType</dt>
 <dd><code>font/ttf</code></dd>
 <dt>OpenType</dt>
 <dd><code>font/otf</code></dd>
 <dt>Web Open File Format</dt>
 <dd><code>font/woff</code></dd>
 <dt>Web Open File Format 2</dt>
 <dd><code>font/woff2</code></dd>
</dl>

<h2 id="Notes">Notes</h2>

<ul>
 <li>Les restrictions d'origine (même domaine) s'appliquent également sur les polices web sauf si <a href="/fr/docs/HTTP/Access_control_CORS">les contrôles d'accès HTTP</a> sont paramétrés afin de lever cette restriction.</li>
 <li><code>@font-face</code> ne peut pas être déclaré au sein d'un sélecteur CSS. Ainsi l'exemple suivant ne fonctionnera pas :
  <pre class="brush: css example-bad">.nomClasse {
  @font-face {
    font-family: MyHelvetica;
    src: local("Helvetica Neue Bold"),
         local("HelveticaNeue-Bold"),
         url(MgOpenModernaBold.ttf;
    font-weight: bold;
  }
}</pre>
 </li>
</ul>

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
   <td>{{SpecName('WOFF2.0', '', 'WOFF2 font format')}}</td>
   <td>{{Spec2('WOFF2.0')}}</td>
   <td>Spécification du format de police avec un nouvel algorithme de compression.</td>
  </tr>
  <tr>
   <td>{{SpecName('WOFF1.0', '', 'WOFF font format')}}</td>
   <td>{{Spec2('WOFF1.0')}}</td>
   <td>Spécification du format de police.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Fonts', '#font-face-rule', '@font-face')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.font-face")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/Guide/WOFF">À propos de WOFF</a></li>
 <li><a href="https://everythingfonts.com/font-face">Le générateur de règles <code>@font-face</code> par Everythingfonts </a></li>
 <li><a href="https://www.fontsquirrel.com/tools/webfont-generator">Le générateur de règles @font-face par FontSquirrel</a></li>
 <li><a href="http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/">Des polices obtenues avec <code>@font-face</code> (en anglais, sur hacks.mozilla.org)</a></li>
 <li><a href="http://openfontlibrary.org/">Une bibliothèque de polices ouvertes (<em>Open Font Library</em>)</a></li>
 <li><a href="http://caniuse.com/woff">Où puis-je utiliser WOFF ? (en anglais sur caniuse.com)</a></li>
 <li><a href="http://caniuse.com/svg-fonts">Où puis-je utiliser les polices SVG ?</a></li>
</ul>
