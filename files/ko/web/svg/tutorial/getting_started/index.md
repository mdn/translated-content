---
title: 시작하기
slug: Web/SVG/Tutorial/Getting_Started
---

{{SVGRef}}{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}

### 간단한 예제

다음의 코드와 같이 간단한 예제로 시작해보겠습니다.

```xml
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

코드를 복사하여 demo1.svg로 저장하고, Firefox 에서 실행해 봅시다. 아래와 같은 화면이 그려질 것입니다.(Firefox 사용자 : [링크](https://mdn.dev/archives/media/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![빨간색 배경 중앙에 녹색 원이 있습니다. 원 가운데에 있는 흰색 텍스트는 SVG입니다.](svgdemo1.png)

화면이 그려지는 과정은 다음과 같습니다.

1. SVG 루트 요소(Element)부터 시작합니다.

   - DTD기반의 SVG유효성 검사는 해결할 수 있는 것보다 많은 문제를 야기하기 때문에 (X)HTML로 알려진 Doctype 선언은 사용하지 않습니다.
   - 다른 유형의 유효성 검사를 위해 SVG버전을 식별하려면 항상 version과 baseProfile 속성(Attribute)을 사용해야 합니다.
   - XML 특수언어(dialect)로서 SVG는 (xmlsn 속성에서) 항상 네임 스페이스(namespace)를 올바르게 바인딩 해야합니다. 자세한 내용은[네임 스페이스 충돌 과정](/ko/docs/Web/SVG/Namespaces_Crash_Course) 페이지를 참조하십시오.

2. 전체 이미지 영역을 포함하는 사각형 \<rect />을 그려 배경을 빨간색으로 설정합니다.
3. 빨간색 직사각형의 중앙에 반경 80px의 녹색 원 \<circle />이 그려집니다
4. 텍스트 "SVG"가 그려집니다. 각 문자의 내부는 흰색으로 채워집니다. 텍스트는 중심점이 되고자 하는 지점에 앵커를 설정하여 배치됩니다.이 경우 중심점은 녹색 원의 중심에 일치해야합니다. 글꼴 크기와 수직 위치를 미세 조정하여 심미적으로 뛰어난 최종 결과를 얻을 수 있습니다.

### SVG 파일의 기본 속성

- 가장 먼저 주목해야 할 것은 요소를 렌더링하는 순서입니다. SVG 파일 전체에서 유효한 규칙은, 내용의 _위에서 부터 아래로_ 렌더링된다는 것입니다. 요소는 아래에 위치할수록 더 잘보이게 됩니다.
- 웹의 SVG 파일은 브라우저에 직접 표시되거나 HTML파일에 여러가지 방법을 통해 포함될 수 있습니다:

  - HTML이 XHTML이고 application/xhtml+xml 유형으로 제공되는 경우 SVG는 XML 소스에 직접 포함될 수 있습니다.
  - HTML이 HTML5이고 브라우저가 HTML5 브라우저를 준수하는 경우 SVG를 직접 삽입 할 수도 있습니다. 그러나 HTML5 사양을 준수하는 데 필요한 구문 변경이 있을 수 있습니다.
  - SVG 파일은 object 요소로 참조 할 수 있습니다:

    ```
            <object data="image.svg" type="image/svg+xml" />
    ```

  - 마찬가지로 iframe 요소로 사용할 수 있습니다:

    ```
            <iframe src="image.svg"></iframe>
    ```

  - 이론적으로, img 요소로 사용될 수 있습니다만 4.0 이전의 Firefox에서는 작동하지 않습니다.
  - 마지막으로 SVG는 JavaScript로 동적으로 생성되어 HTML DOM에 삽입 될 수 있습니다. 이는 SVG를 처리 할 수없는 브라우저에서 대체하여 구현할 수 있다는 장점이 있습니다.

  이 주제에 대해 깊이있게 다루기 위해 [이 문서](/ko/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction)를 참조하십시오.

- SVG에서 크기와 단위를 처리하는 방법에 대해서는 [다음 페이지](/ko/docs/Web/SVG/Tutorial/Positions)에서 설명 할 것입니다.

### SVG 파일 형식

SVG 파일은 두 가지 형태로 제공됩니다. 일반 SVG 파일은 SVG 마크업이 포함 된 간단한 텍스트 파일입니다. 이러한 파일의 권장 파일 확장자는 소문자로 ".svg"입니다.

일부 응용 프로그램 (예 : 지리적 응용 프로그램)에 사용될 때 매우 큰 크기의 SVG 파일이 있을 수 있기 때문에 SVG 사양에서는 gzip으로 압축 된 SVG 파일을 허용합니다. 이러한 파일의 권장 파일 확장자는 소문자로 ".svgz"입니다. 하지만 안타깝게도 gzip으로 압축 된 SVG 파일을 Microsoft IIS 서버에서 서비스 할 때 모든 SVG 가능 브라우저(사용자 에이전트)에서 안정적으로 작동하게 하려면 문제가 많습니다. 그리고 Firefox는 로컬 컴퓨터에서 gzip으로 압축 된 SVG를 로드 할 수 없습니다. 웹 서버에 게시 할 때를 제외하고는 gzip으로 압축 된 SVG를 피하십시오 (아래 참조).

### 웹서버 관련 한 마디

이제 기본 SVG 파일을 만드는 방법에 대해 알아봤으므로 다음 단계는 웹 서버에 업로드하는 것입니다. 이 단계에서는 몇 가지 문제가 있습니다. 보통, SVG 파일의 경우 서버는 다음과 같이 HTTP 헤더를 보내야합니다.

```
Content-Type: image/svg+xml
Vary: Accept-Encoding
```

gzip으로 압축 된 SVG 파일의 경우, 서버는 다음과 같이 HTTP 헤더를 보내야합니다.

```
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```

네트워크 모니터 패널이나 [web-sniffer.net](http://web-sniffer.net/)과 같은 사이트를 사용하여 서버가 SVG 파일과 함께 올바른 HTTP 헤더를 보내고 있는지 확인할 수 있습니다. SVG 파일 중 하나의 URL을 전송하고 HTTP 응답 헤더를 확인해 보십시오. 서버가 위의 값으로 헤더를 보내지 않으면 웹 호스트에 문의해야합니다. 서버에 SVG를 올바르게 구성하도록하는 데 문제가 있으면 직접 할 수있는 방법이있을 수 있습니다. 다양한 간단한 솔루션에 대해서는 w3.org의 [서버 구성 페이지](https://www.w3.org/services/svg-server/)를 참조하십시오.

SVG를 사용하는데 있어 서버 구성 오류가 SVG로드에 실패하는 가장 일반적인 이유이기에 확인하십시오. 서버가 SVG 파일을 제공하면서 올바른 헤더를 보내도록 설정되어 있지 않다면 Firefox는 SVG파일의 마크업을 텍스트 또는 인코딩된 의미없는 값으로 표시하거나 뷰어에게 열어 볼 응용 프로그램을 선택하도록 요청할 가능성이 큽니다.

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}
