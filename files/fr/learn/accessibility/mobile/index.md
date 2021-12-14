---
title: Accessibilité mobile
slug: Learn/Accessibility/Mobile
tags:
  - Accessibilité
  - Article
  - Débutant
  - Mobile
  - responsive
  - toucher
translation_of: Learn/Accessibility/Mobile
original_slug: Apprendre/a11y/Mobile
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}

L'accès Web sur les appareils mobiles étant si populaire et les plates-formes populaires telles qu'IOS et Android disposant d'outils d'aide à l'accessibilité complets, il est important de prendre en compte l'accessibilité de votre contenu Web sur ces plates-formes. Cet article examine les considérations relatives à l'accessibilité spécifiques aux mobiles.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Connaissances de base en informatique, compréhension de base de HTML,
        CSS et JavaScript et compréhension de la  <a
          href="/fr/docs/Learn/Accessibility"
          >previous articles in the course</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        Comprendre quels problèmes d'accessibilité existent sur les appareils
        mobiles et comment les résoudre.
      </td>
    </tr>
  </tbody>
</table>

## Accessibilité sur les appareils mobiles

L’état de l’accessibilité - et la prise en charge des normes Web en général - est bon pour les appareils mobiles modernes. Le temps où les appareils mobiles utilisaient des technologies Web complètement différentes des navigateurs de bureau, forçait les développeurs à utiliser le sniffing de navigateur et à leur servir des sites complètement séparés (même si de nombreuses entreprises détectent encore l'utilisation d'appareils mobiles et leur servent un domaine distinct).

De nos jours, les appareils mobiles en général peuvent gérer des sites Web "complets", et les principales plates-formes ont même des lecteurs d'écran intégrés pour permettre aux utilisateurs malvoyants de les utiliser avec succès. Les navigateurs mobiles modernes ont tendance à avoir un bon support pour  [WAI-ARIA](/fr/docs/Learn/Accessibility/WAI-ARIA_basics), aussi

Pour rendre un site Web accessible et utilisable sur mobile, il vous suffit de suivre les bonnes pratiques générales en matière de conception de sites Web et d'accessibilité.

Certaines exceptions nécessitent une attention particulière pour le mobile; les principaux sont:

- Mécanismes de contrôle - Assurez-vous que les commandes d'interface, telles que les boutons, sont accessibles sur les téléphones mobiles (c'est-à-dire principalement les écrans tactiles), ainsi que sur les ordinateurs de bureau / portables (principalement les souris et les claviers).
- Saisie utilisateur - Rendez les exigences de saisie utilisateur aussi simples que possible sur mobile (par exemple, dans les formulaires, réduisez au minimum la saisie).
- Conception réactive - Assurez-vous que les mises en page fonctionnent sur le mobile, conservez la taille des téléchargements d'images et réfléchissez à la fourniture d'images pour les écrans haute résolution.

## Résumé des tests de lecteur d'écran sur Android et iOS

Les plates-formes mobiles les plus courantes disposent de lecteurs d’écran entièrement fonctionnels. Celles-ci fonctionnent à peu près de la même manière que les lecteurs d’écran de bureau, sauf qu’elles sont largement utilisées avec des gestes tactiles plutôt que des combinaisons de touches.

Regardons les deux principaux: TalkBack sur Android et VoiceOver sur iOS.

### Android TalkBack

Le lecteur d’écran TalkBack est intégré au système d’exploitation Android.

Pour l'activer, sélectionnez Paramètres> Accessibilité> TalkBack, puis appuyez sur le curseur pour l'activer. Suivez toute invite supplémentaire à l'écran qui vous est présentée.

**Note:**  Les anciennes versions de TalkBack sont activées dans [slightly different ways](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback).

Lorsque TalkBack est activé, les commandes de base de votre appareil Android seront un peu différentes. Par exemple:

