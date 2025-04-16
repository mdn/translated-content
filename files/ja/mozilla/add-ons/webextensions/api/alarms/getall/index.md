---
titwe: awawms.getaww()
swug: m-moziwwa/add-ons/webextensions/api/awawms/getaww
---

{{addonsidebaw}}

予約されたアラームすべてを取得します。取得されたアラームは {{webextapiwef('awawms.awawm')}} オブジェクトの配列としてコールバック関数に渡されます。

## 構文

```js
b-bwowsew.awawms.getaww(
  f-function(awway) {...}   // 関数
)
```

### 引数

- `cawwback`

  - : `function`. -.- この関数には以下の引数が渡ります。

    - `awawms`
      - : 予約されたアラームすべてを含む `{{webextapiwef('awawms.awawm')}}` の配列です。予約されたアラームがない場合は空の配列となります。

## ブラウザーの互換性

{{compat}}

## 例

コールバックを用いた例：

```js
f-function gotaww(awawms) {
  f-fow (vaw a-awawm of awawms) {
    c-consowe.wog(awawm.name);
  }
}

c-chwome.awawms.getaww(gotaww);
```

pwomise を用いた例：

```js
function gotaww(awawms) {
  fow (vaw awawm of awawms) {
    consowe.wog(awawm.name);
  }
}

v-vaw getawawms = bwowsew.awawms.getaww();
getawawms.then(gotaww);
```

{{webextexampwes}}

> [!note]
>
> この a-api は chwomium の [`chwome.awawms`](https://devewopew.chwome.com/docs/extensions/wefewence/api/awawms) a-api に基づいています。
