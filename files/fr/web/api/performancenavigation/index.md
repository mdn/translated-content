---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Déprécié
  - Interface
  - Navigation Timing
  - Navigation Timing API
  - Performance
  - PerformanceNavigation
  - Reference
  - Timing
translation_of: Web/API/PerformanceNavigation
---
<p>{{APIRef("Navigation Timing")}}</p>

<div class="warning">
  <p><strong>Attention :</strong> cette interface est dépréciée dans la spécification <a href="https://w3c.github.io/navigation-timing/#obsolete">Navigation Timing Level 2</a>. Veuillez utiliser l'interface <a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a> à la place.</p>
</div>

<p>L'ancienne interface <strong><code>PerformanceNavigation</code></strong> représente des informations sur la façon dont la navigation vers le document actuel a été effectuée.</p>

<p>Un objet de ce type peut être obtenu en appelant l'attribut en lecture seule <a href="/fr/docs/Web/API/Performance/navigation"><code>Performance.navigation</code></a>.</p>

<h2 id="Properties">Propriétés</h2>

<p><em>L'interface <code>PerformanceNavigation</code> n'hérite d'aucune propriété.</em></p>

<dl>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigation/type"><code>PerformanceNavigation.type</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Une valeur <code>unsigned short</code> qui indique comment la navigation vers cette page s'est faite. Les valeurs possibles sont :
  <dl>
    <dt><code>TYPE_NAVIGATE</code> (0)</dt>
    <dd>La page a été consultée en suivant un lien, un signet, un formulaire ou un script, ou en tapant l'URL dans la barre d'adresse.</dd>
    <dt><code>TYPE_RELOAD</code> (1)</dt>
    <dd>L'accès à la page s'est fait en cliquant sur le bouton Recharger ou via la méthode <a href="/fr/docs/Web/API/Location/reload"><code>Location.reload()</code></a>.</dd>
    <dt><code>TYPE_BACK_FORWARD</code> (2)</dt>
    <dd>On a accédé à cette page en naviguant dans l'historique.</dd>
    <dt><code>TYPE_RESERVED</code> (255)</dt>
    <dd>De n'importe quelle autre manière.</dd>
  </dl>
  </dd>
  <dt><a href="/fr/docs/Web/API/PerformanceNavigation/redirectCount"><code>PerformanceNavigation.redirectCount</code></a> {{readonlyInline}} {{deprecated_inline}}</dt>
  <dd>Un <code>unsigned short</code> représentant le nombre de <strong>Redirections</strong> effectués avant d'atteindre la page.</dd>
</dl>

<h2 id="Methods">Méthodes</h2>

<p><em>L'interface <code>Performance</code> n'hérite d'aucune méthode.</em></p>

<dl>
 <dt><a href="/fr/docs/Web/API/PerformanceNavigation/toJSON"><code>PerformanceNavigation.toJSON()</code></a> {{deprecated_inline}}</dt>
 <dd>Un sérialiseur renvoyant un objet json représentant l'objet <code>PerformanceNavigation</code>.</dd>
</dl>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécifications</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Navigation Timing', '#performancenavigation', 'PerformanceNavigation')}}</td>
      <td>{{Spec2('Navigation Timing')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.PerformanceNavigation")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>L'interface <a href="/fr/docs/Web/API/Performance"><code>Performance</code></a> qui permet d'accéder à un objet de ce type.</li>
  <li><a href="/fr/docs/Web/API/PerformanceNavigationTiming"><code>PerformanceNavigationTiming</code></a> (fait partie de Navigation Timing Level 2) {{experimental_inline}}</li>
</ul>
