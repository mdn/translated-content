---
title: KeyboardEvent
slug: Web/API/KeyboardEvent
tags:
  - API
  - DOM
  - Evènements IU
  - Interface
  - Reference
  - évènements
translation_of: Web/API/KeyboardEvent
---
{{APIRef("DOM Events")}}

Les objets **`KeyboardEvent`** décrivent l'interaction d'un utilisateur avec le clavier. Chaque événement décrit une touche&nbsp;; le type d'événement (`keydown`, `keypress`, ou `keyup`) identifie quel type d'activité a été effectué.

> **Note :** `KeyboardEvent` indique exactement ce qui est en train de se passer sur une touche. Lorsque vous devez gérer une saisie de texte, utilisez l'événement `input` HTML5 à la place. Par exemple, si un utilisateur saisit du texte à partir d'un système d'écriture à la main comme une tablette PC, les événements touche peuvent ne pas être déclenchés.

## Constructeur

- {{domxref("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}
  - : Crée un objet `KeyboardEvent`.

## Méthodes

_Cette interface hérite également des méthodes de ses parents, {{domxref("UIEvent")}} et {{domxref("Event")}}._

- {{domxref("KeyboardEvent.getModifierState()")}}

  - : Retourne un {{jsxref("Boolean")}} indiquant si une touche modifcatrice, telle que

    <kbd>Alt</kbd>

    ,

    <kbd>Shift</kbd>

    ,

    <kbd>Ctrl</kbd>

    , ou

    <kbd>Meta</kbd>

    , était pressée quand l'évènement a été créé.

- {{domxref("KeyboardEvent.initKeyEvent()")}}{{deprecated_inline}}
  - : Initialise un objet `KeyboardEvent`. Ceci a été implémenté seulement par Gecko (d'autres utilisaient {{domxref ("KeyboardEvent.initKeyboardEvent()")}}) et ne devrait plus être utilisé. La manière moderne standard consiste à utiliser le constructeur {{domxref ("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.
- {{domxref("KeyboardEvent.initKeyboardEvent()")}}{{deprecated_inline}}
  - : Initialise un objet `KeyboardEvent`. Cela n'a jamais été implémenté par Gecko (qui utilisait {{domxref ("KeyboardEvent.initKeyEvent()")}}) et ne devrait plus être utilisé. La manière moderne standard consiste à utiliser le constructeur {{domxref ("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Propriétés

_Cette interface hérite également des propriétés de ses parents, {{domxref("UIEvent")}} et {{domxref("Event")}}._

- {{domxref("KeyboardEvent.altKey")}} {{Readonlyinline}}

  - : Returne un {{jsxref("Boolean")}} qui est `true` si la touche

    <kbd>Alt</kbd>

    (

    <kbd>Option</kbd>

    ou

    <kbd>⌥</kbd>

    sous OS X) était active quand l'évènement touche a été généré.

- {{domxref("KeyboardEvent.char")}} {{Non-standard_inline}}{{Deprecated_inline}}{{Readonlyinline}}

  - : Renvoie une {{domxref("DOMString")}} représentant la valeur de caractère de la touche. Si la touche correspond à un caractère imprimable, cette valeur est une chaîne Unicode non vide contenant ce caractère. Si la touche n'a pas de représentation imprimable, il s'agit d'une chaîne vide.

    > **Note :** si la touche est utilisée comme une macro insérant plusieurs caractères, la valeur de cet attribut est la chaîne entière, pas seulement le premier caractère.

    > **Attention :** cela a été supprimé des DOM Level 3 Events. C'est pris en charge uniquement sur IE9 + et Microsoft Edge.

- {{domxref("KeyboardEvent.charCode")}} {{Deprecated_inline}}{{Readonlyinline}}

  - : Retourne un {{jsxref ("Number")}} représentant le numéro de référence Unicode de la touche ; cet attribut est utilisé uniquement par l'événement `keypress`. Pour les touches dont l'attribut `char` contient plusieurs caractères, il s'agit de la valeur Unicode du premier caractère de cet attribut. Dans Firefox 26, cela retourne des codes pour les caractères imprimables.

    > **Attention :** cet attribut est obsolète : vous devriez utiliser {{domxref("KeyboardEvent.key")}} à la place, si disponible.

- {{domxref("KeyboardEvent.code")}} {{Readonlyinline}}
  - : Retourne une {{domxref ("DOMString")}} avec la valeur du code de la touche représentée par l'événement.
- {{domxref("KeyboardEvent.ctrlKey")}} {{Readonlyinline}}

  - : Retourne un {{jsxref ("Boolean")}} qui est `true` si la touche

    <kbd>Ctrl</kbd>

    était active lorsque l'événement touche a été généré.

- {{domxref("KeyboardEvent.isComposing")}} {{Readonlyinline}}
  - : Renvoie un {{jsxref ("Boolean")}} qui est `true` si l'événement est déclenché après `compositionstart` et avant `compositionend`.
- {{domxref("KeyboardEvent.key")}} {{Readonlyinline}}
  - : Retourne une {{domxref ("DOMString")}} représentant la valeur de touche de la touche représentée par l'événement.
- {{domxref("KeyboardEvent.keyCode")}} {{deprecated_inline}}{{Readonlyinline}}

  - : Retourne un {{jsxref("Number")}} représentant un code numérique dépendant du système et de l'implémentation, identifiant la valeur non modifiée de la touche pressée.

    > **Attention :** cet attribut est obsolète. vous devriez utiliser {{domxref("KeyboardEvent.key")}} à la place, si disponible.

- {{domxref("KeyboardEvent.keyIdentifier")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : Cette propriété n'est pas standard et a été abandonnée en faveur de {{domxref("KeyboardEvent.key")}}. Elle faisait partie d'une ancienne version de DOM Level 3 Events.
- {{domxref("KeyboardEvent.keyLocation")}} {{Non-standard_inline}}{{deprecated_inline}}{{Readonlyinline}}
  - : C'est un alias obsolète non standard pour {{domxref("KeyboardEvent.location")}}. Il faisait partie d'une ancienne version de DOM Level 3 Events.
- {{domxref("KeyboardEvent.locale")}} {{Readonlyinline}}

  - : Retourne une {{domxref("DOMString")}} représentant une chaîne de paramètres régionaux indiquant les paramètres régionaux pour lesquels le clavier est configuré. Cela peut être une chaîne vide si le navigateur ou l'appareil ne connaît pas les paramètres régionaux du clavier.

    > **Note :** cela ne décrit pas les paramètres régionaux des données entrées. Un utilisateur peut utiliser une disposition du clavier donnée, tout en saisissant du texte dans une autre langue.

- {{domxref("KeyboardEvent.location")}}{{Readonlyinline}}
  - : Retourne un {{jsxref ("Number")}} représentant l'emplacement de la touche du clavier ou tout autre dispositif d'entrée.
- {{domxref("KeyboardEvent.metaKey")}} {{Readonlyinline}}

  - : Retourne un {{jsxref("Boolean")}} qui est `true` si la touche

    <kbd>Meta</kbd>

    (sur les claviers Mac, la touche

    <kbd>⌘ Command</kbd>

    ; sur les claviers Windows, la touche Windows (

    <kbd>⊞</kbd>

    )) était active quand l'évènement touche a été généré.

- {{domxref("KeyboardEvent.repeat")}} {{Readonlyinline}}
  - : Retourne un {{jsxref("Booléen")}} qui est `true` si la touche est maintenue enfoncée de telle sorte qu'elle se répète automatiquement.
- {{domxref("KeyboardEvent.shiftKey")}} {{Readonlyinline}}

  - : Retourne un {{jsxref("Boolean")}} qui est `true` si la touche

    <kbd>Shift</kbd>

    était active quand l'évènement touche a été généré.

- {{domxref("KeyboardEvent.which")}} {{deprecated_inline}}{{Readonlyinline}}

  - : Retourne un {{jsxref("Number")}} représentant un code numérique dépendant du système et de l'implémentation, identifiant la valeur non modifiée de la touche pressée ; c'est généralement le même que `keyCode`.

    > **Attention :** cet attribut est obsolète ; vous devriez utiliser {{domxref("KeyboardEvent.key")}} à la place, si disponible.

## Notes

Les événements existants sont `keydown`, `keypress` et `keyup`. Pour la plupart des touches, Gecko génère une suite d'événements touche comme suit :

1.  lorsque la touche est d'abord enfoncée, l'événement `keydown` est envoyé ;
2.  si la touche n'est pas une touche de modification, l'événement `keypress` est envoyé ;
3.  lorsque l'utilisateur relâche la touche, l'événement `keyup` est envoyé.

### Cas particuliers

Certaines touches inversent l'état d'un voyant lumineux ; celles-ci comprennent des touches telles que Caps Lock, Num Lock et Scroll Lock. Sous Windows et Linux, ces touches génèrent uniquement les événements `keydown` et `keyup`.

> **Note :** Sous Linux, Firefox 12 et les versions antérieures ont également envoyé l'événement `keypress` pour ces touches.

Cependant, une limitation du modèle d'événement Mac OS X fait que Caps Lock ne génère que l'événement `keydown`. Num Lock était supporté sur certains modèles d'ordinateurs portables plus anciens (modèles 2007 et plus anciens), mais depuis lors, Mac OS X n'a pas supporté Num Lock même sur les claviers externes. Sur les MacBooks plus anciens avec une touche Num Lock, cette touche ne génère aucun événement touche. Gecko supporte la touche Scroll Lock si un clavier externe ayant une touche F14 est connecté. Dans certaines anciennes versions de Firefox, cette touche générait un événement `keypress` ; ce comportement incohérent était le {{bug(602812)}}.

### Gestion de l'auto-répétition

Lorsqu'une touche est maintenue enfoncée, elle commence à se répéter automatiquement. Cela a pour résultat qu'une suite d'événements similaire à ce qui suit est générée :

1.  `keydown`
2.  `keypress`
3.  `keydown`
4.  `keypress`
5.  << répétition jusqu'à ce que l'utilisateur relâche la touche >>
6.  `keyup`

C'est ce que la spécification DOM Niveau 3 dit qu'il devrait se produire. Cependant, il y a quelques mises en garde, comme décrit ci-dessous.



#### Auto-répétition sur certains environnements GTK tels que Ubuntu 9.4

Dans certains environnements basés sur GTK, l'auto-répétition génère automatiquement un événement natif lors de la répétition automatique, et Gecko n'a aucun moyen de connaître la différence entre une suite répétée de touches et une répétition automatique. Sur ces plateformes, une touche auto-répétée génère donc la suite d'événements suivante :

1.  `keydown`
2.  `keypress`
3.  `keyup`
4.  `keydown`
5.  `keypress`
6.  `keyup`
7.  << répétition jusqu'à ce que l'utilisateur relâche la touche >>
8.  `keyup`

Dans ces environnements, malheureusement, il n'y a aucun moyen pour que le contenu Web puisse faire la différence entre les touches répétées automatiquement et les touches qui sont simplement pressées à plusieurs reprises.

#### Gestion de l'auto-répétition avant Gecko 5.0

Avant Gecko 5.0 {{geckoRelease('5.0')}}, la gestion du clavier était moins cohérente entre les plates-formes.

- Windows
  - : Le comportement de la répétition automatique est le même que dans Gecko 4.0 et ultérieur.
- Mac
  - : Après l'événement keydown initial, seuls les événements keypress sont envoyés jusqu'à ce que l'événement keyup se produise ; les événements de clavier intermédiaires ne sont pas envoyés.
- Linux
  - : Le comportement de l'événement dépend de la plate-forme particulière. Il se comportera comme Windows ou Mac suivant ce que fait le modèle d'événement natif.

> **Note :** le déclenchement manuel d'un événement ne génère _pas_ l'action par défaut associée à cet événement. Par exemple, le déclenchement manuel d'un événement touche n'entraîne pas l'apparition de cette lettre dans une zone de saisie de texte ayant la focalisation. Dans le cas des événements de l'interface utilisateur, cela est important pour des raisons de sécurité, car cela empêche les scripts de simuler les actions de l'utilisateur interagissant avec le navigateur lui-même.

## Exemple

```html
<!DOCTYPE html>
<html>
<head>
<script>
'use strict';

document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;

  if (nomTouche === 'Control') {
    // Pas d'alerte si seule la touche Control est pressée.
    return;
  }

  if (event.ctrlKey) {
    // Même si event.key n'est pas 'Control' (par ex., 'a' is pressed),
    // event.ctrlKey peut être true si la touche Ctrl est pressée dans le même temps.
    alert(`Combinaison de ctrlKey + ${nomTouche}`);
     } else {
    alert(`Touche pressée ${nomTouche}`);
  }
}, false);

document.addEventListener('keyup', (event) => {
  const nomTouche = event.key;

  // Dès que l'utilisateur relâche la touche Ctrl, la touche n'est plus active.
  // Aussi event.ctrlKey est false.
  if (nomTouche === 'Control') {
    alert('La touche Control a été relâchée');
  }
}, false);

</script>
</head>

<body>
</body>
</html>
```

## Spécifications

| Spécification                                                                                | Statut                       | Commentaire |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| {{SpecName('UI Events', '#interface-keyboardevent', 'KeyboardEvent')}} | {{Spec2('UI Events')}} |             |

La spécification d'interface `KeyboardEvent` est passée par de nombreuses versions préliminaires, d'abord sous DOM Events Level 2 où elle a été supprimée du fait qu'aucun consensus n'avait émergé, puis sous DOM Events Level 3. Cela conduit à l'implémentation de méthodes d'initialisation non standard, la version ancienne DOM Events Level 2, {{domxref("KeyboardEvent.initKeyEvent()")}} par les navigateurs Gecko et la version prémiminaire DOM Events Level 3, {{domxref("KeyboardEvent.initKeyboardEvent()")}} par d'autres navigateurs. Tous deux ont été remplacés par l'utilisation moderne d'un constructeur : {{domxref ("KeyboardEvent.KeyboardEvent", "KeyboardEvent()")}}.

## Compatibilité des navigateurs

{{Compat("api.KeyboardEvent")}}

## Voir aussi

- {{domxref("KeyboardEvent.code")}}.
- {{domxref("KeyboardEvent.key")}}.
- {{domxref("KeyboardEvent.getModifierState")}}
