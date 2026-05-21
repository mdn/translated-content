---
title: "HTMLMediaElement : propriété autoplay"
short-title: autoplay
slug: Web/API/HTMLMediaElement/autoplay
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`autoplay`** de l'interface {{DOMxRef("HTMLMediaElement")}} reflète l'attribut HTML [`autoplay`](/fr/docs/Web/HTML/Reference/Elements/video#autoplay), indiquant si la lecture doit commencer automatiquement dès que suffisamment de contenu est disponible pour le faire sans interruption.

Un élément multimédia dont la source est un objet {{DOMxRef("MediaStream")}} et dont la propriété `autoplay` vaut `true` commencera la lecture lorsqu'il deviendra actif (c'est-à-dire lorsque {{DOMxRef("MediaStream.active")}} deviendra `true`).

> [!NOTE]
> Les sites qui lancent automatiquement la lecture audio (ou vidéo avec une piste audio) peuvent être une expérience désagréable pour les utilisateur·ice·s, il est donc préférable de l'éviter autant que possible. Si vous devez proposer une fonctionnalité de lecture automatique, vous devez la rendre optionnelle (en exigeant que l'utilisateur·ice l'active spécifiquement). Cependant, la lecture automatique peut être utile lors de la création d'éléments multimédias dont la source sera définie ultérieurement, sous le contrôle de l'utilisateur·ice.

Pour un examen beaucoup plus approfondi de la lecture automatique, du blocage de la lecture automatique et de la manière de réagir lorsque la lecture automatique est bloquée par le navigateur de l'utilisateur·ice, consultez notre article [Guide de la lecture automatique pour les API multimédia et Web Audio](/fr/docs/Web/Media/Guides/Autoplay).

## Valeur

Une valeur booléenne qui est `true` si l'élément multimédia commencera la lecture dès que suffisamment de contenu aura été chargé pour permettre la lecture sans interruption.

> [!NOTE]
> Certains navigateurs offrent aux utilisateur·ice·s la possibilité de remplacer `autoplay` afin d'empêcher la lecture audio ou vidéo perturbatrice de se produire sans autorisation ou en arrière-plan. Ne comptez pas sur le fait que `autoplay` démarre réellement la lecture et utilisez plutôt l'évènement {{DOMxRef("HTMLMediaElement.play_event", "play")}}.

## Exemples

```html
<video id="video" controls>
  <source
    src="https://player.vimeo.com/external/250688977.sd.mp4?s=d14b1f1a971dde13c79d6e436b88a6a928dfe26b&profile_id=165" />
</video>
```

```js
// Désactiver la lecture automatique (recommandé)
// false est la valeur par défaut
document.querySelector("#video").autoplay = false;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.autoplay`
- Les éléments HTML {{HTMLElement("audio")}}, {{HTMLElement("video")}}
