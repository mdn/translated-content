---
title: begin
slug: Web/SVG/Reference/Attribute/begin
l10n:
  sourceCommit: 8d0c8728f49f2a0577ca17910f2149d6dd36b37e
---

L'attribut **`begin`** définit quand l'élément associé devient actif.
Pour un élément d'animation, c'est le point auquel l'animation doit commencer.

La valeur de l'attribut est une liste de valeurs séparées par des points-virgules. L'interprétation d'une liste de temps de début est détaillée dans la spécification SMIL dans [«&nbsp;Évaluation des listes de temps de début et de fin&nbsp;» <sup>(angl.)</sup>](https://www.w3.org/TR/smil-animation/#Timing-EvaluationOfBeginEndTimeLists). Chaque valeur individuelle peut être l'une des suivantes&nbsp;: `<offset-value>`, `<syncbase-value>`, `<event-value>`, `<repeat-value>`, `<accessKey-value>`, `<wallclock-sync-value>` ou le mot-clé `indefinite`.

Vous pouvez utiliser cet attribut avec les éléments SVG suivants&nbsp;:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## `animate`, `animateMotion`, `animateTransform`, `set`

Pour {{SVGElement("animate")}}, {{SVGElement("animateMotion")}}, {{SVGElement("animateTransform")}} et {{SVGElement("set")}}, `begin` définit quand l'élément doit commencer, c'est-à-dire devenir actif.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Valeur</th>
      <td><code>&#x3C;begin-value-list></code></td>
    </tr>
    <tr>
      <th scope="row">Valeur par défaut</th>
      <td><code>0s</code></td>
    </tr>
    <tr>
      <th scope="row">Peut être animé</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

`<begin-value-list>` est une liste de valeurs séparées par des points-virgules. Chaque valeur peut être l'une des suivantes&nbsp;:

- `<offset-value>`
  - : Cette valeur définit un [valeur d'horloge](/fr/docs/Web/SVG/Guides/Content_type#clock-value) qui représente un point dans le temps par rapport au début du document SVG (généralement l'évènement {{DOMxRef("Window/load_event", "load")}} ou {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}). Les valeurs négatives sont valides.
- `<syncbase-value>`
  - : Cette valeur définit une _base de synchronisation_ et un décalage optionnel par rapport à cette _base de synchronisation_. Le moment de début de l'animation de l'élément est défini par rapport au début ou à la fin active d'une autre animation.

    Une valeur de _base de synchronisation_ valide consiste en une référence d'ID à un autre élément d'animation suivie d'un point et de `begin` ou `end` pour identifier s'il faut se synchroniser avec le début ou la fin active de l'élément d'animation référencé. Une valeur de décalage optionnelle telle que définie dans `<offset-value>` peut être ajoutée.

- `<event-value>`
  - : Cette valeur définit un évènement et un décalage optionnel qui détermine le moment où l'animation de l'élément doit commencer. Le moment de début de l'animation est défini par rapport au moment où l'évènement défini est déclenché.

    Une valeur d'évènement valide consiste en une référence d'ID à un élément suivie d'un point et de l'un des évènements pris en charge pour cet élément. Tous les évènements valides (pas nécessairement pris en charge par tous les éléments) sont définis par les spécifications DOM et HTML. Ceux-ci sont&nbsp;:
    - {{DOMxRef("Element/focus_event", "focus")}}
    - {{DOMxRef("Element/blur_event", "blur")}}
    - {{DOMxRef("Element/focusin_event", "focusin")}}
    - {{DOMxRef("Element/focusout_event", "focusout")}}
    - {{DOMxRef("Element/DOMActivate_event", "DOMActivate")}}
    - {{DOMxRef("Element/auxclick_event", "auxclick")}}
    - {{DOMxRef("Element/click_event", "click")}}
    - {{DOMxRef("Element/dblclick_event", "dblclick")}}
    - {{DOMxRef("Element/mousedown_event", "mousedown")}}
    - {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
    - {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
    - {{DOMxRef("Element/mousemove_event", "mousemove")}}
    - {{DOMxRef("Element/mouseout_event", "mouseout")}}
    - {{DOMxRef("Element/mouseover_event", "mouseover")}}
    - {{DOMxRef("Element/mouseup_event", "mouseup")}}
    - {{DOMxRef("Element/wheel_event","wheel")}}
    - {{DOMxRef("Element/beforeinput_event", "beforeinput")}}
    - {{DOMxRef("Element/input_event", "input")}}
    - {{DOMxRef("Element/keydown_event", "keydown")}}
    - {{DOMxRef("Element/keyup_event", "keyup")}}
    - {{DOMxRef("Element/compositionstart_event", "compositionstart")}}
    - {{DOMxRef("Element/compositionupdate_event", "compositionupdate")}}
    - {{DOMxRef("Element/compositionend_event", "compositionend")}}
    - {{DOMxRef("Window/load_event", "load")}}
    - {{DOMxRef("Window/unload_event", "unload")}}
    - {{DOMxRef("HTMLMediaElement/abort_event", "abort")}}
    - {{DOMxRef("HTMLElement/error_event", "error")}}
    - {{DOMxRef("HTMLInputElement/select_event", "select")}}
    - {{DOMxRef("Window/resize_event", "resize")}}
    - {{DOMxRef("Element/scroll_event", "scroll")}}
    - {{DOMxRef("SVGAnimationElement/beginEvent_event", "beginEvent")}}
    - {{DOMxRef("SVGAnimationElement/endEvent_event", "endEvent")}}
    - {{DOMxRef("SVGAnimationElement/repeatEvent_event", "repeatEvent")}}

    Un décalage optionnel tel que défini dans `<offset-value>` peut être ajouté.

- `<repeat-value>`
  - : Cette valeur définit un évènement de répétition qualifié. Le moment de début de l'animation de l'élément est défini par rapport au moment où l'évènement de répétition est déclenché avec la valeur d'itération définie.

    Une valeur de répétition valide consiste en une référence d'ID à un élément suivie d'un point et de la fonction `repeat()` avec une valeur entière définissant le nombre de répétitions comme paramètre. Un décalage optionnel tel que défini dans `<offset-value>` peut être ajouté.

- `<accessKey-value>`
  - : Cette valeur définit une touche d'accès qui doit déclencher l'animation. L'animation de l'élément commence lorsque l'utilisateur·ice appuie sur la touche définie.

    Une valeur de touche d'accès valide consiste en la fonction `accessKey()` avec le caractère à saisir comme paramètre. Un décalage optionnel tel que défini dans `<offset-value>` peut être ajouté.

- `<wallclock-sync-value>`
  - : Cette valeur définit le moment de début de l'animation comme une heure réelle.

    Une valeur de synchronisation sur l'horloge murale valide consiste en la fonction `wallclock()` avec une valeur temporelle comme paramètre. La syntaxe temporelle est basée sur la syntaxe définie dans [ISO 8601 <sup>(angl.)</sup>](https://www.iso.org/iso-8601-date-and-time-format.html).

- `indefinite`
  - : Le début de l'animation est déterminé par un appel à la méthode `beginElement()` ou par un lien hypertexte ciblant l'élément.

## Exemples

### Exemple de décalage

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- rectangles animés -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="100"
      begin="0s"
      dur="8s"
      fill="freeze" />
  </rect>

  <rect x="35" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="75"
      begin="2s"
      dur="6s"
      fill="freeze" />
  </rect>

  <rect x="60" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      begin="4s"
      dur="4s"
      fill="freeze" />
  </rect>

  <!-- grille -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample("Exemple de décalage", "100%", 130)}}

