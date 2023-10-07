---
title: Stratégies pour mener à bien vos tests
slug: Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}

Cet article commence en donnant un aperçu sur le sujet des tests sur navigateurs (croisé), répondant aux questions telles que "qu'est-ce que le test en navigateur croisé ?", "Quels sont les problèmes les plus communs que vous allez rencontrer ?", et "quelles sont les principales approches pour tester, identifier, et fixer les problèmes ?"

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances avec le noyau des langages
        <a href="/fr/docs/Learn/HTML">HTML</a>,
        <a href="/fr/docs/Learn/CSS">CSS</a>, et
        <a href="/fr/docs/Learn/JavaScript">JavaScript</a> ; une idée du haut
        niveau<a
          href="/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
        >
          des principes du test en navigateur croisé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        <p>
          Obtenir une compréhension des concepts de haut-niveau impliqués dans
          le test en navigateur croisé.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Testez-les tous ?

Lorsque vous faîtes du test en navigateur croisé, vous devez établir une liste de navigateurs que vous avez besoin de tester pour démarrer. Il n'y a aucun moyen que vous puissiez tester toutes les combinaisons de navigateurs et d'appareils que vos utilisateurs peuvent utiliser pour voir votre site — il y en a juste beaucoup trop, et de nouveaux apparaissent à longueur de temps.

Vous devriez plutôt essayer de vous assurer que votre site fonctionne sur les appareils et les navigateurs cibles les plus importants, et coder de manière défensive afin de donner à votre site le support le plus large qu'il puisse atteindre.

Par coder de manière défensive, nous voulons dire essayer de construire une solution de repli intelligente comme ça si une fonctionnalité ou un style ne marche pas sur un navigateur, le site sera capable de rétrograder à quelque chose de moins palpitant qui continuera de fournir une expérience utilisateur acceptable — le noyau de l'information est toujours accessible, par exemple, même si l'aspect n'est pas aussi beau.

L'objectif est de mettre en place une liste des navigateurs/appareils sur laquelle vous pouvez vous appuyer lors de vos tests. Vous pouvez la faire aussi simple ou compliquée que vous le souhaitez — par exemple, une approche répandue est d'établir différents grades de niveau de support, quelque chose comme :

1. Grade A : Navigateurs communs/modernes — Connu pour leur capacité. Tester complètement et fournir un support complet.
2. Grade B : Navigateurs plus vieux/ayant moins de capacité — connu pour leur incapacité. Tester, et fournir une expérience plus basique qui donne un accès total au principal de l'information et des services.
3. Grade C : Navigateurs rares/inconnus — ne pas tester, mais supposer qu'ils sont capables. Fournir le site complet, qui devrait marcher, au moins avec les solutions de replis disponibles grâce à notre code défensif.

Tout au long des sections à venir, nous allons mettre en place une liste de support dans ce format.

