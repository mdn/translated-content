---
title: Houdini
slug: Glossary/Houdini
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Houdini est un ensemble d'API de bas niveau qui donnent aux développeur·euse·s la possibilité d'étendre le CSS, offrant la possibilité de se connecter au processus de style et de mise en page du moteur de rendu d'un navigateur. Houdini donne aux développeur·euse·s l'accès au [modèle d'objet CSS](/fr/docs/Web/API/CSS_Object_Model) ({{Glossary("CSSOM")}}), permettant d'écrire du code que le navigateur peut analyser en CSS. L'avantage de Houdini est que les développeur·euse·s peuvent créer des fonctionnalités CSS sans attendre les spécifications des normes Web pour les définir et sans attendre que chaque navigateur implémente complètement les fonctionnalités.

Bien que de nombreuses fonctionnalités activées par Houdini puissent être créées avec JavaScript, l'interaction directe avec le CSSOM avant l'activation de JavaScript permet des temps d'analyse plus rapides. Les navigateurs créent le CSSOM — y compris les processus de mise en page, de peinture et de composition — avant d'appliquer les mises à jour de style trouvées dans les scripts&nbsp;: les processus de mise en page, de peinture et de composition sont répétés pour que les styles JavaScript mis à jour soient implémentés. Le code Houdini n'attend pas la fin de ce premier cycle de rendu. Il est plutôt inclus dans ce premier cycle, créant des styles rendables et compréhensibles.

## Voir aussi

- [Houdini](/fr/docs/Web/API/Houdini_APIs)
- [CSSOM](/fr/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/fr/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/fr/docs/Web/API/CSS_Typed_OM_API)
