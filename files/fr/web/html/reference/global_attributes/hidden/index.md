---
title: "Attribut HTML universel : hidden"
short-title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: 032373c0ec106ec2d57f6bd14e74e2cc9191907a
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`hidden`** est un attribut {{Glossary("Enumerated", "énuméré")}} qui indique que le navigateur ne doit pas rendre le contenu de l'élément. Par exemple, il peut être utilisé pour masquer des éléments de la page qui ne peuvent pas être utilisés tant que le processus de connexion n'est pas terminé.

{{InteractiveExample("Démonstration HTML&nbsp;: hidden", "tabbed-shorter")}}

```html interactive-example
<p>
  Ce contenu doit être lu immédiatement, car il est important. Je suis ravi·e
  que vous puissiez le trouver&nbsp;!
</p>

<p hidden>
  Ce contenu n'est pas pertinent pour cette page actuellement, il ne devrait
  donc pas être visible. Il n'y a rien à voir ici. Circulez.
</p>
```

```css interactive-example
p {
  background: #ffe8d4;
  border: 1px solid #f69d3c;
  padding: 5px;
  border-radius: 5px;
}
```

## Description

L'attribut `hidden` indique que le contenu d'un élément ne doit pas être présenté à l'utilisateur·ice.
L'attribut accepte l'une des valeurs suivantes&nbsp;:

- le mot-clé `hidden`
- le mot-clé `until-found`
- une chaîne de caractères vide ou aucune valeur

