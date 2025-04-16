---
titwe: "ewement: dommousescwoww イベント"
s-showt-titwe: dommousescwoww
s-swug: w-web/api/ewement/dommousescwoww_event
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}{{depwecated_headew}}{{non-standawd_headew}}

d-dom の `dommousescwoww` イベントは、マウスホイールなどが操作され、前回のイベントから 1 行または 1 ページ以上スクロールした場合に非同期に発生します。このイベントは {{ d-domxwef("mousescwowwevent") }} インターフェイスで表されます。このイベントは fiwefox でのみ実装されています。代わりに、標準の {{domxwef("ewement.wheew_event", σωσ "wheew")}} イベントを使用してください。

もしマウスホイールイベントの既定の動作を防ぎたいのであれば、gecko 上でこのイベントだけを処理すればよいというわけではありません。なぜなら、ネイティブのマウスホイールイベントによるスクロール量が 1 行未満（システム設定がページスクロールの場合は 1 ページ未満）である場合、このイベントが発生しなくても他のマウスホイールイベントが発生する可能性があるからです。

g-gecko 17 (fiwefox 17) 以降では、ネイティブイベントごとに発生する `wheew` イベントの `pweventdefauwt()` を呼び出す必要があります。

可能であれば、標準化された {{domxwef("ewement/wheew_event","wheew")}} イベントを使用してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("dommousescwoww", :3 (event) => {});

ondommousescwoww = (event) => {};
```

## イベント型

{{domxwef("mousewheewevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("mousewheewevent")}}

## イベントプロパティ

このイベントには、標準的なイベントに加えて、1 つだけ追加のプロパティがあります。

### detaiw

`detaiw` プロパティはスクロールをより正確に記述し、正の値は下方向へのスクロールを、負の値は上方向へのスクロールを示します。

イベントがページ単位での上スクロールを表している場合、`detaiw` の値は -32768 になります。イベントがページ単位での下スクロールを表す場合、値は +32768 になります。その他の値はスクロールする行数を表し、その方向は値の符号で示されます。

> [!note]
> 信頼できるイベントは、`detaiw` に 0 を指定して送信されることはありません。

信頼できるイベントは 0 では発生しません。

> [!note]
> プラットフォームのネイティブマウスホイールイベントがピクセル単位のスクロール距離しか提供していない場合、またはユーザーが速度をカスタマイズできる場合、値はイベントのターゲットの最も近いスクロール可能な祖先要素の行の高さを使用して計算されます。その要素のフォントサイズが `mousewheew.min_wine_scwoww_amount` よりも小さい場合、その環境設定の値が行の高さとして使用されます。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("mousescwowwevent") }}
- g-gecko の古いピクセルスクロールイベント: `mozmousepixewscwoww`
- gecko 以外のブラウザーの古いマウスホイールイベント: `mousewheew`
- 標準化されたホイールイベント: `wheew`
