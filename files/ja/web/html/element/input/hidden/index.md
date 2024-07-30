---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{HTMLSidebar}}

{{HTMLElement("input")}} 要素の **`hidden`** 型は、フォームの送信時にユーザーが見たり変更したりすることができないデータをウェブ開発者が含めることができます。例えば、現在注文中又は編集中の ID や、一意のセキュリティトークンなどに利用できます。隠し入力欄はページの表示で完全に非表示になり、ページの中で表示させる方法はありません。

> **メモ:** {{domxref("Element/input_event", "input")}} および {{domxref("HTMLElement/change_event", "change")}} の各イベントは、この入力型には適用されません。隠し入力欄は JavaScript (`hiddenInput.focus()` など) を使用してもフォーカスを与えることはできません。

## 値

{{HTMLElement("input")}} 要素の [`value`](/ja/docs/Web/HTML/Element/input#value) 属性は、フォームをサーバーに送信する時に含めたい隠しデータを含みます。これは特に、ユーザーインターフェイスを通じで編集したり確認したりすることはできませんが、ブラウザーの開発者ツールから値を編集することはできます。

> [!WARNING]
> ページのコンテンツ内では値がユーザーに表示されませんが、ブラウザーの開発者ツールや「ソースを表示」機能を使用して、見たり編集したりすることができます。 `hidden` の入力欄をセキュリティの形として当てにしないでください。

## 追加の属性

すべての {{HTMLElement("input")}} 要素で共通する属性に加え、 `hidden` 型の入力欄は次の属性にも対応しています。

### name

これは実際には共通の属性の一つですが、隠し入力欄では特別な用途を持っています。通常、 [`name`](/ja/docs/Web/HTML/Element/input#name) 属性は隠し属性でも他の入力欄と同様に機能します。しかし、フォームが送信された時、 `name` が `_charset_` に設定された隠し入力欄は、自動的にフォームを送信するのに使用される文字エンコーディングの値として報告されます。

## 隠し入力欄の利用

前述の通り、隠し入力欄はフォームに、一緒にサーバーに送信される、ユーザーが表示または編集できないデータを含めたい場合はどこでも使用できます。使い方を示すいくつかの例をご覧ください。

### 編集された内容の追跡

隠し入力欄のもっとも一般的な用途は、編集フォームを送信したときに、データベースのどのレコードを更新する必要があるかを追跡することです。一般的なワークフローは次のようなものです。

1. ユーザーはブログの記事や製品の項目など、管理権を持っているコンテンツの編集することにします。編集ボタンを押して始めます。
2. 編集するコンテンツがデータベースから取得され、 HTML フォーム内に読み込まれてユーザーが編集できるようになります。
3. 編集後、ユーザーはフォームを送信し、更新されたデータがサーバーに送り返されてデータベースを更新します。

この考え方はステップ 2 で、更新するレコードの ID を隠し入力欄で保持しておきます。ステップ 3 でフォームが送信されたとき、 ID は自動的にレコードの中身と共にサーバーに送り返されます。サイトのサーバー側コンポーネントは、 ID によって送信されたデータでどのレコードを更新する必要があるかを正しく特定することができます。

以下の[例](#例)の節で、これがどのように見えるかを示す例全体を見ることができます。

### ウェブサイトのセキュリティの改善

隠し入力欄は、ウェブサイトのセキュリティを高めるためにセキュリティトークンや秘密を格納しておくことができます。基本的な考え方としては、例えばオンラインバンキングで他の口座に送金するためのフォームなど、機密を要するフォームにユーザーが記入するときに、秘密を提供することで自分が誰であるか、正しいフォームを利用して送金リクエストを行っているかを証明することができます。

これで悪意のあるユーザーが偽のフォームを作成して、銀行に成りすまし、騙されやすいユーザーを騙して別なところに送金させるようなことを防ぐことができます。この種の攻撃は[クロスサイトリクエストフォージェリ (CSRF)](/ja/docs/Learn/Server-side/First_steps/Website_security#クロスサイトリクエストフォージェリ_csrf) と呼ばれており、非常に多くの信頼されているサーバー側フレームワークがこのような攻撃を防ぐために隠した秘密を使用しています。

> [!NOTE]
> 前述のように、隠し入力欄に秘密を配置することは、本質的に安全ではありません。鍵の組み合わせやエンコーディングによって実現すべきものです。隠し入力欄の値は秘密とデータを関連付け、フォームがサーバーに送信されるときに自動的に含められます。本当にウェブサイトを安全にするには、よく設計された秘密を使用する必要があります。

## 検証

隠し入力欄は制約検証には関係しません。制約される実際の値を持たないからです。

## 例

以前に作成した編集フォーム（[編集された内容の追跡](#tracking_edited_content)を参照）に、隠し入力欄を使用して編集するレコードの ID を記憶する簡単なバージョンを実装する方法を見てみましょう。

編集フォームの HTML はこのようになっているかもしれません。

```html
<form>
  <div>
    <label for="title">Post title:</label>
    <input type="text" id="title" name="title" value="My excellent blog post" />
  </div>
  <div>
    <label for="content">Post content:</label>
    <textarea id="content" name="content" cols="60" rows="5">
This is the content of my excellent blog post. I hope you enjoy it!
    </textarea>
  </div>
  <div>
    <button type="submit">Update post</button>
  </div>
  <input type="hidden" id="postId" name="postId" value="34657" />
</form>
```

簡単な CSS も追加しましょう。

```css
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

サーバーはフォームをユーザーのブラウザーに送信する前に、 ID が "`postID`" である隠し入力欄の値にデータベース内の投稿の ID を設定し、フォームが戻されたときにこの情報を、変更された情報を更新するデータベースのレコードを知るために使用します。コンテンツの中でこれを扱うためにスクリプトは必要はありません。

出力結果は次のようになります。

{{ EmbedLiveSample('Examples', '100%', 200) }}

> [!NOTE]
> この例は GitHub にもあります ([ソースコード](https://github.com/mdn/learning-area/blob/main/html/forms/hidden-input-example/index.html)および[ライブでの動作の確認](https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html)も参照してください)。

送信されるとき、サーバーへ送信されるフォームデータは以下のようになります。

`title=My+excellent+blog+post&content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&postId=34657`

隠し入力欄は全く表示されなくても、データは送信されています。

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
      <td><a href="/ja/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a></td>
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
      <td><strong>メソッド</strong></td>
      <td>なし。</td>
    </tr>
    <tr>
      <td><strong>暗黙の ARIA ロール</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"><code>対応するロールなし</code></a></td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML フォームガイド](/ja/docs/Learn/Forms)
- {{HTMLElement("input")}} および {{domxref("HTMLInputElement")}} インターフェイス
