---
title: Base64
slug: Glossary/Base64
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Base64** est un groupe de schémas pour [encoder des données binaires sous forme d'un texte](https://fr.wikipedia.org/wiki/Conversion_du_binaire_en_texte) au format ASCII grâce à la représentation de ces données en base 64. Le terme _base64_ vient à l'origine de l'encodage utilisé pour transférer certains [contenus MIME](https://fr.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions#Content-Transfer-Encoding).

Les schémas d'encodage Base64 sont couramment utilisés pour encoder des données binaires afin de les stocker ou de les transférer sur des supports qui ne peuvent gérer que du texte ASCII (ou un sur-ensemble d'ASCII qui n'accepte pas les données binaires arbitraires). Cela garantit que les données restent intactes sans modification lors du transport. Les applications courantes de Base64 incluent&nbsp;:

- L'envoi d'e-mails via le [MIME](https://fr.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions)
- Le stockage de données complexes dans [XML](/fr/docs/Web/XML)
- L'encodage de données binaires pour qu'elles puissent être incluses dans une [URL `data:`](/fr/docs/Web/URI/Reference/Schemes/data)

## Caractères en Base64

Lorsque le terme «&nbsp;Base64&nbsp;» est utilisé seul pour désigner un {{Glossary("algorithm", "algorithme")}}, il fait généralement référence à la version de Base64 décrite dans le {{RFC("4648", "", 4)}}, qui utilise l'alphabet suivant pour représenter les chiffres en base 64, ainsi que `=` comme caractère de remplissage&nbsp;:

```plain
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```

## Base64 sûr pour les URL et noms de fichiers

Une variante courante de cette définition n'autorise que les caractères sûrs à utiliser dans les noms de fichiers et les valeurs de {{Glossary("URL")}}.
Cette version, définie dans {{RFC("4648", "", 5)}}, omet le remplissage et remplace `+` et `/` par `-` et `_`.

Vous n'avez pas besoin de cet encodage si vous n'insérez pas les données dans un segment de chemin ou un paramètre de requête — par exemple, les [URL de type data](/fr/docs/Web/URI/Reference/Schemes/data) n'ont ni l'un ni l'autre et peuvent utiliser l'encodage Base64 standard.

## Augmentation de la taille encodée

Chaque chiffre Base64 représente 6 bits de données (64 = 2<sup>6</sup>). Ainsi, trois octets de 8 bits de la chaîne ou du fichier binaire d'entrée (3×8 bits = 24 bits) peuvent être représentés par quatre chiffres Base64 de 6 bits (4×6 = 24 bits).

Cela signifie que la version Base64 d'une chaîne ou d'un fichier est généralement environ un tiers plus grande que sa source (l'augmentation exacte dépend de divers facteurs, comme la longueur absolue de la chaîne, sa longueur modulo 3 et la présence ou non de caractères de remplissage).

## Dernier bloc

La chaîne base64 peut être découpée en blocs de 4 caractères, le dernier bloc pouvant contenir moins de 4 caractères. Ce dernier bloc peut être complété par des caractères `=` pour atteindre exactement 4 caractères. Hors caractères de remplissage, le dernier bloc peut être&nbsp;:

- 2 caractères&nbsp;: encode 12 bits représentant 1 octet (8 bits) de données
- 3 caractères&nbsp;: encode 18 bits représentant 2 octets (16 bits) de données
- 4 caractères&nbsp;: encode 24 bits représentant 3 octets (24 bits) de données

Dans les deux premiers cas, les caractères peuvent avoir 4 ou 2 bits de fin supplémentaires qui ne représentent aucune donnée. Dans ce cas, le [RFC 4648 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc4648#section-3.5) exige que les encodeurs mettent ces bits à zéro et que les décodeurs puissent éventuellement lever une erreur s'ils ne sont pas à zéro. Par exemple, si les données encodées correspondent à un seul octet `0b01010101`, il faut deux caractères `0b010101` (`V`) et `0b010000` (`Q`), où le second caractère a 4 bits de fin à zéro. Décoder `VR==` (où le second caractère représente `0b010001`) donne techniquement le même octet `0b01010101`, mais le décodeur peut lever une erreur si les bits de fin ne sont pas à zéro.

## Prise en charge JavaScript

La classe {{JSxRef("Uint8Array")}} fournit les méthodes {{JSxRef("Uint8Array.fromBase64()")}}, {{JSxRef("Uint8Array.prototype.toBase64()")}} et {{JSxRef("Uint8Array.prototype.setFromBase64()")}} pour la conversion vers/depuis des chaînes de caractères en base64.

Les navigateurs proposent également nativement deux fonctions JavaScript pour décoder et encoder des chaînes de caractères en Base64&nbsp;:

- {{DOMxRef("Window.btoa()")}} (aussi {{DOMxRef("WorkerGlobalScope.btoa()", "disponible dans les workers", "", "nocode")}})&nbsp;: crée une chaîne de caractères ASCII encodée en Base64 à partir d'une chaîne de données binaires («&nbsp;btoa&nbsp;» signifie «&nbsp;binary to ASCII&nbsp;»).
- {{DOMxRef("Window.atob()")}} (aussi {{DOMxRef("WorkerGlobalScope.atob()", "disponible dans les workers", "", "nocode")}})&nbsp;: décode une chaîne de caractères encodée en Base64 («&nbsp;atob&nbsp;» signifie «&nbsp;ASCII to binary&nbsp;»).

> [!NOTE]
> Base64 est un encodage binaire et non un encodage texte, mais `btoa` et `atob` ont été ajoutées à la plateforme web avant la prise en charge des types de données binaires. En conséquence, ces deux fonctions utilisent des chaînes pour représenter des données binaires, le {{Glossary("code point", "point de code")}} de chaque caractère représentant la valeur de chaque octet. Cela a mené à la croyance erronée que `btoa` peut être utilisé pour encoder n'importe quelle donnée textuelle — par exemple, pour créer une URL `data:` Base64 d'un document texte ou HTML.
>
> Cependant, la correspondance octet/point de code n'est fiable que pour les points de code jusqu'à `0x7f`. De plus, les points de code supérieurs à `0xff` feront lever une erreur par `btoa` car ils dépassent la valeur maximale pour 1 octet. La section suivante détaille comment contourner cette limitation lors de l'encodage de texte Unicode arbitraire.

## Voir aussi

- Les API JavaScript&nbsp;:
  - {{DOMxRef("Window.atob()")}} (aussi {{DOMxRef("WorkerGlobalScope.atob()", "disponible dans les workers", "", "nocode")}})
  - {{DOMxRef("Window.btoa()")}} (aussi {{DOMxRef("WorkerGlobalScope.btoa()", "disponible dans les workers", "", "nocode")}})
  - {{JSxRef("Uint8Array")}}
- [URLs de données](/fr/docs/Web/URI/Reference/Schemes/data)
- [Base64](https://fr.wikipedia.org/wiki/Base64) sur Wikipédia
- Algorithme Base64 décrit dans le [RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)
