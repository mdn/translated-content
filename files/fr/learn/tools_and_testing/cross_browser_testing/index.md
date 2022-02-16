---
title: Test sur plusieurs navigateurs
slug: Learn/Tools_and_testing/Cross_browser_testing
tags:
  - Accessibility
  - Automation
  - Beginner
  - CSS
  - CodingScripting
  - HTML
  - JavaScript
  - Landing
  - Learn
  - Module
  - Testing
  - Tools
  - TopicStub
  - cross browser
translation_of: Learn/Tools_and_testing/Cross_browser_testing
---
{{LearnSidebar}}

Ce module se concentre sur le test de projets Web sur différents navigateurs. Nous cherchons à identifier votre public cible (par exemple, de quels utilisateurs, navigateurs et appareils avez-vous le plus besoin de vous soucier?), comment procéder aux tests, les principaux problèmes auxquels vous serez confronté avec différents types de code et comment les atténuer, quels outils sont les plus utiles pour vour aider à tester et résoudre les problèmes, et comment utiliser l'automatisation pour accélérer les tests.

## Prérequis

Vous devez vraiment apprendre les bases des langages [HTML](/fr/docs/Learn/HTML), [CSS](/fr/docs/Learn/CSS), et [JavaScript](/fr/docs/Learn/JavaScript) de base avant d'essayer d'utiliser les outils détaillés ici.

## Guides

- [Introduction aux tests multi-navigateurs](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : Cet article débute le module en donnant un aperçu du sujet des tests multi-navigateurs, en répondant à des questions telles que "qu'est-ce que les tests multi-navigateurs?", "quels sont les types de problèmes les plus courants que vous rencontrerez?", et "quelles sont les principales approches pour tester, identifier et résoudre les problèmes?"
- [Stratégies de réalisation des tests](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : Ensuite, nous explorons la réalisation de tests, en cherchant à identifier un public cible (par exemple, quels navigateurs, appareils et autres segments devez-vous vous assurer qu'ils soient testés), des stratégies de test low fi (procurez-vous une gamme d'appareils et de machines virtuelles et faire des tests adhoc si nécessaire), des stratégies de haute technologie (automatisation, utilisation d'applications de test dédiées), et des tests avec des groupes d'utilisateurs.
- [Gérer les problèmes HTML et CSS courants](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : Nous allons maintenant examiner spécifiquement les problèmes courants entre navigateurs que vous rencontrerez dans le code HTML et CSS, et quels outils peuvent être utilisés pour éviter les problèmes ou résoudre les problèmes qui se produisent. Cela inclut le linting code, la gestion des préfixes CSS, l'utilisation d'outils de développement de navigateur pour localiser les problèmes, utiliser des polyfills pour ajouter un support dans les navigateurs, résoudre les problèmes de design responsive, etc.
- [Gestion des problèmes JavaScript courants](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : Nous allons maintenant examiner les problèmes JavaScript courants entre navigateurs et comment les résoudre. Cela inclu des informations sur l'utilisation des outils de développement de navigateur pour localiser et résoudre les problèmes, l'utilisation de polyfills et de librairies pour contourner les problèmes, la mise en œuvre des fonctionnalités JavaScript modernes dans les navigateurs plus anciens, etc.
- [Gérer les problèmes d'accessibilité courants](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : Ensuite, nous tournons notre attention vers l'accessibilité, en fournissant des informations sur les problèmes courants, comment faire des tests simples, et comment utiliser les outils d'audit / d'automatisation pour trouver les problèmes d'accessibilité.
- [Implémentation de la détection des fonctionnalités](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : La détection de fonctionnalités implique de déterminer si un navigateur prend en charge un certain bloc de code et d'exécuter un code différent selon qu'il le fait (ou non), afin que le navigateur puisse toujours fournir une expérience de travail plutôt en panne / erreur dans certains navigateurs. Cet article explique comment écrire votre propre détection de fonctionnalités simple, comment utiliser une librairie pour accélérer la mise en œuvre et des fonctionnalités natives pour la détection de fonctionnalités telles que `@supports`.
- [Introduction aux tests automatisés](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : Exécuter manuellement des tests sur plusieurs navigateurs et appareils, plusieurs fois par jour, peut devenir fastidieux et prendre du temps. Pour gérer cela efficacement, vous devez vous familiariser avec les outils d'automatisation. Dans cet article, nous examinons ce qui est disponible, comment utiliser les exécuteurs de tâches et les bases de l'utilisation des applications d'automatisation de test de navigateur commerciales telles que Sauce Labs et Browser Stack.
- [Configuration de votre propre environnement d'automatisation de test](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : Dans cet article, nous allons vous apprendre à installer votre propre environnement d'automatisation et à exécuter vos propres tests à l'aide de Selenium/WebDriver et d'une librairie de test telle que selenium-webdriver pour Node. Nous verrons également comment intégrer votre environnement de test local avec des applications commerciales telles que celles décrites dans l'article précédent.
