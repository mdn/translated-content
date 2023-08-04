---
title: element.removeEventListener
slug: Web/API/EventTarget/removeEventListener
---

{{APIRef("DOM Events")}}

La méthode **`EventTarget.removeEventListener()`** supprime d'une {{domxref("EventTarget")}} (_cible_) un écouteur d'évènements précédemment enregistré avec {{domxref("EventTarget.addEventListener()")}}. L'écouteur d'évènements à supprimer est identifié en utilisant la combinaison du type d'évènement, la fonction "event listener" elle-même et diverses options factultatives qui peuvent affecter le processus de correspondance ; voir la section _Correspondance utilisée pour la suppression d'écouteurs d'événements_ ci-après.

## Syntaxe

```js
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

### Paramètres

- `type`
  - : Une chaîne représentant le type d'événement pour lequel supprimer un écouteur d'évènements.
- `listener`
  - : La fonction {{domxref("EventListener")}} du gestionnaire d'évènements à retirer de la cible d'évènements.
- `options` {{optional_inline}}

  - : Un objet d'options qui spécifie les caractéristiques de l'écouteur d'évènements. Les options disponibles sont :

    - `capture` : un {{jsxref("Boolean")}} indiquant que les évènements de ce type seront envoyés au `listener` enregistré avant d'être distribués à tout `EventTarget` en-dessous dans l'arborescence du DOM.
    - `passive` : un {{jsxref("Boolean")}} qui indique que le `listener` n'appellera jamais `preventDefault()`. S'il doit le faire, l'agent utilisateur l'ignorera et génèrera un avertissement dans la console.
    - {{non-standard_inline}} `mozSystemGroup` : Disponible seulement pour le code exécuté dans XBL ou dans le chrome de Firefox, c'est un {{jsxref("Boolean")}} indiquant que l'écouteur a été ajouté au groupe système.

- `useCapture` {{optional_inline}}
  - : Indique si l'[`EventListener`](/fr/docs/Web/API/EventListener) à retirer a été enregistré comme un écouteur capturant, ou non. Si le paramètre est absent, la valeur par défaut est `false` (_faux_).

Si un écouteur est enregistré deux fois, un avec capture et un sans, supprimez chacun séparément. La suppression d'un écouteur de capture n'affecte pas une version non capturante du même écouteur, et vice versa.

### Valeur de retour

`undefined`. (_indéfini_)

### Correspondance utilisée pour la suppression d'écouteurs d'événements

Étant donné qu'un écouteur d'événements a déjà été ajouté en appelant {{domxref("EventTarget.addEventListener","addEventListener()")}}, vous pouvez éventuellement arriver à un point auquel vous devez le supprimer. Vous devez alors spécifier le même `type` et les mêmes paramètres `listener` pour `removeEventListener()`, mais qu'en est-il des paramètres `options` ou `useCapture` ?

Alors que `addEventListener()` vous permet d'ajouter le même écouteur plus d'une fois pour le même type si les options sont différentes, la seule option que `removeEventListener()` vérifie est l'indicateur `capture` / `useCapture`. Sa valeur doit correspondre pour que `removeEventListener()` corresponde, mais pas les autres valeurs.

Par exemple, considérons l'appel de `addEventListener()` :

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Maintenant, voyons chacun des deux appels de `removeEventListener()` :

```js
element.removeEventListener("mousedown", handleMouseDown, false); // Fails
element.removeEventListener("mousedown", handleMouseDown, true);
```

Le premier appel échoue parce que la valeur de `useCapture` ne correspond pas. Le second réussit puisqu'il correspond pour `useCapture`.

Maintenant, observez ceci :

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Ici, nous spécifions un objet `options` dans lequel `passive` est défini à `true`, tandis que les autres options sont laissées à la valeur par défaut de `false`.

Maintenant, regardez chacun de ces appels successifs à `removeEventListener()`. N'importe lequel d'entre eux dans lequel `capture` ou `useCapture` est `true` (_vrai_) échoue ; tous les autres réussissent. Seul le paramètre de `capture` est important pour `removeEventListener()`.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true }); // Réussit
element.removeEventListener("mousedown", handleMouseDown, { capture: false }); // Réussit
element.removeEventListener("mousedown", handleMouseDown, { capture: true }); // Échoue
element.removeEventListener("mousedown", handleMouseDown, { passive: false }); // Réussit
element.removeEventListener("mousedown", handleMouseDown, false); // Réussit
element.removeEventListener("mousedown", handleMouseDown, true); // Échoue
```

