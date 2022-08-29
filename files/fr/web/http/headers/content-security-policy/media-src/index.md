---
title: 'CSP : media-src'
slug: Web/HTTP/Headers/Content-Security-Policy/media-src
translation_of: Web/HTTP/Headers/Content-Security-Policy/media-src
browser-compat: http.headers.csp.Content-Security-Policy.media-src
---
{{HTTPSidebar}}

La directive HTTP [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) **`media-src`** spécifie les sources valides pour le chargement des médias avec les éléments [`<audio>`](/fr/docs/Web/HTML/Element/audio) et [`<video>`](/fr/docs/Web/HTML/Element/video).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td><a href="/fr/docs/Glossary/Fetch_directive">Directive de récupération</a></td>
    </tr>
    <tr>
      <th scope="row">Utilisation de <a href="/fr/docs/Web/HTTP/Headers/Content-Security-Policy/default-src"><code>default-src</code></a> par défaut</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

Une ou plusieurs sources peuvent être autorisées pour cette directive&nbsp;:

```http
Content-Security-Policy: media-src <source>;
Content-Security-Policy: media-src <source> <source>;
```

### Sources

`<source>` peut être n'importe quelle valeur parmi celles énumérées dans [l'article sur les valeurs sources CSP](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

On notera que cet ensemble de valeurs peut être utilisé pour toutes les [directives de récupération](/fr/docs/Glossary/Fetch_directive) (et pour [certaines autres directives](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#directives_associées)).

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: media-src https://example.com/
```

Ces éléments [`<audio>`](/fr/docs/Web/HTML/Element/audio), [`<video>`](/fr/docs/Web/HTML/Element/video) et [`<track>`](/fr/docs/Web/HTML/Element/track) seront bloqués et ne se chargeront pas&nbsp;:

```html
<audio src="https://not-example.com/audio"></audio>

<video src="https://not-example.com/video">
  <track kind="subtitles" src="https://not-example.com/subtitles">
</video>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy)
- [`<audio>`](/fr/docs/Web/HTML/Element/audio), [`<video>`](/fr/docs/Web/HTML/Element/video) et [`<track>`](/fr/docs/Web/HTML/Element/track)