1.  Une simple pression sur une application la sélectionne et l'appareil lit en quoi elle consiste.
2.  Glisser vers la gauche ou la droite permet de se déplacer entre les applications, ou les boutons / contrôles si vous êtes dans une barre de contrôle. L'appareil lira chaque option.
3.  Double-cliquer n'importe où ouvrira l'application / sélectionner l'option.
4.  Vous pouvez également "explorer par le toucher" - maintenez votre doigt appuyé sur l'écran et faites-le glisser, et votre appareil lira les différentes applications / éléments que vous déplacez.

Si vous souhaitez désactiver TalkBack:

1.  Accédez à votre application Paramètres en utilisant les gestes ci-dessus.
2.  Accédez à Accessibilité> TalkBack .
3.  Accédez au commutateur et activez-le pour le désactiver. .

**Note:** Vous pouvez accéder à votre écran d'accueil à tout moment en glissant vers le haut et à gauche dans un mouvement fluide. Si vous avez plus d'un écran d'accueil, vous pouvez passer d'un écran à l'autre en faisant glisser deux doigts vers la gauche et vers la droite. .

Pour une liste plus complète des gestes TalkBack, voir  [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827).

#### Déverrouiller le téléphone

Lorsque TalkBack est activé, le déverrouillage du téléphone est un peu différent.

Vous pouvez balayer deux doigts à partir du bas de l'écran de verrouillage. Si vous avez défini un code d'accès ou un modèle pour déverrouiller votre appareil, vous serez redirigé vers l'écran de saisie approprié pour le saisir.

Vous pouvez également explorer en touchant le bouton _Déverrouiller_ en bas au centre de l'écran, puis en appuyant deux fois.

#### Menus globaux et locaux

TalkBack vous permet d'accéder aux menus contextuels globaux et locaux, où que vous ayez navigué sur l'appareil. Le premier fournit des options globales relatives à l'appareil dans son ensemble, et le second fournit des options relatives uniquement à l'application / à l'écran actuel.

#### **Pour accéder à ces menus**:

1.  Accédez au menu global en glissant rapidement vers le bas, puis à droite .
2.  Accédez au menu local en balayant rapidement vers le haut, puis à droite.
3.  Balayez vers la gauche et la droite pour naviguer entre les différentes options. .
4.  Une fois que vous avez sélectionné l'option de votre choix, double-cliquez dessus pour la choisir.

Pour plus de détails sur toutes les options disponibles dans les menus contextuels global et local, voir  [Use global and local context menus](https://support.google.com/accessibility/android/answer/6007066).

#### Parcourir des pages Web

Vous pouvez utiliser le menu contextuel local dans un navigateur Web pour rechercher des options permettant de naviguer dans des pages Web en utilisant uniquement les en-têtes, les contrôles de formulaire ou les liens, ou de naviguer ligne par ligne, etc.

Par exemple, avec TalkBack activé:

1.  Ouvrez votre navigateur web.
2.  Activer la barre d'URL.
3.  Entrez une page Web comportant de nombreux en-têtes, telle que la page de couverture de bbc.co.uk. Pour entrer le texte de l'URL:

    - Sélectionnez la barre d’URL en glissant gauche / droite jusqu’à ce que vous y arriviez, puis en double tapant .
    - Maintenez votre doigt appuyé sur le clavier virtuel jusqu'à obtenir le caractère souhaité, puis relâchez-le pour le saisir. Répétez pour chaque caractère.
    - Une fois que vous avez terminé, trouvez la touche Entrée et appuyez dessus.

4.  Balayez vers la gauche et la droite pour vous déplacer entre différents éléments de la page. .
5.  Faites glisser votre doigt vers le haut et vers la droite avec un mouvement fluide pour accéder au menu de contenu local.
6.  Balayez vers la droite jusqu'à ce que vous trouviez l'option "En-têtes et points de repère".
7.  Appuyez deux fois pour le sélectionner. Vous pouvez maintenant glisser à gauche et à droite pour vous déplacer entre les rubriques et les points de repère ARIA.
8.  Pour revenir au mode par défaut, entrez de nouveau dans le menu contextuel local en balayant l'écran vers le haut, le curseur à droite, sélectionnez "Par défaut", puis tapez deux fois pour l'activer.

**Note:**  Voir  aussi [Get started on Android with TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) pour obtenir une documentation plus complète.

### iOS VoiceOver

Une version mobile de VoiceOver est intégrée au système d'exploitation iOS.

Pour l'activer, accédez à l'application _Paramètres_, puis sélectionnez _Général_ > _Accessibilité_ > _VoiceOver_. Appuyez sur le curseur _VoiceOver_ pour l'activer (vous verrez également un certain nombre d'autres options liées à _VoiceOver_ sur cette page).

