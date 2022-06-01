---
title: Cours express sur la ligne de commande
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Command_line
tags:
  - CLI
  - Côté client
  - Débutant
  - Outils
  - Terminal
  - ligne de commande
  - npm
translation_of: Learn/Tools_and_testing/Understanding_client-side_tools/Command_line
original_slug: Learn/Tools_and_testing/Understanding_client-side_tools/Ligne_de_commande
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

Au cours de tout process de développement, vous allez très certainement être confronté à la nécessité d'exécuter des commandes dans un terminal (ce que l'on appelle "travailler en ligne de commande"). Cet article vous propose une introduction au terminal et vous dévoile les commandes essentielles dont vous aurez besoin, la façon de les chaîner, et comment ajouter vos propres outils d'interface en ligne de commande (CLI, command line interface).

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        <p>Être familiarisé avec les bases des langages</p>
        <a href="/fr/docs/Learn/HTML">HTML</a>,
        <a href="/fr/docs/Learn/CSS">CSS</a>, et
        <a href="/fr/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        <p>
          Comprendre ce qu'est la ligne de commande, savoir quelles sont les
          commandes de base que vous devriez connaître, et comment installer de
          nouveaux outils de ligne de commande.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Bienvenue sur le terminal

Le terminal est une interface de texte pour l'exécution de programmes qui utilisent un langage lui-même textuel . Quel que soit le type d'outils que vous allez utiliser pour le développement web, il y a de grandes chances que vous soyez amené à travailler en ligne de commande pour les utiliser (vous rencontrerez aussi l'appellation "console" ou encore "CLI tools" pour désigner de tels outils d'interface en ligne de commande).

Il existe de nombreux outils pour travailler en ligne de commande ; certains sont pré-installés sur votre système, et une infinité d'autres sont disponibles sur des dépôts de "paquets" (packages). Ces dépôts sont un peu comme des magasins spécialisés (pour la plupart) dans les outils de ligne de commande et les logiciels. Nous allons voir un peu plus loin dans ce chapitre comment installer certains de ces outils, et nous en apprendrons plus sur les dépôts de paquets dans le prochain chapitre.

L'une des critiques les plus fréquentes envers la ligne de commande, c'est que l'utilisateur courant n'en a pratiquement aucune expérience. Se retrouver devant un terminal pour la première fois peut être vraiment intimidant : un écran vide, un curseur qui clignote, et rien ou presque pour vous aider à en tirer quelque chose.

Malgré cette apparence rebutante, le terminal est pourtant un outil puissant, et nous pouvons vous promettre qu'avec une petite formation et un peu de pratique, son utilisation vous deviendra bien plus facile ! C'est la raison pour laquelle nous vous proposons ce chapitre - pour vous aider à démarrer dans cet environnement apparemment inhospitalier.

.

### Quelle est l'origine du terminal ?

Elle se situe dans les années 50-60, et son aspect d'alors ne ressemble pas du tout à ce que nous connaissons aujourd'hui (heureusement). Vous pouvez en apprendre davantage sur la page de Wikipédia [Terminal (informatique)](<https://fr.wikipedia.org/wiki/Terminal_(informatique)>).

Depuis, le terminal est resté un élément constant de tout système d'exploitation - des ordinateurs de bureau aux serveurs du cloud (qui n'est pas vraiment un nuage) en passant par les micro-cartes comme la Raspberry PI Zero et même les téléphones mobiles. Il offre un accès direct au système de fichiers de l'ordinateur et à des fonctionnalités de bas niveau, ce qui le rend incroyablement apte à accomplir rapidement des tâches complexes, à condition de savoir ce que vous faites.

Il est également utile pour automatiser certaines tâches, comme par exemple modifier les titres de centaines de fichiers instantanément - par exemple changer tous les "ch01-xxxx.png" en "ch02-xxxx.png", ce qui vous prendrait un temps considérable si vous deviez le faire à la main dans la fenêtre d'un gestionnaire de fichiers.

En tous cas, le terminal ne va pas disparaître de si tôt.

### À quoi ressemble un terminal ?

Vous pouvez voir ci-dessous les apparences de quelques terminaux émulés par des programmes courants.

Les images suivantes montrent les invites de commande disponibles sous Windows – il y a une panoplie d'options, du programme « cmd » au « powershell » - qui peuvent être lancées depuis le menu de démarrage en tapant le nom du programme.

![A vanilla windows cmd line window, and a windows powershell window](win-terminals.png)

Et ci-dessous, vous pouvez voir l'application de terminal pour macOS.

![A basic vanilla mac terminal](mac-terminal.png)

### Comment ouvrir un terminal ?

