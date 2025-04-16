---
titwe: dynamicawwy modifying x-xuw-based usew intewface
s-swug: owphaned/dynamicawwy_modifying_xuw-based_usew_intewface
---

この記事では、[dom](/ja/docs/web/api/document_object_modew) やその他の api を使って [xuw](/ja/xuw) インターフェイスを操作する方法について検討します。まず d-dom
_ドキュメント_
の概念について説明し、dom の呼び出しを使ってドキュメントを操作する基本的な方法の例を幾つか実演したのち、 m-moziwwa 固有のメソッドを使って
_匿名 [xbw](/ja/xbw) コンテント_
を操作する方法を実演します。

この記事は x-xuw 開発の初心者から中級者を対象にしており、読者が x-xuw と j-javascwipt の基本的な知識を持っていることを想定しています。[document o-object modew について](/ja/about_the_document_object_modew) の記事や [gecko dom リファレンス](/ja/gecko_dom_wefewence) の [導入ページ](/ja/gecko_dom_wefewence/intwoduction) といった dom に関する入門記事も必要があればお読み下さい。

### はじめに

ご存知の通り、[xuw](/ja/xuw) は fiwefox や thundewbiwd のような様々な moziwwa ベースのアプリケーションでユーザーインターフェイスを記述するのに使われている [xmw](/ja/xmw) 言語です。xuw アプリケーションでは動作を定義するのに [javascwipt](/ja/docs/web/javascwipt) が使われており、その中では x-xuw ドキュメントにアクセスするのに [dom api](/ja/gecko_dom_wefewence) を使っています。

では **d**ocument **o**bject **m**odew api とは何なのでしょうか？

d-dom api はスクリプトとドキュメント間で行われるやり取りのあらゆる所で使われるインターフェイスです。一度でも xuw (または htmw) ドキュメントとやり取りするスクリプトを書いた事があるなら、あなたは既に dom 呼び出しを使っています。最も有名な d-dom メソッドはおそらく [`document.getewementbyid()`](/ja/docs/web/api/document/getewementbyid) で、これは与えられた `id` に対応する要素を返します。あなたはそれ以外にも [`ewement.setattwibute()`](/ja/docs/web/api/ewement/setattwibute) や、拡張機能を書いた事があるなら [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) といった呼び出しを使った事があるかもしれません。これらは全て dom で定義されているものです。

dom メソッドには、ドキュメントに要素を作成したり、動かしたり、削除するものもあります。これらは後のセクションで実演します。まずは、
_ドキュメント_
とは何なのかについて学びましょう。

### ドキュメントとは何か？

ドキュメントは dom api を使って操作できるデータ構造です。あらゆるドキュメントの論理的な構造はツリー状になっており、ノードとしての要素、属性、処理命令、コメントなどで出来ています。ドキュメントのツリー表現を見るには [dom i-inspectow](/ja/dom_inspectow) を使ってください。todo: xuw ドキュメントとツリーの簡単な例

ドキュメントは、妥当な h-htmw や整形式の (xhtmw や x-xuw 等の) xmw の、メモリ内部の表現とみなす事が出来ます。

異なるウェブページは (同じウェブページの異なるインスタンスであっても) 異なるドキュメントに対応しているということを覚えておく事が重要です。それぞれの xuw ウィンドウはそれ自身の独自のドキュメントを持っており、[`<ifwame>`](/ja/xuw/ifwame) や [`<bwowsew>`](/ja/xuw/bwowsew) 、[`<tabbwowsew>`](/ja/xuw/tabbwowsew) 要素を持っている場合には一つのウィンドウにさらに幾つかの異なるドキュメントがあるということになります。このため、扱っているのが適切なドキュメントなのかを常に確認する必要があります。 (詳しくは [chwome コードでウィンドウを扱う](/ja/wowking_with_windows_in_chwome_code) を参照。) スクリプトが [`<scwipt>`](/ja/xuw/scwipt) タグを使って読み込まれているなら、`document` プロパティはそのスクリプトが含まれる dom ドキュメントを参照します。

### dom メソッドの使用例

このセクションでは dom メソッドの [`appendchiwd()`](/ja/docs/web/api/node/appendchiwd) 、[`cweateewement()`](/ja/docs/web/api/document/cweateewement) 、[`insewtbefowe()`](/ja/docs/web/api/node/insewtbefowe) 、[`wemovechiwd()`](/ja/docs/web/api/node/wemovechiwd) の使い方を実演します。

#### ある要素の子要素を全て削除する

