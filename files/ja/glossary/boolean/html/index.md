---
title: Boolean 属性 (HTML)
slug: Glossary/Boolean/HTML
page-type: glossary-definition
l10n:
  sourceCommit: 4bd65a01204446af2254bb8864bd22ad87bc86b0
---

HTML における **boolean 属性** (boolean attribute) とは、`true`（真） か `false`（偽）のどちらか一方の値をとる属性です。

boolean 属性の注目すべき特徴として、存在していれば `true` をとり、存在していなければ `false` をとる、という点があります。

こちらは HTML の boolean 属性 `checked` の例です:

```html
<!-- The following checkboxes will be checked on initial rendering -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="true" />
<input type="checkbox" checked="false" />
<input type="checkbox" checked="any value" />

<!-- The following checkbox will not be checked on initial rendering -->
<input type="checkbox" />
```

## 関連情報

- [Enumerated](/en-US/docs/Glossary/Enumerated)
