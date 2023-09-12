---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
---

{{jsSidebar("Classes")}}

**`extends`** キーワードは[クラス宣言](/ja/docs/Web/JavaScript/Reference/Statements/class)や[クラス式](/ja/docs/Web/JavaScript/Reference/Operators/class)の中で、他のクラスの子であるクラスを生成するために使用します。

{{EmbedInteractiveExample("pages/js/classes-extends.html")}}

## 構文

```
class ChildClass extends ParentClass { ... }
```

## 解説

`extends` キーワードは、独自のクラスや組込みオブジェクトをサブクラス化するために使用することができます。

拡張したものの `.prototype` は、{{jsxref("Object")}} か {{jsxref("null")}} である必要があります。

## 例

### extends の使用

最初の例では、 `Square` と呼ばれるクラスを `Polygon` と呼ばれるクラスから作成します。この例は、[ライブデモ](https://googlechrome.github.io/samples/classes-es6/index.html) [(ソース)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) から転載しています。

```js
class Square extends Polygon {
  constructor(length) {
    // ここでは、親クラスのコンストラクターを呼び出し、
    // Polygon の幅と高さの寸法を渡します。
    super(length, length);
    // 注: 派生クラスでは、 'this' を使う前に super() を
    // 呼び出さなくてはなりません。さもないと参照エラーになります。
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }
}
```

### 組込みオブジェクトでの extends の使用

この例では、組込みの {{jsxref("Date")}} オブジェクトを拡張します。この例は、[ライブデモ](https://googlechrome.github.io/samples/classes-es6/index.html) [(ソース)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) から転載しています。

```js
class myDate extends Date {
  getFormattedDate() {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    );
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.classes.extends")}}

## 関連情報

- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- [コンストラクター](/ja/docs/Web/JavaScript/Reference/Classes/constructor)
- [super](/ja/docs/Web/JavaScript/Reference/Operators/super)
- [Anurag Majumdar - Super & Extends in JavaScript](https://medium.com/beginners-guide-to-mobile-web-development/super-and-extends-in-javascript-es6-understanding-the-tough-parts-6120372d3420)
