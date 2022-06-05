---
title: '<applet>: 埋め込み Java アプレット要素'
slug: Web/HTML/Element/applet
tags:
  - 要素
  - HTML
  - Java
  - 非推奨
  - リファレンス
  - ウェブ
  - applet
browser-compat: html.elements.applet
translation_of: Web/HTML/Element/applet
---

{{HTMLRef}}{{deprecated_header}}

**HTML の アプレット要素** (**`<applet>`**) は文書に Java アプレットを埋め込みます。この要素は {{HTMLElement("object")}} にとって代わり、廃止されました。

ウェブでの Java アプレットの使用は非推奨です。多くのブラウザーが、すでに Java プラグインを含むプラグイン使用の対応をやめています。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#flow_content">フローコンテンツ</a>,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#phrasing_content">記述コンテンツ</a>,
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#embedded_content">埋め込みコンテンツ</a>,
        対話型コンテンツ,
        知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
      0 個以上の {{HTMLElement("param")}} 要素、その後で <a href="/ja/docs/Web/Guide/HTML/Content_categories#transparent_content_model">透過的コンテンツ</a>
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/Guide/HTML/Content_categories#embedded_content">埋め込みコンテンツ</a>を受け付けるすべての要素</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLAppletElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

- {{HTMLAttrDef("align")}}
  - : この属性は、周囲にあるコンテンツとの関係として、ページ上でアプレットを配置するために使用します。 HTML 4.01 仕様では `bottom`, `left`, `middle`, `right`, and `top` という値を定義していましたが、 Microsoft および Netscape は `absbottom`, `absmiddle`, `baseline`, `center`, `texttop` にも対応していました。
- {{HTMLAttrDef("alt")}}
  - : この属性は、 Java に対応していないブラウザーが代わりに表示する説明文を与えます。ページ作者は、 `<applet>` 要素に囲まれた内容物も代替テキストとして表示される可能性があることにも留意すべきです。
- {{HTMLAttrDef("archive")}}
  - : この属性は、アーカイブ化あるいは圧縮されたバージョンのアプレットとアプレットに関連づけられた class ファイルを参照するもので、これらはダウンロード時間の削減に役立ちます。
- {{HTMLAttrDef("code")}}
  - : この属性は、読み込んで実行するアプレットの class ファイルの URL を指定します。アプレットのファイル名は .class 拡張子で識別します。code で指定した URL は、`codebase` 属性に相対的となるでしょう。
- {{HTMLAttrDef("codebase")}}
  - : この属性は、code 属性で参照するアプレットの .class ファイルを保存しているディレクトリの絶対または相対 URL を与えます。
- {{HTMLAttrDef("datafld")}}
  - : この属性は Internet Explorer 4 以上が対応しており、バインドされたデータを提供するデータソースオブジェクトの列名を指定します。この属性は、Java アプレットに渡すさまざまな {{HTMLElement("param")}} 要素を指定するために使用できました。
- {{HTMLAttrDef("datasrc")}}
  - : `datafld` と同様に、この属性は Internet Explorer 4 のデータバインディングで使用します。これは、アプレットに関連づけられた {{HTMLElement("param")}} 要素にバインドしたデータを提供するデータソースオブジェクトの ID を示します。
- {{HTMLAttrDef("height")}}
  - : この属性は、アプレットが必要とする高さをピクセル数で指定します。
- {{HTMLAttrDef("hspace")}}
  - : この属性は、アプレットの両側に確保する水平方向の追加スペースを指定します。
- {{HTMLAttrDef("mayscript")}}
  - : Netscape の実装ではこの属性で、ドキュメント内に埋め込んだスクリプト言語のプログラムでアプレットにアクセスできます。
- {{HTMLAttrDef("name")}}
  - : この属性はアプレットを他のリソース、特にスクリプトから識別できるようにするため、アプレットに名前をつけます。
- {{HTMLAttrDef("object")}}
  - : この属性は、アプレットのシリアライズ表現の URL を指定します。
- {{HTMLAttrDef("src")}}
  - : この属性は Internet Explorer 4 以上向けに定義されたもので、アプレットに関係するファイルの URL を指定します。意味や使用法は不明瞭であり、また HTML 標準に含まれていません。
- {{HTMLAttrDef("vspace")}}
  - : この属性は、アプレットの上下に確保する垂直方向の追加スペースを指定します。
- {{HTMLAttrDef("width")}}
  - : この属性は、アプレットが必要とする幅をピクセル数で指定します。

## 例

<h3 id="HTML">HTML</h3>

```html
<applet code="game.class" align="left" archive="game.zip" height="250" width="350">
  <param name="difficulty" value="easy">
  <b>Sorry, you need Java to play this game.</b>
</applet>
```

{{EmbedLiveSample("Example", "100%", 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
