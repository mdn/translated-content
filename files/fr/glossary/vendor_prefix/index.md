---
title: Préfixe vendeur
slug: Glossary/Vendor_Prefix
---

Les vendeurs de navigateurs ajoutent parfois des préfixes aux propriétés CSS expérimentales ou non standards. Les développeurs peuvent ainsi les expérimenter sans que les changements de comportement du navigateur ne cassent le code pendant le processus de standardisation. Les développeurs sont supposés attendre que le comportement du navigateur soit standardisé pour inclure la propriété non préfixée.

> **Note :** Les fournisseurs de navigateurs s'efforcent d'arrêter l'utilisation des préfixes fournisseurs pour les fonctionnalités expérimentales. Les développeurs Web les utilisent sur des sites Web de production, malgré leur caractère expérimental. Cela a rendu plus difficile la compatibilité des fournisseurs de navigateurs et le travail sur de nouvelles fonctionnalités ; cela a également été nuisible aux petits navigateurs qui se sont retrouvés obligés d'ajouter des préfixes d'autres navigateurs afin de charger des sites web populaires.
>
> Dernièrement, la tendance consiste à ajouter des fonctionnalités expérimentales derrière des indications contrôlées par l'utilisateur, et de travailler sur des spécifications plus petites et dont la stabilité est atteinte plus rapidement.

## CSS préfixes

En général, les principaux navigateurs utilisent ces préfixes :

- `-webkit- (`Chrome, nouvelles versions d'Opera.)
- `-moz-` (Firefox)
- `-o-` (Anciennes versions d'Opera)
- `-ms-` (Internet Explorer et Edge)

## API préfixes

Historiquement, les fournisseurs ont également utilisé des préfixes pour les API expérimentales. Si une interface entière est expérimentale, alors le nom de l'interface est préfixé (mais pas les propriétés ou méthodes à l'intérieur). Si une propriété ou une méthode expérimentale est ajoutée à une interface normalisée, la méthode ou la propriété individuelle est préfixée.

### Interfaces préfixes

Les préfixes pour les noms d'interface sont en majuscules:

- `Webkit` (Chrome, Safari, versions d'Opera récentes, presque tous les navigateurs iOS (y compris Firefox pour iOS) ; fondamentalement, tout navigateur basé sur WebKit).
- `Moz` (Firefox)
- `O` (anciennes versions d'Opera)
- `MS` (Internet Explorer et Edge)

### Propriétés et méthodes préfixes

Quant aux propriétés et aux méthodes, sont généralement utilisés :

- `webkit (`Chrome, Safari, nouvelles versions d'Opera, presque tous les navigateurs IOS (y compris Firefox pour IOS), fondamentalement, tout navigateur basé sur WebKit).
- `moz` (Firefox)
- `o` (anciennes versions d'Opera)
- `ms` (Internet Explorer et Edge)

## Voir aussi

### Culture générale

- [Section en anglais sur les préfixes des navigateurs en CSS](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) sur Wikipédia
