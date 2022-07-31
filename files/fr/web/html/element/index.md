---
title: Référence des éléments HTML
slug: Web/HTML/Element
tags:
  - Basic
  - Element
  - HTML
  - Reference
  - Web
  - l10n:priority
translation_of: Web/HTML/Element
---
{{HTMLSidebar("Elements")}}

Cette page répertorie tous les [éléments](/fr/docs/Glossary/Element) [HTML](/fr/docs/Glossary/HTML), qui sont créés à l'aide de [balises](/fr/docs/Glossary/Tag). Ils sont regroupés par fonction pour vous aider à trouver facilement ce que vous avez en tête. Une liste alphabétique de tous les éléments est fournie dans la barre latérale de la page de chaque élément ainsi que de celle-ci.

> **Note :** Pour plus d'informations sur les bases des éléments et attributs HTML, voir [la section sur les éléments dans l'article Introduction au HTML](/fr/docs/Learn/HTML/Introduction_to_HTML#elements_%e2%80%94_the_basic_building_blocks).

## Racine principale

{{HTMLRefTable("HTML Root Element")}}

## Métadonnées du document

Les métadonnées contiennent des informations à propos de la page. Elles comprennent des informations sur les styles, les scripts et les données qui aident les programmes ([moteur de recherche](/fr/docs/Glossary/Search_engine), [navigateurs](/fr/docs/Glossary/Browser), etc.) à utiliser et à rendre la page. Les métadonnées relatives aux styles et aux scripts peuvent être définies dans la page ou renvoyer à un autre fichier contenant ces informations.

{{HTMLRefTable("HTML Document Metadata")}}

## Racine de sectionnement

{{HTMLRefTable("Sectioning Root Element")}}

## Sectionnement du contenu

Organiser le contenu d'une page en différentes sections permet d'avoir une structure logique au sein d'un document. Grâce à ces éléments, on peut créer un plan pour la page, ajouter des titres pour identifier les sections et également gérer un en-tête et un bas de page.

{{HTMLRefTable("HTML Sections")}}

## Contenu textuel

Le contenu HTML textuel permet d'organiser des blocs ou des sections de contenu entre la balise ouvrante {{HTMLElement("body")}} et la balise fermante `</body>`. Ces éléments sont cruciaux pour l'accessibilité et le référencement car ils permettent d'identifier le sens du contenu.

{{HTMLRefTable("HTML Grouping Content")}}

## Sémantique du texte en ligne

Les éléments pour le texte en ligne peuvent être utilisés pour définir la signification, la structure ou la mise en forme d'un terme, d'une ligne ou d'un fragment de texte.

{{HTMLRefTable("HTML Text-Level Semantics")}}

## Images et médias

HTML prend en charge différents fichiers multimédias pour les images, les fichiers audio et vidéo.

{{HTMLRefTable("multimedia")}}

## Contenu embarqué

En plus du contenu multimédia, un document HTML peut embarquer d'autres contenus (bien que les interactions soient plutôt limitées).

{{HTMLRefTable("multimedia")}}

## SVG et MathML

Vous pouvez intégrer du contenu [SVG](/en-US/docs/Web/SVG) et [MathML](/en-US/docs/Web/MathML) directement dans des documents HTML, en utilisant les éléments [`<svg>`](/fr/docs/Web/SVG/Element/svg) et [`<math>`](/fr/docs/Web/MathML/Element/math).

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Élément</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/SVG/Element/svg"><code>&#x3C;svg></code></a>
      </td>
      <td>
        L'élément <code>svg</code> est un conteneur qui définit un nouveau
        système de coordonnées et une
        <a href="/fr/docs/Web/SVG/Attribute/viewBox">vue</a>. Il est utilisé
        comme élément le plus externe des documents SVG, mais il peut également
        être utilisé pour intégrer un fragment SVG à l'intérieur d'un document
        SVG ou HTML.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/MathML/Element/math"><code>&#x3C;math></code></a>
      </td>
      <td>
        L'élément de niveau supérieur en MathML est <code>&#x3C;math></code>.
        Chaque instance MathML valide doit être enveloppée dans des balises
        <code>&#x3C;math></code>. En outre, vous ne devez pas imbriquer un
        deuxième élément <code>&#x3C;math></code> dans un autre, mais vous
        pouvez avoir un nombre arbitraire d'autres éléments enfants dans
        celui-ci.
      </td>
    </tr>
  </tbody>
</table>

## Scripts

Afin de créer du contenu dynamique et des applications web, des langages de script peuvent être utilisés pour manipuler le document HTML. Certains éléments HTML permettent de gérer les liens entre les scripts et le document.

{{HTMLRefTable("HTML Scripting")}}

## Gestion de l'édition

Ces éléments permettent d'indiquer si des portions du texte ont été modifiées.

{{HTMLRefTable("HTML Edits")}}

## Contenu tabulaire

Les éléments listés ici permettent de créer et de gérer des données tabulaires.

{{HTMLRefTable("HTML tabular data")}}

## Formulaires

HTML fournit un certain nombre d'éléments qui peuvent être utilisés ensemble pour créer des formulaires que l'utilisateur peut remplir et soumettre au site Web ou à l'application. De nombreuses informations complémentaires à ce sujet sont disponibles dans le [guide des formulaires HTML](/fr/docs/Learn/Forms).

{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}

## Éléments interactifs

HTML fournit différents éléments qui permettent de créer des interfaces utilisateur interactives.

{{HTMLRefTable("HTML interactive elements")}}

## _Web Components_

Les composants web (ou « _Web Components_ ») permettent de créer et d'utiliser des éléments personnalisés comme s'ils étaient des éléments HTML classiques. Cela permet également de créer ses propres versions des éléments standards HTML.

{{HTMLRefTable({"include":["Web Components"],"exclude":["Deprecated", "Obsolete"]})}}

## Éléments obsolètes ou dépréciés

> **Attention :** Ces éléments sont d'anciens éléments HTML qui sont désormais dépréciés et qui ne devraient plus être utilisés. **Ces éléments ne doivent pas être utilisés dans de nouveaux projets et doivent être remplacés dans les anciens projets dès que possible.** Ces éléments uniquement sont listés ici à des fins d'information.

{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}
