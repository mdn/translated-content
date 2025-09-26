---
title: Valeur calculée
slug: Web/CSS/CSS_cascade/Value_processing
original_slug: Web/CSS/computed_value
---

{{CSSRef}}

La **valeur calculée** d'une propriété CSS est calculée à partir de [la valeur définie](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa) :

1. En gérant les valeurs spéciales {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("unset")}} et {{cssxref("revert")}}.
2. En effectuant les calculs décrits dans la section « Valeur calculée » de chaque résumé de propriété.

Les calculs utilisés pour obtenir la **valeur calculée** correspondent généralement à la conversion des valeurs relatives (exprimées dans des unités relatives comme `em` ou en pourcentages) en valeur absolue. Ainsi, si un élément possède les valeurs spécifiées suivantes `font-size: 16px` et `padding-top: 2em`. La valeur calculée de la propriété `padding-top` sera `32px` (on double la taille de la police).

Cependant, pour certaines propriétés (celles où les pourcentages sont relatifs à quelque chose lié à la disposition comme `width`, `margin-right`, `text-indent`, et `top`), les valeurs spécifiées exprimées en pourcentages deviennent des valeurs calculées exprimées en pourcentages. De plus, les nombres sans unité utilisés pour la propriété `line-height` sont également utilisés comme valeurs calculées. Ces valeurs relatives sont résolues en valeurs absolues lorsqu'on détermine [les valeurs utilisées](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2).

Le principal intérêt de la valeur calculée (en dehors de la gestion du passage de [la valeur spécifiée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa) à [la valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2)) est [l'héritage](/fr/docs/Web/CSS/CSS_cascade/Inheritance), notamment grâce au mot-clé {{cssxref("inherit")}}.

> [!NOTE]
> La méthode du DOM {{domxref("Window.getComputedStyle", "getComputedStyle()")}} renvoie [la valeur résolue](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4) qui correspond à la valeur calculée ou à [la valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2) selon la propriété.

## Spécifications

{{Specifications}}

## Voir aussi

- [La référence CSS](/fr/docs/Web/CSS/Reference)
- [La notion de valeur initiale](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_f91302baa0061849ce1a7eea54ba57f650b9256fcf644b7a35a0645d353b08fc)
- [La notion de valeur définie](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4e3ad4bb8e93bd9e2a381021d1b939f81717e13df739659207d88907070d77aa)
- [La notion de valeur calculée](/fr/docs/Web/CSS/CSS_cascade/Value_processing)
- [La notion de valeur utilisée](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2)
- [La notion de valeur résolue](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)
- [La notion de valeur réelle](/fr/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
- {{cssxref("inherit")}}
- {{cssxref("initial")}}
- {{cssxref("unset")}}
- {{cssxref("revert")}}
- {{domxref("window.getComputedStyle")}}
