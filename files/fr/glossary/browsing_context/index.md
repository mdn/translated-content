---
title: Contexte de navigation
slug: Glossary/Browsing_context
---

Un **contexte de navigation** est l'environnement dans lequel un {{glossary("Browser","navigateur")}} affiche un {{domxref("Document","document")}}. Dans les navigateurs modernes, il s'agit généralement d'un onglet, mais il peut s'agir d'une fenêtre ou encore seulement des parties d'une page, comme une {{HTMLElement("frame")}} ou une {{HTMLElement("iframe")}}.

Chaque contexte de navigation possède une {{glossary("Origin","origine")}} spécifique, l'origine du document actif, ainsi qu'un historique qui énumère dans l'ordre tous les documents affichés.

La communication entre les contextes de navigation est sévèrement restreinte. Entre des contextes de la même origine, il est possible d'ouvrir et utiliser un canal {{domxref("BroadcastChannel")}}.

## Voir aussi

### Référence technique

- [Context de navigation sur WHATWG](https://html.spec.whatwg.org/multipage/browsers.html#windows)
- [Contexte de navigation sur W3C](http://dev.w3.org/html5/spec/browsers.html)
