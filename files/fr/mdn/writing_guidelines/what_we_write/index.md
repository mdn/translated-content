---
title: Ce sur quoi nous écrivons
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: 4d6913ea91fa5dd65f843d715f1878a8d015b49f
---

{{MDNSidebar}}

MDN contient une documentation sur le Web, _neutre_ pour les différents navigateurs, pour permettre aux développeuses et développeurs d'écrire du code «&nbsp;agnostique&nbsp;» aux différents navigateurs. Dans cet article, vous trouverez des informations pour savoir si un sujet ou un type de contenu a sa place pour être inclus dans MDN.

## Règles éditoriales

Cette section décrit les règles mises en place par l'équipe MDN employée par Mozilla pour gérer le contenu de MDN. Toutes les personnes qui contribuent à MDN se doivent de respecter ces règles.

### Pertinence

Tout le contenu présent sur MDN doit être pertinent pour la section dans laquelle il apparaît. Les publicités et autres contenus indésirables ne seront pas acceptés. Les personnes qui tentent d'ajouter ce type de contenu à plusieurs reprises pourront être bannies de MDN à la discrétion de l'équipe MDN employée par Mozilla.

Les liens sortants vers des sites commerciaux qui sont pertinents pour le sujet seront jugés au cas par cas. La valeur ajoutée pour aider les équipes de développement web doit surpasser le bénéfice commercial du site cible.

### Neutralité

Les articles de MDN doivent respecter [une neutralité de point de vue](https://fr.wikipedia.org/wiki/Wikipédia:Neutralité_de_point_de_vue), notamment pour les différences entre les navigateurs. Tout commentaire dénigrant sur quelque navigateur ou agent utilisateur que ce soit est inacceptable.

### Sujets web ouverts

Les technologies web documentées sur MDN doivent être spécifiées de façon ouverte et implémentées par au moins un moteur de rendu. Les variations quant à la prise en charge des différents navigateurs sont documentées dans la section [de compatibilité des navigateurs](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) d'un article.

## Suggestion de contenus

Si vous souhaitez suggérer un nouveau contenu pour MDN, veuillez lire cette page avant votre soumission afin de vérifier qu'elle est pertinente.

Pour les nouvelles pages de référence ou les nouveaux guides, veuillez ouvrir une discussion [sur le dépôt `mdn-community`](https://github.com/mdn/mdn-community/discussions/categories/content-suggestions) et décrire le contenu suggéré et les raisons de cette suggestion (avec le plus de détails possible).

Pour suggérer des projets plus vastes, comme l'écriture de nouvelles sections, veuillez vous référer aux [critères d'inclusion](/fr/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion). Cette page décrit comment faire dans ce cas.

## Sujets pertinents pour MDN

MDN documente en général les technologies web ouvertes. Cela inclut les fonctionnalités qui peuvent être utilisées par les développeuses et développeurs web pour créer des sites et applications web.

Si une fonctionnalité est implémentée par plusieurs navigateurs et acceptée comme standard ou en voie de standardisation, sa documentation a toute sa place sur MDN. Si une fonctionnalité est encore expérimentale et pas implémentée par plusieurs navigateurs ou si elle est sujette à changements, sa documentation pourra être incluse sur MDN, mais ne sera pas considérée comme prioritaire.

Autrement dit, les technologies web qui peuvent être documentées sur MDN devraient respecter les critères suivants&nbsp;:

- Être en voie de standardisation.
- Être spécifiée par un organisme de spécification reconnu.
- Être implémentée par au moins un moteur de rendu.
- Être diffusée par une version de navigateur stable.

Les sujets sur lesquels nous nous concentrons avant tout sont les technologies web côté client&nbsp;:

- [HTML](/fr/docs/Web/HTML)
- [CSS](/fr/docs/Web/CSS)
- [JavaScript](/fr/docs/Web/JavaScript)
- [Les API web](/fr/docs/Web/API)
- [HTTP](/fr/docs/Web/HTTP)

Nous documentons également d'autres sujets comme [SVG](/fr/docs/Web/SVG), [XML](/fr/docs/Web/XML), [WebAssembly](/fr/docs/WebAssembly), [l'accessibilité](/fr/docs/Learn/Accessibility). De plus, nous écrivons [des guides d'apprentissage](/fr/docs/Learn) pour ces technologies et disposons également [d'un glossaire](/fr/docs/Glossary).

> **Note :** Les technologies côté serveur ont, la plupart du temps, leur propre documentation et MDN n'a pas pour but de maintenir une autre version. Toutefois, [il existe certaines exceptions](/fr/docs/Learn/Server-side).

Le contenu présent sur MDN doit être pertinent pour la section dans laquelle il est situé. On attend des personnes qui contribuent à ce qu'elles suivent [les règles d'écritures sur MDN](/fr/docs/MDN/Writing_guidelines) tant pour la forme, les exemples de code que pour d'autres sujets.

