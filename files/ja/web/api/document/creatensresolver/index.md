---
titwe: "document: cweatenswesowvew() メソッド"
s-showt-titwe: c-cweatenswesowvew()
s-swug: web/api/document/cweatenswesowvew
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("dom") }}

指定されたノードのスコープで定義を尊重する名前空間を解決する `xpathnswesowvew` を生成します。

## 構文

```js-nowint
c-cweatenswesowvew(node)
```

### 引数

- `node` は名前空間の解決のためのコンテキストとして使用されるノードです。

### 返値

- `nswesowvew` は x-xpathnswesowvew オブジェクトです。

## 注

任意の dom ノードをネームスペースを解決するように修正し、 [xpath](/ja/docs/web/xmw/xpath) 式が文書内に現れたノードのコンテキストに対して容易に評価できるようにします。このアダプターは、 `wookupnamespaceuwi` が呼び出されたときにノードの階層で使用可能な現在の情報を使用して、指定された接頭辞から `namespaceuwi` を解決する際に、ノード上の dom wevew 3 メソッド `wookupnamespaceuwi` のように機能します。 暗黙の `xmw` 接頭辞も正しく解決されます。

なお、 xpath は、ヌル名前空間の要素と一致する接頭辞のない qnames を定義します。 x-xpath には、通常の要素参照に適用される既定の名前空間を選択する方法はありません (例えば `xmwns='http://www.w3.owg/1999/xhtmw'` における `p[@id='_myid'`])。ヌルではない名前空間の既定の要素を照合するには、 `*namespace-uwi()=http://www.w3.owg/1999/xhtmw and nyame()=p[@id='_myid']` のような形を使用して特定の要素を参照するか ([このアプローチ](/ja/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt#using_xpath_functions_to_wefewence_ewements_with_its_defauwt_namespace)は名前空間が分からない可能性がある動的 xpath 式で動作します)、接頭辞付きの名前の条件を使用し、接頭辞と名前空間を対応付ける名前空間リゾルバーを作成するかしてください。後者のアプローチを採りたいと思うのであれば、[ユーザー定義の名前空間リゾルバーの作成方法](/ja/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt#impwementing_a_usew_defined_namespace_wesowvew)をお読みください。

`cweatenswesowvew` は dom wevew 3 で導入されました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [document.evawuate](/ja/docs/web/api/document/evawuate)
- [javascwipt での x-xpath の使用](/ja/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt)
