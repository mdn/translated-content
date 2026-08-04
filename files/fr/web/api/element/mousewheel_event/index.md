---
title: "Element : évènement mousewheel"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{Non-standard_Header}}

L'évènement _obsolète_ et _non standard_ **`mousewheel`** est déclenché de manière asynchrone sur un objet {{DOMxRef("Element")}} pour fournir des mises à jour lorsqu'une molette de souris ou un dispositif similaire est utilisé. L'évènement `mousewheel` n'a jamais fait partie d'une norme, et bien qu'il ait été implémenté par plusieurs navigateurs, il n'a jamais été implémenté par Firefox.

> [!NOTE]
> Au lieu de cet évènement obsolète, utilisez l'évènement standard {{DOMxRef("Element.wheel_event", "wheel")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("mousewheel", (event) => { })

onmousewheel = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("WheelEvent")}}. Hérite de {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## La propriété `detail`

La valeur de la propriété {{DOMxRef("UIEvent/detail", "detail")}} est toujours nulle, sauf dans Opera, qui utilise `detail` de manière similaire à l'évènement spécifique à Firefox {{DOMxRef("Element.DOMMouseScroll_event", "DOMMouseScroll")}} dont la valeur `detail` indique la distance de défilement en termes de lignes, les valeurs négatives indiquant que le défilement se fait vers le bas ou vers la droite, et les valeurs positives indiquant un défilement vers le haut ou vers la gauche.

> [!NOTE]
> Sur macOS, la distance de défilement (et donc la valeur de `detail`) est calculée en fonction de la distance de défilement accélérée.

Sur Linux, `2` ou `-2` est défini par évènement de molette natif.

## Valeur de `wheelDelta`, `wheelDeltaX` et `wheelDeltaY`

La valeur de l'attribut `wheelDelta` est une valeur abstraite qui indique de combien la molette a tourné. Si la molette a tourné loin de l'utilisateur·ice, elle est positive, sinon négative. Cela signifie que le signe de la valeur delta est différent de celui de `wheel` de DOM Level 3 Event. Cependant, la signification de la quantité de ces valeurs n'est pas la même selon les navigateurs. Voir l'explication suivante pour plus de détails.

Internet Explorer et Opera (Presto) ne prennent en charge que l'attribut `wheelDelta` et ne prennent _pas_ en charge le défilement horizontal.

La valeur de l'attribut `wheelDeltaX` indique la valeur de l'attribut `wheelDelta` le long de l'axe horizontal. Lorsque l'utilisateur·ice utilise le dispositif pour faire défiler vers la droite, la valeur est négative. Sinon, c'est-à-dire si c'est vers la gauche, la valeur est positive.

La valeur de l'attribut `wheelDeltaY` indique la valeur de l'attribut `wheelDelta` le long de l'axe vertical. Le signe de la valeur est le même que celui de l'attribut `wheelDelta`.

### Chrome

Sur Windows, la valeur est la même que la valeur delta de `WM_MOUSEWHEEL` ou `WM_MOUSEHWHEEL`. De plus, la valeur ne change pas même si la quantité de défilement des paramètres système est le défilement par page, c'est-à-dire que la valeur est la même que celle d'IE sur Windows.

Sur Linux, la valeur est `120` ou `-120` par évènement de molette natif. Cela produit le même comportement que IE et Chrome sur Windows.

Sur macOS, la valeur est compliquée. La valeur change si le **dispositif** qui provoque l'évènement de molette natif prend en charge le défilement continu.

Si le dispositif prend en charge le défilement continu (par exemple, le trackpad d'un MacBook ou une molette de souris qui peut être tournée en douceur), la valeur est calculée à partir de la quantité de défilement accélérée. Dans ce cas, la valeur est la même que celle de Safari.

Si le dispositif ne prend **pas** en charge le défilement continu (typiquement, une ancienne molette de souris qui ne peut pas être tournée en douceur), la valeur est calculée à partir de la quantité de défilement non accélérée (120 par cran). Dans ce cas, la valeur est différente de celle de Safari.

Cette différence pose un problème sérieux pour les développeur·euse·s d'applications web. En effet, les développeur·euse·s web ne peuvent pas savoir quel dispositif a provoqué l'évènement `mousewheel`.

### Safari

La valeur est toujours calculée à partir de l'accélération du défilement. Cela diffère considérablement des autres navigateurs, à l'exception de Chrome sur les appareils prenant en charge le défilement continu.

### Opera (Presto)

La valeur est toujours la valeur de l'attribut `detail` ✕ `40`.

Sur Windows, comme la valeur de l'attribut `detail` est calculée à partir de la quantité de défilement réelle, la valeur est différente des autres navigateurs, sauf si la quantité de défilement par cran est de 3 lignes dans les paramètres système ou une page.

Sur Linux, la valeur est `80` ou `-80` par évènement de molette natif. Cela diffère des autres navigateurs.

Sur macOS, la valeur de l'attribut `detail` est calculée à partir de la quantité de défilement accélérée de l'évènement de molette natif. La valeur est généralement beaucoup plus grande que celle de Safari ou de Chrome.

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement standard {{DOMxRef("Element/wheel_event", "wheel")}} à écouter à la place.
