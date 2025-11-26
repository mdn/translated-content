---
title: "<acronym> : l'élément d'acronyme"
slug: Web/HTML/Reference/Elements/acronym
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<acronym>`** permet aux auteur·ice·s d'indiquer clairement une suite de caractères qui compose un acronyme ou une abréviation pour un mot.

> [!WARNING]
> N'utilisez pas cet élément. Utilisez plutôt l'élément HTML {{HTMLElement("abbr")}}.

## Attributs

Cet élément n'a pas d'autres attributs que les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes), communs à tous les éléments.

## Interface DOM

Cet élément implémente l'interface {{DOMxRef('HTMLElement')}}.

## Exemples

```html
<p>
  Le <acronym title="World Wide Web" lang="en">WWW</acronym>
  n'est qu'une facette d'Internet.
</p>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Style par défaut

Bien que le but de cette balise ne soit simplement qu'un avantage pratique pour l'auteur, son style par défaut varie selon les navigateurs&nbsp;:

- Opera, Firefox, et quelques autres ajoutent une ligne pointillée sous le contenu de l'élément.
- Quelques navigateurs ajoutent une ligne pointillée en dessous et mettent le contenu en petites majuscules. Pour éviter ce comportement, il est possible d'ajouter {{CSSxRef("font-variant", "font-variant: none")}} à la feuille de style CSS.

Il est donc fortement recommandé que les développeurs web ne s'attendent pas à un comportement uniforme concernant ce style par défaut.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("abbr")}}
