---
title: Gérer les fichiers
slug: Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
original_slug: Learn/Getting_started_with_the_web/Dealing_with_files
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}

Un site web est composé de nombreux fichiers&nbsp;: contenu texte, code, feuilles de style, contenus multimédias, etc. Lorsque vous créez un site web, vous devez organiser ces fichiers dans une structure logique sur votre ordinateur, vous assurer qu'ils peuvent communiquer entre eux, et vérifier que tout votre contenu s'affiche correctement avant de les mettre sur un serveur pour qu'ils soient accessibles au monde entier. Cet article explique comment utiliser l'interface utilisateur (<abbr title="User Interface">UI</abbr>) de l'explorateur de fichiers de votre ordinateur et mettre en place une structure de fichiers adaptée pour un site web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation et des logiciels essentiels pour créer un site web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Manipuler des fichiers et des dossiers.</li>
          <li>Bonnes pratiques de nommage.</li>
          <li>Structure standard des dossiers d'un site web.</li>
          <li>Gestion des chemins de fichiers.</li>
          <li>Gestion des extensions de fichiers.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Manipuler des fichiers et des dossiers

Il existe de nombreuses façons de créer et modifier les fichiers et dossiers présents sur votre ordinateur. Vous pouvez le faire via la ligne de commande/le terminal de votre ordinateur à l'aide de commandes texte, ce que vous apprendrez dans l'article suivant. Cependant, beaucoup de personnes trouvent plus simple de commencer à apprendre le système de fichiers de façon visuelle, ce que nous allons aborder ici. Les systèmes d'exploitation modernes disposent d'une interface utilisateur (UI) robuste pour le système de fichiers, que vous pouvez utiliser pour manipuler fichiers et dossiers selon vos besoins.

Sous macOS par exemple, vous disposez du programme Finder&nbsp;:

![L'application Finder de macOS, affichant le contenu d'un dossier Personnel typique](finder.png)

Tandis que Windows propose l'Explorateur de fichiers&nbsp;:

![L'application Explorateur de fichiers de Windows, affichant le contenu d'un dossier Personnel typique](file-explorer.png)

> [!NOTE]
> Ce guide a été rédigé avec Windows 11 et macOS 15. Vous utilisez peut-être une autre version ou un autre système d'exploitation, auquel cas l'expérience peut différer. Il existe de nombreux guides sur le web concernant l'utilisation de base des systèmes d'exploitation — nous vous encourageons à chercher des informations adaptées à votre système.

### Structure de base

La plupart des systèmes d'exploitation modernes possèdent un dossier `Users`, qui contient un dossier pour chaque compte utilisateur existant sur le système, aussi appelé dossier _Accueil_. Celui-ci est généralement représenté par une icône de maison pour le repérer facilement. À son tour, le dossier _Accueil_ contient d'autres dossiers standards importants (et fichiers) propres à cet utilisateur, comme _Documents_, _Musique_, etc. Il existe beaucoup d'autres fichiers et dossiers sur votre ordinateur, mais ne vous en préoccupez pas pour l'instant.

L'utilisateur actuellement connecté ne pourra, par défaut, accéder qu'à son propre dossier _Accueil_.

Vous devriez créer les fichiers de vos projets dans votre dossier _Accueil_, par exemple dans _Documents_. Cela a du sens, car les fichiers de pages web sont souvent appelés _documents_.

