---
title: <polyline>
slug: Web/SVG/Element/polyline
---

{{SVGRef}}

L'élément SVG **`<polyline>`** est une forme SVG basique qui crée des lignes entre plusieurs points. Un élément `polyline` est généralement utilisé pour créer des tracés ouverts car le dernier point n'est pas nécessairement connecté avec le premier. Lorsqu'on désire réaliser des formes fermées, on privilégiera l'élément {{SVGElement("polygon")}}.

## Contexte d'utilisation

{{svginfo}}

## Attributs

### Attributs universels

- [Attributs de traitement conditionnel](/fr/docs/Web/SVG/Attribute#Attributs_de_traitement_conditionnel)
- [Attributs principaux](/fr/docs/Web/SVG/Attribute#Attributs_de_base)
- [Attributs relatifs aux évènements graphiques](/fr/docs/Web/SVG/Attribute#Attributs_d%27événement_graphique)
- [Attributs de présentation](/fr/docs/Web/SVG/Attribute#Attributs_de_présentation)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### Attributs spécifiques

- {{SVGAttr("points")}}

## Interface DOM

Cet élément implémente l'interface {{domxref("SVGPolylineElement")}}.

## Exemples

### Utilisation basique

#### SVG

```html
<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <polyline fill="none" stroke="black" points="20,100 40,60 70,80 100,20" />
</svg>
```

#### Résultat

{{EmbedLiveSample("Utilisation_basique", 120, 120)}}

### Escaliers

#### HTML

```html
<div class="contain-demo">
  <svg width="150" height="200">
    <desc>Première polyligne orange avec remplissage blanc.</desc>
    <polyline
      points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
      fill="white"
      stroke="#D07735"
      stroke-width="6" />
  </svg>
  <svg width="150" height="200">
    <desc>Seconde polyligne orange avec remplissage jaune.</desc>
    <polyline
      points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
      fill="#F9F38C"
      stroke="#D07735"
      stroke-width="6" />
  </svg>
</div>
```

#### CSS

```css
.contain-demo {
  margin: 25px auto;
  text-align: center;
}
```

#### Résultat

{{EmbedLiveSample("Escaliers", 400, 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{SVGElement("line")}}
- {{SVGElement("polygon")}}
