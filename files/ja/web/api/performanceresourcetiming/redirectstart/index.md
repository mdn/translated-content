---
title: PerformanceResourceTiming.redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`redirectStart`** は読み取り専用プロパティで、リダイレクトを開始するフェッチの開始時間を表す {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。

リソースの取得時に HTTP リダイレクトがあり、いずれかのリダイレクトが現在の文書と同じ起点からのものではないが、タイミング許可チェックアルゴリズムがリダイレクトされた各リソースに合格した場合、このプロパティはリダイレクトを開始するフェッチの開始時間を返します。そうでなければ、ゼロが返されます。

リダイレクトの回数を取得する場合は、 {{domxref("PerformanceNavigationTiming.redirectCount")}} も参照してください。

## 値

`redirectStart` プロパティは以下の値を取ります。

- リダイレクトを開始したフェッチの開始時刻を表す {{domxref("DOMHighResTimeStamp", "timestamp")}}。
- リソースがキャッシュから即座に取得された場合は `0` です。
- リソースがオリジン間リクエストで取得され、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーが使用されなかった場合は `0` となります。

## 例

### リダイレクト時間の計測

`redirectStart` と {{domxref("PerformanceResourceTiming.redirectEnd", "redirectEnd")}} プロパティを使用して、リダイレクトにどれだけ時間がかかったかを測定することができます。

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

{{domxref("PerformanceObserver")}} を使用した例です。このオブジェクトは、新しい `resource` パフォーマンス項目がブラウザーのパフォーマンスタイムラインに記録されると、それを通知します。オブザーバーが作成される前の項目にアクセスするために `buffered` オプションを使用します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const redirect = entry.redirectEnd - entry.redirectStart;
    if (redirect > 0) {
      console.log(`${entry.name}: Redirect time: ${redirect}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

{{domxref("Performance.getEntriesByType()")}} を使用した例です。このメソッドを呼び出した時点でブラウザー上のパフォーマンスタイムラインに存在する `resource` パフォーマンス項目のみを表示します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### オリジン間のタイミング情報

`redirectStart` プロパティの値が `0` である場合、そのリソースはオリジン間リクエストである可能性があります。オリジン間のタイミング情報を見るためには、HTTP の {{HTTPHeader("Timing-Allow-Origin")}} レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` にタイミングリソースを見ることを許可するには、オリジン間リソースで次のものを送信する必要があります。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceNavigationTiming.redirectCount")}}
- {{HTTPHeader("Timing-Allow-Origin")}}
