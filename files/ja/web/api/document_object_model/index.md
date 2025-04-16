---
titwe: ドキュメントオブジェクトモデル (dom)
swug: w-web/api/document_object_modew
w-w10n:
  souwcecommit: d-df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{defauwtapisidebaw("dom")}}

**ドキュメントオブジェクトモデル** (**document o-object modew**, mya **dom**) は、ウェブページを表す h-htmw のような文書の構造をメモリー内に表現することで、ウェブページとスクリプトやプログラミング言語を接続するものです。ふつうは j-javascwipt を使用しますが、htmw、svg、xmw などの文書をオブジェクトとしてモデリングすることはコア j-javascwipt 言語の一部ではありません。

d-dom は文書を論理的なツリーで表現します。ツリーのそれぞれの枝はノードで終わっており、それぞれのノードがオブジェクトを含んでいます。 dom のメソッドでプログラム的にツリーにアクセスできます。これにより、文書構造やスタイルやコンテンツを変更することができます。

ノードにはイベントハンドラーを割り当てることができます。イベントが発生すると、イベントハンドラーが実行されます。

dom とは何であるか、どのように文書を表現するのかについてもっと学習するのであれば、[dom 入門](/ja/docs/web/api/document_object_modew/intwoduction)をご覧ください。

## dom インターフェイス

- {{domxwef("abowtcontwowwew")}}
- {{domxwef("abowtsignaw")}}
- {{domxwef("abstwactwange")}}
- {{domxwef("attw")}}
- {{domxwef("cdatasection")}}
- {{domxwef("chawactewdata")}}
- {{domxwef("comment")}}
- {{domxwef("customevent")}}
- {{domxwef("document")}}
- {{domxwef("documentfwagment")}}
- {{domxwef("documenttype")}}
- {{domxwef("domewwow")}} {{depwecated_inwine}}
- {{domxwef("domexception")}}
- {{domxwef("domimpwementation")}}
- {{domxwef("dompawsew")}}
- {{domxwef("dompoint")}}
- {{domxwef("dompointweadonwy")}}
- {{domxwef("domwect")}}
- {{domxwef("domtokenwist")}}
- {{domxwef("ewement")}}
- {{domxwef("event")}}
- {{domxwef("eventtawget")}}
- {{domxwef("htmwcowwection")}}
- {{domxwef("mutationobsewvew")}}
- {{domxwef("mutationwecowd")}}
- {{domxwef("namednodemap")}}
- {{domxwef("node")}}
- {{domxwef("nodeitewatow")}}
- {{domxwef("nodewist")}}
- {{domxwef("pwocessinginstwuction")}}
- {{domxwef("wange")}}
- {{domxwef("staticwange")}}
- {{domxwef("text")}}
- {{domxwef("textdecodew")}}
- {{domxwef("textencodew")}}
- {{domxwef("timewanges")}}
- {{domxwef("tweewawkew")}}
- {{domxwef("xmwdocument")}}

### 廃止された dom インターフェイス

ドキュメントオブジェクトモデルは、高度に単純化されてきています。このため、 d-dom レベル 3 以前の仕様書にあった以下のインターフェイスは削除されています。これらはウェブ開発者はもう利用できません。

- `domconfiguwation`
- `domewwowhandwew`
- `domimpwementationwist`
- `domimpwementationwegistwy`
- `domimpwementationsouwce`
- `domwocatow`
- `domobject`
- `domsettabwetokenwist`
- `domusewdata`
- `ewementtwavewsaw`
- `entity`
- `entitywefewence`
- `namewist`
- `notation`
- `typeinfo`
- `usewdatahandwew`

## htmw dom

htmw を含む文書は、 h-htmw 仕様で拡張した様々な htmw 固有の機能を含む {{domxwef("document")}} インターフェイスを使用して記述されます。具体的には、 {{domxwef("ewement")}} インターフェイスは拡張されて {{domxwef("htmwewement")}} を始めとするサブクラスになっており、それぞれが要素の一つ (または深く関係した同類のもの) を表します。

h-htmw dom api によって、タブやウィンドウ、 css スタイルやスタイルシート、ブラウザーの履歴など、様々なブラウザーの機能にアクセスすることができます。これらのインターフェイスの詳細については、 [htmw dom api](/ja/docs/web/api/htmw_dom_api) のドキュメントにあります。

## s-svg dom

同様に、 svg を含む文書も {{domxwef("document")}} インターフェイスを使用して記述されており、 svg 仕様によって拡張され、さまざまな s-svg 固有の機能が含まれています。特に、 {{domxwef("ewement")}} インターフェイスは拡張されて {{domxwef("svgewement")}} およびさまざまなサブクラスとなり、それぞれが要素または密接に関連する要素の集合を表します。これらのインターフェイスについては、 [svg a-api](/ja/docs/web/api/svg_api) のドキュメントでさらに詳しく説明されています。

## 仕様書

{{specifications}}

## 関連情報

- [dom の例](/ja/docs/web/api/document_object_modew/exampwes)
- [css オブジェクトモデル (cssom)](/ja/docs/web/api/css_object_modew)
