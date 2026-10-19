---
title: En-tête X-DNS-Prefetch-Control
short-title: X-DNS-Prefetch-Control
slug: Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Non-standard_Header}}

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`X-DNS-Prefetch-Control`** contrôle le préchargement DNS, une fonctionnalité par laquelle les navigateurs effectuent de manière proactive la résolution des noms de domaine sur les liens que l'utilisateur·ice peut choisir de suivre ainsi que sur les URL des éléments référencés par le document, y compris les images, CSS, JavaScript, et ainsi de suite.

L'idée est que le préchargement soit effectué en arrière-plan afin que la résolution {{Glossary("DNS")}} soit terminée au moment où les éléments référencés sont nécessaires au navigateur.
Cela réduit la latence lorsque l'utilisateur·ice clique sur un lien, par exemple.

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
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### Directives

- `on`
  - : Active le préchargement DNS. C'est ce que font les navigateurs s'ils prennent en charge la fonctionnalité lorsque cet en-tête n'est pas présent.
- `off`
  - : Désactive le préchargement DNS. Cela est utile si vous ne contrôlez pas le lien sur les pages ou si vous savez que vous ne voulez pas divulguer d'informations à ces domaines.

## Description

Les requêtes DNS utilisent très peu de bande passante, mais leur latence peut être très élevée, en particulier sur les réseaux mobiles. En préchargeant les résultats DNS de manière spéculative, vous réduisez considérablement la latence à certains moments, par exemple lorsque l'utilisateur·ice clique sur le lien. Dans certains cas, vous réduisez la latence d'une seconde.

L'implémentation de ce préchargement dans certains navigateurs permet de résoudre les noms de domaine en parallèle (plutôt qu'en série) du chargement du contenu réel de la page. Ainsi, le processus de résolution des noms de domaine à latence élevée ne retarde pas le chargement du contenu.

Vous améliorez sensiblement les temps de chargement des pages — en particulier sur les réseaux mobiles — de cette manière. Si les noms de domaine des images sont résolus avant que les images soient demandées, les pages qui chargent de nombreuses images peuvent réduire leur temps de chargement de 5% ou plus.

### Configurer le préchargement dans le navigateur

En général, vous n'avez rien à faire pour gérer le préchargement. Cependant, l'utilisateur·ice peut vouloir désactiver le préchargement. Dans Firefox, définissez la préférence `network.dns.disablePrefetch` sur `true`.

De plus, par défaut, le préchargement des noms d'hôte des liens intégrés n'est pas effectué dans les documents chargés en {{Glossary("HTTPS")}}. Dans Firefox, définissez la préférence `network.dns.disablePrefetchFromHTTPS` sur `false` pour modifier ce comportement.

## Exemples

### Activer et désactiver le préchargement

Vous pouvez envoyer l'en-tête `X-DNS-Prefetch-Control` côté serveur ou depuis des documents individuels en utilisant l'attribut [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv) de l'élément {{HTMLElement("meta")}}, comme ceci&nbsp;:

```html
<meta http-equiv="x-dns-prefetch-control" content="off" />
```

Vous pouvez inverser ce réglage en définissant `content` sur `"on"`.

### Forcer la recherche de noms d'hôte spécifiques

Vous pouvez forcer la recherche de noms d'hôte spécifiques sans fournir d'ancres qui utilisent ces noms d'hôte, en utilisant l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel) de l'élément HTML {{HTMLElement("link")}} avec un [type de lien](/fr/docs/Web/HTML/Reference/Attributes/rel) `dns-prefetch`&nbsp;:

```html
<link rel="dns-prefetch" href="https://www.mozilla.org" />
```

Dans cet exemple, le nom de domaine `www.mozilla.org` est résolu à l'avance.

De même, vous pouvez utiliser l'élément link pour résoudre des noms d'hôte sans fournir une URL complète, en faisant précéder le nom d'hôte de deux barres obliques&nbsp;:

```html
<link rel="dns-prefetch" href="//www.mozilla.org" />
```

Le préchargement forcé de noms d'hôte peut être utile, par exemple, sur la page d'accueil d'un site, pour résoudre à l'avance les noms de domaine souvent référencés sur l'ensemble du site, même s'ils ne sont pas utilisés sur la page d'accueil elle-même. Vous améliorez ainsi les performances globales du site, même si les performances de la page d'accueil ne changent pas.

## Spécifications

Ne fait pas partie de spécifications actuelles.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Préchargement DNS dans Firefox <sup>(angl.)</sup>](https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome gère le contrôle du préchargement DNS <sup>(angl.)</sup>](https://www.chromium.org/developers/design-documents/dns-prefetching/)
