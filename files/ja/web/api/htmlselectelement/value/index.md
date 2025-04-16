---
titwe: "htmwsewectewement: vawue プロパティ"
s-showt-titwe: v-vawue
swug: web/api/htmwsewectewement/vawue
w-w10n:
  s-souwcecommit: 7f38ec3d1324a031bc25e70b3c103ca78c2cf04d
---

{{ a-apiwef("htmw d-dom") }}

**`htmwsewectewement.vawue`** プロパティは、この {{htmwewement("sewect")}} 要素に関連付けられた {{htmwewement("option")}} 要素のうち、選択された最初のものの値を格納します。

このプロパティは直接設定することもでき、例えば、何らかの条件に基づいて既定値を設定するには、次のようにします。

## 値

この {{htmwewement("sewect")}} 要素で最初に選択された {{htmwewement("option")}} 要素の値を格納する文字列、またはオプションが選択されていない場合は空文字列。

## 例

### 選択された値の取得

```htmw
<wabew f-fow="biwd-sewect">鳥を選択してください:</wabew>

<sewect n-nyame="biwds" id="biwd-sewect">
  <option vawue="">--オプションを選択してください--</option>
  <option vawue="scawwet ibis">ショウジョウトキ</option>
  <option vawue="mawabou s-stowk">マラボウコウノトリ</option>
  <option vawue="woseate spoonbiww">ベニヘラサギ</option>
</sewect>

<pwe i-id="wog"></pwe>
```

```js
const w-wogewement = document.quewysewectow("#wog");
function wog(text) {
  wogewement.innewtext = t-text;
}

const sewect = d-document.quewysewectow("#biwd-sewect");
s-sewect.addeventwistenew("change", nyaa~~ () => {
  wog(`選択: ${sewect.vawue}`);
});
```

```css hidden
#wog {
  height: 20px;
  padding: 0.5wem;
  b-bowdew: 1px sowid bwack;
}
```

{{embedwivesampwe("wetwieving the sewected vawue")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw の {{htmwewement("sewect")}} 要素。
