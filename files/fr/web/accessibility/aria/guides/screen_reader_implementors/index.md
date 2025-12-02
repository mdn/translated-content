---
title: Guide ARIA pour implémenter les lecteurs d'écran
short-title: Guide d'implémentation des lecteurs d'écran
slug: Web/Accessibility/ARIA/Guides/Screen_Reader_Implementors
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

## Régions dynamiques

Ce document est un guide. Le balisage des régions dynamiques (<i lang="en">live regions</i>) est un domaine complexe, sujet à interprétation. Les éléments suivants visent à fournir des recommandations d'implémentation tout en respectant le besoin des développeur·euse·s de lecteurs d'écran d'expérimenter. L'objectif est de trouver un équilibre entre des conseils utiles sur l'utilisation du balisage et le soutien à l'innovation et à la concurrence autour des régions dynamiques.

### Interprétation du balisage WAI-ARIA des régions dynamiques

1. Les changements dynamiques sont des indices&nbsp;: en général, le balisage des régions dynamiques est fourni par l'auteur·ice comme indication, et la technologie d'assistance peut permettre des réglages globaux, spécifiques au site ou même à la région, ainsi que des heuristiques pour gérer les changements dynamiques sur les pages sans balisage WAI-ARIA.
2. Optionnellement, créer une seconde file d'attente si l'utilisateur·ice configure un second canal matériel&nbsp;: s'il existe deux canaux de présentation (par exemple, synthèse vocale et afficheur braille), deux files d'attente peuvent être maintenues pour permettre une présentation parallèle. Les canaux peuvent être configurés par l'utilisateur·ice pour présenter les régions dynamiques selon le rôle ou le niveau de politesse.
3. Régions occupées&nbsp;: tout changement dans une région marquée `aria-busy="true"` ne doit pas être ajouté à la file d'attente tant que cet attribut n'est pas retiré.
4. La politesse (`aria-live` ou issue du [rôle](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)) prime&nbsp;: les éléments doivent être ajoutés à la file d'attente selon leur niveau de politesse défini par la propriété `aria-live` ou hérité du rôle (par exemple, [role="log"](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) est poli par défaut). Les éléments assertifs sont prioritaires, puis les éléments polis. Alternativement, une implémentation peut choisir de supprimer les éléments plus polis lorsqu'un élément assertif arrive.
5. Le temps est le second critère&nbsp;: pour les éléments de même niveau de politesse, priorisez selon le moment où l'événement survient (le plus ancien en premier). Présentez les éléments de même niveau dans l'ordre d'apparition.
6. Les régions atomiques (`aria-atomic="true"`) avec plusieurs changements ne doivent pas être présentées deux fois avec le même contenu. Lorsqu'un nouvel événement pour une région atomique est ajouté à la file, retirez l'événement précédent pour cette même région. Il est souhaitable d'avoir un court délai avant de présenter les changements atomiques pour éviter une double présentation lors de changements rapprochés.
7. Inclure les libellés lors de la présentation des changements&nbsp;: si le changement concerne un élément avec un libellé sémantique, annoncez ce libellé. C'est particulièrement important pour les cellules de données, où les en-têtes de colonne et de ligne fournissent un contexte essentiel.

### Idées pour les réglages et heuristiques

1. Permettre une voix différente (en synthèse vocale) ou d'autres caractéristiques de présentation pour distinguer les changements dynamiques.
2. En l'absence de balisage WAI-ARIA, présenter automatiquement certains changements sauf si l'utilisateur·ice désactive tous les changements dynamiques. Par exemple, annoncer automatiquement les changements provoqués par la saisie de l'utilisateur·ice, dans le contexte de cette saisie.
3. Permettre des réglages globaux pour désactiver la présentation des changements dynamiques, tout présenter, utiliser le balisage ou être «&nbsp;intelligent&nbsp;» (utiliser des heuristiques).
