---
title: En-tête Sec-Purpose
short-title: Sec-Purpose
slug: Web/HTTP/Reference/Headers/Sec-Purpose
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("Fetch Metadata Request Header", "L'en-tête de métadonnées de requête de récupération")}} HTTP **`Sec-Purpose`** décrit le but pour lequel la ressource demandée est utilisée, lorsque ce but est autre que l'utilisation immédiate par l'agent utilisateur.

Le seul but actuellement défini est `prefetch`, ce qui indique que la ressource est demandée en prévision de son utilisation par une page vers laquelle il est probable que l'utilisateur·ice navigue dans un avenir proche, comme une page liée dans les résultats de recherche ou un lien sur lequel l'utilisateur·ice a survolé.
Le serveur peut utiliser cette information pour&nbsp;: ajuster la durée de mise en cache de la requête, refuser la requête ou éventuellement la traiter différemment lors du comptage des visites de page.

L'en-tête est envoyé lorsqu'une page est chargée et qu'elle contient un élément {{HTMLElement("link")}} avec l'attribut [`rel="prefetch"`](/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch).
Notez que si cet en-tête est défini, alors un en-tête {{HTTPHeader("Sec-Fetch-Dest")}} dans la requête doit être défini sur `empty` (toute valeur dans l'attribut `{{HTMLElement("link#as", "as")}}` de l'élément {{HTMLElement("link")}} est ignorée) et l'en-tête {{HTTPHeader("Accept")}} doit correspondre à la valeur utilisée pour les requêtes de navigation normales.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Fetch Metadata Request Header", "En-tête de métadonnées de requête de récupération")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui (préfixe <code>Sec-</code>)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête autorisé par CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Sec-Purpose: prefetch
```

## Directives

Les jetons autorisés sont&nbsp;:

- `prefetch`
  - : Le but est de précharger une ressource qui peut être nécessaire lors d'une navigation probable dans le futur.

## Exemples

### Une requête de récupération préalable

Considérons le cas où un navigateur charge un fichier contenant un élément HTML {{HTMLElement("link")}} qui possède l'attribut `rel="prefetch"` et un attribut `href` contenant l'adresse d'un fichier image.
Le résultat de `fetch()` doit être une requête HTTP comportant les en-têtes `Sec-Purpose: prefetch`, `Sec-Fetch-Dest: empty` et une valeur `Accept` identique à celle utilisée par le navigateur pour la navigation entre les pages.

Un exemple d'un tel en-tête (sur Firefox) est donné ci-dessous&nbsp;:

```http
GET /images/une_image.png HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Sec-Purpose: prefetch
Connection: keep-alive
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: no-cors
Sec-Fetch-Site: same-origin
Pragma: no-cache
Cache-Control: no-cache
```

> [!NOTE]
> Au moment de la rédaction, Firefox définit incorrectement l'en-tête `Accept` comme `Accept: */*` pour les récupérations préalables.
> L'exemple a été modifié pour montrer quelle doit être la valeur de `Accept`.
> Ce problème peut être suivi dans [le bogue Firefox 1836334 <sup>(angl.)</sup>](https://bugzil.la/1836334).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les en-têtes de métadonnées de requête de récupération {{HTTPHeader("Sec-Fetch-Dest")}}, {{HTTPHeader("Sec-Fetch-Mode")}}, {{HTTPHeader("Sec-Fetch-Site")}}, {{HTTPHeader("Sec-Fetch-User")}}
- L'entrée du glossaire {{Glossary("Prefetch", "Récupération préalable")}}
- L'élément HTML {{HTMLElement("link")}} avec l'attribut [`rel="prefetch"`](/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch)
