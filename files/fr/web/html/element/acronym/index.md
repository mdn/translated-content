---
title: "<acronym> : l'élément d'acronyme"
slug: Web/HTML/Element/acronym
---

{{HTMLSidebar}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.

L'élément HTML **`<acronym>`**, pour les acronymes, permet aux auteurs de pages d'indiquer une suite de caractères composant un acronyme ou l'abréviation d'un mot.

> **Note :** Cet élément n'existe plus en HTML5 et ne devrait plus être utilisé. **Les développeuses et développeurs web devraient utiliser l'élément [`<abbr>`](/fr/docs/Web/HTML/Element/abbr) à la place**.

## Attributs

Cet élément n'a pas d'autres attributs que les [attributs universels](/fr/docs/Web/HTML/Global_attributes), communs à tous les éléments.

## Interface DOM

Cet élément implémente l'interface [`HTMLElement`](/fr/docs/Web/API/HTMLElement).

> **Note :** Jusqu'à Gecko 1.9.2 (inclus), Firefox implémente l'interface [`HTMLSpanElement`](/fr/docs/Web/API/HTMLSpanElement) pour cet élément.

## Exemples

```html
<p>
  Le <acronym title="World Wide Web" lang="en">WWW</acronym>
  n'est qu'une facette d'Internet.
</p>
```

### Résultat

{{EmbedLiveSample('')}}

## Style par défaut

Bien que le but de cette balise ne soit simplement qu'un avantage pratique pour l'auteur, son style par défaut varie selon les navigateurs :

- Certains navigateurs comme Internet Explorer lui attribuent le même style qu'un élément [`<span>`](/fr/docs/Web/HTML/Element/span).
- Opera, Firefox, et quelques autres ajoutent une ligne pointillée sous le contenu de l'élément.
- Quelques navigateurs ajoutent une ligne pointillée en dessous et mettent le contenu en petites majuscules. Pour éviter ce comportement, il est possible d'ajouter `font-variant: none` à la feuille de style CSS.

Il est donc fortement recommandé que les développeurs web ne s'attendent pas à un comportement uniforme concernant ce style par défaut.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML [`<abbr>`](/fr/docs/Web/HTML/Element/abbr)
