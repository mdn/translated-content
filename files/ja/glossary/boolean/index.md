---
title: Boolean
slug: Glossary/Boolean
---

{{GlossarySidebar}}

コンピューター科学において、**boolean**（論理型、真偽値型）は `true`（真）か `false`（偽）の値のみを取れる論理データ型です。たとえば、 JavaScript では boolean による条件がコードの部分を実行するか（[if 文](/ja/docs/Web/JavaScript/Reference/Statements/if...else)の中など）や繰り返し（[for ループ](/ja/docs/Web/JavaScript/Reference/Statements/for)など）を決定します。

```js
/* JavaScript if 文 */
if (boolean 条件) {
   // 条件が true の場合に実行するコード
}

if (boolean 条件) {
  console.log("boolean 条件が true になった");
} else {
  console.log("boolean 条件が false になった");
}


/* JavaScript for ループ */
for (制御変数; boolean 条件; カウンター) {
  // 条件が true の場合に繰り返し実行されるコード
}

for (var i=0; i < 4; i++) {
  console.log("boolean 条件が true の場合のみ表示");
}
```

## 関連情報

### 基礎知識

- ウィキペディアの「[ブーリアン型](https://ja.wikipedia.org/wiki/ブーリアン型)」の記事

### 技術リファレンス

- JavaScript のグローバルオブジェクト: {{jsxref("Boolean")}}
- [JavaScript のデータ構造](/ja/docs/Web/JavaScript/Guide/Data_structures)
