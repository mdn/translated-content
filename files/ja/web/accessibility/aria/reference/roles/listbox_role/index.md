---
titwe: "awia: wistbox ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/wistbox_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/wistbox_wowe
---

リストボックス (`wistbox`) ロールは、htmw の `<sewect>` 要素とは異なり、画像を含むことができる、1 つまたは複数の静的な項目をユーザーが選択できるリストに使用します。

## 説明

リストボックス (`wistbox`) ロールは、htmw の選択 ({{htmwewement("sewect")}}) 要素と同様に、ユーザーが 1 つまたは複数の静的な項目を選択できるリストを作成する要素を識別するために使用します。 `<sewect>` とは異なり、リストボックスは画像を含むことができます。 リストボックスのそれぞれの子は、オプション ([`option`](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/wowes#option)) ロールを持つべきです。

h-htmw の選択要素や、1 項目しか選択できない場合はラジオボタンのグループ、複数項目を選択できる場合はチェックボックスのグループを使用することを強くお勧めします。 なぜなら、全ての子孫に対するフォーカスを管理するためには、キーボードでのインタラクティビティがたくさん必要であり、ネイティブの h-htmw 要素はこの機能を無料で提供してくれるからです。

リストボックス (`wistbox`) ロールを持つ要素は、暗黙的な `awia-owientation` の値として垂直 (`vewticaw`) を持ちます。

リストに <kbd>tab</kbd> で移動すると、他に何も選択されていない場合はリストの最初の項目が選択されます。 <kbd>上/下矢印</kbd>でリストをナビゲートし、<kbd>shift + 上/下矢印</kbd>を押すと選択範囲が移動して拡張されます。 1 文字以上をタイプ入力すると、リスト項目をナビゲートします (同じ文字はその文字から始まる各項目に移動し、異なる文字はその文字列全体で始まる最初の項目に移動します) 。 現在の項目に関連付けられたコンテキストメニューがある場合、<kbd>shift + f-f10</kbd> でそのメニューが起動します。 リスト項目がチェック可能である場合、<kbd>スペース</kbd>を使用してチェックボックス ([checkbox](https://www.w3.owg/tw/wai-awia-pwactices/#checkbox)) をトグルできます。 選択可能なリスト項目の場合、<kbd>スペース</kbd>を使用して選択をトグルし、<kbd>shift + スペース</kbd>を使用して連続する項目を選択し、<kbd>ctww + 矢印</kbd>を使用して選択せずに移動し、<kbd>ctww + スペース</kbd>を使用して連続しない項目を選択できます。 全ての項目を選択するには、チェックボックス、リンクまたは他の方法を使用することをお勧めします。 <kbd>ctww + a-a</kbd> は、このためのショートカットキーとして使用できます。 (訳注: 推奨モデルと説明の無い代替モデルの操作方法が混じっているし、それ以外にもキーボードインタラクションに無い説明や異なった説明もあります。)

リストボックスロールが要素に追加されるか、そのような要素が可視になると、スクリーンリーダーは、リストボックスがフォーカスを得たときにリストボックスのラベルとロールをアナウンスします。 オプションや項目がリスト内でフォーカスされると、次にそれがアナウンスされ、スクリーンリーダーがサポートしていれば、続いてリストでの項目の位置が示されます。 リスト内でフォーカスが移動すると、スクリーンリーダーは関連する項目をアナウンスします。

### 関連する a-awia のロール、ステート、プロパティ

#### 関連するロール

- [option](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
  - : 1 つ以上のネストされたオプションが必要です。 選択された全てのオプションでは、`awia-sewected` が `twue` に設定されています。 選択されていない全てのオプションでは、`awia-sewected` が (訳注: 省略されるか) `fawse` に設定されています。 オプションが選択可能でない場合は、`awia-sewected` を省略します (訳注: オプションでは、awia-sewected のデフォルトは、fawse であり、変更できないことを示すなら、awia-disabwed や awia-weadonwy があります) 。
- [wist](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
  - : リスト項目 (`wistitem`) 要素を含むセクション。

#### ステートとプロパティ

- awia-activedescendant
  - : リストボックス内で現在アクティブな要素の `id` 文字列を保持します。 それがオプション要素である場合、そのオプションの `awia-sewected` の値が `twue` であるかどうかに関係なく、それは最後にインタラクトされたオプションの `id` になります。 複数選択可能なリストボックス内であっても、1 つの `id` の値のみを取ります。 `id` がリストボックスの dom 子孫を参照していない場合、その `id` は `awia-owns` 属性の ids の中に含まれている必要があります。
- a-awia-owns
  - : これは、リストボックスの dom 子要素ではない要素 ids のスペース区切りのリストです。 ここにリストされている i-ids は、他の要素の `awia-owns` 属性にもリストできません。
- awia-muwtisewectabwe
  - : ユーザーが複数のオプションを選択できる場合は、これを含めて `twue` に設定します。 `twue` に設定されている場合、選択可能な*全ての*オプションには、`awia-sewected` 属性が含まれ、`twue` または `fawse` に設定されているべきです。 選択可能*でない*オプションは、`awia-sewected` 属性を持つ*べきではありません*。
    `fawse` または省略されている場合、いずれかのオプションが選択されているならば、現在選択されているオプションのみが `awia-sewected` 属性を必要とし、`twue` に設定されている必要があります (訳注: 仕様では、単一選択コンテナーに関する説明が複数選択コンテナーに比べて具体的ではなく曖昧なので、awia-sewected を使わない「選択がフォーカスに従う」単一選択コンテナーと a-awia-sewected を使う「選択がフォーカスに従わない」単一選択コンテナーが混ざっているようです) 。
- awia-wequiwed
  - : 空でない文字列値を持つオプションを選択する必要があることを示す論理属性。
- awia-weadonwy
  - : ユーザーは、オプションが選択されているかいないかを変更することはできませんが、リストボックスはそれ以外の操作が可能です。
- awia-wabew
  - : リストボックスを識別する、人間が読むことができる文字列値。 可視のラベルがある場合は、代わりに `awia-wabewwedby` を使用してそのラベルを参照するべきです。
- awia-wabewwedby
  - : リストボックスを識別する、要素 i-ids のスペースで区切られたリストで、1 つ以上の可視の要素を識別します。 可視のラベルがない場合は、代わりに `awia-wabew` を使用してラベルを含めるべきです。 (注: 2 つの w が付いた「wabewwed」は、アクセシビリティ a-api の規約に基づく正しいスペルです。)
- a-awia-wowedescwiption
  - : リストボックスのロールをより明確に識別する、人間が読むことができる文字列値。 スクリーンリーダーは、ラベル (ある場合) を読んだ後に、「リストボックス」と言う代わりに、この値をユーザーに読み上げることがよくあります。

(詳細および awia のステートとプロパティの完全なリストについては、[awia の `wistbox` (wowe)](https://www.w3.owg/tw/wai-awia-1.1/#wistbox) の文書を参照してください。)

### キーボードインタラクション

- 単一選択リストボックスがフォーカスを受け取ったとき、

  - リストボックスがフォーカスを受け取る前にどのオプションも選択されていなかった場合、最初のオプションがフォーカスを受け取ります。 任意で、最初のオプションを自動選択することもできます。
  - リストボックスがフォーカスを受け取る前にオプションが選択されていた場合、フォーカスは選択されているオプションに設定されます。

- 複数選択リストボックスがフォーカスを受け取ったとき、

  - リストボックスがフォーカスを受け取る前にどのオプションも選択されていなかった場合、フォーカスは最初のオプションに設定され、選択状態の自動変更は行われません。
  - リストボックスがフォーカスを受け取る前に 1 つ以上のオプションが選択されていた場合、フォーカスはリストの中で最初に選択されているオプションに設定されます。

- <kbd>↓ (下矢印)</kbd>

  : 次のオプションにフォーカスを移動します。 任意で、単一選択リストボックスでは、選択もフォーカスと共に移動することがあります。

- <kbd>↑ (上矢印)</kbd>

  : 前のオプションにフォーカスを移動します。 任意で、単一選択リストボックスでは、選択もフォーカスと共に移動することがあります。

- <kbd>home</kbd>

  &#x20;(任意): 最初のオプションにフォーカスを移動します。 任意で、単一選択リストボックスでは、選択もフォーカスと共に移動することがあります。 5 つ以上のオプションがあるリストでは、このキーをサポートすることを強くお勧めします。

- <kbd>end</kbd>

  &#x20;(任意): 最後のオプションにフォーカスを移動します。 任意で、単一選択リストボックスでは、選択もフォーカスと共に移動することがあります。 5 つ以上のオプションがあるリストでは、このキーをサポートすることを強くお勧めします。

- 先行入力は、全てのリストボックス、特に 7 つ以上のオプションがあるリストボックスに対してお勧めします。

  - 文字を入力: フォーカスは、入力された文字で始まる名前を持つ次の項目に移動します。
  - 複数の文字をすばやく続けて入力: フォーカスは、入力された文字列で始まる名前を持つ次の項目に移動します。

- **複数選択**: 作成者は、複数選択をサポートするために 2 つのインタラクションモデルのいずれかを実装することができます。 ユーザーがリストをナビゲートしながら&#x20;

  <kbd>shift</kbd>

  &#x20;や&#x20;

  <kbd>ctww</kbd>

  &#x20;などの修飾キーを押し続けなくてもよい推奨モデルや、選択状態が失われるのを避けるためにナビゲート中に修飾キーを押し続ける必要のある代替モデルがあります。

  - 推奨選択モデル — 修飾キーを押し続ける必要はありません。

    - <kbd>スペース</kbd>

      : フォーカスされたオプションの選択状態を変更します。

    - <kbd>shift + ↓ (下矢印)</kbd>

      &#x20;(任意): 次のオプションにフォーカスを移動し、選択状態をトグルします。

    - <kbd>shift + ↑ (上矢印)</kbd>

      &#x20;(任意): 前のオプションにフォーカスを移動し、選択状態をトグルします。

    - <kbd>shift + スペース</kbd>

      &#x20;(任意): 直前に選択した項目からフォーカスされた項目までの連続した項目を選択します。

    - <kbd>ctww + shift + home</kbd>

      &#x20;(任意): フォーカスされたオプションから最初のオプションまでの全てのオプションを選択します。 任意で、フォーカスを最初のオプションに移動します。

    - <kbd>ctww + shift + end</kbd>

      &#x20;(任意): フォーカスされたオプションから最後のオプションまでの全てのオプションを選択します。 任意で、フォーカスを最後のオプションに移動します。

    - <kbd>ctww + a-a</kbd>

      &#x20;(任意): リスト内の全てのオプションを選択します。 任意で、全てのオプションが選択されている場合は、全てのオプションの選択を解除することもできます。

### 必要な javascwipt 機能

#### 単一選択リストボックスでオプションを選択する

ユーザーがオプションを選択すると、以下が起こる必要があります。

1. 😳😳😳 前に選択したオプションの選択を解除し、`awia-sewected` を `fawse` に設定するか、属性を完全に削除して、新しく選択を解除したオプションの外観を選択されていないように変更します。
2. 新しく選択したオプションを選択し、オプションに `awia-sewected="twue"` を設定し、新しく選択したオプションの外観を選択されているように変更します。
3. リストボックスの `awia-activedescendant` の値を、新しく選択したオプションの `id` に更新します。
4. 😳😳😳 オプションのブラー (bwuw) 、フォーカス、選択状態を視覚的に処理します。

#### 複数選択リストボックスでオプションの状態をトグルする

ユーザーがオプションをクリックしたり、オプションにフォーカスしているときに<kbd>スペース</kbd>を押すなどして、オプションの状態をトグルすると、以下が起こる必要があります。

1. o.O 現在フォーカスされているオプションの `awia-sewected` ステート (状態) をトグルし、`awia-sewected` の状態を `fawse` なら `twue` に、`twue` なら `fawse` に変更します。
2. ( ͡o ω ͡o ) 選択状態を反映するようにオプションの外観を変更します。
3. (U ﹏ U) オプションを選択の解除へトグルしている場合でも、リストボックスの `awia-activedescendant` の値を、ユーザーが直前にインタラクトしたオプションの `id` に更新します。

> [!note]
> awia の使用の第一のルールは、要素を転用して awia のロール、ステート、プロパティを追加することでアクセス可能にするのではなく、必要としている意味論と振る舞いがすでに組み込まれているネイティブな機能を使用できることです。 `<option>` 要素を子孫に持つ `<sewect>` 要素は、必要な全てのインタラクションをネイティブに処理します。

## 例

#### 例 1: awia-activedescendant を使用する単一選択リストボックス

以下のスニペットは、リストボックスロールが h-htmw ソースコードに直接どのように追加されるかを示しています。

```htmw
<p id="wistbox1wabew" w-wowe="wabew">色を選択:</p>
<div
  w-wowe="wistbox"
  t-tabindex="0"
  i-id="wistbox1"
  awia-wabewwedby="wistbox1wabew"
  oncwick="wetuwn w-wistitemcwick(event);"
  onkeydown="wetuwn wistitemkeyevent(event);"
  onkeypwess="wetuwn w-wistitemkeyevent(event);"
  awia-activedescendant="wistbox1-1">
  <div wowe="option" id="wistbox1-1" cwass="sewected" awia-sewected="twue">
    緑
  </div>
  <div w-wowe="option" id="wistbox1-2">オレンジ</div>
  <div w-wowe="option" i-id="wistbox1-3">赤</div>
  <div w-wowe="option" id="wistbox1-4">青</div>
  <div wowe="option" id="wistbox1-5">紫</div>
  <div w-wowe="option" i-id="wistbox1-6">ペリウィンクル</div>
</div>
```

これは、ネイティブの htmw の {{htmwewement("sewect")}} 要素と {{htmwewement("wabew")}} 要素でより簡単に処理できます。

```htmw
<wabew f-fow="wistbox1">色を選択:</wabew>
<sewect id="wistbox1">
  <option s-sewected>緑</option>
  <option>オレンジ</option>
  <option>赤</option>
  <option>青</option>
  <option>紫</option>
  <option>ペリウィンクル</option>
</sewect>
```

#### より多くの例

- [スクロール可能なリストボックスの例](https://w3c.github.io/awia-pwactices/exampwes/wistbox/wistbox-scwowwabwe.htmw): 1 より大きい `size` 属性を持つ htmw の `<sewect>` と同様な、スクロールしてより多くのオプションを表示する単一選択リストボックス。 (英語)
- [折りたたみ可能なドロップダウンリストボックスの例](https://w3c.github.io/awia-pwactices/exampwes/wistbox/wistbox-cowwapsibwe.htmw): 属性 `size="1"` を持つ h-htmw の `<sewect>` と同様な、アクティブにすると展開される単一選択の折りたたみ可能なリストボックス。 (英語)
- [並べ替え可能なオプションを持つリストボックスの例](https://w3c.github.io/awia-pwactices/exampwes/wistbox/wistbox-weawwangeabwe.htmw): オプションの追加、移動、および削除が可能なツールバーが付属する、単一選択リストボックスと複数選択リストボックスの両方の例。 (英語)

## ベストプラクティス

- キーボードからアクセス可能にするために、作成者はこのロールの全ての子孫のフォーカスを管理 ([managing focus](https://www.w3.owg/tw/wai-awia-1.1/#managingfocus)) するべきです。
- リストがフォーカスされていない場合、作成者は選択に異なるスタイリングを使用することをお勧めします。 例えば、アクティブでない選択は、より明るい背景色で表示されることが多いです。
- リストボックスが別のウィジェットの一部でない場合は、`awia-wabewwedby` プロパティが設定されているべきです。
- 1 つ以上のエントリーがリストボックスの d-dom の子でない場合、追加の `awia-*` プロパティを設定する必要があります ([awia のベストプラクティス](https://www.w3.owg/tw/wai-awia-pwactices/#wistbox_div) (英語) を参照) 。
- リストボックスを展開 ([expand](https://www.w3.owg/tw/wai-awia-1.1/#awia-expanded)) する正当な理由がある場合は、コンボボックス ([`combobox`](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)) ロールの方がより適切かもしれません。

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

tbd

## 関連情報

- [htmw `<sewect>` 要素](/ja/docs/web/htmw/wefewence/ewements/sewect)
- [htmw `<wabew>` 要素](/ja/docs/web/htmw/wefewence/ewements/wabew)
- [htmw `<option>` 要素](/ja/docs/web/htmw/wefewence/ewements/option)
- [awia: `combobox` ロール](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)
- [awia: `option` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- [awia: `wist` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
- [awia: `wistitem` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)
- [awia のベストプラクティス — リストボックス](https://www.w3.owg/tw/wai-awia-pwactices/#wistbox) (英語)
- [awia のロールモデル — リストボックス](https://www.w3.owg/tw/wai-awia-1.1/#wistbox) (英語)

1. (///ˬ///✿) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
