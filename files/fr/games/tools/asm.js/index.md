---
title: asm.js
slug: Games/Tools/asm.js
translation_of: Games/Tools/asm.js
---
{{GamesSidebar}}

[Asm.js](http://asmjs.org/) Asm.js est une spécification définissant un sous-ensemble de JavaScript hautement optimisé. Cet article examine exactement ce qui est permis dans le sous-ensemble asm.js, quelles améliorations il confère, où et comment vous pouvez l'utiliser, et d'autres ressources et exemples.

## Qu'est ce que asm.js, exactement?



C'est un sous-ensemble très petit et strict de JavaScript qui ne permet que des choses comme \`while\`,\` if\`, les nombres, les fonctions nommées de haut niveau et d'autres constructions simples. Cela n'autorise pas les objets, les chaînes, les fermetures, et tout ce qui nécessite une allocation de tas. Le code Asm.js ressemble à C de plusieurs façons, mais il reste toujours un JavaScript valide dans tous les moteurs actuels. Il pousse les moteurs JS à optimiser ce type de code et donne aux compilateurs comme Emascript une définition claire de ce type de code à générer. Nous allons montrer à quoi ressemble le code asm.js et expliquer comment il aide et comment vous pouvez l'utiliser.

Ce sous-ensemble de JavaScript est déjà très optimisé dans de nombreux moteurs JavaScript utilisant des techniques de compilation Just-In-Time (JIT). Cependant, en définissant une norme explicite, nous pouvons travailler sur l'optimisation de ce type de code encore plus et obtenir autant de performance que possible. Il est plus facile de collaborer sur plusieurs moteurs JS car il est facile de parler et de comparer. L'idée est que ce type de code devrait fonctionner très rapidement dans chaque moteur, et si ce n'est pas le cas, c'est un bug et il existe une spécification claire pour laquelle les moteurs devraient optimiser.

Il permet également aux personnes d'écrire des compilateurs qui souhaitent générer un code performant sur le Web. Ils peuvent consulter la spécification asm.js et savoir qu'ils fonctionneront rapidement s'ils adhèrent aux modèles asm.js. [Emscripten](https://github.com/kripken/emscripten),  du C / C ++ au compilateur JavaScript, émet le code asm.js pour le faire fonctionner avec des performances proches natives sur plusieurs navigateurs.

En outre, si un moteur choisit de reconnaître spécialement le code asm.js, il existe encore plus d'optimisations qui peuvent être réalisées. Firefox est le seul navigateur à le faire maintenant.

## Résumé du langage asm.js

Asm.js est un langage de programmation intermédiaire. Asm.js a un taux de performance très prévisible car il est limité à un sous-ensemble de JavaScript extrêmement restreint qui ne fournit que des entiers, des flotteurs, des arithmétique, des appels de fonction et des accès à la pile strictement typés. Les caractéristiques de performance sont plus proches du code natif que celui du JavaScript standard. L'utilisation d'un sous-ensemble de JavaScript asm.js est déjà prise en charge par les principaux navigateurs Web. Comme asm.js s'exécute dans un navigateur, cela dépend fortement du navigateur et du matériel.
