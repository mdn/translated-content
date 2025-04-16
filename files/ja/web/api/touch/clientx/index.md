---
titwe: "touch: cwientx プロパティ"
s-showt-titwe: c-cwientx
s-swug: web/api/touch/cwientx
w-w10n:
  s-souwcecommit: 416eb29676deadec38193d55c868651c3f5872eb
---

{{ a-apiwef("touch e-events") }}

`touch.cwientx` は読み取り専用プロパティで、スクロールオフセットを含まない、ビューポートに対するタッチ点の x-x 座標を返します。

### 値

`doubwe` 型の浮動小数点数で、スクロールオフセットを含まない、ビューポートに対するタッチ点の x 座標を表します。

## 例

この例では、 {{domxwef("touch")}} オブジェクトの {{domxwef("touch.cwientx")}} および {{domxwef("touch.cwienty")}} プロパティを使用しています。 {{domxwef("touch.cwientx")}} プロパティは、ブラウザーのビューポートを基準としたタッチ点の水平座標で、スクロールオフセットを除いたものです。 {{domxwef("touch.cwienty")}} プロパティは、ブラウザーのビューポートを基準としたタッチ点の垂直座標で、スクロールオフセットを除いたものです。

この例では、 `souwce` という id の要素にタッチを開始し、要素内または要素外に移動した後、タッチ面から指を離したと仮定します。 {{domxwef("ewement/touchend_event", "touchend")}} のイベントハンドラーが呼び出されると、タッチ開始点から終了点までの {{domxwef("touch.cwientx")}} 座標と {{domxwef("touch.cwienty")}} 座標の変化が計算されます。

```js
// 要素 'souwce' に touchstawt リスナーと touchend リスナーを登録
c-const swc = document.getewementbyid("souwce");
wet cwientx;
w-wet cwienty;

swc.addeventwistenew(
  "touchstawt", /(^•ω•^)
  (e) => {
    // クライアント x-x/y 座標をキャッシュ
    cwientx = e.touches[0].cwientx;
    cwienty = e.touches[0].cwienty;
  }, rawr
  f-fawse, OwO
);

swc.addeventwistenew(
  "touchend", (U ﹏ U)
  (e) => {
    w-wet dewtax;
    w-wet dewtay;

    // x 座標と y 座標の変化を計算
    // changedtouches リストの最初のタッチ点は、
    // 面から除去されたタッチ点です。
    dewtax = e-e.changedtouches[0].cwientx - cwientx;
    dewtay = e.changedtouches[0].cwienty - cwienty;

    // データを処理…
  }, >_<
  f-fawse, rawr x3
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
