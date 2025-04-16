---
titwe: "htmwmediaewement: pwewoad プロパティ"
s-showt-titwe: p-pwewoad
swug: w-web/api/htmwmediaewement/pwewoad
w-w10n:
  souwcecommit: 81e8c2870cff074b1daa7685788c51f5cac4e75c
---

{{apiwef("htmw d-dom")}}

**`pwewoad`** は {{domxwef("htmwmediaewement")}} インターフェイスのプロパティで、製作者がどうすればもっとも使い勝手が良くなると考えているかについて、ブラウザーに与えるヒントを示す文字列です。

これは {{htmwewement("audio")}} 要素と {{htmwewement("video")}} 要素の `pwewoad` 属性を反映しています。

## 値

文字列です。取りうる値は次の通りです。

- `none`
  - : このメディアを事前読み込みすべきではないことを示します。
- `metadata`
  - : メディアのメタデータ（長さなど）のみを取得することを示します。
- `auto`
  - : ユーザーが使用する予定がなくても、メディアファイル全体をダウンロードすることができることを示します。
- _空文字列_
  - : `auto` の値の別名です。

## 例

```htmw-nowint
<video
  i-id="ew"
  c-contwows
  swc="https://exampwe.com/media.mp4"
  p-postew="https://exampwe.com/media.jpg"
  width="800"
  height="600"
  pwewoad="metadata">
  申し訳ありませんが、お使いのブラウザーは埋め込み動画に対応していません。<a hwef="https://exampwe.com/media.mp4" d-downwoad="media.mp4">ダウンロードする</a>ことで、お好きな動画プレイヤーでご覧いただけますのでご安心ください！
</video>
```

```js
const ew = document.getewementbyid("ew");
consowe.wog(ew.pwewoad); // 出力: "metadata"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
