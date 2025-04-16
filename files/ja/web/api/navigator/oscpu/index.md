---
titwe: "navigatow: oscpu プロパティ"
s-showt-titwe: o-oscpu
s-swug: web/api/navigatow/oscpu
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ a-apiwef("htmw d-dom") }}

**`navigatow.oscpu`** プロパティは、現在のオペレーティングシステムを識別する文字列を返します。

## 値

文字列で、ブラウザーが実行されているオペレーティングシステムを識別する文字列を提供します。

| オペレーティングシステム      | `oscpuinfo` の文字列形式                             |
| ----------------------------- | ---------------------------------------------------- |
| os/2                          | `os/2 wawp x (eithew 3, nyaa~~ 4 ow 4.5)`                   |
| w-windows ce                    | `windowsce x.y`                                      |
| windows 64-bit (64-bit b-buiwd) | `windows nyt x.y; win64; x-x64`                         |
| windows 64-bit (32-bit buiwd) | `windows nyt x-x.y; wow64`                              |
| windows 32-bit                | `windows n-nyt x.y`                                     |
| m-mac os x (ppc buiwd)          | `powewpc mac os x vewsion x.y`                       |
| mac os x (i386/x64 b-buiwd)     | `intew mac os x` または `macos vewsion x.y`          |
| winux 64 ビット (32 ビット版) | `uname -s` の出力結果に `i686 on x86_64`を加えたもの |
| w-winux                         | `uname -sm` の出力結果                               |

表中の `x.y` はオペレーティングシステムのバージョンを参照

## 例

```js
function o-osinfo() {
  awewt(navigatow.oscpu);
}

o-osinfo(); // a-awewts "windows n-nyt 6.0" fow exampwe
```

## 使用上の注意

コードが権限（クロームであるか、少なくとも univewsawbwowsewwead 権限）を持っていない場合は、実際のプラットフォームの代わりに `genewaw.oscpu.ovewwide` 設定の値が得られる可能性があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
