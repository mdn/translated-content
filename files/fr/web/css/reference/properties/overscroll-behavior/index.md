---
title: Propriété CSS `overscroll-behavior`
short-title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
l10n:
  sourceCommit: 151d527b2d48812d732cb4f3fdffa0737682e684
---

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`overscroll-behavior`** contrôle ce qui se passe lorsque le défilement atteint le bord d'un [conteneur de défilement](/fr/docs/Glossary/Scroll_container).

{{InteractiveExample("Démonstration CSS&nbsp;: overscroll-behavior")}}

```css interactive-example-choice
overscroll-behavior: auto;
```

```css interactive-example-choice
overscroll-behavior: contain;
```

```css interactive-example-choice
overscroll-behavior: chain;
```

```css interactive-example-choice
overscroll-behavior: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="box">
      Ceci est un conteneur défilable. Le trimestre de Michaelmas est terminé,
      et le Lord Chancelier est assis dans le hall de Lincoln's Inn. Temps de
      novembre implacable. Autant de boue dans les rues que si les eaux venaient
      de se retirer de la surface de la terre.
      <br /><br />
      Lorem Ipsum a été le texte factice standard de l'industrie depuis les
      années 1500, lorsqu'un imprimeur inconnu a pris une galère de caractères
      et l'a brouillée pour créer un livre d'échantillons de caractères. Il a
      survécu non seulement à cinq siècles, mais aussi au passage à la
      composition électronique, restant essentiellement inchangé.
    </div>
    <div id="example-element">
      Ceci est le conteneur interne. Concentrez-vous sur ce conteneur, faites
      défiler jusqu'en bas et lorsque vous atteignez le bas, continuez à faire
      défiler.
      <p>
        Si vous avez sélectionné
        <code class="language-css">overscroll-behavior: auto;</code>, le
        conteneur externe commencera à défiler.
      </p>
      Si vous avez sélectionné
      <code class="language-css">overscroll-behavior: contain;</code>, le
      conteneur externe ne défilera pas à moins que vous ne déplaciez votre
      curseur en dehors du conteneur interne et que vous essayiez de faire
      défiler le conteneur externe.
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  width: 35em;
  height: 18em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
  overflow: auto;
  display: flex;
}

.box {
  width: 50%;
}

#example-element {
  width: 50%;
  height: 12em;
  border: medium dotted #1b76c4;
  padding: 0.3em;
  margin: 0 0.3em;
  text-align: left;
  overflow: auto;
  overscroll-behavior: contain;
}
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}

## Syntaxe

```css
/* Valeurs avec un mot-clés */
overscroll-behavior: auto; /* Par défaut */
overscroll-behavior: chain;
overscroll-behavior: contain;
overscroll-behavior: none;

/* Valeurs avec deux mots-clés */
overscroll-behavior: auto contain;

/* Valeurs globales */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: revert;
overscroll-behavior: revert-layer;
overscroll-behavior: unset;
```

### Valeurs

La propriété `overscroll-behavior` est définie avec un ou deux mots-clés parmi ceux de la liste ci-après.

Deux mots-clés définissent la valeur de `overscroll-behavior` sur les axes `x` et `y` respectivement. Si une seule valeur est définie, les axes x et y sont supposés avoir la même valeur.

- `auto`
  - : Permet le comportement par défaut à une limite de défilement. Le défilement peut continuer dans un autre conteneur de défilement.
- `chain`
  - : Permet au défilement de continuer en dehors du conteneur de défilement, mais empêche les effets de «&nbsp;rebondissement&nbsp;» de dépassement.
- `contain`
  - : Empêche le défilement de continuer en dehors du conteneur de défilement. Les effets de «&nbsp;rebondissement&nbsp;» peuvent toujours se produire.
- `none`
  - : Empêche le défilement de continuer en dehors du conteneur de défilement et empêche également les effets de «&nbsp;rebondissement&nbsp;» de dépassement.

## Description

Par défaut, les navigateurs mobiles ont tendance à fournir un effet de «&nbsp;rebondissement&nbsp;» ou même un rafraîchissement de la page lorsque le haut ou le bas d'une page (ou d'une autre zone de défilement) est atteint. Vous avez peut-être également remarqué que lorsque vous avez une boîte de dialogue avec du contenu défilant en haut d'une page qui a également du contenu défilant, une fois que la {{Glossary("Scroll_boundary", "limite de défilement")}} de la boîte de dialogue est atteinte, la page sous-jacente commence alors à défiler — cela s'appelle {{Glossary("Scroll_chaining", "enchaînement de défilement")}}.

Dans certains cas, ces comportements ne sont pas souhaitables. Vous pouvez utiliser `overscroll-behavior` pour vous débarrasser de l'enchaînement de défilement indésirable et du comportement de type «&nbsp;tirer pour actualiser&nbsp;».

Notez que cette propriété s'applique uniquement aux {{Glossary("Scroll_container", "conteneurs de défilement")}}. En particulier, comme un {{HTMLElement("iframe")}} n'est pas un conteneur de défilement, définir cette propriété sur un cadre intégré n'a aucun effet. Pour contrôler l'enchaînement de défilement depuis un cadre intégré, définissez `overscroll-behavior` à la fois sur les éléments {{HTMLElement("html")}} et {{HTMLElement("body")}} du document du cadre intégré.

Un {{Glossary("Scroll_container", "conteneur de défilement")}} qui n'a pas de débordement défilable, comme un élément avec `overflow: hidden`, est toujours considéré comme étant à sa {{Glossary("Scroll_boundary", "limite de défilement")}}. Ainsi, définir un `overscroll-behavior` différent de la valeur par défaut, tel que `contain` ou `none`, sur celui-ci empêche l'enchaînement de défilement vers les conteneurs de défilement ancêtres. Cela peut être utilisé pour empêcher le défilement de l'arrière-plan lorsqu'une boîte de dialogue ou une superposition est ouverte.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### `overscroll-behavior` sur les éléments `<dialog>`

Dans cet exemple, il y a 4 boutons qui lancent une boîte de dialogue, chaque boîte de dialogue ayant une valeur différente de `overscroll-behavior`. Il y a également un `<div>` qui force le contenu à être plus grand que le conteneur afin que l'effet de défilement de la page puisse être observé.

#### HTML

```html
<div class="buttons">
  <button popovertarget="dialog-auto"><code>auto</code></button>
  <button popovertarget="dialog-contain"><code>contain</code></button>
  <button popovertarget="dialog-chain"><code>chain</code></button>
  <button popovertarget="dialog-none"><code>none</code></button>
