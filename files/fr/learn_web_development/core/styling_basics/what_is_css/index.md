---
title: Qu'est-ce que le CSS ?
slug: Learn_web_development/Core/Styling_basics/What_is_CSS
l10n:
  sourceCommit: 79b46675e64c9b3e7c4333c17b21b692f78b39ec
---

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}

**{{Glossary("CSS")}}** (Cascading Style Sheets) permet de créer des pages web attrayantes, mais comment fonctionne-t-il en coulisses&nbsp;? Cet article explique ce qu'est le CSS, à quoi ressemble la syntaxe de base et comment votre navigateur applique le CSS au HTML pour le mettre en forme.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <a
          href="/fr/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Logiciels de base installés</a
        >, connaissances de base en matière de
        <a
          href="/fr/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >gestion de fichiers</a
        >, et être familiarisé avec le HTML (étudiez le module
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content"
          >Structurer le contenu avec HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le but du CSS.</li>
          <li>Que le HTML n'a rien à voir avec la mise en forme.</li>
          <li>Le concept des styles par défaut du navigateur.</li>
          <li>À quoi ressemble le code CSS.</li>
          <li>Comment le CSS est appliqué au HTML.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Styles par défaut du navigateur

Dans le module [Structurer le contenu avec HTML](/fr/docs/Learn_web_development/Core/Structuring_content), nous avons expliqué ce qu'est le HTML et comment il est utilisé pour baliser les documents. Ces documents sont lisibles dans un navigateur web. Les titres apparaissent plus grands que le texte normal, les paragraphes passent à une nouvelle ligne et ont un espace entre eux. Les liens sont colorés et soulignés pour les distinguer du reste du texte.

Ce que vous voyez, ce sont les styles par défaut du navigateur — une mise en forme très basique que le navigateur applique au code HTML afin de garantir la lisibilité de la page, même si l'auteur·ice de celle-ci n'a pas définit de style explicite. Ces styles sont définis dans des feuilles de style CSS par défaut intégrées au navigateur — ils n'ont rien à voir avec le code HTML.

![Les styles par défaut utilisés par un navigateur](html-example.png)

Le web serait un endroit ennuyeux si tous les sites web ressemblaient à ça. C'est pourquoi vous devez apprendre le CSS.

## À quoi sert le CSS ?

En utilisant le CSS, vous pouvez contrôler exactement l'apparence des éléments HTML dans le navigateur, présentant vos documents à vos utilisateur·ice·s avec le design et la mise en page que vous souhaitez.

- Un **document** est généralement un fichier texte structuré à l'aide d'un langage de balisage, le plus couramment {{Glossary("HTML")}} (ces fichiers sont appelés _documents HTML_). Vous pouvez également rencontrer des documents écrits dans d'autres langages de balisage tels que {{Glossary("SVG")}} ou {{Glossary("XML")}}. Un document HTML contient le contenu d'une page web et en définit la structure.
- **Présenter** un document à un·e utilisateur·ice signifie le convertir en une forme utilisable par votre audience. Les {{Glossary("browser", "navigateurs")}} comme {{Glossary("Mozilla Firefox", "Firefox")}}, {{Glossary("Google Chrome", "Chrome")}}, {{Glossary("Apple_Safari", "Safari")}} et {{Glossary("Microsoft Edge", "Edge")}} sont conçus pour présenter visuellement les documents, par exemple sur un écran d'ordinateur, un projecteur, un appareil mobile ou une imprimante. Dans un contexte web, c'est généralement appelé _rendu_&nbsp;; nous avons fourni une description simplifiée du processus par lequel une page web est rendue dans [Comment les navigateurs chargent les sites web](/fr/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites).

> [!NOTE]
> Un navigateur est parfois appelé {{Glossary("User agent", "agent utilisateur")}}, ce qui signifie essentiellement un programme informatique qui représente une personne à l'intérieur d'un système informatique.

CSS peut être utilisé à de nombreuses fins liées à l'apparence et à la convivialité de votre page web, par exemple&nbsp;:

- Mise en forme du texte, y compris le changement de la [couleur](/fr/docs/Web/CSS/Reference/Values/color_value) et de la [taille](/fr/docs/Web/CSS/Reference/Properties/font-size) des titres et des liens.
- Création de mises en page, telles que des [grilles](/fr/docs/Learn_web_development/Core/CSS_layout/Grids) ou des [mises en page à colonnes multiples](/fr/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts).
- Effets spéciaux tels que [l'animation](/fr/docs/Web/CSS/Guides/Animations).

Le langage CSS est organisé en _modules_ qui contiennent des fonctionnalités liées. Par exemple, jetez un œil aux pages de référence MDN pour le module [Arrière-plans et bordures](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders) pour découvrir son objectif et les propriétés et fonctionnalités qu'il contient. Dans nos pages de module, vous trouverez également des liens vers les _Spécifications_ qui définissent les technologies.

## Bases de la syntaxe CSS

CSS est un langage basé sur des règles — vous définissez des règles en définissant des groupes de styles qui doivent être appliqués à un élément particulier ou à des groupes d'éléments sur votre page web.

Par exemple, vous pouvez décider de mettre en forme le titre principal de votre page en texte rouge et de grande taille. Le code suivant montre une règle CSS très simple qui permet d'obtenir ce résultat&nbsp;:

```css
h1 {
  color: red;
  font-size: 2.5em;
}
```

- Dans l'exemple ci-dessus, la règle CSS commence par un {{Glossary("CSS Selector", "sélecteur")}}. Cela _sélectionne_ les éléments HTML que nous allons mettre en forme. Dans ce cas, nous stylisons les titres de niveau un (`{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`).
- Nous incluons ensuite un ensemble d'accolades — `{ }`.
- Les accolades contiennent une ou plusieurs **déclarations**, qui prennent la forme de paires **propriété** et **valeur**. Nous spécifions la propriété (par exemple, `color` dans l'exemple ci-dessus) avant les deux-points, et nous spécifions la valeur de la propriété après les deux-points (`red` est la valeur définie pour la propriété `color`).
- Cet exemple contient deux déclarations, une pour `color` et une autre pour `font-size`.

Les différentes {{Glossary("property/CSS", "propriétés CSS")}} ont des valeurs autorisées différentes. Dans notre exemple, nous avons la propriété `color`, qui peut prendre différentes [valeurs de couleur](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units#couleur). Nous avons également la propriété `font-size`. Cette propriété peut prendre différentes [unités de taille](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units#nombres_longueurs_et_pourcentages) comme valeur.

Une feuille de style CSS contient de nombreuses règles de ce type, écrites les unes après les autres.

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

Vous pouvez constater que vous apprenez rapidement certaines valeurs, tandis que d'autres nécessitent une recherche. Les pages de propriétés individuelles sur MDN vous offrent un moyen rapide de rechercher des propriétés et leurs valeurs.

> [!NOTE]
> Vous pouvez trouver des liens vers toutes les pages de propriétés CSS (ainsi que d'autres fonctionnalités CSS) listées dans la [référence CSS](/fr/docs/Web/CSS/Reference) de MDN. Alternativement, vous devez vous habituer à rechercher «&nbsp;mdn _nom-de-la-fonctionnalité-css_&nbsp;» dans votre moteur de recherche préféré chaque fois que vous avez besoin d'en savoir plus sur une fonctionnalité CSS. Par exemple, essayez de rechercher «&nbsp;mdn color&nbsp;» ou «&nbsp;mdn font-size&nbsp;»&nbsp;!

## Comment le CSS est-il appliqué au HTML ?

Comme expliqué dans [Comment les navigateurs chargent les sites web](/fr/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites), lorsque vous naviguez vers une page web, le navigateur reçoit d'abord le document HTML contenant le contenu de la page web et le convertit en un **arbre DOM**.

Ensuite, toutes les règles CSS trouvées dans la page web (soit insérées directement dans le HTML, soit dans des fichiers `.css` externes référencés) sont triées dans différents «&nbsp;groupes&nbsp;», en fonction des différents éléments auxquels elles sont appliquées (comme défini par leurs sélecteurs). Les règles CSS sont ensuite appliquées à l'arbre DOM, ce qui donne une **arborescence de rendu**, qui est ensuite peinte dans la fenêtre du navigateur.

Regardons un exemple. Tout d'abord, définissons un extrait HTML auquel le CSS peut être appliqué&nbsp;:

```html
<h1>CSS est génial</h1>

<p>Vous pouvez mettre en forme le texte.</p>

<p>Et créer des mises en page et des effets spéciaux.</p>
```

Maintenant, notre CSS, répété de la section précédente&nbsp;:

```css
h1 {
  color: red;
  font-size: 2.5em;
}

p {
  color: aqua;
  padding: 5px;
  background: midnightblue;
}
```

Ce CSS&nbsp;:

- Sélectionne tous les éléments `<h1>` de la page, coloriant leur texte en rouge et les agrandissant par rapport à leur taille par défaut. Comme il n'y a qu'un seul `<h1>` dans notre exemple HTML, seul cet élément reçoit le style.
- Sélectionne tous les éléments `<p>` de la page, leur donnant une couleur de texte et de fond personnalisée ainsi qu'un peu d'espace autour du texte. Il y a deux éléments `<p>` dans notre exemple HTML, et ils reçoivent tous les deux le style.

Quand le CSS est appliqué au HTML, le rendu est le suivant&nbsp;:

{{EmbedLiveSample("Comment le CSS est-il appliqué au HTML ?", "100%", 200)}}

## Jouez avec un peu de CSS

Essayez de jouer avec l'exemple ci-dessus. Pour ce faire, appuyez sur le bouton «&nbsp;Exécuter&nbsp;» dans le coin supérieur droit pour le charger dans notre éditeur MDN Playground.

Faites ce qui suit&nbsp;:

1. Ajoutez un autre paragraphe de texte sous les deux existants, et notez comment la deuxième règle CSS est automatiquement appliquée au nouveau paragraphe.
2. Ajoutez un sous-titre `<h2>` quelque part sous le `<h1>`, peut-être après l'un des paragraphes.
3. Essayez de donner aux éléments `<h2>` une couleur différente en ajoutant une nouvelle règle CSS. Faites une copie de la règle `h1`, changez le sélecteur en `h2` et changez la valeur de `color` de `red` à `purple`, par exemple.
4. Si vous vous sentez aventureux, essayez de rechercher de nouvelles propriétés et valeurs CSS dans la [référence CSS](/fr/docs/Web/CSS/Reference) de MDN pour les ajouter à vos règles&nbsp;!

Pour un peu de pratique supplémentaire avec les bases du CSS, consultez [Écrivez vos premières lignes de CSS&nbs! <sup>(angl.)</sup>](https://scrimba.com/learn-html-and-css-c0p/~0j?via=mdn) de Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>. Ce cours fournit un aperçu utile de la syntaxe de base du CSS et propose un défi interactif où vous pouvez vous exercer davantage à écrire des déclarations CSS.

## Résumé

Maintenant que vous avez une certaine compréhension de ce qu'est le CSS et de son fonctionnement, passons à la pratique en écrivant vous-même du CSS et en expliquant la syntaxe plus en détail.

{{NextMenu("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics")}}
