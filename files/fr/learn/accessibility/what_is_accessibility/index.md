---
title: Qu'est ce que l'accessibilité?
slug: Learn/Accessibility/What_is_accessibility
tags:
  - Accessibilité
  - Aide technique
  - Apprendre
  - Article
  - CSS
  - Clavier
  - Débutant
  - HTML
  - JavaScript
  - Lecteur d'écran
  - Outils
  - Utilisateurs
translation_of: Learn/Accessibility/What_is_accessibility
original_slug: Apprendre/a11y/What_is_accessibility
---
{{LearnSidebar}}{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}

Cet article présente un module général sur ce que l'accessibilité est actuellement — Cela comprend les groupes de personnes que l'on a besoin de considérer et pourquoi, quels outils ils utilisent afin d'intéragir avec les pages web et comment rendre accessible la partie de notre espace de travail web.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Compétences de base en informatique, une compréhension basique de l'HTML
        et du CSS.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Se familiariser avec l'accessibilité en découvrant ce que c'est et en
        quoi cela vous affecte en tant que développeur.
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce donc que l'accessibilité?

L'accessibilité est la mise à disposition de vos sites web au plus grand nombre. On pense souvent que cela s'adresse aux personnes ayant un handicap, mais cela concerne également d'autres groupes comme ceux utilisant des appareils mobiles ou ceux qui ont des connexions internet de faible débit.

On peut aussi dire que l'accessibilité c'est traiter tout le monde de la même manière, et donner les mêmes opportunités à tous, peu importe leur handicaps ou les circonstances. De la même manière qu'il est injuste d'empêcher une personne d'accéder à un bâtiment parce qu'elle est en fauteuil roulant (les lieux publics sont souvent équipés de rampes d'accès ou d'ascenseur de nos jours), il est également injuste d'empêcher une personne d'accéder à un site web parce qu'elle a des troubles de la vue, ou qu'elle utilise un téléphone portable. Nous sommes tous différents, mais nous sommes aussi tous humains, ce qui nous donne les mêmes droits.

Rendre son site accessible est la bonne chose à faire, mais c'est aussi demandé par la loi de certains pays, et cela peut vous ouvrir des marchés conséquents pour qui vos services et vos produits ne seraient sinon pas accessibles.

L'accessibilité et les bonnes pratiques qu'elle implique peuvent bénéficier à tous :

- Le HTML sémantique (qui rend votre site plus accessible) rend également votre site plus optimisé pour les moteurs de recherche, ce qui améliore le référencement de votre site.
- Se préoccuper de l'accessibilité c'est faire preuve d'éthique et de morale, ce qui améliore votre image publique.
- Des bonnes pratiques améliorent l'accessibilité rendent également votre site plus facilement utilisable par différents groupes comme les utilisateurs de téléphones portables, les personnes ayant un faible débit, etc. En fait, tout le monde peut tirer un bénéfice de ces améliorations.
- A-t-on mentionné que c'est la loi dans certaines régions ?

## Quel genre de handicap devons nous envisager ?

Les personnes ayant un handicap sont aussi variées que les personnes sans handicap, tout comme leurs handicaps. L'important ici est de ne pas penser seulement à votre propre ordinateur et à comment vous utilisez le web, mais de commencer à apprendre comment les autres l'utilisent — _vous n'êtes pas vos utilisateurs_. Les principaux types de handicap à considérer sont expliqués ci-dessous, avec les outils spéciaux que chacun utilise pour accéder aux contenus du web (connus sous le nom de **technologies d'assistance**).

> **Note :** L'aide-mémoire [Handicap et santé](http://www.who.int/mediacentre/factsheets/fs352/fr/) de l'Organisation Mondiale de la Santé indique que « Plus d’un milliard de personnes, c’est-à-dire environ 15% de la population mondiale, présentent une forme ou une autre de handicap » , et que « Entre 110 et 190 millions de personnes adultes ont des difficultés importantes sur le plan fonctionnel. »

### Les personnes ayant des troubles de la vue

