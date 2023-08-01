---
title: Vendor Prefix (ベンダー接頭辞)
slug: Glossary/Vendor_Prefix
---

ブラウザーベンダー (提供元) は、時に試験的または非標準な CSS プロパティおよび JavaScript API に接頭辞を追加することがあります。これにより、開発者は標準化プロセスの中で、理論上は、ウェブ開発者のコードを壊すことなく新しいアイデアを試すことができます。開発者は、ブラウザーの振る舞いが標準化されるまで、接頭辞を外したプロパティを導入するのを待つべきです。

> **メモ:** ブラウザーベンダーは、実験的な機能にベンダー接頭辞をつけることをやめるようになってきています。ウェブ開発者は、実験的な機能であるにもかかわらず、実運用のウェブサイトで使用し続けてきました。これはブラウザーベンダーが互換性を維持して、新しい機能を導入することを困難にしてしまいました。これはシェアの小さなブラウザーにとっても有害で、有名なウェブサイトを読み込むために他のブラウザーの接頭辞を追加せざるを得ない結果になりました。
>
> 最近は、実験的な機能をユーザーが制御するフラグや設定によって隠して追加するようにし、より早く安定状態になるようにより小さな仕様を作成する傾向があります。

## CSS の接頭辞

主要なブラウザーは、以下の接頭辞を使用しています。

- `-webkit-` (Chrome, Safari, 新しいバージョンの Opera, ほぼすべての iOS ブラウザー (Firefox for iOS を含む)。基本的に WebKit ベースのブラウザーすべて)
- `-moz-` (Firefox)
- `-o-` (WebKit 導入前の古い Opera)
- `-ms-` (Internet Explorer と Microsoft Edge)

使用例:

```
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

## API の接頭辞

歴史的に、ベンダーは実験的な API にも接頭辞を使用してきています。インターフェイス全体が実験的な場合は、インターフェイス名に接頭辞が付きます (しかし、その中のプロパティやメソッドには付きません)。標準化されたインターフェイスに実験的なプロパティやメソッドが追加された場合は、それぞれのメソッドやプロパティに接頭辞が付きます。

### インターフェイスの接頭辞

インターフェイス名の接頭辞は大文字です。

- `WebKit` (Chrome、Safari、新しいバージョンの Opera、ほぼすべての iOS ブラウザー (Firefox for iOS を含む)。基本的に WebKit ベースのブラウザーすべて)
- `Moz` (Firefox)
- `O` (WebKit 導入前の古い Opera)
- `MS` (Internet Explorer と Microsoft Edge)

### プロパティとメソッドの接頭辞

プロパティやメソッドの接頭辞は小文字です。

- `webkit` (Chrome、Safari、新しいバージョンの Opera、ほぼすべての iOS ブラウザー (Firefox for iOS を含む)。基本的に WebKit ベースのブラウザーすべて)
- `moz` (Firefox)
- `o` (WebKit 導入前の古い Opera)
- `ms` (Internet Explorer と Microsoft Edge)

使用例:

```js
var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

## 理解を深める

### 一般知識

- Wikipedia の [Vendor prefix](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) の記事　【訳注：ウィキペディア日本語版には該当する節がありません】

{{QuickLinksWithSubpages("/ja/docs/Glossary")}}
