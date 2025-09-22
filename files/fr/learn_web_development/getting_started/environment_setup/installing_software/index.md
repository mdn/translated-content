---
title: Installation des outils de base
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
original_slug: Learn/Getting_started_with_the_web/Installing_basic_software
l10n:
  sourceCommit: f1d0f645561a3658f896d2e0f0c670686c949492
---

{{LearnSidebar}}{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

Dans cet article, nous verrons les outils nécessaires pour commencer le développement web et comment les installer.

## Quels outils sont nécessaires pour le moment&nbsp;?

Dans cet article, nous prendrons uniquement le bagage minimum&nbsp;: un éditeur de texte, ainsi que des navigateurs web récents.

### Installer un éditeur de texte

Vous disposez sans doute déjà d'un éditeur de texte basique sur votre ordinateur. Par défaut, Windows inclut [Bloc-notes](<https://fr.wikipedia.org/wiki/Bloc-notes_(Windows)>), et macOS inclut [TextEdit](https://fr.wikipedia.org/wiki/TextEdit). Pour les distributions Linux, cela peut varier d'une à l'autre, par exemple Ubuntu 22.04 permet d'utiliser [l'éditeur de texte GNOME](https://en.wikipedia.org/wiki/GNOME_Text_Editor) par défaut.

Pour le développement web, Notepad ou TextEdit seront certainement limités. Nous vous recommandons de démarrer avec [Visual Studio Code](https://code.visualstudio.com/), un éditeur gratuit et <i lang="en">open source</i> qui permet des prévisualisations en direct et qui fournit des indications pour la complétion du code.

### Installer des navigateurs web récents

Pour le moment, nous allons installer quelques navigateurs de bureau dans lesquels nous pourrons tester notre code. Sélectionnez votre système d'exploitation et utilisez les liens associés pour télécharger les installeurs des navigateurs les plus répandus&nbsp;:

- Génériques (Linux, Windows, macOS)
  - [Firefox](https://www.mozilla.org/fr/firefox/new/)
  - [Chrome](https://www.google.com/chrome/)
  - [Opera](https://www.opera.com/)
  - [Brave](https://brave.com)
- Windows
  - [Edge](https://www.microsoft.com/edge) (Edge est préinstallé par défaut sur Windows 10 et 11)
- macOS
  - [Safari](https://www.apple.com/safari/) (Safari est présent par défaut sur macOS et iOS)

Avant d'aller plus loin, installez au moins deux navigateurs différents afin de pouvoir tester vos sites ou applications web avec.

### Installer un serveur web local

Pour que certains exemples fonctionnent correctement, il vous faudra avoir mis en place un serveur web local. Pour cela, vous pouvez consulter l'article [Comment configurer un serveur de test local&nbsp;?](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)

## Quels outils sont nécessaires pour du développement web professionnel&nbsp;?

La liste ci-après peut sembler longue, mais il est tout à fait possible de se lancer dans du développement web sans pour autant connaître dans les détails ce qui suit.

- Un ordinateur
  - : Si vous lisez cet article depuis un téléphone ou l'ordinateur d'une bibliothèque, sachez qu'il est préférable de disposer d'un ordinateur (de bureau ou portable) sous Linux, Windows ou macOS pour le développement web.
- Un éditeur de texte
  - : Un logiciel qui vous permettra d'écrire votre code. Il peut s'agir d'un éditeur de texte (comme [Visual Studio Code](https://code.visualstudio.com/), [Notepad++](https://notepad-plus-plus.org/), [Sublime Text](https://www.sublimetext.com/), [Pulsar](https://pulsar-edit.dev), [GNU Emacs](https://www.gnu.org/software/emacs/), ou [VIM](https://www.vim.org/)), ou d'un éditeur hybride (comme [Dreamweaver](https://www.adobe.com/fr/products/dreamweaver.html) ou [WebStorm](https://www.jetbrains.com/webstorm/)). Les éditeurs de texte graphiques comme Office Word ne doivent pas être utilisés, car ils ne permettent pas d'enregistrer des fichiers texte simple et contiennent des éléments qui interfèrent avec les moteurs de rendu des navigateurs web.
- Des navigateurs web
  - : Les navigateurs vous permettront de tester votre code. Les navigateurs les plus répandus sont [Firefox](https://www.mozilla.org/fr/firefox/new/), [Chrome](https://www.google.com/chrome/), [Safari](https://www.apple.com/safari/), [Edge](https://www.microsoft.com/edge). Il est également recommandé de tester votre site sur des appareils mobiles et sur d'éventuels anciens navigateurs qui seraient utilisés par votre public. [Lynx](https://lynx.browser.org/) est un navigateur web texte, qui s'affiche dans un terminal, et qui permet de voir comment le site peut être utilisé par les personnes en situation de handicap visuel.
- Un éditeur graphique
  - : [GIMP](https://www.gimp.org/), [Figma](https://www.figma.com/), [Paint.NET](https://www.getpaint.net/), [Photoshop](https://www.adobe.com/products/photoshop.html), [Sketch](https://www.sketch.com) ou [XD](https://www.adobe.com/products/xd.html) vous permettent d'éditer des images pour les visuels de vos pages web.
- Un système de gestion de version
  - : Qu'il s'agisse de travailler en équipe sur les mêmes fichiers, d'avoir un serveur de stockage, de partager du code ou d'éviter les conflits de version, vous devrez utiliser un outil de gestion de version. [Git](https://git-scm.com/) est le plus répandu aujourd'hui, et permet d'utiliser des plateformes d'hébergement comme [GitHub](https://github.com/) ou [GitLab](https://about.gitlab.com/).
- Un client (S)FTP
  - : Certains hébergeurs vous permettent de téléverser vos fichiers web via (S)FTP (même si [Git](https://git-scm.com/) tend à remplacer (S)FTP). Il existe de nombreux clients (S)FTP comme [Cyberduck](https://cyberduck.io/), [Fetch](https://fetchsoftworks.com/), [WinSCP](https://winscp.net/eng/docs/lang:fr), et [FileZilla](https://filezilla-project.org/).
- Un système d'automatisation
  - : Des systèmes comme [Webpack](https://webpack.js.org/), [Grunt](https://gruntjs.com/), ou [Gulp](https://gulpjs.com/) vous permettront d'automatiser certaines tâches répétitives comme la minification du code et le lancement des tests.
- Bibliothèques et <i lang="en">frameworks</i>
  - : Ces outils vous permettront de gagner en efficacité pour implémenter les fonctionnalités les plus communes. Une bibliothèque prendra généralement la forme d'un fichier JavaScript ou CSS qui fournit une fonctionnalité prête à l'usage que vous pouvez inclure dans votre code. Un <i lang="en">framework</i> va plus loin et fournit un système complet, avec une surcouche spécifique dans laquelle vous pouvez écrire votre application web.

Cette liste n'est pas exhaustive, il existe de nombreux autres outils qui pourront vous être utiles.

{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}
