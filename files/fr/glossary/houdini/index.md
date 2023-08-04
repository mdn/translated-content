---
title: Houdini
slug: Glossary/Houdini
---

Houdini est un ensemble d'API de bas niveau qui donnent aux développeurs la possibilité d'étendre le CSS, offrant la possibilité de se connecter au processus de style et de mise en page du moteur de rendu d'un navigateur. Houdini donne aux développeurs l'accès au [modèle d'obet CSS](/fr/docs/Web/API/CSS_Object_Model) ([CSSOM](/fr/docs/Glossary/CSSOM)), permettant aux développeurs d'écrire du code que le navigateur peut analyser en CSS. L'avantage de Houdini est que les développeurs peuvent créer des fonctionnalités CSS sans attendre les spécifications des normes Web pour les définir et sans attendre que chaque navigateur implémente complètement les fonctionnalités.

Bien que de nombreuses fonctionnalités activées par Houdini puissent être créées avec JavaScript, l'interaction directe avec le CSSOM avant l'activation de JavaScript permet des temps d'analyse plus rapides. Les navigateurs créent le CSSOM - y compris les processus de mise en page, de peinture et de composition - avant d'appliquer les mises à jour de style trouvées dans les scripts: les processus de mise en page, de peinture et de composition sont répétés pour que les styles JavaScript mis à jour soient implémentés. Le code Houdini n'attend pas la fin de ce premier cycle de rendu. Il est plutôt inclus dans ce premier cycle, créant des styles rendables et compréhensibles.

## Voir aussi

- [Houdini](/fr/docs/Web/Houdini)
- [Houdini: une introduction](/fr/docs/Web/Houdini/learn)
- [CSSOM](/fr/docs/Web/API/CSS_Object_Model)
- [CSS Paint API](/fr/docs/Web/API/CSS_Painting_API)
- [CSS Typed OM](/fr/docs/Web/CSS_Typed_OM)
