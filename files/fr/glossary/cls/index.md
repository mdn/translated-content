---
title: Cumulative Layout Shift (CLS)
slug: Glossary/CLS
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Cumulative Layout Shift (CLS)** (pour **décalage de mise en page cumulatif** en français) est une métrique d'utilisabilité pour les sites web, conçue par Google comme l'une des métriques [Core Web Vital](https://web.dev/articles/vitals?hl=fr).

Elle mesure dans quelle mesure les utilisateur·ice·s rencontrent des décalages de mise en page inattendus, dans lesquels des éléments de la page sont déplacés de manière inattendue&nbsp;: c'est-à-dire, qui ne sont pas le résultat d'une action utilisateur comme appuyer sur un bouton ou d'une animation.

Les décalages de mise en page peuvent être causés, par exemple, par des éléments {{HTMLElement("img")}} ou {{HTMLElement("video")}} auxquels on n'a pas donné d'attributs `width` et `height`, donc le navigateur ne sait pas combien d'espace ils occuperont avant qu'ils ne soient chargés.

L'interface {{DOMxRef("LayoutShift")}}, qui fait partie de [l'API Performance](/fr/docs/Web/API/Performance_API), peut être utilisée pour mesurer les décalages de mise en page individuels, qui peuvent ensuite être utilisés pour calculer le score CLS d'une page web.

## Voir aussi

- [CLS <sup>(angl.)</sup>](https://web.dev/articles/cls) sur web.dev
