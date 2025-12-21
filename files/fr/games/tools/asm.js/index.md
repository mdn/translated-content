---
title: asm.js
slug: Games/Tools/asm.js
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

> [!WARNING]
> La spécification [asm.js <sup>(angl.)</sup>](http://asmjs.org/) est considérée comme **obsolète**.
> Les développeur·euse·s peuvent se tourner vers [WebAssembly](/fr/docs/WebAssembly) comme alternative à asm.js pour exécuter du code haute performance dans le navigateur.

[Asm.js](http://asmjs.org/) Asm.js est une spécification définissant un sous-ensemble de JavaScript hautement optimisé. Cet article examine exactement ce qui est permis dans le sous-ensemble asm.js, quelles améliorations il confère, où et comment vous pouvez l'utiliser, et d'autres ressources et exemples.

## Qu'est-ce que asm.js, exactement ?

Il s'agit d'un très petit sous‑ensemble strict de JavaScript qui n'autorise que des constructions simples telles que `while`, `if`, les nombres, les fonctions nommées de haut niveau et d'autres constructions élémentaires. Il n'autorise pas les objets, les chaînes de caractères, les closures et, en pratique, tout ce qui nécessite une allocation sur le tas. Le code asm.js ressemble à bien des égards au C, mais reste un JavaScript entièrement valide qui s'exécute dans tous les moteurs actuels. Il pousse les moteurs <abbr title="JavaScript">JS</abbr> à optimiser ce type de code et fournit aux compilateurs comme [Emscripten <sup>(angl.)</sup>](https://github.com/kripken/emscripten) une définition claire du code à générer. Nous montrons à quoi ressemble le code asm.js et expliquons comment il aide et comment vous pouvez l'utiliser.

Ce sous-ensemble de JavaScript est déjà très optimisé dans de nombreux moteurs JavaScript utilisant des techniques de compilation <i lang="en">Just-In-Time</i> (<abbr>JIT</abbr>). Cependant, en définissant une norme explicite, nous pouvons travailler sur l'optimisation de ce type de code encore plus et obtenir autant de performance que possible. Il est plus facile de collaborer sur plusieurs moteurs <abbr title="JavaScript">JS</abbr>, car il est facile de parler et de comparer. L'idée est que ce type de code devrait fonctionner très rapidement dans chaque moteur, et si ce n'est pas le cas, c'est un bug et il existe une spécification claire pour laquelle les moteurs devraient optimiser.

Il permet également aux personnes d'écrire des compilateurs qui souhaitent générer un code performant sur le Web. Ils peuvent consulter la spécification asm.js et savoir qu'ils fonctionneront rapidement s'ils adhèrent aux modèles asm.js. [Emscripten <sup>(angl.)</sup>](https://github.com/kripken/emscripten), du C / C++ au compilateur JavaScript, émet le code asm.js pour le faire fonctionner avec des performances proches natives sur plusieurs navigateurs.

En outre, si un moteur choisit de reconnaître spécialement le code asm.js, il existe encore plus d'optimisations qui peuvent être réalisées. Firefox est le seul navigateur à le faire maintenant.

## Résumé du langage asm.js

Asm.js est un langage de programmation intermédiaire. Asm.js a un taux de performance très prévisible, car il est limité à un sous-ensemble de JavaScript extrêmement restreint qui ne fournit que des entiers, des flotteurs, des arithmétiques, des appels de fonction et des accès, à la pile, strictement typés. Les caractéristiques de performance sont plus proches du code natif que celui du JavaScript standard. L'utilisation d'un sous-ensemble de JavaScript asm.js est déjà prise en charge par les principaux navigateurs Web. Comme asm.js s'exécute dans un navigateur, cela dépend fortement du navigateur et du matériel.