### Exemple de synchronisation de base

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- rectangles animés -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="50"
      id="first"
      begin="0s;third.end"
      dur="4s" />
  </rect>

  <rect x="60" y="60" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="25"
      id="second"
      begin="first.end"
      dur="2s" />
  </rect>

  <rect x="85" y="85" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      to="25"
      id="third"
      begin="second.end"
      dur="2s" />
  </rect>

  <!-- grille -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="105" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="105" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="105" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="105" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="105" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="105" x2="110" y2="105" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample("Exemple de synchronisation de base", "100%", 130)}}

### Exemple d'évènement

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- rectangle animé -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="boutonDebut.click"
      dur="8s"
      fill="freeze" />
  </rect>

  <!-- déclencheur -->
  <rect
    id="boutonDebut"
    cursor="pointer"
    x="4.5"
    y="62.5"
    rx="5"
    height="25"
    width="110"
    fill="#EFEFEF"
    stroke="black"
    stroke-width="1" />

  <text x="60" y="80" text-anchor="middle" pointer-events="none">
    Cliquez sur moi.
  </text>

  <!-- grille -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample("Exemple d'évènement", "100%", 130)}}

### Exemple de répétition

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- rectangle animé -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      id="maBoucle"
      begin="0s;maBoucle.end"
      dur="4s"
      repeatCount="3" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="green"
      begin="maBoucle.begin" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="gold"
      begin="maBoucle.repeat(1)" />

    <set
      attributeType="CSS"
      attributeName="fill"
      to="red"
      begin="maBoucle.repeat(2)" />
  </rect>

  <!-- grille -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">1s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">2s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">3s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">4s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample("Exemple de répétition", "100%", 130)}}

### Exemple de touche d'accès

```html
<svg
  width="180"
  height="120"
  viewBox="0 0 180 120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- rectangles animés -->
  <rect x="10" y="35" height="15" width="0">
    <animate
      attributeType="XML"
      attributeName="width"
      from="0"
      to="100"
      begin="accessKey(s)"
      dur="8s"
      fill="freeze" />
  </rect>

  <!-- déclencheur -->
  <text x="90" y="80" text-anchor="middle" pointer-events="none">
    Appuyez sur la touche "s"
  </text>

  <!-- grille -->
  <text x="10" y="20" text-anchor="middle">0s</text>
  <line x1="10" y1="25" x2="10" y2="55" stroke="grey" stroke-width=".5" />
  <text x="35" y="20" text-anchor="middle">2s</text>
  <line x1="35" y1="25" x2="35" y2="55" stroke="grey" stroke-width=".5" />
  <text x="60" y="20" text-anchor="middle">4s</text>
  <line x1="60" y1="25" x2="60" y2="55" stroke="grey" stroke-width=".5" />
  <text x="85" y="20" text-anchor="middle">6s</text>
  <line x1="85" y1="25" x2="85" y2="55" stroke="grey" stroke-width=".5" />
  <text x="110" y="20" text-anchor="middle">8s</text>
  <line x1="110" y1="25" x2="110" y2="55" stroke="grey" stroke-width=".5" />

  <line x1="10" y1="30" x2="110" y2="30" stroke="grey" stroke-width=".5" />
  <line x1="10" y1="55" x2="110" y2="55" stroke="grey" stroke-width=".5" />
</svg>
```

{{EmbedLiveSample("Exemple de touche d'accès", "100%", 130)}}

_Cet exemple est intégré dans un iFrame. Si vous voulez activer les évènements de touche, vous devez d'abord cliquer dessus._

## Spécifications

{{Specifications}}

## Voir aussi

- [Animation SVG avec SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
