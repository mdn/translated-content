---
title: "Window : méthode clearTimeout()"
short-title: clearTimeout()
slug: Web/API/Window/clearTimeout
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("HTML DOM")}}

La méthode **`clearTimeout()`** de l'interface {{DOMxRef("Window")}} annule un délai précédemment établi en appelant {{DOMxRef("Window.setTimeout()")}}.

Si le paramètre fourni n'identifie pas une action précédemment établie, cette méthode ne fait rien.

## Syntaxe

```js-nolint
clearTimeout(timeoutID)
```

### Paramètres

- `timeoutID`
  - : L'identifiant du délai que vous souhaitez annuler. Cet ID a été retourné par l'appel correspondant à `setTimeout()`.

Il est utile de noter que l'ensemble d'ID utilisé par {{DOMxRef("Window.setTimeout", "setTimeout()")}} et {{DOMxRef("Window.setInterval", "setInterval()")}} est partagé, ce qui signifie que vous pouvez techniquement utiliser `clearTimeout()` et {{DOMxRef("Window.clearInterval", "clearInterval()")}} de façon interchangeable. Cependant, pour plus de clarté, il est préférable d'éviter de le faire.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Exécutez le script ci-dessous dans le contexte d'une page web et cliquez sur la page une fois. Vous verrez un message apparaître dans une seconde. Si vous cliquez plusieurs fois sur la page en une seconde, l'alerte n'apparaît qu'une seule fois.

```js
const alarme = {
  rappel(message) {
    alert(message);
    this.timeoutID = undefined;
  },

  configurer() {
    if (typeof this.timeoutID === "number") {
      this.annuler();
    }

    this.timeoutID = setTimeout(
      (msg) => {
        this.rappel(msg);
      },
      1000,
      "Réveille-toi !",
    );
  },

  annuler() {
    clearTimeout(this.timeoutID);
  },
};
window.addEventListener("click", () => alarme.configurer());
```

## Notes

Transmettre un ID non valide à `clearTimeout()` ne fait rien silencieusement&nbsp;; aucune exception n'est levée.

## Spécifications

{{Specifications}}

## Compatibilité des névigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Window.setTimeout()")}}
- La méthode {{DOMxRef("WorkerGlobalScope.clearTimeout()")}}
- La méthode {{DOMxRef("Window.clearInterval()")}}
- La méthode {{DOMxRef("Window.cancelAnimationFrame()")}}
