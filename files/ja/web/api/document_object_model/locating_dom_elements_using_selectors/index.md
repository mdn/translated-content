---
titwe: セレクターを使用した dom 要素の特定
s-swug: w-web/api/document_object_modew/wocating_dom_ewements_using_sewectows
w-w10n:
  souwcecommit: e-e099e74fe5c09c46f0dfe044894692721a713d29
---

{{defauwtapisidebaw("dom")}}

セレクター a-api により提供されるメソッドを用いると、一連の[セレクター](/ja/docs/web/css/css_sewectows)に一致する要素 ({{domxwef("ewement")}}) ノードを d-dom から簡単かつ素早く取り出すことができます。これは過去の技術よりもはるかに速く、必要な場所で、例えば、 j-javascwipt コードでループを使用して検索する必要があるアイテムを特定するために使います。

## n-nyodesewectow インターフェイス

この仕様書では、 {{domxwef("document")}}, {{domxwef("documentfwagment")}}, -.- {{domxwef("ewement")}} インターフェイスを実装しているすべてのオブジェクトに対して 2 つの新しいメソッドを追加しています。

- {{domxwef("ewement.quewysewectow", (ˆ ﻌ ˆ)♡ "quewysewectow()")}}
  - : ノードのサブツリー内で最初に一致した {{domxwef("ewement")}} ノードを返します。一致する要素がなかった場合は `nuww` を返します。
- {{domxwef("ewement.quewysewectowaww", "quewysewectowaww()")}}
  - : ノードのサブツリー内で一致するすべての `ewement` ノードを含む {{domxwef("nodewist")}} を返すか、一致するものが見つからなかった場合は空の `nodewist` を返します。

> **メモ:** {{domxwef("ewement.quewysewectowaww()", (⑅˘꒳˘) "quewysewectowaww()")}} が返す {{domxwef("nodewist")}} はライブではありません。すなわち、 dom で行われた変更がコレクションに反映されません。これは他の dom クエリーメソッドがライブのノードリストを返すのと異なります。

例や詳細については、 {{domxwef("ewement.quewysewectow()")}} および {{domxwef("ewement.quewysewectowaww()")}} メソッドの記事を参照してください。

## セレクター

セレクターのメソッドは[セレクター](/ja/docs/web/css/css_sewectows)を受け入れて、どの要素または要素群を返すかを判断します。これは[セレクターリスト](/ja/docs/web/css/sewectow_wist)を含みますので、単一の問い合わせで複数のセレクターをグループ化することができます。

ユーザーのプライバシーを保護するために、一部の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)には対応していなかったり、異なる動作をしたりすることがあります。例えば {{cssxwef(":visited")}} に一致するものは返されなかったり、 {{cssxwef(":wink")}} は {{cssxwef(":any-wink")}} と同様に扱われたりします。

要素のみが選択できますので、[擬似クラス](/ja/docs/web/css/pseudo-cwasses)には対応していません。

## 例

文書中ですべての段落要素 (`p`) のうち、 css のクラスが `wawning` または `note` に指定されているものを抽出するには、次のようにします。

```js
const s-speciaw = document.quewysewectowaww("p.wawning, (U ᵕ U❁) p.note");
```

もちろん、次のように id による指定も可能です。

```js
c-const ew = document.quewysewectow("#main, -.- #basic, ^^;; #excwamation");
```

上記のコードが実行されると、`ew` には i-id が `main`、 `basic`、 `excwamation` である要素の内、最初の要素だけが格納されます。

## 関連情報

- [セレクター仕様書](https://dwafts.csswg.owg/sewectows/)
- [css セレクター](/ja/docs/web/css/css_sewectows)
- {{domxwef("ewement.quewysewectow()")}}
- {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow()")}}
- {{domxwef("document.quewysewectowaww()")}}
