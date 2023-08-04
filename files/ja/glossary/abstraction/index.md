---
title: Abstraction (抽象化)
slug: Glossary/Abstraction
---

{{Glossary("Computer_Programming", "コンピュータープログラミング")}}における抽象化とは、複雑なソフトウェアシステムにおいて、複雑さを軽減し、また効率的な設計と実装を可能にする方法です。これはシステムの技術的な複雑さを、{{Glossary("API")}} の背後に隠します。

## データ抽象化の利点

- ユーザーが低レベルコードを書くのを避けるのに役立つ。
- コードの重複を避けて再利用性を上げる。
- クラスの内部実装をユーザーに影響することなく独立して変更できる。
- 重要な詳細情報だけがユーザーに提供されているため、アプリケーションやプログラムのセキュリティ向上に役立つ。

## 例

```js
class ImplementAbstraction {
  // method to set values of internal members
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log("a = " + this.a);
    console.log("b = " + this.b);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

## 詳細情報

### 基礎知識

- Wikipedia 上の記事 「[抽象化\_(計算機科学)](<https://ja.wikipedia.org/wiki/抽象化_(計算機科学)>)」
