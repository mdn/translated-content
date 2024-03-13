---
title: link ロールの使用
slug: Web/Accessibility/ARIA/Roles/link_role
---

### 説明

このテクニックは、[`link`](https://www.w3.org/WAI/PF/aria-1.1/roles#link) ロールを使用する方法を示し、ブラウザーと支援技術に与える影響について説明します。

`link` ロールは、アプリケーションまたは外部にあるリソースへのハイパーリンクを作成する要素を識別するために使用されます。 このロールが要素に追加されると、タブを使用してリンクへのフォーカスを変更したり、リンクの実行にスペースやエンターを使用することができます。

> **メモ:** 可能であれば、ネイティブ要素は古いユーザーエージェントや支援技術によって広くサポートされているため、`link` ロールではなくネイティブの {{HTMLElement("a")}} 要素を使用することをお勧めします。 ネイティブ {{HTMLElement("a")}} 要素は、追加のカスタマイズを必要とせずに、デフォルトでキーボードとフォーカスの要件もサポートしています。

[`tabindex`](https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex) 属性は、タブの順序で要素の位置を直接指定するために、このロールで任意に使用できます。

### ユーザーエージェントと支援技術への影響

要素に `link` ロールが追加された場合、またはそのような要素が可視になる場合、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ API で `link` ロールを持つ要素を公開します。
- オペレーティングシステムのアクセシビリティ API がサポートされている場合は、アクセシビリティ API を使用してアクセス可能なリンクイベントを発生させます。

支援技術製品は、そのようなイベントをリスンし、それに応じてユーザーに以下を通知するべきです。

- スクリーンリーダーは、リンクがフォーカスされているときに、リンクであるという事実とともに、リンクまたはそのラベルのテキストをアナウンスするべきです。 ARIA リンクは通常のリンクと同様にスクリーンリーダーの「リンクのリスト」機能に含まれているべきで、「リンクのアクティブ化」や「リンクへの移動」など、このダイアログのリストに対するアクションは通常のリンクと同じように行われるべきです。
- スクリーン拡大鏡はリンクを拡大することがあります。

**注**: 支援技術がどのようにこの技術を扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

### 例

#### 例 1: HTML コードにロールを追加する

以下のスニペットは、`link` ロールが html ソースコードに直接どのように追加されるかを示しています。

```html
<div role="link">リンク</div>
```

#### 例 2: span を使用したアプリケーションからのアクセス可能なリンクの構築

```html
<script type="text/javascript">
  sap = { ui: { keycodes: { SPACE: 32, ENTER: 13 } } };
  //リンク上のクリックとキーダウンを処理する
  function navigateLink(evt) {
    if (evt.type == "click" || evt.keyCode == sap.ui.keycodes.ENTER) {
      var ref = evt.target != null ? evt.target : evt.srcElement;
      if (ref) window.open(ref.getAttribute("href"), "_blank");
    }
  }
</script>

<body role="application">
  <h3>span を使った単純なリンクの構築</h3>
  <span
    href="http://www.w3c.org"
    onkeydown="navigateLink(event)"
    onclick="navigateLink(event)"
    tabindex="0"
    id="link1"
    role="link"
    class="link">
    スペースバーまたはエンターキーを使用してこのリンクをアクティブ化します。
  </span>
</body>
```

### 注

リンクを押すとアクションがトリガーされますが、ブラウザーのフォーカスは変更されず、新しいページに移動することもありません。 `link` ロールの代わりに [`button`](http://www.w3.org/TR/wai-aria/#button) ロールを使用することを検討してください。

### 使用された ARIA 属性

- [link](http://www.w3.org/TR/wai-aria/#link)

### 関連する ARIA 技術

- [button](https://www.w3.org/TR/wai-aria/#button) ロール

### 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

### その他のリソース

- ARIA のベストプラクティス - link ロール: <https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex>
