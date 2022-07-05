---
title: SameSite cookies
slug: Web/HTTP/Headers/Set-Cookie/SameSite
tags:
  - Cookies
  - HTTP
  - Reference
  - samesite
translation_of: Web/HTTP/Headers/Set-Cookie/SameSite
---
{{HTTPSidebar}}

L'attribut **`SameSite`** de l'en-tête de réponse HTTP {{HTTPHeader("Set-Cookie")}} vous permet de déclarer si vos cookies doivent être restreints au site visité, à des tiers, ou à des sous-domaines du site actuel.

## Valeurs

L'attribut `SameSite` accepte trois valeurs possibles :

### `Lax`

Les cookies sont transférables depuis le site actuel vers des sites de niveaux inférieurs et seront envoyés lors de requêtes GET initialisées par des sites tiers. C'est la valeur par défaut des navigateurs les plus récents.

### `Strict`

Les cookies ne seront envoyés qu'avec les requêtes effectuées sur le domaine de même niveau, et ne seront pas envoyées sur les requêtes provenant de sites tiers.

### `None`

Les cookies seront envoyés dans tous les contextes, rendant possibles les requêtes de type _cross-origin_.

`None` était la valeur par défaut des navigateurs, mais les navigateurs les plus récents optent désormais pour la valeur `Lax` comme valeur par défaut pour une meilleure défense contre les attaques de type _cross-site request forgery_ ({{Glossary("CSRF")}}).

`None` requiert l'attribut `Secure` dans les dernières versions des navigateurs les plus récents. Voir plus bas pour plus d'informations.

## Corriger les erreurs les plus communes

### `SameSite=None` requiert `Secure`

Une alerte de ce type peut apparaître dans la console de votre navigateur :

> *Some cookies are misusing the “sameSite“ attribute, so it won’t work as expected.
> Cookie “*myCookie*” rejected because it has the “sameSite=none” attribute but is missing the “secure” attribute.*

Cet alerte apparaît dans les cas où des cookies requièrent l'attribut `SameSite=None` et ne sont pas marqués `Secure`, étant donc refusés par le navigateur.

```plain example-bad
Set-Cookie: flavor=choco; SameSite=None
```

Pour corriger cette erreur, vous devez ajouter l'attribut `Secure` à vos cookies marqués avec l'attribut `SameSite=None`.

```plain example-good
Set-Cookie: flavor=choco; SameSite=None; Secure
```

Un cookie `Secure` ne sera envoyé au serveur que par le biais de requêtes utilisant le protocole HTTPS. Il est à noter que les sites non sécurisés (`http:`) ne peuvent pas être marqués `Secure`.

### Les cookies sans l'attribut `SameSite` utilisent `SameSite=Lax` par défaut

Les dernières versions des navigateurs récents fournissent une valeur par défaut de `SameSite` plus sécurisée pour vos cookies, il se peut donc que le message suivant apparaisse dans la console de votre navigateur :

> *Some cookies are misusing the “sameSite“ attribute, so it won’t work as expected.
> Cookie “*myCookie*” has “sameSite” policy set to “lax” because it is missing a “sameSite” attribute, and “sameSite=lax” is the default value for this attribute.*

Cette alerte apparait car la stratégie de `SameSite` pour le cookie n'a pas été spécifiée explicitement :

```plain example-bad
Set-Cookie: flavor=choco
```

Même si vous pouvez compter sur la valeur par défaut `SameSite=Lax` des navigateurs récents, vous devriez tout de même spécifier la stratégie à appliquer pour ce cookie afin de communiquer clairement votre intention. Cela améliorera également l'expérience sur les autres navigateurs si ceux-ci n'utilisent pas encore la valeur par défaut `Lax`.

```plain example-good
Set-Cookie: flavor=choco; SameSite=Lax
```

## **Exemples**

    RewriteEngine on
    RewriteBase "/"
    RewriteCond "%{HTTP_HOST}"       "^example\.org$" [NC]
    RewriteRule "^(.*)"              "https://www.example.org/index.html" [R=301,L,QSA]
    RewriteRule "^(.*)\.ht$"         "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:01:https://www.example.org:30/:SameSite=None:Secure]
    RewriteRule "^(.*)\.htm$"        "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:02:https://www.example.org:30/:SameSite=None:Secure]
    RewriteRule "^(.*)\.html$"       "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:03:https://www.example.org:30/:SameSite=None:Secure]
    [...]
    RewriteRule "^admin/(.*)\.html$" "admin/index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:09:https://www.example.org:30/:SameSite=Strict:Secure]

## Spécifications

| Spécification                                                                                    | Titre                                                         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("6265", "Set-Cookie", "4.1")}}                                                 | HTTP State Management Mechanism                               |
| [draft-ietf-httpbis-rfc6265bis-05](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-05) | Cookie Prefixes, Same-Site Cookies, and Strict Secure Cookies |

## Compatibilité des navigateurs

{{Compat("http.headers.Set-Cookie", 5)}}

## Voir aussi

- [Les cookies HTTP](/fr/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
