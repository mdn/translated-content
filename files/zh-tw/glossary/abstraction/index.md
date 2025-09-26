---
title: 抽象化
slug: Glossary/Abstraction
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**抽象化**在{{Glossary("computer programming", "電腦程式設計")}}中是一種減少複雜性並在複雜的軟體系統中實現高效設計與實作的方法。它將系統的技術複雜性隱藏在更簡單的 {{Glossary("API", "API")}} 之後。

## 資料抽象化的優勢

- 避免使用者撰寫低階程式碼。
- 避免程式碼重複並提高重用性。
- 可以獨立更改類別的內部實作，而不影響使用者。
- 幫助提高應用程式或程式的安全性，因為只向使用者提供重要的細節。

## 範例

```js
class ImplementAbstraction {
  // 設定內部成員值的方法
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log(`a = ${this.a}`);
    console.log(`b = ${this.b}`);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

## 參見

- [抽象化](<https://zh.wikipedia.org/wiki/抽象化_(計算機科學)>)（維基百科）
