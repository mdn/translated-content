---
title: "Content-Security-Policy : directive media-src"
short-title: media-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/media-src
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`media-src`** spécifie les sources valides pour le chargement des médias avec les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Fetch directive", "Directive de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">Solution de repli {{CSP("default-src")}}</th>
      <td>
        Oui, si cette directive est absente, l'agent utilisateur consultera la directive <code>default-src</code>.
      </td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: media-src 'none';
Content-Security-Policy: media-src <source-expression-list>;
```

Cette directive peut avoir l'une des valeurs suivantes&nbsp;:

- `'none'`
  - : Aucune ressource de ce type ne peut être chargée. Les guillemets simples sont obligatoires.
- `<source-expression-list>`
  - : Une liste de valeurs _d'expressions de source_ séparées par des espaces. Les ressources de ce type peuvent être chargées si elles correspondent à l'une des expressions de source données. Pour cette directive, les valeurs d'expression de source suivantes sont applicables&nbsp;:
    - [`<host-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#self)

## Exemples

### Cas de violation

Soit cet en-tête CSP&nbsp;:

```http
Content-Security-Policy: media-src https://exemple.com/
```

Ces éléments HTML {{HTMLElement("audio")}}, {{HTMLElement("video")}} et
{{HTMLElement("track")}} seront bloqués et ne se chargeront pas&nbsp;:

```html
<audio src="https://hors-exemple.com/audio"></audio>

<video src="https://hors-exemple.com/video">
  <track kind="subtitles" src="https://hors-exemple.com/subtitles" />
</video>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- Les éléments HTML {{HTMLElement("audio")}}, {{HTMLElement("video")}} et {{HTMLElement("track")}}
