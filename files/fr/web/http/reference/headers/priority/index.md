---
title: En-tête Priority
short-title: Priority
slug: Web/HTTP/Reference/Headers/Priority
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'en-tête HTTP **`Priority`** indique la préférence du·de la client·e pour l'ordre de priorité auquel la réponse contenant la ressource demandée doit être envoyée, par rapport aux autres requêtes de ressources sur la même connexion.
Si l'en-tête n'est pas défini dans la requête, une priorité par défaut est supposée.
Le serveur peut également inclure cet en-tête dans les réponses afin d'indiquer qu'il souhaite modifier les préférences de priorisation annoncées par le·la client·e.
Dans les réponses, cette information peut être utilisée comme entrée dans le processus de priorisation pour les serveurs de cache et autres serveurs qui transmettent la réponse.

Le serveur n'est pas lié par la priorisation du·de la client·e et peut n'utiliser les priorités du·de la client·e que comme indications pour son propre processus de priorisation.
Par exemple, un serveur peut savoir qu'une image spécifique est essentielle pour l'expérience utilisateur·ice et doit être envoyée avec la priorité la plus élevée.
La priorisation du serveur peut également être affectée par des facteurs tels que la congestion du réseau.

Cette requête peut être mise en cache, et le serveur doit contrôler la mise en cache ou l'applicabilité de la réponse mise en cache en utilisant les champs d'en-tête qui contrôlent le comportement du cache, tels que {{HTTPHeader("Cache-Control")}} et {{HTTPHeader("Vary")}}.

> [!NOTE]
> Cet en-tête fait partie du «&nbsp;schéma de priorisation extensible pour HTTP&nbsp;» défini dans {{RFC("9218")}}.
> Il existe également des trames `PRIORITY_UPDATE` HTTP/2 et HTTP/3 qui peuvent être utilisées pour re-prioriser une requête de ressource après son envoi.
> La requête peut être envoyée dans n'importe quelle version HTTP.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}}
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
Priority: u=<priority>
Priority: i
Priority: u=<priority>, i
```

## Directives

- `u=<priority>`
  - : Le paramètre «&nbsp;urgence&nbsp;» (`u`) définit une valeur de priorité `<priority>` pour la ressource.
    La valeur est un entier compris entre 0 et 7 inclus, dans l'ordre décroissant de priorité (0 est l'urgence la plus élevée).
    La valeur de priorité par défaut pour les requêtes est 3.
    Il n'y a pas de valeur de priorité par défaut pour les réponses&nbsp;: l'absence de l'en-tête dans une réponse indique que le serveur a choisi de ne pas modifier la priorité du·de la client·e.
    Une priorité de 7 ne doit être utilisée que pour les ressources qui sont peu susceptibles d'affecter l'expérience utilisateur·ice, telles que les tâches en arrière-plan ou la livraison de mises à jour logicielles.

    Les navigateurs doivent demander les documents susceptibles d'utiliser d'autres ressources au niveau de priorité par défaut.
    Les ressources référencées doivent ensuite être demandées avec des valeurs qui reflètent l'impact relatif sur l'expérience utilisateur·ice du moment de leur arrivée.

    Les serveurs peuvent avoir une vision différente de la priorité par rapport au·à la client·e, et peuvent répondre avec une valeur différente afin de fournir une indication de priorité aux serveurs intermédiaires.
    Le serveur intermédiaire peut prendre cette valeur en compte en plus de la priorité de la requête d'origine.
    L'absence de l'en-tête `Priority` dans la réponse indique que le serveur a choisi de ne pas modifier la priorité du·de la client·e.

- `i`
  - : La directive incrémentale (`i`), si elle est présente, indique qu'une réponse HTTP peut être traitée de façon incrémentale.

    Les ressources qui peuvent être traitées de façon incrémentale sont celles pour lesquelles le·la destinataire peut potentiellement faire quelque chose d'utile dès qu'un morceau arrive, plutôt que d'attendre que la ressource complète soit disponible.

    Si un navigateur définit cette directive, le serveur peut choisir de servir simultanément toutes les requêtes incrémentales avec la même urgence.
    Cela répartit les multiples requêtes sur la bande passante de la connexion, ce qui fait que toutes les requêtes commencent à être traitées plus tôt, mais prennent plus de temps au total pour être terminées.

    Si le navigateur ne définit pas cette directive, il indique qu'il ne traitera pas la ressource de façon incrémentale.
    Les serveurs doivent dans ce cas envoyer les réponses avec la même urgence une par une, dans l'ordre dans lequel leurs requêtes associées ont été générées.

> [!NOTE]
> Les serveurs doivent ignorer les directives de cet en-tête qu'ils ne comprennent pas.
> Les nouvelles directives ajoutées à l'avenir doivent être compatibles avec les directives existantes afin qu'elles puissent être ignorées sans risque.

## Exemples

### Définir l'urgence d'une ressource

L'exemple suivant montre une requête pour un fichier HTML.
L'urgence n'est pas définie, elle est donc par défaut à 3, avec `i` à faux.
C'est le réglage normal pour un document qui possède d'autres ressources.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

La requête ci-dessous est une requête possible pour un fichier CSS utilisé par le HTML.
L'urgence est définie à 2, indiquant que le navigateur considère qu'il s'agit d'une priorité assez élevée, mais `i` n'est pas défini car le fichier CSS ne peut pas être traité de façon incrémentale.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Les requêtes ci-dessus utilisent le format lisible par l'humain des spécifications HTTP/2 ou HTTP/3.
> Le format HTTP/1.1 utilisé dans la plupart de cette documentation serait&nbsp;:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Une réponse pourrait ressembler à ce qui suit.
Notez que dans ce cas, la `priority` n'est pas spécifiée, indiquant que le serveur n'a pas estimé nécessaire de modifier la priorité pour les serveurs intermédiaires.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Définir la directive incrémentale

L'en-tête ci-dessous montre une requête du navigateur pour une image qui peut être affichée de façon incrémentale.
Dans ce cas, la priorité est définie à 4 (inférieure à la valeur par défaut de 3), et `i` est défini pour indiquer que le·la client·e peut traiter le fichier JPG de façon incrémentale.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Le serveur peut envoyer une réponse comme celle ci-dessous.
Dans ce cas, la priorité est définie à 1, indiquant que le serveur considère que cette image particulière doit être envoyée avec une priorité élevée.

```http
:status: 200
content-type = image/jpeg
content-length = 610
...
priority = u=1, i
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Cache-Control")}}
- L'en-tête {{HTTPHeader("Vary")}}
