---
title: "<strike> : l'élément obsolète de texte barré"
slug: Web/HTML/Reference/Elements/strike
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<strike>`** permet de représenter du texte barré ou avec une ligne le traversant.

> [!WARNING]
> Cet élément est obsolète dans HTML 4 et XHTML 1, et supprimé dans le [HTML Living Standard <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/obsolete.html#strike). Si cela est sémantiquement approprié, c'est-à-dire s'il représente du contenu _supprimé_, utilisez plutôt {{HTMLElement("del")}}. Dans tous les autres cas, utilisez {{HTMLElement("s")}}.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Exemples

```html
&lt;strike&gt;: <strike>Plat du jour&nbsp;: Saumon</strike> ÉPUISÉ<br />
&lt;s&gt;: <s>Plat du jour&nbsp;: Saumon</s> ÉPUISÉ
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("s")}}
- L'élément {{HTMLElement("del")}} qui doit être utilisé lorsque le contenu a été _supprimé_.
- La propriété CSS {{CSSxRef("text-decoration")}} qui peut être utilisée pour mettre en forme du texte barré.
