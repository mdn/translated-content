---
title: a
slug: Web/SVG/Element/a
tags:
  - Element
  - SVG
  - SVG Conteneur
translation_of: Web/SVG/Element/a
---
{{SVGRef}}

L'élément SVG **`<a>`** crée un hyperlien vers d'autres pages web, fichiers, emplacements dans la page en cours, adresses email, ou toute autre URL.

En SVG, l'élément `<a>` est un conteneur, ce qui veut dire que vous pouvez créer un lien autour du texte comme en HTML, mais que vous pouvez aussi créer un lien autour de n'importe quelle forme.

## Exemple

```css hidden
@namespace svgns url(http://www.w3.org/2000/svg);
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Un lien autour d'une forme -->
  <a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35"/>
  </a>

  <!-- Un lien autour d'un texte -->
  <a href="/docs/Web/SVG/Element/circle">
    <text x="50" y="90" text-anchor="middle">
      &lt;circle&gt;
    </text>
  </a>
</svg>
```

```css
/* Comme SVG ne fournit pas de style visuel par défaut pour les liens,
   il est en recommendé d'en ajouter manuellement */

@namespace svgns url(http://www.w3.org/2000/svg);

svgns|a {
  cursor: pointer;
}

svgns|a text {
  fill: blue; /* Même pour du texte, SVG utilise fill plutôt que color */
  text-decoration: underline;
}

svgns|a:hover, svgns|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample('Exemple', 100, 100)}}

> **Attention :** Étant donné que cet élément partage son nom de balise avec l'[élément HTML `<a>`](/fr/docs/Web/HTML/Element/a), la sélection de "`a`" avec CSS ou [`querySelector`](/fr/docs/Web/API/Document/querySelector) peut s'appliquer au mauvais type d'élément. La [règle `@namespace`](/fr/docs/Web/CSS/@namespace) permet de faire la distinction entre les deux.

## Attributs

### Attributs globaux

- [Attributs de base](/fr/docs/Web/SVG/Attribute#Attributs_de_base "SVG/Attribute#Core")
- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute#Attributs_de_traitement_conditionnel "SVG/Attribute#ConditionalProccessing")
- [Attributs d'événements graphiques](/fr/docs/Web/SVG/Attribute#Événement_graphiques "SVG/Attribute#GraphicalEvent")
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation "SVG/Attribute#Presentation")
- [Attributs Xlink](/fr/docs/Web/SVG/Attribute#Attributs_XLink "SVG/Attribute#XLink")
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Attributs spécifiques

- {{htmlattrxref("download", "a")}} {{experimental_inline}}
- {{SVGAttr("href")}}
- {{htmlattrxref("hreflang", "a")}}
- {{htmlattrxref("ping", "a")}} {{experimental_inline}}
- {{htmlattrxref("referrerpolicy", "a")}} {{experimental_inline}}
- {{htmlattrxref("rel", "a")}} {{experimental_inline}}
- {{SVGAttr("target")}}
- {{htmlattrxref("type", "a")}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline("SVG2")}}

## Contexte d'utilisation

{{svginfo}}

## Interface DOM

Cet élément implémente l'interface [`SVGAElement`](/fr/docs/DOM/SVGAElement "DOM/SVGAElement").

## Spécifications

| Spécification                                                                                                                            | Statut                               | Commentaire                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------- |
| {{SpecName('Referrer Policy', '#referrer-policy-delivery-referrer-attribute', 'referrer attribute')}} | {{Spec2('Referrer Policy')}} | Ajoute l'attribut `referrerpolicy`.                                               |
| {{SpecName("SVG2", "linking.html#Links", "&lt;a&gt;")}}                                                                 | {{Spec2("SVG2")}}             | Remplace l'attribut {{SVGAttr("xlink:href")}} par {{SVGAttr("href")}} |
| {{SpecName("SVG1.1", "linking.html#Links", "&lt;a&gt;")}}                                                             | {{Spec2("SVG1.1")}}             | Définition initiale                                                               |

## Compatibilité des navigateurs

{{Compat("svg.elements.a")}}
