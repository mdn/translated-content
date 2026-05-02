---
title: HTML `<body>` 文書本体要素
short-title: <body>
slug: Web/HTML/Reference/Elements/body
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<body>`** は [HTML](/ja/docs/Web/HTML) の要素で、HTML 文書のコンテンツを表します。`<body>` 要素は文書中に一つだけ配置できます。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)、イベント属性、そして非推奨の属性があります。

### イベント属性

> [!NOTE]
> 下記のイベント属性名はそれぞれ、対応する {{domxref("Window")}} インターフェイスのイベントに結びついています。これらのイベントは [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を用いて待ち受けすることができます。これが `<body>` 要素に `onイベント名` 属性を追加する代わりになります。

- [`onafterprint`](/ja/docs/Web/API/Window/afterprint_event)
  - : ユーザーによる印刷データ作成直後に呼び出す関数です。
- [`onbeforeprint`](/ja/docs/Web/API/Window/beforeprint_event)
  - : ユーザーによるブラウザーへの印刷指示直後に呼び出す関数です。
- [`onbeforeunload`](/ja/docs/Web/API/Window/beforeunload_event)
  - : 文書のアンロードの直前に呼び出す関数です。
- [`onblur`](/ja/docs/Web/API/Window/blur_event)
  - : 文書からフォーカスが外されたときに呼び出す関数です。
- [`onerror`](/ja/docs/Web/API/Window/error_event)
  - : 文書を正常にロードできなかった際に呼び出す関数です。
- [`onfocus`](/ja/docs/Web/API/Window/focus_event)
  - : 文書にフォーカスが当たった際に呼び出す関数です。
- [`onhashchange`](/ja/docs/Web/API/Window/hashchange_event)
  - : 文書の現在のアドレスのフラグメント識別子 (ハッシュ文字 `'#'` から始まる部分) が変更された際に呼び出す関数です。
- [`onlanguagechange`](/ja/docs/Web/API/Window/languagechange_event)
  - : 言語が変更された際に呼び出す関数です。
- [`onload`](/ja/docs/Web/API/Window/load_event)
  - : 文書の読み込み完了時に呼び出す関数です。
- [`onmessage`](/ja/docs/Web/API/Window/message_event)
  - : 文書が API からメッセージを受信した際に呼び出す関数です。
- [`onmessageerror`](/ja/docs/Web/API/Window/messageerror_event)
  - : 文書がデシリアライズできないメッセージを受信したときに呼び出す関数です。
- [`onoffline`](/ja/docs/Web/API/Window/offline_event)
  - : ネットワークとの交信が不能になった際に呼び出す関数です。
- [`ononline`](/ja/docs/Web/API/Window/online_event)
  - : ネットワークとの交信が発生あるいは回復した際に呼び出す関数です。
- [`onpageswap`](/ja/docs/Web/API/Window/pageswap_event)
  - : 文書間を移動する際に、前回の文書がアンロードされようとしたときに呼び出す関数です。
- [`onpagehide`](/ja/docs/Web/API/Window/pagehide_event)
  - : セッションの履歴から別のページを表示する過程で、ブラウザーが現在のページを非表示にしたときに呼び出す関数です。
- [`onpagereveal`](/ja/docs/Web/API/Window/pagereveal_event)
  - : 新しい文書をネットワークから読み込んだとき、または文書をアクティブにした際に、文書が最初にレンダリングされたときに呼び出す関数です。
- [`onpageshow`](/ja/docs/Web/API/Window/pageshow_event)
  - : ナビゲーションによりブラウザーがウィンドウの文書を表示するときに呼び出す関数です。
- [`onpopstate`](/ja/docs/Web/API/Window/popstate_event)
  - : ユーザーによるセッション履歴のナビゲート時に呼び出す関数です。
- [`onresize`](/ja/docs/Web/API/Window/resize_event)
  - : 文書を表示するウィンドウがリサイズされた際に呼び出す関数です。
- [`onrejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event)
  - : JavaScript のプロミス ({{jsxref("Promise")}}) が遅れて処理されたときに呼び出す関数です。
