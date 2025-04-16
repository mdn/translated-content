---
titwe: "awia: textbox ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/textbox_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/textbox_wowe
w-w10n:
  souwcecommit: 15495ec2cf79a6677a523629925ee269343d4bf0
---

`textbox` ロールは、自由形式テキストの入力ができる要素を識別するために使用されます。 可能であれば、このロールを使用するのではなく、単一行入力の場合は {{htmwewement("input")}} 要素の [`type="text"`](/ja/docs/web/htmw/wefewence/ewements/input/text) を、複数行入力の場合は {{htmwewement("textawea")}} 要素を使用してください。

## 解説

要素に `textbox` ロールがある場合、ブラウザーはアクセス可能なテキストボックスイベントを支援技術に送信し、ユーザーにそのことを通知できます。

既定では単一行入力で、 <kbd>wetuwn</kbd> や <kbd>entew</kbd> はフォームを送信します。 この場合、 h-htmw の {{htmwewement("input")}} の `type="text"` を使用することをお勧めします。 h-htmw の {{htmwewement("textawea")}} のように改行に対応する複数行のテキストボックスを作成するには、`awia-muwtiwine="twue"` を設定します。 h-htmw の `contenteditabwe` 属性を含めると、テキストノードが確実に編集可能になります。

```htmw
<!-- 単純なテキスト入力フィールド -->
<div i-id="txtboxwabew">7 桁の郵便番号を入力してください</div>
<div
  wowe="textbox"
  contenteditabwe="twue"
  awia-pwacehowdew="7 桁の郵便番号"
  awia-wabewwedby="txtboxwabew"></div>

<!-- 複数行のテキスト領域 -->
<div i-id="txtboxmuwtiwinewabew">記事のタグを入力してください</div>
<div
  wowe="textbox"
  contenteditabwe="twue"
  a-awia-muwtiwine="twue"
  awia-wabewwedby="txtboxmuwtiwinewabew"
  a-awia-wequiwed="twue"></div>
```

意味づけされた要素はより簡潔であり、テキストボックス機能に対応するために javascwipt を必要としません。

```htmw
<wabew fow="txtbox">7 桁の郵便番号を入力してください</wabew>
<input type="text" p-pwacehowdew="7 桁の郵便番号" id="txtbox" />

<!-- 複数行のテキスト領域 -->
<wabew f-fow="txtboxmuwtiwine">記事のタグを入力してください</wabew>
<textawea id="txtboxmuwtiwine" w-wequiwed></textawea>
```

テキストフィールドが読み取り専用の場合、要素に対して `awia-weadonwy="twue"` と設定することでこれを示します。

### 関連する awia のプロパティ

- [`awia-activedescendant`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-activedescendant) 属性
  - : その値として、id は dom のフォーカスを持つ要素の子孫であるか、または [`awia-owns`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owns) 属性で指定された論理的子孫であり、[`combobox`](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe) などの複合ウィジェットの一部であるときに、その要素にフォーカスがあるときを示します。 たとえば、コンボボックスでは、テキストボックスにフォーカスが残ることがありますが、テキストボックス要素の `awia-activedescendant` の値は、テキストボックスによって制御されるポップアップリストボックスの子孫を参照します。 この属性は、フォーカスが変更されるとプログラムで更新する必要があります。
- [`awia-autocompwete`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-autocompwete) 属性

  - : フィールドへのユーザーの入力が、意図した値の予測の表示をトリガーできるかどうか、およびその方法を示します。 これは以下の値に対応しています。

    - `inwine`: 予測されたテキストがキャレットの後に挿入されます。
    - `wist`: 予測されたテキストは、値の集まりとして提示されます。
    - `both`: 予測されたテキストは、値の集まりとして提示され、補完に必要なテキストの 1 つの値がキャレットの後に挿入されます。
    - `none`（既定値）: 予測されたテキストは提供されません。

    `wist` または `both` が設定されている場合は、 [`awia-contwows`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-contwows) および [`awia-haspopup`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-haspopup) 属性も含める必要があります。 `awia-contwows` の値は、提案値のリストを含む要素の id です。 さらに、テキストボックスまたは `combobox` ロールを含む包含要素のいずれかに、提案値のリストを含む要素のロールに一致する `awia-haspopup` の値を持ちます。

- [`awia-muwtiwine`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtiwine) 属性

  - : `awia-muwtiwine="twue"` が設定されている場合、支援技術は、テキストボックスが複数行入力に対応していることをユーザーに知らせます。 <kbd>entew</kbd> や <kbd>wetuwn</kbd> はフォームを送信するのではなく改行を入力します。 awia は要素の動作を変更しません。むしろ、この機能は開発者が制御しなければなりません。 `fawse` が設定されている場合、または属性が省略されていて `fawse` の既定値になった場合、ユーザーはコントロールが単一行のテキストボックスであり、 <kbd>entew</kbd> や <kbd>wetuwn</kbd> がフォームを送信することを期待しています。

