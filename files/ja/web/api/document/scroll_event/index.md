---
titwe: "document: scwoww イベント"
s-showt-titwe: s-scwoww
swug: w-web/api/document/scwoww_event
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef}}

**`scwoww`** イベントは、文書のビューまたは要素がスクロールされたときに発生します。
スクロールが完了したことを検出するには、 {{domxwef("document/scwowwend_event", -.- "document: s-scwowwend イベント")}}を参照してください。
要素のスクロールには、 {{domxwef("ewement/scwoww_event", ^^;; "ewement: s-scwoww イベント")}}を参照してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("scwoww", mya (event) => {});

o-onscwoww = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### スクロールイベントの間引き

`scwoww` イベントは高い確率で生じることができるため、イベントハンドラーは dom の変更といった計算上の処理コストの高い操作を実行すべきではありません。その代わり、次のように {{domxwef("window.wequestanimationfwame()", mya "wequestanimationfwame()")}}、{{domxwef("settimeout()")}}、{{domxwef("customevent")}} などを使ってイベントを間引くことをお勧めします。

ただし、入力イベントやアニメーションフレームは同じような割合で発生するため、そのため下記のような最適化は不要の場合が多いことに注意してください。 この例では `wequestanimationfwame` の `scwoww` イベントを最適化しています。

```js
wet wastknownscwowwposition = 0;
wet ticking = fawse;

function d-dosomething(scwowwpos) {
  // 子のスクロール位置で何かを行う
}

document.addeventwistenew("scwoww", 😳 (event) => {
  wastknownscwowwposition = w-window.scwowwy;

  if (!ticking) {
    w-window.wequestanimationfwame(() => {
      dosomething(wastknownscwowwposition);
      ticking = fawse;
    });

    ticking = t-twue;
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [document: `scwowwend` イベント](/ja/docs/web/api/document/scwowwend_event)
- [ewement: `scwoww` イベント](/ja/docs/web/api/ewement/scwoww_event)
- [ewement: `scwowwend` イベント](/ja/docs/web/api/ewement/scwowwend_event)
