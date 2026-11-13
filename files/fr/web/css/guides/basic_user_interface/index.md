---
title: Interface utilisateur simple CSS
short-title: Interface utilisateur simple
slug: Web/CSS/Guides/Basic_user_interface
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Le module **d'interface utilisateur simple CSS** permet de définir le rendu et le fonctionnement des fonctionnalités liées à l'interface utilisateur, y compris les propriétés de contour, les retours visuels pour les dispositifs de pointage et les claviers, et la modification de l'apparence par défaut des composants <abbr title="interface utilisateur">UI</abbr>.

Les propriétés d'interface utilisateur peuvent améliorer l'expérience et l'accessibilité en fournissant des repères visuels pour les éléments avec lesquels on interagit, notamment en mettant en forme le curseur de la souris, la navigation de la sélection au clavier et le curseur d'insertion lorsqu'un élément éditable a la sélection. Le module inclut des fonctionnalités permettant d'ajouter des contours aux éléments sélectionnés (ou non sélectionnés) sans affecter les dimensions ni la mise en forme du [modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#quest-ce_que_le_modèle_de_boîte_css) d'un élément. Ce module d'interface utilisateur permet également la mise en forme des contrôles d'interface utilisateur.

## Une simple interface utilisateur en action

Pour découvrir comment les propriétés simples de l'interface utilisateur peuvent modifier l'apparence des éléments de l'interface, interagissez avec les éléments de cet exemple. Notez que certaines fonctionnalités de cet exemple améliorent l'utilisabilité tandis que d'autres la dégradent.

```html hidden live-sample___basicUI
<div><span contenteditable>Modifier ce texte </span></div>
<fieldset>
  <legend>Testez ces faux contrôles de formulaire</legend>
  <input type="checkbox" id="check" />
  <input type="radio" name="a" />
  <input type="radio" name="a" />
  <input type="range" />
  <progress></progress>
</fieldset>
<fieldset>
  <legend>
    Faites attention à ne pas nuire à l'utilisabilité&nbsp;: essayez de
    redimensionner ces éléments.
  </legend>
  <textarea>
  cursor: wait;
  </textarea>
  <textarea>
  resize: none;
  </textarea>
  <textarea>
  pointer-events: none;
  </textarea>
</fieldset>
```

```css hidden live-sample___basicUI
body {
  font-family: sans-serif;
  font-size: 1.25rem;
}
[contenteditable] {
  cursor: copy;
  caret-color: magenta;
  border: 1px solid #cccccc;
}
:focus {
  outline: dashed magenta 3px;
  outline-offset: 10px;
}
* {
  accent-color: magenta;
}
div,
fieldset {
  margin: 20px;
}
textarea:nth-of-type(1) {
  cursor: wait;
}
textarea:nth-of-type(2) {
  resize: none;
}
textarea:nth-of-type(3) {
  pointer-events: none;
}
```

{{EmbedLiveSample("basicUI", "", 300)}}

Les propriétés CSS {{CSSxRef("outline")}} et {{CSSxRef("outline-offset")}} ont été utilisées pour indiquer à l'utilisateur quel élément a la sélection. Une {{CSSxRef("accent-color")}} fournit une couleur de thème à tous les contrôles de formulaire. Le curseur d'insertion qui apparaît lors de l'édition du texte utilise la même couleur grâce à la propriété {{CSSxRef("caret-color")}}. Ce sont autant d'améliorations de l'interface utilisateur.

Certaines fonctionnalités nuisent à l'utilisabilité. La propriété {{CSSxRef("cursor")}} a été utilisée pour modifier le curseur par défaut du navigateur, ce qui peut dérouter. La propriété {{CSSxRef("resize")}} empêche le deuxième {{HTMLElement("textarea")}} d'être redimensionnable, tandis que la propriété {{CSSxRef("pointer-events")}} empêche le troisième `<textarea>` de recevoir des clics. Il reste toutefois sélectionnable au clavier.

Appuyez sur «&nbsp;Exécuter&nbsp;» dans l'exemple ci‑dessus pour voir ou éditer le code de l'animation dans le MDN Playground.

## Référence

### Propriétés

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("interest-delay")}}, raccourci pour&nbsp;:
  - {{CSSxRef("interest-delay-start")}}
  - {{CSSxRef("interest-delay-end")}}
- {{CSSxRef("outline")}}, raccourci pour&nbsp;:
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

Le module CSS d'interface utilisateur définit également les propriétés {{CSSxRef("caret")}}, `nav-down`, `nav-left`, `nav-right` et `nav-up`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

## Guides

- [Apprendre les formulaires&nbsp;: mise en forme avancée des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : Explique comment {{CSSxRef("appearance")}} peut être utilisé pour mettre en forme les contrôles de formulaire.

## Concepts associés

- La propriété CSS {{CSSxRef("cursor")}}
- L'attribut SVG {{SVGAttr("cursor")}}
- Les pseudo-classes CSS {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}} et {{CSSxRef(":focus-visible")}}
- L'interface API {{DOMxRef("CaretPosition")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Astuces pour concevoir des indicateurs de focus utiles et utilisables <sup>(angl.)</sup>](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
