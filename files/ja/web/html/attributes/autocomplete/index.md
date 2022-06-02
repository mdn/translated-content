---
title: 'HTML 属性: autocomplete'
slug: Web/HTML/Attributes/autocomplete
tags:
  - 住所
  - 属性
  - メールアドレス
  - フォーム
  - HTML
  - Input
  - 電話番号
  - リファレンス
  - Select
  - テキスト
  - ユーザー名
  - autocomplete
  - form
  - パスワード
  - textarea
browser-compat: html.global_attributes.autocomplete
translation_of: Web/HTML/Attributes/autocomplete
---

{{HTMLSidebar}}

HTML の `autocomplete` 属性は、ウェブ開発者は入力欄にどの種類の情報が期待されているかをブラウザーに示唆することができるのに加え、{{Glossary("user agent", "ユーザーエージェント")}}がフォーム入力欄の値を埋めるための自動支援を提供する必要があることを指定することができます。

入力値としてテキストまたは数値を取る {{HTMLElement("input")}} 要素、 {{HTMLElement("textarea")}} 要素、 {{HTMLElement("select")}} 要素、 {{HTMLElement("form")}} 要素で利用できます。

提案値の情報源は、一般にブラウザーに依存します。ふつうは、ユーザーが入力した過去の値からとりますが、あらかじめ構成された値から取得することもあります。例えば、ブラウザーはユーザーに名前、住所、電話番号、メールアドレスを自動補完するために保存させることができます。おそらく、ブラウザーは以降の認証手続で自動補完を行うために、クレジットカード情報を暗号化して保存する機能を提供しています。

