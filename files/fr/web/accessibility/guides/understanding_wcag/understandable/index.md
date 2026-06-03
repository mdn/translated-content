---
title: Compréhensible
slug: Web/Accessibility/Guides/Understanding_WCAG/Understandable
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Cet article fournit des conseils pratiques pour rédiger vos contenus web afin qu'ils respectent les critères de succès du principe **Compréhensible** des Règles pour l'accessibilité des contenus Web (WCAG) 2.0 et 2.1. Le principe «&nbsp;Compréhensible&nbsp;» stipule que l'information et le fonctionnement de l'interface utilisateur doivent être compréhensibles.

> [!NOTE]
> Pour lire les définitions du W3C pour «&nbsp;Compréhensible&nbsp;», ses lignes directrices et critères de succès, voir [Principe 3&nbsp;: Compréhensible — L'information et le fonctionnement de l'interface utilisateur doivent être compréhensibles <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#understandable).

## Règle 3.1 — Lisibilité : rendre le contenu textuel lisible et compréhensible

Cette ligne directrice vise à rendre le contenu textuel aussi compréhensible que possible.

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
      <td>3.1.1 Langue de la page (A)</td>
      <td>
        La langue humaine par défaut de chaque page web doit être détectable par le code. Cela permet notamment de s'assurer que la personne arrive sur une page rédigée dans une langue qui lui convient. Le moyen le plus simple est de définir l'attribut <a href="/fr/docs/Web/HTML/Reference/Global_attributes/lang">lang</a> sur l'élément {{htmlelement("html")}} de la page, en lui donnant la valeur du code de langue qui correspond le mieux à la langue du contenu.
      </td>
      <td>
        Voir
        <a
          href="/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#définition_de_la_langue_principale_du_document"
          >Définir la langue principale du document</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.2 Langue des parties (AA)</td>
      <td>
        <p>
          Si le contenu d'une page contient des mots ou expressions dans une langue différente de la langue principale, utilisez l'attribut <a href="/fr/docs/Web/HTML/Reference/Global_attributes/lang">lang</a> sur un élément englobant (par exemple un {{htmlelement("span")}} s'il n'y a pas d'élément sémantique adapté) pour indiquer la langue appropriée.
        </p>
        <p>
          Il n'est pas nécessaire d'indiquer une langue différente pour les mots ou expressions identiques dans toutes les langues (par exemple les noms propres, les termes techniques qui ne relèvent pas d'une langue spécifique).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.3 Mots inhabituels (AAA)</td>
      <td>
        Lorsqu'on utilise des termes techniques, du jargon ou des idiomes, il faut fournir des définitions pour ces mots ou expressions. Le site doit proposer un glossaire contenant ces définitions, auquel on peut faire des liens lors de leur apparition, ou à défaut fournir les définitions dans le texte ou dans une <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Lists#liste_de_description">liste de description</a> en bas de page.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.4 Abréviations (AAA)</td>
      <td>
        <p>
          Lorsqu'on utilise des abréviations, il faut fournir leur signification ou une définition si nécessaire.
        </p>
        <p>
          L'élément {{htmlelement("abbr")}} est souvent considéré comme la meilleure façon de fournir le développement d'une abréviation — il prend un attribut <a href="/fr/docs/Web/HTML/Reference/Global_attributes/title">title</a> qui contient le développement, affiché au survol de l'acronyme. Cependant, le contenu de title n'est pas accessible au clavier ni toujours lu par les lecteurs d'écran. Il est donc préférable de proposer des liens vers des pages de glossaire contenant le développement et l'explication, ou à défaut de les inclure dans le texte autour.
        </p>
      </td>
      <td>
        Voir
        <a
          href="/fr/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations"
          >Abréviations</a
        >.
      </td>
    </tr>
    <tr>
      <td>3.1.5 Niveau de lecture (AAA)</td>
      <td>
        <p>
          Si un texte nécessite un niveau de lecture supérieur à celui du collège (enfants de 11 à 14 ans environ), il faut fournir du matériel explicatif supplémentaire pour aider les personnes qui ne peuvent pas le lire, ou proposer une version alternative rédigée à un niveau collège.
        </p>
        <p>
          Cela ne signifie pas que tout le monde doit comprendre tous les sujets, mais que le style d'écriture doit être accessible à tous. Il est préférable de rédiger tout le contenu à un niveau collège, même la documentation technique comme les tutoriels de programmation, sauf raison valable (par exemple, un style poétique) ou si un style strict est imposé (par exemple, les spécifications W3C).
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.1.6 Prononciation (AAA)</td>
      <td>
        <p>
          Un mécanisme doit permettre aux utilisateur·ice·s d'accéder à la prononciation des mots lorsque cela est nécessaire pour bien comprendre le contenu.
        </p>
        <p>
          L'élément HTML {{htmlelement("audio")}} peut servir à créer un contrôle permettant d'écouter un fichier audio contenant la bonne prononciation, et il est aussi pertinent d'inclure un guide de prononciation textuel après les mots difficiles, comme dans les dictionnaires.
        </p>
      </td>
      <td>
        Voir
        <a
          href="/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >Contenus vidéo et audio</a
        >, et
        <a
          href="https://www.oxfordlearnersdictionaries.com/us/about/pronunciation_english.html"
          >Guide de prononciation pour l'anglais <sup>(angl.)</sup></a
        >
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG pour [Ligne directrice 3.1&nbsp;: Lisibilité — rendre le contenu textuel lisible et compréhensible <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#readable).

## Règle 3.2 — Prévisible : rendre les pages web prévisibles dans leur apparence et leur fonctionnement

Cette ligne directrice vise à rendre les interfaces utilisateur intuitives et compréhensibles.

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
      <td>3.2.1 À la sélection (A)</td>
      <td>
        <p>
          Lorsqu'un contrôle ou une fonctionnalité de la page reçoit la sélection, cela ne doit pas changer le contexte d'une manière qui pourrait dérouter ou désorienter l'utilisateur·ice.
        </p>
        <p>
          Il s'agit d'une question de conception réfléchie&nbsp;: les personnes ne veulent pas être surprises par les interfaces, elles veulent que tout soit intuitif et conforme à leurs attentes. Par exemple, sélectionner une option de menu de navigation ne doit pas changer la page affichée&nbsp;: il faut activer l'option avant de changer l'affichage.
        </p>
      </td>
      <td>
        L'événement {{domxref("Element.focus_event", "focus")}} de l'interface <code>Element</code> contient des informations utiles. Voir aussi
        <a
          href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#remettre_laccessibilité_au_clavier"
          >Remettre l'accessibilité au clavier</a
        > pour des idées d'implémentation.
      </td>
    </tr>
    <tr>
      <td>3.2.2 À la saisie (A)</td>
      <td>
        <p>
          Lorsqu'une donnée est saisie dans un contrôle ou qu'un paramètre est modifié, le contexte ne doit pas changer de façon inattendue. L'utilisateur·ice doit être prévenu·e ou averti·e du changement à venir avant qu'il ne se produise.
        </p>
        <p>
          Là encore, il faut appliquer une conception réfléchie. Par exemple, si appuyer sur un bouton provoque la sortie de la vue courante, il faut demander à la personne de confirmer cette action, de sauvegarder son travail si besoin, etc.
        </p>
      </td>
      <td>
        L'événement {{domxref("Element/input_event", "input")}} est utile ici.
      </td>
    </tr>
    <tr>
      <td>3.2.3 Navigation cohérente (AA)</td>
      <td>
        <p>
          Le style et la position des menus ou contrôles de navigation doivent rester cohérents entre les différentes pages ou vues d'un site web, et les éléments existants doivent apparaître dans le même ordre, même si de nouveaux éléments sont ajoutés. Si la personne a initié un changement (par exemple, choix d'un autre thème de couleurs ou position du menu), ce choix doit être respecté sur toutes les pages.
        </p>
        <p>
          Là encore, conception réfléchie&nbsp;: rendez les contrôles de navigation identiques sur toutes les pages ou vues.
        </p>
      </td>
      <td>
        Voir
        <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#structurer_logiquement_les_sections_de_page"
          >Structurer logiquement les sections de page</a
        > pour des informations sur le balisage moderne des mises en page. Voir aussi
        <a
          href="/fr/docs/Learn_web_development/Core/Text_styling/Styling_links#mise_en_forme_de_liens_comme_des_boutons"
          >Mettre en forme les liens comme des boutons</a
        > pour un exemple de menu de navigation accessible.
      </td>
    </tr>
    <tr>
      <td>3.2.4 Identification cohérente (AA)</td>
      <td>
        <p>
          Les contrôles ou composants ayant la même fonctionnalité doivent être identifiés de la même manière sur toutes les pages ou vues. Par exemple, un convertisseur de devises présent sur chaque page d'un site de voyage doit être strictement identique, sémantiquement et dans ses libellés.
        </p>
        <p>Encore une fois, conception réfléchie&nbsp;!</p>
      </td>
      <td>
        Les «&nbsp;libellés&nbsp;» peuvent désigner des informations descriptives dans le contenu textuel ou des labels HTML de formulaire. Voir
        <a href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#étiquettes_de_texte_significatives"
          >Utiliser des étiquettes de texte significatives</a
        > pour plus d'informations.
      </td>
    </tr>
    <tr>
      <td>3.2.5 Changement sur demande (AAA)</td>
      <td>
        <p>
          Les changements de contexte susceptibles de dérouter ou désorienter les utilisateur·ice·s ne doivent se produire que sur demande, OU la personne doit pouvoir les désactiver.
        </p>
        <p>
          Si vous devez proposer un élément qui modifie fortement la vue courante (contenu ou contrôles), laissez la personne choisir quand ce changement doit se produire (par exemple, quelle page afficher, quand passer à la photo suivante dans une galerie, etc.).
        </p>
        <p>
          Si vous devez proposer un carrousel sur une page, prévoyez une option pour arrêter l'avance automatique. Il vaut mieux éviter ce type de fonctionnalité si possible.
        </p>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>3.2.6 Aide cohérente (A)</td>
      <td>
        <p>
          Les pages web qui proposent des mécanismes d'aide (aide en ligne, contacts humains, etc.) répétés sur plusieurs pages doivent placer ces mécanismes dans le même ordre sur toutes les pages, sauf si la personne a initié un changement.
        </p>
      </td>
      <td>
        <p>Consultez la <a href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-help">documentation sur l'aide cohérente <sup>(angl.)</sup></a> pour en savoir plus.</p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG pour [Ligne directrice 3.2&nbsp;: Prévisible — rendre les pages web prévisibles dans leur apparence et leur fonctionnement <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#predictable).

## Règle 3.3 — Aide à la saisie : aider les utilisateur·ice·s à éviter et corriger les erreurs

Cette ligne directrice vise à aider les utilisateur·ice·s à saisir des informations correctes avec un minimum d'erreurs.

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
      <td>3.3.1 Identification des erreurs (A)</td>
      <td>
        <p>
          Lorsqu'une personne remplit un formulaire ou fait un choix, toute erreur détectée doit être clairement signalée, ainsi que le contrôle de formulaire concerné.
        </p>
        <p>
          Il est conseillé de mettre en place une détection et une gestion des erreurs côté client, via les fonctionnalités de validation HTML ou JavaScript, selon le contexte. Lorsqu'une erreur est détectée, un message d'erreur intuitif doit s'afficher à côté du champ concerné pour aider la personne à corriger sa saisie. Pour les utilisateur·ice·s de lecteurs d'écran, on peut utiliser les régions aria-live pour signaler le changement.
        </p>
        <div class="note notecard">
          <p>
            <strong>Note&nbsp;:</strong> La validation côté serveur doit <em>toujours</em> être utilisée en complément de la validation côté client. La validation côté client est trop facile à contourner ou à désactiver, elle ne peut donc pas être utilisée seule.
          </p>
        </div>
      </td>
      <td>
        Voir
        <a href="/fr/docs/Learn_web_development/Extensions/Forms/Form_validation"
          >Validation des données de formulaire</a
        > pour des informations complètes sur la validation, et
        <a
          href="/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#mises_à_jour_dynamiques_du_contenu"
          >WAI-ARIA&nbsp;: mises à jour dynamiques du contenu</a
        > pour les régions aria-live.
      </td>
    </tr>
    <tr>
      <td>3.3.2 Libellés ou instructions (A)</td>
      <td>
        <p>
          Des instructions claires doivent être fournies lorsque la saisie de données est requise. Pour une consigne ou un libellé court, utilisez des éléments {{htmlelement("label")}} pour les champs simples (nom, âge, etc.), ou une combinaison de {{htmlelement("label")}}, {{htmlelement("fieldset")}} et {{htmlelement("legend")}} pour les groupes de champs (date de naissance, adresse postale, etc.).
        </p>
        <p>
          Si une explication plus complexe est nécessaire, ajoutez des paragraphes explicatifs ou essayez de rendre vos formulaires plus intuitifs.
        </p>
      </td>
      <td>
        <ul>
          <li>
            <a
              href="/fr/docs/Learn_web_development/Core/Accessibility/HTML#étiquettes_de_texte_significatives"
              >Utiliser des libellés textuels significatifs</a
            >
          </li>
          <li>
            <a href="/fr/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form"
              >Comment structurer un formulaire HTML</a
            >
          </li>
          <li>
            <a
              href="/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names"
              >Libellés et noms textuels</a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>3.3.3 Suggestion d'erreur (AA)</td>
      <td>
        <p>
          Lorsqu'une erreur est détectée et que des suggestions de correction sont connues, il faut les fournir à la personne (par exemple, proposer d'autres identifiants si le nom d'utilisateur choisi est déjà pris), sauf si cela pose un problème de sécurité (mot de passe) ou de contexte (réponse à une question dans un quiz).
        </p>
        <p>
          Dans ce cas, on utilisera probablement une combinaison de JavaScript et de fonctionnalités côté serveur pour vérifier la saisie et, si besoin, proposer des suggestions utiles, affichées comme les messages d'erreur (voir 3.3.1).
        </p>
      </td>
      <td>Pas encore de suggestions de tutoriels.</td>
    </tr>
    <tr>
      <td>3.3.4 Prévention des erreurs (juridique, financier, données) (AA)</td>
      <td>
        <p>
          Pour les formulaires impliquant la saisie de données sensibles (contrats, transactions, données personnelles), au moins une des conditions suivantes doit être remplie&nbsp;:
        </p>
        <ul>
          <li>Les soumissions sont réversibles.</li>
          <li>Les données sont vérifiées et la personne peut les corriger.</li>
          <li>Un mécanisme permet de confirmer et corriger les informations avant validation finale.</li>
        </ul>
      </td>
      <td>
        <p>
          <strong>Réversible</strong>&nbsp;: pour toute vue où des données peuvent être saisies, proposez une vue équivalente permettant de modifier ou supprimer une entrée (voir par exemple <a href="/fr/docs/Learn_web_development/Extensions/Server-side/Django">Django web framework</a>).
        </p>
        <p>
          <strong>Vérification des données</strong>&nbsp;: comme en 3.3.1, combinez validation côté client et côté serveur pour détecter les erreurs et afficher des messages utiles.
        </p>
        <p>
          <strong>Confirmation et correction</strong>&nbsp;: après avoir rempli une série de champs (achat, etc.), affichez un écran de confirmation pour relire et corriger les saisies. Ce modèle est courant sur les sites e-commerce comme Amazon.
        </p>
      </td>
    </tr>
    <tr>
      <td>3.3.5 Aide contextuelle disponible (AAA)</td>
      <td>
        Fournissez des instructions et des aides appropriées en contexte pour faciliter la saisie et la soumission des formulaires.
      </td>
      <td>
        Cela complète 3.3.1 et critères similaires, mais demande une aide contextuelle plus poussée&nbsp;: lien dédié vers une page d'aide, exemples de saisie réussie, etc.
      </td>
    </tr>
    <tr>
      <td>3.3.6 Prévention des erreurs (tous cas) (AAA)</td>
      <td>
        Ce principe étend les exigences de 3.3.4 à toutes les situations de saisie, pas seulement celles impliquant des données sensibles.
      </td>
      <td>Voir aussi 3.3.4.</td>
    </tr>
    <tr>
      <td>3.3.7 Saisie redondante (A)</td>
      <td>
        Les informations déjà saisies ou fournies par la personne dans le même processus doivent être automatiquement reprises ou proposées dans une liste, sauf si la ressaisie est essentielle ou requise pour des raisons de sécurité, ou si l'information n'est plus valide.
      </td>
      <td>Voir <a href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry">la documentation sur la saisie redondante <sup>(angl.)</sup></a> pour en savoir plus.</td>
    </tr>
    <tr>
      <td>3.3.8 Authentification accessible (minimum) (AA)</td>
      <td>
        Les tests de fonction cognitive, comme se souvenir d'un mot de passe, ne doivent pas être exigés à une étape d'authentification, sauf si une alternative est proposée (reconnaissance d'objet ou de contenu personnel, ou mécanisme d'aide comme le copier-coller ou l'enregistrement automatique des mots de passe).
      </td>
      <td>Voir <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum">la documentation sur l'authentification accessible <sup>(angl.)</sup></a> pour en savoir plus.</td>
    </tr>
    <tr>
      <td>3.3.9 Authentification accessible (renforcée) (AAA)</td>
      <td>
        Un test de fonction cognitive, comme se souvenir d'un mot de passe, ne doit jamais être exigé à une étape d'authentification sans proposer une alternative qui ne repose pas sur une fonction cognitive ou un mécanisme d'aide. Les tests d'authentification qui demandent de reconnaître des objets ou du contenu non textuel fourni par la personne sont autorisés.
      </td>
      <td>Voir <a href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced">la documentation sur l'authentification accessible renforcée (AAA) <sup>(angl.)</sup></a> pour en savoir plus.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi la description WCAG pour [Ligne directrice 3.3&nbsp;: Aide à la saisie — aider les utilisateur·ice·s à éviter et corriger les erreurs <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#input-assistance).

## Voir aussi

- [WCAG](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG)
  1. [Perceptible](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  2. [Utilisable](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  3. Compréhensible
  4. [Robuste](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)
