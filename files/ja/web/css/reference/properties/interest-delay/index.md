---
title: interest-delay
slug: Web/CSS/Reference/Properties/interest-delay
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

**`interest-delay`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ユーザーが[関心インボーカー](/ja/docs/Web/API/Popover_API/Using_interest_invokers)要素にあるものに関心を示してから {{domxref("HTMLElement.interest_event", "interest")}} イベントが発生するまで、およびユーザーが関心を失ってから {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} イベントが発生するまでの待ち時間を指定します。

## 構成要素のプロパティ

`interest-delay` プロパティは、以下のプロパティの一括指定です。

- {{cssxref("interest-delay-start")}}
- {{cssxref("interest-delay-end")}}

## 構文

```css
/* 単一の値 */
interest-delay: normal;
interest-delay: 2s;
interest-delay: 250ms;

/* 2 つの値 */
interest-delay: 1s normal;
interest-delay: 0s 500ms;

/* グローバル値 */
interest-delay: inherit;
interest-delay: initial;
interest-delay: revert;
interest-delay: revert-layer;
interest-delay: unset;
```

### 値

`interest-delay` プロパティは 1 つまたは 2 つの値を受け入れます。1 つ目の値は、関心を表示させるまでの遅延を設定します (`interest-delay-start`)。2 つ目（指定された場合）は、関心が失われるまでの遅延を設定します (`interest-delay-end`)。それぞれの値はキーワード `normal` または {{cssxref("&lt;time&gt;")}} 値のどちらかです。

- `normal`
  - : 待ち時間をブラウザーのデフォルトの待ち時間に設定します。これが初期値です。
- {{cssxref("&lt;time&gt;")}}
  - : 待ち時間を特定の時間に設定します。値は正の値でなければならず、そうでない場合、プロパティは無効になります。

## 解説

{{htmlelement("a")}} や {{htmlelement("button")}} などのコントロール要素は、[関心インボーカー](/ja/docs/Web/API/Popover_API/Using_interest_invokers)要素として設定することができ、その場合は要素に [`interestfor`](/ja/docs/Web/HTML/Reference/Elements/a#interestfor) 属性を付与します。その値は対象要素の `id` である必要があります。この関係が確立されると、ユーザーが呼び出し元に対して「関心を示す」操作（例えばホバーやフォーカス）を行った際に、対象要素に影響が及びます。一般的な使用例としては、ホバーやフォーカス時にポップオーバーを表示させることが挙げられます。ユーザーが「関心を失う」と、その効果は停止します。

ユーザーが示したり失ったりしたとき、関連付けられた効果は即座に始まったり止まったりしません。ブラウザーは短い待ち時間を追加します（ブラウザーによって異なることがあります）。これにより、例えばリンクにホバーした際に[プレビューポップオーバー](/ja/docs/Web/API/Popover_API/Using_interest_invokers#using_interest_invokers_for_creating_preview_popovers)が即座に現れることを防ぎます。リンクが密集したページでは、これが煩わしく、わずらわしいものとなる可能性があり、注意が散漫になる可能性があります。

`interest-delay` プロパティを使用することで、これらの待ち時間をカスタマイズすることができます。`interest-delay` を使用することで、関心の効果が始まる前（{{cssxref("interest-delay-start")}} プロパティで指定）および終わる前（{{cssxref("interest-delay-end")}} プロパティで指定）の待ち時間を、単一の宣言で指定します。

`interest-delay` プロパティには、1つまたは2つの値が指定可能です。これらの値は、ブラウザーのデフォルトの待ち時間を設定するキーワード `normal`、または独自の待ち時間を設定する {{cssxref("&lt;time&gt;")}} 値となります。
単一の値が指定された場合、それは {{cssxref("interest-delay-start")}} と {{cssxref("interest-delay-end")}} の両方に適用されます。2 つの値が指定された場合、まず 1 つ目の値が {{cssxref("interest-delay-start")}} を設定し、2 つ目の値が {{cssxref("interest-delay-end")}} を設定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `interest-delay` 効果の作成

この例では、`interest-delay` が関心インボーカーの動作にどのように影響するかを示します。

#### HTML

このマークアップには、{{htmlelement("button")}}、{{htmlelement("p")}}、{{htmlelement("input")}} の `checkbox` 型が含まれています。この `<button>` 要素を関心インボーカーとして指定するには、`interestfor` 属性を付与し、その値が `<p>` 要素の `id` と一致するよう指定します。これにより、段落が対象要素となります。段落は [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を付与することでポップオーバーに変換され、初期状態では非表示になります。

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">ボタン</button>
<p id="mypopover" popover>ホバーのツールチップ</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    <code>interest-delay</code> を <code>1s 2s</code> に適用
  </label>
</form>
```

#### CSS

CSS では、`.delay` ルールを定義し、`delay` クラスが設定されたあらゆる関心インボーカーに `interest-delay` 値 `1s 2s` を適用します。このクラスは、JavaScript を使用してチェックボックスがチェックされた際に `<button>` に設定します。

```css live-sample___interest-invoker-delay
.delay {
  interest-delay: 1s 2s;
}
```

#### JavaScript

スクリプト内で `<button>` とチェックボックスへの参照を取得し、チェックボックスの値が変更されるたびに（チェックされた時または外された時）、`<button>` の `delay` クラスを切り替えるイベントリスナーを作成します。

```js live-sample___interest-invoker-delay
const btn = document.querySelector("button");
const checkbox = document.querySelector("input");
checkbox.addEventListener("change", () => {
  btn.classList.toggle("delay");
});
```

#### 結果

これは次のようにレンダリングされます。

{{embedlivesample("interest-invoker-delay", "100%", "100")}}

ボタンに（ホバーやフォーカスなどで）関心を示してから関心を失う操作を行い、ポップオーバーの表示と非表示を確認してみてください。既定では、ポップオーバーはとても短い待ち時間の後、表示・非表示されます。

これでチェックボックスをオンにして、同じ措置をもう一度試してください。この時点では、関心が表示された後に `1s` の待ち時間の後にポップオーバーが現れ、関心を失った後に `2s` の待ち時間の後に非表示になるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay-end")}}
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)モジュール
