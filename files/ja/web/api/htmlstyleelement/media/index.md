---
title: HTMLStyleElement.media
slug: Web/API/HTMLStyleElement/media
---

{{APIRef("HTML DOM")}}

**`HTMLStyleElement.media`** プロパティは、スタイル情報の対象と想定するメディアを指定します。

## 構文

```
medium = style.media
style.media = medium
```

### 引数

- `medium` は単一のメディア又はコンマで区切られたリストを記述する文字列です。

## 例

```html
<!doctype html>
<html>
<head>

<link id="LinkedStyle" rel="stylesheet" href="document.css" type="text/css" media="screen" />
<style id="InlineStyle" rel="stylesheet" type="text/css" media="screen, print">
p { color: blue; }
</style>
</head>
<body>

<script>
alert('LinkedStyle: ' + document.getElementById('LinkedStyle').media); // 'screen'
alert('InlineStyle: ' + document.getElementById('InlineStyle').media); // 'screen, print'
</script>

</body>
</html>
```

## 仕様書

| 仕様書                                                                                                       | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', "semantics.html#attr-style-media", "HTMLStyleElement")}} | {{Spec2('HTML WHATWG')}} |          |
| {{SpecName('HTML5.1', "semantics.html#attr-style-media", "HTMLStyleElement")}}     | {{Spec2('HTML5.1')}}     |          |
| {{SpecName('HTML5 W3C', "semantics.html#attr-style-media", "HTMLStyleElement")}} | {{Spec2('HTML5 W3C')}}     |          |
| {{SpecName('DOM2 HTML', 'html.html#ID-16428977', 'HTMLStyleElement')}}                 | {{Spec2('DOM2 HTML')}}     |          |
| {{SpecName('DOM1', 'level-one-html.html#ID-16428977', 'HTMLStyleElement')}}         | {{Spec2('DOM1')}}         | 初回定義 |

## ブラウザーの互換性

{{Compat("api.HTMLStyleElement.media")}}
