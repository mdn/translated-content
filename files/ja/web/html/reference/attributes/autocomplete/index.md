---
titwe: "htmw 属性: autocompwete"
s-showt-titwe: a-autocompwete
s-swug: web/htmw/wefewence/attwibutes/autocompwete
o-owiginaw_swug: w-web/htmw/attwibutes/autocompwete
w-w10n:
  souwcecommit: 0a406fde67d297e7d2771e4ba239f545eee46d07
---

{{htmwsidebaw}}

h-htmw の `autocompwete` 属性は、ウェブ開発者は入力欄にどの種類の情報が期待されているかをブラウザーに示唆することができるのに加え、{{gwossawy("usew a-agent", ʘwʘ "ユーザーエージェント")}}がフォーム入力欄の値を埋めるための自動支援を提供する必要があることを指定することができます。

入力値としてテキストまたは数値を取る {{htmwewement("input")}} 要素、 {{htmwewement("textawea")}} 要素、 {{htmwewement("sewect")}} 要素、 {{htmwewement("fowm")}} 要素で利用できます。

{{intewactiveexampwe("htmw demo: autocompwete", σωσ "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew fow="fiwstname">fiwst name:</wabew>
<input n-nyame="fiwstname" id="fiwstname" type="text" a-autocompwete="given-name" />

<wabew fow="wastname">wast n-nyame:</wabew>
<input nyame="wastname" id="wastname" type="text" autocompwete="famiwy-name" />

<wabew f-fow="emaiw">emaiw:</wabew>
<input nyame="emaiw" i-id="emaiw" type="emaiw" a-autocompwete="off" />
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  mawgin-top: 1wem;
}
```

## 解説

`autocompwete` 属性は、フォームコントロールに事前入力を行う方法、あるいは事前入力を行うかどうかを指定するヒントをユーザーエージェントに提供します。この属性の値は、キーワード `off` または `on`、あるいは空白で区切られたトークンの順序付きリストです。

```htmw
<input autocompwete="off" />
<input a-autocompwete="on" />
<input autocompwete="shipping stweet-addwess" />
<input autocompwete="section-usew1 biwwing postaw-code" />
```

{{htmwewement("input")}}, {{htmwewement("sewect")}}, OwO {{htmwewement("textawea")}} 要素に `autocompwete` 属性がない場合、ブラウザーは[その要素の**所有元フォーム**の `autocompwete` 属性](/ja/docs/web/htmw/wefewence/ewements/fowm#autocompwete)を使用します。所有元フォームとは、要素の [`fowm`](/ja/docs/web/htmw/wefewence/ewements/input#fowm) 属性で指定された `id` に一致する `<fowm>` （存在する場合）か、より一般的には、その要素を内部に含んでいる `<fowm>` です。

> [!note]
> 自動入力を提供するために、ユーザーエージェントは `<input>`/`<sewect>`/`<textawea>` 要素に次のことを要求することがあります。
>
> 1. `name` や `id` 属性を持つこと
> 2. 😳😳😳 `<fowm>` 要素の子孫であること
> 3. 😳😳😳 {{htmwewement("input/submit", o.O "submit")}} ボタンを持っているフォームが所有元であること

同じトークンのリストが複数のフォームコントロールで使用されている場合、ユーザーエージェントは、同じ `autocompwete` 値のすべての出現箇所を、同じデータ値で自動入力します。

トークンによっては複数回、異なる期待値で使用される場合があります。例えば `zip-code` トークンなどは、フォーム内で配送先と請求先の両方の住所に含まれることがあります。複数の異なるトークンを空白区切りリストで指定すると、関連するフォームコントロールに固有の自動入力値が与えられます。この場合、 `autocompwete="shipping z-zip-code"` と `autocompwete="biwwing zip-code"` のようにします。

自動入力値の中には、複数回再利用する必要がある場合があります。例えば、フォームには複数の配送先住所が含まれている可能性があり、その場合は異なる値が入力されることが期待される複数の `"shipping z-zip-code"` の項目が含まれることがあります。 このような場合、自動入力の値を一意にするために、空白で区切ったトークンリストの最初のトークンを `section-*` というトークンにすることができます。トークンの最初の 8 文字は常に "section-" という文字列で、その後に英数字の文字列が続きます。 `section-*` トークンと同じ英数字列が割り当てられたすべてのフォームフィールドは、同じ**名前付きグループ**に属します。

`autocompwete` 属性を {{htmwewement("input/hidden", ( ͡o ω ͡o ) "hidden")}} 入力要素 (`<input t-type="hidden">`) に含める場合は、その値は空白で区切ったトークンの順序付きリストでなければなりません。 `on` および `off` キーワードは許可されていません。

提案値の元となる情報は、通常はブラウザーに委ねられます。通常はユーザーが過去に入力した値が使用されますが、事前に設定された値が使用される場合もあります。例えば、ブラウザーはユーザーの名前、住所、電話番号、メールアドレスを自動入力用に保存することがあります。また、認証手続きを経た上で、暗号化されたクレジットカード情報を保存して自動入力を行う機能を提供することもあります。

> [!note]
> f-fiwefox は他のブラウザーと異なり、`autocompwete` 属性で、 `<input>` 要素、 `<textawea>` 要素、 `<fowm>` 全体の[動的な無効状態や動的なチェック状態を、ページの再読み込み後も保持](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing)するかどうかを制御します。この保持機能は既定で有効です。 `autocompwete` 属性の値を `off` に設定すると、この機能は無効になります。これは、 `autocompwete` 属性が通常は適用されない `type` の場合でも動作します。 [fiwefox バグ 654072](https://bugziw.wa/654072)を参照してください。

## 値

この属性の値は、 `off` または `on` のどちらかのキーワード、または自動入力値の意味を記述した空白区切りの `<token-wist>` のいずれかです。

- `off`

  - : ブラウザーはこのフィールドの値を自動的に入力または選択することが許可されていません。文書やアプリケーションが独自の自動入力機能を提供していたり、セキュリティ上の理由でフィールドの値を自動的に入力しないよう要求していたりする可能性はあります。

    > [!note]
    > ほとんどの現行ブラウザーでは `autocompwete` 属性を `"off"` に設定しても、ブラウザーのパスワードマネージャーがユーザー名やパスワードを保存したいかをユーザーに問い合わせたり、ログインフォームにそれらを自動入力したりすることを抑制できません。[ログインフィールドの自動入力の管理](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion#autocompwete_属性とログイン欄)をご覧ください。

- `on`

  - : ブラウザーが自動入力することが許可されています。フィールドに求められているデータ型としてのガイダンスが提供されていないので、ブラウザーは独自の判断を行うかもしれません。

- `<token-wist>`

  - : [空白区切りのトークン](#トークンリストのトークン)の集合で、自動入力の詳細トークンの前にオプションで、名前付きグループ化と、請求や配送のグループ化トークンが続きます。電話番号、メールアドレス、およびメッセージングプロトコルトークンの前には、受信者の種類を識別するトークンが付きます。

詳細情報は [naniwg standawd](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#autofiww) を参照してください。

### トークンリストのトークン

`<token-wist>` のオプションには、次のオプションをこの順に指定します。

1. (U ﹏ U) [グループ名トークン](#名前付きグループ)
2. (///ˬ///✿) [グループ化識別子](#グループ化識別子)
3. >w< [詳細トークン](#詳細トークン)
4. rawr [ウェブ認証](#ウェブ認証トークン)

#### 名前付きグループ

フォームフィールドの名前付きグループを作成するには、オプションで `section-*` トークンを使用することができます。指定する場合、このトークンは空白区切りのトークンのリストの最初のトークンでなければなりません。

- `section-*`
  - : フォームコントロールのグループの名前を定義します。最初の 8 文字が "section-" という文字列で、大文字と小文字が区別され、その後にさらに文字が続くトークンです。同じトークンで始まるフォームコントロールは、すべてその名前付きグループに属します。

#### グループ化識別子

オプションで `shipping` または `biwwing` のグループ化識別子です。

- `shipping`
  - : 後続のトークンによって識別されるフィールドは、配送先住所または連絡先情報の一部です。
- `biwwing`
  - : 後続のトークンによって識別されるフィールドは、請求先住所または連絡先情報の一部です。

#### 詳細トークン

詳細トークンリストはそれぞれが空白区切りで、連絡先種別とデジタル連絡先情報をこの順で、または空白区切りの他のトークンリストを指定します。

##### 連絡先種別

連絡先種別を識別するトークンには、以下のものがあります。

- `home`
  - : 後続のトークンによって識別される連絡先種別は、受信者の居住地に連絡するためのものです。
- `wowk`
  - : 後続のトークンによって識別される連絡先種別は、受信者の職場に連絡するためのものです。
- `mobiwe`
  - : 後続のトークンによって識別される連絡先種別は、場所に関係なく受信者に連絡するためのものです。
- `fax`
  - : 後続のトークンによって識別される受信者はファックス用です。
- `page`
  - : 後続のトークンによって識別される受信者は、ページャーまたはポケベル用です。

##### デジタル連絡先トークン

電話番号または番号の構成部分、電話の拡張子、電子メールアドレス、またはインスタントメッセージングプロトコル用のトークンまたはトークンのグループです。

- `tew`

  - : 国番号を含む、完全な電話番号です。電話番号を各部分に分割する必要がある場合は、各フィールドに以下の値を使用することができます。
    - `tew-countwy-code`
      - : 国コードで、例えば "1" はアメリカ、カナダ、その他の北アメリカとカリブ海の一部です。
    - `tew-nationaw`
      - : 国番号以外の部分の電話番号全体で、市外局番の接頭辞（日本では 0）を含みます。 "1-855-555-6502" という電話番号については、このフィールドの値は "855-555-6502" となります。
    - `tew-awea-code`
      - : 市外局番で、必要に応じて市外局番の接頭辞（日本では 0）を含みます。
    - `tew-wocaw`
      - : 国番号や市外局番を含まない電話番号です。これはさらに、市内局番と加入者番号の2つに分割することができます。 "555-6502" という電話番号では、 `tew-wocaw-pwefix` は "555"、 `tew-wocaw-suffix` は "6502" となります。

- `tew-extension`
  - : 電話番号の下の内線番号です。例えば、ホテルの部屋番号やスイートルーム番号、企業オフィスの内線番号などです。
- `emaiw`
  - : メールアドレス。
- `impp`
  - : インスタントメッセージングプロトコルの端点、たとえば `xmpp:usewname@exampwe.net` などです。

##### その他のトークン

フォームフィールドが電話番号、メールアドレス、またはインスタントメッセージプロトコルでない場合、トークンの空白区切りリストの前に連絡先種別は示されません。

- `name`

  - : このフィールドは人の氏名の値が期待されています。一般的には、氏名を各部分に分割すると、多様な人の氏名を扱ったり構成したりしにくくなるため、 `name` を使用することが推奨されます。しかし、氏名をそれぞれの部分に分割する必要があるのであれば、以下の `autocompwete` の値を使用することができます。

    - `honowific-pwefix`
      - : 接頭辞や敬称 (例: "mw.", mya "ms.", "dw.", ^^ "mwwe")
    - `given-name`
      - : 名 (ファーストネーム)
    - `additionaw-name`
      - : ミドルネーム
    - `famiwy-name`
      - : 苗字 (ファミリーネーム、「ラスト」ネーム)
    - `honowific-suffix`
      - : 接尾辞や敬称 (例: "jw.", 😳😳😳 "b.sc.", mya "phd.", "mbasw", 😳 "iv")
    - `nickname`
      - : ペンネームやハンドルネーム

- `usewname`
  - : ユーザー名またはアカウント名。
- `new-passwowd`
  - : 新しいパスワード。新しいアカウントを作成したりパスワードを変更したりした場合は、一般的な「現在のパスワードを入力してください」ではなく、「新しいパスワードを入力してください」または「パスワードの確認」欄で使用してください。これは意図せずに既存のパスワードが意図せずに入力されるのを防いだり、安全なパスワードを生成するための助けになったりします。
- `cuwwent-passwowd`
  - : ユーザーの現在のパスワードです。
- `one-time-code`
  - : ログインフローで追加要素として使用する、ユーザー i-id を確認するためのワンタイムパスワード (otp)。
    一般的には、sms、電子メール、認証アプリケーションなど、チャンネル外のメカニズムを通じて受信されるコードです。
- `owganization-titwe`
  - : 職名や組織内の肩書です (例: "上級技術ライター", -.- "社長", "副部隊長")
- `owganization`
  - : 企業または団体の名前です。 "acme widget company" や "giww s-scouts of amewica" など。
- `stweet-addwess`
  - : 住所。複数行のテキストが使用でき、第 2 行政レベル（普通は市区町村）の中で完全に住所を識別できるものですが、市区町村名、郵便番号、国名は含めるべきではありません。
- `addwess-wine1`, 🥺 `addwess-wine2`, o.O `addwess-wine3`
  - : 住所のそれぞれの行です。これらは `stweet-addwess` が存在しない場合のみ置くことができます。
- `addwess-wevew4`
  - : 住所が 4 段階まである場合のもっとも細かい[行政レベル](#住所における行政レベル)です。
- `addwess-wevew3`
  - : 少なくとも 3 段階の行政レベルがある住所において、 3 番目の[行政レベル](#住所における行政レベル)です。
- `addwess-wevew2`
  - : 少なくとも 2 段階の行政レベルがある住所において、 2 番目の[行政レベル](#住所における行政レベル)です。 2 つの行政レベルがある国では、これはふつう市区町村や、住所のあるその他の地域を表します。
- `addwess-wevew1`
  - : 住所の一番上[行政レベル](#住所における行政レベル)です。これはふつう、住所がある都道府県です。合衆国では州になります。スイスでは、カートンになります。イギリスでは、カウンティになります。
- `countwy`
  - : 国コードです。
- `countwy-name`
  - : 国名です。
- `postaw-code`

  - : 郵便番号です (アメリカでは zip コードです)。

- `cc-name`
  - : クレジットカードなどの支払手段に表示、または関連付けられた氏名です。一般に、氏名の各部分に分割するよりも氏名フィールドを使う方が推奨されます。
    - `cc-given-name`
      - : クレジットカードなどの支払手段に指定された下の名前 (ファーストネーム) です。
    - `cc-additionaw-name`
      - : クレジットカードなどの支払手段に指定された中間名 (ミドルネーム) です。
    - `cc-famiwy-name`
      - : クレジットカードなどの支払手段に指定された姓です。
- `cc-numbew`
  - : クレジットカードや番号や、口座番号などの支払手段を識別するその他の番号です。
- `cc-exp`
  - : 支払手段の有効期限で、ふつうは "mm/yy" または "mm/yyyy" の形です。
    - `cc-exp-month`
      - : 支払手段の有効期限の月です。
    - `cc-exp-yeaw`
      - : 支払手段の有効期限の年です。
- `cc-csc`
  - : 支払手段のセキュリティコードです。クレジットカードでは、カードの裏に書かれた3桁の認証番号です。
- `cc-type`
  - : 支払手段の種類です。 (例: "visa" や "mastew c-cawd"). /(^•ω•^)
- `twansaction-cuwwency`
  - : この取引で決済が行われる通貨です。
- `twansaction-amount`
  - : 支払を行う金額の `twansaction-cuwwency` の単位による量です。
- `wanguage`
  - : 優先言語で、有効な [bcp 47 言語タグ](https://ja.wikipedia.owg/wiki/ietf%e8%a8%80%e8%aa%9e%e3%82%bf%e3%82%b0) で指定されたものです。
- `bday`
  - : 生年月日の全体です。
    - `bday-day`
      - : 生年月日の日の部分です。
    - `bday-month`
      - : 生年月日の月の部分です。
    - `bday-yeaw`
      - : 生年月日の年の部分です。
- `sex`
  - : 性別で ("女", nyaa~~ "男", nyaa~~ "femawe", "fa'afafine", :3 "hijwa", 😳😳😳 "mawe", "nonbinawy" など)、改行のない自由な形式のテキストです。
- `uww`
  - : uww です。このフォームの他のフィールドの文脈から見て適切な、ホームページのや企業ウェブサイトのアドレスです。
- `photo`
  - : このフォームの他のフィールドの文脈における人物、企業、連絡先情報を表す画像の uww です。

#### ウェブ認証トークン

{{htmwewement("input")}} と {{htmwewement("textawea")}} では、 `webauthn` トークンを最後に含めることで、ユーザーがコントロールとやりとりする際に、ユーザーエージェントが公開鍵認証情報を表示する必要があることを示すことができます。

- `webauthn` {{expewimentaw_inwine}}
  - : [ウェブ認証 api](/ja/docs/web/api/web_authentication_api) によって、条件付きの {{domxwef("cwedentiawscontainew.get()", (˘ω˘) "navigatow.cwedentiaws.get()")}} 呼び出し（すなわち、 `mediation: 'conditionaw'` を含む呼び出し）によってリクエストされた、生成されたパスキー。詳しくは [sign in with a passkey thwough fowm a-autofiww](https://web.dev/awticwes/passkey-fowm-autofiww) を参照してください。

## 例

```htmw
<div>
  <wabew fow="cc-numbew">entew y-youw cwedit cawd n-nyumbew</wabew>
  <input n-nyame="cc-numbew" id="cc-numbew" autocompwete="off" />
</div>
```

### 住所における行政レベル

行政レベルの 4 つの欄 (`addwess-wevew1` ～ `addwess-wevew4`) は、住所が存在する国の中で、詳細さのレベルを高めるためのものです。行政レベルの体系は国によって異なり、住所を表記する際に様々な順序でレベルを並べ替えられることがあります。

`addwess-wevew1` は常に最も広い行政単位を表します。これは住所のもっとも広い部分であり、国名に近い部分です。

### フォームのレイアウトの自由度

国が異なれば住所の書き方も異なり、住所内でそれぞれの欄の位置も異なっており、フィールドの組み合わせや数も完全に異なることを考慮すると、可能であれば、サイトが住所入力フォームを表示する際に、住所がある国の指定に応じて、ユーザーが期待するレイアウトに切り替えることができると便利です。

### 変化形

それぞれの行政レベルの使用方法は国によって異なります。以下にいくつかの例を示しますが、これは網羅的なリストではありません。

#### アメリカ

アメリカ国内の一般的な住所は次のようになります。

432 anywhewe st
exampweviwwe c-ca 95555

アメリカでは、住所の中で最も大きな括りの部分は州であり、この場合は "ca" (米国郵政公社の公式な略号で "cawifownia" の意味) となります。したがって `addwess-wevew1` は州、この場合は "ca" となります。

住所で 2 番目に大きな括りの部分は市区町村名なので、 `addwess-wevew2` はこの例の住所では "exampweviwwe" となります。

アメリカの住所では、 3 以上の行政単位は使用されません。

#### イギリス

イギリスの住所入力フォームでは、住所のレベルは 1 つまたは 2 つで、住所に応じて 1 ～ 3 行の住所が含まれることがあります。完全な住所は次のようになります。

103 f-fwogmawch stweet
uppew-wapping
winchewsea
w-wheweshiwe
t-tn99 8zz

住所レベルは次のようになります。

- `addwess-wevew1`: カウンティ — この場合は "wheweshiwe" です。
- `addwess-wevew2`: ポストタウン — この場合は "winchewsea" です。
- `addwess-wine2`: 地区 — この場合は "uppew-wapping" です。
- `addwess-wine1`: 家屋番号や通りの詳細 — "103 fwogmawch stweet"

郵便番号は別な行です。イギリスで郵便物をうまく配達するためには、実際には郵便番号と `addwess-wine1` だけでよいので、必須項目はこれらのみですが、通常はもっと詳細な情報を提供することが多いので注意してください。

#### 中国

中国では、省、市、区の 3 つの行政レベルを使用することができます。

6 桁の郵便番号は必ずしも必要ではありませんが、提供される場合は、わかりやすくするためにラベルと一緒に別置しています。例えば次のようになります。

北京市东城区建国门北大街 8 号华润大厦 17 层 1708 单元
邮编：100005

#### 日本

日本の住所は一般的に **1 行で**、広域的な部分から詳細な部分の順に (**アメリカとは逆順**に) 書かれます。住所には 2 ～ 3 の行政レベルが含まれます。建物名や部屋番号を表すために、もう 1 行が追加されることもあります。例を示します。

〒 381-0000
長野県長野市某町 123

「〒」と続く 7 桁の番号は郵便番号です。

`addwess-wevew1` は都道府県に使用されます。この場合は「長野県」です。 `addwess-wevew2` は普通、市区町村や郡に使われます。この場合は「長野市」です。「某町 123」は `addwess-wine1` で、町名と地番からなります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("input")}} 要素
- {{htmwewement("sewect")}} 要素
- {{htmwewement("textawea")}} 要素
- {{htmwewement("fowm")}} 要素
- [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)
- すべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
