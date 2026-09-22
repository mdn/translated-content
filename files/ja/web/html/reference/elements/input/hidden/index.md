---
title: '`<input type="hidden">` 属性値 (HTML)'
short-title: <input type="hidden">
slug: Web/HTML/Reference/Elements/input/hidden
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{HTMLElement("input")}} 要素の **`hidden`** 型を使用することで、ウェブ開発者は、フォームの送信時に視覚的に表示されないデータをフォームに含めることができます。例えば、現在処理中または編集中のコンテンツの ID や、一意のセキュリティトークンなどが挙げられます。hidden 型の入力要素は、レンダリングされたページ上ではまったく表示されませんが、他のフォーム入力要素と同様に送信されます。データはレンダリングされたコンテンツにはユーザーに表示されませんが、HTML 出力ではアクセス可能であり、ユーザーは[ブラウザーの開発者ツール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)などのツールを使用して編集することができます。

> [!NOTE]
> {{domxref("Element/input_event", "input")}} および {{domxref("HTMLElement/change_event", "change")}} の各イベントは、この入力型には適用されません。hidden 入力欄は JavaScript (`hiddenInput.focus()` など) を使用してもフォーカスを与えることはできません。

## 値

{{HTMLElement("input")}} 要素の [`value`](/ja/docs/Web/HTML/Reference/Elements/input#value) 属性は、フォームをサーバーに送信する時に含めたい隠しデータを含みます。この値は、ユーザーインターフェイスを通じてユーザーに表示されることはありません。

> [!WARNING]
> ページのコンテンツ内では値がユーザーに表示されませんが、ブラウザーの開発者ツールや「ソースを表示」機能を使用して、見たり編集したりすることができます。 `hidden` の入力欄をセキュリティのフォームとして当てにしないでください。

## 追加の属性

すべての {{HTMLElement("input")}} 要素で共通する属性に加え、 `hidden` 型の入力欄は次の属性にも対応しています。

### name

これは実際には共通の属性の一つですが、hidden 入力欄では特別な用途を持っています。通常、 [`name`](/ja/docs/Web/HTML/Reference/Elements/input#name) 属性は隠し属性でも他の入力欄と同様に機能します。しかし、フォームが送信された時、 `name` が `_charset_` に設定されたhidden 入力欄は、自動的にフォームを送信するのに使用される文字エンコーディングの値として報告されます。

## hidden 入力欄の使用

前述の通り、hidden 入力欄はフォームに、一緒にサーバーに送信される、ユーザーが見られないデータを含めたい場合はどこでも使用できます。使い方を示すいくつかの例をご覧ください。

### 編集された内容の追跡

hidden 入力欄のもっとも一般的な用途は、編集フォームを送信したときに、データベースのどのレコードを更新する必要があるかを追跡することです。一般的なワークフローは次のようなものです。

1. ユーザーはブログの記事や製品の項目など、管理権を持っているコンテンツの編集することにします。編集ボタンを押して始めます。
2. 編集するコンテンツがデータベースから取得され、 HTML フォーム内に読み込まれてユーザーが編集できるようになります。
3. 編集後、ユーザーはフォームを送信し、更新されたデータがサーバーに送り返されてデータベースを更新します。

この考え方はステップ 2 で、更新するレコードの ID をhidden 入力欄で保持しておきます。ステップ 3 でフォームが送信されたとき、 ID は自動的にレコードの中身と共にサーバーに送り返されます。サイトのサーバー側コンポーネントは、 ID によって送信されたデータでどのレコードを更新する必要があるかを正しく特定することができます。

以下の[例](#例)の節で、これがどのように見えるかを示す例全体を見ることができます。

### ウェブサイトのセキュリティの改善

隠し入力フィールドのよくある用途の一つは、クロスサイトリクエストフォージェリー (CSRF) トークンを格納するために使用することです。これは、[CSRF 攻撃](/ja/docs/Web/Security/Attacks/CSRF)からウェブサイトを保護するのに役立ちます。

> [!NOTE]
> 前述のように、hidden 入力欄に秘密を配置することは、本質的に安全ではありません。鍵の組み合わせやエンコーディングによって実現すべきものです。hidden 入力欄の値は秘密とデータを関連付け、フォームがサーバーに送信されるときに自動的に含められます。本当にウェブサイトを安全にするには、よく設計された秘密を使用する必要があります。

## 検証

hidden 入力欄は制約検証には関係しません。制約される実際の値を持たないからです。

## 例

### 非表示のレコード ID の使用

以前に作成した編集フォーム（[編集された内容の追跡](#tracking_edited_content)を参照）に、hidden 入力欄を使用して編集するレコードの ID を記憶するバージョンを実装する方法を見てみましょう。

#### HTML

編集フォームの HTML はこのようになります。

```html
<form>
  <div>
    <label for="title">投稿タイトル:</label>
    <input type="text" id="title" name="title" value="My excellent blog post" />
  </div>
  <div>
    <label for="content">投稿コンテンツ:</label>
    <textarea id="content" name="content" cols="60" rows="5">
私の素晴らしいブログ記事のコンテンツです。ぜひお楽しみください！楽しんでください！
    </textarea>
  </div>
  <div>
    <button type="submit">投稿を更新</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657" />
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input,
textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}
```

```js hidden
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

サーバーはフォームをユーザーのブラウザーに送信する前に、 ID が `postID` であるhidden 入力欄の値にデータベース内の投稿の ID を設定し、フォームが戻されたときにこの情報を、変更された情報を更新するデータベースのレコードを知るために使用します。コンテンツの中でこれを扱うためにスクリプトは必要はありません。

出力結果は次のようになります。

{{ EmbedLiveSample('Examples', '100%', 200) }}

送信されるとき、サーバーへ送信されるフォームデータは以下のようになります。

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

hidden 入力欄はフォーム上には表示されなくても、そのデータは送信されます。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">値</a></strong></td>
      <td>
        サーバーに送り返したい隠しデータの値を表す文字列です。
      </td>
    </tr>
    <tr>
      <td><strong>イベント</strong></td>
      <td>なし。</td>
    </tr>
    <tr>
      <td><strong>対応する共通属性</strong></td>
      <td><a href="/ja/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a></td>
    </tr>
    <tr>
      <td><strong>IDL 属性</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM インターフェイス</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">対応するロールなし</a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォームガイド](/ja/docs/Learn_web_development/Extensions/Forms)
- {{HTMLElement("input")}} および {{domxref("HTMLInputElement")}} インターフェイス
