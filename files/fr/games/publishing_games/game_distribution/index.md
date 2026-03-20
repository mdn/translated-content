---
title: Distribution de jeux
slug: Games/Publishing_games/Game_distribution
l10n:
  sourceCommit: f8939dd06d7b120f77c4b4c70cac591d0eb20beb
---

Vous avez suivi un [tutoriel](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) ou [deux](/fr/docs/Games/Tutorials/2D_breakout_game_Phaser) et créé un jeu en HTML — c'est génial&nbsp;! Cet article couvre tout ce que vous avez besoin de savoir sur la façon de distribuer votre nouveau jeu dans la nature. Que vous l'hébergiez en ligne vous-même, que vous le proposiez sur des plateformes ouvertes, ou encore que vous le mettiez à disposition sur des plateformes privées comme Google Play ou l'App Store iOS d'Apple.

## Avantages du HTML par rapport à du natif

Choisir du HTML pour développer des jeux vous offre un certain nombre d'avantages&nbsp;:

### Les joies du multi-plateformes

La technologie HTML en elle-même est multi-plateformes, donc vous pouvez écrire votre code une seule fois et viser plusieurs types d'appareils. Qu'il s'agisse de smartphone ou de tablettes bas de gamme, de PC portables ou de bureau, de smart TV, de montres, ou même d'un frigo si celui-ci supporte des navigateurs suffisamment récents!

Vous n'avez pas besoin d'équipes dédiées pour travailler sur un même titre et visant différentes plateformes, et vous n'avez qu'un seul code source à gérer. Vous pouvez dédier plus de temps et d'argent à la [promotion](/fr/docs/Games/Publishing_games/Game_promotion) et à la [monétisation](/fr/docs/Games/Publishing_games/Game_monetization) de votre jeu.

### Des mises à jour immédiates

Pas besoin d'attendre plusieurs jours pour mettre à jour le code source de votre jeu! Si un joueur trouve un bug, vous pouvez rapidement le corriger, mettre à jour le système et actualiser le jeu sur votre serveur pour offrir à vos joueurs une version mise à jour quasi instantanément.

### Distribution par lien direct et jeu instantané

Avec les jeux HTML, vous n'avez pas besoin de dire aux gens de chercher votre jeu sur un magasin d'applications. Vous pouvez simplement leur envoyer un lien direct pour accéder au jeu, et ils peuvent cliquer pour jouer sans attendre, sans qu'il soit nécessaire d'utiliser des plugins tiers, ou de télécharger et d'installer de gros packages. Gardez toutefois à l'esprit que le chargement de votre jeu peut prendre un peu de temps, en fonction de sa taille ou de la vitesse de votre connexion Internet. Dans tous les cas, il est beaucoup plus facile de faire la promotion de votre jeu si vous pouvez amener du trafic directement là où vous le souhaitez, sans avoir à passer toute une série d'obstacles avant de pouvoir jouer.

## Ordinateur contre mobile

La majeure partie du trafic qui nous intéresse (des personnes jouant à des jeux en HTML) arrive par le biais d'appareils mobiles, il va donc falloir se concentrer dessus si l'on souhaite vraiment réussir. Les appareils mobiles sont des plateformes idéales pour faire briller la technologie HTML et profiter de ses avantages. Pas de Flash, et le HTML est totalement multi-plateformes.

