---
title: Event.bubbles
slug: Web/API/Event/bubbles
translation_of: Web/API/Event/bubbles
---
{{ ApiRef("DOM") }}

## Zusammenfassung

Gibt an, ob ein Event in der DOM-Hierarchie nach oben propagiert wird oder nicht.

## Syntax

    event.bubbles

### Wert

Ein {{domxref("Boolean")}}, welches `true` ist, falls das Event durch die DOM-Hierarchie nach oben propagiert wird.

## Beispiel

```js
 function goInput(e) {
  // checks bubbles and
  if (!e.bubbles) {
     // passes event along if it's not
     passItOn(e);
  }
  // already bubbling
  doOutput(e)
}
```

> **Note:** **Hinweis**: Nur bestimmte Events können weiter nach oben propagiert werden. Die Events, die dazu in der Lage sind, haben den Wert _true,_ für die hier beschriebene Eigenschaft.

## Specifications

| Specification                                                                                    | Status                               | Comment             |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('DOM WHATWG', '#dom-event-bubbles', 'Event.bubbles')}}         | {{ Spec2('DOM WHATWG') }}     |                     |
| {{SpecName('DOM2 Events', '#Events-Event-canBubble', 'Event.bubbles')}} | {{ Spec2('DOM2 Events') }} | Initial definition. |
