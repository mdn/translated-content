---
title: <animate>
slug: Web/SVG/Reference/Element/animate
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

L'élément [SVG](/fr/docs/Web/SVG) **`<animate>`** fournit un moyen d'animer un attribut d'un élément au fil du temps.

## Contexte d'utilisation

{{SVGInfo}}

## Attributs

Cet élément n'inclut que les attributs universels.

## Interface DOM

Cet élément implémente l'interface {{DOMxRef("SVGAnimateElement")}}.

## Exemples

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Exemples", 150, "100%")}}

## Problèmes d'accessibilité

Les animations clignotantes et scintillantes peuvent poser problème aux personnes ayant des préoccupations cognitives telles que le trouble déficitaire de l'attention avec hyperactivité (<abbr>TDAH</abbr>). De plus, certains types de mouvements peuvent déclencher des troubles vestibulaires, l'épilepsie, la migraine et la sensibilité scotopique.

Considérez la possibilité de fournir un mécanisme pour mettre en pause ou désactiver l'animation, ainsi que d'utiliser la [Requête Média pour le Mouvement Réduit](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) ou l'équivalent [d'indice client de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} afin de créer une expérience complémentaire pour les utilisateur·ice·s ayant exprimé une préférence pour l'absence d'animations.

- [Concevoir des animations web plus sûres pour la sensibilité au mouvement · Un article A List Apart <sup>(angl.)</sup>](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Une introduction à la requête média pour le mouvement réduit | CSS-Tricks <sup>(angl.)</sup>](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Design réactif pour le mouvement | WebKit <sup>(angl.)</sup>](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [Comprendre les WCAG sur le MDN, explications de la règle 2.2](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#règle_2.2_—_temps_suffisant_donner_aux_utilisateurs_et_utilisatrices_assez_de_temps_pour_lire_et_utiliser_le_contenu)
- [Comprendre le critère de succès 2.2.2 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
