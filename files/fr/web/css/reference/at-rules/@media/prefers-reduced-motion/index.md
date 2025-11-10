---
title: prefers-reduced-motion
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
original_slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

> [!WARNING]
> Un exemple intégré en bas de cette page comporte un mouvement de mise à l'echelle qui peut être problématique pour certain·e·s lecteur·ice·s. Les personnes souffrant de troubles vestibulaires liés au mouvement peuvent activer la fonctionnalité de réduction des animations sur leur appareil avant de visualiser l'animation.

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`prefers-reduced-motion`** permet de détecter si un·e utilisateur·ice a activé un réglage sur son appareil pour minimiser la quantité de mouvements non essentiels. Ce réglage indique au navigateur que l'utilisateur·ice préfère une interface qui supprime, réduit ou remplace les animations basées sur le mouvement.

De telles animations peuvent provoquer un inconfort chez les personnes souffrant de [troubles vestibulaires liés au mouvement <sup>(angl.)</sup>](https://www.a11yproject.com/posts/understanding-vestibular-disorders/). Les animations comme la mise à l'echelle ou le déplacement de grands objets peuvent déclencher ces troubles.

## Syntaxe

- `no-preference`
  - : Indique qu'aucune préférence n'a été exprimée sur l'appareil. Cette valeur-clé est évaluée à faux.
- `reduce`
  - : Indique que l'utilisateur·ice a activé le réglage de réduction des animations sur son appareil. La valeur-clé `reduce` est évaluée à vrai&nbsp;; ainsi, `@media (prefers-reduced-motion)` est équivalent à `@media (prefers-reduced-motion: reduce)`.

## Préférences utilisateurs

Pour Firefox, la demande `reduce` est prise en compte si&nbsp;:

- Sous GTK/GNOME&nbsp;: Paramètres > Accessibilité > Vue > Réduction des animations activée.
  - Dans les anciennes versions de GNOME&nbsp;: Outils GNOME > onglet Général (ou Apparence selon la version) > Animations désactivées.
  - Ou bien, ajouter `gtk-enable-animations = false` dans le bloc `[Settings]` du [fichier de configuration GTK 3 <sup>(angl.)</sup>](https://wiki.archlinux.org/title/GTK#Configuration).
- Sous Plasma/KDE&nbsp;: Paramètres système > Comportement de l'espace de travail > Comportement général > «&nbsp;Vitesse d'animation&nbsp;» réglée complètement à droite sur «&nbsp;Instantané&nbsp;».
- Sous Windows 10&nbsp;: Paramètres > Options d'ergonomie > Affichage > Afficher les animations dans Windows.
- Sous Windows 11&nbsp;: Paramètres > Accessibilité > Effets visuels > Effets d'animation.
- Sous macOS&nbsp;: Préférences Système > Accessibilité > Affichage > Réduire les animations.
- Sous iOS&nbsp;: Réglages > Accessibilité > Mouvement.
- Sous Android 9+&nbsp;: Paramètres > Accessibilité > Supprimer les animations.
- Dans Firefox `about:config`&nbsp;: Ajouter une préférence numérique nommée `ui.prefersReducedMotion` et définir sa valeur à `0` pour les animations complètes ou à `1` pour indiquer une préférence pour la réduction des animations. Les modifications prennent effet immédiatement.

## Exemples

Cet exemple utilise une animation de mise à l'echelle pour illustrer `prefers-reduced-motion`. Si vous activez la réduction des animations dans les préférences d'accessibilité de votre appareil, la requête média `prefers-reduced-motion` détectera votre préférence et le CSS contenu dans la règle de réduction des animations, ayant la même [spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity) mais apparaissant plus tard dans l'[ordre des sources CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#ordre_des_sources), prendra le dessus. Ainsi, l'[animation](/fr/docs/Web/CSS/Guides/Animations/Using) de la boîte sera atténuée pour utiliser l'animation `dissolve`, plus douce et non déclenchante pour les troubles vestibulaires.

### Atténuer l'animation de mise à l'echelle

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  animation: pulse 1s linear infinite both;
  background-color: purple;
}

/* Atténuer l'animation pour éviter les déclencheurs vestibulaires. */
@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}
```

```css hidden
.animation {
  color: white;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes dissolve {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
```

#### Résultat

{{EmbedLiveSample("atténuer_lanimation_de_mise_à_lechelle")}}

Vous pouvez activer la réduction des animations sur [votre appareil](#preferences_utilisateurs) pour observer le changement d'animation. Cet exemple utilise la couleur de fond et la ligne au-dessus du texte pour mettre en évidence le passage d'une animation à l'autre selon que la préférence est activée ou non.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} en-tête HTTP [indications de l'agent utilisateur](/fr/docs/Web/HTTP/Guides/Client_hints#indications_de_lagent_utilisateur)
- [Introduction à la requête média reduced motion <sup>(angl.)</sup>](https://css-tricks.com/introduction-reduced-motion-media-query/) sur CSS-Tricks (2019)
- [Conception réactive pour le mouvement <sup>(angl.)</sup>](https://webkit.org/blog/7551/responsive-design-for-motion/) sur le blog WebKit (2017)
