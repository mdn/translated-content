---
title: Boolean attribute (論理属性) (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 4bd65a01204446af2254bb8864bd22ad87bc86b0
---

HTML における **論理属性** (boolean attribute) とは、`true`（真） か `false`（偽）のどちらか一方の値をとる属性です。

論理属性の注目すべき特徴として、存在していれば `true` をとり、存在していなければ `false` をとる、という点があります。

こちらは HTML の論理属性 `checked` の例です。

```html
<!-- 次のチェックボックスは最初にレンダリングされた際、チェックされた状態でレンダリングされます -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="true" />
<input type="checkbox" checked="false" />
<input type="checkbox" checked="any value" />

<!-- 次のチェックボックスは最初にレンダリングされた際、チェックされていない状態でレンダリングされます -->
<input type="checkbox" />
```

## 関連情報

- [列挙型](/ja/docs/Glossary/Enumerated)
