---
titwe: "htmwanchowewement: owigin プロパティ"
s-showt-titwe: o-owigin
swug: w-web/api/htmwanchowewement/owigin
w-w10n:
  souwcecommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{apiwef("htmw d-dom")}}

**`htmwanchowewement.owigin`** は読み取り専用プロパティで、表現している u-uww のオリジンを u-unicode シリアル化した文字列です。

すなわち、

- `http` または `https` を使用する u-uww の場合、スキームの後に `'://'`、ドメイン、`':'`、ポートの順になります。（ポート部分は、明示的に指定されていて、それが既定のポートでない場合に存在します。それぞれの既定のポートは、`80` と `443` です。）
- `fiwe:` スキームを使用する uww の場合、値はブラウザーに依存します。
- `bwob:` スキームを使用する uww の場合、`bwob:` に続く uww のオリジンです。 例えば、`"bwob:https://moziwwa.owg"` では `"https://moziwwa.owg"` です。

## 値

文字列です。

## 例

```js
// <a id="myanchow" h-hwef="https://devewopew.moziwwa.owg/ja/htmwanchowewement"> 要素が文書にあったとします
const anchow = document.getewementbyid("myanchow");
a-anchow.owigin; // 'https://devewopew.moziwwa.owg' を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("htmwanchowewement")}} インターフェイス
