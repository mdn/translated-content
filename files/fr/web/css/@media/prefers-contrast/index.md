---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/prefers-contrast
---
<div>{{CSSRef}}{{SeeCompatTable}}{{draft}}</div>

<p>La <a href="/fr/docs/Web/CSS/Requêtes_média/Utiliser_les_Media_queries#Caractéristiques_média_(media_features)">caractéristique média</a> <strong><code>prefers-contrast</code></strong> permet de détecter si l'utilisateur a configuré son système pour utiliser un contraste élevé.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<dl>
 <dt><code><dfn>no-preference</dfn></code></dt>
 <dd>Cette valeur indique que l'utilisateur n'a exprimé aucune préférence particulière. La valeur de ce mot-clé est évaluée à <code>false</code> dans un contexte booléen.</dd>
 <dt><code>high</code></dt>
 <dd>Cette valeur indique que l'utilisateur a configuré son système pour avoir un contraste plus élevé.</dd>
 <dt><code><dfn>low</dfn></code></dt>
 <dd>Cette valeur indique que l'utilisateur a configuré son système afin d'avoir un niveau de contraste plus faible.</dd>
</dl>

<h2 id="Préférences_utilisateur">Préférences utilisateur</h2>

<p>À l'heure actuelle, aucun agent utilisateur n'implémente cette fonctionnalité bien que différents systèmes d'exploitation prennent en charge ce type de paramètre.</p>

<h2 id="Exemples">Exemples</h2>

<p>Par défaut, cet exemple présente un contraste trop faible pour la lisibilité.</p>

<h3 id="HTML">HTML</h3>

<pre>&lt;div class="contrast"&gt;Une boîte avec un contraste faible.&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre>.contrast {
  color: grey;
}

@media (prefers-contrast: high) {
  .contrast {
    color: black;
  }
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS5 Media Queries', '#descdef-media-prefers-contrast', 'prefers-contrast')}}</td>
   <td>{{Spec2('CSS5 Media Queries')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.at-rules.media.prefers-contrast")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>La caractéristique média spécifique à Microsoft <code><a href="https://msdn.microsoft.com/library/Hh771830">-ms-high-contrast</a></code></li>
</ul>

<p>{{QuickLinksWithSubpages("/fr/docs/Web/CSS/@media/")}}</p>
