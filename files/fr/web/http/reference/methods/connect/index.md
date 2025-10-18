---
title: Méthode de requête CONNECT
short-title: CONNECT
slug: Web/HTTP/Reference/Methods/CONNECT
original_slug: Web/HTTP/Methods/CONNECT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

La méthode HTTP **`CONNECT`** demande à un·e {{Glossary("Proxy server", "proxy")}} d'établir un tunnel HTTP vers un serveur de destination et, en cas de succès, de transmettre aveuglément les données dans les deux sens jusqu'à la fermeture du tunnel.

La cible de la requête est unique à cette méthode&nbsp;: elle se compose uniquement de l'hôte et du port de destination du tunnel, séparés par un deux-points (voir la section [Syntaxe](#syntaxe) pour plus de détails).
Tout [code de statut de réponse 2XX de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) signifie que le proxy passe en «&nbsp;mode tunnel&nbsp;» et que toute donnée dans le corps de la réponse provient du serveur identifié par la cible de la requête.

Si un site web est derrière un proxy et que des règles réseau imposent que tout le trafic externe passe par ce proxy, la méthode `CONNECT` permet d'établir une connexion {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) avec ce site&nbsp;:

- Le client demande au proxy de créer un tunnel pour la connexion {{Glossary("TCP")}} vers la destination souhaitée.
- Le serveur proxy établit une connexion sécurisée avec le serveur pour le compte du client.
- Une fois la connexion établie, le proxy continue de relayer le flux TCP entre le client et le serveur.

En plus de permettre un accès sécurisé à des sites derrière des proxies, un tunnel HTTP permet de faire passer du trafic qui serait autrement restreint (SSH ou FTP) via le protocole HTTP(S).

`CONNECT` est une méthode «&nbsp;hop-by-hop&nbsp;»&nbsp;: les proxies ne transmettent la requête `CONNECT` que s'il y a un autre proxy en amont du serveur d'origine, car la plupart des serveurs d'origine n'implémentent pas `CONNECT`.

> [!WARNING]
> Si vous exploitez un proxy prenant en charge `CONNECT`, limitez son usage à un ensemble de ports connus ou à une liste configurable de cibles sûres.
> Il existe des risques importants à établir un tunnel vers des serveurs arbitraires, en particulier lorsque la destination est un port TCP bien connu ou réservé qui n'est pas destiné au trafic Web.
> Un proxy mal configuré peut être détourné pour relayer du trafic comme SMTP afin de diffuser du courrier indésirable, par exemple.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">La réponse de succès a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sûre")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotente")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Mis en cache")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        Autorisée dans <a href="/fr/docs/Learn_web_development/Extensions/Forms">les formulaires HTML</a>
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
CONNECT <host>:<port> HTTP/1.1
```

- `<host>`
  - : Un hôte qui peut être un nom d'hôte enregistré (par exemple, `exemple.fr`) ou une adresse IP (IPv4, IPv6).
- `<port>`
  - : Un numéro de port en décimal (par exemple, `80`, `443`). Il n'y a pas de port par défaut, donc le client **doit** toujours en spécifier un.

## Exemple

Une requête pour les serveurs proxy qui nécessitent une autorisation pour créer un tunnel ressemble à ceci.
Voir l'en-tête {{HTTPHeader("Proxy-Authorization")}} pour plus d'informations.

```http
CONNECT serveur.exemple.fr:80 HTTP/1.1
Host: serveur.exemple.fr:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- L'entrée de glossaire {{Glossary("Proxy server")}}
- L'en-tête {{HTTPHeader("Proxy-Authorization")}}
- [Utiliser SSH via un proxy HTTP <sup>(angl.)</sup>](https://www.dimoulis.net/posts/ssh-over-proxy/) sur dimoulis.net (2023)
