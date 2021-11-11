---
title: Contraste de la couleur
slug: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
tags:
  - Accessibilité
  - WCAG
  - contraste
translation_of: Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast
original_slug: Web/Accessibility/Understanding_WCAG/Perceivable/Contraste_de_la_couleur
---
<p>Le <a href="https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio">contraste de la couleur</a> entre l'arrière-plan et le contenu de premier-plan (qui est en général du texte) doit être assez prononcé pour assurer la lisibilité.</p>

<p>Lors de la conception d'interfaces lisibles pour différentes capacités de vision, les directives WCAG recommandent les rapports de contraste suivants:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Type de contenu</th>
   <th scope="col">Ratio minimum (Note AA)</th>
   <th scope="col">Ratio amélioré (Note AAA)</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Corps</td>
   <td>4.5 : 1</td>
   <td>7 : 1</td>
  </tr>
  <tr>
   <td>Texte grande échelle (120-150% plus large que le corps)</td>
   <td>3 : 1</td>
   <td>4.5 : 1</td>
  </tr>
  <tr>
   <td>Composants d'interface utilisateur actifs et objets graphiques tels que des icônes et des graphiques</td>
   <td>3 : 1</td>
   <td>Non défini</td>
  </tr>
 </tbody>
</table>

<p>Ces ratios ne s'appliquent pas au texte "accessoire", comme les contrôles inactifs, les logotypes ou le texte purement décoratif.</p>

<p>Voir la section {{anch("Solution")}} ci-dessous pour plus d'informations.</p>

<p>Un bon contraste des couleurs sur votre site profite à tous vos utilisateurs, mais celà est particulièrement intéressant pour les utilisateurs souffrant de certains types de daltonisme et d'autres particularités similaires, qui rencontrent un faible contraste et ont du mal à faire la différence entre des couleurs proches. En effet, ces utilisateurs ne voient pas les zones claires et sombres aussi facilement que ceux sans ces particularités et ont donc du mal à voir les bords, les bordures et d'autres détails.</p>

<p>C'est bien d'avoir un design cool sur votre site, mais le design ne vaut rien si vos utilisateurs ne peuvent pas lire votre contenu.</p>

<h2 id="Exemples">Exemples</h2>

<p>Jetons un coup d'œil à du code HTML et CSS assez simple:</p>

<pre class="brush: html">&lt;div class="bon"&gt;Bon contraste&lt;/div&gt;
&lt;div class="mauvais"&gt;Mauvais contraste&lt;/div&gt;</pre>

<pre class="brush: css">div {
  /* Styles généraux de div ici */
}

.bon {
  background-color: #fae6fa;
}

.mauvais {
  background-color: #400064;
}</pre>

<p>Les deux textes ont leur couleur noire par défaut. La "bonne" <code>&lt;div&gt;</code> a un fond violet clair, ce qui rend le texte facile à lire:</p>

<h3 id="Bon_exemple">Bon exemple</h3>

<pre class="brush: html">    &lt;div class="bon"&gt;
      Bon contraste
    &lt;/div&gt;</pre>

<pre class="brush: css">div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px black;
}

.bon {
  background-color: #fae6fa;
}</pre>

<p>{{EmbedLiveSample('Bon_exemple', '100%', '100')}}</p>

<h3 id="Mauvais_exemple">Mauvais exemple</h3>
<p>La "mauvaise" <code>&lt;div&gt;</code>, en revanche, a un fond violet très foncé, ce qui rend le texte beaucoup plus difficile à lire:</p>

<pre class="brush: html">    &lt;div class="mauvais"&gt;
      Mauvais contraste
    &lt;/div&gt;</pre>

<pre class="brush: css">div {
  font-family: sans-serif;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 250px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 1px 1px 1px black;
}

.mauvais {
  background-color: #400064;
}</pre>

<p>{{EmbedLiveSample('Mauvais_exemple', '100%', '100')}}</p>


<h2 id="Solution">Solution</h2>

<p>Lorsque vous choisissez un jeu de couleurs pour votre site Web, choisissez des couleurs de premier plan et d'arrière-plan qui offrent un bon contraste. Faites en sorte que le contraste des couleurs soit aussi bon que possible dans vos contraintes de conception - optez idéalement pour la note AAA (voir paragraphe 1.4.6 ci-dessous), mais répondez au moins à la note AA (voir paragraphe 1.4.3 ci-dessous).</p>

<p>Si vous incluez du contenu non textuel tel qu'une vidéo ou une animation, vous devrez suivre le paragraphe 1.4.11 (encore une fois, voir ci-dessous).</p>

<p>Pour vérifier votre contraste lorsque vous effectuez un choix de couleurs, vous pouvez utiliser le <a href="https://webaim.org/resources/contrastchecker/">Vérificateur de Contraste des Couleurs</a> de WebAIM.</p>

<p>Vous pouvez également vérifier le contraste des couleurs directement via les outils de développement de Firefox — consultez notre guide de l'<a href="/fr/docs/Tools/Accessibility_inspector">Inspecteur de l'accessibilité</a>, et en particulier la section <a href="/fr/docs/Outils/Inspecteur_accessibilite#S%C3%A9lecteur_d'accessibilit%C3%A9">Vérifier les problèmes d'accessibilité</a>. Essayez de les utiliser sur les exemples dans la section de description.</p>

<h2 id="Critères_de_réussite_associés_aux_WCAG">Critères de réussite associés aux WCAG</h2>

<dl>
 <dt><a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3 Contraste minimum (AA)</a></dt>
 <dd>Le contraste des couleurs entre le contenu d'arrière-plan et de premier plan doit être au minimum pour garantir la lisibilité:
 <ul>
  <li>Le texte et son arrière-plan doivent avoir un ratio de contraste d'au moins 4.5:1.</li>
  <li>Le texte d'en-tête (ou juste "plus grand") doit avoir un ratio d'au moins 3:1. Le texte "plus grand" est défini comme au moins 18pt, ou 14pt en gras.</li>
 </ul>
 </dd>
 <dt><a href="https://www.w3.org/TR/WCAG21/#contrast-enhanced">1.4.6 Contraste amélioré (AAA)</a></dt>
 <dd>Cela suit et s'appuie sur le critère 1.4.3.
 <ul>
  <li>Le texte et son arrière-plan doivent avoir un ratio de contraste d'au moins 7:1.</li>
  <li>Le texte d'en-tête (ou juste "plus grand") doit avoir un ratio d'au moins 4.5:1.</li>
 </ul>
 </dd>
 <dt><a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11 Contraste non textuel (AA)</a> (ajouté en 2.1)</dt>
 <dd>Il doit y avoir un ratio de contraste de couleur minimum de 3 à 1 pour les composants de l'interface utilisateur et les objets graphiques.</dd>
</dl>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Learn/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur">Couleur et contraste de couleur</a></li>
 <li><a href="/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML#%C3%89tiquettes_multiples">Étiquettes multiples</a></li>
 <li><a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">Comprendre le contraste non textuel</a></li>
</ul>
