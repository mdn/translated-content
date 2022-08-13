---
title: Animation.effect
slug: Web/API/Animation/effect
tags:
  - API
  - Animacion
  - Animaciones Web
  - Experimental
  - Reference
  - efecto
translation_of: Web/API/Animation/effect
---
{{ SeeCompatTable() }} {{ APIRef("Web Animations") }}

La propiedad **`Animation`\*\***`.effect`\*\* de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) obtiene y establece el efecto objetivo de una animación. El efecto objetivo puede ser un objeto efecto de un tipo basado en {{domxref("AnimationEffectReadOnly")}}, como {{domxref("KeyframeEffect")}}, o `null`.

## Sintaxis

    var effect = Animation.effect;

    Animation.effect = {{domxref("AnimationEffectReadOnly")}}

### Valor

Un objeto {{domxref("AnimationEffectReadOnly")}} que describe el efecto de animación objetivo para la animación, o `null` para indicar que el efecto no está activo.

| Specification                                                                                        | Status                               | Comment         |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------- |
| {{SpecName('Web Animations', '#dom-animation-effect', 'Animation.effect' )}} | {{Spec2('Web Animations')}} | Editor's draft. |

## Compatibilidad con navegadores

{{Compat("api.Animation.effect")}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffectReadOnly")}}
- {{domxref("Animation")}}
