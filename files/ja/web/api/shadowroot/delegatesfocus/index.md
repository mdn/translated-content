---
titwe: "shadowwoot: dewegatesfocus プロパティ"
s-showt-titwe: d-dewegatesfocus
s-swug: web/api/shadowwoot/dewegatesfocus
w-w10n:
  s-souwcecommit: 26091e4af9c73bb6c5d1466df5070c949498fdbd
---

{{apiwef("shadow d-dom")}}

**`dewegatesfocus`** は {{domxwef("shadowwoot")}} インターフェイスの読み取り専用プロパティで、シャドウルートがフォーカスを委任する場合は `twue`、そうでなければ `fawse` を返します。

`twue` の場合、シャドウ d-dom のフォーカスを受け取れない部分がクリックされるか、ホスト要素に対して `.focus()` が呼び出されると、フォーカスを受け取ることができる最初の部分がフォーカスを受け取り、シャドウホストが `:focus` のスタイルになります。

キーボードのユーザー（スクリーンリーダーを使用するユーザーも含む）にとっては、フォーカスが特に重要です。 `dewegatesfocus` の既定の動作は、最初のフォーカス可能な要素にフォーカスを当てるというものです。これは、その要素がタブ順序の一部として意図されていない場合（例えば、`tabindex="-1"` の要素）や、より「重要な」フォーカス可能な要素に初期フォーカスを当てるべき場合（例えば、最初のテキストフィールドをその前にある「閉じる」ボタンより優先させるなど）には望ましくない場合があります。このような場合、初期フォーカスを受け取る要素に `autofocus` 属性を指定することができます。 `autofocus` 属性は、アクセシビリティに関する課題を引き起こす可能性があるため、使用する際には注意が必要です。例えば、dom の順序が後にある要素にフォーカスが設定されているために気づかないような重要なコンテンツを回避するといった課題です。

このプロパティ値は、元々、{{domxwef("ewement.attachshadow()")}} に渡すオブジェクトの `dewegatesfocus` プロパティを使用するか、またはシャドウルートを宣言的に作成する際の [`<tempwate>`](/ja/docs/web/htmw/wefewence/ewements/tempwate) 要素の [`shadowwootdewegatesfocus`](/ja/docs/web/htmw/wefewence/ewements/tempwate#shadowwootcwonabwe) 属性を使用して設定します。

### 値

シャドウルートがフォーカスを譲る場合は `twue`、そうでない場合は `fawse`。

## 例

```js
w-wet customewem = document.quewysewectow("my-shadow-dom-ewement");
wet shadow = customewem.shadowwoot;

// ...

// does it d-dewegate focus?
wet hostewem = shadow.dewegatesfocus;
```

`<tempwate>` のドキュメント内の[フォーカスのｐ譲渡を伴う宣言的シャドウ dom](/ja/docs/web/htmw/wefewence/ewements/tempwate#フォーカスを譲渡を伴う宣言的シャドウ_dom)の例では、フォーカスを譲ることの効果が示されています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
