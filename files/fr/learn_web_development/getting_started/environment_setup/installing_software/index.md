---
title: Installation des outils de base
short-title: Installation des outils
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
original_slug: Learn/Getting_started_with_the_web/Installing_basic_software
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

Dans cet article, nous abordons les logiciels nécessaires pour faire du développement web simple et ce que vous devez installer dès maintenant, notamment un éditeur de code et quelques navigateurs web modernes.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre quels logiciels sont nécessaires pour débuter.</li>
          <li>Installer un éditeur de code, des navigateurs modernes et un serveur de test local.</li>
          <li>Explorer les options pour d'autres types d'applications courantes.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Éditeurs de code

Un bon éditeur de code est l'un des outils les plus importants pour tout·e développeur·euse. En plus d'être l'endroit où vous écrivez votre code, les éditeurs de code offrent de nombreuses autres fonctionnalités. Nous avons consacré un article entier aux éditeurs de code plus loin dans la série.

Pour l'instant, nous vous recommandons d'installer [Visual Studio Code <sup>(angl.)</sup>](https://code.visualstudio.com/), car il est disponible sur différentes plateformes, dispose d'un excellent ensemble de fonctionnalités et d'un bon support, et c'est l'éditeur que nous utilisons principalement. Installez-le dès maintenant pour pouvoir suivre le reste de cet article.

## Navigateurs web modernes

Disposer de navigateurs web modernes est essentiel pour le développement web afin de pouvoir tester vos sites ou applications sur les navigateurs que vos visiteur·euse·s utiliseront. Il est aussi important de garder vos navigateurs à jour pour qu'ils prennent en charge les dernières technologies web et bénéficient des correctifs de sécurité les plus récents.

Les navigateurs les plus courants sont les suivants&nbsp;:

- Navigateurs de bureau&nbsp;:
  - Chromium&nbsp;: [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/fr/opera), [Brave](https://brave.com/fr/download/), [Microsoft Edge](https://www.microsoft.com/fr-fr/edge), [Vivaldi](https://vivaldi.com/fr/).
  - Gecko&nbsp;: [Mozilla Firefox](https://www.firefox.com/fr/).
  - WebKit&nbsp;: [Apple Safari](https://www.apple.com/fr/safari/).
- Navigateurs mobiles/alternatifs&nbsp;:
  - Chromium (Android)&nbsp;: [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/fr/opera), [Brave](https://brave.com/fr/download/), [Microsoft Edge](https://www.microsoft.com/fr-fr/edge/mobile), [Samsung Internet](https://www.samsung.com/fr/apps/samsung-internet/), [Vivaldi](https://vivaldi.com/fr/android/).
  - Gecko (Android)&nbsp;: [Mozilla Firefox](https://www.firefox.com/fr/browsers/mobile/android/).
  - WebKit (iOS)&nbsp;: [Apple Safari](https://www.apple.com/fr/safari/).
    > [!NOTE]
    > La plupart des navigateurs Android listés ci-dessus ont des versions iOS, mais elles étaient historiquement toutes basées sur le moteur WebKit d'Apple à cause des règles de l'App Store. Au moment de la rédaction, les navigateurs commencent à proposer des versions iOS basées sur leur propre moteur de rendu, suite à des évolutions réglementaires. Voir [Apple autorise enfin les versions complètes de Chrome et Firefox sur iPhone <sup>(angl.)</sup>](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu).

La plupart des navigateurs modernes installent les mises à jour automatiquement, en appliquant les changements lors de leur redémarrage. Vous pouvez généralement vérifier les mises à jour sur la page «&nbsp;À propos&nbsp;» du navigateur. L'emplacement varie selon le navigateur et le système d'exploitation, par exemple&nbsp;:

- Firefox&nbsp;: _Firefox_ > _À propos de Firefox_ sur macOS, et menu > _Aide_ > _À propos de Firefox_ sur Windows.
- Chrome&nbsp;: _Chrome_ > _À propos de Google Chrome_ sur macOS, et menu > _Aide_ > _À propos de Google Chrome_ sur Windows.

### Quels navigateurs installer

Pour l'instant, vous devriez installer quelques navigateurs de bureau et mobiles/alternatifs pour tester votre code. Si possible, installez au moins un navigateur de chaque sous-catégorie ci-dessus, afin de ne pas tester uniquement sur des navigateurs utilisant le même moteur de rendu.

## Serveurs web locaux

Normalement, lorsque vous saisissez une adresse web dans un navigateur pour charger un site, les fichiers nécessaires à l'affichage du site sont récupérés depuis un serveur web distant. Vous en apprendrez plus sur ce fonctionnement dans l'article suivant de la série.

Lorsque vous créez un site localement (sur votre propre machine), vous pouvez souvent ouvrir le fichier HTML principal directement dans un navigateur pour le tester. Cependant, certains exemples nécessitent d'être exécutés via un serveur web local pour fonctionner correctement.

### Installer un serveur web local

L'une des options les plus simples que nous ayons trouvées pour disposer d'un serveur local est d'utiliser une extension d'éditeur de code — ainsi, elle est disponible directement dans votre éditeur. Procédez ainsi dans Visual Studio Code&nbsp;:

1. Ouvrez le panneau _Extensions_ via le menu _Affichage_ > _Extensions_.
2. Dans la zone «&nbsp;Rechercher...&nbsp;» en haut du panneau, tapez «&nbsp;live preview&nbsp;». Le premier résultat devrait être l'extension [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) créée par Microsoft.
3. Cliquez sur cette option pour ouvrir la page d'information, qui explique comment l'utiliser.
4. Appuyez sur le bouton _Installer_ pour installer l'extension.
5. Désormais, lorsque vous travaillez sur un fichier HTML dans l'éditeur, vous pouvez cliquer sur le bouton «&nbsp;Afficher l'aperçu&nbsp;» pour ouvrir l'exemple en direct dans un nouvel onglet.

Cette option est simple mais peu flexible. Plus tard, vous souhaiterez peut-être une solution de serveur local plus flexible, utilisable avec n'importe quel navigateur. Pour d'autres options (et plus d'informations sur l'utilité des serveurs locaux), voir [Comment configurer un serveur de test local&nbsp;?](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Éditeurs graphiques

Les développeur·euse·s web doivent souvent manipuler des fichiers image pour les sites qu'ils créent. Cela peut signifier concevoir/créer des éléments graphiques, mais souvent, les images sont fournies par un·e graphiste (collaborateur·rice ou prestataire), et le·la développeur·euse peut être amené·e à recadrer ou redimensionner les fichiers reçus.

Aucun des articles d'apprentissage sur MDN ne vous demande de créer vos propres images, mais certains peuvent vous demander de manipuler les fichiers fournis.

Nous vous recommandons de n'installer un éditeur graphique que lorsque vous en aurez besoin plus tard dans votre apprentissage. N'investissez pas dans un produit commercial coûteux à moins d'en avoir vraiment l'utilité.

Il existe de nombreux outils gratuits et services en ligne qui suffiront largement pour l'instant, par exemple&nbsp;:

- macOS inclut l'outil [Aperçu](https://support.apple.com/fr-fr/guide/preview/welcome/mac). Il sert principalement à visualiser des images et PDF, mais propose aussi des fonctions utiles d'édition d'images (redimensionnement, rotation, recadrage, annotation, conversion de formats, etc.).
- L'application [Photos de Windows](https://support.microsoft.com/fr-fr/windows/g%C3%A9rer-des-photos-et-des-vid%C3%A9os-avec-photos-microsoft-application-c0c6422f-d4cb-2e3d-eb65-7069071b2f9b) propose des fonctionnalités similaires.
- Le site [tinypng <sup>(angl.)</sup>](https://tinypng.com/) offre un service gratuit pour compresser des PNG, JPEG, etc. C'est une tâche courante lors de la préparation d'images pour le web.

Côté solutions commerciales, [Adobe Photoshop](https://www.adobe.com/fr/products/photoshop.html) reste la référence pour la retouche photo, tandis que des programmes comme [Sketch <sup>(angl.)</sup>](https://www.sketch.com/) sont plus adaptés à la création d'icônes et d'interfaces. On trouve aussi des alternatives populaires comme [Figma](https://www.figma.com/fr-fr/), [The Affinity Suite](https://affinity.serif.com/fr/) et [Canva](https://www.canva.com/fr_fr/).

La plupart de ces applications proposent des versions d'essai ou des modes gratuits à tester. Il existe aussi d'excellents logiciels libres comme [GIMP <sup>(angl.)</sup>](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/fr/express/) ou [Paint.NET <sup>(angl.)</sup>](https://www.getpaint.net/).

## Outils de gestion de versions

Les outils de **gestion de versions** permettent aux développeur·euse·s de gérer les fichiers sur des serveurs, de collaborer sur un projet, de partager du code et d'éviter les conflits d'édition. Actuellement, [Git](https://git-scm.com/) est le système de gestion de versions le plus populaire, avec des plateformes comme [GitHub](https://github.com/) ou [GitLab](https://about.gitlab.com/).

Même si ces outils sont essentiels en équipe, vous n'avez pas à vous en préoccuper pour l'instant. Un module dédié à la [gestion de versions](/fr/docs/Learn_web_development/Core/Version_control) est prévu à la fin de la série des modules de base.

## Applications de déploiement de site

Une fois votre site ou application terminé·e (en local ou sur un serveur de développement), vous voudrez le/la mettre en ligne sur un serveur web distant pour que vos utilisateur·ice·s puissent y accéder via une adresse web&nbsp;!

Il existe plusieurs façons de faire cela&nbsp;: acheter un hébergement et utiliser une [application SFTP](/fr/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server#sftp), utiliser un service comme [GitHub Pages](https://pages.github.com/) ou [Netlify](https://www.netlify.com/), ou encore partager rapidement une démo via [CodePen](https://codepen.io/) ou [JSFiddle](https://jsfiddle.net/).

Cette liste peut sembler impressionnante, mais ne vous inquiétez pas — vous n'avez pas besoin de tout savoir sur la publication de sites pour l'instant. Nous aborderons ce sujet à plusieurs reprises dans le cours. Vous aurez bientôt l'occasion de le pratiquer dans notre module [Votre premier site web](/fr/docs/Learn_web_development/Getting_started/Your_first_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
