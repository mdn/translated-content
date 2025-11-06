---
title: "Accessibilité : Quelle personnalisation aide à naviguer plus en sécurité"
short-title: Personnalisation pour une navigation sécurisée
slug: Web/Accessibility/Guides/Browsing_safely
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Cet article explique comment rendre le contenu web accessible aux personnes souffrant de troubles vestibulaires, ainsi qu'à celles qui les accompagnent, en tirant parti des options de personnalisation et d'accessibilité intégrées aux systèmes d'exploitation. Utiliser ces réglages permet d'éviter l'exposition à des contenus pouvant provoquer des crises ou d'autres réactions physiques.

## Paramètres de personnalisation et d'accessibilité

Extrait de l'article «&nbsp;**[Comprendre le critère de succès 2.3.1&nbsp;: Trois clignotements ou moins que le seuil <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html)**&nbsp;»

> Les clignotements peuvent être causés par l'écran, l'ordinateur qui génère l'image ou le contenu affiché. L'auteur·ice n'a pas de contrôle sur les deux premiers. Ils peuvent être gérés par la conception et la vitesse de l'écran et de l'ordinateur.

### Le matériel et les systèmes d'exploitation de nombreux ordinateurs offrent un contrôle qui n'est pas accordé aux développeur·euse·s

L'utilisateur·ice peut se protéger en apprenant à utiliser son système d'exploitation, ses paramètres de personnalisation et d'accessibilité. Dans le secteur public, il est conseillé de prévoir au moins un poste de travail adapté et de bien connaître ces réglages pour les personnes ayant des sensibilités particulières. Comprendre ces paramètres peut aussi permettre de réaliser des économies&nbsp;: un même poste peut servir à la fois à une personne malvoyante (besoin de contraste élevé) et à une personne photosensible, simplement en ajustant les options de personnalisation et d'accessibilité.

### Utilisez des navigateurs modernes et apprenez les réglages d'accessibilité

Les navigateurs modernes prennent en charge la fonctionnalité CSS [`prefers-reduced-motion`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion). Ils peuvent détecter si l'utilisateur·ice a demandé une expérience avec moins d'animations, via une interface d'accessibilité comme illustré ci-dessous.

![Capture d'écran montrant comment désactiver les animations sur Android.](android-remove-animations.png)

Les événements de transition CSS sont pris en charge, par exemple&nbsp;:

- `transitionrun`
- `transitionstart`
- `transitionend`
- `transitioncancel`

### Safari 10.1 and above (Desktop)

Do not enable Auto-Play (does not work for GIFs)

#### iOS Safari 10.3 et versions ultérieures (Mobile et Tablette)

Sélectionnez l'option «&nbsp;Réduire les animations&nbsp;» dans les réglages d'accessibilité d'iOS (source image&nbsp;: developers.google.com, article de Thomas Steiner «&nbsp;Move Ya! Or maybe, don't, if the user prefers-reduced-motion!&nbsp;»). Cela ne fonctionne pas sur les GIF animés&nbsp;: l'animation est intégrée au fichier et n'est pas affectée par ce réglage.

