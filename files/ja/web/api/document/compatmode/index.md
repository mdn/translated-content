---
title: "Document: compatMode プロパティ"
short-title: compatMode
slug: Web/API/Document/compatMode
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ ApiRef("DOM") }}

**`Document.compatMode`** プロパティは、文書が[後方互換モード](/ja/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)（Quirks モード）と標準準拠モードのどちらで表示されているかを示します。

### 値

列挙値で、次の値を取ります。

- "`BackCompat`" 文書が後方互換モードの場合。
- "`CSS1Compat`" 文書が後方互換モードでない（標準準拠モードとも呼ばれる）または限定互換モード（「ほぼ標準準拠」モードとも呼ばれる）場合。

> [!NOTE]
> これらのモードはすべて標準で定義されましたので、より古い "standards" および "almost standards" の名前は無意味であり、もう標準では使用されません。

## 例

```js
if (document.compatMode === "BackCompat") {
  // 互換モード
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