> [!WARNING]
> Si vous commencez à créer et modifier des fichiers ailleurs sur votre système (par exemple, dans des zones qui contrôlent le système d'exploitation ou des applications importantes), vous pourriez endommager quelque chose. Limitez-vous à la création et la modification de fichiers dans votre dossier _Accueil_ tant que vous n'êtes pas sûr·e de ce que vous faites.

### Créer un dossier

Créons un nouveau dossier pour stocker tous nos projets web.

1. Dans l'interface de votre système de fichiers, cliquez sur votre dossier _Accueil_, puis double-cliquez sur votre dossier _Documents_.
2. Créez un nouveau dossier à cet emplacement nommé `projets-web`&nbsp;:
   1. Sous Windows, cela se fait en cliquant sur le bouton _Nouveau_ dans la fenêtre de l'Explorateur de fichiers puis en sélectionnant _Dossier_ (ou en appuyant sur <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>N</kbd>), tapez `projets-web` comme nom du nouveau dossier, puis appuyez sur <kbd>Entrée</kbd>.
   2. Sous macOS, sélectionnez _Fichier_ > _Nouveau dossier_ dans le menu du Finder (ou appuyez sur <kbd>Cmd</kbd> + <kbd>Maj</kbd> + <kbd>N</kbd>) — un nouveau dossier nommé _dossier sans titre_ apparaîtra. Cliquez sur le nom du dossier pour le modifier, tapez `projets-web`, puis appuyez sur <kbd>Entrée</kbd>.

Si vous faites une faute de frappe, vous pouvez corriger le nom du dossier (cela fonctionne aussi avec les fichiers)&nbsp;:

- Sous Windows, faites un clic droit sur le dossier, sélectionnez _Renommer_, puis modifiez-le. Certaines versions de Windows affichent d'abord un menu simplifié — il peut être nécessaire de cliquer sur _Afficher plus d'options_, puis _Renommer_.
- Sous macOS, cliquez ou sélectionnez le nom du dossier pour le modifier.

### Ouvrir un dossier de projet et créer des fichiers dans VS Code

Bien que vous puissiez créer des fichiers texte dans l'interface du système de fichiers, il est généralement plus simple et moins source d'erreurs de les créer dans votre éditeur de code. En fait, VS Code dispose de son propre explorateur de fichiers qui vous permet de créer tous les dossiers et fichiers nécessaires à vos projets web.

Pourquoi alors vous avoir fait créer un dossier via l'interface du système&nbsp;? Parce que VS Code doit être pointé vers un dossier racine au départ&nbsp;!

Il est aussi utile de comprendre un peu la structure du système de fichiers de votre OS. Cela deviendra plus utile à mesure que vous utiliserez des outils plus complexes.

Ouvrons maintenant le dossier `projets-web` dans VS Code&nbsp;:

1. Ouvrez VS Code.
2. Sélectionnez _Fichier_ > _Ouvrir un dossier..._ dans le menu.
   > [!NOTE]
   > Si vous préférez le clavier, vous pouvez ouvrir un dossier sous Windows en maintenant <kbd>Ctrl</kbd> et en appuyant sur <kbd>K</kbd> puis <kbd>O</kbd>. Sous macOS, ouvrez la _Palette de commandes_ avec <kbd>Cmd</kbd> + <kbd>Maj</kbd> + <kbd>P</kbd>, tapez «&nbsp;Ouvrir un dossier&nbsp;» pour filtrer la liste, utilisez les flèches pour sélectionner _Fichier&nbsp;: Ouvrir un dossier_, puis appuyez sur <kbd>Entrée</kbd>.
3. Une mini-version de l'interface du système de fichiers apparaît. Utilisez-la pour trouver votre dossier `projets-web`, sélectionnez-le, puis cliquez sur le bouton _Sélectionner un dossier_.
4. Une boîte de dialogue intitulée _Faites-vous confiance aux auteur·ice·s des fichiers de ce dossier&nbsp;?_ s'affiche. Lisez-la attentivement pour comprendre de quoi il s'agit. Pour l'instant, vous êtes la seule personne à créer des fichiers dans ce dossier, vous pouvez donc cliquer sur _Oui, je fais confiance aux auteur·ice·s_.

Vous devriez voir votre dossier `projets-web` ouvert dans le panneau _EXPLORER_ de VS Code, comme ci-dessous&nbsp;:

![Le panneau Explorer de VS Code, affichant un dossier vide nommé projets-web](vs-code-explorer.png)

> [!WARNING]
> Encore une fois, veillez à n'éditer que vos propres fichiers dans votre dossier _Accueil_ pour éviter tout problème avec votre système.

#### À propos de la navigation clavier dans VS Code

VS Code, bien que perfectible, propose de nombreux raccourcis clavier. Nous avons essayé d'en inclure quelques-uns dans cet article, mais vous trouverez des listes plus complètes dans la [référence des raccourcis clavier de VS Code <sup>(angl.)</sup>](https://code.visualstudio.com/docs/configure/keybindings).

En général, pour naviguer dans VS Code au clavier, appuyez sur <kbd>Tab</kbd> pour passer d'une zone de l'interface à une autre (<kbd>Maj</kbd> + <kbd>Tab</kbd> permet de revenir en arrière). S'il y a plusieurs boutons dans une zone, utilisez les flèches pour passer de l'un à l'autre.

Si vous éditez un fichier, la touche Tab ajoute une tabulation dans le fichier. Pour passer du fichier en cours au panneau _EXPLORER_, appuyez sur <kbd>Cmd</kbd> + <kbd>Maj</kbd> + <kbd>E</kbd> sous macOS, ou <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>E</kbd> sous Windows.

Pour revenir à l'éditeur de fichiers et naviguer entre les onglets ouverts, maintenez <kbd>Ctrl</kbd> et utilisez <kbd>Tab</kbd> et <kbd>Maj</kbd> + <kbd>Tab</kbd> pour monter ou descendre dans la liste des onglets (sous macOS et Windows). Une fois le fichier voulu sélectionné, relâchez les touches pour y accéder.

#### Créer un fichier

À partir d'ici, vous pouvez créer de nouveaux fichiers et dossiers avec les boutons correspondants en haut du panneau _EXPLORER_.

1. Créez un nouveau fichier en cliquant sur l'icône _Nouveau fichier..._ (ou <kbd>Tab</kbd> jusqu'à elle puis <kbd>Entrée</kbd>).
2. Entrez le nom du fichier «&nbsp;index.html&nbsp;» dans la zone de saisie, puis appuyez sur <kbd>Entrée</kbd>.

