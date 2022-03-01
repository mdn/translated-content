---
title: window.open
slug: Web/API/Window/open
tags:
  - DOM
  - DOM_0
translation_of: Web/API/Window/open
---
{{ ApiRef() }}

### Définition

Crée une nouvelle fenêtre de navigation secondaire et y charge la ressource référencée.

### Syntaxe

```js
var windowObjectReference = window.open(strUrl, strWindowName[, strWindowFeatures]);
```

### Valeur renvoyée et paramètres

- `WindowObjectReference`
  - : Il s'agit de la référence pointant vers la fenêtre de navigation nouvellement créée. Cette référence est la valeur renvoyée par la méthode `open()` ; elle sera à `null` si pour une raison ou une autre l'appel n'a pas réussi à ouvrir une fenêtre. Une variable globale est le meilleur endroit pour stocker une telle référence. Il est alors possible, par exemple, de l'utiliser pour obtenir certaines propriétés de la nouvelle fenêtre, ou accéder à certaines de ses méthodes, à condition que la relation entre votre fenêtre principale et votre fenêtre secondaire se conforme avec les paramètres de sécurité de même origine (_[Same origin policy](http://www.mozilla.org/projects/security/components/same-origin.html) security requirements_ ).
- `strUrl`
  - : Il s'agit de l'URL à charger dans la fenêtre nouvellement créée. _strUrl_ peut être un document HTML, un fichier image, ou tout autre type de fichier géré par le navigateur.
- `strWindowName`
  - : Il s'agit de la chaîne d'identification de la nouvelle fenêtre. Celle-ci peut être utilisée pour être la cible de liens et de formulaires lorsque l'attribut `target` d'un élément `<a>` ou d'un élément `<form>` est spécifié. Cette chaîne ne peut contenir d'espaces. _strWindowName_ ne spécifie pas le titre de la fenêtre, juste son nom interne.
- `strWindowFeatures`
  - : Paramètre optionnel. Il s'agit de la chaîne listant les fonctionnalités de la nouvelle fenêtre de navigation (et de ses barres d'outils). Cette chaîne ne peut contenir d'espaces. Chaque fonctionnalité doit être séparée par une virgule au sein de la chaîne de caractères.

### Description

La méthode `open()` crée une nouvelle fenêtre secondaire de navigation, de façon similaire au choix de l'option Nouvelle fenêtre du menu Fichier. Le paramètre _strUrl_ spécifie l'URL à récupérer et à charger dans la nouvelle fenêtre. Si _strUrl_ est une chaîne vide, une nouvelle fenêtre vide de tout contenu (l'URL `about:blank` sera chargée) est créée avec les barres d'outils par défaut de la fenêtre principale.

Notez que les URL distantes ne seront pas chargées instantanément. Lorsque l'appel à `window.open()` se termine et renvoie sa valeur, la fenêtre contient toujours `about:blank`. Le chargement proprement dit de l'URL est reporté et ne commence effectivement qu'après la fin de l'exécution du bloc de script courant. La création de la fenêtre d'une part et le chargement de la ressource référencée d'autre part sont faits de manière asynchrone.

#### Exemples

```js
var windowObjectReference;
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function openRequestedPopup() {
  windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures);
}
```

```js
var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "http://www.domainname.ext/path/ImageFile.png",
    "DescriptiveWindowName",
    "resizable,scrollbars,status"
  );
}
```

Si une fenêtre du nom _strWindowName_ existe déjà, alors, au lieu d'ouvrir une nouvelle fenêtre, _strUrl_ est chargée dans cette fenêtre existante. Dans ce cas, la valeur renvoyée par la méthode est la fenêtre existante, et _strWindowFeatures_ est ignorée. Fournir une chaîne vide pour _strUrl_ est une manière d'obtenir une référence à une fenêtre ouverte par son nom sans en changer l'adresse. Si vous désirez ouvrir une nouvelle fenêtre à chaque appel de `window.open()`, il faut utiliser la nom réservé _\_blank_ pour _strWindowName_.

_strWindowFeatures_ est une chaîne optionnelle contenant une liste, séparée par des virgules, de fonctionnalités demandées pour la nouvelle fenêtre. Après qu'une fenêtre soit ouverte, vous ne pouvez pas utiliser JavaScript pour changer ses fonctionnalités et ses barres d'outils. Si _strWindowName_ ne spécifie pas une fenêtre existante et si vous ne fournissez pas le paramètre _strWindowFeatures_ (ou si celui-ci est une chaîne vide), la nouvelle fenêtre secondaire comportera les barres d'outils par défaut de la fenêtre principale.

Si le paramètre _strWindowFeatures_ est utilisé et si aucune information de taille n'est définie, les dimensions de la nouvelle fenêtre seront les mêmes que celles de la fenêtre ouverte la plus récemment.

Si le paramètre _strWindowFeatures_ est utilisé et qu'aucune information de position n'est définie, les coordonnées du coin en haut à gauche de la nouvelle fenêtre seront décalées de 22 pixels vers le bas et vers la droite par rapport à celles de la fenêtre ouverte le plus récemment. Un décalage est utilisé par tous les concepteurs de navigateurs (il est de 29 pixels dans Internet Explorer 6 SP2 avec le thème par défaut) et son but est d'aider l'utilisateur à remarquer l'ouverture d'une nouvelle fenêtre. Si la fenêtre ouverte le plus récemment était maximisée, il n'y aura pas de décalage et la nouvelle fenêtre secondaire sera maximisée également.

**Si le paramètre _strWindowFeatures_ est défini, les fonctionnalités qui ne sont pas listées, explicitement demandées dans la chaîne, seront désactivées ou enlevées** (à l'exception de _titlebar_ et _close_ qui sont par défaut à _yes_).

> **Note :** Si vous utilisez le paramètre _strWindowFeatures_, listez uniquement les fonctionnalités dont vous avez besoin, qui doivent être activées ou affichées. Les autres (à l'exception de _titlebar_ et _close_) seront désactivées ou enlevées.

#### Fonctionnalités de position et de taille

[Note sur les corrections d'erreurs de position et de dimension](#Note_sur_les_corrections_d.27erreurs_de_position_et_de_dimension)

{{bug(176320) }}

[Note sur les priorités](#Note_sur_les_priorit.C3.A9s)

- left
  - : Spécifie la distance à laquelle la nouvelle fenêtre est placée depuis le bord gauche de la zone de travail destinée aux applications du système d'exploitation de l'utilisateur jusqu'à la bordure extérieure (bordure de redimensionnement) de la fenêtre de navigation. La nouvelle fenêtre ne peut pas être positionnée initialement hors de l'écran.
- top
  - : Spécifie la distance à laquelle la nouvelle fenêtre est placée depuis le bord supérieur de la zone de travail destinée aux applications du système d'exploitation de l'utilisateur jusqu'à la bordure extérieure (bordure de redimensionnement) de la fenêtre de navigation. La nouvelle fenêtre ne peut pas être positionnée initialement hors de l'écran.
- height
  - : Spécifie la hauteur de la zone de contenu, l'espace de visualisation de la nouvelle fenêtre secondaire, en pixels. La valeur de hauteur comprend celle de la barre de défilement horizontale si celle-ci est présente. La valeur minimale requise est 100.
- width
  - : Spécifie la largeur de la zone de contenu, l'espace de visualisation de la nouvelle fenêtre secondaire, en pixels. La valeur de largeur comprend celle de la barre de défilement verticale si celle-ci est présente. Elle ne prend pas en compte un éventuel panneau latéral si celui-ci est déplié. La valeur minimale requise est 100.
- screenX
  - : Mozilla.
- screenY
  - : Mozilla.
- outerHeight

  - : Spécifie la hauteur de toute la fenêtre de navigation en pixels. Cette valeur outerHeight comprend toute barre d'outils présente, la barre de défilement horizontale de la fenêtre (si présente) et les bordures inférieures et supérieures. La valeur minimale requise est 100.

    > **Note :** étant donné que la barre de titre est toujours visible, demander une valeur outerHeight=100 rendra la valeur innerHeight de la fenêtre de navigation plus petite que les 100 pixels minimaux habituels.

- outerWidth
  - : Spécifie la largeur de toute la fenêtre de navigation en pixels. Cette valeur outerWidth comprend la barre de défilement verticale (si présente) et les bords gauche et droits de la fenêtre.
- innerHeight
  - : de la zone de contenu, l'espace de visualisation de la nouvelle fenêtre secondaire, en pixels. La valeur `innerHeight` comprend la hauteur de la barre de défilement horizontale si celle-ci est présente. La valeur minimale requise est 100.
- innerWidth
  - : de la zone de contenu, l'espace de visualisation de la nouvelle fenêtre secondaire, en pixels. La valeur `innerWidth` comprend la largeur de la barre de défilement verticale si celle-ci est présente. Elle ne prend pas en compte un éventuel panneau latéral si celui-ci est déplié. La valeur minimale requise est 100.

#### Fonctionnalités de barres d'outils et de chrome

- menubar
  - : Si cette fonctionnalité est définie à _yes_, la nouvelle fenêtre secondaire disposera d'une barre de menus. Les utilisateurs de Mozilla et Firefox peuvent obliger les nouvelles fenêtres à toujours avoir une barre de menus en positionnant `dom.disable_window_open_feature.menubar` à _true_ dans <kbd>about:config</kbd> ou dans leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user).
- toolbar
  - : Si cette fonctionnalité est définie à _yes_, la nouvelle fenêtre secondaire disposera d'une barre de navigation (boutons Précédente, Suivante, Actualiser et Arrêter). En plus de la barre de navigation, les navigateurs basés sur Mozilla afficheront également la barre d'onglets si elle est toujours visible et présente dans la fenêtre parente. Les utilisateurs de Mozilla et Firefox peuvent obliger les nouvelles fenêtres à toujours afficher la barre de navigation en positionnant `dom.disable_window_open_feature.toolbar` à _true_ dans <kbd>about:config</kbd> ou dans leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user).
- location
  - : Si cette fonctionnalité est définie à _yes_, la nouvelle fenêtre secondaire affichera une barre d'adresse (ou d'emplacement).Les utilisateurs de Mozilla et Firefox peuvent obliger les nouvelles fenêtres à toujours afficher la barre d'adresse en positionnant `dom.disable_window_open_feature.location` à _true_ dans <kbd>about:config</kbd> ou dans leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user). Notez qu'Internet Explorer 7 force la présence de la barre d'adresse : « Nous pensons que la barre d'adresse est aussi importante pour les utilisateurs **à voir dans les fenêtres pop-up**. Une barre d'adresse manquante crée une opportunité pour un fraudeur de contrefaire une adresse. Pour aider à contrer cela, **IE7 va afficher une barre d'adresse sur toutes les fenêtres de navigation pour aider les utilisateurs à voir où ils sont**. » provenant de [Better Website Identification](http://blogs.msdn.com/ie/archive/2005/11/21.aspx). Il est également dans les intentions de Mozilla de forcer la présence de la Barre d'adresse dans une prochaine version de Firefox : {{bug(337344) }}
- directories
  - : Si cette fonctionnalité est définie à _yes_, la nouvelle fenêtre secondaire affichera la barre personnelle dans les navigateurs Netscape 6.x, Netscape 7.x, Mozilla et Firefox. Dans Internet Explorer 5+, la barre de liens sera affichée. En plus de la barre personnelle, les navigateurs Mozilla afficheront la barre de navigation du site si celle-ci est visible et présente dans la fenêtre parente. Les utilisateurs de Mozilla et Firefox peuvent obliger les nouvelles fenêtres à toujours afficher leur barre personnelle en positionnant`dom.disable_window_open_feature.directories` à _true_ dans <kbd>about:config</kbd> ou dans leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user).
- personalbar
  - : Similaire à _directories_, mais ne fonctionne que dans Netscape et les navigateurs basés sur Mozilla.
- status
  - : Si cette fonctionnalité est définie à _yes_, la nouvelle fenêtre secondaire disposera d'une barre d'état. Les utilisateurs peuvent forcer la présence de la barre d'état dans tous les navigateurs basés sur Mozilla, dans Internet Explorer 6 SP2 ([Note sur la barre d'état avec XP SP2](#Note_sur_les_probl.C3.A8mes_de_s.C3.A9curit.C3.A9_li.C3.A9s_.C3.A0_la_pr.C3.A9sence_de_la_barre_d.27.C3.A9tat)) et dans Opera 6+. Les réglages par défaut des navigateurs récents basés sur Mozilla et Firefox 1.0 forcent la présence de la barre d'état.

#### Fonctionnalités relatives à la fenêtre

- resizable

  - : Si cette fonctionnalité est définie à _yes_, la nouvelle fenêtre secondaire sera redimensionnable À partir de la version 1.4, les navigateurs basés sur Mozilla ont une zone de redimensionnement à l'extrémité droite de la barre d'état. Cela permet de s'assurer que les utilisateurs peuvent toujours redimensionner la fenêtre même si l'auteur de la page Web a demandé que cette fenêtre secondaire ne soit pas redimensionnable. Dans ce cas, les icônes de maximisation/restauration dans la barre de titre de la fenêtre seront désactivées et les bordures de la fenêtre ne permettront pas de la redimensionner, mais celle-ci pourra toujours être redimensionnée via cette zone de la barre d'état. Il est probable qu'à partir de Firefox 3, toutes les fenêtres secondaires seront redimensionnables ({{ Bug(177838) }})

    > **Note :** pour des raisons d'accessibilité, il est vivement recommandé de toujours définir cette fonctionnalité à _yes_.

    Les utilisateurs de Mozilla et Firefox peuvent obliger les nouvelles fenêtres à être facilement redimensionnables en positionnant `dom.disable_window_open_feature.resizable` à _true_ dans <kbd>about:config</kbd> ou dans leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user).

- scrollbars

  - : Si cette fonctionnalité est définie à _yes_, la nouvelle fenêtre secondaire affichera des barres de défilement horizontales et/ou verticales si le document ne rentre pas dans la zone d'affichage de la fenêtre.

    > **Note :** pour des raisons d'accessibilité, il est vivement recommandé de toujours définir cette fonctionnalité à _yes_.

    Les utilisateurs de Mozilla et Firefox peuvent obliger cette option à être toujours activée en positionnant `dom.disable_window_open_feature.scrollbars` à _true_ dans <kbd>about:config</kbd> ou dans leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user).

- dependent
  - : Si définie à _yes_, la nouvelle fenêtre est dite dépendante de sa fenêtre parente. Une fenêtre dépendante se ferme lorsque sa fenêtre parente est fermée. Une fenêtre dépendante est réduite dans la barre des tâches uniquement lorsque sa fenêtre parente est réduite. Sur les plateformes Windows, une fenêtre dépendante n'est pas affichée sur la barre des tâches. Elle reste également en avant-plan de la fenêtre parente. Les fenêtres dépendantes n'existent pas sous Mac OS X, cette option y sera ignorée. La suppression complète de cette fonctionnalité sur toutes les plateformes est en cours de discussion ({{ Bug(214867) }}) Dans Internet Explorer 6, le plus proche équivalent à cette fonctionnalité est la méthode `showModelessDialog()`.
- modal
  - : **Note** : à partir de Mozilla 1.2.1, cette fonctionnalité requiert le privilège `UniversalBrowserWrite` ({{ Bug(180048) }}). Sans ce privilège, elle est équivalente à `dependent`. Si définie à _yes_, la nouvelle fenêtre est dite modale. L'utilisateur ne peut pas retourner à la fenêtre principale tant que la fenêtre modale n'est pas fermée. Une fenêtre modale typique est créée par la [fonction alert()](fr/DOM/window.alert). Le comportement exact des fenêtres modales dépend de la plateforme et de la version de Mozilla. L'équivalent de cette fonctionnalité dans Internet Explorer 6 est la méthode `showModalDialog()`.
- dialog
  - : La fonctionnalité `dialog` retire toutes les icônes (restaurer, réduire, agrandir) de la barre de titre de la fenêtre, laissant uniquement le bouton de fermeture. Mozilla 1.2+ et Netscape 7.1 afficheront les autres commandes du menu système (dans Firefox 1.0 et Netscape 7.0x, le menu de commandes système n'est pas associé avec l'icône de Firefox/Netscape 7.0x à l'extrémité gauche de la barre de titre, il s'agit probablement d'un bug. Il est possible d'accéder au menu de commandes système avec un clic droit sur la barre de titre). Les fenêtres de dialogue sont des fenêtres qui n'ont pas d'icône de commande système de réduction ni d'agrandissement/restauration dans la barre de titre, ni dans les choix correspondants du menu de commandes système. On les appelle dialogues car leur utilisation normale est uniquement de notifier une information et d'être ensuite immédiatement fermées. Sur les systèmes Mac, les fenêtres de dialogue ont une bordure différente et peuvent prendre la forme de*sheets*.
- minimizable
  - : Ce paramètre peut uniquement s'appliquer à des fenêtres de dialogue ; l'utilisation de « minimizable » nécessite `dialog=yes`. Si `minimizable` est défini à _yes_, le nouveau dialogue aura une commande système de réduction dans la barre de titre et il sera possible de le réduire dans la barre des tâches. Toute fenêtre n'étant pas un dialogue est toujours réductible, cette option y sera donc ignorée.
- fullscreen
  - : Ce paramètre ne fonctionne plus dans Internet Explorer 6 SP2 de la façon dont il le faisait dans Internet Explorer 5.x. La barre des tâches de Windows, ainsi que la barre de titre et la barre d'état de la fenêtre ne sont ni visibles, ni accessibles lorsque le mode plein écran est activé dans IE 5.x. `fullscreen` ennuie toujours les utilisateurs disposant d'un grand écran ou de plusieurs écrans. Obliger les autres utilisateurs à passer en plein écran avec `fullscreen` est également extrêmement impopulaire et est considéré comme une tentative impolie d'imposer les préférences d'affichage de l'auteur à l'utilisateur. `fullscreen` ne fonctionne plus vraiment dans Internet Explorer 6 SP2.

#### Fonctionnalités nécessitant des privilèges

Les fonctionnalités suivantes nécessitent le privilège `UniversalBrowserWrite`, autrement elles seront ignorées. Les scripts chrome bénéficient de ce privilège automatiquement, les autres doivent le demander via le [PrivilegeManager](fr/PrivilegeManager).

- chrome
  - : **Note** : à partir de Mozilla 1.7/Firefox 0.9, cette fonctionnalité requiert le privilège `UniversalBrowserWrite` ({{ Bug(244965) }}). Sans ce privilège, elle est ignorée. Si définie à _yes_, la page est chargée en tant qu'unique contenu de la fenêtre, sans aucun autre élément de l'interface de navigation. Il n'y aura pas de menu contextuel défini par défaut, et aucun des raccourcis clavier standard ne fonctionnera. La page est supposée fournir sa propre interface utilisateur, et cette fonctionnalité est habituellement utilisée pour ouvrir des documents XUL (les dialogues standard comme la console JavaScript sont ouverts de cette façon).
- titlebar
  - : Par défaut, toutes les nouvelles fenêtres secondaires ont une barre de titre. Si défini à _no_, ce paramètre enlève la barre de titre de la nouvelle fenêtre secondaire. Les utilisateurs de Mozilla et Firefox peuvent obliger les nouvelles fenêtres à toujours avoir une barre de titre en positionnant`dom.disable_window_open_feature.titlebar` à _true_ dans <kbd>about:config</kbd> ou dans leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user).
- alwaysRaised
  - : Si défini à _yes_, la nouvelle fenêtre sera toujours affichée par dessus les autres fenêtres du navigateur, qu'elle soit active ou non.
- alwaysLowered
  - : Si défini à _yes_, la nouvelle fenêtre créé flottera par dessous sa propre fenêtre parente tant que celle-ci n'est pas réduite. Les fenêtres utilisant alwaysLowered sont souvent appelées pop-under. Celles-ci ne peuvent pas passer au dessus de leur fenêtre parente, mais celle-ci peut être réduite. Dans Netscape 6.x, les fenêtres alwaysLowered n'ont pas de commande système de réduction ni de commande système restaurer/agrandir.
- z-lock
  - : Identique à `alwaysLowered`.
- close
  - : Lorsque défini à _no_, ce paramètre supprime l'icône système de fermeture de la fenêtre, et l'élément de menu correspondant. Il fonctionnera uniquement pour les fenêtres de dialogue (avec la fonctionnalité `dialog` activée). `close=no` a précédence sur `minimizable=yes`.Les utilisateurs de Mozilla et Firefox peuvent obliger les nouvelles fenêtres à toujours avoir un bouton de fermeture en positionnant `dom.disable_window_open_feature.close` à _true_ dans <kbd>about:config</kbd> ou dans leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user).

