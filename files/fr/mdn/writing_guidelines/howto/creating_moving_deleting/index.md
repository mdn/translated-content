---
title: Créer et modifier des pages
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 6b01400b286e8bdfa7060d56af84757dd4b8de48
---

{{MDNSidebar}}

Cet article décrit comment créer, déplacer, supprimer ou modifier une page. Dans tous ces cas, il est conseillé de consulter nos directives concernant [ce que nous écrivons](/fr/docs/MDN/Writing_guidelines/What_we_write) pour confirmer si l'une de ces actions doit être entreprise et d'en discuter avec l'équipe sur le [canal de discussion du MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salons_de_discussions) avant de procéder.

## Créer de nouvelles pages

Toutes les pages du MDN Web Docs sont rédigées au format Markdown. Le contenu est écrit dans un fichier nommé `index.md`, qui est stocké dans un répertoire unique. Le nom du répertoire représente le nom de la page. Par exemple, si `align-content` est une nouvelle propriété CSS pour laquelle vous voulez créer une nouvelle page de référence, vous devez créer un dossier dans `en-us/web/css` (ou `fr/web/css` si vous procédez à sa traduction) nommé `align-content` et créer un fichier appelé `index.md` à l'intérieur de ce dossier.

> **Note :** Le nom du répertoire diffère légèrement de l'intitulé de la page. En particulier, le slug suit la casse de la phrase.

Il existe de nombreux [types de pages](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types) avec certaines structures et des modèles de pages qui les accompagnent, que vous pouvez copier pour commencer.

Le fichier `index.md` d'un document doit commencer par des informations préliminaires qui définissent le `titre`, le `slug` et le `type de page` (ce dernier est uniquement réservé à la version anglaise). Toutes ces informations peuvent être trouvées dans les modèles de page mentionnés ci-dessus. Alternativement, vous pouvez trouver utile de vous référer à la matière première dans le fichier `index.md` d'un document similaire.

Le processus général de création d'une page, étape par étape, est le suivant&nbsp;:

1. Démarrer une nouvelle branche, actualisée, pour y travailler.

   ```bash
   cd ~/repos/mdn/translated-content
   git checkout main
   git pull translated-content main
   # Exécutez à nouveau « yarn » pour vous assurer que vous avez
   # installé la dernière dépendance de Yari.
   yarn
   git checkout -b mon-ajout
   ```

2. Créer un ou plusieurs nouveaux dossiers, chacun avec ses propres fichiers `index.md`.

3. Ajouter et livrer (<i lang="en">commit</i> en anglais) vos nouveaux fichiers et poussez votre nouvelle branche sur votre fork.

   ```bash
   git add files/fr/dossier/cree
   git commit -m "un message approprié des changements"
   git push -u origin mon-ajout
   ```

4. Créer votre requête de tirage (<i lang="en">pull request</i> en anglais).

## Déplacer des pages

Il est facile de déplacer un ou plusieurs documents ou une arborescence entière de documents, car nous avons créé une commande spéciale qui s'occupe des détails pour vous&nbsp;:

