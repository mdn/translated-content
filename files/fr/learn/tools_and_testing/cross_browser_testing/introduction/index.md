---
title: Introduction au test en navigateur croisé
slug: Learn/Tools_and_testing/Cross_browser_testing/Introduction
tags:
  - Apprentissage
  - Débutant
  - multi navigateur
  - navigateur croisé
  - test
translation_of: Learn/Tools_and_testing/Cross_browser_testing/Introduction
---
{{LearnSidebar}}{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}

Cet article commence en donnant un aperçu sur le sujet des test sur navigateurs (croisé), répondant aux questions telles que "qu'est-ce que le test en navigateur croisé?", "Quels sont les problèmes les plus communs que vous allez rencontrer?", et "quelles sont les principales approches pour tester, identifier, et fixer les problèmes?"

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Etre familier avec les bases des langage
        <a href="/fr/docs/Learn/HTML">HTML</a>,
        <a href="/fr/docs/Learn/CSS">CSS</a>, et
        <a href="/fr/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Acquérir et comprendre des concepts de haut niveau impliqués dans les
        tests sur multi-navigateur
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que le test en navigateur croisé?

Le test de navigateur croisé est une façon de s'assurer que les sites web et les applications que vous créez vont fonctionner sur un nombre acceptable de navigateurs web. En tant que développeur web, il en va de votre responsabilité de vous assurez que non seulement vos projets fonctionnent, mais qu'ils fonctionnent pour tout vos utilisateurs, qu'importe le nombre de navigateurs, d'appareil, ou d'outils d'assistances supplémentaires qu'ils utilisent. Vous devez penser à :

- D'autres navigateurs que celui ou ceux que vous utilisez habituellement sur vos appareils, incluant les navigateurs vieillissant que certaines personnes peuvent continuer d'utiliser, qui ne supportent pas les toutes dernières fonctionnalités fignolées de CSS et JavaScript.
- Différents appareils avec différentes compatibilités, du tout dernier super smartphone ou tablette, en passant par les TV intelligentes, jusqu'à la tablette la moins chère et même les anciennes versions de smartphones qui ne peuvent exécuter les navigateurs qu'avec des capacités limitées.
- Certaines personnes handicapées qui naviguent sur le web avec l'aide de technologies d'assistances comme les lecteurs d'écran, ou qui n'utilisent pas de souris (certaines personnes se servent exclusivement de leur clavier).

Souvenez-vous que vous n'êtes pas votre utilisateur — uniquement parce que votre site fonctionne sur votre Macbook Pro ou votre Galaxy Nexus haut de gamme, cela ne veut pas dire qu'il fonctionnera pour tout vos utilisateurs — Il y a encore un paquet de tests à effectuer !

> **Note :** [Make the web work for everyone](https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/) fournit une perspective plus précise sur les différents navigateurs que les gens utilisent, leur part de marché, et les problèmes de compatibilité entre navigateurs.

Il est important de préciser quelque termes de terminologie. Pour commencer, quand on parle de "travailler en navigateurs croisés", on veut vraiment dire que chaque navigateur doit être capable  de fournir une expérience utilisateur acceptable. C'est potentiellement bon pour un site de ne pas fournir exactement la même expérience sur tous les navigateurs, tant que le noyau des fonctionnalités reste accessible. Avec des navigateurs modernes vous pourrez ajouter quelques animations 3D et stylisées, tandis que sur de plus vieux navigateurs vous pouvez juste utiliser un design plus plat représentant la même information. Tant que le propriétaire du site est content, alors vous avez terminé votre travail.

D'un autre côté, ce n'est pas ok qu'un site soit fonctionnel pour les personnes voyantes mais complètement inaccessible pour des utilisateurs qui ont des problèmes de vision  parce que leur application de lecture d'écran ne peut lire aucune des données stockées sur le site.

