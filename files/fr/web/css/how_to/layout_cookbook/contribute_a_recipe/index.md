---
title: Contribuer à une recette
slug: Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Si vous souhaitez contribuer en ajoutant une recette à celles présentées dans cette section de MDN, nous vous expliquons ici quelles étapes suivre pour que vos exemples soient publiés.

## Qu'est-ce qu'une « bonne » recette ?

**Une bonne recette consiste en la version la plus simple possible d'un motif utile pour concevoir une page web.** Chaque ligne de CSS écrite dans la recette doit servir à illustrer le motif. Tout ce qui est purement décoratif pour l'exemple doit être exclu. L'idée est que la recette puisse servir de base à n'importe qui et de pouvoir appliquer ses propres styles sur l'exemple si besoin.

Une recette se décompose comme suit&nbsp;:

- Un exemple interactif, stocké [sur le dépôt GitHub des exemples CSS <sup>(angl.)</sup>](https://github.com/mdn/css-examples)
- Une version téléchargeable de cet exemple, également stockée sur le dépôt des exemples CSS.
- Une page MDN, rattachée à la section [Livre de recettes CSS](/fr/docs/Web/CSS/How_to/Layout_cookbook) qui contient&nbsp;:
  1. Introduction
  2. Exigences
  3. Recette
  4. Décisions
  5. Solutions de repli utiles ou méthodes alternatives (si cela est pertinent)
  6. Problèmes d'accessibilité
  7. Compatibilité des navigateurs (uniquement pour les propriétés CSS non entièrement prises en charge)
  8. Ressources supplémentaires

## Étapes pour publier une recette

Pour créer une recette et l'ajouter au Livre de recettes CSS, suivez ces étapes&nbsp;:

- [Qu'est‑ce qu'une «&nbsp;bonne&nbsp;» recette&nbsp;?](#quest-ce_quune_«_bonne_»_recette)
- [Étapes pour publier une recette](#étapes_pour_publier_une_recette)
  - [1. Construire le motif](#1._construire_le_motif)
  - [2. Créer un exemple interactif](#2._créer_un_exemple_interactif)
    - [Quelques conseils](#quelques_conseils)
  - [3. Créer une version téléchargeable](#3._créer_une_version_téléchargeable)
  - [4. Ouvrir une _pull request_ avec votre exemple](#4._ouvrir_une_pull_request_avec_votre_exemple)
  - [5. Créer votre page](#5._créer_votre_page)
- [Voir aussi](#voir_aussi)

### 1. Construire le motif

Avant de transformer votre exemple en recette, commencez par créer votre motif sous la forme d'une page HTML basique. Réfléchissez à ce que vous souhaitez démontrer et gardez l'exemple aussi simple que possible. Utilisez des mots descriptifs comme «&nbsp;conteneur&nbsp;» ou «&nbsp;élément&nbsp;» si vous ajoutez des noms de classes.

Vérifiez que l'HTML et le CSS fonctionnent dans plusieurs navigateurs, tailles de fenêtre et appareils. Assurez-vous également que les styles CSS respectent les recommandations d'accessibilité. Il est acceptable d'utiliser des propriétés CSS peu prises en charge, mais pensez à indiquer les informations de compatibilité des navigateurs sur la page, en particulier dans la section «&nbsp;Compatibilité des navigateurs&nbsp;». Dans certains cas, il peut être utile de fournir une deuxième version de votre exemple avec des solutions de repli.

### 2. Créer un exemple interactif

Les exemples interactifs présents sur les pages du Livre de recettes, comme pour [Centrer un élément](/fr/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element), permettent aux lecteur·ice·s de jouer avec le code et de modifier les parties pertinentes sans être submergé·e·s par l'ensemble du code. Votre recette sera illustrée par un ou plusieurs exemples.

Clonnez (<i lang="en">fork</i> en anglais) le [dépôt CSS Examples <sup>(angl.)</sup>](https://github.com/mdn/css-examples), puis regardez dans le dossier `css-cookbook`. Vous y trouverez un fichier [cookbook-template.html <sup>(angl.)</sup>](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Copiez ce fichier et utilisez-le comme point de départ. Enregistrez-le dans le répertoire `css-cookbook` avec un nom pertinent pour votre motif. Le modèle contient des commentaires pour vous guider dans l'ajout des différentes parties aux bons endroits.

Les éléments importants de ce modèle sont les suivants&nbsp;:

- Il y a une feuille de style pour les panneaux de l'éditeur avec quelques styles de base pour le corps de page et un fichier JavaScript pour le fonctionnement de l'éditeur. Laissez ces fichiers tels quels.

- La balise `<head>` contient deux blocs de style. Le premier bloc sert pour les éléments que les lecteur·ice·s n'ont pas besoin de modifier pour jouer avec l'exemple. Le second bloc contient les règles que les lecteur·ice·s peuvent vouloir modifier. Nous ajoutons généralement la plupart des règles CSS dans le premier bloc, puis choisissons celles à déplacer dans le second. Les règles du second bloc doivent être celles qui sont fondamentales pour le motif&nbsp;: par exemple, des règles où modifier une valeur CSS permet de voir le motif évoluer.

- Vous devez ajouter le HTML de votre composant deux fois&nbsp;: d'abord à l'intérieur de la section ayant la classe `preview`, puis à l'intérieur de la `<textarea>` avec la classe `playable-html`.

- Le CSS modifiable issu du second bloc `<head>` doit également être copié dans la section `playable-css`.

Un exemple fonctionnel est [center.html <sup>(angl.)</sup>](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), qui est intégré à la page [Centrer un élément](/fr/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element). Vous pouvez vous en inspirer pour voir comment ajouter correctement les différentes parties.

Si vous avez cloné le dépôt et ajouté nos fichiers CSS et JavaScript à votre exemple, l'ouverture de l'exemple dans un navigateur devrait afficher le résultat exactement comme sur une page MDN.

#### Quelques conseils

- N'indentez pas le CSS et le HTML à l'intérieur des zones de texte&nbsp;; alignez plutôt le code au début des lignes. Cela rendra l'affichage plus propre.
- Si des images sont nécessaires, placez-les dans le répertoire de l'exemple. Vous pouvez utiliser les images déjà présentes.
- Vous pouvez ajuster la hauteur des zones de texte en modifiant la hauteur dans les styles en ligne (<i lang="en">inline styles</i> en anglais).

### 3. Créer une version téléchargeable

Comme les exemples interactifs contiennent l'intégralité du code, nous souhaitons fournir aux lecteur·ice·s uniquement le code nécessaire pour reproduire l'exemple, en omettant les éléments superflus. Créez une copie de votre exemple interactif et ajoutez `--download` à son nom. Par exemple, la version téléchargeable de `center.html` s'appelle `center--download.html`. Ce fichier ressemblera à votre exemple initial, mais il doit être une version basique du motif sur une seule page HTML.

Il peut être utile d'inclure les règles CSS du corps de page issues de notre feuille de style fournie. Consultez [`cookbook-template--download.html` <sup>(angl.)</sup>](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) comme guide&nbsp;: ces règles sont fournies comme point de départ.

### 4. Ouvrir une _pull request_ avec votre exemple

Ouvrez une _pull request_ (PR) sur le dépôt [CSS Examples <sup>(angl.)</sup>](https://github.com/mdn/css-examples/pulls). Cela nous permet de vous aider pour d'éventuels ajustements nécessaires avant la création de votre page. De plus, l'exemple doit être en ligne pour être inclus. C'est pourquoi il est pertinent de d'abord créer le code de l'exemple, puis la page explicative. Dans votre PR, décrivez le motif et ce que vous montrez. Consultez nos [consignes pour ouvrir une pull request](/fr/docs/MDN/Community/Pull_requests#ouvrir_une_requête_de_tirage).

### 5. Créer votre page

Après la fusion de votre PR d'exemple, ouvrez une pull request pour créer une nouvelle page dans le [répertoire du Livre de recettes <sup>(angl.)</sup>](https://github.com/mdn/content/tree/main/files/en-us/web/css/how_to/layout_cookbook).
Utilisez notre [modèle pour les pages du Livre de recettes <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/en-us/web/css/how_to/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
Le modèle explique les exigences de chaque section, et vous pouvez consulter d'autres exemples de recettes pour obtenir de l'aide supplémentaire.

N'oubliez pas d'ajouter un lien vers votre nouvelle recette sur la page principale du [Livre de recettes](/fr/docs/Web/CSS/How_to/Layout_cookbook).

Si vous avez des questions ou souhaitez qu'une personne vérifie votre page, contactez-nous via l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Voir aussi

- [Page modèle d'une recette](/fr/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [Dépôt git des exemples CSS <sup>(angl.)</sup>](https://github.com/mdn/css-examples)
