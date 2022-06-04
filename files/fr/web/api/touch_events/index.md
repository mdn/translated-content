---
title: Évènements tactiles
slug: Web/API/Touch_events
translation_of: Web/API/Touch_events
original_slug: Web/Guide/DOM/Events/Touch_events
browser-compat: api.Touch
---
{{DefaultAPISidebar("Touch Events")}}

Pour correctement prendre en charge les interfaces utilisateur tactiles, les évènements tactiles fournissent des informations pour interpréter l'activité d'un doigt ou d'un stylet sur un écran ou un pavé tactile.

Les interfaces relatives aux évènements tactiles sont des API de bas niveau qui peuvent être utilisées pour prendre en charge des interactions tactiles à plusieurs points spécifiques pour une application, comme un geste particulier effectué avec deux doigts. Une interaction tactile à plusieurs points démarre lorsqu'un doigt (ou un stylet) commence par toucher la surface de contact. Les autres doigts peuvent ensuite toucher la surface et éventuellement se déplacer sur la surface tactile. L'interaction se termine lorsque les doigts sont retirés de la surface. Pendant cette interaction, une application recevra les évènements tactiles pour les phases de début, de déplacement et de fin.

Les évènements tactiles sont semblables aux évènements liés à la souris, sauf qu'ils prennent en charge les touchers simultanés à différents endroits de la surface tactile. L'interface [`TouchEvent`](/fr/docs/Web/API/TouchEvent) encapsule tous les points de contact qui sont en cours d'activité. L'interface [`Touch`](/fr/docs/Web/API/Touch), représentant un seul point de contact, contient des informations telles la position du point de contact par rapport à la zone d'affichage (<i lang="en">viewport</i>) du navigateur.

## Définitions

- Surface
  - : La surface tactile. Ce peut être un écran ou un pavé tactile.
- Point de contact
  - : Un point de contact avec la surface. Il peut s'agir d'un doigt (ou d'un coude, d'une oreille, d'un nez, etc.) ou d'un stylet.

## Interfaces

- [`TouchEvent`](/fr/docs/Web/API/TouchEvent)
  - : Représente un évènement qui se produit lorsque l'état des contacts de la surface change.
- [`Touch`](/fr/docs/Web/API/Touch)
  - : Représente un unique point de contact entre la personne et la surface tactile.
- [`TouchList`](/fr/docs/Web/API/TouchList)
  - : Représente un groupe de touches. Elle est utilisée, par exemple, lorsque la personne a posé plusieurs doigts sur la surface en même temps.

## Exemple

Dans cet exemple, on suit plusieurs points de contact à la fois, ce qui permet à la personne de dessiner dans un canevas ([`<canvas>`](/fr/docs/Web/HTML/Element/canvas)) avec plusieurs doigts en même temps. Cet exemple ne fonctionnera qu'avec un navigateur qui prend en charge les évènements tactiles.

> **Note :** Dans le texte qui suit, on utilise le terme «&nbsp;doigt&nbsp;» pour décrire le contact avec la surface. Bien entendu, il peut s'agir d'une autre méthode de contact, comme un stylet ou autre.

### Création du canevas

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  Votre navigateur ne prend pas en charge l'élément canvas.
</canvas>
<br>
Journal : <pre id="log" style="border: 1px solid #ccc;"></pre>
```

```css
#log {
  height: 200px;
  width: 600px;
  overflow: scroll;
}
```

### Mise en place des gestionnaires d'évènements

Lors du chargement de la page, la fonction `startup()` détaillée ci-après sera appelée.
Elle met en place les différents gestionnaires d'évènements de l'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) afin qu'on puisse réagir aux évènements tactiles lorsqu'ils ont lieu.

```js
function startup() {
  const el = document.getElementById('canvas');
  el.addEventListener('touchstart', handleStart);
  el.addEventListener('touchend', handleEnd);
  el.addEventListener('touchcancel', handleCancel);
  el.addEventListener('touchmove', handleMove);
  log('Initialisation.');
}

