---
title: "<geolocation>: 位置情報要素"
slug: Web/HTML/Reference/Elements/geolocation
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{SeeCompatTable}}

**`<geolocation>`** は [HTML](/ja/docs/Web/HTML) の要素で、ユーザーが位置情報をページと共有するために操作可能なコントロールを作成します。

提供するものは次の通りです。

- 直感的なブラウザーによって定義された UI。
- `geolocation` 機能に必要な権限を処理する手続き。
- 位置情報データをアクセスする機能、受信した位置情報データへの対応、および権限変更への対応のための API 機能。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `autolocate` {{experimental_inline}}
  - : 論理属性で、`true` に設定すると、事前にその権限が与えられている場合に限り、`<geolocation>` 要素がレンダリングされた時点でブラウザーが直ちに位置情報を取得することを指定します。`false` に設定すると、ユーザーがコントロールを起動するまで位置情報は取得されません。デフォルトは `false` です。

    事前に許可が与えられていない場合、この属性は効果がありません。

- `watch` {{experimental_inline}}
  - : 論理属性で、`true` に設定すると、ユーザーの端末の位置が変更されるたびにブラウザーが位置情報を取得することを指定します。`false` に設定すると、位置情報は一度だけ取得されます。デフォルトは `false` です。

## 解説

`<geolocation>` 要素は、位置情報の共有を宣言的に制御するブラウザー定義の機能を指定します。例えば Chrome では、このボタンには「地図のピン」アイコンと直感的なテキスト（「位置情報の使用」と英語コンテンツでは表示）が採用されています。

また、ユーザー権限の直感的な管理を実現します。
例えば Chrome では、ユーザーが以前に位置情報のアクセス許可を拒否した場合、または選択せずに許可ダイアログを閉じた場合、ボタンを再度押して選択を更新できます。
以前に許可を拒否した場合、以降のダイアログで「位置情報の共有を許可していません」と通知され、引き続き許可しないか、許可するかを尋ねられます。

