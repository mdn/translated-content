---
title: Indications du client HTTP
short-title: Indications du client
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

Les **indications du client** (<i lang="en">client hints</i> en anglais) sont un ensemble de champs d'[en-tête de requête HTTP](/fr/docs/Web/HTTP/Reference/Headers) qu'un serveur peut demander de manière proactive à un client pour obtenir des informations sur l'appareil, le réseau, l'utilisateur·ice et les préférences spécifiques à l'agent utilisateur.
Le serveur peut déterminer quelles ressources envoyer, en fonction des informations que le client choisit de fournir.

L'ensemble des en-têtes «&nbsp;indication&nbsp;» est listé dans le sujet [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers#indications_du_client) et [résumé ci-dessous](#types_dindications).

## Vue d'ensemble

1. Lorsque le navigateur effectue une première requête pour charger une page web, il envoie l'en-tête {{HTTPHeader("User-Agent")}} au serveur.
2. Il enverra également au serveur un ensemble par défaut d'en-têtes `Sec-CH-UA-*`&nbsp;; cet ensemble d'indications est appelé [indications à faible entropie](#indications_à_faible_entropie). Un appareil Android, par exemple, enverrait quelque chose comme&nbsp;:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   ```

   Ces en-têtes fournissent les informations suivantes&nbsp;:
   - {{HTTPHeader("Sec-CH-UA")}}&nbsp;: La version majeure du navigateur et les autres marques qui y sont associées.
   - {{HTTPHeader("Sec-CH-UA-Platform")}}&nbsp;: La plateforme.
   - {{HTTPHeader("Sec-CH-UA-Mobile")}}&nbsp;: Un booléen qui indique si le navigateur fonctionne sur un appareil mobile (`?1`) ou non (`?0`).

3. Le serveur peut définir qu'il prend en charge les indications du client et demander des indications supplémentaires à l'aide de l'en-tête de réponse {{HTTPHeader("Accept-CH")}}, qui contient une liste d'en-têtes supplémentaires séparés par des virgules qu'il souhaite recevoir dans les requêtes suivantes. Par exemple&nbsp;:

   ```http
   Accept-CH: Sec-CH-UA-Model, Sec-CH-UA-Form-Factors
   ```

   L'ensemble par défaut d'en-têtes est toujours envoyé&nbsp;; dans ce cas, nous avons également demandé&nbsp;:
   - {{HTTPHeader("Sec-CH-UA-Model")}}&nbsp;: Le modèle d'appareil sur lequel la plateforme fonctionne.
     - {{HTTPHeader("Sec-CH-UA-Form-Factors")}}&nbsp;: Le(s) facteur(s) de forme de l'appareil, qui indiquent comment l'utilisateur·ice interagit avec l'agent utilisateur — la taille de l'écran, les contrôles, etc.

4. Si le navigateur y est autorisé, il enverra les en-têtes demandés dans toutes les requêtes suivantes, jusqu'à la fermeture du navigateur ou de l'onglet. Par exemple, notre téléphone Android d'exemple pourrait envoyer les en-têtes mis à jour suivants lors des requêtes suivantes&nbsp;:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   Sec-CH-UA-Model: "Pixel 9"
   Sec-CH-UA-Form-Factors: "Mobile"
   ```

Cette approche est efficace car le serveur ne demande que les informations qu'il est capable de traiter utilement. Elle est également relativement «&nbsp;respectueuse de la vie privée&nbsp;», car il revient au client de décider quelles informations il·elle peut partager en toute sécurité.

> [!NOTE]
> Les indications du client peuvent aussi être définies en HTML à l'aide de l'élément HTML {{HTMLElement("meta")}} avec l'attribut [`http-equiv`](/fr/docs/Web/HTML/Reference/Elements/meta/http-equiv).
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Mise en cache et indications du client

Les indications du client qui déterminent quelles ressources sont envoyées dans les réponses doivent généralement aussi être incluses dans l'en-tête {{HTTPHeader("Vary")}} de la réponse concernée.
Cela garantit qu'une ressource différente est mise en cache pour chaque valeur différente de l'en-tête d'indication.

```http
Vary: Accept, Width, ECT
```

Vous pouvez préférer omettre de définir {{HTTPHeader("Vary")}} ou utiliser une autre stratégie pour les en-têtes d'indication du client dont la valeur change beaucoup, car cela rend effectivement la ressource non stockable en cache. (Une nouvelle entrée de cache est créée pour chaque valeur unique.)
Ceci s'applique en particulier aux indications du client réseau comme {{HTTPHeader("Downlink")}} et {{HTTPHeader("RTT")}}.
Pour plus d'informations, voir [Mise en cache HTTP > Vary](/fr/docs/Web/HTTP/Guides/Caching#vary).

## Durée de vie des indications

Un serveur définit les en-têtes d'indication du client qu'il souhaite obtenir dans l'en-tête de réponse `Accept-CH`.
L'agent utilisateur ajoute les en-têtes d'indication du client demandés, ou au moins le sous-ensemble qu'il souhaite partager avec ce serveur, à toutes les requêtes suivantes de la session de navigation en cours.

En d'autres termes, la demande d'un ensemble spécifique d'indications n'expire pas tant que le navigateur n'est pas fermé.

Un serveur peut remplacer l'ensemble des indications du client qu'il souhaite recevoir en retournant l'en-tête de réponse `Accept-CH` avec une nouvelle liste.
Par exemple, pour arrêter de demander des indications, il enverrait `Accept-CH` avec une liste vide.

> [!NOTE]
> L'ensemble des indications du client pour une origine particulière peut aussi être effacé en envoyant un en-tête de réponse {{HTTPHeader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}} pour une URL de cette origine.

## Indications à faible entropie

Les indications du client sont globalement divisées en indications à forte et à faible entropie.
Les indications à faible entropie sont celles qui ne révèlent pas beaucoup d'informations pouvant être utilisées pour [prendre l'empreinte](/fr/docs/Glossary/Fingerprinting) d'un·e utilisateur·ice.
Elles peuvent être envoyées par défaut à chaque requête du client, indépendamment de l'en-tête de réponse `Accept-CH` du serveur, selon la [politique d'autorisation <sup>(angl.)</sup>](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features).
Les indications à faible entropie sont&nbsp;:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}}, and
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Indications à forte entropie

Les indications à forte entropie sont celles qui peuvent potentiellement révéler plus d'informations pouvant être utilisées pour l'empreinte d'un·e utilisateur·ice, et sont donc soumises à des restrictions permettant à l'agent utilisateur de décider s'il doit les fournir.
La décision peut être basée sur les préférences de l'utilisateur·ice, une demande d'autorisation ou une [politique d'autorisation <sup>(angl.)</sup>](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features).
Toutes les indications du client qui ne sont pas à faible entropie sont considérées comme à forte entropie.

## Indications du client critiques

Une _indication du client critique_ est une indication dont l'application de la réponse peut modifier de manière significative la page affichée, potentiellement de façon gênante ou affectant l'utilisabilité, et qui doit donc être appliquée avant l'affichage du contenu.
Par exemple, `Sec-CH-Prefers-Reduced-Motion` est généralement considérée comme une indication critique, car elle peut fortement affecter le comportement des animations, et parce qu'un·e utilisateur·ice qui choisit cette préférence a besoin qu'elle soit prise en compte.

Un serveur peut utiliser l'en-tête de réponse {{HTTPHeader("Critical-CH")}} avec `Accept-CH` pour définir qu'une indication du client acceptée est aussi une indication critique (un en-tête dans `Critical-CH` doit aussi apparaître dans `Accept-CH`).
Les agents utilisateurs recevant une réponse avec `Critical-CH` doivent vérifier si les en-têtes critiques indiqués ont été envoyés dans la requête d'origine. Si ce n'est pas le cas, l'agent utilisateur retournera la requête au lieu d'afficher la page.
Cette approche garantit que les préférences du client définies à l'aide d'indications critiques sont toujours utilisées, même si elles ne sont pas incluses dans la première requête ou si la configuration du serveur change.

Par exemple, dans ce cas, le serveur définit à un client via {{HTTPHeader("Accept-CH")}} qu'il accepte `Sec-CH-Prefers-Reduced-Motion`, et {{HTTPHeader("Critical-CH")}} est utilisé pour définir que `Sec-CH-Prefers-Reduced-Motion` est considérée comme une indication du client critique&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Nous avons également défini `Sec-CH-Prefers-Reduced-Motion` dans l'en-tête {{HTTPHeader("Vary")}} pour définir au navigateur que le contenu servi différera en fonction de la valeur de cet en-tête, même si l'URL reste la même, donc le navigateur ne doit pas simplement utiliser une réponse en cache existante mais doit mettre en cache cette réponse séparément. Chaque en-tête listé dans l'en-tête `Critical-CH` doit aussi être présent dans les en-têtes `Accept-CH` et `Vary`.

Comme `Sec-CH-Prefers-Reduced-Motion` est une indication critique qui n'était pas dans la requête d'origine, le client retourne automatiquement la requête — cette fois en indiquant au serveur via `Sec-CH-Prefers-Reduced-Motion` qu'il a une préférence utilisateur·ice pour les animations réduites.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

En résumé, `Accept-CH` demande toutes les valeurs souhaitées pour la page, tandis que `Critical-CH` ne demande que le sous-ensemble de valeurs indispensables au chargement correct de la page.

## Types d'indications

### Indications du client sur l'agent utilisateur

Les en-têtes d'indication du client sur l'agent utilisateur (UA) permettent à un serveur de faire varier les réponses en fonction de l'agent utilisateur (navigateur), du système d'exploitation et de l'appareil.
Pour une liste des en-têtes `Sec-CH-UA-*`, voir [En-têtes d'indication du client sur l'agent utilisateur](/fr/docs/Web/HTTP/Reference/Headers#indications_client_pour_lagent_utilisateur).

Les indications du client sont accessibles au JavaScript des pages web via l'[API User Agent Client Hints](/fr/docs/Web/API/User-Agent_Client_Hints_API).

> [!NOTE]
> Les serveurs obtiennent actuellement la plupart de ces informations en analysant l'en-tête {{HTTPHeader("User-Agent")}}.
> Pour des raisons historiques, cet en-tête contient beaucoup d'informations largement inutiles, et des informations qui pourraient être utilisées pour identifier un·e utilisateur·ice particulier·ère.
> Les indications du client UA offrent un moyen plus efficace et respectueux de la vie privée d'obtenir les informations souhaitées.
> Elles devraient à terme remplacer cette ancienne approche.

> [!NOTE]
> Les indications du client sur l'agent utilisateur ne sont pas disponibles dans les [cadres protégés](/fr/docs/Web/API/Fenced_frame_API) car elles reposent sur la délégation de la [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy), qui pourrait être utilisée pour divulguer des données.

### Indications du client sur les préférences média utilisateur·ice

Les indications du client sur les préférences média utilisateur·ice permettent à un serveur de faire varier les réponses en fonction des préférences de l'agent utilisateur·ice pour les [médias CSS](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) comme le schéma de couleurs ou la réduction des mouvements.
En-têtes concernés&nbsp;: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Indications du client sur l'appareil

Les indications du client sur l'appareil permettent à un serveur de faire varier les réponses en fonction des caractéristiques de l'appareil, y compris la mémoire disponible et les propriétés de l'écran.
En-têtes concernés&nbsp;: {{HTTPHeader("Sec-CH-Device-Memory")}}, {{HTTPHeader("Sec-CH-DPR")}}, {{HTTPHeader("Sec-CH-Viewport-Height")}}, {{HTTPHeader("Sec-CH-Viewport-Width")}}.

### Indications du client sur le réseau

Les indications du client sur le réseau permettent à un serveur de faire varier les réponses en fonction du choix de l'utilisateur·ice, de la bande passante réseau et de la latence.
En-têtes concernés&nbsp;: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Utiliser les indications du client pour le design adaptatif

Il est possible d'utiliser les indications du client pour le design adaptatif, par exemple pour détecter si un appareil mobile ou une tablette affiche votre site.

Un téléphone Android enverrait les indications du client par défaut suivantes&nbsp;:

```http
Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Mobile: ?1
```

Une tablette Android, en revanche, enverrait les indications suivantes&nbsp;:

```http
Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Mobile: ?0
```

L'en-tête {{HTTPHeader("Sec-CH-UA-Mobile")}} peut être utilisé pour déterminer si l'appareil est un appareil mobile ou non. Pour des cas d'utilisation spécifiques au matériel, le nom du modèle d'appareil et le facteur de forme peuvent être demandés via les indications à forte entropie {{HTTPHeader("Sec-CH-UA-Model")}} et {{HTTPHeader("Sec-CH-UA-Form-Factors")}}.

Pour de nombreux besoins de design adaptatif, les [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using) peuvent être plus pratiques et flexibles. Cependant, il peut y avoir des cas où vous n'avez pas le contrôle sur les feuilles de style individuelles d'un site, et où il est nécessaire de faire varier la feuille de style servie en fonction de la signature de l'appareil ou d'une préférence utilisateur·ice. Il existe des indications du client qui reflètent certaines des requêtes média «&nbsp;préférence utilisateur·ice&nbsp;», comme {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}, {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, et {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}}.

## Voir aussi

- [En-têtes d'indications du client](/fr/docs/Web/HTTP/Reference/Headers#indications_fournies_par_le_client_client_hints)
- [L'en-tête HTTP `Vary`](/fr/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastructure <sup>(angl.)</sup>](https://wicg.github.io/client-hints-infrastructure/)
- [API User Agent Client Hints](/fr/docs/Web/API/User-Agent_Client_Hints_API)
- [Améliorer la confidentialité et l'expérience développeur·euse avec User-Agent Client Hints <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) sur developer.chrome.com (2020)
- [Migrer vers User-Agent Client Hints <sup>(angl.)</sup>](https://web.dev/articles/migrate-to-ua-ch) sur web.dev (2021)
