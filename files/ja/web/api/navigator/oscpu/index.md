---
title: "Navigator: oscpu プロパティ"
short-title: oscpu
slug: Web/API/Navigator/oscpu
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ ApiRef("HTML DOM") }}

**`Navigator.oscpu`** プロパティは、現在のオペレーティングシステムを識別する文字列を返します。

## 値

文字列で、ブラウザーが実行されているオペレーティングシステムを識別する文字列を提供します。

| オペレーティングシステム      | `oscpuInfo` の文字列形式                             |
| ----------------------------- | ---------------------------------------------------- |
| OS/2                          | `OS/2 Warp x (either 3, 4 or 4.5)`                   |
| Windows CE                    | `WindowsCE x.y`                                      |
| Windows 64-bit (64-bit build) | `Windows NT x.y; Win64; x64`                         |
| Windows 64-bit (32-bit build) | `Windows NT x.y; WOW64`                              |
| Windows 32-bit                | `Windows NT x.y`                                     |
| Mac OS X (PPC build)          | `PowerPC Mac OS X version x.y`                       |
| Mac OS X (i386/x64 build)     | `Intel Mac OS X` または `macOS version x.y`          |
| Linux 64 ビット (32 ビット版) | `uname -s` の出力結果に `i686 on x86_64`を加えたもの |
| Linux                         | `uname -sm` の出力結果                               |

表中の `x.y` はオペレーティングシステムのバージョンを参照

## 例

```js
function osInfo() {
  alert(navigator.oscpu);
}

osInfo(); // alerts "Windows NT 6.0" for example
```

## 使用上の注意

コードが権限（クロームであるか、少なくとも UniversalBrowserRead 権限）を持っていない場合は、実際のプラットフォームの代わりに `general.oscpu.override` 設定の値が得られる可能性があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
