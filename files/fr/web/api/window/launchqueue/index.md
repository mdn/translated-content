---
title: "Window : propriété launchQueue"
short-title: launchQueue
slug: Web/API/Window/launchQueue
l10n:
  sourceCommit: c60eaa2dd90fefcaaafdaca69f3185b46d399d8b
---

{{APIRef("Launch Handler API")}}{{SeeCompatTable}}

La propriété en lecture seule `launchQueue` de l'interface {{DOMxRef("Window")}} donne accès à la classe {{DOMxRef("LaunchQueue")}}, qui permet de mettre en œuvre une gestion personnalisée de la navigation au lancement dans une [application web progressive](/fr/docs/Web/Progressive_web_apps) (PWA), le contexte de gestion étant indiqué par la valeur du champ `client_mode` du manifeste [`launch_handler`](/fr/docs/Web/Progressive_web_apps/Manifest/Reference/launch_handler).

La fonctionnalité de gestion personnalisée de la navigation au lancement est contrôlée par les propriétés de l'objet {{DOMxRef("LaunchParams")}} passé dans la fonction de rappel {{DOMxRef("LaunchQueue.setConsumer()")}}.

## Valeur

Une instance de l'objet {{DOMxRef("LaunchQueue")}}.

## Exemples

```js
if ("launchQueue" in window) {
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const params = new URL(launchParams.targetURL).searchParams;

      // Supposons une application de lecteur de musique qui reçoit une piste à jouer
      const track = params.get("track");
      if (track) {
        audio.src = track;
        title.textContent = new URL(track).pathname.substring(1);
        audio.play();
      }
    }
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Launch Handler API", "L'API Launch Handler", "", "nocode")}}
- [L'API Launch Handler&nbsp;: Contrôlez la manière dont votre application est lancée <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/launch-handler/)
- L'application de démonstration [Musicr 2.0 <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/launch-handler/)