- [`onstorage`](/ja/docs/Web/API/Window/storage_event)
  - : ストレージ領域が変化した際に呼び出す関数です。
- [`onunhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event)
  - : JavaScript の拒否ハンドラーを持たないプロミス ({{jsxref("Promise")}}) が拒否されたときに発生します。
- [`onunload`](/ja/docs/Web/API/Window/unload_event) {{deprecated_inline}}
  - : 文書からの離脱時に呼び出す関数です。

### 非推奨の属性

> [!WARNING]
> これらの非推奨の属性は使用しないでください。代わりに、各非推奨の属性とともに掲載されている CSS の代替を使用してください。

- `alink` {{deprecated_inline}}
  - : ハイパーリンクの選択時の文字色です。
    代わりに CSS の {{cssxref("color")}} プロパティを {{cssxref(":active")}} および {{cssxref(":focus")}} 擬似クラスで使用してください。
- `background` {{deprecated_inline}}
  - : 背景画像の URI です。
    代わりに CSS の {{cssxref("background-image")}} プロパティを使用してください。
- `bgcolor` {{deprecated_inline}}
  - : 文書の背景色です。
    代わりに CSS の {{cssxref("background-color")}} プロパティを使用してください。
- `bottommargin` {{deprecated_inline}}
  - : 無視されます。
- `leftmargin` {{deprecated_inline}}
  - : この body の左右のマージンです。
    代わりに CSS の {{cssxref("margin-left")}} および {{cssxref("margin-right")}} プロパティ（または論理的プロパティの {{cssxref("margin-inline")}}）を使用してください。
- `link` {{deprecated_inline}}
  - : 未訪問のハイパーリンクの文字色です。
    代わりに CSS の {{cssxref("color")}} プロパティを {{cssxref(":link")}} 擬似クラスで使用してください。
- `rightmargin` {{deprecated_inline}}
  - : 無視されます。
- `text` {{deprecated_inline}}
  - : 基本文字色です。
    代わりに CSS の {{cssxref("color")}} プロパティを使用してください。
- `topmargin` {{deprecated_inline}}
  - : この body の上下のマージンです。
    代わりに CSS の {{cssxref("margin-top")}} および {{cssxref("margin-bottom")}} プロパティ（または論理的プロパティの {{cssxref("margin-block")}}）を使用してください。
- `vlink` {{deprecated_inline}}
  - : 訪問済みのハイパーリンクの文字色です。
    代わりに CSS の {{cssxref("color")}} プロパティを {{cssxref(":visited")}} 擬似クラスで使用してください。

## 例

```html-nolint
<html lang="ja">
  <head>
    <title>文書タイトル</title>
  </head>
  <body>
    <p>
      <code>&lt;body&gt;</code> は HTML の要素で、HTML 文書のコンテンツを表します。<code>&lt;body&gt;</code> は文書中に一つだけ配置できます。
    </p>
  </body>
</html>
```

### 結果

{{EmbedLiveSample('Example')}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        なし。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>
        開始タグは、内容の先頭が空白文字、コメント、 {{HTMLElement("script")}} 要素、 {{HTMLElement("style")}} 要素でない場合は省略可能です。終了タグは、 <code>&#x3C;body></code> 要素に内容または開始タグがあり、かつ、直後のノードがコメントでない場合は省略可能です。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        {{HTMLElement("html")}} 要素の子要素でなければなりません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <code
          ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            <code>&#x3C;body></code> 要素は {{domxref("HTMLBodyElement")}} インターフェイスを提供します。
          </li>
          <li>
            <code>&#x3C;body></code> 要素は {{domxref("document.body")}} プロパティからアクセス可能です。
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
- [イベント処理の概要](/ja/docs/Web/API/Document_Object_Model/Events#イベントハンドラーの登録)
