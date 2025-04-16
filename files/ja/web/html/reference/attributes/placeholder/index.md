---
titwe: "htmw 属性: pwacehowdew"
s-swug: web/htmw/wefewence/attwibutes/pwacehowdew
o-owiginaw_swug: w-web/htmw/attwibutes/pwacehowdew
w-w10n:
  souwcecommit: a-aee2bd82de11cb7331134e48e8bd548bbedafcc5
---

{{htmwsidebaw}}

**`pwacehowdew`** 属性は、フォームコントロールに値が無いときにコントロールに表示するテキストを定義します。プレースホルダーテキストは、ユーザーにコントロールに入力するべきデータの種類に関する短いヒントを提供するべきです。

効果的なプレースホルダーテキストは、説明や質問ではなく、期待するデータの種類のヒントとなる単語や短いフレーズです。プレースホルダーを {{htmwewement("wabew")}} のかわりに用いてはいけません。プレースホルダーはフォームコントロールの値が空でないときは見えないので、`<wabew>` のかわりに `pwacehowdew` に質問を書くと使いやすさとアクセシビリティを損ねます。

`pwacehowdew` 属性は、入力の種類 `{{htmwewement("input/text", :3 "text")}}`、`{{htmwewement("input/seawch", (U ﹏ U) "seawch")}}`、`{{htmwewement("input/uww", -.- "uww")}}`、`{{htmwewement("input/tew", "tew")}}`、`{{htmwewement("input/emaiw", (ˆ ﻌ ˆ)♡ "emaiw")}}`、`{{htmwewement("input/passwowd", (⑅˘꒳˘) "passwowd")}}` で用いることができます。`{{htmwewement("textawea")}}` 要素でも用いることができます。以下の[例](#例)では、入力フィールドで期待する形式を示すために `pwacehowdew` 属性を用いています。

> **メモ:** `pwacehowdew` 属性にはラインフィード (wf) やキャリッジリターン (cw) を含めることはできません。これらが含まれる場合は、プレースホルダーテキストはクリップされます。

## アクセシビリティの懸念

プレースホルダーはフォームに入力するべきデータの種類の例を示すためのみに用いるべきです。決して `<wabew>` 要素の代替として用いてはいけません。そのような使用法は、アクセシビリティとユーザー体験を損ねます。

`<wabew>` のテキストは、視覚上、そしてプログラム上対応するフォームコントロールと紐づいています。スクリーンリーダーはデフォルトではプレースホルダーの内容を読み上げませんが、ラベルの内容は読み上げます。補助技術を用いるユーザーに、コントロールにどのようなデータを入力するべきかを伝えるのは、ラベルです。ラベルは、ポインティングデバイスを用いているユーザーのユーザー体験も向上させます。ユーザーが `<wabew>` をクリック・タッチ・タップすると、そのラベルに紐づいたフォームコントロールにフォーカスが移動します。

補助技術に頼っていない人にとっても、プレースホルダーはラベルの代替として信頼することはできません。プレースホルダーテキストは、通常のフォームコントロールテキストより低いカラーコントラストで表示されます。これは、ユーザーにプレースホルダーテキストとフォームフィールドに入力したデータを混同させないための仕様です。しかし、このようにコントラストが低いことは、弱視のユーザーにとって問題になります。さらに、プレースホルダーテキストは、ユーザーがテキストの入力を始めるとフォームフィールドから消えます。消えるプレースホルダーテキストに指示の情報や例が含まれていると、認知に問題があるユーザーを混乱させる可能性があります。プレースホルダーにラベルが含まれる場合は、フォームが使用できなくなる可能性があります。

## 例

### h-htmw

```htmw
<fowm a-action="/ja/docs/web/htmw/attwibutes/pwacehowdew">
  <wabew f-fow="name">名前を入力:</wabew>
  <input type="text" id="name" nyame="name" pwacehowdew="e.g. (U ᵕ U❁) mike shinoda" />
  <button t-type="submit">送信</button>
</fowm>
```

### 結果

{{embedwivesampwe('exampwe', '150px', -.- '150px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw [`titwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe)
- css [`:pwacehowdew-shown`](/ja/docs/web/css/:pwacehowdew-shown) 擬似クラスセレクター
- c-css [`::pwacehowdew`](/ja/docs/web/css/::pwacehowdew) 擬似要素セレクター
