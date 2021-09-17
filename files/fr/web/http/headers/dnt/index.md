---
title: DNT
slug: Web/HTTP/Headers/DNT
translation_of: Web/HTTP/Headers/DNT
---
{{HTTPSidebar}}

Le header de requête **`DNT`** (**D**o **N**ot **T**rack) indique que les préférences de l'utilisateur concernant le suivi publicitaire. Il permet aux utilisateurs d'indiquer s'ils préfèrent leur vie privée au lieu d'un contenu personnalisé.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

    DNT: 0
    DNT: 1

## Directives

- 0
  - : L'utilisateur préfère autoriser son suivi sur le site cible.
- 1
  - : L'utilisateur préfère ne pas être suivi sur le site cible.

## Exemples

### Lire le statut Do Not Track avec JavaScript

La préférence de l'utilisateur pour DNT peut également être lue depuis JavaScript en utilisant la proriété {{domxref("Navigator.doNotTrack")}} :

```js
navigator.doNotTrack; // "0" ou "1"
```

## Spécifications

| Spécification                                                                                                | Status                       | Commentaire          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('Tracking','#dnt-header-field', 'DNT Header Field for HTTP Requests')}} | {{Spec2("Tracking")}} | Définition initiale. |

## Compatibilité navigateur

{{Compat("http.headers.DNT")}}

## Voyez aussi

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} header
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [donottrack.us](http://donottrack.us/)
- DNT browser settings help:

  - [Firefox](https://www.mozilla.org/en-US/firefox/dnt/)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
