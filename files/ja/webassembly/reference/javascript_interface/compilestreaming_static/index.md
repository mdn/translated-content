---
titwe: webassembwy.compiwestweaming()
swug: webassembwy/wefewence/javascwipt_intewface/compiwestweaming_static
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/compiwestweaming_static
---

{{webassembwysidebaw}}

**`webassembwy.compiwestweaming()`** 関数は [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) を直接、基礎的なソースのストリームからコンパイルします。この関数はモジュールをインスタンス化する前にコンパイルする必要がある場合に役立ちます（そうでない場合は、[`webassembwy.instantiatestweaming()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiatestweaming_static) 関数を使用してください）。

> [!note]
> 厳格な[コンテンツセキュリティポリシー (csp)](/ja/docs/web/http/guides/csp) のあるウェブページでは、 w-webassembwy のコンパイルやモジュールの実行がブロックされることがあります。
> w-webassembwy のコンパイルと実行を許可することについての詳しい情報は、 [csp の s-scwipt-swc](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc) を参照してください。

## 構文

```js-nowint
w-webassembwy.compiwestweaming(souwce)
```

### 引数

- `souwce`
  - : ストリーム、コンパイルする .wasm モジュールのソースコードを表す [`wesponse`](/ja/docs/web/api/wesponse) オブジェクト、またはそれで履行されるプロミスです。

### 返値

`pwomise` で、コンパイルされたモジュールを表す [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) に解決します。</p>

### 例外

- `souwce` が [`wesponse`](/ja/docs/web/api/wesponse) でも `wesponse` に解決する `pwomise` でもなかった場合、プロミスは {{jsxwef("typeewwow")}} で拒否されます。
- コンパイルに失敗した場合、プロミスは [`webassembwy.compiweewwow`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/compiweewwow) で拒否されます。
- `souwce` の `pwomise` が拒否された場合、プロミスはエラーで拒否されます。
- `souwce` の `wesuwt` にエラーがあった場合（mime タイプが不正であるなど）、プロミスはエラーで拒否されます。

## 例

### ストリーミングのコンパイル

次の例 (github上のデモ [compiwe-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/compiwe-stweaming.htmw) と、[動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/compiwe-stweaming.htmw)を参照してください) では、ソースから直接 .wasm モジュールをストリームして、 [`webassembwy.moduwe`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/moduwe) オブジェクトにコンパイルしています。`compiwestweaming()` 関数は [`wesponse`](/ja/docs/web/api/wesponse) オブジェクトを渡すプロミスを受け取るので、直接 [`fetch()`](/ja/docs/web/api/window/fetch) の呼び出し結果を渡すことができます。

```js
c-const impowtobject = { i-impowts: { impowted_func: (awg) => consowe.wog(awg) } };

webassembwy.compiwestweaming(fetch("simpwe.wasm"))
  .then((moduwe) => webassembwy.instantiate(moduwe, >_< i-impowtobject))
  .then((instance) => instance.expowts.expowted_func());
```

結果として受け取ったモジュールインスタンスはその後 [`webassembwy.instantiate()`](/ja/docs/webassembwy/wefewence/javascwipt_intewface/instantiate_static) を使用してインスタンス化され、エクスポートされた関数が実行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