![Capture d'écran montrant comment réduire les animations sur macOS](macos-reduce-motion.png)

#### Utiliser le mode lecture des navigateurs

- Activer les bloqueurs de contenu&nbsp;: supprime les publicités, réduit ou élimine les distractions
- Activer la synthèse vocale
- Dans certains navigateurs, choisir la police d'affichage
- Activer le zoom de page

#### Désactiver les GIF animés dans le navigateur

Les navigateurs offrent de nombreuses possibilités&nbsp;: il suffit de savoir où chercher. Par exemple, sous Firefox, il est possible de bloquer toutes les images animées en modifiant la valeur de **image.animation_mode** de «&nbsp;normal&nbsp;» à «&nbsp;none&nbsp;». Pour réactiver les animations, il faut remettre la valeur à «&nbsp;normal&nbsp; ».

![Capture d'écran de l'option image.animation.mode sélectionnée dans Firefox](image_animation_mode.png)

#### Utiliser des extensions de navigateur

- [Gif Blocker](https://chromewebstore.google.com/detail/gif-blocker/ahkidgegbmbnggcnmejhobepkaphkfhl?hl=fr) (Chrome)&nbsp;: extension pour bloquer les GIF animés.
- [Gif Scrubber](https://chromewebstore.google.com/detail/gif-scrubber/gbdacbnhlfdlllckelpdkgeklfjfgcmp?hl=fr)&nbsp;: extension Chrome permettant de contrôler les GIF comme un lecteur vidéo. Voir aussi le dépôt GitHub&nbsp;: **<https://github.com/0ui/gif-scrubber> <sup>(angl.)</sup>**
- [Beeline Reader <sup>(angl.)</sup>](https://www.beelinereader.com/)&nbsp;: extension permettant d'activer le mode niveaux de gris, la police Dyslexie, etc.

![Capture d'écran montrant les modes de Beeline Reader ajustables dans le navigateur](beelinereader.png)

### Profiter des options d'accessibilité du système d'exploitation

La plupart des systèmes d'exploitation, comme Windows 10 et supérieurs, proposent des options d'accessibilité très puissantes. Elles sont généralement faciles à trouver en tapant ou en disant «&nbsp;Accessibilité&nbsp;» dans la recherche du système.

#### Désactiver les animations dans le système d'exploitation

Sous Windows 10 et supérieurs, il est possible de désactiver les animations. Cela ne fonctionne pas sur les GIF animés&nbsp;: l'animation est intégrée au fichier et n'est pas affectée par ce réglage.

![Capture d'écran montrant comment désactiver les animations sous Windows 10](turnoffanimationsinwindows.png)

#### Niveaux de gris

Les personnes ayant subi un traumatisme crânien (<abbr>TCC</abbr>) peuvent être très sensibles aux couleurs&nbsp;: cela peut demander un tel «&nbsp;effort cognitif&nbsp;» qu'il ne leur reste plus d'énergie pour d'autres tâches. Activer l'affichage en niveaux de gris réduit la charge mentale et peut aussi aider d'autres types de handicaps. Une discussion intéressante sur les avantages de ce mode est disponible ici&nbsp;: «&nbsp;[À quoi sert l'option niveaux de gris dans les réglages d'accessibilité&nbsp;? <sup>(angl.)</sup>](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)&nbsp;». À noter&nbsp;: une personne épileptique photosensible y explique l'utiliser en cas de malaise.

La plupart des systèmes d'exploitation permettent d'activer ce réglage sur le poste de travail. Exemple ci-dessous&nbsp;: sous Windows 10 et supérieurs, les filtres de couleur sont accessibles dans les paramètres d'accessibilité, et le mode niveaux de gris s'active en basculant le bouton correspondant sur «&nbsp;activé&nbsp;».

![Capture d'écran des paramètres d'accessibilité de Windows 10 pour le mode niveaux de gris](colorfiltersgrayscaleinwindows.png)

## Voir aussi

- [Accessibilité](/fr/docs/Web/Accessibility)
- [Parcours d'apprentissage accessibilité](/fr/docs/Learn_web_development/Core/Accessibility)
- [Accessibilité web pour les crises et réactions physiques](/fr/docs/Web/Accessibility/Guides/Seizure_disorders)
- [Simulation de la vision des couleurs <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/simulation/index.html)
- Discussion&nbsp;: [«&nbsp;À quoi sert l'option niveaux de gris dans les réglages d'accessibilité&nbsp;?&nbsp;» <sup>(angl.)</sup>](https://ask.metafilter.com/312049/What-is-the-grayscale-setting-for-in-accessibility-options)

### Remerciements

Un grand merci à Eric Eggert de [Knowbility](https://knowbility.org/) pour ses échanges et son aide précieuse sur ce sujet.
