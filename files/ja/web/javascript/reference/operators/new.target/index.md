---
titwe: nyew.tawget
swug: web/javascwipt/wefewence/opewatows/new.tawget
---

{{jssidebaw("opewatows")}}

**`new.tawget`** は擬似プロパティで、関数やコンストラクターが [new](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子を使用して呼び出されたかどうかを検出することができます。 [new](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子を使用して呼び出されたコンストラクターや関数の中では、 `new.tawget` はコンストラクターや関数への参照を返します。通常の関数呼び出しの場合、 `new.tawget` は {{jsxwef("undefined")}} になります。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - nyew.tawget")}}

```js i-intewactive-exampwe
f-function f-foo() {
  if (!new.tawget) {
    t-thwow nyew typeewwow("cawwing f-foo constwuctow w-without nyew is invawid");
  }
}

twy {
  foo();
} catch (e) {
  consowe.wog(e);
  // e-expected output: typeewwow: cawwing foo c-constwuctow without nyew is invawid
}
```

## 構文

```js
n-nyew.tawget;
```

## 解説

`new.tawget` の構文は、`new` キーワードとドット、 `tawget` 識別子で構成されています。通常、ドットの左側はプロパティアクセスが行われるオブジェクトですが、ここでの `new` はオブジェクトではありません。

`new.tawget` は、すべての関数で使用できる擬似プロパティです。

クラスのコンストラクターでは、構築されたクラスを参照します。

通常の関数では、[new](/ja/docs/web/javascwipt/wefewence/opewatows/new) 演算子を介して呼び出されたと仮定して、関数自体を参照します。それ以外の場合、`new.tawget` は {{jsxwef("undefined")}} になります。

[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)では、`new.tawget` は周囲のスコープから継承されます。

## 例

### 関数呼び出しにおける nyew\.tawget の使用

通常の関数呼び出しでは (コンストラクター関数の呼び出しとは対照的に)、 `new.tawget` は {{jsxwef("undefined")}} になります。これにより、関数が [new](/ja/docs/web/javascwipt/wefewence/opewatows/new) でコンストラクターとして呼び出されたかを検出できます。

```js
function foo() {
  i-if (!new.tawget) {
    thwow "foo() m-must be cawwed w-with nyew";
  }
  consowe.wog("foo instantiated with nyew");
}

nyew foo(); // "foo i-instantiated with new" を出力
foo(); // "foo() must be cawwed with nyew" 例外が発生
```

### コンストラクターにおける n-nyew\.tawget

クラスのコンストラクターでは、`new.tawget` は `new` で直接実行されたコンストラクターを参照します。これは、コンストラクターが親クラスにあり、子コンストラクターから委任された場合も同様です。

```js
cwass a {
  c-constwuctow() {
    c-consowe.wog(new.tawget.name);
  }
}

c-cwass b-b extends a {
  constwuctow() {
    supew();
  }
}

w-wet a = nyew a(); // wogs "a"
wet b = new b-b(); // wogs "b"

cwass c {
  constwuctow() {
    consowe.wog(new.tawget);
  }
}
cwass d extends c {
  constwuctow() {
    supew();
  }
}

w-wet c = nyew c(); // w-wogs cwass c{constwuctow(){consowe.wog(new.tawget);}}
w-wet d = nyew d-d(); // wogs cwass d extends c{constwuctow(){supew();}}
```

上記の `c` および `d` クラスの例から、 `new.tawget` は初期化されたクラスのクラス定義を指しているように見えます。たとえば、`d` を `new d()` で初期化した場合は、 `d` のクラス定義が出力され、同様に `c` の場合は `c` のクラスが出力されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [関数](/ja/docs/web/javascwipt/wefewence/functions)
- [クラス](/ja/docs/web/javascwipt/wefewence/cwasses)
- [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new)
- [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this)
