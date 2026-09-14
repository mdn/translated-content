---
title: "HTMLIFrameElement : propriété contentWindow"
short-title: contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

La propriété **`contentWindow`** retourne l'objet {{DOMxRef("Window")}} d'un élément HTML {{HTMLElement("iframe")}}.

Cet attribut est en lecture seule.

## Valeur

Un objet {{DOMxRef("Window")}}.

## Description

L'accès à {{DOMxRef("Window")}} retourné par `contentWindow` est soumis aux règles définies par la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy), ce qui signifie que si le cadre intégré (<i lang="en">iframe</i> en anglais) est de même origine que le parent, alors le parent peut accéder au document du cadre intégré et à son DOM interne, et s'ils sont d'origines différentes, il obtient un accès très limité aux attributs de la fenêtre. Voir [Accès API script inter-origine](/fr/docs/Web/Security/Defenses/Same-origin_policy#accès_aux_api_de_scripts_inter-origines) pour plus de détails.

Les pages peuvent aussi utiliser cette propriété pour savoir quel cadre intégré a envoyé un message avec {{DOMxRef("Window.postMessage()")}}, en la comparant à la propriété {{DOMxRef("MessageEvent.source", "source")}} de l'évènement message.

## Exemples

### Accéder au document d'un cadre intégré

Cet exemple modifie l'attribut `style` du corps du document.

Notez que cela ne fonctionne que si la fenêtre du cadre intégré (<i lang="en">iframe</i> en anglais) est de même origine que son parent&nbsp;: sinon, toute tentative d'accès à `contentWindow.document` lèvera une exception.

```js
const iframe = document.querySelector("iframe").contentWindow;

iframe.document.querySelector("body").style.backgroundColor = "blue";
// ceci devrait changer le 1er iframe dans le document bleu.
```

### Associer la source d'un message à un cadre intégré

Cet exemple peut s'exécuter dans une page qui héberge plusieurs cadres intégrés (<i lang="en">iframe</i> en anglais), dont chacun peut lui envoyer des messages via {{DOMxRef("Window.postMessage()")}}. Lorsque la page reçoit un message, elle souhaite savoir quel cadre intégré contient la fenêtre qui a envoyé le message.

Pour cela, lorsqu'elle reçoit un message, la page vérifie d'abord que le message provient de l'origine attendue, puis trouve le cadre intégré qui est la source du message en comparant la propriété {{DOMxRef("MessageEvent.source", "source")}} de l'évènement message avec la propriété `contentWindow` du cadre intégré.

```js
const expectedOrigin = "https://example.org";

const iframes = Array.from(document.querySelectorAll("iframe"));

window.addEventListener("message", (e) => {
  if (e.origin !== expectedOrigin) return;

  const sourceIframe = iframes.find(
    (iframe) => iframe.contentWindow === e.source,
  );

  console.log(sourceIframe);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