Une fois que VoiceOver est activé, les gestes de contrôle de base de l'iOS seront un peu différents :

1.  Un simple tapement entraînera la sélection de l'élément sur lequel vous appuyez; votre appareil parlera de l'élément sur lequel vous avez tapé.
2.  Vous pouvez également parcourir les éléments à l’écran en balayant vers la gauche ou vers la droite pour les déplacer, ou en faisant glisser votre doigt sur l’écran pour naviguer entre les différents éléments (lorsque vous trouvez l’élément souhaité, vous pouvez le retirer pour le sélectionner).
3.  Pour activer l'élément sélectionné (par exemple, ouvrir une application sélectionnée), appuyez deux fois n'importe où sur l'écran.
4.  Faites glisser votre doigt avec trois doigts pour faire défiler une page.
5.  Appuyez avec deux doigts pour effectuer une action liée au contexte - par exemple, prendre une photo alors que vous êtes dans l'application Appareil photo.

Pour le désactiver à nouveau, revenez à _Paramètres_> _Général_> _Accessibilité_> _VoiceOver_ en utilisant les gestes ci-dessus, puis basculez le curseur _VoiceOver_ sur Désactivé.

#### Déverrouiller le téléphone

Pour déverrouiller le téléphone, vous devez appuyer sur le bouton d'accueil (ou balayer) comme d'habitude. Si vous avez défini un code d'authentification, vous pouvez sélectionner chaque numéro en balayant / glissant (comme expliqué ci-dessus), puis en appuyant deux fois pour entrer chaque numéro lorsque vous avez trouvé le bon.

#### Utiliser le rotor

Lorsque VoiceOver est activé, vous disposez d'une fonction de navigation appelée Rotor, qui vous permet de choisir rapidement parmi un certain nombre d'options utiles courantes. Pour l'utiliser:

1.  Tournez deux doigts sur l’écran comme si vous tourniez un cadran. Chaque option sera lue à voix haute au fur et à mesure que vous tournez. Vous pouvez aller et venir pour parcourir les options.
2.  Une fois que vous avez trouvé l'option que vous voulez:

    - Relâchez vos doigts pour le sélectionner.
    - S'il s'agit d'une option dont vous pouvez parcourir la valeur (telle que le volume ou la vitesse de parole), vous pouvez effectuer un balayage vers le haut ou le bas pour augmenter ou diminuer la valeur de l'élément sélectionné.

Les options disponibles sous Rotor dépendent du contexte. Elles diffèrent en fonction de l'application ou de la vue dans laquelle vous vous trouvez (voir l'exemple ci-dessous).

#### Parcourir des pages Web

Essayons la navigation Web avec VoiceOver:

1.  Ouvrez votre navigateur web.
2.  Activer la barre d'URL.
3.  Entrez une page Web comportant de nombreux en-têtes, telle que la page de couverture de bbc.co.uk. Pour entrer le texte de l'URL:

    - Sélectionnez la barre d’URL en glissant gauche / droite jusqu’à ce que vous y arriviez, puis en double-tapant.
    - Pour chaque caractère, maintenez votre doigt appuyé sur le clavier virtuel jusqu'à ce que vous obteniez le caractère souhaité, puis relâchez votre doigt pour le sélectionner. Appuyez deux fois pour le taper.
    - Une fois que vous avez terminé, trouvez la touche Entrée et appuyez dessus.

