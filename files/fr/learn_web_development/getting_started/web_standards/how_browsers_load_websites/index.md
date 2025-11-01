---
title: Comment les navigateurs chargent les sites web
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: cab1109a0c225299a9fb2b3402bcd4a1931b8ab7
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

Dans l'article précédent, nous avons examiné un [aperçu des technologies](/fr/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#panorama_des_technologies_web_modernes) à partir desquelles les sites web sont construits. Dans cet article, nous allons parcourir le processus par lequel ces technologies sont rendues&nbsp;: lorsque le navigateur a reçu les fichiers de code et les autres ressources qui composent une page web (comme expliqué dans [Comment fonctionne le web](/fr/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)), comment sont-ils assemblés pour créer l'expérience finale avec laquelle l'utilisateur·ice interagit&nbsp;?

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des navigateurs web et des technologies web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Les différents types de ressources qui sont renvoyées dans une réponse HTTP.</li>
          <li>Comment les différents fichiers sont assemblés par le navigateur pour afficher une page web à l'utilisateur·ice.</li>
          <li>Pourquoi le navigateur est parfois considéré comme un environnement de programmation hostile, mais aussi comme un environnement formidable.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Quels fichiers sont renvoyés dans les réponses HTTP ?

Pour résumer l'[aperçu des technologies web](/fr/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#panorama_des_technologies_web_modernes) vu dans l'article précédent, les réponses HTTP (aux requêtes pour une page web) contiennent généralement certains des types de fichiers suivants&nbsp;:

- Fichiers HTML, qui spécifient le contenu de la page web et sa structure.
- Fichiers CSS, qui spécifient les informations de style et de mise en page.
- Fichiers JavaScript, qui spécifient le comportement des parties interactives de la page web.
- Ressources médias comme des images, vidéos, fichiers audio, {{Glossary("PDF")}} et {{Glossary("SVG")}}, qui sont intégrés dans les pages web ou affichés par le navigateur.
- D'autres types de fichiers que le navigateur ne peut pas gérer nativement et qu'il confie donc à une application appropriée sur l'appareil pour les afficher, par exemple des documents Word ou Pages, des présentations PowerPoint et des fichiers Open Office.

## Rendu de la page web

Lorsque l'utilisateur·ice navigue vers une nouvelle page web (en cliquant sur un lien ou en saisissant une adresse web dans la barre d'adresse du navigateur), plusieurs requêtes HTTP sont envoyées, et plusieurs fichiers sont renvoyés dans les réponses HTTP. Les fichiers reçus dans ces réponses sont traités par le navigateur et assemblés pour former une page web avec laquelle l'utilisateur·ice peut interagir. Ce processus d'assemblage des éléments en une page web s'appelle le **rendu**.

Les sections suivantes donnent une explication générale de la façon dont un navigateur effectue le rendu d'une page web. Gardez à l'esprit qu'il s'agit d'une description simplifiée, et que différents navigateurs gèrent le processus de différentes manières. Cependant, cela vous donnera tout de même une idée du fonctionnement général.

## Traitement du HTML

Pour commencer, le fichier HTML qui contient le contenu de la page web et définit sa structure est reçu par le navigateur, puis analysé. Le navigateur le convertit en une structure arborescente appelée **arbre DOM** (**Document Object Model**). Le DOM représente la structure du document HTML en mémoire. Prenons cet extrait HTML de base comme exemple&nbsp;:

```html
<p>
  Utilisons&nbsp;:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

Chaque élément, attribut et morceau de texte du HTML devient un **nœud DOM** dans la structure arborescente. Les nœuds sont définis par leur relation avec d'autres nœuds DOM. Certains éléments sont parents de nœuds enfants, et les nœuds enfants ont des frères et sœurs. Le navigateur va analyser ce HTML et créer l'arbre DOM suivant&nbsp;:

```plain
P
├─ "Utilisons&nbsp;:"
├─ SPAN
|  └─ "HTML"
├─ SPAN
|  └─ "CSS"
└─ SPAN
    └─ "JavaScript"
```

Dans cet arbre DOM, le nœud correspondant à l'élément `<p>` est un parent. Ses enfants incluent un nœud de texte et les trois nœuds correspondant aux éléments `<span>`. Les nœuds `SPAN` sont aussi des parents, avec des nœuds de texte comme enfants. Quand le navigateur affiche cet arbre DOM, il s'affiche ainsi&nbsp;:

{{EmbedLiveSample('Traitement du HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

Certains éléments HTML, lorsqu'ils sont analysés, vont entraîner d'autres requêtes HTTP&nbsp;:

- Les éléments {{HTMLElement("link")}} qui référencent des feuilles de style [CSS](/fr/docs/Learn_web_development/Core/Styling_basics) externes.
- Les éléments {{HTMLElement("script")}} qui référencent des fichiers [JavaScript](/fr/docs/Learn_web_development/Core/Scripting) externes.
- Des éléments comme {{HTMLElement("img")}}, {{HTMLElement("video")}} et {{HTMLElement("audio")}}, qui référencent des fichiers médias à intégrer dans la page web.

## Analyse du CSS et rendu de la page

Ensuite, le CSS est traité.

1. Le navigateur analyse le CSS trouvé sur la page (soit inclus dans le fichier HTML, soit récupéré à partir de feuilles de style externes), et trie les différentes règles de style CSS dans différents «&nbsp;compartiments&nbsp;» selon les éléments HTML (représentés dans le DOM par des éléments appelés **nœuds**) auxquels elles s'appliqueront. Le navigateur applique ensuite les styles aux différents éléments selon les besoins (cette étape intermédiaire s'appelle l'arbre de rendu).
2. L'arbre de rendu est mis en page dans la structure qu'il doit avoir après application des règles. Cela inclut toutes les images et autres fichiers médias à intégrer dans la page.
3. L'affichage visuel de la page est présenté à l'écran (cette étape s'appelle la peinture).

Le schéma suivant offre une visualisation du processus décrit jusqu'ici&nbsp;:

![Aperçu du processus de rendu](rendering.svg)

Pour reprendre notre exemple, supposons que le CSS suivant soit trouvé dans le fichier HTML&nbsp;:

```html hidden
<p>
  Utilisons&nbsp;:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

