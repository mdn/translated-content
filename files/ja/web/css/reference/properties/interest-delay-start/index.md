---
title: interest-delay-start
slug: Web/CSS/Reference/Properties/interest-delay-start
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{SeeCompatTable}}

**`interest-delay-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ユーザーが[関心インボーカー](/ja/docs/Web/API/Popover_API/Using_interest_invokers)要素にあるものに関心を示してから {{domxref("HTMLElement.interest_event", "interest")}} イベントが発生するまでの待ち時間を指定します。

`interest-delay-start` および {{cssxref("interest-delay-end")}} プロパティは、{{cssxref("interest-delay")}} 一括指定を使用して両方とも設定することができます。

## 構文

```css
/* キーワードまたはカスタム値 */
interest-delay-start: normal;
interest-delay-start: 2s;
interest-delay-start: 250ms;

/* グローバル値 */
interest-delay-start: inherit;
interest-delay-start: initial;
interest-delay-start: revert;
interest-delay-start: revert-layer;
interest-delay-start: unset;
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

### 基本的な `interest-delay-start` 効果の作成

この例では、`interest-delay-start` が関心インボーカーの動作にどのように影響するかを示します。

#### HTML

このマークアップには、{{htmlelement("button")}}、{{htmlelement("p")}}、{{htmlelement("input")}} の `checkbox` 型が含まれています。この `<button>` 要素を関心インボーカーとして指定するには、`interestfor` 属性を付与し、その値が `<p>` 要素の `id` と一致するよう指定します。これにより、段落が対象要素となります。段落は [`popover`](/ja/docs/Web/HTML/Reference/Global_attributes/popover) 属性を付与することでポップオーバーに変換され、初期状態では非表示になります。

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">ボタン</button>
<p id="mypopover" popover>ホバーのツールチップ</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    <code>interest-delay-start</code> を <code>2s</code> に適用
  </label>
</form>
```

#### CSS

CSS では、`.delay` セレクターでルールを指定し、`delay` クラスが設定されたあらゆる関心インボーカーに `interest-delay-start` 値 `2s` を適用します。このクラスは、JavaScript を使用してチェックボックスがチェックされた際に `<button>` に設定します。

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-start: 2s;
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

これでチェックボックスをオンにして、同じ操作をもう一度試してください。この時点では、関心が示された後に `2s` の待ち時間の後にポップオーバーが現れます。関心が失われた後の待ち時間には影響しません。

### 関心が示された後で `interest-delay-start` を削除

この例では、いずれかの要素で興味が示された後、複数の関心インボーカー要素から `interest-delay-start` を削除する方法を示します。

これは有用な手法です。いずれかのインボーカーに関心が示された瞬間にポップオーバーが現れると、わずらわしいものとなるため、ブラウザーではデフォルトでわずかな待ち時間が追加されます（詳細は [`interest-delay` の解説](/ja/docs/Web/CSS/Reference/Properties/interest-delay#description)を参照）。ただし、ユーザーが一度インボーカーに関心を示した後は、他のインボーカーへ遅延なく素早く移動することができるようにすると便利です。

#### HTML

マークアップには、`container` クラスを持つ段落で囲まれた 3 つの `<button>` 要素と、`popover` 属性を使用してポップオーバーに変換された別の段落が含まれてます。3 つのボタンはすべて関心インボーカーボタンとして設定され、`interestfor` 属性を使用してポップオーバーをターゲットとして参照しています。

```html live-sample___interest-delay-remove-on-interest
<p class="container">
  <button interestfor="mypopover">ボタン 1</button>
  <button interestfor="mypopover">ボタン 2</button>
  <button interestfor="mypopover">ボタン 3</button>
</p>
<p id="mypopover" popover>ホバーのツールチップ</p>
```

#### CSS

この CSS では、ボタンに `interest-delay-start` 値 `1s` を適用し、その後、関心を示されているボタンの下にポップオーバーを位置指定します。これには、{{cssxref("position-area")}} 値を `bottom` に設定します（詳細については[ポップオーバーのアンカー位置指定](/ja/docs/Web/API/Popover_API/Using#ポップオーバーのアンカー位置指定)を参照してください）。

```css live-sample___interest-delay-remove-on-interest
button {
  interest-delay-start: 1s;
}

#mypopover {
  position-area: bottom;
}
```

最後に、{{cssxref(":interest-source")}} 擬似クラスと {{cssxref(":has()")}} 擬似クラスを組み合わせ、`interest-delay-start: 0s` を段落内のすべてのボタンに適用します。ただし、その段落が関心が示されたボタン（つまり `button:interest-source` に一致するボタン）が含まれている場合に限ります。

```css live-sample___interest-delay-remove-on-interest
.container:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

#### 結果

これは次のようにレンダリングされます。

{{embedlivesample("interest-delay-remove-on-interest", "100%", "100")}}

いずれかのボタンに関心を示してみて、すぐに別のボタンに関心を示すと、ポップオーバーが待ち時間なく現れることに気づくでしょう。 ボタンに示していた関心を一旦止め、再び示し始めると、最初の待ち時間が再び発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("interest-delay-end")}}, {{cssxref("interest-delay")}}
- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS 基本ユーザーインターフェイス](/ja/docs/Web/CSS/Guides/Basic_user_interface)モジュール