document.addEventListener('DOMContentLoaded', startup);
```

#### Suivre les nouvelles touches

On gare un registre des touches en cours.

```js
const ongoingTouches = [];
```

Lorsqu'un évènement [`touchstart`](/fr/docs/Web/API/Element/touchstart_event) se produit, ce qui correspond à une nouvelle touche, la fonction `handleStart()` ci-après est appelée.

```js
function handleStart(evt) {
  evt.preventDefault();
  log('touchstart.');
  const el = document.getElementById('canvas');
  const ctx = el.getContext('2d');
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    log(`touchstart: ${i}.`);
    ongoingTouches.push(copyTouch(touches[i]));
    const color = colorForTouch(touches[i]);
    log(`Couleur de cette touche avec l'identifiant ${ touches[i].identifier } = ${ color }`);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // un cercle au début
    ctx.fillStyle = color;
    ctx.fill();
  }
}
```

On y appelle [`event.preventDefault()`](/fr/docs/Web/API/Event/preventDefault) pour éviter que le navigateur continue à traiter l'évènement tactile (et également pour éviter qu'un évènement de souris soit émis). Ensuite, on récupère le contexte et on récupère la liste des points de contact qui ont évolué avec la propriété [`TouchEvent.changedTouches`](/fr/docs/Web/API/TouchEvent/changedTouches).

Après ça, on parcourt tous les objets [`Touch`](/fr/docs/Web/API/Touch) de la liste afin de les placer dans un tableau contenant les points de touche actifs et on dessine le point de départ du tracé avec un petit cercle. On utilise une ligne de 4 pixels de large et un cercle avec un rayon de 4 pixels permettra un début de tracé net.

#### Dessiner lors du déplacement du toucher

Chaque fois qu'un ou plusieurs doigts se déplace, un évènement [`touchmove`](/fr/docs/Web/API/Element/touchmove_event) est émis et notre fonction `handleMove()` est appelée. Dans cet exemple, cette fonction s'occupe de mettre à jour les informations de toucher mises en cache et de dessiner une ligne depuis la position précédente vers la position actuelle pour chaque toucher.

```js
function handleMove(evt) {
  evt.preventDefault();
  const el = document.getElementById('canvas');
  const ctx = el.getContext('2d');
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const color = colorForTouch(touches[i]);
    const idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      log(`progression du point de touche ${ idx }`);
      ctx.beginPath();
      log(`ctx.moveTo( ${ ongoingTouches[idx].pageX }, ${ ongoingTouches[idx].pageY } );`);
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      log(`ctx.lineTo( ${ touches[i].pageX }, ${ touches[i].pageY } );`);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // on met à jour le point de contact
    } else {
      log(`impossible de déterminer le point de contact à faire avancer`);
    }
  }
}
```

Cette fonction parcourt également les points de touche qui ont changé en commençant par consulter les informations du tableau de cache avec les informations de l'état précédent afin de déterminer le point de départ du nouveau segment à dessiner. Pour cela, on consulte la propriété [`Touch.identifier`](/fr/docs/Web/API/Touch/identifier) pour chaque point de touche. Cette propriété est un entier unique pour chaque point de touche qui reste le même pendant la durée du contact de chaque doigt avec la surface.

On récupère ainsi les coordonnées du précédent point de touche et on utilise la méthode appropriée du contexte du canevas afin de dessiner un segment qui rejoint les deux positions.

Une fois la ligne dessinée, on appelle [`Array.splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) afin de remplacer les informations précédentes sur les points de touche avec les informations actuelles, contenues dans le tableau `ongoingTouches`.

#### Gérer la fin d'un contact

Lorsque la personne lève le doigt de la surface, un évènement [`touchend`](/fr/docs/Web/API/Element/touchend_event) est émis. On gère celui-ci avec la fonction `handleEnd()` ci-après. Son rôle est de dessiner le dernier segment pour chaque point de touche qui se termine et de le retirer de la liste des points de touche en cours.

