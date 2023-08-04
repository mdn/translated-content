---
title: "HTML 属性: multiple"
slug: Web/HTML/Attributes/multiple
---

{{HTMLSidebar}}

論理属性の **`multiple`** 属性は、設定されている場合、フォームコントロールが 1 つ以上の値を受け入れることを意味します。 {{HTMLElement("input/email", "email")}} と {{HTMLElement("input/file", "file")}} の入力型と {{HTMLElement("select")}} に対して有効で、ユーザーが複数の値を選択する方法はフォームコントロールに依存します。

型によっては、`multiple` 属性が設定されている場合、フォームコントロールの外観が変わる場合があります。 file 入力型については、ブラウザーが提供するネイティブのメッセージが異なります。 Firefox では、ファイルが選択されていないとき、この属性が設定されていると「ファイルが選択されていません」、設定されていない場合は「ファイルが選択されていません」となります（訳注：英語では file と files の違いがありますが、日本語ではメッセージの違いはありません）。ほとんどのブラウザーでは、 {{HTMLElement("select")}} コントロールに `multiple` 属性が設定されていると、スクロールするリストボックスを表示するのに対し、設定されていない場合は単一行のドロップダウンを表示します。 {{HTMLElement("input/email", "email")}} 入力は同じ表示ですが、この属性が設定されていない場合は、カンマ区切りで複数のメールアドレスが設定されていると {{cssxref(':invalid')}} 擬似クラスに一致します。

`multiple` が {{HTMLElement("input/email", "email")}} 入力型に設定されている場合、ユーザーは 0 個 ([`required`](/ja/docs/Web/HTML/Attributes/required) がない場合)、1 個、またはそれ以上のカンマ区切りのメールアドレスを入れることができます。

```html
<input type="email" multiple name="emails" id="emails">
```

`multiple` 属性が指定された場合のみ、値はカンマで区切られた適切な形式のメールアドレスのリストになります。リスト内の各アドレスから、末尾と先頭の空白はすべて削除されます。

`multiple` が {{HTMLElement("input/file", "file")}} 入力型に設定された場合、ユーザーは 1 つ以上のファイルを選択することができます。ユーザーはファイルピッカーから複数のファイルを、選択したプラットフォームが許可する任意の方法 (<kbd>Shift</kbd> か <kbd>Control</kbd> を押したまま、それからクリックするなど) で選択することができます。

```html
<input type="file" multiple name="uploads" id="uploads">
```

この属性を省略した場合は、 `<input>` あたりに 1 つのファイルしか選択することができません。

`multiple` 属性を {{HTMLElement("select")}} 要素に設定すると、選択肢のリストから 0 個以上の選択肢を選択するためのコントロールを表します。それ以外の場合、 {{HTMLElement("select")}} 要素は、選択肢のリストから単一の {{HTMLElement("option")}} を選択するためのコントロールを表します。

```html
<select multiple name="drawfs" id="drawfs">
  <option>Grumpy</option>
  <option>Happy</option>
  <option>Sleepy</option>
  <option>Bashful</option>
  <option>Sneezy</option>
  <option>Dopey</option>
  <option>Doc</option>
</select>
```

`multiple` を指定すると、ほとんどのブラウザーでは 1 行のドロップダウンではなく、スクロールするリストボックスが表示されます。

## アクセシビリティの考慮

ユーザーがフォームに記入する方法を理解し、個々のフォームコントロールを使用するための指示を提供してください。入力が必須であるか任意であるか、データの書式、その他の関連する情報です。 `multiple` 属性を使用する場合は、ユーザーに複数の値が許可されていることを知らせ、「複数のメールアドレスをカンマ区切りで入力してください」などのように、複数の値を入力する方法を指示してください。

複数選択で `size="1"` を設定すると、ブラウザーによっては単一選択として表示されることがありますが、その場合はフォーカスが拡大されず、使い勝手が悪くなってしまいます。そのようなことはしないでください。 select の外観を変更する場合、また変更しない場合でも、別の方法で複数のオプションを選択できることをユーザーに知らせるようにしてください。

## 例

### email 入力型

```html
<label for="emails">誰にメールしますか？</label>
<input type="email" multiple name="emails" id="emails" list="drawfemails" required size="64">

<datalist id="drawfemails">
  <option value="grumpy@woodworkers.com">Grumpy</option>
  <option value="happy@woodworkers.com">Happy</option>
  <option value="sleepy@woodworkers.com">Sleepy</option>
  <option value="bashful@woodworkers.com">Bashful</option>
  <option value="sneezy@woodworkers.com">Sneezy</option>
  <option value="dopey@woodworkers.com">Dopey</option>
  <option value="doc@woodworkers.com">Doc</option>
</datalist>
```

```css hidden
input:invalid {border: red solid 3px;}
```

