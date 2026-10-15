---
title: En-tête Strict-Transport-Security
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Strict-Transport-Security`** (souvent abrégé en {{Glossary("HSTS")}}) informe les navigateurs que {{Glossary("host", "l'hôte")}} ne doit être accessible qu'en utilisant HTTPS, et que toute tentative future d'y accéder en utilisant HTTP doit être automatiquement mise à niveau vers HTTPS.
De plus, lors des futures connexions à l'hôte, le navigateur n'autorise pas l'utilisateur·ice à contourner les erreurs de connexion sécurisée, telles qu'un certificat invalide.
HSTS identifie un hôte uniquement par son nom de domaine.

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
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains; preload
```

## Directives

- `max-age=<expire-time>`
  - : Le temps, en secondes, pendant lequel le navigateur doit se souvenir qu'un hôte ne doit être accessible qu'en utilisant HTTPS.
- `includeSubDomains` {{Optional_Inline}}
  - : Si cette directive est définie, la politique HSTS s'applique également à tous les sous-domaines du domaine de l'hôte.
- `preload` {{Optional_Inline}} {{Non-standard_Inline}}
  - : Voir [Préchargement de Strict Transport Security](#précharger_strict_transport_security) pour plus de détails. Lors de l'utilisation de `preload`, la directive `max-age` doit être d'au moins `31536000` (1 an), et la directive `includeSubDomains` doit être présente.

## Description

L'en-tête `Strict-Transport-Security` informe le navigateur que toutes les connexions à l'hôte doivent utiliser HTTPS.
Bien qu'il s'agisse d'un en-tête de réponse, il n'affecte pas la manière dont le navigateur traite la réponse actuelle, mais plutôt la manière dont il effectue les requêtes futures.

Lorsque une réponse HTTPS inclut l'en-tête `Strict-Transport-Security`, le navigateur ajoute le nom de domaine de l'hôte à sa liste persistante des hôtes HSTS.
Si le nom de domaine est déjà dans la liste, le temps d'expiration et la directive `includeSubDomains` sont mis à jour.
L'hôte est identifié uniquement par son nom de domaine. Une adresse IP ne peut pas être un hôte HSTS.
HSTS s'applique à tous les ports de l'hôte, quel que soit le port utilisé pour la requête.

Avant de charger une URL `http`, le navigateur vérifie le nom de domaine par rapport à sa liste d'hôtes HSTS.
Si le nom de domaine correspond, sans tenir compte de la casse, à un hôte HSTS ou est un sous-domaine de l'un de ceux qui ont défini `includeSubDomains`, alors le navigateur remplace le schéma de l'URL par `https`.
Si l'URL définit le port 80, le navigateur le change en 443.
Tout autre numéro de port explicite reste inchangé, et le navigateur se connecte à ce port en utilisant HTTPS.

Si un avertissement ou une erreur TLS, telle qu'un certificat invalide, se produit lors de la connexion à un hôte HSTS, le navigateur n'offre pas à l'utilisateur·ice la possibilité de continuer ou de «&nbsp;cliquer pour passer outre&nbsp;» le message d'erreur, ce qui compromet l'intention de la sécurité stricte.

> [!NOTE]
> L'hôte doit envoyer l'en-tête `Strict-Transport-Security` uniquement par HTTPS, et non par HTTP non sécurisé.
> Les navigateurs ignorent l'en-tête s'il est envoyé par HTTP afin d'empêcher un·e [attaquant·e de type «&nbsp;le manipulateur au milieu&nbsp;» (MITM)](/fr/docs/Web/Security/Attacks/MITM)
> de modifier l'en-tête pour qu'il expire prématurément ou de l'ajouter pour un hôte qui ne prend pas en charge HTTPS.

### Expiration

Chaque fois que le navigateur reçoit un en-tête `Strict-Transport-Security`, il met à jour le temps d'expiration HSTS de l'hôte en ajoutant `max-age` au temps actuel.
L'utilisation d'une valeur fixe pour `max-age` peut empêcher l'expiration de HSTS, car chaque réponse suivante repousse l'expiration plus loin dans le futur.

Si l'en-tête `Strict-Transport-Security` est absent dans une réponse d'un hôte qui en a précédemment envoyé un, l'en-tête précédent reste en vigueur jusqu'à son expiration.

Pour désactiver HSTS, définissez `max-age=0`.
Cela ne prend effet qu'une fois que le navigateur effectue une requête sécurisée et reçoit l'en-tête de réponse.
Par conception, vous ne pouvez pas désactiver HSTS par HTTP non sécurisé.

### Sous-domaines

La directive `includeSubDomains` indique au navigateur d'appliquer la politique HSTS d'un domaine à ses sous-domaines également.
Une politique HSTS pour `secure.example.com` avec `includeSubDomains` s'applique également à `login.secure.example.com` et `admin.login.secure.example.com`. Mais elle ne s'applique pas à `example.com` ou `insecure.example.com`.

Chaque hôte de sous-domaine doit inclure des en-têtes `Strict-Transport-Security` dans ses réponses même si le super-domaine utilise `includeSubDomains`, car un navigateur peut contacter un hôte de sous-domaine avant le super-domaine.
Par exemple, si `example.com` inclut l'en-tête HSTS avec `includeSubDomains`, mais que tous les liens existants vont directement à `www.example.com`, le navigateur ne voit jamais l'en-tête HSTS de `example.com`.
Par conséquent, `www.example.com` doit également envoyer des en-têtes HSTS.

Le navigateur stocke la politique HSTS pour chaque domaine et sous-domaine de manière indépendante, quel que soit la directive `includeSubDomains`.
Si à la fois `example.com` et `login.example.com` envoient des en-têtes HSTS, le navigateur stocke deux politiques HSTS distinctes, et elles peuvent expirer indépendamment. Si `example.com` utilise `includeSubDomains`, alors `login.example.com` reste couvert si l'une des politiques expire.

Si `max-age=0`, `includeSubDomains` n'a aucun effet, car le domaine qui a défini `includeSubDomains` est immédiatement supprimé de la liste des hôtes HSTS&nbsp;; cela ne supprime pas les politiques HSTS distinctes de chaque sous-domaine.

### Requêtes HTTP non sécurisées

Si l'hôte accepte les requêtes HTTP non sécurisées, il doit répondre par une redirection permanente (comme le code d'état {{HTTPStatus("301")}}) ayant une URL `https` dans l'en-tête {{HTTPHeader("Location")}}.
La redirection ne doit pas inclure l'en-tête `Strict-Transport-Security` puisque la requête a utilisé HTTP non sécurisé, mais l'en-tête doit être envoyé uniquement par HTTPS.
Après que le navigateur a suivi la redirection et effectué une nouvelle requête en utilisant HTTPS, la réponse doit inclure l'en-tête `Strict-Transport-Security` pour s'assurer que les tentatives futures de chargement d'une URL `http` utilisent immédiatement HTTPS, sans nécessiter de redirection.

