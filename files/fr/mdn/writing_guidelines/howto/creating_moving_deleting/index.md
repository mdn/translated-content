---
title: Comment créer, modifier, déplacer ou supprimer des pages
short-title: Créer, modifier, déplacer ou supprimer des pages
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Cet article décrit comment créer, déplacer, supprimer ou modifier une page.
Dans tous ces cas, il est conseillé de consulter nos directives concernant [ce que nous écrivons](/fr/docs/MDN/Writing_guidelines/What_we_write) pour confirmer si l'une de ces actions doit être entreprise et d'en discuter avec l'équipe sur le [canal de discussion du MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salles_de_discussion) avant de procéder.

> [!NOTE]
> La documentation de nouvelles pages, la suppression de pages, le déplacement de pages doit d'abord avoir lieu en anglais avant de pouvoir traduire le nouveau contenu en français. L'organisation du contenu de MDN ne permet pas de créer du contenu en français si celui-ci n'existe pas déjà en anglais.

## Créer de nouvelles pages

Toutes les pages de MDN Web Docs sont rédigées au format Markdown. Le contenu est écrit dans un fichier nommé `index.md`, qui est stocké dans son propre répertoire unique. Le nom du répertoire représente le nom de la page. Par exemple, si `align-content` est une nouvelle propriété CSS pour laquelle vous souhaitez créer une nouvelle page de référence, vous créez un dossier dans `en-us/web/css` nommé `align-content` et créez un fichier (_écrit en anglais_) appelé `index.md` à l'intérieur.

> [!NOTE]
> Le nom du répertoire diffère légèrement de l'identifiant d'URL de la page. En particulier, l'identifiant d'URL suit la casse de la phrase.

Il existe de nombreux [types de pages](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types) avec des structures spécifiques et des modèles de page associés, que vous pouvez copier pour commencer.

Le fichier `index.md` d'un document doit commencer par des informations préliminaires qui définissent le `title`, le `slug` et le `page-type`. Toutes ces informations de préambule se trouvent dans les modèles de page mentionnés ci-dessus. Vous pouvez également consulter le préambule d'un fichier `index.md` d'un document similaire.

Le processus général de création d'une page, étape par étape, est le suivant&nbsp;:

1. Démarrez une nouvelle branche, actualisée, pour y travailler.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Exécutez "npm install" pour vous assurer que les dépendances sont à jour.
   npm install
   git checkout -b my-add
   ```

2. Créez un ou plusieurs nouveaux dossiers de documents, chacun avec son propre fichier `index.md`.

3. Ajoutez et validez vos nouveaux fichiers puis poussez votre nouvelle branche sur votre dépôt distant.

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Créez votre requête de tirage.

## Déplacer des pages

Déplacer un ou plusieurs documents, ou tout un arbre de documents, est simple car une commande spéciale a été créée pour gérer tous les détails&nbsp;:

```bash
npm run content move <identifiant-source> <identifiant-cible> [langue]
```

Vous devez simplement indiquer l'identifiant d'URL du document existant que vous souhaitez déplacer (par exemple&nbsp;: `Web/HTTP/Guides/Authentication`), ainsi que l'identifiant d'URL de sa nouvelle localisation (par exemple&nbsp;: `Web/HTTP/Guides/Auth`), suivi éventuellement de la locale du document existant (par défaut&nbsp;: `en-US`).

Si le document existant que vous souhaitez déplacer possède des documents enfants (c'est-à-dire qu'il représente un arbre de documents), la commande `npm run content move` déplacera l'ensemble de l'arbre.

Par exemple, si vous souhaitez déplacer tout l'arbre `/en-US/Web/HTTP/Guides/Authentication` vers `/en-US/Web/HTTP/Guides/Auth`, procédez ainsi&nbsp;:

1. Démarrez une nouvelle branche pour travailler.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Exécutez "npm install" à nouveau pour vous assurer que les dépendances sont à jour.
   npm install
   git checkout -b mon-déplacement
   ```

2. Effectuez le déplacement (cela supprimera et modifiera les fichiers existants, et en créera de nouveaux).

   ```bash
   npm run content move Web/HTTP/Guides/Authentication Web/HTTP/Guides/Auth
   ```

3. Une fois les fichiers déplacés, il faut mettre à jour les références vers ces fichiers dans les autres fichiers de contenu. Utilisez la commande suivante pour mettre à jour toutes les références automatiquement en une seule fois&nbsp;:

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. Ajoutez et validez tous les fichiers supprimés, créés et modifiés, puis poussez votre branche sur votre dépôt distant.

   ```bash
   git add .
   git commit -m "Déplacement de Web/HTTP/Guides/Authentication vers Web/HTTP/Guides/Auth"
   git push -u origin mon-déplacement
   ```

5. Créez votre requête de tirage.

