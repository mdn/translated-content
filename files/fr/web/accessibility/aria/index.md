---
title: ARIA
slug: Web/Accessibility/ARIA
l10n:
  sourceCommit: cab1109a0c225299a9fb2b3402bcd4a1931b8ab7
---

<i lang="en">Accessible Rich Internet Applications</i> **(<abbr>ARIA</abbr>)** (qu'on pourrait traduire par «&nbsp;applications internet riches et accessibles&nbsp;») est un ensemble de [rôles](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) et d'[attributs](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes) d'attributs qui définissent comment rendre le contenu et les applications web accessibles (notamment ceux développés avec JavaScript) pour les personnes avec des handicaps.

ARIA complète HTML afin que les éléments interactifs et les widgets puissent être utilisés par les outils d'assistance quand les fonctionnalités standard ne le permettent pas. Ainsi, ARIA permet de rendre accessible les widgets JavaScript, les indications dans les formulaires, les messages d'erreur et les mises à jour dynamiques du contenu, etc.

## Avant d'utiliser l'ARIA

> [!WARNING]
> La plupart de ces widgets ont été intégrés au sein d'HTML5 et **mieux vaudra donc utiliser les éléments sémantiques** HTML lorsqu'ils sont disponibles. Ainsi, les éléments natifs disposent de fonctionnalités [de navigation au clavier](/fr/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets), de rôles et d'états définis en standard. Toutefois, lorsque vous choisissez d'utiliser ARIA, il vous revient de recoder les fonctionnalités équivalentes dans vos scripts.

[La première règle d'ARIA <sup>(angl.)</sup>](https://www.w3.org/TR/using-aria/#rule1) s'énonce ainsi&nbsp;: «&nbsp;Si vous pouvez utiliser un élément natif HTML ou un attribut avec la sémantique et le comportement voulu qui existe nativement, faites-le plutôt que d'utiliser un autre élément en lui ajoutant un rôle, un état ou une propriété ARIA afin de le rendre accessible.&nbsp;».

> [!NOTE]
> On peut parfois lire l'expression «&nbsp;Mieux vaut ne pas utiliser ARIA que de l'utiliser incorrectement&nbsp;». Lors [d'un sondage WebAIM sur plus d'un million de pages d'accueil de sites <sup>(angl.)</sup>](https://webaim.org/projects/million/#aria), il a été observé que les pages utilisant ARIA avaient 41% d'erreurs supplémentaires détectées par rapport aux pages sans ARIA. Bien qu'ARIA soit conçu pour rendre les pages web plus accessibles, lorsqu'il est utilisé incorrectement, il fait plus de mal que de bien.

Voici un widget utilisé pour une barre de progression&nbsp;:

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"></div>
```

Cette barre de progression utilise un élément {{HTMLElement("div")}} qui n'a pas de sémantique forte. On inclut donc un rôle ARIA et des propriétés pour ajouter une signification. Ainsi, l'attribut [`role="progressbar"`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) informe le navigateur que cet élément est un widget pour une barre de progression, implémenté en JavaScript. Les attributs [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) et [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) indiquent les valeurs minimales et maximales de la barre de progression tandis que [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) décrit l'état courant (et doit donc être maintenu à jour avec JavaScript).

En plus des attributs déjà indiqués dans le document HTML, il est possible d'ajouter des attributs ARIA dynamiquement à l'aide de JavaScript, comme suit&nbsp;:

```js
// On récupère la barre de progression dans le DOM.
const progressBar = document.getElementById("percent-loaded");

// On lui affecte des rôles et états ARIA
// afin que les outils d'assistance puissent
// identifier le type de widget.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// On crée une fonction qui peut être appelée à tout
// moment pour mettre à jour la valeur de la barre
// de progression.
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}
```

Tout le contenu qui est disponible pour les personnes qui n'utilisent pas d'outils d'assistance doit également être disponible pour celles qui en utilisent. Réciproquement, aucune fonctionnalité ne devrait cibler uniquement les personnes utilisant des outils d'assistance. Dans notre exemple, la barre de progression doit être mise en forme afin de ressembler effectivement à une barre de progression.

À la place, il aurait été beaucoup plus simple d'utiliser l'élément natif {{HTMLElement('progress')}} à la place&nbsp;:

```html
<progress id="percent-loaded" value="75" max="100">75 %</progress>
```

> [!NOTE]
> L'attribut `min` n'est pas autorisé pour l'élément {{HTMLElement('progress')}}, sa valeur minimale est toujours `0`.

> [!NOTE]
> Les éléments qui sont des points de repère dans la navigation du document ({{HTMLElement("main")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}, etc.) ont des rôles ARIA implicites natifs, il n'est pas nécessaire de les dupliquer.

## Prise en charge

À l'instar des autres technologies web, la prise en charge d'ARIA est plus ou moins hétérogène parmi les différents navigateurs. La prise en charge d'ARIA repose à la fois sur le navigateur, sur le système d'exploitation sous-jacent et sur la technologie d'assistance utilisée et aussi les versions de ces différents éléments. Certaines versions antérieures de logiciels pourront ne pas prendre en charge (ou que partiellement) certains rôles ARIA.

On notera également que certaines personnes qui utilisent des outils d'assistance hésitent à mettre à jour leurs logiciels de peur de perdre les fonctionnalités liées à l'ordinateur et au navigateur. Pour ces raisons, mieux vaudra [utiliser des éléments HTML sémantiques](/fr/docs/Learn_web_development/Core/Accessibility/HTML) dès que possible car cela maximisera la prise en charge des technologies d'assistance.

Il est aussi important de tester l'ARIA écrit avec des technologies d'assistance réelles. Bien qu'il existe certains émulateurs et simulateurs, rien ne vaut un test réel afin d'obtenir suffisamment de garanties.

## Références

La [référence ARIA](/fr/docs/Web/Accessibility/ARIA/Reference) est une liste complète des attributs et rôles ARIA documentés sur MDN.

- [Rôles ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Les pages de référence couvrant tous les rôles WAI-ARIA mentionnés sur MDN.
- [États et propriétés ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : Les pages de référence couvrant tous les états et propriétés WAI-ARIA mentionnés sur MDN.

## Guides

Les [guides ARIA](/fr/docs/Web/Accessibility/ARIA/Guides) sont des ressources qui vous aident à améliorer l'accessibilité de fonctionnalités web telles que les tableaux, les formulaires et la navigation au clavier.

## Standards

- [Spécification WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/)
  - : La spécification du W3C pour WAI-ARIA.
- [Bonnes pratiques d'implémentation avec WAI-ARIA <sup>(angl.)</sup>](https://www.w3.org/TR/wai-aria-practices-1.2/)
  - : Des documents officiels de bonnes pratiques sur la meilleure façon d'ajouter ARIA aux widgets et interactions fréquemment utilisés. Il s'agit d'une excellente ressource.

## Efforts de standardisation

- [Spécification WAI-ARIA <sup>(angl.)</sup>](https://w3c.github.io/aria/)
  - : La spécification du W3C pour WAI-ARIA.
- [Bonnes pratiques d'implémentation avec WAI-ARIA <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/)
  - : Les documents officiels de bonnes pratiques sur la meilleure façon d'ajouter ARIA aux widgets et interactions courants. Il s'agit d'une excellente ressource.

## ARIA pour les widgets scriptés

- [Implémenter des widgets JavaScript navigables au clavier](/fr/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
  - : Les éléments HTML natifs tels que {{HTMLElement("input")}}, {{HTMLElement("button")}} disposent d'une accessibilité au clavier native. Si on imite ces fonctionnalités avec des éléments {{HTMLElement("div")}} et ARIA, il faudra s'assurer que les widgets ainsi créés restent accessibles au clavier.
- [Régions dynamiques (<i lang="en">live regions</i>)](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions)
  - : Les régions dynamiques fournissent des suggestions aux lecteurs d'écran sur la façon de gérer les modifications apportées au contenu d'une page.

## Voir aussi

- [ARIA, les API d'accessibilité, et coder en réfléchissant un peu&nbsp;! une présentation vidéo de Léonie Watson <sup>(angl.)</sup>](https://www.youtube.com/watch?v=qdB8SRhqvFc)
- [Les ressources en français de WAI](https://www.w3.org/WAI/translations/#fr)
  - Notamment [les règles pour l'accessibilité des contenus web (WCAG) 2.2](https://www.w3.org/Translations/WCAG22-fr/)