Une faiblesse de HSTS est qu'il ne prend effet que lorsque le navigateur a établi au moins une connexion sécurisée avec l'hôte et a reçu l'en-tête `Strict-Transport-Security`.
Si le navigateur charge une URL `http` non sécurisée avant de savoir que l'hôte est un hôte HSTS, la requête initiale est vulnérable aux attaques réseau.
Le [préchargement](#précharger_strict_transport_security) atténue ce problème.

### Scénario d'exemple de Strict Transport Security

1. À la maison, l'utilisateur·ice visite `http://example.com/` pour la première fois.
2. Comme le schéma de l'URL est `http` et que le navigateur ne l'a pas dans sa liste des hôtes HSTS, la connexion utilise HTTP non sécurisé.
3. Le serveur répond par une redirection `301 Moved Permanently` vers `https://example.com/`.
4. Le navigateur effectue une nouvelle requête, cette fois en utilisant HTTPS.
5. La réponse, effectuée par HTTPS, inclut l'en-tête&nbsp;:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Le navigateur se souvient que `example.com` est un hôte HSTS, et qu'il a défini `includeSubDomains`.

6. Quelques semaines plus tard, l'utilisateur·ice est à l'aéroport et décide d'utiliser le Wi-Fi gratuit. Mais, à son insu, il·elle se connecte à un point d'accès malveillant fonctionnant sur l'ordinateur portable d'un·e attaquant·e.
7. L'utilisateur·ice ouvre `http://login.example.com/`. Comme le navigateur se souvient que `example.com` est un hôte HSTS et que la directive `includeSubDomains` a été utilisée, le navigateur utilise HTTPS.
8. L'attaquant·e intercepte la requête avec un faux serveur HTTPS, mais ne dispose pas d'un certificat valide pour le domaine.
9. Le navigateur affiche une erreur de certificat invalide et n'autorise pas l'utilisateur·ice à la contourner, empêchant ainsi qu'il·elle ne fournisse son mot de passe à l'attaquant·e.

### Précharger Strict Transport Security

Google maintient [un service de préchargement HSTS <sup>(angl.)</sup>](https://hstspreload.org/).
En suivant les directives et en envoyant avec succès votre domaine, vous pouvez vous assurer que les navigateurs se connectent à votre domaine uniquement par des connexions sécurisées.
Bien que le service soit hébergé par Google, tous les navigateurs utilisent cette liste de préchargement.
Cependant, elle ne fait pas partie de la spécification HSTS et ne doit pas être considérée comme officielle.

- Informations concernant la liste de préchargement HSTS dans Chrome&nbsp;: https://www.chromium.org/hsts/
- Consultation de la liste de préchargement HSTS de Firefox&nbsp;: [nsSTSPreloadList.inc <sup>(angl.)</sup>](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

## Exemples

### Utiliser `Strict-Transport-Security`

Tous les sous-domaines présents et futurs sont en HTTPS pour un `max-age` d'un an.
Cela bloque l'accès aux pages ou sous-domaines qui ne peuvent être servis qu'en HTTP.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Un `max-age` de 1 an est la valeur minimale acceptée pour le préchargement HSTS. L'exemple suivant utilise 2 ans, qui est la valeur indiquée dans l'en-tête d'exemple sur https://hstspreload.org.

Dans l'exemple suivant, `max-age` est défini sur 2 ans et est suffixé par `preload`, ce qui est nécessaire pour l'inclusion dans les listes de préchargement HSTS de tous les principaux navigateurs web, comme Chromium, Edge et Firefox.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les fonctionnalités restreintes aux contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security a été lancé&nbsp;! <sup>(angl.)</sup>](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) sur blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (forcer HTTPS) <sup>(angl.)</sup>](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) sur hacks.mozilla.org (2010)
- L'anti-sèche [HTTP Strict Transport Security <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) sur owasp.org
- [HTTP Strict Transport Security <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) sur Wikipedia
- [Service de préchargement HSTS <sup>(angl.)</sup>](https://hstspreload.org/)
