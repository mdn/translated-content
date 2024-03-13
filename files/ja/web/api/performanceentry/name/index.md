---
title: "PerformanceEntry: name プロパティ"
short-title: name
slug: Web/API/PerformanceEntry/name
l10n:
  sourceCommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`name`** は {{domxref("PerformanceEntry")}} インターフェイスの読み取り専用プロパティで、パフォーマンス項目の名前を表す文字列です。これは識別子の役割を果たしますが、一意である必要はありません。値はサブクラスに依存します。

## 値

文字列です。以下の表に示すように、値は下記の表にある通り、 `PerformanceEntry` オブジェクトのサブクラスによって異なります。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">サブクラス</th>
      <th scope="col">値</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref('LargestContentfulPaint')}}</td>
      <td>常に空文字列を返します。</td>
    </tr>
    <tr>
      <td>{{domxref('LayoutShift')}}</td>
      <td>常に <code>"layout-shift"</code> を返します。</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceElementTiming')}}</td>
      <td>次の文字列のいずれかです。
        <ul>
          <li><code>"image-paint"</code></li>
          <li><code>"text-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceEventTiming')}}</td>
      <td>関連するイベントの型です。</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceLongTaskTiming')}}</td>
      <td>次の文字列のいずれかです。
        <ul>
          <li><code>"cross-origin-ancestor"</code></li>
          <li><code>"cross-origin-descendant"</code></li>
          <li><code>"cross-origin-unreachable"</code></li>
          <li><code>"multiple-contexts"</code></li>
          <li><code>"same-origin-ancestor"</code></li>
          <li><code>"same-origin-descendant"</code></li>
          <li><code>"same-origin"</code></li>
          <li><code>"self"</code></li>
          <li><code>"unknown"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceMark')}}</td>
      <td>
        {{domxref("Performance.mark","performance.mark()")}} を呼び出したことでマークが作成されたときに使用された名前です。
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceMeasure')}}</td>
      <td>
        {{domxref("Performance.measure","performance.measure()")}} を呼び出してたことで指標が作成されたときに使用された名前です。
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceNavigationTiming')}}</td>
      <td>リクエストされたリソースの解決された URL です。リクエストがリダイレクトされてもこの値は変わりません。</td>
    </tr>
    <tr>
      <td>{{domxref('PerformancePaintTiming')}}</td>
      <td>次の文字列のいずれかです。
        <ul>
          <li><code>"first-paint"</code></li>
          <li><code>"first-contentful-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceResourceTiming')}}</td>
      <td>リクエストされたリソースの解決された URL です。リクエストがリダイレクトされてもこの値は変わりません。</td>
    </tr>
    <tr>
      <td>{{domxref('TaskAttributionTiming')}}</td>
      <td>常に <code>"unknown"</code> を返します。</td>
    </tr>
    <tr>
      <td>{{domxref('VisibilityStateEntry')}}</td>
      <td>次の文字列のいずれかです。
        <ul>
          <li><code>"visible"</code></li>
          <li><code>"hidden"</code></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 例

### パフォーマンス項目を名前で絞り込み

`PerformanceEntry` が {{domxref('PerformanceResourceTiming')}} オブジェクトである場合、`name` プロパティはリクエストされたリソースの解決した URL を参照します。
この例では、`name` プロパティは固有のリソース、例えばすべての SVG 画像をフィルタリングするのに有益です。

```js
// SVG リソースの処理時間をログ出力
performance.getEntriesByType("resource").forEach((entry) => {
  if (entry.name.endsWith(".svg")) {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

### パフォーマンス項目を名前で取得

{{domxref("Performance")}} と {{domxref("PerformanceObserver")}} はどちらもパフォーマンス項目を直接名前で取得するメソッドを提供しています。代わりに {{domxref("Performance.getEntriesByName()")}} または {{domxref("PerformanceObserverEntryList.getEntriesByName()")}} を使用することができます。

```js
// この時点での "debug-marks" という名前のマークをすべてログ出力
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});

// PerformanceObserver 版
// "debug-marks" という名前のマークが発生したらすべてログ出力
function perfObserver(list, observer) {
  list.getEntriesByName("debug-mark", "mark").forEach((entry) => {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.getEntriesByName()")}}
- {{domxref("PerformanceObserverEntryList.getEntriesByName()")}}
