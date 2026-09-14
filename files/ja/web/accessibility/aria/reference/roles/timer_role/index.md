---
title: "ARIA: timer ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/timer_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

**`timer`** ロールは、要素が開始点からの経過時間または終了点までの残り時間を示す数値カウンターであることを支援技術に示します。支援技術は、暗黙的な [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) 値が `off` であるため、タイマーの更新を通知しません。

```html
<div role="timer" id="eggtimer">0</div>
```

これは、この `div` 要素を残り時間のないタイマーとして定義します。

## 説明

`timer` ロールは、ウェブコンテンツのこの部分が残り時間または経過時間を示すタイマーを含むライブリージョンであることを支援技術に示します。タイマーの内部テキストは、更新される現在の時間測定値である必要があります。値は必ずしも機械的に解析可能である必要はありませんが、タイマーが一時停止されるか終了点に達しない限り、定期的に継続的に更新される必要があります。

[`alert`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)、[`log`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)、[`marquee`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)、[`status`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) と共に、`timer` ロールはライブリージョンであり、[ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) 属性によって変更できます。

### 関連する WAI-ARIA のロール、ステート、プロパティ

- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : 一部のスクリーンリーダーは、タイマー要素のコンテンツを通知する前に、その名前を通知します。名前が表示されている場合は、`aria-labelledby` を使用してそれを参照してください。`aria-label` を含めることで、スクリーンリーダーがコンテンツを読み上げる際に表示されないテキストでタイマー要素の表示コンテンツに前置きする方法を提供します。タイマーの命名は必須ではないため、適切なものがない場合は、これらの属性の両方を省略できます。

- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : `timer` ロールを持つ要素は、暗黙的な `aria-live` 値として `off` を持ちます。

## アクセシビリティの考慮事項

例えばセキュリティ上の理由で時間制限を設ける必要がある場合、ユーザーはそれをオフにするか延長するオプションを持つべきです。この制限は、時間制限がオークションやゲームなどのライブイベントによるものである場合、またはフォームを完了する時間が有効な送信に不可欠である場合は適用されません。

## 例

### 基本的なタイマー

この例では、30秒から0秒にカウントダウンするタイマーがあります。時間表示領域全体に `role="timer"` があり、また [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) があって、変更された領域だけでなく領域全体として通知されることを示しています。暗黙的な `aria-live="off"` のため、変更はデフォルトでは通知されません。タイマーが残り10秒に達したときに、一度通知されるように手動でロールを `"alert"` に変更します。

```html
<div id="countdown" role="timer" aria-atomic="true">
  <span id="number">30</span> seconds left!
</div>
```

```css
html {
  font-size: 50px;
  text-align: center;
  margin-top: 1em;
  font-family: sans-serif;
}

#number {
  font-family: monospace;
  color: #cc0000;
  font-weight: bold;
  font-size: 1.25em;
  vertical-align: middle;
}
```

```js
const numElement = document.getElementById("number");
const liveRegion = document.getElementById("countdown");
let startTime = new Date().getTime();

function decrement() {
  const timeNow = new Date().getTime();
  const elapsedTime = Math.floor((timeNow - startTime) / 1000);
  let newNumber = 30 - elapsedTime;

  if (newNumber >= 0) {
    numElement.textContent = newNumber;
  }

  if (newNumber === 10) {
    liveRegion.setAttribute("role", "alert");
    setTimeout(() => {
      liveRegion.setAttribute("role", "timer");
    }, 999);
  }
}

window.setInterval(() => {
  decrement();
}, 500);
```

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA: `alert` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)
