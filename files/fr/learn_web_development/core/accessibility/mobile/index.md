---
title: Accessibilité mobile
slug: Learn_web_development/Core/Accessibility/Mobile
l10n:
  sourceCommit: 20b627881ef42682e5051e160dc398c7861c03a9
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}

Avec l'accès au web sur les appareils mobiles étant si populaire et des plateformes renommées telles qu'iOS et Android disposant d'outils d'accessibilité complets, il est important de prendre en compte l'accessibilité de votre contenu web sur ces plateformes. Cet article examine les considérations spécifiques à l'accessibilité mobile.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Être familier avec <a href="/fr/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/fr/docs/Learn_web_development/Core/Styling_basics">CSS</a>, et les bonnes pratiques en matière d'accessibilité telles qu'enseignées dans les leçons précédentes du module.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Être familier avec les lecteurs d'écran sur iOS et Android.</li>
          <li>Être familier avec les problèmes d'accessibilité liés à certains types d'évènements.</li>
          <li>Connaître des techniques spécifiques pour des mécanismes de saisie utilisateur·ice plus utilisables sur mobile.</li>
          <li>Savoir que les navigateurs mobiles offrent des avantages spécifiques en matière d'utilisabilité pour certains types de <code>&lt;input&gt;</code> tels que <code>number</code> ou <code>tel</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Accessibilité sur les appareils mobiles

L'état de l'accessibilité — et le support des standards web en général — est bon sur les appareils mobiles modernes. Fini le temps où les appareils mobiles utilisaient des technologies web complètement différentes des navigateurs de bureau, obligeant les développeur·euse·s à utiliser la détection de navigateur et à leur servir des sites complètement séparés (bien que pas mal d'entreprises détectent encore l'utilisation d'appareils mobiles et leur servent un domaine mobile séparé).

De nos jours, les appareils mobiles peuvent généralement gérer des sites web complets, et les principales plateformes disposent même de lecteurs d'écran intégrés pour permettre aux utilisateur·ice·s malvoyant·e·s de les utiliser avec succès. Les navigateurs mobiles modernes ont également tendance à bien prendre en charge [WAI-ARIA](/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

Pour rendre un site web accessible et utilisable sur mobile, il suffit de suivre les bonnes pratiques générales en matière de conception web et d'accessibilité.

De manière générale, il existe quelques exceptions qui nécessitent une attention particulière sur mobile&nbsp;; les principales sont&nbsp;:

- Mécanismes de contrôle — Assurez-vous que les contrôles de l'interface tels que les boutons sont accessibles sur les mobiles (c'est-à-dire principalement les écrans tactiles), ainsi que sur les ordinateurs de bureau/portables (principalement la souris/le clavier).
- Saisie utilisateur·ice — Rendez les exigences de saisie utilisateur·ice aussi simples que possible sur mobile (par exemple, dans les formulaires, minimisez la saisie).
- Conception adaptative — Assurez-vous que les mises en page fonctionnent sur mobile, optimisez la taille des images téléchargées et réfléchissez à la fourniture d'images pour les écrans haute résolution.

## Résumé des tests de lecteurs d'écran sur Android et iOS

Les plateformes mobiles les plus courantes disposent de lecteurs d'écran pleinement fonctionnels. Ceux-ci fonctionnent de la même manière que les lecteurs d'écran de bureau, sauf qu'ils sont principalement utilisés avec des gestes tactiles plutôt qu'avec des combinaisons de touches.

Examinons les deux principaux&nbsp;: TalkBack sur Android et VoiceOver sur iOS.

### TalkBack sur Android

Le lecteur d'écran TalkBack est intégré au système d'exploitation Android.

Pour l'activer, recherchez le modèle de téléphone et la version d'Android que vous possédez, puis recherchez où se trouve le menu TalkBack. Il tend à varier considérablement entre les versions d'Android et même entre différents modèles de téléphones. Certains fabricants de téléphones (par exemple, Samsung) n'ont même pas TalkBack sur les téléphones plus récents et ont plutôt opté pour leur propre lecteur d'écran.

Une fois que vous avez trouvé le menu TalkBack, appuyez sur l'interrupteur coulissant pour activer TalkBack. Suivez toutes les invites supplémentaires à l'écran qui vous sont présentées.

