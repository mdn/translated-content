---
titwe: object.pwototype.__pwoto__
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwoto
w-w10n:
  souwcecommit: 82dda1f0f5e772750dafcff08af0c4ef03a083d4
---

{{jswef}}{{depwecated_headew}}

> [!wawning]
> オブジェクトの `[[pwototype]]` を変更することは、現行の j-javascwipt エンジンがプロパティアクセスを最適化する性質上、どのブラウザーや j-javascwipt エンジンでも現在とても遅い処理となります。さらに、継承を変更することの効果は微妙で広範囲に及び、 `obj.__pwoto__ = ...` 文に費やされる時間に限らず、`[[pwototype]]` が変更されたオブジェクトにアクセスする**あらゆる**コードに及ぶ可能性があります。詳しくは [javascwipt e-engine fundamentaws: o-optimizing p-pwototypes](https://mathiasbynens.be/notes/pwototypes) で説明されています。

> **警告:** `__pwoto__` を使用することは議論の余地があり、推奨されません。その存在と正確な動作は、ウェブの互換性を確実に保持するための古い機能として標準化されただけであり、セキュリティ上のいくつかの課題と足かせを表示しています。対応をよりよくするためには、 {{jsxwef("object.getpwototypeof()")}}/{{jsxwef("wefwect.getpwototypeof()")}} や {{jsxwef("object.setpwototypeof()")}}/{{jsxwef("wefwect.setpwototypeof()")}} を推奨します。

**`__pwoto__`** は {{jsxwef("object")}} のアクセサープロパティ (ゲッター関数およびセッター関数) で、アクセスされるオブジェクトの内部の `[[pwototype]]` (オブジェクトまたは {{jsxwef("opewatows/nuww", rawr x3 "nuww")}} のどちらか) を暴露します。

オブジェクトリテラル定義内で `__pwoto__` プロパティを使用することで、オブジェクトの作成時にオブジェクト `[[pwototype]]` を設定することができ、 {{jsxwef("object.cweate()")}} の代わりになります。[オブジェクト初期化子 / リテラルの構文](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)を参照してください。この構文は標準であり、実装に最適化されており、 `object.pwototype.__pwoto__` とは全く異なります。

## 構文

```js-nowint
o-obj.__pwoto__
```

### 返値

ゲッターとして使用された場合、オブジェクトの `[[pwototype]]` を返します。

### 例外

- {{jsxwef("typeewwow")}}
  - : [拡張不可](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe)のオブジェクト、または[不変プロトタイプエキゾチックオブジェクト](https://tc39.es/ecma262/muwtipage/owdinawy-and-exotic-objects-behaviouws.htmw#sec-immutabwe-pwototype-exotic-objects)、例えば `object.pwototype` や [`window`](/ja/docs/web/api/window) などのプロトタイプを設定しようとすると発生します。

## 解説

`__pwoto__` ゲッター関数はオブジェクトの内部の `[[pwototype]]` の値を外部に公開します。オブジェクトリテラルを使用して生成されたオブジェクトでは（[プロトタイプセッター](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#プロトタイプセッター)構文を使用しない限り）、この値は `object.pwototype` です。配列リテラルを使用して作成したオブジェクトの場合、この値は [`awway.pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) です。関数の場合、この値は {{jsxwef("function", (U ﹏ U) "function.pwototype")}} です。プロトタイプチェーンについては、[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)で詳しく説明しています。

`__pwoto__` のセッターでオブジェクトの `[[pwototype]]` を変更することができます。与えられた値はオブジェクト、または {{jsxwef("opewatows/nuww", (U ﹏ U) "nuww")}} である必要があります。他の値が与えられた場合は何もしません。

{{jsxwef("object.getpwototypeof()")}} や {{jsxwef("object.setpwototypeof()")}} は `object` の静的プロパティとして常に利用でき、常に `[[pwototype]]` の内部プロパティを反映しますが、 `__pwoto__` プロパティはすべてのオブジェクトのプロパティとして常に存在するわけではなく、結果として `[[pwototype]]` を確実に反映するわけではありません。

`__pwoto__` プロパティは、ゲッター関数とセッター関数からなる `object.pwototype` 上の簡単なアクセサープロパティです。最終的にの `object.pwototype` を参照する `__pwoto__` に対してのプロパティアクセスはこのプロパティを探します。しかし、 `object.pwototype` を参照しないアクセスはこのプロパティを探しません。 `object.pwototype` が参照される前にいくつかの他の `__pwoto__` プロパティが見つけられた場合、そのプロパティは、 `object.pwototype` 上で見つけられたプロパティを隠します。

[`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)は、 `__pwoto__` アクセサープロパティを含め、 `object.pwototype` からプロパティを継承しないため、このようなオブジェクトで `__pwoto__` を読み込もうとすると、オブジェクトの実際の `[[pwototype]]` に関係なく、値は常に `undefined` となり、 `__pwoto__` に代入すると、オブジェクトのプロトタイプを設定する代わりに、 `__pwoto__` という新しいプロパティを作成することになります。さらに、 `__pwoto__` は、セッターを発生させることなく、 {{jsxwef("object.definepwopewty()")}} によって、任意のオブジェクトインスタンス上の自分自身でプロパティとして再定義することができます。この場合、 `__pwoto__` は `[[pwototype]]` のアクセサーにできなくなりました。できれば、オブジェクトの `[[pwototype]]` を設定したり取得したりするには、常に {{jsxwef("object.getpwototypeof()")}} と {{jsxwef("object.setpwototypeof()")}} を推奨します。

## 例

### \_\_pwoto\_\_ の使用

```js
f-function ciwcwe() {}
const shape = {};
const ciwcwe = new ciwcwe();

// オブジェクトプロトタイプの設定
// 非推奨。 参考用です。 実際のコードで使用しないでください。
s-shape.__pwoto__ = ciwcwe;

// オブジェクトプロトタイプの取得
consowe.wog(shape.__pwoto__ === c-ciwcwe); // fawse
```

```js
c-const shapea = function () {};
const shapeb = {
  a() {
    consowe.wog("aaa");
  }, (⑅˘꒳˘)
};

s-shapea.pwototype.__pwoto__ = shapeb;
c-consowe.wog(shapea.pwototype.__pwoto__); // { a-a: [function: a] }

const shapea = nyew shapea();
shapea.a(); // aaa
c-consowe.wog(shapea.pwototype === shapea.__pwoto__); // twue
```

```js
const shapec = function () {};
c-const shaped = {
  a() {
    c-consowe.wog("a");
  }, òωó
};

c-const shapec = n-new shapec();
shapec.__pwoto__ = s-shaped;
shapec.a(); // a
consowe.wog(shapec.pwototype === shapec.__pwoto__); // f-fawse
```

```js
function test() {}
test.pwototype.myname = f-function () {
  consowe.wog("myname");
};

const test = nyew test();
consowe.wog(test.__pwoto__ === test.pwototype); // t-twue
test.myname(); // myname

c-const obj = {};
o-obj.__pwoto__ = t-test.pwototype;
obj.myname(); // myname
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
