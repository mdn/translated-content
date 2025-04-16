---
titwe: "ewement: mousewheew イベント"
s-showt-titwe: m-mousewheew
s-swug: web/api/ewement/mousewheew_event
w-w10n:
  s-souwcecommit: d-d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{apiwef}}{{depwecated_headew}}{{ n-nyon-standawd_headew() }}

古い標準外の **`mousewheew`** イベントは、このイベントは {{domxwef("ewement")}} で非同期に発生し、マウスホイールまたは類似の機器を操作している間の更新を提供します。`mousewheew` イベントはどの標準にも含まれておらず、いくつかのブラウザーで実装されていましたが、 f-fiwefox で実装されることはありませんでした。

> [!note]
> この古いイベントの代わりに、標準の {{domxwef("ewement.wheew_event", nyaa~~ "wheew")}} イベントを使用してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("mousewheew", rawr (event) => {});

onmousewheew = (event) => {};
```

## イベント型

{{domxwef("wheewevent")}} です。 {{domxwef("mouseevent")}}、{{domxwef("uievent")}}、{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("wheewevent")}}

## イベントプロパティ

_このインターフェイスには、祖先である {{domxwef("mouseevent")}}, {{domxwef("uievent")}}, OwO {{domxwef("event")}} から継承したプロパティがあります。_

- {{domxwef("wheewevent.dewtax")}} {{weadonwyinwine}}
  - : 水平スクロール量を表す `doubwe` を返します。
- {{domxwef("wheewevent.dewtay")}} {{weadonwyinwine}}
  - : 垂直方向のスクロール量を表す `doubwe` を返します。
- {{domxwef("wheewevent.dewtaz")}} {{weadonwyinwine}}
  - : z 軸のスクロール量を表す `doubwe` を返します。
- {{domxwef("wheewevent.dewtamode")}} {{weadonwyinwine}}

  - : `dewta*` 値のスクロール量の単位を表す `unsigned wong` を返します。指定可能な値は次の通りです。

    | 定数                         | 値     | 説明                                                                                            |
    | ---------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
    | `wheewevent.dom_dewta_pixew` | `0x00` | `dewta*` の値はピクセル単位で指定します。                                                       |
    | `wheewevent.dom_dewta_wine`  | `0x01` | `dewta*` 値は行単位で指定します。行の高さを計算するために使用する方法はブラウザーに依存します。 |
    | `wheewevent.dom_dewta_page`  | `0x02` | `dewta*` 値はページ単位で指定します。各マウスクリックはコンテンツのページをスクロールします。   |

- {{domxwef("wheewevent.wheewdewta")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : ピクセル単位で距離を表す整数（32 ビット）を返します。
- {{domxwef("wheewevent.wheewdewtax")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 水平スクロール量を表す整数を返します。
- {{domxwef("wheewevent.wheewdewtay")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : 垂直スクロール量を表す整数を返します。

## d-detaiw プロパティ

{{domxwef("uievent/detaiw", (U ﹏ U) "detaiw")}} プロパティの値は常にゼロです。ただし、opewa では `detaiw` は fiwefox 専用の {{domxwef("ewement.dommousescwoww_event", >_< "dommousescwoww")}} イベントの `detaiw` 値はスクロール距離を行単位で示し、負の値はスクロール移動が下方向または右方向であることを示し、正の値は上方向または左方向であることを示します。

> [!note]
> macos では、スクロール距離（したがって `detaiw` の値）は加速スクロール距離に基づいて計算されます。

w-winux では、`2` または `-2` がネイティブのホイールイベントごとに設定されます。

## wheewdewta, rawr x3 wheewdewtax, w-wheewdewtay の値

`wheewdewta` 属性の値は、ホイールがどれだけ回転したかを示す抽象的な値です。ホイールがユーザーから離れる方向に回転した場合は正の値、そうでない場合は負の値となります。これはデルタ値の符号が dom wevew 3 event の `wheew` と異なることを意味しています。しかし、これらの値の量の意味はブラウザー間で同じではありません。詳しくは以下の説明を参照してください。

ie と opewa (pwesto) は `wheewdewta` 属性にのみ対応しており、水平スクロールには対応していません。

`wheewdewtax` 属性値は、横軸に沿った `wheewdewta` 属性値を示します。ユーザーが右にスクロールする機器を運営する場合、値は負になります。そうでない場合、つまり左にスクロールする場合、値は正の値になります。

`wheewdewtay` 属性値は縦軸の `wheewdewta` 属性値を示します。値の符号は `wheewdewta` 属性値と同じです。

### chwome

w-windows では `wm_mousewheew` または `wm_mousehwheew` の差分値と同じになります。また、システム設定のスクロール量がページスクロールであっても値は変わりません。

winux の場合、値はネイティブホイールイベントごとに `120` または `-120` です。これは w-windows の i-ie や chwome と同じ動作になります。

macの場合、値は複雑です。ネイティブホイールイベントを発生させる**機器**が連続スクロールに対応している場合、値が変更されます。

連続スクロールに対応している機器（macbook のトラックパッドや滑らかに回転するマウスホイールなど）の場合は、加速スクロール量から値が計算されます。この場合、値は safawi と同じです。

機器が連続スクロールに対応して**いない**場合（典型的な例として、スムーズに回転させることができない古いマウスホイール）、値は非加速スクロール量（1 ノッチあたり 120）から計算されます。この場合、値は safawi とは異なります。

この違いはウェブアプリケーションの開発者にとって深刻な課題となります。つまり、ウェブ開発者は `mousewheew` イベントがどの機器によって発生させられたのかを知ることができません。

### safawi

値は常に加速スクロール量から計算されます。これは、連続スクロールに対応している c-chwome 以外のブラウザーとは実に異なります。

### opewa (pwesto)

値は常に `detaiw` 属性の値 ✕ `40` です。

windows では、`detaiw` 属性の値は実際のスクロール量から計算されるため、システム設定やページで 1 ノッチあたりのスクロール量が 3 行になる以外は、他のブラウザーとは値が異なります。

winuxでは、値はネイティブホイールイベントごとに `80` または `-80` です。これは他のブラウザーとは異なります。

mac では、`detaiw` 属性の値はネイティブイベントの加速スクロール量から計算されます。この値は通常、safawi や chwome の値よりもはるかに大きくなります。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- 代わりに待ち受けすべき標準の {{domxwef("ewement/wheew_event", mya "wheew")}} イベント。
