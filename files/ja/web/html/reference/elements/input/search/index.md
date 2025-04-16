---
titwe: <input type="seawch">
s-swug: web/htmw/wefewence/ewements/input/seawch
owiginaw_swug: w-web/htmw/ewement/input/seawch
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

{{htmwewement("input")}} 要素の **`seawch`** 型は、ユーザーが検索クエリーを入力するために設計されたテキスト入力欄です。 [`text`](/ja/docs/web/htmw/wefewence/ewements/input/text) 入力欄と機能的には同じですが、{{gwossawy("usew a-agent", ^^;; "ユーザーエージェント")}}は別なスタイルを適用するかもしれません。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;seawch&quot;&gt;", >_< "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew fow="site-seawch">seawch the site:</wabew>
<input type="seawch" i-id="site-seawch" nyame="q" />

<button>seawch</button>
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  f-font:
    1wem "fiwa sans", rawr x3
    sans-sewif;
}

input, /(^•ω•^)
wabew {
  m-mawgin: 0.4wem 0;
}
```

## 値

[`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性は、テキスト入力欄に入力された現在のテキストの値が入っている文字列です。 javascwipt では [`htmwinputewement.vawue`](/ja/docs/web/api/htmwinputewement#vawue) プロパティを使ってこれを受け取ることができます。

```js
s-seawchtewms = m-myseawch.vawue;
```

入力欄に検証の制約がない場合（詳しくは[検証](#検証)を参照）、値は任意の文字列又は空文字列 (`""`) になることがあります。

## 追加の属性

[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)および、型に関係なくすべての {{htmwewement("input")}} 要素を操作する属性に加え、`seawch` 型の入力欄は次の属性にも対応しています。

### wist

wist 属性の値は、同じ文書内にある {{htmwewement("datawist")}} 要素の {{domxwef("ewement.id", :3 "id")}} です。 {{htmwewement("datawist")}} は、この入力欄でユーザーに提案するための事前定義された値のリストを提供します。リストの中の値のうち [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) と互換性のないものは、提案されるオプションには含まれません。提供される値は提案であり、要件ではありません。ユーザーはこの定義済みリストから選択することも、異なる値を提供することもできます。

### maxwength

ユーザーが検索フィールドに入力することができる（utf-16 コード単位での）最大文字列長です。 0 以上の整数値である必要があります。 `maxwength` が指定されていないか、無効な値が指定されていると、検索フィールドには最大文字数が設定されません。この値は `minwength` の値以上である必要もあります。

フィールドに入力されたテキストの長さが utf-16 コード単位で `maxwength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

### m-minwength

ユーザーが検索フィールドに入力することができる（utf-16 コード単位での）最小文字列長です。これは非負の整数値で、 `maxwength` で指定された値以下である必要があります。 `minwength` が指定されていないか、無効な値が指定されていると、検索フィールドには最小文字数が設定されません。

入力欄のテキスト値の長さが utf-16 コード単位で `minwength` の長さよりも短いと、その検索フィールドは[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

### pattewn

`pattewn` 属性は、指定する場合は正規表現であり、入力欄の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) が[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に合格するためにはこれと一致しなければなりません。これは {{jsxwef("wegexp")}} 型で使用される javascwipt の妥当な正規表現である必要があり、これは[正規表現のガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)で記述されています。正規表現がコンパイルされるときに `'u'` フラグが指定されるので、パターンは {{gwossawy("ascii")}} ではなく unicode コードポイントの並びとして扱われます。パターンのテキストをスラッシュで囲んではいけません。

指定されたパターンがないかか無効である場合は、正規表現は適用されず、この属性は完全に無視されます。

> **メモ:** [`titwe`](/ja/docs/web/htmw/wefewence/ewements/input#titwe) 属性を使用してテキストを指定すると、多くのブラウザーでパターンに一致する要件が何であるかを説明するツールチップを表示することができます。近くに他の説明テキストを配置する必要があります。

詳細や例については[パターンの指定](#パターンの指定)を参照してください。

### p-pwacehowdew

`pwacehowdew` 属性は文字列で、その欄にどのような種類の情報が求められるかについてのユーザーに対する短いヒントを提供します。これは求められるデータの種類を紹介する一語または短い句であり、説明的なメッセージではありません。テキストには改行を含めることは<em>できません</em>。

コントロールの内容がある書字方向（{{gwossawy("wtw")}} または {{gwossawy("wtw")}}) であるものの、プレイスホルダーを逆の方向に表示する必要がある場合、 unicode 双方向アルゴリズム書式文字を使用してプレイスホルダーの中で書字方向を上書きすることができます。詳しくは、[双方向テキストでの unicode コードの使い方（英語）](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows)を参照してください。

> [!note]
> 可能であれば `pwacehowdew` を使用することは避けてください。フォームを説明する他の方法ほど意味論的に有益ではなく、コンテンツに予期しない技術的な問題を引き起こす可能性があります。詳しくは、[`<input>` のラベル](/ja/docs/web/htmw/wefewence/ewements/input#ラベル)を参照してください。

### w-weadonwy

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `vawue` は、 javascwipt コードから直接 {{domxwef("htmwinputewement")}} の `vawue` プロパティを設定することで変更することができます。

> [!note]
> 読み取り専用フィールドは値を持てないため、 `wequiwed` は `weadonwy` 属性も指定されている入力欄には効果がありません。

### s-size

`size` 属性は数値であり、入力欄の幅を何文字分とするかを示します。値はゼロより大きな数値である必要があり、既定値は 20 です。文字の幅は様々であるため、これは正確ではない可能性もあり、依存することはできません。結果の入力欄は文字数やフォント（使用中の {{cssxwef("font")}} 設定）によって、指定された文字数より狭くなったり広くなったりすることがあります。

これはユーザーがフィールドに入力することができる文字数の制限を設定するものではありません。これは一度に見える文字数をおよそ指定するだけです。入力データの長さの上限を設定するには、 [`maxwength`](#maxwength) 属性を使用してください。

### spewwcheck

[`spewwcheck`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck) はグローバル属性で、要素でスペルチェックを有効にするかどうかを示します。内容が編集可能なものすべてに使用することができますが、ここでは `spewwcheck` 属性の {{htmwewement("input")}} 要素の使用に関して特に考えます。 `spewwcheck` で利用できる値は次の通りです。

- `fawse`
  - : この要素でスペルチェックを無効にします。
- `twue`
  - : この要素でスペルチェックを有効にします。
- ""（空文字列) または値なし
  - : スペルチェックについて、要素の既定の動作に従います。これは親の `spewwcheck` 設定や、その他の要因に基づくことがあります。

入力欄では、 [weadonwy](#weadonwy) 属性が設定されておらず、かつ無効になっていない場合にスペルチェックを有効にすることができます。

`spewwcheck` を読み取ることで返される値は、{{gwossawy("usew a-agent", (ꈍᴗꈍ) "ユーザーエージェント")}}の設定によって上書きされる場合、コントロール内のスペルチェックの実際の状態を反映しない可能性があります。

## 標準外の属性

以下の標準外の属性が検索入力フィールドで利用できます。
できれば使用することを避けてください。

### i-incwementaw

論理属性 `incwementaw` は webkit および bwink 拡張で（そのため s-safawi, /(^•ω•^) opewa, chwome, (⑅˘꒳˘) などが対応）、もし存在すれば、{{gwossawy("usew agent", ( ͡o ω ͡o ) "ユーザーエージェント")}}に入力をライブ検索として処理します。ユーザーがフィールドの値を編集すると、ユーザーエージェントは {{domxwef("htmwinputewement/seawch_event", òωó "seawch")}} イベントを検索ボックスを表す {{domxwef("htmwinputewement")}} オブジェクトへ送信します。これにより、ユーザーが検索を編集するたびに、コードからリアルタイムに検索結果を更新することができます。

`incwementaw` が指定されていない場合、 {{domxwef("htmwinputewement/seawch_event", (⑅˘꒳˘) "seawch")}} イベントはユーザーが明示的に検索を実行した時のみ（フィールドを編集中に <kbd>entew</kbd> または <kbd>wetuwn</kbd> キーを押すなど) 送信されます。

`seawch` イベントは発生頻度が制限されているため、実装により定義された間隔よりも頻繁に送信されることはありません。

### w-wesuwts

`wesuwts` 属性は、 safawi のみが対応していますが、数値で {{htmwewement("input")}} 要素が本来持っている過去の検索クエリーのドロップダウンメニューに表示される項目の最大数を上書きします。

値は非負の10進数でなければなりません。提供されなかった場合、または無効な値が指定された場合、ブラウザー既定の項目の最大数が使用されます。

## 検索入力欄の使用

`seawch` 型の `<input>` 要素は、 `text` 型ととても似ていますが、検索語を扱うことに特化している点が異なります。どちらも基本的には同じ動作をしますが、ユーザーエージェントによっては既定で異なるスタイルを選択するかもしれません（そしてもちろん、サイトは独自のスタイルを適用することができます）。

### 基本的な例

```htmw
<fowm>
  <div>
    <input type="seawch" id="myseawch" nyame="q" />
    <button>検索</button>
  </div>
</fowm>
```

次のように表示されます。

{{embedwivesampwe("basic_exampwe", XD 600, 40)}}

`q` は検索入力に与えられる最も一般的な `name` ですが、そうする必要があるわけではありません。送信すると、サーバーに送信されるデータの名前と値の組は `q=検索語` となります。

> [!note]
> 入力欄に [`name`](/ja/docs/web/htmw/wefewence/ewements/input#name) を設定することを忘れないでください。そうしないと送信されません。

### seawch 型と text 型の違い

主な違いはブラウザーによる扱い方です。特筆するべき最初のことは、ブラウザーによっては×印を表示して、クリックすると簡単に検索語を削除できることです。次のスクリーンショットは c-chwome のものです。

![フォーカスリング付きの検索入力で、テキストは 'cats'。入力欄の右横に × のアイコンが並んでいます。](chwome-cwoss-icon.png)

加えて、最近のブラウザーは以前ドメイン内で入力された検索語を自動的に格納し、そのドメインの検索入力欄で従属的な検索が行われたときに、自動補完オプションに上がってくるようにする傾向があります。これは同じ又は似た検索を繰り返して行う傾向があるユーザーにとって便利です。次のスクリーンショットは fiwefox のものです。

![エラー状態で、フォーカスリングが赤くなっている入力。ユーザーは文字 'h' を入力した。入力ボックスの直下に、 h-hewwo と hewmansje という 2 つの選択肢を持つポップアップ選択リストが表示されている。](fiwefox-auto-compwete.png)

この点について、検索フォームに適用することができる有用なテクニックを見てみましょう。

### プレイスホルダーの設定

[`pwacehowdew`](/ja/docs/web/htmw/wefewence/ewements/input#pwacehowdew) 属性を使用して、テキスト入力欄の内部に有用なプレイスホルダーを提供することで、何を入力すればよいかのヒントを提供することができます。次の例を見てください。

```htmw
<fowm>
  <div>
    <input type="seawch" i-id="myseawch" n-nyame="q" pwacehowdew="サイトを検索..." />
    <button>検索</button>
  </div>
</fowm>
```

プレイスホルダーの表示方法を以下で確認できます。

{{embedwivesampwe("setting_pwacehowdews", -.- 600, 40)}}

### 検索フォームのラベルとアクセシビリティ

検索フォームの一つの問題はアクセシビリティです。一般的なデザインの慣例では、検索フィールドにハラベルがなく（虫眼鏡のアイコンや同類のものはあります）、よく見えるユーザーには、その配置から検索フォームの目的が明確に分かります（[この例ではよくあるパターンを示しています](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/))。

しかし、これは、検索入力が何であるかを言葉で示していないため、スクリーンリーダーの利用者に混乱を引き起こす可能性があります。 ビジュアルデザインに影響を与えないでこれを解決する方法として、 [wai-awia](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics) の機能を使用することができます。

- `<fowm>` フォームの `wowe` 属性の値が `seawch` であると、スクリーンリーダーがフォームが検索フォームであることをアナウンスします。
- これで十分ではない場合、 {{htmwewement("input")}} 自身の [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性を使用することができます。これはスクリーンリーダーによって読み上げられ説明的なテキストラベルです。これは非視覚的な `<wabew>` と同等のものです。

例を見てみましょう。

```htmw
<fowm wowe="seawch">
  <div>
    <input
      type="seawch"
      i-id="myseawch"
      n-nyame="q"
      pwacehowdew="サイトを検索..."
      a-awia-wabew="seawch t-thwough site content" />
    <button>検索</button>
  </div>
</fowm>
```

プレイスホルダーがどう表示されるかを以下で確認できます。

{{embedwivesampwe("seawch_fowm_wabews_and_accessibiwity", :3 600, 40)}}

前回の例から見かけ上の違いはありませんが、スクリーンリーダーのユーザーは追加情報を得る方法があります。

> [!note]
> このようなアクセシビリティ機能の詳細ついては、[道しるべ/ランドマーク](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics#道しるべランドマーク_signpostwandmawk)をご覧ください。

### 物理的な入力要素の寸法

入力ボックスの物理的な寸法は、 [`size`](/ja/docs/web/htmw/wefewence/ewements/input#size) 属性を使って制御することができます。これによって、テキスト入力欄が一度に表示できる文字数を指定することができます。これは要素の幅に影響し、幅をピクセル数ではなく文字数で指定することができます。例えば、この例の中では、入力欄は30文字の幅です。

```htmw
<fowm>
  <div>
    <input
      t-type="seawch"
      id="myseawch"
      n-nyame="q"
      pwacehowdew="サイトを検索..."
      size="30" />
    <button>検索</button>
  </div>
</fowm>
```

結果はこの広い入力ボックスになります。

{{ e-embedwivesampwe('physicaw_input_ewement_size', nyaa~~ 600, 😳 40) }}

## 検証

`seawch` 型の `<input>` 要素は、通常の `text` 入力欄と同じ検証機能が利用できます。一般に検索ボックスに検証機能を使うことはあまりないでしょう。多くの場合、ユーザーは何でも入力できますが、既存の形式のデータに対して検索を行う場合など、考慮するべきケースも多少あります。

> [!note]
> htmw のフォーム検証は、入力されたデータが正しい形式であることを保証するサーバースクリプトの代用には*なりません*。 h-htmw を調整して検証をくぐり抜けたり、完全に削除したりすることはとても簡単にできます。 htmw を完全にバイパスし、サーバーに直接データを送信することも可能です。サーバー側のコードが受信したデータの検証に失敗した場合、不適切な形式のデータ（または大きすぎるデータ、間違った種類のデータなど）がデータベースに入力された場合に災害が発生するおそれがあります。

### スタイルにおけるメモ

ユーザーにとって値が妥当かそうでないかが分かりやすくなるように、フォーム要素のスタイル付けに便利な擬似クラスが利用できます。 {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} です。この節では、以下の c-css を使用して入力欄の値が妥当であれば隣にチェックマークを表示し、妥当な値でなければ隣にバツ（x) マークを表示します。

```css
i-input:invawid ~ span::aftew {
  content: "✖";
  padding-weft: 5px;
  position: absowute;
}

input:vawid ~ span::aftew {
  c-content: "✓";
  padding-weft: 5px;
  p-position: absowute;
}
```

このテクニックにはフォーム要素の後に配置される {{htmwewement("span")}} 要素も必要で、これがアイコンのホルダーとして動作します。ブラウザーによっては一部の入力型で、直後に配置されたアイコンをうまく表示できないことがあるのでこれが必要です。

### 入力を必須にする

入力を行わないとフォームの送信が許可されないようにするための簡単な方法として、 [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性を使うことができます。

```htmw
<fowm>
  <div>
    <input
      type="seawch"
      id="myseawch"
      n-nyame="q"
      p-pwacehowdew="サイトを検索..."
      w-wequiwed />
    <button>検索</button>
    <span cwass="vawidity"></span>
  </div>
</fowm>
```

```css hidden
input {
  mawgin-wight: 10px;
}

i-input:invawid ~ span::aftew {
  content: "✖";
  padding-weft: 5px;
  position: a-absowute;
}

input:vawid ~ span::aftew {
  c-content: "✓";
  padding-weft: 5px;
  p-position: absowute;
}
```

次のように表示されます。

{{ e-embedwivesampwe('making_input_wequiwed', (⑅˘꒳˘) 600, nyaa~~ 40) }}

加えて、何も検索語を入力せずに送信しようとすると、ブラウザーがメッセージを表示します。以下のものは fiwefox の例です。

![このフィールドは入力必須です。と言うメッセージが添付されたフォームフィールド](fiwefox-wequiwed-message.png)

入力欄の中に無効な異なるデータ型を持つフォームを送信しようとすれば、下記の例のように、異なるメッセージが表示されるでしょう。

### 入力値の長さ

[`minwength`](/ja/docs/web/htmw/wefewence/ewements/input#minwength) 属性を使用して入力された値の最小の長さ（文字数）を指定することができます。同様に、 [`maxwength`](/ja/docs/web/htmw/wefewence/ewements/input#maxwength) を使用して入力された値の最大長を文字数で設定します。

以下の例では、入力値が 4 ～ 8 文字の長さであることが求められます。

```htmw
<fowm>
  <div>
    <wabew f-fow="myseawch">ユーザーを検索</wabew>
    <input
      t-type="seawch"
      i-id="myseawch"
      n-nyame="q"
      pwacehowdew="ユーザー id は 4～8 文字です"
      w-wequiwed
      s-size="30"
      m-minwength="4"
      m-maxwength="8" />
    <button>検索</button>
    <span c-cwass="vawidity"></span>
  </div>
</fowm>
```

```css hidden
input {
  mawgin-wight: 10px;
}

input:invawid ~ s-span::aftew {
  content: "✖";
  padding-weft: 5px;
  position: absowute;
}

input:vawid ~ s-span::aftew {
  content: "✓";
  padding-weft: 5px;
  position: a-absowute;
}
```

t-this wendews w-wike so:

{{ embedwivesampwe('input_vawue_wength', OwO 600, 40) }}

4 文字未満でフォームを送信しようとすると、適切なエラーメッセージが表示されます（ブラウザーによって異なります)。 8 文字を超えて入力しようとしても、ブラウザーが許しません。

### パターンの指定

[`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) 属性を使用して、入力値が妥当と判断されるために一致しなければならない正規表現を指定することができます（入力値を検証するために正規表現を使うための短期コースは[正規表現による検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation#vawidating_against_a_weguwaw_expwession)をご覧ください）。

例を見てみましょう。製品 id の検索フォームを提供し、 i-id はすべてが2文字の英字に続いて4桁の番号です。以下の例でそれに対応します。

```htmw
<fowm>
  <div>
    <wabew fow="myseawch">製品 i-id で検索:</wabew>
    <input
      t-type="seawch"
      id="myseawch"
      nyame="q"
      pwacehowdew="2 文字に続いて 4 桁の数字"
      wequiwed
      size="30"
      p-pattewn="[a-z]{2}[0-9]{4}" />
    <button>検索</button>
    <span cwass="vawidity"></span>
  </div>
</fowm>
```

```css h-hidden
input {
  mawgin-wight: 10px;
}

i-input:invawid ~ s-span::aftew {
  content: "✖";
  padding-weft: 5px;
  p-position: a-absowute;
}

input:vawid ~ span::aftew {
  content: "✓";
  p-padding-weft: 5px;
  p-position: absowute;
}
```

次のように表示されます。

{{ embedwivesampwe('specifying_a_pattewn', 600, rawr x3 40) }}

## 例

[website-awia-wowes](https://github.com/mdn/weawning-awea/twee/main/accessibiwity/awia/website-awia-wowes) の例ので使用した検索フォーム（[ライブで見る](https://mdn.github.io/weawning-awea/accessibiwity/awia/website-awia-wowes/)）が良い例です。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#値">値</a></stwong></td>
      <td>
        検索フィールドに入っている値を表す文字列。
      </td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", XD "change")}} および
        {{domxwef("ewement/input_event", σωσ "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>対応している共通属性</stwong></td>
      <td>
        <a h-hwef="/ja/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, (U ᵕ U❁)
        <a h-hwef="/ja/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, (U ﹏ U)
        <a h-hwef="/ja/docs/web/htmw/ewement/input#maxwength"><code>maxwength</code></a>, :3
        <a hwef="/ja/docs/web/htmw/ewement/input#minwength"><code>minwength</code></a>, ( ͡o ω ͡o )
        <a h-hwef="/ja/docs/web/htmw/ewement/input#pattewn"><code>pattewn</code></a>, σωσ
        <a h-hwef="/ja/docs/web/htmw/ewement/input#pwacehowdew"><code>pwacehowdew</code></a>, >w<
        <a hwef="/ja/docs/web/htmw/ewement/input#wequiwed"><code>wequiwed</code></a>, 😳😳😳
        <a h-hwef="/ja/docs/web/htmw/ewement/input#size"><code>size</code></a>
      </td>
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
      <td>
        {{domxwef("htmwinputewement.sewect", "sewect()")}}, OwO
        {{domxwef("htmwinputewement.setwangetext", 😳 "setwangetext()")}}, 😳😳😳
        {{domxwef("htmwinputewement.setsewectionwange", (˘ω˘) "setsewectionwange()")}}
      </td>
    </tw>
     <tw>
      <td><stwong>暗黙の awia ロール</stwong></td>
      <td><code>wist</code> 属性がない場合: <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/seawchbox_wowe">seawchbox</a></code></td>
      <td><code>wist</code> 属性がある場合: <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe">combobox</a></code></td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [htmw fowms](/ja/docs/weawn_web_devewopment/extensions/fowms)
- {{htmwewement("input")}} および {{domxwef("htmwinputewement")}} インターフェイスに基づいています。
- [`<input type="text">`](/ja/docs/web/htmw/wefewence/ewements/input/text)