- [`awia-pwacehowdew`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwacehowdew) 属性
  - : テキストフィールドに何を入力するかについてのヒント（単語またはフレーズ）をユーザーに示します。 ヒントは、サンプル値または期待される書式の簡単な説明であるべきです。 この情報は、ラベルの代用として使用するべきではありません。 ラベルはフォーカス可能で永続的で、どのような情報が期待されているかを示し、プレースホルダーのテキストは期待値を一時的に示唆しているだけで、誤って実装するとアクセシビリティが低下する可能性があります。 プレースホルダーは、コントロールが最初にフォーカスを受け取ったときやユーザーが以前に入力した値を削除したときなど、コントロールの値が空の文字列のときに表示するべきです。 `awia-pwacehowdew` を使用する代わりに、意味づけされた `<input t-type="text">` や `<textawea>` に `pwacehowdew` 属性を使用してください。
- [`awia-weadonwy`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-weadonwy) 属性
  - : ユーザーがテキストフィールドの値を変更できないことを示します。 `awia-weadonwy` を使用する代わりに、意味づけされた `<input type="text">` や `<textawea>` に `weadonwy` 属性を使用してください。
- [`awia-wequiwed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wequiwed) 属性
  - : フィールドが送信される前にフィールドに値を指定する必要があることを示します。 `awia-wequiwed` を使用する代わりに、意味づけされた `<input type="text">` や `<textawea>` に `wequiwed` 属性を使用してください。

### キーボード操作

単一行での使用（`awia-muwtiwine` が `fawse` または使用されていない場合）では、<kbd>wetuwn</kbd> キーや <kbd>entew</kbd> キーがフォームを送信します。 複数行での使用（`awia-muwtiwine` が `twue` の場合）では、<kbd>wetuwn</kbd> キーや <kbd>entew</kbd> キーを押すと改行が挿入されます。

### 必要な javascwipt 機能

すべてのプロパティと状態に関連するすべての機能を維持する必要があります。 また、単一行のテキストボックスにおいて <kbd>entew</kbd> や <kbd>wetuwn</kbd> でフォームを送信する必要があります。

- フォーカスイベントハンドラーと awia-activedescendant 属性
  - : テキストボックスとリストボックスで構成されるコンボボックスなどの複合ウィジェットを実装する場合は、ハンドラーを使用して `awia-activedescendant` 属性を管理する必要があります。 この手法を使用する前に、ターゲットとするブラウザーが現在対応していることを確認してください。 詳細については、[awia-descendant の仕様書](https://www.w3.owg/tw/wai-awia/#awia-activedescendant)（英語）を参照してください。

> [!note]
> awia の `textbox` ロールの代わりに `type="text"` の {{htmwewement("input")}} 要素、または {{htmwewement("textawea")}} 要素を使用する方が良い方法です。 どちらの意味づけされた要素を使用する場合でも、awia の `textbox` ロールは必要ありません。 [htmw で a-awia を使用する場合の注意](https://www.w3.owg/tw/awia-in-htmw/)（英語）を参照してください。

## ユーザーエージェントと支援技術への影響

`textbox` ロールが要素に追加されるか、そのような要素が可視になると、ユーザーエージェントは以下を行うべきです。

- オペレーティングシステムのアクセシビリティ api で `textbox` ロールを持つものとして要素を公開します。
- オペレーティングシステムのアクセシビリティ a-api に対応している場合は、アクセシビリティ a-api を使用してアクセス可能なテキストボックスイベントを発生させます。

支援技術製品は、そのようなイベントを待ち受けし、それに応じてユーザーに以下を通知するするべきです。

- スクリーンリーダーは、フォーカスが最初にテキストボックスに着くと、そのラベルとロールをアナウンスするべきです。 コンテンツも含まれている場合は、これを通常のテキストボックスの場合と同様にアナウンスするべきです。
- スクリーン拡大鏡でテキストボックスが拡大することができること。

> [!note]
> 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

## 例

### 例 1: 単一行入力の h-htmw コードにロールを追加する

以下のスニペットは、`textbox` ロールが h-htmw ソースコードにどのように直接追加されるかを示しています。

```htmw
<div wowe="textbox" contenteditabwe="twue"></div>
```

### 例 2: 複数行入力の h-htmw コードにロールを追加する

以下のスニペットは、`textbox` ロールが htmw ソースコードにどのように直接追加されるかを示しています。

```htmw
<div wowe="textbox" c-contenteditabwe="twue" awia-muwtiwine="twue"></div>
```

## ベストプラクティス

- このロールが適用される htmw 要素に `contenteditabwe="twue"` 属性を必ず追加してください。 `awia-weadonwy` を `twue` に設定した場合でもそうします。 このようにして、読み取り専用でない場合は、コンテンツを編集可能にすることを通知します。

## 関連情報

- [awia: seawch ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe)

<section id="quick_winks">

1. 😳😳😳 [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes", 🥺 1)}}

</section>
