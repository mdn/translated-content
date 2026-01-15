---
title: Contexte de navigation
slug: Glossary/Browsing_context
l10n:
  sourceCommit: 8b67ae9ed4fb1b14e4d596c6bbcb4e08a9af2964
---

Un **contexte de navigation** est un environnement dans lequel un navigateur affiche un {{DOMxRef("Document")}}.
Dans les navigateurs modernes, il s'agit généralement d'un _onglet_, mais cela peut aussi être une _fenêtre_, un _popup_, une [application web](/fr/docs/Web/Progressive_web_apps), ou même une partie d'une page comme un _frame_ ou un _iframe_.

Chaque contexte de navigation possède une origine (celle du document actif) et un historique ordonné des documents affichés précédemment.
La communication et le partage de ressources entre contextes de navigation sont limités, en particulier entre contextes d'origines différentes.
Par exemple, un {{DOMxRef("BroadcastChannel")}} ne peut être ouvert et utilisé que pour communiquer entre contextes de même origine.

Un contexte de navigation peut faire partie d'un **groupe de contextes de navigation**, qui est un ensemble de **contextes de navigation** partageant des éléments communs, comme l'historique, les cookies, les mécanismes de stockage, etc.
Les contextes de navigation d'un même groupe conservent des références entre eux et peuvent donc inspecter les objets globaux des autres et s'envoyer des messages.

Par défaut, un document ouvert dans un groupe de contextes de navigation est ouvert dans le même groupe, qu'il soit d'origine croisée ou non.
L'en-tête {{HTTPHeader("Cross-Origin-Opener-Policy")}} permet de contrôler si le document est ouvert dans son propre nouveau groupe de contextes de navigation et {{DOMxRef("Window.crossOriginIsolated","isolé des origines croisées","","no code")}} des autres contextes (en particulier ceux d'origine croisée).
Cela permet de réduire les risques d'attaques cross-origin et les attaques par canal auxiliaire appelées [XS-Leaks <sup>(angl.)</sup>](https://xsleaks.dev/).

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Origin")}}
