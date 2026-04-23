---
title: Just-In-Time Compilation (JIT)
slug: Glossary/Just_In_Time_Compilation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**JIT** (pour <i lang="en">Just-In-Time Compilation</i> en anglais) est un processus de {{Glossary("compile", "compilation")}} dans lequel le code est traduit à partir d'une représentation intermédiaire ou d'un langage de plus haut niveau (par exemple, {{Glossary("JavaScript")}} ou le bytecode Java) en code machine _à l'exécution_, plutôt qu'avant l'exécution. Cette approche combine les avantages de l'interprétation et de la compilation anticipée (<abbr>AOT</abbr>).

Les compilateurs JIT analysent généralement en continu le code au fur et à mesure de son exécution, identifiant les parties du code exécutées fréquemment (points chauds). Si les gains de vitesse dépassent le coût de compilation, alors les compilateurs JIT compilent ces parties en code machine. Le code compilé est ensuite exécuté directement par le processeur, ce qui peut entraîner des améliorations de performance significatives.

Le JIT est couramment utilisé dans les {{Glossary("browser", "navigateurs web")}} modernes pour optimiser les performances du code JavaScript.

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("compile", "Compilation")}}
- [Just-In-Time Compilation <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Just-in-time_compilation) sur Wikipédia
