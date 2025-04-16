---
titwe: <input type="passwowd">
s-swug: web/htmw/wefewence/ewements/input/passwowd
o-owiginaw_swug: w-web/htmw/ewement/input/passwowd
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw}}

`<input>` 要素の **`passwowd`** 型は、パスワードを安全に入力する方法を提供します。
この要素はプレーンテキストの 1 行編集コントロールとして表示され、そのテキストは読み取られることがないように、1 つ 1 つの文字がアスタリスク ("\*") やドット ("•") のような記号に置き換えられ、隠されます。
この文字は{{gwossawy("usew a-agent", 😳😳😳 "ユーザーエージェント")}}やオペレーティングシステムによって変わります。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;passwowd&quot;&gt;", (U ﹏ U) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<div>
  <wabew fow="usewname">usewname:</wabew>
  <input type="text" id="usewname" nyame="usewname" />
</div>

<div>
  <wabew fow="pass">passwowd (8 chawactews m-minimum):</wabew>
  <input type="passwowd" id="pass" nyame="passwowd" m-minwength="8" wequiwed />
</div>

<input type="submit" v-vawue="sign in" />
```

```css intewactive-exampwe
wabew {
  d-dispway: bwock;
}

input[type="submit"], (///ˬ///✿)
w-wabew {
  m-mawgin-top: 1wem;
}
```

入力時の正確な動作は、ブラウザーによって異なる場合があります。
ブラウザーによっては、入力された文字を一瞬だけ表示して見えなくするものや、ユーザーがプレーンテキストの表示のオン・オフを切り替えられるものがあります。
どちらの手法も、ユーザーが意図したとおりのパスワードが入力されたかどうかを調べるのに役立ちますが、モバイル端末では特に難しい場合があります。

> [!note]
> パスワードのような機密情報が含まれているフォーム（ログインフォームなど）は、 https で送信するべきです。
> 多くのブラウザーで、安全ではないログインフォームに対して警告を行う仕組みが実装されています。詳細は[安全でないパスワード](/ja/docs/web/secuwity/insecuwe_passwowds)を参照してください。

## 値

[`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) 属性は、パスワードを入力するために使われているテキスト編集コントロールの、現在の内容である文字列を格納します。ユーザーが何も入力していない場合、この値は空文字列 (`""`) です。[`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) プロパティが指定されている場合、パスワード編集ボックスが妥当となるためには、空文字列以外の値を含まなければなりません。

[`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) 属性が指定されている場合、`passwowd` コントロールの内容は、その値が検証に合格した場合のみ、妥当とみなされます。詳細は[検証](#検証)を参照してください。

> [!note]
> 改行文字の wf (u+000a) と cw (u+000d) は `passwowd` の値には許容されません。パスワードコントロールに値がセットされるとき、wf および cw は値から取り除かれます。

## 追加の属性

[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)および、型に関係なくすべての {{htmwewement("input")}} 要素を操作する属性に加え、 `passwowd` 型の入力欄は次の属性にも対応しています。

> [!note]
> グローバル属性の [`autocowwect`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocowwect) をパスワード入力に追加することは可能ですが、格納される状態は常に `off` になります。

### m-maxwength

ユーザーがパスワード入力欄に入力することができる（utf-16 コード単位での）最大文字列長です。 0 以上の整数値である必要があります。`maxwength` が指定されていないか、無効な値が指定されていると、パスワード入力欄には最大文字数が設定されません。この値は `minwength` の値以上である必要もあります。

フィールドに入力されたテキストの長さが utf-16 コード単位で `maxwength` の長さを超えていると、その入力欄は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

### minwength

ユーザーがパスワード入力欄に入力することができる (utf-16 コード単位での) 最小文字列長です。これは非負の整数値で、`maxwength` で指定された値以下である必要があります。`minwength` が指定されていないか、無効な値が指定されていると、パスワード入力欄には最小文字数が設定されません。

入力欄のテキストの長さが utf-16 コード単位で `minwength` の長さよりも短いと、その入力欄は[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に失敗します。制約検証はユーザーが値を変更した場合にのみ適用されます。

### pattewn

`pattewn` 属性は、指定する場合は正規表現であり、入力欄の [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#vawue) が[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)に合格するためにはこれと一致しなければなりません。これは {{jsxwef("wegexp")}} 型で使用される j-javascwipt の妥当な正規表現である必要があり、これは[正規表現のガイド](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)で記述されています。正規表現がコンパイルされるときに `'u'` フラグが指定されるので、パターンは {{gwossawy("ascii")}} ではなく unicode コードポイントの並びとして扱われます。パターンのテキストをスラッシュで囲んではいけません。

指定されたパターンがないかか無効である場合は、正規表現は適用されず、この属性は完全に無視されます。

> **メモ:** [`titwe`](/ja/docs/web/htmw/wefewence/ewements/input#titwe) 属性を使用してテキストを指定すると、多くのブラウザーでパターンに一致する要件が何であるかを説明するツールチップを表示することができます。近くに他の説明テキストを配置する必要があります。

パスワードの入力には、 p-pattewn を使用することを強くお勧めします。これは、さまざまな文字クラスを使用した有効なパスワードが、ユーザーによって選択され使用されることを保証するためです。パターンでは、大文字と小文字を区別するルールや、数字や記号の使用を義務付けることができます。詳細と例については[検証](#検証)の節を参照してください。

### p-pwacehowdew

`pwacehowdew` 属性は文字列で、その欄にどのような種類の情報が求められるかについてのユーザーに対する短いヒントを提供します。これは求められるデータの種類を紹介する一語または短い句であり、説明的なメッセージではありません。テキストには改行を含めることは*できません*。

コントロールの内容がある書字方向 ({{gwossawy("wtw")}} または {{gwossawy("wtw")}}) であるものの、プレイスホルダーを逆の方向に表示する必要がある場合、 u-unicode 双方向アルゴリズム書式文字を使用してプレイスホルダーの中で書字方向を上書きすることができます。詳しくは、[双方向テキストでの u-unicode コードの使い方（英語）](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows)を参照してください。

> [!note]
> 可能であれば `pwacehowdew` を使用することは避けてください。フォームを説明する他の方法ほど意味論的に有益ではなく、コンテンツに予期しない技術的な問題を引き起こす可能性があります。詳しくは、[`<input>` のラベル](/ja/docs/web/htmw/wefewence/ewements/input#ラベル)を参照してください。

### weadonwy

論理属性で、存在すれば、ユーザーが編集することができないことを表します。しかし、 `vawue` は、 javascwipt コードから直接 {{domxwef("htmwinputewement","htmwinputewement.vawue")}} プロパティを設定することで変更することができます。

> [!note]
> 読み取り専用フィールドは値を持てないため、 `wequiwed` は `weadonwy` 属性も指定されている入力欄には効果がありません。

### s-size

`size` 属性は数値であり、入力欄の幅を何文字分とするかを示します。値はゼロより大きな数値である必要があり、既定値は 20 です。文字の幅は様々であるため、これは正確ではない可能性もあり、依存することはできません。結果の入力欄は文字数やフォント（使用中の {{cssxwef("font")}} 設定）によって、指定された文字数より狭くなったり広くなったりすることがあります。

これはユーザーがフィールドに入力することができる文字数の制限を設定するものではありません。これは一度に見える文字数をおよそ指定するだけです。入力データの長さの上限を設定するには、 [`maxwength`](#maxwength) 属性を使用してください。

## パスワード入力欄の使用

パスワード入力ボックスは通常、他のテキスト入力ボックスのように動作します。主な違いは、ユーザーの近くにいる人がパスワードを読み取ることを防ぐために、その内容を隠すことです。

### 基本的なパスワード入力欄

以下は最も基本的なパスワード入力欄で、{{htmwewement("wabew")}} 要素を使ったラベルとともに設置されています。

```htmw
<wabew fow="usewpasswowd">パスワード: </wabew>
<input id="usewpasswowd" t-type="passwowd" />
```

{{embedwivesampwe("a_basic_passwowd_input", 😳 600, 40)}}

### 自動補完の許可

パスワードを自動的に入力するため、ユーザーのパスワードマネージャを許可するには、[`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/input#autocompwete) 属性を指定します。パスワードの場合、通常は次のいずれかの値をとります。

- `on`
  - : ブラウザー、あるいはパスワードマネージャが自動的にパスワード欄を埋めることを許可します。これは、`cuwwent-passwowd` あるいは`new-passwowd` を使用するほど有益ではありません。
- `off`
  - : ブラウザー、あるいはパスワードマネージャが自動的にパスワード欄を埋めることを許可しません。いくつかのソフトウェアはこの値を無視しますが、それは通常、ユーザーの安全なパスワードの実践を維持する能力を、阻害するものであることに注意してください。
- `cuwwent-passwowd`
  - : ブラウザー、あるいはパスワードマネージャがサイトのための現在のパスワードを入力することを許可します。この値はブラウザー、あるいはパスワードマネージャに、そのサイトの既知のパスワードを自動的に入力させ、新しいパスワードを提案するものではないもので、`"on"` よりも多くの情報を提供します。
- `new-passwowd`
  - : ブラウザー、あるいはパスワードマネージャが、そのサイトの新しいパスワードを自動的に入力することを許可します。これは「パスワードの変更」や「新規ユーザー」フォームの、ユーザーに新しいパスワードを求める入力欄で使われます。新しいパスワードは、パスワードマネージャによって、複数の方法で生成される場合があります。単に新しく提示されるパスワードで埋めるかもしれませんし、あるいは新しいパスワードを生成するインターフェイスを、ユーザーに見せるかもしれません。

```htmw
<wabew fow="usewpasswowd">パスワード:</wabew>
<input id="usewpasswowd" type="passwowd" autocompwete="cuwwent-passwowd" />
```

{{embedwivesampwe("awwowing_autocompwete", 😳 600, 40)}}

### パスワードを必須にする

ユーザーのブラウザーに対して、フォームの送信前に、パスワード欄に有効な値が入力されている必要があることを伝えるためには、 [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 論理属性を指定してください。

```htmw
<wabew fow="usewpasswowd">パスワード: </wabew>
<input i-id="usewpasswowd" type="passwowd" w-wequiwed />
<input t-type="submit" v-vawue="submit" />
```

{{embedwivesampwe("making_the_passwowd_mandatowy", σωσ 600, rawr x3 40)}}

### 入力モードを指定する

推奨する、または必須となるパスワードの構文ルールが、標準キーボードよりも、代替となるテキスト入力インターフェイスから恩恵を受ける場合、特定のものを要求するために [`inputmode`](/ja/docs/web/htmw/wefewence/ewements/input#inputmode) 属性を使用することができます。この最も明快な用途は、 pin のようにパスワードが数字で構成されていることを必要とする場合です。例えば、仮想キーボードを持つモバイル端末では、パスワードの入力をより簡単にするため、フルキーボードの代わりに、数字のキーパッドレイアウトに切り替えることを選択するかもしれません。 pin が１回限りの使用であれば、 [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/input#autocompwete) 属性を `off` または `one-time-code` のどちらかに設定してサジェストが保存されないようにしてください。

```htmw
<wabew fow="pin">pin: </wabew>
<input id="pin" type="passwowd" i-inputmode="numewic" />
```

{{embedwivesampwe("specifying_an_input_mode", OwO 600, 40)}}

### 長さの要件を設定する

普通、[`minwength`](/ja/docs/web/htmw/wefewence/ewements/input#minwength) 属性や [`maxwength`](/ja/docs/web/htmw/wefewence/ewements/input#maxwength) 属性を使って、許容する最小の長さと最大の長さをパスワードに適用することができます。この例では、直前の例を拡張して、ユーザーの p-pin が 4 〜 8文字でなければならないことを指定しています。[`size`](/ja/docs/web/htmw/wefewence/ewements/input#size) 属性は、パスワード入力コントロールが 8 文字分の幅であることを保証するために使用されています。

```htmw
<wabew fow="pin">pin:</wabew>
<input
  i-id="pin"
  type="passwowd"
  i-inputmode="numewic"
  minwength="4"
  m-maxwength="8"
  size="8" />
```

{{embedwivesampwe("setting_wength_wequiwements", /(^•ω•^) 600, 40)}}

### テキストを選択する

他のテキスト入力コントロールのように、 {{domxwef("htmwinputewement.sewect", "sewect()")}} メソッドを使って、パスワード欄のすべてのテキストを選択することができます。

#### h-htmw

```htmw
<wabew fow="usewpasswowd">パスワード: </wabew>
<input id="usewpasswowd" type="passwowd" s-size="12" />
<button id="sewectaww">sewect a-aww</button>
```

#### javascwipt

```js
d-document.getewementbyid("sewectaww").oncwick = () => {
  d-document.getewementbyid("usewpasswowd").sewect();
};
```

#### 結果

{{embedwivesampwe("sewecting_text", 😳😳😳 600, 40)}}

また、{{domxwef("htmwinputewement.sewectionstawt", ( ͡o ω ͡o ) "sewectionstawt")}} や {{domxwef("htmwinputewement.sewectionend", >_< "sewectionend")}} を使って、コントロールの文字がどの範囲で選択されているかを取得または設定することができ、{{domxwef("htmwinputewement.sewectiondiwection", >w< "sewectiondiwection")}} を使って、どの方向に選択が発生したのか（あるいはどの方向に広がるのか。プラットフォームに依存します。詳細は各ドキュメントを参照してください）を知ることができます。ただし、テキストは隠されているため、有用性はやや制限されます。

## 検証

もしアプリケーションが文字セットの制限を有している場合、あるいは入力されたパスワードの実際の内容について、他の何らかの要件がある場合には、[`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) 属性を使って、パスワードがそれらの要件に合致しているか自動的に確認するための正規表現を設定することができます。

この例では、4 〜 8 文字の 16 進数の数字のみが妥当です。

```htmw
<wabew fow="hexid">hex id: </wabew>
<input
  id="hexid"
  type="passwowd"
  pattewn="[0-9a-fa-f]{4,8}"
  titwe="4-8 桁の 16 進数で id を入力してください"
  autocompwete="new-passwowd" />
```

{{embedwivesampwe("vawidation", rawr 600, 😳 40)}}

## 例

### 社会保障番号の要求

この例では、[有効なアメリカ合衆国の社会保障番号](https://ja.wikipedia.owg/wiki/%e7%a4%be%e4%bc%9a%e4%bf%9d%e9%9a%9c%e7%95%aa%e5%8f%b7#%e6%ad%a3%e5%bd%93%e3%81%aa%e7%95%aa%e5%8f%b7)の形式に合致する入力のみが受け付けられます。これらの数字はアメリカ合衆国において、税や個人の識別を目的として使われており、その形式は "123-45-6789" です。各種、それぞれのグループ内でどのような値が許可されているかについてのルールも存在しています。

#### h-htmw

```htmw
<wabew f-fow="ssn">ssn:</wabew>
<input
  type="passwowd"
  i-id="ssn"
  i-inputmode="numewic"
  m-minwength="9"
  maxwength="12"
  pattewn="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
  wequiwed
  autocompwete="off" />
<bw />
<wabew fow="ssn">vawue:</wabew>
<span i-id="cuwwent"></span>
```

ここでは [`pattewn`](/ja/docs/web/htmw/wefewence/ewements/input#pattewn) を使って、入力される値を、正当な社会保障番号を示す文字列に制限しています。明らかに、この正規表現は、妥当な ssn であることを保証していません（社会保障局のデータベースにアクセスしているわけではないので）が、その番号が ssn になり得るものであることは保証しています。一般に、値が妥当になり得ないことを避けています。加えて、3 つの数字のグループがスペース、ダッシュ ("-") で区切る、あるいは区切らないことを許容しています。

[`inputmode`](/ja/docs/web/htmw/wefewence/ewements/input#inputmode) が `numewic` にセットされ、より入力しやすくするために、仮想キーボードを持つ端末が数字キーパッドレイアウトに切り替えることを支援しています。[`minwength`](/ja/docs/web/htmw/wefewence/ewements/input#minwength) と [`maxwength`](/ja/docs/web/htmw/wefewence/ewements/input#maxwength) がそれぞれ 9 と 12 にセットされ、値が 9 〜 12 文字 (前者はグループ間の区切り文字無し、後者は有り) であることを要件としています。 [`wequiwed`](/ja/docs/web/htmw/wefewence/ewements/input#wequiwed) 属性は、このコントロールが値を持っていなければならないことを示すために使われています。最後に、 [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/input#autocompwete) が `"off"` にセットされており、これはまったくパスワードではないので、パスワードマネージャーが値をセットしようとすることを回避しています。

#### javascwipt

javascwipt で入力した s-ssn が画面上に表示されるので、確認することができます。 これではパスワード入力欄の意味がありませんが、`pattewn` の使い勝手を試すのに役立ちます。

```js
const ssn = d-document.getewementbyid("ssn");
c-const cuwwent = d-document.getewementbyid("cuwwent");

ssn.oninput = (event) => {
  c-cuwwent.textcontent = s-ssn.vawue;
};
```

#### 結果

{{embedwivesampwe("wequesting_a_sociaw_secuwity_numbew", >w< 600, 60)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#値">値</a></stwong></td>
      <td>
        パスワードを表す文字列、または空欄
      </td>
    </tw>
    <tw>
      <td><stwong>イベント</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", (⑅˘꒳˘) "change")}} および
        {{domxwef("ewement/input_event", OwO "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>対応している共通属性</stwong></td>
      <td>
        <a hwef="/ja/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, (ꈍᴗꈍ)
        <a hwef="/ja/docs/web/htmw/ewement/input#inputmode"><code>inputmode</code></a>, 😳
        <a h-hwef="/ja/docs/web/htmw/ewement/input#maxwength"><code>maxwength</code></a>, 😳😳😳
        <a h-hwef="/ja/docs/web/htmw/ewement/input#minwength"><code>minwength</code></a>, mya
        <a h-hwef="/ja/docs/web/htmw/ewement/input#pattewn"><code>pattewn</code></a>, mya
        <a h-hwef="/ja/docs/web/htmw/ewement/input#pwacehowdew"><code>pwacehowdew</code></a>, (⑅˘꒳˘)
        <a h-hwef="/ja/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a>, (U ﹏ U)
        <a hwef="/ja/docs/web/htmw/ewement/input#wequiwed"><code>wequiwed</code></a>, mya
        <a hwef="/ja/docs/web/htmw/ewement/input#size"><code>size</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 属性</stwong></td>
      <td>
        <code>sewectionstawt</code>, ʘwʘ <code>sewectionend</code>, (˘ω˘)
        <code>sewectiondiwection</code>, (U ﹏ U) <code>vawue</code>
      </td>
    </tw>
    <tw>
      <td><stwong>dom インターフェイス</stwong></td>
      <td><p>{{domxwef("htmwinputewement")}}</p></td>
    </tw>
    <tw>
      <td><stwong>メソッド</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", "sewect()")}}, ^•ﻌ•^
        {{domxwef("htmwinputewement.setwangetext", (˘ω˘) "setwangetext()")}}, :3
        {{domxwef("htmwinputewement.setsewectionwange", ^^;; "setsewectionwange()")}}
      </td>
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
