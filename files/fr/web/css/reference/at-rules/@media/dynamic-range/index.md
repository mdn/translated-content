---
title: dynamic-range
slug: Web/CSS/Reference/At-rules/@media/dynamic-range
original_slug: Web/CSS/@media/dynamic-range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`dynamic-range`** permet de tester la combinaison de la luminosité, du taux de contraste et de la profondeur de couleur pris en charge par l'{{glossary("user agent", "agent utilisateur")}} et le périphérique de sortie.

> [!NOTE]
> Certains appareils disposent de capacités à grande plage dynamique qui ne sont pas toujours «&nbsp;actives&nbsp;» et doivent être activées (parfois de façon programmatique, parfois par l'utilisateur·ice, parfois selon le contenu). Cette caractéristique média ne teste pas si la capacité de plage dynamique est active&nbsp;; elle teste uniquement si l'appareil est capable d'afficher des visuels à grande plage dynamique.

## Syntaxe

La caractéristique `dynamic-range` se définit à l'aide d'une valeur-mot-clé choisie parmi la liste suivante&nbsp;:

- `standard`
  - : Cette valeur correspond à tout appareil visuel et exclut les appareils dépourvus de capacités visuelles. Un agent utilisateur ou un périphérique de sortie qui correspond à `high` correspondra aussi à la valeur `standard`.

- `high`
  - : Cette valeur correspond aux agents utilisateur et aux périphériques de sortie qui prennent en charge une forte luminosité de crête, un taux de contraste élevé et une profondeur de couleur supérieure à 24 bits ou 8 bits par composante de couleur RGB. **Luminosité de crête** désigne la luminosité maximale qu'un appareil émetteur de lumière, comme un écran LCD, peut produire. Pour un appareil réfléchissant la lumière, comme du papier ou de l'encre électronique, la luminosité de crête correspond au point qui absorbe le moins de lumière. **Taux de contraste** désigne le rapport entre la luminance de la couleur la plus claire et celle de la couleur la plus sombre que le système peut produire. Actuellement, il n'existe pas de méthode précise pour mesurer la luminosité de crête et le taux de contraste, et la détermination de ce qui est considéré comme élevé dépend de l'agent utilisateur.

## Exemples

```css
@media (dynamic-range: standard) {
  p {
    color: red;
  }
}

@media (dynamic-range: high) {
  p {
    color: green;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