> [!NOTE]
> N'utilisez pas les boutons en haut de l'onglet _Bienvenue_ pour créer des fichiers ou dossiers, ils fonctionnent différemment. Vous pouvez fermer l'onglet _Bienvenue_, il n'est pas utile. Cliquez sur le «&nbsp;x&nbsp;» à droite de l'onglet, ou appuyez sur <kbd>Cmd</kbd> + <kbd>W</kbd> sous macOS (<kbd>Ctrl</kbd> + <kbd>W</kbd> sous Windows).

À ce stade, retournez dans l'interface de votre système de fichiers, ouvrez le dossier `projets-web` en double-cliquant dessus, et vous devriez y voir le fichier `index.html`. VS Code utilise le système de fichiers sous-jacent, il n'utilise pas un système de fichiers à part.

### Déplacer index.html dans son propre sous-dossier

Vous pouvez créer des dossiers à l'intérieur d'autres dossiers (appelés _sous-dossiers_) sur autant de niveaux que vous le souhaitez. Vous pouvez aussi déplacer des fichiers (et dossiers) dans d'autres dossiers en les faisant glisser dessus.

Explorons cela, et profitons-en pour déplacer notre fichier `index.html` dans son propre sous-dossier. Nous ne voulons pas qu'il reste à la racine de `projets-web`.

1. Créez un nouveau dossier dans `projets-web` avec le bouton _Nouveau dossier..._ du panneau _EXPLORER_ de VS Code.
2. Nommez-le `test-site`.
3. Vous devriez maintenant pouvoir faire glisser le fichier `index.html` et le déposer sur le dossier `test-site` pour le déplacer à l'intérieur.
   > [!NOTE]
   > Si vous préférez le clavier, procédez ainsi&nbsp;:
   >
   > 1. Utilisez les flèches pour placer le focus sur le fichier `index.html`.
   > 2. Appuyez sur <kbd>Cmd</kbd> + <kbd>X</kbd> sous macOS (<kbd>Ctrl</kbd> + <kbd>X</kbd> sous Windows) pour couper le fichier.
   > 3. Utilisez les flèches pour placer le focus sur le dossier.
   > 4. Appuyez sur <kbd>Cmd</kbd> + <kbd>V</kbd> sous macOS (<kbd>Ctrl</kbd> + <kbd>V</kbd> sous Windows) pour coller le fichier dans ce dossier.

Il y aurait beaucoup à dire sur l'utilisation des interfaces de systèmes de fichiers et de VS Code, mais nous manquons de place. Vous avez maintenant assez d'informations pour commencer, et nous vous encourageons à chercher sur le web comment faire d'autres manipulations de fichiers et dossiers.

Passons à une brève discussion sur la structure d'un site web.

## Quelle structure pour un site web ?

Lorsque vous travaillez sur des sites web en local (sur votre ordinateur), vous devez regrouper tous les fichiers liés à chaque site dans un seul dossier. À leur tour, tous vos dossiers de sites web doivent être placés dans un dossier central, pour les retrouver facilement.

Plus haut, nous vous avons demandé de créer un dossier central nommé `projets-web` pour stocker tous vos projets web. Nous vous avons aussi fait créer un sous-dossier `test-site` avec un fichier `index.html` vide à l'intérieur.

Ajoutons d'autres éléments dans `test-site` pour illustrer une structure typique de site web&nbsp;; dans le prochain module, vous construirez un exemple complet à l'intérieur. Les éléments les plus courants dans un projet web sont un fichier HTML index et des dossiers pour les images, les styles et les scripts&nbsp;:

