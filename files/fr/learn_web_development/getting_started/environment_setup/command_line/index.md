---
title: Cours express sur l'invite de commande
short-title: Ligne de commande
slug: Learn_web_development/Getting_started/Environment_setup/Command_line
original_slug: Learn/Tools_and_testing/Understanding_client-side_tools/Command_line
l10n:
  sourceCommit: 52a81d8138473b6ac4bec77d0be4261cb0b76d41
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}

Au cours de votre parcours de développement, vous devrez inévitablement exécuter des commandes dans le terminal (ou sur la «&nbsp;ligne de commande&nbsp;» — ces deux termes désignent la même chose). Cet article propose une introduction au terminal, aux commandes essentielles à y saisir, à la façon de chaîner des commandes, et à l'ajout de vos propres outils en ligne de commande (<i lang="en"><abbr title="command line interface">CLI</abbr></i>).

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des logiciels essentiels pour créer un site web, et des systèmes de fichiers.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre ce qu'est une invite de commande et ce que vous pouvez en faire.</li>
          <li>Savoir comment accéder à l'invite de commande sur différents systèmes.</li>
          <li>Connaître les raccourcis clavier de base (par exemple, flèche vers le haut pour accéder aux commandes précédentes, tabulation pour l'autocomplétion).</li>
          <li>Connaître les commandes de base (par exemple <code>cd</code>, <code>ls</code>, <code>mkdir</code>, <code>touch</code>, <code>grep</code>, <code>cat</code>, <code>mv</code>, <code>cp</code>).</li>
          <li>Options et indicateurs de commande.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Bienvenue dans le terminal

Le terminal est une interface textuelle permettant d'exécuter des programmes en ligne de commande. Si vous utilisez des outils pour le développement web, il y a de fortes chances que vous deviez ouvrir l'invite de commande et exécuter quelques instructions pour utiliser vos outils favoris (on parle souvent d'**outils CLI** — ce qui signifie <i lang="en">command line interface</i> en anglais).

De nombreux outils peuvent être utilisés en tapant des commandes dans l'invite de commande&nbsp;: beaucoup sont préinstallés sur votre système, et un grand nombre d'autres sont installables via des registres de paquets.
Les registres de paquets sont comme des boutiques d'applications, mais (principalement) pour des outils et logiciels en ligne de commande.
Nous verrons comment installer certains outils plus loin dans ce chapitre, et nous approfondirons les registres de paquets dans le chapitre suivant.

L'un des reproches majeurs faits à l'invite de commande est son manque d'ergonomie.
Découvrir l'invite de commande pour la première fois peut être intimidant&nbsp;: un écran vide, un curseur clignotant, et très peu d'aide visible.

En apparence, ce n'est pas très accueillant, mais il est possible de faire beaucoup de choses avec, et nous vous promettons qu'avec un peu de pratique et de conseils, son utilisation deviendra plus facile&nbsp;!
C'est pourquoi nous vous proposons ce chapitre&nbsp;: pour vous aider à débuter dans cet environnement qui semble peu convivial.

### D'où vient le terminal ?

Le terminal trouve ses origines dans les années 1950-1960 et sa forme initiale ne ressemble vraiment pas à ce que nous utilisons aujourd'hui (et c'est tant mieux). Vous pouvez en lire un peu plus sur l'histoire sur la page Wikipédia du [Terminal informatique](<https://fr.wikipedia.org/wiki/Terminal_(informatique)>).

Dès lors, le terminal est resté une fonctionnalité constante de tous les systèmes d'exploitation — des ordinateurs de bureau aux serveurs dans le cloud, en passant par les micro-ordinateurs comme le Raspberry Pi Zero, et même les téléphones portables. Il donne un accès direct au système de fichiers sous-jacent et aux fonctionnalités de bas niveau de l'ordinateur, ce qui le rend très utile pour effectuer rapidement des tâches complexes, si vous savez ce que vous faites.

Il est aussi très utile pour l'automatisation — par exemple, pour écrire une commande qui met à jour instantanément le nom de centaines de fichiers, par exemple de «&nbsp;ch01-xxxx.png&nbsp;» à «&nbsp;ch02-xxxx.png&nbsp;». Si vous deviez renommer les fichiers à la main via l'explorateur de fichiers, cela prendrait beaucoup de temps.

Quoi qu'il en soit, le terminal n'est pas près de disparaître.

### À quoi ressemble le terminal ?

Ci-dessous, vous pouvez voir quelques exemples de programmes qui permettent d'accéder à un terminal.

Les images suivantes montrent les invites de commande disponibles sous Windows&nbsp;: il existe plusieurs options, du programme «&nbsp;cmd&nbsp;» à «&nbsp;powershell&nbsp;», que l'on peut lancer depuis le menu Démarrer en tapant le nom du programme.

![Une fenêtre d'invite de commande Windows classique et une fenêtre Windows PowerShell](win-terminals.png)

Et ci-dessous, vous pouvez voir l'application Terminal de macOS.

![Un terminal macOS classique](mac-terminal.png)

### Comment accéder au terminal ?

De nombreux·ses développeur·euse·s utilisent aujourd'hui des outils basés sur Unix (par exemple le terminal, et les outils accessibles via celui-ci). Beaucoup de tutoriels et d'outils disponibles sur le web prennent en charge les systèmes basés sur Unix (et, malheureusement, supposent à tort que tout le monde en utilise un). Mais rassurez-vous&nbsp;: ils sont disponibles sur la plupart des systèmes. Dans cette section, nous allons voir comment accéder au terminal sur le système de votre choix.

#### Linux/Unix

Comme évoqué plus haut, les systèmes Linux/Unix disposent d'un terminal accessible par défaut, généralement listé parmi vos applications.

#### macOS

macOS repose sur un système appelé Darwin, qui se trouve sous l'interface graphique. Darwin est un système de type Unix, qui fournit le terminal et l'accès aux outils de bas niveau. macOS Darwin offre une compatibilité quasi totale avec Unix, largement suffisante pour ne pas poser de problème dans le cadre de cet article.

Le terminal est disponible sur macOS à l'emplacement&nbsp;: `Applications/Utilitaires/Terminal`.

#### Windows

Comme pour d'autres outils de programmation, l'utilisation du terminal (ou de l'invite de commande) sous Windows n'a traditionnellement pas été aussi simple ou intuitive que sur d'autres systèmes d'exploitation. Mais les choses s'améliorent.

Windows propose depuis longtemps son propre programme de type terminal appelé `cmd` («&nbsp;invite de commandes&nbsp;»), mais celui-ci n'est pas compatible avec les commandes Unix et correspond à l'ancien invite DOS de Windows.

Il existe de meilleurs programmes pour offrir une expérience de terminal sous Windows, comme PowerShell ([voir ici pour les installateurs <sup>(angl.)</sup>](https://github.com/PowerShell/PowerShell)), ou Git Bash (inclus dans l'ensemble d'outils [git for Windows <sup>(angl.)</sup>](https://gitforwindows.org/)).

Cependant, la meilleure option aujourd'hui est le <i lang="en">Windows Subsystem for Linux</i> (<abbr>WSL</abbr>) — une couche de compatibilité permettant d'exécuter des systèmes Linux directement dans Windows 10, et donc d'utiliser un «&nbsp;vrai terminal&nbsp;» sous Windows, sans machine virtuelle.

Le WSL peut être installé gratuitement depuis le Microsoft Store. Vous trouverez toute la documentation nécessaire dans la [documentation du sous-système Windows pour Linux](https://learn.microsoft.com/fr-fr/windows/wsl/).

![Capture d'écran de la documentation du Windows Subsystem for Linux](wsl.png)

En ce qui concerne le choix sous Windows, nous vous recommandons vivement d'essayer d'installer le WSL. Vous pouvez vous contenter de l'invite de commandes par défaut (`cmd`), et de nombreux outils fonctionneront correctement, mais tout sera plus simple si vous disposez d'une meilleure compatibilité avec les outils Unix.

#### Remarque : quelle est la différence entre une ligne de commande et un terminal ?

En général, vous verrez ces deux termes utilisés de façon interchangeable. Techniquement, un terminal est un logiciel qui démarre et se connecte à un shell. Un shell correspond à votre session et à son environnement (où l'invite et les raccourcis peuvent être personnalisés). l'invite de commande est la ligne littérale où vous saisissez les commandes et où le curseur clignote.

### Faut-il absolument utiliser le terminal ?

Bien qu'il existe une grande variété d'outils disponibles en ligne de commande, si vous utilisez des outils comme [Visual Studio Code](https://code.visualstudio.com/), il existe aussi de nombreuses extensions qui servent d'intermédiaire pour utiliser des commandes du terminal sans avoir à l'utiliser directement. Cependant, vous ne trouverez pas d'extension pour tout ce que vous souhaitez faire&nbsp;: il vous faudra donc acquérir un peu d'expérience avec le terminal tôt ou tard.

## Commandes de base intégrées au terminal

Assez parlé&nbsp;: voyons quelques commandes du terminal&nbsp;! Voici quelques exemples de ce que l'invite de commande permet de faire, avec les noms des outils concernés&nbsp;:

- Naviguer dans le système de fichiers de votre ordinateur et effectuer des tâches de base comme créer, copier, renommer et supprimer&nbsp;:
  - Se déplacer dans l'arborescence des dossiers&nbsp;: `cd`
  - Créer des dossiers&nbsp;: `mkdir`
  - Créer des fichiers (et modifier leurs métadonnées)&nbsp;: `touch`
  - Copier des fichiers ou dossiers&nbsp;: `cp`
  - Déplacer des fichiers ou dossiers&nbsp;: `mv`
  - Supprimer des fichiers ou dossiers&nbsp;: `rm`

- Télécharger des fichiers à partir d'URL spécifiques&nbsp;: `curl`
- Rechercher des fragments de texte dans de plus grands ensembles&nbsp;: `grep`
- Afficher le contenu d'un fichier page par page&nbsp;: `less`, `cat`
- Manipuler et transformer des flux de texte (par exemple, remplacer tous les `<div>` d'un fichier HTML par `<article>`) : `awk`, `tr`, `sed`

> [!NOTE]
> Il existe de nombreux tutoriels de qualité sur le web qui vont beaucoup plus loin sur l'invite de commande&nbsp;: ceci n'est qu'une brève introduction&nbsp;!

Passons à la pratique et utilisons quelques-uns de ces outils en ligne de commande. Avant d'aller plus loin, ouvrez votre programme de terminal&nbsp;!

### Navigation dans l'invite de commande

Lorsque vous utilisez l'invite de commande, vous devrez inévitablement naviguer vers un dossier particulier pour «&nbsp;faire quelque chose&nbsp;». Tous les systèmes d'exploitation (configuration par défaut) ouvrent le terminal dans votre dossier _Personnel_, et vous souhaiterez probablement vous déplacer ailleurs.

> [!NOTE]
> «&nbsp;Répertoire&nbsp;» est le terme technique pour ce que nous avons appelé «&nbsp;dossier&nbsp;» dans l'article précédent. Lorsque vous regardez la structure des fichiers dans une interface utilisateur, le terme «&nbsp;dossier&nbsp;» est plus parlant, car les icônes ressemblent à des dossiers physiques. Cependant, vous entendrez souvent le terme «&nbsp;répertoire&nbsp;», surtout lorsqu'il s'agit de manipuler des fichiers en ligne de commande. Il y a des nuances, mais les deux termes signifient pratiquement la même chose.

La commande `cd` permet de Changer de Répertoire (<i lang="en">Change Directory</i> en anglais). Techniquement, cd n'est pas un programme mais une commande intégrée. Cela signifie que votre système d'exploitation la fournit par défaut, et que vous ne pouvez pas la supprimer accidentellement — heureusement&nbsp;! Vous n'avez pas à vous soucier de savoir si une commande est intégrée ou non, mais gardez à l'esprit que les commandes intégrées sont présentes sur tous les systèmes basés sur Unix.

1. Pour changer de répertoire, tapez `cd` dans votre terminal, suivi du dossier où vous souhaitez aller. En supposant que le dossier soit dans votre dossier personnel, vous pouvez utiliser `cd Desktop` (voir les captures d'écran ci-dessous).

   ![résultats de la commande cd Desktop dans différents terminaux Windows - le terminal se place dans le dossier Desktop](win-terminals-cd.png)

2. Essayez de taper ceci dans le terminal de votre système&nbsp;:

   ```bash
   cd Desktop
   ```

3. Pour revenir au dossier précédent, vous pouvez utiliser deux points. Tapez ceci maintenant&nbsp;:

   ```bash
   cd ..
   ```

> [!NOTE]
> Un raccourci très utile dans le terminal est d'utiliser la touche <kbd>tab</kbd> pour compléter automatiquement les noms que vous savez présents, plutôt que de tout taper. Par exemple, après avoir tapé les deux commandes ci-dessus, essayez de taper `cd D` puis appuyez sur <kbd>tab</kbd>&nbsp;: cela devrait compléter le nom du dossier `Desktop` pour vous, s'il est présent dans le répertoire courant. Gardez cela en tête pour la suite.

Si le dossier où vous souhaitez aller est imbriqué profondément, vous devez connaître le chemin pour y accéder. Cela devient généralement plus facile à mesure que vous vous familiarisez avec la structure de votre système de fichiers, mais si vous n'êtes pas sûr·e du chemin, vous pouvez généralement le retrouver en combinant la commande `ls` (voir ci-dessous) et en cliquant dans votre explorateur de fichiers pour voir où se trouve un dossier, par rapport à votre position actuelle.

Par exemple, si vous souhaitez aller dans un dossier nommé `src`, situé dans un dossier `projet`, lui-même sur le _Bureau_, vous pourriez taper ces trois commandes depuis votre dossier _Personnel_&nbsp;:

```bash
cd Desktop
cd projet
cd src
```

Mais cela fait perdre du temps — à la place, vous pouvez taper une seule commande, avec les éléments du chemin séparés par des barres obliques, comme lorsque vous indiquez des chemins d'images ou d'autres ressources en CSS, HTML ou JavaScript&nbsp;:

```bash
cd Desktop/projet/src
```

Notez que si vous mettez une barre oblique au début du chemin, il devient absolu, par exemple `/Users/votre-nom-utilisateur/Desktop`. Si vous ne mettez pas la barre oblique, comme ci-dessus, le chemin est relatif à votre répertoire courant. C'est exactement comme pour les URL dans votre navigateur web. Une barre oblique au début signifie «&nbsp;à la racine du site&nbsp;», alors que sans barre oblique, l'URL est relative à la page courante.

> [!NOTE]
> Sous Windows, vous utilisez des antislashs à la place des barres obliques, par exemple&nbsp;: `cd Desktop\projet\src` — cela peut sembler étrange, mais si cela vous intéresse, [regardez ce clip YouTube <sup>(angl.)</sup>](https://www.youtube.com/watch?v=5T3IJfBfBmI) où un ingénieur principal de Microsoft explique pourquoi.

### Lister le contenu d'un répertoire

Une autre commande Unix intégrée est `ls` (pour liste), qui affiche le contenu du dossier où vous êtes. Notez que cela ne fonctionne pas si vous utilisez l'invite de commande Windows par défaut (`cmd`) — l'équivalent est alors `dir`.

Essayez de lancer ceci dans votre terminal&nbsp;:

```bash
ls
```

Cela vous donne la liste des fichiers et dossiers du répertoire courant, mais l'information est très basique — vous n'obtenez que le nom de chaque élément, sans savoir s'il s'agit d'un fichier ou d'un dossier, ni d'autres détails. Heureusement, une petite modification de la commande permet d'obtenir beaucoup plus d'informations.

### Introduction aux options de commande

La plupart des commandes du terminal ont des options — ce sont des modificateurs que vous ajoutez à la fin d'une commande, qui en changent légèrement le comportement. Il s'agit généralement d'un espace après le nom de la commande, suivi d'un tiret, puis d'une ou plusieurs lettres.

Par exemple, essayez ceci et voyez ce que vous obtenez&nbsp;:

```bash
ls -l
```

Dans le cas de `ls`, l'option `-l` (tiret L minuscule) affiche la liste avec un fichier ou dossier par ligne, et beaucoup plus d'informations. Les dossiers peuvent être identifiés par la lettre «&nbsp;d&nbsp;» tout à gauche des lignes. Ce sont ceux dans lesquels vous pouvez faire `cd`.

Ci-dessous, une capture d'écran avec un terminal macOS «&nbsp;vanilla&nbsp;» en haut, et un terminal personnalisé avec des icônes et couleurs supplémentaires — les deux affichant le résultat de `ls -l`&nbsp;:

![Un terminal macOS classique et un terminal macOS personnalisé, affichant une liste de fichiers - résultat de la commande ls -l](mac-terminals-ls.png)

> [!NOTE]
> Pour savoir exactement quelles options chaque commande propose, vous pouvez consulter sa [page de manuel](<https://fr.wikipedia.org/wiki/Man_(Unix)>). Cela se fait en tapant la commande `man`, suivie du nom de la commande à consulter, par exemple `man ls`. Cela ouvrira la page de manuel dans le visualiseur de texte par défaut du terminal (par exemple, [`less`](<https://fr.wikipedia.org/wiki/Less_(Unix)>) dans mon terminal), et vous pourrez alors faire défiler la page avec les flèches, ou un mécanisme similaire. La page de manuel liste toutes les options en détail, ce qui peut être intimidant au début, mais au moins vous savez où chercher si besoin. Une fois la lecture terminée, quittez le visualiseur avec la commande de sortie («&nbsp;q&nbsp;» dans `less`&nbsp;; cherchez sur le web si ce n'est pas évident).

> [!NOTE]
> Pour exécuter une commande avec plusieurs options à la fois, vous pouvez généralement toutes les mettre dans une seule chaîne après le tiret, par exemple `ls -lah` ou `ls -ltrh`. Essayez de regarder la page de manuel de `ls` pour comprendre ce que font ces options supplémentaires&nbsp;!

Maintenant que nous avons vu deux commandes fondamentales, amusez-vous à naviguer dans vos dossiers et voyez si vous pouvez passer d'un endroit à l'autre.

### Créer, copier, déplacer, supprimer

Il existe d'autres commandes utilitaires de base que vous utiliserez probablement souvent avec le terminal. Elles sont assez simples, donc nous ne les détaillerons pas autant que les précédentes.

Testez-les dans un dossier de test que vous aurez créé quelque part pour éviter de supprimer accidentellement quelque chose d'important, en vous inspirant des exemples ci-dessous&nbsp;:

- `mkdir` — crée un nouveau dossier dans le dossier courant, avec le nom que vous indiquez après la commande. Par exemple, `mkdir mon-super-site` crée un dossier nommé `mon-super-site`.
- `rmdir` — supprime le dossier nommé, mais seulement s'il est vide. Par exemple, `rmdir mon-super-site` supprimera le dossier créé ci-dessus. Si vous voulez supprimer un dossier non vide (et tout ce qu'il contient), utilisez `rm -r` à la place (voir ci-dessous), mais c'est dangereux. Assurez-vous qu'il n'y a rien d'important dedans, car tout sera supprimé définitivement.
- `touch` — crée un nouveau fichier vide dans le dossier courant. Par exemple, `touch exemple-mdn.md` crée un fichier vide nommé `exemple-mdn.md`.
- `mv` — déplace un fichier du premier emplacement indiqué vers le second, par exemple `mv exemple-mdn.md exemple-mdn.txt` (les emplacements sont des chemins de fichiers). Cette commande déplace le fichier `exemple-mdn.md` du dossier courant vers un fichier nommé `exemple-mdn.txt` dans le même dossier. Techniquement, le fichier est déplacé, mais en pratique, cela revient à le renommer.
- `cp` — similaire à `mv`, `cp` crée une copie du fichier du premier emplacement vers le second. Par exemple, `cp exemple-mdn.txt exemple-mdn.txt.bak` crée une copie de `exemple-mdn.txt` nommée `exemple-mdn.txt.bak` (vous pouvez bien sûr choisir un autre nom).
- `rm` — supprime le fichier indiqué. Par exemple, `rm exemple-mdn.txt` supprime le fichier `exemple-mdn.txt`. Notez que cette suppression est définitive et ne passe pas par la corbeille de votre interface graphique.

> [!NOTE]
> De nombreuses commandes du terminal permettent d'utiliser des astérisques comme caractères génériques, signifiant «&nbsp;n'importe quelle séquence de caractères&nbsp;». Cela permet d'appliquer une opération à un grand nombre de fichiers à la fois, tous ceux qui correspondent au motif indiqué. Par exemple, `rm mdn-*` supprimera tous les fichiers commençant par `mdn-`. `rm mdn-*.bak` supprimera tous les fichiers commençant par `mdn-` et finissant par `.bak`.

## Terminal — à manier avec précaution ?

Nous l'avons déjà évoqué, mais pour être clair&nbsp;: il faut être prudent avec le terminal. Les commandes simples ne présentent pas trop de risques, mais dès que vous commencez à composer des commandes plus complexes, réfléchissez bien à ce qu'elles vont faire, et testez-les d'abord dans un dossier de test avant de les exécuter dans le dossier voulu.

Supposons que vous ayez 1000 fichiers texte dans un dossier, et que vous vouliez supprimer uniquement ceux dont le nom contient une certaine sous-chaîne de caractères. Si vous n'êtes pas prudent·e, vous pourriez supprimer quelque chose d'important et perdre beaucoup de travail.
Une bonne habitude est d'écrire votre commande dans un éditeur de texte, de réfléchir à sa forme, puis de faire une copie de sauvegarde de votre dossier et de tester la commande dessus.

Si vous n'êtes pas à l'aise pour tester des commandes sur votre propre machine, il existe des terminaux en ligne qui offrent un environnement sûr pour s'entraîner sans risque&nbsp;:

- Notre partenaire d'apprentissage, [Scrimba](https://scrimba.com/home?via=mdn), propose un terminal dans son environnement d'apprentissage. Un bon exemple est leur cours [Command Line Basics <sup>(angl.)</sup>](https://scrimba.com/command-line-basics-c08b87ogl0/~05hu?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>, qui propose une introduction interactive à la navigation dans l'arborescence et à la manipulation de fichiers et dossiers via le terminal.
- Le [Command-line playground <sup>(angl.)</sup>](https://sandbox.bio/playgrounds/terminal) sur sandbox.bio est un bon endroit pour essayer des commandes et se familiariser avec les interfaces en ligne de commande et les shells courants comme Bash.

Une excellente ressource pour avoir un aperçu rapide de commandes spécifiques est [tldr.sh <sup>(angl.)</sup>](https://tldr.sh/). C'est un service de documentation communautaire, similaire à MDN, mais dédié aux commandes du terminal.

Dans la section suivante, nous allons passer à la vitesse supérieure et voir comment enchaîner des outils sur la ligne de commande pour tirer parti du terminal par rapport à l'interface graphique classique.

## Chaîner des commandes avec les pipes

Le terminal prend tout son sens lorsque vous commencez à chaîner des commandes avec le symbole `|` (pipe). Voyons un exemple rapide de ce que cela signifie.

Nous avons déjà vu `ls`, qui affiche le contenu du dossier courant&nbsp;:

```bash
ls
```

Mais si vous voulez compter rapidement le nombre de fichiers et dossiers dans le dossier courant&nbsp;? `ls` ne peut pas le faire seul.

Un autre outil Unix, `wc`, compte le nombre de mots, lignes, caractères ou octets de ce qu'on lui donne en entrée. Cela peut être un fichier texte — l'exemple ci-dessous affiche le nombre de lignes dans `monfichier.txt`&nbsp;:

```bash
wc -l monfichier.txt
```

Mais il peut aussi compter le nombre de lignes de tout ce qu'on lui **passe en pipe**. Par exemple, la commande ci-dessous compte le nombre de lignes affichées par `ls` (ce qu'il afficherait normalement dans le terminal) et affiche ce nombre à la place&nbsp;:

```bash
ls | wc -l
```

Comme `ls` affiche chaque fichier ou dossier sur une ligne, cela donne effectivement le nombre de fichiers et dossiers.

Que se passe-t-il ici&nbsp;? La philosophie générale des outils en ligne de commande (unix) est qu'ils affichent du texte dans le terminal (on parle aussi de «&nbsp;sortie standard&nbsp;» ou `STDOUT`). Beaucoup de commandes peuvent aussi lire du contenu en entrée (appelée «&nbsp;entrée standard&nbsp;» ou `STDIN`).

L'opérateur pipe permet de _connecter_ ces entrées et sorties, pour composer des opérations de plus en plus complexes selon vos besoins — la sortie d'une commande devient l'entrée de la suivante. Ici, `ls` afficherait normalement son résultat dans `STDOUT`, mais il est redirigé vers `wc`, qui prend cette sortie en entrée, compte le nombre de lignes, et affiche ce nombre à la place.

## Un exemple un peu plus complexe

Voyons un exemple un peu plus poussé.

1. Nous allons d'abord essayer de récupérer le contenu de la page «&nbsp;fetch&nbsp;» de MDN avec la commande `curl` (qui permet de demander du contenu à une URL), depuis `https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch`. Essayez&nbsp;:

   ```bash
   curl https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   ```

   Vous n'obtiendrez pas de résultat car la page a été redirigée (vers [/Web/API/fetch](/fr/docs/Web/API/Window/fetch)). Il faut indiquer à `curl` de suivre les redirections avec l'option `-L`.

2. Regardons aussi les en-têtes que renvoie `developer.mozilla.org` avec l'option `-I` de `curl`, et affichons toutes les redirections en les filtrant avec `grep` (nous demanderons à `grep` de retourner toutes les lignes contenant «&nbsp;location&nbsp;»). Essayez la commande suivante (vous verrez qu'il n'y a qu'une seule redirection avant d'arriver à la page finale)&nbsp;:

   ```bash
   curl https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location
   ```

   Votre sortie devrait ressembler à ceci (`curl` affiche d'abord des compteurs de téléchargement, etc.)&nbsp;:

   ```bash
   location: /fr/docs/Web/API/Window/fetch
   ```

3. Même si c'est un peu artificiel, nous pourrions aller plus loin et transformer la ligne `location:` pour ajouter l'origine complète au début, afin d'obtenir des URL complètes. Pour cela, ajoutons `awk` (un langage de programmation proche de JavaScript, Ruby ou Python, mais bien plus ancien&nbsp;!). Essayez&nbsp;:

   ```bash
   curl https://developer.mozilla.org/fr/docs/Web/API/WindowOrWorkerGlobalScope/fetch -L -I | grep location | awk '{ print "https://developer.mozilla.org" $2 }'
   ```

Votre sortie finale devrait ressembler à&nbsp;:

```bash
https://developer.mozilla.org/fr/docs/Web/API/Window/fetch
```

En combinant ces commandes, nous avons personnalisé la sortie pour afficher les URL complètes par lesquelles le serveur Mozilla redirige lorsqu'on demande l'URL `/docs/Web/API/WindowOrWorkerGlobalScope/fetch`.
Apprendre à connaître votre système sera utile pendant des années — comprenez comment ces outils spécialisés fonctionnent et comment ils peuvent devenir des alliés pour résoudre des problèmes spécifiques.

## Ajouter des outils supplémentaires

Maintenant que nous avons vu quelques commandes intégrées à votre système, voyons comment installer un outil CLI tiers et l'utiliser.

Le vaste écosystème d'outils installables pour le développement web front-end existe principalement dans [npm <sup>(angl.)</sup>](https://www.npmjs.com/), un service d'hébergement de paquets privé qui fonctionne avec Node.js.
Cela évolue lentement — vous pouvez vous attendre à voir d'autres fournisseurs de paquets à l'avenir.

[Installer Node.js](https://nodejs.org/fr/) installe aussi l'outil en ligne de commande npm (et un outil complémentaire centré sur npm appelé npx), qui permet d'installer des outils supplémentaires. Node.js et npm fonctionnent de la même façon sur tous les systèmes&nbsp;: macOS, Windows et Linux.

Installez npm sur votre système maintenant, en allant à l'URL ci-dessus et en téléchargeant puis lançant l'installateur Node.js adapté à votre système d'exploitation. Si on vous le demande, veillez à inclure npm dans l'installation.

![l'installateur Node.js sur Windows, montrant l'option pour inclure npm](npm-install-option.png)

Nous allons encore utiliser [Prettier <sup>(angl.)</sup>](https://prettier.io/) comme exemple. Nous avons montré comment l'installer comme extension VS Code dans notre article sur les [éditeurs de code](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors#enhancing_your_code_editor_with_extensions). Ici, nous allons voir comment l'installer en tant qu'outil en ligne de commande.

> [!NOTE]
> Prettier est un formateur de code avec peu d'options. Moins d'options signifie souvent plus de simplicité. Étant donné que les outils peuvent vite devenir complexes, «&nbsp;peu d'options&nbsp;» peut être très appréciable.

### Où installer nos outils CLI&nbsp;?

Avant d'installer Prettier, une question se pose&nbsp;: «&nbsp;où l'installer&nbsp;?&nbsp;»

Avec `npm`, on peut installer les outils globalement — pour y accéder partout — ou localement dans le dossier du projet courant.

Il y a des avantages et inconvénients dans chaque cas — et la liste suivante pour l'installation globale n'est pas exhaustive.

**Avantages de l'installation globale&nbsp;:**

- Accessible partout dans le terminal
- Installation unique
- Moins d'espace disque utilisé
- Toujours la même version
- Fonctionne comme une commande Unix classique

**Inconvénients de l'installation globale&nbsp;:**

- Peut ne pas être compatible avec le code de votre projet
- Les autres membres de l'équipe n'auront pas accès à ces outils, par exemple si vous partagez le code via git.
- En lien avec le point précédent, cela rend le code du projet plus difficile à reproduire (si vous installez vos outils localement, ils peuvent être ajoutés comme dépendances et installés avec `npm install`).

Même si la liste des _inconvénients_ est plus courte, leur impact négatif est potentiellement bien plus important que les avantages.
Ici, nous allons installer localement, mais n'hésitez pas à installer globalement une fois que vous aurez compris les risques.

### Installer Prettier

Prettier est un outil de formatage de code pour les développeur·euse·s front-end, axé sur les langages JavaScript et prenant en charge HTML, CSS, SCSS, JSON, etc.

Prettier peut&nbsp;:

- Vous éviter de devoir uniformiser le style à la main dans tous vos fichiers&nbsp;: Prettier le fait automatiquement.
- Aider les débutant·e·s à formater leur code selon les bonnes pratiques.
- Être installé sur n'importe quel système d'exploitation et même intégré dans les outils du projet, garantissant que vos collègues utilisent le même style de code.
- Être configuré pour s'exécuter à l'enregistrement, à la frappe, ou avant la publication du code (avec des outils complémentaires que nous verrons plus tard).

Pour cet article, nous allons installer Prettier localement, comme suggéré dans le [guide d'installation de Prettier <sup>(angl.)</sup>](https://prettier.io/docs/install.html).

1. Une fois Node installé, ouvrez le terminal et lancez la commande suivante pour installer Prettier (nous expliquerons ce que fait `--save-dev` dans l'article suivant)&nbsp;:

   ```bash
   npm install --save-dev prettier
   ```

2. Vous pouvez maintenant exécuter le fichier localement avec l'outil [npx <sup>(angl.)</sup>](https://docs.npmjs.com/cli/commands/npx/). Lancer la commande sans argument, comme beaucoup d'autres, affiche l'aide et les options. Essayez&nbsp;:

   ```bash
   npx prettier
   ```

Votre sortie devrait ressembler à&nbsp;:

```bash
Usage: prettier [options] [file/glob ...]

By default, output is written to stdout.
Stdin is read if it is piped to Prettier and no files are given.

…
```

Il vaut toujours le coup de parcourir au moins l'aide, même si elle est longue.
Cela vous aidera à mieux comprendre comment utiliser l'outil.

> [!NOTE]
> Si vous n'avez pas installé Prettier localement, lancer `npx prettier` téléchargera et exécutera la dernière version de Prettier juste pour cette commande.
> Cela peut sembler pratique, mais de nouvelles versions de Prettier peuvent modifier légèrement la sortie.
> Il vaut mieux l'installer localement pour fixer la version utilisée jusqu'à ce que vous décidiez de la changer.

### S'amuser avec Prettier

Essayons rapidement Prettier pour voir comment il fonctionne.

1. Créez d'abord un nouveau dossier quelque part sur votre système, facile à retrouver. Par exemple, un dossier `prettier-test` sur votre `Desktop`.

2. Enregistrez le code suivant dans un fichier nommé `index.js` dans ce dossier&nbsp;:

   ```js-nolint
   const monObjet = {
   a:1,b:{c:2}}
   function afficheMoi(obj){console.log(obj.b.c)}
   afficheMoi(monObjet)
   ```

3. On peut lancer Prettier sur un fichier pour vérifier s'il doit être ajusté. Placez-vous dans le dossier et lancez&nbsp;:

   ```bash
   npx prettier --check index.js
   ```

   Vous devriez obtenir&nbsp;:

   ```bash
   Checking formatting...
   index.js
   Code style issues found in the above file(s). Forgot to run Prettier?
   ```

4. Il y a donc des styles à corriger. Pas de souci. Ajoutez l'option `--write` à la commande pour corriger automatiquement, et concentrez-vous sur le code utile. Essayez&nbsp;:

   ```bash
   npx prettier --write index.js
   ```

   Vous verrez&nbsp;:

   ```bash
   Checking formatting...
   index.js
   Code style issues fixed in the above file(s).
   ```

   Mais surtout, si vous regardez votre fichier JavaScript, il aura été reformatté ainsi&nbsp;:

   ```js
   const monObjet = {
     a: 1,
     b: { c: 2 },
   };
   function afficheMoi(obj) {
     console.log(obj.b.c);
   }
   afficheMoi(monObjet);
   ```

Selon votre flux de travail, vous pouvez automatiser ce processus. L'automatisation est là où les outils excellent&nbsp;; notre préférence va à l'automatisation qui «&nbsp;se fait toute seule&nbsp;» sans configuration.

Avec Prettier, il existe plusieurs façons d'automatiser, et même si elles dépassent le cadre de cet article, il existe d'excellentes ressources en ligne (certaines sont déjà citées). Vous pouvez lancer Prettier&nbsp;:

- Avant de valider votre code dans un dépôt git avec [Husky <sup>(angl.)</sup>](https://github.com/typicode/husky).
- À chaque enregistrement dans votre éditeur, que ce soit [VS Code <sup>(angl.)</sup>](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), ou [Sublime Text <sup>(angl.)</sup>](https://packagecontrol.io/packages/JsPrettier).
- Dans le cadre de vérifications d'intégration continue avec des outils comme [GitHub Actions](https://github.com/features/actions).

Notre préférence va à la deuxième option — sous VS Code, Prettier s'exécute et nettoie le formatage à chaque enregistrement. Vous trouverez plus d'informations sur l'utilisation de Prettier dans la [documentation officielle <sup>(angl.)</sup>](https://prettier.io/docs/).

## Autres outils à essayer

Si vous souhaitez tester d'autres outils, voici une courte liste à découvrir&nbsp;:

- [`bat` <sup>(angl.)</sup>](https://github.com/sharkdp/bat) — Un `cat` amélioré (`cat` sert à afficher le contenu des fichiers).
- [`prettyping` <sup>(angl.)</sup>](https://denilson.sa.nom.br/prettyping/) — `ping` en ligne de commande, mais visualisé (`ping` sert à vérifier si un serveur répond).
- [`htop` <sup>(angl.)</sup>](https://htop.dev/) — Un visualiseur de processus, utile pour identifier un programme qui monopolise le processeur.
- [`tldr` <sup>(angl.)</sup>](https://tldr.sh/#installation) — déjà mentionné plus haut, mais disponible aussi en ligne de commande.

Notez que certains de ces outils doivent être installés avec npm, comme nous l'avons fait pour Prettier.

## Résumé

Nous arrivons à la fin de notre tour d'horizon du terminal/ligne de commande, et du module de configuration de l'environnement. La suite vous fera créer votre premier site web simple, pour découvrir le développement web.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Your_first_website", "Learn_web_development/Getting_started/Environment_setup")}}
