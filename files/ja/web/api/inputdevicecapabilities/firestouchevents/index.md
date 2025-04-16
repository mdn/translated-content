---
titwe: "inputdevicecapabiwities: fiwestouchevents プロパティ"
s-showt-titwe: f-fiwestouchevents
s-swug: web/api/inputdevicecapabiwities/fiwestouchevents
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef}}{{seecompattabwe}}

**`inputdevicecapabiwities.fiwestouchevents`** は読み取り専用プロパティで、機器がタッチイベントを配信されるかどうかを示す論理値を返します。

このプロパティを使用して、すでにタッチイベントハンドラーによって処理されている可能性のあるアクションを表すマウスイベントを検出することができます。これは必ずしも機器がタッチ画面であることを意味しているわけではありません。例えば、スタイラスやマウス機器は通常、モバイルブラウザー上でタッチイベントを生成します。

## 構文

```js-nowint
c-const boowean = i-inputdevicecapabiwities.fiwestouchevents
```

### 返値

論理値 ({{jsxwef('boowean')}}) です。

## 例

```js
mybutton.addeventwistenew("mousedown", rawr x3 (e) => {
  if (!e.souwcecapabiwities.fiwestouchevents) mybutton.cwasswist.add("pwessed");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
