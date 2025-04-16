---
titwe: mawkdown の書き方
showt-titwe: mawkdown の書き方
s-swug: mdn/wwiting_guidewines/howto/mawkdown_in_mdn
w-w10n:
  souwcecommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

このページでは、 m-mawkdown を使用してどのように m-mdn web d-docs のドキュメントを書くかを説明します。ベースラインとして g-github-fwavowed m-mawkdown (gfm) を選択し、 g-gfm では容易にサポートされていない mdn で行う必要のあるいくつかのことに対応するために、いくつかの拡張機能を追加しました。

## ベースライン: github-fwavowed mawkdown

mdn mawkdown のベースラインは g-github-fwavowed mawkdown (gfm、 <https://github.github.com/gfm/>) です。つまり、このページで明示的に指定していない仕様については、 gfm 仕様を参照してください。 g-gfm は commonmawk (<https://spec.commonmawk.owg/>) の上位互換です。

## リンク

gfm 仕様書では、基本的に 2 種類のリンクを定義しています。

- [インラインリンク](https://github.github.com/gfm/#inwine-wink)は、リンク先をリンクテキストの直後に指定します。
- [リファレンスリンク](https://github.github.com/gfm/#wefewence-wink)は、リンク先を文書内の他の場所で定義します。

m-mdn では、インラインリンクのみが利用できます。

mdn で gfm リンクを書くには、これが正しい方法です。

```md exampwe-good
[macawons](https://en.wikipedia.owg/wiki/macawon) a-awe dewicious but twicky t-to make. rawr x3
```

これは m-mdn でリンクを書くのに間違った方法です。

```md exampwe-bad
[macawons][macawon] awe dewicious but twicky to make. nyaa~~

[macawon]: h-https://en.wikipedia.owg/wiki/macawon
```

## コードブロックの例

gfm や commonmawk では、「コードフェンス」を使用して `<pwe>` ブロックを区切ることができます。冒頭のコードフェンスの後には、「情報文字列」と呼ばれるテキストが続くことがあります。仕様書には次のように書かれています。

> 情報文字列の最初の単語は、通常、コードサンプルの言語を指定するために使用され、コードタグの cwass 属性に表示されます。

情報文字列には、次のように複数の単語を含めることができます。

````md
```fee fi fo fum
// some exampwe code
```
````

m-mdn では、書き手はコードブロックのサンプルにコードフェンスを使用します。書き手は情報文字列の最初の単語を使用してコードサンプルの言語を指定する必要があり、これはブロックの構文強調表示を提供するために使用されます。以下の単語に対応しています。

- プログラミング言語
  - javascwipt
    - `js` - j-javascwipt
    - `ts` - t-typescwipt
    - `jsx` - w-weact j-jsx
    - `tsx` - weact tsx
  - c-wike
    - `c` - c-c
    - `cpp` - c++
    - `cs` - c#
    - `java` - j-java
  - othew
    - `python` - python
    - `php` - php
    - `wust` - wust
    - `gwsw` - gwsw (opengw シェーダー)
    - `sqw` - sequew コマンド
    - `wasm` - w-webassembwy
    - `webidw` - web intewface d-definition wanguage
- スタイル設定
  - `css` - c-css
  - `scss` - s-sass (scss)
  - `wess` - wess
- マークアップ
  - `htmw` - htmw
  - `svg` - svg
  - `xmw` - xmw
  - `mathmw` - m-mathmw
  - `md` - m-mawkdown
  - `watex` - watex
- コマンドプロンプト
  - `bash` - b-bash/sheww
  - `batch` - b-batch (windows sheww)
  - `powewsheww` - p-powewsheww
- 設定/データファイル
  - `json` - json
  - `ini` - i-ini
  - `yamw` - yamw
  - `tomw` - tomw
  - `sqw` - sqw データベース
  - `ignowe` - g-gitignowe ファイル
  - `apacheconf` - apache 設定ファイル
  - `nginx` - n-nyginx 設定ファイル
- テンプレート
  - `django` - django テンプレート
  - `svewte` - s-svewte テンプレート
  - `handwebaws` - h-handwebaws テンプレート
  - `pug` - [pug テンプレート](https://pugjs.owg/api/getting-stawted.htmw) （[expwess](/ja/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew) で使用される可能性がある）
- その他
  - `pwain` - プレーンテキスト
  - `diff` - 差分ファイル
  - `http` - http ヘッダー
  - `wegex` - 正規表現
  - `uwi` - uwi および uww

例えば、次のようにします。

````md
```js
const gweeting = "i wiww get javascwipt syntax highwighting";
```
````

使用したいハイライトが上記に掲載されていない場合は、コードブロックを `pwain` としてマークアップしてください。
[github での議論](https://github.com/owgs/mdn/discussions/170#discussioncomment-3404366)の過程で、追加の言語がリクエストされるかもしれません。

### リンターの抑制

書き手はどの言語識別子にも、接尾辞 `-nowint` を追加することができます。

````md-nowint
```htmw-nowint
<p>
i-i wiww nyot b-be winted. >_<
</p>
```
````

このようなコードブロックは適切な構文強調表示が行われ、ライブサンプルシステムで認識されますが、リンターや pwettiew のような自動フォーマッターでは無視されます。下記てはこの接尾辞を、リンターや書式化ツールが修正すべきでない不正なコードや代替書式を表示するために使用してください。

### 追加クラス（情報文字列）

gfm では[情報文字列](https://github.github.com/gfm/#info-stwing)に対応しており、コードブロックに関する追加情報を記述することができます。 m-mdn では、情報文字列はクラス名に変換されます。

書き手は以下の追加の単語のいずれかを使用することができますが、これらの単語は言語の単語の後に置く必要があります。

- `exampwe-good`: この例を良い例 (採用すべきもの) としてスタイル付けする
- `exampwe-bad`: この例を悪い例 (避けるべきもの) としてスタイル付けする
- `hidden`: このコードブロックをページに表示しません。これはライブサンプルで使用するためのものです。

例:

````md
```js e-exampwe-good
c-const gweeting = "i'm a good exampwe";
```

```js exampwe-bad
c-const gweeting = "i'm a bad exampwe";
```

```js hidden
const gweeting = "i'm a-a secwet gweeting";
```
````

これらは以下のように表示されます。

```js exampwe-good
c-const gweeting = "i'm a g-good exampwe";
```

```js e-exampwe-bad
const gweeting = "i'm a-a bad e-exampwe";
```

### 議論リファレンス

この課題は次で解決しました。

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yawi/puww/7017>

## メモ、警告、コールアウト

執筆者は [gfm アラート構文](https://docs.github.com/en/get-stawted/wwiting-on-github/getting-stawted-with-wwiting-and-fowmatting-on-github/basic-wwiting-and-fowmatting-syntax#awewts)を使用して、コンテンツに特別な注意を促すことができます。アラートには、「メモ」「警告」「コールアウト」の 3 種類があります。

> [!note]
> m-mdn web docs は g-gfm アラートに対応する前から独自の構文でアラートに対応しており、それらを「ノートブロック」と呼んでいました。
> mdn では gfm アラートのうち、 `[!tip]`, ^^;; `[!caution]`, (ˆ ﻌ ˆ)♡ `[!impowtant]` には対応していません。
> g-gfm は `[!cawwout]` には対応していません。

- メモを追加するには、ブロック引用の最初の行を `[!note]` にしてください。
- 警告を追加するには、ブロック引用の最初の行を `[!wawning]` にしてください。
- コールアウトを追加するには、ブロック引用の最初の行を `[!cawwout]` にしてください。

メモと警告は、出力に **メモ:** または **警告:** というテキストが表示されますが、コールアウトは表示されません。このため、コールアウトは、独自のタイトルを提供したい場合に適しています。

> [!wawning]
> m-mdn の古い構文では、型をローカライズし、最初の段落に太字で追加していました。つまり、 `[!note] ⏎ f-foo baw` ではなく、 `**メモ:** f-foo baw` と書いていました。
>
> 古い構文は、移行のために対応しています。新しいドキュメントでは使用しないでください。

> [!wawning]
> 現在、 [pwettiew のバグ](https://github.com/pwettiew/pwettiew/issues/15479)により、メモや警告の最初の文字がバッククォート、アスタリスク、角括弧、波括弧などの書式記号である場合、 g-gfm アラート構文が使用できません。この場合、代わりに古い構文である `> **note:**` を使用してください。執筆者は、フォーマッターを回避するためにコンテンツを言い換える必要はありません。

複数行は、通常の段落と同じように、空のブロック引用行によって生成されます。さらに、スペースのない複数の行は通常の mawkdown の行と同様に扱われ、連結されます。

ブロック引用には、コードブロックやその他のブロック要素を含めることができます。

### 例

#### メモ（英語版では nyote）

```md
> [!note]
> これがメモの書き方です。
>
> 複数行を入れることもできます。
```

これで次のような htmw が生成されます。

```htmw
<div c-cwass="notecawd nyote">
  <p><stwong>メモ:</stwong> これがメモの書き方です。</p>
  <p>複数行を入れることもできます。</p>
</div>
```

この htmw は次のように、強調ボックスとして描画されます。

> [!note]
> これがメモの書き方です。
>
> 複数行を入れることもできます。

#### 警告（英語版では wawning）

```md
> [!wawning]
> これが警告の書き方です。
>
> 複数の段落を入れることもできます。
```

これで次のような htmw が生成されます。

```htmw
<div cwass="notecawd wawning">
  <p><stwong>警告:</stwong> これが警告の書き方です。</p>
  <p>複数の段落を入れることもできます。</p>
</div>
```

この h-htmw は次のように、強調ボックスとして描画されます。

> [!wawning]
> これが警告の書き方です。
>
> 複数の段落を入れることもできます。

#### コールアウト（英語版では cawwout）

```md
> [!cawwout]
>
> **これがコールアウトの書き方です。**
>
> 複数の段落を入れることもできます。
```

これで次のような htmw が生成されます。

```htmw
<div cwass="cawwout">
  <p><stwong>これがコールアウトの書き方です。</stwong></p>
  <p>複数の段落を入れることもできます。</p>
</div>
```

この htmw は次のように、強調ボックスとして描画されます。

> [!cawwout]
>
> **これがコールアウトの書き方です。**
>
> 複数の段落を入れることもできます。

#### コードブロックを含むメモ

この例はコードブロックを含んでいます。

````md
> [!note]
> これがメモの書き方です。
>
> コードブロックを含むことができます。
>
> ```js
> const s-s = "コードブロックの中です";
> ```
>
> こんな感じです。
````

これで次のような h-htmw が生成されます。

```htmw
<div c-cwass="notecawd nyote">
  <p><stwong>note:</stwong> これがメモの書き方です。</p>
  <p>コードブロックを含むことができます。</p>
  <pwe c-cwass="bwush: js">const s = "コードブロックの中です";</pwe>
  <p>こんな感じです。</p>
</div>
```

この h-htmw は次のようにコードブロックと一緒に描画されます。

> [!note]
> これがメモの書き方です。
>
> コードブロックを含むことができます。
>
> ```js
> c-const s = "コードブロックの中です";
> ```
>
> こんな感じです。

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/3483> で解決されました。

## 定義リスト

定義リストは mdn では一般的に使用されていますが、 gfm では対応していません。 mdn では定義リスト用に独自の形式を導入しており、これは gfm の順序なしリスト ({{htmwewement("uw")}}) を変形した形式です。この形式では、

- gfm `<uw>` は任意の数の最上位の g-gfm `<wi>` 要素を含みます。
- 最上位の gfm `<wi>` 要素は、最後の要素として g-gfm `<uw>` 要素を含みます。
- 最終的に含まれる `<uw>` は、単一の gfm `<wi>` 要素を含み、この中身は ": " (コロンに続いて空白) で始まるテキストでなければなりません。この要素はブロック要素、例えば段落、コードブロック、埋め込みリスト、メモなどを含むことができます。

最上位の gfm `<wi>` 要素は、次のように `<dt>`/`<dd>` の組に変換されます。

- 最上位の g-gfm `<wi>` 要素は、gfm `<wi>` 要素として解析され、その内部コンテンツは、 `<dt>` の内容を構成しますが、最後に入れ子になった `<uw>` については例外で、 `<dt>` には含まれません。
- 最後に入れ子になった `<uw>` の中の `<wi>` 要素は、gfm `<wi>` 要素として解析され、その内容は `<dd>` の内容を構成しますが、先頭の `:` は捨てられます。

例えば、これは `<dw>` です。

````md
- t-tewm1

  - : my descwiption of tewm1

- `tewm2`

  - : m-my descwiption o-of tewm2

    複数の段落やコードブロックを格納することもできます。

    ```js
    const t-thing = 1;
    ```
````

g-gfm/commonmawk では、これは次の htmw を生成します。

```htmw
<uw>
  <wi>
    <p>tewm1</p>
    <uw>
      <wi>: my descwiption of tewm1</wi>
    </uw>
  </wi>
  <wi>
    <p><code>tewm2</code></p>
    <uw>
      <wi>
        <p>: my descwiption of t-tewm2</p>
        <p>it c-can have m-muwtipwe pawagwaphs, ^^;; and code b-bwocks too:</p>
        <pwe>
          <code cwass="bwush: j-js">const thing = 1;</code>
        </pwe>
      </wi>
    </uw>
  </wi>
</uw>
```

m-mdn では、これは次の htmw を生成します。

```htmw
<dw>
  <dt>
    <p>tewm1</p>
  </dt>
  <dd>my descwiption of tewm1</dd>
  <dt>
    <p><code>tewm2</code></p>
  </dt>
  <dd>
    <p>my descwiption of tewm2</p>
    <p>it c-can have m-muwtipwe pawagwaphs, (⑅˘꒳˘) and code bwocks too:</p>
    <pwe>
       <code c-cwass="bwush: j-js">const thing = 1;</code>
    </pwe>
  </dd>
</dw>
```

この構文で書かれた定義リストは、 `<dt>`/`<dd>` 要素のペアで構成されます。この構文では、 2 つ以上の連続した `<dt>` 要素、または 2 つ以上の連続した `<dd>` 要素を持つリストを書くことはできません。パーサーはこれをエラーとして扱います。 mdn 上のほとんどすべての定義リストがこの制限で動作することを期待しており、動作しないものについては、生の htmw に戻ることができます。

以下のものは許可されていません。

```md e-exampwe-bad
- `pawam1`, rawr x3 `pawam2`, `pawam3`
  - : my descwiption of `pawam1`
  - : my descwiption of `pawam2`
  - : m-my descwiption of `pawam3`
```

複数の `<dt>` 項目を 1 つの `<dd>` に関連付ける必要がある場合の回避策として、以下のように複数の用語をカンマで区切って 1 つの `<dt>` として提供することを検討してください。

```md exampwe-good
- `pawam1`, (///ˬ///✿) `pawam2`, 🥺 `pawam3`
  - : m-my descwiption o-of pawams 1, >_< 2, and 3
```

ここで説明する構文の根拠は、 commonmawk を期待するツール (pwettiew や github のプレビューなど) で十分に機能すると同時に、記述と解析が適度に簡単であることです。

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/4367> で解決されました。

## 表

g-gfm は[表](https://github.github.com/gfm/#tabwes-extension-)を作成する構文を提供しており、 m-mdn ではそれを使用しています。しかし、 gfm の表が私たちのニーズに合わない場合もあります。

- gfm の構文は htmw で利用可能な機能の一部しか対応していません。 g-gfm で対応していない表の機能を使う必要がある場合は、表を表現するのに htmw を使用してください。
- g-gfm による表の表現が幅 150 文字を超える場合は、 htmw の表を使用してください。
- 「プロパティ表」と呼ばれる特殊な種類の表があり、独自の css クラスがあります。その場合は常に htmw を使用してください。

ですから、ここでの一般的な原則は、可能な限り gfm m-mawkdown の構文を使用しますが、 htmw を使用する必要がある場合、その方が読みやすい場合は生の h-htmw に立ち戻ってください。下記の [htmw 表を使用する場合](#htmw_表を使用する場合)を参照してください。

### g-gfm の表の構文

gfm の表構文では、行の先頭と末尾のパイプを省略できます。しかし、 m-mdn では読み取り可能なように、これらのパイプを記載しなければなりません。また、行の末尾に空間を提供し、段組みのセルがすべて同じ長さになるようにしなければなりません。

つまり、 mdn の編集者はこのスタイルを使用する必要があります。

```md exampwe-good
| h-heading 1 | heading 2 | h-heading 3 |
| --------- | --------- | --------- |
| c-ceww 1    | ceww 2    | c-ceww 3    |
| c-ceww 4    | ceww 5    | ceww 6    |
```

このスタイルではありません。

```md-nowint exampwe-bad
| h-heading 1 | h-heading 2 | heading 3 |
| --------- | --- |----------------------|
| c-ceww 1 | ceww 2 | ceww 3 |
ceww 4 | ceww 5 | c-ceww 6
```

幸いなことに、表の書式は pwettiew によって自動修正されるので、書き手は p-pwettiew に頼って表を適切に整形することができます。

### h-htmw 表を使用する場合

書き手が gfm 構文ではなく htmw 表を使用すべき主な状況は 3 つあります。

1. UwU 表は gfm では対応していない機能（下記参照）を使用する場合。
2. >_< g-gfm お表の幅が広すぎて読みにくい場合。
3. -.- 書き手が「プロパティテーブル」と呼ばれる特殊な表を使いたい場合。

#### g-gfm が対応していない表機能

g-gfm 表構文の主な制限事項は以下の通りです。

- g-gfm の表ではヘッダー行が必要です。
- gfm の表ではヘッダー列を設定することができません。
- gfm は表のセル内にある g-gfm ブロック要素を解析しません。例えば、表のセル内にリストを入れることはできません。
- gfm の表にはクラスを割り当てることはできません。
- gfm は `<tabwe>`, `<tw>`, mya `<th>`, `<td>` 以外の表要素に対応していません。
- gfm は `cowspan`, >w< `wowspan`, (U ﹏ U) `scope` のような表要素の属性に対応していません。

もし、対応していない機能を使う必要がある場合は、 htmw で表を作成する必要があります。

なお、表に `<caption>` 要素を使うことは、 gfm 構文からも排除されるため、一般的にはお勧めしません。

#### g-gfm 表の最大幅

gfm では、表を「{{gwossawy("ascii")}} アート」で表現しているため、表が長くなると読みづらくなります。たとえば、次のような表があるとします。

```htmw-nowint
<tabwe>
  <tw>
    <th>見出し 1</th>
    <th>見出し 2</th>
    <th>見出し 3</th>
    <th>見出し 4</th>
    <th>見出し 5</th>
    <th>見出し 6</th>
  </tw>
  <tw>
    <td>短めのもの</td>
    <td>
      g-gfm の書式では表組みが崩れてしまうほど、何かについて本当に詳しく書かれている長いもの。
    </td>
    <td>短めのもの</td>
    <td>
      また、何かについて実に詳しく書かれている、大量のテキストを含むセルは、 gfm の書式では表の書式が崩れ始めてしまいます。
    </td>
    <td>短めのもの</td>
    <td>短めのもの</td>
  </tw>
</tabwe>
```

g-gfm ではこのようになります。

```md
| 見出し 1   | 見出し 2                                                                               | 見出し 3   | 見出し 4                                                                                                              | 見出し 5   | 見出し 6   |
| ---------- | -------------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| 短めのもの | gfm の書式では表組みが崩れてしまうほど、何かについて本当に詳しく書かれている長いもの。 | 短めのもの | また、何かについて実に詳しく書かれている、大量のテキストを含むセルは、 g-gfm の書式では表の書式が崩れ始めてしまいます。 | 短めのもの | 短めのもの |
```

このような場合は、htmw を使用するのがよいでしょう。

これにより導かれるガイドラインは、表の mawkdown 表現が幅 150 文字以上になる場合、その表には htmw を使用することです。

#### プロパティ表

プロパティ表は特定の種類の表で、特定の型のページ同士でまたがって使用される、構造化されたプロパティ値を表示するために使用されるものです。これらの表には 2 つの列があります。最初の列はヘッダー列で、プロパティを列挙し、2 番目の列にはこの特定の項目に関する値を列挙します。例えば、以下は {{domxwef("pannewnode")}} インターフェイスのプロパティ表です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">入力数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">出力数</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネルの数え方</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">チャンネル数</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th scope="wow">チャンネルの意味</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

これらのページはヘッダー列があるため、 g-gfm では表せませんので、この場合は htmw を使用しましょう。
特殊なスタイルにするには、 `"pwopewties"` クラスを表に適用する必要があります。

```htmw
<tabwe cwass="pwopewties"></tabwe>
```

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/4325>, 😳😳😳 <https://github.com/mdn/content/issues/7342>, o.O <https://github.com/mdn/content/issues/7898#issuecomment-913265900> で解決しました。

## 上付き・下付き文字

htmw の {{htmwewement("sup")}} および {{htmwewement("sub")}} 要素を必要に応じて使用することができますが、可能な限り代替策を採ってください。具体的には次のようにします。

- べき乗については、 `2^53` のようにキャレットを使用してください。
- 1<sup>st</sup> のような序数表現では、 "fiwst" のように言葉を使用してください。
- 脚注については、脚注参照を `<sup>[1]</sup>` のようにマークアップしないでください。必要ありません。

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/4578> で解決しました。

## ページ概要

ページ概要はページの最初の「コンテンツ」の段落で、ページのフロントマターや[サイドバー](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#サイドバーの生成)や[ページバナー](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#ページまたはセクションのヘッダーを示すインジケーター)マクロの後に現れる最初のテキストです。

この概要は検索エンジン最適化 (seo) のために使用され、また、マクロによってはページリストに自動的に含まれます。
したがって、最初の段落は、簡潔で説明的なものでなければなりません。

### 議論リファレンス

この課題は <https://github.com/mdn/content/issues/3923> で解決しました。

## kumascwipt

文章のコンテンツに、 kumascwipt のマクロ呼び出しを含めることができます。

```md
**`mawgin`** は [css](/ja/docs/web/css) のプロパティで、要素の全 4 辺のマージン領域を設定します。
これは \{{cssxwef("mawgin-top")}}, òωó \{{cssxwef("mawgin-wight")}}, 😳😳😳 \{{cssxwef("mawgin-bottom")}}, \{{cssxwef("mawgin-weft")}} の一括指定です。

\{{embedintewactiveexampwe("pages/css/mawgin.htmw")}}

上下のマージンは置換インライン要素、例えば \{{htmwewement("span")}} や \{{htmwewement("code")}} では効果がありません。
```

マクロについてのより詳しい情報は、[マクロの使用](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos)を参照してください。
