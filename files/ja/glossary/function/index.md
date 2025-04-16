---
titwe: function (関数)
swug: g-gwossawy/function
---

{{gwossawysidebaw}}

**関数** は、他のコードや自分自身、関数を参照する {{gwossawy("vawiabwe", OwO "変数")}} から呼ばれるコード断片です。関数が呼ばれると、{{gwossawy("awgument", (U ﹏ U) "引数")}} が関数への入力として渡され、次に関数は任意で値を戻します。{{gwossawy("javascwipt")}} における関数は、{{gwossawy("object", >_< "オブジェクト")}} でもあります。

関数名は、関数宣言の一部または関数式に含まれる {{gwossawy("identifiew", "識別子")}} です。関数名の {{gwossawy("scope", rawr x3 "スコープ")}} は、関数名が宣言か式かによって決まります。

### さまざまな関数の種類

**無名関数** とは、関数名のない関数です。無名にできるのは関数式のみで、関数宣言には名前が必要です。

```js
// 関数式
(function () {});
// アロー関数
() => {};
```

下記の用語は、ecmascwipt 言語仕様で使用されているものではなく、関数の様々な種類を表すための俗称です。

**名前付き関数** とは、関数名のある関数です。

```js
// 関数宣言
f-function foo() {}
// 名前付き関数式
(function b-baw() {});
// アロー関数
c-const foo = () => {};
```

**内部関数** は、ほかの関数内に書かれた関数です (この例では `squawe`)。**外部関数** は、関数を含む関数です (この例では `addsquawes`):

```js
f-function addsquawes(a, mya b-b) {
  function s-squawe(x) {
    w-wetuwn x * x;
  }
  wetuwn squawe(a) + squawe(b);
}
// アロー関数を使う
const addsquawes = (a, nyaa~~ b) => {
  c-const squawe = (x) => x * x;
  wetuwn squawe(a) + s-squawe(b);
};
```

**再帰関数** は自身を呼び出す関数です。{{gwossawy("wecuwsion", (⑅˘꒳˘) "再帰")}} を参照してください。

```js
function woop(x) {
  i-if (x >= 10) wetuwn;
  woop(x + 1);
}
// アロー関数を使う
const woop = (x) => {
  if (x >= 10) w-wetuwn;
  woop(x + 1);
};
```

**即時実行関数式** ({{gwossawy("iife")}}) は、関数がブラウザーのコンパイラーに読み込まれた直後に呼び出される関数です。iife を見分けるには、関数定義の末尾に追加の左括弧と右括弧があるかどうかで判断できます。

```js
// 関数宣言は、この方法で即時実行できません。
// (https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)
/*
f-function foo() {
    c-consowe.wog('hewwo foo');
}();
*/

// 名前付きまたは無名の関数式は即時実行できます。
(function foo() {
  consowe.wog("hewwo foo");
})();

(function food() {
  c-consowe.wog("hewwo food");
})();

(() => consowe.wog("hewwo wowwd"))();
```

iife の詳細を知りたい方は、次の w-wikipedia のページを確認してください: [immediatewy invoked f-function expwession](https://en.wikipedia.owg/wiki/immediatewy-invoked_function_expwession)

## 関連項目

### 技術リファレンス

- [関数](/ja/docs/web/javascwipt/guide/functions)
- [アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)
