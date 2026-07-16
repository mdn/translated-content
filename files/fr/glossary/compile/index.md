---
title: Compilation
slug: Glossary/Compile
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **compilation** est le processus qui consiste à transformer un programme informatique écrit dans un certain {{Glossary("computer programming", "langage")}} en un ensemble d'instructions dans un autre format ou langage. Un **compilateur** est un programme informatique qui réalise cette tâche.

En général, un compilateur transforme du code écrit dans un langage de haut niveau comme [C++](https://fr.wikipedia.org/wiki/C%2B%2B), [Rust](<https://fr.wikipedia.org/wiki/Rust_(langage)>) ou [Java](<https://fr.wikipedia.org/wiki/Java_(langage)>) en code exécutable (pouvant être lancé) — appelé **code binaire** ou **code machine**. [WebAssembly](/fr/docs/WebAssembly), par exemple, est une forme de code binaire exécutable qui [peut être compilé à partir de code écrit en C++, Rust, C#, Go, Swift et plusieurs autres langages <sup>(angl.)</sup>](https://webassembly.org/getting-started/developers-guide/) et exécuté sur n'importe quelle page web, avec la plupart des fonctionnalités prises en charge dans les navigateurs modernes (voir le [tableau de compatibilité des navigateurs](/fr/docs/WebAssembly#compatibilité_des_navigateurs)).

La plupart des compilateurs effectuent soit une compilation anticipée (<i lang="en">ahead-of-time</i>, AOT), soit une compilation {{Glossary("Just In Time Compilation", "just-in-time (JIT)")}}.

Le compilateur GNU `gcc` est un exemple bien connu de compilateur AOT. Les compilateurs AOT sont généralement lancés depuis la ligne de commande dans un environnement shell (terminal ou console) ou depuis un {{Glossary("IDE")}}.

Les compilateurs JIT ne sont généralement pas lancés directement, mais sont intégrés dans les environnements d'exécution des logiciels afin d'améliorer les performances. Par exemple, tous les principaux navigateurs utilisent désormais des moteurs JavaScript qui intègrent des compilateurs JIT.

Les compilateurs peuvent aussi traduire entre langages de haut niveau — par exemple, de TypeScript vers {{Glossary("JavaScript")}} — auquel cas, on les appelle souvent **transpileurs**.

## Voir aussi

- [Compilateur](https://fr.wikipedia.org/wiki/Compilateur) sur Wikipédia
- [WebAssembly](/fr/docs/WebAssembly)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Just In Time Compilation", "Just-In-Time (JIT)")}}