1. **`index.html`**&nbsp;: Ce fichier contiendra généralement le contenu de votre page d'accueil, c'est-à-dire le texte et les images visibles lors de la première visite du site.
2. **Dossier `images`**&nbsp;: Ce dossier contiendra toutes les images utilisées sur votre site.
3. **Dossier `styles`**&nbsp;: Ce dossier contiendra le code CSS utilisé pour styliser votre contenu (par exemple, couleurs de texte et de fond).
4. **Dossier `scripts`**&nbsp;: Ce dossier contiendra tout le code JavaScript utilisé pour ajouter des fonctionnalités interactives à votre site (par exemple, définir ce qui se passe lors d'un clic sur un bouton).

Vous devriez déjà avoir un fichier `index.html` dans `test-site`. Créez maintenant les dossiers `images`, `styles` et `scripts` à l'intérieur.

## Noms de fichiers

Un nom de fichier comporte généralement deux parties — le **nom** et l'**extension**. Prenons le fichier créé plus haut — `index.html`&nbsp;:

- Le nom ici est `index`. Les noms de fichiers peuvent en général contenir les caractères que vous voulez, mais chaque système impose des restrictions. Il vaut mieux se limiter aux lettres et chiffres au début. De plus, certains systèmes donnent une signification particulière à certains noms ou parties de noms — comme déjà dit, les fichiers `index` sont souvent reconnus comme la page d'accueil d'un site.
- L'extension identifie le type de fichier, et sert au système à savoir quel contenu attendre, quel programme utiliser pour l'ouvrir, etc. Ici, l'extension est `.html`, ce qui signifie que le fichier doit contenir du texte brut, et plus précisément du code HTML. Grâce à l'extension, votre ordinateur sait qu'il doit ouvrir ce fichier avec votre éditeur de texte par défaut, qui devrait être VS Code si vous avez suivi nos instructions.

Ce n'est pas toujours vrai, mais la plupart des fichiers ont besoin d'une extension pour être gérés correctement. Supprimer ou modifier l'extension risque de provoquer des erreurs, donc ne le faites que si vous savez ce que vous faites.

> [!NOTE]
> Il est possible de mettre plusieurs points dans un nom de fichier, par exemple `mes.chats.html`. Dans ce cas, le dernier point marque le début de l'extension.

Sous Windows, il se peut que vous ne voyiez pas les extensions de certains fichiers, car l'option **Masquer les extensions des types de fichiers connus** est activée par défaut. Vous pouvez la désactiver dans l'Explorateur de fichiers, en allant dans **Options de l'Explorateur de fichiers…**, en décochant **Masquer les extensions des types de fichiers connus**, puis en cliquant sur **OK**. Pour plus de détails selon votre version de Windows, cherchez sur le web.

### Bonnes pratiques pour nommer les fichiers

Dans ce cours, vous remarquerez que nous vous demandons toujours de nommer dossiers et fichiers en minuscules, sans espaces. Ignorer ce conseil peut poser de nombreux problèmes, dont voici quelques exemples&nbsp;:

1. De nombreux systèmes, y compris la plupart des serveurs web, sont sensibles à la casse. Par exemple, si vous placez une image sur votre site à `test-site/images/MaPhoto.jpg` et que dans un autre fichier vous la référencez comme `test-site/images/maphoto.jpg`, cela risque de ne pas fonctionner.
2. Lorsque vous utilisez la ligne de commande, il faut mettre des guillemets autour des noms de fichiers contenant des espaces, sinon ils seront interprétés comme plusieurs éléments distincts.
3. Certains langages de programmation (par exemple Python) gèrent mal les espaces dans les noms de fichiers dans certains cas (par exemple, si ces fichiers sont des modules à importer).
4. Les noms de fichiers sont souvent utilisés dans les adresses web/URL. Si, par exemple, vous avez un fichier nommé `ma page.html` à la racine de votre serveur, il sera généralement accessible à l'URL `https://exemple.fr/ma%20page.html`. Les serveurs remplacent les espaces par `%20` (car les URL sont {{Glossary("Percent-encoding", "pourcent-encodées")}}), ce qui peut causer des bugs subtils si certains systèmes supposent que les noms de fichiers et d'URL correspondent parfaitement.

À la place des espaces, beaucoup de développeur·euse·s utilisent un séparateur comme le tiret (`-`) — par exemple `ma-page.html` plutôt que `ma page.html`. C'est une bonne pratique.

Il vaut mieux prendre l'habitude d'écrire les noms de dossiers et fichiers en minuscules, sans espaces, et avec des mots séparés par des tirets, au moins au début. Vous aurez ainsi moins de problèmes par la suite.

> [!NOTE]
> Vous trouverez d'autres bonnes pratiques sur les noms de fichiers et d'URL dans les [bonnes pratiques de structure d'URL de Google](https://developers.google.com/search/docs/crawling-indexing/url-structure?hl=fr).

## Chemins de fichiers

Pour référencer un fichier depuis un autre, il faut fournir un chemin — c'est-à-dire une route, pour qu'un fichier sache où se trouve un autre. Par exemple, pour afficher une image dans une page web, votre code devra contenir un chemin indiquant l'emplacement de l'image à afficher.

Voyons un exemple simple. Vous ne comprendrez peut-être pas tout pour l'instant, ce n'est pas grave.

1. Cherchez une image sur le web (par exemple via [Google Images](https://www.google.com/imghp)) et téléchargez-la. Vous pouvez aussi utiliser notre [icône Firefox](https://raw.githubusercontent.com/mdn/beginner-html-site/refs/heads/main/images/firefox-icon.png) pour cet exemple.
2. Placez l'image dans votre dossier _images_.
3. Assurez-vous que le nom du fichier image est court et simple, sans espaces. Par exemple, `firefox-icon.png` ou `chat.jpg` conviennent, mais `efregre^%^£$£@%$^&YTJgfbgfdgt54656756_ertgrth-rtgtfghhyj.png` non. Veillez aussi à conserver l'extension.

Nous allons maintenant ajouter du contenu au fichier `index.html` pour qu'il localise et affiche l'image.

1. Ouvrez `index.html` dans VS Code, et insérez le contenu suivant exactement comme ci-dessous. Il s'agit de HTML, le langage utilisé pour structurer le contenu des pages web. Vous en apprendrez beaucoup plus très bientôt&nbsp;!

   ```html
   <!doctype html>
   <html lang="fr">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Ma page de test</title>
     </head>
     <body>
       <img src="" alt="Mon image de test" />
     </body>
   </html>
   ```

2. La ligne `<img src="" alt="Mon image de test">` est le code HTML qui insère une image dans la page. Il faut indiquer à HTML où se trouve l'image. L'image est dans le dossier _images_, qui est au même niveau que `index.html`. Pour descendre dans la structure depuis `index.html` jusqu'à l'image, le chemin à utiliser est `images/nom-de-votre-image`. Par exemple, si votre image s'appelle `firefox-icon.png`, le chemin sera `images/firefox-icon.png`.
3. Insérez ce chemin dans votre code HTML entre les guillemets de `src=""`.
4. Enregistrez votre fichier HTML, puis ouvrez-le dans votre navigateur web. Pour cela, faites un clic droit sur le fichier HTML, choisissez _Ouvrir avec_ et sélectionnez un navigateur. Vous pouvez aussi ouvrir l'interface de votre système de fichiers et une fenêtre de navigateur côte à côte, puis glisser-déposer le fichier HTML dans la fenêtre du navigateur.

Vous devriez voir une page web basique affichant votre image&nbsp;!

![Capture d'écran de notre site web de base affichant juste le logo Firefox - un renard enflammé entourant le globe](website-screenshot.png)

### Règles générales pour les chemins de fichiers

- Pour lier un fichier cible situé dans le même dossier que le fichier HTML appelant, utilisez simplement le nom du fichier, par exemple `mon-image.jpg`.
- Pour référencer un fichier dans un sous-dossier, écrivez le nom du dossier suivi d'une barre oblique, par exemple `sousdossier/mon-image.jpg`.
- Pour lier un fichier cible dans le dossier **parent** du fichier HTML appelant, écrivez deux points. Par exemple, si `index.html` est dans un sous-dossier de `test-site` et que `mon-image.jpg` est dans `test-site`, vous pouvez référencer `mon-image.jpg` depuis `index.html` avec `../mon-image.jpg`.
- Vous pouvez combiner ces règles autant que nécessaire, par exemple `../sousdossier/autre-sousdossier/mon-image.jpg`.

> [!NOTE]
> Le système de fichiers Windows utilise généralement des antislashs, pas des barres obliques, par exemple `C:\Windows`. Cela n'a pas d'importance en HTML — même si vous développez sous Windows, utilisez toujours des barres obliques dans votre code.

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup/Command_line", "Learn_web_development/Getting_started/Environment_setup")}}
