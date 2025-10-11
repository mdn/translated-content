---
title: Créer et modifier des pages
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 6b01400b286e8bdfa7060d56af84757dd4b8de48
---

{{MDNSidebar}}

Cet article décrit comment créer, déplacer, supprimer ou modifier une page. Dans tous ces cas, il est conseillé de consulter nos directives concernant [ce que nous écrivons](/fr/docs/MDN/Writing_guidelines/What_we_write) pour confirmer si l'une de ces actions doit être entreprise et d'en discuter avec l'équipe sur le [canal de discussion du MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salons_de_discussions) avant de procéder.

## Créer de nouvelles pages

Toutes les pages du MDN Web Docs sont rédigées au format Markdown. Le contenu est écrit dans un fichier nommé `index.md`, qui est stocké dans un répertoire unique. Le nom du répertoire représente le nom de la page.

C'est le contenu anglais (du dépôt `mdn/content`) qui est la référence du contenu disponible en français. Si vous souhaitez créer une page qui n'existe pas (ni en anglais ni en français), il vous faudra d'abord créer la page en anglais. N'hésitez pas à [consulter la documentation à ce sujet](#creating_pages).

Si vous souhaitez créer une traduction d'une page qui existe en anglais, mais pas en français, vous devez créer un répertoire correspondant dans votre arborescence de `mdn/translated-content`. Par exemple, si vous souhaitez traduire la page documentant la propriété CSS `align-content`&nbsp;:

1. Dans votre copie locale de `mdn/translated-content`, créez un répertoire `align-content` sous `./files/fr/web/css`
2. Dans votre copie locale de `mdn/content`, copiez le fichier `./files/en-us/web/css/align-content/index.md`
3. Collez ce fichier dans `./files/fr/web/css/align-content`.

> [!NOTE]
> Le nom du répertoire diffère légèrement de l'intitulé de la page. En particulier, le <i lang="en">slug</i> suit la casse de la phrase, alors que le chemin sur le système de fichiers est exclusivement en minuscules.

Le fichier `index.md` d'un document doit commencer par des informations préliminaires qui définissent le `titre`, le `slug` (les autres métadonnées comme `page-type` sont réservées à la version anglaise).

Le processus général de création d'une page, étape par étape, est le suivant&nbsp;:

1. Démarrez une nouvelle branche, actualisée, pour y travailler.

   ```bash
   cd ~/repos/mdn/translated-content
   git checkout main
   git pull translated-content main
   # Exécutez à nouveau « yarn » pour vous assurer que vous avez
   # installé la dernière dépendance de Yari.
   yarn
   git checkout -b mon-ajout
   ```

2. Créez un ou plusieurs nouveaux dossiers, chacun avec ses propres fichiers `index.md`.

3. Ajoutez et livrez (<i lang="en">commit</i> en anglais) vos nouveaux fichiers et poussez votre nouvelle branche sur votre <i lang="en">fork</i>.

   ```bash
   git add files/fr/dossier/cree
   git commit -m "un message approprié des changements"
   git push -u origin mon-ajout
   ```

4. Créez votre requête de tirage (<i lang="en">pull request</i> en anglais) sur `mdn/translated-content`.

## Déplacer et supprimer des pages

Le contenu francophone suit la structure du contenu anglophone (situé sur `mdn/content`). Aussi, si vous souhaitez déplacer ou supprimer des pages, il faudra le faire sur la version anglophone en premier lieu. Nous vous invitons donc à lire [la documentation associée](#moving_pages).

Une fois ces modifications apportées sur la version anglaise, un processus automatique déclenchera des <i lang="en">pull requests</i> pour que l'équivalent soit appliqué sur les différentes locales dont le français.

## Modifier des pages existantes

Pour modifier une page, vous devez trouver la source de la page dans nos dépôts [`mdn/content`](https://github.com/mdn/content) (fichiers anglais) et [`mdn/translated-content`](https://github.com/mdn/translated-content) (fichiers traduits). La façon la plus simple de la trouver est d'utiliser votre navigateur pour accéder à la page que vous voulez éditer, d'aller en bas de la page et de cliquer sur le lien «&nbsp;<i lang="en">View the source on GitHub</i>&nbsp;» (Voir la source sur GitHub pour son équivalent Français).

### Prévisualiser les modifications

- **Si vous éditez la version anglaise**
  - : Si vous éditez la page localement, pour voir à quoi ressemblent vos changements, vous pouvez aller dans le dossier `content` du dépôt, exécuter la commande CLI `yarn start`, aller à `localhost:5042` dans votre navigateur, et naviguer jusqu'à la page et la voir.
- **Si vous éditez une version traduite**
  - : Pour éditer la page localement et voir à quoi ressemblent vos modifications, il vous faut aller dans le dossier `yari` (Vous devez préalablement avoir paramétré votre environnement et avoir au même niveau que `yari` les dossiers `content` et `translated-content`), exécuter la commande CLI `yarn start`, aller à `localhost:5042` dans votre navigateur, et naviguer jusqu'à la page et la voir.

Entrez le titre dans la barre de recherche pour la trouver facilement. La page prévisualisée se mettra à jour dans le navigateur au fur et à mesure que vous modifierez la source.

### Joindre des fichiers

Pour joindre un fichier à votre article, il vous suffit de l'inclure dans le même répertoire que le fichier `index.md` de l'article. Incluez le fichier dans votre page, généralement via un élément [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a). Pour la traduction française, il est uniquement nécessaire de le faire si le fichier doit être traduit (exemple pour les images)&nbsp;; les fichiers qui n'ont pas à être traduits sont automatiquement récupérés depuis le dépôt anglais.
