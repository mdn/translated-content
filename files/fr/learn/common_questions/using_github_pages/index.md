---
title: Utiliser les pages GitHub
slug: Learn/Common_questions/Using_Github_pages
tags:
  - Débutant
  - GitHub
  - Guide
  - Web
  - git
translation_of: Learn/Common_questions/Using_Github_pages
original_slug: Apprendre/Utiliser_les_pages_GitHub
---
[GitHub](https://github.com/) est un site de partage de code, sur lequel on peut publier des projets dont le code est géré avec le système de gestion de version [Git](http://git-scm.com/)**.** Par défaut, le système est _open source_, ce qui signifie que tout le monde peut consulter le code, l'utiliser pour apprendre ou l'améliorer et collaborer aux projets. Vous pouvez donc participer à d'autres projets ou, à l'inverse, des personnes peuvent collaborer à vos projets ! Dans cet article, nous verrons comment publier du contenu sur le web en utilisant les « pages GitHub » (aussi appelées _gh-pages_) qui sont une des fonctionnalités de GitHub.

## Publier du contenu

GitHub est un outil très populaire et important à l'heure actuelle. Git est [un logiciel de gestion de version](http://git-scm.com/book/fr/v1/D%C3%A9marrage-rapide-%C3%80-propos-de-la-gestion-de-version) reconnu, utilisé par de nombreuses entreprises. GitHub possède notamment une fonctionnalité : [les pages GitHub](https://pages.github.com/). Celles-ci vous permettent de publier un site web sur Internet.

### Mettre en place Git et un compte GitHub

1.  Tout d'abord, [installez Git](http://git-scm.com/downloads) sur votre ordinateur. Git est le logiciel de gestion de version sur lequel fonctionne GitHub.
2.  Ensuite, [inscrivez-vous sur GitHub](https://github.com/join). La procédure est plutôt simple.
3.  Une fois inscrit, connectez vous à [github.com](https://github.com) avec votre nom d'utilisateur et votre mot de passe.

> **Note :** Attention, le site GitHub existe uniquement en anglais. Bien que les étapes mentionnées ici soient relativement simples, il est préférable d'avoir quelques bases d'anglais afin de poursuivre sereinement (nul besoin de connaître Shakespeare ;)). Si vous n'êtes pas à l'aise, rassurez-vous, il existe de nombreux tutoriels en français sur le Web.

### Préparer le code afin de l'envoyer vers GitHub

Vous pouvez utiliser des dépôts GitHub pour stocker n'importe quel projet logiciel. Mais pour utiliser les pages GitHub et publier un site web (ce qui nous intéresse ici), votre projet devra être structuré comme un site web classique et notamment avec un fichier d'entrée intitulé `index.html`.

Il faut aussi que le répertoire où le code est stocké soit un « dépôt » Git sur votre ordinateur. Autrement dit, on indique qu'on utilise Git pour gérer les différentes versions des fichiers qui seront stockés dans ce dossier. Pour initialiser un dépôt Git, on suivra ces étapes :

1.  Utilisez la ligne de commande pour vous placer dans le répertoire de votre site web (dans cet article, ce répertoire sera appelé `test-site`, remplacez ce nom avec celui de votre répertoire). Pour ce faire, on utilisera la commande `cd` (qui signifie « _change directory_ » ou « changer de répertoire/dossier » en français). Par exemple, si votre répertoire se situe sur votre bureau et se nomme `test-site`, vous pourrez taper :

    ```bash
    cd Bureau/test-site
    ```

2.  Lorsque vous êtes dans le répertoire de votre site web, utilisez la commande suivante. Celle-ci indiquera à Git que le répertoire doit être considéré comme un dépôt Git :

    ```bash
    git init
    ```

#### Un aparté sur les interfaces en ligne de commande

La meilleure façon d'envoyer votre code sur GitHub est d'utiliser l'interface en ligne de commande de votre ordinateur. La ligne de commande est une fenêtre où on saisit des commandes au clavier pour créer des fichiers, lancer des programmes, plutôt que de cliquer avec la souris en utilisant une interface graphique. Une interface en ligne de commande ressemblera à quelque chose comme ceci :

![Interface en ligne de commande](commande.png)

> **Note :** Il existe également des [interfaces graphiques pour Git](http://git-scm.com/downloads/guis) qui permettent de faire la même chose. N'hésitez pas à les utiliser si vous ne vous sentez pas à l'aise avec la ligne de commande.

Chaque système d'exploitation possède sa propre interface en ligne de commande  :

- **Windows** : **l'invite de commande**. Celle-ci peut être lancée en utilisant la touche Windows et en tapant _Invite de commande_ avant de sélectionner l'option dans la liste qui apparaît. Windows utilise certaines conventions différentes de celles choisies par Linux et OS X, les commandes peuvent donc varier légèrement (par exemple, dans Windows, on utilisera `\` pour indiquer un sous-répertoire alors que Linux et OS X utiliseront `/`).
- **OS X** : **le terminal**. On le trouvera dans _Applications > Utilitaires_.
- **Linux** : Généralement, on peut lancer un terminal avec le raccourci clavier _Ctrl + Alt + T_. Si cela ne fonctionne pas, recherchez **Terminal** dans les applications ou via les outils de recherche.

La ligne de commande peut sembler un peu effrayante au début mais ne vous inquiétez pas, vous pourrez apprendre les bases très rapidement. En utilisant la ligne de commande vous indiquez à l'ordinateur que vous souhaitez effectuer telle action, plutôt que de le faire à la souris, vous l'indiquez au clavier en saisissant la commande voulue puis en appuyant sur Entrée.

### Créer un dépôt sur GitHub pour votre code

1.  Ensuite, vous aurez besoin de créer un dépôt GitHub sur lequel envoyer les fichiers de votre site. Quand vous êtes connecté-e sur GitHub, cliquez sur l'icône Plus (+) en haut à droite de la page d'accueil puis sélectionner l'option _New Repository_ (qui signifie « Créer un nouveau dépôt »).
2.  Sur la page qui s'affiche, dans le champ « _Repository name_ », entrez un nom pour votre dépôt. Vous pouvez par exemple saisir _mon-premier-depot_.
3.  Il y a également un champ qui décrit le projet qui sera placé dans ce dépôt. Votre écran devrait ressembler à quelque chose comme :
    ![](create-new-repo.png)
4.  Ensuite, cliquez sur « _Create repository_ » (pour créer le dépôt). Vous arrieverez alors sur la page suivante :
    ![](github-repo.png)

### Envoyer vos fichiers vers GitHub

1.  Sur cette page, une section vous intéresse particulièrement : « _…or push an existing repository from the command line_ » (ce qui signifie « ou pousser un dépôt existant grâce à la ligne de commande »). Vous devrez voir deux lignes de codes sous cette section. Copiez la première ligne et collez la dans votre interface en ligne de commande puis tapez sur Entrée. La commande devrait ressembler à :

        git remote add origin https://github.com/chrisdavidmills/mon-premier-depot.git

2.  Ensuite, saisissez ces deux commandes en tapant sur la touche Entrée après chacune. Ces commandes permettent d'indiquer à Git qu'il doit gérer tous les fichiers du dossier et d'enregistrer cette action.

    ```bash
    git add --all
    git commit -m 'ajout des fichiers au dépôt'
    ```

3.  Enfin, envoyez le code sur GitHub en utilisant la seconde commande affichée sur la section de la page GitHub :

    ```bash
    git push -u origin master
    ```

4.  Votre code est publié sur GitHub. Pour avoir une page GitHub, vous devrez créer une _branche_ `gh-pages` sur votre dépôt. Actualisez la page web de votre dépôt, vous devriez obtenir une page semblable à celle présentée ci-dessous. Ensuite, cliquez que le bouton « Branch: **master** » (GitHub indique que vous êtes sur la branche `master` de votre dépôt). Dans la liste qui s'affiche, saisissez le texte **gh-pages** puis cliquez sur _Create branch: gh-pages_ (« créer la branche intitulée gh-pages »). Cela créera une nouvelle branche pour votre dépôt, cette branche s'appellera gh-pages et sera publiée à un endroit spécifique. L'URL du site sera _nom-utilisateur.github.io/nom-du-depot_. Dans mon exemple, l'URL est donc _https\://chrisdavidmills.github.io/my-repository_. La page qui est affichée à cette URL est la page `index.html` contenue dans le dépôt.
    ![](repo-site.png)
5.  Utilisez votre navigateur préféré pour visiter cette URL. Voici votre site ! Partagez le lien avec vos amis pour leur montrer :)

> **Note :** Si vous êtes bloqué-e, n'hésitez pas à utiliser [la page d'aide GitHub sur les pages GitHub](https://pages.github.com/) qui est une excellente ressource (en anglais).

### Aller plus loin avec Git et GitHub

Si vous souhaitez modifier votre site et le mettre à jour sur GitHub, modifiez les fichiers comme vous le faisiez auparavant puis utilisez les commandes suivantes pour indiquer les changements à Git et les envoyer sur GitHub (n'oubliez pas d'appuyer sur Entrée entre chaque commande) :

    git add --all
    git commit -m 'Un autre commit'
    git push

Vous pouvez utiliser un autre message que « un autre commit »  pour indiquer les changements que vous avez effectués.

Dans cet article, nous n'avons fait qu'effleurer la surface de Git. Pour en savoir plus, n'hésitez pas à utiliser les [pages d'aide de GitHub](https://help.github.com/index.html) (en anglais) ou encore [le manuel Pro Git](http://git-scm.com/book/fr/v1) (en français).
