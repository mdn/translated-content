---
title: quotes
slug: Web/CSS/quotes
tags:
  - CSS
  - Propriété
  - Reference
  - Web
translation_of: Web/CSS/quotes
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>quotes</code></strong> indique la façon dont les marques de citation sont affichées.</p>

<div>{{EmbedInteractiveExample("pages/css/quotes.html")}}</div

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeur avec un mot-clé */
quotes: none;

/* Chaînes de caractères */
/* Type &lt;string&gt;         */
quotes: "«" "»";           /* On utilise les guillemets français
                              pour ouvrir et fermer une citation  */
quotes: "«" "»" "‹" "›";   /* On définit deux niveaux de citation */

/* Valeurs globales */
quotes: inherit;
quotes: initial;
quotes: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>Les valeurs <code>open-quote</code> et <code>close-quote</code> de la propriété {{cssxref("content")}} n'entraînent aucune marque de citation.</dd>
 <dt><code>[&lt;string&gt; &lt;string&gt;]+</code></dt>
 <dd>Une ou plusieurs paires de {{cssxref("&lt;string&gt;")}} pour les valeurs <code>open-quote</code> et <code>close-quote</code>. La première paire représente les symboles utilisés pour les citations de plus haut niveau, la deuxième indique comment délimiter une citation dans une citation, la troisième paire permet d'ajouter un niveau d'imbrication supplémentaire et ainsi de suite.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  &lt;q&gt;Bientôt le Lapin aperçut Alice qui furetait ;
  il lui cria d’un ton d’impatience :
    &lt;q&gt;Eh bien ! Marianne, que faites-vous ici ?
    Courez vite à la maison me chercher une paire
    de gants et un éventail ! Allons, dépêchons-nous.
    &lt;/q&gt;
  &lt;/q&gt;
&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">q {
  quotes : "«" "»" '"' '"';
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","100%")}}</p>

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
   <td>{{SpecName("CSS3 Content", "#quotes", "quotes")}}</td>
   <td>{{Spec2("CSS3 Content")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'generate.html#quotes', 'quotes')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.quotes")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("content")}}</li>
</ul>
