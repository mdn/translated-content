---
title: unicode-bidi
slug: Web/CSS/unicode-bidi
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/unicode-bidi
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>unicode-bidi</code></strong>, associée à la propriété {{cssxref("direction")}}, permet de gérer du texte bidirectionnel dans un document. Par exemple, si un bloc de texte contient à la fois du texte qui se lit de droite à gauche et du texte qui se lit de gauche à droite, l'agent utilisateur utilisera un algorithme Unicode complexe pour savoir comment afficher le texte. Cette propriété prend le pas sur l'algorithme et permet au développeur de contrôler l'intégration du texte.</p>

<p>Les propriétés <code>unicode-bidi</code> et {{cssxref("direction")}} sont les deux seules propriétés qui ne sont pas impactées par {{cssxref("all")}}.</p>

<div class="note">
  <p><strong>Note :</strong> Cette propriété est d'abord destinée aux concepteurs de DTD, les auteurs Web ne devraient pas surcharger sa valeur.</p>
</div>

<pre class="brush:css no-line-numbers">/* Avec un mot-clé */
unicode-bidi: normal;
unicode-bidi: embed;
unicode-bidi: isolate;
unicode-bidi: bidi-override;
unicode-bidi: isolate-override;
unicode-bidi: plaintext;

/* Valeurs globales */
unicode-bidi: inherit;
unicode-bidi: initial;
unicode-bidi: unset;
</pre>

<p>{{cssinfo}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>L'élément n'ajoute pas de niveau de logique supplémentaire pour l'intégration et l'application de l'algorithme de bidirectionnalité. Pour les éléments en ligne, le réarrangement des éléments est fait entre les frontières des éléments.</dd>
 <dt><code>embed</code></dt>
 <dd>Si l'élément est en ligne, la valeur ajoute un niveau de logique supplémentaire pour l'intégration. La direction du niveau d'intégration est fournie par la propriété {{cssxref("direction")}}.</dd>
 <dt><code>bidi-override</code></dt>
 <dd>Pour les éléments en ligne, cela surcharge la directionnalité. Pour les conteneurs de bloc, cela crée une surcharge pour les éléments-fils qui sont en ligne et qui ne sont pas dans un autre conteneur de bloc. Cela signifie qu'au sein de l'élément, le réarrangement se fait strictement en fonction de la propriété {{cssxref("direction")}}, la partie implicite apportée par l'algorithme de bidirectionnalité est ignorée.</dd>
 <dt><code>isolate</code></dt>
 <dd>Ce mot-clé indique que la directionnalité du conteneur de l'élément devrait être calculée sans prendre en compte le contenu de cet élément. L'élément est donc <em>isolé</em> (<em>isolated</em> en anglais) de ses voisins. Lorsqu'on applique l'algorithme de résolution bidirectionnelle, l'élément conteneur le traite comme un ou plusieurs <code>U+FFFC Object Replacement Character</code> (autrement dit, comme une image).</dd>
 <dt><code>isolate-override</code></dt>
 <dd>Ce mot-clé applique l'isolation fournie par <code>isolate</code> au contenu environnant et applique la surcharge fournie par <code>bidi-override</code> au contenu intérieur.</dd>
 <dt><code>plaintext</code>{{experimental_inline}}</dt>
 <dd>Ce mot-clé permet de calculer la directionnalité de l'élément sans prendre en compte l'état de son parent ou la valeur de la propriété {{cssxref("direction")}}. La directionnalité est calculée en utilisant les règles P2 et P3 de l'algorithme de bidirectionnalité Unicode.<br>
 Cette valeur permet d'affiché des données qui ont déjà été mises en forme par un outil ayant appliqué l'algorithme de bidirectionnalité Unicode.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<pre class="brush: css">.bible-quote {
  direction: rtl;
  unicode-bidi: embed;
}
</pre>

<h2 id="Spécification">Spécification</h2>

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
   <td>{{SpecName('CSS3 Writing Modes', '#unicode-bidi', 'unicode-bidi')}}</td>
   <td>{{Spec2('CSS3 Writing Modes')}}</td>
   <td>Ajout des mots-clés <code>plaintext</code>, <code>isolate</code> et <code>isolate-override</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visuren.html#propdef-unicode-bidi', 'unicode-bidi')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.unicode-bidi")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("direction")}}</li>
</ul>
