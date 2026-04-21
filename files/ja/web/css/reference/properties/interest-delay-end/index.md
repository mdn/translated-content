---
title: interest-delay-end
slug: Web/CSS/Reference/Properties/interest-delay-end
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

**`interest-delay-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ユーザーが[関心インボーカー](/ja/docs/Web/API/Popover_API/Using_interest_invokers)要素にあるものに関心を失ってから {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} イベントが発生するまでの待ち時間を指定します。

`interest-delay-end` および {{cssxref("interest-delay-start")}} プロパティは、{{cssxref("interest-delay")}} 一括指定を使用して両方とも設定することができます。

## 構文

```css
/* キーワードまたはカスタム値 */
interest-delay-end: normal;
interest-delay-end: 2s;
interest-delay-end: 250ms;

/* グローバル値 */
interest-delay-end: inherit;
interest-delay-end: initial;
interest-delay-end: revert;
interest-delay-end: revert-layer;
interest-delay-end: unset;
```

### 値

- `normal`
  - : 待ち時間をブラウザーのデフォルトの待ち時間に設定します。これが初期値です。
- {{cssxref("&lt;time>")}}
  - : 待ち時間を特定の時間に設定します。値は正の値でなければならず、そうでない場合、プロパティは無効になります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な `interest-delay-end` 効果の作成

この例では、`interest-delay-end` が関心インボーカーの動作にどのように影響するかを示します。

#### HTML

このマークアップには、{{htmlelement("button")}}、{{htmlelement("p")}}、{{htmlelement("input")}} の `checkbox` 型が含まれています。この `<button>` 要素を関心インボーカーとして指定するには、`interestfor` 属性を付与し、その値が `<p>` 要素の `id` と一致するよう指定します。これにより、段落が対象要素となります。段落は [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を付与することでポップオーバーに変換され、初期状態では非表示になります。

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">ボタン</button>
<p id="mypopover" popover>ホバーのツールチップ</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    <code>interest-delay-end</code> を <code>2s</code> に適用
  </label>
</form>
```

#### CSS

CSS では、`.delay` セレクターでルールを指定し、`delay` クラスが設定されたあらゆる関心インボーカーに `interest-delay-end` 値 `2s` を適用します。このクラスは、JavaScript を使用してチェックボックスがチェックされた際に `<button>` に設定します。

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-end: 2s;
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

これでチェックボックスをオンにして、同じ操作をもう一度試してください。この時点では、関心が示されてからポップオーバーが出現するまでの待ち時間には影響しませんが、関心が失われてからポップオーバーが非表示になるまでには `2s` が追加されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay")}}
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)モジュール
