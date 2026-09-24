---
title: Boolean (論理型)
slug: Glossary/Boolean
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

コンピューター科学において、**boolean**（論理型、真偽値型）は `true`（真）か `false`（偽）の値のみを取れる論理データ型です。

たとえば、 JavaScript では論理値による条件がコードの部分を実行するか（[if 文](/ja/docs/Web/JavaScript/Reference/Statements/if...else)の中など）や繰り返し（[for ループ](/ja/docs/Web/JavaScript/Reference/Statements/for)など）を決定します。

下記に、この概念を示す JavaScript の擬似コードを示します（実際に実行可能なコードではありません）。

```js-nolint
/* JavaScript if 文 */
if (論理型条件) {
  // 条件が true の場合に実行するコード
}

if (論理型条件) {
  console.log("論理型条件が true になった");
} else {
  console.log("論理型条件が false になった");
}

/* JavaScript for ループ */
for (制御変数; 論理型条件; カウンター) {
  // 条件が true の場合に繰り返し実行されるコード
}
```

論理値は Boolean (ブーリアン) とも呼ばれ、数理論理学の先駆者であるイギリスの数学者[ジョージ・ブール](https://ja.wikipedia.org/wiki/ジョージ・ブール)にちなんで名づけられました。。

以上が一般的な概要です。**論理型**という用語は、コンテキストによってより具体的な意味を持つことができる場合があります。具体的には、以下のことを参照する場合があります。

{{GlossaryDisambiguation}}

## 関連情報

- [ブーリアン型](https://ja.wikipedia.org/wiki/ブーリアン型) - ウィキペディア
