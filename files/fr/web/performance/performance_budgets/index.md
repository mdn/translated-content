---
title: Budgets de performance
slug: Web/Performance/Performance_budgets
tags:
  - Budget
  - Budget Performance
  - Performance
  - Performance Web
translation_of: Web/Performance/Performance_budgets
original_slug: Web/Performance/Budgets_de_performance
---
Un budget de performance est une limite pour éviter les régressions. Il peut s'appliquer à un fichier, un type de fichier, tous les fichiers chargés sur une page, une métrique spécifique (par exemple, [Time to Interactive](/fr/docs/Glossaire/Time_to_interactive)), une métrique personnalisée (par exemple, Time to Hero Element), ou un seuil sur une période de temps.

## Pourquoi ai-je besoin d'un budget de performance?

Un budget existe pour refléter vos objectifs atteignables. C'est un compromis entre l'expérience utilisateur et d'autres indicateurs de performance (par exemple, le taux de conversion).

Ces objectifs peuvent être:

- Basé sur le timing (par exemple, [Time to Interactive](/fr/docs/Glossaire/Time_to_interactive), [First Contentful Paint](/fr/docs/Glossaire/First_contentful_paint)).
- Basé sur la quantité (par exemple, quantité de fichiers JS / taille totale de l'image).
- Basé sur des règles (par exemple, Pagespeed index, Lighthouse score).

Leur objectif principal est d'éviter les régressions, mais ils peuvent fournir des informations sur les tendances prévisionnelles (c'est-à-dire qu'en septembre, 50% du budget a été dépensé en une semaine).

De plus, il peut découvrir les besoins de développement (c'est-à-dire qu'une grande bibliothèque avec des alternatives plus petites est souvant choisie pour résoudre un problème courant).

## Comment définir un budget de performance ?

Un budget doit comprendre 2 niveaux:

- Attention.
- Erreur.

Le niveau d'avertissement vous permet d'être proactif et de planifier toute dette technologique, sans bloquer le développement ou les déploiements.

Le niveau d'erreur est une limite supérieure, où les changements auront un impact négatif et notable.

Pour commencer, vous devez d'abord mesurer les appareils et les vitesses de connexion d'où viennent vos utilisateurs (par exemple, un appareil Android à \~200$ via une connexion 3G), à l'aide de plusieurs [outils](/fr/docs/Learn/Performance/Web_Performance_Basics). Ces mesures basées sur le temps se traduiront par des budgets de taille de fichier.

Une base de référence par défaut pour réduire le taux de rebond est d'atteindre un [Time to Interactive inférieur à 5 secondes en 3G/4G, et inférieur à 2 secondes pour les charges suivantes](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/). Cependant, en fonction des objectifs et du contenu spécifiques de votre site, vous pouvez choisir de vous concentrer sur d'autres mesures.

Pour un site contenant beaucoup de texte, tel qu'un blog ou un site d'actualités, la métrique [First Contentful Paint](/fr/docs/Glossaire/First_contentful_paint) pourrait refléter plus étroitement le comportement de l'utilisateur. (c'est-à-dire à quelle vitesse les utilisateurs peuvent-ils commencer à lire), ce qui informera les budgets spécifiques aux fichiers (par exemple, la taille de la police), et leurs optimisations. (par exemple, utiliser l'[affichage des polices](/fr/docs/Web/CSS/@font-face/font-display) pour améliorer les [performances perçues](/fr/docs/Learn/Performance/perceived_performance)).

La valeur ultime d'un budget de performance est de corréler l'impact de la performance sur les objectifs commerciaux ou produits. Lors de la définition des mesures, vous devez vous concentrer sur l'[expérience utilisateur](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/), qui dictera non seulement le taux de rebond ou de conversion, mais aussi la probabilité de retour de l'utilisateur.

## Comment mettre en œuvre un budget de performance?

Pendant le développement, il existe quelques outils pour effectuer des vérifications sur les actifs nouveaux ou modifiés:

- Un bundler de modules (par exemple, [webpack](https://webpack.js.org/)), possède des [fonctionnalités de performance](https://webpack.js.org/configuration/performance/) qui vous avertiront lorsque les actifs dépassent les limites spécifiées.
- [Bundlesize](https://github.com/siddharthkp/bundlesize), vous permet de définir et d'exécuter des contrôles de taille de fichier dans votre pipeline [CI](/fr/docs/Mozilla/Continuous_integration).

Les vérifications de la taille des fichiers sont la première ligne de défense contre les régressions, mais la conversion de la taille en mesures temporelles peut être difficile car les environnements de développement peuvent manquer de scripts tiers et d'optimisations généralement fournies par un [CDN](/fr/docs/Glossaire/CDN).

La première étape consiste à définir une base de développement pour chaque branche à comparer et la précision de la différence entre le développement et la production peut être utilisée comme objectif pour mieux correspondre à l'environnement réel.

Le [bot Lighthouse](https://github.com/GoogleChromeLabs/lighthousebot) s'intègre à [Travis CI](https://travis-ci.org/) et peut être utilisé pour collecter des métriques de [Lighthouse](https://developers.google.com/web/tools/lighthouse/) et de [Webpage Test](https://webpagetest.org) à partir d'une URL de dévloppement. Le bot réussira ou échouera en fonction des scores minimums fournis.

## Comment appliquer un budget de performance?

Plus tôt vous pourrez identifier un ajout potentiel poussant le budget, mieux vous pourrez analyser l'état actuel de votre site et identifier les optimisations ou le code inutile.

Cependant, vous devez avoir plusieurs budgets et être dynamique. Ils sont destinés à refléter vos objectifs en cours, mais permettent des risques et des expériences. Par exemple, vous pouvez introduire une fonctionnalité qui augmente le temps de chargement global mais tente d'augmenter l'engagement des utilisateurs. (c'est-à-dire combien de temps un utilisateur reste sur une page ou un site).

Un budget de performance vous aide à protéger le comportement optimal de vos utilisateurs actuels tout en vous permettant d'accéder à de nouveaux marchés et de proposer des expériences personnalisées.

## Voir aussi

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) par Addy Osmani
- [Performance Budgets 101](https://web.dev/fast/performance-budgets-101) par Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) par Tim Kadlec
