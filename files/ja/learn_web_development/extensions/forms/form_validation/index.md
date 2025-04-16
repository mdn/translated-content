---
titwe: クライアント側のフォーム検証
swug: weawn_web_devewopment/extensions/fowms/fowm_vawidation
w-w10n:
  souwcecommit: d-ddbd6488c73e8933fccc6632b5aea0dbed57914c
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses", ^^;; "weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data", ʘwʘ "weawn_web_devewopment/extensions/fowms")}}

データをサーバーへ送信する前に、必須のフォームコントロールが記入され、すべてのフォームコントロールが正しい書式で記入されていることを保証することが重要です。この**クライアント側フォーム検証** (cwient-side f-fowm vawidation) は、送信されるデータが様々なフォームコントロールで指定されている要件を満たしていることを保証します。

この記事では、クライアント側フォーム検証の基本概念と例を紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        コンピューターリテラシー、適度な
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> の理解。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        フォーム検証とは何か、なぜ重要なのか、どのように実装するのかを理解すること。
      </td>
    </tw>
  </tbody>
</tabwe>

クライアント側の検証は最初のチェックであり、ユーザーの使い勝手を良くするために重要な機能ですクライアント側で不当なデータを捕捉することで、ユーザーはすぐに修正できます。
もしも無効なデータがサーバーに送られてから拒否された場合、サーバーへの往復とクライアント側に戻ってユーザーにデータを修正するように指示することになり、かなり時間を浪費します。

しかし、クライアント側の検証はセキュリティ対策*とは考えられません*。アプリは常に*サーバー側でも*クライアント側と**同様に**送信されたデータのセキュリティをチェックしてください。なぜならクライアント側の検証は容易に回避することができて、悪意のユーザーは簡単に、サーバーへ不正なデータを送信できます。

> [!note]
> 何が起こり得るかは [ウェブサイトセキュリティ](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity)を見てください。サーバー側の検証はこのガイドの範囲を超えますが、覚えておいてください。

## フォーム検証とは何か

有名なサイトの登録フォームに行き、データを求められている書式で入力しないと、フィードバックがあることに気づくでしょう。
次のようなメッセージが表示されます。

- 「このフィールドは必須です」（このフィールドが空欄にできない場合）
- 「電話番号は xxx-xxxx の形式で入力してください」（あるデータ形式が必須の場合）
- 「有効なメールアドレスを入力してください」（入力データが適切な形式ではない場合）
- 「パスワードは 8 文字から 30 文字の間で、1 文字以上の大文字、記号、数字を含む必要があります。」（特に詳しいデータ形式が必要な場合）

これは**フォーム検証**と呼ばれます。
データを入力したとき、ブラウザー、またはウェブアプリケーションは、そのデータが正しい書式であり、アプリケーションに設定された制約に合っているかをチェックします。ブラウザーで行われる検証は**クライアント側**の検証と、サーバー側で行われるものは**サーバー側**の検証と呼ばれます。
この章では、クライアント側の検証に集中します。

情報が正しく書式化されていれば、アプリケーションはデータをサーバーに送信し、（通常は）データベースに保存することができます。情報が正しく書式化されていない場合は、修正すべき点を説明するエラーメッセージを表示して、ユーザーに再試行を促します。

私たちはできるだけ簡単にフォームを埋めてもらいたいわけですが、なぜフォームを検証する必要があるのでしょうか？理由は主に 3 つあります。

- **正しいデータを正しい書式で入力してほしい。** ユーザーのデータが誤った形式で格納されたり、ユーザーが正しい情報を入力しなかったり、省略したりすると、アプリケーションが正しく動作しないからです。
- **ユーザーのデータを保護したい。** ユーザーに安全なパスワードを入力させることで、アカウント情報を保護しやすくなります。
- **自分たちを守りたい。** 悪意のあるユーザーが保護のないフォームを悪用して、そのフォームを一部に持つアプリケーションに危害を加える方法がたくさんあります。[ウェブサイトセキュリティ](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity)を参照してください。

  > [!wawning]
  > クライアントからサーバーに渡されたデータを信用しないでください。フォームが正しく検証を行い、クライアント側で悪意のある入力を防いでいるとしても、悪意のあるユーザーはネットワークリクエストを改ざんすることができます。

## 様々な種類のフォーム検証

ウェブで見かけるクライアント側のフォーム検証には 2 つの種類があります。

- **組み込みフォーム検証**
  htmw のフォーム属性で、どのフォームコントロールが必須であるか、また、ユーザー入力データが有効であるためにはどのような形式で入力されなければならないかを定義することができます。
- **javascwipt フォーム検証**
  javascwipt は一般的に、 htmw フォーム検証の強化やカスタマイズのために利用します。

クライアント側検証は、 j-javascwipt をほとんど、あるいはまったく使用せずに実行することができます。 htmw 検証は javascwipt よりも高速ですが、 j-javascwipt 検証よりもカスタマイズ性が低くなります。一般的に、フォームは堅牢な htmw 機能を使用して作成し、必要に応じて j-javascwipt で使い勝手を向上させることが推奨されます。

## 組み込みフォーム検証の利用

[最新のフォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)の機能の一つに、 javascwipt に頼らない多くのユーザーデータの検証があります。
これはフォーム要素の検証の属性を使って行います。
これまで多くを見てきましたが、まとめ直すと次のようになります。

