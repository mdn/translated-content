---
title: Ordre canonique
slug: Glossary/Canonical_order
tags:
  - CSS
  - Encodage
  - Glossaire
  - ordre canonique
translation_of: Glossary/Canonical_order
original_slug: Glossaire/Ordre_canonique
---
En CSS, la locution "ordre canonique" est utilisée pour désigner l'ordre dans lequel des valeurs séparées doivent être spécifiées (ou {{Glossary("parse","analysées")}}) ou doivent être {{Glossary("serialization","sérialisées")}} dans le cadre d'une valeur de propriété CSS. Il est défini par la {{Glossary ("Syntax","syntaxe")}} formelle de la propriété et se réfère normalement à l'ordre dans lequel les valeurs longues doivent être spécifiées dans le cadre d'une seule valeur raccourcie.

Par exemple, {{cssxref("background")}}, les valeurs de propriété raccourcie sont constituées de plusieurs propriétés `background-*` . L'ordre canonique de ces valeurs longues est défini comme suit :

1.  {{cssxref("background-image")}}
2.  {{cssxref("background-position")}}
3.  {{cssxref("background-size")}}
4.  {{cssxref("background-repeat")}}
5.  {{cssxref("background-attachment")}}
6.  {{cssxref("background-origin")}}
7.  {{cssxref("background-clip")}}
8.  {{cssxref("background-color")}}

De plus, sa syntaxe exige que, si une valeur pour {{cssxref("background-size")}} est donnée, elle doit être spécifiée après la valeur de {{cssxref("background-position")}}, séparée par une barre oblique. D'autres valeurs peuvent apparaître dans n'importe quel ordre.

## En apprendre plus

- [Que signifie “ordre canonique” en ce qui concerne les propriétés CSS ?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) (en) sur Stack Overflow qui fournit également d'autres discussions utiles.
- La [description de la syntaxe formelle utilisée pour les valeurs CSS](/fr/docs/Web/CSS/Syntaxe_de_d%C3%A9finition_des_valeurs) sur MDN
