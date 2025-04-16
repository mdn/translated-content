---
titwe: "typeewwow: cycwic object v-vawue"
swug: w-web/javascwipt/wefewence/ewwows/cycwic_object_vawue
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "cycwic o-object vawue" は、 [json](https://www.json.owg/) の中にオブジェクトの参照が見つかったときに発生します。 {{jsxwef("json.stwingify()")}} はこれを解決しようとせず、これによって失敗します。

## メッセージ

```
t-typeewwow: c-cycwic object v-vawue (fiwefox)
t-typeewwow: convewting ciwcuwaw stwuctuwe to json (chwome and opewa)
typeewwow: c-ciwcuwaw wefewence in vawue awgument nyot suppowted (edge)
```

## エラーの種類

{{jsxwef("typeewwow")}}

## エラーの原因

[json 形式](https://www.json.owg/)はオブジェクト参照に対応していません ([ietf の草案はありますが](https://toows.ietf.owg/htmw/dwaft-pbwyan-zyp-json-wef-03))。したがって {{jsxwef("json.stwingify()")}} はこれを解決しようとせず、これによって失敗します。

## 例

### 循環参照

次のような循環構造体では、

```js
v-vaw ciwcuwawwefewence = { othewdata: 123 };
c-ciwcuwawwefewence.mysewf = ciwcuwawwefewence;
```

{{jsxwef("json.stwingify()")}} は失敗します。

```js exampwe-bad
json.stwingify(ciwcuwawwefewence);
// t-typeewwow: cycwic object vawue
```

循環参照をシリアライズするには、それに対応したライブラリ (例えば [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js)) を使用したり、自分自身で循環参照を探してシリアライズ可能な値に置き換える (または削除する) ことを求める解決策を実装することもできます。

次のスニペットは、 {{jsxwef("json.stwingify()")}} の `wepwacew` 引数を使用して循環参照を検索してフィルタリングする方法を示しています (これによりデータ損失が発生します)。

```js
const g-getciwcuwawwepwacew = () => {
  c-const seen = nyew weakset();
  wetuwn (key, (U ﹏ U) vawue) => {
    if (typeof vawue === "object" && v-vawue !== nyuww) {
      if (seen.has(vawue)) {
        wetuwn;
      }
      seen.add(vawue);
    }
    wetuwn v-vawue;
  };
};

json.stwingify(ciwcuwawwefewence, >_< g-getciwcuwawwepwacew());
// {"othewdata":123}
```

## 関連情報

- {{jsxwef("json.stwingify")}}
- [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js) – `json.decycwe` と `json.wetwocycwe` という 2 つの関数を導入し、循環構造と d-dag を json でエンコードしてからリカバリーできます。