Les fonctionnalités de position et de taille nécessitent d'être accompagnées d'un nombre. Les fonctionnalités de barres d'outils et de fenêtre peuvent être accompagnées de _yes_ (oui) ou _no_ (non) ; il est également possible d'utiliser _1_ à la place de _yes_ et _0_ à la place de _no_. Les fonctionnalités de barres d'outils et de fenêtre acceptent aussi une forme raccourcie : vous pouvez activer une fonctionnalité en listant simplement son nom dans la chaîne _strWindowFeatures_. Si vous fournissez le paramètre _strWindowFeatures_, les fonctionnalités `titlebar` et `close` sont toujours à _yes_ par défaut, mais les autres fonctionnalités présentant un choix _yes_/_no_ seront à _no_ par défaut et seront donc désactivées.

Exemple :

```html
<script type="text/javascript">
var WindowObjectReference; // variable globale

function openRequestedPopup() {
  WindowObjectReference = window.open("http://www.nomdedomaine.ext/chemin/FichierImg.png",
        "NomDeFenetreDescriptif",
        "width=420,height=230,resizable,scrollbars=yes,status=1");
}
</script>
```

Dans cet exemple, la fenêtre sera redimensionnable, elle affichera des barres de défilement si nécessaire (si le contenu dépasse les dimensions de fenêtre demandées) et affichera la barre d'état. Elle n'affichera pas la barre de menus ni la barre d'adresse. Comme l'auteur connaissait la taille de l'image (400 pixels de large et 200 pixels de haut), il a ajouté les marges appliquées à l'élément racine dans Internet Explorer 6, c'est-à-dire 15 pixels en haut, 15 pixels en bas, 10 pixels à gauche et 10 pixels à droite.

