---
titwe: autofocus
swug: web/htmw/wefewence/gwobaw_attwibutes/autofocus
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/autofocus
w-w10n:
  s-souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`autofocus`** [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)は論理属性で、ページ読み込み時、またはその要素が属する {{htmwewement("diawog")}} が表示されたときに、その要素にフォーカスを当てるべきことを示す属性です。

```htmw
<input n-nyame="q" a-autofocus />
```

文書またはダイアログ内の複数の要素に a-autofocus 属性を設定することはできません。複数の要素に適用された場合、最初のものにフォーカスが当たります。

> **メモ:** `autofocus` 属性は、フォームコントロールだけでなく、すべての要素に適用されます。例えば、これは [contenteditabwe](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) の領域で使用されるかもしれません。

## アクセシビリティの考慮

フォームコントロールに自動的にフォーカスを合わせると、画面読み上げ技術を使用する視覚障碍者や認知障碍者を混乱させる可能性があります。`autofocus` が割り当てられている場合、スクリーンリーダーは事前に警告することなく、ユーザーをフォームコントロールに「テレポート」します。

`autofocus` 属性を使用する際には、アクセシビリティに十分配慮してください。コントロールに自動的にフォーカスが当たると、読み込む際にページのスクロールが発生する可能性があります。また、タッチ端末によっては、フォーカスが動的なキーボードを表示させることもあります。スクリーンリーダーはフォーカスを受けたフォームコントロールのラベルをアナウンスしますが、ラベルの前には何もアナウンスしないので、小さな機器にいる目の見えるユーザーは、前のコンテンツによって作成されたコンテキストを同様に見逃してしまうでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