Lorsque TalkBack est activé, les commandes de base de votre appareil Android sont un peu différentes. Par exemple&nbsp;:

1. Un simple appui sur une application la sélectionne, et l'appareil la lit à voix haute ce qu'est l'application.
2. Balayer vers la gauche et la droite permet de passer d'une application à l'autre, ou de passer d'un bouton/contrôle à l'autre si vous êtes dans une barre de contrôle. L'appareil lit à voix haute chaque option.
3. Un double appui n'importe où ouvre l'application/sélectionne l'option.
4. Vous pouvez également «&nbsp;explorer par le toucher&nbsp;» — maintenez votre doigt sur l'écran et faites-le glisser, et votre appareil lit à voix haute les différentes applications/éléments que vous parcourez.

Si vous souhaitez désactiver TalkBack&nbsp;:

1. Revenez à l'écran du menu TalkBack (en utilisant les différents gestes actuellement activés).
2. Accédez à l'interrupteur coulissant et activez-le pour le désactiver.

> [!NOTE]
> Vous pouvez accéder à votre écran d'accueil à tout moment en balayant vers le haut et vers la gauche d'un mouvement fluide. Si vous avez plus d'un écran d'accueil, vous pouvez passer de l'un à l'autre en balayant avec deux doigts vers la gauche et la droite.

