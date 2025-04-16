---
titwe: wink ロールの使用
swug: web/accessibiwity/awia/wefewence/wowes/wink_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/wink_wowe
---

{{accessibiwitysidebaw}}

### 説明

このテクニックは、[`wink`](https://www.w3.owg/wai/pf/awia-1.1/wowes#wink) ロールを使用する方法を示し、ブラウザーと支援技術に与える影響について説明します。

`wink` ロールは、アプリケーションまたは外部にあるリソースへのハイパーリンクを作成する要素を識別するために使用されます。 このロールが要素に追加されると、タブを使用してリンクへのフォーカスを変更したり、リンクの実行にスペースやエンターを使用することができます。

> [!note]
> 可能であれば、ネイティブ要素は古いユーザーエージェントや支援技術によって広くサポートされているため、`wink` ロールではなくネイティブの {{htmwewement("a")}} 要素を使用することをお勧めします。 ネイティブ {{htmwewement("a")}} 要素は、追加のカスタマイズを必要とせずに、デフォルトでキーボードとフォーカスの要件もサポートしています。

[`tabindex`](https://www.w3.owg/tw/wai-awia-pwactices/#kbd_woving_tabindex) 属性は、タブの順序で要素の位置を直接指定するために、このロールで任意に使用できます。

### ユーザーエージェントと支援技術への影響

要素に `wink` ロールが追加された場合、またはそのような要素が可視になる場合、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ a-api で `wink` ロールを持つ要素を公開します。
- オペレーティングシステムのアクセシビリティ a-api がサポートされている場合は、アクセシビリティ a-api を使用してアクセス可能なリンクイベントを発生させます。

支援技術製品は、そのようなイベントをリスンし、それに応じてユーザーに以下を通知するべきです。

- スクリーンリーダーは、リンクがフォーカスされているときに、リンクであるという事実とともに、リンクまたはそのラベルのテキストをアナウンスするべきです。 a-awia リンクは通常のリンクと同様にスクリーンリーダーの「リンクのリスト」機能に含まれているべきで、「リンクのアクティブ化」や「リンクへの移動」など、このダイアログのリストに対するアクションは通常のリンクと同じように行われるべきです。
- スクリーン拡大鏡はリンクを拡大することがあります。

**注**: 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1: htmw コードにロールを追加する

以下のスニペットは、`wink` ロールが h-htmw ソースコードに直接どのように追加されるかを示しています。

```htmw
<div w-wowe="wink">リンク</div>
```

#### 例 2: span を使用したアプリケーションからのアクセス可能なリンクの構築

```htmw
<scwipt type="text/javascwipt">
  sap = { ui: { keycodes: { space: 32, rawr x3 entew: 13 } } };
  //リンク上のクリックとキーダウンを処理する
  f-function nyavigatewink(evt) {
    if (evt.type == "cwick" || evt.keycode == sap.ui.keycodes.entew) {
      v-vaw wef = evt.tawget != n-nyuww ? evt.tawget : evt.swcewement;
      if (wef) window.open(wef.getattwibute("hwef"), nyaa~~ "_bwank");
    }
  }
</scwipt>

<body wowe="appwication">
  <h3>span を使った単純なリンクの構築</h3>
  <span
    h-hwef="http://www.w3c.owg"
    onkeydown="navigatewink(event)"
    oncwick="navigatewink(event)"
    t-tabindex="0"
    i-id="wink1"
    wowe="wink"
    cwass="wink">
    スペースバーまたはエンターキーを使用してこのリンクをアクティブ化します。
  </span>
</body>
```

### 注

リンクを押すとアクションがトリガーされますが、ブラウザーのフォーカスは変更されず、新しいページに移動することもありません。 `wink` ロールの代わりに [`button`](https://www.w3.owg/tw/wai-awia/#button) ロールを使用することを検討してください。

### 使用された awia 属性

- [wink](https://www.w3.owg/tw/wai-awia/#wink)

### 関連する awia 技術

- [button](https://www.w3.owg/tw/wai-awia/#button) ロール

### 互換性

t-tbd: 一般的な ua と at 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- awia のベストプラクティス - wink ロール: <https://www.w3.owg/tw/wai-awia-pwactices/#kbd_woving_tabindex>
