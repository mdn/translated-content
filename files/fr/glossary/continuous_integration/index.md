---
title: Intégration continue
slug: Glossary/Continuous_integration
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

L'**intégration continue** (<i lang="en">continuous integration</i> ou <abbr>CI</abbr> en anglais) est une pratique de développement logiciel qui consiste à intégrer fréquemment les modifications du code source dans la base de code principale.

C'est une pratique essentielle dès qu'une équipe de développeur·euse·s travaille sur une base de code partagée. Dans ce contexte, plusieurs personnes peuvent apporter des modifications qui se chevauchent en même temps, chacune dans sa propre branche. L'intégration fréquente des changements de chaque développeur·euse réduit fortement le risque de conflits et facilite leur résolution lorsqu'ils surviennent.

Comme le souligne [Martin Fowler <sup>(angl.)</sup>](https://martinfowler.com/articles/continuousIntegration.html#EveryonePushesCommitsToTheMainlineEveryDay)&nbsp;:

> L'intégration concerne avant tout la communication. Elle permet aux développeur·euse·s d'informer les autres des changements apportés. Une communication fréquente permet à chacun·e de suivre rapidement l'évolution du code.

Un aspect majeur de l'intégration continue est l'automatisation de la construction et des tests&nbsp;: typiquement, dans un système CI, dès qu'une personne ouvre une pull request pour proposer ses modifications sur la branche principale, un processus automatisé construit le produit et exécute les tests. Une fois tous les tests validés, la modification peut être relue par les pairs.
