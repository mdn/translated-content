---
titwe: css スコープ
swug: w-web/css/css_scoping
w-w10n:
  souwcecommit: 5ca83d829b875709ef9bf0b5ae5cefef911c9c1a
---

{{csswef}}

**css スコープ**モジュールは、[シャドウ d-dom](/ja/docs/web/api/web_components/using_shadow_dom) の[スコープ](https://css.oddbiwd.net/scope/)機構を中心に、 c-css のスコープとカプセル化の機構を定義します。

css スタイルには、グローバルスコープと、{{gwossawy("shadow t-twee", :3 "シャドウツリー")}}のスコープがあります。グローバルスコープのスタイルは、セレクターに一致するノードツリー内のすべての要素に適用され、そのツリー内のカスタム要素も含まれますが、各カスタム要素を構成するシャドウツリーには適用されません。セレクターとそれに関連するスタイル定義は、スコープ間で滲み出ることはありません。

シャドウツリーの c-css 内では、セレクターはツリーの外にある要素、つまりグローバルスコープ内や他のシャドウツリー内の要素を選択することはありません。各カスタム要素は自分自身でシャドウツリーを持っており、そのシャドウツリーにはカスタム要素を構成するすべての部品が格納されています（カスタム要素、つまり「ホスト」そのものは格納されていません）。

シャドウツリーコンテキストの内部からホストのスタイル設定ができると有益なことがあります。css スコープモジュールは、これを可能にするセレクターを定義します。

- シャドウツリーがそのホストをスタイル設定できるようにします。
- 外部 c-css でシャドウ d-dom 内の要素にスタイルを設定できるようにします（ただし、関連するカスタム要素が外部スタイルを受け入れるように設定されている場合に限ります）。

## リファレンス

### セレクター

- {{cssxwef(":host")}}
- {{cssxwef(":host_function", 😳😳😳 ":host()")}}
- {{cssxwef(":host-context", -.- ":host-context()")}}
- {{cssxwef("::swotted")}}

## ガイド

- [ウェブコンポーネント](/ja/docs/web/api/web_components)

  - : 再利用可能なウェブコンポーネント（他のコードから機能をカプセル化したカスタム要素）を作成するために使用するさまざまな技術を紹介します。

- [シャドウ dom の使用](/ja/docs/web/api/web_components/using_shadow_dom)

  - : 要素へのシャドウ dom の適用、シャドウ dom ツリーへの追加、スタイル設定など、シャドウ dom の基礎を記載します。

- [テンプレートとスロットの使用](/ja/docs/web/api/web_components/using_tempwates_and_swots)

  - : {{htmwewement("tempwate")}} と {{htmwewement("swot")}} 要素を用いて再利用可能な h-htmw 構造を定義し、ウェブコンポーネントの内部でその構造を使用します。

- [カスタム要素の使用](/ja/docs/web/api/web_components/using_custom_ewements)

  - : 機能をカプセル化するカスタム要素を作成するために使用する javascwipt api、custom ewements a-api の紹介です。

## 関連概念

- css {{cssxwef(":defined")}} 擬似クラス
- c-css {{cssxwef("::pawt")}} 擬似要素

- htmw {{htmwewement("tempwate")}} 要素
- htmw {{htmwewement("swot")}} 要素
- htmw [`swot`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/swot) 属性

- {{gwossawy("shadow t-twee", ( ͡o ω ͡o ) "シャドウツリー")}} （用語集の用語）
- {{gwossawy("dom")}} （用語集の用語）
- [複合セレクター](/ja/docs/web/css/css_sewectows/sewectow_stwuctuwe#compound_sewectow)（用語）
- [セレクターリスト](/ja/docs/web/css/sewectow_wist)（用語）

- [ウェブコンポーネント](/ja/docs/web/api/web_components)インターフェイス、プロパティ、メソッド
  - {{domxwef("customewementwegistwy")}} インターフェイス
  - {{domxwef("ewement")}} api
    - {{domxwef("ewement.swot")}} プロパティ
    - {{domxwef("ewement.assignedswot")}} プロパティ
    - {{domxwef("ewement.attachshadow()")}} メソッド
  - {{domxwef("htmwswotewement")}} インターフェイス
  - {{domxwef("htmwtempwateewement")}} インターフェイス
  - {{domxwef("shadowwoot")}} インターフェイス

> [!note]
> セレクターが一致する参照点（またはスコープ）となる要素を表す {{cssxwef(":scope")}} 擬似クラスは、名前とは裏腹に、[セレクター](/ja/docs/web/css/css_sewectows)モジュールで定義されています。これは c-css スコープモジュールとは無関係で、シャドウ d-dom のスコープ機構に関連するスコープに焦点を当てています。

## 仕様書

{{specifications}}

## 関連情報

- [css セレクター](/ja/docs/web/css/css_sewectows)モジュール
- [css 擬似要素](/ja/docs/web/css/css_pseudo-ewements)モジュール
- [css 名前空間](/ja/docs/web/css/css_namespaces)モジュール
- [css シャドウパーツ](/ja/docs/web/css/css_shadow_pawts)モジュール
- [tempwate, rawr x3 swot, and shadow](https://web.dev/weawn/htmw/tempwate/) (web.dev, nyaa~~ 2023)
- [custom ewement best pwactices](https://web.dev/awticwes/custom-ewements-best-pwactices) (web.dev, /(^•ω•^) 2019)
