---
title: Compartimentation CSS (CSS Containment)
slug: Web/CSS/CSS_Containment
tags:
  - CSS
  - CSS Containment
translation_of: Web/CSS/CSS_Containment
original_slug: Web/CSS/Compartimentation_CSS
---
<p>{{CSSRef}}<br>
 L'objectif du module de spécification <em>CSS Containment</em> (pour Compartimentation CSS) consiste à améliorer les performances des pages web en permettant aux développeurs d'isoler un sous-ensemble de la page. Si le navigateur sait que cette partie est indépendante, le rendu peut être optimisé et les performances améliorées. Ce module de spécification définit une seule propriété CSS : {{cssxref("contain")}}. Dans cet article, nous verrons les objectifs principaux de cette spécification.</p>

<h2 id="Exemple_simple">Exemple simple</h2>

<p>De nombreuses pages web disposent de plusieurs sections qui sont indépendantes les unes des autres. Voici une liste d'articles avec leurs titres et leurs contenus.</p>

<pre class="brush: html">&lt;h1&gt;Mon blog&lt;/h1&gt;
&lt;article&gt;
  &lt;h2&gt;Titre d'un article sympa&lt;/h2&gt;
  &lt;p&gt;Un peu de contenu.&lt;/p&gt;
&lt;/article&gt;
&lt;article&gt;
  &lt;h2&gt;Un autre titre pour un autre article&lt;/h2&gt;
  &lt;p&gt;Un peu plus de contenu ici.&lt;/p&gt;
&lt;/article&gt;</pre>

<p>Pour chaque article, on applique la propriété {{cssxref("contain")}} avec la valeur <code>content</code>.</p>

<pre class="brush: css">article {
  contain: content;
}</pre>

<p>Chaque article est indépendant des autres articles de la page et on fournit <code>contain: content</code> afin d'indiquer cette indépendance au navigateur. Ce dernier peut alors prendre des décisions quant au rendu du contenu (par exemple, ne pas travailler sur le rendu d'articles qui ne sont pas sur la zone visible).</p>

<p>Si on fournit <code>contain: content</code> pour chaque <code>&lt;article&gt;</code>, lorsque de nouveaux éléments sont insérés, le navigateur comprendra qu'il n'est pas nécessaire de tout repeindre/redisposer à l'intérieur de l'arbre de l'élément. Toutefois, si <code>&lt;article&gt;</code> est mis en forme de telle façon que sa forme dépend de son contenu (ex. <code>height: auto</code>), le navigateur devra prendre en compte le redimensionnement.</p>

<p>La valeur <code>content</code> est une valeur synthétique pour <code>contain: layout paint</code>. Elle indique au navigateur que la disposition de l'élément est complètement séparée de celle du reste de la page et que tout ce qui concerne l'élément est peint à l'intérieur de son cadre et que rien ne peut dépasser.</p>

<p>Cette information est parfois connue voire évidente pour la ou les personnes qui construisent la page. Toutefois, les navigateurs ne peuvent pas simplement deviner cette intention et partir du principe que chaque article ne débordera pas. Cette propriété permet ainsi d'expliquer la situation au navigateur afin que celui-ci puisse en tirer parti et optimiser ce qu'il peut grâce à cette hypothèse.</p>

<h2 id="Concepts_et_terminologie">Concepts et terminologie</h2>

<p>Cette spécification ne définit qu'une seule propriété : {{cssxref("contain")}}. Les valeurs fournies à cette propriété indiquent le type de compartimentation qu'on souhaite appliquer à l'élément.</p>

<h3 id="Compartimentation_de_la_disposition">Compartimentation de la disposition</h3>

<pre class="brush: css">article {
  contain: layout;
}</pre>

<p>La disposition porte normalement sur l'intégralité d'un document et si on déplace un élément, c'est tout le document qui doit être reconsidéré car tout peut avoir bougé. Avec <code>contain: layout</code>, on indique au navigateur qu'il est uniquement nécessaire de vérifier cet élément et son contenu : tout ce qu'il contient n'affecte pas le reste de la page et la boîte englobante crée un contexte de formatage indépendant.</p>

<p>De plus :</p>