Cette catégorie comprend les personnes aveugles, malvoyantes, daltoniennes, etc. Beaucoup d'entre eux utilisent des agrandisseurs d'écran (soit de vraies loupes, soit la fonction loupe implémentée dans la plupart des systèmes d'exploitation et navigateurs), et certains utilisent des lecteurs d'écran qui lisent le texte à voix haute:

- Certains, comme [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) (Windows) et [Window Eyes](http://www.gwmicro.com/window-eyes/) (Windows), sont payants.
- D'autres, comme [NVDA](http://www.nvaccess.org/) (Windows), [ChromeVox](http://www.chromevox.com/) (Chrome, Windows et Mac OS X), et [Orca](https://wiki.gnome.org/Projects/Orca) (Linux) sont gratuits.
- Certains sont intégrés au système d'exploitation, comme [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/) (Mac OS X et iOS), [Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-narrator-get-started) (Microsoft Windows), [ChromeVox](http://www.chromevox.com/) (sur Chrome OS), et [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Il est conseillé de se familiariser avec les lecteurs d'écran ; vous devriez installer un lecteur d'écran et expérimenter avec pour comprendre comment il marche. Lisez notre [Guide pour tester les lecteurs d'écrans sur différents navigateurs (en)](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders) pour avoir plus d'information sur leur utilisation. La vidéo ci-dessous (en anglais) vous donne un bref aperçu de l'experience.

{{EmbedYouTube("IK97XMibEws")}}

Pour ce qui est des statistiques, l'Organisation mondiale de la santé estime que «253 millions de personnes présentent une déficience visuelle : 36 millions d’entre elles sont aveugles et 217 millions présentent une déficience visuelle modérée à sévère. » (Voir [Cécité et déficience visuelle](http://www.who.int/mediacentre/factsheets/fs282/fr/)). Cela représente une part conséquente des utilisateurs que vous perdriez parce que votre site est mal codé — presque autant que la population des États-Unis.

### Les personnes ayant des troubles de l'audition

Aussi connues comme les personnes malentendantes ou sourdes, ce groupe correspond aux personnes qui ont perdu, partiellement ou totalement, la perception des sons. Les sourds et malentendants utilisent des technologies d'assistance (voir [Aides techniques pour les personnes ayant des troubles de l'audition, de la voix, de la parole ou du langage (en)](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders) ), mais il n'existe pas de technologies spécifiques pour l'utilisation du Web et des ordinateurs.

Il existe cependant des techniques auxquelles il faut penser pour proposer des alternatives aux fichiers audios : de la simple transcription textuelle aux sous-titres qui peuvent être affichés en même temps que la vidéo. Un article décrira plus tard ces méthodes.

Les sourds et malentendants représentent également une part significative des utilisateurs — «360 millions de personnes dans le monde souffrent de déficience auditive incapacitante», indique l'aide-mémoire [Surdité et déficience auditive](http://www.who.int/mediacentre/factsheets/fs300/fr/) de l'Organisation Mondiale de la Santé.

### Les personnes ayant des troubles de la mobilité

Ces personnes ont un handicap ayant rapport au mouvement, qui peuvent comprendre des problèmes purement physique (comme la perte d'un membre ou la paralysie), ou des troubles psychologiques ou génétiques qui mènent à des faiblesse voire à une perte du contrôle des membres. Certains ont des difficultés à exécuter les mouvements précis de la main nécessaires à l'utilisation d'une souris, tandis que d'autres peuvent être plus sérieusement atteints, voire même être paralysés au point d'avoir à utiliser un pointeur frontal pour utiliser un ordinateur.

Ce genre de handicap peut aussi venir avec l'âge, et non d'un accident ou d'une pathologie particulière, ou encore être la conséquence de limitations matérielles — certains utilisateurs peuvent ne pas avoir de souris.

En général, cela se traduit au niveau du développement web par la nécessité de rendre les contrôles accessible au clavier — nous discuterons de l'accessibilité au clavier plus tard dans d'autres articles du module, mais cela peut être une bonne idée d'essayer de naviguer sur certains sites en utilisant seulement le clavier. Par exemple, pouvez vous naviguer entre les différents champs d'un formulaire juste avec la touche <kbd>Tab</kbd> ? Vous trouverez plus de détails à propos de l'utilisation du clavier dans la section [Test d'accessibilité avec le clavier intégré entre différents navigateurs(en)](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility).

