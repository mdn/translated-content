---
title: "Attribut HTML : `integrity`"
short-title: integrity
slug: Web/HTML/Reference/Attributes/integrity
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

L'attribut **`integrity`** fournit un mécanisme permettant à un·e développeur·euse d'affirmer qu'un script ou une feuille de style liée doit avoir un contenu particulier. Le navigateur vérifiera que la ressource a effectivement ce contenu et refusera de charger la ressource si ce n'est pas le cas.

Il s'agit d'une défense contre une [attaque de la chaîne d'approvisionnement](/fr/docs/Web/Security/Attacks/Supply_chain_attacks) dans laquelle un attaquant obtient l'accès au domaine qui sert le script ou la feuille de style, et remplace la ressource attendue par une ressource malveillante.

## Description

L'attribut peut être appliqué uniquement aux éléments {{HTMLElement("script")}} ou {{HTMLElement("link")}}.

L'attribut se compose d'un ou plusieurs composants, chacun consistant en&nbsp;:

- Un identifiant pour une {{Glossary("hash function", "fonction de hachage cryptographique")}}. Trois fonctions de hachage sont prises en charge. Par ordre croissant de robustesse, il s'agit de&nbsp;: SHA-256, SHA-384 et SHA-512.
- Le résultat du hachage du contenu de la ressource en utilisant la fonction de hachage définie.

Lorsque le navigateur télécharge une ressource avec l'attribut `integrity` défini, il sélectionnera d'abord l'ensemble des hachages qui ont été générés en utilisant la fonction de hachage la plus robuste présente. C'est-à-dire que si l'attribut contient des valeurs générées avec SHA-256 et SHA-384, il n'utilisera que les hachages générés avec SHA-384.

Le navigateur calculera ensuite le hachage du contenu de la ressource en utilisant la fonction définie, et comparera le résultat avec toutes les valeurs définies&nbsp;: si la valeur réelle correspond à l'une des valeurs définies, alors le navigateur chargera la ressource, sinon il refusera de la charger.

Pour plus de détails, consultez notre guide sur [l'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity).

## Valeurs

La valeur de cet attribut consiste en une liste de composants séparés par des espaces, chacun ayant l'une des formes suivantes&nbsp;:

- `sha256-HASH_VALUE`
- `sha384-HASH_VALUE`
- `sha512-HASH_VALUE`

Dans chaque cas, la partie précédant `-` identifie la {{Glossary("hash function", "fonction de hachage")}} utilisée, et `HASH_VALUE` est l'encodage {{Glossary("base64")}} du résultat du hachage de la ressource en utilisant la fonction de hachage définie.

## Exemples

### Inclure différentes fonctions de hachage

L'élément {{HTMLElement("script")}} suivant inclut un attribut `integrity` contenant trois valeurs, l'une calculée avec SHA-256, l'autre avec SHA-384 et l'autre avec SHA-512.

Le navigateur sélectionnera la valeur calculée avec l'algorithme le plus robuste pris en charge par le navigateur. Comme tous les navigateurs modernes prennent en charge SHA-512, cela signifie que le navigateur sélectionnera la valeur `sha512-`. Il calculera le hachage du contenu du fichier en utilisant SHA-512 et comparera le résultat avec la valeur `sha512-`, et ne chargera le fichier que si les valeurs correspondent.

Dans ce cas, fournir plusieurs valeurs permet à un site Web de fonctionner avec des navigateurs qui ne prennent pas en charge toutes les fonctions de hachage.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

Notez que dans cet exemple et les suivants, nous avons tronqué les valeurs de hachage pour des raisons de brièveté.

### Inclure différentes valeurs de hachage

L'élément {{HTMLElement("script")}} suivant inclut un attribut `integrity` contenant deux valeurs différentes, toutes deux calculées en utilisant l'algorithme SHA-512. Ces différentes valeurs reflètent des contenus alternatifs pour le fichier lié.

Si le hachage SHA-512 du fichier lié correspond à l'une des valeurs données, alors le navigateur le chargera.

Cela permet au serveur de `cdn.example.com` de répondre avec l'une des deux versions du fichier.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

### Inclure `integrity` sur les éléments `<link>`

L'élément {{HTMLElement("link")}} suivant charge une feuille de style et inclut un attribut `integrity` contenant six valeurs, reflétant deux contenus possibles pour le fichier lié, chacun calculé en utilisant trois fonctions de hachage différentes.

Le navigateur sélectionnera l'ensemble de valeurs calculées avec la fonction de hachage la plus robuste qu'il prend en charge&nbsp;: dans les navigateurs modernes, ce seront les deux valeurs `sha512-`.

Il calculera ensuite le hachage du fichier téléchargé en utilisant SHA-512 et comparera le résultat avec les deux valeurs `sha512-`&nbsp;: si l'une d'elles correspond, le navigateur chargera la ressource.

```html
<link
  rel="stylesheet"
  href="https://cdn.example.com/style.css"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha256-OTcyMGZkY2Y3NGZhZjUwNWU5NGQ0ZWJhYWVhND
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-ZTdhYjQ2NTE5OTg0Yjc2ZDU2MDMxMDUxY2Y5NDMxYzI5NjA
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2
  sha512-IxZTcwZjE2ZjU3MzE4NWM5ODU4ZmJkYjBlYzBhYzFkYzU0OGJmM2ZkN"
  crossorigin="anonymous" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity)
- [Attaques de la chaîne d'approvisionnement](/fr/docs/Web/Security/Attacks/Supply_chain_attacks)
