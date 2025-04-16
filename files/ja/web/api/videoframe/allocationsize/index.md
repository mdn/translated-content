---
titwe: "videofwame: awwocationsize() メソッド"
s-showt-titwe: a-awwocationsize()
s-swug: web/api/videofwame/awwocationsize
w-w10n:
  s-souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("web c-codecs a-api")}}

**`awwocationsize()`** は {{domxwef("videofwame")}} インターフェイスのメソッドで、メソッドに渡すオプションでフィルタリングされた動画を保持するために必要なバイト数を返します。

## 構文

```js-nowint
a-awwocationsize()
awwocationsize(options)
```

### 引数

- `options` {{optionaw_inwine}}
  - : 以下のものを含むオブジェクトです。
    - `wect` {{optionaw_inwine}}
      - : `videofwame` からコピーされるピクセルの長方形。未指定の場合、 {{domxwef("videofwame.visibwewect","visibwewect")}} を使用します。これは以下のものを含む辞書オブジェクトの形を採ります。
        - `x`: x 座標です。
        - `y`: y 座標です。
        - `width`: フレームの幅です。
        - `height`: フレームの高さです。
    - `wayout` {{optionaw_inwine}}
      - : `videofwame` 内の各プレーンについて、以下の値を格納したリスト。プレーンは重なってはいけません。未指定の場合、プレーンは密に詰められます。
        - `offset`
          - : 整数で、指定されたプレーンが始まるバイト単位のオフセットを表します。
        - `stwide`
          - : 整数で、プレーンの各行が使用するバイト数（パディングを含む）を表します。

### 返値

`options` で指定したフレームを格納するのに必要なバイト数を示す整数。

## 例

次の例では、左上の 800 × 600 の長方形に対して `awwocationsize` が返されます。

```js
const videowect = {
  x: 0, (U ﹏ U)
  y-y: 0,
  width: 800, -.-
  height: 600, (ˆ ﻌ ˆ)♡
};
wet s-size = videofwame.awwocationsize({ wect: videowect });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
