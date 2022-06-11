---
title: GitHub pour les débutants
slug: MDN/Contribute/GitHub_beginners
tags:
  - Best practices
  - Community
  - GitHub
  - MDN
  - Beginners
translation_of: MDN/Contribute/GitHub_beginners
---
{{MDNSidebar}}

[Git](https://git-scm.com/) et [GitHub](https://github.com/) sont des outils difficiles à apprendre et à maîtriser, mais avec quelques commandes simples et quelques bons conseils, vous devriez pouvoir en faire assez pour commencer à contribuer à MDN sans trop de difficultés. Le but de cet article n'est pas de vous aider à maîtriser Git ou GitHub, mais de vous donner juste assez d'éléments pour être productif à un niveau de base et contribuer à MDN.

Si vous êtes déjà familiarisé avec les bases de Git/GitHub, vous n'apprendrez probablement rien de nouveau ici, mais cet article peut néanmoins vous être utile comme référence. Il existe également une [antisèche GitHub](/fr/docs/MDN/Contribute/GitHub_cheatsheet) disponible, avec juste les commandes et aucune des longues explications.

## Concepts essentiels

Voici les concepts essentiels que vous devez connaître pour tirer le meilleur parti de Git et de GitHub.

- Git est un outil de _système de contrôle de version_ - une classe d'outils essentielle dans tout flux de développement. Il permet à un groupe de développeurs de travailler sur la même base de code sans se gêner mutuellement, stocke la base de code en toute sécurité dans un emplacement distant, permet aux développeurs de revenir à des états antérieurs si nécessaire, et plus encore.
- GitHub est une application web qui fournit des outils utiles au-dessus de Git pour travailler avec des bases de code stockées, ainsi qu'un espace serveur pour stocker les bases de code. Elle fait des choses similaires à d'autres applications dans cet espace, comme [GitLab](https://about.gitlab.com/) ou [Bitbucket](https://bitbucket.org/).
- Chaque base de code est stockée dans un conteneur appelé _repository_, ou _repo_. En français « dépôt ».
- Apporter une modification à un référentiel implique au minimum :

  - Créer votre propre copie de ce dépôt (appelé un _fork_ ou « bifurcation »).
  - Créer une version différente du code dans votre bifurcation du dépôt (appelée une _branch_ ou « branche ») et ajouter vos modifications à cette version alternative.
  - Proposer d'effectuer cette modification dans la copie originale du dépôt via une _pull request_ ou « demande de triage ». Vous apprendrez toutes ces étapes dans ce guide.

## Hypothèses formulées par cet article

Cet article part du principe que :

- Vous êtes déjà à l'aise avec l'utilisation de la ligne de commande/du terminal. Si la ligne de commande vous est inconnue, lisez notre [Cours accéléré sur les lignes de commande](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).
- Vous travaillez sur un système qui comprend les commandes de ligne de commande standard de style Unix. macOS/Linux disposent de cette fonctionnalité dès le départ ; [Windows n'est pas tout à fait aussi simple](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#windows) à cet égard, mais il existe des applications utiles qui émulent cette fonctionnalité sous Windows, comme Git Bash.
- Vous utiliserez la ligne de commande pour interagir avec Git/GitHub. Il existe un certain nombre d'outils GUI pour Git et GitHub, mais ils ne fonctionneront pas avec ce guide.

## Configuration initiale

Avant de commencer à travailler sur un dépôt particulier, suivez ces étapes :

1.  Installez Git sur votre ordinateur. Allez sur la [page de téléchargement de Git](https://git-scm.com/downloads), téléchargez la dernière version pour votre ordinateur, et installez-la. Si vous êtes un utilisateur Windows, vous devriez également installer le paquet [Git pour Windows](https://gitforwindows.org/), qui inclut Gitbash.
2.  Pendant que vous y êtes, installez les autres dépendances requises pour travailler localement avec MDN - [Node.js](https://nodejs.org/en/download/) et [yarn](https://classic.yarnpkg.com/en/docs/install).

    1.  Installez Node.js en suivant le lien ci-dessus et en téléchargeant et installant la dernière version pour votre ordinateur.
    2.  Une fois que vous avez installé Node.js, installez yarn en exécutant `npm install --global yarn`.

3.  Créez un répertoire séparé quelque part sur votre ordinateur pour y stocker tous vos dépôts Git, qui soit facile à trouver et à atteindre en ligne de commande. Un répertoire appelé mdn-git à l'intérieur de votre répertoire home/user serait approprié.
4.  [Créez un compte GitHub](https://github.com/join) si vous n'en avez pas déjà un. Vous aurez besoin d'un compte pour contribuer aux dépôts de MDN.

### Configuration de l'authentification SSH sur GitHub

À ce stade, vous devez configurer une clé SSH sur votre compte GitHub. Il s'agit essentiellement d'un mécanisme de sécurité qui vous identifie auprès de GitHub et vous évite de devoir vous authentifier à chaque fois que vous utilisez les services GitHub.

GitHub a créé un guide utile pour configurer cela - voir le point de départ sur [Connexion à GitHub avec SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh). Suivez chacune des étapes ici pour vous configurer avec SSH sur GitHub.

Si vous ne le faites pas, vous pourrez toujours contribuer au MDN, mais vous devrez saisir votre nom d'utilisateur et votre mot de passe à chaque fois que vous interagirez avec GitHub (par exemple, lorsque vous soumettez une demande de triage, comme indiqué ci-dessous).

## Se préparer à travailler sur un dépôt spécifique

<!-- start:Note spéciale pour l'équpe de traduction l10n-fr -->

> **Note :** pour la traduction française :
>
> Ce qui a été expliqué par Chris Mills ici est identique pour le dépôt de traduction français, vous devez remplacer `mdn/content` par `mdn/translated-content`, et `<votre-nom-utilisateur>/content` par `<votre-nom-utilisateur>/translated-content`
>
> Vous pouvez retrouver des explications de ceci sur notre article [Comment contribuer sur GitHub au MDN](https://tech.mozfr.org/post/2021/03/16/MDN-sur-GitHub-comment-contribuer)

<!-- end:Note spéciale pour l'équpe de traduction l10n-fr -->

Il existe un certain nombre de dépôts différents que vous pouvez avoir à mettre à jour lorsque vous travaillez sur différentes tâches MDN (voir [Où se trouve tout sur MDN ? Un guide de nos dépôts](/fr/docs/MDN/Contribute/Where_is_everything)), mais il y a un certain nombre d'étapes de configuration que vous devriez suivre sur chaque dépôt sur lequel vous travaillez, pour rendre les choses plus faciles et plus cohérentes.

### Bifurcation et clonage

La _Bifurcation_ et le _Clonage_ sont deux termes que vous rencontrerez souvent dans le monde de Git :

- « Forking » (ou Bifurquer) signifie créer votre propre copie d'un dépôt sur GitHub.
- « Cloning » (ou Cloner) consiste à faire une copie locale d'un dépôt sur lequel vous pouvez travailler (c'est-à-dire sur votre disque dur local).

Il est possible de faire les deux choses séparément, mais en pratique, vous les ferez presque toujours ensemble lorsque vous contribuerez aux projets d'autres personnes. Vous devez d'abord créer une bifurcation de chaque dépôt sur lequel vous souhaitez travailler. Cela est nécessaire pour soumettre des demandes de modification à la version principale du dépôt (nous verrons plus tard comment créer une demande de modification). Pour des raisons de sécurité, vous ne pouvez pas soumettre des modifications directement à la version principale du dépôt.

Bifurquons le dépôt <https://github.com/mdn/content> dès maintenant ; vous contribuerez certainement à ce dépôt à un moment donné. Suivez les étapes suivantes :

1.  Localisez le bouton « Fork » dans le coin supérieur droit de la page du dépôt de contenu, et appuyez dessus :

    ![Bouton étiqueté fork, avec le numéro 609 à côté.](fork-button.png)

2.  Une fenêtre de dialogue s'affiche, vous demandant où vous souhaitez transférer le dépôt. Sélectionnez votre compte GitHub personnel.

    Un message apparaîtra disant quelque chose comme « Forking mdn/content. It should only take a few seconds. ». Une fois que GitHub a terminé la bifurcation, votre navigateur devrait vous rediriger vers la page du nouveau « fork ». À titre d'exemple, mon « fork » de <https://github.com/mdn/content> est disponible l'adresse <https://github.com/chrisdavidmills/content>.

Maintenant que vous avez dupliqué le dépôt, il est temps de cloner votre copie localement. Pour ce faire :

1.  Allez sur la page de votre bifurcation sur github.com (par exemple `https://github.com/<votre-nom-utilisateur>/content`).
2.  Appuyez sur le bouton vert « Code » en haut de la liste des fichiers. Quelque chose de similaire à la fenêtre contextuelle suivante devrait apparaître :

    ![Fenêtre contextuelle montrant une URL de clonage avec les options d'ouverture via le bureau GitHub et de téléchargement du zip.](code-popup.png)

3.  Si vous avez configuré l'authentification SSH comme indiqué ci-dessus, cliquez sur l'onglet "SSH" et copiez l'URL `git@github.com:<votre-nom-utilisateur>/content.git` à partir du champ de texte de la fenêtre de dialogue. Si vous n'avez pas configuré l'authentification SSH, copiez plutôt l'URL depuis le champ de texte de l'onglet "HTTPS", qui devrait ressembler à ceci : `https://github.com/<votre-nom-utilisateur>/content.git`.
4.  Maintenant, ouvrez votre console de commande sur votre ordinateur, et naviguez dans le répertoire que vous avez configuré plus tôt pour stocker les clones de votre dépôt git local à l'aide de la commande cd, par ex.

    ```bash
    cd git
    ```

5.  Clonez votre bifurcation en entrant une commande de la forme suivante :

    ```bash
    git clone url-que-vous-avez-copié
    ```

    Ainsi, par exemple, ma commande de clonage ressemblait à ceci :

    ```bash
    git clone git@github.com:chrisdavidmills/content.git
    ```

Vous devriez maintenant trouver un répertoire de contenu dans votre répertoire git, contenant le contenu du dépôt.

### Configuration d'un suivi distant pour pointer vers la version principale du dépôt

La dernière chose à faire avant de passer à autre chose, c'est de configurer un _remote_ ou « suivi distant » pour pointer vers la version principale du dépôt, par exemple <https://github.com/mdn/content> dans le cas de notre exemple. Un suivi distant est essentiellement un pointeur vers un emplacement de dépôt distant spécifique sur GitHub, et est le plus souvent utilisé pour mettre à jour votre clone local afin qu'il soit à jour avec le dernier dépôt principal, comme nous le verrons ci-dessous.

La configuration d'un suivi distant se fait avec la commande `git remote add`, qui ressemble à ceci :

```bash
git remote add remote-name repo-you-want-to-point-to
```

- `remote-name` est le nom que vous décidez, qui est utilisé pour se référer à suivi distant plus tard. Il est bon de s'en tenir à un nom cohérent pour bien distinguer les différents dépôts qui ont le même but, ainsi le même nom de suivi fera la même chose partout, et vous êtes moins susceptibles d'être confus. Ainsi, par exemple, la version principale du dépôt à partir duquel vous avez bifurqué votre version est souvent appelée « dépôt ascendant », c'est pourquoi les gens utilisent souvent « upstream » comme nom de l'emplacement ascendant distant. J'appelle généralement mes suivi ascendant "mozilla", pour signifier qu'ils pointent vers la copie principale du dépôt de Mozilla.
- `repo-you-want-to-point-to` est l'URL SSH (ou HTTPS) du dépôt vers lequel vous voulez pointer, récupérée de la même manière que lorsque nous avons cloné notre bifurcation plus tôt.

Donc, pour ajouter votre suivi :

1.  Allez sur la page github.com de la version principale du dépôt (<https://github.com/mdn/content> dans cet exemple) et récupérez l'URL SSH ou HTTPS selon le cas, dans la fenêtre contextuelle « Code ».
2.  Dans votre console de commande, utilisez `cd` pour aller dans votre répertoire de contenu :

    ```bash
    cd content
    ```

3.  Exécutez maintenant une commande selon les lignes suivantes, en remplaçant _remote-name_ et _repo-you-want-to-point-to_ comme il convient :

    ```bash
    git remote add remote-name repo-you-want-to-point-to
    ```

    Ainsi, par exemple, j'ai utilisé l'URL SSH et j'ai appelé mon suivi distant "mozilla" :

    ```bash
    git remote add mozilla git@github.com:mdn/content.git
    ```

Votre suivi distant devrait maintenant être configuré. Vous pouvez le vérifier en exécutant la commande `git remote -v` dans votre terminal, qui sort une liste de vos noms de suivi distant et où ils pointent. Vous devriez voir quelque chose un peu comme ceci :

    mozilla    git@github.com:mdn/content.git (fetch)
    mozilla    git@github.com:mdn/content.git (push)
    origin    git@github.com:chrisdavidmills/content.git (fetch)
    origin    git@github.com:chrisdavidmills/content.git (push)

## Préparation d'une modification du dépôt.

Maintenant que votre clone de fork local est prêt à fonctionner, il y a un ensemble de commandes que vous devez prendre l'habitude d'exécuter avant d'essayer d'effectuer de nouvelles modifications.

### Passer à la branche principale

Chaque dépôt a un certain nombre de branches différentes, qui sont essentiellement des versions différentes du code de base dans le même dépôt. L'idée est que pour chaque modification apportée au code de base, vous effectuez la modification sur une branche séparée et la testez d'abord, avant de pousser les modifications vers la copie principale du code.

La branche principale du dépôt de contenu est appelée « main » (elle peut être appelée autrement, comme « master » dans d'autres dépôts, et si c'est le cas, vous devrez mettre à jour son nom dans toutes les commandes présentées ci-dessous). Vous serez sur cette branche par défaut si vous venez de cloner le dépôt, mais si vous avez déjà effectué des modifications, vous serez probablement sur une autre branche.

Assurez-vous d'exécuter la commande suivante pour passer à la branche principale avant de faire quoi que ce soit d'autre :

```bash
git switch main
```

> **Note :** Dans d'autres tutoriels, vous avez peut-être vu `git checkout` utilisée pour changer de branche dans un dépôt. Cela fonctionne bien la plupart du temps, mais peut parfois avoir des effets secondaires involontaires, c'est pourquoi dans ce tutoriel nous recommandons la commande `git switch`, plus récente, qui est conçue pour changer de branche et a moins de chance de faire des erreurs. Si vous êtes intéressé par la façon dont ces commandes sont liées, et les différences entre elles, l'article [Les points forts de Git 2.23 > Alternatives expérimentales pour git checkout](https://github.blog/2019-08-16-highlights-from-git-2-23/#experimental-alternatives-for-git-checkout) fournit un bon résumé.

### Mettre à jour votre branche principale

Ensuite, vous devez mettre à jour votre branche principale afin qu'elle contienne le même contenu que la branche principale du dépôt principal. Le dépôt de contenu est mis à jour plusieurs fois par jour par un grand nombre de contributeurs, donc si vous ne le faites pas, votre version ne sera plus à jour, ce qui posera des problèmes lorsque vous essaierez de soumettre vos mises à jour. C'est là que votre suivi distant vous sera utile !

Pour mettre à jour votre dépôt :

1.  Tout d'abord, récupérez le contenu mis à jour de votre suivi distant avec la commande suivante :

    ```bash
    git fetch remote-name
    ```

    Par exemple :

    ```bash
    git fetch mozilla
    ```

2.  Ensuite, remplacez le contenu de votre branche principale par la branche principale du dépôt distant. Il existe de nombreuses façons différentes de le faire, mais j'ai tendance à utiliser la commande `rebase`, comme ceci :

    ```bash
    git rebase remote-name/main-branch-name
    ```

    Par exemple :

    ```bash
    git rebase mozilla/main
    ```

3.  Enfin, poussez ces changements vers la version distante de votre bifircation en utilisant :

    ```bash
    git push
    ```

Vous saurez si vos mises à jour ont fonctionné correctement en regardant la page github.com de votre fork (c-à-d. que la mienne est <https://github.com/chrisdavidmills/content>). Elle devrait dire quelque chose comme « This branch is even with mdn:main. » quelque part près du haut de page. Si cela dit que votre branche principale est derrière mdn:main par un certain nombre de commits, alors vous devrez essayer à nouveau, ou regarder la section [dépannage](#troubleshooting).

### Créez une nouvelle branche pour y faire vos modifications

Une fois que vous avez mis à jour votre branche principale dans votre bifurcation, vous devez toujours créer une nouvelle branche pour y apporter une modification. Vous ne devriez _jamais_ faire vos modifications dans la branche principale et le soumettre à partir de là - cela peut devenir très vite désordonné, croyez-nous. Il est beaucoup plus propre et moins sujet aux erreurs de faire tout le travail dans des branches séparées.

Pour créer une nouvelle branche :

1.  Allez sur la page de votre bifurcation sur github.com (la mienne est à l'adresse <https://github.com/chrisdavidmills/content>) et trouvez le bouton de branche en haut à gauche de la liste des fichiers, qui devrait indiquer « main » :

    ![Bouton intitulé main](branch-button.png)

2.  Cliquez dessus, et vous verrez apparaître une liste de branches et un champ de texte indiquant « Find or create a branch… » :

    ![menu montrant une liste de noms de branches avec une zone de texte étiquetée trouver ou créer une branche](branch-menu.png)

3.  Si vous saisissez une partie du nom d'une branche existante dans le champ de texte, la liste des branches sera filtrée en fonction de cette chaîne de caractères, ce qui vous permettra de rechercher facilement des branches existantes. Cependant, nous voulons créer une nouvelle branche. Entrez un nom de branche qui n'existe pas encore (essayez quelque chose comme test-branch) et l'affichage changera pour vous donner un bouton intitulé « Create branch : test-branch from 'main' » :

    ![menu montrant un nouveau nom de branche, test-branch, entré dans une zone de texte, avec un bouton de création de branche en dessous](new-branch.png)

4.  Une fois que vous êtes satisfait du nom de votre branche, cliquez sur ce bouton, et l'affichage sera mis à jour pour montrer le nom de la branche dans le bouton branche :

    ![Bouton intitulé test-branch](branch-button-new-branch.png)

Voilà, c'est fait ! Vous avez maintenant créé une nouvelle branche dans laquelle vous allez travailler. Cette branche est identique à l'état de la branche principale au moment où vous l'avez créée. C'est un bon point de départ pour notre travail.

Conseils :

- Assurez-vous de toujours mettre à jour votre branche principale pour qu'elle soit synchronisée avec la branche principale de mozilla, comme indiqué dans la section précédente, avant de créer une nouvelle branche.
- Assurez-vous de toujours créer votre nouvelle branche en vous basant sur main, et non sur une autre branche, en vérifiant que le bouton de la branche affiche "main" avant de lancer le processus. Si vous ne le faites pas, votre nouvelle branche risque d'être vraiment obsolète, ce qui créera des problèmes de contenu.

### Obtenez votre branche localement et passez dessus

La section précédente vous a appris à créer une nouvelle branche dans votre bifurcation, mais elle n'existe actuellement que dans votre version distante du dépôt. Pour travailler dessus, vous devez la placer dans votre version locale.

Pour ce faire, retournez dans votre terminal et, en vous assurant que vous êtes à l'intérieur du répertoire du dépôt sur lequel vous travaillez (`content` pour cet exemple) :

1.  Tirez les changements distants vers votre clone local en exécutant la commande `git pull`.
2.  Vous devriez obtenir un message du type `* [new branch] test-branch -> origin/test-branch`.
3.  Pour passer à votre branche (c'est-à-dire passer de « main », pour travailler dans cette branche à la place), exécutez la commande `git switch test-branch`.

Si vous avez réussi, git devrait vous dire quelque chose comme ceci :

    Branch 'test-branch' set up to track remote branch 'test-branch' from 'origin'.
    Switched to a new branch 'test-branch'

Notez que vous pouvez vérifier le statut de votre dépôt, y compris la branche sur laquelle vous vous trouvez, à tout moment en exécutant la commande `git status`. Essayez maintenant, et git devrait vous dire quelque chose comme ceci :

    On branch test-branch
    Your branch is up to date with 'origin/test-branch'.

    nothing to commit, working tree clean

Cela semble correct. Nous sommes sur la branche "test-branch", et nous n'avons pas encore fait de changements.

## Ajouter, valider et pousser les changements

À ce stade, vous êtes prêt à apporter des modifications au dépôt sur lequel vous travaillez, pour corriger un bogue sur lu MDN ou autre. Nous allons sauter cette partie, car ce n'est pas le but de ce tutoriel. Si vous voulez corriger un vrai problème sur le MDN, allez choisir un bogue à corriger dans notre [liste des problèmes de contenu](https://github.com/mdn/translated-content/issues/), ou lisez [Contribuer à MDN](/fr/docs/MDN/Contribute) pour plus de conseils.

Si vous voulez simplement suivre ce tutoriel à titre d'exemple, faisons quelque chose de simple.

1.  Allez dans le fichier `content/README.md`, et ajoutez une seule lettre dans le titre supérieur du README.
2.  Maintenant, retournez à votre ligne de commande et entrez à nouveau la commande `git status`. Cette fois-ci, git devrait vous dire quelque chose comme ceci :

        Your branch is up to date with 'origin/test-branch'.

            Changes not staged for commit:
              (use "git add <file>..." to update what will be committed)
              (use "git restore <file>..." to discard changes in working directory)
                modified:   README.md

            no changes added to commit (use "git add" and/or "git commit -a")

3.  À ce stade, il vous indique donc les fichiers que vous avez modifiés. L'étape suivante consiste à les "ajouter", c'est-à-dire à les ajouter à une liste de fichiers que vous souhaitez commiter pour les pousser vers le fork distant. Pour ajouter ce fichier à la liste de commit, tapez ce qui suit :

    ```bash
    git add README.md
    ```

    > **Note :** `README.md` est le chemin d'accès au fichier que vous avez modifié, pas seulement son nom. S'il était à l'intérieur d'un sous-répertoire, vous auriez dû écrire le chemin complet du fichier.

4.  Si vous exécutez `git status` à nouveau, vous verrez maintenant ceci :

        On branch test-branch
            Your branch is up to date with 'origin/test-branch'.

            Changes to be committed:
              (use "git restore --staged <file>..." to unstage)
                modified:   README.md

5.  Git nous dit que `README.md` est maintenant dans notre liste de commit. Pour inclure tous les fichiers de la liste de commit dans un commit (un seul ensemble de changements que nous essaierons plus tard d'envoyer à la branche principale), entrez ce qui suit (l'option `-m` est l'abréviation de « message ») :

    ```bash
    git commit -m 'my first commit'
    ```

    Git vous dira ceci :

        [test-branch 44b207ef6] my first commit
             1 file changed, 1 insertion(+), 1 deletion(-)

    Pour montrer qu'il a enregistré que vous avez fait un commit.

6.  Exécutez `git status` à nouveau, et vous obtiendrez cette information :

        On branch test-branch
            Your branch is ahead of 'origin/test-branch' by 1 commit.
              (use "git push" to publish your local commits)

            nothing to commit, working tree clean

La lecture de l'information a fondamentalement été réinitialisée - elle nous dit qu'il n'y a pas de changements à soumettre, parce que nous avons maintenant envoyé notre changement précédent dans le système comme un commit. La principale différence par rapport à la version précédente est la ligne "Votre branche est en avance sur 'origin/test-branch' de 1 commit". - notre version locale de la branche "test-branch" est maintenant en avance sur la version distante de "test-branch" d'un commit - en d'autres termes, nous avons fait un changement localement que la branche distante n'a pas.

Envoyons notre changement local à la branche distante. Vous pouvez le faire en exécutant la commande `git push` - essayez maintenant. S'il n'y a pas d'erreurs, vous devriez obtenir un affichage comme celui-ci :

    Enumerating objects: 5, done.
    Counting objects: 100% (5/5), done.
    Delta compression using up to 8 threads
    Compressing objects: 100% (3/3), done.
    Writing objects: 100% (3/3), 292 bytes | 292.00 KiB/s, done.
    Total 3 (delta 2), reused 0 (delta 0)
    remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
    To github.com:chrisdavidmills/content.git
        77215e31e..44b207ef6 test-branch -> test-branch

## Création d'une demande de triage

À ce stade, retournez sur la page github.com de votre dépôt distant. Vous devriez voir un message du type « This branch is 1 commit ahead of mdn:main. ». Ce qui signifie que le contenu de notre bifurcation contient un changement de contenu (commit) que la branche « main » de Mozilla ne contient pas.

1.  Pour envoyer notre modification vers la copie principale du dépôt, nous devons créer une demande de modification. Cela peut être fait facilement en utilisant le bouton "Compare & pull request" que vous devriez voir en haut de la liste des fichiers, une fois que la branche a eu une modification poussée vers elle.

    ![bannière avec le texte test-branch had recent pushes, et un bouton intitulé compare and pull request](compare-and-pull-request.png)

    Appuyez sur ce bouton, et vous devriez obtenir un nouvel écran qui s'affiche comme suit :

    ![un formulaire de demande de triage ouvert, qui comprend des champs de texte pour le titre et la description](open-pull-request.png)

    > **Attention :** Ne suivez le reste de ces étapes que si vous avez une réelle modification à apporter au dépôt ! Veuillez ne pas soumettre de PR de test à nos dépôts.

2.  À ce stade, entrez un titre et une description utiles pour votre PR, en disant exactement ce qu'il a changé, pourquoi c'est une bonne chose, et quel problème connexe il a corrigé, le cas échéant. Plus précisément, incluez une ligne disant `Fixes issue-url`. GitHub rend automatiquement cela comme un lien vers le numéro de problème, par exemple `Fixes #1234` et, en outre, ferme automatiquement le problème connexe une fois que la pull request est fusionnée.
3.  Une fois que vous êtes prêt à envoyer votre pull request, cliquez sur le bouton « Create pull request ». Votre pull request (PR) apparaîtra alors dans la liste « [Pull requests](https://github.com/mdn/content/pulls) » du dépôt, où elle sera examinée par nos équipes de révision et, si possible, fusionnée dans le code principal.

    Si l'équipe de révision souhaite que vous apportiez des modifications, elle vous en informera dans les commentaires du fil de discussion de la demande de triage (vous devriez recevoir une notification par courriel pour vous en informer).

4.  Si vous souhaitez apporter d'autres modifications à la même demande de dépôt que vous avez déjà soumise, vous pouvez le faire en faisant d'autres commits sur la même branche locale et en les poussant ensuite comme expliqué précédemment. Il n'est pas nécessaire de créer une demande de pull complètement nouvelle. **Veuillez simplement vous assurer que vous les faites sur la même branche que précédemment**.

## Dépannage

Le tutoriel ci-dessus vise à vous fournir les bases de Git et de GitHub dont vous aurez besoin pour contribuer aux dépôts GitHub à un niveau de base. Nous espérons qu'il vous a été utile ! Nous aimerions également aborder le fait que, bien qu'étant le système de contrôle de version standard de l'industrie du web, Git a une sorte de réputation mythique/légendaire d'outil péniblement difficile à apprendre et à utiliser.

Nous ne sommes pas sûrs que ce soit tout à fait juste. Git comporte de nombreuses commandes qui sont parfois assez cryptiques dans leur utilisation, et il faut beaucoup de temps pour les maîtriser. Il est également juste de dire que si vous oubliez certaines commandes ou que vous faites les choses dans le mauvais ordre, vous pouvez vous retrouver dans un désordre intéressant dont il est difficile de se sortir. Toutefois, si vous prenez les bonnes habitudes décrites ci-dessus, vous ne devriez pas trop vous tromper. Il convient également de mentionner que Git est beaucoup plus facile à utiliser qu'il y a dix ans.

Cette section sera complétée au fil du temps et comprendra des commandes/séquences utiles pour vous aider à résoudre les problèmes courants.

### Annulation d'une modification que vous avez apportée à un fichier que vous n'avez pas encore ajouté à la liste des commits.

Si vous avez modifié un fichier, mais que vous n'avez pas encore exécuté la commande `git add file-path` pour l'ajouter à la liste des commits, vous pouvez revenir à l'état dans lequel il était lorsque vous avez extrait la branche pour la première fois en exécutant :

```bash
git restore file-path
```

### Suppression d'un fichier de la liste de commit

Si vous avez déjà exécuté la commande `git add file-path` pour ajouter un fichier à la liste de commit, mais que vous voulez maintenant le supprimer de la liste de commit, vous pouvez utiliser la commande :

```bash
git restore --staged file-path
```

### Annuler un commit

Si vous avez soumis la liste de commit en utilisant `git commit -m 'mon message de commit'`, et que vous ne l'avez pas encore poussé, mais que vous vous êtes maintenant rendu compte que vous avez mis quelque chose dedans que vous voulez enlever, vous pouvez inverser votre commit local en utilisant :

```bash
git reset HEAD~1
```

Cela vous ramènera à l'état où les changements de ce commit ne sont pas encore ajoutés à la liste des commits (vous devrez les ajouter à nouveau dans git après avoir résolu le problème). Notez que cela vous ramène à l'état avant que vous ne commitiez quoi que ce soit dans cette session. Cela ne vous aidera pas si vous avez besoin de faire quelque chose de plus complexe, comme revenir sur le commit du milieu d'un ensemble de trois. Nous en resterons là pour cette leçon.

### Inverser un commit qui a été poussé vers la bifurcation distante

À ce stade, il n'est pas vraiment possible de revenir en arrière, ou de rembobiner. Au lieu de cela, vous devez pousser un autre commit pour inverser les effets de celui dont vous voulez vous débarrasser. Vous pourriez le faire manuellement en utilisant certains des outils que nous vous avons déjà donnés ci-dessus, mais il y a une commande intégrée qui rend cela plus facile - `git revert`. Cela peut être utilisé pour créer automatiquement un commit qui rétablit les changements au point que vous spécifiez.

1.  Dans sa forme la plus simple, vous pouvez exécuter la commande suivante pour créer un commit qui ramènera votre branche distante à l'état dans lequel vous étiez avant de commencer à soumettre le commit :

    ```bash
    git revert HEAD
    ```

2.  Cela aura pour conséquence l'ouverture d'un fichier de message de commit dans votre éditeur de texte par défaut que vous devrez vérifier pour vous assurer que vous êtes satisfait. Fermez-le, et git finalisera la création du commit.
3.  Maintenant, il faut juste le pousser :

    ```bash
    git push
    ```

Si vous regardez à nouveau la page github.com de votre bifurcation distante, vous verrez le commit que vous vouliez inverser, plus le commit qui l'inverse.

> **Note :** Une autre façon de se débarrasser de fichiers qui se sont retrouvés dans des demandes de triage que vous ne voulez pas voir figurer est d'utiliser l'interface utilisateur de GitHub. Allez sur la page de votre demande sur github.com, allez dans l'onglet « Files changed », et trouvez le fichier que vous voulez supprimer de la demande. En haut à droite de la boîte du fichier dans la page, il y aura un menu à « trois points » (`...`). Appuyez sur ce bouton et choisissez « Delete file ». Dans la page de confirmation, entrez un titre pour le nouveau commit, assurez-vous que la case « Commit directly... « est cochée, et appuyez sur le bouton « Commit changes ».
>
> C'est généralement une bonne idée de faire en sorte que le reste de la demande de trisage ressemble exactement à ce que vous voulez avant de faire des changements via l'interface utilisateur de GitHub. Si vous faites quelque chose comme ça et que vous devez ensuite faire d'autres changements, vous devrez vous rappeler de tirer les changements que vous avez faits sur votre branche distante vers votre branche locale (par exemple avec `git pull`) avant de pouvoir pousser d'autres commits.

### Vous voulez en voir plus ?

Si vous pensez que ce guide de dépannage devrait contenir plus d'informations, veuillez [créer un ticket](https://github.com/mdn/translated-content/issues/new) pour suggérer ce que vous pensez que nous devrions inclure.

## Voir aussi

- [Apprendre le développement web > Git et GitHub](/fr/docs/Learn/Tools_and_testing/GitHub)
- [Dangit, Git](https://dangitgit.com/en) — autres techniques de dépannage utiles
- [45 Questions sur GitHub : à faire et à ne pas faire](https://hackernoon.com/45-github-issues-dos-and-donts-dfec9ab4b612)
- [Outils CLI GitHub](https://cli.github.com/) — une fois que vous avez l'habitude d'utiliser les commandes de l'interface CLI de GitHub pour contrôler vos dépôts, vous pouvez envisager d'installer l'outil CLI gh de GitHub, qui fournit des commandes pour accélérer un certain nombre des processus mentionnés ci-dessus.
