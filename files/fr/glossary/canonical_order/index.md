---
title: Ordre canonique
slug: Glossary/Canonical_order
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

En CSS, la locution «&nbsp;**ordre canonique**&nbsp;» est utilisée pour désigner l'ordre dans lequel des valeurs séparées doivent être définies (ou {{Glossary("parse", "analysées")}}) ou doivent être {{Glossary("serialization", "sérialisées")}} dans le cadre d'une valeur de propriété CSS. Il est défini par la {{Glossary ("Syntax", "syntaxe")}} formelle de la propriété et se réfère normalement à l'ordre dans lequel les valeurs longues doivent être définies dans le cadre d'une seule valeur raccourcie.

Par exemple, {{CSSxRef("background")}}, les valeurs de propriété raccourcie sont constituées de plusieurs propriétés `background-*` . L'ordre canonique de ces valeurs longues est défini comme suit&nbsp;:

1. {{CSSxRef("background-image")}}
2. {{CSSxRef("background-position")}}
3. {{CSSxRef("background-size")}}
4. {{CSSxRef("background-repeat")}}
5. {{CSSxRef("background-attachment")}}
6. {{CSSxRef("background-origin")}}
7. {{CSSxRef("background-clip")}}
8. {{CSSxRef("background-color")}}

De plus, sa syntaxe exige que, si une valeur pour {{CSSxRef("background-size")}} est donnée, elle doit être spécifiée après la valeur de {{CSSxRef("background-position")}}, séparée par une barre oblique. D'autres valeurs peuvent apparaître dans n'importe quel ordre.

## Voir aussi

- La [description de la syntaxe formelle utilisée pour les valeurs CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [Que signifie «&nbsp;ordre canonique&nbsp;» en ce qui concerne les propriétés CSS&nbsp;? <sup>(angl.)</sup>](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) sur Stack Overflow qui fournit également d'autres discussions utiles.
