---
title: performance.now()
slug: Web/API/Performance/now
tags:
  - API
  - メソッド
  - パフォーマンス
  - リファレンス
  - ウェブパフォーマンス API
browser-compat: api.Performance.now
translation_of: Web/API/Performance/now
---
{{APIRef("High Resolution Timing")}}

**`performance.now()`** メソッドは、ミリ秒単位で計測された {{domxref("DOMHighResTimeStamp")}} を返します。

{{AvailableInWorkers}}

返値は[時刻原点](/ja/docs/Web/API/DOMHighResTimeStamp#the_time_origin)からの経過時間を表します。

次の点に留意してください。

- {{domxref("Window")}} コンテキストから生成された専用ワーカー (dedicated worker) では、この値は生成元の window における`performance.now()` の値よりも小さい値になります。従来はメインコンテキストの `t0` と同じでしたが、変更されました。
- 共有ワーカー (shared worker) またはサービスワーカー (service worker) では、この値はメインコンテキストでの値よりも大きくなるかもしれません。 window はワーカーよりも後に生成される可能性があるからです。

ブラウザーは通常、 [Spectre](https://spectreattack.com/) のような潜在的なセキュリティ脅威を軽減するために、予測可能性を低下させる目的で、返される値をある量で丸めることを覚えておくことが重要です。これは、タイマーの解像度や精度を制限することで、意図的にある程度不正確にします。例えば、 Firefox は返される時刻を 1 ミリ秒単位で丸めます。

返される値の精度は、セキュリティ上の懸念が他の手段で軽減された場合、またはされた場合に変更される可能性があります。

## 構文

```js
t = performance.now();
```

## 例

```js
const t0 = performance.now();
doSomething();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

JavaScript で利用できる他の時刻のデータ（例えば [`Date.now`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now)）とは異なり、 `performance.now()` が返すタイムスタンプは、 1 ミリ秒の分解能に制限されません。代わりに、マイクロ秒までの精度を持った浮動小数点の値で時刻を表します。

また、`Date.now()` とは違い、`performance.now()` が返す値は、（手動で調整、または NTP のようなソフトウェアで変更される可能性がある）システムクロックから独立しており、常に一定の割合で増加します。一方、 `performance.timing.navigationStart + performance.now()` は、おおよそ `Date.now()` と等しくなります。

## 時間精度の引き下げ

タイミング攻撃やフィンガープリンティングから保護するため、ブラウザーの設定によっては、 `performance.now()` の精度が丸められることがあります。
Firefox では、 `privacy.reduceTimerPrecision` の設定が既定で有効になっており、既定で 1 ミリ秒となっています。

```js
// Firefox 60 での時間精度の引き下げ (1ms)
performance.now();
// 8781416
// 8781815
// 8782206
// ...

// `privacy.resistFingerprinting` 有効化による時間精度の引き下げ`
performance.now();
// 8865400
// 8866200
// 8866700
// ...
```

Firefox では `privacy.resistFingerprinting` も有効にすることができます。これは、精度を 100 ミリ秒または `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` のどちらか大きい方へ変更します。

Firefox 79 以降では、高精度タイマーは文書が {{HTTPHeader("Cross-Origin-Opener-Policy")}} および {{HTTPHeader("Cross-Origin-Embedder-Policy")}} ヘッダーを使用してクロスオリジン分離を行っている場合に使用することができるようになりました。

```plain
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

これらのヘッダーは、最上位の文書がクロスオリジン文書と閲覧コンテキストグループを共有しないことを保証します。 COOP プロセスは、文書を分離し、潜在的な攻撃者がポップアップでそれを開いていたとしても、グローバルオブジェクトにアクセスできないようにし、 [XS-Leaks](https://github.com/xsleaks/xsleaks) と呼ばれる一連のクロスオリジン攻撃を防止しています。

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Highres Time Level 2', '#dom-performance-now', 'performance.now()')}}</td>
   <td>{{Spec2('Highres Time Level 2')}}</td>
   <td>インターフェイスと型について、より厳密な定義</td>
  </tr>
  <tr>
   <td>{{SpecName('Highres Time', '#dom-performance-now', 'performance.now()')}}</td>
   <td>{{Spec2('Highres Time')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [When milliseconds are not enough: performance.now()](http://updates.html5rocks.com/2012/08/When-milliseconds-are-not-enough-performance-now) (HTML5 Rocks)
