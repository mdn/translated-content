---
title: Quirks 모드
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{HTMLSidebar}}

웹의 과거 시절에는 일반적으로 두가지 버전으로 페이지가 작성됐습니다. 하나는 Netscape Navigator를 위한것이고 다른 하나는 Microsoft Internet Explorer를 위한 것이었습니다. 웹 표준이 W3C에서 만들어질때 브라우저들은 이를 그대로 사용할 수 없었습니다. 그렇게 되면 웹의 대부분의 기존 사이트가 동작하지 않기 때문이었습니다. 따라서 브라우저들은 새로운 표준을 준수하는 사이트와 이전 레거시 사이트를 다르게 처리하기 위해 두 가지 모드를 도입했습니다.

현재 웹 브라우저의 레이아웃 엔진에서 사용하는 모드는 세 가지입니다. quirks모드, limited-quirks모드 그리고 no-quirks모드 입니다. **quirks 모드**에서 레이아웃은 Navigator 4와 Internet Explorer5의 동작을 모방합니다. 이것은 웹 표준이 널리 채택되기 전에 구축된 웹 사이트를 지원하기 위해 필수적입니다. **no-quirks모드** 에서는(바라건대) 현대 HTML 및 CSS명세에서 설명한대로 동작합니다. **limited-quirks 모드**에서는 일부 quirks만 구현됩니다.

limited-quirks 및 no-quirks 모드는 이전에 각각 "almost-standards" 모드와 "full standards" 모드로 불렸습니다. 이러한 이름은 이제 동작이 표준화되었기 때문에 변경되었습니다.

## 브라우저는 어떤 모드를 사용할지 어떻게 결정할까?

[HTML](/ko/docs/Web/HTML)문서의 경우 브라우저는 문서 시작 부분에 DOCTYPE을 사용하여 문서를 quirks 모드에서 처리할지 표준 모드에서 처리할지 결정합니다. 페이지가 전체 표준 모드를 사용하도록 하려면 페이지에 아래 예시와 같은 DOCTYPE이 있는지 확인하세요.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body></body>
</html>
```

예제에 표시된 `<!DOCTYPE html>`이 가장 단순하며 현재 HTML 표준에서 권장하는 DOCTYPE입니다. 이전 버전의 HTML 표준에서는 다른 변형을 권장했지만 현재 모든 기존 브라우저는 이 DOCTYPE에 대한 전체 표준모드를 사용하며 심지어 오래된 Internet Explorer 6도 마찬가지 입니다. 더 복잡한 DOCTYPE을 사용해야 할 타당한 이유는 없습니다. 다른 DOCTYPE을 사용하는 경우 limited-quirks모드 또는 quirks 모드를 트리거 하는것을 선택할 위험이 있습니다.

HTML문서의 시작 부분에 DOCTYPE을 넣어야 합니다. 주석이나 XML 선언과 같이 DOCTYPE 앞에 무엇이든 있으면 Internet Expolorer 9 이상에서는 quirks모드가 트리거 됩니다.

<!DOCTYPE html>의 유일한 목적은 no-quirks 모드를 활성화하는 것입니다. 이전 버전의 HTML 표준 DOCTYPE은 추가적인 의미를 제공했지만, 어떤 브라우저도 렌더링 모드 전환 이외의 다른 용도로 DOCTYPE을 사용한 적이 없습니다.

[브라우저가 다양한 모드를 선택하는 시기](https://hsivonen.iki.fi/doctype/)에 대한 자세한 설명도 참조하세요.

### XHTML

`Content-Type` HTTP 헤더에 `application/xhtml+xml` MIME 타입으로 설정함으로써 [XHTML](/ko/docs/Glossary/XHTML)로 제공 하는 경우 해당 문서는 항상 no-quirks 모드로 렌더링되기 때문에 DOCTYPE이 필요하지 않습니다. 단 인터넷 익스플로러는 9부터 XHTML을 지원하기 때문에 인터넷 익스플로러 8의 경우 `application/xhtml+xml`로 기술된 페이지를 표시하지 않고 알 수 없는 형식으로 판단해 다운로드 대화상자가 표시될 수 있다는 점에 유의하세요.

XHTML 같은(XHTML-like) 콘텐트를 `text/html` MIME 타입으로 제공한다면 웹 브라우저는 이를 HTML로 인식하므로, 표준 모드로 렌더링하려면 DOCTYPE을 기술해야 한다.

## 어떤 모드가 사용되었는지 확인하려면 어떻게 해야 하나요?

페이지가 quirks 또는 limited-quirks 모드에서 랜더링 되는 경우 Firefox는 개발자 도구의 콘솔탭에 경고를 기록합니다. 이 경고가 표시되지 않으면 Firefox가 no-quirk 모드를 사용하고 있는것입니다.

자바스크립트에서 `document.compatMode`의 값은 문서가 quirks 모드에 있는지 여부를 표시합니다. 값이 `"BackCompat"`이면 문서가 quirks 모드라는 것이고 그렇지 않으면 `"CSS1Compat"` 값을 가집니다.
