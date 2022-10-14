---
title: Navigator.oscpu
slug: Web/API/Navigator/oscpu
---

{{ ApiRef("HTML DOM") }}

**`Navigator.oscpu`** プロパティは、現在のオペレーティングシステムを識別する文字列を返します。

## 構文

```
oscpuInfo = navigator.oscpu
```

### 値

{{domxref("DOMString")}} はブラウザーが実行されているオペレーティングシステムを識別する文字列を提供します。

| オペレーティングシステム      | `oscpuInfo` の文字列形式                             |
| ----------------------------- | ---------------------------------------------------- |
| OS/2                          | OS/2 Warp x (3, 4, 4.5 のいずれか)                   |
| Windows CE                    | WindowsCE x.y1                                       |
| Windows 64-bit (64 ビット版)  | Windows NT x.y; Win64; x64                           |
| Windows 64-bit (32 ビット版)  | Windows NT x.y; WOW64                                |
| Windows 32-bit                | Windows NT x.y                                       |
| Mac OS X (PPC 版)             | PowerPC Mac OS X version x.y                         |
| Mac OS X (i386/x64 版)        | Intel Mac OS X or macOS version x.y                  |
| Linux 64 ビット (32 ビット版) | `uname -s` の出力結果に `i686 on x86_64`を加えたもの |
| Linux                         | `uname -sm` の出力結果                               |

1. x.y はオペレーティングシステムのバージョンを参照

## 例

```js
function osInfo() {
  alert(window.navigator.oscpu);
}

osInfo(); // alerts "Windows NT 6.0" for example
```

## 使用上の注意

コードが特権 ({{Glossary("Chrome", "クローム")}}であるか、少なくとも UniversalBrowserRead privilege) を持っていない場合は、実際のプラットフォームの代わりに `general.oscpu.override` 設定の値が得られる可能性があります。

## 仕様書

| 仕様書                                                                                           | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', '#dom-navigator-oscpu', 'NavigatorID: oscpu')}} | {{Spec2('HTML WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.oscpu")}}