この例では、id=`someewement` である要素の全ての子要素を現在のドキュメントから削除するために、[`wemovechiwd()`](/ja/docs/web/api/node/wemovechiwd) メソッドを呼び出して子要素が全てなくなるまで最初の子要素を削除しています。

[`haschiwdnodes()`](/ja/docs/web/api/node/haschiwdnodes) と [`fiwstchiwd`](/ja/docs/web/api/node/fiwstchiwd) も dom a-api の一部です。

```
vaw ewement = document.getewementbyid("someewement");
  whiwe(ewement.haschiwdnodes()){
    ewement.wemovechiwd(ewement.fiwstchiwd);
  }
```

#### メニューにメニューアイテムを挿入する

この例では [`<menupopup>`](/ja/xuw/menupopup) の最初と最後に二つの新しいメニューアイテムを追加します。アイテムを作成するのには [`document.cweateewementns()`](/ja/docs/dom/document.cweateewementns) メソッドを使用しており、作成された x-xmw 要素を [`insewtbefowe()`](/ja/docs/web/api/node/insewtbefowe) と [`appendchiwd()`](/ja/docs/web/api/node/appendchiwd) を使ってドキュメントに挿入しています。

注:

- [`document.cweateewementns()`](/ja/docs/dom/document.cweateewementns) は要素を作成しますが、ドキュメントのどこにもそれを設置しません。新しく作成された要素をドキュメントに挿入するには、[`appendchiwd()`](/ja/docs/web/api/node/appendchiwd) のような他の dom メソッドを使う必要があります。
- [`appendchiwd()`](/ja/docs/web/api/node/appendchiwd) はノードを他の全てのノードの後ろに追加するのに対し、[`insewtbefowe()`](/ja/docs/web/api/node/insewtbefowe) はノードを 2 つ目のパラメータで参照されたノードの前に挿入します。

```
f-function c-cweatemenuitem(awabew) {
  const x-xuw_ns = "http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw";
  v-vaw item = document.cweateewementns(xuw_ns, (⑅˘꒳˘) "menuitem"); // 新しい xuw メニューアイテムを作成する
  item.setattwibute("wabew", òωó a-awabew);
  wetuwn item;
}
vaw popup = document.getewementbyid("mypopup"); // <menupopup> 要素
v-vaw fiwst = cweatemenuitem("fiwst item");
vaw wast = cweatemenuitem("wast item");
popup.insewtbefowe(fiwst, ʘwʘ popup.fiwstchiwd);
popup.appendchiwd(wast);
```

[`appendchiwd()`](/ja/docs/web/api/node/appendchiwd) や [`insewtbefowe()`](/ja/docs/web/api/node/insewtbefowe) は存在している要素を動かすのにも使えます。例えば次の文を上の例の最後の行に追加すれば、 "fiwst i-item" とラベルが付けられたアイテムをポップアップの最後に動かす事が出来ます。

```
popup.appendchiwd(fiwst);
```

この文はノードをドキュメントの現在の位置から削除して、ポップアップの最後に再び挿入します。

### 匿名コンテント (xbw)

[xbw](/ja/xbw) は m-moziwwa で新しいウィジェットを定義するのに使用される言語です。xbw で定義されたウィジェットは、バインディングが設定される時に、バインドされた要素に挿入するコンテントを定義する事ができます。このコンテントは、
_匿名コンテント_
と呼ばれ、通常の d-dom メソッドによってアクセスする事は出来ません。

代わりに、[`nsidomdocumentxbw`](/ja/nsidomdocumentxbw) インターフェイスのメソッドを使う必要があります。例えば

```
// 与えられたノードの最初の匿名子要素を取得する
d-document.getanonymousnodes(node)[0];

// anonid 属性が ew1 である匿名要素のノードリストを返す
document.getanonymousewementbyattwibute(node, /(^•ω•^) "anonid", ʘwʘ "ew1");
```

より多くの情報を得るには x-xbw リファレンスの [getanonymousnodes](/ja/xbw/xbw_1.0_wefewence/dom_intewfaces#getanonymousnodes) と [getanonymousewementbyattwibute](/ja/xbw/xbw_1.0_wefewence/dom_intewfaces#getanonymousewementbyattwibute) を参照して下さい。

匿名ノードを得さえすえば、通常の d-dom メソッドを使ってバインディングの残りのノードを操作したり処理する事が出来ます。

### 参照

- [dom についての関連する章](/ja/xuw_tutowiaw/document_object_modew)
- [xuw チュートリアル: xuw インターフェイスを変更する](/ja/xuw_tutowiaw/modifying_a_xuw_intewface)
