---
title: "Window : évènement error"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef}}

L'évènement `error` est déclenché sur un objet {{DOMxRef("Window")}} lorsqu'une ressource n'a pas pu être chargée ou utilisée — par exemple si un script rencontre une erreur d'exécution.

Cet évènement n'est généré que pour les erreurs de script déclenchées de manière synchrone, comme lors du chargement initial ou à l'intérieur des gestionnaires d'évènements. Si une promesse est rejetée (y compris un `throw` non intercepté dans une `async function`) et qu'aucun gestionnaire de rejet n'est attaché, un évènement {{DOMxRef("Window/unhandledrejection_event", "unhandledrejection")}} est déclenché à la place.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("error", (event) => { })

onerror = (message, source, lineno, colno, error) => { }
```

> [!NOTE]
> Pour des raisons historiques, `onerror` sur les objets `Window` et {{DOMxRef("WorkerGlobalScope")}} est la seule propriété de gestionnaire d'évènement qui reçoit plus d'un argument.

## Type d'évènement

L'objet évènement est une instance de {{DOMxRef("ErrorEvent")}} s'il a été généré à partir d'un élément de l'interface utilisateur, ou une instance de {{DOMxRef("Event")}} sinon.

{{InheritanceDiagram("ErrorEvent")}}

## Description

### Propriété du gestionnaire d'évènement

Pour des raisons historiques, la propriété de gestionnaire d'évènement `onerror`, uniquement sur les objets `Window` et {{DOMxRef("WorkerGlobalScope")}}, a un comportement différent des autres propriétés de gestionnaire d'évènement.

Notez que cela ne s'applique qu'aux gestionnaires assignés à `onerror`, et non à ceux ajoutés avec `addEventListener()`.

#### Annulation

La plupart des gestionnaires d'évènements assignés aux propriétés de gestionnaire d'évènements peuvent annuler le comportement par défaut de l'évènement en retournant `false` depuis le gestionnaire :

```js
textarea.onkeydown = () => false;
```

Cependant, pour qu'une propriété de gestionnaire d'évènement annule le comportement par défaut de l'évènement `error` de `Window`, elle doit plutôt retourner `true`&nbsp;:

```js
window.onerror = () => true;
```

Lorsque l'annulation est effectuée, l'erreur n'apparaîtra pas dans la console, mais le script en cours s'arrêtera toujours.

#### Arguments

La signature du gestionnaire d'évènements est asymétrique entre `addEventListener()` et `onerror`. Le gestionnaire d'évènements passé à `Window.addEventListener()` reçoit un seul objet {{DOMxRef("ErrorEvent")}}, tandis que le gestionnaire `onerror` reçoit cinq arguments, correspondant aux propriétés de l'objet {{DOMxRef("ErrorEvent")}}&nbsp;:

- `message`
  - : Une chaîne de caractères contenant un message d'erreur lisible décrivant le problème. Identique à {{DOMxRef("ErrorEvent.message")}}.

    > [!NOTE]
    > En HTML, [l'attribut de gestionnaire d'évènement de contenu](/fr/docs/Web/HTML/Reference/Attributes#attributs_du_gestionnaire_dévènements) `onerror` sur l'élément HTML {{HTMLElement("body")}} attache les gestionnaires d'évènement `error` à `window` (_et non_ à l'élément `<body>`). Pour ce gestionnaire d'évènement, le premier paramètre est appelé `event`, et non `message`, bien qu'il contienne toujours une chaîne de caractères&nbsp;; ainsi, vous utiliseriez `<body onerror="console.error(event)">` pour consigner le message d'erreur.

- `source`
  - : Une chaîne de caractères contenant l'URL du script qui a généré l'erreur.
- `lineno`
  - : Un entier contenant le numéro de ligne du fichier de script sur lequel l'erreur s'est produite.
- `colno`
  - : Un entier contenant le numéro de colonne du fichier de script sur lequel l'erreur s'est produite.
- `error`
  - : L'erreur levée. Généralement un objet {{JSxRef("Error")}}.

```js
window.onerror = (a, b, c, d, e) => {
  console.log(`message: ${a}`);
  console.log(`source: ${b}`);
  console.log(`lineno: ${c}`);
  console.log(`colno: ${d}`);
  console.log(`error: ${e}`);

  return true;
};
```

> [!NOTE]
> Ces noms de paramètres sont observables avec un [attribut de gestionnaire d'évènement HTML](/fr/docs/Web/HTML/Reference/Attributes#attributs_du_gestionnaire_dévènements), où le premier paramètre est appelé `event` au lieu de `message`.

Ce comportement spécial ne se produit que pour le gestionnaire d'évènement `onerror` sur `window`. Le gestionnaire {{DOMxRef("HTMLElement.error_event", "Element.onerror")}} reçoit toujours un seul objet {{DOMxRef("ErrorEvent")}}.

## Exemples

### Exemple interactif

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Générer une erreur de script</button>
  <img src="bad-image.jpg" class="bad-img" alt="Je n'existe pas" />
</div>

<div class="event-log">
  <label for="eventLog">Journal des événements&nbsp;:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");

window.addEventListener("error", (event) => {
  log.textContent = `${log.textContent}${event.type}: ${event.message}\n`;
  console.log(event);
});

const scriptError = document.querySelector("#script-error");
scriptError.addEventListener("click", () => {
  throw new Error("Ceci est une erreur de script");
});
```

#### Résultat

{{EmbedLiveSample("Exemple interactif", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Cet évènement sur les cibles `Element`&nbsp;: évènement {{DOMxRef("HTMLElement/error_event", "error")}}
- [`Window`&nbsp;: évènement `unhandledrejection`](/fr/docs/Web/API/Window/unhandledrejection_event)
