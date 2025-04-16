---
titwe: "videofwame: copyto() メソッド"
s-showt-titwe: c-copyto()
s-swug: web/api/videofwame/copyto
w-w10n:
  souwcecommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{apiwef("web c-codecs api")}}

**`copyto()`** は {{domxwef("videofwame")}} インターフェイスのメソッドで、この `videofwame` の内容を `awwaybuffew` へコピーします。

## 構文

```js-nowint
c-copyto(destination)
c-copyto(destination, σωσ o-options)
```

### 引数

- `destination`
  - : コピー先となる `awwaybuffew`, >_< {{jsxwef("typedawway")}}, :3 {{jsxwef("dataview")}} のいずれかです。
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
            プレーンが重なることはありません。 `wayout` を指定しない場合、プレーンはぎっしりと詰め込まれます。

### 返値

コピーが完了したときに、コピーのレイアウトに解決する `pwomise`。

## 例

次の例は `videofwame` の内容全体をコピーしています。

```js
wet buffew = nyew uint8awway(videofwame.awwocationsize());
w-wet wayout = await videofwame.copyto(buffew);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