</div>
<div class="force-scroll"></div>
<dialog id="dialog-auto" popover>
  <code>overscroll-behavior: auto;</code>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
    voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo
    deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?
  </p>
</dialog>
<dialog id="dialog-contain" popover>
  <code>overscroll-behavior: contain;</code>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
    voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo
    deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?
  </p>
</dialog>
<dialog id="dialog-chain" popover>
  <code>overscroll-behavior: chain;</code>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
    voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo
    deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?
  </p>
</dialog>
<dialog id="dialog-none" popover>
  <code>overscroll-behavior: none;</code>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
    voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo
    deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?
  </p>
</dialog>
```

#### CSS

```css hidden
::backdrop {
  backdrop-filter: blur(0.5rem);
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2vb;
}
.force-scroll {
  width: 20vi;
  height: 200vb;
  margin-inline: auto;
  border: solid 1px black;
  background: linear-gradient(45deg, tomato, olivedrab);
}
```

```css
[popover] {
  width: 30vi;
  height: 10vi;
}
#dialog-auto {
  overscroll-behavior: auto;
}
#dialog-contain {
  overscroll-behavior: contain;
}
#dialog-chain {
  overscroll-behavior: chain;
}
#dialog-none {
  overscroll-behavior: none;
}
```

#### Résultat

Cliquez sur l'un des boutons pour voir ce comportement appliqué à la boîte de dialogue qui apparaît, lorsque vous faites défiler à l'intérieur de la boîte de dialogue&nbsp;:

- `auto`&nbsp;: si vous dépassez le défilement de la boîte de dialogue, vous voyez le contenu «&nbsp;rebondir&nbsp;» et si vous continuez à faire défiler, vous voyez également le fond défiler.
- `contain`&nbsp;: si vous dépassez le défilement de la boîte de dialogue, vous voyez le contenu «&nbsp;rebondir&nbsp;» et si vous continuez à faire défiler, vous voyez que le fond ne défile pas.
- `chain`&nbsp;: si vous dépassez le défilement de la boîte de dialogue, vous voyez que le contenu ne «&nbsp;rebondit&nbsp;» pas et si vous continuez à faire défiler, vous voyez le fond défiler également.
- `none`&nbsp;: si vous dépassez le défilement de la boîte de dialogue, vous voyez que le contenu ne «&nbsp;rebondit&nbsp;» pas et si vous continuez à faire défiler, vous voyez que le fond ne défile pas.

{{EmbedLiveSample("`overscroll-behavior` sur les éléments `<dialog>`", "100%", 180)}}

Un autre exemple de contrôle du défilement d'une fenêtre de «&nbsp;chat&nbsp;» peut être consulté sur la propriété [`overscroll-behavior-y`](/fr/docs/Web/CSS/Reference/Properties/overscroll-behavior-y#prévenir_le_défilement_dun_élément_sous-jacent).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [du comportement de dépassement de défilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
- Le module [d'ancrage de défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_anchoring)
- [Prenez le contrôle de votre défilement&nbsp;: personnalisation des effets de tirage pour actualiser et de dépassement <sup>(angl.)</sup>](https://developer.chrome.com/blog/overscroll-behavior) sur developer.chrome.com (2017)