De plus, lorsqu'on dit "à travers un nombre acceptable de navigateurs", on ne veut pas dire 100% des navigateurs dans le monde — c'est tout simplement impossible. Vous pouvez faire des recherches d'informations (analyse sectorielle) pour savoir quels sont les types de supports et de navigateurs que vos utilisateurs vont utiliser (comme on peut en parler dans le second article — voir [Gotta test 'em all?](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#Gotta_test_%27em_all)), mais vous ne pouvez pas tout garantir. En tant que developpeur web, vous devez convenir avec le demandeur du site d'une liste de navigateurs et d'appareils sur lesquels le code doit absolument fonctionner, au-delà de ces prérequis, vous devez vous assurer de donner un maximum de chances aux autres navigateurs de pouvoir afficher votre contenu grâce à du code préventif. Cette étape représente le défi le plus important d'un développeur web.

> **Note :** Nous traiterons également du code préventif dans ce module.

## Pourquoi y'a-t-il des problèmes en navigateur croisé?

Il y a beaucoup de raisons différentes qui amènent des problèmes en navigateur croisé, et notez qu'ici nous parlons des bug qui se comportent différemment selon les navigateurs / supports / préférences de navigateurs. Avant même d'attaquer les problèmes en navigateurs croisés, commencez déjà par fixer encore et encore tous les bugs présents dans votre propre code (voir [Debugging HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/fr/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS), et [What went wrong? Troubleshooting JavaScript](/fr/docs/Learn/JavaScript/First_steps/What_went_wrong) des sujets précédents afin de vous rafraichir la mémoire si nécessaire).

Les problèmes en navigateurs croisés se produisent le plus fréquemment parce que :

- Parfois les navigateurs ont des bugs, ou implémentent des fonctionnalités différemment. Cette situation n'est pas aussi grave qu'elle n'y paraît ; si on regarde IE4 et Netscape 4 qui étaient en compétition pour devenir le navigateur dominant dans les années 90,  les compagnies de navigateurs implémentaient délibérément des fonctionnalités différentes les uns des autres afin de prendre l'avantage, ce qui faisait de la vie des développeurs un véritable enfer. Les navigateurs sont biens meilleurs pour respecter les standards de nos jours, mais les bug et les différences continuent d'apparaître de temps en temps.
- Certains navigateurs peuvent avoir différents niveaux d'acceptation de fonctionnalités par rapport à d'autres. C'est inévitable lorsque vous traitez avec des fonctionnalités de pointe que les navigateurs commencent seulement à implémenter, ou encore si vous devez supporter de vraiment vieux navigateurs qui ne sont plus du tout développés, ou qui ont arrêté  (c-à-d plus aucun travail effectué sur ces derniers) bien longtemps avant même qu'une nouvelle fonctionnalité n'est put être inventée. Par exemple, si vous voulez utiliser des fonctionnalités avancées de Javascript sur votre site, elles ne marcheront sûrement pas sur d'anciens navigateurs. Si vous devez supportez des vieux navigateurs, vous ne devriez pas utiliser ces fonctionnalités ou bien convetir votre code dans une ancienne syntaxe en utilisant un compileur ou quelque chose de similaire si nécessaire.
- Certains appareils peuvent avoir des contraintes qui rendraient la navigation plus lente sur un site web, ou afficheraient mal le contenu. Par exemple, si un site a été designé pour être beau sur un support PC il paraîtra sûrement très serré et très difficile à lire sur un écran de mobile. Si votre site inclut une quantité importante de grosses animation ça passera sûrement sur une tablette haut de gamme, mais peut-être lent et saccadé sur un appareil de plus basse gamme.

Et encore tant d'autres raisons.

Dans de futurs articles, nous expliquerons les problèmes communs aux navigateurs croisés et examinerons les solution à ces problèmes.

## Environnement pour tester en navigateurs croisés

Toutes ces histoires de test en navigateurs croisés peuvent paraître génératrices de chaleur et effrayantes, il ne faut pas — vous avez juste à vous organiser soigneusement pour cela, et vous assurer que vous faîtes suffisamment de tests dans le bon sens afin d'être sûr que vous n'allez pas faire face à des problèmes inattendus. Si vous travaillez sur un gros projet, vous devez le tester régulièrement, afin de vous assurez que les nouvelles fonctionnalités sont accessibles à votre public cible, et que l'addition de nouveau code ne cassent pas d'anciennes fonctionnalités qui marchaient auparavant.

Si vous attendez la fin d'un projet pour démarrer les sessions de tests, chaque bug que vous découvrirez sera une énorme charge de travail et une perte de temps conséquente, plutôt que de le tester en continue, de découvrir les bugs et de les fixer progressivement.

Le flux de travail pour tester et fixer les bugs sur un projet peut-être diviser en quatre phases ( c'est assez dur— certaines personnes peuvent agir un peu différemment ) :

**Plan initial > Développement > Test/découvertes > Fixes/itération**

Les étapes 2-4 vont tendre à se répéter autant de fois que nécessaire jusqu'à ce que l'implémentation soit aboutie. Nous aborderons les différentes parties du processus de test dans plus de détails dans des articles subséquents, pour l'instant, commençons par résumer ce qu'on peut faire dans chacune de ces étapes.

### Plan initial

Durant la phase de plan initial, vous allez probablement avoir plusieurs réunions avec le propriétaire du site/client (qui peut être votre boss, ou quelqu'un d'une entreprise extérieure pour qui vous construisez un site web), durant lesquelles vous devez déterminer exactement ce que doit être le site web — quel contenu et quelles fonctionnalités il doit proposer, à quoi il doit ressembler, etc. A partir de ce point vous devez aussi savoir de combien de temps vous disposez pour développer ce site — quelle est leur date limite, et combien vont-ils vous payer pour votre travail ? Nous n'approfondirons pas les détails à ce propos ici, mais les problèmes multi-navigateurs peuvent avoir de sérieuses incidences sur la planification.

Une fois que vous vous êtes fait une idée des fonctionnalités requises et de quelles technologies vous allez avoir besoin pour les construire, vous pouvez commencer à rechercher le public cible — quel navigateurs, supports, etc. ce public cible va-t-il utiliser pour aller sur ce site? Le client peut déjà avoir des données à ce propos provenant de recherches qu'il aurait faites auparavant, p.e. d'un autre site web qu'il possède, ou d'une ancienne version du site sur lequel vous travaillez actuellement. Si ça n'est pas le cas, vous serez en mesure de vous faire une idée en prenant en compte d'autres sources, comme les statistiques d'utilisation pour les concurrents ou bien dans quels pays le site sera délivré. Vous pouvez évidemment vous servir un peu de votre intuition.

Par exemple, vous pouvez être en train de construire un site e-commerce qui ne sera désservi que pour des utilisateurs dans l'Amérique du Nord. Le site devra entièrement fonctionner sur les toutes dernières versions des ordinateurs et des mobiles (iOS, Android, Windows phone) et les navigateurs les plus populaires  — cela doit inclure Chrome (et Opera car il est basé sur le même moteur de rendu que Chrome), Firefox, IE/Edge, et Safari. Il devra aussi fournir une expérience acceptable sur IE 8 et 9, et être accessible avec les conformité de l'Accessibilité Web.

Maintenant que vous connaissez votre plate-forme de test cible, vous devriez revenir en arrière et revoir les fonctionnalités requises ainsi que les technologies que vous allez utiliser. Par exemple, si le client du site de e-commerce veut un tour WebGL 3D de chaque produit intégré dans la page produit, il devra accepter que cela ne sera juste pas possible sur les versions d'IE avant la 11ème. Vous devez vous entendre pour fournir une version du site sans cette fonctionnalité pour les utilisateurs des anciennes versions d'IE.

Vous devriez mettre en place une liste des différents champs de problèmes potentiels.

> **Note :** Vous pouvez trouver les informations concernant les différentes technologies et leur support par les navigateurs en recherchant les différentes fonctionnalités sur MDN — le site sur lequel vous vous trouvez! Vous pouvrez également consulter  [caniuse.com](http://caniuse.com/), pour d'autres détails utiles.

Une fois que vous êtes d'accord sur ces détails, vous pouvez continuer et démarrer le développement du site.

### Développement

Maintenant concernant le développement du site. Vous devez séparer les différentes parties du développement en modules, par exemple vous pouvez séparer les différentes zones du site — page d'accueil, pas produit, panier, tunnel de paiement etc. Vous devrez encore subdiviser ces dernières — implémenter le header et le footer commun, implémenter la vue détaillée de la page produit, implémenter la carte du panier persistent, etc.

Il existe plusieurs stratégies générales concernant le développement multi-navigateurs, par exemple :

- Obtenir toutes les fonctionnalités qui marchent le plus possible de la même manière sur tous les navigateurs croisés. Cela peut induire d'écrire différents codes qui reproduisent la même fonctionnalité d'une manière différentes visant différents navigateurs, ou bien utiliser un {{glossary("Polyfill")}} afin d'imiter tout support manquant en utilisant Javascript ou d'autres technologies, ou utiliser une librairie qui vous autorise à écrire une seule fois le code et ensuite appliquer différents comportements en arrière-plan selon ce que le navigateur prend en charge.
- Accepter que certaines choses ne vont pas se comporter de la même manière sur tous les navigateurs, et fournir différentes solutions  (acceptables) sur les navigateurs qui ne supportent pas toutes les fonctionnalités. Parfois c'est inévitable à cause des contraintes du support — un écran de cinéma ne va pas donner la même expérience visuelle qu'un écran 4 pouces de smartphone, indépendamment de comment vous programmez votre site.
- Acceptez que votre site ne va juste pas marcher sur certains vieux navigateurs, et aller au-delà. Il n'y a pas de soucis à condition que votre client/base d'utilisateurs soit d'accord avec ceci.

Normalement votre développement devra inclure une combinaison des trois approches ci-dessus. La chose la plus importante est que vous testiez chacune des petites étapes avant de les commiter— n'attendez pas la fin avant de commencer à tester!

### Test/découverte

Après chaque phase d'implémentation, vous allez avoir besoin de tester les nouvelles fonctionnalités. Pour commencer, vous devez vous assurer qu'il n'y a pas des problème généraux avec votre code qui empêcheraient votre fonctionnalité de fonctionner :

1.  Tester sur quelque navigateurs stables sur votre ordinateur, comme Firefox, Safari, Chrome, ou IE/Edge.
2.  Faites quelque test brut, comme essayer de tester votre site exclusivement avec le clavier, ou utiliser votre site avec un lecteur d'écran afin de voir s'il est navigable.
3.  Tester sur une plateforme mobile, comme Android ou iOS.

A cet instant, résolvez tous les problèmes que vous avez trouvé sur votre nouveau code.

Ensuite, vous devriez essayer d'étendre votre liste de navigaturs de test à une liste complète des navigateurs du public cible et commencer à vous concentrer sur l'élimination des problèmes en navigateurs croisés (voir le prochaine article [determining your target browsers](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#Gotta_test_%27em_all) pour plus d'informations). Par exemple:

- Essayez de tester vos dernières modifications sur tous les navigateurs modernes que vous pouvez — incluant Firefox, Chrome, Opera, IE, Edge, et Safari sur ordinateur (Mac, Windows, et Linux, idéallement).
- Testez sur des navigateurs de téléphones et de tablettes populaires (p.e. iOS Safari sur iPhone/iPad, Chrome et Firefox sur iPhone/iPad/Android),
- Faites aussi des tests sur tous les navigateurs que vous avez ajouté dans votre liste de cibles.

L'option la plus basique est de juste faire tous les tests que vous pouvez vous-même (demander à vos collègues si vous travaillez en équipe). Vous devez essayer de tester sur des supports physiques lorsque c'est possible.

Si vous n'avez pas les moyens de tester tous les différents navigateurs, systèmes d'exploitation, et les combinaisons sur du matériel physique, vous pouvez aussi utiliser des émulateurs (émuler un support en utilisant un logiciel directement sur votre ordinateur de bureau) et des machines virtuelles (logiciel qui vous permet d'émuler une multitude de systèmes d'exploitation/ des combinaison de logiciels sur votre ordinateur de bureau). C'est un choix apprécié, particulièremenet dans certaines circonstances — par exemple, Windows ne vous autorise pas à avoir plusieurs versions de Windows installées simultanément sur la même machine, ici, utiliser plusieurs machines virtuelles est souvent l'unique solution.

L'autre option est le groupe d'utilisateurs — créer un groupe avec des personnes extérieures à votre équipe de développement afin de tester votre site. Cela peut être un group d'amis ou de la famille, ou un groupe d'autres employés, une classe dans une université à proximité, ou une configuration de testeurs professionnel, où les gens sont payés pour tester votre site et vous fournir des résultats.

Finallement, vous pouvez faire preuve d'astuce avec vos test en utilisant la vérification ou des outils d'automatisation; c'est un choix sensé, quand votre projet prend de l'ampleur, faire tous ces tests à la main peut commencer à devenir vraiment chronophage. Vous pouvez configurer votre propre système d'automatisation de test ([Selenium](http://www.seleniumhq.org/) est l'application la plus populaire) qui pourra par exemple charger votre site sur un nombre de différents navigateurs, et :

- voir si un clic sur un bouton amène quelque chose à se dérouler avec succès (comme par exemple, afficher une carte), afficher les résultats une fois les test terminés
- prendre une impression écran de chaque navigateurs, vous permettant de constater si la disposition reste la même sur les différents écrans des navigateurs.

Si vous le désirez, vous pouvez encore aller plus loin que ça. Il y a des outils professionnels disponibles comme [Sauce Labs](https://saucelabs.com/) et [Browser Stack](https://www.browserstack.com/) qui font ce type de choses pour vous, sans que vous aillez à vous soucier de la configuration, si vous êtes prêt à investir de l'argent dans vos test. Il est également possible de configurer un environnement qui exécutera les tests de façon automatique pour vous, et vous permet ensuite de vérifier dans vos modifications effectués de votre code si le test continue de passer.

#### Tester sur les navigateurs en avant-première (bêta)

C'est souvent une bonne idée de tester sur les versions en avant-première des navigateurs ; voir les liens suivants :

- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Edge Insider Preview](https://insider.windows.com/)
- [Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)
- [Chrome Canary](https://www.google.com/chrome/browser/canary.html)
- [Opera Developer](http://www.opera.com/computer/beta)

C'est surtout répandu lorsque vous utiliser des technologies très récentes sur votre site, et que vous voulez les tester par rapport aux anciennes implémentations, ou si vous rencontrez un bug dans la dernières version sortie d'un navigateur, et que vous voulez vérifier si les développeurs du navigateur on fixé le bug sur une version plus récente.

### Fixes/itération

Une fois que vous avez découvert un bug, vous devez essayer de le réparer.

La première chose à faire est de réduire l'origine du bug avec un maximum de précisions. Obtenez un maximum d'informations que vous pouvez de la personne qui a rapporté le bug — quelle plateforme(s), support(s), version(s) du navigateurs, etc. Essayer avec des configurations similaires (p.e. la même version de navigateur sur différents ordinateurs, ou plusieurs versions différentes du même navigateurs sur le même support) pour voir jusqu'à quelle échelle le bug persiste.

Ce n'est pas forcément de votre faute — si un bug existe sur un navigateur, alors on peut espérer que le distributeur le fixera rapidement. Il est peut-être même déjà réparé — par exemple si un bug est présent sur la release 49 de Firefox, mais qu'il n'existe plus sur Firefox Nightly (version52), alors il a été fixé. S'il n'a pas été résolu, alors vous pouvez déposer un bug (voir {{anch("Reporting bugs")}}, plus bas).

Si c'est de votre faute, vous devez le résoudre ! Trouver la cause d'un bug implique la même stratégie que pour n'importe quel bug de développement web (à nouveau, voir [Debugging HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML), [Debugging CSS](/fr/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS), et [What went wrong? Troubleshooting JavaScript](/fr/docs/Learn/JavaScript/First_steps/What_went_wrong)). Une fois que vous avez découvert ce qui causait le bug, vous devez décider comment est-ce que vous allez travailler sur le navigateur en particulier qui vous pose problèmes — vous ne pouvez pas juste modifier le code du problème, cela risque de casser le code sur un autre navigateur. En général, l'approche veut qu'on fasse bifurquer le code dans une certaine direction, par exemple utilisez une fonctionnalité de détecton en code Javascript pour détecter les situations où une fonctionnalité ne marche pas, et éxecuter un code différent qui fonctionnera dans ce cas.

Lorsque le fix a été créé, vous devrez repéter votre processus de test afin de vous assurer que votre réparation fonctionne bien, et n'a pas causé une faille autre part sur le site ou sur un autre navigateur.

## Rapporter un bug

Juste pour redire ce qui a déjà été dit au-dessus, si vous découvrez des bugs sur des navigateurs, vous devez les reporter :

- [Firefox Bugzilla](https://bugzilla.mozilla.org/)
- [EdgeHTML issue tracker](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/)
- [Safari](https://bugs.webkit.org/)
- [Chrome](https://bugs.chromium.org/p/chromium/issues/list)
- [Opera](https://bugs.opera.com/wizard/desktop)

## Résumé

Cet article devrez vous avoir donné un haut niveau de compréhension des concepts les plus importants que vous devez connaître à propos du test en navigateur croisé. Armé de ce savoir, vous êtes maintenant prêt à démarrer et à commencer à apprendre à propos des stratégies de test multi-navigateur.

{{NextMenu("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies", "Learn/Tools_and_testing/Cross_browser_testing")}}

## Sur ce module

- [Introduction to cross browser testing](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
- [Strategies for carrying out testing](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
- [Handling common HTML and CSS problems](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Handling common JavaScript problems](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
- [Handling common accessibility problems](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
- [Implementing feature detection](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [Introduction to automated testing](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
- [Setting up your own test automation environment](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
