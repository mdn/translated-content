---
title: Serveurs mandataires et tunnel
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Lors de la navigation à travers différents réseaux de l'Internet, les serveurs mandataires et les tunnels HTTP facilitent l'accès au contenu du World Wide Web. Un serveur mandataire peut se trouver sur l'ordinateur local de l'utilisateur·ice, ou n'importe où entre l'ordinateur de l'utilisateur·ice et un serveur de destination sur l'Internet. Cette page présente quelques notions de base sur les serveurs mandataires et introduit quelques options de configuration.

Il existe deux types de serveurs mandataires&nbsp;: les **serveurs mandataires directs** (ou tunnel, ou passerelle) et les **serveurs mandataires inverses** (utilisés pour contrôler et protéger l'accès à un serveur pour l'équilibrage de charge, l'authentification, le déchiffrement ou la mise en cache).

## Serveurs mandataires directs

Un serveur mandataire direct, ou passerelle, ou simplement «&nbsp;mandataire&nbsp;» fournit des services de mandataire à un client ou à un groupe de clients. Il existe probablement des centaines de milliers de serveurs mandataires directs ouverts sur l'Internet. Ils stockent et transmettent les services Internet (comme le DNS ou les pages web) pour réduire et contrôler la bande passante utilisée par le groupe.

Les serveurs mandataires directs peuvent également être anonymes et permettre aux utilisateur·ice·s de masquer leur adresse IP lors de la navigation sur le Web ou de l'utilisation d'autres services Internet. Par exemple, [Tor <sup>(angl.)</sup>](https://www.torproject.org/) achemine le trafic Internet à travers plusieurs serveurs mandataires pour garantir l'anonymat.

## Serveurs mandataires inverses

Comme son nom l'indique, un serveur mandataire inverse fait le contraire d'un serveur mandataire direct&nbsp;: un serveur mandataire direct agit au nom des client·e·s (ou des hôtes demandeurs). Les serveurs mandataires directs peuvent masquer l'identité des client·e·s tandis que les serveurs mandataires inverses peuvent masquer l'identité des serveurs. Les serveurs mandataires inverses ont plusieurs cas d'utilisation, en voici quelques-uns&nbsp;:

- Équilibrage de charge&nbsp;: distribuer la charge sur plusieurs serveurs web,
- Mise en cache du contenu statique&nbsp;: décharger les serveurs web en mettant en cache le contenu statique comme les images,
- Compression&nbsp;: compresser et optimiser le contenu pour accélérer le temps de chargement.

## Transmettre les informations du client à travers les serveurs mandataires

Les serveurs mandataires peuvent faire en sorte que les requêtes semblent provenir de l'adresse IP du serveur mandataire. Cela peut être utile si un serveur mandataire est utilisé pour fournir l'anonymat du client, mais dans d'autres cas, les informations de la requête originale sont perdues. L'adresse IP du client original est souvent utilisée pour le débogage, les statistiques ou la génération de contenu dépendant de la localisation. Une manière courante de divulguer cette information est d'utiliser les en-têtes HTTP suivants&nbsp;:

L'en-tête standardisé&nbsp;:

- {{HTTPHeader("Forwarded")}}
  - : Contient des informations provenant du côté client des serveurs mandataires qui sont modifiées ou perdues lorsqu'un mandataire est impliqué dans le chemin de la requête.

Ou les versions de facto standard&nbsp;:

- {{HTTPHeader("X-Forwarded-For")}} {{Non-standard_Inline}}
  - : Identifie les adresses IP d'origine d'un client se connectant à un serveur web à travers un serveur mandataire HTTP ou un équilibreur de charge.
- {{HTTPHeader("X-Forwarded-Host")}} {{Non-standard_Inline}}
  - : Identifie l'hôte d'origine demandé qu'un client a utilisé pour se connecter à votre serveur mandataire ou équilibreur de charge.
- {{HTTPHeader("X-Forwarded-Proto")}} {{Non-standard_Inline}}
  - : Identifie le protocole (HTTP ou HTTPS) qu'un client a utilisé pour se connecter à votre serveur mandataire ou équilibreur de charge.

Pour fournir des informations sur le serveur mandataire lui-même (et non sur le client qui s'y connecte), l'en-tête `Via` peut être utilisé.

- {{HTTPHeader("Via")}}
  - : Ajouté par les serveurs mandataires, qu'ils soient directs ou inverses, et peut apparaître dans les en-têtes de requête et les en-têtes de réponse.

## Tunnel HTTP

Le tunnel transporte les données du réseau privé et les informations de protocole à travers le réseau public en encapsulant les données. Le tunnel HTTP utilise un protocole de niveau supérieur (HTTP) pour transporter un protocole de niveau inférieur (TCP).

Le protocole HTTP définit une méthode de requête appelée {{HTTPMethod("CONNECT")}}. Elle initie des communications bidirectionnelles avec la ressource demandée et peut être utilisée pour ouvrir un tunnel. C'est ainsi qu'un client derrière un serveur mandataire HTTP peut accéder aux sites web utilisant TLS (c'est-à-dire HTTPS, port 443). Notez cependant que tous les serveurs mandataires ne prennent pas en charge la méthode `CONNECT` ou la limitent uniquement au port 443.

Voir aussi [l'article sur le tunnel HTTP sur Wikipedia](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Configuration automatique du mandataire (PAC)

Un fichier [configuration automatique du mandataire (PAC)](/fr/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) est une fonction [JavaScript](/fr/docs/Web/JavaScript) qui détermine si les requêtes du navigateur web (HTTP, HTTPS et FTP) vont directement à la destination ou sont transmises à un serveur mandataire web. La fonction JavaScript contenue dans le fichier PAC définit la fonction&nbsp;:

Le fichier de configuration automatique doit être enregistré avec l'extension `.pac`&nbsp;: `proxy.pac`.

Le type MIME doit être défini sur `application/x-ns-proxy-autoconfig`.

Le fichier contient une fonction appelée `FindProxyForURL`. L'exemple ci-dessous fonctionne dans un environnement où le serveur DNS interne est configuré de manière à ne résoudre que les noms d'hôtes internes, l'objectif étant d'utiliser un mandataire uniquement pour les hôtes qui ne peuvent pas être résolus&nbsp;:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

## Voir aussi

- [Fichier de configuration automatique du mandataire (PAC)](/fr/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
- La méthode {{HTTPMethod("CONNECT")}}
- L'entrée du glossaire {{Glossary("Proxy server","Serveur mandataire")}}
