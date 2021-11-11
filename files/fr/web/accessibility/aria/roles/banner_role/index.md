---
title: Utilisation du rôle banner
slug: Web/Accessibility/ARIA/Roles/Banner_role
tags:
  - ARIA
  - Accessibilité
  - NeedsContent
  - Rôle
translation_of: Web/Accessibility/ARIA/Roles/Banner_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_role_banner
---
<h3 id="Description">Description</h3>

<p>Cette technique présente l’utilisation du rôle <a href="https://www.w3.org/TR/wai-aria/roles#banner"><code>banner</code> (en)</a>.</p>

<p>La zone d’entête principale d'un site devrait être structurée avec  <code>&lt;header role="banner"&gt;</code>. Cette zone peut contenir le logo du site, sa description, le moteur de recherche.</p>

<p>Une page web ne doit pas contenir plus d'un rôle <code>banner</code>, mais il est tout à fait possible d'utiliser plusieurs éléments <code>&lt;header&gt;</code> dans une page.</p>

<h3 id="Effets_possibles_sur_les_agents_utilisateurs_et_les_technologies_d’assistance">Effets possibles sur les agents utilisateurs et les technologies d’assistance</h3>

<p> </p>

<div class="note"><p><strong>Note :</strong> il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.</p></div>

<h3 id="Exemples">Exemples</h3>

<h4 id="Une_zone_d'entête_typique_de_site">Une zone d'entête typique de site </h4>

<pre class="brush: html">&lt;header role="banner"&gt;
  &lt;p&gt;&lt;img src="logo.png" alt="Nom du site"&gt;&lt;/p&gt;
  &lt;p&gt;Description du site&lt;/p&gt;
  &lt;div role="search"&gt;
    ...
  &lt;/div&gt;
&lt;/header&gt; </pre>

<h2 id="Autres_ressources">Autres ressources</h2>

<p>La <a href="http://www.accede-web.com/notices/html-css-javascript/1-structure/1-1-header-role-banner/">fiche accede-web</a>.</p>
