---
title: Créer et modifier des pages
slug: MDN/Contribute/Howto/Create_and_edit_pages
translation_of: MDN/Contribute/Howto/Create_and_edit_pages
---
{{MDNSidebar}}

Cet article est destiné à présenter aux personnes souhaitant contribuer à MDN le processus de modification de pages existantes et de création de nouvelles pages.

> **Note :** Le contenu de MDN s'organise au sein de deux dépôts Git : [`mdn/content`](https://github.com/mdn/content) avec le contenu en anglais et [`mdn/translated-content`](https://github.com/mdn/translated-content) avec le contenu traduit (y compris en français). C'est le dépôt `mdn/content` qui constitue la référence. Si vous souhaitez créer une page en français, celle-ci devra au préalable avoir été créée en anglais.

## Modifier une page existante

Pour modifier une page, vous devez trouver la page source :

- Si elle est en anglais : [sur notre dépôt <i lang="en">content</i>](https://github.com/mdn/content)

  <i lang="en">content</i>

- Si elle est en français ou dans une autre langue : [sur notre dépôt <i lang="en">translated-content</i>](https://github.com/mdn/translated-content)

  <i lang="en">translated-content</i>

.

La façon la plus rapide de la trouver est d'aller sur la page que vous souhaitez modifier, puis de vous rendre en bas de cette page et enfin de cliquer sur le lien <i lang="en">« Source on GitHub »</i>.

Une fois que vous avez trouvé la source à modifier, rendez-vous sur notre fichier <i lang="en">README</i> et parcourez notre [guide sur la contribution (en anglais)](https://github.com/mdn/translated-content/#making-contributions). Vous pouvez également consulter [ce billet en français](https://tech.mozfr.org/post/2021/03/16/MDN-sur-GitHub-comment-contribuer) pour savoir comment contribuer.

### Prévisualiser vos modifications

SI vous modifiez la page en local, vous pouvez voir à quoi ressembleront vos modifications en allant sur le dossier du dépôt nommé <i lang="en">content</i>, en exécutant la commande CLI `yarn start`, puis en vous rendant à l'URL `localhost:5042` dans votre navigateur, et enfin en retrouvant la page sur laquelle vous travaillez. Pour la trouver plus facilement, utilisez la boîte de recherche. La page que vous prévisualisez sera rafraîchie automatiquement au fur et à mesure que vous modifiez son code source.

### Ajouter des pièces jointes

Pour ajouter un fichier en pièce jointe à votre article, vous avez simplement besoin de l'inclure dans le même répertoire du fichier `index.html` de votre article, puis de l'ajouter dans votre page, typiquement à l'aide d'un élément `<a>`.

## Créer une nouvelle page

Pour créer une nouvelle page, consultez les instructions fournies sur la [documentation concernant l'ajout de nouveaux documents (en anglais)](https://github.com/mdn/content#adding-a-new-document).

> **Attention :** Pour créer une page en français (ou dans une autre langue), celle-ci devra préalablement exister/avoir été créée en anglais.

## Voir aussi

- [Guide stylistique de MDN](/fr/docs/MDN/Guidelines/Writing_style_guide)
- [MDN sur GitHub : comment contribuer ?](https://tech.mozfr.org/post/2021/03/16/MDN-sur-GitHub-comment-contribuer)
