---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
---

{{AddonSidebar()}}

Contient des informations sur un proxy. Cet objet, ou un tableau de ces objets, est renvoyé par le programme d'écoute à {{WebExtAPIRef("proxy.onRequest")}}. Il indique au navigateur si la requête doit être mandatée et, dans l'affirmative, quel proxy utiliser.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `type`

  - : `string`. Cela indique s'il faut utiliser un proxy et, dans l'affirmative, quel type de proxy utiliser. Il peut prendre l'une des valeurs suivantes :

    - `"direct"`: ne pas utiliser la requête par procuration. Si cette valeur est donnée, toutes les autres propriétés de cet objet sont ignorées.
    - `"http"`: HTTP proxy (ou SSL CONNECT pour HTTPS)
    - `"https"`: HTTP proxying via TLS connection au proxy
    - `"socks"`: proxy SOCKS v5
    - `"socks4"`: proxy SOCKS v4

- `host`
  - : `string`. Le nom d'hôte du serveur proxy. Obligatoire sauf si le `type` est `"direct"`.
- `port`
  - : `string`. e numéro de port du serveur proxy. Obligatoire sauf si le `type` est `"direct"`.
- `username`
  - : `string`. Nom d'utilisateur pour le service proxy. Ceci est utilisable avec "socks". Pour les autorisations de proxy HTTP, utilisez [`webRequest.onAuthRequired`](/fr/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `password`
  - : `string`. Mot de passe pour le service proxy. Ceci est utilisable avec "socks". FPour les autorisations de proxy HTTP, utilisez [`webRequest.onAuthRequired`](/fr/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `proxyDNS`
  - : `boolean`. Si vrai, le serveur proxy est utilisé pour résoudre certaines requêtes DNS (uniquement utilisable avec `"socks4"` et `"socks"`). Par défaut à `false`.
- `failoverTimeout`
  - : `number`: Délais de basculement en secondes. Si la connexion ne parvient pas à connecter le serveur proxy après ce nombre de secondes, le serveur proxy suivant dans le tableau renvoyé par l'écouteur `proxy.onRequest` sera utilisé.

<!---->

- `proxyAuthorizationHeader`

  - : `string.` Cette chaîne, si elle est définie sur non-vide, est passée directement en valeur à l'en-tête de requête {{httpheader("Proxy-Authorization")}} envoyé aux proxies HTTP dans le cadre des requêtes HTTP ordinaires et des requêtes CONNECT. Simplement dit, ceci peut être utilisé pour s'authentifier directement sur les proxies HTTP nécessitant une authentification (non contestable).

    Par exemple, si vous voulez envoyer "nom d'utilisateur" et "mot de passe" pour l'authentification "basique", vous pouvez définir la propriété `proxyAuthorizationHeader` à `Basic dXNlcm5hbWU6cGFzc3dvcmQ=`

- `connectionIsolationKey` {{optional_inline}}
  - : `string.` Une clé optionnelle utilisée pour l'isolation supplémentaire de cette connexion proxy.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}