`<geolocation>` 要素の重要な側面は、ユーザーの意識的な選択を反映し、ユーザーが気づかずに位置データを指定してしまう可能性のある操作をブロックすることです（詳細は[`<geolocation> のブロック`](#geolocation_のブロック)を参照）。

この要素の DOM API インターフェイスである {{domxref("HTMLGeolocationElement")}} は、取得された位置データ、現在の許可状態、およびデータ取得が失敗した場合のエラーにアクセスする機能を提供し、JavaScript ロジックを書かなければならない量を削減します。また、位置データの受信、許可状態の変更、および許可ダイアログに対するユーザーの操作に応じてコードを実行するためのイベントも利用可能です。

> [!NOTE]
> パフォーマンス上の理由から、1 ページあたり最大 3 つの `<geolocation>` 要素のみが許可されます。この制限を超えると、すべての `<geolocation>` 要素の機能が無効化されます。

### 位置情報 API との関係

[位置情報 API](/ja/docs/Web/API/Geolocation_API) は、位置データ処理のための古いもう一つの手段を提供しています。この API にはいくつか欠点があり、`<gelocation>`要素はその解決を目指しています。特に顕著なのは、データリクエストのためのUIと基盤となるロジックを毎回ゼロから実装する必要がある点、およびその権限を処理する際に直感的でない場合がある点です。

`<geolocation>` 要素は、バックグラウンドで位置情報 API の機能を使用します。デフォルトでは、ブラウザーは位置データを一度だけリクエストします。これは、{{domxref("Geolocation.getCurrentPosition()")}} メソッドが呼び出された場合と同様です。ただし、`watch` 属性が `true` に設定されている場合、ブラウザーは端末の位置が変化するたびにデータを更新します。これは、{{domxref("Geolocation.watchPosition()")}} が呼び出された場合と同様です。

データが正常に取得された場合、{{domxref("HTMLGeolocationElement.position")}} プロパティで利用可能となり、このプロパティには {{domxref("GeolocationPosition")}} オブジェクトが含まれます。データの取得に失敗した場合、エラー情報は {{domxref("HTMLGeolocationElement.error")}} プロパティで利用可能であり、このプロパティには {{domxref("GeolocationPositionError")}} オブジェクトが含まれています。

### ボタンの言語の設定

グローバル属性 [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) は、`<geolocation>` 要素がレンダリングされるテキストの言語を選択するために使用されます。つまり、`lang` 属性を `<geolocation>` 要素自体またはその親要素のいずれかに直接設定することで、ボタンラベルに使用する言語をブラウザーに指示できます。

適切な `lang` 属性が設定されていない場合、ブラウザーの優先言語設定が使用されます。

### 代替コンテンツを含める

`<geolocation>`要素の開始タグと終了タグの間に、サポートされていない場合に表示される代替コンテンツを記載することができます。例えば、「対応していません」というメッセージを記載することができます。

```html
<geolocation>
  <p>このブラウザは位置情報要素に対応していません。</p>
</geolocation>
```

しかし、現実的でより良い解決策としては、位置情報 API を使用して位置情報を取得する通常の {{htmlelement("button")}} 要素を記載する方法があります。

```html
<geolocation>
  <button id="fallback">位置情報を使用</button>
</geolocation>
```

### `<geolocation>` のブロック

`<geolocation>` 要素の設計における重要な考え方の一つは、位置情報を公開するというユーザーの意識的な選択を反映し、悪意のある攻撃者が[クリックジャッキング](/ja/docs/Web/Security/Attacks/Clickjacking)などを通じてユーザーを騙してこれを有効化させることを防止することです。このため、ブラウザーはレンダリングされたそれぞれの要素について、いわゆる**ブロッカーの理由**を記録します。

`<geolocation>` 要素に対してブロッカーが有効になっている場合、その要素は理由に応じて一時的または永続的に機能しなくなります（ブロックされます）。`<geolocation>` 要素がブロックされると、無効な要素であるといいます。{{domxref("HTMLGeolocationElement.isValid")}} プロパティを問い合わせることで、無効な要素かどうかを調べることができます。同時に、{{domxref("HTMLGeolocationElement.invalidReason")}} プロパティを介して無効な理由を返すこともできます。取りうる理由の完全なリストについては、そのページを参照してください。

### スタイルの制約

`<geolocation>` 要素には、適用可能な CSS スタイルに関するいくつかの制約があります。これらの制約の一部は基本的なアクセシビリティを確保するために設計されており、遵守されない場合、ボタンが無効化されます。また、特定のプロパティに対して特定の値または値の範囲を強制するものもあります。

以下の項に掲載されていないプロパティ、または以下の項に掲載された物理的プロパティと論理的に同等なプロパティは、`<geolocation>` 要素に設定された場合、無視されます。

#### アクセシビリティの制約

次の制約が遵守されない場合、レンダリングされた `<geolocation>` ボタンは無効化されます（つまり、押しても何の効果もありません）。

- {{cssxref("color")}} と {{cssxref("background-color")}} の間の[色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)比は、少なくとも 3:1 でなければならない。
- {{cssxref("font-size")}} は、`small` 値（キーワード値の場合）またはその計算値（その他の型の値の場合）よりも小さくしてはならない。

#### 値の制約

以下の CSS プロパティ値の制約が `<geolocation>` 要素に適用されます。`<geolocation>` 要素に対してこれらのプロパティを掲載されている制約外の値に設定しようとすると、値は制約値に等しく調整されます（ちょうどの値制約の場合）。または、計算された値の上限または下限に最も近い値に等しく調整されます（範囲の制約の場合）。

- {{cssxref("opacity")}}
  - : `1.0`
- {{cssxref("line-height")}}
  - : `normal`
- {{cssxref("white-space")}}
  - : `nowrap`
- {{cssxref("user-select")}}
  - : `none`
- {{cssxref("appearance")}}
  - : `auto`
- {{cssxref("box-sizing")}}
  - : `content-box`
- {{cssxref("vertical-align")}}
  - : `middle`
- {{cssxref("text-emphasis")}}
  - : `initial`
- {{cssxref("text-shadow")}}
  - : `initial`
- {{cssxref("outline-offset")}}
  - : `0` 以上。
- {{cssxref("font-weight")}}
  - : `200` 以上。
- {{cssxref("word-spacing")}}
  - : `0` 以上 `0.5em` 以下。
- {{cssxref("letter-spacing")}}
  - : `-0.05em` 以上 `0.2em` 以下。
- {{cssxref("letter-spacing")}}
  - : `-0.05em` 以上 `0.2em` 以下。
- {{cssxref("min-height")}}
  - : `1em` 以上。
- {{cssxref("max-height")}}
  - : `3em` 以下。`none` は受け入れられる値です。
- {{cssxref("min-width")}}
  - : `fit-content` の計算値以下。
- {{cssxref("border-width")}}
  - : `1em` 以下。

#### 複雑な制約

次の制約は単純な値制約よりも複雑なものです。

- ブロック方向のパディング
  - : {{cssxref("block-size")}} が `auto` に設定されている場合、{{cssxref("padding-block-start")}} および {{cssxref("padding-block-end")}} （および現在の[書字方向](/ja/docs/Web/CSS/Reference/Properties/writing-mode)に対応する物理的プロパティ）は最大 `1em` に制約され、かつ等しくなければならない。
- インライン方向のパディング
  - : {{cssxref("inline-size")}} が `auto` に設定されている場合、{{cssxref("padding-inline-start")}} および {{cssxref("padding-inline-end")}} （および現在の[書字方向](/ja/docs/Web/CSS/Reference/Properties/writing-mode)に対応する物理的プロパティ）は最大 `5em` に制約され、かつ等しくなければならない。

#### 通常設定が可能なプロパティ

以下の CSS プロパティは通常通り使用できます。

- {{cssxref("font-kerning")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("forced-color-adjust")}}
- {{cssxref("text-rendering")}}
- {{cssxref("align-self")}}
- {{cssxref("anchor-name")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}}
- {{cssxref("clear")}}
- {{cssxref("color-scheme")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}
- {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}}, {{cssxref("counter-set")}}
- {{cssxref("flex")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}, {{cssxref("flex-basis")}}
- {{cssxref("float")}}
- {{cssxref("height")}}
- {{cssxref("isolation")}}
- {{cssxref("justify-self")}}
- {{cssxref("left")}}
- {{cssxref("order")}}
- {{cssxref("orphans")}}
- {{cssxref("outline")}}, {{cssxref("outline-color")}}, {{cssxref("outline-style")}}
- {{cssxref("overflow-anchor")}}
- {{cssxref("overscroll-behavior")}}, {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}, {{cssxref("overscroll-behavior-x")}}, {{cssxref("overscroll-behavior-y")}}
- {{cssxref("page")}}
- {{cssxref("position")}}
- {{cssxref("position-anchor")}}
- {{cssxref("right")}}
- {{cssxref("scroll-margin")}}, {{cssxref("scroll-margin-top")}}, {{cssxref("scroll-margin-right")}}, {{cssxref("scroll-margin-bottom")}}, {{cssxref("scroll-margin-left")}}
- {{cssxref("scroll-padding")}}, {{cssxref("scroll-padding-top")}}, {{cssxref("scroll-padding-right")}}, {{cssxref("scroll-padding-bottom")}}, {{cssxref("scroll-padding-left")}}, {{cssxref("scroll-padding-inline-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-inline-end")}}, {{cssxref("scroll-padding-block-end")}}
- {{cssxref("text-spacing-trim")}}
- {{cssxref("text-transform")}}
- {{cssxref("top")}}
- {{cssxref("visibility")}}
- {{cssxref("x")}}
- {{cssxref("y")}}
- {{cssxref("ruby-position")}}
- {{cssxref("user-select")}}
- {{cssxref("width")}}
- {{cssxref("will-change")}}
- {{cssxref("z-index")}}

## アクセシビリティ

`<geolocation>` 要素には、[設定された言語](#ボタンの言語の設定)で記述されたアクセシブル名が付けられています。同時に、スクリーンリーダーによってボタンとして認識されるよう、[`role`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles) が [`button`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) に設定されています。

さらに、`<geolocation>` 要素の [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性はデフォルトで `0` が設定されているため、キーボードフォーカスに関しては実際の `<button>` 要素と同様に挙動を示します。

最後に、基本的なアクセシビリティ要件を適用するために`<geolocation>`要素に適用されるスタイル設定制約については、[アクセシビリティの制約](#アクセシビリティの制約)の節を参照してください。

## 例

### 基本的な使い方の例

この例では `<geolocation>` 要素を使用して現在の位置情報を取得し、ボタンの下にある {{htmlelement("p")}} 要素内に表示します。また非対応ブラウザー向けに通常の `<button>` による代替手段を実装し、位置データ取得を保証しています。

#### HTML

`<geolocation>` 要素を含み、その内部に `<button>` による代替処理を内包します。これは `<geolocation>` に対応していないブラウザーで表示されます。また位置情報データやエラーを出力するための `<p>` 要素も同時に配置します。

```html
<geolocation>
  <button id="fallback">位置情報を使用</button>
</geolocation>
<p id="output"></p>
```

#### JavaScript

このスクリプトでは、まず出力用 `<p>` 要素への参照を取得します。次に `typeof HTMLGeolocationElement === "function"` を検査し、`<geolocation>` 要素に対応しているかどうかを判定します。

- 対応している場合、まず `<geolocation>` 要素への参照を取得し、次に {{domxref("HTMLGeolocationElement.location_event", "location")}} イベントリスナーを追加します。
  ボタンが押されデータが取得されると、リスナーは（緯度、経度）座標を出力先の `<p>` に表示します（{{domxref("HTMLGeolocationElement.position", "position")}} プロパティから取得）。データ取得に失敗した場合はエラーメッセージを表示します {{domxref("HTMLGeolocationElement.error", "error")}} プロパティから取得）。
- 対応していない場合、代替の `<button>` 要素への参照を取得し、同じデータを取得して出力しますが、ボタンに `click` イベントリスナーを適用し、データを取得するために {{domxref("Geolocation.getCurrentPosition()")}} 呼び出しを使用している点が異なります。

```js
const outputElem = document.querySelector("#output");

if (typeof HTMLGeolocationElement === "function") {
  const geo = document.querySelector("geolocation");
  geo.addEventListener("location", () => {
    if (geo.position) {
      outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
    } else if (geo.error) {
      outputElem.textContent += `${geo.error.message}, `;
    }
  });
} else {
  const fallback = document.querySelector("#fallback");
  fallback.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        outputElem.textContent += `(${position.coords.latitude}, ${position.coords.longitude}), `;
      },
      (error) => {
        outputElem.textContent += `${error.message}, `;
      },
    );
  });
}
```

#### 結果

このコードを[ライブ実行](https://mdn.github.io/dom-examples/geolocation-element/basic-example/)（[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)）で確認できます。この例には、`<geolocation>` 要素に `watch` 属性を記載したバージョンも存在します。これにより、ユーザーの端末位置が変更されるたびに位置データを取得します（[ライブ実行](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) および[ソースコード](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)も参照してください）。

可能であれば、対応しているブラウザーと非対応のブラウザーでデモを表示し、`geolocation` を使用する際に許可または拒否することができる権限ダイアログのフローの違いを確認してください。

位置情報データを使用して地域のマップを作成する、より完全な例の詳細な手順については、 {{domxref("HTMLGeolocationElement")}} リファレンスページを参照してください。

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
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >,
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、対話型コンテンツ、知覚可能コンテンツ。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されているコンテンツ</th>
      <td>透過的な代替コンテンツに合うものすべて。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>なし。開始タグと終了タグは必須です。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>記述コンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLGeolocationElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLGeolocationElement")}}
- {{httpheader("Permissions-Policy/geolocation", "geolocation")}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [位置情報 API](/ja/docs/Web/API/Geolocation_API)
- [権限 API](/ja/docs/Web/API/Permissions_API)
- [`<geolocation>` HTML 要素の導入](https://developer.chrome.com/blog/geolocation-html-element) - developer.chrome.com (2026)
