---
title: "Node : propriété baseURI"
short-title: baseURI
slug: Web/API/Node/baseURI
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("DOM")}}

La propriété en lecture seule **`baseURI`** de l'interface {{DOMxRef("Node")}} retourne l'URL de base absolue du document contenant le nœud.

L'URL de base est utilisée pour résoudre les URL relatives lorsque le navigateur doit obtenir une URL absolue, par exemple lors du traitement de l'attribut `src` d'un élément HTML {{HTMLElement("img")}} ou des attributs `xlink:href` {{Deprecated_Inline}} ou `href` dans SVG.

Bien que cette propriété soit en lecture seule, sa valeur est déterminée par un algorithme chaque fois que la propriété est consultée, et peut changer si les conditions changent.

L'URL de base est déterminée comme suit&nbsp;:

1. Par défaut, l'URL de base est l'emplacement du document (tel que déterminé par {{DOMxRef("window.location")}}).
2. S'il s'agit d'un document HTML et qu'il existe un élément {{HTMLElement("base")}} dans le document,
   la valeur `href` du _premier_ élément `base` avec un tel attribut est utilisée à la place.

## Valeur

Une chaîne de caractères représentant l'URL de base du nœud ({{DOMxRef("Node")}}).

## Exemples

### Sans \<base>

```html
<output>Pas calculé</output>
```

```js
const sortie = document.querySelector("output");
sortie.value = sortie.baseURI;
```

{{EmbedLiveSample("Sans \<base>", "100%", 40)}}

### Avec \<base>

```html
<base href="https://developer.mozilla.org/modified_base_uri/" />
<output>Pas calculé</output>
```

```js
const sortie = document.querySelector("output");
sortie.value = sortie.baseURI;
```

{{EmbedLiveSample("Avec \<base>", "100%", 40)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("base")}}