> [!NOTE]
> La commande `npm run content move` ajoute les redirections nécessaires dans le fichier `_redirects.txt` afin que l'ancien emplacement redirige vers le nouveau. N'éditez pas le fichier `_redirects.txt` manuellement&nbsp;! Des erreurs peuvent facilement s'y glisser. Si vous devez ajouter une redirection sans déplacer de fichier, contactez l'équipe MDN Web Docs sur le [canal de communication MDN Web Docs](/fr/docs/MDN/Community/Communication_channels) à ce sujet.

## Supprimer des pages

Les documents ne doivent être supprimés de MDN Web Docs que dans des circonstances particulières. Si vous envisagez de supprimer des pages, veuillez en discuter d'abord avec l'équipe MDN Web Docs sur les [salons de discussion MDN Web Docs](/fr/docs/MDN/Community/Communication_channels#salles_de_discussion).

Supprimer un ou plusieurs documents, ou tout un arbre de documents, est aussi simple que déplacer des pages, car une commande spéciale a été créée pour gérer tous les détails&nbsp;:

```bash
npm run content delete <identifiant-document> [langue] -- --redirect <identifiant-cible-ou-url>
```

Lorsque vous ajoutez une redirection, la page cible peut être une URL externe ou une autre page de MDN Web Docs.

> [!NOTE]
> Vous devez utiliser la commande `npm run content delete` pour supprimer des pages de MDN Web Docs. Ne supprimez pas simplement leurs répertoires du dépôt. La commande `npm run content delete` gère également les autres modifications nécessaires, comme la mise à jour du fichier `_wikihistory.json`.

Vous devez simplement définir l'identifiant d'URL du document existant que vous souhaitez supprimer (par exemple&nbsp;: `Web/HTTP/Guides/Authentication`), suivi éventuellement de la locale du document existant (par défaut&nbsp;: `en-US`).

Si le document existant que vous souhaitez supprimer possède des documents enfants (c'est-à-dire qu'il représente un arbre de documents), vous devez également définir l'option `-r, --recursive`, sinon la commande échouera.

Par exemple, si vous souhaitez supprimer tout l'arbre `/en-US/Web/HTTP/Guides/Authentication`, procédez ainsi&nbsp;:

1. Démarrez une nouvelle branche pour travailler.

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Exécutez "npm install" à nouveau pour vous assurer que les dépendances sont à jour.
   npm install
   git checkout -b ma-suppression
   ```

2. Effectuez la suppression avec une redirection.

   ```bash
   npm run content delete Web/HTTP/Guides/Authentication --recursive -- --redirect /en-US/path/of/target/page
   ```

3. Ajoutez et validez tous les fichiers supprimés, puis poussez votre branche sur votre dépôt distant.

   ```bash
   git commit -a
   git push -u origin ma-suppression
   ```

4. Créez votre requête de tirage.

> [!NOTE]
> Si l'identifiant d'URL de la page que vous souhaitez supprimer contient des caractères spéciaux, placez-le entre guillemets, comme ceci&nbsp;:
>
> ```bash
> npm run content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)" -- --redirect <identifiant-cible-ou-url>
> ```

La suppression de contenu de MDN Web Docs entraînera inévitablement la mise à jour du contenu existant. De nombreux articles font référence à d'autres, le contenu supprimé sera donc probablement référencé ailleurs. Ajouter une redirection atténuera l'impact de la suppression&nbsp;; cependant, il est recommandé de modifier le contenu pour refléter le changement et d'inclure les modifications de contenu avec la requête de suppression.

## Modifier des pages existantes

Pour modifier une page, vous devez trouver la source de la page dans nos dépôts [`mdn/content`](https://github.com/mdn/content) (fichiers anglais) et [`mdn/translated-content`](https://github.com/mdn/translated-content) (fichiers traduits). La façon la plus simple de la trouver est d'utiliser votre navigateur pour accéder à la page que vous voulez éditer, d'aller en bas de la page et de cliquer sur le lien «&nbsp;<i lang="en">View the source on GitHub</i>&nbsp;» (Voir la source sur GitHub pour son équivalent Français).

### Prévisualiser les modifications

Si vous modifiez la page localement, pour voir à quoi ressemblent vos changements, vous pouvez aller dans le dossier du dépôt de contenu, exécuter la commande CLI `npm start`, aller à `localhost:5042` dans votre navigateur, puis naviguer jusqu'à la page pour la consulter. Entrez le titre dans la barre de recherche pour la trouver facilement. La page prévisualisée se mettra à jour dans le navigateur au fur et à mesure que vous modifierez la source.

### Joindre des fichiers

Pour joindre un fichier à votre article, il vous suffit de l'inclure dans le même répertoire que le fichier `index.md` de l'article. Incluez le fichier dans votre page, généralement via un élément HTML {{HTMLElement("a")}}.
