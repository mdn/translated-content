---
title: "@font-face"
slug: Web/CSS/@font-face
---

{{CSSRef}}

## 요약(Summary)

[CSS](/en/CSS) [at-rule](/en/CSS/At-rule) 인 `@font-face` 를 사용하여 웹페이지의 텍스트에 온라인폰트(online fonts)를 적용할 수 있다. `@font-face` 를 사용하여 웹페이지 제작자가 원하는 폰트를 사용할 수 있게함으로써, 컴퓨터에 설치된 폰트만을 사용해야했던 제약이 없어지게되었다. `@font-face` at-rule 은 CSS의 top-level에서 뿐 아니라, [CSS conditional-group at-rule](/en/CSS/At-rule#Conditional_Group_Rules) 안에서도 사용될 수도 있다.

## 문법(Syntax)

```
@font-face {
  font-family: <a-remote-font-name>;
  src: <source> [,<source>]*;
  [font-weight: <weight>];
  [font-style: <style>];
}
```

### 속성값(Values)

- `<a-remote-font-name>`
  - : font 속성에서 폰트명(font face)으로 지정될 이름을 설정한다.
- `<source>`
  - : 원격 폰트(remote font) 파일의 위치를 나타내는 URL 값을 지정하거나, 사용자 컴퓨터에 설치된 폰트명을 `local("Font Name")`형식으로 지정하는 속성이다.
- `<weight>`
  - [: 폰트의 굵기(font weight)](/en/CSS/font-weight) 값.
- `<style>`
  - [: 폰트 스타일(font style)](/en/CSS/font-style) 값.

사용자의 로컬환경(local computer)에 설치된 폰트는 `local()` 이라는 구문을 사용하여 지정이 가능하다. 만약 해당 폰트를 찾지못한다면, 다른 대체 폰트를 찾을때까지 폰트를 검색작업을 계속 할 것이다.

## 예제(Examples)

아래는 다운로드하여 사용가능한 폰트를 설정하는 간단한 예제이며, document의 전체 body 영역에 폰트가 적용된다.

```
<html>
<head>
  <title>Web Font Sample</title>
  <style type="text/css" media="screen, print">
    @font-face {
      font-family: "Bitstream Vera Serif Bold";
      src: url("https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf");
    }

    body { font-family: "Bitstream Vera Serif Bold", serif }
  </style>
</head>
<body>
  This is Bitstream Vera Serif Bold.
</body>
</html>
```

실행 결과는 다음과 같다.
{{EmbedGHLiveSample("css-examples/web-fonts/basic-web-font.html", '100%', '100')}}

아래 예제에서는 로컬에 설치된 "Helvetica Neue Bold" 폰트가 사용된다. 만약 해당 폰트가 설치되어 있지 않다면(다른 2개의 폰트를 적용하기 위한 시도를 하고), 다운로드 가능한 "MgOpenModernaBold.ttf" 폰트가 대신 사용된다.

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

## 주의사항(Notes)

- Gecko에서는, 동일 도메인 제한(same domain restriction)을 피하기 위해 [HTTP access controls](/ko/docs/HTTP_access_control) 을 사용하지 않는한, 웹폰트(web fonts)의 사용시에는 동일 도메인 제한이 적용된다(폰트 파일은 폰트가 사용되는 페이지와 동일한 도메인상에 존재해야 함).
- > **참고:** **주의사항:** TrueType, OpenType, Web Open File(WOFF) 폰트에 대한 MIME타입이 정의되지 않았기 때문에, 파일에 적용될 MIME 타입에 대해서는 고려하지 않아도 된다.
- Gecko에서는 웹폰트(web font)가 사용된 페이지를 표시할 때는 웹폰트가 다운로드 되는 동안 사용자의 컴퓨터에 이미 설치되어 있어 즉시 사용가능한 폰트(CSS fallback font)를 사용하여 텍스트를 표시한다. 각각의 웹폰트의 다운로드가 완료되면 Gecko는 해당 텍스트의 폰트를 교체한다. 이러한 과정은 사용자가 웹페이지 내의 텍스트를 좀 더 빨리 읽게끔 도와준다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고자료(See also)

- [About WOFF](/ko/docs/Web/Guide/WOFF)
- [FontSquirrel @font-face generator](http://www.fontsquirrel.com/fontface/generator)
- [Beautiful fonts with @font-face](http://hacks.mozilla.org/2009/06/beautiful-fonts-with-font-face/)
- [Open Font Library](http://openfontlibrary.org/)
- [Microsoft Developer Network (MSDN) @font-face reference](<http://msdn.microsoft.com/en-us/library/ms530757(VS.85).aspx>)
- [When can I use WOFF?](http://caniuse.com/woff)
- [When can I use SVG Fonts?](http://caniuse.com/svg-fonts)
