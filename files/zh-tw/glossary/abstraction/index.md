---
title: 抽象化
slug: Glossary/Abstraction
---

{{GlossarySidebar}}

在{{Glossary("computer programming", "電腦程式設計")}}領域中，抽象化可用來減少軟體系統複雜度、讓設計及使用效率提升，並使用簡單的 {{Glossary("API")}} 隱藏背後複雜的系統機制。

## 資料抽象化的優勢

- 避免使用者編寫低階程式碼。
- 避免程式碼重複，提升程式碼的可重用性。
- 能夠獨立地修改類別的內部實作，而不會影響使用者。
- 僅提供重要資料給使用者，得以提升應用程式或程式的安全性。

## 範例

```js
class ImplementAbstraction {
  // 設定內部成員的值的方法
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

- 維基百科上的[抽象化](<https://zh.wikipedia.org/wiki/抽象化_(計算機科學)>)
