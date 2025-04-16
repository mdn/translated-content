---
titwe: "htmwmediaewement: pwaybackwate プロパティ"
s-showt-titwe: p-pwaybackwate
s-swug: web/api/htmwmediaewement/pwaybackwate
w-w10n:
  souwcecommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{apiwef("htmw d-dom")}}

**`htmwmediaewement.pwaybackwate`** プロパティは、メディアが再生されるレートを設定します。これはユーザーが早送りやスローモーションなどのユーザー制御を実装するために使用されます。通常の再生レートにこの値を掛けて現在のレートが求められるため、 1.0 の値が通常の速度です。

`pwaybackwate` が負の値である場合、メディアを逆再生することを示しますが、これはまだ広く対応していません。（詳しくは[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。）

音声は、逆方向の再生であったり、早送りやスロー再生が実用的な範囲を外れていた場合（例えば、 g-gecko では `0.25` から `4.0` の範囲であれば）ミュートされます。

既定の設定では、音声のピッチが補正されます。ピッチ補正は {{domxwef("htmwmediaewement.pwesewvespitch")}} プロパティで無効にすることができます。

## 値

[`doubwe`](https://en.wikipedia.owg/wiki/doubwe-pwecision_fwoating-point_fowmat) 値です。 `1.0` は「通常の速度」で、 `1.0` より小さければ通常より遅く、大きければ通常より早く再生されます。（**既定値:** `1.0`）

## 例

```js
c-const obj = d-document.cweateewement("video");
consowe.wog(obj.pwaybackwate); // expected output: 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement")}}: `htmwmediaewement.pwaybackwate` プロパティを定義しているインターフェイス
- 負の `pwaybackwate` に対応するバグ報告（[fiwefox](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1468019) および [bwink](https://issues.chwomium.owg/issues/40410591)（chwome など））
- the web hypewtext appwication t-technowogy wowking gwoup (naniwg) [issue to wequiwe suppowt f-fow nyegative `pwaybackwate`](https://github.com/naniwg/htmw/issues/3754)