Pour une liste plus complète des gestes TalkBack, voir [Utiliser les gestes TalkBack <sup>(angl.)</sup>](https://support.google.com/accessibility/android/answer/6151827).

#### Déverrouiller le téléphone

Lorsque TalkBack est activé, le déverrouillage du téléphone est un peu différent.

Vous pouvez effectuer un balayage vers le haut avec deux doigts depuis le bas de l'écran de verrouillage. Si vous avez défini un code d'accès ou un schéma pour déverrouiller votre appareil, vous êtes alors dirigé vers l'écran de saisie correspondant pour le saisir.

Vous pouvez également explorer par le toucher pour trouver le bouton _Déverrouiller_ en bas au centre de l'écran, puis effectuer un double appui.

#### Menus globaux et locaux

TalkBack vous permet d'accéder aux menus contextuels globaux et locaux, où que vous soyez sur l'appareil. Le premier fournit des options globales concernant l'appareil dans son ensemble, et le second fournit des options concernant uniquement l'application/l'écran actuel dans lequel vous vous trouvez.

Pour accéder à ces menus&nbsp;:

1. Accédez au menu global en balayant rapidement vers le bas, puis vers la droite.
2. Accédez au menu local en balayant rapidement vers le haut, puis vers la droite.
3. Balayez vers la gauche et la droite pour passer d'une option à l'autre.
4. Une fois que vous avez sélectionné l'option souhaitée, effectuez un double appui pour la choisir.

Pour plus de détails sur toutes les options disponibles dans les menus contextuels globaux et locaux, voir [Utiliser les menus contextuels globaux et locaux <sup>(angl.)</sup>](https://support.google.com/accessibility/android/answer/6007066).

#### Parcourir des pages web

Vous pouvez utiliser le menu contextuel local dans un navigateur web pour trouver des options permettant de parcourir les pages web uniquement à l'aide des titres, des contrôles de formulaire ou des liens, ou de les parcourir ligne par ligne, etc.

Par exemple, lorsque TalkBack est activé&nbsp;:

1. Ouvrez votre navigateur web.
2. Activez la barre d'URL.
3. Saisissez une page web qui comporte plusieurs titres, telle que la page d'accueil de bbc.co.uk. Pour saisir le texte de l'URL&nbsp;:
   - Sélectionnez la barre d'URL en balayant vers la gauche ou la droite jusqu'à l'atteindre, puis en appuyant deux fois.
   - Maintenez votre doigt sur le clavier virtuel jusqu'à obtenir le caractère souhaité, puis relâchez votre doigt pour le saisir. Répétez pour chaque caractère.
   - Une fois terminé, trouvez la touche Entrée et appuyez dessus.

4. Balayez vers la gauche et la droite pour passer d'un élément de la page à l'autre.
5. Balayez vers le haut et la droite d'un mouvement fluide pour ouvrir le menu de contenu local.
6. Balayez vers la droite jusqu'à trouver l'option «&nbsp;Titres et repères&nbsp;».
7. Appuyez deux fois pour la sélectionner. Vous pouvez alors balayer vers la gauche et la droite pour passer d'un titre et d'un repère ARIA à l'autre.
8. Pour revenir au mode par défaut, ouvrez de nouveau le menu contextuel local en balayant vers le haut et la droite, sélectionnez «&nbsp;Par défaut&nbsp;», puis appuyez deux fois pour l'activer.

> [!NOTE]
> Voir [Obtenir des informations sur Android avec TalkBack <sup>(angl.)</sup>](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932) pour une documentation plus complète.

### iOS VoiceOver

Une version mobile de VoiceOver est intégrée au système d'exploitation iOS.

Pour l'activer, allez dans votre application _Réglages_ et sélectionnez _Accessibilité > VoiceOver_. Appuyez sur le curseur _VoiceOver_ pour l'activer (vous voyez également plusieurs autres options liées à VoiceOver sur cette page).

> [!NOTE]
> Certains anciens appareils iOS ont le menu VoiceOver dans _Réglages_ > _Général_ > _Accessibilité_ > _VoiceOver_.

Une fois VoiceOver activé, les gestes de contrôle de base d'iOS sont un peu différents&nbsp;:

1. Une seule touche fait que l'élément sur lequel vous appuyez est sélectionné&nbsp;; votre appareil annonce l'élément sur lequel vous avez appuyé.
2. Vous pouvez également naviguer parmi les éléments à l'écran en balayant vers la gauche et la droite pour passer de l'un à l'autre, ou en faisant glisser votre doigt sur l'écran pour passer d'un élément à l'autre (lorsque vous trouvez l'élément souhaité, vous pouvez retirer votre doigt pour le sélectionner).
3. Pour activer l'élément sélectionné (par exemple, ouvrir une application sélectionnée), appuyez deux fois n'importe où sur l'écran.
4. Balayez avec trois doigts pour faire défiler une page.
5. Appuyez avec deux doigts pour effectuer une action contextuelle — par exemple, prendre une photo dans l'application appareil photo.

Pour le désactiver à nouveau, revenez dans _Réglages > Général > Accessibilité > VoiceOver_ en utilisant les gestes ci-dessus, et basculez le curseur _VoiceOver_ sur désactivé.

### Déverrouiller le téléphone

Pour déverrouiller le téléphone, vous devez appuyer sur le bouton principal (ou faire glisser) comme d'habitude. Si vous avez défini un code d'accès, vous pouvez sélectionner chaque numéro en balayant/glissant (comme expliqué ci-dessus) puis en appuyant deux fois pour entrer chaque numéro lorsque vous avez trouvé le bon.

#### Utiliser le Rotor

Lorsque VoiceOver est activé, vous disposez d'une fonction de navigation appelée le Rotor, qui vous permet de choisir rapidement parmi un certain nombre d'options courantes et utiles. Pour l'utiliser&nbsp;:

1. Faites tourner deux doigts sur l'écran comme si vous tourniez un cadran. Chaque option est lue à haute voix au fur et à mesure que vous tournez. Vous pouvez aller et venir pour parcourir les options.
2. Une fois que vous avez trouvé l'option souhaitée&nbsp;:
   - Relâchez vos doigts pour la sélectionner.
   - Si c'est une option dont vous pouvez faire varier la valeur (comme le volume ou la vitesse de lecture), vous pouvez balayer vers le haut ou vers le bas pour augmenter ou diminuer la valeur de l'élément sélectionné.

Les options disponibles sous le Rotor sont sensibles au contexte — elles varient en fonction de l'application ou de la vue dans laquelle vous vous trouvez (voir ci-dessous pour un exemple).

#### Naviguer sur les pages web

Essayons de naviguer sur le web avec VoiceOver&nbsp;:

1. Ouvrez votre navigateur web.
2. Activez la barre d'URL.
3. Entrez une page web qui contient de nombreux titres, comme la page d'accueil de bbc.co.uk. Pour entrer le texte de l'URL&nbsp;:
   - Sélectionnez la barre d'URL en balayant vers la gauche/droite jusqu'à ce que vous y arriviez, puis appuyez deux fois.
   - Pour chaque caractère, maintenez votre doigt sur le clavier virtuel jusqu'à ce que vous obteniez le caractère souhaité, puis relâchez votre doigt pour le sélectionner. Appuyez deux fois pour le taper.
   - Une fois que vous avez terminé, trouvez la touche Entrée et appuyez dessus.

4. Balayez vers la gauche et la droite pour passer d'un élément à l'autre sur la page. Vous pouvez appuyer deux fois sur un élément pour le sélectionner (par exemple, suivre un lien).
5. Par défaut, l'option du Rotor sélectionnée est Vitesse de lecture&nbsp;; vous pouvez actuellement balayer vers le haut et vers le bas pour augmenter ou diminuer la vitesse de lecture.
6. Maintenant, faites tourner deux doigts sur l'écran comme un cadran pour afficher le rotor et passer d'une option à l'autre. Voici quelques exemples des options disponibles&nbsp;:
   - _Vitesse de lecture_&nbsp;: Changez la vitesse de lecture.
   - _Conteneurs_&nbsp;: Passez d'un conteneur sémantique à un autre sur la page.
   - _Titres_&nbsp;: Passez d'un titre à un autre sur la page.
   - _Liens_&nbsp;: Passez d'un lien à un autre sur la page.
   - _Contrôles de formulaire_&nbsp;: Passez d'un contrôle de formulaire à un autre sur la page.
   - _Langue_&nbsp;: Passez d'une traduction à une autre, si elles sont disponibles.

7. Sélectionnez _Titres_&nbsp;. Vous pouvez maintenant balayer vers le haut et vers le bas pour passer d'un titre à un autre sur la page.

> [!NOTE]
> Pour une référence plus complète couvrant les gestes VoiceOver disponibles et d'autres conseils sur les tests d'accessibilité sur iOS, consultez la [documentation VoiceOver d'Apple](https://developer.apple.com/documentation/accessibility/voiceover/).

## Mécanismes de contrôle

Dans notre article sur l'accessibilité CSS et JavaScript, nous avons examiné l'idée d'évènements spécifiques à un certain type de mécanisme de contrôle (voir [Évènements spécifiques à la souris](/fr/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#évènements_spécifiques_à_la_souris)). Pour récapituler, ceux-ci posent des problèmes d'accessibilité, car d'autres mécanismes de contrôle ne peuvent pas activer la fonctionnalité associée.

À titre d'exemple, l'évènement [`click`](/fr/docs/Web/API/Element/click_event) est bon en termes d'accessibilité — un gestionnaire d'évènements associé peut être déclenché en cliquant sur l'élément sur lequel le gestionnaire est défini, en y accédant au clavier avec la touche Tab et en appuyant sur Entrée/Retour, ou en le touchant sur un appareil à écran tactile. Essayez l'exemple de bouton de base suivant pour voir ce que nous voulons dire&nbsp;:

```html hidden live-sample___basic-button
<button>Appuyez-moi !</button>
```

```css hidden live-sample___basic-button
html {
  height: 100%;
}

body {
  height: inherit;
  font-family: sans-serif;
  display: flex;
  align-items: center;
}

h1 {
  text-align: center;
}

button {
  width: 70%;
  margin: 0 auto;
  display: block;
  font-size: 150%;
  line-height: 1.5;
}
```

```js hidden live-sample___basic-button
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("Aïe, ça fait mal !");
});
```

{{EmbedLiveSample("basic-button", "100%", 100)}}

Les évènements spécifiques à la souris, cependant, tels que [mousedown](/fr/docs/Web/API/Element/mousedown_event) et [mouseup](/fr/docs/Web/API/Element/mouseup_event), posent des problèmes — leurs gestionnaires d'évènements ne peuvent pas être invoqués à l'aide de contrôles non liés à la souris.

L'exemple suivant utilise un code comme celui-ci pour vous permettre de faire glisser une boîte à l'écran avec votre souris&nbsp;:

```js
div.addEventListener("mousedown", () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
});

document.addEventListener("mouseup", stopMove);
```

```html hidden live-sample___mouse-drag live-sample___multi-drag
<div></div>
```

```css hidden live-sample___mouse-drag live-sample___multi-drag
html {
  font-family: sans-serif;
  overflow: hidden;
}

body {
  background: #ffffee;
  margin: 0;
}

div {
  background-color: #1fe200;
  background-image: linear-gradient(
    to bottom right,
    rgb(0 0 0 / 0),
    rgb(0 0 0 / 0.4)
  );
  width: 200px;
  height: 150px;
  border: 1px solid green;
  position: absolute;
}
```

```js hidden live-sample___mouse-drag
document.body.width = window.innerWidth;
document.body.height = window.innerHeight;

let mouseX, mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const div = document.querySelector("div");

let initialMouseX = null;

let initialMouseY = null;

let initialBoxX, initialBoxY, rAF;

div.addEventListener("mousedown", () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
});

document.addEventListener("mouseup", stopMove);

function movePanel() {
  if (initialMouseX === null) {
    initialMouseX = mouseX;
    initialMouseY = mouseY;
  } else {
    let mouseMoveX = mouseX - initialMouseX;
    let mouseMoveY = mouseY - initialMouseY;

    let offsetX = initialBoxX + mouseMoveX;
    let offsetY = initialBoxY + mouseMoveY;
    console.log(`${offsetX} ${offsetY}`);

    div.style.left = `${offsetX}px`;
    div.style.top = `${offsetY}px`;
  }

  rAF = requestAnimationFrame(movePanel);
}

function stopMove() {
  cancelAnimationFrame(rAF);

  console.log("mousemove arrêté");

  initialMouseX = null;
  initialMouseY = null;
}
```

{{EmbedLiveSample("mouse-drag", "100%", 400)}}

Cependant, si vous essayez de le faire glisser avec votre doigt sur un appareil à écran tactile, cela ne fonctionne pas. Pour activer d'autres formes de contrôle, vous devez utiliser des évènements différents, mais équivalents — par exemple, les évènements tactiles fonctionnent sur les appareils à écran tactile&nbsp;:

```js
div.addEventListener("touchstart", (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
});

document.addEventListener("touchend", stopMove);
```

```js hidden live-sample___multi-drag
document.body.width = window.innerWidth;
document.body.height = window.innerHeight;

let posX, posY;

document.addEventListener("mousemove", positionHandler);
document.addEventListener("touchmove", positionHandler);

function positionHandler(e) {
  if (e.clientX && e.clientY) {
    posX = e.clientX;
    posY = e.clientY;
  } else if (e.targetTouches) {
    posX = e.targetTouches[0].clientX;
    posY = e.targetTouches[0].clientY;
    e.preventDefault();
  }
}

const div = document.querySelector("div");

let initialPosX = null;

let initialPosY = null;

let rAF;

div.addEventListener("mousedown", () => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  movePanel();
});

div.addEventListener("touchstart", (e) => {
  initialBoxX = div.offsetLeft;
  initialBoxY = div.offsetTop;
  positionHandler(e);
  movePanel();
});

document.addEventListener("mouseup", stopMove);
document.addEventListener("touchend", stopMove);

function movePanel() {
  if (initialPosX === null) {
    initialPosX = posX;
    initialPosY = posY;
  } else {
    let posMoveX = posX - initialPosX;
    let posMoveY = posY - initialPosY;

    let offsetX = initialBoxX + posMoveX;
    let offsetY = initialBoxY + posMoveY;

    div.style.left = `${offsetX}px`;
    div.style.top = `${offsetY}px`;
  }

  rAF = requestAnimationFrame(movePanel);
}

function stopMove() {
  cancelAnimationFrame(rAF);

  initialPosX = null;
  initialPosY = null;
}
```

La version mise à jour fonctionne à la fois avec le glissement de la souris et le glissement tactile&nbsp;:

{{EmbedLiveSample("multi-drag", "100%", 400)}}

> [!NOTE]
> Vous pouvez également consulter des exemples entièrement fonctionnels montrant comment implémenter différents mécanismes de contrôle dans [Implémentation des mécanismes de contrôle de jeu](/fr/docs/Games/Techniques/Control_mechanisms).

## Design réactif

Le [design réactif](/fr/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) est la pratique consistant à faire en sorte que vos mises en page et autres fonctionnalités de vos applications changent dynamiquement en fonction de facteurs tels que la taille et la résolution de l'écran, afin qu'elles soient utilisables et accessibles aux utilisateur·ice·s de différents types d'appareils.

En particulier, les problèmes les plus courants qui doivent être pris en compte pour le mobile sont&nbsp;:

- L'adéquation des mises en page pour les appareils mobiles. Une mise en page à plusieurs colonnes ne fonctionne pas aussi bien sur un écran étroit, par exemple, et la taille du texte peut devoir être augmentée pour qu'elle soit lisible. De tels problèmes peuvent être résolus en créant une mise en page réactive à l'aide de technologies telles que les [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries), la [zone d'affichage](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport) et [les boîtes flexibles](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox).
- Conserver la taille des images téléchargées. En général, les appareils à petit écran n'ont pas besoin d'images aussi grandes que leurs homologues de bureau, et ils sont plus susceptibles d'être sur des connexions réseau lentes. Il est donc judicieux de fournir des images plus petites aux appareils à écran étroit, le cas échéant. Vous pouvez gérer cela en utilisant des [techniques d'images réactives](/fr/docs/Web/HTML/Guides/Responsive_images).
- Penser aux hautes résolutions. De nombreux appareils mobiles disposent d'écrans haute résolution et ont donc besoin d'images de résolution plus élevée afin que l'affichage reste net et précis. Là encore, vous pouvez fournir des images appropriées en utilisant des techniques d'images réactives. De plus, de nombreux besoins en matière d'images peuvent être satisfaits en utilisant le format d'images vectorielles SVG, qui est bien pris en charge par les navigateurs aujourd'hui. Le SVG a une petite taille de fichier et reste net quelle que soit la taille affichée (voir [Inclure des graphiques vectoriels dans HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML) pour plus de détails).

> [!NOTE]
> Nous ne fournissons pas une discussion complète des techniques de design réactif ici, car elles sont couvertes ailleurs sur MDN (voir les liens ci-dessus).

### Considérations spécifiques aux appareils mobiles

Il existe d'autres problèmes importants à prendre en compte pour rendre les sites plus accessibles sur mobile. Nous en avons énuméré quelques-uns ici, mais nous en ajoutons d'autres lorsque nous y pensons.

#### Ne pas désactiver le zoom

Avec [la zone d'affichage](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport), il est possible de désactiver le zoom. Assurez-vous toujours que le redimensionnement est activé et définissez la largeur sur celle de l'appareil dans {{HTMLElement("head")}}&nbsp;:

```html
<meta name="viewport" content="width=device-width; user-scalable=yes" />
```

Vous ne devez jamais définir `user-scalable=no` si c'est possible — de nombreuses personnes ont besoin du zoom pour pouvoir voir le contenu de votre site web, donc supprimer cette fonctionnalité est une très mauvaise idée. Il existe toutefois certaines situations où le zoom peut perturber l'interface utilisateur&nbsp;; dans ces cas-là, si vous estimez nécessaire de désactiver le zoom, vous devez proposer une alternative équivalente, telle qu'une commande permettant d'augmenter la taille du texte sans perturber votre interface utilisateur.

#### Garder les menus accessibles

Comme l'écran est beaucoup plus étroit sur les appareils mobiles, il est très courant d'utiliser des requêtes média et d'autres technologies pour réduire le menu de navigation à une petite icône en haut de l'écran — sur laquelle il est possible d'appuyer pour afficher le menu uniquement si nécessaire — lorsque le site est consulté sur mobile. Cette icône est généralement représentée par trois lignes horizontales, et ce modèle de conception est donc appelé «&nbsp;menu hamburger&nbsp;».

Lorsque vous implémentez un tel menu, vous devez vous assurer que le contrôle permettant de l'afficher est accessible au moyen de mécanismes de contrôle adaptés (normalement le toucher sur mobile), comme indiqué dans [Mécanismes de contrôle](#control_mechanisms) ci-dessus, et que le reste de la page est déplacé ou masqué d'une manière ou d'une autre pendant l'accès au menu, afin d'éviter toute confusion lors de sa navigation.

Pour voir un exemple de menu de navigation accessible et réactif, consultez le [composant de navigation du W3C Design System <sup>(angl.)</sup>](https://design-system.w3.org/components/navigation.html) et son [exemple fonctionnel de navigation d'en-tête <sup>(angl.)</sup>](https://design-system.w3.org/code/header-nav.html).

## Saisie utilisateur

Sur les appareils mobiles, la saisie de données est plus contraignante pour les utilisateur·ice·s que l'expérience équivalente sur les ordinateurs de bureau. Il est plus pratique de saisir du texte dans les champs de formulaire avec un clavier d'ordinateur de bureau ou portable qu'avec un clavier virtuel sur écran tactile ou un petit clavier physique mobile.

Pour cette raison, il vaut la peine d'essayer de réduire au minimum la quantité de saisie nécessaire. Par exemple, au lieu de demander aux utilisateur·ice·s de saisir leur intitulé de poste à chaque fois dans un champ de texte ordinaire, vous pouvez plutôt proposer un menu {{HTMLElement("select")}} contenant les options les plus courantes (ce qui contribue également à la cohérence de la saisie des données) et une option «&nbsp;Autre&nbsp;» qui affiche un champ de texte pour saisir les réponses inhabituelles. Vous pouvez voir un exemple de cette idée dans l'exemple suivant&nbsp;:

```html hidden live-sample___select-text-combo
<div>
  <label for="metier">Type d'emploi&nbsp;:</label>
  <select id="metier" name="metier">
    <option value="">-- sélectionner un emploi --</option>
    <option value="boucher">Boucher·ère</option>
    <option value="boulanger">Boulanger·ère</option>
    <option value="bougie">Fabricant·e de bougies</option>
    <option value="autre">Autre</option>
  </select>
</div>
<div>
  <label for="autre-metier">Autre emploi&nbsp;:</label>
  <input type="text" name="autre-metier" id="autre-metier" />
</div>
```

```css hidden live-sample___select-text-combo
html {
  font-family: sans-serif;
}

div {
  margin-bottom: 10px;
}
```

```js hidden live-sample___select-text-combo
const select = document.querySelector("select");
const other = document.querySelector("input");

other.parentElement.style.display = "none";

select.onchange = function () {
  if (select.value === "autre") {
    other.parentElement.style.display = "block";
  } else {
    other.parentElement.style.display = "none";
  }
};
```

{{EmbedLiveSample("select-text-combo", "100%", 80)}}

Il vaut également la peine d'envisager l'utilisation des types de champs de formulaire HTML sur les plateformes mobiles, car elles les gèrent bien — aussi bien Android qu'iOS.

Par exemple&nbsp;:

- Les types `number`, `tel` et `email` affichent des claviers virtuels adaptés à la saisie de nombres ou de numéros de téléphone.
- Les types `time` et `date` affichent des sélecteurs adaptés au choix des heures et des dates.

Pour les essayer, consultez les exemples interactifs disponibles dans [Les types de champs de saisie HTML5](/fr/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

Si vous souhaitez fournir une solution différente pour les ordinateurs de bureau, vous pouvez toujours servir un balisage différent à vos appareils mobiles à l'aide de la détection de fonctionnalités. Consultez notre article sur la [détection de fonctionnalités](/fr/docs/Learn_web_development/Extensions/Testing/Feature_detection) pour plus d'informations.

## Résumé

Dans cet article, nous vous fournissons quelques détails sur les problèmes courants propres à l'accessibilité mobile et sur la manière de les surmonter. Nous vous présentons également l'utilisation des lecteurs d'écran les plus courants afin de vous aider à tester l'accessibilité.

## Voir aussi

- [Directives pour le développement web mobile <sup>(angl.)</sup>](https://www.smashingmagazine.com/2012/07/guidelines-for-mobile-web-development/) — Une liste d'articles de _Smashing Magazine_ présentant différentes techniques de conception web mobile.
- [Faites fonctionner votre site sur les appareils tactiles <sup>(angl.)</sup>](https://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644) — Un article utile sur l'utilisation des évènements tactiles pour faire fonctionner les interactions sur les appareils mobiles.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Multimedia","Learn_web_development/Core/Accessibility/Accessibility_troubleshooting", "Learn_web_development/Core/Accessibility")}}
