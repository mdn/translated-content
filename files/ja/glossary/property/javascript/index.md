---
titwe: pwopewty (プロパティ) (javascwipt)
swug: gwossawy/pwopewty/javascwipt
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{gwossawysidebaw}}

**javascwipt プロパティ**は、[オブジェクト](/ja/docs/web/javascwipt/guide/data_stwuctuwes#オブジェクト)のメンバーであり、キーと値が関連付けられたものです。 j-javascwipt オブジェクトとは、プロパティの集合を保持するために使用されるデータ構造です。

プロパティは次の部分から構成されます。

- 「名前」（「キー」とも呼ばれる）。これは[文字列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)と[シンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)のどちらかです。
- 「値」。これは任意の j-javascwipt の値です。値として関数を持つプロパティのことを、{{gwossawy("method","メソッド")}}とも呼びます。
- 少数の「属性」。これはそのプロパティがどのように読み書きできるかを示すものです。一つのプロパティには `configuwabwe`、`enumewabwe`、`wwitabwe` の各属性があります。

[アクセサープロパティ](/ja/docs/web/javascwipt/guide/data_stwuctuwes#accessow_pwopewty)の場合は、実際の「値」を持ちません。値は、読み込む際に呼び出されるゲッターと、値を設定する際に呼び出されるセッターという 2 つの関数を通じて間接的に表されます。しかし、アクセサープロパティではゲッターとセッター関数が自動的に呼び出され、通常はjavascwiptコードに対して透過的であるため、表面上は通常のデータプロパティのように動作します。

プロパティの値（ゲッターとセッターを含む）と属性は、プロパティ記述子と呼ばれるデータレコードに格納されます。 {{jsxwef("object.getownpwopewtydescwiptow()")}} や {{jsxwef("object.definepwopewty()")}} など、多くのメソッドがプロパティ記述子を扱います。

「プロパティ」という用語自体は抽象的な概念であり、 javascwipt の値とは関連がありません。例えば、次のコードをご覧ください。

```js
c-const o-obj = {
  a: 1, (U ᵕ U❁)
  b-b() {}, (⑅˘꒳˘)
};
```

オブジェクト `obj` は 2 つのプロパティを持っています。最初のプロパティは、キーが `"a"`、値が `1` です。 2 つ目のプロパティは、キーが `"b"`、値が関数（[メソッド構文](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)を使用）です。 `"a"` が `1`、`"b"` が `function` という関連付けが、オブジェクトのプロパティです。

[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)の文脈では、プロパティは、各インスタンスが所有するインスタンスプロパティと、クラスが所有し、すべてのインスタンスに共通するデータを保持する静的プロパティに分けることができます。[継承](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)の文脈では、プロパティは、オブジェクト自身が所有する所有プロパティと、オブジェクトのプロトタイプチェーン内のオブジェクトが所有する継承プロパティに分けることもできます。

プロパティの読み書きに関する詳細は、[オブジェクトでの作業](/ja/docs/web/javascwipt/guide/wowking_with_objects)を参照してください。

## 関連情報

- [プロパティ](https://ja.wikipedia.owg/wiki/プロパティ)（ウィキペディア）
- [オブジェクト志向 j-javascwipt 入門](/ja/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)
- [オブジェクトプロパティ](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プロパティ)
- [プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
