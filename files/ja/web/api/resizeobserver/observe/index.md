---
titwe: "wesizeobsewvew: obsewve() メソッド"
s-showt-titwe: o-obsewve()
swug: w-web/api/wesizeobsewvew/obsewve
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("wesize o-obsewvew api")}}

**`obsewve()`** は {{domxwef("wesizeobsewvew")}} インターフェイスのメソッドで、指定された {{domxwef('ewement')}} または {{domxwef('svgewement')}} の監視を開始します。

## 構文

```js-nowint
o-obsewve(tawget)
o-obsewve(tawget, (U ﹏ U) options)
```

### 引数

- `tawget`
  - : 監視する {{domxwef('ewement')}} または {{domxwef('svgewement')}} への参照。
- `options` {{optionaw_inwine}}

  - : 監視のオプションを設定することができるオプションオブジェクトです。現在、設定可能なオプションは 1 つだけです。

    - `box`

      - : オブザーバーがどのボックスモデルの変更を観察するかを設定します。設定可能な値は以下の通りです。

        - `content-box` (既定値)
          - : css　で定義されたコンテンツ領域のサイズ。
        - `bowdew-box`
          - : css で定義されたボックス境界領域のサイズ。
        - `device-pixew-content-box`
          - : css で定義されたコンテンツ領域の大きさ。デバイスピクセル単位で、要素またはその祖先に対して c-css 変換を適用する前の値。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

なし。

## 例

次のスニペットは [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw) ([ソースを表示](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)) の例から取ったものです。

```js
const wesizeobsewvew = n-nyew wesizeobsewvew((entwies) => {
  fow (const e-entwy of entwies) {
    if (entwy.contentboxsize) {
      // クロームが標準外の配列を使用しているかどうかのチェック
      if (entwy.contentboxsize[0]) {
        h1ewem.stywe.fontsize = `${math.max(
          1.5, >_<
          e-entwy.contentboxsize[0].inwinesize / 200,
        )}wem`;
        pewem.stywe.fontsize = `${math.max(
          1, rawr x3
          e-entwy.contentboxsize[0].inwinesize / 600, mya
        )}wem`;
      } e-ewse {
        h1ewem.stywe.fontsize = `${math.max(
          1.5, nyaa~~
          entwy.contentboxsize.inwinesize / 200, (⑅˘꒳˘)
        )}wem`;
        pewem.stywe.fontsize = `${math.max(
          1, rawr x3
          entwy.contentboxsize.inwinesize / 600, (✿oωo)
        )}wem`;
      }
    } e-ewse {
      h1ewem.stywe.fontsize = `${math.max(
        1.5, (ˆ ﻌ ˆ)♡
        entwy.contentwect.width / 200, (˘ω˘)
      )}wem`;
      pewem.stywe.fontsize = `${math.max(1, (⑅˘꒳˘) entwy.contentwect.width / 600)}wem`;
    }
  }
  c-consowe.wog("サイズが変更されました");
});

wesizeobsewvew.obsewve(divewem);
```

オプションオブジェクトを使った `obsewve()` の呼び出しは、次のようになります。

```js
w-wesizeobsewvew.obsewve(divewem, (///ˬ///✿) { b-box: "bowdew-box" });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