Il est à noter que certaines versions du navigateur ont été incohérentes à ce sujet, et sauf si vous avez des raisons spécifiques, il est probablement sage d'utiliser les mêmes valeurs que pour l'appel à `addEventListener()` lors de l'appel de `removeEventListener()`.

## Notes

Si un {{domxref("EventListener")}} est retiré d'un {{domxref("EventTarget")}} alors qu'il est en train de traiter un événement, il ne sera pas déclenché par les actions courantes. Les {{domxref("EventListener")}} ne peuvent jamais être invoqués après avoir été retirés.

L'appel de `removeEventListener()` avec des paramètres n'identifiant aucun {{domxref("EventListener")}} actuellement enregistré sur l'`EventTarget` n'a aucun effet.

## Exemples

Cet exemple montre comment ajouter un écouteur d'évènements basé sur `click` et supprimer un écouteur d'évènements basé sur `mouseover`.

```js
var body = document.querySelector("body"),
  clickTarget = document.getElementById("click-target"),
  mouseOverTarget = document.getElementById("mouse-over-target"),
  toggle = false;

function makeBackgroundYellow() {
  "use strict";

  if (toggle) {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "yellow";
  }

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow, false);

mouseOverTarget.addEventListener("mouseover", function () {
  "use strict";

  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Prothèse (_polyfill_) pour la prise en charge des navigateurs anciens

`addEventListener()` et `removeEventListener()` ne sont pas présents dans les anciens navigateurs. Vous pouvez contourner ce problème en insérant le code suivant au début de vos scripts, permettant l'utilisation de `addEventListener()` et `removeEventListener()` dans les implémentations qui ne le supportent pas nativement. Toutefois, cette méthode ne fonctionnera pas sur Internet Explorer 7 ou version antérieure, car l'extension du fichier Element.prototype n'a pas été prise en charge jusqu'à Internet Explorer 8.

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) {
      oEvent = window.event;
    }
    for (
      var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type];
      iElId < oEvtListeners.aEls.length;
      iElId++
    ) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) {
          oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
        }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (
    sEventType,
    fListener /*, useCapture (will be ignored!) */,
  ) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (
        var nElIdx = -1, iElId = 0;
        iElId < oEvtListeners.aEls.length;
        iElId++
      ) {
        if (oEvtListeners.aEls[iElId] === this) {
          nElIdx = iElId;
          break;
        }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) {
            return;
          }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [[fListener]] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (
    sEventType,
    fListener /*, useCapture (will be ignored!) */,
  ) {
    if (!oListeners.hasOwnProperty(sEventType)) {
      return;
    }
    var oEvtListeners = oListeners[sEventType];
    for (
      var nElIdx = -1, iElId = 0;
      iElId < oEvtListeners.aEls.length;
      iElId++
    ) {
      if (oEvtListeners.aEls[iElId] === this) {
        nElIdx = iElId;
        break;
      }
    }
    if (nElIdx === -1) {
      return;
    }
    for (
      var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx];
      iLstId < aElListeners.length;
      iLstId++
    ) {
      if (aElListeners[iLstId] === fListener) {
        aElListeners.splice(iLstId, 1);
      }
    }
  };
}
```

## Voir aussi

- {{domxref("EventTarget.addEventListener")}}
- {{non-standard_inline}}{{domxref("EventTarget.detachEvent()")}}.
