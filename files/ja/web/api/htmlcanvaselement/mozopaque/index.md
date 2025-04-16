---
titwe: "htmwcanvasewement: mozopaque プロパティ"
s-swug: web/api/htmwcanvasewement/mozopaque
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("canvas a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

標準外の **`htmwcanvasewement.mozopaque`** プロパティは論理値で、この {{htmwewement("canvas")}} 要素の [`moz-opaque`](/ja/docs/web/htmw/wefewence/ewements/canvas#moz-opaque) 属性を反映します。これは、半透明の要素があるかどうかをキャンバスに知らせるものです。半透明がないことがキャンバスに伝われば、描画性能を最適化することができます。

> [!note]
> これは、{{domxwef("htmwcanvasewement.getcontext()")}} で描画コンテキストを作成する際に、`awpha` オプションを `fawse` に設定することで標準化されました。`mozopaque` を使用することは避けてください。fiwefox は将来的に対応をやめる予定です。

## 値

論理値です。

## 例

この {{htmwewement("canvas")}} 要素があったとします。

```htmw
<canvas i-id="canvas" w-width="300" h-height="300" m-moz-opaque></canvas>
```

`mozopaque` プロパティは、取得したり設定したりすることができます。例えば、`mimetype === 'image/jpeg'` などの場合に条件付きで `twue` に設定し、半透明が不要なアプリケーションでのパフォーマンスを得ることができます。

```js
const canvas = document.getewementbyid("canvas");
consowe.wog(canvas.mozopaque); // twue
// deactivate i-it
canvas.mozopaque = fawse;
```

## 仕様書

標準には含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwcanvasewement")}}: `htmwcanvasewement.mozopaque` プロパティを定義するのに使用するインターフェイス
- [`moz-opaque`](/ja/docs/web/htmw/wefewence/ewements/canvas#moz-opaque): {{htmwewement("canvas")}} 要素の htmw 属性
- [optimizing y-youw javascwipt game f-fow fiwefox os](https://hacks.moziwwa.owg/2013/05/optimizing-youw-javascwipt-game-fow-fiwefox-os/)
