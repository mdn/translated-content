---
title: En-tête DNT
short-title: DNT
slug: Web/HTTP/Reference/Headers/DNT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> La spécification DNT (Do Not Track) a été abandonnée. Voir {{DOMxRef("Navigator.doNotTrack")}} pour plus d'informations.

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`DNT`** «&nbsp;Ne Pas Suivre&nbsp;» (<i lang="en">Do Not Track</i> en anglais) indique la préférence de suivi de l'utilisateur·ice.
Il permet aux utilisateur·ice·s d'indiquer s'ils·elles préfèrent la confidentialité plutôt que du contenu personnalisé.

DNT est obsolète au profit de [Global Privacy Control <sup>(angl.)</sup>](https://globalprivacycontrol.org/), qui est transmis aux serveurs via l'en-tête {{HTTPHeader("Sec-GPC")}} et accessible aux clients via {{DOMxRef("navigator.globalPrivacyControl")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "En-tête de requête interdit")}}</th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
DNT: 0
DNT: 1
DNT: null
```

## Directives

- `0`
  - : L'utilisateur·ice préfère autoriser son suivi sur le site cible.
- `1`
  - : L'utilisateur·ice préfère ne pas être suivi sur le site cible.
- `null`
  - : L'utilisateur·ice n'a pas défini de préférence concernant le suivi.

## Exemples

### Lire le statut « Do Not Track » avec JavaScript

La préférence de l'utilisateur·ice pour DNT peut également être lue depuis JavaScript en utilisant la proriété {{DOMxRef("Navigator.doNotTrack")}}&nbsp;:

```js
navigator.doNotTrack; // "0" ou "1"
```

## Spécifications

Fait partie de la spécification abandonnée [Expression de préférence de suivi (DNT) <sup>(angl.)</sup>](https://w3c.github.io/dnt/drafts/tracking-dnt.html#dnt-header-field).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété JavaScript {{DOMxRef("Navigator.doNotTrack")}}
- L'en-tête {{HTTPHeader("Tk")}}
- [Do Not Track sur Wikipedia](https://fr.wikipedia.org/wiki/Do_Not_Track)
- [Que signifie «&nbsp;Track&nbsp;» dans «&nbsp;Do Not Track&nbsp;»&nbsp;? — EFF <sup>(angl.)</sup>](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT sur Electronic Frontier Foundation <sup>(angl.)</sup>](https://www.eff.org/issues/do-not-track)
- Aide sur les paramètres DNT du navigateur&nbsp;:
  - [Firefox](https://support.mozilla.org/fr/kb/comment-activer-option-ne-pas-pister)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC — Global Privacy Control <sup>(angl.)</sup>](https://globalprivacycontrol.org/)
  - [Activer GPC dans Firefox](https://support.mozilla.org/fr/kb/global-privacy-control?as=u&utm_source=inproduct)