De nombreuses personnes souffrent de troubles de la mobilité. Par exemple, en France, 4% des personnes vivant en ménage ordinaire déclarent avoir des difficultés à se servir des mains et doigts, d'après la vue d'ensemble [L'approche du handicap par les limitations fonctionnelles et la restriction globale d'activité chez les adultes de 20 à 59 ans](https://www.insee.fr/fr/statistiques/1372411?sommaire=1372421) de l'INSEE.

### Personnes ayant des déficiences cognitives

La dernière catégorie d'incapacités est probablement la plus large. Les déficiences cognitives désignent généralement des incapacités allant des maladies mentales aux difficultés d'apprentissage, aux difficultés de compréhension et de concentration telles que  [TDAH-trouble d'hyperactivité avec déficit de l'attention](https://naitreetgrandir.com/fr/mauxenfants/indexmaladiesa_z/fiche.aspx?doc=naitre-grandir-sante-enfant-trouble-deficit-attention-hyperactivite-tdah), [TSA-trouble du spectre de l’autisme](https://cenop.ca/troubles-comportement/tsa-trouble-spectre-autisme.php),  aux personnes atteintes de [schizophrénie](http://www.psycom.org/Espace-Presse/Sante-mentale-de-A-a-Z/Schizophrenie-s), et à de nombreux autres types de désordres, qui peuvent affecter de nombreux aspects de la vie quotidienne en raison de problèmes de mémoire, de résolution de problèmes, de compréhension, d'attention, etc.

Le plus souvent, ces incapacités peuvent affecter l'utilisation du site web : difficulté à comprendre comment effectuer une tâche, à se rappeler comment effectuer une tâche déjà accomplie ou à une frustration accrue en cas de confusion dans les flux de travail ou d'incohérences dans la présentation / navigation / autre page.

Contrairement à d’autres problèmes d’accessibilité web, il est impossible de prescrire des solutions rapides à de nombreux problèmes d’accessibilité web résultant de déficiences cognitives ; la meilleure chance que vous ayez est de concevoir vos sites web de manière à être aussi logiques, cohérents et utilisables que possible. Par exemple, assurez-vous que :

- les pages sont cohérentes — la navigation, l'en-tête, le pied de page et le contenu principal se trouvent toujours aux mêmes endroits.
- les outils sont bien conçus et faciles à utiliser.
- Les processus en plusieurs étapes sont divisés en étapes logiques, avec des rappels réguliers de l'état d'avancement du processus et du temps qu'il vous reste pour terminer le processus, le cas échéant.
- Les workflows sont logiques, simples et nécessitent le moins d’interactions possible. Par exemple, l'inscription et la connexion à un site web sont souvent complexes.
- les pages ne sont ni trop longues ni trop denses en termes de quantité d'informations présentées à la fois.
- le langage utilisé dans vos pages est aussi simple et clair que possible, et ne contient pas un jargon et un argot inutiles.
- les points importants et le contenu sont mis en évidence.
- les erreurs des utilisateurs sont clairement mises en évidence, avec des messages d'aide suggérant des solutions.

Ce ne sont pas des "techniques d'accessibilité" en tant que telles, ce sont de bonnes pratiques de conception. Elles profiteront à tous ceux qui utilisent vos sites et devraient faire partie intégrante de votre travail.

En termes de statistiques, encore une fois, les chiffres sont importants. Le [rapport 2014 sur le statut d'invalidité](http://www.disabilitystatistics.org/StatusReports/2014-PDF/2014-StatusReport_US.pdf) (PDF, 511KB) de l'Université de Cornell indique qu'en 2014, 4,5% des Américains âgés de 21 à 64 ans présentaient une forme de déficience cognitive .

> **Note :** La page [cognitives](https://apprendreaeduquer.fr/fonctions-cognitives/) de apprendreaeduquer fournit une extension utile de ces idées et mérite certainement d'être lue.

## Implémentation de l'accessibilité dans votre projet

Un mythe commun en matière d'accessibilité est que l'accessibilité est un "supplément" coûteux à mettre en œuvre sur un projet. Ce mythe peut en réalité être vrai si :

- Vous essayez de "moderniser" l'accessibilité sur un site Web existant qui présente d'importants problèmes d'accessibilité.
- Vous avez seulement commencé à prendre en compte l'accessibilité et à découvrir des problèmes liés aux dernières étapes d'un projet.

Cependant, si vous envisagez l'accessibilité dès le début d'un projet, le coût de la plupart des contenus accessibles devrait être assez minime.

Lors de la planification de votre projet, tenez compte des tests d'accessibilité dans votre programme de tests, comme pour tout autre segment d'audience cible important (par exemple, les navigateurs de bureau ou mobiles cibles). Testez tôt et souvent, en exécutant idéalement des tests automatisés pour détecter les fonctionnalités manquantes détectables par programme (telles que les images manquantes  [alternative text](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Text_alternatives)  ou le texte du lien incorrect — voir [Element relationships and context](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Element_relationships_and_context)), et en effectuant des tests avec des groupes d'utilisateurs désactivés pour voir comment. des fonctionnalités de site plus complexes fonctionnent pour eux, par exemple:

- Mon widget de sélecteur de date est-il utilisable par les personnes utilisant des lecteurs d'écran ?
- Si le contenu est mis à jour de manière dynamique, les personnes malvoyantes le savent-elles ?
- Les boutons de mon UI sont-ils accessibles via le clavier et les interfaces tactiles ?

Vous pouvez et devez garder une note sur les problèmes potentiels de votre contenu qui devront être redessinés pour le rendre accessible, assurez-vous qu'il a été testé minutieusement et réfléchissez aux solutions / alternatives. Le contenu textuel (comme vous le verrez dans le prochain article) est simple, mais qu'en est-il de votre contenu multimédia et de vos graphismes 3D fantastiques ? Vous devriez examiner le budget de votre projet et réfléchir de manière réaliste aux solutions disponibles pour rendre ce contenu accessible ? Vous pourriez avoir à payer pour que tout votre contenu multimédia soit transcrit, ce qui peut être coûteux, mais réalisable.

Aussi, soyez réaliste. "100% d'accessibilité" est un idéal impossible à obtenir — vous rencontrerez toujours un type de problème qui oblige un utilisateur à trouver certains contenus difficiles à utiliser — mais vous devez en faire autant que vous le pouvez. Si vous envisagez d'inclure un graphique à secteurs 3D ultra-graphique créé à l'aide de WebGL, vous pouvez inclure un tableau de données en tant que représentation alternative accessible des données. Vous pouvez également simplement inclure la table et supprimer le graphique à secteurs 3D : la table est accessible à tous, plus rapide à coder, moins gourmande en temps processeur et plus facile à gérer.

D'autre part, si vous travaillez sur un site web de galerie présentant des œuvres d'art 3D intéressantes, il serait déraisonnable de s'attendre à ce que chaque œuvre d'art soit parfaitement accessible aux personnes malvoyantes, étant donné qu'il s'agit d'un support entièrement visuel.

Pour montrer que vous vous souciez de l'accessibilité et que vous en avez pensé, publiez sur votre site une déclaration d'accessibilité détaillant votre politique en matière d'accessibilité et les mesures que vous avez prises pour rendre le site accessible. Si quelqu'un se plaint de ce que votre site a un problème d'accessibilité, commencez un dialogue avec elle, faites preuve d'empathie et prenez les mesures qui s'imposent pour tenter de résoudre le problème.

> **Note :** Notre article [Gérer les problèmes courants d'accessibilité](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibilité#Using_native_keyboard_accessibility) couvre les spécificités d'accessibilité qui doivent être testées plus en détail.

Résumer :

- Pensez à l'accessibilité dès le début d'un projet et testez tôt et souvent. Comme tout autre bogue, un problème d'accessibilité devient d'autant plus coûteux à résoudre qu'il est découvert tard.
- N'oubliez pas que de nombreuses pratiques optimales en matière d'accessibilité profitent à tout le monde, pas uniquement aux utilisateurs handicapés. Par exemple, le balisage sémantique lean n’est pas seulement bon pour les lecteurs d’écran, il est également rapide à charger et performant, donc meilleur pour tout le monde, en particulier pour les appareils mobiles et/ou les connexions lentes.
- Publier une déclaration d'accessibilité sur votre site et interagir avec les personnes ayant des problèmes.

## Directives d'accessibilité et loi

Il existe de nombreuses listes de contrôle et ensembles de directives disponibles sur lesquels baser les tests d'accessibilité, ce qui peut sembler fastidieux à première vue. Notre conseil est de vous familiariser avec les domaines fondamentaux dans lesquels vous devez prendre soin, ainsi que de comprendre les structures de haut niveau des directives qui vous sont le plus utiles.

- Pour commencer, le W3C a publié un document volumineux et très détaillé qui inclut des critères très précis, indépendants de la technologie, pour la conformité de l'accessibilité. Celles-ci s'appellent le [Web Content Accessibility Guidelines](https://www.w3.org/WAI/intro/wcag.php) (WCAG),  et ne constituent en aucun cas une lecture brève. Les critères sont divisés en quatre catégories principales, qui spécifient comment les implémentations peuvent être rendues perceptibles, exploitables, compréhensibles et robustes. Le meilleur endroit pour commencer à apprendre et  [WCAG at a Glance](https://www.w3.org/WAI/WCAG20/glance/Overview.html). Il n'est pas nécessaire d'apprendre le WCAG par cœur — soyez conscient des principaux problèmes et utilisez une variété de techniques et d'outils pour mettre en évidence les domaines qui ne sont pas conformes aux critères du WCAG (voir ci-dessous pour plus d'informations).
- Votre pays peut également avoir une législation spécifique régissant la nécessité d’accéder aux sites web desservant leur population — par exemple  [Section 508 of the Rehabilitation Act](http://www.section508.gov/content/learn) en US, [Federal Ordinance on Barrier-Free Information Technology](https://www.einfach-fuer-alle.de/artikel/bitv_english/) en Germany, la lois sur [Equality Act](http://www.legislation.gov.uk/ukpga/2010/15/contents) Royaume-Uni, [Accessibilità](http://www.agid.gov.it/agenda-digitale/pubblica-amministrazione/accessibilita) en Italy, le [Disability Discrimination Act](https://www.humanrights.gov.au/world-wide-web-access-disability-discrimination-act-advisory-notes-ver-41-2014) en Australia, etc.

Ainsi, alors que le WCAG est un ensemble de directives, votre pays aura probablement des lois régissant l’accessibilité du Web, ou du moins l’accessibilité des services accessibles au public (sites web, télévision, espaces physiques, etc.). C’est une bonne idée. pour savoir quelles sont vos lois. Si vous ne faites aucun effort pour vérifier que votre contenu est accessible, vous pourriez éventuellement avoir des ennuis avec la loi si les personnes handicapées s'en plaignent.

Cela semble sérieux, mais vous devez vraiment considérer l'accessibilité comme une priorité principale de vos pratiques de développement web, comme indiqué ci-dessus. En cas de doute, demandez conseil à un avocat qualifié. Nous n'allons pas donner plus de conseils que cela, car nous ne sommes pas des avocats.

## API d'accessibilité

Les navigateurs web utilisent des **API d’accessibilité** spéciales (fournies par le système d’exploitation sous-jacent) qui présentent des informations utiles pour les technologies d’aide (TA) — les TA ont généralement tendance à utiliser des informations sémantiques. Ces informations ne comprennent donc pas les informations de style, ou JavaScript. Ces informations sont structurées dans une arborescence d'informations appelée **arborescence d'accessibilité**.

Différents systèmes d'exploitation ont différentes API d'accessibilité disponibles :

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- Mac OS X: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Lorsque les informations sémantiques natives fournies par les éléments HTML dans vos applications Web tombent, vous pouvez les compléter avec des fonctionnalités de la  [WAI-ARIA specification](https://www.w3.org/TR/wai-aria/),  qui ajoutent des informations sémantiques à l’arbre d’accessibilité pour améliorer l’accessibilité. Vous pouvez en apprendre beaucoup plus sur WAI-ARIA dans notre article sur les bases de [WAI-ARIA basics](/fr/docs/Learn/Accessibility/WAI-ARIA_basics).

## Résumé

Cet article aurait dû vous donner une vue d'ensemble utile de haut niveau de l'accessibilité, vous expliquer pourquoi c'est important et voir comment vous pouvez l'intégrer à votre flux de travail. Vous devriez maintenant aussi avoir soif d'apprendre les détails de la mise en œuvre susceptibles de rendre des sites accessibles. Nous commencerons dans cette question dans la section suivante, en nous demandant pourquoi le HTML constitue une bonne base d'accessibilité.

{{NextMenu("Learn/Accessibility/HTML", "Learn/Accessibility")}}
