---
title: "Attribut HTML : `crossorigin`"
short-title: crossorigin
slug: Web/HTML/Reference/Attributes/crossorigin
l10n:
  sourceCommit: 210eb1d964922bbae94774dc6676ce92056e0423
---

L'attribut **`crossorigin`** est valide sur les éléments HTML {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} et {{HTMLElement("video")}}. Il permet de gérer le [CORS](/fr/docs/Web/HTTP/Guides/CORS), c'est-à-dire la façon dont l'élément traite les requêtes inter-origines, et donc de configurer les requêtes CORS pour les données récupérées par l'élément. Selon l'élément, l'attribut peut être un attribut de configuration CORS.

L'attribut de contenu `crossorigin` sur les éléments média est un attribut de configuration CORS.

Ces attributs sont {{Glossary("Enumerated", "énumérés")}} et acceptent les valeurs suivantes&nbsp;:

- `anonymous`
  - : La requête utilise les en-têtes CORS ([`mode`](/fr/docs/Web/API/RequestInit#mode) est défini sur `cors`) et [`credentials`](/fr/docs/Web/API/RequestInit#credentials) est défini sur `'same-origin'`, ce qui signifie que les informations d'identification telles que les cookies, les certificats TLS côté client et les en-têtes d'authentification HTTP ne sont incluses que si la destination a la même origine.
- `use-credentials`
  - : La requête utilise les en-têtes CORS ([`mode`](/fr/docs/Web/API/RequestInit#mode) est défini sur `cors`) et [`credentials`](/fr/docs/Web/API/RequestInit#credentials) est défini sur `'include'`, donc les informations d'identification sont toujours incluses, même pour les requêtes inter-origines.
- `""`
  - : Définir le nom de l'attribut sur une valeur vide, comme `crossorigin` ou `crossorigin=""`, revient à utiliser `anonymous`. Les valeurs invalides sont également traitées comme une chaîne de caractères vide.

Par défaut (c'est-à-dire lorsque l'attribut n'est pas défini), les ressources sont généralement récupérées sans CORS, sauf pour les [scripts de module](/fr/docs/Web/HTML/Reference/Elements/script/type#module) qui utilisent toujours CORS, donc seul `crossorigin="use-credentials"` a un effet. L'agent utilisateur ne demande pas l'autorisation pour un accès complet à la ressource et, dans le cas d'une requête inter-origines, certaines limitations sont appliquées en fonction du type d'élément concerné&nbsp;:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Élément</td>
      <td class="header">Restrictions</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Si la ressource est placée dans un {{HTMLElement("canvas")}}, l'élément est marqué comme <a href="/fr/docs/Web/HTML/How_to/CORS_enabled_image#canevas_corrompu_et_sécurité"><em>pollué</em></a>.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        L'accès à la journalisation des erreurs par {{DOMxRef("Window.error_event", "window.onerror")}} est limité.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Une requête sans en-tête <code>crossorigin</code> approprié peut être ignorée.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> L'attribut `crossorigin` n'est pas pris en charge pour [`rel="icon"`](/fr/docs/Web/HTML/Reference/Attributes/rel#icon) dans les navigateurs basés sur Chromium. Voir le [ticket Chromium ouvert <sup>(angl.)</sup>](https://crbug.com/1121645).

## Exemples

### Utiliser `crossorigin` avec l'élément `script`

On peut utiliser l'élément {{HTMLElement("script")}} afin d'indiquer au navigateur d'exécuter un script (ici, `https://example.com/framework-exemple.js`) sans envoyer les informations d'authentification de l'utilisateur·ice.

```html
<script
  src="https://example.com/framework-exemple.js"
  crossorigin="anonymous"></script>
```

### Utiliser des informations d'authentification avec un manifeste

La valeur `use-credentials` doit être utilisée lorsqu'on récupère un [manifeste](/fr/docs/Web/Progressive_web_apps/Manifest) nécessitant des informations d'authentification, y compris lorsque le fichier provient de la même origine&nbsp;:

```html
<link rel="manifest" href="/app.manifest" crossorigin="use-credentials" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Partage des ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- L'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel)
