---
title: Flux de travail et processus
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Un aspect important des projets techniques que les débutant·e·s négligent souvent est la vision d'ensemble. Ils·elles peuvent apprendre un outil ou un langage isolé, mais ignorer tous les autres outils, bibliothèques, systèmes et métiers qui s'assemblent pour livrer une application web entière. Les sections suivantes couvrent différents aspects de cette vision globale, à un niveau général.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        N/A
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Combinaisons technologiques typiques dans les projets web.</li>
          <li>Métiers courants dans une équipe de développement web.</li>
          <li>Phases typiques d'un projet technique, et où interviennent les différents métiers.</li>
          <li>Processus de gestion de projet courants, comme agile et waterfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Combinaisons technologiques typiques

Lorsque vous créez un site web, vous utilisez une combinaison de différentes technologies, souvent appelée **pile technologique** (<i lang="en">tech stack</i> en anglais). Plus un site devient grand et complexe, plus la pile technologique s'étoffe. Elle peut être très simple pour une démo regardée par vous et quelques collègues, mais la pile d'un site en production, même apparemment simple, peut être bien plus complexe qu'il n'y paraît, car il faut&nbsp;:

- Charger rapidement (c'est l'objectif de la [performance](/fr/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Gérer un grand nombre d'utilisateurs·rices simultanément (il doit **passer à l'échelle**).
- Être bien conçu pour que les utilisateur·ice·s accèdent facilement aux informations et services.
- Être facile à maintenir et à faire évoluer en équipe.

À un niveau très général, une pile technologique d'application web pourrait ressembler à ceci&nbsp;:

```plain
Front-end
HTML, CSS, JavaScript
|
Back-end
Node.js, .NET, PHP, Python ou un autre langage côté serveur
|
Base de données
MySQL, Postgres, MongoDB ou une autre base de données
|
Serveur web
Le vôtre, construit autour d'un produit serveur comme Apache, ou un service comme Netlify
```

> [!NOTE]
> Vous verrez souvent des acronymes qui désignent des piles technologiques populaires, comme [MEAN <sup>(angl.)</sup>](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) ou [LAMP](https://fr.wikipedia.org/wiki/LAMP) (Linux, Apache, MySQL, PHP ou Python).

Sur MDN, nous nous concentrons surtout sur la partie front-end, mais même celle-ci se divise en de nombreux éléments. Par exemple&nbsp;:

- Vous utiliserez probablement un framework JavaScript (comme [React](/fr/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) pour définir les composants qui composent l'interface utilisateur.
- Le framework utilisera sans doute un langage de template (comme [Mustache <sup>(angl.)</sup>](https://mustache.github.io/)) pour définir la structure HTML et inclure dynamiquement du contenu variable.
- Vous ajouterez des styles via du CSS compatible avec le framework. Cela peut être du CSS pur, un framework CSS (comme [Tailwind <sup>(angl.)</sup>](https://tailwindcss.com/)) ou un préprocesseur (comme [Sass <sup>(angl.)</sup>](https://sass-lang.com/)).
- Un projet JavaScript doit inclure des tests pour s'assurer que les ajouts de code ne cassent rien. Les tests sont généralement réalisés avec un framework de test (comme [Jest <sup>(angl.)</sup>](https://jestjs.io/)).
- Les sites plus importants utilisent un outil de packaging/build (comme [Parcel <sup>(angl.)</sup>](https://parceljs.org/)) pour améliorer la performance, réduire la taille des fichiers, supprimer les composants inutilisés, etc.
- Et ainsi de suite.

> [!NOTE]
> Vous entendrez aussi parler de **schémas d'architecture**. Par exemple, [modèle-vue-contrôleur (MVC)](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur) est un schéma suivi par de nombreux frameworks JavaScript, tandis que [publish–subscribe (pub/sub) <sup>(angl.)</sup>](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) est courant dans les applications de messagerie. Il n'est pas nécessaire de tout comprendre en détail, mais une certaine familiarité aide à appréhender un nouvel outil ou framework.

Il existe aussi des outils hors de la pile technique elle-même pour vous aider à la gérer ou à créer des ressources pour le site&nbsp;:

- Outils de planification pour organiser le projet dans sa globalité (comme [Miro <sup>(angl.)</sup>](https://miro.com/)).
- Systèmes de gestion de versions (VCS). Vous utiliserez probablement un VCS basé sur [git <sup>(angl.)</sup>](https://git-scm.com/), comme [GitHub <sup>(angl.)</sup>](https://github.com/).
- Logiciels de design graphique/interface (comme [Figma <sup>(angl.)</sup>](https://www.figma.com/) ou [Canva <sup>(angl.)</sup>](https://www.canva.com/)).
- Outils de gestion de projet comme [Trello <sup>(angl.)</sup>](https://trello.com/) ou [Asana <sup>(angl.)</sup>](https://asana.com/).

Cela fait beaucoup d'informations à assimiler. Notre conseil&nbsp;: **ne paniquez pas&nbsp;!** Le but de cet article n'est pas de vous inquiéter en vous faisant croire que vous avez soudainement dix fois plus de choses à apprendre. Il s'agit simplement de vous donner une vision d'ensemble des projets web et de vous familiariser avec certains termes que vous croiserez.

Avec le temps, vous développerez des connaissances sur plusieurs de ces outils et technologies, mais vous ne serez pas expert·e en tout, et ce n'est pas nécessaire&nbsp;: c'est le rôle de l'équipe. Pour l'instant, vous faites exactement ce qu'il faut en apprenant les compétences de base comme HTML, CSS et JavaScript. Les autres outils et spécialisations viendront plus tard dans votre parcours.

## Métiers

Dans une équipe de développement web, il existe de nombreux métiers différents&nbsp;; il est utile de comprendre ce que chacun implique&nbsp;:

- **Chef·fe de produit**
  - : Responsable de l'ensemble du site web du point de vue du produit&nbsp;: comment le produit se comporte-t-il sur le marché, par rapport à ses concurrents&nbsp;? Quels sont ses points forts et ses faiblesses&nbsp;? Quelles nouvelles fonctionnalités le public cible demande-t-il, et lesquelles sont les plus prioritaires&nbsp;? Quels sont les principaux critères de succès du site web, et comment les nouvelles fonctionnalités récentes ont-elles aidé à atteindre ces critères&nbsp;? Le·la chef·fe de produit collecte des données et rédige des rapports pour aider l'équipe à comprendre l'efficacité de son travail et à prioriser les tâches futures.
- **Chef·fe de projet**
  - : Responsable de l'organisation du travail que l'équipe doit accomplir. Le·la chef·fe de projet crée un plan de projet avec des tâches priorisées et des dates d'échéance, assigne le personnel à chaque tâche, organise des réunions régulières pour vérifier si les objectifs de progression sont atteints et faire remonter les problèmes, et ajuste le plan si nécessaire.
- **Designer expérience utilisateur (UX)**
  - : Responsable de la compréhension des besoins du public cible du produit et de la conception du flux/expérience du produit afin que ces besoins soient satisfaits de la manière la plus efficace possible. Les questions UX typiques sont&nbsp;: «&nbsp;où devons-nous diriger l'utilisateur·ice en premier lorsqu'il·elle arrive sur notre page d'accueil&nbsp;?&nbsp;» et «&nbsp;comment rendre l'inscription à un compte aussi facile et intuitive que possible&nbsp;?&nbsp;». Ce travail est souvent couplé à de la recherche utilisateur et à des tests pour mieux comprendre le public cible, ainsi qu'à la création de maquettes filaires pour communiquer les idées. Le·la designer UX est l'un·e des principaux·ales destinataires des rapports du·de la chef·fe de produit.
- **Designer graphique**
  - : Responsable du travail de conception visuelle sur le projet web. Les designers graphiques s'occupent de diverses disciplines comme la typographie, le choix des palettes de couleurs, la création d'icônes et d'autres éléments graphiques, et la création de maquettes de site web à partir des maquettes filaires du·de la designer UX.
- **Développeur·euse front-end**
  - : C'est (probablement) ce que vous visez si vous lisez ceci&nbsp;! Les développeur·euse·s front-end utilisent HTML, CSS et JavaScript pour créer la partie visuelle du site web avec laquelle les utilisateur·ice·s interagissent, donnant vie aux maquettes fonctionnelles et visuelles créées par les designers UX et graphiques.
- **Développeur·euse back-end**
  - : Responsable des parties non visuelles du site web. Il·elle écrit le code back-end pour demander des données internes, générer des pages HTML à partir de modèles et traiter les données externes soumises par les utilisateur·ice·s. Il·elle gère aussi la configuration du serveur web, la sécurité du site, etc.
- **Développeur·euse full-stack**
  - : Prend en charge à la fois les tâches de développement front-end et back-end.
- **Ingénieur·e assurance qualité (QA)**
  - : Responsable des tests des nouvelles fonctionnalités pour s'assurer qu'elles fonctionnent correctement et du signalement des bogues, en communiquant avec les développeur·euse·s pour les aider à prioriser les corrections nécessaires.
- **Spécialiste du contenu/rédacteur·ice technique**
  - : Responsable de la qualité du contenu textuel du site web pour le public cible. Cela inclut la structure de l'information et sa navigation, les libellés de l'interface utilisateur, les articles de blog, les textes marketing et la documentation produit.

### Métiers moins courants

D'autres métiers moins courants incluent&nbsp;:

- **Chercheur·euse utilisateur·ice**
  - : Les équipes plus importantes ont souvent un·e chercheur·euse dédié·e à la recherche et aux tests utilisateur·ice·s.
- **Spécialiste de l'optimisation pour les moteurs de recherche (SEO)**
  - : Analyse le contenu et la structure du site web et effectue des modifications pour le rendre plus visible dans les résultats pertinents des moteurs de recherche. Voir {{Glossary("SEO")}} pour plus d'informations.

## Phases d'un projet technique

Un projet technique typique peut se dérouler ainsi&nbsp;:

1. Chef·fe de produit&nbsp;: identification d'un nouvel ensemble d'exigences utilisateur·ice·s pour le site web.
2. Équipe projet&nbsp;: discussion pour décider si ces exigences peuvent être satisfaites en ajoutant une nouvelle fonctionnalité au site web.
3. Chef·fe de projet et équipe&nbsp;: définition des tâches individuelles nécessaires à la création de la nouvelle fonctionnalité, puis création d'un [processus de gestion pour les suivre](#work_management_processes).
4. Designer UX&nbsp;: conception du flux de travail pour la nouvelle fonctionnalité et réalisation d'une maquette filaire pour situer son emplacement sur le site.
5. Designer graphique&nbsp;: réalisation d'une maquette illustrant l'apparence de la fonctionnalité sur le site web, avec les polices et la palette de couleurs choisies.
6. Spécialiste du contenu&nbsp;: rédaction du texte d'interface utilisateur requis par la fonctionnalité, ainsi que de la documentation nécessaire.
7. Développeur·euse back-end&nbsp;: création des systèmes nécessaires pour stocker et gérer en toute sécurité les données qui alimentent la fonctionnalité.
8. Développeur·euse front-end&nbsp;: développement de la fonctionnalité interactive à partir des maquettes graphiques et connexion au back-end pour récupérer les données nécessaires.
9. Ingénieur·e QA&nbsp;: test minutieux de la nouvelle fonctionnalité et rédaction d'un rapport détaillé sur les problèmes rencontrés.
10. Développeur·euse·s&nbsp;: correction des bogues jugés suffisamment graves pour bloquer la mise en ligne de la fonctionnalité.
11. Équipe projet&nbsp;: mise en ligne de la fonctionnalité sur le site web une fois les bogues bloquants corrigés et le projet validé.

Il s'agit d'une vue simplifiée&nbsp;: d'autres phases existent autour de la mise en œuvre de la fonctionnalité, et elles ne seront pas forcément toutes réalisées dans l'ordre indiqué, mais cela vous donne une idée de ce qui est impliqué.

## Processus de gestion de projet

Un·e chef·fe de projet utilisera un certain type de processus pour gérer le projet web, suivre l'avancement des différentes tâches, s'assurer qu'elles sont réalisées dans le bon ordre et à temps, etc. Les deux principaux types de processus sont&nbsp;:

- **Cascade**
  - : Désigne la gestion d'un projet en phases claires et fixes, où chacune dépend de la précédente, et où peu de changements d'exigences sont anticipés. En général, un seul grand résultat est livré à la fin du projet. La gestion de l'équipe tend à être plus bureaucratique, avec moins d'autonomie.
    - Les projets en cascade ont tendance à être mieux spécifiés au départ et à avoir moins de dérive des objectifs (ajout d'exigences en cours de projet). De plus, les livraisons de produits plus importantes et moins fréquentes sont plus faciles à gérer en termes de planification des sorties, de marketing, de formation et de documentation.
    - Cependant, le modèle en cascade est moins flexible, et les changements se produisent beaucoup plus lentement. Attendre plusieurs mois pour une correction de bogue peut être frustrant.
- **Agile**
  - : Désigne la gestion d'un projet de manière plus flexible, où plusieurs phases peuvent avancer simultanément, et où plusieurs résultats plus petits sont livrés à différents jalons tout au long du projet. Les changements d'exigences sont attendus et peuvent être gérés en modifiant les priorités selon les besoins. Les équipes sont généralement plus autonomes.
    - Les projets agiles sont flexibles et peuvent s'adapter plus facilement aux changements d'exigences. Il est aussi agréable d'avoir des livraisons plus fréquentes&nbsp;: les bogues sont corrigés plus rapidement, l'innovation est plus fréquente, et il y a toujours quelque chose à communiquer pour l'équipe marketing. Les équipes agiles parlent souvent d'amélioration continue.
    - Cependant, il y a plus de risques de dérive des objectifs et de glissement des délais, les projets semblent souvent ne jamais être vraiment terminés, et il y a une pression constante pour livrer.

> [!NOTE]
> Les équipes de développement web préfèrent souvent travailler avec un processus agile, car le développement logiciel est par nature sujet à des changements (parfois rapides) d'exigences dus à de nouveaux bogues, des retours utilisateur·ice·s, la stratégie de l'entreprise, etc.

### Scrum et kanban

Il existe un type spécifique de méthodologie agile appelé **scrum**, qui a un ensemble de règles fixes sur la façon dont un projet est mené. Par exemple&nbsp;:

- La personne responsable du scrum est appelée scrum master. Il s'agit souvent simplement du·de la chef·fe de projet sous un autre nom.
- Le travail à effectuer est divisé en cycles, appelés **sprints**, qui durent généralement deux semaines.
- Avant chaque sprint, les nouvelles tâches potentielles sont discutées, et si elles sont acceptées dans le sprint, elles sont placées dans un backlog.
- Les tâches sont extraites du backlog et passent par différentes phases jusqu'à leur achèvement, comme «&nbsp;en cours&nbsp;» et «&nbsp;en relecture&nbsp;».
- Le·la scrum master organise de courtes réunions quotidiennes (**stand-up meetings**) où chacun·e parle de ses avancées et des éventuels problèmes rencontrés, afin de détecter rapidement les difficultés.
- À la fin de chaque sprint, le·la scrum master organise une réunion de rétrospective pour examiner ce qui a bien fonctionné, ce qui a moins bien fonctionné, et les leçons à tirer pour le sprint suivant.

Un autre type de méthodologie agile est appelé **kanban**, qui comporte moins de règles que scrum, n'utilise pas de sprints, et met davantage l'accent sur l'amélioration continue. Kanban est particulièrement utile pour gérer des processus continus qui n'ont pas de fin clairement définie, comme les tickets de support client.

### Tableaux kanban

Des outils comme [Trello](https://trello.com/fr) et [Asana](https://asana.com/fr) proposent des visualisations qui montrent l'état d'avancement des différentes tâches d'un projet. On les appelle généralement **tableaux kanban**, bien qu'ils puissent servir à gérer différents types de processus, pas seulement kanban. Les tableaux kanban sont constitués de différentes colonnes, qui peuvent représenter différents statuts dans un projet scrum («&nbsp;backlog&nbsp;», «&nbsp;à faire&nbsp;», «&nbsp;en cours&nbsp;», etc.), différents types de travail («&nbsp;recherche&nbsp;», «&nbsp;conception&nbsp;», «&nbsp;développement&nbsp;», etc.) ou tout ce qui est utile à votre projet.

[GitHub Projects](https://docs.github.com/fr/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) est une autre bonne option d'outillage, et est gratuit à utiliser&nbsp;: il suffit de créer un compte GitHub.

## S'exercer aux workflows de projet

Vous devriez vous renseigner sur les processus ci-dessus, et vous entraîner à suivre certains de vos projets professionnels ou personnels à l'aide d'un tableau kanban. Ne vous inquiétez pas d'utiliser une méthodologie scrum complexe&nbsp;: le kanban de base suffit pour le moment. Même en solo, il peut être intéressant de s'exercer au workflow suivant&nbsp;:

1. Créer des tâches.
2. Décider de leur taille ou de leur durée.
3. Prioriser les tâches.
4. Les ordonner avec des dates d'échéance.
5. Commencer à travailler sur différentes tâches.
6. Mettre à jour leur statut («&nbsp;en cours&nbsp;», «&nbsp;bloqué&nbsp;», «&nbsp;terminé&nbsp;», etc.) au fur et à mesure de l'avancement.

Suivez l'avancement d'un projet complet du début à la fin&nbsp;: essayez avec votre propre site web ou un projet annexe. Essayez aussi de [contribuer à un projet open source](/fr/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participer_à_lopen_source)&nbsp;: beaucoup utilisent un processus de suivi du travail similaire à ce que nous avons décrit ci-dessus.

## Voir aussi

- [Qu'est-ce qu'une pile technologique et comment ça fonctionne&nbsp;? <sup>(angl.)</sup>](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Structure d'équipe de développement web&nbsp;: rôles et processus <sup>(angl.)</sup>](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agile contre Cascade <sup>(angl.)</sup>](https://www.productplan.com/learn/agile-vs-waterfall/), ProductPlan
- [Qu'est-ce que Scrum&nbsp;? <sup>(angl.)</sup>](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
