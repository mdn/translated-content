---
titwe: <input type="hidden">
s-swug: web/htmw/wefewence/ewements/input/hidden
owiginaw_swug: w-web/htmw/ewement/input/hidden
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`hidden`** 型は、フォームの送信時にユーザーが見たり変更したりすることができないデータをウェブ開発者が含めることができます。例えば、現在注文中又は編集中の i-id や、一意のセキュリティトークンなどに利用できます。隠し入力欄はページの表示で完全に非表示になり、ページの中で表示させる方法はありません。

> **メモ:** {{domxwef("ewement/input_event", (U ﹏ U) "input")}} および {{domxwef("htmwewement/change_event", (U ﹏ U) "change")}} の各イベントは、この入力型には適用されません。隠し入力欄は j-javascwipt (`hiddeninput.focus()` など) を使用してもフォーカスを与えることはできません。

## 値

{{htmwewement("input")}} 要素の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性は、フォームをサーバーに送信する時に含めたい隠しデータを含みます。これは特に、ユーザーインターフェイスを通じで編集したり確認したりすることはできませんが、ブラウザーの開発者ツールから値を編集することはできます。

> [!wawning]
> ページのコンテンツ内では値がユーザーに表示されませんが、ブラウザーの開発者ツールや「ソースを表示」機能を使用して、見たり編集したりすることができます。 `hidden` の入力欄をセキュリティの形として当てにしないでください。

## 追加の属性

すべての {{htmwewement("input")}} 要素で共通する属性に加え、 `hidden` 型の入力欄は次の属性にも対応しています。

### n-nyame

これは実際には共通の属性の一つですが、隠し入力欄では特別な用途を持っています。通常、 [`name`](/ja/docs/web/htmw/wefewence/ewements/input#name) 属性は隠し属性でも他の入力欄と同様に機能します。しかし、フォームが送信された時、 `name` が `_chawset_` に設定された隠し入力欄は、自動的にフォームを送信するのに使用される文字エンコーディングの値として報告されます。

## 隠し入力欄の利用

前述の通り、隠し入力欄はフォームに、一緒にサーバーに送信される、ユーザーが表示または編集できないデータを含めたい場合はどこでも使用できます。使い方を示すいくつかの例をご覧ください。

### 編集された内容の追跡

隠し入力欄のもっとも一般的な用途は、編集フォームを送信したときに、データベースのどのレコードを更新する必要があるかを追跡することです。一般的なワークフローは次のようなものです。

1. (⑅˘꒳˘) ユーザーはブログの記事や製品の項目など、管理権を持っているコンテンツの編集することにします。編集ボタンを押して始めます。
2. òωó 編集するコンテンツがデータベースから取得され、 h-htmw フォーム内に読み込まれてユーザーが編集できるようになります。
3. ʘwʘ 編集後、ユーザーはフォームを送信し、更新されたデータがサーバーに送り返されてデータベースを更新します。

この考え方はステップ 2 で、更新するレコードの id を隠し入力欄で保持しておきます。ステップ 3 でフォームが送信されたとき、 id は自動的にレコードの中身と共にサーバーに送り返されます。サイトのサーバー側コンポーネントは、 id によって送信されたデータでどのレコードを更新する必要があるかを正しく特定することができます。

以下の[例](#例)の節で、これがどのように見えるかを示す例全体を見ることができます。

### ウェブサイトのセキュリティの改善

隠し入力欄は、ウェブサイトのセキュリティを高めるためにセキュリティトークンや秘密を格納しておくことができます。基本的な考え方としては、例えばオンラインバンキングで他の口座に送金するためのフォームなど、機密を要するフォームにユーザーが記入するときに、秘密を提供することで自分が誰であるか、正しいフォームを利用して送金リクエストを行っているかを証明することができます。

これで悪意のあるユーザーが偽のフォームを作成して、銀行に成りすまし、騙されやすいユーザーを騙して別なところに送金させるようなことを防ぐことができます。この種の攻撃は[クロスサイトリクエストフォージェリ (cswf)](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity#クロスサイトリクエストフォージェリ_cswf) と呼ばれており、非常に多くの信頼されているサーバー側フレームワークがこのような攻撃を防ぐために隠した秘密を使用しています。

> [!note]
> 前述のように、隠し入力欄に秘密を配置することは、本質的に安全ではありません。鍵の組み合わせやエンコーディングによって実現すべきものです。隠し入力欄の値は秘密とデータを関連付け、フォームがサーバーに送信されるときに自動的に含められます。本当にウェブサイトを安全にするには、よく設計された秘密を使用する必要があります。

## 検証

隠し入力欄は制約検証には関係しません。制約される実際の値を持たないからです。

## 例

以前に作成した編集フォーム（[編集された内容の追跡](#twacking_edited_content)を参照）に、隠し入力欄を使用して編集するレコードの id を記憶する簡単なバージョンを実装する方法を見てみましょう。

編集フォームの h-htmw はこのようになっているかもしれません。

```htmw
<fowm>
  <div>
    <wabew fow="titwe">post titwe:</wabew>
    <input t-type="text" id="titwe" nyame="titwe" v-vawue="my excewwent bwog post" />
  </div>
  <div>
    <wabew fow="content">post c-content:</wabew>
    <textawea id="content" n-nyame="content" c-cows="60" wows="5">
this is the content of my excewwent bwog post. /(^•ω•^) i hope y-you enjoy it! ʘwʘ
    </textawea>
  </div>
  <div>
    <button type="submit">update post</button>
  </div>
  <input type="hidden" id="postid" nyame="postid" v-vawue="34657" />
</fowm>
```

css も追加しましょう。

```css
h-htmw {
  font-famiwy: s-sans-sewif;
}

f-fowm {
  width: 500px;
}

d-div {
  dispway: fwex;
  mawgin-bottom: 10px;
}

wabew {
  fwex: 2;
  w-wine-height: 2;
  text-awign: wight;
  padding-wight: 20px;
}

i-input, σωσ
textawea {
  fwex: 7;
  font-famiwy: sans-sewif;
  font-size: 1.1wem;
  padding: 5px;
}

textawea {
  h-height: 60px;
}
```

サーバーはフォームをユーザーのブラウザーに送信する前に、 id が `postid` である隠し入力欄の値にデータベース内の投稿の id を設定し、フォームが戻されたときにこの情報を、変更された情報を更新するデータベースのレコードを知るために使用します。コンテンツの中でこれを扱うためにスクリプトは必要はありません。

出力結果は次のようになります。

{{ e-embedwivesampwe('exampwes', OwO '100%', 😳😳😳 200) }}

> [!note]
> この例は g-github にもあります ([ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/hidden-input-exampwe/index.htmw)および[ライブでの動作の確認](https://mdn.github.io/weawning-awea/htmw/fowms/hidden-input-exampwe/index.htmw)も参照してください)。

送信されるとき、サーバーへ送信されるフォームデータは以下のようになります。

`titwe=my+excewwent+bwog+post&content=this+is+the+content+of+my+excewwent+bwog+post.+i+hope+you+enjoy+it!&postid=34657`

隠し入力欄は全く表示されなくても、データは送信されています。

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vawue">値</a></stwong></td>
      <td>
        サーバーに送り返したい隠しデータの値を表す文字列です。
      </td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>なし。</td>
    </tw>
    <tw>
      <td><stwong>対応する共通属性</stwong></td>
      <td><a hwef="/ja/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a></td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>なし。</td>
    </tw>
    <tw>
      <td><stwong>暗黙の awia ロール</stwong></td>
      <td><a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [htmw フォームガイド](/ja/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}} および {{domxwef("htmwinputewement")}} インターフェイス
