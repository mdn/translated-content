---
title: "確認テスト: オブジェクト指向 JavaScript"
short-title: "テスト: オブジェクト指向 JavaScript"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript
l10n:
  sourceCommit: 46c276b76c9fbf1468070686ecd3abbf64761500
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

この確認テストの目的は、[JavaScript でのクラス](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)の記事を理解できたかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## OOJS 1

この課題では、`Shape` クラスの定義から始めましょう。このクラスには `name`, `sides`, `sideLength` の 3 つのプロパティがあります。このクラスは、正方形や正三角形のように、すべての辺の長さが同じである図形のみをモデルとしています。

課題を完了するには、次のようにしてください。

1. このクラスにコンストラクターを追加しましょう。コンストラクターは `name`, `sides`, `sideLength` プロパティを引数に取り、初期化します。
2. このクラスに新しいメソッド `calcPerimeter()` を追加しましょう。このメソッドは、外周の長さ（図形の外縁の長さ）を計算し、その結果をコンソールにログ出力します。
3. `Shape` クラスの新しいインスタンス `square` を作成しましょう。名前に `square`、 `sides` に `4`、 `sideLength` に `5` を指定しましょう。
4. このインスタンスに対して `calcPerimeter()` メソッドを呼び出して、計算結果が期待通りにブラウザーコンソールにログ出力されるかどうかを確認しましょう。
5. 新しい `Shape` のインスタンスとして `triangle` を作成しましょう。`name` は `triangle`、`sides` は `3`、`sideLength` は `3` とします。
6. `triangle.calcPerimeter()`を呼び出して、問題なく動作することを確認しましょう。

```js live-sample___oojs-1
class Shape {
  name;
  sides;
  sideLength;
}
```

{{ EmbedLiveSample("oojs-1", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は、次のようになるでしょう。

```js
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `${this.name} の外周の長さは ${this.sides * this.sideLength} です。`,
    );
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
```

</details>

## OOJS 2

それでは、いくつか継承を加えてみましょう。

課題を完了するには、次のようにしてください。

1. `Shape` を継承した `Square` クラスを作成しましょう。
2. 領域の面積を計算する `calcArea()` メソッドを `Square` に追加しましょう。
3. `Square` オブジェクトインスタンスの `name` プロパティには自動的に `square` が設定され、`sides` プロパティには自動的に `4` が設定されるようにコンストラクターを設定しましょう。コンストラクターを呼び出す際には、`sideLength` プロパティだけを提供すればよいことになります。
4. 適切なプロパティ値を持つ `Square` クラスのインスタンス `square` を作成し、その `calcPerimeter()` と `calcArea()` メソッドを呼び出して、問題なく動作することを示しましょう。

```js live-sample___oojs-2
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `${this.name} の外周の長さは ${this.sides * this.sideLength} です。`,
    );
  }
}

// ここから上のコードは変更しないでください。

// ここにコードを追加してください。
```

{{ EmbedLiveSample("oojs-2", "100%", 60) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な JavaScript は、次のようになるでしょう。

```js
// ...
// ここから上のコードは変更しないでください。

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    console.log(
      `${this.name} の面積は ${this.sideLength * this.sideLength} 平方です。`,
    );
  }
}

const square = new Square(4);

square.calcPerimeter();
square.calcArea();
```

</details>

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
