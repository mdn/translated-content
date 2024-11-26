---
title: "CSSContainerRule: containerName プロパティ"
short-title: containerName
slug: Web/API/CSSContainerRule/containerName
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{ APIRef("CSSOM") }}

**`containerName`** は {{domxref("CSSContainerRule")}} インターフェイスの読み取り専用プロパティで、関連づけられた CSS の {{cssxref("@container")}} のコンテナー名を表します。

例えば、下記の {{cssxref("@container")}} の `containerName` の値は `sidebar` です。

```css
@container sidebar (min-width: 700px) {
  .card {
    font-size: 2em;
  }
}
```

## 値

この {{domxref("CSSContainerRule")}} に関連付けられた {{cssxref("@container")}} の [`container-name`](/ja/docs/Web/CSS/container-name) を格納した文字列。
もし `@container` が[名前付き](/ja/docs/Web/API/CSSContainerRule#unnamed_container_rule)でない場合、この関数は空文字列 (`""`) を返します。

## 例

下記の例では、名前付き {{cssxref("@container")}} ルールを定義し、関連する {{domxref("CSSContainerRule")}} のプロパティを表示しています。
CSS は `@container` の例、[名前付きコンテナーコンテキストの作成](/ja/docs/Web/CSS/@container#名前付きコンテナーコンテキストの作成)にあるものととてもよく似ています。

```html hidden
<div id="log">
  <h2>ログ</h2>
  <ul></ul>
  <hr />
</div>
```

```js hidden
// log リストへの参照を格納
const logList = document.querySelector("#log ul");
// ソースからデータをログ出力する関数
function log(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  logList.appendChild(listItem);
}
```

まず、 HTML で `card` (`<div>`) を `post` の中に定義します。

```html
<div class="post">
  <div class="card">
    <h2>カードタイトル</h2>
    <p>カードの内容</p>
  </div>
</div>
```

コンテナー要素の CSS はコンテナーの種類を指定し、名前を指定することもできます。
カードには既定のフォントサイズがあり、 `sidebar` という名前の `@container` が、最小幅が 700px を超える場合に上書きされます。

```html
<style id="examplestyles">
  .post {
    container-type: inline-size;
    container-name: sidebar;
  }

  /* カードタイトルの既定の見出しスタイル */
  .card h2 {
    font-size: 1em;
  }

  @container sidebar (min-width: 700px) {
    .card {
      font-size: 2em;
    }
  }
</style>
```

以下のコードでは、例に関連付けられた {{domxref("HTMLStyleElement")}} を `id` を使って取得し、その `sheet` プロパティを使って {{domxref("StyleSheet")}} を取得しています。
`StyleSheet` からシートに追加された `cssRules` のセットを取得します。
上記の 3 番目のルールとして `@container` を追加したので、関連する `CSSContainerRule` にアクセスするには `cssRules` の 3 番目の項目（インデックス "2"）を使います。
最後に、コンテナー名とクエリーのプロパティをログに記録します（ログを記録するコードは示していません）。

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[2]; // CSSContainerRule で、コンテナールールを表す
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
```

出力例を以下に示します。
ログ部分にコンテナー名の文字列が表示されます。
カード部分のタイトルは、ページの幅が 700px を超えると 2 倍の大きさになるはずです。

{{EmbedLiveSample("Examples","100%","250px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("container")}} 一括指定プロパティ
- [CSS 拘束モジュール](/ja/docs/Web/CSS/CSS_containment)
- [コンテナークエリー](/ja/docs/Web/CSS/CSS_containment/Container_queries)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