Chercher à concurrencer les jeux pour ordinateur en direct est très difficile. Vous pouvez certes proposer votre jeu en HTML dans la même arène (voir la section [Les boutiques de jeux pour ordinateur](#les_boutiques_de_jeux_pour_ordinateur) plus bas), et vous devriez d'ailleurs, car c'est une bonne chose que d'apporter de la diversité dans les plateformes que vous appréciez, mais souvenez-vous que les développeur·euse·s qui créent des jeux pour ordinateur ont des années d'expérience derrière eux, de supers outils et des canaux de distribution stables. Beaucoup de jeux HTML viseront des segments de marché différents de ceux des jeux natifs pour ordinateur, par exemple des jeux simples pour passer le temps à jouer en déplacement plutôt que de grandes expériences immersives. Ces jeux sont souvent conçus pour être joués avec deux doigts, voire un seul, afin que vous puissiez tenir l'appareil, jouer et utiliser la seconde main pour tout ce dont vous avez besoin.

Ceci étant dit, les plateformes pour ordinateurs peuvent être utilisées très simplement pour distribuer vos jeux, grâce à des enveloppes, des fonctionnalités qui vous aident préparer des builds natifs de votre jeu (voir le paragraphe sur les [packs de jeux](#des_packs_de_jeux)). C'est également appréciable de prévoir des commandes pour ordinateurs dans vos jeux, même si vous visez principalement les mobiles. Les joueurs apprécient vos jeux sur n'importe quelle plateforme disponible, et les postes fixes en font partie. En outre, il est généralement plus facile de construire et de tester un jeu sur ordinateur d'abord, avant de se lancer dans le débogage de la version mobile.

## Publier le jeu

Il y a trois grandes possibilités à considérer lorsqu'on souhaite publier un jeu&nbsp;:

- Auto-hébergement
- Éditeurs
- Magasins

Rappelez-vous que le nom de votre jeu doit être suffisamment distinctif pour être rapidement [promu](/fr/docs/Games/Publishing_games/Game_promotion) à l'avenir, mais également suffisamment accrocheur pour que les gens s'en rappellent.

### Auto-hébergement

En tant que développeur·euse front-end, vous savez sans doute déjà quoi faire. Un jeu en HTML est simplement un autre site. Vous pouvez l'uploader sur un serveur distant, récupérer un nom de domaine accrocheur, et l'héberger vous-même.

Si vous voulez gagner un peu d'argent avec le développement de jeux, prenez soin de sécuriser votre code source d'une façon ou d'une autre afin d'éviter que d'autres personnes ne vous le piquent et ne le vendent comme si c'était le leur. Vous pouvez par exemple concaténer et le réduire pour le rendre plus petit, ou encore le rendre beaucoup plus moche afin qu'il soit beaucoup plus difficile de déconstruire votre jeu. Une autre bonne mesure à prendre est de mettre à disposition une démo en ligne si vous prévoyez de le packager et de le vendre sur une boutique fermée du type iTunes ou Steam.

Si vous travaillez sur un projet annexe juste pour le plaisir, garder le code source ouvert bénéficiera à celles et ceux qui voudraient apprendre à partir de vos créations. Dans ce cas vous n'avez même pas besoin de vous soucier de trouver un fournisseur d'hébergement, puisqu'il est possible [d'héberger vos jeux sur GitHub Pages <sup>(angl.)</sup>](https://end3r.com/blog/host-your-html5-games-on-github-pages). Vous bénéficiez d'un hébergement gratuit, d'un contrôle de versions et de contributeurs potentiels si votre projet est suffisamment intéressant.

### Éditeurs et portails

Comme leur nom le suggère, les éditeurs peuvent gérer la publication de votre jeu pour vous. Que vous choisissiez cette option ou non dépend de vos attentes en matière de distribution de votre jeu : souhaitez-vous l'envoyer partout où c'est possible, ou préférez-vous limiter sa présence à ceux qui auront acheté une [licence exclusive](/fr/docs/Games/Publishing_games/Game_monetization)&nbsp;? À vous de voir. Étudiez plusieurs options, expérimentez chacune et tirez-en vos propres conclusions. Les éditeurs vous seront expliqués plus en détail dans notre article dédié à la [monétisation](/fr/docs/Games/Publishing_games/Game_monetization).

Il existe également des portails indépendants qui rassemblent des jeux intéressants, citons par exemple [HTML5Games.com <sup>(angl.)</sup>](https://html5games.com/), [GameArter.com <sup>(angl.)</sup>](https://www.gamearter.com/), [MarketJS.com <sup>(angl.)</sup>](https://www.marketjs.com/), [GameFlare <sup>(angl.)</sup>](https://distribution.gameflare.com/), [GameDistribution.com <sup>(angl.)</sup>](https://gamedistribution.com/), [GameSaturn.com <sup>(angl.)</sup>](https://gamesaturn.com/), [Playmox.com <sup>(angl.)</sup>](https://www.playmox.com/), [Poki <sup>(angl.)</sup>](https://developers.poki.com/), ou [CrazyGames <sup>(angl.)</sup>](https://developer.crazygames.com/). Vous pouvez y publier votre jeu et il recevra naturellement de la visibilité grâce au trafic conséquent que ces sites génèrent. Certains d'entre eux prennent vos fichiers et les hébergent sur leur serveur, tandis que d'autres renverront simplement un lien vers votre site web ou intègreront votre jeu sur leur site. Une telle exposition peuvent apporter uniquement de la [visibilité](/fr/docs/Games/Publishing_games/Game_promotion) à votre jeu, ou, si vous avez des publicités à côté de votre jeu (ou toute autre méthode de monétisation) cela peut également vous procurer des revenus.

### Le Web et les magasins d'applications natifs

Vous pouvez aussi uploader et publier votre jeu directement sur différentes boutiques, ou marketplaces (places de marché). Pour cela vous devrez au préalable préparer et empaqueter votre jeu dans un format de construction spécifique à chaque écosystème d'application que vous visez. Voir à ce sujet la section [Marketplaces — Plateformes de distribution](#marketplaces_—_plateformes_de_distribution) pour obtenir plus de détails sur les différents types de marketplace disponibles.

## Marketplaces — Plateformes de distribution

Voyons quelles options sont à notre disposition en matière de marketplaces/magasins d'applications disponibles pour chaque plateforme et système d'exploitation.

> [!NOTE]
> Ces plateformes de distribution sont les plus populaires, mais cela ne signifie pas qu'elles sont les seules. Plutôt que d'essayer d'ajouter votre jeu à des milliers d'autres dans l'app store iOS par exemple, vous pouvez également tenter de trouver une niche et faire la promotion de votre jeu directement auprès d'une audience qui sera intéressée par vos jeux. Il est essentiel de faire preuve de créativité ici.

### Boutiques en ligne

Les meilleures plateformes de jeux HTML sont des boutiques Web. Il est facile de préparer un jeu pour ces plateformes, puisque cela ne demande que très peu voire aucune modification au jeu lui-même : il suffit en général d'ajouter une simple notice explicative ("manifeste") avec toutes les informations nécessaires dans un dossier zip contenant l'ensemble des ressources.

- [Le magasin d'applications Chrome <sup>(angl.)</sup>](https://chrome.google.com/webstore/) représente également une option intéressante — une notice explicative, votre jeu dans un dossier zip et un formulaire de soumission à remplir en ligne, c'est tout ce dont vous avez besoin pour mettre votre jeu à disposition.

### Les App Store natifs

Quand on s'intéresse aux supports mobiles, on retrouve l'App Store d'Apple pour iOS, Google Play pour Android, et tous leurs concurrents. Les App Store natifs comptent déjà des développeur·euse·s bien établis vendant de très bons jeux, il faudra donc avoir du talent et de la chance pour vous faire remarquer.

- Il est relativement difficile d'intégrer l'App Store iOS, en raison des exigences assez strictes que doivent respecter les jeux; vous devrez en outre attendre une semaine ou deux avant d'être acceptés. Par ailleurs, comme il s'agit du magasin d'applications mobiles le plus en vu, avec des centaines de milliers d'applications disponibles, il sera extrêmement difficile de vous distinguer de la masse.
- Les exigences de Google Play étant moins strictes, la boutique est polluée par des jeux de mauvaise qualité. Il reste difficile de se faire remarquer puisque le nombre d'applications soumises chaque jour est énorme. C'est encore plus difficile de gagner de l'argent sur cette plateforme : la plupart des jeux payants sur iOS sont publiés gratuitement sur Android, les revenus monétaires provenant alors d'achats in-app au sein de l'application même (In-app purchases, IAPs) ou de publicités.
- D'autres boutiques natives pour les mobiles comme Windows Phone ou Blackberry travaillent dur pour récupérer une part du gâteau, mais sont loin derrière leurs concurrents. Ce peut être une bonne option de publier votre jeu sur ces boutiques, puisqu'il sera alors bien plus facile de vous faire remarquer.

Si vous souhaitez obtenir plus d'informations sur les différents types de boutiques d'applications, vous pouvez jeter un oeil à la [liste des plateformes de distribution de logiciels mobiles <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/List_of_mobile_software_distribution_platforms) sur Wikipédia.

### Les boutiques de jeux pour ordinateur

Afin d'élargir votre audience, vous pouvez également viser l'écosystème des jeux pour ordinateur avec vos jeux en HTML - gardez toutefois à l'esprit tous les jeux de catégorie AAA qui captent la majeure partie du marché, et demandez vous bien si cela correspond à votre stratégie ou non. Pour faire les choses proprement sur ordinateur, vous devez apporter un support aux trois systèmes d'exploitation: Windows, Mac OS et Linux. La plus grosse plateforme en ligne de distribution de jeux est de loin [Steam](https://steamcommunity.com/) — les développeur·euse·s indépendant·e·s peuvent intégrer Steam via le programme [Steam Direct <sup>(angl.)</sup>](https://partner.steamgames.com/steamdirect). Rappelez-vous que vous devrez gérer les problématiques multi-plateformes vous-même en uploadant des versions différentes pour chaque plateforme.

Au-delà de Steam, il existe des initiatives qui font beaucoup parler d'elles, comme [Humble Bundle](https://www.humblebundle.com/), où les jeux indépendants les plus populaires sont présentés à une audience plus large. Mais voyez-le plutôt comme une excellente opportunité de se faire connaître que de gagner beaucoup d'argent, car le prix que l'on paie pour des jeux dans un lot est généralement assez faible.

## Des packs de jeux

Le web est le premier et le meilleur choix pour les jeux HTML, mais si vous souhaitez toucher un public plus large et distribuer votre jeu dans un écosystème fermé, vous pouvez toujours le faire en le packagant. L'avantage, c'est que vous n'avez pas besoin de plusieurs équipes distinctes travaillant sur le même jeu pour différentes plateformes — vous pouvez le créer une fois et utiliser des outils pour le packager pour les boutiques natives. Les packages obtenus sont généralement assez fiables, mais vous devriez tout de même les tester et être à l'affût de petits problèmes ou bogues à corriger.

### Outils disponibles

Il existe toute une variété d'outils, à choisir en fonction de vos compétences, de vos frameworks favoris ou des plateformes que vous visez. Tout l'enjeu consiste à choisir le meilleur outil pour réaliser la tâche que vous souhaitez réaliser.

- [Ejecta <sup>(angl.)</sup>](https://impactjs.com/ejecta) — un outil conçu spécifiquement pour packager les jeux créés avec le framework [ImpactJS <sup>(angl.)</sup>](https://impactjs.com/) pour iOS, par ailleurs développé par le créateur d'ImpactJS. L'outil propose une intégration fluide avec ImpactJS, mais ne supporte qu'un framework et app store.
- [NW.js <sup>(angl.)</sup>](https://nwjs.io/) — anciennement connu sous le nom de Node-Webkit, c'est la solution à privilégier lorsqu'on souhaite construire des jeux d'ordinateur qui fonctionnent sur Windows, Mac et Linux. Les distributions sont packagés grâce au moteur WebKit afin d'offrir un rendu sur n'importe quelle plateforme.

Parmi les autres outils existants, on peut citer :

- [Intel XDK <sup>(angl.)</sup>](https://www.intel.com/content/www/us/en/developer/tools/overview.html) — une alternative très intéressante, similaire à CocoonIO.
- [Electron <sup>(angl.)</sup>](https://www.electronjs.org/) — connu sous Atom Shell — est un outil open-source et multi-plateformes de GitHub.
- [Manifold.js <sup>(angl.)</sup>](https://manifoldjs.com/) — cet outil de l'équipe Microsoft peut créer des distributions natives de jeux HTML depuis iOS, Android et Windows.

## Résumé

La distribution permet d'offrir au monde entier un accès à votre jeu. Il existe de nombreuses possibilités et il n'existe pas de meilleure réponse, tout dépend de vos objectifs. Une fois que vous avez publié votre jeu, il est temps de se concentrer sur sa [promotion](/fr/docs/Games/Publishing_games/Game_promotion) — il est temps que les gens sachent que votre jeu existe! Si vous n'en faites pas la promotion, ils ne sauront même pas que votre jeu existe, et pourront encore moins y jouer.
