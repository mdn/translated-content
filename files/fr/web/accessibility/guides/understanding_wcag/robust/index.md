---
title: Robuste
slug: Web/Accessibility/Guides/Understanding_WCAG/Robust
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Cet article fournit des conseils pratiques pour rédiger votre contenu Web afin qu'il respecte les critères de succès définis dans le principe **Robuste** des Règles pour l'accessibilité des contenus Web (WCAG) 2.0 et 2.1. Le principe «&nbsp;Robuste&nbsp;» stipule que le contenu doit être suffisamment robuste pour être interprété de manière fiable par une grande variété d'agent·e·s utilisateur·ice·s, y compris les technologies d'assistance. Cela peut généralement être atteint en respectant les standards du Web et en [testant rigoureusement](/fr/docs/Learn_web_development/Extensions/Testing).

> [!NOTE]
> Pour lire les définitions W3C du principe Robuste, de ses directives et critères de succès, voir [Principe 4&nbsp;: Robuste — Le contenu doit être suffisamment robuste pour être interprété de manière fiable par une grande variété d'agent·e·s utilisateur·ice·s, y compris les technologies d'assistance. <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#robust)

## Règle 4.1 — Compatible : Maximiser la compatibilité avec les agent·e·s utilisateur·ice·s actuels et futurs, y compris les technologies d'assistance

Cette directive vise à rendre le contenu aussi compatible que possible, non seulement avec les agent·e·s utilisateur·ice·s actuels (par exemple, les navigateurs), mais aussi avec ceux à venir.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Critère de succès</th>
      <th scope="col">Comment respecter le critère</th>
      <th scope="col">Ressource pratique</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>4.1.1 Analyse syntaxique (A)</td>
      <td>
        <p>
          Le contenu doit être bien formé pour pouvoir être analysé correctement par les navigateurs et autres agent·e·s utilisateur·ice·s comme les lecteurs d'écran.
        </p>
        <p>
          Pour satisfaire à ce critère, assurez-vous que votre HTML est aussi valide que possible. Utilisez le <a href="https://validator.w3.org/">validateur W3C <sup>(angl.)</sup></a> pour valider votre balisage.
        </p>
      </td>
      <td>
        Voir <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML">Déboguer HTML</a> pour un guide pratique.
      </td>
    </tr>
    <tr>
      <td>4.1.2 Nom, Rôle, Valeur (A)</td>
      <td>
        <p>
          Le nom et le rôle des composants d'interface utilisateur (par exemple, champs de formulaire, boutons, liens, etc.) doivent être déterminables par programme.
        </p>
        <p>
          Si vous utilisez correctement les éléments sémantiques pour leur usage prévu, ce critère sera satisfait automatiquement. Si vous créez des composants personnalisés avec du script, vous devrez utiliser les rôles WAI-ARIA et d'autres attributs pour que vos contrôles soient interprétés et utilisables comme prévu, par exemple non seulement par les utilisateur·ice·s voyant·e·s à la souris, mais aussi par les lecteur·ice·s d'écran, les utilisateur·ice·s au clavier, etc.
        </p>
      </td>
      <td>
        Voir <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML">HTML&nbsp;: une bonne base pour l'accessibilité</a> et <a href="/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics">Bases de WAI-ARIA</a>.
      </td>
    </tr>
    <tr>
      <td>4.1.3 Messages d'état (AA)</td>
      <td>
        <p>
          Les utilisateur·ice·s de technologies d'assistance sont informé·e·s des nouveaux messages d'état ajoutés à la page.
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html">Comprendre les messages d'état <sup>(angl.)</sup></a>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG de la [Directive 4.1&nbsp;: Compatible&nbsp;: Maximiser la compatibilité avec les agent·e·s utilisateur·ice·s actuels et futurs, y compris les technologies d'assistance. <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#compatible)

## Voir aussi

- [WCAG](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [Perceptible](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Utilisable](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. [Compréhensible](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. Robuste
