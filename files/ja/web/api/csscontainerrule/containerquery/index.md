---
title: "CSSContainerRule: containerQuery プロパティ"
short-title: containerQuery
slug: Web/API/CSSContainerRule/containerQuery
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("CSSOM") }}

**`containerQuery`** は {{domxref("CSSContainerRule")}} インターフェイスの読み取り専用プロパティで、コンテナーのサイズが変わったときに、関連する {{cssxref("@container")}} のスタイル設定が適用されるかどうかを判断するために評価されるコンテナー条件を表す文字列を返します。

例えば、下記の {{cssxref("@container")}} の `containerQuery` の値は `(min-width: 700px)` です。

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## 値

コンテナークエリーの入った文字列です。

ホワイトスペースの除去などの正規化が行われるため、値が元の文字列と同じになるとは限らないことに注意してください。

## 例

下記の例では、無名の {{cssxref("@container")}} ルールを定義し、関連する {{domxref("CSSContainerRule")}} のプロパティを表示します。
CSS は `@container` の例[コンテナーの大きさに基づいたスタイルの設定](/ja/docs/Web/CSS/Reference/At-rules/@container#コンテナーの大きさに基づいたスタイルの設定)と同じです。

```html hidden
<div id="log">
  <h2>ログ</h2>
  <ul></ul>
  <hr />
</div>
```

```js hidden
// ログリストへの参照を格納
const logList = document.querySelector("#log ul");
// 基盤ソースからデータをログ出力する関数
function log(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  logList.appendChild(listItem);
}
```

最初の HTML は `post` に含まれる `card` (`<div>`) の HTML を定義します。

```html
<div class="post">
  <div class="card">
    <h2>カードタイトル</h2>
    <p>カードの内容</p>
  </div>
</div>
```

コンテナー要素の CSS はコンテナーの型を指定します。
そして、 {{cssxref("@container")}} は、幅が 650px 未満の場合、格納する要素 "card" に新しい幅、フォントサイズ、背景色を適用します。

```html
<style id="example-styles">
  /* インラインサイズに基づくコンテナーコンテキスト */
  .post {
    container-type: inline-size;
  }

  /* コンテナーの幅が 650px より狭い場合にスタイルを設定 */
  @container (width < 650px) {
    .card {
      width: 50%;
      background-color: gray;
      font-size: 1em;
    }
  }
</style>
```

下記のコードでは、例に関連付けられている {{domxref("HTMLStyleElement")}} を id を使用して取得し、その `sheet` プロパティを使用して {{domxref("StyleSheet")}} を取得しています。
`StyleSheet` から、シートに追加した `cssRules` の設定を取得します。
上記の 2 つ目のルールとして `@container` を追加したので、 `cssRules` の 2 つ目の項目（インデックスが "1"）を使用して、関連する `CSSContainerRule` にアクセスすることができます。
最後に、コンテナー名とクエリーのプロパティをログ出力します。

```js
const exampleStylesheet = document.getElementById("example-styles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // a CSSContainerRule representing the container rule.
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
```

出力例を下記に示します。
ログ出力している文字列が掲載されています。
ページの幅が 650px に遷移すると、カードは背景を変更します。

{{EmbedLiveSample("Examples","100%","250px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS コンテナーモジュール](/ja/docs/Web/CSS/Guides/Containment)
- [コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