4.  Balayez vers la gauche et la droite pour vous déplacer entre les éléments de la page. Vous pouvez appuyer deux fois sur un élément pour le sélectionner (par exemple, suivre un lien).
5.  Par défaut, l’option de rotor sélectionnée sera Speaking Rate; vous pouvez actuellement balayer de haut en bas pour augmenter ou diminuer le débit.
6.  Maintenant, tournez deux doigts autour de l'écran comme un cadran pour afficher le rotor et passez d'une option à l'autre. Voici quelques exemples d'options disponibles:

    - _Taux de parole_ : Modifiez le taux de parole.
    - _Conteneurs_ : déplacez-vous entre différents conteneurs sémantiques de la page.
    - _En-têtes_ : déplacez-vous entre les en-têtes de la page.
    - _Liens_ : permet de se déplacer entre les liens de la page.
    - _Contrôles de formulaire_ : déplacez-vous entre les contrôles de formulaire de la page.
    - _Langue_ : déplacez-vous entre différentes traductions, si elles sont disponibles.

7.  S*électionnez les en-têtes*. Vous pouvez maintenant glisser de haut en bas pour vous déplacer entre les titres de la page.

**Note:**  Pour une référence plus complète couvrant les gestes VoiceOver disponibles et d'autres astuces sur le test d'accessibilité sur iOS, voir aussi [Test Accessibility on Your Device with VoiceOver](https://developer.apple.com/library/content/technotes/TestingAccessibilityOfiOSApps/TestAccessibilityonYourDevicewithVoiceOver/TestAccessibilityonYourDevicewithVoiceOver.html#//apple_ref/doc/uid/TP40012619-CH3).

## Mécanismes de contrôle

Dans notre article relatif à l'accessibilité CSS et JavaScript, nous avons examiné l'idée d'événements spécifiques à un certain type de mécanisme de contrôle  (see [Mouse-specific events](/fr/docs/Learn/Accessibility/CSS_and_JavaScript#mouse-specific_events)). En résumé, cela pose des problèmes d'accessibilité car d'autres mécanismes de contrôle ne peuvent pas activer la fonctionnalité associée.

Par exemple, l'événement  [click](/fr/docs/Web/API/GlobalEventHandlers/onclick)  est bon en termes d'accessibilité - un gestionnaire d'événements associé peut être appelé en cliquant sur l'élément sur lequel il est défini, en le sélectionnant et en appuyant sur Entrée / Retour ou en le tapant sur un périphérique à écran tactile. Essayez notre [simple-button-example.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/simple-button-example.html) exemple ([see it running live](http://mdn.github.io/learning-area/accessibility/mobile/simple-button-example.html)) pour voir ce que nous entendons. .

Sinon, des événements spécifiques à la souris, tels que  [mousedown](/fr/docs/Web/API/GlobalEventHandlers/onmousedown) et [mouseup](/fr/docs/Web/API/GlobalEventHandlers/onmouseup) créent des problèmes - leurs gestionnaires d'événements ne peuvent pas être appelés à l'aide de contrôles autres que la souris.

Si vous essayez de contrôler notre exemple  [simple-box-drag.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/simple-box-drag.html) ([see example live](http://mdn.github.io/learning-area/accessibility/mobile/simple-box-drag.html)) avec un clavier ou une touche, vous verrez le problème. Cela se produit car nous utilisons un code tel que:

```js
div.onmousedown = function() {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
}

document.onmouseup = stopMove;
```

Pour activer d'autres formes de contrôle, vous devez utiliser des événements différents mais équivalents. Par exemple, les événements tactiles fonctionnent sur les périphériques à écran tactile:

```js
div.ontouchstart = function(e) {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
}

panel.ontouchend = stopMove;
```

Nous avons fourni un exemple simple qui montre comment utiliser simultanément les événements de la souris et des événements tactiles — voir [multi-control-box-drag.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/multi-control-box-drag.html) ([see the example live](http://mdn.github.io/learning-area/accessibility/mobile/multi-control-box-drag.html) aussi).

**Note:** Vous pouvez également voir des exemples fonctionnels montrant comment implémenter différents mécanismes de contrôle à   [Implementing game control mechanisms](/fr/docs/Games/Techniques/Control_mechanisms).

## Responsive design

[Responsive design](/fr/docs/Web/Apps/Progressive/Responsive) a l’habitude de faire en sorte que vos mises en page et les autres fonctionnalités de vos applications changent de manière dynamique en fonction de facteurs tels que la taille de l’écran et la résolution, de sorte qu’elles soient utilisables et accessibles aux utilisateurs de différents types d’appareils. .

En particulier, les problèmes les plus courants auxquels le mobile doit faire face sont les suivants:

- Adéquation des mises en page pour les appareils mobiles. Une mise en page à plusieurs colonnes ne fonctionnera pas aussi bien sur un écran étroit, par exemple, et il faudra peut-être augmenter la taille du texte pour le rendre lisible. Ces problèmes peuvent être résolus en créant une mise en page réactive utilisant des technologies telles que  [media queries](/fr/docs/Web/CSS/Media_Queries), [viewport](/fr/docs/Mozilla/Mobile/Viewport_meta_tag), et [flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox).
- Conserver les tailles d’image téléchargées. En général, les appareils de petite taille n’auront pas besoin d’images aussi volumineuses que leurs homologues de bureau, et ils risquent davantage d’être sur des connexions réseau lentes. Par conséquent, il est sage de servir des images plus petites sur des dispositifs à écran étroit, le cas échéant. Vous pouvez gérer cela en utilisant  [responsive image techniques](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).
- Penser aux hautes résolutions. De nombreux appareils mobiles ont des écrans haute résolution et ont donc besoin d'images de résolution supérieure pour que l'affichage puisse continuer à être net et net. Encore une fois, vous pouvez servir des images selon vos besoins en utilisant des techniques d’image réactives. De plus, de nombreuses exigences en matière d'images peuvent être satisfaites grâce au format d'images vectorielles SVG, bien pris en charge par les navigateurs actuels. SVG a une petite taille de fichier et restera net quelle que soit la taille affichée   (voir [Adding vector graphics to the web](/fr/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) pour plus de détails ).

**Note:**  Nous ne fournirons pas une analyse complète des techniques de conception réactive ici, car elles sont couvertes ailleurs au sein de MDN (voir les liens ci-dessus).

### Considérations mobiles spécifiques

Il existe d'autres problèmes importants à prendre en compte lors de la création de sites plus accessibles sur mobile. Nous en avons énuméré quelques-uns ici, mais nous en ajouterons davantage lorsque nous y penserons.

#### Ne pas désactiver le zoom

En utilisant  [viewport](/fr/docs/Mozilla/Mobile/Viewport_meta_tag), il est possible de désactiver le zoom, en utilisant un code comme celui-ci dans votre {{htmlelement("head")}}:

```html
<meta name="viewport" content="user-scalable=no">
```

Vous ne devriez jamais faire cela autant que possible - beaucoup de gens comptent sur le zoom pour voir le contenu de votre site web, aussi, enlever cette fonctionnalité est une très mauvaise idée. Il y a certaines situations où le zoom peut casser l'interface utilisateur; Dans de tels cas, si vous estimez que vous devez absolument désactiver le zoom, vous devez fournir un autre type d’équivalent, tel qu’une commande permettant d’augmenter la taille du texte de manière à ne pas endommager votre interface utilisateur.

#### Garder les menus accessibles

Étant donné que l'écran est beaucoup plus étroit sur les appareils mobiles, il est très courant d'utiliser des requêtes multimédia et d'autres technologies pour réduire le menu de navigation à une minuscule icône en haut de l'écran, sur laquelle vous pouvez appuyer pour afficher le menu uniquement si c'est nécessaire - lorsque le site est visualisé sur mobile. Ceci est généralement représenté par une icône "trois lignes horizontales" et le motif de conception est par conséquent appelé "menu hamburger".

Lorsque vous implémentez un tel menu, vous devez vous assurer que le contrôle qui le révèle est accessible par les mécanismes de contrôle appropriés (normalement tactile pour mobile), comme indiqué dans {{anch("Control mechanisms")}} ci-dessus, et que le reste de la page est déplacé ou caché d'une manière ou d'une autre pendant l'accès au menu, afin d'éviter toute confusion lors de la navigation. .

Cliquez ici pour un  [good hamburger menu example](http://fritz-weisshart.de/meg_men/).

## Entrée utilisateur

Sur les appareils mobiles, la saisie de données a tendance à être plus agaçante pour les utilisateurs que l'expérience équivalente sur les ordinateurs de bureau. Il est plus pratique de taper du texte dans les entrées de formulaire à l'aide d'un clavier d'ordinateur de bureau ou d'ordinateur portable que d'un clavier virtuel à écran tactile ou d'un petit clavier physique mobile.

Pour cette raison, il vaut la peine d'essayer de minimiser la quantité de frappe nécessaire. Par exemple, au lieu de forcer les utilisateurs à saisir chaque fois le titre de leur travail en utilisant une entrée de texte standard, vous pouvez proposer un menu  {{htmlelement("select")}}  contenant les options les plus courantes (ce qui aide également à cohérence dans la saisie des données), et offrent une option "Autre" qui affiche un champ de texte dans lequel taper les valeurs aberrantes. Vous pouvez voir un exemple simple de cette idée en action dans [common-job-types.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/common-job-types.html) ( voir le [common jobs example live](http://mdn.github.io/learning-area/accessibility/mobile/common-job-types.html)).

Il est également utile d’envisager l’utilisation de types de saisie de formulaire au format HTML5, tels que la date sur les plates-formes mobiles car ils les gèrent bien (Android et iOS, par exemple, affichent des widgets utilisables qui correspondent bien à l’expérience de l’appareil. Voir  [html5-form-examples.html](https://github.com/mdn/learning-area/blob/master/accessibility/mobile/html5-form-examples.html)  pour quelques exemples (voir [HTML5 form examples live](http://mdn.github.io/learning-area/accessibility/mobile/html5-form-examples.html)) — essayez de les charger et de les manipuler sur des appareils mobiles. Par exemple:

- Les types  `number`, `tel`, et `email` affichent des claviers virtuels appropriés pour la saisie de numéros / numéros de téléphone.
- Les types `time` et `date` affichent des sélecteurs appropriés pour la sélection des heures et des dates. .

Si vous souhaitez fournir une solution différente pour les ordinateurs de bureau, vous pouvez toujours proposer un balisage différent à vos périphériques mobiles à l'aide de la détection de fonctionnalités. Reportez-vous à  [input types](http://diveinto.html5doctor.com/detect.html#input-types)  pour obtenir des informations brutes sur la détection de différents types d'entrée et consultez notre article [feature detection article](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) pour en savoir plus. .

## Résumé

Dans cet article, nous vous avons fourni des détails sur les problèmes courants spécifiques à l'accessibilité mobile et sur la façon de les résoudre. Nous vous avons également montré comment utiliser les lecteurs d'écran les plus courants pour vous aider à effectuer des tests d'accessibilité.

### Voir également

- [Guidelines For Mobile Web Development](https://www.smashingmagazine.com/guidelines-for-mobile-web-development/) — Une liste d'articles dans Smashing Magazine couvrant différentes techniques de conception de sites Web mobiles.
- [Make your site work on touch devices](http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Article utile sur l'utilisation d'événements tactiles pour que les interactions fonctionnent sur les appareils mobiles.

{{PreviousMenuNext("Learn/Accessibility/Multimedia","Learn/Accessibility/Accessibility_troubleshooting", "Learn/Accessibility")}}

## Dans ce module

- [What is accessibility?](/fr/docs/Learn/Accessibility/What_is_accessibility)
- [HTML: A good basis for accessibility](/fr/docs/Learn/Accessibility/HTML)
- [CSS and JavaScript accessibility best practices](/fr/docs/Learn/Accessibility/CSS_and_JavaScript)
- [WAI-ARIA basics](/fr/docs/Learn/Accessibility/WAI-ARIA_basics)
- [Accessible multimedia](/fr/docs/Learn/Accessibility/Multimedia)
- [Mobile accessibility](/fr/docs/Learn/Accessibility/Mobile)
- [Accessibility troubleshooting](/fr/docs/Learn/Accessibility/Accessibility_troubleshooting)