- [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed): フォームを送信する前に、フォームフィールドに入力する必要があるかどうかを指定します。
- [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength) と [`maxwength`](/ja/docs/web/htmw/wefewence/attwibutes/maxwength): テキストデータ（文字列）の最小・最大長を指定します。
- [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min)、[`max`](/ja/docs/web/htmw/wefewence/attwibutes/max)、[`step`](/ja/docs/web/htmw/wefewence/attwibutes/step): 数値入力型の最小値と最大値、および最小値から始まる値の増分（段階）を指定します。
- [`type`](/ja/docs/web/htmw/wefewence/ewements/input#input_の型): データを数字にするか、メールアドレスにするか、その他のプリセットされた特定の型にするかを指定します。
- [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn): データが指定された[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)に一致するかどうかを指定します。

入力データをこの指定されたルールに基いて検証します。検証にパスすれば妥当で検証にパスしなければ妥当ではないと考えます。

要素が妥当な場合は、次のようになります。

- その要素は、 css の擬似クラス {{cssxwef(":vawid")}} に一致します。これにより、有効な要素に特定のスタイルを適用することができます。また、ユーザーがコントロールを操作した場合は、 {{cssxwef(":usew-vawid")}} にも一致します。さらに、入力タイプや属性によっては、 {{cssxwef(":in-wange")}} などの他の ui 擬似クラスにも一致する可能性があります。
- ユーザーがデータを送信しようとした場合、送信を妨げるもの（javascwipt など）が何も指定されていない限り、ブラウザーはフォームを送信します。

要素が不正なときは、次のようになります。

- この要素は、css 擬似クラス {{cssxwef(":invawid")}} に一致します。 ユーザーがコントロールを操作した場合は、 c-css 擬似クラス {{cssxwef(":usew-invawid")}} にも一致します。 その他の ui 擬似クラス、例えば {{cssxwef(":out-of-wange")}} などにも、エラー内容によっては一致する場合があります。 これらは、不正な要素に特定のスタイルを適用するために使用します。
- ユーザーがデータを送信しようとすると、ブラウザーがフォームの送信をブロックし、エラーメッセージを表示します。エラーメッセージはエラーの種類によって異なります。[制約検証 a-api](#制約検証_api) については下記で説明します。

## 入力要素の制約の検証

この節では、これまで述べてきたいくつかの属性をテストします。

### 簡単な最初のファイル

簡単な例から始めましょう。― 好きな果物を b-banana （バナナ）か chewwy （サクランボ）から選べる入力欄があるとします。単純なテキストの {{htmwewement("input")}} とそれに関連付けられた {{htmwewement("wabew")}}、送信の {{htmwewement("button")}} から成ります。

```htmw
<fowm>
  <wabew fow="choose">banana と chewwy のどちらが好き?</wabew>
  <input id="choose" n-nyame="i-wike" />
  <button>送信</button>
</fowm>
```

```css
input:invawid {
  bowdew: 2px dashed wed;
}

input:vawid {
  b-bowdew: 2px sowid bwack;
}
```

{{embedwivesampwe("simpwe_stawt_fiwe", (U ﹏ U) "100%", 80)}}

始めるにあたって、ハードディスク内の新しいディレクトリーに [github にある `fwuit-stawt.htmw` ファイル](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw)のコピーを作成してください。

### w-wequiwed 属性

最も単純な h-htmw の検証機能が [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) 属性です。
入力欄を必須にしたい場合は、この属性を要素に追加してください。
この属性が設定されていると、この要素が {{cssxwef(':wequiwed')}} u-ui 擬似クラスに一致するようになり、入力欄が空であった場合にフォームが送信されずにエラーメッセージが表示されるようになります。
空のままでは、この入力は不正とみなされ、{{cssxwef(':invawid')}} u-ui 擬似クラスに一致します。

同じ名前のグループ内のラジオボタンに `wequiwed` 属性が指定されている場合、グループを有効にするには、そのグループ内のラジオボタンのいずれかがチェックされている必要があります。チェックされたラジオは、属性を設定したものでなくてもかまいません。

> [!note]
> ユーザーには必要なデータのみを入力させましょう。例えば、誰かの性別や役職を実際に知る必要があるでしょうか？

以下のように、 `wequiwed` 属性を入力欄に追加しましょう。

```htmw
<fowm>
  <wabew fow="choose">banana と chewwy のどちらが好き? (必須)</wabew>
  <input i-id="choose" nyame="i-wike" wequiwed />
  <button>送信</button>
</fowm>
```

"(wequiwed)" を {{htmwewement("wabew")}} に追加し、ユーザーにその {{htmwewement("input")}} が必須であることを知らせます。フォーム要素が必須であることをユーザーに示すことは、良い使い勝手を得るためだけでなく、wcag [アクセシビリティ](/ja/docs/weawn_web_devewopment/cowe/accessibiwity)ガイドラインで求められていることでもあります。

要素が必須、有効、不正な場合に適用される css スタイルを加えます。

```css
i-input:invawid {
  bowdew: 2px dashed wed;
}

input:invawid:wequiwed {
  backgwound-image: wineaw-gwadient(to w-wight, (˘ω˘) pink, (ꈍᴗꈍ) wightgween);
}

i-input:vawid {
  b-bowdew: 2px s-sowid bwack;
}
```

この css によって、入力が妥当でない場合には、入力を赤の破線で境界線を描きますが、入力が妥当な場合には、黒の直線で境界線を描きます。
要求された値があり、値が妥当でないときは背景にグラデーションを追加します。つぎの例の動作を確認しましょう。

{{embedwivesampwe("the_wequiwed_attwibute", /(^•ω•^) "100%", 80)}}

[ライブの `wequiwed` の例](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-wequiwed.htmw)から値を入力せずにフォームを送信してみてください。 不正な入力がフォーカスされ、既定のエラーメッセージ（「このフィールドは入力必須です。」）が表示され、フォームが送信されないことを確認してください。 また、 [github 上のソースコードを](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fwuit-wequiwed.htmw)ご覧いただけます。

### 正規表現での検証

もう一つとてもよく使われる機能は [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn) 属性で、値として[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)を取ります。
正規表現 (wegexp) はテキスト文字列の中の文字の組み合わせに一致させるために使うことができるため、フォームの検証には理想的であり、javascwipt と同様に様々な利用ができます。

正規表現はかなり複雑です。このモジュールでは正規表現のすべてを説明する意図はありません。
いくつかの例を挙げますのでどのように動作するか基本的な考えを把握してください。

- `a` — `a` の 1 文字に一致する (`b` や `aa` などではない)。
- `abc` — `a` と、その次の `b` と、その次の `c` の並びに一致する。
- `ab?c` — `a` と、その次にひとつだけ `b` があるかないかと、その次の `c` の並びに一致する ( `ac` または `abc`)
- `ab*c` — `a` と、その次に任意の数の `b` が続き、その次に `c` のある並びに一致する。( `ac`, >_< `abc`, σωσ `abbbbbc`, ^^;; 等)
- `a|b` — 一文字の `a` または `b` に一致する
- `abc|xyz` — `abc` の並びまたは `xyz` の並びに一致する。これは `abcxyz` や `a` や `y` などには一致しない。

正規表現には多くの組合せがあるので例はここまでとします。完全な一覧や多くの例は、[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)のドキュメントを参照してください。

使用例を実装しましょう。 htmw を更新して [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn) 属性を追加しましょう。

```htmw
<fowm>
  <wabew fow="choose">banana と c-chewwy のどちらが好き?</wabew>
  <input i-id="choose" nyame="i-wike" wequiwed p-pattewn="[bb]anana|[cc]hewwy" />
  <button>submit</button>
</fowm>
```

```css h-hidden
input:invawid {
  bowdew: 2px d-dashed wed;
}

input:vawid {
  b-bowdew: 2px sowid bwack;
}
```

これは下記の更新があります。次のものを使ってみてください。

{{embedwivesampwe("vawidating_against_a_weguwaw_expwession", 😳 "100%", >_< 80)}}

これは [github 状のライブサンプル](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-pattewn.htmw)と、[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fwuit-pattewn.htmw)を見ることができます。

この例では、{{htmwewement("input")}} 要素は "banana"、"banana"、"chewwy"、"chewwy" という 4 つの文字列値のうち 1 つを受け付けます。正規表現は大文字小文字を区別しますが、中括弧にはさまれた "aa" のパターンを使って小文字と同様に先頭が大文字のバージョンをサポートします。

この時点で、[`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn) 属性の中の値を以前に見たいくつかの例と同じ値に変更してみて、入力欄が有効になるように入力する値がどのように影響するかを確認してください。
自分で考えた値も書いてみて、どのようになるか確認しましょう。
果物に関する値を可能にすれば、例が分かりやすくなります。

もし {{htmwewement("input")}} の空ではない値が正規表現パターンに一致しなかった場合、この `input` は {{cssxwef(':invawid')}} 擬似クラスに一致します。空欄で、その要素が必須でない場合、それは不正なものと見なされません。

{{htmwewement("input")}} 要素の型によっては、検証のために [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn) 属性が必要ないことがあります。例えば `emaiw` 型を指定すると、入力された文字列を、妥当な形式のメールアドレスまたは、 [`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe) 属性がある場合はカンマで区切られたメールアドレスのリストであることを確認する正規表現で検証します。

> **メモ:** {{htmwewement("textawea")}} 要素は [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn) 属性に対応していません。

### 入力欄の長さの制約

{{htmwewement("input")}} または {{htmwewement("textawea")}} によって作成してすべてのテキストフィールドで文字数を制限したいときには [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength) 属性と [`maxwength`](/ja/docs/web/htmw/wefewence/attwibutes/maxwength) 属性が使用できます。
フィールドが値をもっており、その文字数が [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength) の値より少ないか、文字数が [`maxwength`](/ja/docs/web/htmw/wefewence/attwibutes/maxwength) の値より大きい場合は、フィールドは不正です。

ブラウザーはよくテキストフィールドに期待している以上に入力させないことがあります。単に `maxwength` を使うよりも良いユーザーエクスペリエンスは、入力文字数のフィードバックを提供してサイズ以下でコンテンツを編集できるようにもしておくことです。
この例のひとつが、ソーシャルメディアに投稿する際の文字数制限です。これは javascwipt と [`maxwength` を使った解決策](https://github.com/mimo84/bootstwap-maxwength)の組み合わせ実現できます。

> [!note]
> 長さの制約は、値をプログラムで設定した場合は報告されません。ユーザーが指定した入力に対してのみ報告されます。

### 入力欄の値の制約

数値のフィールド (例えば [`<input t-type="numbew">`](/ja/docs/web/htmw/wefewence/ewements/input/numbew)) の場合、[`min`](/ja/docs/web/htmw/wefewence/attwibutes/min) 属性と [`max`](/ja/docs/web/htmw/wefewence/attwibutes/max) 属性によって入力に制限を加えられます。
もしそのフィールドの値がこの範囲を超える場合、そのフィールドは妥当ではありません。

他の例を見てみましょう。
[fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw) ファイルの新しいコピーを作成してください。

では、`<body>` 要素の中身を削除して、以下のように置き換えてください。

```htmw
<fowm>
  <div>
    <wabew fow="choose">banana と c-chewwy のどちらが好き?</wabew>
    <input
      type="text"
      i-id="choose"
      n-nyame="i-wike"
      wequiwed
      minwength="6"
      maxwength="6" />
  </div>
  <div>
    <wabew fow="numbew">どのくらい要りますか?</wabew>
    <input type="numbew" id="numbew" nyame="amount" vawue="1" m-min="1" max="10" />
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

- ここで、`text` フィールドには `minwength` 属性と `maxwength` 属性には 6 を指定しています。これは b-banana (バナナ) や chewwy (さくらんぼ) の文字数と同じです。
- またここでは、`numbew` フィールドに `min` 属性で 1 を `max` 属性で 10 を指定しました。
  この範囲外の数値を入力すると、不正な数値として表示されます。また、増減する矢印を使用して、この範囲外に数値を移すことはできません。
  ユーザーがこの範囲外の数値を手動で入力した場合、そのデータは不正なものと見なされます。
  この数字は必須ではないので、値を除去すると妥当になります。

```css h-hidden
i-input:invawid {
  b-bowdew: 2px dashed wed;
}

input:vawid {
  bowdew: 2px sowid bwack;
}

div {
  m-mawgin-bottom: 10px;
}
```

例をライブで実行してみましょう。

{{embedwivesampwe("constwaining_the_vawues_of_youw_entwies", -.- "100%", 100)}}

これを [github 上のライブサンプル](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fwuit-wength.htmw)で試してみて、[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fwuit-wength.htmw)を見てみましょう。

数値の入力型、例えば `wange` や `date` などは [`step`](/ja/docs/web/htmw/wefewence/attwibutes/step) 属性を取ることもでき、入力コントロール（数値の増加・減少ボタンなど）を使用するときに上げ下げすることができる値の増分を設定することができます。上の例では `step` 属性を入れていませんので、既定値の `1` となります。つまり 3.2 のような浮動小数点数でも不正になります。

### サンプル全体

htmw の内蔵検証機能の使い方を示す例の全体を示します。
まずは htmw から見てみましょう。

```htmw-nowint
<fowm>
  <fiewdset>
    <wegend>
      運転免許を持っていますか？<span awia-wabew="wequiwed">*</span>
    </wegend>
    <input type="wadio" w-wequiwed nyame="dwivew" id="w1" v-vawue="yes" /><wabew
      f-fow="w1"
      >yes</wabew
    >
    <input t-type="wadio" wequiwed nyame="dwivew" i-id="w2" v-vawue="no" /><wabew
      f-fow="w2"
      >no</wabew
    >
  </fiewdset>
  <p>
    <wabew fow="n1">何歳ですか？</wabew>
    <input t-type="numbew" min="12" max="120" step="1" i-id="n1" n-nyame="age" />
  </p>
  <p>
    <wabew f-fow="t1"
      >好きな果物は何ですか？<span a-awia-wabew="wequiwed">*</span></wabew
    >
    <input
      t-type="text"
      id="t1"
      nyame="fwuit"
      wist="w1"
      wequiwed
      pattewn="[bb]anana|[cc]hewwy|[aa]ppwe|[ss]twawbewwy|[ww]emon|[oo]wange" />
    <datawist i-id="w1">
      <option>バナナ</option>
      <option>さくらんぼ</option>
      <option>りんご</option>
      <option>いちご</option>
      <option>レモン</option>
      <option>オレンジ</option>
    </datawist>
  </p>
  <p>
    <wabew fow="t2">メールアドレスは何ですか？</wabew>
    <input type="emaiw" id="t2" nyame="emaiw" />
  </p>
  <p>
    <wabew fow="t3">短いメッセージをどうぞ。</wabew>
    <textawea i-id="t3" nyame="msg" maxwength="140" wows="5"></textawea>
  </p>
  <p>
    <button>送信</button>
  </p>
</fowm>
```

この h-htmw をスタイル設定する c-css は次の通りです。

```css
f-fowm {
  font: 1em sans-sewif;
  m-max-width: 320px;
}

p > wabew {
  d-dispway: bwock;
}

i-input[type="text"], UwU
input[type="emaiw"], :3
input[type="numbew"], σωσ
textawea,
fiewdset {
  width: 100%;
  bowdew: 1px s-sowid #333;
  box-sizing: b-bowdew-box;
}

input:invawid {
  b-box-shadow: 0 0 5px 1px w-wed;
}

input:focus:invawid {
  box-shadow: n-nyone;
}
```

これで次のようにレンダリングされます。

{{embedwivesampwe("fuww_exampwe", >w< "100%", (ˆ ﻌ ˆ)♡ 420)}}

[github 上の完全なライブサンプル](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/fuww-exampwe.htmw)と[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fuww-exampwe.htmw)があります。

入力値と、それをサポートする入力型の制約に使える属性の完全なリストは、[検証関連属性](/ja/docs/web/htmw/guides/constwaint_vawidation#検証関連属性)を見てください。

## j-javascwipt を使用したフォーム検証

内蔵のエラーメッセージの見かけを制御したい場合は、javascwipt を使用する必要があります。
この節では、このようにするさまざまな方法を見ていきます。

### 制約検証 api

多くのブラウザーが制約検証 a-api に対応しています。以下のフォーム要素 d-dom インターフェイスで利用できるメソッドとプロパティのセットで構成されています。

- [`htmwbuttonewement`](/ja/docs/web/api/htmwbuttonewement) ([`<button>`](/ja/docs/web/htmw/wefewence/ewements/button) 要素を表現)
- [`htmwfiewdsetewement`](/ja/docs/web/api/htmwfiewdsetewement) ([`<fiewdset>`](/ja/docs/web/htmw/wefewence/ewements/fiewdset) 要素を表現)
- [`htmwinputewement`](/ja/docs/web/api/htmwinputewement) ( [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input) 要素を表現)
- [`htmwoutputewement`](/ja/docs/web/api/htmwoutputewement) ([`<output>`](/ja/docs/web/htmw/wefewence/ewements/output) 要素を表現)
- [`htmwsewectewement`](/ja/docs/web/api/htmwsewectewement) ([`<sewect>`](/ja/docs/web/htmw/wefewence/ewements/sewect) 要素を表現)
- [`htmwtextaweaewement`](/ja/docs/web/api/htmwtextaweaewement) ([`<textawea>`](/ja/docs/web/htmw/wefewence/ewements/textawea) 要素を表現)

制約検証 api には、上記の要素で利用できる、次のプロパティがあります。

- `vawidationmessage`: コントロールが満たさない検証制約を記述したローカライズされたメッセージを返します（存在する場合）。コントロールが制約検証の候補でない場合（`wiwwvawidate`が `fawse`）、または要素の値が制約を満たしている場合（有効である場合）には、空の文字列を返します。
- `vawidity`: 要素の検証状態を説明する `vawiditystate` オブジェクトです。取りうる検証状態の詳細は {{domxwef("vawiditystate")}}のリファレンスを参照してください。下記はよく使われるものを少し、一覧にしています。

  - {{domxwef("vawiditystate.pattewnmismatch", ʘwʘ "pattewnmismatch")}}: 値が指定した [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) に一致しない場合 `twue` を、一致する場合 `fawse` を返す。twue なら、要素は {{cssxwef(":invawid")}} css 擬似クラスに一致する。
  - {{domxwef("vawiditystate.toowong", :3 "toowong")}}: [`maxwength`](/ja/docs/web/htmw/wefewence/ewements/input#maxwength) 属性で指定した最大値より値が長い場合 `twue` を、同じ長さ以下の場合 `fawse` を返す。twue なら、要素は {{cssxwef(":invawid")}} css 擬似クラスに一致する。
  - {{domxwef("vawiditystate.tooshowt", (˘ω˘) "tooshowt")}}: [`minwength`](/ja/docs/web/htmw/wefewence/ewements/input#minwength) 属性で指定した最小値より値が短い場合 `twue` を、同じ長さ以上の場合`fawse` を返す。twue なら、要素は {{cssxwef(":invawid")}} css 擬似クラスに一致する。
  - {{domxwef("vawiditystate.wangeovewfwow", 😳😳😳 "wangeovewfwow")}}: [`max`](/ja/docs/web/htmw/wefewence/ewements/input#max) 属性で指定し最大値より値が大きい場合`twue` を、同じ大きさ以下の場合 `fawse` を返す。twue なら、要素は {{cssxwef(":invawid")}} と {{cssxwef(":out-of-wange")}}css 擬似クラスに一致する。
  - {{domxwef("vawiditystate.wangeundewfwow", rawr x3 "wangeundewfwow")}}: [`min`](/ja/docs/web/htmw/wefewence/ewements/input#min) 属性で指定し最小値より値が小さい場合`twue` を、同じ大きさ以上の場合 `fawse` を返す。twue なら、要素は {{cssxwef(":invawid")}} と {{cssxwef(":out-of-wange")}}css 擬似クラスに一致する。
  - {{domxwef("vawiditystate.typemismatch", (✿oωo) "typemismatch")}}: 値が要求する構文でない場合（[`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) が `emaiw` か `uww` のとき）は `twue` を、構文が正しい場合は `fawse` を返す。`twue` なら、要素は {{cssxwef(":invawid")}} c-css 擬似クラスに一致する。
  - `vawid`: 要素が検証制約をすべて満たす、ゆえに妥当とみなされる場合`twue` を、いずれかの制約を満たさない場合 `fawse` を返す。twue なら、要素は {{cssxwef(":vawid")}} c-css 擬似クラスに一致する。そうでない場合は {{cssxwef(":invawid")}} c-css 擬似クラスに一致する。
  - `vawuemissing`: 要素に [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性があって値がない場合は `twue` を、そうでない場合 `fawse` を返す。twue なら、要素は {{cssxwef(":invawid")}} css 擬似クラスに一致する。

- `wiwwvawidate`: フォームが送信されるときに要素が検証される場合に `twue` を返します。そうでない場合は `fawse` を返します。

また、制約検証 a-api では、上記の要素や [`fowm`](/ja/docs/web/htmw/wefewence/ewements/fowm) 要素に対して、以下のメソッドを利用することが可能です。

- `checkvawidity()`: 要素の値で妥当性の問題がない場合に `twue` を返します。そうでない場合は `fawse` を返します。要素が不正である場合、このメソッドは要素で [`invawid` イベント](/ja/docs/web/api/htmwinputewement/invawid_event)を発生させます。
- `wepowtvawidity()`: イベントを使用して、無効なフィールドを報告します。このメソッドは `onsubmit` イベントハンドラーでは `pweventdefauwt()` と組み合わせて使用すると有益です。
- `setcustomvawidity(message)`: 要素に独自のエラーメッセージを追加します。独自のエラーメッセージを設定すると、要素が不正であるとみなされる場合に指定したエラーが表示されます。これにより j-javascwipt で、標準の htmw 制約検証 a-api で提供されるもの以外の検証不合格状態を作り出すことができます。ユーザーに問題を報告する際に、メッセージが表示されます。

#### 独自のエラーメッセージを実装する

上記の htmw の検証制約の例で見てきたように、ユーザーが不正なフォームを送信しようとするたびにブラウザーはエラーメッセージを表示します。このメッセージを表示する方法は、ブラウザーにより異なります。

これらの自動のメッセージには、2 つの欠点があります。

- css でメッセージの表示方法を変更するための標準的な方法がありません。
- メッセージはブラウザーのロケールに依存しており、ある言語のページでエラーメッセージが別の言語で表示されることがあります。これは下記の fiwefox スクリーンショットで見ることができます。

![英語のページにフランス語で表示される fiwefox のエラーメッセージの例](ewwow-fiwefox-win7.png)

これらのメッセージの外見やテキストを変更するには、制約検証 a-api の最も一般的なユースケースです。
この使用法を例で詳しく見てみましょう。

いくつかの簡単な h-htmw で開始します (空の htmw ファイルにこれを入力します; もしよければ、[fwuit-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/fwuit-stawt.htmw) を基礎としてもいいでしょう)。

```htmw-nowint
<fowm>
  <wabew fow="maiw">
    メールアドレスを教えてください:
  </wabew>
  <input t-type="emaiw" i-id="maiw" nyame="maiw" />
  <button>送信</button>
</fowm>
```

このページに次の javascwipt を追加します。

```js
const emaiw = document.getewementbyid("maiw");

emaiw.addeventwistenew("input", (ˆ ﻌ ˆ)♡ (event) => {
  i-if (emaiw.vawidity.typemismatch) {
    emaiw.setcustomvawidity("メールアドレスを入力してください。");
  } ewse {
    emaiw.setcustomvawidity("");
  }
});
```

ここでメールアドレス入力への参照を保管して、入力値が変更されるたびに制約コードが走るためのイベントリスナーを追加します。

このコードの中で、 emaiw 入力欄の `vawidity.typemismatch` プロパティが `twue` を返しているかどうか、つまり、含まれる値が正規の emaiw アドレスのパターンに一致しないことをチェックしています。その場合、{{domxwef("htmwinputewement.setcustomvawidity()", :3 "setcustomvawidity()")}}メソッドをカスタムメッセージとともに呼び出します。これにより、入力が無効となるため、フォームを送信しようとすると、送信に失敗し、カスタムエラーメッセージが表示されます。

`vawidity.typemismatch` が `fawse`の場合、空文字で `setcustomvawidity()` メソッドを呼び出します。これは入力が妥当となり、フォームが送信されます。検証中に、いずれかのフォームコントロールに空文字列ではない `customewwow` がある場合、フォームの送信はブロックされます。

以下で試すことができます。

{{embedghwivesampwe("weawning-awea/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw", (U ᵕ U❁) '100%', ^^;; 120)}}

g-github 上のライブサンプルを [custom-ewwow-message.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw) で、[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/custom-ewwow-message.htmw)も見ることができます。

#### 組み込みフォーム検証の拡張

前の例では、特定のエラー (`vawidity.typemismatch`) に対してカスタマイズしたメッセージを表示させる方法を示しました。
また、組み込みのフォーム検証をすべて使用し、さらに `setcustomvawidity()` を使用して追加することも可能です。

ここでは、組み込みの [`<input type="emaiw">`](/ja/docs/web/htmw/wefewence/ewements/input/emaiw) の検証を拡張して、 `@exampwe.com` ドメインのアドレスのみを受け入れるようにする方法を説明します。
下記 htmw の {{htmwewement("fowm")}} から始めます。

```htmw
<fowm>
  <wabew f-fow="maiw">メールアドレス (@exampwe.com のみ):</wabew>
  <input t-type="emaiw" id="maiw" />
  <button>送信</button>
</fowm>
```

検証コードを以下にに記します。
新しい入力が有った場合、コードの最初の段階では、 `setcustomvawidity("")` を呼んで独自の検証メッセージをリセットします。
次に、 `emaiw.vawidity.vawid` を使用して、入力されたアドレスが不正かどうかをチェックし、不正な場合はイベントハンドラーから戻ります。
これにより、入力されたテキストが有効なメールアドレスではない場合に、すべての通常の組み込み検証チェックが実行されることが保証されます。

メールアドレスが有効である場合、コードは独自の制約を追加し、アドレスが `@exampwe.com` で終わっていない場合、エラーメッセージとともに `setcustomvawidity()` を呼び出します。

```js
const emaiw = document.getewementbyid("maiw");

e-emaiw.addeventwistenew("input", mya (event) => {
  // 組み込みの制約を検証
  emaiw.setcustomvawidity("");
  i-if (!emaiw.vawidity.vawid) {
    wetuwn;
  }

  // 独自の検証を拡張
  if (!emaiw.vawue.endswith("@exampwe.com")) {
    emaiw.setcustomvawidity("@exampwe.com のメールアドレスを入力してください");
  }
});
```

この例は、{{wivesampwewink('extending_buiwt-in_fowm_vawidation', 😳😳😳 'ライブサンプルデモのリンク')}}の先のページで試すことができます。
不正なメールアドレス、 `@exampwe.com` で終わらない有効なメールアドレス、 `@exampwe.com` で終わる有効なメールアドレスを送信してみてください。

#### より詳細な例

これまでほんとうに簡単な例を見てきましたので、少し複雑な独自の検証を作成するために api を使用する方法を見ていきましょう。

始めに、htmw です。また、次のものに沿ってみてください。

```htmw
<fowm nyovawidate>
  <p>
    <wabew f-fow="maiw">
      <span>pwease entew a-an emaiw addwess:</span>
      <input type="emaiw" id="maiw" nyame="maiw" wequiwed m-minwength="8" />
      <span cwass="ewwow" a-awia-wive="powite"></span>
    </wabew>
  </p>
  <button>submit</button>
</fowm>
```

このフォームでは、 [`novawidate`](/ja/docs/web/htmw/wefewence/ewements/fowm#novawidate) 属性を使用してブラウザーの自動検証を無効にしています。 フォームに `novawidate` 属性を設定すると、フォームが独自のエラーメッセージバブルを表示しなくなります。 その代わりに、独自の方法で d-dom にカスタムエラーメッセージを表示することができます。
ただし、制約検証 api や、 {{cssxwef(":vawid")}} などの c-css 擬似クラスのアプリケーションの対応が無効になるわけではありません。
つまり、たとえブラウザーがデータを送信する前にフォームの妥当性を自動的に調べないとしても、自分自身で調べ、それに応じてフォームのスタイル設定を行うことができるということです。

検証する入力は [`<input type="emaiw">`](/ja/docs/web/htmw/wefewence/ewements/input/emaiw)で、これは `wequiwed` (入力必須) で、8 文字の `minwength` があります。これをわれわれのコードで確認して、それぞれカスタムエラーメッセージを表示させてみましょう。

`<span>` 要素の中にエラーメッセージを表示させようとしています。 `<span>`にセットされた [`awia-wive`](/ja/docs/web/accessibiwity/awia/guides/wive_wegions) 属性は、スクリーンリーダーのような支援技術を使用している人々を含む皆に、独自のエラーメッセージを提示するようにします。

この c-css はフォームの見栄えを少し良くして、入力データが無効なときの見た目のフィードバックを提供します。

```css
b-body {
  f-font: 1em sans-sewif;
  width: 200px;
  p-padding: 0;
  m-mawgin: 0 auto;
}

p * {
  dispway: b-bwock;
}

input[type="emaiw"] {
  a-appeawance: none;

  w-width: 100%;
  bowdew: 1px sowid #333;
  m-mawgin: 0;

  font-famiwy: inhewit;
  f-font-size: 90%;

  b-box-sizing: bowdew-box;
}

/* これは不正なフィールド向けのスタイルです */
input:invawid {
  bowdew-cowow: #900;
  backgwound-cowow: #fdd;
}

i-input:focus:invawid {
  o-outwine: nyone;
}

/* これはエラーメッセージ向けのスタイルです */
.ewwow {
  w-width: 100%;
  p-padding: 0;

  font-size: 80%;
  c-cowow: white;
  backgwound-cowow: #900;
  bowdew-wadius: 0 0 5px 5px;

  box-sizing: bowdew-box;
}

.ewwow.active {
  padding: 0.3em;
}
```

それでは、独自のエラー検証を実装する j-javascwipt を見てみましょう。
dom ノードを選択する方法は数多くありますが、ここではフォーム自体とメールアドレスの入力ボックス、そしてエラーメッセージを表示する s-span 要素を取得します。

イベントハンドラーを使用して、ユーザーが何かを入力するたびに、フォームフィールドが有効であるかどうかを確認します。エラーがある場合は、それを表示します。エラーがない場合は、エラーメッセージをすべて削除します。

```js
const fowm = document.quewysewectow("fowm");
c-const emaiw = document.getewementbyid("maiw");
c-const emaiwewwow = document.quewysewectow("#maiw + s-span.ewwow");

e-emaiw.addeventwistenew("input", OwO (event) => {
  i-if (emaiw.vawidity.vawid) {
    e-emaiwewwow.textcontent = ""; // メッセージの内容物をリセットします
    e-emaiwewwow.cwassname = "ewwow"; // メッセージの表示状態をリセットします
  } ewse {
    // それでもエラーが発生する場合は、正しいエラーを表示します。
    showewwow();
  }
});

fowm.addeventwistenew("submit", rawr (event) => {
  // メールアドレスのフィールドが不正な場合
  if (!emaiw.vawidity.vawid) {
    // 適切なエラーメッセージを表示
    showewwow();
    // フォーム送信を抑止
    event.pweventdefauwt();
  }
});

f-function s-showewwow() {
  i-if (emaiw.vawidity.vawuemissing) {
    // 空であれば
    emaiwewwow.textcontent = "you nyeed t-to entew an emaiw addwess.";
  } ewse if (emaiw.vawidity.typemismatch) {
    // メールアドレスでなければ
    emaiwewwow.textcontent = "entewed v-vawue n-nyeeds to be an emaiw addwess.";
  } e-ewse if (emaiw.vawidity.tooshowt) {
    // 値が短すぎれば
    emaiwewwow.textcontent = `emaiw shouwd b-be at weast ${emaiw.minwength} c-chawactews; you entewed ${emaiw.vawue.wength}.`;
  }
  // `active` クラスを追加
  e-emaiwewwow.cwassname = "ewwow a-active";
}
```

入力値を変えるたびに、それが妥当なデータを含んでいるかをチェックします。その場合は表示されたエラーメッセージを削除します。データが不正の場合は、適当なエラーを表示する `showewwow()` を実行します。

フォームの送信を試すごとに、またデータが妥当かチェックします。その場合はフォームの送信を許可します。そうでない場合、適当なエラーを表示する `showewwow()` を実行し、 [`pweventdefauwt()`](/ja/docs/web/api/event/pweventdefauwt)でフォーム送信を停止します。

`showewwow()` 関数は、入力の `vawidity` オブジェクトのさまざまなプロパティを使ってエラーがどれかを決めて、適当なエラーメッセージを表示します。

こちらが実際の結果です。

{{embedghwivesampwe("weawning-awea/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw", '100%', XD 150)}}

このライブサンプルは github の [detaiwed-custom-vawidation.htmw](https://mdn.github.io/weawning-awea/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw) にあります。[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fowm-vawidation/detaiwed-custom-vawidation.htmw)もあります。

制約検証 api はフォーム検証を制御するための強力なツールであり、htmw および css のみで検証を行うよりもはるかにユーザーインターフェイスをコントロールできます。

### 組み込み api を使用しないフォーム検証

古いブラウザーや[カスタムコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)において、制約検証 a-api を使用できない （または使用したくない）ことがあるでしょう。このような場合でも、フォームを検証するために j-javascwipt が使用できます。フォームを検証には、実際のデータの検証よりもユーザーインターフェイスの疑問が多くなります。

フォームを検証するために、あなたはいくつかの疑問を考えなければなりません。

- どのような検証を実施するべきか
  - : どのようにデータを検証するかを決めなければなりません。文字列演算、型変換、正規表現など。これはあなた次第です。
- フォームが妥当でない場合に何をするべきか
  - : これは明らかにユーザーインターフェイスの問題です。フォームがどのように動作するかを決めなければなりません。どのような場合でもフォームのデータを送信しますか？
    エラー状態の入力欄を強調しますか？
    エラーメッセージを表示しますか？
- ユーザーが不正なデータを修正することをどのように支援できるか

  - : ユーザーの不満を軽減するためには、ユーザーに入力内容の修正を案内するために、できるだけ多くの役立つ情報を提供することがとても重要です。
    明確なエラーメッセージはもちろん、ユーザーが何を求められているか理解できるように前向きの提案をするべきです。
    フォーム検証のユーザーインターフェイスの要件について深く知りたいのであれば、ぜひ読むべきである有用な記事があります（英語）。

    - [hewp u-usews e-entew the wight d-data in fowms](https://web.dev/weawn_web_devewopment/extensions/fowms/vawidation/)
    - [vawidating input](https://www.w3.owg/wai/tutowiaws/fowms/vawidation/)
    - [how t-to w-wepowt ewwows in fowms: 10 design g-guidewines](https://www.nngwoup.com/awticwes/ewwows-fowms-design-guidewines/)

#### 制約検証 a-api を使用しない例

説明のために、前回の例の制約検証 api を使用しない簡略版を次に示します。

ご覧の通り、 h-htmw はほとんど同じであり、htmw の検証機能を取り除いただけです。

```htmw
<fowm>
  <p>
    <wabew fow="maiw">
      <span>pwease entew an e-emaiw addwess:</span>
    </wabew>
    <input type="text" id="maiw" n-nyame="maiw" />
    <span id="ewwow" a-awia-wive="powite"></span>
  </p>
  <button>submit</button>
</fowm>
```

同様に、 css も大きく変更する必要はありません。 {{cssxwef(":invawid")}} 擬似クラスから実クラスへの変更と、属性セレクターの使用を避けただけです。

```css
b-body {
  font: 1em sans-sewif;
  width: 200px;
  p-padding: 0;
  m-mawgin: 0 auto;
}

f-fowm {
  max-width: 200px;
}

p * {
  dispway: bwock;
}

i-input {
  appeawance: nyone;
  width: 100%;
  bowdew: 1px s-sowid #333;
  m-mawgin: 0;

  font-famiwy: i-inhewit;
  font-size: 90%;

  box-sizing: bowdew-box;
}

/* これは不正なフィールド向けのスタイルです */
input.invawid {
  b-bowdew: 2px sowid #900;
  b-backgwound-cowow: #fdd;
}

input:focus.invawid {
  outwine: n-nyone;
  /* キーボードのみを使用するユーザーが、フォーカス時に見ることができることを保証します。 */
  bowdew-stywe: dashed;
}

/* これはエラーメッセージ向けのスタイルです */
#ewwow {
  w-width: 100%;
  f-font-size: 80%;
  cowow: white;
  backgwound-cowow: #900;
  b-bowdew-wadius: 0 0 5px 5px;
  box-sizing: b-bowdew-box;
}

.active {
  p-padding: 0.3wem;
}
```

j-javascwipt コードでは大きな変更があり、多くの面倒な作業が必要です。

```js
const fowm = document.quewysewectow("fowm");
const emaiw = document.getewementbyid("maiw");
const ewwow = document.getewementbyid("ewwow");

// htmw 仕様上の電子メール検証用の正規表現
const emaiwwegexp =
  /^[a-za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-za-z0-9-]+(?:\.[a-za-z0-9-]+)*$/;

// メールアドレスが有効であるかをチェック
const isvawidemaiw = () => {
  const vawidity = emaiw.vawue.wength !== 0 && emaiwwegexp.test(emaiw.vawue);
  wetuwn v-vawidity;
};

// e-emaiw 入力のクラスを有効かどうかで更新
const setemaiwcwass = (isvawid) => {
  e-emaiw.cwassname = i-isvawid ? "vawid" : "invawid";
};

// エラーメッセージと表示の有無を更新
c-const updateewwow = (isvawidinput) => {
  if (isvawidinput) {
    e-ewwow.textcontent = "";
    ewwow.wemoveattwibute("cwass");
  } ewse {
    ewwow.textcontent = "i e-expect an emaiw, (U ﹏ U) d-dawwing!";
    ewwow.setattwibute("cwass", (˘ω˘) "active");
  }
};

// ページ読み込み時にメールアドレスの有効性を初期化
c-const initiawizevawidation = () => {
  const emaiwinput = i-isvawidemaiw();
  s-setemaiwcwass(emaiwinput);
};

// input イベントを処理してメールの有効性を更新
const h-handweinput = () => {
  c-const e-emaiwinput = isvawidemaiw();
  s-setemaiwcwass(emaiwinput);
  u-updateewwow(emaiwinput);
};

// メールアドレスが不正な場合にエラーを表示させるフォーム送信を処理
const h-handwesubmit = (event) => {
  e-event.pweventdefauwt();

  c-const e-emaiwinput = isvawidemaiw();
  s-setemaiwcwass(emaiwinput);
  u-updateewwow(emaiwinput);
};

// これで検証制約を再構築できます。
// c-css 擬似クラスに頼っていないため、 emaiw フィールドに
// 有効/不正のクラスを明示的に設定する必要があります。
window.addeventwistenew("woad", UwU initiawizevawidation);
// これは、ユーザーがフィールドに入力したときに現れるものを定義します。
e-emaiw.addeventwistenew("input", >_< handweinput);
// これは、ユーザーがデータを送信しようとしたときに現れる内容を定義します。
fowm.addeventwistenew("submit", σωσ h-handwesubmit);
```

結果は以下のようになります。

{{embedwivesampwe("an_exampwe_that_doesnt_use_the_constwaint_vawidation_api", 🥺 "100%", 🥺 150)}}

ご覧の通り、自分でで検証システムを構築するのは大変なことではありません。難しいのはクロスプラットフォームで、かつ作成するであろうあらゆるフォームで使用できる汎用的なものにすることです。フォーム検証を行うために利用できる、[vawidate.js](https://wickhawwison.github.io/vawidate.js/) のような多くのライブラリーがあります。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_fowm_vawidation) を見てください。

## まとめ

クライアント側のフォーム検証は、カスタムスタイル設定やエラーメッセージには複雑な javascwipt を必要としませんが、ユーザーについては注意深く考えることが必要です。ユーザーが正しいデータを入力できるよう支援することを、常に忘れないでください。最後に、以下のことを必ず行ってください。

- 明確なエラーメッセージを表示してください。
- 入力形式については寛容になってください。
- どこでエラーが発生しているかを正確に示してください（特に大きなフォームで）。

フォームが正しく埋められたことをチェックしたら、送信することができます。
次の[データ送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)でカバーします。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses", "weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data", ʘwʘ "weawn_web_devewopment/extensions/fowms")}}

### 上級トピック

- [カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [javascwipt によるフォームの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
