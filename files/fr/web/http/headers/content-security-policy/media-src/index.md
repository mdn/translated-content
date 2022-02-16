---
title: 'CSP: media-src'
slug: Web/HTTP/Headers/Content-Security-Policy/media-src
tags:
  - CSP
  - Conten-Security-Policy
  - Directive
  - HTTP
  - Media
  - Reference
  - Security
  - Sécurité
  - media-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/media-src
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`media-src`** spécifie les sources valides pour charger des médias en utilisant des éléments tels que {{HTMLElement("audio")}} et {{HTMLElement("video")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} par défaut</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la
        directive <code>default-src</code>
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive :

    Content-Security-Policy: media-src <source>;
    Content-Security-Policy: media-src <source> <source>;

### Sources

{{page("fr/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Exemples

### Cas de violation

Soit cet en-tête CSP :

```bash
Content-Security-Policy: media-src https://example.com/
```

Ces éléments {{HTMLElement("audio")}}, {{HTMLElement("video")}} et {{HTMLElement("track")}} seront bloqués et ne se chargeront pas :

```html
<audio src="https://not-example.com/audio"></audio>

<video src="https://not-example.com/video">
  <track kind="subtitles" src="https://not-example.com/subtitles">
</video>
```

## Spécifications

| Spécification                                                                    | Statut                       | Commentaire          |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{specName("CSP 3.0", "#directive-media-src", "media-src")}} | {{Spec2('CSP 3.0')}} | Inchangé.            |
| {{specName("CSP 1.1", "#directive-media-src", "media-src")}} | {{Spec2('CSP 1.1')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.media-src")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("audio")}}, {{HTMLElement("video")}} and {{HTMLElement("track")}}
