---
title: En-tête Activate-Storage-Access
short-title: Activate-Storage-Access
slug: Web/HTTP/Reference/Headers/Activate-Storage-Access
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Activate-Storage-Access`** permet à un serveur d'activer une autorisation accordée pour accéder à ses [cookies non partitionnés](/fr/docs/Web/API/Storage_Access_API#cookies_partitionnés_contre_non_partitionnés) lors d'une requête inter-sites.

Le serveur s'appuie sur l'information d'état d'autorisation fournie dans l'en-tête {{HTTPHeader("Sec-Fetch-Storage-Access")}} de la requête.

Ces en-têtes sont collectivement appelés [en-têtes d'accès au stockage](/fr/docs/Web/API/Storage_Access_API#en-têtes_daccès_au_stockage).
Ils offrent une alternative efficace au fait de charger d'abord la ressource sans cookies, d'utiliser l'[API d'accès au stockage](/fr/docs/Web/API/Storage_Access_API) pour activer l'autorisation, puis de recharger la ressource avec les cookies.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Fetch Metadata Request Header", "En-tête de requête Fetch Metadata")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête sûr pour le CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Activate-Storage-Access: retry; allowed-origin="https://toto.tata"
Activate-Storage-Access: retry; allowed-origin=*
Activate-Storage-Access: load
```

## Directives

- `retry`
  - : Demande au navigateur d'activer l'autorisation d'accès au stockage pour le contexte puis de réessayer la requête avec les cookies inclus.
    Le paramètre `allowed-origin` doit être défini pour autoriser l'origine spécifique (définir `*` pour autoriser n'importe quelle origine).
- `load`
  - : Demande au navigateur d'activer l'autorisation d'accès au stockage pour le contexte puis de charger la ressource.

## Description

L'[API d'accès au stockage](/fr/docs/Web/API/Storage_Access_API) fournit un mécanisme JavaScript permettant à une ressource intégrée de demander l'autorisation `storage-access`.
Ceci permet d'envoyer des cookies tiers dans les requêtes, ce qui serait sinon bloqué par défaut dans la plupart des navigateurs.
La ressource doit d'abord être demandée sans cookies, de sorte que le serveur retourne une version non authentifiée de la ressource qui n'aura pas accès à ses propres cookies.
Après le chargement, cette ressource peut appeler {{DOMxRef("Document.requestStorageAccess()")}} avec une activation transitoire pour demander l'autorisation d'accès au stockage.
Si l'utilisateur·ice accorde l'autorisation, celle-ci est stockée par le navigateur dans une clé associée à l'intégrateur et au site intégré.
Le navigateur doit alors recharger la ressource, qu'il peut maintenant demander avec les cookies car il dispose de l'état d'autorisation `active` pour le contexte courant.

L'autorisation est accordée pour un couple intégrateur/site intégré particulier, mais n'est activée que pour un contexte particulier, tel qu'un `<iframe>` ou un onglet du navigateur.
Cela signifie que si vous chargez la même page dans un nouvel onglet ou `<iframe>`, l'état d'autorisation de ce contexte sera `inactive`&nbsp;; il ne deviendra `active` que lorsque l'autorisation sera activée.
Le flux normal d'accès au stockage consiste à demander à nouveau la ressource sans cookies, à appeler `Document.requestStorageAccess()` pour activer l'autorisation existante, puis à recharger la ressource avec les cookies.

La ressource doit être chargée au moins une fois pour que l'autorisation d'accès au stockage soit accordée.
Cependant, une fois accordée, un serveur peut utiliser `Activate-Storage-Access` pour activer l'autorisation pour d'autres contextes.
Cela évite d'avoir à charger la ressource uniquement pour activer l'autorisation via `Document.requestStorageAccess()`.

Le fonctionnement est le suivant&nbsp;:

1. Le navigateur ajoute `Sec-Fetch-Storage-Access: inactive` aux requêtes lorsque le contexte dispose de l'autorisation mais qu'elle n'est pas active (ainsi que l'en-tête `Origin` indiquant la source de la requête).
2. Si le serveur reçoit `Sec-Fetch-Storage-Access: inactive`, il peut répondre avec `Activate-Storage-Access: retry; allowed-origin="<request_origin>"` pour demander au navigateur d'activer l'autorisation pour le contexte et de réessayer la requête.
3. Si le navigateur reçoit la demande de réessai, il active l'autorisation et envoie à nouveau la requête, cette fois avec `Sec-Fetch-Storage-Access: active` et en incluant les cookies.
4. Si le serveur voit une requête avec `Sec-Fetch-Storage-Access: active` et des cookies, il répond avec la version authentifiée de la ressource.
   Une fois chargée par le navigateur, cette ressource a accès à ses cookies comme s'il s'agissait d'une ressource de premier niveau.

Les réponses doivent également inclure l'en-tête {{HTTPHeader("Vary")}} avec `Sec-Fetch-Storage-Access`.

## Exemples

Ces exemples montrent des requêtes avec {{HTTPHeader("Sec-Fetch-Storage-Access")}} pour des contextes ayant différents états d'autorisation d'accès au stockage, et les réponses correspondantes avec `Activate-Storage-Access`.
Ils utilisent l'exemple d'un site, `https://monsite.exemple`, qui inclut un {{HTMLElement("iframe")}} intégrant une page de profil utilisateur, `embedded.com/user/profile`.

