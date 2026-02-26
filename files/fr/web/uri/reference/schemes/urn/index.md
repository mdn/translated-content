---
title: URLs de nom de ressource uniforme
short-title: "urn:"
slug: Web/URI/Reference/Schemes/urn
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

Un nom de ressource uniforme (<i lang="en">Uniform Resource Name</i> en anglais, abrégé en <abbr>URN</abbr>) est une URI qui identifie une ressource par son nom dans un espace de noms particulier.
Les URN fournissent des noms globalement uniques pour les ressources, contrairement aux URL qui fournissent des informations sur leur emplacement.

## Syntaxe

```url
urn:<NID>:<NSS>
```

- `<NID>`
  - : Un NID (identifiant d'espace de noms) est un identifiant insensible à la casse pour l'espace de noms (par exemple, `ISBN` et `isbn` sont équivalents).
    Les NID sont maintenus par [des registres comme l'IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml), et leur résolution dépend de l'espace de noms spécifique.
    Par exemple, la résolution du NID `ISBN` est assurée par les systèmes de [l'Agence internationale ISBN <sup>(angl.)</sup>](https://www.isbn-international.org/).
- `<NSS>`
  - : Le NSS (chaîne spécifique à l'espace de noms) est une chaîne unique dans un espace de noms URN.
    La combinaison du NID (unique dans tout le schéma «&nbsp;urn&nbsp;») et du NSS garantit que l'URN résultant est globalement unique.

## Exemples

### URN ISBN

Cet ISBN correspond au livre [1984 de George Orwell <sup>(angl.)</sup>](https://isbnsearch.org/isbn/9780141036144)&nbsp;:

```url
urn:isbn:9780141036144
```

### URN IETF

Cet URN correspond à la spécification IETF {{RFC("7230", "Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing")}}&nbsp;:

```url
urn:ietf:rfc:7230
```

## Spécifications

{{Specifications}}

## Voir aussi

- [URIs](/fr/docs/Web/URI)
- [Qu'est-ce qu'une URL&nbsp;?](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [Liste IANA des schémas URI <sup>(angl.)</sup>](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
