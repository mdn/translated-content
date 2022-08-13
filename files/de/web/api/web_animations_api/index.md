---
title: Web Animations API
slug: Web/API/Web_Animations_API
translation_of: Web/API/Web_Animations_API
---
{{DefaultAPISidebar("Web Animations")}}{{ SeeCompatTable() }}

Die Web Animations API ermöglicht die Synchronisierung und zeitliche Abstimmung von Änderungen an der Präsentation einer Webseite, d. H. der Animation von DOM-Elementen. Dabei werden zwei Modelle kombiniert: das Timing-Modell und das Animationsmodell.

## Konzepte und Verwendung

Die Web-Animations-API bietet Browsern und Entwicklern eine gemeinsame Sprache, um Animationen auf DOM-Elementen zu beschreiben. Weitere Informationen zu den Konzepten der API und ihrer Verwendung finden Sie unter [Verwenden der Web Animations-API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

## Webanimationsschnittstellen

- {{domxref("Animation")}}
  - : Bietet Steuerelemente zur Wiedergabe und eine Zeitleiste für einen Animationsknoten. Kann ein mit dem {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}} Konstruktor erstelltes Object aufnehmen.
- {{domxref("KeyframeEffect")}}
  - : Beschreibt eine Menge animierbarer Eigenschaften und Werte, die als Keyframes bezeichnet werden, sowie deren Timing-Optionen. Diese können dann mit dem {{domxref("Animation.Animation", "Animation()")}} Konstruktor abgespielt werden.
- {{domxref("AnimationTimeline")}}
  - : Repräsentiert die Zeitleiste der Animation. Diese Schnittstelle ist zum Definieren von Timeline-Features (geerbt von {{domxref ("DocumentTimeline")}} und zukünftigen Timeline-Objekten) vorhanden, auf die Entwickler nicht selbst zugreifen.
- {{domxref("AnimationEvent")}}
  - : Eigentlich Teil von CSS-Animationen.
- {{domxref("DocumentTimeline")}}
  - : Stellt Animationszeitleisten dar, einschließlich der Standarddokumentzeitleiste (auf die über die Eigenschaft {{domxref ("Document.timeline")}} zugegriffen wird).
- {{domxref("EffectTiming")}}
  - : {{domxref ("Element.animate ()")}}, {{domxref ("KeyframeEffectReadOnly.KeyframeEffectReadOnly ()")}} und {{domxref ("KeyframeEffect.KeyframeEffect ()")}} akzeptieren alle ein optionales Objekt von Timing-Eigenschaften.

## Erweiterungen zu anderen Schnittstellen

Die Web-Animations-API fügt {{domxref ("document")}} und {{domxref ("element")}} einige neue Funktionen hinzu.

### Etweiterungen der `Document` Schnittstelle

- {{domxref("document.timeline")}}
  - : Das `DocumentTimeline` Objekt stellt die Standardzeitleiste des Dokuments dar.
- {{domxref("document.getAnimations()")}}
  - : Gibt ein Array von {{domxref ("Animation")}} - Objekten zurück, die derzeit für Elemente im `document` wirksam sind.

- ### Erweiterungen der `Element` Schnittstelle

  {{domxref("Element.animate()")}}

  - : Eine Shortcut-Methode zum Erstellen und Wiedergeben einer Animation für ein Element. Sie gibt die erstellte {{domxref ("Animation")}} Objektinstanz zurück.

## Read-Only-Schnittstellen für Web-Animationen

Die folgenden Schnittstellen sind in der Spezifikation enthalten, z. B. um Features zu definieren, die an mehreren anderen Stellen verwendet werden, oder um als Basis für mehrere Schnittstellen zu dienen, die alle als Werte derselben Eigenschaften verwendet werden können. Du würdest diese nicht direkt in der Entwicklungsarbeit verwenden, aber für Bibliotheksautoren könnte es interessant sein, die Funktionsweise der Technologie zu verstehen, sodass ihre Implementierungen effektiver sein können, oder für Browseringenieure, die eine einfachere Referenz suchen, als die Spezifikation bietet.

- {{domxref("AnimationEffectTimingReadOnly")}}
  - : Ein dictionary Objekt mit Timing-Eigenschaften, die von der veränderlichen {{domxref ("AnimationEffectTiming")}} - Schnittstelle geerbt werden, die der {{domxref ("KeyframeEffect")}} zugeordnet ist.
- {{domxref("AnimationEffectReadOnly")}}
  - : Defines current and future "Animation Effects" like {{domxref("KeyframeEffect")}}, which can be passed to {{domxref("Animation")}} objects for playing, and {{domxref("KeyframeEffectReadOnly")}} which is used by {{domxref("KeyframeEffect")}} (inherited by [CSS Animations](/de/docs/Web/CSS/CSS_Animations) and [Transitions](/de/docs/Web/CSS/CSS_Transitions)). All values of {{domxref("Animation.effect")}} are of types based on `AnimationEffectReadOnly`.
- {{domxref("KeyframeEffectReadOnly")}}
  - : Describes sets of animatable properties and values that can be played using the {{domxref("Animation.Animation", "Animation()")}} constructor, and which are inherited by {{domxref("KeyframeEffect")}}.

## Specifications

| Specification                            | Status                               | Comment            |
| ---------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('Web Animations')}} | {{Spec2('Web Animations')}} | Initial definition |

## See also

- [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Web Animations demos](https://mozdevs.github.io/Animation-examples/)
- [Polyfill](https://github.com/web-animations/web-animations-js)
- Firefox's current implementation: [AreWeAnimatedYet](https://birtles.github.io/areweanimatedyet/)
- [Browser support test](http://codepen.io/danwilson/pen/xGBKVq)
