---
title: Perceptible
slug: Web/Accessibility/Understanding_WCAG/Perceivable
l10n:
  sourceCommit: 96f68b50c1eac0af56f185d82c17c9ccaf212b67
---

{{AccessibilitySidebar}}

Dans cet article, nous verrons des conseils pratiques pour écrire du contenu web qui respecte le principe de **perceptibilité** décrit dans les règles pour l'accessibilité des contenus web (WCAG) 2.0 et 2.1. Les états du contenu doivent pouvoir être perçus par les utilisatrices et utilisateurs d'une façon ou d'une autre en utilisant un de leurs sens.

> [!NOTE]
> Les définitions du W3C pour cette catégorie, les règles associées et les critères de réussite sont présentes sur la page [Principe 1&nbsp;: l'information et les composants de l'interface utilisateur doivent être présentés à l'utilisatrice ou à l'utilisateur de façon à ce qu'il puisse les percevoir](https://www.w3.org/Translations/WCAG21-fr/#perceivable).

## Règle 1.1 — Des équivalents textuels doivent être fournis pour tout contenu non textuel

L'information principale à retenir ici est que le texte peut être converti sous d'autres formes que les personnes avec un handicap peuvent utiliser. Il pourra ainsi être vocalisé par un lecteur d'écran, converti en grands caractères ou représenté sur un affichage en braille. Le contenu non textuel fait référence au multimédia comme les images, les fichiers audio et les vidéos.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Critère de réussite</th>
      <th scope="col">Comment respecter ce critère</th>
      <th scope="col">Ressources pratiques</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">1.1.1 Fournir des équivalents textuels (A)</td>
      <td>
        Toutes les images qui ont un contenu significatif devraient avoir un texte alternatif approprié.
      </td>
      <td>
        <a href="/fr/docs/Learn/Accessibility/HTML#alternatives_textuelles">Alternatives textuelles</a>
      </td>
    </tr>
    <tr>
      <td>
        Les images ou graphiques devraient avoir une alternative accessible de fournie, qu'elle soit située sur la même page ou accessible via un lien. On utilisera un lien normal plutôt qu'un attribut <code>longdesc</code>.
      </td>
      <td>
        <p>
          Une description textuelle peut fonctionner, on peut aussi écrire un tableau de données accessible (voir <a href="/fr/docs/Learn/HTML/Tables/Advanced">Fonctionnalités avancées des tableaux HTML et accessibilité</a>). Voir <a href="/fr/docs/Learn/Accessibility/HTML#autres_mécanismes_alternatifs_de_texte">la section sur les autres mécanismes alternatifs au texte</a> pour un argument contre l'utilisation de <code>longdesc</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Le contenu multimédia (c'est-à-dire audio ou vidéo) devrait au moins avoir une identification descriptive disponible, telle qu'une légende ou quelque chose de similaire.
      </td>
      <td>
        <p>
          Voir <a href="/fr/docs/Learn/Accessibility/HTML#alternatives_textuelles">les alternatives textuelles</a> pour les options de légendes statiques, <a href="/fr/docs/Learn/Accessibility/Multimedia#transcriptions_audio">les transcriptions audio</a>, <a href="/fr/docs/Learn/Accessibility/Multimedia#pistes_de_texte_vidéo">les pistes de texte vidéo</a>, et <a href="/fr/docs/Learn/Accessibility/Multimedia#autre_contenu_multimédia">les autres contenus multimédia</a> pour d'autres alternatives.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        Les contrôles qui forment l'interface utilisateur comme les éléments de formulaire et les boutons devraient disposer de libellés textuels qui décrivent leur objectif.
      </td>
      <td>
        Pour les boutons, il s'agit de s'assurer que le texte du bouton décrit la fonction du bouton (par exemple, <code>&lt;button&gt;Téléverser l'image&lt;/button&gt;</code>). Pour plus d'informations sur les autres contrôles participant à l'interface utilisateur, voir <a href="/fr/docs/Learn/Accessibility/HTML#contrôles_de_linterface_utilisateur">les contrôles de l'interface utilisateur</a>.
      </td>
    </tr>
    <tr>
      <td>
        On implémentera les médias décoratifs (qui ne participent pas au contenu) (images, vidéos, etc.) afin qu'ils soient invisibles aux technologies d'assistance pour ne pas être source de confusion envers les utilisatrices et utilisateurs.
      </td>
      <td>
        <p>
          Les images décoratives devraient être implémentées à l'aide des images d'arrière-plan CSS (voir <a href="/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders">Arrières-plans en CSS</a>). Si vous devez inclure une image décorative avec <a href="/fr/docs/Web/HTML/Element/img"><code>&lt;img&gt;</code></a>, fournissez un texte alternatif explicitement vide avec l'attribut <code>alt</code> (<code>alt=""</code>). Sinon, les lecteurs d'écran pourraient vocaliser le chemin du fichier, etc.
        </p>
        <p>
          Si vous incluez des vidéos ou des sons en arrière-plan avec une lecture automatique, assurez-vous qu'ils soient aussi discrets que possible et qu'ils ne puissent pas être confondus avec le contenu essentiel de la page. Un contrôle pour les suspendre doit être disponible. Idéalement, on évitera simplement d'inclure ce type de contenu.
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi [la description du WCAG pour la règle 1.1 sur les alternatives textuelles](https://www.w3.org/Translations/WCAG21-fr/#text-alternatives).

## Règle 1.2 — Fournir des alternatives textuelles aux médias temporels

Les médias temporels sont les médias qui ont une durée comme les fichiers audio ou vidéo. On notera que si le fichier audio/vidéo est utilisé comme alternative à du contenu textuel déjà présent, il n'est pas nécessaire de fournir une autre alternative textuelle.

<table>
  <thead>
    <tr>
      <th scope="col">Critère de réussite</th>
      <th scope="col">Comment respecter ce critère</th>
      <th scope="col">Ressources pratiques</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1.2.1 Fournir des alternatives au contenu pré-enregistré seulement audio ou seulement vidéo (A)</td>
       <td>Une transcription devrait être fournie pour les médias pré-enregistrés qui sont uniquement audio. Une transcription ou une description audio devrait être fournie pour les médias pré-enregistrés qui sont uniquement vidéo (par exemple, une vidéo muette).</td>
       <td>Voir <a href="/fr/docs/Learn/Accessibility/Multimedia#transcriptions_audio">les transcriptions audio</a> pour des informations à ce sujet.</td>
    </tr>
    <tr>
       <td>1.2.2 Fournir des sous-titres pour les vidéos web (A)</td>
       <td>Des sous-titres devraient être fournis pour les vidéos web (par exemple celles qui utilisent l'élément HTML <code>&lt;video&gt;</code>). Cela rend la vidéo accessible aux personnes qui ne peuvent pas entendre le son de la vidéo.</td>
       <td>Voir <a href="/fr/docs/Learn/Accessibility/Multimedia#pistes_de_texte_vidéo">les pistes textuelles pour les vidéos</a> pour les sous-titres des vidéos HTML et <a href="/fr/docs/Learn/Accessibility/Multimedia#autre_contenu_multimédia">les autres contenus multimédias</a> pour les autres technologies. Voir aussi <a href="https://support.google.com/youtube/answer/2734796?hl=fr">Ajouter des sous-titres sur YouTube</a>.</td>
    </tr>
    <tr>
       <td>1.2.3 Fournir des transcriptions textuelles ou une description audio pour les vidéos web (A)</td>
       <td>Des transcriptions textuelles ou des descriptions audio pour les vidéos web (par exemple celles qui utilisent l'élément HTML <code>&lt;video&gt;</code>) doivent être fournies afin que la vidéo soit accessible aux personnes qui ne peuvent pas voir la vidéo et/ou qui ne peuvent pas connaître le contenu à partir de la seule bande son.</td>
       <td>Voir <a href="/fr/docs/Learn/Accessibility/Multimedia#transcriptions_audio">les transcriptions audio</a> pour des informations à ce sujet.</td>
    </tr>
    <tr>
       <td>1.2.4 Fournir des sous-titres pour l'audio en direct (AA)</td>
       <td>Des sous-titres synchronisés devraient être fournis pour l'ensemble des médias en direct qui contiennent de l'audio (par exemple des conférences vidéo, des diffusions sonores en direct).</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.5 Fournir des descriptions audio pour les vidéos pré-enregistrées (AA)</td>
       <td>Des descriptions audio devraient être fournies pour les vidéos pré-enregistrées, uniquement lorsque l'audio existant ne suffit pas à exprimer pleinement la vidéo.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.6 Fournir un équivalent en langue des signes pour l'audio pré-enregistré (AAA)</td>
       <td>Une vidéo équivalente en langue des signes devrait être fournie pour tout contenu pré-enregistré contenant de l'audio.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.7 Fournir une vidéo plus longue avec des descriptions audio (AAA)</td>
       <td>Lorsqu'il n'est pas possible de fournir des descriptions audio (voir 1.2.5) en raison des limites de temps (par exemple lorsqu'il n'y a pas suffisamment de pauses dans le contenu où insérer les descriptions audio), une version alternative de la vidéo devrait être fournie et contenir des pauses insérées, avec les descriptions audio.</td>
       <td></td>
    </tr>
    <tr>
       <td>1.2.8 Fournir une alternative aux médias pré-enregistrés (AAA)</td>
       <td>Pour tous les contenus utilisant une vidéo, une transcription textuelle descriptive devrait être fournie, par exemple le script d'un film. Il s'agit de rendre accessible le contenu pour les personnes qui ne peuvent pas l'entendre.</td>
       <td>Voir <a href="/fr/docs/Learn/Accessibility/Multimedia#transcriptions_audio">les transcriptions audio</a> pour plus d'informations à ce sujet.</td>
    </tr>
    <tr>
       <td>1.2.9 Fournir une transcription pour les diffusions audio en direct (AAA)</td>
       <td>Pour toute diffusion audio en direct, un texte descriptif devrait être fourni, tel qu'un script de la pièce ou les paroles de la chanson diffusée. Il s'agit de rendre accessible le contenu pour les personnes qui ne peuvent pas l'entendre.</td>
       <td>Voir <a href="/fr/docs/Learn/Accessibility/Multimedia#transcriptions_audio">les transcriptions audio</a> pour plus d'informations à ce sujet.</td>
    </tr>
 </tbody>
</table>

> [!NOTE]
> Voir aussi [la description du WCAG pour la règle 1.2 sur les alternatives aux médias temporels](https://www.w3.org/Translations/WCAG21-fr/#time-based-media).

## Règle 1.3 — Créer du contenu pouvant être présenté de différentes façons

Cette règle correspond à la capacité à pouvoir utiliser du contenu de plusieurs façons, afin que chaque personne puisse en disposer selon ses besoins et capacités.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Critère de réussite</th>
      <th scope="col">Comment respecter ce critère</th>
      <th scope="col">Ressources pratiques</th>
    </tr>
    <tr>
      <td>1.3.1 Informations et relations (A)</td>
      <td>
        <p>
          Toute relation portant sur la structure du contenu ou présentée visuellement doit pouvoir être déterminée par un programme informatique ou déduite de la description textuelle. Cette situation s'applique notamment pour&nbsp;:
        </p>
        <ul>
          <li>
            Les libellés textuels et les éléments de formulaire auxquels ils correspondent. Cette association est construite de façon non-ambigüe avec l'élément <a href="/fr/docs/Web/HTML/Element/label"><code>&lt;label&gt;</code></a>, qui pourra être utilisé par les lecteurs d'écran.
          </li>
          <li>
            Inclure des textes alternatifs pour les images. Le contenu sous forme d'image devrait avoir un texte disponible qui décrit de façon claire le contenu de l'image et ce texte doit pouvoir être associé à l'image par un programme informatique (par exemple avec le texte porté par l'attribut <code>alt</code>), ou pouvoir facilement y être associé (la description est par exemple à côté de l'image). De cette façon, on peut connaître l'intégralité du contenu, même sans pouvoir voir l'image.
          </li>
          <li>
            Pour les listes, si l'ordre des éléments est important, on utilisera une liste ordonnée (<a href="/fr/docs/Web/HTML/Element/ol"><code>&lt;ol&gt;</code></a>).
          </li>
        </ul>
      </td>
      <td>
        L'article <a href="/fr/docs/Learn/Accessibility/HTML">HTML&nbsp;: une bonne base pour l'accessibilité</a> contient de nombreuses informations à ce propos, on pourra notamment consulter <a href="/fr/docs/Learn/Accessibility/HTML#une_bonne_sémantique">une bonne sémantique</a>, <a href="/fr/docs/Learn/Accessibility/HTML#contrôles_de_linterface_utilisateur">les contrôles de l'interface utilisateur</a>, et <a href="/fr/docs/Learn/Accessibility/HTML#alternatives_textuelles">les alternatives textuelles</a>.
      </td>
    </tr>
    <tr>
      <td>1.3.2 Ordre séquentiel logique (A)</td>
      <td>
        Un ordre de lecture pertinent et logique devrait pouvoir être déterminé facilement pour tout contenu, même si ce dernier est présenté visuellement de façon inhabituelle. L'ordre devrait être clair grâce à l'utilisation d'éléments sémantiques (titres, paragraphes, etc.), le CSS étant utilisé pour toute mise en forme.
      </td>
      <td>
        Là encore, voir <a href="/fr/docs/Learn/Accessibility/HTML">HTML&nbsp;: une bonne base pour l'accessibilité</a>.
      </td>
    </tr>
    <tr>
      <td>1.3.3 Caractéristiques sensorielles (A)</td>
      <td>
        <p>
          Les instructions pour manipuler des contrôles ou comprendre le contenu ne doivent pas reposer sur un seul sens. Le contraire pourrait rendre le contenu inaccessible aux personnes ayant un handicap sur ce sens ou qui utilisent un appareil sans interface pour ce sens. Par exemple&nbsp;:
        </p>
        <ul>
          <li>
            <p>«&nbsp;Cliquez sur le bouton rond afin de continuer&nbsp;»</p>
            <p>Le bouton devrait être libellé de façon claire afin qu'on puisse clairement identifier le bouton sur lequel il faut appuyer. S'il y a plusieurs boutons, on s'assurera que leurs libellés sont clairs et permettent de distinguer leurs fonctions.</p>
          </li>
          <li>
            <p>«&nbsp;Écoutez les instructions audio pour de l'aide&nbsp;»</p>
            <p>Un exemple problématique&nbsp;: l'audio ne sera pas accessible aux personnes ayant un handicap auditif, alors que le texte peut être lu par un lecteur d'écran si nécessaire.</p>
          </li>
          <li>
            <p>«&nbsp;Balayez sur le côté droit de l'écran afin de révéler le menu&nbsp;»<p/>
            <p>Certaines personnes ne peuvent pas effectuer ce geste à l'écran, en raison d'un handicap ou parce que leur appareil ne dispose pas d'une interface tactile. Une méthode alternative doit être fournie, comme un raccourci clavier ou un bouton qui puisse être activé au clavier ou d'une autre façon.</p>
          </li>
        </ul>
        <div class="note">
          <p>
            <strong>Note :</strong> Le fait de communiquer des instructions à la seule aide de couleurs est connexe, mais abordé dans une règle différente&nbsp;: 1.4.1.
          </p>
        </div>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.3.4 Orientation (AA) <em><a href="https://www.w3.org/Translations/WCAG21-fr/#new-features-in-wcag-2-1">ajouté dans la version 2.1</a></em>
      </td>
      <td>
        La vue et l'utilisation du contenu n'est pas restreinte à une seule orientation, paysage ou portrait, à moins que cette orientation d'affichage soit essentielle.
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/orientation.html">Comprendre l'orientation (en anglais)</a>
      </td>
    </tr>
    <tr>
      <td>
        1.3.5 Identifier la finalité des champs (AA) <em><a href="https://www.w3.org/Translations/WCAG21-fr/#new-features-in-wcag-2-1">ajouté dans la version 2.1</a></em>
      </td>
      <td>
        Se référer à la liste des <a href="https://www.w3.org/Translations/WCAG21-fr/#input-purposes">53 types de champs</a> afin d'identifier la finalité d'un champ donné.
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html">Comprendre la finalité d'un champ de saisie (en anglais)</a>
      </td>
    </tr>
    <tr>
      <td>
        1.3.6 Identifier la fonction (AAA) <em><a href="https://www.w3.org/Translations/WCAG21-fr/#new-features-in-wcag-2-1">ajouté dans la version 2.1</a></em>
      </td>
      <td>
        Pour le contenu implémenté avec un langage à balises, la fonction d'un composant d'interface utilisateur, des icônes et des régions peut être déterminée par un programme informatique.
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html">Comprendre l'identification de la fonction (en anglais)</a>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Voir aussi [la description du WCAG pour la règle 1.3 sur le contenu adaptable, qui peut être présenté de différentes façons sans perte d'information ou de structure](https://www.w3.org/Translations/WCAG21-fr/#adaptable).

## Règle 1.4 — Faciliter la perception visuelle et auditive du contenu, notamment en séparant le premier plan de l'arrière-plan

Cette règle consiste à s'assurer que le contenu principal peut facilement se distinguer de l'arrière-plan et des autres décorations. Un exemple classique porte sur la couleur (tant sur le contraste entre les couleurs que sur l'utilisation de couleurs pour véhiculer des informations), mais cela s'applique à d'autres situations également.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Critère de réussite</th>
      <th scope="col">Comment respecter ce critère</th>
      <th scope="col">Ressources pratiques</th>
    </tr>
    <tr>
      <td>1.4.1 Utilisation de la couleur (A)</td>
      <td>
          La couleur ne devrait pas être utilisée seule pour véhiculer des informations. Ainsi, pour un formulaire, on ne marquera pas un champ obligatoire avec seulement une couleur (comme le rouge). En complément ou à la place, on pourra utiliser un astérisque avec un libellé «&nbsp;obligatoire&nbsp;», qui sera plus approprié.
      </td>
      <td>
        Voir <a href="/fr/docs/Learn/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur">Couleurs et contraste de couleurs</a> et <a href="/fr/docs/Learn/Forms/How_to_structure_a_web_form#étiquettes_multiples">Les étiquettes multiples</a>.
      </td>
    </tr>
    <tr>
      <td>1.4.2 Contrôles audio (A)</td>
      <td>
        Pour tout média audio dont la lecture dure plus de trois secondes, on fournira des contrôles accessibles afin de suspendre/reprendre la lecture et pour mettre en sourdine/ajuster le volume.
      </td>
      <td>
        On utilisera des éléments <code>&lt;button&gt;</code> natifs afin de fournir des contrôles accessibles au clavier, comme montré dans <a href="/fr/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics">Fondamentaux pour la mise en forme d'un lecteur vidéo</a>.
      </td>
    </tr>
    <tr>
      <td>1.4.3 Contraste minimal (AA)</td>
      <td>
        <p>
          Le contraste des couleurs entre l'arrière-plan et le contenu de premier plan doit respecter un niveau minimal afin de garantir la lisibilité&nbsp;:
        </p>
        <ul>
          <li>
            Le texte et son arrière-plan doivent avoir un ratio de contraste supérieur à 4.5:1.
          </li>
          <li>
            Les titres (ou le texte plus grand) doivent avoir un ratio de contraste supérieur à 3:1 par rapport à l'arrière-plan. Le texte plus grand est défini comme ayant une taille supérieure ou égale à 18pt, ou 14pt en gras.
          </li>
        </ul>
      </td>
      <td>
        Voir <a href="/fr/docs/Learn/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur">Couleurs et contraste de couleurs</a>.
      </td>
    </tr>
    <tr>
      <td>1.4.4 Redimensionnement du texte (AA)</td>
      <td>
        La page devrait être lisible et utilisable lorsque la taille du texte est doublée. Cela signifie que la disposition doit être adaptative afin que, lorsque la taille du texte est augmentée, le contenu soit toujours accessible.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.5 Texte sous forme d'image (AA)</td>
      <td>
        Les images ne devraient <strong>pas</strong> être utilisées pour présenter du contenu où du texte simple aurait suffi. Ainsi, si une image est principalement constituée de texte, on utilisera plutôt ce texte.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.6 Contraste amélioré (AAA)</td>
      <td>
        <p>Cela suit et reprend le critère 1.4.3.</p>
        <ul>
          <li>
            Le texte et son arrière-plan devrait avoir un ratio de contraste supérieur à 7:1.
          </li>
          <li>
            Les titres (ou les textes plus grands) devraient avoir un ratio de contraste supérieur à 4.5:1. Le texte plus grand est défini comme ayant une taille supérieure ou égale à 18pt, ou 14pt en gras.
          </li>
        </ul>
      </td>
      <td>
        Voir <a href="/fr/docs/Learn/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur">Couleurs et contraste de couleurs</a>.
      </td>
    </tr>
    <tr>
      <td>1.4.7 Arrière-plan sonore faible ou absent (AAA)</td>
      <td>
        Les enregistrements audio pré-enregistrés qui portent principalement sur des dialogues doivent avoir un bruit de fond minimal afin que le contenu puisse être facilement compris.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.8 Présentation visuelle (AAA)</td>
      <td>
        <p>Pour la présentation du contenu textuel, les règles suivantes devraient être respectées&nbsp;:</p>
        <ul>
          <li>Les couleurs de premier plan et d'arrière-plan devraient pouvoir être sélectionnées par l'utilisatrice ou l'utilisateur.</li>
          <li>
            Les blocs de texte ne devraient pas être plus larges que 80 caractères ou glyphes pour garantir une lisibilité maximale.
          </li>
          <li>
            Le texte ne devrait pas être justifié (<code>text-align: justify;</code>).
          </li>
          <li>
            La hauteur des lignes devrait être supérieure ou égale à 1,5 fois la taille du texte au sein des paragraphes (par exemple `line-height: 1.5;`), et au moins 2,25 fois la taille du texte entre les paragraphes (par exemple <code>padding: 2.25rem;</code>).
          </li>
          <li>
            Lorsque la taille du texte est doublée, le contenu ne devrait pas avoir besoin du défilement.
          </li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>1.4.9 Texte sous forme d'image (sans exception) (AAA)</td>
      <td>
        Le texte ne devrait pas être présenté comme partie d'une image à moins qu'il s'agisse uniquement d'une décoration (c'est-à-dire qu'il ne véhicule aucun contenu) ou qu'il ne puisse être présenté d'une autre façon.
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        1.4.10 Redistribution (AA) <em><a href="https://www.w3.org/Translations/WCAG21-fr/#new-features-in-wcag-2-1">ajouté dans la version 2.1</a></em>
      </td>
      <td>
        <ul>
          <li>
            Aucun défilement horizontal pour les langues écrites de gauche à droite (comme le français) ou de droite à gauche (comme l'arabe).
          </li>
          <li>
            Aucun défilement vertical pour les langues écrites de haut en bas (telles que le japonais).
          </li>
          <li>
            Exception faite du contenu pour lequel une disposition en deux dimensions est nécessaire à l'usage ou pour sa signification (comme un grand tableau de données).
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html">Comprendre la redistribution (en anglais)</a>
      </td>
    </tr>
    <tr>
      <td>
        1.4.11 Contraste du contenu non-textuel (AA) <em><a href="https://www.w3.org/Translations/WCAG21-fr/#new-features-in-wcag-2-1">ajouté dans la version 2.1</a></em>
      </td>
      <td>
        On doit avoir un ratio de contraste minimal de 3:1 entre les couleurs des éléments d'interface utilisateur et des objets graphiques.
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">Comprendre le contraste du contenu non-textuel (en anglais)</a>
      </td>
    </tr>
    <tr>
      <td>
        1.4.12 Espacement du texte (AA) <em><a href="https://www.w3.org/Translations/WCAG21-fr/#new-features-in-wcag-2-1">ajouté dans la version 2.1</a></em>
      </td>
      <td>
        <p>
          Aucune perte de contenu ou de fonctionnalité ne doit avoir lieu lorsque les styles suivants sont appliqués&nbsp;:
        </p>
        <ul>
          <li>
            La hauteur des lignes vaut au moins 1,5 fois la taille de la police.
          </li>
          <li>
            L'espacement suivant les paragraphes vaut au moins 2 fois la taille de la police.
          </li>
          <li>
            L'espacement entre les lettres vaut au moins 0,12 fois la taille de la police.
          </li>
          <li>
            L'espacement entre les mots vaut au moins 0,16 fois la taille de la police.
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html">Comprendre l'espacement du texte (en anglais)</a>
      </td>
    </tr>
    <tr>
      <td>1.4.13 Contenu au survol ou au focus (AA) <em><a href="https://www.w3.org/Translations/WCAG21-fr/#new-features-in-wcag-2-1">ajouté dans la version 2.1</a></em>
      </td>
      <td>
        <p>
          Bien que du contenu supplémentaire puisse apparaître et disparaître en fonction du survol et du focus au clavier, ce contenu doit respecter les trois critères suivants&nbsp;:
        </p>
        <ul>
          <li>
            il peut être masqué (on peut le fermer ou le supprimer)
          </li>
          <li>
            il peut être survolé (le contenu supplémentaire ne disparaît pas lorsque le pointeur est au-dessus de celui-ci)
          </li>
          <li>
            il est persistant (le contenu supplémentaire ne disparaît pas sans action de l'utilisatrice ou de l'utilisateur)
          </li>
        </ul>
      </td>
      <td>
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html">Comprendre le contenu au survol ou au focus</a>
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Voir aussi [la description du WCAG pour la règle 1.4 sur le contenu distinguable et la facilitation de la perception visuelle et auditive du contenu, notamment pour distinguer le premier-plan de l'arrière-plan](https://www.w3.org/Translations/WCAG21-fr/#distinguishable).

## Voir aussi

- [Comprendre les règles pour l'accessibilité des contenus web (WCAG)](/fr/docs/Web/Accessibility/Understanding_WCAG)

  1. Perceptible
  2. [Fonctionnel](/fr/docs/Web/Accessibility/Understanding_WCAG/Operable)
  3. [Compréhensible](/fr/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  4. [Robuste](/fr/docs/Web/Accessibility/Understanding_WCAG/Robust)
