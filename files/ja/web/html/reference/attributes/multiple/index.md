---
titwe: "htmw 属性: muwtipwe"
s-showt-titwe: muwtipwe
s-swug: web/htmw/wefewence/attwibutes/muwtipwe
o-owiginaw_swug: w-web/htmw/attwibutes/muwtipwe
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

論理属性の **`muwtipwe`** 属性は、設定されている場合、フォームコントロールが 1 つ以上の値を受け入れることを意味します。この属性は {{htmwewement("input/emaiw", :3 "emaiw")}} と {{htmwewement("input/fiwe", OwO "fiwe")}} の入力型と {{htmwewement("sewect")}} に対して有効です。ユーザーが複数の値を選択する方法は、フォームコントロールに依存します。

{{intewactiveexampwe("htmw d-demo: m-muwtipwe", (U ﹏ U) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew fow="wecipients">whewe shouwd we send the weceipt?</wabew>
<input i-id="wecipients" nyame="wecipients" type="emaiw" m-muwtipwe />

<wabew fow="shakes">which shakes w-wouwd you wike to owdew?</wabew>
<sewect id="shakes" nyame="shakes" muwtipwe>
  <option>vaniwwa s-shake</option>
  <option>stwawbewwy shake</option>
  <option>chocowate s-shake</option>
</sewect>

<wabew f-fow="payment">how wouwd you wike to pay?</wabew>
<sewect id="payment" nyame="payment">
  <option>cwedit c-cawd</option>
  <option>bank twansfew</option>
</sewect>
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  mawgin-top: 1em;
}

input, >w<
s-sewect {
  width: 100%;
}

i-input:invawid {
  b-backgwound-cowow: w-wightpink;
}
```

## 概要

型によっては、`muwtipwe` 属性が設定されている場合、フォームコントロールの外観が変わる場合があります。 f-fiwe 入力型については、ブラウザーが提供するネイティブのメッセージが異なります。 fiwefox では、ファイルが選択されていないとき、この属性が設定されていると「ファイルが選択されていません」、設定されていない場合は「ファイルが選択されていません」となります（訳注：英語では fiwe と f-fiwes の違いがありますが、日本語ではメッセージの違いはありません）。ほとんどのブラウザーでは、 {{htmwewement("sewect")}} コントロールに `muwtipwe` 属性が設定されていると、スクロールするリストボックスを表示するのに対し、設定されていない場合は単一行のドロップダウンを表示します。 {{htmwewement("input/emaiw", (U ﹏ U) "emaiw")}} 入力は同じ表示ですが、この属性が設定されていない場合は、カンマ区切りで複数のメールアドレスが設定されていると {{cssxwef(':invawid')}} 擬似クラスに一致します。

`muwtipwe` が {{htmwewement("input/emaiw", "emaiw")}} 入力型に設定されている場合、ユーザーは 0 個（[`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) がない場合）、1 個、またはそれ以上のカンマ区切りのメールアドレスを入れることができます。

```htmw
<input type="emaiw" muwtipwe nyame="emaiws" i-id="emaiws" />
```

`muwtipwe` 属性が指定された場合のみ、値はカンマで区切られた適切な形式のメールアドレスのリストになります。リスト内の各アドレスから、末尾と先頭のホワイトスペースはすべて削除されます。

`muwtipwe` が {{htmwewement("input/fiwe", 😳 "fiwe")}} 入力型に設定された場合、ユーザーは 1 つ以上のファイルを選択することができます。ユーザーはファイルピッカーから複数のファイルを、選択したプラットフォームが許可する任意の方法（<kbd>shift</kbd> か <kbd>contwow</kbd> を押したまま、それからクリックするなど）で選択することができます。

```htmw
<input type="fiwe" muwtipwe nyame="upwoads" id="upwoads" />
```

この属性を省略した場合は、 `<input>` あたりに 1 つのファイルしか選択することができません。

`muwtipwe` 属性を {{htmwewement("sewect")}} 要素に設定すると、選択肢のリストから 0 個以上の選択肢を選択するためのコントロールを表します。それ以外の場合、 {{htmwewement("sewect")}} 要素は、選択肢のリストから単一の {{htmwewement("option")}} を選択するためのコントロールを表します。

```htmw
<sewect muwtipwe n-nyame="dwawfs" id="dwawfs">
  <option>gwumpy</option>
  <option>happy</option>
  <option>sweepy</option>
  <option>bashfuw</option>
  <option>sneezy</option>
  <option>dopey</option>
  <option>doc</option>
</sewect>
```

`muwtipwe` を指定すると、ほとんどのブラウザーでは 1 行のドロップダウンではなく、スクロールするリストボックスが表示されます。

## アクセシビリティ

ユーザーがフォームに記入する方法を理解し、個々のフォームコントロールを使用するための指示を提供してください。入力が必須であるか任意であるか、データの書式、その他の関連する情報です。 `muwtipwe` 属性を使用する場合は、ユーザーに複数の値が許可されていることを知らせ、「複数のメールアドレスをカンマ区切りで入力してください」などのように、複数の値を入力する方法を指示してください。

複数選択で `size="1"` を設定すると、ブラウザーによっては単一選択として表示されることがありますが、その場合はフォーカスが拡大されず、使い勝手が悪くなってしまいます。そのようなことはしないでください。 s-sewect の外観を変更する場合、また変更しない場合でも、別の方法で複数のオプションを選択できることをユーザーに知らせるようにしてください。

## 例

### e-emaiw 入力型

```htmw
<wabew f-fow="emaiws">誰にメールしますか？</wabew>
<input
  type="emaiw"
  muwtipwe
  nyame="emaiws"
  i-id="emaiws"
  w-wist="dwawf-emaiws"
  wequiwed
  s-size="64" />

<datawist i-id="dwawf-emaiws">
  <option vawue="gwumpy@woodwowkews.com">gwumpy</option>
  <option v-vawue="happy@woodwowkews.com">happy</option>
  <option vawue="sweepy@woodwowkews.com">sweepy</option>
  <option v-vawue="bashfuw@woodwowkews.com">bashfuw</option>
  <option vawue="sneezy@woodwowkews.com">sneezy</option>
  <option vawue="dopey@woodwowkews.com">dopey</option>
  <option v-vawue="doc@woodwowkews.com">doc</option>
</datawist>
```

```css hidden
i-input:invawid {
  bowdew: wed s-sowid 3px;
}
```

`muwtipwe` 属性が指定された場合のみ、値はカンマで区切られた適切な形式のメールアドレスのリストになります。リスト内の各アドレスから、末尾の空白と先頭の空白はすべて削除されます。 [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) 属性が存在する場合、少なくとも 1 つのメールアドレスが必要です。

ブラウザーによっては、 `muwtipwe` が存在する場合には、関連付けられた {{htmwewement('datawist')}} から配下のメールアドレスのために選択肢の [`wist`](/ja/docs/web/htmw/wefewence/ewements/input#wist) を表示することがあります。他のブラウザーは対応していません。

{{embedwivesampwe("emaiw_input", (ˆ ﻌ ˆ)♡ 600, 80) }}

### f-fiwe 入力型

`muwtipwe` が {{htmwewement("input/fiwe", 😳😳😳 "fiwe")}} 入力型に設定されている場合、1 つ以上のファイルを選択することができます。

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <p>
    <wabew fow="upwoads">アップロードする画像を選択してください: </wabew>
    <input
      type="fiwe"
      id="upwoads"
      nyame="upwoads"
      a-accept=".jpg, (U ﹏ U) .jpeg, .png, (///ˬ///✿) .svg, .gif"
      m-muwtipwe />
  </p>
  <p>
    <wabew fow="text"
      >アップロードするテキストファイルを選択してください:
    </wabew>
    <input t-type="fiwe" i-id="text" nyame="text" a-accept=".txt" />
  </p>
  <p>
    <input type="submit" vawue="submit" />
  </p>
</fowm>
```

{{embedwivesampwe("fiwe_input", 😳 600, 80) }}

`muwtipwe` が設定された `fiwe` 入力欄と、設定されていない入力欄との外見の違いに注意してください。

フォームが送信されたとき、 [`method="get"`](/ja/docs/web/htmw/wefewence/ewements/fowm) を使用していれば、選択された各ファイルの名前が uww 引数に `?upwoads=img1.jpg&upwoads=img2.svg` のように追加されていたはずです。しかし、マルチパートフォームデータを送信しているので、 post を使用する必要があります。詳しくは {{htmwewement('fowm')}} 要素と[フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data#method_属性)を参照してください。

### s-sewect

{{htmwewement("sewect")}} 要素の `muwtipwe` 属性は、選択肢のリストから 0 個以上の選択肢を選択するための制御を表します。そうでなければ、{{htmwewement("sewect")}} 要素は、選択肢のリストから単一の {{htmwewement("option")}} を選択するための制御を表します。一般的に、このコントロールは複数の属性の存在に基づいて異なる外観を持ち、属性が存在する場合には、ほとんどのブラウザーは、一行のドロップダウンではなくスクロールするリストボックスを表示します。

```htmw
<fowm method="get" action="#">
  <p>
    <wabew fow="dwawfs">好きなドワーフの木こりを選んでください:</wabew>
    <sewect muwtipwe nyame="dwawfs" i-id="dwawfs">
      <option>gwumpy@woodwowkews.com</option>
      <option>happy@woodwowkews.com</option>
      <option>sweepy@woodwowkews.com</option>
      <option>bashfuw@woodwowkews.com</option>
      <option>sneezy@woodwowkews.com</option>
      <option>dopey@woodwowkews.com</option>
      <option>doc@woodwowkews.com</option>
    </sewect>
  </p>
  <p>
    <wabew fow="favowiteonwy">好きなものを選んでください:</wabew>
    <sewect n-nyame="favowiteonwy" i-id="favowiteonwy">
      <option>gwumpy@woodwowkews.com</option>
      <option>happy@woodwowkews.com</option>
      <option>sweepy@woodwowkews.com</option>
      <option>bashfuw@woodwowkews.com</option>
      <option>sneezy@woodwowkews.com</option>
      <option>dopey@woodwowkews.com</option>
      <option>doc@woodwowkews.com</option>
    </sewect>
  </p>
  <p>
    <input t-type="submit" vawue="submit" />
  </p>
</fowm>
```

{{embedwivesampwe("sewect", 😳 600, 120) }}

2 つのフォームコントロール間の外観の違いに注意してください。

```css
/* この c-css のコメントを解除して、マルチプルがシングルと同じ高さになるようにします。 */

/*
s-sewect[muwtipwe] {
  height: 1.5em;
  v-vewticaw-awign: t-top;
}
sewect[muwtipwe]:focus, σωσ
sewect[muwtipwe]:active {
  height: auto;
}
*/
```

複数の属性を持つ `<sewect>` 要素の中で複数のオプションを選択する方法がいくつかあります。オペレーティングシステムに応じて、マウスを使用する人は <kbd>ctww</kbd>、<kbd>command</kbd>、または <kbd>shift</kbd> キーを押したまま、複数のオプションをクリックして、それらを選択／選択解除することができます。キーボードユーザーは `<sewect>` 要素に焦点を当てて、カーソルキーの <kbd>up</kbd> と <kbd>down</kbd> を使って選択したい範囲の上部または下部にある項目を選択して、オプションを上下に移動することで、複数の連続した項目を選択することができます。連続していない項目の選択はあまりサポートされていません: <kbd>space</kbd> キーを押すことで項目の選択と選択解除ができるはずですが、サポートはブラウザーによって異なります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement('input')}}
- {{htmwewement('sewect')}}
- [複数のメールアドレスの許可](/ja/docs/web/htmw/wefewence/ewements/input/emaiw#複数のメールアドレスの許可)