### Activation d'une autorisation par le serveur

Cet exemple suppose que l'utilisateur·ice a déjà accordé l'autorisation pour le contexte, mais qu'elle n'a pas encore été activée.
(Avec l'API, on activerait l'autorisation en rechargeant la ressource afin qu'elle puisse appeler `Document.requestStorageAccess()`.)

La requête concerne un `<iframe>` inter-sites avec le mode d'identifiants ["include"](/fr/docs/Web/API/Request/credentials#include).
Le navigateur a ajouté `Sec-Fetch-Storage-Access: inactive` à la requête, car l'autorisation `secure-access` a été accordée mais pas activée.
Il n'a pas ajouté de cookies car ils sont bloqués par défaut.
L'en-tête `Origin` est également défini car le serveur doit connaître la source de la requête.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://monsite.exemple
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: inactive
Credentials-Mode: include
```

Le serveur répond avec `Activate-Storage-Access: retry; allowed-origin="https://monsite.exemple"`, indiquant que le navigateur doit activer l'autorisation accordée et réessayer la requête avec les cookies.
Le serveur inclut l'en-tête {{HTTPHeader("Vary")}}, car la réponse peut varier selon `Sec-Fetch-Storage-Access`.

```http
HTTP/1.1 401 Unauthorized
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: retry; allowed-origin="https://monsite.exemple"
```

Le navigateur active l'autorisation et effectue une nouvelle requête.
Vous pouvez voir ci-dessous qu'il positionne `Sec-Fetch-Storage-Access: active` et inclut cette fois les cookies tiers.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://monsite.exemple
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: active
Credentials-Mode: include
Cookie: sessionid=abc123
```

Le serveur répond alors avec la ressource authentifiée qui inclut `Activate-Storage-Access: load`.
La ressource est chargée et a accès à ses cookies comme s'il s'agissait d'une inclusion de premier niveau.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Activate-Storage-Access: load
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

### Autorisation secure-access initialement non accordée

Cet exemple suppose qu'il s'agit de la _première_ fois que l'utilisateur·ice visite une page qui intègre un contenu de `embedded.com`, donc l'autorisation d'accès au stockage n'a pas été accordée.

Les en-têtes ne peuvent activer une autorisation que pour un contexte qui a déjà été accordé — ils ne peuvent pas être utilisés pour _accorder_ l'autorisation d'accès au stockage à l'origine.
La page intégrée doit donc être chargée sans cookies puis appeler {{DOMxRef("Document.requestStorageAccess()")}} avec une activation transitoire pour demander l'autorisation d'accès au stockage.
C'est le même flux que si les en-têtes n'étaient pas présents.

> [!NOTE]
> Les en-têtes sont ajoutés là où c'est approprié lorsque l'autorisation n'a pas été accordée, mais n'affectent pas matériellement le flux de messages ou le comportement du navigateur.
> Comme l'exemple ne démontre pas le but principal des en-têtes, nous l'avons présenté après l'exemple «&nbsp;déjà accordé&nbsp; ».

La requête est la même que dans l'exemple précédent, sauf que le navigateur a ajouté `Sec-Fetch-Storage-Access: none`, car l'autorisation `secure-access` n'a pas été accordée.
Là encore, les cookies ne sont pas ajoutés car ils sont bloqués par défaut.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://monsite.exemple
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: none
Credentials-Mode: include
```

Le serveur retourne une version non authentifiée de la ressource.
Celle-ci inclut l'en-tête {{HTTPHeader("Vary")}}, car la réponse peut varier selon `Sec-Fetch-Storage-Access`.
Notez qu'elle n'inclut pas `Activate-Storage-Access` car le serveur ne peut pas activer une autorisation si aucune n'a été accordée.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

La page intégrée appellerait alors {{DOMxRef("Document.requestStorageAccess()")}} avec une activation transitoire pour demander l'autorisation d'accès au stockage.
Si l'autorisation d'accès au stockage est accordée pour la page intégrée, elle est également activée.

Elle se rechargerait alors, ce qui donnerait la requête suivante.
Cette fois, le navigateur ajoute `Sec-Fetch-Storage-Access: active` et inclut les cookies tiers, reflétant l'état d'autorisation du contenu intégré.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://monsite.exemple
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: active
Credentials-Mode: include
Cookie: sessionid=abc123
```

Le serveur répond avec la version authentifiée de la ressource, qui peut être différente de la première version chargée, et ajoute l'en-tête `Activate-Storage-Access: load`.
Le navigateur charge la page, qui aura désormais accès à ses propres informations de cookie.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: load

<html>
  ...
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Sec-Fetch-Storage-Access")}}
- [En-têtes d'accès au stockage](/fr/docs/Web/API/Storage_Access_API#en-têtes_daccès_au_stockage) dans _Storage Access API_
- [Séquences d'en-têtes d'accès au stockage](/fr/docs/Web/API/Storage_Access_API#séquences_den-têtes_daccès_au_stockage) dans _Storage Access API_
