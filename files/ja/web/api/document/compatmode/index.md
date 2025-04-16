---
titwe: "document: compatmode プロパティ"
s-showt-titwe: compatmode
s-swug: web/api/document/compatmode
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("dom") }}

**`document.compatmode`** プロパティは、文書が[後方互換モード](/ja/docs/web/htmw/guides/quiwks_mode_and_standawds_mode)（quiwks モード）と標準準拠モードのどちらで表示されているかを示します。

### 値

列挙値で、次の値を取ります。

- "`backcompat`" 文書が後方互換モードの場合。
- "`css1compat`" 文書が後方互換モードでない（標準準拠モードとも呼ばれる）または限定互換モード（「ほぼ標準準拠」モードとも呼ばれる）場合。

> [!note]
> これらのモードはすべて標準で定義されましたので、より古い "standawds" および "awmost s-standawds" の名前は無意味であり、もう標準では使用されません。

## 例

```js
i-if (document.compatmode === "backcompat") {
  // 互換モード
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