### Bonnes pratiques

```html
<script type="text/javascript">
var WindowObjectReference = null; // variable globale

function openFFPromotionPopup() {
  if (WindowObjectReference == null || WindowObjectReference.closed) {
    /* si le pointeur vers l'objet window n'existe pas, ou s'il existe
       mais que la fenêtre a été fermée */
    WindowObjectReference = window.open("http://www.spreadfirefox.com/",
           "PromoteFirefoxWindowName", "resizable=yes,scrollbars=yes,status=yes");
    /* alors, création du pointeur. La nouvelle fenêtre sera créée par dessus
       toute autre fenêtre existante. */
  }
  else {
    WindowObjectReference.focus();
    /* sinon, la référence à la fenêtre existe et la fenêtre n'a pas été
       fermée: la fenêtre est peut-être minimisée ou derrière la fenêtre
       principale. Par conséquent, on peut l'amener par dessus les autres à
       l'aide de la méthode focus(). Il n'est pas nécessaire de recréer la fenêtre
       ou de recharger la ressource référencée. */
  };
}
</script>

(...)

<p><a href="http://www.spreadfirefox.com/" target="PromoteFirefoxWindowName" onclick="openFFPromotionPopup(); return false;" title="Ce lien créera une nouvelle fenêtre ou en réutilisera une déjà ouverte">Promouvoir
l'adoption de Firefox</a></p>
```