> **Note :** Yahoo est le premier à avoir rendu cette approche répandue, avec leur approche de [Support de navigateur classé](https://github.com/yui/yui3/wiki/Graded-Browser-Support).

### Déductions logiques

Vous pouvez les appeler "hypothèses" ou "intuitions". Ce n'est pas une approche précise, scientifique, mais en tant que personne qui a une expérience de l'industrie web vous aurez une particulièrement bonne idée du minimum de navigateurs que vous devriez tester. Cela peut former une bonne base pour votre liste de support.

Par exemple, si vous habitez en Europe de l'Ouest ou en Amérique du Nord, vous devez savoir que la plupart des gens utilisent des ordinateurs de bureau/portable Windows et Mac, et que les navigateurs principaux sont Chrome, Firefox, Safari, IE, et Edge. Vous n'aurez sûrement besoin que de tester uniquement les dernières versions des trois premiers, étant donné que ces navigateurs reçoivent des mises à jour régulières. Pour Edge et IE vous n'aurez que besoin de tester les deux dernières versions ; ils doivent tous aller dans le niveau de grade A.

> **Note :** Vous ne pouvez avoir qu'une seule version d'IE ou d'Edge installée sur une machine à la fois, vous aurez donc probablement besoin d'utiliser une machine virtuelle, ou une autre stratégie pour faire les tests nécessaires. Voir [Les machines virtuelles](#les_machines_virtuelles) plus tard.

Beaucoup de personnes utilisent iOS et Android, vous aurez donc aussi besoin de tester les dernières versions d'iOS Safari, les deux dernières versions de l'ancien Android stock browser, et Chrome et Firefox pour iOS et Android. Idéalement, vous devriez tester sur un téléphone et une tablette de chaque système d'exploitation, afin de vous assurer que les designs responsives fonctionnent bien.

Vous savez aussi peut-être qu'un certain nombre de personnes continue d'utiliser IE 9. C'est vieux et peu compétent, donc mettons-le dans le niveau de grade B.

Ce qui nous donne pour l'instant la liste de support suivante :

1. Grade A : Chrome et Firefox pour Windows/Mac, Safari pour Mac, Edge et IE pour Windows (les deux dernières versions de chacun), iOS Safari pour iPhone/iPad, Android stock browser (les deux dernières versions) sur téléphone/tablette, Chrome et Firefox pour Android (les deux dernières versions) sur téléphone/tablette.
2. Grade B : IE 9 pour Windows
3. Grade C : n/a

Si vous vivez autre part, ou travaillez sur un site qui va être livré autre part (par ex. dans un pays ou un endroit en particulier), alors vous aurez sûrement des navigateurs communs différents à tester.

> **Note :** "Le PDG de mon entreprise utilise un Blackberry, nous devons donc nous assurer que cela apparaîtra parfaitement sur ce support" peut aussi être un argument persuasif.

### Les statistiques de support navigateur

Une mesure utile à laquelle vous pouvez faire appel pour déduire vos choix de test sur navigateur, c'est les statistiques de support navigateur. Il y a plusieurs sites qui fournissent de telles informations, par exemple :

- [Netmarketshare](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0)
- [Statcounter](http://gs.statcounter.com/)

Ils sont tous les deux très orientés sur l'Amérique du Nord, et ne sont pas particulièrement précis, mais ils peuvent vous donner une idée des tendances générales.

Par exemple, allons sur [Netmarketshare](https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0). Vous pouvez voir qu'Opera est listé comme ayant une petit mais visible chiffre d'usage, donc nous devrions l'ajouter à notre liste de support en grade C.

IE8 est classé comme étant significatif également, mais il est plus vieux et plus très efficace. Opera Mini est aussi remarquable, mais il n'est pas très compétent en termes d'exécution de Javascript complexe au démarrage, etc. (voir [Opera Mini et JavaScript](https://dev.opera.com/articles/opera-mini-and-javascript/) pour plus de détails). Nous devrions aussi les ajouter dans le niveau B.

### Utiliser l'analyse des données

Une source de données plus précise, si vous pouvez l'obtenir, vient d'une appli d'analyse comme [Google Analytics](https://www.google.com/analytics/). C'est une application qui vous donnera des stats sur exactement quels navigateurs les gens utilisent pour naviguer sur votre site. Bien entendu, cela implique que vous avez déjà un site sur lequel l'utiliser, donc ça n'est pas super pour de tout nouveaux sites.

Mais une analyse historique peut être utile pour trouver des statistiques de support afin d'exercer une influence sur une nouvelle version du site d'une entreprise, ou une nouvelle fonctionnalité que vous être en train d'ajouter sur un site existant. Si elles vous sont accessibles, elles sont bien plus précises que les statistiques globales des navigateurs comme celles mentionnées plus haut.

#### Configurer Google analytics

1. En premier lieu, vous avez besoin d'un compte Google. Utilisez ce compte afin de vous inscrire sur [Google Analytics](https://www.google.com/analytics/).
2. Choisissez l'option [Google Analytics](https://analytics.google.com/analytics/web/) (web), et cliquez sur le bouton _S'inscrire_.
3. Entrez les détails sur votre site/appli dans la page d'inscription. C'est très intuitif à configurer ; le champ le plus important où il ne faut pas se tromper est l'URL du site web. Cela doit être l'URL racine de votre site/appli.
4. Une fois que vous avez terminé de tout remplir, appuyer sur le bouton _Get Tracking ID_, ensuite acceptez les modalités de services qui apparaissent.
5. La prochaine page vous fournit quelques extraits de code et d'autres instructions. Pour un site web basique, ce que vous avez besoin de faire, c'est de copier le bloc de code _Website tracking_ et de le coller sur toutes les différentes pages que vous voulez suivre en utilisant Google Analytics sur votre site. Vous pouvez le placer en-dessous de la balise fermante `</body>`, ou n'importe où d'approprié qui le garderait de se mélanger avec le code de votre application.
6. Téléchargez vos modifications sur le serveur de développement, ou autre part où vous avez besoin de votre code.

C'est bon ! Votre site devrait maintenant être prêt à commencer à reporter l'analyse de données.

#### Etudier l'analyse des données

Vous devriez maintenant être capable de retourner sur la page d'accueil [Analytics Web](https://analytics.google.com/analytics/web), et commencer à regarder les données que vous avez collecté à propos de votre site (bien entendu, vous devez laisser passer un peu de temps afin de permettre aux données de votre site d'être collectées.)

Par défaut, vous devriez voir ce tableau de rapport, comme ceci :

![](analytics-reporting.png)

Il y a une énorme quantité de donnée que vous pouvez regarder en utilisant Google Analytics — des rapports personnalisés dans différentes catégories, etc. — et nous n'avons pas le temps pour tous les aborder. [Démarrer avec Analytics](https://support.google.com/analytics/answer/1008015) fournit une aide utile sur les rapports (et plus) pour les débutants.

Vous devriez aussi vous intéresser aux différentes options du menu gauche, et voir quels types de données vous pouvez trouver. Par exemple, vous pouvez trouver quels navigateurs et quels systèmes d'exploitation vos utilisateurs utilisent en sélectionnant _Audience_ > _Technologie_ > _Navigateur & OS_ du menu gauche.

> **Note :** Lorsque vous utilisez Google Analytics, vous devez pour prévenir des biais trompeurs, par ex. "Nous n'avons aucun utilisateur de Firefox Mobile" peut vous amener à ne pas vous soucier de supporter Firefox Mobile. Mais vous n'allez pas avoir un seul utilisateur de Firefox Mobile si le site ne fonctionnait pas dessus dès le départ.

### Autres cas

Il y a d'autres cas que vous devriez aussi probablement prendre en compte. Vous devez assurément inclure l'accessibilité en tant que condition nécessaire de test de niveau A (nous couvrirons exactement qu'est-ce que vous devez tester dans notre article sur la Gestion des problèmes commun d'accessibilité).

Vous pouvez avoir à prendre d'autres considérations supplémentaires. Si vous êtes en train de créer une sorte d'intranet pour fournir les chiffres d'affaires aux managers, et tous les managers ont reçu des téléphones Windows par exemple, vous devez faire du support IE pour mobile une priorité.

### Liste de support finale

Donc, notre liste de support finale devrait finir par ressemble à ça :

1. Grade A : Chrome et Firefox pour Windows/Mac, Safari pour Mac, Edge et IE pour Windows (les deux dernières versions de chaque), iOS Safari pour iPhone/iPad, Android stock browser (les deux dernières versions) pour téléphone/tablette, Chrome et Firefox pour Android (les deux dernières versions) sur téléphone/tablette. L'accessibilité qui passe les tests courants.
2. Grade B : IE 8 et 9 pour Windows, Opera Mini.
3. Grade C : Opera, d'autres bons navigateurs modernes.

## Qu'est-ce que vous allez tester ?

Lorsque vous ajouter une nouveauté à votre code de base qui nécessite d'être testée, avant de commencer vos tests, vous devez rédiger une liste des conditions des tests qui ont besoin de passer pour être admises. Ces conditions peuvent être visuelles ou fonctionnelles — combiner les deux afin de mettre en place une fonctionnalité web utilisable.

Considérez l'exemple suivant (voir le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html), et aussi l'[exemple exécuté en direct](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html)) :

![](sliding-box-demo.png)

Les critères de test pour cette fonctionnalité peuvent être rédigés comme ceci :

Grade A et B :

- Le bouton doit être activable par le mécanisme de contrôle primaire de l'utilisateur, qu'importe ce qu'il est — cela doit inclure la souris, le clavier, et le tactile.
- Appuyer sur le bouton doit faire apparaître/disparaître la boîte d'information.
- Le texte doit être lisible.
- Les utilisateurs malvoyants utilisant des lecteurs d'écran doivent pouvoir accéder au texte.

Grade A :

- La boîte d'information doit s'animer de façon fluide quand elle apparaît/disparaît
- Le gradient et l'ombre du texte doivent apparaître afin de mettre en valeur l'aspect de la boîte.

Vous avez dû remarquer que le texte dans l'exemple ne fonctionne pas sur IE8 — selon notre liste de support c'est un problème, que vous devez résoudre, peut-être en utilisant une librairie de détection afin d'implémenter la fonctionnalité d'une autre manière si le navigateur ne supporte pas les transitions CSS (voir Implémenter une fonctionnalité de détection, plus tard dans le cours)

Vous avez aussi dû remarquer que le bouton n'est pas utilisable en se servant du clavier — cela a aussi besoin d'être résolu. Peut-être que nous pouvons utiliser un peu de Javascript afin d'implémenter un contrôle clavier pour le basculement, ou utiliser une tout autre méthode ?

Ces critères de test sont utiles, parce que :

- Ils vous donnent une série d'étapes à suivre lorsque vous jouer des tests.
- Ils peuvent être facilement transformés en listes d'instructions à suivre pour les groupes d'utilisateurs lorsqu'ils effectuent des tests (par ex. "essayer d'activer les bouton en utilisant votre souris, et ensuite le clavier...") — voir [Les tests utilisateurs](#les_tests_utilisateurs), voir plus bas.
- Ils peuvent aussi apporter une base pour rédiger les tests automatiques. C'est plus simple d'écrire de tels tests si vous savez exactement ce que vous voulez tester, et quelles sont les conditions de succès (voir Utiliser un outil d'automatisation pour les tests automatiques de navigateurs, plus tard dans cette série).

## Mettre en place ensemble un labo de test

Une option pour effectuer les tests sur navigateurs et de faire les tests par vous-mêmes. Pour faire cela, vous allez sûrement utiliser une combinaison d'appareils physiques actuels, et simuler des environnements (utiliser soit un émulateur ou une machine virtuelle).

### Les appareils physiques

C'est généralement le mieux d'avoir de vrais supports pour exécuter le navigateur que vous voulez tester — cela fournit la plus grande précision en termes de comportement et sur l'ensemble de l'expérience utilisateur. Vous allez sûrement avoir besoin de quelque chose comme suit, pour un labo d'appareils de bas niveau :

- Un Mac, avec les navigateurs installés que vous avec besoin de tester — cela peut inclure Firefox, Chrome, Opera et Safari.
- Un PC Windows, avec les navigateurs installés que vous avez besoin de tester — cela peut inclure Edge (ou IE), Chrome, Firefox et Opera.
- Un téléphone et une tablette Android haut de gamme avec les navigateurs installés que vous avez besoin de tester — cela peut inclure Chrome, Firefox, et Opera Mini pour Android, bien entendu l'original Android stock browser.
- Un téléphone et une tablette iOS haut de gamme avec les navigateurs installés que vous avez besoin de tester — cela peut inclure iOS Safari, et Chrome, Firefox, et Opera Mini pour iOS.

Les éléments suivants sont également une bonne option, si vous pouvez les obtenir :

- Un PC Linux sous la main, dans le cas où vous avez besoin de tester des bugs spécifiques sur des versions de navigateurs de Linux. Les utilisateurs de Linux utilisent généralement Firefox, Opera, et Chrome. Si vous n'avez qu'une seule machine de disponible, vous pouvez envisager de créer une machine en dual boot exécutant Linux et Windows sur des partitions séparées. L'installeur d'Ubuntu rend cela assez facile à configurer ; voir [WindowsDualBoot](https://help.ubuntu.com/community/WindowsDualBoot) pour de l'aide à ce propos.
- Une paire d'appareils mobile bas de gamme, afin que vous puissiez tester la performance des fonctionnalités comme les animations sur des processeurs faibles.

Votre machine de travail principale peut aussi être un support pour installer d'autre outils pour une objectif spécifique, comme des outils de vérification de l'accessibilité, des lecteurs d'écran, et des émulateurs/machines virtuelles.

Certaines grandes entreprises ont des labos d'appareils qui stockent une sélection très large de différents appareils, permettant aux développeurs de traquer les bugs sur des combinaisons de navigateur/appareil très précises. Les plus petites entreprises et les indépendants n'ont généralement pas les moyens de s'offrir des labos aussi sophistiqués, ils ont donc tendance à avoir des labos plus petits, des émulateurs, des machines virtuelles et des applis de tests commerciales.

Nous couvrirons chacune des autres options plus bas.

> **Note :** Certains efforts ont été effectué afin de créer des labos d'appareils accessibles au public — voir [Open Device Labs](https://opendevicelab.com/).

> **Note :** Nous devons aussi prendre en considération l'accessibilité — il y a plusieurs outils utiles que vous pouvez installer sur votre machine afin de faciliter les tests d'accessibilité, mais nous les couvrirons dans l'article Gestion des problèmes communs d'accessibilité, plus tard dans le cours.

### Les émulateurs

Les émulateurs sont essentiellement des programmes qui s'exécutent à l'intérieur de votre ordinateur et simulent des appareils ou des conditions particulières d'appareil d'un certain type, ils vous permettent de faire certains tests plus aisément qu'en ayant à trouver une combinaison de matériels/logiciels à tester.

Un émulateur peut être aussi simple à tester qu'une condition d'appareil. Par exemple, si vous voulez faire quelques tests rapides et sales de la largeur/hauteur de vos media queries pour le responsive design, vous pouvez utiliser le [Mode Design Responsive](/fr/docs/Tools/Responsive_Design_Mode) de Firefox. Safari possède également un mode similaire, qui peut être activé en allant dans _Safari_ > _Préférences_, et en cochant _Show Develop menu_, puis en choisissant _Develop > Enter Responsive Design Mode_. Chrome propose également quelque chose de similaire : Device mode (voir [Simuler un Appareil Mobile avec le Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/)).

Le plus souvent, vous allez devoir installer un émulateur. Les appareils/navigateurs les plus courants que vous allez devoir tester sont les suivants :

- L'officiel [Android Studio IDE](https://developer.android.com/studio/) pour développer des applis Android, il est assez pesant juste pour tester des sites web sur Google Chrome ou le vieux Stock Android browser, mais il est fournit avec un [émulateur](https://developer.android.com/studio/run/emulator.html) Robuste. Si vous voulez quelque chose d'un peu plus léger, [LeapDroid](http://leapdroid.com/) est une bonne option pour Windows et [Andy](http://www.andyroid.net/) est une option acceptable qui s'exécute aussi bien sur Windows que sur Mac.
- Apple fournit une appli appelée [Simulator](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/iOS_Simulator_Guide/Introduction/Introduction.html) qui s'exécute au-dessus de l'environnement de développement [XCode](https://developer.apple.com/xcode/), et émule iPad/iPhone/Apple Watch/Apple TV. Il comprend le navigateur natif iOS Safari. Il n'est malheureusement disponible que pour Mac.

Vous pouvez facilement trouver des simulateurs pour les autres environnements d'appareil mobile, par exemple :

- [Blackberry](https://developer.blackberry.com/develop/simulator/) (émulateur disponible pour Windows, Mac OSX et Linux).
- Vous pouvez simuler [Opera Mini](https://dev.opera.com/articles/installing-opera-mini-on-your-computer/) tel quel si vous voulez le tester.
- Il y a des émulateurs disponibles pour les OSs Windows Mobile : voir [Les émulateurs pour les Windows Phone 8](<https://msdn.microsoft.com/en-us/library/windows/apps/ff402563(v=vs.105).aspx>) et [Test avec l'Emulateur Microsoft pour Windows 10 Mobile](https://msdn.microsoft.com/en-us/windows/uwp/debug-test-perf/test-with-the-emulator) (il ne fonctionnent que sur Windows).

> **Note :** Beaucoup d'émulateurs requièrent actuellement l'utilisation d'une machine virtuelle (voir en-dessous) ; quand c'est le cas, les instructions sont souvent fournies, et/ou l'utilisation de la machine virtuelle est inclue dans l'installeur de l'émulateur.

### Les machines virtuelles

Les machines virtuelles sont des applications qui s'exécutent sur le bureau de votre ordinateur et vous permettent d'exécuter les simulations de tous les systèmes d'exploitation, chacun compartimenté sur son propre disque dur virtuel (souvent représenté par un seul large fichier existant sur le disque dur de la machine hôte). Il y a plusieurs applis de machine virtuelle populaire, comme [Parallels](www.parallels.com/), [VMWare](http://www.vmware.com/), et [Virtual Box](https://www.virtualbox.org/wiki/Downloads); personnellement, nous préférons la dernière, parce qu'elle est gratuite.

> **Note :** Nous avons besoin de beaucoup d'espace disponible sur le disque dur pour exécuter les émulations de machine virtuelle ; chaque système d'exploitation que vous émulez peut prendre beaucoup de mémoire. Vous aurez tendance à choisir l'espace de disque dur que vous voulez pour chaque installation ; vous pouvez vous en sortir avec environ 10Go, mais certaines sources recommandent d'augmenter à 50Go ou plus, alors le système d'exploitation s'éxécutera de façon fiable. Une bonne option fournit par la plupart des applis de machine virtuelle est de créer des disques durs à allocations dynamiques qui grossissent et rétrécissent en fonction que les besoins surviennent.

Pour utiliser Virtual Box, vous avez besoin de :

1. Procurez-vous un disque d'installation ou une image (par ex. un ISO) du système d'exploitation que vous voulez émuler. Virtual Box est en mesure de vous les fournir ; la plupart, comme les OSs de Windows, sont des produits commerciaux qui ne peuvent être distribués gratuitement.
2. [Téléchargez l'installeur approprié](https://www.virtualbox.org/wiki/Downloads) pour votre système d'exploitation et installez-le.
3. Ouvrez l'appli ; vous verrez une vue ressemblant à ceci : ![](virtualbox.png)
4. Pour créer une nouvelle machine virtuelle, appuyer sur le bouton _Nouveau_ dans le coin en haut à gauche.
5. Suivez les instructions et remplissez les boîtes de dialogues suivantes comme il se doit. Vous allez :

   1. Donner un nom à votre machine virtuelle
   2. Choisir un système d'exploitation et une version que vous allez installer dessus
   3. Préciser combien de RAM doit être allouée (nous vous recommandons quelque chose comme 2048Mo, ou 2Go)
   4. Créer un disque dur virtuel (choisissez les options pas défaut à travers les trois boîtes de dialogues contenant _Créer un disque dur virtuel maintenant_, _IDV (image disque virtuelle)_, _Allocation dynamique_)
   5. Choisissez l'emplacement du fichier et la taille du disque dur virtuel (choisir un nom sensé et un emplacement facile à garder, et pour la dimension préciser quelque chose autour de 50Go, ou autant que vous pensez que c'est nécessaire)

Maintenant la nouvelle virtual box devrait apparaître dans le menu gauche de la fenêtre de l'interface principale de Virtual Box. A ce stade, vous pouvez double-cliquer dessus pour ouvrir la virtual box — cela commencera à démarrer la machine virtuelle, mais il n'y aura pas encore le système d'exploitation d'installé. A cet instant vous devez préciser à la boîte de dialogue l'image de votre programme d'installation, et les étapes s'exécuteront une par une dans la machine virtuelle, exactement comme si c'était un vrai ordinateur.

![](virtualbox-installer.png)

> **Attention :** Vous devez vous assurez que vous avez l'image du système d'exploitation que vous voulez installer sur la machine virtuelle existante à ce stade, et l'installer complètement. Si vous annulé le processus à ce stade, cela peut rendre la machine virtuelle inutilisable, et vous amener à la supprimer et en créer une nouvelle. Ce n'est pas fatal, mais c'est ennuyant.

Une fois que le processus est complété, vous devriez avoir une machine virtuelle exécutant un système d'exploitation à l'intérieur d'une fenêtre sur votre ordinateur hôte.

![](virtualbox-running.png)

Vous devez vous occuper de l'installation de ce système d'exploitation virtuel exactement comme d'une installation réelle — par exemple, de même que vous devez installer les navigateurs que vous voulez tester, installez un programme d'antivirus pour vous protégez des virus.

Avoir plusieurs machines virtuelles est très utile, particulièrement pour les test IE/Edge sur Windows — sur Windows, vous n'êtes pas autorisé à avoir de multiples versions du navigateur par défaut installé, donc vous pouvez vous construire une librairie de machines virtuelles afin de gérer les différents tests requis, par ex. :

- Windows 10 avec Edge 14
- Windows 10 avec Edge 13
- Windows 8.1 avec IE11
- Windows 8 avec IE10
- Windows 7 avec IE9
- Windows XP avec IE8
- Windows XP avec IE7
- Windows XP avec IE6

> **Note :** Une autre bonne chose à propos des machines virtuelles, c'est que les images de disque virtuel sont clairement autonomes. Si vous travaillez en équipe, vous pouvez créer une image disque, puis la copier et vous la passer. Assurez-vous juste d'avoir les licences requises pour exécuter toutes les copies de Windows ou qu'importe ce que vous exécutez, si c'est un produit licencié.

### Automatisation et applis commerciales

Comme précisé dans le chapitre précédent, vous pouvez vous retirer beaucoup de peine concernant les tests de navigateur en utilisant un système d'automatisation. Vous pouvez configurer votre propre système d'automatisation de test ([Selenium](http://www.seleniumhq.org/) est devenue l'appli de choix la plus répandue), ce qui nécessite une certaine configuration, mais peut être très satisfaisant lorsque votre travail arrive à terme.

Il y a également des outils commercials disponibles comme [Sauce Labs](https://saucelabs.com/) et [Browser Stack](https://www.browserstack.com/) qui font ce genre de choses pour vous, sans que vous ayez a vous souciez de la configuration, si vous êtes prêt à investir dans vos tests.

Nous aborderons comment utiliser de tels outils plus tard dans ce module.

## Les tests utilisateurs

Avant de poursuivre, nous finirons cet article en abordant les tests utilisateurs — cela peut être une bonne option si vous avez un groupe d'utilisateurs volontaires pour tester votre nouvelle fonctionnalité. Ne perdez pas de vue que cela peut être aussi peu ou beaucoup sophistiqué que vous le désirez — votre groupe d'utilisateurs peut être un groupe d'amis, un groupe de collègues, ou un groupe de volontaires bénévoles ou rémunérés, cela dépend si vous avez de l'argent à dépenser en test.

La plupart du temps vous permettrez à vos utilisateurs de regarder la page ou la vue contenant la nouvelle fonctionnalité sur un serveur de développement, de cette manière vous n'exposez pas le site final ou les modifications en direct avant qu'il ne soit terminé. Vous devez leur recommander de suivre certaines étapes et de rapporter les résultats qu'ils ont obtenu. Il est important d'établir une liste d'étapes (parfois appelé script) vous aurez ainsi plus de résultats fiables se rapportant à ce que vous essayez de tester. Nous avons mentionné cela dans la section [Qu'est-ce que vous allez tester&nbsp;?](#quest-ce_que_vous_allez_tester_) plus haut — c'est facile de transformer les critères de test détaillés ici en étapes à suivre. Par exemple, ce qui suit devrait fonctionner pour un utilisateur voyant :

- Cliquez plusieurs fois sur le bouton en point d'interrogation en utilisant votre souris sur votre ordinateur de bureau. Rafraîchir la fenêtre du navigateur.
- Sélectionnez et activer plusieurs fois le bouton en point d'interrogation en utilisant votre clavier sur votre ordinateur de bureau.
- Touchez plusieurs fois le bouton en point d'interrogation sur l'écran tactile de votre appareil.
- Activer le bouton devrait faire apparaitre/disparaître la boîte d'information. Est-ce que cela fonctionne, dans chacun des trois cas ci-dessus ?
- Est-ce que le texte est lisible ?
- Est-ce que le boîte d'information s'anime sans problème lorsqu'elle apparaît/disparait ?

Lorsque vous exécutez les tests, cela peut aussi être une bonne idée de :

- Configurer si possible un profil navigateur séparé, avec les extensions et ces autres types de choses des navigateurs désactivées, et exécuter vos tests sur ce profile (voir [Utiliser le Profile Manager pour créer et retirer des profiles Firefox](https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles) et [Share Chrome with others or add personas](https://support.google.com/chrome/answer/2364824), par exemple).
- Utiliser le mode navigation privée sur votre navigateur lorsque vous exécutez vos tests, quand il est disponible (par ex. [Private Browsing](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history) sur Firefox, [Incognito Mode](https://support.google.com/chrome/answer/95464) sur Chrome) grâce à cela les cookies et les fichiers temporaires ne seront pas sauvegardés.

Ces étapes sont conçues pour s'assurer que le navigateur que vous êtes en train de tester est aussi "pure" que possible. C-à-d qu'il n'y a rien d'installé qui pourrait affecter les résultats des tests.

> **Note :** Une autre option faiblement utile, si vous avez le matériel disponible est de tester vos sites sur des téléphones bas de gammes/d'autres appareils — plus vos sites vont s'agrandir et les fonctionnalités avoir plus d'effets, plus vous avez des chances que votre site subisse des ralentissements, il vous faut donc prendre la performance comme une nouvelle considération importante. Essayer de faire marcher vos fonctionnalités sur des appareils bas de gamme, cela rendra l'expérience bien meilleure sur des appareils haut de gamme.

> **Note :** Certains environnement de développement côté serveur fournissent des mécanismes très utiles pour sortir les modifications sur le site pour seulement un sous-ensemble d'utilisateurs, très utile pour sortir des fonctionnalités testées par un sous-ensemble d'utilisateurs sans avoir besoin de mettre en place un serveur de développement séparé. Un bon exemple est [Django Waffle Flags](https://github.com/jsocol/django-waffle).

## Résumé

Après avoir lu cet article vous devriez maintenant avoir une bonne idée de ce que vous pouvez faire pour identifier votre liste de public cible/navigateur cible, et ensuite efficacement mener à bien vos tests en navigateur croisé en se basant sur cette liste.

La prochaine fois nous tournerons notre attention sur les problèmes concrets de votre code que vos tests peuvent révéler, en commençant avec le HTML et le CSS.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Introduction","Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS", "Learn/Tools_and_testing/Cross_browser_testing")}}
