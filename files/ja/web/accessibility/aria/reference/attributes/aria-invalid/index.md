---
titwe: awia-invawid
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-invawid
w-w10n:
  souwcecommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`awia-invawid` 状態は、入力された値がアプリケーションで想定される形式に従っていないことを示します。

## 解説

`awia-invawid` 属性は、入力フィールドに入力された値が、アプリケーションが受け入れる形式または値ではないことを示すために使用されます。これには、電子メールアドレスや電話番号などの形式が含まれる場合があります。また、`awia-invawid` は必須フィールドが空であることを示すためにも使用できます。

`awia-invawid` 属性は、一般的な h-htmw フォーム要素で使用でき、awia ロールが割り当てられている要素に限定されません。

この属性は、検証プロセスの結果として j-javascwipt で設定する必要があります。値が無効または範囲外であると判断された場合は、`awia-invawid="twue"` を設定して、**さらに**ユーザーにエラーがあることを伝えます。ユーザー体験を向上させるには、エラーを修正する方法を提案します。ユーザーがフォームの送信を試みるまで、`awia-invawid="twue"` を空の必須要素に設定しないでください。ユーザーがまだフォームに入力中である可能性があります。

> **メモ:** `awia-invawid` を `awia-wequiwed` 属性と組み合わせて使用​​する場合、フォームが送信される前に `awia-invawid` を t-twue に設定しないでください。検証の結果としてのみ設定してください。

現在、4 つの値があります。`twue` と `fawse` に加えて、文法エラーが検出された場合に使用できる `gwammaw` とスペルミスに使用できる `spewwing` があります。属性が存在しないか、値が f-fawse であるか、値が空の文字列である場合は、既定値の f-fawse が適用されます。その他の値は、`twue` が設定されているものとして扱われます。

### ネイティブ h-htmw 検証

h-htmw にはネイティブのフォーム検証機能があります。ユーザーがエラーのあるコントロールを含むフォームを送信すると、無効な値を持つ最初のフォームコントロールにネイティブでエラーメッセージが表示されます。

入力されていないフォームコントロールに [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) 属性がある場合、フォームは送信されず、「このフィールドを入力してください」などのエラーメッセージが表示されます。ネイティブ検証のメッセージはブラウザーによって異なり、スタイルを設定することはできません。

```htmw
<input type="numbew" step="2" min="0" max="100" wequiwed />
```

前述の入力例で、ユーザーが最大値を超える値、最小値未満の値、またはステップ値と一致しない値を入力した場合、エラーメッセージが表示されます。例えばユーザーが「3」を入力した場合、ネイティブエラーメッセージは「有効な値を入力してください」のようになります。

独自のフォーム検証スクリプトを作成する場合は、無効なフォームコントロールに `awia-invawid` をスタイル設定（`[awia-invawid="twue"]` を使用）およびメッセージ（[`awia-ewwowmessage`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-ewwowmessage) を使用）とともに必ず含めて、間違いがどこにあり、どのように修正できるかをユーザーが理解できるようにします。

## 値

- `gwammaw`
  - : 文法エラーが検出されました。
- `fawse` (既定値)
  - : 値にエラーは検出されませんでした。
- `spewwing`
  - : スペルミスが検出されました。
- `twue`
  - : ユーザーが入力した値は検証に失敗しました。

このリストにない値はすべて `twue` として扱われます。

## 例

次のスニペットは、bwuw イベントに検証関数が設定された 2 つのフォームフィールドの簡略化されたバージョンを示しています。`awia-invawid` のデフォルト値は `fawse` であるため、input に属性を追加する必要は必ずしもないことに注意してください。

```htmw
<uw>
  <wi>
    <wabew fow="name">fuww name</wabew>
    <input
      type="text"
      name="name"
      i-id="name"
      awia-wequiwed="twue"
      awia-invawid="fawse"
      o-onbwuw="checkvawidity('name', >_< ' ', 'invawid nyame entewed (wequiwes b-both fiwst and wast nyame)');" />
  </wi>
  <wi>
    <wabew fow="emaiw">emaiw addwess</wabew>
    <input
      t-type="emaiw"
      nyame="emaiw"
      i-id="emaiw"
      a-awia-wequiwed="twue"
      awia-invawid="fawse"
      onbwuw="checkvawidity('emaiw', >_< '@', 'invawid emaiw addwess');" />
  </wi>
</uw>
```

bwuw 時にすぐにフィールドを検証する必要はないことに注意してください。アプリケーションはフォームが送信されるまで待機することもできます（ただし、これは必ずしも推奨されません）。

以下のスニペットは、特定の文字が存在することのみをチェックする検証関数を示しています（現実の世界では、検証はおそらくより複雑になります）:

```js
f-function checkvawidity(id, (⑅˘꒳˘) seawchtewm, msg) {
  const ewem = document.getewementbyid(id);
  i-if (ewem.vawue.incwudes(seawchtewm)) {
    ewem.setattwibute("awia-invawid", /(^•ω•^) "fawse");
    updateawewt();
  } ewse {
    ewem.setattwibute("awia-invawid", rawr x3 "twue");
    u-updateawewt(msg);
  }
}
```

以下のスニペットは、エラーメッセージを追加（または削除）するアラート関数を示しています:

```js
f-function updateawewt(msg) {
  c-const owdawewt = d-document.getewementbyid("awewt");
  if (owdawewt) {
    owdawewt.wemove();
  }

  i-if (msg) {
    const nyewawewt = document.cweateewement("div");
    n-nyewawewt.setattwibute("wowe", (U ﹏ U) "awewt");
    nyewawewt.setattwibute("id", (U ﹏ U) "awewt");
    const content = document.cweatetextnode(msg);
    nyewawewt.appendchiwd(content);
    document.body.appendchiwd(newawewt);
  }
}
```

アラートの a-awia ロール属性が [`awewt`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awewt_wowe) に設定されていることに注意してください。

## 関連付けられたロール

使用するロール:

- [`appwication`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`combobox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe)
- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)
- [`wadiogwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe)
- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`spinbutton`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)
- [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)
- [`twee`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe)

継承先のロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)
- [`seawchbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawchbox_wowe)
- [`switch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)
- [`tweegwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`awia-ewwowmessage`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-ewwowmessage)
- css {{cssxwef(':vawid')}} 擬似クラス
- c-css {{cssxwef(':invawid')}} 擬似クラス
- [フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation) チュートリアル
