---
title: En-tête Forwarded
short-title: Forwarded
slug: Web/HTTP/Reference/Headers/Forwarded
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Forwarded`** contient des informations qui peuvent être ajoutées par des [serveurs mandataires inverses](/fr/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling) (équilibreurs de charge, CDN, etc.) et qui seraient autrement modifiées ou perdues lorsque des serveurs mandataires sont impliqués dans le chemin de la requête.

Par exemple, si un client se connecte à un serveur web via un proxy HTTP (ou un équilibreur de charge), les journaux du serveur ne contiendront que l'adresse IP, l'adresse hôte et le protocole du proxy&nbsp;; cet en-tête peut être utilisé pour identifier l'adresse IP, l'hôte et le protocole de la requête d'origine.
L'en-tête est optionnel et peut être ajouté, modifié ou supprimé par n'importe quel serveur mandataire sur le chemin vers le serveur.

Cet en-tête est utilisé pour le débogage, les statistiques et la génération de contenu dépendant de la localisation.
Par conception, il expose des informations sensibles pour la vie privée, telles que l'adresse IP du client.
Il faut donc garder à l'esprit la vie privée de l'utilisateur·ice lors de l'utilisation de cet en-tête.

Les versions alternatives et de facto standard de cet en-tête sont {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} et {{HTTPHeader("X-Forwarded-Proto")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

Les directives sont des paires `clé=valeur`, séparées par un point-virgule.

S'il y a plusieurs serveurs mandataires entre le client et le serveur, chacun peut définir ses propres informations de transmission.
Cela peut se faire en ajoutant un nouvel en-tête `Forwarded` à la fin du bloc d'en-têtes, ou en ajoutant l'information à la fin du dernier en-tête `Forwarded` dans une liste séparée par des virgules.

## Directives

- `by` {{Optional_Inline}}
  - : L'interface par laquelle la requête est arrivée sur le serveur mandataire.
    L'identifiant peut être&nbsp;:
    - un identifiant obscurci (comme «&nbsp;hidden&nbsp;» ou «&nbsp;secret&nbsp;»).
      Ceci doit être considéré comme la valeur par défaut.
    - une adresse IP (v4 ou v6, éventuellement avec un port, et l'IPv6 entre guillemets et crochets)
    - «&nbsp;unknown&nbsp;» lorsque l'entité précédente n'est pas connue (et que vous souhaitez tout de même indiquer que la requête a été transmise)

- `for` {{Optional_Inline}}
  - : Le client qui a initié la requête et les serveurs mandataires suivants dans une chaîne de serveurs mandataires.
    L'identifiant a les mêmes valeurs possibles que la directive `by`.
- `host` {{Optional_Inline}}
  - : Le champ d'en-tête de requête {{HTTPHeader("Host")}} tel que reçu par le serveur mandataire.
- `proto` {{Optional_Inline}}
  - : Indique le protocole utilisé pour effectuer la requête (généralement «&nbsp;http&nbsp;» ou «&nbsp;https&nbsp;»).

## Exemples

### Utilisation de l'en-tête `Forwarded`

```http
Forwarded: for="_mdn"

# insensible à la casse
Forwarded: For="[2001:db8:cafe::17]:4711"

# séparé par un point-virgule
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# Les valeurs provenant de plusieurs serveurs mandataires peuvent être ajoutées avec une virgule
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### Passage de `X-Forwarded-For` à `Forwarded`

Si votre application, serveur ou serveur mandataire prend en charge l'en-tête standardisé `Forwarded`, l'en-tête {{HTTPHeader("X-Forwarded-For")}} peut être remplacé.
Notez qu'une adresse IPv6 est placée entre guillemets et crochets dans `Forwarded` (contrairement à l'en-tête {{HTTPHeader("X-Forwarded-For")}}).

```http
X-Forwarded-For: 192.0.2.172
Forwarded: for=192.0.2.172

X-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## Spécifications

{{Specifications}}

## Voir aussi

- L'en-tête {{HTTPHeader("X-Forwarded-For")}}
- L'en-tête {{HTTPHeader("X-Forwarded-Host")}}
- L'en-tête {{HTTPHeader("X-Forwarded-Proto")}}
- L'en-tête {{HTTPHeader("Via")}} — fournit des informations sur le proxy lui-même, et non sur le client qui s'y connecte.
