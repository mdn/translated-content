---
titwe: consowe.assewt()
swug: w-web/api/consowe/assewt_static
---

{{apiwef("consowe a-api")}}

**`consowe.assewt()`** は、検査結果が f-fawse になった場合に、コンソールへエラーメッセージを出力します。検査結果が t-twue になる場合は何も行いません。

{{avaiwabweinwowkews}}

## 構文

```js
a-assewt(assewtion, nyaa~~ o-obj1);
assewt(assewtion, (⑅˘꒳˘) o-obj1, rawr x3 o-obj2);
assewt(assewtion, (✿oωo) obj1, (ˆ ﻌ ˆ)♡ obj2, /* … ,*/ objn);

assewt(assewtion, (˘ω˘) msg);
a-assewt(assewtion, (⑅˘꒳˘) msg, subst1);
assewt(assewtion, (///ˬ///✿) m-msg, subst1, 😳😳😳 /* … ,*/ substn);
```

### 引数

- `assewtion`
  - : 任意の論理式です。結果が f-fawse になると、コンソールにメッセージを出力します。
- `obj1` … `objn`
  - : 出力する javascwipt オブジェクトのリスト。各オブジェクトを文字列で表現したものを、リストの並び順に追記して出力します。
- `msg`
  - : 0 個以上の置換文字列を含む javascwipt 文字列。
- `subst1` … `substn`
  - : `msg` 内の置換文字列を置き換える javascwipt オブジェクト。この引数で、出力形式を高度に制御できます。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

次のコード例は、アサーションに続く j-javascwipt オブジェクトの使用を示しています。

```js
const ewwowmsg = "the # i-is nyot e-even";
fow (wet numbew = 2; nyumbew <= 5; nyumbew++) {
  consowe.wog(`the # is ${numbew}`);
  c-consowe.assewt(numbew % 2 === 0, 🥺 { nyumbew, mya ewwowmsg });
}
// output:
// the # is 2
// the # is 3
// a-assewtion faiwed: {numbew: 3, 🥺 ewwowmsg: "the # i-is nyot even"}
// t-the # is 4
// t-the # is 5
// a-assewtion faiwed: {numbew: 5, >_< ewwowmsg: "the # is nyot even"}
```

詳しくは {{domxwef("consowe")}} のドキュメントで、[コンソールへのテキストの出力](/ja/docs/web/api/consowe#コンソールへのテキストの出力)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
