---
title: "HTMLAreaElement : propriété hash"
short-title: hash
slug: Web/API/HTMLAreaElement/hash
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

La propriété **`hash`** de l'interface {{DOMxRef("HTMLAreaElement")}} est une chaîne de caractères contenant un `"#"` suivi de l'identifiant de fragment du `href` de l'élément `<area>`. Si l'URL ne possède pas d'identifiant de fragment, cette propriété contient une chaîne vide, `""`.

Voir {{DOMxRef("URL.hash")}} pour plus d'informations.

## Valeur

Une chaîne de caractères.

## Exemples

### Récupérer le hash d'un lien `area`

Avec ce code HTML&nbsp;:

```html
<map name="infographic">
  <area
    id="mdn-circle"
    shape="circle"
    coords="130,136,60"
    href="https://developer.mozilla.org/#ExampleSection"
    alt="MDN" />
</map>

<img
  usemap="#infographic"
  src="/media/examples/mdn-info.png"
  alt="Infographie MDN" />
```

Vous pouvez obtenir le hash du lien `area` ainsi&nbsp;:

```js
const area = document.getElementById("mdn-circle");
area.hash; // '#ExampleSection'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}} à laquelle elle appartient.
