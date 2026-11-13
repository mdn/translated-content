---
title: "HTMLAreaElement : propriété hostname"
short-title: hostname
slug: Web/API/HTMLAreaElement/hostname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété **`hostname`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de caractères contenant soit le {{Glossary("domain name", "nom de domaine")}}, soit l'{{Glossary("IP address", "adresse IP")}} de l'URL de l'élément `<area>`. Si l'URL ne possède pas de nom d'hôte, cette propriété contient une chaîne vide, `""`. Les adresses IPv4 et IPv6 sont normalisées, comme la suppression des zéros initiaux, et les noms de domaine sont convertis en [<abbr title="Nom de domaine internationalisé">NDI</abbr>](https://fr.wikipedia.org/wiki/Nom_de_domaine_internationalis%C3%A9).

Voir {{DOMxRef("URL.hostname")}} pour plus d'informations.

## Valeur

Une chaîne de caractères contenant le domaine de l'URL associée à l'élément `area`.
Peut être utilisée comme accesseur et mutateur.

## Exemples

```html
<textarea id="log" rows="4" cols="100"></textarea>
<map name="infographic">
  <area
    id="area1"
    shape="rect"
    coords="184,6,253,27"
    href="/fr/docs/Web/API/HTMLAreaElement"
    target="_blank"
    alt="Mozilla" />
  <area
    id="area2"
    shape="circle"
    coords="130,136,60"
    href="https://coolexample.com/"
    target="_blank"
    alt="MDN" />
</map>
```

```js
// Un élément est dans le document
const area1 = document.getElementById("area1");
const area2 = document.getElementById("area2");

const log = document.getElementById("log");
log.textContent = `area1 hostname: ${area1.hostname} \n`; // 'developer.mozilla.org'
log.textContent += `area2 hostname: ${area2.hostname}`; // 'coolexample.com'
```

{{EmbedLiveSample("Examples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
