---
title: "EventTarget : constructeur EventTarget()"
short-title: EventTarget()
slug: Web/API/EventTarget/EventTarget
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Le constructeur **`EventTarget()`** crée une nouvelle instance d'objet {{domxref("EventTarget")}}.

> [!NOTE]
> Il est assez rare d'appeler explicitement ce constructeur. La plupart du temps, ce constructeur est utilisé à l'intérieur du constructeur d'un objet étendant l'interface {{domxref("EventTarget")}}, en utilisant le mot-clé [`super`](/fr/docs/Web/JavaScript/Reference/Operators/super).

## Syntaxe

```js
new EventTarget();
```

### Paramètres

Aucun.

### Valeur de retour

Une instance de l'objet {{domxref("EventTarget")}}.

## Exemples

### Implémentation d'un compteur

Cet exemple implémente une classe `Compteur`, avec des méthodes `augmenter()` et `reduire()`. Elle déclenche un événement personnalisé `"valuechange"` lorsque l'une de ces méthodes est appelée.

#### HTML

```html
<button id="dec" aria-label="Réduire">-</button>
<span id="valeurActuelle">0</span>
<button id="inc" aria-label="Augmenter">+</button>
```

#### JavaScript

```js
class Compteur extends EventTarget {
  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }

  #emettreEvenementChangement() {
    this.dispatchEvent(new CustomEvent("valuechange", { detail: this.value }));
  }

  augmenter() {
    this.value++;
    this.#emettreEvenementChangement();
  }

  reduire() {
    this.value--;
    this.#emettreEvenementChangement();
  }
}

const initialValue = 0;
const compteur = new Compteur(initialValue);
document.querySelector("#valeurActuelle").innerText = initialValue;

compteur.addEventListener("valuechange", (event) => {
  document.querySelector("#valeurActuelle").innerText = event.detail;
});

document.querySelector("#inc").addEventListener("click", () => {
  compteur.augmenter();
});

document.querySelector("#dec").addEventListener("click", () => {
  compteur.reduire();
});
```

#### Résultat

{{EmbedLiveSample("implémentation_dun_compteur")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("EventTarget")}}
