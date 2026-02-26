---
title: "Window: open() メソッド"
short-title: open()
slug: Web/API/Window/open
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

**`open()`** は [`Window`](/ja/docs/Web/API/Window) インターフェイスのメソッドで、指定されたリソースを、新しい、または既存の指定された名前を持った閲覧コンテキスト (ウィンドウ、 [iframe](/ja/docs/Web/HTML/Reference/Elements/iframe)、タブ) に読み込みます。

## 構文

```js-nolint
open()
open(url)
open(url, target)
open(url, target, windowFeatures)
```

### 引数

- `url` {{optional_inline}}
  - : 文字列で、読み込むリソースの URL を示します。これは HTML ページ、画像ファイル、その他のブラウザーが対応しているリソースのパスまたは URL にすることができます。空文字列 (`""`) がこの時期数に指定されると、対象の閲覧コンテキストに空のページが開きます。

- `target` {{optional_inline}}
  - : ホワイトスペースのない文字列で、リソースを読み込むための閲覧コンテキストの[名前](/ja/docs/Web/API/Window/name)を指定します。その名前で既存のコンテキストが識別できない場合は、新しいコンテキストが指定された名前で作成されます。特殊な [`target` キーワード](/ja/docs/Web/HTML/Reference/Elements/a#target)である `_self`、`_blank`（既定値）、`_parent`、`_top`、`_unfencedTop` も利用することができます。 `_unfencedTop` は[フェンスフレーム](/ja/docs/Web/API/Fenced_frame_API)でのみ関連します。

    この名前は [`<a>`](/ja/docs/Web/HTML/Reference/Elements/a#target) や [`<form>`](/ja/docs/Web/HTML/Reference/Elements/form#target) 要素の `target` 属性として使うことができます。

- `windowFeatures` {{optional_inline}}
  - : `name=value` の形式、または論理特性の場合は `name` だけで、ウィンドウの特性をカンマで区切った文字列です。論理値は、`name`、`name=yes`、`name=true`、`name=n` （`n` は 0 以外の整数） のいずれかを使用して true に設定できます。これらの機能には、ウィンドウの既定のサイズと位置、最小ポップアップウィンドウを開くかどうかなどのオプションが含まれます。次のオプションに対応しています。
    - `attributionsrc` {{experimental_inline}}
      - : ブラウザーに、 {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを `open()` 呼び出しとともに送信するように指示します。この呼び出しは、ユーザーの操作から 5 秒以内に、[一時的な有効化](/ja/docs/Glossary/Transient_activation)（つまり、 `click` などのユーザー操作イベントハンドラー内）で行わなければなりません。サーバー側では、このヘッダーは、帰属ソースの登録を完了するために、レスポンスで {{httpheader("Attribution-Reporting-Register-Source")}} ヘッダーの送信を起動するために使用されます。

        さらに、 `open()` メソッドが完了すると、関連付けられたソースデータ （{{httpheader("Attribution-Reporting-Register-Source")}} レスポンスヘッダーで指定されたもの） を格納するために、ブラウザーも開始されます。

        詳しくは[帰属報告 API](/ja/docs/Web/API/Attribution_Reporting_API) を参照してください。

        > [!NOTE]
        > `open()` の呼び出しは、帰属トリガーの登録のために使用することはできません。

    - `popup`
      - : 既定では、`window.open` は新しいタブでページを開きます。 `popup` を true に設定すると、最小限のポップアップウィンドウを使用するように要求されます。ポップアップウィンドウに含まれる UI 機能はブラウザーが自動的に決定し、一般的にはアドレスバーのみを含みます。 `popup` が存在し、false に設定されている場合でも、新しいタブは開かれます。

        開いたウィンドウの UI 機能を制御するために使用されていた、いくつかの古い機能があります。現行のブラウザーでは、これらの機能はポップアップを要求する効果しかありません。`popup` が指定されておらず、`windowFeatures` に `noopener`、`noreferrer`、`attributionsrc` 以外の機能（認識されない機能も含む）のいずれかが含まれてる場合、次の条件のいずれかが当てはまる場合、ウィンドウはポップアップとして開かれます。
        - `location` と `toolbar` がともに false であるか存在しない
        - `menubar` が false であるか存在しない
        - `resizable` が false である
        - `scrollbars` が false であるか存在しない
        - `status` が false であるか存在しない

        それ以外の場合は、ウィンドウはタブとして開かれます。

    - `width` または `innerWidth`
      - : スクロールバーを含むコンテンツ領域の幅を指定します。必要最小値は 100 です。

    - `height` または `innerHeight`
      - : スクロールバーを含むコンテンツ領域の高さを指定します。必要最小値は 100 です。

    - `left` または `screenX`
      - : 新しいウィンドウを生成する、ユーザーのオペレーティングシステムによって定義される作業領域の左側からの距離をピクセル単位で指定します。

    - `top` または `screenY`
      - : 新しいウィンドウを生成する、ユーザーのオペレーティングシステムによって定義される作業領域の上側からの距離をピクセル単位で指定します。

    - `noopener`
      - : この特性が設定されている場合、新しいウィンドウは [`Window.opener`](/ja/docs/Web/API/Window/opener) を介して元のウィンドウにアクセスすることはできず、 `null` を返します。

        `noopener` を使用した場合、 `_top`, `_self`, `_parent` 以外の空でないターゲット名は、新しい閲覧コンテキストを開くかどうかの判断において、 `_blank` と同様に扱われます。

    - `noreferrer`
      - : この特性が設定されると、ブラウザーは [`Referer`](/ja/docs/Web/HTTP/Reference/Headers/Referer) ヘッダーを省略し、 `noopener` を true に設定します。詳しくは [`rel="noreferrer"`](/ja/docs/Web/HTML/Reference/Attributes/rel/noreferrer) を参照してください。

    [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) の値は、空文字列 (`""`) と同様に扱われます。

> [!NOTE]
> 要求する位置 (`top`, `left`)、要求する寸法 (`width`, `height`) の値が `windowFeatures` で指定された場合、ブラウザーのポップアップ全体がユーザーのオペレーティングシステムのアプリケーションの作業領域内に表示できないと、**修正されます**。言い換えれば、新しいポップアップのどの部分も、最初は画面外に配置することはできません。

### 返値

ブラウザーが新しい閲覧コンテキストを開くことができた場合は、 [`WindowProxy`](/ja/docs/Glossary/WindowProxy) オブジェクトを返します。返される参照は、[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)のセキュリティ要件に準拠する限り、新しいコンテキストのプロパティとメソッドにアクセスするために使用することができます。

HTTP の {{httpheader("Cross-Origin-Opener-Policy")}} ヘッダーが使用されており、文書ポリシーによって文書が新しい{{glossary("Browsing context","閲覧コンテキストグループ")}}で開かれる場合、開かれたウィンドウへの参照は切断され、返されるオブジェクトは開かれたウィンドウが閉じられていることを示します（{{domxref("Window.closed","closed")}} は `true` です）。

ブラウザーが新しい閲覧コンテキストを開くために失敗した場合、例えばブラウザーのポップアップブロッカーによってブロックされた場合などには `null` が返されます。

## 解説

[`Window`](/ja/docs/Web/API/Window) インターフェイスの `open()` メソッドは、 URL を引数として取り、識別する新規または既存のタブまたはウィンドウにリソースを読み込みます。 `target` 引数は、リソースを読み込むウィンドウやタブを決定します。また、 `windowFeatures` 引数は、最小限の UI 機能で新しいポップアップを開き、そのサイズや位置を制御するために使用することができます。

リモートの URL は、すぐには読み込まれません。 `window.open()` から返ったとき、ウィンドウには常に `about:blank` を含んでいます。 URL が実際に読み込まれるまでには猶予期間があり、現在のスクリプトブロックが実行を終えた後に開始されます。ウィンドウの生成と参照されるリソースの読み込みは、非同期に行われます。

現代のブラウザーは厳しいポップアップブロッカーポリシーを持っています。ポップアップウィンドウはユーザーの入力に直接反応して開く必要があり、 `Window.open()` を呼び出すたびに別個のジェスチャーイベントが要求されます。これにより、サイトがたくさんのウィンドウでユーザーをスパムするのを防ぐことができます。しかし、これはマルチウィンドウのアプリケーションでは課題となります。この制限をうまく回避するために、アプリケーションを次のように設計してください。

- 一度に複数の新しいウィンドウを開かないようにしてください。
- さまざまなページを表示するために既存のウィンドウを再利用してください。
- 複数のウィンドウを使用できるようにブラウザー設定を更新する方法をユーザーにアドバイスしてください。

## 例

### 新しいタブを開く

```js
window.open("https://www.mozilla.org/", "mozillaTab");
```

### ポップアップを開く

他にも以下の例では、 `popup` 特性を使用して、ポップアップを開く方法を示しています。

```js
window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
```

新しいポップアップの大きさと位置を操作することが可能です。

```js
const windowFeatures = "left=100,top=100,width=320,height=320";
const handle = window.open(
  "https://www.mozilla.org/",
  "mozillaWindow",
  windowFeatures,
);
if (!handle) {
  // ウィンドウを開くことが許可されなかった場合。
  // これは主にポップアップブロッカーによって発生します。
  // …
}
```

## プログレッシブエンハンスメント

JavaScript が無効または利用できない場合、`window.open()` が動作しないことがあります。この機能の有無だけに頼るのではなく、サイトやアプリケーションが機能するような代替策を提供してください。

### JavaScript が無効な場合の代替手段を提供する

JavaScript のサポートが無効または存在しない場合、ユーザーエージェントはそれに応じて副ウィンドウを作成するか、 `target` 属性の処理に従って参照されるリソースをレンダリングします。目標とアイデアは、参照されるリソースを開く方法をユーザーに提供してください (押し付けないでください) ということです。

#### HTML

```html
<a href="https://www.wikipedia.org/" target="OpenWikipediaWindow">
  Wikipedia, a free encyclopedia (opens in another, possibly already existing,
  tab)
</a>
```

#### JavaScript

```js
let windowObjectReference = null; // global variable
function openRequestedTab(url, windowName) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, windowName);
  } else {
    windowObjectReference.focus();
  }
}

const link = document.querySelector("a[target='OpenWikipediaWindow']");
link.addEventListener(
  "click",
  (event) => {
    openRequestedTab(link.href);
    event.preventDefault();
  },
  false,
);
```

上記のコードは、リンクがポップアップを開くことに関連するいくつかのユーザビリティの問題を解決しています。コード中の `event.preventDefault()` の目的は、リンクの既定値のアクションを取り消すことです。`click` のイベントリスナーが実行されれば、リンクの既定値のアクションを実行する必要はありません。しかし、ユーザーのブラウザーで JavaScript のサポートが無効または存在しない場合、 `click` のイベントリスナーは無視され、ブラウザーは `"WikipediaWindowName"` という名前を持つターゲットフレームまたはウィンドウに参照されたリソースを読み込む。フレームやウィンドウに `"WikipediaWindowName"` という名前がない場合、ブラウザーは新しいウィンドウを作成して `"WikipediaWindowName"` という名前を付けます。

> [!NOTE]
> `target` 属性についての詳細は、 [`<a>`](/ja/docs/Web/HTML/Reference/Elements/a#target) または [`<form>`](/ja/docs/Web/HTML/Reference/Elements/form#target) を参照してください。

### 既存のウィンドウを再利用して `target="_blank"` を防止する

target 属性の値として `"_blank"` を使用すると、ユーザーのデスクトップ上にリサイクルや再使用ができない新しい無名のウィンドウがいくつも作成されます。 `target` 属性に意味のある名前を提供し、ページ内で `target` 属性を再利用するようにしてください。そうすれば、別のリンクをクリックしたときに、すでに作成・表示されているウィンドウに参照先のリソースが読み込まれ（したがってユーザーの処理速度が速くなり）、第二ウィンドウを作成した当初の理由（およびユーザーのシステムリソース、費やした時間）が正当化されることになります。単一の `target` 属性値を使用し、それをリンクで再利用することで、第二ウィンドウを一つだけ作成して再利用するので、よりユーザーリソースに優しくなります。

ここでは、第二ウィンドウを開いて、他のリンクに再利用する例を紹介します。

#### HTML

```html
<p>
  <a href="https://www.wikipedia.org/" target="SingleSecondaryWindowName">
    Wikipedia, a free encyclopedia (opens in another, possibly already existing,
    tab)
  </a>
</p>
<p>
  <a
    href="https://support.mozilla.org/products/firefox"
    target="SingleSecondaryWindowName">
    Firefox FAQ (opens in another, possibly already existing, tab)
  </a>
</p>
```

#### JavaScript

```js
let windowObjectReference = null; // global variable
let previousURL; /* global variable that will store the
                    url currently in the secondary window */
function openRequestedSingleTab(url) {
  if (windowObjectReference === null || windowObjectReference.closed) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
  } else if (previousURL !== url) {
    windowObjectReference = window.open(url, "SingleSecondaryWindowName");
    /* if the resource to load is different,
       then we load it in the already opened secondary window and then
       we bring such window back on top/in front of its parent window. */
    windowObjectReference.focus();
  } else {
    windowObjectReference.focus();
  }
  previousURL = url;
  /* explanation: we store the current url in order to compare url
     in the event of another call of this function. */
}

const links = document.querySelectorAll(
  "a[target='SingleSecondaryWindowName']",
);
for (const link of links) {
  link.addEventListener(
    "click",
    (event) => {
      openRequestedSingleTab(link.href);
      event.preventDefault();
    },
    false,
  );
}
```

## 同一オリジンポリシー

新しく開いた閲覧コンテキストが同じ[オリジン](/ja/docs/Glossary/Origin)でない場合、開いたスクリプトは閲覧コンテキストの内容とやり取り（読み書き）をすることができません。

```js example-bad
// Script from example.com
const otherOriginContext = window.open("https://example.org");
// example.com and example.org are not the same origin

console.log(otherOriginContext.origin);
// DOMException: Permission denied to access property "origin" on cross-origin object
```

```js example-good
// Script from example.com
const sameOriginContext = window.open("https://example.com");
// This time, the new browsing context has the same origin

console.log(sameOriginContext.origin);
// https://example.com
```

詳しくは、[同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)の記事を参照してください。

## アクセシビリティの考慮

### window.open() への依存の回避

いくつかの理由で、 `window.open()` への依存を回避することをお勧めします。

- 最近のブラウザーは、ポップアップブロック機能を備えています。
- 最近のブラウザーはタブブラウジングを提供しており、タブブラウジングのユーザーはほとんどの状況で新しいウィンドウを開くよりも新しいタブを開くことを好みます。
- ユーザーは、ブラウザーに組み込まれた機能や拡張機能を使用して、リンクを新しいウィンドウで開くか、同じウィンドウで開くか、新しいタブで開くか、同じタブで開くか、バックグラウンドで開くかを選ぶことができます。 `window.open()` を使用し、特定の方法で開くことを強制すると、ユーザーを混乱させ、その習慣を無視することになります。
- ポップアップにはメニューツールバーがありませんが、新しいタブはブラウザーウィンドウのユーザーインターフェイスを使用します。したがって、多くのユーザーはインターフェイスが安定しているため、タブブラウジングを好みます。

### window.open() を HTML のインラインで使用しない

`<a href="#" onclick="window.open(…);">` や `<a href="javascript:window.open(…)" …>` は避けてください。

これらの偽の `href` 値は、リンクをコピー/ドラッグしたり、新しいタブ/ウィンドウでリンクを開いたり、ブックマークしたり、 JavaScript の読み込み中、エラー、無効のときに、予期しない動作を発生させます。また、画面の内側から読み取るリーダーなどの支援技術に対しても、誤った意味を伝えてしまいます。

必要であれば、代わりに [`<button>`](/ja/docs/Web/HTML/Reference/Elements/button) 要素を使用してください。一般的に、_本当の URL へのナビゲーションのためにのみリンクを使用する必要があります_。

### 副ウィンドウに案内するリンクを常に識別できるようにする

ユーザーのナビゲーションに役立つように、新しいウィンドウを開くリンクを識別できるようにしてください。

```html
<a target="WikipediaWindow" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

コンテキストが変わることをユーザーに警告する目的は、ユーザー側の混乱を最小限にするためです。現在のウィンドウを変更したり、新しいウィンドウをポップアップしたりすると、ユーザーはとても混乱します（ポップアップの場合、ツールバーには前のウィンドウに戻るための「前へ」ボタンが用意されていません）。

極端なコンテキストの変化が起こる前に、明示的に識別することができれば、ユーザーは先に進むかどうかを判断でき、変化に備えることができます。ユーザーは混乱したり方向感覚を失ったりしないだけでなく、経験豊富なユーザーであれば、そうしたリンクを開く方法（新しいウィンドウで開くかどうか、同じウィンドウ、新しいタブ、「バックグラウンド」かどうか）を適切に判断することができます。

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / WCAG を理解する、ガイドライン 3.2](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#ガイドライン_3.2_—_予測可能_ウェブページを予測可能な方法で表示して操作させる)
- [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `target` 属性のドキュメント:
  - [`<a>`](/ja/docs/Web/HTML/Reference/Elements/a#target)
  - [`<form>`](/ja/docs/Web/HTML/Reference/Elements/form#target)
- [`window.close()`](/ja/docs/Web/API/Window/close)
- [`window.closed`](/ja/docs/Web/API/Window/closed)
- [`window.focus()`](/ja/docs/Web/API/Window/focus)
- [`window.opener`](/ja/docs/Web/API/Window/opener)
- [`rel="opener"`](/ja/docs/Web/HTML/Reference/Attributes/rel#opener) および [`rel="noopener"`](/ja/docs/Web/HTML/Reference/Attributes/rel#noopener)
- [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)