{{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 要素に `autocomplete` 属性がない場合、ブラウザーはその要素のフォームオーナー、つまりその要素を子孫に持つ {{HTMLElement("form")}} 要素、または `<form>` 要素で `id` がその要素の {{htmlattrxref("form", "input")}} 属性で指定されているものの `autocomplete` 属性の値を使用します。

詳しくは、 {{HTMLElement("form")}} 要素の {{htmlattrxref("autocomplete", "form")}} 属性をご覧ください。

> **Note:** 自動補完を提供するために、ユーザーエージェントは `<input>`/`<select>`/`<textarea>` 要素に次のことを要求することがあります。
>
> 1. `name` や `id` 属性を持つこと
> 2. `<form>` 要素の子孫であること
> 3. フォームが {{HTMLElement("input/submit", "submit")}} ボタンを持つこと

## 値

- "`off`"

  - : ブラウザーはこのフィールドの値を自動的に入力または選択することが許可されていません。文書やアプリケーションが独自の自動補完機能を提供していたり、セキュリティ上の理由でフィールドの値を自動的に入力しないよう要求していたりする可能性はあります。

    > **Note:** ほとんどの現行ブラウザーでは `autocomplete` 属性を "`off`" に設定しても、ブラウザーのパスワードマネージャーがユーザー名やパスワードを保存したいかをユーザーに問い合わせたり、ログインフォームにそれらを自動入力したりすることを抑制できません。 [autocomplete 属性とログインフィールド](/ja/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields)をご覧ください。

- "`on`"
  - : ブラウザーが自動的に入力を補完することが許可されています。フィールドに求められているデータ型としてのガイダンスが提供されていないので、ブラウザーは独自の判断を行うかもしれません。
- "`name`"

  - : このフィールドは人の氏名の値が期待されています。一般的には、氏名を各部分に分割すると、多様な人の氏名を扱ったり構成したりしにくくなるため、 "`name`" を使用したほうが推奨されます。しかし、氏名をそれぞれの部分に分割する必要があるのであれば、以下の `autocomplete` の値を使用することができます。

    - "`honorific-prefix`"
      - : 接頭辞や敬称 (例: "Mr.", "Ms.", "Dr.", "Mlle")
    - "`given-name`"
      - : 名 (ファーストネーム)
    - "`additional-name`"
      - : ミドルネーム
    - "`family-name`"
      - : 苗字 (ファミリーネーム、「ラスト」ネーム)
    - "`honorific-suffix`"
      - : 接尾辞や敬称 (例: "Jr.", "B.Sc.", "MBASW", "II")
    - "`nickname`"
      - : ペンネームやハンドルネーム

- "`email`"
  - : メールアドレス。
- "`username`"
  - : ユーザー名またはアカウント名。
- "`new-password`"
  - : 新しいパスワード。新しいアカウントを作成したりパスワードを変更したりした場合は、一般的な「現在のパスワードを入力してください」ではなく、「新しいパスワードを入力してください」または「パスワードの確認」欄で使用してください。これは意図せずに既存のパスワードが意図せずに入力されるのを防いだり、安全なパスワードを生成するための助けになったりします ([autocomplete="new-password" による自動補完の防止](/ja/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#preventing_autofilling_with_autocompletenew-password)も参照してください)。
- "`current-password`"
  - : ユーザーの現在のパスワードです。
- "`one-time-code`"
  - : ユーザー自身を確認するために使われるワンタイムコードです
- "`organization-title`"
  - : 職名や組織内の肩書です (例: "上級技術ライター", "社長", "副部隊長")
- "`organization`"
  - : 企業または団体の名前です。 "Acme Widget Company" や "Girl Scouts of America" など。
- "`street-address`"
  - : 住所。複数行のテキストが使用でき、第2行政レベル (普通は市町村) の中で完全に住所を識別できるものですが、市町村名、郵便番号、国名は含めるべきではありません。
- "`address-line1`", "`address-line2`", "`address-line3`"
  - : 住所のそれぞれの行です。これらは "`street-address`" が存在しない場合のみ置くことができます。
- "`address-level4`"
  - : 住所が4段階まである場合のもっとも細かい[行政レベル](#住所における行政レベル)です。
- "`address-level3`"
  - : 少なくとも3段階の行政レベルがある住所において、3番目の[行政レベル](#住所における行政レベル)です。
- "`address-level2`"
  - : 少なくとも2段階の行政レベルがある住所において、2番目の[行政レベル](#住所における行政レベル)です。2つの行政レベルがある国では、これはふつう市町村や、住所のあるその他の地域を表します。
- "`address-level1`"
  - : 住所の一番上[行政レベル](#住所における行政レベル)です。これはふつう、住所がある都道府県です。合衆国では州になります。スイスでは、カートンになります。イギリスでは、ポストタウンになります。
- "`country`"
  - : 国コードです。
- "`country-name`"
  - : 国名です。
- "`postal-code`"
  - : 郵便番号です (アメリカでは ZIP コードです)。
- "`cc-name`"
  - : クレジットカードなどの支払手段に表示、または関連付けられた氏名です。一般に、氏名の各部分に分割するよりも氏名のフィールドを使う方が推奨されます。
- "`cc-given-name`"
  - : クレジットカードなどの支払手段に指定された下の名前 (ファーストネーム) です。
- "`cc-additional-name`"
  - : クレジットカードなどの支払手段に指定された中間名 (ミドルネーム) です。
- "`cc-family-name`"
  - : クレジットカードなどの支払手段に指定された姓です。
- "`cc-number`"
  - : クレジットカードや番号や、口座番号などの支払手段を識別するその他の番号です。
- "`cc-exp`"
  - : 支払手段の有効期限で、ふつうは "MM/YY" または "MM/YYYY" の形です。
- "`cc-exp-month`"
  - : 支払手段の有効期限の月です。
- "`cc-exp-year`"
  - : 支払手段の有効期限の年です。
- "`cc-csc`"
  - : 支払手段のセキュリティコードです。クレジットカードでは、カードの裏に書かれた3桁の認証番号です。
- "`cc-type`"
  - : 支払手段の種類です。 (例: "Visa" や "Master Card").
- "`transaction-currency`"
  - : この取引で決済が行われる通貨です。
- "`transaction-amount`"
  - : 支払を行う金額の "`transaction-currency`" の単位による量です。
- "`language`"
  - : 優先言語で、有効な [BCP 47 言語タグ](https://ja.wikipedia.org/wiki/IETF%E8%A8%80%E8%AA%9E%E3%82%BF%E3%82%B0) で指定されたものです。
- "`bday`"
  - : 生年月日の全体です。
- "`bday-day`"
  - : 生年月日の日の部分です。
- "`bday-month`"
  - : 生年月日の月の部分です。
- "`bday-year`"
  - : 生年月日の年の部分です。
- "`sex`"
  - : 性別で ("Female", "Fa'afafine", "Male" など)、改行のない自由な形式のテキストです。
- "`tel`"
  - : 国番号を含む、完全な電話番号です。電話番号を書く部分に分割する必要がある場合は、各フィールドに以下の値を使用することができます。

    - "`tel-country-code`"
      - : 国コードで、例えば "1" はアメリカ、カナダ、その他の北アメリカとカリブ海の一部です。
    - "`tel-national`"
      - : 国番号以外の部分の電話番号全体で、市外局番の接頭辞 (日本では 0) を含みます。 "1-855-555-6502" という電話番号については、このフィールドの値は "855-555-6502" となります。
    - "`tel-area-code`"
      - : 市外局番で、必要に応じて市外局番の接頭辞 (日本では 0) を含みます。
    - "`tel-local`"
      - : 国番号や市外局番を含まない電話番号です。これはさらに、市内局番と加入者番号の2つに分割することができます。 "555-6502" という電話番号では、 "`tel-local-prefix`" は "555"、 "`tel-local-suffix`" は "6502" となります。

- "`tel-extension`"
  - : 電話番号の下の内線番号です。ホテルの部屋番号や企業オフィスの内線番号などです。
- "`impp`"
  - : インスタントメッセージングプロトコルの端点、たとえば "xmpp:username@example.net" などです。
- "`url`"
  - : URL です。このフォームの他のフィールドの文脈から見て適切な、ホームページのや企業ウェブサイトのアドレスです。
- "`photo`"
  - : このフォームの他のフィールドの文脈における人物、企業、連絡先情報を表す画像の URL です。

詳しくは [WHATWG 仕様書](https://html.spec.whatwg.org/multipage/forms.html#autofill) をご覧ください。

> **Note:** Firefox は他のブラウザーとは異なり、 `autocomplete` 属性で、ページを再読み込みしても `<input>` を [動的に無効化した状態や (該当する場合は) 動的に変更したチェック状態を維持するか](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) を制御します。この維持機能は、既定で有効です。 `autocomplete` 属性の値に `off` を設定すると、この機能を無効化できます。またこの設定は、`type` 属性が通常 `autocomplete` を適用しない値である `<input>` 要素でも有効です。 {{bug(654072)}} をご覧ください。

## 例

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input name="cc-number" id="cc-number" autocomplete="off">
</div>
```

## 住所における行政レベル

行政レベルの 4 つの欄 (`address-level1` ～ `address-level4`) は、住所が存在する国の中で、詳細さのレベルを高めるためのものです。行政レベルの体系は国によって異なり、住所を表記する際に様々な順序でレベルを並べ替えられることがあります。

`address-level1` は常に最も広い行政単位を表します。これは住所のもっとも広い部分であり、国名に近い部分です。

### フォームのレイアウトの自由度

国が異なれば住所の書き方も異なり、住所内でそれぞれの欄の位置も異なっており、フィールドの組み合わせや数も完全に異なることを考慮すると、可能であれば、サイトが住所入力フォームを表示する際に、住所がある国の指定に応じて、ユーザーが期待するレイアウトに切り替えることができると便利です。

### 変化形

それぞれの行政レベルの使用方法は国によって異なります。以下にいくつかの例を示しますが、これは網羅的なリストではありません。

#### アメリカ

アメリカ国内の一般的な住所は次のようになります。

432 Anywhere St
Exampleville CA 95555

アメリカでは、住所の中で最も大きな括りの部分は州であり、この場合は "CA" (米国郵政公社の公式な略号で "California" の意味) となります。したがって `address-level1` は州、この場合は "CA" となります。

住所で 2 番目に大きな括りの部分は市区町村名なので、 `address-level2` はこの例の住所では "Exampleville" となります。

アメリカの住所では、 3 以上の行政単位は使用されません。

#### イギリス

イギリスの住所入力フォームでは、住所のレベルは 1 つで、住所に応じて 1 ～ 3 行の住所が含まれることがあります。完全な住所は次のようになります。

103 Frogmarch Street
Upper-Wapping
Winchelsea
TN99 8ZZ

住所レベルは次のようになります。

- `address-level1`: ポストタウン — この場合は "Winchelsea" です。
- `address-line2`: 地区 — この場合は "Upper-Wapping" です。
- `address-line1`: 家屋番号や通りの詳細 — "103 Frogmarch Street"

郵便番号は別な行です。イギリスで郵便物をうまく配達するためには、実際には郵便番号と `address-line1` だけでよいので、必須項目はこれらのみですが、通常はもっと詳細な情報を提供することが多いので注意してください。

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

`address-level1` は都道府県に使用されます。この場合は「長野県」です。 `address-level2` は普通、市区町村や郡に使われます。この場合は「長野市」です。「某町123」は `address-line1` で、町名と地番からなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("input")}} 要素
- {{htmlelement("select")}} 要素
- {{htmlelement("textarea")}} 要素
- {{htmlelement("form")}} 要素
- [HTML フォーム](/ja/docs/Learn/Forms)
- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