Des valeurs invalides pour l'attribut `hidden` placent également l'élément dans l'état _masqué_. Ainsi, tous les éléments suivants sont dans l'état [_masqué_](#létat_masqué)&nbsp;:

```html
<span hidden>Je suis masqué</span>
<span hidden="">Je suis aussi masqué</span>
<span hidden="hidden">Je suis masqué aussi&nbsp;!</span>
<span hidden="bananas">Je suis tout aussi masqué&nbsp;!</span>
```

Le mot-clé `until-found` place l'élément dans l'état [_masqué jusqu'à découverte_](#létat_masqué_jusquà_découverte)&nbsp;:

```html
<span hidden="until-found">Je suis masqué jusqu'à découverte</span>
```

### L'état masqué

L'état _masqué_ indique que l'élément n'est pas actuellement pertinent pour la page, ou qu'il est utilisé pour déclarer du contenu à réutiliser par d'autres parties de la page et ne doit pas être présenté directement à l'utilisateur·ice. Le navigateur n'affichera pas les éléments qui sont dans l'état _masqué_.

Les navigateurs web peuvent implémenter l'état _masqué_ en utilisant `display: none`, auquel cas l'élément ne participera pas à la mise en page.
De plus, modifier la valeur de la propriété CSS {{CSSxRef("display")}} sur un élément masqué va surcharger l'état _masqué_.
Par exemple, les éléments avec le style `display: block` seront affichés même si l'attribut `hidden` est présent.

### L'état masqué jusqu'à découverte

Dans l'état _masqué jusqu'à découverte_, l'élément est masqué mais son contenu sera accessible à la fonctionnalité «&nbsp;Rechercher dans la page&nbsp;» du navigateur ou à la navigation par fragment.
Lorsque ces fonctionnalités provoquent un défilement vers un élément dans un sous-arbre _masqué jusqu'à découverte_, le navigateur va&nbsp;:

1. Déclencher un évènement [`beforematch`](/fr/docs/Web/API/Element/beforematch_event) sur l'élément masqué
2. Retirer l'attribut `hidden` de l'élément
3. Faire défiler jusqu'à l'élément

Cela permet de réduire une section de contenu tout en permettant aux utilisateur·ice·s de la retrouver par la recherche ou la navigation.

Les navigateurs implémentent généralement _masqué jusqu'à découverte_ en utilisant {{CSSxRef("content-visibility", "content-visibility: hidden")}}.
Cela signifie que, contrairement aux éléments dans l'état _masqué_, les éléments dans l'état _masqué jusqu'à découverte_ génèrent des boîtes, et&nbsp;:

- ils participent à la mise en page
- leur marge, bordure, remplissage et arrière-plan sont rendus

De plus, l'élément doit être affecté par la [compartimentation de mise en page](/fr/docs/Web/CSS/Guides/Containment) pour être révélé.
Si l'élément dans l'état _masqué jusqu'à découverte_ a une valeur `display` de `none`, `contents` ou `inline`, alors l'élément ne sera pas révélé par «&nbsp;Rechercher dans la page&nbsp;» ou la navigation par fragment.

## Notes d'utilisation

L'attribut `hidden` ne doit pas être utilisé pour masquer du contenu uniquement dans une présentation.
Si un élément est marqué comme masqué, il l'est pour toutes les présentations, y compris, par exemple, pour les lecteurs d'écran.

Les éléments masqués ne devraient pas être liés depuis des éléments visibles, sauf en utilisant `hidden="until-found"`.
Par exemple, il serait incorrect d'utiliser l'attribut `href` pour lier vers une section avec l'attribut `hidden`.
Si le contenu n'est pas applicable ou pertinent, il ne doit pas être lié.

Il est cependant possible d'utiliser l'attribut ARIA [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) pour faire référence à des descriptions masquées. Bien que masquer les descriptions implique qu'elles ne sont pas utiles seules, elles peuvent fournir un contexte utile lorsqu'elles sont référencées de cette manière.

De même, un élément canvas avec l'attribut `hidden` pourrait être utilisé par un moteur graphique scripté comme un tampon hors champ, et un contrôle de formulaire pourrait faire référence à un élément de formulaire masqué en utilisant son attribut de formulaire.

Enfin, notez que les éléments descendants d'un élément masqué restent actifs, ce qui signifie que les éléments script peuvent toujours s'exécuter, et les éléments de formulaire peuvent toujours être soumis&nbsp;:

```html
<div hidden>
  <script>
    console.warn("Surprise ! Je suis masqué *et* en cours d'exécution !");
  </script>
</div>
```

### Utiliser la valeur `until-found`

Dans cet exemple, nous avons trois éléments {{HTMLElement("div")}}.
Le premier et le troisième sont visibles, tandis que le second possède les attributs `hidden="until-found"` et `id="boite-a-decouvrir"`.
L'élément avec l'identifiant `boite-a-decouvrir` a une bordure rouge en pointillés et un fond gris.

Nous avons également un lien qui cible le fragment `"boite-a-decouvrir"` et un JavaScript qui écoute l'évènement `beforematch` déclenché sur cet élément masqué.
Le gestionnaire d'évènement modifie le contenu textuel de la boîte pour illustrer une action qui peut se produire lorsque l'état _masqué jusqu'à découverte_ est sur le point d'être supprimé.

#### HTML

```html
<a href="#boite-a-decouvrir">Aller au contenu masqué</a>

<div>Je ne suis pas masqué</div>
<div id="boite-a-decouvrir" hidden="until-found">Masqué jusqu'à découverte</div>
<div>Je ne suis pas masqué non plus</div>
```

```html hidden
<button id="reset">Réinitialiser</button>
```

#### CSS

```css
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}

div#boite-a-decouvrir {
  color: red;
  border: 5px dotted red;
  background-color: lightgray;
}
```

```css hidden
#boite-a-decouvrir {
  scroll-margin-top: 200px;
}
```

#### JavaScript

```js
const jusquaDecouverte = document.querySelector("#boite-a-decouvrir");
jusquaDecouverte.addEventListener(
  "beforematch",
  () => (jusquaDecouverte.textContent = "J'ai été révélée !"),
);
```

```js hidden
document.querySelector("#reset").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### Résultat

Cliquer sur le lien «&nbsp;Aller au contenu masqué&nbsp;» permet d'accéder à l'élément _masqué jusqu'à découverte_. L'évènement `beforematch` est déclenché, le contenu textuel est mis à jour et l'élément devient visible.
Notez que même si le contenu de l'élément est masqué, l'élément possède toujours une boîte générée, occupant de l'espace dans la mise en page, avec fond et bordures rendus.

Pour relancer l'exemple, cliquez sur «&nbsp;Réinitialiser&nbsp;».

{{EmbedLiveSample("Utiliser la valeur `until-found`", "", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété DOM {{DOMxRef("HTMLElement.hidden")}}
- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- L'attribut [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- L'évènement DOM {{DOMxRef("Element/beforematch_event", "beforematch")}}