<ul>
 <li>Les dispositions flottantes (avec <code>display:</code><code>float</code>) seront traitées indépendamment.</li>
 <li>Les marges ne fusionneront pas en dehors des limites du bloc englobant ainsi compartimenté</li>
 <li>Le conteneur de la disposition sera un bloc englobant pour les éléments descendants avec des positions <code>absolute</code>/<code>fixed</code>.</li>
 <li>La boîte englobante crée un contexte d'empilement et on peut donc utiliser {{cssxref("z-index")}}.</li>
</ul>

<h3 id="Compartimentation_pour_la_peinture">Compartimentation pour la peinture</h3>

<pre class="brush: css">article {
  contain: paint;
}</pre>

<p>La compartimentation avec <code>paint</code> limite/rogne la boîte jusqu'à la limite de la zone de remplissage (<em>padding</em>) de la boîte principale. Autrement dit, il ne peut pas y avoir de chevauchement visible. On a également les mêmes règles qu'avec <code>layout</code> (voir ci-avant).</p>

<p>De plus, lorsque la boîte englobante est hors de l'écran, le navigateur n'a pas besoin de peindre ses éléments (car ceux-ci sont contenus dans cette boîte au sens géométrique).</p>

<h3 id="Compartimentation_pour_le_dimensionnement">Compartimentation pour le dimensionnement</h3>

<pre class="brush: css">article {
  contain: size;
}</pre>

<p>La compartimentation du dimensionnement, utilisée seule, n'offre pas un grand intérêt quant aux performances. Cette valeur signifie que la taille des éléments fils ne doit pas affecter la taille de l'élément ciblé — sa taille est calculée comme si l'élément n'avait pas de fils.</p>

<p>Si on active <code>contain: size</code>, il faut alors définir la taille de l'élément sur lequel on l'applique. Sinon, dans la plupart des cas, l'élément aura des dimensions nulles.</p>

<h3 id="Compartimentation_pour_le_style">Compartimentation pour le style</h3>

<pre class="brush: css">article {
  contain: style;
}</pre>

<p>Malgré son nom, cette valeur ne fournit pas un style compartimenté comme on pourrait l'avoir avec un <a href="/fr/docs/Web/Web_Components/Using_shadow_DOM"><em>Shadow</em> DOM</a>. Cette valeur sert principlament pour les <a href="/fr/docs/Web/CSS/CSS_Lists/Compteurs_CSS">compteurs CSS</a> qui pourraient changer sur un élément et affecter le reste de l'arborescence.</p>

<p>En utilisant <code>contain: style</code>, on s'assure que les propriétés {{cssxref("counter-increment")}} et {{cssxref("counter-set")}} créent de nouveaux compteurs limités à ce sous-arbre.</p>

<div class="note">
<p><strong>Note :</strong> La valeur <code>style</code> est considérée comme « à risque » dans la spécification actuelle et pourrait ne pas être prise en charge partout (elle n'est actuellement pas prise en charge dans Firefox - novembre 2019).</p>
</div>

<h3 id="Valeurs_spéciales">Valeurs spéciales</h3>

<p>La propriété <code>contain</code> possède deux valeurs spéciales :</p>

<ul>
 <li><code>content</code></li>
 <li><code>strict</code></li>
</ul>

<p>La première (vue dans le premier exemple) est un synonyme pour la conjonction de <code>layout</code> et <code>paint</code>. La spécification décrit cette valeur comme pouvant « raisonnablement être appliquée largement de façon saine ». Elle n'applique pas la compartimentation pour le dimensionnement (<code>size</code>) donc on ne risque pas d'avoir une boîte avec une taille nulle en raison de la taille de ses enfants.</p>

<p>Pour obtenir la compartimentation la plus forte, on utilisera <code>contain: strict</code> qui est synonyme de <code>contain: size layout paint</code> voire on ajoutera ensuite la compartimentation du style pour les navigateurs qui la prennent en charge :</p>

<pre class="brush: css">contain: strict;
contain: strict style;</pre>

<h2 id="Référence">Référence</h2>

<h3 id="Propriétés_CSS">Propriétés CSS</h3>

<ul>
 <li>{{cssxref("contain")}}</li>
</ul>

<h2 id="Ressources_externes">Ressources externes</h2>

<ul>
 <li><a href="https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/">Une introduction à la compartimentation CSS</a></li>
</ul>
