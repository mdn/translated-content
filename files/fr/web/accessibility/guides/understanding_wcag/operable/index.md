---
title: Utilisable
slug: Web/Accessibility/Guides/Understanding_WCAG/Operable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Cet article fournit des conseils pratiques pour rédiger votre contenu web afin qu'il respecte les critères de succès du principe **Utilisable** des Directives pour l'accessibilité du contenu Web (WCAG) 2.0 et 2.1. Le principe Utilisable stipule que les composants d'interface utilisateur et la navigation doivent pouvoir être utilisés.

> [!NOTE]
> Pour lire les définitions du W3C concernant le principe Utilisable, ses lignes directrices et ses critères de succès, consultez [Principe 2&nbsp;: Utilisable — Les composants d'interface utilisateur et la navigation doivent pouvoir être utilisés. <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#operable)

## Règle 2.1 — Accessibilité au clavier : rendre toutes les fonctionnalités accessibles au clavier

Cette règle concerne la nécessité de rendre les fonctionnalités principales d'un site accessibles au clavier, en plus d'autres moyens (par exemple, la souris), afin que les utilisateur·ice·s qui dépendent du clavier puissent y accéder.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Critère de succès</th>
      <th scope="col">Comment satisfaire le critère</th>
      <th scope="col">Ressource pratique</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1.1 Clavier (A)</td>
      <td>
        Toutes les fonctionnalités doivent être accessibles au clavier, sauf si cela est impossible (par exemple, dessin à main levée). Il faut utiliser les contrôles natifs quand c'est possible (par exemple, navigation par tabulation dans les formulaires), et ne créer des fonctionnalités personnalisées que si nécessaire.
      </td>
      <td>
        Voir
        <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_commandes_ui_sémantiques_si_possible"
          >Utiliser des commandes UI sémantiques si possible</a
        >
        et
        <a
          href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#rendre_laccessibilité_clavier_personnalisée"
          >Rendre l'accessibilité clavier personnalisée</a
        >
      </td>
    </tr>
    <tr>
      <td>2.1.2 Pas de piège clavier (A)</td>
      <td>
        <p>
          Lorsqu'on entre dans une section fonctionnelle au clavier, il doit être possible d'en sortir à nouveau uniquement au clavier. Par exemple, si vous appuyez sur <kbd>Entrée</kbd> sur un bouton pour ouvrir une fenêtre d'options, vous devez pouvoir refermer cette fenêtre et revenir au contenu principal au clavier.
        </p>
        <p>
          Ceci est très important pour éviter que les utilisateur·ice·s clavier ne restent bloqué·e·s dans certaines sections de vos applications.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.1.3 Clavier — toutes les fonctionnalités (AAA)</td>
      <td>
        C'est une étape supplémentaire par rapport au critère 2.1.1. Pour atteindre la conformité AAA, toutes les fonctionnalités doivent être accessibles au clavier — sans exception.
      </td>
      <td>
        Voir
        <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_commandes_ui_sémantiques_si_possible"
          >Utiliser des commandes UI sémantiques si possible</a
        >
        et
        <a
          href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#rendre_laccessibilité_clavier_personnalisée"
          >Rendre l'accessibilité clavier personnalisée</a
        >
      </td>
    </tr>
    <tr>
      <td>
        2.1.4 Raccourcis clavier à une touche (A)
      </td>
      <td>
        Si un raccourci clavier à une seule touche existe, alors au moins une des conditions suivantes doit être vraie&nbsp;: il peut être désactivé, reconfiguré, ou n'est actif que lorsque le composant d'interface concerné a le focus.
      </td>
      <td>
        <a
          href="https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html"
          >Comprendre les raccourcis clavier à une touche <sup>(angl.)</sup></a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG pour [Règle 2.1&nbsp;: Accessibilité au clavier&nbsp;: rendre toutes les fonctionnalités accessibles au clavier <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#keyboard-accessible).

## Règle 2.2 — Temps suffisant : donner aux utilisateurs et utilisatrices assez de temps pour lire et utiliser le contenu

Cette règle concerne les situations où une fonctionnalité a une limite de temps. Par exemple, il faut parfois terminer un achat dans un délai imparti pour des raisons de sécurité.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Critère de succès</th>
      <th scope="col">Comment satisfaire le critère</th>
      <th scope="col">Ressource pratique</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.2.1 Limite de temps ajustable (A)</td>
      <td>
        <p>
          Pour une fonctionnalité avec une limite de temps (par exemple, finaliser une réservation d'hôtel ou d'avion dans un temps imparti), l'utilisateur·ice doit disposer de contrôles pour ajuster, prolonger ou désactiver la limite de temps.
        </p>
        <p>
          Exceptions&nbsp;: activités avec une limite de temps supérieure à 20 heures, événements en temps réel (par exemple, jeux multijoueurs en ligne), ou toute activité nécessitant une limite de temps qui serait rendue invalide si elle était supprimée.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.2 Pause, arrêt, masquage (A)</td>
      <td>
        <p>
          Pour le contenu en mouvement ou clignotant qui démarre automatiquement, dure plus de 5 secondes et s'affiche en même temps que d'autres contenus, il faut fournir des contrôles pour le mettre en pause, l'arrêter ou le masquer. Cela ne s'applique pas au contenu en mouvement ou clignotant essentiel à l'expérience. Exemples&nbsp;: texte défilant, vidéos.
        </p>
        <p>
          Pour les informations qui se mettent à jour automatiquement et s'affichent en même temps que d'autres contenus, il faut fournir des contrôles pour les mettre en pause, les arrêter, les masquer ou contrôler la fréquence des mises à jour. Cela ne s'applique pas au contenu mis à jour automatiquement qui est essentiel à l'expérience. Exemples&nbsp;: carrousels ou annonces tournantes.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.3 Pas de limite de temps (AAA)</td>
      <td>
        Ce critère complète le 2.2.1&nbsp;: pour atteindre la conformité AAA, le contenu ne doit pas avoir de limite de temps.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.4 Suppression des interruptions (AAA)</td>
      <td>
        Toute interruption comme des alertes ou des publicités interstitielles doit pouvoir être supprimée ou reportée, sauf s'il s'agit d'une alerte d'urgence.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.5 Ré-authentification (AAA)</td>
      <td>
        Si une session d'authentification expire lors de l'utilisation d'une application web, l'utilisateur·ice peut se ré-authentifier et poursuivre sans perdre de données.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.2.6 Expiration (AAA)</td>
      <td>
        <p>
          S'il y a une expiration (due à l'inactivité), avertir les utilisateur·ice·s au début du processus pour qu'ils·elles ne soient pas surpris·es par l'existence d'une expiration (ou n'autoriser l'expiration qu'après 20 heures d'inactivité).
        </p>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html"
          >Comprendre les expirations <sup>(angl.)</sup></a>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG pour [Règle 2.2&nbsp;: Temps suffisant&nbsp;: donner aux utilisateur·ice·s assez de temps pour lire et utiliser le contenu <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#enough-time).

## Règle 2.3 — Crises et réactions physiques : ne concevez pas de contenu susceptible de provoquer des crises ou des réactions physiques

Cela concerne le contenu qui, s'il n'est pas modifié, pourrait provoquer des crises chez des utilisateur·ice·s souffrant de pathologies comme l'épilepsie, OU des réactions physiques (comme des vertiges) chez des utilisateur·ice·s ayant des troubles vestibulaires.

<table>
  <thead>
    <tr>
      <th scope="col">Critère de succès</th>
      <th scope="col">Comment satisfaire le critère</th>
      <th scope="col">Ressource pratique</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.3.1 Trois flashs, ou en dessous du seuil (A)</td>
      <td>Le contenu ne comporte aucun élément qui clignote plus de trois fois par seconde, ou le contenu clignotant reste en dessous des <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-general-flash-and-red-flash-thresholds">seuils de flash et de flash rouge <sup>(angl.)</sup></a> acceptables.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.2 Trois flashs (AAA)</td>
      <td>Le contenu ne comporte aucun élément qui clignote plus de trois fois par seconde.</td>
      <td></td>
    </tr>
    <tr>
      <td>2.3.3 Animations déclenchées par des interactions (AAA)</td>
      <td>Permettre aux utilisateur·ice·s de désactiver les animations déclenchées par des interactions (sauf si l'animation est essentielle).</td>
      <td><a href="https://w3c.github.io/wcag/guidelines/22/#animation-from-interactions">Comprendre les animations déclenchées par des interactions <sup>(angl.)</sup></a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG pour [Règle 2.3&nbsp;: Crises et réactions physiques&nbsp;: ne concevez pas de contenu susceptible de provoquer des crises ou des réactions physiques <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#seizures-and-physical-reactions)

## Règle 2.4 — Navigation : fournir des moyens d'aider les utilisateurs et utilisatrices à naviguer, trouver du contenu et savoir leur position

Les critères de succès de cette règle concernent les moyens permettant aux utilisateur·ice·s de s'orienter, de trouver le contenu et les fonctionnalités recherchés sur la page courante ou sur d'autres pages du site.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Critère de succès</th>
      <th scope="col">Comment satisfaire le critère</th>
      <th scope="col">Ressource pratique</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.4.1 Contourner les blocs (A)</td>
      <td>
        <p>
          Un mécanisme doit permettre à l'utilisateur·ice d'accéder directement au contenu principal ou à la fonctionnalité principale de la page, en passant les éléments répétés (comme le logo de l'entreprise ou la navigation). Cela se fait souvent via des «&nbsp;liens d'accès rapide&nbsp;» — des liens placés en haut du code source de la page, pointant vers le contenu principal et masqués avec CSS.
        </p>
        <p>
          Si une structure correcte de titres et de conteneurs sémantiques est fournie pour la navigation (par exemple {{htmlelement("section")}}, {{htmlelement("aside")}}, etc.), un «&nbsp;lien d'accès rapide&nbsp;» supplémentaire n'est pas nécessaire.
        </p>
      </td>
      <td><em>Section à ajouter sur les «&nbsp;liens d'accès rapide&nbsp;».</em></td>
    </tr>
    <tr>
      <td>2.4.2 Inclure un titre de page (A)</td>
      <td>
        Chaque page web doit inclure un élément de titre {{htmlelement("title")}} informatif, dont le contenu décrit le contenu ou l'objectif de la page.
      </td>
      <td>
        Voir
        <a
          href="/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#ajouter_un_titre"
          >Ajouter un titre</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.3 Ordre logique de sélection (A)</td>
      <td>
        L'<em>ordre de tabulation</em> des éléments sélectionnables de la page (liens, boutons, champs de formulaire, etc.) doit avoir du sens, afin que la page reste utilisable par les utilisateur·ice·s non-voyant·e·s ou au clavier.
      </td>
      <td>
        Voir
        <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_commandes_ui_sémantiques_si_possible"
          >Utiliser des commandes UI sémantiques si possible</a
        >. Si vous devez placer des éléments dans une disposition inhabituelle, il est préférable de s'assurer que l'ordre du code source est logique, puis d'utiliser des fonctionnalités CSS comme le <a href="/fr/docs/Learn_web_development/Core/CSS_layout/Positioning">positionnement</a> pour gérer la présentation.
      </td>
    </tr>
    <tr>
      <td>2.4.4 Finalité des liens (dans le contexte) (A)</td>
      <td>
        La finalité ou la destination d'un lien peut être déterminée à partir du texte du lien ou de son contexte (par exemple, le texte environnant). Exceptions&nbsp;: lorsque la finalité du lien est ambiguë pour <em>tous</em> les utilisateur·ice·s (voir <a href="https://w3c.github.io/wcag/guidelines/22/#dfn-ambiguous-to-users-in-general">ambiguë pour les utilisateur·ice·s en général <sup>(angl.)</sup></a> pour une explication utile).
      </td>
      <td>
        Voir
        <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_libellés_de_texte_significatifs"
          >Utiliser des libellés de texte significatifs</a
        >. Il faut également éviter de multiplier les cas où plusieurs occurrences du même texte sont liées à des destinations différentes. Cela peut poser problème aux utilisateur·ice·s de lecteurs d'écran, qui affichent souvent une liste des liens hors contexte&nbsp;: plusieurs liens tous intitulés «&nbsp;cliquez ici&nbsp;», «&nbsp;cliquez ici&nbsp;», «&nbsp;cliquez ici&nbsp;» seraient source de confusion.
      </td>
    </tr>
    <tr>
      <td>2.4.5 Mécanismes de navigation multiples (AA)</td>
      <td>
        <p>
          Il faut fournir au moins deux mécanismes généraux de navigation pour trouver des pages sur votre site&nbsp;: menu de navigation, fil d'Ariane, recherche, plan du site, liste de liens connexes, etc.
        </p>
        <p>
          La seule exception concerne les pages qui sont une étape d'un processus, et qui ne doivent logiquement comporter que des liens vers l'étape précédente et suivante.
        </p>
      </td>
      <td>
        La plupart de ces mécanismes peuvent être créés avec des fonctionnalités HTML standard, par exemple&nbsp;:
        <a
          href="/fr/docs/Learn_web_development/Extensions/Forms/HTML5_input_types#champ_de_recherche"
          >Champ de recherche</a
        >,
        <a
          href="/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links#créer_un_menu_de_navigation"
          >Créer un menu de navigation</a
        >,
        <a
          href="/fr/docs/Learn_web_development/Core/Text_styling/Styling_links#mettre_en_forme_les_liens_comme_des_boutons"
          >Mettre en forme les liens comme des boutons</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.6 Titres et libellés (AA)</td>
      <td>
        Les éléments de titre (par exemple, {{htmlelement("Heading_Elements", "&lt;h2&gt;")}}) et {{htmlelement("label")}} décrivent clairement la finalité du contenu ou des champs de formulaire qu'ils désignent.
      </td>
      <td>
        <p>
          Voir
          <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_commandes_ui_sémantiques_si_possible"
            >Utiliser des commandes UI sémantiques si possible</a
          >,
          <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_libellés_de_texte_significatifs"
            >Utiliser des libellés de texte significatifs</a
          >,
          <a
            href="/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Bases des titres et paragraphes</a
          >,
          <a
            href="/fr/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form#lélément_label"
            >L'élément <>&#x3C;label></</a
          >.
        </p>
        <p>
          Il faut éviter de dupliquer les titres ou libellés (par exemple, plusieurs «&nbsp;Informations complémentaires&nbsp;»), sauf si la structure permet de les différencier facilement.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.7 Sélection visible pour les éléments sélectionnables (AA)</td>
      <td>
        Lors du parcours par tabulation des éléments sélectionnables (liens, champs de formulaire, etc.), un indicateur visuel doit montrer quel élément est actuellement sélectionné. Il s'agit généralement d'un contour pointillé ou bleu par défaut (selon le navigateur, la plateforme, etc.), mais cela peut être modifié par CSS.
      </td>
      <td>
        Voir
        <a
          href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_commandes_ui_sémantiques_si_possible"
          >Utiliser des commandes UI sémantiques si possible</a
        >.
      </td>
    </tr>
    <tr>
      <td>2.4.8 Position dans le site (AAA)</td>
      <td>
        Lorsqu'on se trouve sur une page d'un site complexe ou d'une suite d'étapes, il faut indiquer à l'utilisateur·ice où il·elle se trouve, par exemple via un fil d'Ariane, un plan du site ou un texte comme «&nbsp;Page 2 sur 10&nbsp;».
      </td>
      <td></td>
    </tr>
    <tr>
      <td>2.4.9 Finalité des liens (lien seul) (AAA)</td>
      <td>
        Ce critère complète le 2.4.4&nbsp;: pour la conformité AAA, la finalité ou la destination d'un lien doit pouvoir être déterminée à partir du seul texte du lien, même hors contexte.
      </td>
      <td>
        Voir
        <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#utiliser_des_libellés_de_texte_significatifs"
          >Utiliser des libellés de texte significatifs</a
        >. Il faut également éviter de multiplier les cas où plusieurs occurrences du même texte sont liées à des destinations différentes. Cela peut poser problème aux utilisateur·ice·s de lecteurs d'écran, qui affichent souvent une liste des liens hors contexte&nbsp;: plusieurs liens tous intitulés «&nbsp;cliquez ici&nbsp;», «&nbsp;cliquez ici&nbsp;», «&nbsp;cliquez ici&nbsp;» seraient source de confusion.
      </td>
    </tr>
    <tr>
      <td>2.4.10 Titres de section (AAA)</td>
      <td>
        <p>
          En plus de structurer le document, les titres doivent aussi décrire précisément et séparer les zones de contenu en sections logiques.
        </p>
        <p>
          Ce critère concerne les titres dans le contenu web général (par exemple, titres dans le texte). Les titres d'interfaces utilisateur sont un cas particulier traité dans le critère 4.1.2.
        </p>
      </td>
      <td>
        <p>
          Voir
          <a
            href="/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
            >Bases des titres et paragraphes</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>2.4.11 Sélection non masquée (minimum) (AA)</td>
      <td>
        <p>Lorsqu'un composant d'interface reçoit la sélection clavier, il ne doit pas être entièrement masqué par du contenu créé par l'auteur·ice.</p>
        <div class="note notecard">
          <p><strong>Note&nbsp;:</strong> Si le contenu de l'interface peut être déplacé par l'utilisateur·ice, seule la position initiale du contenu déplaçable est prise en compte pour la conformité. De plus, un contenu ouvert par l'utilisateur·ice peut masquer le composant sélectionné. Enfin, si l'utilisateur·ice peut révéler le composant sélectionné sans changer la sélection clavier, le composant n'est pas considéré comme masqué pour la conformité et les tests.</p>
        </div>
      </td>
      <td>
        <p>Voir <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum">Comprendre la sélection non masquée (minimum) <sup>(angl.)</sup></a> pour plus d'informations.</p>
      </td>
    </tr>
    <tr>
      <td>2.4.12 Sélection non masquée (améliorée) (AAA)</td>
      <td>
        <p>Suit les mêmes règles que 2.4.11, sauf que lorsqu'un composant d'interface reçoit la sélection, aucune partie du composant ne peut être masquée par du contenu créé par l'auteur·ice. Si l'interface est configurable, seules les positions initiales du contenu déplaçable sont prises en compte pour la conformité et les tests.</p>
      </td>
      <td>
        <p>Voir <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced">Comprendre la sélection non masquée (améliorée) (niveau AAA) <sup>(angl.)</sup></a> pour plus d'informations.</p>
      </td>
    </tr>
    <tr>
      <td>2.4.13 Apparence de la sélection (AAA)</td>
      <td>
        <p>Lorsque l'indicateur de sélection clavier est visible, la zone de l'indicateur de sélection respecte tous les critères suivants&nbsp;:</p>
        <ul>
          <li>Doit être au moins aussi grande que la zone d'un périmètre de <code>2px</code> d'épaisseur autour du composant ou sous-composant non sélectionné, incluant le contenu, la bordure et l'arrière-plan du composant, à l'exclusion des ombres externes ou effets de halo.</li>
          <li>Doit avoir un ratio de contraste d'au moins 3:1 entre les mêmes pixels à l'état sélectionné et non sélectionné.</li>
        </ul>
        <p>Les exceptions sont&nbsp;:</p>
        <ul>
          <li>L'indicateur de sélection est déterminé par l'utilisateur·ice et ne peut pas être modifié par l'auteur·ice.</li>
          <li>L'indicateur de sélection et la couleur d'arrière-plan de l'indicateur ne sont pas modifiés par l'auteur·ice.</li>
        </ul>
      </td>
      <td>
        <p>Voir <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">Comprendre l'apparence de la sélection (niveau AAA) <sup>(angl.)</sup></a> pour plus d'informations.</p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG pour [Règle 2.4&nbsp;: Navigation&nbsp;: fournir des moyens d'aider les utilisateur·ice·s à naviguer, trouver du contenu et savoir leur position <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#navigable)

## Règle 2.5 — Modalités de saisie : faciliter l'utilisation des fonctionnalités via différents modes d'entrée, au-delà du clavier

Les critères de succès de cette règle garantissent que les utilisateur·ice·s peuvent interagir avec la technologie numérique à l'aide de différents modes d'entrée, au-delà du clavier ou de la souris (y compris l'écran tactile, la voix, les mouvements de l'appareil ou des dispositifs alternatifs).

<table>
  <thead>
    <tr>
      <th scope="col">Critère de succès</th>
      <th scope="col">Comment satisfaire le critère</th>
      <th scope="col">Ressource pratique</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.5.1 Gestes du pointeur (A)</td>
      <td>Toute fonctionnalité pouvant être utilisée avec un pointeur doit pouvoir l'être avec des actions à un seul point. Les gestes basés sur un tracé ou multipoints ne doivent pas être nécessaires pour utiliser une fonctionnalité. Il existe des exceptions.</td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html">Comprendre les gestes du pointeur <sup>(angl.)</sup></a></td>
    </tr>
    <tr>
      <td>2.5.2 Annulation du pointeur (A)</td>
      <td>Pour une fonctionnalité utilisable avec un seul pointeur, au moins une des conditions suivantes doit être vraie&nbsp;: aucun événement lors de l'appui, possibilité d'annuler/annuler, inversion lors du relâchement ou caractère essentiel.</td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html">Comprendre l'annulation du pointeur <sup>(angl.)</sup></a></td>
    </tr>
    <tr>
      <td>2.5.3 Libellé dans le nom (A)</td>
      <td>Pour chaque composant d'interface utilisateur comportant un libellé texte visible, le nom accessible doit correspondre (ou inclure) le texte visible du libellé.</td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html">Comprendre le libellé dans le nom <sup>(angl.)</sup></a></td>
    </tr>
    <tr>
      <td>2.5.4 Activation par mouvement (A)</td>
      <td>Pour toute fonctionnalité pouvant être déclenchée par&nbsp;: a) un mouvement de l'appareil (secouer, incliner, etc.) ou b) des gestes détectés par des capteurs (y compris une caméra), les deux conditions suivantes doivent être vraies&nbsp;: 1) l'activation par mouvement peut être désactivée, 2) la fonctionnalité peut être utilisée sans mouvement ou geste. Il existe des exceptions.</td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html">Comprendre l'activation par mouvement <sup>(angl.)</sup></a></td>
    </tr>
    <tr>
      <td>2.5.5 Taille de la cible (AAA)</td>
      <td>La taille de la zone tactile d'un élément actionnable doit être d'au moins 44 pixels CSS de large et de haut. Il existe des exceptions.</td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/target-size.html">Comprendre la taille de la cible <sup>(angl.)</sup></a></td>
    </tr>
    <tr>
      <td>2.5.6 Mécanismes d'entrée simultanés (AAA)</td>
      <td>Il faut permettre aux utilisateur·ice·s d'utiliser et de basculer entre différents modes d'entrée lors de l'interaction avec un contenu numérique&nbsp;: écran tactile, clavier, souris, commandes vocales ou dispositifs alternatifs. Une exception essentielle existe.</td>
      <td><a href="https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html">Comprendre les mécanismes d'entrée simultanés <sup>(angl.)</sup></a></td>
    </tr>
    <tr>
      <td>2.5.8 Taille minimale de la cible (AA)</td>
      <td>
        La taille de la cible pour les entrées au pointeur doit être d'au moins <code>24px</code> de large sur <code>24px</code> de haut, sauf dans les cas suivants&nbsp;:
        <ul>
          <li><strong>Espacement&nbsp;:</strong> Les cibles de moins de <code>24px x 24px</code> sont positionnées de sorte que si un cercle de <code>24px</code> de diamètre est centré sur chaque boîte englobante, les cercles ne se chevauchent pas avec une autre cible ou le cercle d'une autre cible sous-dimensionnée.</li>
          <li><strong>Équivalent&nbsp;:</strong> Un autre contrôle remplissant la même fonction et respectant ce critère est disponible sur la même page.</li>
          <li><strong>En ligne&nbsp;:</strong> La cible se trouve dans une ligne de texte et sa taille est contrainte par la hauteur de ligne ou le texte environnant.</li>
          <li><strong>Contrôle de l'agent utilisateur&nbsp;:</strong> La taille de la cible est déterminée par l'agent utilisateur et n'a pas été modifiée par l'auteur·ice.</li>
          <li><strong>Essentiel&nbsp;:</strong> Une présentation particulière de la cible est essentielle ou légalement requise pour l'information transmise.</li>
        </ul>
      </td>
      <td>Voir <a href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html">Comprendre la taille minimale de la cible <sup>(angl.)</sup></a></td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG pour [Règle 2.5&nbsp;: Modalités de saisie&nbsp;: faciliter l'utilisation des fonctionnalités via différents modes d'entrée, au-delà du clavier <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#input-modalities)

## Voir aussi

- [WCAG](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [Perceptible](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. Utilisable
  3. [Compréhensible](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  4. [Robuste](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
