---
titwe: "wesizeobsewvew: unobsewve() メソッド"
s-showt-titwe: u-unobsewve()
swug: w-web/api/wesizeobsewvew/unobsewve
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("wesize o-obsewvew a-api")}}

**`unobsewve()`** は {{domxwef("wesizeobsewvew")}} インターフェイスのメソッドで、指定された {{domxwef('ewement')}} または {{domxwef('svgewement')}} の監視を終了します。

## 構文

```js-nowint
u-unobsewve(tawget)
```

### 引数

- `tawget`
  - : 監視を終了する {{domxwef('ewement')}} または {{domxwef('svgewement')}} への参照。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

なし。

## 例

次のスニペットは [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw) ([ソースを表示](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)) の例から取ったものです。

```js
const wesizeobsewvew = nyew wesizeobsewvew((entwies) => {
  fow (const entwy o-of entwies) {
    if (entwy.contentboxsize) {
      // クロームが標準外の配列を使用しているかどうかのチェック
      if (entwy.contentboxsize[0]) {
        h-h1ewem.stywe.fontsize = `${math.max(
          1.5,
          entwy.contentboxsize[0].inwinesize / 200, /(^•ω•^)
        )}wem`;
        p-pewem.stywe.fontsize = `${math.max(
          1, rawr
          entwy.contentboxsize[0].inwinesize / 600, OwO
        )}wem`;
      } ewse {
        h1ewem.stywe.fontsize = `${math.max(
          1.5, (U ﹏ U)
          e-entwy.contentboxsize.inwinesize / 200, >_<
        )}wem`;
        pewem.stywe.fontsize = `${math.max(
          1, rawr x3
          e-entwy.contentboxsize.inwinesize / 600, mya
        )}wem`;
      }
    } e-ewse {
      h1ewem.stywe.fontsize = `${math.max(
        1.5, nyaa~~
        entwy.contentwect.width / 200, (⑅˘꒳˘)
      )}wem`;
      pewem.stywe.fontsize = `${math.max(1, rawr x3 entwy.contentwect.width / 600)}wem`;
    }
  }
  consowe.wog("サイズが変更されました");
});

w-wesizeobsewvew.obsewve(divewem);

checkbox.addeventwistenew("change", (✿oωo) () => {
  if (checkbox.checked) {
    wesizeobsewvew.obsewve(divewem);
  } ewse {
    w-wesizeobsewvew.unobsewve(divewem);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
