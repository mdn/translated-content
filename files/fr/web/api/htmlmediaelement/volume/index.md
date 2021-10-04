---
title: HTMLMediaElement.volume
slug: Web/API/HTMLMediaElement/volume
tags:
  - API
  - Audio
  - HTML DOM
  - Property
  - Propriété
  - Reference
  - Volume
  - sound
translation_of: Web/API/HTMLMediaElement/volume
---
{{APIRef("HTML DOM")}}

La propriété **`HTMLMediaElement.volume`** définit le volume auquel le média doit être lu.

## Syntaxe

    var volume ​= video.volume; //1

### Valeur

Une valeur de type double (nombre à virgule) inclut entre 0 et 1, si elle vaut 0 le son est coupé et elle vaut 1 le son est le plus élevé possible.

## Exemple

    var obj = document.createElement('audio');
    console.log(obj.volume); // 1
    obj.volume = 0.75;

## Specifications

| Specification                                                                                                                    | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#dom-media-volume", "HTMLMediaElement.volume")}}                             | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', "embedded-content-0.html#htmlmediaelement", "HTMLMediaElement.volume")}} | {{Spec2('HTML5 W3C')}}     |             |

## Compatibilité navigateur

{{Compat("api.HTMLMediaElement.volume")}}

## Voir aussi

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{domxref("HTMLMediaElement.muted")}}