- Si la page est en anglais&nbsp;: [sur notre dépôt <i lang="en">content</i>](https://github.com/mdn/content)

  ```bash
  yarn content move <slug-de-depart> <nouveau-slug> en-US
  ```

- Si la page est en français&nbsp;: [sur notre dépôt <i lang="en">translated-content</i>](https://github.com/mdn/translated-content)

  ```bash
  yarn content move <slug-de-depart> <nouveau-slug> fr
  ```

Il vous suffit de spécifier le nom du document existant que vous souhaitez déplacer (par exemple, `Learn/Accessibility`), ainsi que le nom de son nouvel emplacement (par exemple, `Learn/A11y`), suivi éventuellement de la langue du document existant (par défaut `en-US`).

Si le document existant que vous souhaitez déplacer a des documents enfants (c'est-à-dire qu'il représente une arborescence de documents), le nom de l'arborescence peut être modifié, il représente une arborescence de documents), la commande `yarn content move` déplacera l'arbre entier.

1. Vous commencerez à travailler dans une nouvelle branche.

   ```bash
   cd ~/repos/mdn/translated-content
   git checkout main
   git pull translated-content main
   # Exécutez à nouveau « yarn » pour vous assurer que vous avez
   # installé la dernière dépendance de Yari.
   yarn
   git checkout -b mon-deplacement
   ```

2. Effectuer le déplacement (qui supprimera et modifiera les fichiers existants et en créera de nouveaux).

   ```bash
   yarn content move Learn/Accessibility Learn/A11y fr
   ```

3. Ajouter et livrer (<i lang="en">commit</i> en anglais) tous les fichiers supprimés, créés et modifiés, et poussez votre branche vers votre fork.

   ```bash
   git commit -a
   git push -u origin mon-deplacement
   ```

4. Créer votre requête de tirage (<i lang="en">pull request</i> en anglais).

> **Note :** `yarn content move` ajoute automatiquement les informations de redirection nécessaires au fichier `_redirects.txt` afin que l'ancien emplacement soit redirigé vers le nouveau. N'éditez pas le fichier `_redirects.txt` manuellement&nbsp;! Des erreurs peuvent facilement se glisser si vous le faites. Si vous avez besoin d'ajouter une redirection sans déplacer un fichier, parlez-en à l'équipe sur le [salon de discussion du MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salons_de_discussions).

## Supprimer des pages

Les documents ne doivent être retirés du MDN Web Docs que dans des circonstances particulières. Si vous envisagez de supprimer des pages, veuillez en discuter avec l'équipe sur la page [salon de discussion du MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salons_de_discussions) en premier.

La suppression d'un ou plusieurs documents ou d'une arborescence entière de documents est facile, tout comme le déplacement de pages, car nous avons créé une commande spéciale qui s'occupe des détails pour vous&nbsp;:

```bash
yarn content delete <lien-du-document> [langue]
```

> **Note :** Vous devez utiliser la commande `yarn content delete` pour supprimer les pages du MDN Web Docs. Ne vous contentez pas de supprimer leurs répertoires du référentiel. La commande `yarn content delete` gère également d'autres changements nécessaires comme la mise à jour du fichier `_wikihistory.json`.

Vous devez simplement spécifier le nom du document existant que vous souhaitez supprimer (par exemple, `Learn/Accessibility`), suivi éventuellement de la langue du document existant (par défaut `en-US`).

Si le document existant que vous souhaitez supprimer a des documents enfants (c'est-à-dire qu'il représente une arborescence de documents), vous devez également spécifier l'option `-r, --recursive`, sinon la commande échouera.

Par exemple, si vous souhaitez supprimer l'intégralité de l'arbre `/fr/Learn/Accessibility`, vous devez effectuer les étapes suivantes&nbsp;:

1. Commencez à travailler dans une nouvelle branche.

   ```bash
   cd ~/repos/mdn/translated-content
   git checkout main
   git pull translated-content main
   # Exécutez à nouveau « yarn » pour vous assurer que vous avez
   # installé la dernière dépendance de Yari.
   yarn
   git checkout -b ma-suppression
   ```

2. Supprimer le document (qui supprimera l'arborescence entière).

   ```bash
   yarn content delete Learn/Accessibility fr --recursive
   ```

3. Ajouter une redirection. La page cible peut être une URL externe ou une autre page sur le MDN Web Docs.

   ```bash
   yarn content add-redirect /fr/chemin/de/la/page/supprimee /fr/chemin/de/la/page/cible
   ```

4. Ajouter et livrer (<i lang="en">commit</i> en anglais) tous les fichiers supprimés, créés et modifiés, et poussez votre branche vers votre fork.

   ```bash
   git commit -a
   git push -u origin ma-suppression
   ```

5. Créer votre requête de tirage (<i lang="en">pull request</i> en anglais).

> **Note :** Si le nom de la page que vous souhaitez supprimer contient des caractères spéciaux, mettez-le entre guillemets, comme suit&nbsp;:
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

La suppression du contenu des documents Web MDN entraînera inévitablement la mise à jour du contenu existant. Comme de nombreux articles renvoient à d'autres, le contenu supprimé sera probablement référencé ailleurs. L'ajout de la redirection atténuera l'impact de la suppression du contenu&nbsp;; cependant, la meilleure pratique consiste à modifier le contenu pour refléter le changement et à inclure les modifications du contenu avec la demande de suppression.

## Modifier des pages existantes

Pour modifier une page, vous devez trouver la source de la page dans nos dépôts [content](https://github.com/mdn/content) (fichiers anglais) et [translated-content](https://github.com/mdn/translated-content) (fichiers traduits). La façon la plus simple de la trouver est de naviguer jusqu'à la page que vous voulez éditer, d'aller en bas de la page et de cliquer sur le lien «&nbsp;<i lang="en">View the source on GitHub</i>&nbsp;» (Voir la source sur GitHub pour son équivalent Français).

### Prévisualiser les modifications

- **Si vous éditez la version anglaise**
  - : Si vous éditez la page localement, pour voir à quoi ressemblent vos changements, vous pouvez aller dans le dossier `content` du dépôt, exécuter la commande CLI `yarn start`, aller à `localhost:5042` dans votre navigateur, et naviguer jusqu'à la page et la voir.
- **Si vous éditez une version traduite**
  - : Pour éditer la page localement et voir à quoi ressemblent vos modifications, il vous faut aller dans le dossier `yari` (Vous devez préalablement avoir paramétré votre environnement et avoir au même niveau que `yari` les dossiers `content` et `translated-content`), exécuter la commande CLI `yarn start`, aller à `localhost:5042` dans votre navigateur, et naviguer jusqu'à la page et la voir.

Entrez le titre dans la barre de recherche pour la trouver facilement. La page prévisualisée se mettra à jour dans le navigateur au fur et à mesure que vous modifierez la source.

### Joindre des fichiers

Pour joindre un fichier à votre article, il vous suffit de l'inclure dans le même répertoire que le fichier `index.md` de l'article. Incluez le fichier dans votre page, généralement via un élément [`<a>`](/fr/docs/Web/HTML/Element/a). Pour la traduction française, il est recommendé de ne le faire que si le fichier est traduit (exemple pour les images).
