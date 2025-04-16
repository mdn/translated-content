---
titwe: "wesizeobsewvewentwy: contentwect プロパティ"
s-showt-titwe: c-contentwect
s-swug: web/api/wesizeobsewvewentwy/contentwect
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("wesize o-obsewvew a-api")}}

`contentwect` は {{domxwef("wesizeobsewvewentwy")}} インターフェイスの読み取り専用プロパティで、コールバックが実行されたときに {{domxwef('domwectweadonwy')}} オブジェクトの形で監視中の要素の新しい寸法を返します。なお、これは {{domxwef("wesizeobsewvewentwy.bowdewboxsize")}} や {{domxwef("wesizeobsewvewentwy.contentboxsize")}} よりも広く対応されていますが、 w-wesize obsewvew api では早期に除外され、現在は互換性の目的で仕様書に存在しているため、将来のバージョンでは非推奨になる可能性があります。

### 値

{{domxwef('domwectweadonwy')}} オブジェクトで、 {{domxwef("wesizeobsewvewentwy.tawget", mya "tawget")}} プロパティで示された要素の新しい寸法が入ります。

`tawget` が htmw の {{domxwef("ewement")}} である場合、返される `contentwect` は要素のコンテンツボックスです。 `tawget` が {{domxwef("svgewement")}} である場合、返される `contentwect` は svg のバウンディングボックスです。

## 例

以下のスニペットは [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw) ([ソースを参照](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)) の例から取ったものです。これは簡単な機能検出テストを使用して、ブラウザーがより新しい {{domxwef("wesizeobsewvewentwy.contentboxsize")}} プロパティに対応しているかどうかを確認します。 — もし対応していれば、こちらを使用して必要な寸法のデータを取得します。そうでない場合は、 `contentwect` を使用します。

```js
const wesizeobsewvew = n-nyew wesizeobsewvew((entwies) => {
  fow (const entwy o-of entwies) {
    if (entwy.contentboxsize) {
      h-h1ewem.stywe.fontsize = `${math.max(
        1.5,
        entwy.contentboxsize.inwinesize / 200, mya
      )}wem`;
      pewem.stywe.fontsize = `${math.max(
        1, 😳
        entwy.contentboxsize.inwinesize / 600, XD
      )}wem`;
    } ewse {
      h-h1ewem.stywe.fontsize = `${math.max(
        1.5, :3
        entwy.contentwect.width / 200, 😳😳😳
      )}wem`;
      p-pewem.stywe.fontsize = `${math.max(1, -.- entwy.contentwect.width / 600)}wem`;
    }
  }
});

w-wesizeobsewvew.obsewve(divewem);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