La seule règle disponible dans le CSS utilise le sélecteur `span`, donc le navigateur peut trier le CSS très rapidement&nbsp;! Il applique cette règle à chacun des trois nœuds SPAN de l'arbre DOM, leur donnant une bordure noire et un fond vert lime, puis peint la représentation visuelle finale à l'écran.

Le résultat mis à jour est le suivant&nbsp;:

{{EmbedLiveSample('Analyse du CSS et rendu de la page', '100%', 90)}}

## Gestion du JavaScript

Après que le CSS a été traité, tout JavaScript trouvé sur la page (soit inclus dans le fichier HTML, soit récupéré à partir de fichiers de script externes) est analysé, interprété, compilé et exécuté. Cela se produit à un moment donné avant que le rendu final de la page ne soit terminé&nbsp;: en effet, certains JavaScript peuvent affecter le rendu, par exemple en ajoutant des nœuds au DOM ou en modifiant des nœuds existants.

En reprenant notre exemple, supposons que le JavaScript suivant se trouve dans le fichier HTML&nbsp;:

```html hidden
<p>
  Utilisons&nbsp;:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css hidden
span {
  border: 1px solid black;
  background-color: lime;
}
```

```js
// Sélectionne tous les éléments <span>
const spans = document.querySelectorAll("span");
// Pour chaque élément <span>, inverse le texte
spans.forEach((span) => {
  const reversedText = span.textContent.split("").reverse().join("");
  span.textContent = reversedText;
});
```

Vous n'avez pas besoin de comprendre exactement comment fonctionne ce JavaScript, mais, en résumé, il trouve chaque nœud SPAN dans le DOM et inverse l'ordre des caractères dans leurs nœuds de texte enfants.

Le résultat final est le suivant&nbsp;:

{{EmbedLiveSample('Gestion du JavaScript', '100%', 90)}}

## Quelles autres étapes de rendu existent ?

Plusieurs autres opérations se produisent lors du rendu d'une page, mais nous ne les aborderons pas toutes ici. Un point notable à mentionner est qu'un arbre d'accessibilité est construit, à partir du DOM, pour que les technologies d'assistance (par exemple les lecteurs d'écran) puissent s'y connecter, ce qui permet aux personnes qui ne peuvent pas voir le contenu affiché d'interagir avec celui-ci.

Vous en apprendrez davantage à ce sujet plus tard, dans notre module [Accessibilité](/fr/docs/Learn_web_development/Core/Accessibility).

## Le navigateur : un environnement de programmation hostile _et_ formidable

Le développement web côté client peut parfois être frustrant, et certain·e·s considèrent le navigateur comme un environnement de programmation hostile. En effet, contrairement à d'autres environnements, il est bien plus difficile de garantir l'environnement sur lequel votre code s'exécutera. Vous ne pouvez pas connaître à l'avance toutes les combinaisons possibles de système d'exploitation, navigateur, langue, localisation, connexion réseau, CPU, GPU, mémoire, autonomie, etc., que vos utilisateur·ice·s auront, donc vous ne pouvez pas garantir une expérience parfaite pour tout le monde.

Les navigateurs modernes ont tendance à implémenter les standards web de façon assez cohérente, mais il reste beaucoup d'incertitudes à gérer. En tant que développeur·euse web, vous devrez accepter cette incertitude, programmer de façon défensive et rester prudent·e sur les fonctionnalités utilisées. Cela repose sur le respect des [bonnes pratiques](/fr/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#bonnes_pratiques_du_web) présentées dans l'article précédent.

À l'inverse, le web est aussi un environnement de programmation formidable, pour de nombreuses raisons.

- Pour commencer, il est conçu pour l'accès universel. L'état de base du web est accessible et interconnecté. Certains de ces principes sont plus difficiles à atteindre dans d'autres environnements.
- La distribution d'applications sur le web est simple et puissante. Vous n'avez pas besoin de faire passer vos utilisateur·ice·s par un processus d'installation compliqué&nbsp;: il suffit de leur donner une adresse web et c'est parti.
- Les mises à jour d'applications sont généralement simples. Dans de nombreux cas, les visiteur·euse·s voient la nouvelle version d'une application en rechargeant simplement l'onglet du navigateur. Vous n'avez pas à vous soucier de leur faire télécharger et installer régulièrement des mises à jour.
- La communauté web est dynamique et solidaire. Comme nous le verrons plus loin dans notre article [Recherche et apprentissage](/fr/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning), il existe de nombreux endroits où demander de l'aide et d'excellentes ressources pour apprendre.

## Voir aussi

- [Quand et comment signaler des bogues aux navigateurs](/fr/docs/Learn_web_development/Howto/Web_mechanics/File_browser_bugs)
  - : Si quelque chose ne fonctionne pas comme prévu dans un navigateur, il peut s'agir d'un bogue. Cet article explique comment déterminer si c'est le cas, et comment déposer un rapport de bogue le cas échéant.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
