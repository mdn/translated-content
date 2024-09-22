---
title: Contexte d'application
slug: Glossary/Application_context
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Un **contexte d'application** est un [contexte de navigation](/fr/docs/Glossary/Browsing_context) de haut niveau lié à un [manifeste](/fr/docs/Web/Manifest).

Le contexte d'application peut être créé suite à une requête à l'agent utilisateur visant à naviguer vers un lien en profondeur. Dans ce cas, l'agent utilisateur doit immédiatement naviguer vers le lien en profondeur avec l'option de remplacement activée. Autrement, quand le contexte d'application est créé, l'agent utilisateur doit immédiatement naviguer vers l'URL de départ avec cette même option activée.

Attention, l'URL de départ n'est pas nécessairement la valeur du membre `start_url`&nbsp;: l'utilisatrice/utilisateur ou l'agent utilisateur pourraient l'avoir modifié lorsque l'application a été ajoutée à l'écran d'accueil ou mise en favoris.

## Voir aussi

- [Applications web progressives (PWA)](/fr/docs/Web/Progressive_web_apps)
- [`scope`](/fr/docs/Web/Manifest/scope)
