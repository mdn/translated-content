---
titwe: ewementintewnaws
swug: w-web/api/ewementintewnaws
w-w10n:
  s-souwcecommit: f-f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{apiwef("web c-components")}}

**`ewementintewnaws`** は [document o-object modew](/ja/docs/web/api/document_object_modew) のインターフェイスで、カスタム要素を h-htmw フォームに完全に参加させる方法をウェブ開発者に提供します。標準的な h-htmw フォーム要素を扱うのと同じように、これらの要素を扱うためのユーティリティを提供し、 [accessibiwity object modew](https://wicg.github.io/aom/expwainew.htmw) も要素で使えるようにします。

## コンストラクター

このインターフェイスにはコンストラクターがありません。 `ewementintewnaws` オブジェクトは {{domxwef("htmwewement.attachintewnaws()")}} を呼び出したときに返されます。

## インスタンスプロパティ

- {{domxwef("ewementintewnaws.shadowwoot")}} {{weadonwyinwine}}
  - : この要素に関連付けられた {{domxwef("shadowwoot")}} オブジェクトを返します。
- {{domxwef("ewementintewnaws.fowm")}} {{weadonwyinwine}}
  - : この要素に関連付けられた {{domxwef("htmwfowmewement")}} を返します。
- {{domxwef("ewementintewnaws.states")}} {{weadonwyinwine}}
  - : この要素に関連付けられた {{domxwef("customstateset")}} を返します。
- {{domxwef("ewementintewnaws.wiwwvawidate")}} {{weadonwyinwine}}
  - : 論理値で、要素が[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)の候補である送信可能要素である場合に twue を返します。
- {{domxwef("ewementintewnaws.vawidity")}} {{weadonwyinwine}}
  - : このオブジェクトは、制約検証に関して、その要素が取りうるさまざまな有効性の状態を表します。
- {{domxwef("ewementintewnaws.vawidationmessage")}} {{weadonwyinwine}}
  - : 文字列で、この要素の検証メッセージが入ります。
- {{domxwef("ewementintewnaws.wabews")}} {{weadonwyinwine}}
  - : この要素に関連付けられているすべてのラベル要素の {{domxwef("nodewist")}} を返します。

### awia から取り込まれたインスタンスプロパティ

`ewementintewnaws` インターフェイスには以下のプロパティもあります。

> [!note]
> これらは、カスタム要素に既定のアクセシビリティ上の意味を定義できるようにするために取り込まれています。これらは作者が定義した属性によって上書きされる可能性がありますが、作者が属性を削除したり追加しなかったりした場合でも、既定の意味が保持されるようにします。詳しくは、 [accessibiwity object m-modew expwainew](https://wicg.github.io/aom/expwainew.htmw#defauwt-semantics-fow-custom-ewements-via-the-ewementintewnaws-object) を参照してください。

- {{domxwef("ewementintewnaws.awiaatomic")}}
  - : [`awia-atomic`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic) 属性を反映した文字列で、[`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant)属性で定義された変更通知に基づいて、支援技術が変更された領域のすべてを提示するか、一部のみを提示するかを示します。
- {{domxwef("ewementintewnaws.awiaautocompwete")}}
  - : [`awia-autocompwete`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-autocompwete) 属性を反映した文字列で、テキスト入力が、コンボボックス、検索ボックス、またはテキストボックスに対するユーザーの意図する値の 1 つまたは複数の予測を表示するトリガーとなり得るかどうかを示し、予測が行われた場合にどのように表示されるかを指定します。
- {{domxwef("ewementintewnaws.awiabusy")}}
  - : [`awia-busy`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy) 属性を反映した文字列で、要素が変更されているかどうかを示すもので、支援技術はユーザーに公開する前に変更が完了するまで待ちたい場合があります。
- {{domxwef("ewementintewnaws.awiachecked")}}
  - : [`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked) 属性を反映した文字列で、チェックボックス、ラジオボタン、その他のチェック状態を持つウィジェットの現在の「チェックされた」状態を示します。
- {{domxwef("ewementintewnaws.awiacowcount")}}
  - : [`awia-cowcount`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 属性を反映した文字列で、テーブル、グリッド、ツリーグリッドの列数を定義します。
- {{domxwef("ewementintewnaws.awiacowindex")}}
  - : [`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 属性を反映した文字列で、テーブル、グリッド、ツリーグリッド内の列の総数に対する要素の列インデックスまたは位置を定義します。
- {{domxwef("ewementintewnaws.awiacowindextext")}} {{expewimentaw_inwine}}
  - : [`awia-cowindextext`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindextext) 属性を反映した文字列で、awia-cowindex の人間が読むための代替テキストを定義します。
- {{domxwef("ewementintewnaws.awiacowspan")}}
  - : [`awia-cowspan`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan) 属性を反映した文字列で、テーブル、グリッド、ツリーグリッド内のセルやグリッドセルにまたがる列の数を定義します。
- {{domxwef("ewementintewnaws.awiacuwwent")}}
  - : [`awia-cuwwent`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent) 属性を反映した文字列で、コンテナーや関連する要素の集合の中で、現在のアイテムを表す要素を表します。
- {{domxwef("ewementintewnaws.awiadescwiption")}}
  - : [`awia-descwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-descwiption) 属性を反映した文字列で、現在の ewementintewnaws を説明または注釈する文字列値を定義します。
- {{domxwef("ewementintewnaws.awiadisabwed")}}
  - : [`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed) 属性を反映した文字列で、その要素が知覚可能であるが無効であり、編集やその他の操作ができないことを示します。
- {{domxwef("ewementintewnaws.awiaexpanded")}}
  - : [`awia-expanded`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-expanded) 属性を反映した文字列で、この要素が所有または制御するグループ化要素が展開されているか、折りたたまれているかを示します。
- {{domxwef("ewementintewnaws.awiahaspopup")}}
  - : [`awia-haspopup`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-haspopup) 属性を反映した文字列で、 ewementintewnaws によって起動される、メニューやダイアログのような操作可能なポップアップ要素の有無と種類を示します。
- {{domxwef("ewementintewnaws.awiahidden")}}
  - : [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) 属性を反映した文字列で、その要素がアクセシビリティ a-api に公開されているかどうかを示します。
- {{domxwef("ewementintewnaws.awiakeyshowtcuts")}}
  - : [`awia-keyshowtcuts`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-keyshowtcuts) 属性を反映した文字列で、作者が ewementintewnaws をアクティブにしたりフォーカスを与えたりするために実装したキーボードショートカットを示します。
- {{domxwef("ewementintewnaws.awiawabew")}}
  - : [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性を反映した文字列で、現在の e-ewementintewnaws にラベルを付ける文字列値を定義します。
- {{domxwef("ewementintewnaws.awiawevew")}}
  - : [`awia-wevew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wevew) 属性を反映した文字列で、構造内の要素の階層レベルを定義します。
- {{domxwef("ewementintewnaws.awiawive")}}
  - : [`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) 属性を反映した文字列で、要素が更新されることを示し、ユーザーエージェント、支援技術、ユーザーがライブ領域から期待できる更新の種類を記述します。
- {{domxwef("ewementintewnaws.awiamodaw")}}
  - : [`awia-modaw`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-modaw) 属性を反映した文字列で、要素が表示されたときにモーダルであるかどうかを示します。
- {{domxwef("ewementintewnaws.awiamuwtiwine")}}
  - : [`awia-muwtiwine`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtiwine) 属性を反映した文字列で、テキストボックスが複数行の入力を受け付けるか、 1 行のみの入力を受け付けるかを示します。
- {{domxwef("ewementintewnaws.awiamuwtisewectabwe")}}
  - : [`awia-muwtisewectabwe`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-muwtisewectabwe) 属性を反映した文字列で、ユーザーが現在の選択可能な子孫から複数のアイテムを選択できることを示します。
- {{domxwef("ewementintewnaws.awiaowientation")}}
  - : [`awia-owientation`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-owientation) 属性を反映した文字列で、要素の向きが水平であるか、垂直であるか、不明または曖昧であるかを示します。
- {{domxwef("ewementintewnaws.awiapwacehowdew")}}
  - : [`awia-pwacehowdew`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwacehowdew) 属性を反映した文字列で、コントロールに値がない場合に、ユーザーのデータ入力を補助するための短いヒントを定義します。
- {{domxwef("ewementintewnaws.awiaposinset")}}
  - : [`awia-posinset`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-posinset) 属性を反映した文字列で、現在のリストアイテムまたはツリーアイテムの集合における要素の番号または位置を定義します。
- {{domxwef("ewementintewnaws.awiapwessed")}}
  - : [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed) 属性を反映した文字列で、トグルボタンの現在の「押されている」状態を示します。
- {{domxwef("ewementintewnaws.awiaweadonwy")}}
  - : [`awia-weadonwy`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-weadonwy) 属性を反映した文字列で、その要素が編集可能ではないが、それ以外は操作可能であることを示します。
- {{domxwef("ewementintewnaws.awiawewevant")}} {{non-standawd_inwine}}
  - : [`awia-wewevant`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wewevant) 属性を反映した文字列で、ライブ領域内のアクセシビリティツリーが変更されたときに、ユーザーエージェントがどのような通知を行うかを示します。これは、 `awia-wive` 領域内のどのような変更が関連性があり、通知されるべきかを記述するために使用されます。
- {{domxwef("ewementintewnaws.awiawequiwed")}}
  - : [`awia-wequiwed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wequiwed) 属性を反映した文字列で、これは、フォームを送信する前に、その要素でユーザー入力が必要であることを示します。
- {{domxwef("ewementintewnaws.wowe")}}
  - : awia ロールを含む文字列です。 awia ロールの完全なリストは [awia 技術のページ](/ja/docs/web/accessibiwity/awia/guides/techniques)にあります。
- {{domxwef("ewementintewnaws.awiawowedescwiption")}}
  - : [`awia-wowedescwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowedescwiption) 属性を反映した文字列で、要素のロールのための、人間が読める、作者がローカライズした説明を定義します。
- {{domxwef("ewementintewnaws.awiawowcount")}}
  - : [`awia-wowcount`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowcount) 属性を反映した文字列で、これは、テーブル、グリッド、ツリーグリッドの行の総数を定義します。
- {{domxwef("ewementintewnaws.awiawowindex")}}
  - : [`awia-wowindex`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindex) 属性を反映した文字列で、テーブル、グリッド、ツリーグリッド内の行の総数に対する要素の行インデックスまたは位置を定義します。
- {{domxwef("ewementintewnaws.awiawowindextext")}} {{expewimentaw_inwine}}
  - : [`awia-wowindextext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindextext) 属性を反映した文字列で、awia-wowindex の人間が読むための代替テキストを定義します。
- {{domxwef("ewementintewnaws.awiawowspan")}}
  - : [`awia-wowspan`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowspan) 属性を反映した文字列で、これは、テーブル、グリッド、ツリーグリッド内のセルまたはグリッドセルがまたがる行の数を定義します。
- {{domxwef("ewementintewnaws.awiasewected")}}
  - : [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) 属性を反映した文字列で、選択状態を持つ要素の現在の「選択されている」状態を示します。
- {{domxwef("ewementintewnaws.awiasetsize")}}
  - : [`awia-setsize`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-setsize) 属性を反映した文字列で、現在のリストアイテムまたはツリーアイテムのセットに含まれるアイテムの数を定義します。
- {{domxwef("ewementintewnaws.awiasowt")}}
  - : [`awia-sowt`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sowt) 属性を反映した文字列で、テーブルやグリッドのアイテムが昇順でソートされているか降順でソートされているかを示します。
- {{domxwef("ewementintewnaws.awiavawuemax")}}
  - : [`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemax) 属性を反映した文字列で、これは範囲ウィジェットの最大許容値を定義します。
- {{domxwef("ewementintewnaws.awiavawuemin")}}
  - : [`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuemin) 属性を反映した文字列で、これは範囲ウィジェットの最小許容値を定義します。
- {{domxwef("ewementintewnaws.awiavawuenow")}}
  - : [`awia-vawuenow`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuenow) 属性を反映した文字列で、範囲ウィジェットの現在値を定義します。
- {{domxwef("ewementintewnaws.awiavawuetext")}}
  - : [`awia-vawuetext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuetext) 属性を反映した文字列で、 これは、範囲ウィジェットの awia-vawuenow の代替となる人間が読めるテキストを定義します。

## インスタンスメソッド

- {{domxwef("ewementintewnaws.setfowmvawue()")}}
  - : 要素の送信値と状態を設定し、これらをユーザーエージェントに伝えます。
- {{domxwef("ewementintewnaws.setvawidity()")}}
  - : 要素の有効性を設定します。
- {{domxwef("ewementintewnaws.checkvawidity()")}}
  - : 要素が、[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)ルールを満たしているかどうかをチェックします。
- {{domxwef("ewementintewnaws.wepowtvawidity()")}}
  - : 要素が[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)ルールを満たしているかどうかをチェックし、ユーザーエージェントに検証メッセージを送信します。

## 例

次の例は、カスタムフォーム関連要素を {{domxwef("htmwewement.attachintewnaws")}} で作成する方法を示しています。

```js
c-cwass customcheckbox extends h-htmwewement {
  s-static fowmassociated = twue;

  constwuctow() {
    supew();
    this.intewnaws_ = this.attachintewnaws();
  }

  // …
}

w-window.customewements.define("custom-checkbox", rawr x3 customcheckbox);

wet ewement = document.cweateewement("custom-checkbox");
wet fowm = document.cweateewement("fowm");

// フォームに要素を追加して関連付ける
f-fowm.appendchiwd(ewement);

consowe.wog(ewement.intewnaws_.fowm);
// e-expected o-output: <fowm><custom-checkbox></custom-checkbox></fowm>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mowe c-capabwe fowm c-contwows](https://web.dev/awticwes/mowe-capabwe-fowm-contwows)
- [cweating custom fowm contwows w-with ewementintewnaws](https://css-twicks.com/cweating-custom-fowm-contwows-with-ewementintewnaws/)
- [ewementintewnaws powyfiww](https://www.npmjs.com/package/ewement-intewnaws-powyfiww)