Pour plus de détails quant aux critères d'acceptation pour la documentation d'une technologie sur MDN, veuillez vous référer à [la page des critères d'inclusion](/fr/docs/MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion).

### Quand documenter une nouvelle technologie

Sur MDN, nous cherchons constamment à documenter les nouvelles technologies web standards dès que c'est pertinent. Nous visons un équilibre entre une publication suffisamment tôt afin que les développeuses et développeurs puissent apprendre à utiliser les fonctionnalités dès que c'est nécessaire et une publication suffisamment tardive afin que la technologie soit mature et stable afin que la documentation ne soit pas sujette à des mises à jour constantes voire à un retrait pur et simple.

En général, nous documentons une fonctionnalité au plus tôt lorsque _la fonctionnalité est en voie de standardisation et implémentée quelque part_.

Nous envisageons de documenter une nouvelle technologie si&nbsp;:

- Elle est définie dans une spécification publiée par une organisation de standardisation reconnue (W3C, WHATWG, Khronos, IETF, etc.) et a atteint un certain niveau de stabilité (par exemple un document au statut de brouillon de travail ou un candidat à recommandation du W3C ou lorsque la spécification est assez stable à en juger le nombre de bogues rédigés à son sujet).
- Elle est implémentée de façon cohérente dans au moins un navigateur et fait montre d'un certain intérêt par les équipes de développement d'autres navigateurs (comme un ticket actif ou une «&nbsp;intention d'implémentation&nbsp;» officiellement annoncée).

Nous ne documentons pas une nouvelle technologie si&nbsp;:

- Elle ne dispose d'aucune spécification ou si la spécification est une note brute qui semble sujette à modification.
- Un ou zéro navigateur l'a implémenté et aucun autre éditeur de navigateur ne montre d'intérêt à l'implémentation. Vous pouvez estimer ceci en demandant aux personnes qui travaillent sur ces navigateurs et en recherchant parmi les listes de diffusion ou les systèmes de ticket.
- Il ne s'agit pas d'une technologie exposée sur le Web et/ou qu'elle est complètement propriétaire.
- Il existe déjà des signes de dépréciation ou de remplacement par une fonctionnalité similaire.

## Les sujets qui n'ont pas leur place sur MDN

En règle générale, tout ce qui n'est pas standardisé de façon ouverte pour le Web n'a pas sa place sur MDN. Les publicités commerciales et autres contenus hors-sujet ne seront jamais acceptés sur le site. Toute personne qui contribue en soumettant du spam à plusieurs reprises pourra être bannie à la discrétion de l'équipe MDN employée par Mozilla.

Voici différents exemples de sujets non-pertinents pour MDN&nbsp;:

- Les technologies qui ne sont pas exposées sur le Web et qui sont spécifiques à un navigateur.
- Les technologies qui ne sont pas relatives au Web.
- La documentation pour les utilisateurs finaux des sites ou des navigateurs. Ainsi, pour la documentation des produits Mozilla, [celle-ci sera sur le site de support de Mozilla](https://support.mozilla.org).
- Des liens externes d'autopromotion. Veuillez suivre [le guide stylistique](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#liens_externes) avant d'ajouter un lien externe.

### Quand retirer de la documentation

Les pages sont supprimées de MDN si elles ne contiennent plus d'informations qui sont utiles, si elles sont trop obsolètes ou si elles contiennent trop d'informations incorrectes, au point d'êtres trompeuses.

Voici quelques scénarios qui décrivent des situations où le contenu peut être supprimé&nbsp;:

- Des articles contenant des informations à propos de fonctionnalités qui n'ont pas été implémentées par l'ensemble des navigateurs et qui ont ensuite été retirées (il s'agit généralement de fonctionnalités expérimentales, comme celles avec des préfixes).
- Des pages de référence qui décrivent des fonctionnalités qui ont été retirées de la spécification correspondante avant d'être implémentées par un navigateur.
- Des articles abordant des techniques qui se sont avérées ensuite être des pratiques à éviter et qui ont été remplacées par de meilleures approches.
- Des articles contenant des informations qui ont ensuite été remplacés par d'autres articles, de meilleure qualité.
- Des articles avec du contenu inapproprié pour MDN.
- Des sections de MDN qui ne portent pas sur les technologies web ouvertes et qui sont un fardeau en termes de maintenance.

Pour plus d'informations sur _comment_ supprimer des documents, voir [le guide sur la création, le déplacement et la suppression des pages](/fr/docs/MDN/Writing_guidelines/Creating_moving_deleting).

## Types de documents autorisés sur MDN

Généralement, la documentation de MDN se range dans les catégories suivantes&nbsp;:

- Référence
- Guide
- Glossaire
- Tutoriels

MDN est une documentation _produit_ et pas une documentation _projet_ ou de _processus_. Si un document porte sur «&nbsp;comment utiliser telle chose&nbsp;» ou sur «&nbsp;comment cette chose fonctionne&nbsp;» (où la «&nbsp;chose&nbsp;» en question est rattachée à une des catégories vues avant), il peut aller sur MDN.

Si un document porte sur «&nbsp;qui travaille sur le développement de telle chose&nbsp;» ou «&nbsp;planification pour le développement de telle chose&nbsp;», il n'a pas sa place sur MDN.

Voici des exemples de documents qui _n'ont pas_ leur place sur MDN&nbsp;:

- Documents de planification
- Documents de conception
- Propositions de projets
- Spécifications ou standards
- Supports promotionnels, publicité, ou informations personnelles
