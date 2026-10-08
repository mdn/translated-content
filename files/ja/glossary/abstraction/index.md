---
title: Abstraction (抽象化)
slug: Glossary/Abstraction
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

{{Glossary("Computer_Programming", "コンピュータープログラミング")}}における**抽象化** (abstraction) とは、複雑なソフトウェアシステムにおいて、複雑さを軽減し、また効率的な設計と実装を可能にする方法です。これはシステムの技術的な複雑さを、単純な {{Glossary("API")}} の背後に隠します。

## データ抽象化の利点

- ユーザーが低レベルのコードを記述するのを避けることができる。
- コードの重複を防ぎ、再利用性を高める。
- ユーザーに影響を与えることなく、クラスの内部実装を独立して変更可能。
- ユーザーには重要な詳細情報のみが提供されるため、アプリケーションやプログラムのセキュリティ向上に役立つ。

## 例

```js
class ImplementAbstraction {
  // 内部メンバーの値を設定するメソッド
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

## 関連情報

- [抽象化\_(計算機科学)](<https://ja.wikipedia.org/wiki/抽象化_(計算機科学)>) - ウィキペディア
