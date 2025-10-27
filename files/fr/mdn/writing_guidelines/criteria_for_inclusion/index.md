---
title: Critères d'inclusion sur MDN Web Docs
short-title: Critères d'inclusion
slug: MDN/Writing_guidelines/Criteria_for_inclusion
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Cet article décrit en détail les critères pour qu'un contenu soit inclus sur MDN Web Docs, le processus de candidature pour ajouter une nouvelle documentation, ainsi que les attentes et consignes pour les parties qui postulent.

Cette page concerne les projets d'envergure. Pour suggérer une nouvelle page ou un nouvel article, veuillez consulter la section [Suggestion de contenus](/fr/docs/MDN/Writing_guidelines/What_we_write#suggestion_de_contenus) de la page «&nbsp;Ce sur quoi nous écrivons&nbsp;».

## Technologies standards du Web

La mission de MDN Web Docs est de documenter les technologies standards du Web qui figurent dans une spécification publiée par un organisme de normalisation reconnu et qui sont prises en charge dans au moins un navigateur stable. Ces critères indiquent un intérêt suffisant, une stabilité et une «&nbsp;intention de mise en œuvre&nbsp;» de la part de l'industrie du Web. Nous pensons donc que ces technologies sont un choix sûr pour investir notre temps et nos efforts dans leur documentation. Avant ce stade, une technologie ou fonctionnalité Web risque d'être abandonnée faute d'intérêt ou d'être trop instable et de beaucoup évoluer, ce qui impliquerait de nombreuses réécritures (que nous essayons d'éviter autant que possible).

## Technologies qui ne sont pas des standards du Web

Les technologies qui ne sont pas des standards du Web ne répondent pas à nos critères ci-dessus. Nous ne les documentons normalement pas sur MDN Web Docs.

Notre mission est «&nbsp;fournir aux développeur·euse·s les informations dont ils·elles ont besoin pour créer facilement des projets sur le Web ouvert&nbsp;». Cela suggère que nous pouvons envisager de documenter des technologies utiles aux développeur·euse·s Web, même si elles ne sont pas des standards ouverts ou sur la voie de la standardisation.

Si vous souhaitez proposer une technologie qui n'est pas un standard du Web pour inclusion sur MDN Web Docs, assurez-vous qu'elle respecte les critères ci-dessous.

## Critères d'inclusion sur MDN Web Docs

Les technologies doivent remplir les critères décrits ici pour être considérées comme pouvant être documentées sur MDN Web Docs.

### Être ouverte et non propriétaire

Sur MDN Web Docs, nous soutenons les technologies ouvertes. Nous ne soutenons pas les écosystèmes technologiques fermés qui sont contrôlés par une seule entité, qui ne sont pas ouverts aux contributions de toute partie intéressée, et qui ne sont pas interopérables sur plusieurs plateformes et systèmes. Nous pensons que la technologie fonctionne mieux pour tout le monde lorsqu'elle est créée ouvertement.

### Être exposée au Web et liée aux technologies du Web

Notre mission centrale concerne les technologies standards du Web&nbsp;: il n'est pas pertinent de commencer à documenter des technologies qui ne sont pas liées au Web ou qui n'intéressent pas les développeur·euse·s Web.

### Montrer des signes d'intérêt et d'adoption

Nous ne voulons pas passer du temps à documenter une technologie qui ne présente aucun signe d'intérêt ou d'adoption dans l'industrie. Il se peut simplement qu'il soit trop tôt pour commencer à documenter cette technologie, et nous pourrions envisager de la documenter sur MDN Web Docs à l'avenir.

### Ne pas montrer de signes d'obsolescence ou de remplacement

En lien avec le point précédent, nous ne voulons pas non plus passer du temps à documenter une technologie qui est en fin de cycle de vie et qui montre déjà des signes de déclin d'intérêt.

### Ne pas avoir de ressource documentaire établie ailleurs

Il existe de nombreuses bibliothèques et frameworks qui ne sont pas des standards du Web mais qui sont construits sur des technologies du Web et sont très populaires dans l'industrie. Nous ne documentons aucune de celles-ci car, en général, elles disposent déjà de ressources documentaires officielles. Il serait insensé de concurrencer la ressource officielle d'un framework populaire&nbsp;: ce serait une perte de temps et cela risquerait de semer la confusion chez les développeur·euse·s qui cherchent à apprendre la technologie.

### Avoir une communauté prête à écrire et à maintenir la documentation

L'équipe MDN Web Docs se concentre sur la documentation de la plateforme Web ouverte. Si vous souhaitez qu'une technologie dans ce domaine soit considérée pour une documentation sur MDN Web Docs, vous devrez réunir une communauté prête à rédiger la documentation et à la maintenir après sa création. Notre équipe est heureuse de fournir des conseils dans ces cas, y compris des relectures et des retours, mais nous n'avons pas les ressources pour aller au-delà.

> [!NOTE]
> Le travail sur MDN Web Docs s'effectue sur GitHub et «&nbsp;en toute transparence&nbsp;». Votre équipe doit maîtriser git et GitHub et être à l'aise avec le travail en open source.

## Processus de sélection de la nouvelle technologie

Si une technologie semble être une bonne candidate pour être documentée sur MDN Web Docs, vous pouvez lancer une discussion sur les [discussions communautaires GitHub](/fr/docs/MDN/Community/Communication_channels#discussions_github) afin de proposer et discuter de l'inclusion de cette technologie. Cette section décrit ce que la proposition doit inclure.

### Soumettre la proposition

Les technologies seront examinées au cas par cas pour une inclusion sur MDN Web Docs. Pour être prise en compte, vous devrez soumettre une proposition intitulée «&nbsp;Proposition de documentation d'une nouvelle technologie sur MDN Web Docs&nbsp;». Nous aurons besoin des informations suivantes dans votre proposition&nbsp;:

- La technologie, son objectif principal/cas d'usage, et le public cible de développeur·euse·s.
- Quel est le niveau d'intérêt ou d'activité dans l'industrie ou la communauté autour de cette technologie&nbsp;?
  - Beaucoup de développeur·euse·s Web l'utilisent-ils·elles&nbsp;? Quelle est l'adoption dans l'industrie&nbsp;?
  - Beaucoup de développeur·euse·s Web souhaitent-ils·elles ou ont-ils·elles besoin de cette information&nbsp;?
  - Quelle est la taille du public cible pour cette information&nbsp;? Des statistiques à l'appui seraient utiles si vous en avez.
- Comment la technologie est-elle liée aux technologies principales du Web et aux navigateurs Web&nbsp;? Détails utiles&nbsp;:
  - Utilise-t-elle HTML et CSS mais sans produire de sortie sur le Web&nbsp;?
  - Est-elle prise en charge dans les navigateurs Web via un polyfill&nbsp;?
- Quelles ressources documentaires ou documentations existent déjà sur cette technologie&nbsp;?
- Quelle quantité de documentation devrait être ajoutée à MDN Web Docs&nbsp;?
  - Indiquez le nombre attendu de guides, tutoriels, pages de référence pour les éléments/méthodes/attributs, etc.
  - Fournissez une table des matières de haut niveau.
  - Mentionnez le type de fonctionnalités «&nbsp;avancées&nbsp;» que vous pensez nécessaires pour cette ressource, au-delà des pages de documentation de base. Prévoyez-vous d'inclure des vidéos intégrées, des exemples de code interactifs, etc.&nbsp;?
- Qui rédigera la documentation&nbsp;? Qui sont ces personnes et pourquoi sont-elles qualifiées&nbsp;?
- Comment la documentation sera-t-elle maintenue&nbsp;?

Vous n'avez pas besoin de nous fournir des centaines de pages de détails à ce stade (en fait, nous préférons que vous ne le fassiez pas). Quelques paragraphes sur chacun des points ci-dessus suffisent largement.

> [!NOTE]
> MDN Web Docs est principalement un site en anglais (en-US). La langue principale de votre projet doit être l'anglais américain.

### En attente d'une réponse

Nous examinerons la technologie et les informations que vous soumettez dans la proposition et répondrons par l'une des réponses suivantes&nbsp;:

- **Non**&nbsp;: Nous pensons que cela ne répond pas aux critères pour être documenté sur MDN Web Docs.
- **Peut-être**&nbsp;: Nous ne sommes pas sûrs que cela convienne à une documentation sur MDN Web Docs et aimerions poser quelques questions supplémentaires.
- **Oui**&nbsp;: Nous pensons qu'il est approprié de l'inclure sur MDN Web Docs.

Si la technologie est une bonne candidate, l'équipe vous aidera à démarrer la documentation.

## Consignes pour documenter la nouvelle technologie

Si la technologie que vous avez choisie est acceptée pour être documentée sur MDN Web Docs, l'étape suivante consiste à démarrer le projet.

Pour garantir le succès de votre projet de documentation de la nouvelle technologie sur MDN Web Docs, vous devrez mettre en place les éléments suivants&nbsp;:

- Une équipe dédiée
- Un plan de projet et une feuille de route
- Des consignes et standards de rédaction
- Une structure de documentation intuitive
- Un plan de maintenance

### Équipe dédiée

Assurez-vous de disposer d'une équipe dédiée qui sera présente à la fois pour rédiger la documentation initiale et pour la maintenir à jour par la suite.

Réfléchissez à la charge de travail et au nombre de personnes nécessaires.

- Si le projet est important, il peut être utile d'avoir plusieurs rédacteur·ice·s, un·e relecteur·ice technique pour vérifier l'exactitude technique, un·e correcteur·ice pour améliorer la langue, une personne pour rédiger les exemples de code, etc.
- Pour un projet plus petit, une ou deux personnes peuvent cumuler plusieurs rôles. La façon dont vous constituez l'équipe importe peu tant que cela fonctionne pour vous.

Un·e membre de l'équipe MDN Web Docs sera affecté·e à votre projet pour vous guider sur les aspects MDN Web Docs.

Vous devrez désigner un·e (ou deux) chef·fe·s d'équipe qui pourront faire le lien avec la personne référente MDN Web Docs.

Le·la représentant·e MDN Web Docs vous aidera à obtenir les autorisations nécessaires pour que chaque membre de votre équipe puisse travailler dans l'[organisation MDN sur GitHub <sup>(angl.)</sup>](https://github.com/mdn).

### Plan de projet et feuille de route

Élaborez un plan pour le projet&nbsp;: tâches, estimation des dates d'achèvement et jalons à suivre pour garantir une progression régulière.

Si le projet est important, envisagez de désigner un·e chef·fe de projet parmi votre équipe. Vous pouvez aussi rédiger un plan de sous-projet pour une première version qui couvre le minimum de documentation utile à publier (un _produit minimum viable_)&nbsp;; vous pourrez ensuite ajouter d'autres contenus.

Si le projet de documentation est petit, il faudra tout de même garder une trace de ce qui a été fait ou non, de l'état d'avancement de chaque partie (par exemple&nbsp;: non commencé, en cours, brouillon rédigé, relu, terminé), et de qui travaille sur quoi.

### Consignes et standards de rédaction

Ces [consignes](/fr/docs/MDN/Writing_guidelines) précisent comment nous attendons que les documents soient rédigés pour MDN Web Docs.

Si vous avez des consignes supplémentaires pour les documents que vous rédigez, nous attendons que ce guide soit ajouté et tenu à jour.

En termes de standards, il est attendu de maintenir un niveau raisonnable de qualité rédactionnelle pour que votre documentation reste sur MDN Web Docs. Votre référent·e MDN Web Docs travaillera avec vous pour clarifier les attentes.

### Structure de documentation intuitive

Si vous avez suivi le processus de soumission de proposition, vous devriez déjà avoir une ébauche de ce que vous allez écrire pour cette technologie. À ce stade, il faut affiner cela en un plan de structure du site&nbsp;: réfléchissez à la hiérarchie des documents et à la façon dont tout s'articulera et se reliera.

Chaque projet est différent, mais nous recommandons l'arborescence suivante&nbsp;:

```plain
├── Guides
│   ├── guide_one
│   ├── guide_two
│   └── index.md
├── index.md
├── Reference
│   ├── Elements
│   ├── Methods
│   ├── Others ?
│   └── index.md
└── Tutorials
    ├── tutorial_one
    ├── tutorial_two
    └── index.md
```

Chaque type de page utilisé dans votre projet doit disposer d'un modèle de page à copier pour la structure. Décidez-en dès le début.

Veuillez consulter notre section sur les [types de pages](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types). Si des ajouts sont nécessaires, contactez votre référent·e MDN Web Docs.

### Plan de maintenance

La documentation de cette technologie devra être maintenue pour rester sur MDN Web Docs&nbsp;:

- Le contenu et les fichiers de MDN Web Docs sont stockés sur GitHub. Lorsque d'autres personnes modifient la documentation de votre technologie, un·e membre de votre équipe doit relire ces modifications pour s'assurer que le contenu reste pertinent. Vous pouvez suivre les pull requests (PR) ouvertes via la fonctionnalité de notification de GitHub.
- Lorsque des changements interviennent sur la technologie nécessitant une mise à jour de la documentation, votre équipe doit effectuer les mises à jour appropriées, en maintenant les mêmes standards que la documentation d'origine.

Si aucun progrès positif n'est constaté pendant une période de six mois et que la documentation semble dans l'un des états suivants&nbsp;:

- Obsolète ou non maintenue
- Bloquée sans être terminée
- De faible qualité
- Devenant obsolète

Alors la documentation de cette technologie sera considérée comme abandonnée. Après discussion entre votre équipe et le·la référent·e MDN Web Docs, la documentation sera supprimée.

Nous espérons que vous comprendrez la nécessité d'être strict·e sur ces points&nbsp;: nous ne pouvons pas laisser le site se remplir de documentation de mauvaise qualité, incomplète ou obsolète.
