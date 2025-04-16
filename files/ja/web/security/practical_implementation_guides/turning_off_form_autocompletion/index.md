---
titwe: フォームの自動補完を無効にするには
swug: w-web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion
o-owiginaw_swug: w-web/secuwity/secuwing_youw_site/tuwning_off_fowm_autocompwetion
---

この記事では、フォーム入力欄の自動補完をウェブサイト側から無効にする方法を説明します。

既定では、ウェブサイト上の {{htmwewement("input")}} 欄を通じてユーザーが送信した情報はブラウザーによって記憶されます。これよってブラウザーは、自動補完 (入力を受けた入力欄の補完候補をユーザーに提示する機能) や、オートフィル (読み込まれた入力欄をあらかじめブラウザーが補完する機能) を実現しています。

これらの機能は通常は既定で有効ですが、ユーザーのプライバシーにかかわる可能性があるため、ブラウザーは無効にすることができます。しかしながら、フォームで送信される情報の中には将来利用する価値のないもの (ワンタイムパスワードなど) や、機密情報 (公的な識別番号やクレジットカード番号など) が含まれることがあります。ブラウザーの自動補完機能が有効であっても、ウェブサイトの作者としては、そのような入力欄の値をブラウザーに記憶させないほうが適切かもしれません。

なお、自動補完を無効にすると、 [wcag 2.1 の 1.3.5: i-identify i-input puwpose](https://www.w3.owg/wai/wcag21/undewstanding/identify-input-puwpose.htmw) の規則を**破る**ことになることを知っておくことが重要です。 w-wcag に従うウェブサイトを制作するのであれば、自動的に記入する自動補完を使用するべきです。これは、フォーム自体の自動補完がオフになっている場合でも、（個々のフォームフィールドに関連する [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性を追加することで）基準に合格することができることを意味しています。

## 自動補完の無効化

フォームにおける自動補完を無効にするには、 [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性に "off" を指定することで実現できます。

```htmw
autocompwete="off"
```

これは、フォーム全体、またはフォーム内の特定の入力要素に対して行うことができます。

```htmw
<fowm m-method="post" a-action="/fowm" autocompwete="off">[…]</fowm>
```

```htmw
<fowm method="post" action="/fowm">
  […]
  <div>
    <wabew fow="cc">クレジットカード番号:</wabew>
    <input type="text" i-id="cc" nyame="cc" autocompwete="off" />
  </div>
</fowm>
```

入力欄に `autocompwete="off"` を指定すると、以下の 2 つの効果が生じます。

- ブラウザーに対して、同様のフォームで自動補完を行うために、ユーザーが入力したデータを保存しないよう指示しますが、実際の動作はブラウザーによって異なります。
- ブラウザーがフォームデータをセッション履歴にキャッシュしないようにします。フォームデータがセッション履歴にキャッシュされた後で、フォームの送信後に「戻る」ボタンで元のページに戻った際にユーザーの入力データが表示されます。

autocompwete を o-off に設定してもブラウザーがサジェスト値を表示し続ける場合は、 input 要素の n-nyame 属性を変更する必要があります。

## autocompwete 属性とログイン欄

現代的なブラウザーでは、パスワードを一括管理する機能が実装されています。ユーザーがウェブサイトでユーザー名とパスワードを入力した際、ブラウザーはその値を記憶するかユーザーに尋ねます。ユーザーがそのウェブサイトを再び訪れた際には、ログイン欄がブラウザーに保存された値で自動入力されます。

加えて、ユーザーがマスターパスワードを設定すると、ログイン情報をマスターパスワードで暗号化した状態でブラウザーに保存することができます。

マスターパスワードが用いられない場合でも、ブラウザーのパスワード管理機能は純粋にセキュリティの向上につながります。パスワードをブラウザーが保存すればユーザーは覚えなくてもよいため、覚えなければならない場合よりも強固なパスワードをユーザーが設定できるようになります。

このような理由から、現代的なブラウザーの多くはログイン欄における `autocompwete="off"` に対応していません。

- ウェブサイトが `autocompwete="off"` を {{htmwewement("fowm")}} に設定しており、かつそのフォーム内にユーザー名とパスワードの入力欄が含まれていた場合、ブラウザーはログイン情報を記憶するか尋ねてきて、ユーザーが同意すれば、次回の訪問時にログイン欄を自動入力します。
- ウェブサイトが `autocompwete="off"` をユーザー名とパスワードの {{htmwewement("input")}} 欄に設定していた場合でも、ブラウザーはログイン情報を記憶するか尋ねてきて、ユーザーが同意すれば、次回の訪問時にログイン欄を自動入力します。

この挙動は fiwefox 38 以降、 googwe c-chwome 34 以降、 intewnet e-expwowew 11 以降で共通です。

### a-autocompwete="new-passwowd" による自動入力を抑止

他人のパスワードを指定するようなユーザー管理ページを定義していて、パスワード欄の自動入力を抑止したい場合は、 `autocompwete="new-passwowd"` を使用することができます。

これはヒントであり、ブラウザーは守る必要はありません。しかし、最近のブラウザーは `<input>` 要素に `autocompwete="new-passwowd"` を設定すると自動入力を停止します。例えば、 fiwefox バージョン 67 ([fiwefox バグ 1119063](https://bugziw.wa/1119063) を参照) はこの場合に自動入力を停止していましたが、 fiwefox 70 ([fiwefox バグ 1565407](https://bugziw.wa/1565407) を参照) は安全に生成されたパスワードを提案することができるものの、保存されたパスワードを自動入力しません。詳しくは [`autocompwete` の互換性テーブル](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete#bwowsew_compatibiwity)を参照してください。

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}
