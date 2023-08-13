---
title: Alternative style sheets
slug: Web/CSS/Alternative_style_sheets
---

Firefox는
_대체 스타일시트_
를 지원합니다. 대체 스타일시트를 제공하는 페이지에서는 **보기>페이지 스타일** 메뉴를 이용하여 페이지에 적용될 스타일을 선택할 수 있습니다. 따라서 사용자는 자신이 원하는 다양한 종류의 페이지를 볼 수 있게 됩니다.

[link](/ko/HTML/Element/link) 요소를 사용하여 웹 페이지에 대체 스타일시트를 제공할 수 있습니다.

예제:

```
 <link href="default.css" rel="stylesheet" type="text/css" title="Default Style">
 <link href="fancy.css" rel="alternate stylesheet" type="text/css" title="Fancy">
 <link href="basic.css" rel="alternate stylesheet" type="text/css" title="Basic">
```

위의 세 가지 스타일 시트를 제공하면, 페이지 스타일 메뉴에 "Default Style", "Fancy", "Basic" 스타일 목록이 출력됩니다. 사용자가 특정 스타일을 선택하면 페이지는 해당 스타일로 바로 다시 렌더링 됩니다.

[`link`](/ko/HTML/Element/link) 또는 [`style`](/ko/HTML/Element/style) 요소에 `title` 속성이 포함되어 있을 경우 해당 제목(title)은 사용자에게로 노출되어 사용자가 선택할 수 있게 됩니다. 동일한 제목을 가진 스타일시트가 여럿 존재할 경우 해당 스타일시트들은 모두 적용되며, `title` 속성이 없는 스타일시트는 항상 적용됩니다.

기본 스타일시트에는 `rel="stylesheet"` 속성을 사용하고 대체 스타일시트에는 `rel="alternate stylesheet"`를 사용하세요. 이를 통해 Firefox는 어떤 스타일시트 제목을 처음 선택해야 할지 알 수 있으며, 대체 스타일시트를 지원하지 않는 브라우저에게 기본 스타일시트가 무엇인지를 알려줍니다.

## 실제 예제

실제로 동작하는 예제는 [여기에서](http://developer.mozilla.org/samples/cssref/altstyles/index.html) 볼 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