Beaucoup de développeurs se servent aujourd'hui de terminaux de type Unix (c'est-à-dire le terminal en lui-même plus les outils auxquels il donne accès). Beaucoup de tutoriels sur le web sont basés sur ces terminaux Unix qu'ils considèrent (malheureusement) comme universels, mais nous allons voir dans cette section comment ouvrir un terminal sur le système de votre choix.

#### Linux/Unix

Comme indiqué plus haut, les systèmes Linux/Unix disposent d'un terminal par défaut, présent dans vos Applications.

#### macOS

macOS a un système nommé Darwin qui réside sous l'interface graphique. Darwin est un système de type Unix, qui fournit le terminal, et l'accès aux outils de bas niveau. Darwin est dans l'ensemble assez proche d'Unix pour ne pas nous causer trop de problèmes lors de notre progression dans cet article.

Ce terminal est disponible sur macOS dans Applications/Utilitaires/Terminal.

#### Windows

Comme pour d'autres outils de programmation, c'est un peu une tradition pour Windows de ne pas faciliter l'utilisation du terminal (ou ligne de commande) par rapport à d'autres systèmes d'exploitation. Mais les choses s'améliorent.

Traditionnellement aussi, Windows a depuis longtemps eu son propre programme de type « terminal », appelé « cmd » (« l'invite de commande »), mais celui-ci n'est en rien comparable aux commandes Unix, et il est en fait équivalent au programme DOS des temps héroïques.

On trouve malgré tout de meilleurs programmes qui offrent une expérience de terminal sur Windows, tels que Powershell ([voir ici pour l'installer](https://github.com/PowerShell/PowerShell)), et Gitbash (qui fait partie de la trousse à outils [git for Windows](https://gitforwindows.org/)).

Quoi qu'il en soit, aujourd'hui, la meilleure option est le « Windows Subsystem for Linux » (WSL) – une couche de compatibilité qui permet de lancer des systèmes d'exploitation Linux directement dans Windows 10, ce qui vous permet d'avoir un « vrai terminal », sans recourir à une machine virtuelle.

Vous pouvez l'installer gratuitement directement à partir du Windows store. Toute la documentation utile est disponible dans la [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/fr/windows/wsl) .

![a screenshot of the windows subsystem for linux documentation](wsl.png)

Si vous vous demandez quelle option choisir sur Windows, nous vous recommandons vivement de vous décider pour le WSL. Vous pourriez certes vous en tenir à l'invite de commande par défaut (« cmd »), et faire tourner pas mal d'outils correctement, mais tout sera bien plus facile si vous avez une meilleure équivalence avec les outils Unix.

#### En passant, quelle est la différence entre ligne de commande et terminal ?

En général, vous rencontrerez ces deux termes utilisés de façon interchangeable. Techniquement, un terminal (ou console) est un logiciel qui se connecte à un shell au démarrage. Un shell correspond à votre session et à votre environnement de session (où des choses comme l'invite de commande et les raccourcis peuvent être personnalisés). La ligne de commande quant à elle (ou prompt) est la ligne de texte où vous entrez des commandes et où le curseur clignote.

### Est-ce qu'il _faut_ se servir du terminal?

Bien que les outils disponibles à partir de la ligne de commande soient très riches, si vous utilisez des outils tels que [Visual Studio Code](https://code.visualstudio.com/) vous allez avoir accès à une quantité d'extensions que vous pourrez utiliser pour vous aider dans l'édition et vous allez pouvoir vous passer presque complètement du terminal lui-même. Cependant, vous ne pourrez pas trouver une extension sur votre éditeur de code pour tout ce que vous voudrez faire – en définitive, vous devrez malgré tout vous confronter au terminal.

## Les commandes intégrées de base

Assez parlé — voyons maintenant quelques commandes utilisables dans un terminal ! Voici, clés en main, un petit aperçu de tout ce que l'on peut faire en ligne de commande, avec la référence des outils pertinents dans chaque cas :

- Naviguer dans le système de fichiers de votre ordinateur en accomplissant des tâches basiques telles que créer, copier, renommer et effacer :

  - Se déplacer dans l'arborescence des répertoires : `cd`
  - Créer des répertoires : `mkdir`
  - Créer des fichiers (et modifier leurs métadonnées): `touch`
  - Copier des fichiers : `cp`
  - Déplacer des fichiers : `mv`
  - Supprimer des fichiers ou des répertoires : `rm`

- Télécharger des fichiers à partir d'URL spécifiques : `curl`
- Rechercher des fragments de texte dans des parties de texte de taille importante : `grep`
- Afficher le contenu d'un fichier page par page: `less`, `cat`
- Manipuler et transformer des flux de texte (par exemple remplacer toutes les occurrences de `<div>` dans un fichier HTML par `<article>`): `awk`, `tr`, `sed`

> **Note :** On trouve sur le web un bon nombre de tutoriels de qualité qui permettent d'aller beaucoup plus loin avec la ligne de commande — ceci n'est qu'une brève introduction ! L'auteur de ces lignes lui-même a sa propre [série de vidéos de formation au terminal](https://terminal.training/?coupon=mdn) (80% de réduction en utilisant le code mdn au moment du paiement — 19$).

Pour aller plus loin, voyons maintenant comment utiliser quelques-uns de ces outils en ligne de commande. Commencez par ouvrir votre programme de terminal (ou console) !

### Navigation en ligne de commande

Lorsque vous vous mettez sur la ligne de commande, vous allez inévitablement devoir naviguer vers un répertoire spécifique pour y "faire quelque chose". Tous les systèmes d'exploitation (du moins avec un paramétrage par défaut) démarrent leur terminal dans votre répertoire d'utilisateur, et il y a des chances pour que vous souhaitiez vous rendre de là à un autre emplacement.

La commande `cd` vous permet de changer de répertoire (Change Directory). Techniquement, cd n'est pas un programme mais une commande intégrée. Cela signifie que votre système d'exploitation la fournit de façon native, et aussi que vous ne pouvez pas l'effacer accidentellement - bonne nouvelle ! Cela dit, vous n'avez pas besoin de vous soucier de savoir si une commande est intégrée ou non, mais vous pouvez garder à l'esprit que les commandes intégrées sont présentes sur les systèmes basés sur Unix.

Pour changer de répertoire, vous tapez `cd` dans votre terminal, suivi par le répertoire dans lequel vous voulez vous rendre. En supposant que le répertoire (ou dossier) `Desktop` se trouve dans votre répertoire utilisateur, vous allez donc taper `cd Desktop` (voir les copies d'écran ci-dessous).

![results of the cd Desktop command being run in a variety of windows terminals - the terminal location moves into the desktop](win-terminals-cd.png)

Sur un système en langue française, vous trouverez plus fréquemment "Bureau" plutôt que "Desktop". Essayez de taper ceci dans votre terminal système (sur un système en langue anglaise, bien sûr conservez "Desktop") :

```bash
cd Bureau
```

Si vous voulez revenir au répertoire précédent, utilisez les deux points :

```bash
cd ..
```

> **Note :** Raccourci vraiment utile sur un terminal, la touche <kbd>tab</kbd> émule la saisie automatique des mots dont vous connaissez l'existence, ce qui vous évite de les taper en entier. Par exemple, après avoir tapé les deux commandes ci-dessus, essayez de taper `cd B` puis de presser la touche <kbd>tab</kbd> — cela devrait saisir automatiquement le nom de répertoire `Bureau`, à condition qu'il soit présent dans le répertoire courant. Gardez ceci à l'esprit tout en poursuivant.

Si le répertoire que vous visez est placé assez loin dans l'arborisation des fichiers, il vous faut connaître le chemin (on dit souvent path, qui est le terme anglais) pour vous y rendre. Cela devient en général plus facile à mesure que vous vous familiarisez avec la structure de votre système de fichiers, mais si vous n'êtes pas sûr vous pouvez le retrouver en combinant la commande `ls` avec des clicks dans votre Explorer ou autre gestionnaire graphique de fichiers, ce qui va vous permettre de voir où se trouve le répertoire (ou dossier) cherché par rapport à votre répertoire actuel (= répertoire courant).

Par exemple, si vous vouliez aller dans un dossier nommé `src`, qui se trouve dans un dossier nommé `projet`, qui est lui-même sur le `Bureau`, vous pourriez taper ces trois commandes pour y arriver à partir de votre dossier utilisateur :

```bash
cd Bureau
cd projet
cd src
```

Mais c'est une perte de temps — à la place, vous pouvez taper une seule commande, avec les différents éléments du chemin séparés par des slashes, exactement de la même manière que lorsque vous spécifiez les chemins d'accès à des images ou autres assets en CSS, HTML, ou JavaScript :

```bash
cd Bureau/projet/src
```

Notez que si vous commencez le chemin par un slash, vous le rendez absolu, par exemple `/Utilisateurs/votre-nom/Bureau`. Omettre le premier slash comme nous l'avons fait ci-dessus construit un chemin relatif à votre répertoire de travail actuel. C'est exactement la même chose qu'une URL dans un navigateur. Un slash au début signifie "à la racine du site web", alors qu'omettre le slash signifie "l'URL est relative à ma page courante".

> **Note :** Sur windows vous devez utiliser des backslashes et non des slashes, p. ex. `cd Bureau\projet\src` — cela peut vous paraître vraiment étrange, mais si la question vous intéresse, [regardez cette vidéo YouTube](https://www.youtube.com/watch?v=5T3IJfBfBmI) (en anglais) qui présente une explication par l'un des ingénieurs principaux de Microsoft.

### Lister le contenu d'un répertoire

`ls` (de l'anglais list) est la commande intégrée Unix qui va vous permettre de lister le contenu du répertoire dans lequel vous vous trouvez. Notez que cela ne fonctionnera pas avec l'invite de commande par défaut de Windows (`cmd`) — la commande équivalente est `dir`.

Essayez de taper ceci dans votre terminal :

```bash
ls
```

Vous obtenez la liste des fichiers et répertoires de votre répertoire de travail courant, mais l'information est vraiment basique - vous n'avez que les noms des items, sans savoir s'il s'agit d'un fichier, d'un répertoire, ou d'autre chose. Heureusement, une petite modification dans l'utilisation de la commande va vous donner beaucoup plus d'informations.

### Présentation des options de commandes

La plupart des commandes de terminal possèdent des options - ce sont des modificateurs que vous ajoutez à la fin d'une commande pour obtenir un comportement légèrement différent. Il s'agit en général d'un espace suivi d'un tiret puis d'une ou de plusieurs lettres.

Voyez par exemple ce que vous obtenez en essayant ceci :

```bash
ls -l
```

Avec `ls`, l'option `-l` (_tiret l, "dash ell_" en anglais) vous donne une liste avec un fichier ou répertoire par ligne et pas mal d'autres informations. Les répertoires ("directories") sont repérés pas la lettre "d" au tout début de la ligne. Nous pouvons y entrer avec la commande `cd`.

Voici ci-dessous une copie d'écran avec un terminal macOS “vanilla” en haut, et en bas un terminal personnalisé avec quelques icônes supplémentaires et des couleurs pour le rendre plus vivant — les deux affichent le résultat de la commande `ls -l` :

![A vanilla mac terminal and a more colorful custom mac terminal, showing a file listing - the result of running the ls -l command](mac-terminals-ls.png)

> **Note :** Pour savoir exactement quelles sont les options d'une commande, vous pouvez consulter sa [page de manuel](<https://fr.wikipedia.org/wiki/Man_(Unix)>) ([man page](https://en.wikipedia.org/wiki/Man_page) en anglais). Pour cela, tapez la commande `man` suivie du nom de la commande que vous cherchez, par exemple `man ls`. La page de manuel va s'ouvrir dans le lecteur de texte par défaut de votre terminal (par exemple, [`less`](<https://en.wikipedia.org/wiki/Less_(Unix)>) sur mon terminal), et vous allez pouvoir faire défiler la page avec les touches de flèches ou un mécanisme similaire. La page de manuel liste toutes les options de façon très détaillée, ce qui peut être un peu intimidant au début, mais au moins vous savez où les trouver si vous en avez besoin. Lorsque vous avez terminé avec la page de manuel, vous la refermez avec la commande "quitter" de votre visionneur de texte (pour `less` c'est "q" ; si ce n'est pas évident cherchez sur Internet).

> **Note :** Pour lancer une commande avec des options multiples, on peut en général les regrouper dans une seule chaîne de caractères après le tiret, par exemple `ls -lah`, ou `ls -ltrh`. Exercez-vous à consulter la page man de `ls` pour savoir ce que vous donnent ces options !

Maintenant que vous connaissez ces deux commandes fondamentales, allez un peu fouiller dans votre système de fichiers en naviguant à partir de votre répertoire.

### Créer, copier, déplacer, supprimer

Il y existe un certain nombre d'autres commandes d'utilité basique dont vous allez probablement pas mal vous servir en travaillant sur un terminal. Elles sont assez simples, aussi nous n'allons pas les expliquer avec autant de détails que les deux précédentes.

Jouez avec elles dans un répertoire que vous aurez créé quelque part de façon à ne pas effacer accidentellement quoi que ce soit d'important, en vous servant des exemples donnés pour vous guider :

- `mkdir` — crée un nouveau répertoire à l'intérieur du répertoire courant. Par exemple, `mkdir mon-super-site` va créer un nouveau répertoire nommé `mon-super-site`.
- `rmdir` — efface le répertoire dont le nom est passé, mais seulement s'il est vide. Par exemple `rmdir mon-super-site` va supprimer le répertoire que nous avons créé ci-dessus. Si vous voulez supprimer un répertoire qui n'est pas vide (ainsi que tout ce qu'il contient), vous pouvez utiliser l'option `-r` (_recursive_), mais cela est dangereux. Assurez-vous de n'avoir pas besoin plus tard de quelque chose qui se trouverait dans le répertoire, car il aura définitivement disparu.
- `touch` — crée un nouveau fichier vide dans le répertoire courant. Par exemple, `touch mdn-exemple.md` crée un fichier vide nommé `mdn-exemple.md`.
- `mv` — déplace un fichier à partir de l'emplacement spécifié en premier vers celui spécifié en second, par exemple `mv mdn-exemple.md mdn-exemple.txt` (les emplacements sont écrits sous la forme de chemins - _file paths_). Cette commande déplace un fichier nommé `mdn-exemple.md` situé dans le répertoire courant vers une fichier nommé `mdn-exemple.txt` dans le répertoire courant. Techniquement, le fichier est déplacé, mais d'un point de vue pratique, cette commande renomme en fait le fichier.
- `cp` — d'un usage similaire à `mv`, `cp` copie le fichier à l'emplacement spécifié en premier vers celui spécifié en second. Par exemple, `cp mdn-exemple.txt mdn-exemple.txt.bak` crée une copie de `mdn-exemple.txt` nommée `mdn-exemple.txt.bak` (bien entendu vous pouvez la nommer comme vous voulez).
- `rm` — supprimer le fichier spécifié. Par exemple, `rm mdn-exemple.txt` efface un fichier unique nommé `mdn-exemple.txt`. Notez que cet effacement est permanent et ne peut pas être annulé comme lorsque vous placez un fichier dans la corbeille de votre Bureau dans votre interface utilisateur.

> **Note :** Beaucoup de commandes de terminal autorisent l'emploi d'astérisques comme caractère "joker", dont le sens est "une séquence de caractères quelconque". Cela vous permet d'exécuter une commande en une seule fois sur un nombre potentiellement important de fichiers qui correspondent au modèle donné. À titre d'exemple, `rm mdn-*` va effacer tous les fichiers qui commencent par `mdn-`. `rm mdn-*.bak` va effacer tous les fichiers qui commencent par `mdn-` et finissent par `.bak`.

## Le terminal — une pratique à risque ?

Nous y avons déjà fait allusion, et soyons clairs - travailler sur terminal demande de la prudence. Des commandes simples ne présentent pas trop de risques, mais dès que vous commencez à combiner des commandes plus complexes, il vous faut réfléchir soigneusement à ce qu'elle va exécuter, et essayer de la tester avant de la lancer effectivement dans le répertoire voulu.

Supposons que vous ayez 1000 fichiers texte dans un répertoire, et que vous vouliez les parcourir en supprimant uniquement ceux dont le nom comprend une certaine chaîne de caractères. Si vous ne faites pas attention, vous risquez d'effacer quelque chose d'important et de perdre du coup une somme de travail. Une bonne habitude à prendre consiste à écrire votre ligne de commande dans un éditeur de texte, à la construire à votre idée, et ensuite à faire une copie de sauvegarde de votre répertoire avant d'essayer la commande sur celui-ci.

Autre astuce intéressante : si vous n'êtes pas à l'aise avec l'idée d'essayer des lignes de commande sur votre propre machine, le site [Glitch.com](https://glitch.com/) est un bon endroit pour le faire en toute sécurité. En plus d'être un lieu génial pour tester du code de développement web, les projets vous donnent accès à un terminal qui vous permet de lancer toutes les commandes que vous voulez, sans risquer d'endommager votre propre machine.

![a double screenshot showing the glitch.com home page, and the glitch terminal emulator](glitch.png)

Le site [tldr.sh](https://tldr.sh/) est une formidable ressource pour obtenir un aperçu de commandes particulières. C'est un service de documentation géré de façon communautaire, similaire à MDN, mais dédié aux commandes de terminal.

Dans la section suivante, nous allons monter d'un cran (et même de plusieurs), et voir comment nous pouvons combiner plusieurs outils en ligne de commande pour révéler toute la puissance du terminal par rapport à l'interface graphique habituelle.

## Combiner des commandes grâce aux "pipes"

L'usage du terminal prend toute sa valeur lorsque vous commencez à chaîner les commandes en utilisant le symbole `|` ("pipe" ou "tuyau" en français). Voyons comment on peut faire cela sur un exemple très rapide.

Nous avons déjà vu `ls`, qui liste le contenu du répertoire courant :

```bash
ls
```

Mais comment nous y prendre si nous voulons compter le nombre de fichiers et de répertoires à l'intérieur du répertoire courant ? `ls` n'est pas capable de faire cela à lui seul.

Il existe un autre outil Unix nommé `wc`. Celui-ci compte les mots, lignes, caractères, ou octets de la donnée qu'on lui passe, quelle qu'elle soit. Il peut s'agir d'un fichier texte — l'exemple ci-dessous donne le nombre de lignes de `monfichier.txt` :

```bash
wc -l monfichier.txt
```

Mais `wc` est également capable de compter les lignes de tout ce qui lui est passé par un **pipe**. Par exemple, la commande ci-dessous compte les lignes renvoyées par la commande `ls` (lignes qui seraient normalement affichées sur le terminal) et affiche ce décompte à la place :

```bash
ls | wc -l
```

Comme `ls` affiche chaque fichier ou répertoire sur une nouvelle ligne, on obtient bien le compte des répertoires et des fichiers.

Comment ça marche ? Le comportement général des outils de ligne de commande (unix) consiste à afficher du texte dans le terminal (ce qu'on appelle aussi "imprimer sur la sortie standard (standard input)" ou `STDOUT`). Un bon nombre de commandes peuvent aussi lire du contenu à partir d'un flux d'entrée (appelé "entrée standard (standard input)" ou `STDIN`).

L'opérateur pipe peut _connecter_ ces entrées et sorties, ce qui nous permet de construire des opérations de plus en plus complexes selon nos besoins — la sortie d'une commande devient l'entrée de la commande suivante. Dans le cas présent, `ls` enverrait normalement sa sortie sur `STDOUT`, mais au lieu de cela la sortie de `ls` est passée par un pipe à `wc`, qui la prend en entrée, compte ses lignes et imprime ce décompte sur `STDOUT`.

## Un exemple un peu plus complexe

Occupons-nous maintenant de quelque chose d'un peu plus compliqué. Nous allons d'abord essayer de récupérer le contenu de la page MDN "fetch" en utilisant la commande `curl` (dont on peut se servir pour faire une requête de contenu à partir d'URLs), sur [https://developer.mozilla.org/fr/docs/Web/API/fetch](/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch).

En fait, cette URL est celle de l'ancien emplacement de la page. Lorsque vous l'entrez dans un nouvel onglet de votre navigateur, vous êtes (finalement) redirigé sur [https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch](/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch).

Par conséquent, si vous utilisez curl pour faire une requête à https\://developer.mozilla.org/docs/Web/API/fetch, vous n'aurez pas de résultat. Essayez :

```bash
curl https://developer.mozilla.org/fr/docs/Web/API/fetch
```

Nous devons dire explicitement à `curl` de suivre les redirections en utilisant l'option `-L`.

Examinons également les en-têtes retournées par `developer.mozilla.org` en utilisant l'option `-I` de `curl`, et affichons toutes les redirections en passant la sortie de `curl` à `grep` grâce à un pipe (on va demander à `grep` de renvoyer toutes les lignes qui contiennent le mot "location").

Essayez maintenant la ligne suivante, et vous allez constater qu'il y a en fait trois redirections avant d'atteindre la page finale :

```bash
curl https://developer.mozilla.org/docs/Web/API/fetch -L -I | grep location
```

Votre sortie devrait ressembler à ceci (`curl` va d'abord afficher des compteurs et autres informations de téléchargement) :

```bash
location: /fr/docs/Web/API/fetch
location: /fr/docs/Web/API/GlobalFetch/GlobalFetch.fetch()
location: /fr/docs/Web/API/GlobalFetch/fetch
location: /fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

Bien que ce résultat soit artificiel, nous pourrions le pousser un peu plus loin et remplacer `location:` par le nom de domaine, de façon à avoir des URLs complètes. Pour cela, nous allons ajouter `awk` à notre formule (il s'agit d'un langage de programmation tout comme JavaScript, Ruby ou Python, mais beaucoup plus ancien !).

Essayez de lancer cette commande :

```bash
curl https://developer.mozilla.org/docs/Web/API/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
```

Votre sortie finale devrait ressembler à ceci :

```bash
https://developer.mozilla.org/fr/docs/Web/API/fetch
https://developer.mozilla.org/fr/docs/Web/API/GlobalFetch/GlobalFetch.fetch()
https://developer.mozilla.org/fr/docs/Web/API/GlobalFetch/fetch
https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch
```

En combinant ces commandes nous avons personnalisé la sortie pour qu'elle montre les URLs complètes vers lesquels le serveur de Mozilla effectue les redirections lorsque nous lui soumettons la requête pour l'URL `/docs/Web/API/fetch`.
Développer votre connaissance du système en apprenant le fonctionnement de ces simples outils et comment les intégrer à votre arsenal pour résoudre des problèmes bien particuliers - cela vous sera d'une grande utilité tout au long des années à venir.

## Ajoutez des super-pouvoirs !

À présent que nous avons jeté un œil à quelques-unes des commandes intégrées dont votre système est pré-équipé, voyons comment installer un outil tiers de CLI et nous en servir.

La plus grande partie du vaste écosystème d'outils installables pour le développement web front-end se trouve sous [npm](https://www.npmjs.com), un service privé d'hébergement de packages qui fonctionne en étroite interaction avec Node.js. Celui-ci se développe peu à peu — vous pouvez vous attendre à davantage de fournisseurs de packages avec le temps.

[L'installation de Node.js](https://nodejs.org/fr/) installe en même temps l'outil de ligne de commande npm (ainsi que npx, un outil supplémentaire centré sur npm), qui est la porte d'entrée pour l'installation d'outils de ligne de commande additionnels. Node.js et npm fonctionnent de la même façon sur tous les systèmes : macOS, Windows, ainsi que Linux.

Allons-y : installez npm sur votre système à partir de l'URL ci-dessus qui va vous permettre de télécharger et de lancer un installeur Node.js approprié à votre système d'exploitation. Si cela vous est proposé, assurez-vous d'inclure npm dans l'installation.

![the node.js installer on windows, showing the option to include npm](npm-install-option.png)

Un certain nombre d'outils variés vous attendent dans le prochaine article ; pour l'instant nous allons nous faire la main sur [Prettier](https://prettier.io/). Prettier est un outil de formatage de code normatif qui se présente comme ayant "peu d'options". Moins d'options, cela évoque plus de simplicité. Vu comme on peut parfois être débordé par la complexité de certains outils, le concept "peu d'options" peut se révéler très attractif.

### Où installer nos outils de CLI ?

Avant de nous lancer dans l'installation de Prettier, une question se pose — "où allons-nous l'installer ?"

`npm` nous donne le choix entre une installation globale — ce qui nous permet d'y avoir accès de n'importe où — ou bien locale, dans le dossier du projet en cours.

Il y a des pour et des contre pour les deux options — la liste ci-dessous est loin d'être exhaustive:

| Pour l'installation globale                                  | Contre l'installation globale                                                                                                                                                                                  |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accessible partout dans votre terminal                       | Peut ne pas être compatible avec votre codebase.                                                                                                                                                               |
| Installation en une fois                                     | Les autres développeurs de votre équipe n'auront pas accès à ces outils, par exemple si vous partagez votre codebase sur un outil comme git.                                                                   |
| Moins d'espace disque                                        | En lien avec le point précédent, rend le code du projet plus difficile à répliquer (si vous installez vos outils en local, ils peuvent être configurés comme des dépendances et installés avec `npm install`). |
| Stabilité de la version                                      |                                                                                                                                                                                                                |
| Donne l'impression d'être une commande unix comme les autres |                                                                                                                                                                                                                |

Bien que la liste des _contre_ soit plus courte, l'impact négatif d'une installation globale est potentiellement beaucoup plus lourd que les bénéfices. Cela dit, pour l'instant, nous allons choisir l'installation globale dans un but de simplicité. Nous examinerons davantage les installations locales et leur intérêt dans notre prochain article.

### Installation de Prettier

Dans cette partie nous allons installer Prettier en tant qu'utilitaire global de ligne de commande.

Prettier est un outil de formatage de code normatif pour les développeurs front-end, centré sur le langage JavaScript et ses dérivés, avec un support pour HTML, CSS, SCSS, JSON et plus.

Prettier offre les avantages suivants :

- Il épargne la surcharge cognitive que représente le maintien manuel d'une cohérence de style au travers de l'ensemble de vos fichiers de code, en le faisant automatiquement à votre place.
- Il aide les débutants en développement web à formater leur code selon les bonnes pratiques.
- Il peut s'installer sur tout système d'exploitation et même comme partie intégrante des outils du projet, de sorte que les collègues et amis qui travaillent sur votre code utilisent le même style que vous.
- On le peut le configurer pour qu'il s'exécute à la sauvegarde, en cours de frappe, ou encore au moment de publier votre code (grâce à des outils supplémentaires que nous verrons plus loin dans ce module).

Après avoir installé node, ouvrez votre terminal et lancez les commandes suivantes pour installer Prettier :

```bash
npm install --global prettier
```

Lorsque la commande a terminé son exécution, l'outil Prettier est disponible sur sur votre terminal, partout dans votre système de fichiers.

En lançant la commande sans argument, comme pour beaucoup d'autres commandes, vous obtiendrez les informations d'utilisation et d'aide. Essayez :

```bash
prettier
```

La sortie devrait ressembler à ceci :

```bash
Usage: prettier [options] [file/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

…
```

Cela vaut toujours la peine d'au moins survoler les informations sur l'utilisation, même lorsqu'elles sont longues. Vous pourrez ainsi mieux comprendre à quoi l'outil est censé servir.

### Un peu de pratique

Jouons un peu avec Prettier pour que vous puissiez voir comment il fonctionne.

Tout d'abord, créez un nouveau répertoire à un endroit que vous pourrez retrouver facilement, par exemple un répertoire nommé `prettier-test` sur votre `Bureau`.

Ensuite collez le code suivant dans un fichier que vous enregistrez dans ce répertoire sous le nom `index.js.`

```js
const myObj = {
a:1,b:{c:2}}
function printMe(obj){console.log(obj.b.c)}
printMe(myObj)
```

Nous pouvons exécuter prettier sur un code source simplement pour vérifier s'il nécessite une correction. Passez dans votre répertoire avec `cd` et essayez de lancer cette commande :

```bash
prettier --check index.js
```

Vous devriez obtenir quelque chose comme

```bash
Checking formatting...
index.js
Code style issues found in the above file(s). Forgot to run Prettier?
```

Le style nécessite donc des corrections. Pas de problème. On va les appliquer en ajoutant l'option `--write` à la commande prettier, ce qui nous laisse nous concentrer sur l'aspect utile de l'écriture du code.

Essayez maintenant de lancer cette version de la commande :

```bash
prettier --write index.js
```

La sortie ressemble maintenant à ceci

```bash
Checking formatting...
index.js
Code style issues fixed in the above file(s).
```

Mais le plus important, c'est que votre fichier JavaScript a été reformaté :

```js
const myObj = {
  a: 1,
  b: { c: 2 },
};
function printMe(obj) {
  console.log(obj.b.c);
}
printMe(myObj);
```

Vous pouvez intégrer cette opération automatisée à votre workflow. L'intérêt des outils réside justement dans l'automatisation ; personnellement, notre préférence va au type d'automatisme qui se produit de façon transparente, sans qu'aucune configuration soit nécessaire.

Il existe de nombreuses façons de mettre en oeuvre des automatismes avec Prettier, et bien qu'elles dépassent le cadre de cet article, vous trouverez de l'aide dans d'excellentes ressources en ligne, dont certaines grâce aux liens ci-après. Vous pouvez lancer prettier :

- Avant de faire un commit sur un dépôt git en utilisant [Husky](https://github.com/typicode/husky).
- Chaque fois que vous cliquez sur "sauvegarder" dans votre éditeur de code, qu'il s'agisse de [VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), d'[Atom](https://atom.io/packages/prettier-atom), ou de [Sublime Text](https://packagecontrol.io/packages/JsPrettier).
- En tant qu'élément des contrôles continus d'intégration grâce à des outils tels que [Github Actions](https://github.com/features/actions).

Nous préférons personnellement la deuxième solution — quand on code par exemple sur VS Code, Prettier entre en jeu et nettoie le formatage lors de chaque enregistrement. Vous trouverez dans les [Prettier docs](https://prettier.io/docs/en/) beaucoup plus d'informations sur les différentes façons d'utiliser Prettier.

## Autres outils à essayer

Voici une courte liste de quelques outils supplémentaires que vous pouvez vous amuser à tester :

- [`bat`](https://github.com/sharkdp/bat) — Un `cat` plus "beau" (`cat` affiche le contenu d'un fichier) _(NdT : probable jeu de mot en anglais, où cat = chat et bat = chauve-souris)_.
- [`prettyping`](http://denilson.sa.nom.br/prettyping/) — implémentation visuellement améliorée de la commande `ping` (`ping` permet de tester si un serveur répond).
- [`htop`](http://hisham.hm/htop/) — Pour visualiser les processus en cours, ce qui est intéressant lorsque votre ventilateur de CPU se met à faire un bruit de moteur d'avion et que vous souhaitez identifier le programme responsable.
- [`tldr`](https://tldr.sh/#installation) — client tldr (mentionné plus haut dans ce chapitre) en ligne de commande.

L'auteur a aussi [décrit certains de ses favoris](https://remysharp.com/2018/08/23/cli-improved) accompagnés de copies d'écrans si vous avez envie de creuser davantage le sujet.

Notez que certains de ces outils nécessitent l'installation préalable de npm, ainsi que nous l'avons fait pour Prettier.

## Résumé

Nous voilà parvenus au terme de cette brève revue du terminal ou ligne de commande. Dans la suite, nous allons nous pencher plus en détail sur les package managers, et sur les possibilités qu'ils nous offrent.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Overview","Learn/Tools_and_testing/Understanding_client-side_tools/Package_management", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## Dans ce module

- [Client-side tooling overview](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview)
- [Cours express sur la ligne de commande](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Ligne_de_commande)
- [Package management basics](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management)
- [Introducing a complete toolchain](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain)
- [Deploying our app](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment)
