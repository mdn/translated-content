---
title: Contexte de navigation
slug: Glossary/Browsing_context
tags:
  - Glossaire
translation_of: Glossary/Browsing_context
original_slug: Glossaire/Browsing_context
---
<p>Un <strong>contexte de navigation</strong> est l'environnement dans lequel un {{glossary("Browser","navigateur")}} affiche un {{domxref("Document","document")}}. Dans les navigateurs modernes, il s'agit généralement d'un onglet, mais il peut s'agir d'une fenêtre ou encore seulement des parties d'une page, comme une {{HTMLElement("frame")}} ou une {{HTMLElement("iframe")}}.</p>

<p>Chaque contexte de navigation possède une {{glossary("Origin","origine")}} spécifique, l'origine du document actif, ainsi qu'un historique qui énumère dans l'ordre tous les documents affichés.</p>

<p>La communication entre les contextes de navigation est sévèrement restreinte. Entre des contextes de la même origine, il est possible d'ouvrir et utiliser un canal {{domxref("BroadcastChannel")}}.</p>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Référence_technique">Référence technique</h3>

<ul>
 <li><a href="https://html.spec.whatwg.org/multipage/browsers.html#windows">Context de navigation sur WHATWG</a></li>
 <li><a href="http://dev.w3.org/html5/spec/browsers.html">Contexte de navigation sur W3C</a></li>
</ul>
