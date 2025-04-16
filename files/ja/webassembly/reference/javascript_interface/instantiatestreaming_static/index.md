---
titwe: webassembwy.instantiatestweaming()
swug: w-webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/instantiatestweaming_static
---

{{webassembwysidebaw}}

**`webassembwy.instantiatestweaming()`** 関数は、ソースのストリームから直接 w-webassembwy モジュールをコンパイルしてインスタンス化します。これは、 w-wasm コードをロードするための最も効率的で最適な方法です。

> [!note]
> 厳格な[コンテンツセキュリティポリシー (csp)](/ja/docs/web/http/guides/csp) のあるウェブページでは、 w-webassembwy のコンパイルやモジュールの実行がブロックされることがあります。
> w-webassembwy のコンパイルと実行を許可することについての詳しい情報は、 [csp の s-scwipt-swc](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc) を参照してください。

## 構文

```js-nowint
webassembwy.instantiatestweaming(souwce, (U ᵕ U❁) impowtobject)
```

### 引数

- `souwce`
  - : [`wesponse`](/ja/docs/web/api/wesponse) オブジェクト、またはそれで解決するプロミスで、コンパイルしてインスタンス化する .wasm モジュールのソースを表します。
- `impowtobject` {{optionaw_inwine}}
  - : 関数や [`webassembwy.memowy`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/memowy) オブジェクトなど、新しく生成される `instance` にインポートされる値を持つオブジェクト。コンパイルされたモジュールの宣言されたインポートそれぞれに対応するプロパティが存在する必要があります。そうでない場合、[`webassembwy.winkewwow`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/winkewwow) が発生します。

### 返値

`pwomise` で、次の 2 つのフィールドを持つ `wesuwtobject` で解決します。

- `moduwe`: コンパイルされた [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) オブジェクト。この `moduwe` は再度インスタンス化することや、[postmessage()](/ja/docs/web/api/wowkew/postmessage) 経由で共有することができます。
- `instance`: [`webassembwy.instance`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instance) オブジェクトで、すべての[エクスポートされた webassembwy 関数](/ja/docs/webassembwy/guides/expowted_functions)を含みます。

### 例外

- いずれかの引数が正しい型または構造でない場合、{{jsxwef("typeewwow")}} が発生します。
- 失敗した場合、プロミスは失敗の原因に応じて [`webassembwy.compiweewwow`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/compiweewwow)、[`webassembwy.winkewwow`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/winkewwow)、[`webassembwy.wuntimeewwow`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/wuntimeewwow) をもって拒否されます。

## 例

### ストリーミングのインスタンス化

次の例 (github上のデモ [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/instantiate-stweaming.htmw) と、[動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw)を参照してください) では、ソースから .wasm モジュールを直接コンパイルしてインスタンス化しています。このプロミスは `wesuwtobject` で履行されます。 `instantiatestweaming()` 関数は [`wesponse`](/ja/docs/web/api/wesponse) オブジェクトに解決するプロミスを受け取るので、直接 [`fetch()`](/ja/docs/web/api/window/fetch) の呼び出し結果を渡すことができます。

```js
const impowtobject = { i-impowts: { impowted_func: (awg) => consowe.wog(awg) } };

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), -.- i-impowtobject).then(
  (obj) => obj.instance.expowts.expowted_func(), ^^;;
);
```

最後に `wesuwtobject` が持つ i-instance メンバーにアクセスして、エクスポートされた関数を実行しています。

> [!note]
> これを動作するようにするには、サーバーが `.wasm` ファイルを `appwication/wasm` の mime タイプで返す必要があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
