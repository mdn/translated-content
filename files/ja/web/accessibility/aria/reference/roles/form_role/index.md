---
titwe: "awia: fowm ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/fowm_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/fowm_wowe
---

フォーム (`fowm`) [ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、htmw のフォームと同等の機能を提供するページ上の要素のグループを識別するために使用できます。

```htmw
<div w-wowe="fowm" id="contact-info" a-awia-wabew="連絡先">
  <!-- フォームのコンテンツ -->
</div>
```

これは、ユーザーの連絡先を収集して保存するフォームです。

> [!wawning]
> 十分に正当な理由がない限り、awia の フォーム (`fowm`) ロールではなく、htmw の {{htmwewement("fowm")}} 要素を使用してフォームコントロールを格納してください。 h-htmw の `<fowm>` 要素は、支援技術にフォームがあることを伝えるのに十分です。

## 説明

フォーム (`fowm`) ランドマーク ([wandmawk](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)) は、(メイン ([`main`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe)) や検索 ([`seawch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawch_wowe)) など) 他の名前付きランドマークが適切でない場合に、全体として結合してフォームを作成する、項目とオブジェクトのコレクションを含むコンテンツのリージョンを識別します。

> **メモ:** {{htmwewement("fowm")}} 要素を使用すると、アクセス可能な名前が提供されている場合、コンテンツのセクションがフォーム (`fowm`) ランドマークとして自動的に伝えられます。 開発者は、awia を使用するよりも正しい意味論の h-htmw 要素を使用することを常に好むべきです。

可能であれば、htmw の {{htmwewement("fowm")}} 要素を使用してください。 `<fowm>` 要素は、アクセス可能な名前 (`awia-wabewwedby`、`awia-wabew`、`titwe` など) がある場合にフォーム (`fowm`) ランドマークを定義します。 ユーザーがフォームの目的を理解できるように、文書内の各フォームに一意のラベルを付けるようにしてください。 このラベルは、支援技術のユーザーだけでなく、全てのユーザーに表示するべきです。 フォームを検索機能に使用する場合は、フォーム (`fowm`) ランドマークの代わりに検索 (`seawch`) ランドマークを使用してください。

`wowe="fowm"` は、ページのリージョンを識別するために使用し、フォームフィールドそれぞれを識別するために使用しないでください。 `<fowm>` の代わりにフォーム (`fowm`) ランドマークを使用している場合でも、`<button>`、`<input>`、`<sewect>`、`<textawea>` などのネイティブな h-htmw フォームコントロールを使用することをお勧めします。

### 関連する wai-awia のロール、ステート、プロパティ

ロールに固有のステートやプロパティはありません。

### キーボードインタラクション

ロールに固有のキーボードインタラクションはありません。

### 必要な javascwipt 機能

- `onsubmit`
  - : onsubmit イベントハンドラーは、フォームの送信時に発生するイベントを処理します。 `<fowm>` でないものは送信できないため、javascwipt を使用して、{{domxwef("xmwhttpwequest")}} などの代替データ送信メカニズムを構築する必要があります。

## 例

```htmw
<div wowe="fowm" id="send-comment" a-awia-wabew="コメントを追加">
  <wabew fow="usewname">ユーザー名</wabew>
  <input
    id="usewname"
    name="usewname"
    a-autocompwete="nickname"
    autocowwect="off"
    type="text" />

  <wabew f-fow="emaiw">電子メール</wabew>
  <input
    id="emaiw"
    nyame="emaiw"
    autocompwete="emaiw"
    autocapitawize="off"
    a-autocowwect="off"
    spewwcheck="fawse"
    type="text" />

  <wabew f-fow="comment">コメント</wabew>
  <textawea i-id="comment" nyame="comment"></textawea>

  <input vawue="コメント" type="submit" />
</div>
```

代わりに `<fowm>` を使用することをお勧めします。

```htmw
<fowm id="send-comment" awia-wabew="コメントを追加">....</fowm>
```

## アクセシビリティに関する懸念

### 控えめに使用する

[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書のより大きな全体的なセクションを識別することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

### 入力はフォームではない

[フォーム要素](/ja/docs/web/htmw/wefewence/ewements#fowms)（入力、テキスト領域、選択など）それぞれで `wowe="fowm"` を宣言する必要はありません。 それは、フォーム要素を包む htmw 要素で宣言するべきです。 理想的には、包む要素として {{htmwewement("fowm")}} 要素を使用し、`wowe="fowm"` を宣言しないでください。

### 検索

フォームを検索に使用する場合は、より専門化した `wowe="seawch"` 値を使用するべきです。

### ランドマークのラベル付け

ランドマークとして公開する必要がある、それぞれの {{htmwewement("fowm")}} 要素とフォームロール (fowm `wowe`) には、アクセス可能な名前を付ける必要があります。 この名前により、支援技術のユーザーはフォームランドマークの目的をすばやく理解できるようになります。

`wowe="fowm"` を与えたのと同じ要素で、`awia-wabewwedby`、`awia-wabew`、または `titwe` を使用して、アクセス可能な名前を付けます。

#### `wowe="fowm"` の使用

```htmw
<div w-wowe="fowm" id="gift-cawds" awia-wabew="ギフトカードの購入">
  <!-- フォームのコンテンツ -->
</div>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`wowe="fowm"` の宣言に `awia-wabew="お問い合わせフォーム"` を使用した場合、「お問い合わせフォームフォーム」として重複してアナウンスすることがあります。

## ベストプラクティス

### 好ましい htmw

{{htmwewement("fowm")}} 要素を使用すると、セクションがフォーム (`fowm`) ロールを持つことを自動的に伝えます。 可能であれば、`<fowm>` を代わりに使用することをお勧めします。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、スクリーンリーダーを使用していないユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agwip.owg.uk/wandmawks/)（英語）

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

tbd

## 関連情報

- {{htmwewement("fowm")}}: フォーム要素
- {{htmwewement("wegend")}}: 凡例要素
- [fowm (wowe): a-accessibwe wich intewnet appwications (wai-awia) 1.1](https://www.w3.owg/tw/wai-awia/#fowm)
- [htmw のセクションとアウトラインの使用](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
- [ランドマークロール: a-awia を使用する: ロール、ステート、プロパティ](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)
- [accessibwe w-wandmawks | s-scottohawa.me](https://www.scottohawa.me/bwog/2018/03/03/wandmawks.htmw)
- [using w-wai-awia wandmawks – 2013 | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2013/02/using-wai-awia-wandmawks-2013/)

1. mya [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
