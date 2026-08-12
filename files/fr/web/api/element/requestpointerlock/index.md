---
title: "Element : méthode requestPointerLock()"
short-title: requestPointerLock()
slug: Web/API/Element/requestPointerLock
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Pointer Lock API")}}

La méthode **`requestPointerLock()`** de l'interface {{DOMxRef("Element")}} permet de demander de manière asynchrone que le pointeur soit verrouillé sur l'élément donné.

Pour suivre le succès ou l'échec de la demande, il est nécessaire d'écouter les évènements {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}} et {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}} au niveau du {{DOMxRef("Document")}}.

> [!NOTE]
> Dans la spécification actuelle, `requestPointerLock()` ne communique le succès ou l'échec de la demande qu'en déclenchant les évènements {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}} ou {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}. [Une mise à jour proposée de la spécification <sup>(angl.)</sup>](https://github.com/w3c/pointerlock/pull/49) met à jour `requestPointerLock()` pour qu'elle retourne une promesse ({{JSxRef("Promise")}}) qui communique le succès ou l'échec. Cette page documente la version qui retourne une promesse ({{JSxRef("Promise")}}). Cependant, notez que cette version n'est pas encore une norme et n'est pas implémentée par tous les navigateurs. Voir [la compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus d'informations.

## Syntaxe

```js-nolint
requestPointerLock()
requestPointerLock(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet d'options qui peut contenir les propriétés suivantes&nbsp;:
    - `unadjustedMovement` {{Optional_Inline}}
      - : Désactive l'ajustement au niveau du système d'exploitation pour l'accélération de la souris et permet d'accéder aux données brutes de la souris. La valeur par défaut est `false`&nbsp;; la définir sur `true` désactive l'accélération de la souris.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec {{JSxRef("undefined")}}.

## Sécurité

Une {{Glossary("Transient activation", "activation transitoire")}} est requise lors de l'appel de `requestPointerLock()`. L'utilisateur·ice doit interagir avec la page ou un élément de l'interface utilisateur pour que cette fonctionnalité fonctionne. De plus, le document associé à l'élément cible doit être dans l'état actif.

Si vous appelez `requestPointerLock()` immédiatement après avoir libéré le verrouillage du pointeur avec le geste de déverrouillage par défaut (au lieu de passer par un appel à `exitPointerLock()`), l'appel échoue, même si une {{Glossary("Transient activation", "activation transitoire")}} est disponible.

Si vous appelez `requestPointerLock()` avec {{DOMxRef("Element.requestFullscreen()", "requestFullscreen()")}}, le `requestPointerLock()` doit être appelé en premier, car le {{DOMxRef("Element.requestFullscreen()", "requestFullscreen()")}} consomme l'état de {{Glossary("Transient activation", "l'activation transitoire")}}.

Le [jeton de bac à sable](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox) `allow-pointer-lock` doit être ajouté lors de l'appel de `requestPointerLock()` dans un élément HTML {{HTMLElement("iframe")}}. De plus, aucun autre élément dans d'autres éléments HTML {{HTMLElement("iframe")}} ne peut être en mode verrouillage du pointeur.

## Exemples

Le verrouillage du pointeur est souvent utilisé dans les jeux en ligne, lorsque vous souhaitez que les mouvements de votre souris se concentrent sur le contrôle du jeu, sans être distrait par le pointeur de la souris se déplaçant, sortant de la zone de jeu ou atteignant le bord de la fenêtre.

Pour activer le verrouillage du pointeur, vous devez amener l'utilisateur·ice à interagir avec l'interface utilisateur d'une manière ou d'une autre, peut-être en appuyant sur un bouton, ou sur le canevas du jeu lui-même.

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

Les systèmes d'exploitation activent par défaut l'accélération de la souris, ce qui est utile lorsque vous souhaitez parfois des mouvements lents et précis (par exemple lorsque vous utilisez un logiciel de graphisme), mais que vous souhaitez également parcourir de grandes distances avec un mouvement de souris plus rapide (par exemple pour faire défiler et sélectionner plusieurs fichiers). Cependant, pour certains jeux en perspective à la première personne, les données brutes de la souris sont préférées pour contrôler la rotation de la caméra — où le même mouvement de distance, rapide ou lent, entraîne la même rotation. Cela se traduit par une meilleure expérience de jeu et une plus grande précision, selon les joueur·euse·s professionnel·le·s.

Pour désactiver l'accélération de la souris au niveau du système d'exploitation et accéder aux données brutes de la souris, vous pouvez définir `unadjustedMovement` sur `true`&nbsp;:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

Pour plus d'exemples de code, voir&nbsp;:

- [la démonstration de verrouillage du pointeur <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/pointer-lock/) ([voir le code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/pointer-lock))
- {{DOMxRef("Pointer Lock API", "L'API Pointer Lock", "", "nocode")}}
- [Désactiver l'accélération de la souris pour une meilleure expérience de jeu FPS <sup>(angl.)</sup>](https://web.dev/articles/disable-mouse-acceleration)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Document.pointerLockElement")}}
- La méthode {{DOMxRef("Document.exitPointerLock()")}}
- [L'API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API)