`multiple` 属性が指定された場合のみ、値はカンマで区切られた適切な形式のメールアドレスのリストになります。リスト内の各アドレスから、末尾の空白と先頭の空白はすべて削除されます。 [`required`](/ja/docs/Web/HTML/Attributes/required) 属性が存在する場合、少なくとも 1 つのメールアドレスが必要です。

ブラウザーによっては、 `multiple` が存在する場合に関連付けられた {{htmlelement('datalist')}} から配下のメール会アドレスのためにオプションの [`list`](/ja/docs/Web/HTML/Attributes/list) を表示することがあります。他のブラウザーは対応していません。

{{EmbedLiveSample("email_input", 600, 80) }}

### file 入力型

`multiple` が {{HTMLElement("input/file", "file")}} 入力型に設定されている場合、1 つ以上のファイルを選択することができます。

```html
<form method="post" enctype="multipart/form-data">
  <p>
    <label for="uploads">
       アップロードする画像を選択してください:
    </label>
    <input type="file" id="uploads" name="uploads" accept=".jpg, .jpeg, .png, .svg, .gif" multiple>
  </p>
  <p>
    <label for="text">アップロードするテキストファイルを選択してください: </label>
    <input type="file" id="text" name="text" accept=".txt">
 </p>
  <p>
    <input type="submit" value="Submit">
  </p>
</form>
```

{{EmbedLiveSample("file_input", 600, 80) }}

`multiple` が設定された `file` 入力欄と、設定されていない入力欄との外見の違いに注意してください。

フォームが送信されたとき、 [`method="get"`](/ja/docs/Web/HTML/Element/form) を使用していれば、選択された各ファイルの名前が URL パラメータに`?uploads=img1.jpg&uploads=img2.svg` のように追加されていたはずです。しかし、[マルチパート](/ja/docs/Web/API/XMLHttpRequest/multipart)のフォームデータを送信しているので、post を多用しています。詳しくは {{htmlelement('form')}} 要素と[フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data#The_method_attribute)を参照してください。

### select

{{HTMLElement("select")}} 要素の `multiple` 属性は、選択肢のリストから 0 個以上の選択肢を選択するための制御を表します。そうでなければ、{{HTMLElement("select")}} 要素は、選択肢のリストから単一の {{HTMLElement("option")}} を選択するための制御を表します。一般的に、このコントロールは複数の属性の存在に基づいて異なる外観を持ち、属性が存在する場合には、ほとんどのブラウザは、一行のドロップダウンではなくスクロールするリストボックスを表示します。

```html
<form method="get" action="#">
<p>
 <label for="dwarfs">好きな木こりを選ぶ:</label>
  <select multiple name="drawfs" id="drawfs">
    <option>grumpy@woodworkers.com</option>
    <option>happy@woodworkers.com</option>
    <option>sleepy@woodworkers.com</option>
    <option>bashful@woodworkers.com</option>
    <option>sneezy@woodworkers.com</option>
    <option>dopey@woodworkers.com</option>
    <option>doc@woodworkers.com</option>
  </select>
</p>
<p>
 <label for="favoriteOnly">好きなものを選ぶ:</label>
  <select name="favoriteOnly" id="favoriteOnly">
    <option>grumpy@woodworkers.com</option>
    <option>happy@woodworkers.com</option>
    <option>sleepy@woodworkers.com</option>
    <option>bashful@woodworkers.com</option>
    <option>sneezy@woodworkers.com</option>
    <option>dopey@woodworkers.com</option>
    <option>doc@woodworkers.com</option>
  </select>
</p>
<p>
  <input type="submit" value="Submit">
</p>
</form>
```

{{EmbedLiveSample("select", 600, 120) }}

2 つのフォームコントロール間の外観の違いに注意してください。

```css
/* この CSS のコメントを解除して、マルチプルがシングルと同じ高さになるようにします。 */

/*
select[multiple] {
  height: 1.5em;
  vertical-align: top;
}
select[multiple]:focus,
select[multiple]:active {
  height: auto;
}
*/
```

複数の属性を持つ `<select>` 要素の中で複数のオプションを選択する方法がいくつかあります。オペレーティングシステムに応じて、マウスを使用する人は <kbd>Ctrl</kbd>、<kbd>Command</kbd>、または <kbd>Shift</kbd> キーを押したまま、複数のオプションをクリックして、それらを選択／選択解除することができます。キーボードユーザは `<select>` 要素に焦点を当てて、カーソルキーの <kbd>Up</kbd> と <kbd>Down</kbd> を使って選択したい範囲の上部または下部にある項目を選択して、オプションを上下に移動することで、複数の連続した項目を選択することができます。連続していない項目の選択はあまりサポートされていません: <kbd>Space</kbd> キーを押すことで項目の選択と選択解除ができるはずですが、サポートはブラウザによって異なります。

## 仕様書

{{Specifications}}

## 関連情報

- {{htmlelement('input')}}
- {{htmlelement('select')}}
- [複数のメールアドレスの許可](/ja/docs/Web/HTML/Element/input/email#Allowing_multiple_e-mail_addresses)