```js
function handleEnd(evt) {
  evt.preventDefault();
  log('touchend');
  const el = document.getElementById('canvas');
  const ctx = el.getContext('2d');
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    const color = colorForTouch(touches[i]);
    let idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // on dessine un carré à la fin
      ongoingTouches.splice(idx, 1);  // on le retire du tableau de suivi
    } else {
      log(`impossible de déterminer le point de contact à terminer`);
    }
  }
}
```

Cela ressemble beaucoup à la fonction précédente. Les seules différences majeures sont&nbsp;: le dessin qui est fait à la fin (il s'agit ici d'un petit carré) et qu'au lieu d'appeler [`Array.splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), on retire l'élément de la liste des points de contact actifs, sans mettre à jour l'information. Par conséquent, on arrête de suivre ce point de contact.

#### Gérer les touches annulées

Si le doigt de la personne va jusqu'à l'interface utilisateur du navigateur ou qu'il faut annuler la touche pour une autre raison, l'évènement [`touchcancel`](/fr/docs/Web/API/Element/touchcancel_event) sera émis. On le gère grâce à la fonction `handleCancel()` qui suit.

```js
function handleCancel(evt) {
  evt.preventDefault();
  log('touchcancel.');
  const touches = evt.changedTouches;

  for (let i = 0; i < touches.length; i++) {
    let idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // on le retire du tableau de suivi
  }
}
```

Comme il s'agit ici d'interrompre immédiatement le contact, on retire ce point de la liste sans dessiner de segment final.

### Fonctions utilitaires

Dans cet exemple, on utilise quelques fonctions utilitaires qui permettent de clarifier le reste du code. Nous allons les voir ici rapidement.

#### Sélectionner une couleur pour chaque point de touche

Pour que chaque tracé associé à un contact donné soit différent, on utilise la fonction `colorForTouch()` afin de sélectionner une couleur, construite à partir de l'identifiant unique du point de touche. L'identifiant est un nombre opaque, mais on peut au moins partir du principe qu'il est différent pour chaque point de touche.

```js
function colorForTouch(touch) {
  let r = touch.identifier % 16;
  let g = Math.floor(touch.identifier / 3) % 16;
  let b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // on le transforme en chiffre hexadécimal
  g = g.toString(16); // on le transforme en chiffre hexadécimal
  b = b.toString(16); // on le transforme en chiffre hexadécimal
  const color = "#" + r + g + b;
  return color;
}
```

Cette fonction produit une chaîne de caractères qu'on peut utiliser lorsqu'on appelle les fonctions de [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) qui permettent de dessiner les couleurs. Ainsi, avec une propriété [`Touch.identifier`](/fr/docs/Web/API/Touch/identifier) qui vaut 10, on obtiendra la chaîne de caractères `"#a31"`.

#### Copier un objet de touche

Certains navigateurs (Safari sur mobile par exemple) réutilisent les objets de touche entre les évènements, il vaut donc mieux copier les propriétés qui nous intéressent plutôt que d'utiliser une référence vers l'objet.

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### Trouver un contact en cours

La fonction `ongoingTouchIndexById()` ci-après parcourt le tableau `ongoingTouches` afin de trouver le point de touche correspondant à l'identifiant donné puis renvoie l'indice de ce point de touche dans le tableau.

```js
function ongoingTouchIndexById(idToFind) {
  for (let i = 0; i < ongoingTouches.length; i++) {
    const id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // non trouvé
}
```

#### Renseigner le journal des évènements

```js
function log(msg) {
  const container = document.getElementById('log');
  container.textContent = `${ msg } \n${ container.textContent }`;
}
```

### Résultat

Vous pouvez tester cet exemple sur un appareil mobile en touchant le cadre qui suit.

{{EmbedLiveSample('','100%', 900)}}

> **Note :** De façon plus générale, cet exemple fonctionne sur les plateformes qui fournissent des évènements tactiles. Il est possible de tester cet exemple sur les navigateurs de bureau qui peuvent simuler de tels évènements&nbsp;:
>
> - Sur Firefox, on peut activer «&nbsp;la simulation des évènements tactiles&nbsp;» dans [la vue adaptative](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#toggling-responsive-design-mode) (il peut être nécessaire de recharger la page).
> - Sur Chrome, on peut utiliser [le mode appareil](https://developer.chrome.com/docs/devtools/device-mode/) et choisir [un type d'appareil](https://developer.chrome.com/docs/devtools/device-mode/#type) qui émet des évènements tactiles.

## Conseils supplémentaires

Dans cette section, on voit quelques astuces supplémentaires sur la gestion des évènements tactiles d'une application web.

### Gestion des clics

En appelant `preventDefault()` sur un évènement [`touchstart`](/fr/docs/Web/API/Element/touchstart_event) ou sur le premier évènement [`touchmove`](/fr/docs/Web/API/Element/touchmove_event) d'une série, on empêche le déclenchement des évènements de souris. On appelle généralement `preventDefault()` sur `touchmove` plutôt que sur `touchstart`. Ainsi, les évènements de la souris peuvent se déclencher et certaines choses comme les liens continueront de fonctionner. D'une autre façon, certains <i lang="en">frameworks</i> ont pris le parti de réémettre les évènements tactiles sous la forme d'évènements de souris pour les mêmes raisons. L'exemple qui suit est extrêmement simplifié et peut avoir un comportement étrange, il s'agit uniquement d'un guide sur ce sujet.

```js
function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == 'touchend' && evt.touches.length > 0))
    return;

  const newEvt = document.createEvent('MouseEvents');
  let type = null;
  let touch = null;

  switch (evt.type) {
    case 'touchstart':
      type = 'mousedown';
      touch = evt.changedTouches[0];
      break;
    case 'touchmove':
      type = 'mousemove';
      touch = evt.changedTouches[0];
      break;
    case 'touchend':
      type = 'mouseup';
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
  evt.originalTarget.dispatchEvent(newEvt);
}
```

### Appeler `preventDefault()` au second contact

Une technique pour éviter les évènements `pinchZoom` sur une page consiste à appeler `preventDefault()` lors du deuxième contact d'une série de touches. Ce comportement n'est pas bien défini dans la spécification des évènements tactiles et aura différents résultats selon les navigateurs (iOS empêchera le zoom mais permettra le déplacement à deux doigts, Android permettra le zoom mais pas le déplacement et Opera et Firefox empêchent tout zoom ou déplacement). À l'heure actuelle, il n'est pas recommandé d'exploiter ce comportement particulier, mais plutôt d'utiliser les informations de métadonnées ([`<meta>`](/fr/docs/Web/HTML/Element/meta/name)) sur la zone d'affichage (<i lang="en">viewport</i>) pour empêcher le zoom intempestif.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Les évènements tactiles sont généralement disponibles pour les appareils qui disposent d'un écran tactile. Toutefois, de nombreux navigateurs rendent cette API indisponible pour les appareils de bureau, y compris pour ceux dotés d'écrans tactiles.

Ce comportement s'explique par la stratégie utilisée par certains sites web qui, s'ils détectent la disponibilité de l'API des évènements tactiles, détermineront que le navigateur s'exécute sur un appareil mobile et serviront un contenu optimisé pour mobile. Cette stratégie peut fournir une expérience de mauvaise qualité aux personnes qui utilisent un ordinateur de bureau doté d'un écran tactile.

Pour prendre en charge le tactile et la souris quel que soit le type d'appareil, on utilisera plutôt [les évènements de pointeur](/fr/docs/Web/API/Pointer_events).

{{Compat}}
