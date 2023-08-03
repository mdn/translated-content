---
title: CSS Object Model (CSSOM)
slug: Web/API/CSS_Object_Model
---

{{DefaultAPISidebar('CSSOM')}}

**CSS Object Model** представляет собой набор API-интерфейсов, позволяющих манипулировать CSS из JavaScript. Это очень похоже на DOM, но для CSS, а не HTML. Это позволяет пользователям динамически читать и изменять стиль CSS.

## Ссылки

- {{domxref("AnimationEvent")}}
- {{domxref("CaretPosition")}}
- {{domxref("CSS")}}
- {{domxref("CSSCharsetRule")}}
- {{domxref("CSSConditionRule")}}
- {{domxref("CSSCounterStyleRule")}}
- {{domxref("CSSFontFaceRule")}}
- {{domxref("CSSFontFeatureValuesMap")}}
- {{domxref("CSSFontFeatureValuesRule")}}
- {{domxref("CSSGroupingRule")}}
- {{domxref("CSSImportRule")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}
- {{domxref("CSSMarginRule")}}
- {{domxref("CSSMediaRule")}}
- {{domxref("CSSNamespaceRule")}}
- {{domxref("CSSPageRule")}}
- {{domxref("CSSRule")}}
- {{domxref("CSSRuleList")}}
- {{domxref("CSSStyleDeclaration")}}
- {{domxref("CSSStyleSheet")}}
- {{domxref("CSSStyleRule")}}
- {{domxref("CSSSupportsRule")}}
- {{domxref("CSSVariablesMap")}}
- {{domxref("CSSViewportRule")}}
- {{domxref("ElementCSSInlineStyle")}}
- {{DOMxRef("FontFace")}}
- {{DOMxRef("FontFaceSet")}}
- {{DOMxRef("FontFaceSetLoadEvent")}}
- {{domxref("GeometryUtils")}}
- {{domxref("GetStyleUtils")}}
- {{domxref("LinkStyle")}}
- {{domxref("MediaList")}}
- {{domxref("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("MediaQueryListListener")}}
- {{domxref("PseudoElement")}}
- {{domxref("Screen")}}
- {{domxref("StyleSheet")}}
- {{domxref("StyleSheetList")}}
- {{domxref("TransitionEvent")}}

Несколько других интерфейсов также расширены спецификациями, связанными с CSSOM:

{{domxref("Document")}}, {{domxref("Window")}}, {{domxref("Element")}}, {{domxref("HTMLElement")}}, {{domxref("HTMLImageElement")}}, {{domxref("Range")}}, {{domxref("MouseEvent")}}, and {{domxref("SVGElement")}}.

### CSS Typed Object Model {{experimental_inline}}

{{SeeCompatTable}}

- {{DOMxRef("CSSImageValue")}} {{experimental_inline}}
- {{DOMxRef("CSSKeywordValue")}} {{experimental_inline}}
- {{DOMxRef("CSSMathInvert")}} {{experimental_inline}}
- {{DOMxRef("CSSMathMax")}} {{experimental_inline}}
- {{DOMxRef("CSSMathMin")}} {{experimental_inline}}
- {{DOMxRef("CSSMathNegate")}} {{experimental_inline}}
- {{DOMxRef("CSSMathProduct")}} {{experimental_inline}}
- {{DOMxRef("CSSMathSum")}} {{experimental_inline}}
- {{DOMxRef("CSSMathValue")}} {{experimental_inline}}
- {{DOMxRef("CSSMatrixComponent")}} {{experimental_inline}}
- {{DOMxRef("CSSNumericArray")}} {{experimental_inline}}
- {{DOMxRef("CSSNumericValue")}} {{experimental_inline}}
- {{DOMxRef("CSSPerspective")}} {{experimental_inline}}
- {{DOMxRef("CSSPositionValue")}} {{experimental_inline}}
- {{DOMxRef("CSSRotate")}} {{experimental_inline}}
- {{DOMxRef("CSSScale")}} {{experimental_inline}}
- {{DOMxRef("CSSSkew")}} {{experimental_inline}}
- {{DOMxRef("CSSSkewX")}} {{experimental_inline}}
- {{DOMxRef("CSSSkewY")}} {{experimental_inline}}
- {{DOMxRef("CSSStyleValue")}} {{experimental_inline}}
- {{DOMxRef("CSSTransformComponent")}} {{experimental_inline}}
- {{DOMxRef("CSSTransformValue")}} {{experimental_inline}}
- {{DOMxRef("CSSTranslate")}} {{experimental_inline}}
- {{DOMxRef("CSSUnitValue")}} {{experimental_inline}}
- {{DOMxRef("CSSUnparsedValue")}} {{experimental_inline}}
- {{DOMxRef("CSSVariableReferenceValue")}} {{experimental_inline}}
- {{DOMxRef("StylePropertyMap")}} {{experimental_inline}}
- {{DOMxRef("StylePropertyMapReadOnly")}} {{experimental_inline}}

### Устаревшие CSSOM interfaces

- {{DOMxRef("CSSPrimitiveValue")}}
- {{DOMxRef("CSSValue")}}
- {{DOMxRef("CSSValueList")}}

## Уроки

- [Определение размеров элементов](/ru/docs/Determining_the_dimensions_of_elements) (урок нуждается в обновлении,так как он был сделан в эпоху DHTML/Ajax).
- [Управление ориентацией экрана](/ru/docs/WebAPI/Managing_screen_orientation)

## Спецификации

| Specification                                                                                               |
| ----------------------------------------------------------------------------------------------------------- |
| [CSS Object Model (CSSOM)](https://drafts.csswg.org/cssom/)                                                 |
| [CSSOM View Module](https://drafts.csswg.org/cssom-view/)                                                   |
| [CSS Fonts Module # object-model](https://drafts.csswg.org/css-fonts/#object-model)                         |
| [CSS Animations # interface-dom](https://drafts.csswg.org/css-animations/#interface-dom)                    |
| [CSS Conditional Rules Module # apis](https://drafts.csswg.org/css-conditional/#apis)                       |
| [CSS Custom Properties for Cascading Variables Module # apis](https://drafts.csswg.org/css-variables/#apis) |
| [CSS Counter Styles # apis](https://drafts.csswg.org/css-counter-styles/#apis)                              |
| [CSS Device Adaptation Module # cssom](https://drafts.csswg.org/css-device-adapt/#cssom)                    |
| [CSS Painting API # paint-worklet](https://drafts.css-houdini.org/css-paint-api/#paint-worklet)             |
| [CSS Typed OM](https://drafts.css-houdini.org/css-typed-om/)                                                |

## Совместимость с браузерами

Все эти функции постепенно добавлялись в разные браузеры постепенно: это был довольно сложный процесс, который не может быть сведён в простую таблицу. Пожалуйста, обратитесь к конкретным интерфейсам для его доступности.

## Смотрите также

- [Document Object Model (DOM)](/ru/docs/Web/API/Document_Object_Model)
