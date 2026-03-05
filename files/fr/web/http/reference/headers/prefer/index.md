---
title: En-tête Prefer
short-title: Prefer
slug: Web/HTTP/Reference/Headers/Prefer
l10n:
  sourceCommit: c8bc787246fbec6fed108e4fb9e25df1d70a29ce
---

L'en-tête HTTP **`Prefer`** permet aux client·e·s d'indiquer des préférences pour des comportements spécifiques du serveur lors du traitement d'une requête.

> [!NOTE]
> Les navigateurs ne gèrent pas les en-têtes `Prefer` et {{HTTPHeader("Preference-Applied")}}&nbsp;: ils sont utilisés dans des clients personnalisés, spécifiques à l'implémentation.
> Assurez-vous que le client et le serveur prennent en charge cet en-tête avant de l'utiliser en production.
>
> Les serveurs doivent ignorer silencieusement les préférences qu'ils ne prennent pas en charge, comme si l'en-tête n'était pas présent.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Prefer: <preference>, <preference>, ...
```

## Directives

- `respond-async`
  - : Le client préfère un traitement asynchrone.
    Par exemple, le serveur peut répondre avec {{HTTPStatus("202", "202 Accepted")}} indiquant que la requête a été acceptée, accompagné de l'en-tête {{HTTPHeader("Location")}} contenant une URL que le client peut utiliser pour suivre l'état du traitement.
- `return=minimal`
  - : Demande au serveur de retourner un contenu minimal (une réponse contenant uniquement les en-têtes).
- `return=representation`
  - : Demande une représentation complète de la ressource dans la réponse.
- `wait=<seconds>`
  - : Le temps dans lequel le client attend que le serveur fournisse une réponse, à partir du moment où la requête a été reçue.
    Si la préférence `respond-async` est également fournie, le serveur doit répondre de façon asynchrone si le traitement dépasse le temps d'attente.
    Sinon, le serveur doit considérer que le client abandonnera après le temps indiqué (le comportement dépend de l'implémentation du serveur).
- `handling=lenient`
  - : Le client souhaite que le serveur applique une validation et une gestion des erreurs souples lors du traitement de la requête.
- `handling=strict`
  - : Le client souhaite que le serveur applique une validation et une gestion des erreurs strictes lors du traitement de la requête.
- Préférence personnalisée
  - : Les fournisseurs ou applications peuvent définir leurs propres préférences selon leurs besoins.
    Par exemple&nbsp;: `Prefer: timezone=America/Los_Angeles`.

## Exemples

### Demander une réponse minimale

La requête suivante demande une réponse minimale.
Il s'agit généralement d'une réponse contenant uniquement les en-têtes (par opposition à `return=representation` où une représentation est incluse dans le corps de la réponse)&nbsp;:

```http
POST /resource HTTP/1.1
Host: exemple.com
Content-Type: application/json
Prefer: return=minimal

{"id":123, "name": "abc"}
```

Le serveur répond avec {{HTTPStatus("201")}}, mais n'inclut aucun corps de réponse.
L'en-tête {{HTTPHeader("Location")}} contient une URL indiquant l'emplacement de la ressource nouvellement créée.
Il n'est pas nécessaire d'inclure un en-tête `Preference-Applied` car l'absence de corps de réponse est évidente&nbsp;:

```http
HTTP/1.1 201 Created
Location: /resource?id=123
```

### Demander un traitement asynchrone

Cet exemple demande au serveur de démarrer une tâche de traitement asynchrone&nbsp;:

```http
POST /process HTTP/1.1
Host: exemple.com
Prefer: respond-async

{
  "task": "check-broken-links"
}
```

Le serveur répond avec {{HTTPStatus("202", "202 Accepted")}} indiquant que la requête a été acceptée et n'a pas encore été exécutée de façon asynchrone.
Un en-tête `Location` pointe vers un moniteur de statut représentant l'état du traitement&nbsp;:

```http
HTTP/1.1 202 Accepted
Location: http://exemple.com/tasks/123/status
```

### Fournir plusieurs préférences

La requête suivante inclut deux préférences&nbsp;; `timezone=Jupiter/Red_Spot` indique une préférence de fuseau horaire pour le client, et `handling=strict` pour strict validation&nbsp;:

```http
GET /events HTTP/1.1
Host: exemple.com
Prefer: handling=strict, timezone=Jupiter/Red_Spot
```

Dans cette implémentation, un fuseau horaire invalide provoquera une erreur&nbsp;:

```http
HTTP/1.1 400 Bad Request
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'en-tête {{HTTPHeader("Preference-Applied")}}
- [L'en-tête Prefer <sup>(angl.)</sup>](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) sur docs.oasis-open.org
- [L'en-tête Prefer <sup>(angl.)</sup>](https://docs.postgrest.org/en/v12/references/api/preferences.html) sur docs.postgrest.org
