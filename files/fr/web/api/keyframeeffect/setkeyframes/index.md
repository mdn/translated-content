---
title: "KeyframeEffect : méthode setKeyframes()"
short-title: setKeyframes()
slug: Web/API/KeyframeEffect/setKeyframes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Animations") }}

La méthode **`setKeyframes()`** de l'interface {{domxref("KeyframeEffect")}} remplace les images clés qui composent le `KeyframeEffect` concerné par un nouvel ensemble d'images clés.

## Syntaxe

```js-nolint
setKeyframes(keyframes)
```

### Paramètres

- `keyframes`
  - : Un objet d'image clé (<i lang="en">keyframe</i>) ou `null`. Si défini sur `null`, les images clés sont remplacées par une séquence d'images clés vides.

    Plus d'informations sur le [format](/fr/docs/Web/API/Web_Animations_API/Keyframe_Formats#syntaxe) d'un objet image-clé.

### Valeur de retour

Aucune ({{jsxref("undefined")}}).

### Exceptions

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Explication</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        Une ou plusieurs des images clés n'étaient pas du bon type d'objet, les
        images clés n'étaient pas
        <a href="https://w3c.github.io/web-animations/#loosely-sorted-by-offset"
          >grossièrement triées par décalage <sup>(angl.)</sup></a
        >, ou une image clé existait avec un décalage inférieur à 0 ou supérieur à 1.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Si les images clés ne peuvent pas être traitées ou sont mal formées, les images clés du `KeyframeEffect` ne sont pas modifiées.

## Exemples

```js
// passage d'un tableau d'objets image-clé
existingKeyframeEffect.setKeyframes([
  { color: "blue" },
  { color: "green", left: "10px" },
]);

// passage d'un objet avec des tableaux pour les valeurs
existingKeyframeEffect.setKeyframes({
  color: ["blue", "green"],
  left: ["0", "10px"],
});

// passage d'un objet à un seul membre
existingKeyframeEffect.setKeyframes({
  color: "blue",
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[Interface KeyframeEffect](/fr/docs/Web/API/KeyframeEffect)
- L'[API Web Animations](/fr/docs/Web/API/Web_Animations_API)
