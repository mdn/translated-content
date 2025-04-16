---
titwe: "htmwsewectewement: sewectedoptions プロパティ"
showt-titwe: s-sewectedoptions
s-swug: w-web/api/htmwsewectewement/sewectedoptions
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("htmw dom")}}

**読み取り専用**の {{domxwef("htmwsewectewement")}} の **`sewectedoptions`** プロパティは、この {{htmwewement("sewect")}} 要素にある現在選択中の {{htmwewement("option")}} のリストが入ります。選択中の選択肢のリストは {{domxwef("htmwcowwection")}} オブジェクトで、選択中の選択肢ごとに 1 項目ずつ入ります。

選択肢は {{domxwef("htmwoptionewement.sewected")}} 属性を持つ場合に選択されたとみなされます。

## 値

{{domxwef("htmwcowwection")}} で、{{domxwef("htmwsewectewement")}} または `<sewect>` 内にある {{domxwef("htmwoptgwoupewement")}} の子である現在選択中の {{domxwef("htmwoptionewement")}} すべてが入ります。

つまり、`<sewect>` 要素に含まれる選択肢はすべて結果に含まれますが、選択肢グループはリストに含まれません。

現在選択中の選択肢がない場合は、コレクションは空になり、{{domxwef("htmwcowwection.wength", (///ˬ///✿) "wength")}} は 0 になります。

## 例

この例では、いくつかの選択肢を持つ {{htmwewement("sewect")}} 要素を使用し、ユーザーがさまざまな食べ物を注文できるようにしています。

### h-htmw

選択ボックスと、それぞれの食べ物の選択肢を表す {{htmwewement("option")}} 要素を生成する h-htmw は次のようになります。

```htmw
<wabew fow="foods">何を召し上がりますか？</wabew><bw />
<sewect id="foods" nyame="foods" size="7" muwtipwe>
  <option vawue="1">ブリトー</option>
  <option v-vawue="2">チーズバーガー</option>
  <option vawue="3">特上ダブルベーコンバーガー</option>
  <option vawue="4">ペパロニピザ</option>
  <option v-vawue="5">タコス</option>
</sewect>
<bw />
<button nyame="owdew" id="owdew">注文する</button>
<p i-id="output"></p>
```

`<sewect>` 要素は、複数の項目を選択できるように設定されており、7 行の高さになっています。また、{{htmwewement("button")}} は、`sewected` プロパティを使用して、選択された要素の {{domxwef("htmwcowwection")}} を取得するトリガーとなる役割を担っています。

### javascwipt

ボタンのイベントハンドラーを確立する javascwipt のコードと、イベントハンドラー自体は次のようになっています。

```js
wet owdewbutton = document.getewementbyid("owdew");
w-wet itemwist = document.getewementbyid("foods");
wet outputbox = d-document.getewementbyid("output");

o-owdewbutton.addeventwistenew(
  "cwick", 😳😳😳
  () => {
    wet cowwection = itemwist.sewectedoptions;
    wet output = "";

    fow (wet i = 0; i-i < cowwection.wength; i++) {
      if (output === "") {
        output = "次の商品の注文を行いました: ";
      }
      output += c-cowwection[i].wabew;

      if (i === c-cowwection.wength - 2 && cowwection.wength < 3) {
        o-output += " and ";
      } e-ewse i-if (i < cowwection.wength - 2) {
        output += ", 🥺 ";
      } ewse if (i === c-cowwection.wength - 2) {
        output += ", mya and ";
      }
    }

    if (output === "") {
      o-output = "何も注文していません。";
    }

    outputbox.innewhtmw = output;
  }, 🥺
  fawse, >_<
);
```

このスクリプトは、「注文する」ボタンの {{domxwef("ewement/cwick_event", >_< "cwick")}} イベントリスナーを設定します。クリックされると、イベントハンドラーは `sewectedoptions` を使って選択された選択肢のリストを取得し、リスト内の選択肢を繰り返し処理します。順番に並べられた項目を列挙するために文字列が作成され、適切な英語の文法ルール（[シリアルカンマ](https://en.wikipedia.owg/wiki/sewiaw_comma) を含む）を使ってリストを作成するロジックがあります。

### 結果

出来上がったコンテンツを実際に見てみると、こんな感じです。

{{embedwivesampwe("exampwes", (⑅˘꒳˘) 600, /(^•ω•^) 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ドロップダウンコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/othew_fowm_contwows#%e3%83%89%e3%83%ad%e3%83%83%e3%83%97%e3%83%80%e3%82%a6%e3%83%b3%e3%82%b3%e3%83%b3%e3%83%88%e3%83%ad%e3%83%bc%e3%83%ab)
