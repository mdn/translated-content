---
title: En-tête Alt-Svc
short-title: Alt-Svc
slug: Web/HTTP/Reference/Headers/Alt-Svc
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Alt-Svc`** permet à un serveur d'indiquer qu'un autre emplacement réseau (le «&nbsp;service alternatif&nbsp;») peut être considéré comme faisant autorité pour cette origine lors de futures requêtes.

Cela permet d'annoncer de nouvelles versions de protocole sans affecter les requêtes en cours et peut aussi aider les serveurs à gérer le trafic. L'utilisation d'un service alternatif n'est pas visible pour l'utilisateur·ice final·e&nbsp;; cela ne modifie pas l'URL ni l'origine de la requête et n'introduit pas de trajets supplémentaires.

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
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

## Directives

- `clear`
  - : Tous les services alternatifs de l'origine sont invalidés.
- `<protocol-id>`
  - : L'identifiant de protocole {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}}. Par exemple, `h2` pour HTTP/2 et `h3-25` pour le brouillon 25 du protocole HTTP/3.
- `<alt-authority>`
  - : Une chaîne de caractères entre guillemets définissant l'autorité alternative, composée d'un hôte facultatif, d'un deux-points et d'un numéro de port obligatoire.
- `ma=<max-age>` {{Optional_Inline}}
  - : Le nombre de secondes pendant lesquelles le service alternatif est considéré comme frais.
    Si omis, la valeur par défaut est 24 heures.
    Les entrées de service alternatif peuvent être mises en cache jusqu'à `<max-age>` secondes, moins l'âge de la réponse (depuis l'en-tête {{HTTPHeader("Age")}}).
    Une fois l'entrée expirée, le client ne peut plus utiliser ce service alternatif pour de nouvelles connexions.
- `persist=1` {{Optional_Inline}}
  - : Les entrées ne sont pas supprimées lors de changements de configuration réseau.
    Les entrées de service alternatif mises en cache sont généralement effacées lors de tels changements.

Plusieurs entrées peuvent être définies dans un seul en-tête `Alt-Svc` en utilisant la virgule comme séparateur.
Dans ce cas, les premières entrées sont considérées comme préférées.

## Exemple

```http
Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Services alternatifs <sup>(angl.)</sup>](https://www.mnot.net/blog/2016/03/09/alt-svc) par le président du HTTP Working Group, Mark Nottingham (2016)
