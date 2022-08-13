---
title: CSS
slug: Web/API/CSS
tags:
  - API
  - CSSOM
  - Interface
  - NeedsTranslation
  - Painting
  - Reference
  - TopicStub
translation_of: Web/API/CSS
---
{{APIRef("CSSOM")}}

The **`CSS`** interface holds useful CSS-related methods. No objects with this interface are implemented: it contains only static methods and is therefore a utilitarian interface.

## Properties

_The CSS interface is a utility interface and no object of this type can be created: only static properties are defined on it._

### Static properties

- {{DOMxRef("CSS.paintWorklet")}} {{Experimental_Inline}}{{SecureContext_Inline}}
  - : Provides access to the Worklet responsible for all the classes related to painting.

## Methods

_The CSS interface is a utility interface and no object of this type can be created: only static methods are defined on it._

### Static methods

_No inherited static methods_.

- {{DOMxRef("CSS.registerProperty()")}}
  - : Registers {{cssxref('--*', 'custom properties')}}, allowing for property type checking, default values, and properties that do or do not inherit their value.
- {{DOMxRef("CSS.supports()")}}
  - : Returns a {{JSxRef("Boolean")}} indicating if the pair _property-value_, or the condition, given in parameter is supported.
- {{DOMxRef("CSS.escape()")}}
  - : Can be used to escape a string mostly for use as part of a CSS selector.
- {{DOMxRef("CSS.factory_functions", 'CSS factory functions')}}

  - : Can be used to return a new [`CSSUnitValue`](/en-US/docs/Web/API/CSSUnitValue) with a value of the parameter number of the units of the name of the factory function method used.

        CSS.em(3) // CSSUnitValue {value: 3, unit: "em"}

## Specifications

| Specification                                                                                    | Status                                   | Comment                                  |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| {{SpecName('CSS Painting API','#dom-css-paintworklet','paintWorklet')}} | {{Spec2('CSS Painting API')}} | Adds the `paintWorklet` static property. |
| {{SpecName('CSSOM', '#the-css.escape()-method', 'CSS')}}                     | {{Spec2('CSSOM')}}                 | Adds the `escape()` static method.       |
| {{SpecName('CSS3 Conditional', '#the-css-interface', 'CSS')}}                 | {{Spec2('CSS3 Conditional')}} | Initial definition                       |

## Browser compatibility

{{Compat}}

## See Also

- [Components.utils.importGlobalProperties](/de/docs/Components.utils.importGlobalProperties)
