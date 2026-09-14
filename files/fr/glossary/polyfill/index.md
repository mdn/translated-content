---
title: Prothèse d'émulation (Polyfill)
slug: Glossary/Polyfill
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une prothèse d'émulation (<i lang="en">polyfill</i> en anglais) est un morceau de code (généralement JavaScript sur le Web) utilisé pour fournir des fonctionnalités modernes sur des navigateurs plus anciens qui ne les prennent pas en charge nativement.

Par exemple, une prothèse d'émulation peut être utilisée pour imiter la fonctionnalité de {{CSSxRef("text-shadow")}} dans IE7 en utilisant des filtres propriétaires d'IE, ou pour simuler les unités rem ou les requêtes média en utilisant JavaScript pour ajuster dynamiquement la mise en forme selon le besoin, ou toute autre fonctionnalité requise.

La raison pour laquelle les prothèses d'émulation ne sont pas utilisées exclusivement est liée à la recherche d'une meilleure fonctionnalité et de meilleures performances. Les implémentations natives des API offrent plus de possibilités et sont plus rapides que les prothèses d'émulation. Par exemple, la [prothèse d'émulation Object.create](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create#voir_aussi) ne contient que les fonctionnalités possibles dans une implémentation non native de Object.create.

Dans d'autres cas, les prothèses d'émulation sont utilisées pour résoudre des problèmes où les navigateurs implémentent les mêmes fonctionnalités de manière différente. La prothèse d'émulation utilise des fonctionnalités non standard dans un certain navigateur pour offrir à JavaScript un moyen conforme aux standards d'accéder à la fonctionnalité. Bien que cette raison d'utiliser une prothèse d'émulation soit très rare aujourd'hui, elle était particulièrement répandue à l'époque d'IE6 et Netscape, où chaque navigateur implémentait JavaScript de façon très différente. La [première version de jQuery <sup>(angl.)</sup>](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js) était un exemple précoce de prothèse d'émulation. Il s'agissait essentiellement d'une compilation de solutions spécifiques à chaque navigateur pour fournir aux développeur·euse·s JavaScript une API commune fonctionnant sur tous les navigateurs. À l'époque, les développeur·euse·s JavaScript rencontraient de grandes difficultés pour faire fonctionner leur site sur tous les appareils, car il existait de telles disparités entre les navigateurs que le site devait parfois être programmé de manière radicalement différente et avoir une interface utilisateur très différente selon le navigateur de l'utilisateur·ice. Ainsi, le·la développeur·euse JavaScript n'avait accès qu'à une poignée d'API JavaScript fonctionnant plus ou moins de façon cohérente sur tous les navigateurs. Utiliser une prothèse d'émulation pour gérer les implémentations spécifiques à chaque navigateur est moins courant aujourd'hui, car les navigateurs modernes implémentent généralement un large ensemble d'API selon la sémantique standard.

## Voir aussi

- [Qu'est ce qu'un polyfill&nbsp;? <sup>(angl.)</sup>](https://remysharp.com/2010/10/08/what-is-a-polyfill) (article par Remy Sharp, créateur du terme)
