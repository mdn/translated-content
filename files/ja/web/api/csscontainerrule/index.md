---
title: CSSContainerRule
slug: Web/API/CSSContainerRule
l10n:
  sourceCommit: 4b6b77bc36496c88dcbe477ec46da678a85d8e6e
---

{{ APIRef("CSSOM") }}

**`CSSContainerRule`** インターフェイスは、単一の CSS の {{cssxref("@container")}} ルールを表します。

この型のオブジェクトを使用して、 {{cssxref("@container")}} のクエリー条件と、コンテナー名が定義されている場合はコンテナー名を取得することができます。
なお、コンテナー名とクエリーを合わせて「条件テキスト」を定義し、 {{domxref("CSSConditionRule.conditionText")}} を使用して取得することができます。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, {{domxref("CSSRule")}} から継承したプロパティがあります。_

- {{domxref("CSSContainerRule.containerName")}} {{ReadOnlyInline}}
  - : {{cssxref("@container")}} の名前を表す文字列、または空文字列を返します。
- {{domxref("CSSContainerRule.containerQuery")}} {{ReadOnlyInline}}
  - : 関連する {{cssxref("@container")}} のスタイルが適用されるかどうかを決定するために評価される機能または「コンテナー条件」の設定を表す文字列を返します。

## インスタンスメソッド

_固有のメソッドはありません。祖先である {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, {{domxref("CSSRule")}} から継承したメソッドがあります。_

## 例

### 無名のコンテナールール

下記の例では、無名の {{cssxref("@container")}} ルールを定義し、関連する {{domxref("CSSContainerRule")}} のプロパティを表示します。
CSS は `@container` の例[コンテナーの大きさに基づいたスタイルの設定](/ja/docs/Web/CSS/@container#コンテナーの大きさに基づいたスタイルの設定)と同じです。

コードの最初の部分では、コンテナールールのプロパティをログ出力するためのリストと、プロパティの追加を簡単にするための JavaScript の `log()` メソッドを作成しています。

```html
<div id="log">
  <h2>ログ</h2>
  <ul></ul>
  <hr />
</div>
```

```js
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

この例の CSS を以下に示します。
対応する {{cssxref("@container")}} の例で記述されているように、コンテナー要素の CSS はコンテナーの型を指定します。
そして、 {{cssxref("@container")}} は、幅が 650px 未満の場合、新しい幅、フォントサイズ、背景色をカードに適用します。

```html
<style id="examplestyles">
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
上記の 2 つ目のルールとして `@container` を追加したので、関連する `CSSContainerRule` には `cssRules` の 2 つ目の項目、インデックス "1" を使用してアクセスすることができます。
最後に、`containerName`、`containerQuery`、`conditionText`（継承）プロパティをログ出力します。

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // コンテナールールを表す CSSContainerRule
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

> [!NOTE]
> この例のスタイルは、コードが正しいシートを探しやすいように、 id を持つインライン HTML の `style` 要素で定義しています。
> また、長さをインデックスにして（例えば `document.styleSheets[document.styleSheets.length-1]`）文書から各例の正しいシートを探すこともできますが、そうすると各例の正しいシートを動作するのが複雑になります。

出力例は下記の通りです。
ログのセクションには `containerName` という文字列が掲載されていますが、これは名前を定義していないので空文字列です。
`containerQuery` と `conditionText` の文字列もログ出力していますが、名前を定義していないので同じ値があります。
ページの幅が 650px に遷移すると、カードは背景を変更する必要があります。

{{EmbedLiveSample("Unnamed container rule","100%","300px")}}

### 名前付きコンテナーのルール

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
// ログリストへの参照を格納
const logList = document.querySelector("#log ul");
// 基盤ソースからデータをログ出力する関数
function log(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result;
  logList.appendChild(listItem);
}
```

最初に `post` の中の `card` (`<div>`) の HTML を定義します（この例ではログ出力コードを表示していません。）

```html
<div class="post">
  <div class="card">
    <h2>カードタイトル</h2>
    <p>カードの内容</p>
  </div>
</div>
```

{{cssxref("@container")}} で記述されているように、コンテナー要素の CSS はコンテナーの型を指定し、コンテナーの名前を指定することもできます。
カードには既定のフォントサイズをがあり、最小幅が 700px を超える場合、 `sidebar` という名前の `@container` で上書きされます。

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

シートとルールを取得するコードは前回の例とほとんど同じです。
唯一の違いは、この例では 3 つの CSS ルールがあるので、関連する `CSSContainerRule` を取得するために `cssRules` の 3 つ目の項目を取得することです。

```js
const exampleStylesheet = document.getElementById("examplestyles").sheet;
const exampleRules = exampleStylesheet.cssRules;
const containerRule = exampleRules[1]; // コンテナールールを表す CSSContainerRule
log(`CSSContainerRule.containerName: "${containerRule.containerName}"`);
log(`CSSContainerRule.containerQuery: "${containerRule.containerQuery}"`);
log(`CSSContainerRule.conditionText: "${containerRule.conditionText}"`);
```

出力例は下記の通りです。
ログ出力する部分には `containerName` と `containerQuery` の文字列が掲載されています。
`conditionText` もログ出力され、これら 2 つの文字列の結合子を示します。
ページの幅が 700px を超えると、カード部分のタイトルは 2 倍の大きさになるはずです。

{{EmbedLiveSample("Named container rule","100%","300px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("container-name")}}, {{cssxref("container-type")}}, {{cssxref("container")}} 一括指定プロパティ
- [CSS 拘束モジュール](/ja/docs/Web/CSS/CSS_containment)
- [コンテナークエリー](/ja/docs/Web/CSS/CSS_containment/Container_queries)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
