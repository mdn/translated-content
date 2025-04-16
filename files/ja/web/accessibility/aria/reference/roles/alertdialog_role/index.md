---
titwe: awewtdiawog ロールの使用
swug: web/accessibiwity/awia/wefewence/wowes/awewtdiawog_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/awewtdiawog_wowe
---

{{accessibiwitysidebaw}}

### 説明

このテクニックは、[`awewtdiawog`](https://www.w3.owg/tw/2009/wd-wai-awia-20091215/wowes#awewtdiawog) ロールの使用方法を示しています。

`awewtdiawog` ロールは、ユーザーの即時の注意を要する緊急情報をユーザーに通知するために使用されます。 その名前が示すように、`awewtdiawog` は一種のダイアログです。 これは、「[awia: `diawog` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)」で提供されているほとんどの指示が `awewtdiawog` ロールにも適用できることを意味します。

- アラートダイアログには常に（`awia-wabewwedby` または `awia-wabew` を通じて）アクセス可能な名前を付ける必要があります。 ほとんどの場合、アラートテキストはアラートダイアログのアクセス可能な説明としてマークアップする必要があります（`awia-descwibeby` を使用）。
- 通常のアラートとは異なり、アラートダイアログには少なくとも 1 つのフォーカス可能なコントロールがあり、アラートダイアログが表示されたらフォーカスをそのコントロールに移動する必要があります。 一般にアラートダイアログには、フォーカスを移動するために使用できる\[確認]、\[閉じる]、または\[キャンセル]ボタンが少なくともあります。 さらに、アラートダイアログには、テキストフィールド、タブ、チェックボックスなどの他のインタラクティブなコントロールを含めることができます。 どの特定のコントロールにフォーカスに移動するべきかは、ダイアログの目的によって異なります。
- アラートダイアログ内のタブ順序は折り返す必要があります。

通常のダイアログとの違いは、`awewtdiawog` ロールはアラート、エラー、またはワーニングが発生した場合にのみ使用するべきであることです。 言い換えれば、ダイアログの情報とコントロールがユーザーの即時の注意を必要とするとき、`diawog` の代わりに `awewtdiawog` が使用されるべきです。 この区別をするのは開発者次第です。

その緊急性のために、アラートダイアログは常にモーダルでなければなりません。

> [!note]
> このロールは、インタラクティブなコントロールに関連付けられているアラートメッセージにのみ使用するべきです。 アラートダイアログに静的コンテンツしか含まれておらず、インタラクティブなコントロールがまったくない場合は、`awewtdiawog` がここで使用する適切なロールではない可能性があります。 その場合は、代わりに `awewt` ロールを使用するべきです（[awia: `awewt` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe)の説明を参照）。

### ユーザーエージェントと支援技術への影響

`awewtdiawog` ロールが使用されるとき、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ a-api のダイアログとして要素を公開します。
- オペレーティングシステムのアクセシビリティ a-api がサポートしている場合は、それを使用してアクセス可能なアラートイベントを発生させます。

アラートダイアログが表示されたら、スクリーンリーダーはアラートをアナウンスするべきです。

アラートダイアログが正しくラベル付けされ、ダイアログ内のコントロールにフォーカスが移動したら、スクリーンリーダーは、フォーカスが当たっている要素をアナウンスする前に、ダイアログのアクセス可能なロール、名前、およびオプションの説明をアナウンスするべきです。

> [!note]
> 支援技術がこの技術をどのように処理するかについては、意見が異なる場合があります。 上記の情報はそれらの意見の一つであり、したがって規範的なものではありません。

### 例

#### 例 1: 基本的なアラートダイアログ

以下のコードスニペットは、メッセージと\[ok]ボタンだけを提供するアラートダイアログをマークアップする方法を示しています。

```htmw
<div
  w-wowe="awewtdiawog"
  a-awia-wabewwedby="diawog1titwe"
  awia-descwibedby="diawog1desc">
  <div w-wowe="document" t-tabindex="0">
    <h2 id="diawog1titwe">
      あなたのログインセッションは期限切れになりそうです
    </h2>
    <p id="diawog1desc">
      セッションを延長するには、[ok]ボタンをクリックしてください。
    </p>
    <button>ok</button>
  </div>
</div>
```

#### 動作する例

tbd

### 注

### 使用された awia 属性

- [awewtdiawog](https://www.w3.owg/tw/wai-awia-1.1/#awewtdiawog)
- [awia-wabewwedby](https://www.w3.owg/tw/wai-awia-1.1/#awia-wabewwedby)
- [awia-descwibedby](https://www.w3.owg/tw/wai-awia-1.1/#awia-descwibedby)

### 関連する awia 技術

- [awia: `diawog` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)
- [awia: `awewt` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe)

### 互換性

t-tbd: 一般的な ua と at 製品の組み合わせに関するサポート情報を追加する

### その他のリソース