Le code ci-dessus résout un certain nombre de problèmes d'utilisabilité (_usability_ ) relatif aux liens ouvrant des fenêtres secondaires. Le but du `return false` dans le code est d'annuler l'action par défaut du lien : si le gestionnaire d'évènements onclick est exécuté, il n'est pas nécessaire d'exécuter l'action par défaut du lien. Mais si JavaScript est désactivé ou non existant dans le navigateur de l'utilisateur, c'est l'évènement onclick qui est ignoré et le navigateur charge la ressource référencée dans le cadre ou la fenêtre portant le nom « PromoteFirefoxWindowName ». Si aucun cadre ni fenêtre ne porte ce nom, le navigateur créera une nouvelle fenêtre et l'appellera « PromoteFirefoxWindowName ».

Plus d'informations sur l'utilisation de l'attribut target :

[HTML 4.01, section 16.3.2 La sémantique de cible](http://www.la-grange.net/w3c/html4.01/present/frames.html#h-16.3.2)

[Comment créer un lien qui ouvre une nouvelle fenêtre?](http://www.htmlhelp.com/fr/faq/html/links.html#new-window)

Vous pouvez également paramétriser la fonction pour la rendre polyvalente, fonctionnelle dans plus de situations, et donc réutilisable dans d'autres scripts et pages Web :

```html
<script type="text/javascript">
var WindowObjectReference = null; // variable globale

function openRequestedPopup(strUrl, strWindowName) {
  if(WindowObjectReference == null || WindowObjectReference.closed) {
    WindowObjectReference = window.open(strUrl, strWindowName,
           "resizable=yes,scrollbars=yes,status=yes");
  }
  else {
    WindowObjectReference.focus();
  };
}
</script>
(...)

<p><a href="http://www.spreadfirefox.com/" target="PromoteFirefoxWindow" onclick="openRequestedPopup(this.href, this.target); return false;" title="Ce lien créera une nouvelle fenêtre ou en réutilisera une déjà ouverte">Promouvoir l'adoption de Firefox</a></p>
```

Vous pouvez également ne permettre à cette fonction que d'ouvrir une seule fenêtre secondaire et de la réutiliser pour d'autres liens de cette manière :

```html
<script type="text/javascript">
var WindowObjectReference = null; // variable globale
var PreviousUrl; /* variable globale qui stockera l'URL actuellement
                    chargée dans la fenêtre secondaire */

function openRequestedSinglePopup(strUrl)
{
  if(WindowObjectReference == null || WindowObjectReference.closed)
  {
    WindowObjectReference = window.open(strUrl, "SingleSecondaryWindowName",
           "resizable=yes,scrollbars=yes,status=yes");
  }
  else if(previousUrl != strUrl)
  {
    WindowObjectReference = window.open(strUrl, "SingleSecondaryWindowName",
        "resizable=yes,scrollbars=yes,status=yes");
    /* si la ressource à charger est différente, on la charge dans la fenêtre
       secondaire déjà ouverte, et on ramène ensuite celle-ci par dessus
       sa fenêtre parente. */
    WindowObjectReference.focus();
  }
  else
  {
    WindowObjectReference.focus();
  };
  PreviousUrl = strUrl;
  /* explication : on stocke l'URL courante afin de pouvoir la comparer
     dans le cas d'un autre appel à cette fonction. */
}
</script>

(...)

<p><a href="http://www.spreadfirefox.com/" target="SingleSecondaryWindowName"
onclick="openRequestedSinglePopup(this.href); return false;"
title="Ce lien créera une nouvelle fenêtre ou en réutilisera une déjà ouverte">Promouvoir
l'adoption de Firefox</a></p>
<p><a href="http://www.mozilla.org/support/firefox/faq"
target="SingleSecondaryWindowName"
onclick="openRequestedSinglePopup(this.href); return false;"
title="Ce lien créera une nouvelle fenêtre ou en réutilisera une déjà ouverte">FAQ
de Firefox</a></p>
```

### FAQ

- Comment empêcher l'apparition du message de confirmation demandant à l'utilisateur s'il veut fermer la fenêtre ?
  - : Vous ne pouvez pas. **La règle est que les nouvelles fenêtres qui ne sont pas ouvertes par JavaScript ne peuvent pas être fermées par JavaScript.** La console JavaScript dans les navigateurs basés sur Mozilla affichera le message d'avertissement suivant : `"Scripts may not close windows that were not opened by script."` Si c'était possible, l'historique des URL visitées durant la session de navigation serait perdu au détriment de l'utilisateur. [Plus de détails sur la méthode window.close()](fr/DOM/window.close)
- Comment ramener la fenêtre si elle est réduite ou masquée par une autre fenêtre ?
  - : Vérifiez d'abord l'existence de la référence à l'objet window, et si celle-ci existe et n'a pas été fermée, utilisez la méthode [focus()](fr/DOM/window.focus). Il n'y a pas d'autre manière fiable. Un [exemple montrant comment utiliser la méthode focus()](#Bonnes_pratiques) est présenté ci-dessus.
- Comment forcer une fenêtre à être agrandie/maximisée ?
  - : Ce n'est pas possible. Tous les fabricants de navigateurs essaient de rendre l'ouverture d'une nouvelle fenêtre visible et remarquée par les utilisateurs, afin d'éviter de les désorienter.
- Comment désactiver le redimensionnement des fenêtres ou supprimer les barres d'outils ?
  - : Il n'est pas possible de l'imposer. Les utilisateurs de navigateurs basés sur Mozilla ont un contrôle absolu sur les fonctionnalités des fenêtres comme le fait de pouvoir les redimensionner, de les faire défiler et la présence de barres d'outils via les préférences utilisateur dans `about:config`. Comme vos utilisateurs sont ceux qui sont supposés utiliser de telles fenêtres (et non vous en tant qu'auteur), le mieux est d'éviter d'interférer avec leurs habitudes et préférences. Il est recommandé de toujours positionner la redimensionnabilité et la présence de barres de défilement (si nécessaire) à `yes` pour assurer l'accessibilité au contenu et l'utilisabilité des fenêtres. Ceci est dans l'intérêt tant de l'auteur Web que de ses utilisateurs.
- Comment redimensionner une fenêtre en fonction de son contenu ?

  - : Ce n'est pas faisable de manière fiable, car les utilisateurs peuvent empêcher la fenêtre d'être redimensionnée en décochant la case `Édition/Préférences/Avancé/Scripts & plugins/Autoriser les scripts à/ Déplacer ou redimensionner des fenêtres existantes` dans Mozilla ou `Outils/Options/Contenu/Activer JavaScript/Bouton Avancé/Déplacer ou redimensionner des fenêtres existantes` dans Firefox, ou en positionnant `dom.disable_window_move_resize` à _true_ dans <kbd>about:config</kbd> ou encore en éditant leur [fichier user.js](http://www.mozilla.org/support/firefox/edit#user). En général, les utilisateurs désactivent le déplacement et le redimensionnement des fenêtres, étant donné qu'autoriser les scripts à le faire a été la source d'énormément d'abus dans le passé, et les rares scripts qui n'en abusent pas sont souvent incorrects dans leur manière de redimensionner la fenêtre. 99% de ces scripts désactivent le redimensionnement manuel des fenêtres et les barres de défilement alors qu'ils devraient en fait activer ces deux fonctionnalités pour permettre un mécanisme de récupération sain et circonspect dans le cas où leurs calculs s'avèreraient incorrects.

    La méthode [sizeToContent()](fr/DOM/window.sizeToContent) de l'objet window est également désactivée si l'utilisateur décoche la préférence `Déplacer ou redimensionner des fenêtres existantes`. Déplacer et redimensionner une fenêtre à distance sur l'écran de l'utilisateur l'ennuiera très souvent, le désorientera, et au mieux sera incorrect. Les auteurs Web espèrent souvent avoir un contrôle absolu (et un pouvoir de décision) sur tous les aspects de positionnement et de taille des fenêtres de l'utilisateur ... ce qui n'est tout simplement pas vrai.

- Comment ouvrir une ressource référencée par un lien dans un nouvel onglet ? ou dans un onglet spécifique ?
  - : Pour l'instant, ce n'est pas possible. Seul l'utilisateur peut modifier ses préférences avancées pour faire cela. [K-meleon 1.1](http://kmeleon.sourceforge.net/), un navigateur basé sur Mozilla, donne un contrôle et un pouvoir complet à l'utilisateur sur la manière dont les liens sont ouverts. Certaines extensions avancées donnent également à Mozilla et Firefox un grand pouvoir concernant la manière dont les ressources référencées sont chargées. Dans quelques années, la [propriété target du module CSS3 hyperlien](http://www.w3.org/TR/2004/WD-css3-hyperlinks-20040224/#target0) pourrait être implémentée (si le module CSS3 Hyperlink tel qu'il existe à présent est approuvé). Même si cela se fait et lorsque cela se produira, attendez-vous à ce que les développeurs de navigateurs utilisant des onglets donnent un pouvoir de veto à l'utilisateur et un contrôle total de la façon dont les liens peuvent ouvrir des pages Web. La façon d'ouvrir un lien devrait toujours être entièrement sous le contrôle de l'utilisateur.
- Comment savoir si une fenêtre que j'ai ouverte l'est toujours ?
  - : Vous pouvez tester l'existence de la référence à l'objet `window`, qui est la valeur renvoyée en cas de succès de l'appel à `window.open()`, et vérifier ensuite que la valeur renvoyée par _WindowObjectReference_.closed est bien _false_.
- Comment savoir si ma fenêtre a été bloquée par un bloqueur de popups ?
  - : Avec les bloqueurs de popups intégrés dans Mozilla/Firefox et Internet Explorer 6 SP2, il est possible de vérifier la valeur renvoyée par `window.open()` : elle sera _null_ si la fenêtre n'a pas été autorisée à s'ouvrir. Cependant, pour la plupart des autres bloqueurs de popups, il n'existe pas de manière fiable.
- Quelle est la relation JavaScript entre la fenêtre principale et la fenêtre secondaire ?
  - : La valeur renvoyée par la méthode `window.open()` est la propriété [opener](fr/DOM/window.opener). La variable _WindowObjectReference_ lie la fenêtre principale (opener) à la fenêtre secondaire qu'elle a ouverte, tandis que le mot-clé `opener` liera la fenêtre secondaire à sa fenêtre principale (celle qui a déclenché son ouverture).
- Je n'arrive pas à accéder aux propriétés de la nouvelle fenêtre secondaire. J'obtiens toujours une erreur dans la console JavaScript disant « Erreur : uncaught exception: Permission denied to get property \<property_name or method_name> ». Pourquoi cela ?
  - : Ceci est causé par la restriction de sécurité des scripts entre domaines (aussi appelée*Same Origin Policy* , « Politique de même origine »). Un script chargé dans une fenêtre (ou cadre) d'une origine donnée (nom de domaine) **ne peut pas obtenir ou modifier** des propriétés d'une autre fenêtre (ou cadre) ou les propriétés d'aucun de ses objets HTML si celle-ci provient d'une autre origine distincte (nom de domaine). C'est pourquoi, avant d'exécuter un script se référant à une fenêtre secondaire depuis la fenêtre principale, le navigateur vérifiera que la fenêtre secondaire possède le même nom de domaine. Plus d'informations à propos de la restriction de sécurité des scripts entre domaines : [http://www.mozilla.org/projects/secu...me-origin.html](http://www.mozilla.org/projects/security/components/same-origin.html)

### Problèmes d'utilisabilité

#### Évitez de recourir à `window.open()`

De manière générale, il est préférable d'éviter d'utiliser `window.open()` pour plusieurs raisons :

- Tous les navigateurs basés sur Mozilla offrent la navigation par onglets, et il s'agit du mode préféré pour ouvrir des ressources référencées… pas seulement dans le cas des navigateurs basés sur Mozilla, mais dans tous les autres navigateurs offrant la navigation par onglets. En d'autres mots, les utilisateurs de navigateurs utilisant des onglets préfèrent ouvrir des onglets que des fenêtres dans la plupart des situations. Ce type de navigateur gagne rapidement en popularité depuis plusieurs années et cette tendance ne semble pas près de s'arrêter. La version 7 d'Internet Explorer sortie en octobre 2006 propose également la navigation par onglets.
- Il existe à présent [plusieurs extensions à Mozilla](https://addons.update.mozilla.org/extensions/showlist.php?application=mozilla&category=Tabbed+Browsing&numpg=50&os=windows&version=auto-detect&submit=Update) (comme Multizilla) et [à Firefox](https://addons.update.mozilla.org/extensions/showlist.php?application=firefox&version=1.0+&os=Windows&category=Tabbed%20Browsing) (comme [Tabbrowser preferences](https://addons.update.mozilla.org/extensions/moreinfo.php?application=firefox&version=1.0%20&os=Windows&category=Tabbed%20Browsing&numpg=10&id=158)), fonctionnalités et préférences avancées basées sur la navigation par onglets, sur la conversion des appels à `window.open()` en ouvertures d'onglets, et sur la neutralisation des appels à `window.open()`. En particulier, afin de neutraliser l'ouverture de nouvelles fenêtres non demandées (souvent présentés comme bloquant les fenêtre popups non sollicitées ou les ouvertures automatiques de fenêtres par des scripts). Parmi ces fonctionnalités qu'on peut retrouver dans des extensions, il y a l'ouverture d'un lien dans une nouvelle fenêtre ou non, dans la même fenêtre, dans un nouvel onglet ou non, en arrière-plan ou non. Coder sans réfléchir pour ouvrir de nouvelles fenêtres n'est plus assuré de succès, ne pourra pas se faire par la force, et dans le cas où l'auteur Web y parvient, ne fera qu'ennuyer la majorité des utilisateurs.
- Les nouvelles fenêtres peuvent avoir leur barre de menu, leurs barres de défilement, leur barre d'état, leur redimensionnabilité etc. désactivées. Ceci n'est pas possible avec de nouveaux onglets. Par conséquent, de nombreux utilisateurs préfèrent utiliser des onglets étant donné que l'interface de leur navigateur est laissée intacte et reste stable.
- L'ouverture de nouvelles fenêtres, même avec leurs fonctionnalités réduites, utilise des ressources système considérables sur l'ordinateur de l'utilisateur (processeur, mémoire RAM) et met en jeu une grande quantité de code à exécuter (gestion de la sécurité, de la mémoire, diverses options de code parfois assez complexes, la construction du cadre de la fenêtre, des barres d'outils de la fenêtre, son positionnement et sa taille, etc.). L'ouverture de nouveaux onglets demande nettement moins de ressources système et est plus rapide à exécuter que d'ouvrir de nouvelles fenêtres.

#### Offrez d'ouvrir un lien dans une nouvelle fenêtre, en suivant ces recommandations

Si vous voulez permettre l'ouverture d'un lien dans une nouvelle fenêtre, suivez ces règles d'utilisabilité et d'accessibilité testées et éprouvées :

##### N'utilisez _jamais_ ce format de code pour les liens :<br>`<a href="javascript:window.open(...)" ...>`

Les liens « javascript: » sont toujours mauvais pour l'accessibilité et l'utilisabilité des pages Web dans tous les navigateurs.

- Les pseudo-liens « javascript:» ne fonctionnent plus du tout lorsque la gestion de JavaScript est désactivée ou inexistante. Certaines sociétés n'autorisent leurs employés à utiliser le Web que suivant des politiques de sécurité très strictes : JavaScript désactivé, pas de Java, pas d'ActiveX, pas de Flash. Pour diverses raisons (sécurité, accès public, navigateurs texte, etc.), environ 5% à 10% des utilisateurs naviguent sur le Web avec JavaScript désactivé.
- Les liens « javascript: » interfèrent avec les fonctionnalités avancées de la navigation par onglets : entre autres, le clic du milieu sur des liens, le raccourci Ctrl+clic sur un lien, les fonctions de certaines extensions, etc.
- Les liens « javascript: » interfèrent avec le processus d'indexation des pages Web par les moteurs de recherche.
- Les liens « javascript: » interfèrent avec les technologies d'assistance (par exemple les lecteurs vocaux) et diverses applications utilisant le Web (par exemple les PDA ou les navigateurs pour mobiles).
- Les liens « javascript: » interfèrent également avec les fonctionnalités de « mouse gestures » proposées par certains navigateurs.
- Le schéma de protocole « javascript: » sera rapporté comme une erreur par les validateurs et vérificateurs de liens.

**Plus d'informations à ce sujet :**

- [Top Ten Web-Design Mistakes of 2002](http://www.useit.com/alertbox/20021223.html), 6. JavaScript in Links, Jakob Nielsen, Décembre 2002
- [Links & JavaScript Living Together in Harmony](http://www.evolt.org/article/Links_and_JavaScript_Living_Together_in_Harmony/17/20938/), Jeff Howden, Février 2002
- [FAQ de la discussion dans le newsgroup comp.lang.javascript sur les liens "javascript:"](http://jibbering.com/faq/#FAQ4_24)

##### N'utilisez jamais `<a href="#" onclick="window.open(...);">`

Un tel pseudo-lien met également en péril l'accessibilité des liens. **Utilisez toujours une véritable URL pour la valeur de l'attribut href**, afin que si JavaScript s'avère désactivé ou absent, ou si le navigateur ne peut pas ouvrir de fenêtre secondaire (comme Microsoft Web TV, les navigateurs en mode texte, etc.), de tels navigateurs pourront toujours charger la référence référencée dans leur mode de chargement/gestion de nouvelles ressources par défaut. Cette forme de code interfère également avec les fonctionnalités avancées de navigation par onglets de certains navigateurs, comme le clic du milieu et les raccourcis Ctrl+clic et Ctrl+Entrée sur les liens, les « mouse gestures », etc.

##### Identifiez toujours les liens qui créeront (ou réutiliseront) une nouvelle fenêtre secondaire

Identifiez les liens qui ouvriront de nouvelles fenêtre de manière à aider les utilisateurs en utilisant l'attribut `title` du lien, en ajoutant une icône à la fin du lien, ou en modifiant le curseur de la souris.

Le but est d'avertir les utilisateurs à l'avance des changements de contexte pour réduire la confusion de leur part : changer la fenêtre courante ou afficher subitement une nouvelle fenêtre peut être très désorientant pour certains utilisateurs (le bouton Précédent devient inutilisable).

> « Souvent, les utilisateurs ne remarquent pas qu'une nouvelle fenêtre s'est ouverte, particulièrement si ils utilisent un petit écran où les fenêtres sont agrandies pour utiliser toute la surface de l'écran. Ainsi, l'utilisateur voulant retourner à la page initiale sera dérouté par un bouton*Précédente* grisé. »
> citation de [The Top Ten*New* Mistakes of Web Design](http://www.useit.com/alertbox/990530.html): 2. Opening New Browser Windows, Jakob Nielsen, mai 1999

Lorsque des changements complets de contexte sont identifiés explicitement avant qu'ils se produisent, l'utilisateur peut déterminer s'il désire le faire ou s'y préparer : non seulement il ne sera pas perturbé ni désorienté, mais des utilisateurs plus expérimentés pourront eux-mêmes décider comment ouvrir de tels liens (dans une nouvelle fenêtre ou non, dans la même fenêtre, dans un nouvel onglet ou non, en arrière-plan ou non).

**Références**

- « Si votre lien crée une nouvelle fenêtre, ou fait apparaitre d'autres fenêtres sur votre affichage, ou déplace le focus du système vers un autre cadre ou une autre fenêtre, alors la chose sympathique à faire est d'indiquer à l'utilisateur que quelque chose de ce genre va se produire. » [World Wide Web Consortium Accessibility Initiative regarding popups](http://www.w3.org/WAI/wcag-curric/sam77-0.htm)
- « Utilisez les titres de liens pour donner aux utilisateurs un aperçu d'où chaque lien les emmènera, avant qu'ils aient cliqué dessus. » [Ten Good Deeds in Web Design](http://www.useit.com/alertbox/991003.html), Jakob Nielsen, octobre 1999
- [Using Link Titles to Help Users Predict Where They Are Going](http://www.useit.com/alertbox/980111.html), Jakob Nielsen, janvier 1998

##### Utilisez toujours l'attribut target

Si JavaScript est désactivé ou absent, le navigateur créera une fenêtre secondaire ou affichera la ressource demandée selon sa gestion habituelle de l'attribut target : par exemple certains navigateurs ne pouvant pas créer de nouvelles fenêtres comme Microsoft Web TV, chargeront la ressource demandée et l'ajouteront à la fin du document courant. Le but et l'idée est d'essayer de fournir — **sans l'imposer** — à l'utilisateur une manière d'ouvrir la ressource référencée, de suivre le lien. Votre code ne doit pas interférer avec les fonctionnalités du navigateur à disposition de l'utilisateur, et doit toujours lui laisser le chemin libre et le choix de la décision finale.

##### N'utilisez pas `target="_blank"`

Fournissez toujours un nom significatif dans votre attribut target, et essayez de le réutiliser dans votre page afin qu'un clic sur un autre lien puisse charger la ressource dans une fenêtre déjà utilisée (ce qui rend l'opération beaucoup plus rapide pour l'utilisateur), ce qui justifie la raison (et les ressources système, et le temps dépensé) d'avoir créé une fenêtre secondaire. Utiliser une seule cible et la réutiliser pour plusieurs liens est bien moins gourmand en matière de ressources puisqu'une seule fenêtre est créée et recyclée. D'un autre côté, utiliser « _blank » comme attribut target créera plusieurs nouvelles fenêtre anonymes sur le bureau de l'utilisateur qui ne peuvent ni être recyclées ni réutilisées.

Dans tous les cas, si votre code est bien fait, il ne devrait pas interférer avec le choix final de l'utilisateur mais lui offrira plutôt des choix supplémentaires, plus de façons d'ouvrir les liens et plus de pouvoir sur l'outil qu'il utilise (son navigateur).

### Glossaire

- Fenêtre ouvrante, opener, fenêtre parente, fenêtre principale, première fenêtre
  - : Termes souvent utilisés pour décrire ou identifier la même fenêtre. Il s'agit de la fenêtre depuis laquelle une nouvelle fenêtre sera créée. C'est la fenêtre dans laquelle l'utilisateur clique sur un lien qui mène à la création d'une autre, nouvelle fenêtre.
- Sous-fenêtre, fenêtre enfant, fenêtre secondaire, deuxième fenêtre
  - : Termes souvent utilisés pour décrire ou identifier la même fenêtre. C'est la nouvelle fenêtre qui a été créée.
- Fenêtres popup non sollicitées
  - : Ouverture automatique de fenêtres initiée par un script sans le consentement de l'utilisateur.

### Spécification

{{ DOM0() }} `window.open()` ne fait partie d'aucune spécification ou recommandation technique du W3C.

### Notes

#### Note sur les priorités

Dans les cas où `left` et `screenX` (et/ou `top` et `screenY`) ont des valeurs contradictoires, `left` et `top` ont priorité sur `screenX` et `screenY` respectivement. Si `left` et `screenX` (et/ou `top` et `screenY`) sont définies dans la liste _strWindowFeatures_, les valeurs `left` (et/ou `top`) seront reconnues et utilisées. Dans l'exemple suivant, la nouvelle fenêtre sera positionnée à 100 pixels du bord gauche de la zone de travail des applications du système d'exploitation de l'utilisateur, et non à 200 pixels.

```html
<script type="text/javascript">
WindowObjectReference = window.open("http://www.lemonde.fr/",
           "NomDeLaFenetreLeMonde",
           "left=100,screenX=200,resizable,scrollbars,status");
</script>
```

Si `left` est défini, mais que `top` n'a aucune valeur mais que `screenY` en a une, `left` et `screenY` seront les coordonnées de positionnement de la fenêtre secondaire.

`outerWidth` a priorité sur `width`, et `width` a priorité sur `innerWidth`. `outerHeight` a priorité sur `height` et `height` a priorité sur `innerHeight`. Dans l'exemple suivant, les navigateurs basés sur Mozilla créeront une nouvelle fenêtre avec une taille extérieure (outerWidth) de 600 pixels de large et ignoreront la requête d'une largeur (width) de 500 pixels ainsi que celle d'une taille intérieure (innerWidth) de 400 pixels.

```html
<script type="text/javascript">
WindowObjectReference = window.open("http://www.wwf.org/",
           "NomDeLaFenetreWWF",
           "outerWidth=600,width=500,innerWidth=400,resizable,scrollbars,status");
</script>
```

#### Note sur les corrections d'erreurs de position et de dimension

Les positions et dimensions demandées dans la liste _strWindowFeatures_ ne seront pas respectées et **seront corrigées** si n'importe laquelle de ces valeurs ne permet pas à la fenêtre complète d'être affichée dans la zone de travail des applications du système d'exploitation de l'utilisateur. **Aucune partie de la nouvelle fenêtre ne peut être initialement positionnée hors de l'écran. Ceci est le réglage par défaut de tous les navigateurs basés sur Mozilla.**

[Internet Explorer 6 SP2 dispose d'un mécanisme de correction d'erreur similaire](http://msdn.microsoft.com/security/productinfo/xpsp2/default.aspx?pull=/library/en-us/dnwxp/html/xpsp2web.asp#xpsp_topic5), mais celui-ci n'est pas activé par défaut pour tous les niveaux de sécurité : un niveau de sécurité trop bas peut désactiver ce mécanisme de correction d'erreurs.

#### Note sur les barres de défilement

Lorsque le contenu dépasse les dimensions de la zone de visualisation de la fenêtre, des barres de défilement (ou un mécanisme de définement similaire) sont nécessaires pour s'assurer que les utilisateurs puissent accéder au contenu. Le contenu ou la boîte du document d'une page web peut outrepasser, excéder les dimensions demandées pour la fenêtre pour plusieurs raisons qui sont hors du contrôle des auteurs Web :

- l'utilisateur a redimensionné la fenêtre
- l'utilisateur a augmenté la taille de police du texte via le menu Affichage/Taille du texte (%) dans Mozilla ou Affichage/Taille du texte/Plus grande ou Plus petite dans Firefox
- l'utilisateur a défini une taille minimale de police pour les pages qui est plus grande que celle demandée par l'auteur. Les personnes de plus de 40 ans ou ayant des habitudes particulières de lecture choisissent souvent une taille minimale de police dans les navigateurs basés sur Mozilla.
- l'auteur n'est pas conscient des marges par défaut (et/ou bordures et/ou padding) appliquées à l'élément racine ou nœud `body` dans les différents navigateurs et versions de ceux-ci
- l'utilisateur utilise une feuille de style utilisateur ([userContent.css in Mozilla-based browsers](http://www.mozilla.org/support/firefox/edit#content)) pour ses habitudes de navigation qui modifie les dimensions habituelles pour ses habitudes de lecture (marges, padding, taille de police par défaut)
- l'utilisateur peut personnaliser individuellement la taille (hauteur ou largeur) de la plupart des barres d'outils via son système d'exploitation. Par exemple les bordures de fenêtres, la hauteur de la barre de titre, des menus et des barres de défilement, ainsi que la taille du texte sont entièrement personnalisables par l'utilisateur dans le système d'exploitation Windows XP. Ces dimensions de barres d'outils peuvent également être changées par des thèmes du navigateur, ou du système d'exploitation
- l'auteur ne s'attend pas à ce que la fenêtre de l'utilisateur dispose de barres d'outils spécifiques supplémentaires ; comme des barres de préférences, la barre web developer, des barres d'accessibilité, de blocage de popups et de recherche, etc.
- l'utilisateur utilise des technologies assistives ou addons qui modifient la zone de travail des applications, par exemple Microsoft Magnifier
- l'utilisateur repositionne et/ou redimensionne directement la zone de travail des apllications : par exemple il redimensionne la barre des tâches de Windows, la place sur le côté gauche de l'écran (versions en langues arabes) ou sur la droite (versions en hébreu), l'utilisateur a une barre de lancement rapide Microsoft Office, etc.
- certains systèmes d'exploitation (Mac OS X) forcent la présence de barres d'outils qui peuvent démentir les anticipations et calculs de l'auteur Web sur les dimensions effectives de la fenêtre de navigation

#### Note sur la barre d'état

Vous devez vous attendre à ce qu'une large majorité des navigateurs affichent la barre d'état, ou qu'une large majorité des utilisateurs voudront forcer sa présence : le mieux est de toujours positionner cette fonctionnalité à yes. De plus, si vous demandez spécifiquement de retirer la barre d'état, les utilisateurs de Firefox ne pourront plus utilser la barre de navigation de site si elle est installée. Dans Mozilla et dans Firefox, toutes les fenêtres peuvent être redimensionnées à partir de la zone inférieure droite de la barre d'état. Celle-ci fournit également des informations sur la connexion http, l'emplacement des ressources hypertextes, la barre de progression du téléchargement, l'icône de chiffrement/connexion sécurisée avec SSL (affichant une icône de cadenas jaune), des icônes de zones de sécurité, de politique de sécurité en matière de cookies, etc. **Enlever la barre d'état retire souvent de très nombreuses fonctionnalités et informations considérées comme utiles (et parfois vitales) par les utilisateurs.**

#### Note sur les problèmes de sécurité liés à la présence de la barre d'état

Dans Internet Explorer 6 pour XP SP2, pour les fenêtres ouvertes à l'aide de `window.open()` :

> « Pour les fenêtres ouvertes à l'aide de `window.open()` :
> Attendez-vous à ce que la barre d'état soit présente, et codez en conséquence. **La barre d'état sera activée par défaut** et fait entre 20 et 25 pixels de haut. (...) »
> citation de [Fine-Tune Your Web Site for Windows XP Service Pack 2, Browser Window Restrictions in XP SP2](http://msdn.microsoft.com/security/productinfo/xpsp2/default.aspx?pull=/library/en-us/dnwxp/html/xpsp2web.asp#xpsp_topic5)

> « (...) les fenêtres créées à l'aide de la méthode `window.open()` peuvent être appelées par des scripts et utilisées pour imiter une fausse interface utilisateur ou bureau, ou pour masquer des informations ou des activités malveillantes en dimensionnant la fenêtre de manière à rendre la barre d'état invisible.
> Les fenêtres d'Internet Explorer fournissent des informations de sécurité visibles par l'utilisateur pour l'aider à identifier avec certitude la source de la page et le niveau de sécurité de la communication avec cette page. Lorsque ces éléments ne sont pas visibles, les utilisateurs peuvent penser qu'ils sont sur une page plus digne de confiance ou interagissent avec un processus système alors qu'il sont en train d'interagir avec un hôte malveillant. (...)
> **Les fenêtres lancées par des scripts seront affichées entièrement, avec la barre de titre d'Internet Explorer et sa barre d'état.** (...)
> Gestion de la barre d'état d'Internet Explorer par les scripts
> Description détaillée
> **Internet Explorer a été modifié pour ne désactiver la barre d'état pour aucune fenêtre. La barre d'état est toujours visible pour toutes les fenêtres d'Internet Explorer.** (...) Sans ce changement, les fenêtres créées à l'aide de la méthode `window.open()` peuvent être appelées par des scripts et imiter une fausse interface utilisateur ou bureau, ou pour masquer des informations importantes pour l'utilisateur.
> La barre d'état est une fonction de sécurité des fenêtres d'Internet Explorer qui fournissent à l'utilisateur des informations sur les zones de sécurité. Cette zone ne peut pas être imitée (...)"
> citation de [Changes to Functionality in Microsoft Windows XP Service Pack 2, Internet Explorer Window Restrictions](http://www.microsoft.com/technet/prodtechnol/winxppro/maintain/sp2brows.mspx#ECAA)

#### Note sur le plein écran (fullscreen)

Dans Internet Explorer 6 pour XP SP2 :

- « `window.open()` avec fullscreen=yes donnera à présent une fenêtre maximisée, et non une fenêtre en mode kiosque. »
- « La définition de la spécification de fullscreen=yes est modifiée pour signifier "afficher la fenêtre maximisée," ce qui gardera la barre de titre, la barre d'adresse et la barre d'état visibles. »

_Références :_

- [Fine-Tune Your Web Site for Windows XP Service Pack 2](http://msdn.microsoft.com/security/productinfo/xpsp2/default.aspx?pull=/library/en-us/dnwxp/html/xpsp2web.asp#xpsp_topic5)
- [Changes to Functionality in Microsoft Windows XP Service Pack 2, Script sizing of Internet Explorer windows](http://www.microsoft.com/technet/prodtechnol/winxppro/maintain/sp2brows.mspx#ECAA)

#### Note sur la différence entre outerHeight et height

### Tutoriels

**en français :**

[Créer des pop-up intelligentes](http://openweb.eu.org/articles/popup/) par Fabrice Bonny, OpenWeb

**en anglais :**

[JavaScript windows (tutorial)](http://www.infimum.dk/HTML/JSwindows.html) par Lasse Reichstein Nielsen

[The perfect pop-up (tutorial)](http://www.accessify.com/tutorials/the-perfect-pop-up.asp) par Ian Lloyd

[Popup windows and Firefox (interactive demos)](http://www.gtalbot.org/FirefoxSection/Popup/PopupAndFirefox.html) par Gérard Talbot

### Références

[Links Want To Be Links](http://www.cs.tut.fi/~jkorpela/www/links.html) by Jukka K. Korpela

[Links & JavaScript Living Together in Harmony](http://www.evolt.org/article/Links_and_JavaScript_Living_Together_in_Harmony/17/20938/) by Jeff Howden
