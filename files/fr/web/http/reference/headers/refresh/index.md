---
title: En-tête Refresh
short-title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Refresh`** indique à un navigateur web de rafraîchir ou de rediriger la page lorsqu'une durée définie s'est écoulée après le chargement complet de la page.
Il est exactement équivalent à l'utilisation de [`<meta http-equiv="refresh" content="...">`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv) en HTML.

> [!NOTE]
> Même s'il est présent dans la réponse HTTP, l'en-tête `Refresh` est toujours géré par le mécanisme de chargement HTML et intervient après les redirections HTTP ou JavaScript. Voir [ordre de priorité des redirections](/fr/docs/Web/HTTP/Guides/Redirections#ordre_de_priorité) pour plus d'informations.

> [!NOTE]
> Lorsqu'un rafraîchissement redirige vers une nouvelle page, l'en-tête {{HTTPHeader("Referer")}} est inclus dans la requête pour la nouvelle page (si cela est permis par la {{HTTPHeader("Referrer-Policy")}}), et {{DOMxRef("document.referrer")}} est défini sur l'URL de référence après la navigation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Refresh: <time>
Refresh: <time>, url=<url>
Refresh: <time>; url=<url>
```

- `<time>`
  - : Un nombre de secondes non négatif après lequel la page sera rafraîchie. Les parties fractionnaires sont reconnues mais ignorées&nbsp;; vous ne devez indiquer que des entiers.
- `<url>` {{Optional_Inline}}
  - : Si présent, le navigateur redirigera vers l'URL définie au lieu de rafraîchir avec l'URL courante. Cette URL peut être citée ou non. Le préfixe `url=` n'est pas sensible à la casse et est optionnel.

## Exemples

### Rafraîchir une page après un temps spécifique

Cet en-tête fera en sorte que le navigateur rafraîchisse la page 5 secondes après son chargement complet (c'est-à-dire après l'évènement {{DOMxRef("Window/load_event", "load")}})&nbsp;:

```http
Refresh: 5
```

### Rediriger après un temps spécifique

Cet en-tête fera en sorte que le navigateur redirige vers une URL 5 secondes après son chargement complet&nbsp;:

```http
Refresh: 5; url=https://exemple.com/
```

> [!NOTE]
> Voir l'attribut [`http-equiv="refresh"`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv#refresh) dans la référence HTML pour des informations importantes sur les implications en accessibilité des redirections automatiques.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("meta")}}
- [Redirections en HTTP](/fr/docs/Web/HTTP/Guides/Redirections)
- [L'en-tête Refresh est toujours avec nous <sup>(angl.)</sup>](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) message du groupe de travail HTTP (2019)
