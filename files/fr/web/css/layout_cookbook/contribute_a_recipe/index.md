---
title: Contribuer à une recette
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
tags:
  - CSS
  - Guide
  - MDN
  - Meta
translation_of: Web/CSS/Layout_cookbook/Contribute_a_recipe
original_slug: Web/CSS/Layout_cookbook/Contribuer_à_une_recette
---
{{CSSRef}}

Si vous souhaitez contribuer en ajoutant une recette à celles présentées dans cette section de MDN, nous vous expliquons ici quelles étapes suivre pour que vos exemples soient publiés.

## Qu'est-ce qu'une « bonne » recette ?

**Une bonne recette consiste en la version la plus simple possible d'un motif utile pour concevoir une page web.** Chaque ligne de CSS écrite dans la recette doit servir à illustrer le motif. Tout ce qui est purement décoratif pour l'exemple doit être exclus. L'idée est que la recette puisse servir de base à n'importe qui et de pouvoir appliquer ses propres styles sur l'exemple si besoin.

> **Note :** Quant à la traduction et aux recettes en anglais, une recette (l'exemple interactif, la version téléchargeable et la page MDN) doit d'abord être créée en anglais avant de pouvoir être mise à disposition en français. La suite de ce guide explique en français ce qu'il faut réaliser mais la majeure partie du contenu produit devra être en anglais.

## Les étapes pour la publication

Une recette se décompose comme suit :

1.  Un exemple interactif, stocké [sur le dépôt GitHub des exemples CSS](https://github.com/mdn/css-examples)
2.  Une version téléchargeable de cet exemple, également stockée sur le dépôt des exemples CSS.
3.  Une page MDN, rattachée à la section [Livre de recettes CSS](/fr/docs/Web/CSS/Layout_cookbook) qui contient :

    1.  Les spécifications sommaires
    2.  La recette
    3.  Les choix effectués
    4.  Les éventuelles méthodes alternatives (utiles pour l'amélioration progressive)
    5.  Les points relatifs à l'accessibilité
    6.  La compatibilité des navigateurs
    7.  D'éventuelles ressources additionnelles

### 1. Construire le motif

Avant de passer de l'exemple à la recette, commencez par écrire votre motif sous la forme d'une simple page HTML. Pensez à ce que vous voulez démontrer/illustrer et visez un résultat aussi simple que possible. Évitez d'utiliser des conventions CSS spécifiques qui ne seraient pas nécessairement connues et qui pourraient complexifier inutilement l'exemple.

Assurez-vous que le code HTML et CSS soit valide et testez le dans différents navigateurs. Vous pouvez tout à fait utiliser des propriétés CSS qui ne sont pas prises en charge par l'ensemble des navigateurs. Vous pourrez inclure les informations de compatibilité dans la page dédiée. Dans certains cas, il pourra être utile de fournir une deuxième version de l'exemple qui illustre des techniques qui permettent de prendre en charge des navigateurs plus anciens.

### 2. Créer un exemple interactif

Les exemples interactifs que vous voyez sur ces recettes et dans d'autres articles MDN permettent aux visiteurs de modifier le code et d'en voir le résultat sans être submergé⋅e de code superflu. Votre recette pourra utiliser un ou plusieurs exemples interactifs.

Créez un _fork_ du [dépôt des exemples CSS](https://github.com/mdn/css-examples) puis étudiez le dossier `css-cookbook`. Ce dernier contient un fichier [cookbook-template.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template.html) dont vous pouvez repartir pour réaliser votre exemple. Enregistrez le nouveau fichier dans le répertoire `css-cookbook` avec un nom pertinent. Le modèle de base est commenté afin de vous aider à situer les différentes parties.

Voici les quelques éléments importants.

Il y a une feuille de style pour les panneaux des éditeurs, quelques règles pour la mise en forme de base et un fichier JavaScript qui contient les fonctionnalités de l'éditeur. Ces fichiers doivent être laissés tels quels.

Dans l'en-tête, il y a deux blocs pour le style. Le premier concerne les éléments que le visiteur n'a pas besoin de voir ou de changer pour modifier l'exemple. Le second correspond à ce qui pourra être modifié dans l'exemple. Généralement, on ajoute l'ensemble du CSS provenant de l'exemple dans le premier bloc puis on choisit les règles qu'on souhaite reproduire dans le deuxième bloc. Les règles du deuxième bloc doivent être celles qui illustrent l'essence de l'exemple et qu'un utilisateur pourra modifier afin d'en voir l'effet sur le motif.

Le HTML du composant doit être ajouté deux fois. Pour commencer dans la section avec la classe `preview` puis dans l'élément `textarea` `playable-html`.

Le CSS éditable (celui du second bloc de l'en-tête) doit également être recopié dans la section  `playable-css`.

Pour voir un exemple existant et comprendre les différentes parties, vous pouvez consulter [center.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/center.html) qui est utilisé sur la page [Comment centrer un élément](/fr/docs/Web/CSS/Layout_cookbook/Center_an_element).

Si vous avez créé un _fork_ du dépôt et que vous avez les fichiers CSS et JavaScript avec votre exemple, vous pouvez ouvrir la page dans un navigateur et l'ensemble devrait fonctionner de la même manière que lorsqu'il sera inclus dans une page.

#### Quelques conseils

1.  N'indentez pas le code CSS et HTML à l'intérieur des `textarea` par rapport à l'ensemble du document HTML mais reprenez l'indentation depuis la première colonne (voir [center.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/center.html) par exemple).
2.  Si vous avez besoins d'images, placez les dans le dossier avec les exemples. Vous pouvez également utiliser une des images déjà présente.
3.  Vous pouvez ajuster la hauteur des `textarea` en modifiant la hauteur dans les styles _inline_/en incise.

### 3. Créer une version téléchargeable

L'exemple intégré à la page contient tout le code mais seule la partie nécessaire est affichée. Faites une copie du fichier en ajoutant `--download` au nom. Ainsi, `center.html` possède une version téléchargeable intitulée `center--download.html`. Ce fichier devra ressembler à l'exemple initial et contenir une version basique du motif, sur une seule page HTML. Il peut être utile d'inclure les règles CSS applliquées à `body` et qui sont dans la feuille de style intégrée. Vous pouvez consulter [cookbook-template--download.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template--download.html) comme exemple et point de départ.

### 4. Réaliser une _pull request_ avec votre exemple

Ouvrez une _pull request_ depuis votre _fork_ vers le [dépôt des exemples CSS](https://github.com/mdn/css-examples). Nous pourrons ainsi vous aider à apporter les modifications nécessaires pour la créations de la page. De plus, l'exemple devra être fusionné afin de pouvoir être affiché sur une page. Dans la _pull request_, veuillez écrire une présentation de cette recette et des concepts que vous illustrez.

### 5. Créer la page sur MDN

Une fois l'exemple fusionné, vous pouvez créer l'article correspondant sur MDN. Pour cela, vous aurez besoin d'un compte et [des permissions pour la création de page](/en-US/docs/MDN/Contribute/Howto/Create_and_edit_pages#Getting_page_creation_permissions). Vous pourrez alors créer une page comme sous-page de la section. [Cette page modèle pourra vous servir de point de départ pour votre contenu](/en-US/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template).

Le modèle explique le contenu de chaque section. Vous pouvez également consulter les recettes existantes comme références. Si vous cliquez sur le bouton d'édition en haut de page, vous pourrez ainsi accéder au contenu « brut » de la page et voir comment les macros sont utilisées afin d'intégrer les données de compatibilité ou les exemples interactifs.

> **Note :** Si vous souhaitez effectuer la traduction d'une recette existante, vous pouvez consulter [la page modèle en français](/fr/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template).

Si vous avez besoin d'une aide générale sur l'utilisation de MDN, vous pouvez consulter les pages d'aide.

Si vous avez des questions ou que vous souhaitez que quelqu'un vérifie votre page, n'hésitez pas à demander sur [le forum Discourse de MDN](https://discourse.mozilla.org/c/mdn) ou à venir [discuter sur IRC](/fr/docs/MDN/Rejoindre_la_communauté/Conversations#Chat_sur_IRC) (ces deux canaux sont principalement anglophones).

## Voir aussi

- [Page modèle d'une recette](/fr/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [Dépôt git des exemples CSS](https://github.com/mdn/css-examples)
