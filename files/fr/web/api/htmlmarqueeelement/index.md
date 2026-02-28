---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

L'interface **`HTMLMarqueeElement`** fournit des méthodes pour manipuler les éléments HTML {{HTMLElement("marquee")}}.

Elle hérite des propriétés et méthodes de l'interface {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : Définit la façon dont le texte défile à l'intérieur du marquee. Les valeurs possibles sont `scroll`, `slide` et `alternate`. Si aucune valeur n'est définie, la valeur par défaut est `scroll`.
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : Définit la couleur de fond via un nom de couleur ou une valeur hexadécimale.
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : Définit la direction du défilement à l'intérieur du marquee. Les valeurs possibles sont `left`, `right`, `up` et `down`. Si aucune valeur n'est définie, la valeur par défaut est `left`.
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : Définit la hauteur en pixels ou en pourcentage.
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : Définit la marge horizontale.
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : Définit le nombre de fois que le texte défilera. Si aucune valeur n'est définie, la valeur par défaut est −1, ce qui signifie que le texte défilera en continu.
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : Définit la quantité de défilement à chaque intervalle en pixels. La valeur par défaut est 6.
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : Définit l'intervalle entre chaque mouvement de défilement en millisecondes. La valeur par défaut est 85. Notez que toute valeur inférieure à 60 est ignorée et la valeur 60 est utilisée à la place, sauf si `trueSpeed` est à `true`.
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : Par défaut, les valeurs de `scrollDelay` inférieures à 60 sont ignorées. Si `trueSpeed` est à `true`, alors ces valeurs ne sont pas ignorées.
- `HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : Définit la marge verticale.
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : Définit la largeur en pixels ou en pourcentage.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : Démarre le défilement du marquee.
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : Arrête le défilement du marquee.

## Évènements

- `bounce` {{Deprecated_Inline}}
  - : Se déclenche lorsque le marquee a atteint la fin de sa position de défilement. Il ne peut se déclencher que lorsque l'attribut `behavior` est défini à `alternate`.
- `finish` {{Deprecated_Inline}}
  - : Se déclenche lorsque le marquee a terminé le nombre de défilements défini par l'attribut `loop`. Il ne peut se déclencher que si l'attribut `loop` est défini à une valeur supérieure à 0.
- `start` {{Deprecated_Inline}}
  - : Se déclenche lorsque le marquee commence à défiler.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("marquee")}}
