---
title: ':-moz-focusring'
slug: 'Web/CSS/:-moz-focusring'
tags:
  - CSS
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: 'Web/CSS/:-moz-focusring'
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>La pseudo-classe <strong><code>:-moz-focusring</code></strong> est similaire à la pseudo-classe {{cssxref(":focus")}} mais ne cible un élément que si celui-ci a le focus <strong>et</strong> qu'un indicateur doit être dessiné autour ou sur cet élément.</p>

<p>Si <code>:-moz-focusring</code> correspond à un élément, <code>:focus</code> correspondra également (bien que l'inverse ne soit pas toujours vrai). Cela dépend de l'agent utilisateur qui indique si un anneau de focus doit être dessiné sur l'élément qui a reçu le focus. Cette indication dépend fortement du système d'exploitation et le comportement de cette pseudo-classe diffèrera donc selon les plateformes et/ou les paramètres du système.</p>

<div class="note">
<p><strong>Note :</strong> Les développeurs utilisent souvent <code>:-moz-focusring</code> pour différencier l'atteinte du focus via le <strong>clic de la souris</strong> ou via <strong>la navigation au clavier (avec la tabulation)</strong>. Cette pseudo-classe est également utile si on crée un <a href="/en-US/docs/Web/Web_Components/Using_custom_elements">élément personnalisé</a> dont on veut changer le style en fonction de son comportement.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">:-moz-focusring</pre>

<h2 id="Exemple">Exemple</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">input {
  margin: 5px;
}

:-moz-focusring {
  color: red;
  outline: 2px dotted green;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input/&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemple")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette fonctionnalité ne fait partie d'aucune spécification bien qu'elle ait <a href="https://lists.w3.org/Archives/Public/www-style/2015Sep/0226.html">discutée avec le groupe de travail</a> et qu'il a été <a href="https://lists.w3.org/Archives/Public/www-style/2015Oct/0012.html">conclus de son ajout dans la spécification CSS sur les sélecteurs de niveau 4 ou 5</a>.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.selectors.-moz-focusring")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{bug("418521")}}</li>
</ul>
