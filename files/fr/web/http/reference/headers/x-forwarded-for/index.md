---
title: En-tête X-Forwarded-For
short-title: X-Forwarded-For
slug: Web/HTTP/Reference/Headers/X-Forwarded-For
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`X-Forwarded-For`** (XFF) est un en-tête standard de facto permettant d'identifier l'adresse IP d'origine d'un client se connectant à un serveur web par un {{Glossary("proxy server", "serveur mandataire")}}.

Une version standardisée de cet en-tête est l'en-tête HTTP {{HTTPHeader("Forwarded")}}, bien qu'il soit beaucoup moins utilisé.

> [!WARNING]
> Une utilisation incorrecte de cet en-tête peut représenter un risque pour la sécurité.
> Pour plus de détails, voir la section [Problèmes de sécurité et de confidentialité](#problèmes_de_sécurité_et_de_confidentialité).

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
X-Forwarded-For: <client>, <proxy>
X-Forwarded-For: <client>, <proxy>, …, <proxyN>
```

Par exemple, une IP client IPV6 dans le premier en-tête, une IP client IPV4 dans le deuxième en-tête, et une IP client IPV4 et une IP mandataire IPV6 dans le troisième exemple&nbsp;:

```http
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348
X-Forwarded-For: 203.0.113.195
X-Forwarded-For: 203.0.113.195, 2001:db8:85a3:8d3:1319:8a2e:370:7348
```

## Directives

- `<client>`
  - : L'adresse IP du client.
- `<proxy>`
  - : L'adresse IP d'un mandataire.
    Si une requête passe par plusieurs mandataires, les adresses IP de chaque mandataire successif sont listées.
    Cela signifie que l'adresse IP la plus à droite est l'adresse IP du mandataire le plus récent et que l'adresse IP la plus à gauche est l'adresse du client d'origine (en supposant que le client et les mandataires se comportent correctement).

## Description

Lorsqu'un client se connecte directement à un serveur, l'adresse IP du client est envoyée au serveur et est souvent écrite dans les journaux d'accès du serveur.
Si une connexion client passe par des mandataires directs ou inverses, le serveur ne voit que l'adresse IP du dernier mandataire, ce qui est souvent peu utile.
C'est particulièrement vrai si le dernier mandataire est un équilibreur de charge faisant partie du même déploiement que le serveur.
Pour fournir une adresse IP client plus utile au serveur, l'en-tête de requête `X-Forwarded-For` est utilisé.

Pour des conseils détaillés sur l'utilisation de `X-Forwarded-For`, voir les sections [Analyser](#analyser) et [Sélectionner une adresse IP](#sélectionner_une_adresse_ip).

### Problèmes de sécurité et de confidentialité

Cet en-tête divulgue par conception des informations sensibles sur la vie privée, telles que l'adresse IP du client.
Par conséquent, la confidentialité de l'utilisateur·ice doit être prise en compte lors de l'utilisation de cet en-tête.

Si vous savez que tous les mandataires de la chaîne de requête sont fiables (c'est-à-dire que vous les contrôlez) et sont correctement configurés, les parties de l'en-tête ajoutées par vos mandataires peuvent être considérées comme fiables.
Si un mandataire est malveillant ou mal configuré, toute partie de l'en-tête non ajoutée par un mandataire de confiance peut être falsifiée ou avoir un format ou un contenu inattendu.
Si le serveur peut être connecté directement depuis Internet — même s'il se trouve également derrière un mandataire inverse de confiance — **aucune partie** de la liste d'adresses IP `X-Forwarded-For` ne peut être considérée comme fiable ou sûre pour des utilisations liées à la sécurité.

Toute utilisation liée à la sécurité de `X-Forwarded-For` (comme pour la limitation du débit ou le contrôle d'accès basé sur l'IP) _doit uniquement_ utiliser les adresses IP ajoutées par un mandataire de confiance.
L'utilisation de valeurs non fiables peut entraîner une contournement de la limitation du débit, un contournement du contrôle d'accès, une saturation de la mémoire ou d'autres conséquences négatives sur la sécurité ou la disponibilité.

Les valeurs les plus à gauche (non fiables) ne doivent être utilisées que dans les cas où il n'y a pas d'impact négatif à utiliser des valeurs falsifiées.

### Analyser

Une analyse incorrecte de l'en-tête `X-Forwarded-For` peut avoir un impact négatif sur la sécurité avec des conséquences comme décrit dans la section précédente.
Pour cette raison, les points suivants doivent être pris en compte lors de l'analyse des valeurs de l'en-tête.

Il peut y avoir plusieurs en-têtes `X-Forwarded-For` présents dans une requête.
Les adresses IP dans ces en-têtes doivent être traitées comme une seule liste, en commençant par la première adresse IP du premier en-tête et en continuant jusqu'à la dernière adresse IP du dernier en-tête.
Il y a deux façons de créer cette liste unique&nbsp;:

- Joindre les valeurs complètes de l'en-tête `X-Forwarded-For` avec des virgules, puis les diviser par virgule en une liste, ou
- Diviser chaque en-tête `X-Forwarded-For` par virgule en listes, puis joindre les listes.

Il est insuffisant d'utiliser un seul des multiples en-têtes `X-Forwarded-For`.

Certains mandataires inverses joignent automatiquement plusieurs en-têtes `X-Forwarded-For` en un seul, mais il est plus sûr de ne pas supposer que c'est le cas.

### Sélectionner une adresse IP

Lors de la sélection d'une adresse, la liste complète des adresses IP (provenant de tous les en-têtes `X-Forwarded-For`) doit être utilisée.

Lors du choix de l'adresse IP `X-Forwarded-For` la plus proche du client (non fiable et _pas_ à des fins liées à la sécurité), la première adresse IP à partir de l'extrême gauche qui est _une adresse valide_ et _non privée/interne_ doit être sélectionnée.

> [!NOTE]
> Nous disons «&nbsp;une adresse valide&nbsp;» ci-dessus parce que les valeurs usurpées peuvent ne pas être de véritables adresses IP.
> De plus, nous disons «&nbsp;non privée/interne&nbsp;» parce que les clients peuvent avoir utilisé des mandataires sur leur réseau interne, ce qui peut avoir ajouté des adresses provenant de [l'espace IP privé <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Private_network).

Pour choisir la première adresse IP du client _fiable_ de `X-Forwarded-For`, une configuration supplémentaire est nécessaire.
Deux méthodes courantes existent&nbsp;:

- Nombre de mandataires de confiance
  - : Configurez le nombre de mandataires inverses entre Internet et le serveur.
    Recherchez dans la liste d'adresses IP `X-Forwarded-For` en partant de la droite et en remontant de ce nombre moins un.
    Par exemple, s'il n'y a qu'un seul mandataire inverse, ce mandataire ajoute l'adresse IP du client, donc utilisez l'adresse la plus à droite.
    S'il y a trois mandataires inverses, les deux dernières adresses IP sont internes.
- Liste de mandataires de confiance
  - : Configurez les adresses IP ou les plages d'adresses IP des mandataires inverses de confiance.
    Recherchez dans la liste d'adresses IP `X-Forwarded-For` en partant de la droite, en ignorant toutes les adresses présentes dans la liste des mandataires de confiance.
    La première adresse qui ne correspond pas est l'adresse cible.

La première adresse IP fiable de `X-Forwarded-For` peut appartenir à un mandataire intermédiaire non fiable plutôt qu'au client réel, mais c'est la seule adresse IP qui convient pour identifier un client à des fins de sécurité.

## Exemples

### Adresses IP du client et des mandataires

Vous pouvez déduire de l'en-tête de requête `X-Forwarded-For` suivant que l'adresse IP du client est `203.0.113.195` et que la requête est passée par deux mandataires.
Le premier mandataire possède l'adresse IPv6 `2001:db8:85a3:8d3:1319:8a2e:370:7348` et le dernier mandataire de la chaîne de requête possède l'adresse IPv4 `198.51.100.178`&nbsp;:

```http
X-Forwarded-For: 203.0.113.195,2001:db8:85a3:8d3:1319:8a2e:370:7348,198.51.100.178
```

## Spécifications

Ne fait partie d'aucune spécification actuelle. La version normalisée de cet en-tête est {{HTTPHeader("Forwarded")}}.

## Voir aussi

- Les en-têtes {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}}
- L'en-tête {{HTTPHeader("Via")}}
- L'en-tête {{HTTPHeader("Forwarded")}}
- [Qu'est-ce que `X-Forwarded-For` et quand peut-on lui faire confiance&nbsp;? <sup>(angl.)</sup>](https://httptoolkit.com/blog/what-is-x-forwarded-for/) httptoolkit.com (2024)
