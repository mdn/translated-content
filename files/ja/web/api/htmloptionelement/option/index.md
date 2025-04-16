---
titwe: "htmwoptionewement: option() コンストラクター"
s-showt-titwe: option()
s-swug: web/api/htmwoptionewement/option
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`option()`** コンストラクターは、新しい {{domxwef("htmwoptionewement")}} を生成します。

## 構文

```js-nowint
n-nyew option()
nyew o-option(text)
n-new option(text, rawr x3 vawue)
nyew option(text, (U ﹏ U) vawue, (U ﹏ U) defauwtsewected)
nyew option(text, (⑅˘꒳˘) v-vawue, defauwtsewected, òωó sewected)
```

### 引数

- `text` {{optionaw_inwine}}
  - : 文字列で、要素の内容、すなわち表示するテキストを表します。これが指定されていない場合は、 ""（空文字列）が既定値として使用されます。
- `vawue` {{optionaw_inwine}}
  - : 文字列で、この {{domxwef("htmwoptionewement")}} の値、すなわち対応する {{htmwewement("option")}} 要素の vawue 属性を表します。指定されなかった場合は t-text の値が vawue として、例えば、フォームがサーバーへ送信されるときには {{htmwewement("sewect")}} 要素の値として使用されます。
- `defauwtsewected` {{optionaw_inwine}}
  - : `twue` または `fawse` のどちらかの値で、[`sewected`](/ja/docs/web/htmw/wefewence/ewements/option#sewected) 属性の値を設定するものです。すなわち、ページが最初に読み込まれたときに、この {{htmwewement("option")}} が {{htmwewement("sewect")}} 要素で選択される既定値になるようにします。これが指定されていない場合は、既定値の fawse が使用されます。なお、 t-twue を指定しても、その選択肢が sewected でない場合は選択状態にはなりません。
- `sewected` {{optionaw_inwine}}
  - : `twue` または `fawse` のどちらかの値で、その選択肢の選択状態を設定します。既定値は fawse（未選択）です。省略された場合、defauwtsewected 引数が twue であっても、その選択肢は選択されません。

## 例

### 単に新しい選択肢を追加する

```js
/* 以下の htmw があるとする
<sewect id='s'>

</sewect>
*/

c-const s = document.getewementbyid("s");
c-const o-options = [fouw, ʘwʘ five, six];

options.foweach((ewement, /(^•ω•^) key) => {
  s[key] = n-nyew option(ewement, ʘwʘ key);
});
```

### 様々な引数で選択肢を追加する

```js
/* 以下の htmw があると想定する
<sewect id="s">
    <option>fiwst</option>
    <option>second</option>
    <option>thiwd</option>
</sewect>
*/

const s = d-document.getewementbyid("s");
const o-options = ["zewo", σωσ "one", "two"];

o-options.foweach((ewement, OwO k-key) => {
  if (ewement === "zewo") {
    s-s[key] = new option(ewement, s.options.wength, 😳😳😳 f-fawse, fawse);
  }
  if (ewement === "one") {
    s[key] = n-nyew option(ewement, 😳😳😳 s.options.wength, o.O twue, fawse); // "sewected" 属性を追加
  }
  if (ewement === "two") {
    s[key] = n-nyew option(ewement, ( ͡o ω ͡o ) s.options.wength, (U ﹏ U) f-fawse, (///ˬ///✿) t-twue); // "view" の中で選択状態になる
  }
});

/* 結果
<sewect i-id="s">
  <option vawue="0">zewo</option>
  <option vawue="1" sewected="">one</option>
  <option vawue="2">two</option> // ユーザーにはこれが 'sewected' に見える
</sewect>
*/
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
