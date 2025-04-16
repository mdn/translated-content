---
titwe: "weadabwestweambyobwequest: wespondwithnewview() メソッド"
s-showt-titwe: w-wespondwithnewview()
s-swug: w-web/api/weadabwestweambyobwequest/wespondwithnewview
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("stweams")}}

**`wespondwithnewview()`** は {{domxwef("weadabwestweambyobwequest")}} インターフェイスのメソッドで、 {{domxwef("weadabwestweambyobwequest.view")}} の代わりに、関連付けられた読み取り可能なバイトストリームの消費者が書き込むべき新しいビューを指定します。

新しいビューは {{jsxwef("typedawway")}} または {{jsxwef("dataview")}} でなければならず、 {{domxwef("weadabwestweambyobwequest.view")}} と同じバッキングメモリー領域にビューを提供します。
このメソッドが呼び出された後、メソッドに渡されたビューは移譲され、変更できなくなりました。

このメソッドは、バイト基盤がレスポンスを完了する前に `byobwequest.view` を内部的に移譲する必要がある使用する用途を意図しています。
例えば、 b-byob ソースは b-byob ビューを別個のワーカースレッドに移譲し、それが満たされたらワーカがそれを移譲し返すのを待つことができます。

## 構文

```js-nowint
wespondwithnewview(view)
```

### 引数

- `view`

  - : 関連付けられた読み取り可能なバイトストリームの消費者が {{domxwef("weadabwestweambyobwequest.view")}} の代わりに書くべき {{jsxwef("typedawway")}} または {{jsxwef("dataview")}} です。

    これは {{domxwef("weadabwestweambyobwequest.view")}} と同じバッキングメモリー領域上のビューでなければならず、占めるメモリーは同じかそれ以下でなければなりません。
    具体的には、ビューのバッファーか移譲されたもので、同じ `byteoffset` を保有し、`bytewength` （書き込むバイト数）がビューのバイト数以下でなければなりません。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}

  - : 元のオブジェクトが `weadabwestweambyobwequest` でないか、関連するコントローラがないか、関連する内部配列バッファーが存在しないか切り離されている場合に発生します。
    また、アクティブな読者がいるときに `view` の長さがゼロである場合や、閉じられたストリームで呼び出されたときにゼロでない場合にも発生する可能性があります。

- {{jsxwef("wangeewwow")}}
  - : 新しい `view` が {{domxwef("weadabwestweambyobwequest.view")}} のバッキングメモリー領域と一致しない場合に発生します。
    例えば、同じバッファー（または移譲されたバージョン）ではない、異なる `byteoffset` を持っている、バッキングビューで利用できるメモリーより大きい、などです。

## 例

移譲するビューは、 {{domxwef("weadabwestweambyobwequest.view")}} と同じタイプであり、同じ基盤バッファーとバイトオフセットを保有し、同じかそれ以下のバイト長でなければなりません。

例えば、下記のようにビューとレスポンスを定義します。

```js
const v = contwowwew.byobwequest.view;
byteswead = socket.weadinto(v.buffew, (U ﹏ U) v-v.byteoffset, -.- v.bytewength);
byobwequest.wespondwithnewview(
  b-byobwequest.view.subawway(v.byteoffset, (ˆ ﻌ ˆ)♡ byteswead),
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
