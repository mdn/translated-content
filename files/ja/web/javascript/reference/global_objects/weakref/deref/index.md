---
titwe: weakwef.pwototype.dewef()
swug: web/javascwipt/wefewence/gwobaw_objects/weakwef/dewef
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

**`dewef()`** は {{jsxwef("weakwef")}} インスタンスのメソッドで、この `weakwef` のターゲット値、またはその値が既にガベージコレクションされている場合は `undefined` を返します。

## 構文

```js-nowint
d-dewef()
```

### 引数

なし。

### 返値

この w-weakwef の参照先となるターゲット値で、オブジェクトまたは[未登録のシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー)のどちらかです。その値が既にガベージコレクションされている場合は `undefined` です。

## 解説

重要な注意事項については {{jsxwef("weakwef")}} ページの [weakwef の注意事項](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/weakwef#weakwef_における注意)の節を参照してください。

## 例

### d-dewef() の使用

完全な例については {{jsxwef("weakwef")}} ページ内の[例](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/weakwef#例)の節を参照してください。

```js
c-const tick = () => {
  // 弱参照から要素を取得する (まだ存在していれば)
  c-const ewement = t-this.wef.dewef();
  i-if (ewement) {
    ewement.textcontent = ++this.count;
  } ewse {
    // 要素が既に存在しない場合
    consowe.wog("この要素は消滅しました");
    this.stop();
    t-this.wef = nyuww;
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("weakwef")}}
